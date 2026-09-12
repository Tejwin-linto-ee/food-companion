import type { DetailedRecipe } from './types';
import { INDIAN_RECIPES } from './indian';
import { ITALIAN_RECIPES } from './italian';
import { EAST_ASIAN_RECIPES } from './eastAsian';
import { SOUTHEAST_ASIAN_RECIPES } from './southeastAsian';
import { MEDITERRANEAN_RECIPES } from './mediterranean';
import { AMERICAS_GLOBAL_RECIPES } from './americasAndGlobal';

export * from './types';
export { INDIAN_RECIPES } from './indian';
export { ITALIAN_RECIPES } from './italian';
export { EAST_ASIAN_RECIPES } from './eastAsian';
export { SOUTHEAST_ASIAN_RECIPES } from './southeastAsian';
export { MEDITERRANEAN_RECIPES } from './mediterranean';
export { AMERICAS_GLOBAL_RECIPES } from './americasAndGlobal';

export const MASTER_RECIPES: Record<string, DetailedRecipe> = {
  ...INDIAN_RECIPES,
  ...ITALIAN_RECIPES,
  ...EAST_ASIAN_RECIPES,
  ...SOUTHEAST_ASIAN_RECIPES,
  ...MEDITERRANEAN_RECIPES,
  ...AMERICAS_GLOBAL_RECIPES
};

export function getDetailedRecipe(foodId: string): DetailedRecipe | undefined {
  return MASTER_RECIPES[foodId];
}
