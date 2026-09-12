const fs = require('fs');
const path = require('path');

// Master Americas & Global Recipe Builder (44 dishes: Mexican 12, French 8, African 5, American 11, Global 8)
const americasGlobalRecipes = {};

function addRecipe(data) {
  if (!data.id) throw new Error('Recipe missing ID');
  if (americasGlobalRecipes[data.id]) {
    console.warn(`Duplicate recipe ID: ${data.id}`);
  }
  americasGlobalRecipes[data.id] = data;
}

const batches = [
  './data/americas_latin_french.cjs',
  './data/americas_latin_part2.cjs',
  './data/french_classics.cjs',
  './data/americas_african_us1.cjs',
  './data/americas_us_comfort.cjs',
  './data/americas_us_part2.cjs',
  './data/global_heritage.cjs',
  './data/global_heritage_part2.cjs'
];

batches.forEach(file => {
  const recipes = require(file);
  console.log(`Loaded ${recipes.length} recipes from ${file}`);
  recipes.forEach(r => addRecipe(r));
});

const totalKeys = Object.keys(americasGlobalRecipes);
console.log(`Successfully compiled ${totalKeys.length} Americas & Global recipes!`);

// Write out TypeScript file
const outPath = path.join(__dirname, '../src/data/recipes/americasAndGlobal.ts');
const fileHeader = `import type { DetailedRecipe } from './types';\n\nexport const AMERICAS_GLOBAL_RECIPES: Record<string, DetailedRecipe> = `;
const fileContent = fileHeader + JSON.stringify(americasGlobalRecipes, null, 2) + ';\n';

fs.writeFileSync(outPath, fileContent, 'utf8');
console.log(`Wrote ${outPath} successfully (${fileContent.length} bytes)!`);
