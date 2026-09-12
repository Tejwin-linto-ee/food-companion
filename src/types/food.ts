// Food Companion — Core TypeScript Types

export type Mood =
  | 'cozy'
  | 'energetic'
  | 'refreshing'
  | 'indulgent'
  | 'adventurous'
  | 'light'
  | 'comforting'
  | 'spicy'
  | 'healthy'
  | 'quick'
  | 'romantic'
  | 'nostalgic';

export type Craving =
  | 'creamy'
  | 'crispy'
  | 'spicy'
  | 'sweet'
  | 'filling'
  | 'fresh'
  | 'cheesy'
  | 'comforting';

export type EnergyLevel = 'low' | 'normal' | 'cooking';

export type TimeOption = '15min' | '30min' | '60min' | 'no-rush';

export type RefinementFeedback =
  | 'too-heavy'
  | 'too-spicy'
  | 'too-boring'
  | 'too-much-work'
  | 'not-hungry'
  | 'want-new';

export type ContextualRole =
  | 'top-match'
  | 'lighter'
  | 'indulge'
  | 'adventurous'
  | 'journal-favorite';

export type Cuisine =
  | 'Italian'
  | 'Indian'
  | 'Japanese'
  | 'Mexican'
  | 'American'
  | 'French'
  | 'Thai'
  | 'Chinese'
  | 'Mediterranean'
  | 'Middle Eastern'
  | 'Korean'
  | 'Spanish'
  | 'Greek'
  | 'Vietnamese'
  | 'Moroccan';

export type DietTag =
  | 'Vegetarian'
  | 'Vegan'
  | 'Gluten-Free'
  | 'Dairy-Free'
  | 'Keto'
  | 'Paleo'
  | 'Halal'
  | 'Kosher'
  | 'Low-Carb'
  | 'High-Protein';

export type MealType = 'Breakfast' | 'Brunch' | 'Lunch' | 'Dinner' | 'Snack' | 'Dessert' | 'Drink';

export type Difficulty = 'Very Easy' | 'Easy' | 'Medium' | 'Hard' | 'Expert';

export type SpiceLevel = 'None' | 'Mild' | 'Medium' | 'Hot' | 'Very Hot';

export interface Ingredient {
  name: string;
  amount?: string;
  unit?: string;
  optional?: boolean;
  substitutions?: string[];
}

export interface RecipeStep {
  step: number;
  title: string;
  description: string;
  duration?: number; // minutes
  heat?: 'Low Heat' | 'Medium-Low' | 'Medium' | 'Medium-High' | 'High' | string;
  heatDescription?: string;
  whatYouNeed?: string[];
  howToDoIt?: string;
  donenessCue?: string;
  see?: string;
  visualCues?: string;
  hear?: string;
  feel?: string;
  textureCheck?: string;
  smell?: string;
  lookFor?: string;
  whatShouldThisLookLike?: string;
  tip?: string;
  warning?: string;
  commonMistake?: string;
  moveOnWhen?: string;
  quickInstructions?: string;
  checkpoint?: string;
}

export interface CookingTerm {
  term: string;
  meaning: string;
  exampleInRecipe?: string;
}

export interface PreparationTask {
  task: string;
  durationMinutes?: number;
}

export interface TroubleshootingItem {
  problem: string;
  solution: string;
}

export interface SubstitutionItem {
  original: string;
  substitute: string;
  impact?: string;
  notes?: string;
}

export interface Nutrition {
  calories: number;
  protein: number; // grams
  carbs: number;   // grams
  fat: number;     // grams
  fiber?: number;
  sugar?: number;
  sodium?: number;
}

export interface FlavorProfile {
  primary: string[];    // e.g. ['Rich', 'Creamy', 'Savory']
  secondary?: string[]; // e.g. ['Earthy', 'Slightly smoky']
}

export interface FoodAnatomyLayer {
  name: string;
  description: string;
  ingredient?: string;
  color?: string; // for visual rendering
}

export interface ImageGallery {
  hero: string;
  top?: string;
  side?: string;
  closeup?: string;
  detail?: string;
  environment?: string;
}

export interface Food {
  id: string;
  name: string;
  cuisine: Cuisine;
  description: string;
  gallery: ImageGallery;
  mealType: MealType[];
  dietTags: DietTag[];
  spiceLevel: SpiceLevel;
  difficulty: Difficulty;
  prepTime: number;   // minutes
  cookTime: number;   // minutes
  servings: number;
  nutrition: Nutrition;
  flavorProfile: FlavorProfile;
  texture: string[];  // e.g. ['Crispy', 'Tender', 'Creamy']
  mainIngredients: string[];
  ingredients: Ingredient[];
  steps: RecipeStep[];
  equipment?: string[];
  pairings?: string[];
  variations?: string[];
  origin?: string;
  story?: string;
  commonMistakes?: string[];
  tips?: string[];
  moods: Mood[];
  occasions?: string[];
  anatomy?: FoodAnatomyLayer[];
  budget?: 'Low' | 'Medium' | 'High';
  beforeYouStart?: (PreparationTask | string)[];
  troubleshooting?: TroubleshootingItem[];
  safetyNotes?: string[];
}

export interface FoodRecommendation {
  food: Food;
  matchScore: number;  // 0-100
  matchReasons: string[];
  matchSummary: string;
  contextualRole?: ContextualRole;
  contextualLabel?: string;
}

// AI Analysis Types
export interface AIVisualScoreBreakdown {
  presentation: number;
  color: number;
  composition: number;
  visibleTexture: number;
  plating: number;
  garnish?: number;
  visualBalance?: number;
}

export type ConfidenceTier =
  | 'HIGH CONFIDENCE'
  | 'MEDIUM CONFIDENCE'
  | 'LOW CONFIDENCE'
  | 'NO CONFIDENT MATCH';

export interface CandidateMatch {
  foodId: string;
  foodName: string;
  cuisine: string;
  referenceImage: string;
  confidence: number;
  matchReason?: string;
  category?: string;
}

export interface AIAnalysisResult {
  detectedFood: string;
  detectedFoodId?: string;
  confidence: number; // 0-100
  confidenceTier: ConfidenceTier;
  referenceMatchLevel: 'High' | 'Medium' | 'Low';
  referenceImage?: string;
  candidates: CandidateMatch[];
  alternatives: string[];
  visualScore: number; // 0-100
  scoreBreakdown: AIVisualScoreBreakdown;
  observations: string[];
  improvements: string[];
  isLowConfidence: boolean;
  isConfident: boolean;
  providerUsed: 'gemini-vision' | 'reference-matcher' | 'manual';
}

export type AIAnalysisStatus =
  | 'idle'
  | 'reading'
  | 'detecting'
  | 'comparing'
  | 'analyzing'
  | 'calculating'
  | 'complete'
  | 'error';

// Journal Types
export interface FoodRating {
  taste: number;       // 1-5
  aroma: number;       // 1-5
  texture: number;     // 1-5
  presentation: number;// 1-5
  overall: number;     // 1-5
}

export interface FoodJournalEntry {
  id: string;
  createdAt: string;   // ISO date
  foodId?: string;     // reference if from food database
  dishName: string;
  confirmedFoodName?: string;
  cuisine: Cuisine | string;
  image?: string;
  mood?: Mood;
  craving?: Craving;
  mealType?: MealType;
  aiAnalysis?: AIAnalysisResult;
  aiPrediction?: string;
  aiConfidence?: number;
  userCorrectedFood?: string; // if user said AI was wrong
  wasUserCorrected?: boolean;
  rating: FoodRating;
  tags?: string[];     // e.g. ['PERFECT', 'CRISPY', 'WOULD ORDER AGAIN']
  notes?: string;
  location?: string;
  spiceLevel?: SpiceLevel;
  dietTags?: DietTag[];
}

// Insights Types
export interface FoodInsight {
  type: 'stat' | 'pattern' | 'recommendation';
  title: string;
  value?: string | number;
  description: string;
  icon?: string;
  dataPoints?: number; // how many entries support this insight
}

// Discovery Filter Types
export interface DiscoveryFilters {
  mood?: Mood;
  craving?: Craving;
  energy?: EnergyLevel;
  timeOption?: TimeOption;
  cuisine?: Cuisine;
  ingredients?: string[];
  dietTags?: DietTag[];
  mealType?: MealType;
  spiceLevel?: SpiceLevel;
  maxPrepTime?: number;
  difficulty?: Difficulty;
  budget?: 'Low' | 'Medium' | 'High';
  refinement?: RefinementFeedback;
}
