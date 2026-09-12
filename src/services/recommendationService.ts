import type { Food, FoodRecommendation, DiscoveryFilters, RefinementFeedback, ContextualRole } from '../types/food';
import { MOCK_FOODS } from '../data/mockFoods';
import { getAllEntries } from './journalService';
import { getUserTasteProfile, getSavedFoodIds } from './userPreferenceService';

const MOOD_WEIGHT = 35;
const CRAVING_WEIGHT = 25;
const CUISINE_WEIGHT = 20;
const INGREDIENT_WEIGHT = 20;
const DIET_WEIGHT = 20;
const TIME_WEIGHT = 15;
const SPICE_WEIGHT = 15;
const ENERGY_WEIGHT = 15;

export interface ContextualRecommendationGroup {
  topMatch: FoodRecommendation | null;
  lighter: FoodRecommendation | null;
  indulge: FoodRecommendation | null;
  adventurous: FoodRecommendation | null;
  fromJournal: FoodRecommendation | null;
  moreRecommendations: FoodRecommendation[];
}

export function getStructuredRecommendations(
  filters: DiscoveryFilters,
  limit = 8,
): ContextualRecommendationGroup {
  const tasteProfile = getUserTasteProfile();
  const journalEntries = getAllEntries();
  const savedIds = getSavedFoodIds();

  // Pre-calculate user history insights
  const highlyRatedDishes = new Set(
    journalEntries.filter(e => e.rating.overall >= 4).map(e => e.dishName.toLowerCase())
  );
  const highlyRatedCuisines = new Set(
    journalEntries.filter(e => e.rating.overall >= 4).map(e => e.cuisine)
  );

  const scoredFoods: FoodRecommendation[] = [];

  for (const food of MOCK_FOODS) {
    // Check if food is disliked by user
    if (tasteProfile.signals.dislikedFoodIds.includes(food.id)) {
      continue;
    }

    // Strict dietary tag filtering (e.g. Vegetarian, Vegan, Gluten-Free)
    if (filters.dietTags && filters.dietTags.length > 0) {
      const satisfiesAll = filters.dietTags.every(tag => food.dietTags.includes(tag));
      if (!satisfiesAll) continue;
    }

    let score = 0;
    const reasons: string[] = [];

    // 1. Mood match
    if (filters.mood) {
      if (food.moods.includes(filters.mood)) {
        score += MOOD_WEIGHT;
        reasons.push(`Tailored for a ${filters.mood.toUpperCase()} mood`);
      }
    }

    // 2. Craving match
    if (filters.craving) {
      const matchTexture = food.texture.some(t => t.toLowerCase().includes(filters.craving!.toLowerCase()));
      const matchFlavor = food.flavorProfile.primary.some(f => f.toLowerCase().includes(filters.craving!.toLowerCase()));
      if (matchTexture || matchFlavor) {
        score += CRAVING_WEIGHT;
        reasons.push(`Satisfies your craving for ${filters.craving}`);
      }
    }

    // 3. Time Option match
    if (filters.timeOption) {
      const totalTime = food.prepTime + food.cookTime;
      if (filters.timeOption === '15min' && totalTime <= 20) {
        score += TIME_WEIGHT;
        reasons.push(`Fast & ready in ${totalTime}m`);
      } else if (filters.timeOption === '30min' && totalTime <= 35) {
        score += TIME_WEIGHT;
        reasons.push(`Quick ${totalTime}m meal`);
      } else if (filters.timeOption === '60min' && totalTime <= 65) {
        score += TIME_WEIGHT;
        reasons.push(`Satisfying ${totalTime}m cook`);
      } else if (filters.timeOption === 'no-rush') {
        score += 5;
      }
    } else if (filters.maxPrepTime) {
      const totalTime = food.prepTime + food.cookTime;
      if (totalTime <= filters.maxPrepTime) {
        score += TIME_WEIGHT;
        reasons.push(`Ready in ${totalTime} minutes`);
      }
    }

    // 4. Energy level match
    if (filters.energy) {
      if (filters.energy === 'low' && (food.difficulty === 'Very Easy' || food.difficulty === 'Easy' || (food.prepTime + food.cookTime) <= 25)) {
        score += ENERGY_WEIGHT;
        reasons.push('Low effort, effortless prep');
      } else if (filters.energy === 'cooking' && (food.difficulty === 'Medium' || food.difficulty === 'Hard')) {
        score += ENERGY_WEIGHT;
        reasons.push('Rewarding hands-on cooking experience');
      } else if (filters.energy === 'normal') {
        score += 8;
      }
    }

    // 5. Spice level match
    if (filters.spiceLevel) {
      if (food.spiceLevel === filters.spiceLevel) {
        score += SPICE_WEIGHT;
        reasons.push(`${food.spiceLevel} heat level`);
      }
    }

    // 6. Cuisine preference match
    if (filters.cuisine) {
      if (food.cuisine === filters.cuisine) {
        score += CUISINE_WEIGHT;
        reasons.push(`${food.cuisine} culinary heritage`);
      }
    }

    // 7. Ingredient overlap
    if (filters.ingredients && filters.ingredients.length > 0) {
      const matched = food.mainIngredients.filter(i =>
        filters.ingredients!.some(fi => i.toLowerCase().includes(fi.toLowerCase()) || fi.toLowerCase().includes(i.toLowerCase()))
      );
      if (matched.length > 0) {
        score += Math.round(INGREDIENT_WEIGHT * (matched.length / filters.ingredients.length));
        reasons.push(`Features ${matched.slice(0, 2).join(' & ')}`);
      }
    }

    // 8. Meal type match
    if (filters.mealType) {
      if (food.mealType.includes(filters.mealType)) {
        score += 10;
        reasons.push(`Ideal for ${filters.mealType}`);
      }
    }

    // 9. Personal History bonus (only when verifiable data exists)
    if (highlyRatedDishes.has(food.name.toLowerCase())) {
      score += 15;
      reasons.push(`From your journal: you previously rated this highly`);
    } else if (highlyRatedCuisines.has(food.cuisine)) {
      score += 8;
      reasons.push(`Matches your affinity for ${food.cuisine} cuisine`);
    }

    if (savedIds.includes(food.id)) {
      score += 10;
      reasons.push(`In your saved shortlist`);
    }

    // Baseline natural summary
    const matchSummary = buildMatchSummary(food, filters, reasons);

    scoredFoods.push({
      food,
      matchScore: Math.min(Math.max(score, 15), 98),
      matchReasons: reasons.length > 0 ? reasons.slice(0, 3) : ['Rich in authentic flavor', 'Balanced profile'],
      matchSummary,
    });
  }

  // Sort by score descending
  scoredFoods.sort((a, b) => b.matchScore - a.matchScore);

  // Group into Contextual Editorial Roles
  const topMatch = scoredFoods.length > 0 ? { ...scoredFoods[0], contextualRole: 'top-match' as ContextualRole, contextualLabel: 'Your Best Match' } : null;

  // Lighter alternative (lower calories, salad, crisp or fresh)
  const lighterCandidate = scoredFoods.slice(1).find(
    r => r.food.nutrition.calories < 450 || r.food.moods.includes('light') || r.food.moods.includes('refreshing')
  );
  const lighter = lighterCandidate ? { ...lighterCandidate, contextualRole: 'lighter' as ContextualRole, contextualLabel: 'If You Want Something Lighter' } : null;

  // Indulgent alternative (rich, decadent, comforting)
  const indulgeCandidate = scoredFoods.slice(1).find(
    r => r.food.id !== lighter?.food.id && (r.food.moods.includes('indulgent') || r.food.flavorProfile.primary.includes('Rich'))
  );
  const indulge = indulgeCandidate ? { ...indulgeCandidate, contextualRole: 'indulge' as ContextualRole, contextualLabel: 'If You Want To Indulge' } : null;

  // Something different (novel cuisine, adventurous)
  const adventurousCandidate = scoredFoods.slice(1).find(
    r => r.food.id !== lighter?.food.id && r.food.id !== indulge?.food.id && r.food.cuisine !== topMatch?.food.cuisine
  );
  const adventurous = adventurousCandidate ? { ...adventurousCandidate, contextualRole: 'adventurous' as ContextualRole, contextualLabel: 'If You Want Something Different' } : null;

  // From journal (previously rated dish if available)
  const journalCandidate = scoredFoods.slice(1).find(
    r => r.food.id !== lighter?.food.id && r.food.id !== indulge?.food.id && r.food.id !== adventurous?.food.id && highlyRatedDishes.has(r.food.name.toLowerCase())
  );
  const fromJournal = journalCandidate ? { ...journalCandidate, contextualRole: 'journal-favorite' as ContextualRole, contextualLabel: 'From Your Journal' } : null;

  // Remaining pool for general shelf
  const usedIds = new Set([
    topMatch?.food.id,
    lighter?.food.id,
    indulge?.food.id,
    adventurous?.food.id,
    fromJournal?.food.id,
  ].filter(Boolean));

  const moreRecommendations = scoredFoods
    .filter(r => !usedIds.has(r.food.id))
    .slice(0, limit);

  return {
    topMatch,
    lighter,
    indulge,
    adventurous,
    fromJournal,
    moreRecommendations,
  };
}

export function getRecommendations(
  filters: DiscoveryFilters,
  limit = 8,
): FoodRecommendation[] {
  const structured = getStructuredRecommendations(filters, limit);
  const list: FoodRecommendation[] = [];
  if (structured.topMatch) list.push(structured.topMatch);
  if (structured.lighter) list.push(structured.lighter);
  if (structured.indulge) list.push(structured.indulge);
  if (structured.adventurous) list.push(structured.adventurous);
  if (structured.fromJournal) list.push(structured.fromJournal);
  list.push(...structured.moreRecommendations);
  return list.slice(0, limit);
}

function buildMatchSummary(
  food: Food,
  filters: DiscoveryFilters,
  reasons: string[],
): string {
  if (filters.mood) {
    return `Fits your ${filters.mood} mood — ${food.flavorProfile.primary.join(' + ').toLowerCase()} with a ${food.texture[0]?.toLowerCase() || 'satisfying'} bite.`;
  }
  if (reasons.length > 0) {
    return `${reasons[0]}. ${food.description}`;
  }
  return food.description;
}

export function refineRecommendations(
  filters: DiscoveryFilters,
  feedback: RefinementFeedback,
): DiscoveryFilters {
  const updated: DiscoveryFilters = { ...filters };

  switch (feedback) {
    case 'too-heavy':
      updated.craving = 'fresh';
      updated.mood = 'light';
      break;
    case 'too-spicy':
      updated.spiceLevel = 'None';
      break;
    case 'too-boring':
      updated.mood = 'adventurous';
      updated.craving = 'spicy';
      break;
    case 'too-much-work':
      updated.timeOption = '15min';
      updated.energy = 'low';
      break;
    case 'not-hungry':
      updated.mealType = 'Snack';
      updated.mood = 'light';
      break;
    case 'want-new':
      updated.mood = 'adventurous';
      break;
  }

  return updated;
}

export function getSurpriseRecommendation(dietTags?: string[]): FoodRecommendation {
  const tasteProfile = getUserTasteProfile();
  let pool = [...MOCK_FOODS];

  if (dietTags && dietTags.length > 0) {
    pool = pool.filter(f => dietTags.every(t => f.dietTags.includes(t as never)));
  }

  // Pick something outside the user's top favorite cuisine if they have history
  if (tasteProfile.hasHistory && tasteProfile.favoriteCuisines.length > 0) {
    const novel = pool.filter(f => !tasteProfile.favoriteCuisines.includes(f.cuisine));
    if (novel.length > 0) pool = novel;
  }

  const selected = pool[Math.floor(Math.random() * pool.length)];

  let rationale = `A serendipitous discovery outside your usual routine.`;
  if (tasteProfile.favoriteCuisines.length > 0) {
    rationale = `You often explore ${tasteProfile.favoriteCuisines[0]}. Here's an exquisite ${selected.cuisine} dish to broaden your palate.`;
  }

  return {
    food: selected,
    matchScore: 92,
    matchReasons: ['Curated surprise discovery', `Authentic ${selected.cuisine} classic`],
    matchSummary: rationale,
    contextualRole: 'adventurous',
    contextualLabel: 'Surprise Selection',
  };
}

export function getTrendingFoods(limit = 6): Food[] {
  // Diverse showcase across cuisines with verified images
  const priorityIds = ['butter-chicken', 'pizza', 'sushi', 'hyderabadi-biryani', 'carbonara', 'tonkatsu-ramen', 'tacos', 'pad-thai'];
  const prioritized = priorityIds.map(id => MOCK_FOODS.find(f => f.id === id)).filter(Boolean) as Food[];
  const remaining = MOCK_FOODS.filter(f => !priorityIds.includes(f.id));
  return [...prioritized, ...remaining].slice(0, limit);
}

export function getFoodsByCuisine(cuisine: string): Food[] {
  return MOCK_FOODS.filter(f => f.cuisine === cuisine);
}

export function getFoodsByMood(mood: string): Food[] {
  return MOCK_FOODS.filter(f => f.moods.includes(mood as never));
}

export function getRandomFood(): Food {
  return MOCK_FOODS[Math.floor(Math.random() * MOCK_FOODS.length)];
}
