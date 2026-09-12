const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'foods', 'cookingData.ts');
let content = fs.readFileSync(filePath, 'utf8');

const markerStart = 'export const UNIVERSAL_COOKING_GLOSSARY: CookingTerm[] = [';
const glossaryEndIdx = content.indexOf('];\n\n// ═══════════════════════════════════════════════════════════════════════════════');
if (glossaryEndIdx === -1) {
  console.error('Could not find glossary end marker');
  process.exit(1);
}

const patternSynthMarker = '// ── Intelligent Culinary Pattern Synthesizer for all other foods ──────────';
const synthIdx = content.indexOf(patternSynthMarker);
if (synthIdx === -1) {
  console.error('Could not find pattern synthesizer marker');
  process.exit(1);
}

const newMiddle = `];

// ═══════════════════════════════════════════════════════════════════════════════
// DETAILED DISH PROFILES & MASTER RECIPE REGISTRY
// ═══════════════════════════════════════════════════════════════════════════════

export const DETAILED_PROFILES: Record<string, Partial<CookingGuideData>> = {};

// ═══════════════════════════════════════════════════════════════════════════════
// MASTER PREPARATION DATA RESOLVER
// ═══════════════════════════════════════════════════════════════════════════════

export function getCookingDetails(food: Food, targetServings: number = food.servings || 2): CookingGuideData {
  // 1. Resolve from Master 189-Recipe Authentic Database
  const masterRecipe: DetailedRecipe | undefined = getDetailedRecipe(food.id);

  if (masterRecipe) {
    const originalServings = masterRecipe.servings || food.servings || 2;
    const scale = targetServings / originalServings;

    const scaledEssentials = (masterRecipe.essentialIngredients || []).map((ing) => scaleIngredient(ing, scale));
    const scaledOptionals = (masterRecipe.optionalIngredients || []).map((ing) => scaleIngredient(ing, scale));

    const equipmentList = (masterRecipe.equipment || []).map((eq) => (typeof eq === 'string' ? eq : eq.name));
    const equipmentPurposeList = (masterRecipe.equipment || []).map((eq) =>
      typeof eq === 'string'
        ? { name: eq, purpose: 'Essential cooking equipment' }
        : { name: eq.name, purpose: eq.purpose }
    );

    const steps: RecipeStep[] = (masterRecipe.steps || []).map((step, idx) => ({
      ...step,
      step: step.step || idx + 1,
      feel: step.feel || step.textureCheck,
      textureCheck: step.textureCheck || step.feel
    }));

    const troubleshootingList = (masterRecipe.troubleshooting || []).map((t) => ({
      problem: t.problem,
      solution:
        (t as any).solution ||
        (t.whatToDoNow ? \`\${t.whatToDoNow}\${t.howToPrevent ? \` (Prevention: \${t.howToPrevent})\` : ''}\` : ''),
      whatHappened: t.whatHappened,
      whyItHappened: t.whyItHappened,
      whatToDoNow: t.whatToDoNow,
      howToPrevent: t.howToPrevent
    }));

    return {
      servings: targetServings,
      prepTime: masterRecipe.prepTime || food.prepTime || 20,
      cookTime: masterRecipe.cookTime || food.cookTime || 30,
      difficulty: masterRecipe.difficulty || food.difficulty || 'Medium',
      overview: {
        summary: masterRecipe.overview?.summary || food.description,
        appearance: masterRecipe.overview?.appearance || \`Authentic, beautifully plated \${food.name}.\`,
        texture:
          masterRecipe.overview?.texture ||
          (food.texture && food.texture.length > 0 ? food.texture.join(', ') : 'Tender and flavorful'),
        flavor:
          masterRecipe.overview?.flavor ||
          (food.flavorProfile?.primary && food.flavorProfile.primary.length > 0
            ? food.flavorProfile.primary.join(', ')
            : 'Rich and savory'),
        restingTimeMinutes: masterRecipe.overview?.restingTimeMinutes ?? 5
      },
      equipment: equipmentList,
      equipmentPurpose: equipmentPurposeList,
      beforeYouStart: masterRecipe.beforeYouStart || [],
      ingredientPrepGuide: masterRecipe.ingredientPrepGuide || [],
      essentialIngredients: scaledEssentials,
      optionalIngredients: scaledOptionals,
      steps,
      commonMistakes: masterRecipe.commonMistakes || [],
      troubleshooting: troubleshootingList,
      substitutions: masterRecipe.substitutions || [],
      safetyNotes: masterRecipe.safetyNotes || [],
      servingGuide: masterRecipe.servingGuide || {
        restingTime: 'Rest 3–5 minutes before serving.',
        temperature: 'Serve hot and fresh.'
      },
      cookingGlossary:
        masterRecipe.cookingGlossary && masterRecipe.cookingGlossary.length > 0
          ? masterRecipe.cookingGlossary
          : UNIVERSAL_COOKING_GLOSSARY
    };
  }

  // 2. Check Custom Partial Overrides if any exist
  const baseProfile = DETAILED_PROFILES[food.id];
  const scale = targetServings / (food.servings || 2);

  if (baseProfile) {
    const scaledEssentials = (baseProfile.essentialIngredients || []).map((ing) => scaleIngredient(ing, scale));
    const scaledOptionals = (baseProfile.optionalIngredients || []).map((ing) => scaleIngredient(ing, scale));

    return {
      servings: targetServings,
      prepTime: baseProfile.prepTime || food.prepTime || 25,
      cookTime: baseProfile.cookTime || food.cookTime || 35,
      difficulty: baseProfile.difficulty || food.difficulty || 'Medium',
      overview: baseProfile.overview || {
        summary: food.description,
        appearance: \`Authentic, beautifully plated \${food.name}.\`,
        texture: food.texture.join(', ') || 'Tender and flavorful',
        flavor: food.flavorProfile.primary.join(', ') || 'Savory and aromatic',
        restingTimeMinutes: 5
      },
      equipment: baseProfile.equipment || ['Chef knife & board', 'Heavy skillet', 'Wooden spoon', 'Measuring spoons'],
      equipmentPurpose: baseProfile.equipmentPurpose || [],
      beforeYouStart: baseProfile.beforeYouStart || [
        { task: \`Measure and prep all fresh ingredients for \${food.name}.\`, durationMinutes: 10 },
        { task: 'Prepare cutting board, chef knife, and cooking equipment.', durationMinutes: 5 }
      ],
      ingredientPrepGuide: baseProfile.ingredientPrepGuide || [],
      essentialIngredients: scaledEssentials,
      optionalIngredients: scaledOptionals,
      steps: baseProfile.steps || food.steps || [],
      commonMistakes: baseProfile.commonMistakes || [
        { mistake: 'Cooking at excessive heat.', remedy: 'Regulate burner to prevent burning aromatics and maintain steady gentle simmer.' }
      ],
      troubleshooting: baseProfile.troubleshooting || [
        { problem: 'Sauce reduced too much?', solution: 'Splash in 2–3 tablespoons of warm broth or water and stir gently to loosen.' }
      ],
      substitutions: baseProfile.substitutions || [
        { original: food.mainIngredients?.[0] || 'Main protein', substitute: 'Tofu or hearty mushrooms', impact: 'Provides great texture for a plant-forward option.' }
      ],
      safetyNotes: baseProfile.safetyNotes || [
        'Keep cooking surfaces clean and wipe down cutting boards between uses.',
        'Handle hot pans and liquids with heat-resistant oven mitts.'
      ],
      servingGuide: baseProfile.servingGuide || {
        restingTime: 'Rest 3–5 minutes before serving.',
        temperature: 'Serve hot and fresh.'
      },
      cookingGlossary: baseProfile.cookingGlossary || UNIVERSAL_COOKING_GLOSSARY
    };
  }

  `;

content = content.slice(0, glossaryEndIdx) + newMiddle + content.slice(synthIdx);
fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated cookingData.ts!');
