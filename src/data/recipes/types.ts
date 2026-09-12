import type { Ingredient, RecipeStep, PreparationTask, TroubleshootingItem, SubstitutionItem, CookingTerm } from '../../types/food';

export interface RecipeIngredient extends Ingredient {
  prep?: string;
  metric?: string;
  imperial?: string;
  common?: string;
}

export interface EquipmentItem {
  name: string;
  purpose: string;
  optional?: boolean;
}

export interface IngredientPrepTechnique {
  item: string;
  technique: string;
}

export interface ServingInstructions {
  restingTime?: string;
  garnishing?: string;
  plating?: string;
  temperature?: string;
  accompaniments?: string;
}

export interface DetailedRecipe {
  id: string;
  name: string;
  cuisine: string;
  region?: string;
  servings: number;
  prepTime: number;
  cookTime: number;
  difficulty: 'Very Easy' | 'Easy' | 'Medium' | 'Hard' | 'Expert';
  overview: {
    summary: string;
    appearance: string;
    texture: string;
    flavor: string;
    restingTimeMinutes?: number;
  };
  equipment: EquipmentItem[];
  beforeYouStart: PreparationTask[];
  ingredientPrepGuide: IngredientPrepTechnique[];
  essentialIngredients: RecipeIngredient[];
  optionalIngredients: RecipeIngredient[];
  steps: RecipeStep[];
  commonMistakes: { mistake: string; remedy: string }[];
  troubleshooting: {
    problem: string;
    whatHappened?: string;
    whyItHappened?: string;
    whatToDoNow: string;
    howToPrevent: string;
  }[];
  substitutions: SubstitutionItem[];
  safetyNotes: string[];
  servingGuide: ServingInstructions;
  cookingGlossary?: CookingTerm[];
}
