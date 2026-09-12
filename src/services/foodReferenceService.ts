import { MOCK_FOODS, FOOD_MAP } from '../data/mockFoods';
import { MASTER_RECIPES } from '../data/recipes';
import type { Food, Cuisine } from '../types/food';

export type FoodCategory =
  | 'rice-grain'
  | 'pasta-noodle'
  | 'curry-stew'
  | 'bread-flatbread'
  | 'wrap-sandwich-taco'
  | 'dumpling-pastry'
  | 'grill-meat'
  | 'soup-broth'
  | 'salad-vegetable'
  | 'dessert-sweet'
  | 'snack-appetizer'
  | 'general';

export interface FoodReference {
  id: string;
  name: string;
  cuisine: Cuisine | string;
  region?: string;
  category: FoodCategory;
  referenceImage: string;
  visualDescription: string;
  textureDescription: string;
  flavorSummary: string;
  visualKeywords: string[];
  characteristicColors: string[];
  food: Food;
}

function inferCategory(food: Food): FoodCategory {
  const name = food.name.toLowerCase();
  const desc = (food.description || '').toLowerCase();
  const id = food.id.toLowerCase();
  const fullText = `${name} ${desc} ${id}`;

  if (/(cake|tiramisu|cannoli|gelato|churros|baklava|mochi|panna-cotta|pie|croissant|sweet|dessert|rasgulla|sandesh|payasam|halwa|donut|waffle)/i.test(fullText)) {
    return 'dessert-sweet';
  }
  if (/(biryani|rice|pulao|paella|risotto|jollof|fried rice|onigiri|donburi|bibimbap)/i.test(fullText)) {
    return 'rice-grain';
  }
  if (/(pasta|spaghetti|noodle|ramen|udon|soba|carbonara|bolognese|lasagna|pad thai|chow mein|pho|laksa|tagliatelle|ravioli|gnocchi)/i.test(fullText)) {
    return 'pasta-noodle';
  }
  if (/(curry|masala|dal|korma|makhani|vindaloo|saag|stew|rendang|tagine|doro wat|goulash|chili)/i.test(fullText)) {
    return 'curry-stew';
  }
  if (/(taco|burrito|enchilada|quesadilla|sandwich|burger|hot dog|gyro|shawarma|wrap|arepa|banh mi|falafel)/i.test(fullText)) {
    return 'wrap-sandwich-taco';
  }
  if (/(pizza|naan|roti|paratha|dosa|idli|baguette|focaccia|pide|lahmacun|bread|flatbread|tortilla)/i.test(fullText)) {
    return 'bread-flatbread';
  }
  if (/(dumpling|gyoza|samosa|dim sum|bao|empanada|momos|wonton|mandu|spring roll)/i.test(fullText)) {
    return 'dumpling-pastry';
  }
  if (/(kebab|steak|bbq|ribs|satay|yakitori|bulgogi|galbi|tandoori|grilled|roast chicken)/i.test(fullText)) {
    return 'grill-meat';
  }
  if (/(soup|tom yum|tom kha|bouillabaisse|broth|gazpacho|chowder|jjigae)/i.test(fullText)) {
    return 'soup-broth';
  }
  if (/(salad|guacamole|ceviche|hummus|tabouleh|fattoush|tartare)/i.test(fullText)) {
    return 'salad-vegetable';
  }

  return 'general';
}

function deriveVisualKeywords(food: Food, category: FoodCategory): string[] {
  const keywords = new Set<string>();
  const nameParts = food.name.toLowerCase().split(/[\s,()/-]+/);
  nameParts.forEach(p => {
    if (p.length > 2 && !['and', 'with', 'the', 'for', 'de', 'la', 'al'].includes(p)) {
      keywords.add(p);
    }
  });

  food.texture.forEach(t => keywords.add(t.toLowerCase()));
  food.mainIngredients.forEach(i => keywords.add(i.toLowerCase()));

  switch (category) {
    case 'rice-grain':
      keywords.add('grains');
      keywords.add('rice');
      keywords.add('steamed');
      break;
    case 'pasta-noodle':
      keywords.add('noodles');
      keywords.add('sauce coated');
      keywords.add('long strands');
      break;
    case 'curry-stew':
      keywords.add('gravy');
      keywords.add('sauce');
      keywords.add('simmered');
      keywords.add('aromatic oils');
      break;
    case 'bread-flatbread':
      keywords.add('crust');
      keywords.add('baked');
      keywords.add('dough');
      keywords.add('flour');
      break;
    case 'wrap-sandwich-taco':
      keywords.add('folded');
      keywords.add('layered');
      keywords.add('tortilla');
      keywords.add('street food');
      break;
    case 'grill-meat':
      keywords.add('seared');
      keywords.add('charred');
      keywords.add('grilled');
      keywords.add('caramelized');
      break;
    case 'dessert-sweet':
      keywords.add('confectionery');
      keywords.add('sweet');
      keywords.add('sugar');
      keywords.add('cream');
      break;
    case 'salad-vegetable':
      keywords.add('fresh produce');
      keywords.add('raw herbs');
      keywords.add('vibrant greens');
      break;
    default:
      break;
  }

  return Array.from(keywords);
}

function deriveCharacteristicColors(food: Food, category: FoodCategory): string[] {
  const colors: string[] = [];
  const text = `${food.name} ${food.description}`.toLowerCase();

  if (text.includes('tomato') || text.includes('chili') || text.includes('red') || text.includes('marinara')) {
    colors.push('red', 'amber');
  }
  if (text.includes('spinach') || text.includes('palak') || text.includes('green') || text.includes('herb') || text.includes('salad')) {
    colors.push('green');
  }
  if (text.includes('turmeric') || text.includes('saffron') || text.includes('curry') || text.includes('cheese') || text.includes('golden') || text.includes('dosa')) {
    colors.push('golden', 'yellow');
  }
  if (text.includes('chocolate') || text.includes('beef') || text.includes('roasted') || text.includes('bbq') || text.includes('brown')) {
    colors.push('brown', 'dark');
  }
  if (text.includes('cream') || text.includes('white') || text.includes('rice') || text.includes('yogurt') || text.includes('pasta')) {
    colors.push('white', 'creamy');
  }

  if (colors.length === 0) {
    if (category === 'curry-stew') colors.push('amber', 'golden', 'red');
    else if (category === 'grill-meat') colors.push('brown', 'charred');
    else if (category === 'pasta-noodle') colors.push('golden', 'creamy', 'red');
    else if (category === 'rice-grain') colors.push('white', 'golden');
    else colors.push('golden', 'brown');
  }

  return colors;
}

// ═══════════════════════════════════════════════════════════════════════════════
// COMPILED REFERENCE INDEX
// ═══════════════════════════════════════════════════════════════════════════════

export const FOOD_REFERENCES: FoodReference[] = MOCK_FOODS.map((food) => {
  const recipe = MASTER_RECIPES[food.id];
  const category = inferCategory(food);
  const visualDesc = recipe?.overview?.appearance || food.description;
  const textureDesc = recipe?.overview?.texture || (food.texture.join(', ') || 'Tender and flavorful');
  const flavorSummary = recipe?.overview?.flavor || (food.flavorProfile.primary.join(', ') || 'Rich and savory');

  return {
    id: food.id,
    name: food.name,
    cuisine: food.cuisine,
    region: food.region,
    category,
    referenceImage: food.gallery.hero,
    visualDescription: visualDesc,
    textureDescription: textureDesc,
    flavorSummary,
    visualKeywords: deriveVisualKeywords(food, category),
    characteristicColors: deriveCharacteristicColors(food, category),
    food
  };
});

const REFERENCE_BY_ID = new Map<string, FoodReference>(
  FOOD_REFERENCES.map((r) => [r.id, r])
);

const REFERENCE_BY_LOWER_NAME = new Map<string, FoodReference>(
  FOOD_REFERENCES.map((r) => [r.name.toLowerCase(), r])
);

/**
 * Get all 189 registered food references.
 */
export function getAllFoodReferences(): FoodReference[] {
  return FOOD_REFERENCES;
}

/**
 * Look up a reference by food ID.
 */
export function getFoodReferenceById(id: string): FoodReference | undefined {
  return REFERENCE_BY_ID.get(id);
}

/**
 * Look up a reference by exact or normalized food name.
 */
export function getFoodReferenceByName(name: string): FoodReference | undefined {
  if (!name) return undefined;
  const clean = name.trim().toLowerCase();
  if (REFERENCE_BY_LOWER_NAME.has(clean)) {
    return REFERENCE_BY_LOWER_NAME.get(clean);
  }

  // Substring or prefix match
  for (const ref of FOOD_REFERENCES) {
    const refClean = ref.name.toLowerCase();
    if (refClean === clean || refClean.includes(clean) || clean.includes(refClean)) {
      return ref;
    }
  }

  return undefined;
}

/**
 * Fast search over all 189 foods for manual selection or filtering.
 */
export function searchFoodReferences(query: string, limit: number = 20): FoodReference[] {
  if (!query || !query.trim()) {
    return FOOD_REFERENCES.slice(0, limit);
  }

  const q = query.trim().toLowerCase();

  return FOOD_REFERENCES.map((ref) => {
    let score = 0;
    const nameLower = ref.name.toLowerCase();
    const cuisineLower = ref.cuisine.toLowerCase();

    if (nameLower === q) score += 100;
    else if (nameLower.startsWith(q)) score += 80;
    else if (nameLower.includes(q)) score += 50;
    else if (cuisineLower === q) score += 40;
    else if (cuisineLower.includes(q)) score += 30;
    else if (ref.category.includes(q)) score += 25;
    else if (ref.visualKeywords.some((k) => k.includes(q))) score += 15;

    return { ref, score };
  })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.ref);
}
