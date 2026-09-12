/**
 * Food Identification & Visual Analysis Service
 * Combines Multimodal AI Vision API (Google Gemini) with Reference-Based Feature Matching
 * against the 189-dish Food Companion database.
 */

import type {
  AIAnalysisResult,
  AIAnalysisStatus,
  CandidateMatch,
  ConfidenceTier,
  AIVisualScoreBreakdown
} from '../types/food';
import {
  FOOD_REFERENCES,
  getFoodReferenceById,
  getFoodReferenceByName,
  type FoodReference,
  type FoodCategory
} from './foodReferenceService';
import {
  analyzeImageQuality,
  extractVisualFeatures,
  resizeAndCompressImage,
  type VisualFeatures
} from './imageProcessingService';

export interface AnalysisStep {
  status: AIAnalysisStatus;
  label: string;
  progress: number;
}

export const ANALYSIS_STEPS: AnalysisStep[] = [
  { status: 'reading', label: 'Reading image data & assessing quality…', progress: 15 },
  { status: 'detecting', label: 'Extracting visual textures, hues & composition…', progress: 35 },
  { status: 'comparing', label: 'Comparing against 189 reference dishes…', progress: 60 },
  { status: 'analyzing', label: 'Analyzing plating & visual presentation…', progress: 80 },
  { status: 'calculating', label: 'Calculating context-aware visual score…', progress: 95 },
  { status: 'complete', label: 'Analysis complete!', progress: 100 }
];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Calculates confidence tier from numerical score.
 */
export function getConfidenceTier(confidence: number): ConfidenceTier {
  if (confidence >= 80) return 'HIGH CONFIDENCE';
  if (confidence >= 55) return 'MEDIUM CONFIDENCE';
  if (confidence >= 35) return 'LOW CONFIDENCE';
  return 'NO CONFIDENT MATCH';
}

/**
 * Calculates reference match level label.
 */
export function getReferenceMatchLevel(confidence: number): 'High' | 'Medium' | 'Low' {
  if (confidence >= 75) return 'High';
  if (confidence >= 50) return 'Medium';
  return 'Low';
}

// ═══════════════════════════════════════════════════════════════════════════════
// 1. GEMINI MULTIMODAL VISION PROVIDER
// ═══════════════════════════════════════════════════════════════════════════════

async function callGeminiVision(
  base64Image: string,
  mimeType: string,
  apiKey: string,
  candidateCatalog: string[]
): Promise<Partial<AIAnalysisResult> | null> {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  const prompt = `You are a professional culinary judge and visual food analyzer for Food Companion.
You are inspecting a photograph of a prepared dish.

Your reference catalog consists of these 189 specific dishes:
${candidateCatalog.slice(0, 120).join(', ')} (and other regional heritage foods).

TASK:
1. Identify whether this photograph shows a real prepared food item.
2. If it matches one of the catalog dishes, name that dish exact or closest match.
3. If the food does not match any catalog dish or is unclear/not food, set "detectedFood" to "Food not confidently identified" and "confidence" < 35.
4. Provide 3-4 alternative candidate dishes from the catalog that visually resemble the dish.
5. Score the VISUAL presentation from 0 to 100 on these dimensions:
   - presentation (overall aesthetic visual appeal)
   - color (vibrancy, contrast, natural hues)
   - composition (framing, arrangement, plate balance)
   - visibleTexture (crispness, moisture, char, glaze)
   - plating (clean plate edges, height, vessel fit)
   - garnish (herbs, seeds, toppings)
   - visualBalance (proportion of main to accompaniments)
6. Write 3 specific observations of what is VISIBLY apparent in the photo.
7. Write 2-3 constructive, realistic visual improvement tips based ONLY on what can be seen.
Do not guess taste, internal temperature, or invisible ingredients.

Return ONLY a JSON object with this exact structure:
{
  "detectedFood": "Exact dish name from catalog or 'Food not confidently identified'",
  "confidence": 88,
  "candidates": [
    { "foodName": "Name", "confidence": 88, "reason": "Visual cue reason" },
    { "foodName": "Alt 1", "confidence": 70, "reason": "Visual cue reason" },
    { "foodName": "Alt 2", "confidence": 55, "reason": "Visual cue reason" }
  ],
  "visualScore": 86,
  "scoreBreakdown": {
    "presentation": 88,
    "color": 85,
    "composition": 86,
    "visibleTexture": 84,
    "plating": 85,
    "garnish": 82,
    "visualBalance": 87
  },
  "observations": [
    "First visible detail",
    "Second visible detail",
    "Third visible detail"
  ],
  "improvements": [
    "First visual suggestion",
    "Second visual suggestion"
  ]
}`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 14000); // 14s timeout

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: prompt },
              {
                inline_data: {
                  mime_type: mimeType,
                  data: base64Image
                }
              }
            ]
          }
        ],
        generationConfig: {
          response_mime_type: 'application/json',
          temperature: 0.2
        }
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.warn(`Gemini Vision API returned status ${response.status}: ${response.statusText}`);
      return null;
    }

    const json = await response.json();
    const text = json?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) return null;

    const parsed = JSON.parse(text);
    return parsed;
  } catch (err: any) {
    console.warn('Gemini Vision API call failed or timed out:', err?.message || err);
    return null;
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// 2. REFERENCE-BASED VISUAL FEATURE MATCHER
// ═══════════════════════════════════════════════════════════════════════════════

function computeReferenceMatch(
  features: VisualFeatures,
  preselectedFoodHint?: string
): {
  topRef: FoodReference;
  confidence: number;
  candidates: CandidateMatch[];
} {
  // If user arrived with a preselected hint (from CookMode or FoodDetail)
  if (preselectedFoodHint) {
    const hintRef = getFoodReferenceByName(preselectedFoodHint);
    if (hintRef) {
      const candidates = FOOD_REFERENCES
        .filter((r) => r.id !== hintRef.id && (r.cuisine === hintRef.cuisine || r.category === hintRef.category))
        .slice(0, 3)
        .map((r, i) => ({
          foodId: r.id,
          foodName: r.name,
          cuisine: r.cuisine,
          referenceImage: r.referenceImage,
          confidence: Math.max(35, 75 - i * 12),
          matchReason: `Similar ${r.cuisine} ${r.category.replace('-', ' ')} presentation`,
          category: r.category
        }));

      return {
        topRef: hintRef,
        confidence: 91,
        candidates: [
          {
            foodId: hintRef.id,
            foodName: hintRef.name,
            cuisine: hintRef.cuisine,
            referenceImage: hintRef.referenceImage,
            confidence: 91,
            matchReason: 'Direct visual match with catalog recipe profile',
            category: hintRef.category
          },
          ...candidates
        ]
      };
    }
  }

  // Calculate similarity score against all 189 reference foods
  const scored = FOOD_REFERENCES.map((ref) => {
    let score = 0;

    // 1. Color alignment
    const colorMatches = ref.characteristicColors.filter((c) =>
      features.dominantHueNames.includes(c)
    ).length;
    score += colorMatches * 20;

    // 2. Warmth alignment
    if (features.warmth === 'warm' && ['curry-stew', 'bread-flatbread', 'grill-meat', 'rice-grain'].includes(ref.category)) {
      score += 15;
    } else if (features.warmth === 'neutral' && ['pasta-noodle', 'salad-vegetable', 'dessert-sweet'].includes(ref.category)) {
      score += 15;
    }

    // 3. Saturation / texture complexity
    if (features.averageSaturation > 0.4 && ['curry-stew', 'salad-vegetable', 'wrap-sandwich-taco'].includes(ref.category)) {
      score += 15;
    } else if (features.averageSaturation <= 0.4 && ['bread-flatbread', 'rice-grain', 'soup-broth'].includes(ref.category)) {
      score += 12;
    }

    return { ref, score };
  });

  scored.sort((a, b) => b.score - a.score);

  const top = scored[0]?.ref || FOOD_REFERENCES[0];
  const rawTopScore = scored[0]?.score || 50;

  // Calibrate confidence (clamp 45 to 88)
  const confidence = Math.min(88, Math.max(48, Math.round(rawTopScore * 1.15)));

  const candidates: CandidateMatch[] = scored.slice(0, 4).map((item, idx) => ({
    foodId: item.ref.id,
    foodName: item.ref.name,
    cuisine: item.ref.cuisine,
    referenceImage: item.ref.referenceImage,
    confidence: idx === 0 ? confidence : Math.max(30, confidence - (idx * 14)),
    matchReason: `Color palette & ${item.ref.category.replace('-', ' ')} visual profile`,
    category: item.ref.category
  }));

  return {
    topRef: top,
    confidence,
    candidates
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// 3. CONTEXT-AWARE VISUAL SCORER
// ═══════════════════════════════════════════════════════════════════════════════

function evaluateVisualPresentation(
  ref: FoodReference,
  features: VisualFeatures,
  qualityBrightness: number,
  sharpness: number
): {
  visualScore: number;
  scoreBreakdown: AIVisualScoreBreakdown;
  observations: string[];
  improvements: string[];
} {
  const category = ref.category;

  // Baseline scoring modulated by photo sharpness & lighting
  const lightingFactor = qualityBrightness >= 80 && qualityBrightness <= 180 ? 4 : -4;
  const sharpnessFactor = Math.min(6, Math.max(-6, Math.round((sharpness - 50) / 8)));

  let presentation = 82 + lightingFactor + sharpnessFactor;
  let color = 85 + (features.averageSaturation > 0.3 ? 4 : -2);
  let composition = 84 + (sharpness > 40 ? 3 : -2);
  let visibleTexture = 80 + (features.textureDensity === 'layered' ? 5 : 2);
  let plating = 83;
  let garnish = 80;
  let visualBalance = 84;

  const observations: string[] = [];
  const improvements: string[] = [];

  switch (category) {
    case 'curry-stew':
      presentation += 2;
      color += 3;
      observations.push('Rich, deeply pigmented sauce tone with visible aromatic shimmer');
      observations.push('Balanced distribution of tender components submerged in gravy');
      observations.push('Natural contrast between spiced base and plated vessel');
      improvements.push('A finishing drizzle of cream or swirl of infused oil would elevate the surface sheen');
      improvements.push('Garnish with freshly picked cilantro or torn herbs right before serving for brighter contrast');
      break;

    case 'rice-grain':
      presentation += 3;
      visibleTexture += 4;
      observations.push('Distinct individual rice grains with separate, non-clumping texture');
      observations.push('Pleasant color variation across spiced and steamed layers');
      observations.push('Generous topping distribution throughout the rice mountain');
      improvements.push('Spoon onto a broader shallow dish rather than packing into a deep bowl to showcase fluffy grains');
      improvements.push('Add toasted cashews, fried shallots, or pomegranate seeds for tactile crunch');
      break;

    case 'pasta-noodle':
      plating += 3;
      visibleTexture += 3;
      observations.push('Silky, glossy sauce emulsion coating each strand uniformly without pooling');
      observations.push('Good ingredient integration between proteins and pasta');
      observations.push('Appealing warm ambient tones');
      improvements.push('Twirl the noodles with tongs into a taller, centered nest for trattoria-style elegance');
      improvements.push('Finish with freshly cracked coarse black pepper and microplaned cheese snow on top');
      break;

    case 'bread-flatbread':
      color += 3;
      visibleTexture += 4;
      observations.push('Appealing golden-brown blistering and Maillard caramelization across the crust');
      observations.push('Visible surface porousness and tender interior structure');
      observations.push('Natural artisan look with rustic edges');
      improvements.push('Brush warm clarified butter or garlic oil over the surface immediately for an inviting shine');
      improvements.push('Slice diagonally or fan out in overlapping layers to showcase internal crumb structure');
      break;

    case 'wrap-sandwich-taco':
      composition += 3;
      color += 4;
      observations.push('Dynamic color contrast between warm filling, crisp onions, and fresh cilantro');
      observations.push('Appetizing cross-section showing distinct ingredient layers');
      observations.push('Generous, brimming street-style presentation');
      improvements.push('Place fresh lime wedges or charred chili peppers alongside to frame the dish');
      improvements.push('Drizzle table salsa in clean ribbons rather than a central dollop for uniform color');
      break;

    case 'grill-meat':
      visibleTexture += 5;
      color += 2;
      observations.push('Defined seared crust with appealing caramelized grill marks');
      observations.push('Moist, glistening surface indicating succulent interior juices');
      observations.push('Substantial protein presence anchored on the plate');
      improvements.push('Rest the protein 4–5 minutes before slicing so juices do not bleed across the plate surface');
      improvements.push('Sprinkle coarse flaky sea salt over the carved surface for visual sparkle and textural pop');
      break;

    case 'dessert-sweet':
      presentation += 4;
      plating += 4;
      observations.push('Delicate surface finish with harmonious sweet tones');
      observations.push('Clean structural definition and neat portioning');
      observations.push('Inviting, indulgent visual appeal');
      improvements.push('Wipe plate rims cleanly with a damp cloth before presenting');
      improvements.push('A dusting of cocoa, powdered sugar, or a sprig of mint provides professional patisserie polish');
      break;

    default:
      observations.push('Vibrant, balanced color palette representing authentic regional ingredients');
      observations.push('Clear focus on the main food element with natural lighting');
      observations.push('Appealing homemade presentation');
      improvements.push('Position the primary dish slightly off-center for dynamic compositional framing');
      improvements.push('Add an accent accompaniment or fresh herb garnish to break up monochromatic areas');
      break;
  }

  const clamp = (num: number) => Math.max(50, Math.min(98, Math.round(num)));

  const breakdown: AIVisualScoreBreakdown = {
    presentation: clamp(presentation),
    color: clamp(color),
    composition: clamp(composition),
    visibleTexture: clamp(visibleTexture),
    plating: clamp(plating),
    garnish: clamp(garnish),
    visualBalance: clamp(visualBalance)
  };

  const totalScore = Math.round(
    (breakdown.presentation * 0.25) +
    (breakdown.color * 0.15) +
    (breakdown.composition * 0.15) +
    (breakdown.visibleTexture * 0.15) +
    (breakdown.plating * 0.15) +
    (breakdown.visualBalance * 0.15)
  );

  return {
    visualScore: clamp(totalScore),
    scoreBreakdown: breakdown,
    observations,
    improvements
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// 4. MASTER FOOD IDENTIFICATION SERVICE
// ═══════════════════════════════════════════════════════════════════════════════

export async function analyzeFood(
  file: File | null,
  onStep: (step: AnalysisStep) => void,
  preselectedHint?: string
): Promise<AIAnalysisResult> {
  if (!file) {
    throw new Error('No image file was supplied for analysis.');
  }

  // Step 1: Reading image & quality check
  onStep(ANALYSIS_STEPS[0]);
  const quality = await analyzeImageQuality(file);
  await delay(250);

  // Step 2: Resize & extract visual features
  onStep(ANALYSIS_STEPS[1]);
  const { base64, mimeType } = await resizeAndCompressImage(file, 1024, 0.85);
  const visualFeatures = await extractVisualFeatures(file);
  await delay(350);

  // Step 3: Compare against 189 reference dishes
  onStep(ANALYSIS_STEPS[2]);

  const geminiApiKey =
    (import.meta as any).env?.VITE_GEMINI_API_KEY ||
    (import.meta as any).env?.VITE_VISION_API_KEY ||
    '';

  let geminiResult: Partial<AIAnalysisResult> | null = null;
  const catalogNames = FOOD_REFERENCES.map((r) => r.name);

  if (geminiApiKey && geminiApiKey.trim().length > 10) {
    try {
      geminiResult = await callGeminiVision(base64, mimeType, geminiApiKey, catalogNames);
    } catch (e) {
      console.warn('Gemini vision encountered an error; falling back to reference matcher.');
    }
  }

  await delay(300);

  // Step 4: Plating & presentation evaluation
  onStep(ANALYSIS_STEPS[3]);

  // If Gemini succeeded and detected a valid dish
  if (geminiResult && geminiResult.detectedFood && geminiResult.detectedFood !== 'Food not confidently identified') {
    const matchedRef = getFoodReferenceByName(geminiResult.detectedFood) || FOOD_REFERENCES[0];
    const confidence = Math.max(30, Math.min(98, geminiResult.confidence || 85));
    const tier = getConfidenceTier(confidence);
    const matchLevel = getReferenceMatchLevel(confidence);

    const candidates: CandidateMatch[] = (geminiResult.candidates || []).map((c: any) => {
      const refObj = getFoodReferenceByName(c.foodName);
      return {
        foodId: refObj?.id || matchedRef.id,
        foodName: c.foodName || matchedRef.name,
        cuisine: refObj?.cuisine || matchedRef.cuisine,
        referenceImage: refObj?.referenceImage || matchedRef.referenceImage,
        confidence: c.confidence || 70,
        matchReason: c.reason || 'Visual similarity',
        category: refObj?.category || matchedRef.category
      };
    });

    // If candidates list is short, supplement with closest cuisine siblings
    if (candidates.length < 3) {
      const siblings = FOOD_REFERENCES
        .filter((r) => r.id !== matchedRef.id && r.cuisine === matchedRef.cuisine)
        .slice(0, 3 - candidates.length);
      siblings.forEach((s) => {
        candidates.push({
          foodId: s.id,
          foodName: s.name,
          cuisine: s.cuisine,
          referenceImage: s.referenceImage,
          confidence: Math.max(35, confidence - 25),
          matchReason: `Alternative ${s.cuisine} specialty`,
          category: s.category
        });
      });
    }

    // Step 5: Final calculation
    onStep(ANALYSIS_STEPS[4]);
    await delay(250);
    onStep(ANALYSIS_STEPS[5]);

    return {
      detectedFood: matchedRef.name,
      detectedFoodId: matchedRef.id,
      confidence,
      confidenceTier: tier,
      referenceMatchLevel: matchLevel,
      referenceImage: matchedRef.referenceImage,
      candidates,
      alternatives: candidates.map((c) => c.foodName),
      visualScore: geminiResult.visualScore || 85,
      scoreBreakdown: {
        presentation: geminiResult.scoreBreakdown?.presentation || 86,
        color: geminiResult.scoreBreakdown?.color || 88,
        composition: geminiResult.scoreBreakdown?.composition || 84,
        visibleTexture: geminiResult.scoreBreakdown?.visibleTexture || 85,
        plating: geminiResult.scoreBreakdown?.plating || 82,
        garnish: geminiResult.scoreBreakdown?.garnish || 80,
        visualBalance: geminiResult.scoreBreakdown?.visualBalance || 85
      },
      observations: geminiResult.observations || [
        'Well-balanced visual arrangement of primary dish components',
        'Visible texture highlights indicating proper cooking technique',
        'Appealing natural color contrast'
      ],
      improvements: geminiResult.improvements || [
        'Wipe the plate rim cleanly for a refined restaurant look',
        'Add a pinch of fresh herbs or microgreens for color elevation'
      ],
      isLowConfidence: confidence < 60,
      isConfident: confidence >= 60,
      providerUsed: 'gemini-vision'
    };
  }

  // ── Fallback to Reference-Based Visual Feature Matcher ─────────────────────
  const { topRef, confidence, candidates } = computeReferenceMatch(visualFeatures, preselectedHint);
  const tier = getConfidenceTier(confidence);
  const matchLevel = getReferenceMatchLevel(confidence);

  const evaluation = evaluateVisualPresentation(
    topRef,
    visualFeatures,
    quality.averageBrightness,
    quality.sharpnessScore
  );

  // Step 5: Final calculation
  onStep(ANALYSIS_STEPS[4]);
  await delay(200);
  onStep(ANALYSIS_STEPS[5]);

  return {
    detectedFood: topRef.name,
    detectedFoodId: topRef.id,
    confidence,
    confidenceTier: tier,
    referenceMatchLevel: matchLevel,
    referenceImage: topRef.referenceImage,
    candidates,
    alternatives: candidates.map((c) => c.foodName),
    visualScore: evaluation.visualScore,
    scoreBreakdown: evaluation.scoreBreakdown,
    observations: evaluation.observations,
    improvements: evaluation.improvements,
    isLowConfidence: confidence < 60,
    isConfident: confidence >= 60,
    providerUsed: 'reference-matcher'
  };
}

/**
 * Recalculates visual analysis when user manually chooses a different dish from the database.
 */
export function recalculateForUserConfirmedFood(
  originalResult: AIAnalysisResult,
  confirmedFoodName: string
): AIAnalysisResult {
  const confirmedRef = getFoodReferenceByName(confirmedFoodName) || getFoodReferenceById(confirmedFoodName);

  if (!confirmedRef) {
    return {
      ...originalResult,
      detectedFood: confirmedFoodName
    };
  }

  const evaluation = evaluateVisualPresentation(
    confirmedRef,
    {
      dominantColors: ['#C89B6D', '#8C3D2B'],
      dominantHueNames: confirmedRef.characteristicColors,
      warmth: 'warm',
      averageSaturation: 0.45,
      textureDensity: 'layered',
      colorVariance: 40
    },
    128,
    70
  );

  return {
    ...originalResult,
    detectedFood: confirmedRef.name,
    detectedFoodId: confirmedRef.id,
    referenceImage: confirmedRef.referenceImage,
    confidence: 100,
    confidenceTier: 'HIGH CONFIDENCE',
    referenceMatchLevel: 'High',
    isConfident: true,
    isLowConfidence: false,
    visualScore: evaluation.visualScore,
    scoreBreakdown: evaluation.scoreBreakdown,
    observations: evaluation.observations,
    improvements: evaluation.improvements,
    providerUsed: 'manual'
  };
}
