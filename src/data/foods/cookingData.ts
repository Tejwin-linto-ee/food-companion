import type { Food, RecipeStep, Ingredient, PreparationTask, TroubleshootingItem, SubstitutionItem, CookingTerm } from '../../types/food';
import { MASTER_RECIPES, getDetailedRecipe, type DetailedRecipe } from '../recipes';

export interface CookingOverview {
  summary: string;
  appearance: string;
  texture: string;
  flavor: string;
  restingTimeMinutes?: number;
}

export interface IngredientPrepItem {
  item: string;
  technique: string;
}

export interface CookingGuideData {
  servings: number;
  prepTime: number;
  cookTime: number;
  difficulty: string;
  overview: CookingOverview;
  equipment: string[];
  equipmentPurpose?: { name: string; purpose: string }[];
  beforeYouStart: PreparationTask[];
  ingredientPrepGuide: IngredientPrepItem[];
  essentialIngredients: (Ingredient & { prep?: string; metric?: string; imperial?: string; common?: string })[];
  optionalIngredients: (Ingredient & { prep?: string; metric?: string; imperial?: string; common?: string })[];
  steps: RecipeStep[];
  commonMistakes: { mistake: string; remedy: string }[];
  troubleshooting: (TroubleshootingItem & {
    whatHappened?: string;
    whyItHappened?: string;
    whatToDoNow?: string;
    howToPrevent?: string;
  })[];
  substitutions: SubstitutionItem[];
  safetyNotes: string[];
  servingGuide: {
    restingTime?: string;
    garnishing?: string;
    plating?: string;
    temperature?: string;
    accompaniments?: string;
  };
  cookingGlossary: CookingTerm[];
}

// ═══════════════════════════════════════════════════════════════════════════════
// UNIVERSAL COOKING GLOSSARY
// ═══════════════════════════════════════════════════════════════════════════════

export { UNIVERSAL_COOKING_GLOSSARY } from '../recipes/glossary';

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
      see: step.see || step.visualCues,
      visualCues: step.visualCues || step.see,
      donenessCue: step.donenessCue || step.visualCues,
      feel: step.feel || step.textureCheck,
      textureCheck: step.textureCheck || step.feel
    }));

    const troubleshootingList = (masterRecipe.troubleshooting || []).map((t) => ({
      problem: t.problem,
      solution:
        (t as any).solution ||
        (t.whatToDoNow ? `${t.whatToDoNow}${t.howToPrevent ? ` (Prevention: ${t.howToPrevent})` : ''}` : ''),
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
        appearance: masterRecipe.overview?.appearance || `Authentic, beautifully plated ${food.name}.`,
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
        appearance: `Authentic, beautifully plated ${food.name}.`,
        texture: food.texture.join(', ') || 'Tender and flavorful',
        flavor: food.flavorProfile.primary.join(', ') || 'Savory and aromatic',
        restingTimeMinutes: 5
      },
      equipment: baseProfile.equipment || ['Chef knife & board', 'Heavy skillet', 'Wooden spoon', 'Measuring spoons'],
      equipmentPurpose: baseProfile.equipmentPurpose || [],
      beforeYouStart: baseProfile.beforeYouStart || [
        { task: `Measure and prep all fresh ingredients for ${food.name}.`, durationMinutes: 10 },
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

  // ── Intelligent Culinary Pattern Synthesizer for all other foods ──────────
  const isCurryOrStew = food.name.toLowerCase().match(/(curry|masala|dal|korma|stew|gravy|makhani|saag|vindaloo|paneer|chicken)/i);
  const isPastaOrNoodle = food.name.toLowerCase().match(/(pasta|spaghetti|noodles|ramen|udon|soba|chow|pad|linguine|penne|carbonara|bolognese)/i);
  const isBreadOrPastry = food.name.toLowerCase().match(/(roti|naan|paratha|bread|pizza|focaccia|croissant|pie|baguette)/i);

  const scaledEssentials = (food.ingredients || []).map((ing) => {
    return scaleIngredient({
      name: ing.name,
      prep: 'prepped and measured',
      amount: ing.amount || '1 portion',
      metric: ing.amount || '100g',
      imperial: '3.5 oz',
      common: '1 portion'
    }, scale);
  });

  const steps: RecipeStep[] = [
    {
      step: 1,
      title: 'PREPARATION & AROMATIC MISE EN PLACE',
      whatYouNeed: ['Aromatics (onions, garlic, ginger or herbs)', '2 tbsp cooking fat / oil', 'Heavy skillet or pot', 'Chef knife & board'],
      description: `Place your cooking pan on the stove over medium heat before adding oil. Warm 2 tablespoons of oil for 45 seconds until shimmering. Add your chopped aromatics and spread them across the pan with a wooden spoon. Sauté steadily for 5 to 7 minutes.`,
      howToDoIt: 'Stir every 30 to 45 seconds. The aromatics will soften, turn translucent, and develop light golden edges without scorching.',
      heat: 'Medium Heat',
      heatDescription: 'Gentle, steady sizzle without aggressive spitting or smoke.',
      duration: 7,
      donenessCue: 'Aromatics are completely tender, translucent, and sweet smelling with faint golden edges.',
      see: 'Color transitions from opaque white to translucent, then faint golden.',
      hear: 'A quiet, rhythmic, gentle sizzle.',
      smell: 'Sweet, rich roasted aroma blooming in the warm oil.',
      feel: 'Tender with no hard crunch when pressed with a wooden spoon.',
      lookFor: 'Regulate heat if you see dark spots forming too quickly; lower flame to medium-low.',
      whatShouldThisLookLike: 'Soft, glossy, golden aromatics evenly distributed across the bottom of the pan.',
      tip: 'Slow sweating over medium heat dissolves harsh sulfur compounds and creates natural sweetness.',
      warning: 'Never turn heat to high to rush onions or garlic; burnt garlic turns permanently bitter and ruins the dish.',
      moveOnWhen: 'Aromatics are translucent and tender with golden tips.',
      quickInstructions: 'Sauté aromatics in hot oil over medium heat for 5–7 min until translucent and soft.'
    },
    {
      step: 2,
      title: 'LAYER FLAVORS AND BLOOM SPICES',
      whatYouNeed: ['Main ingredients', 'Spice blend & seasonings', 'Wooden spatula'],
      description: `Incorporate the core ingredients and measured spices for ${food.name}. Sauté and toss continuously for 6 to 8 minutes over medium-high heat.`,
      howToDoIt: 'Use a folding motion with your spatula so the hot oil coats all surfaces, blooming the spices and searing the exterior of the ingredients.',
      heat: 'Medium-High Heat',
      heatDescription: 'Lively sizzle as food sears and moisture begins releasing.',
      duration: 8,
      donenessCue: 'Ingredients take on color and are evenly coated in a fragrant spice-infused glaze.',
      see: 'Spices bloom into vibrant colors; food develops light browning.',
      hear: 'Steady, energetic sizzle.',
      smell: 'Complex, toasted aroma of spices and roasted components.',
      feel: 'Ingredients firm up slightly as surface proteins sear.',
      tip: 'Toasting spices in oil unlocks fat-soluble aromatics that water-based boiling cannot release.',
      whatShouldThisLookLike: 'Ingredients coated in a glistening, richly colored spice base with no dry powder clumps remaining.',
      moveOnWhen: 'All ingredients are coated and spices have bloomed for at least 1 full minute.',
      quickInstructions: 'Add core ingredients and spices; toss over medium-high for 6–8 min until fragrant and lightly browned.'
    },
    {
      step: 3,
      title: 'SIMMER AND INFUSE TO TENDER PERFECTION',
      whatYouNeed: ['Cooking liquid (broth, water, or coconut milk)', 'Lid for pot / skillet'],
      description: `Add the specified cooking liquid to the pan. Bring to a gentle boil, then lower heat to medium-low, cover with lid, and allow to simmer gently for 15 to 20 minutes.`,
      howToDoIt: 'Keep heat low so small, lazy bubbles break on the surface. Stir occasionally to ensure nothing catches on the bottom.',
      heat: 'Low to Medium-Low Heat',
      heatDescription: 'Gentle, lazy simmer with occasional bubbling.',
      duration: 18,
      donenessCue: 'Main ingredients are fork-tender and the liquid has reduced into a harmonious, rich sauce.',
      see: 'Liquid thickens, reduces, and develops a glossy sheen.',
      hear: 'Soft, gentle simmer.',
      smell: 'Deep, rounded, harmonious aroma filling the kitchen.',
      feel: 'Ingredients yield effortlessly when probed with a fork.',
      lookFor: 'Sauce should coat the back of a spoon cleanly.',
      tip: 'Gentle simmering tenderizes proteins and allows complex flavors to integrate seamlessly.',
      whatShouldThisLookLike: 'A simmering, rich sauce with tender ingredients cooked through.',
      moveOnWhen: 'Food is fork-tender and sauce has reached your preferred consistency.',
      quickInstructions: 'Add liquid, bring to a simmer, cover, and cook on low for 15–20 min until fork-tender.'
    },
    {
      step: 4,
      title: 'RESTING, SEASONING CHECK & SERVING',
      whatYouNeed: ['Tasting spoon', 'Fresh herbs / garnish', 'Serving plate'],
      description: `Turn off heat. Taste the sauce with a spoon: adjust with a tiny pinch of sea salt, a squeeze of fresh lemon, or fresh herbs as desired. Let rest for 3 to 5 minutes before serving.`,
      howToDoIt: 'Resting lets the internal heat settle and flavors harmonize. Spoon into warm bowls and garnish.',
      heat: 'No Heat (Off Stove)',
      heatDescription: 'Resting away from heat.',
      duration: 5,
      donenessCue: 'Flavors are balanced, sauce is rich and glossy, and food is at ideal serving temperature.',
      see: 'Glistening presentation with vibrant fresh herb garnishes.',
      smell: 'Fresh herbal brightness contrasting the deep cooked base.',
      tip: 'A tiny squeeze of fresh citrus right at the end brightens all the cooked flavors.',
      whatShouldThisLookLike: 'A beautifully composed dish ready to be served hot.',
      moveOnWhen: 'Plated, garnished, and ready to enjoy.',
      quickInstructions: 'Remove from heat, taste and adjust salt/citrus, rest 3–5 min, garnish, and serve hot.'
    }
  ];

  return {
    servings: targetServings,
    prepTime: food.prepTime || 20,
    cookTime: food.cookTime || 30,
    difficulty: food.difficulty || 'Medium',
    overview: {
      summary: food.description,
      appearance: `Authentic, flavorful ${food.name}.`,
      texture: food.texture.join(', ') || 'Tender and juicy',
      flavor: food.flavorProfile.primary.join(', ') || 'Rich and savory',
      restingTimeMinutes: 5
    },
    equipment: [
      'Chef’s knife & large cutting board',
      isCurryOrStew ? 'Deep heavy-bottom casserole or Dutch oven' : isPastaOrNoodle ? 'Large pasta pot & colander' : isBreadOrPastry ? 'Baking sheet or cast-iron tawa' : 'Heavy-bottom skillet',
      'Measuring spoons & liquid measuring cup',
      'Wooden spatula or kitchen tongs',
      'Tasting spoons'
    ],
    beforeYouStart: [
      { task: `Finely chop and measure all fresh produce and aromatics for ${food.name}.`, durationMinutes: 10 },
      { task: 'Measure whole and ground spices into a small prep ramekin for seamless seasoning.', durationMinutes: 5 },
      { task: 'Preheat cooking pans or oven to specified cooking temperatures.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'Aromatics', technique: 'Chop uniformly so they cook and caramelize at the same rate without burning.' },
      { item: 'Seasonings', technique: 'Pre-measure into a small bowl so you can add them simultaneously when heat is high.' }
    ],
    essentialIngredients: scaledEssentials,
    optionalIngredients: [],
    steps,
    commonMistakes: [
      { mistake: 'Cooking at excessive heat and burning the aromatics.', remedy: 'Lower flame to medium; burnt garlic or onions turn bitter and ruin the sauce.' },
      { mistake: 'Seasoning only at the very end.', remedy: 'Add salt in layers throughout the cooking process so flavors develop from within.' }
    ],
    troubleshooting: [
      { problem: 'Too salty?', solution: 'Add a splash of unsalted cream, yogurt, or a squeeze of fresh lemon to balance the sodium.' },
      { problem: 'Sauce too thin or watery?', solution: 'Simmer uncovered over medium heat for 4–5 minutes to reduce and concentrate flavors.' },
      { problem: 'Lacks brightness or punch?', solution: 'Finish with 1/2 teaspoon of fresh lemon juice, lime, or apple cider vinegar.' }
    ],
    substitutions: [
      { original: 'Main protein', substitute: 'Pressed firm tofu, paneer, or portobello mushrooms', impact: 'Offers hearty bite and absorbs sauces wonderfully.' },
      { original: 'Dairy cream / butter', substitute: 'Coconut cream or olive oil', impact: 'Creates a rich, completely dairy-free alternative.' }
    ],
    safetyNotes: [
      'Always use a sharp knife; dull knives slip and cause accidents.',
      'Keep pot handles turned inward on the stove so they cannot be bumped.',
      'Wash hands thoroughly after handling raw ingredients.'
    ],
    servingGuide: {
      restingTime: 'Rest 3–5 minutes before serving.',
      temperature: 'Serve hot and fresh.'
    },
    cookingGlossary: UNIVERSAL_COOKING_GLOSSARY
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// INGREDIENT SCALING & UNIT CONVERSION HELPERS
// ═══════════════════════════════════════════════════════════════════════════════

function scaleIngredient(ing: Ingredient & { prep?: string; metric?: string; imperial?: string; common?: string }, scale: number) {
  if (scale === 1) return ing;

  const rawAmount = ing.amount || '';
  const match = rawAmount.match(/^([\d.]+)\s*(.*)$/);

  if (match) {
    const val = parseFloat(match[1]);
    const unit = match[2];
    const scaledVal = (val * scale);
    const formatted = scaledVal >= 10 ? Math.round(scaledVal) : parseFloat(scaledVal.toFixed(1));
    const newAmount = `${formatted} ${unit}`.trim();

    return {
      ...ing,
      amount: newAmount,
      metric: ing.metric ? scaleRawString(ing.metric, scale) : newAmount,
      imperial: ing.imperial ? scaleRawString(ing.imperial, scale) : newAmount,
      common: ing.common ? scaleRawString(ing.common, scale) : newAmount
    };
  }

  return ing;
}

function scaleRawString(str: string, scale: number): string {
  const match = str.match(/^([\d.]+)\s*(.*)$/);
  if (!match) return str;
  const val = parseFloat(match[1]);
  const unit = match[2];
  const scaled = val * scale;
  const formatted = scaled >= 10 ? Math.round(scaled) : parseFloat(scaled.toFixed(1));
  return `${formatted} ${unit}`.trim();
}
