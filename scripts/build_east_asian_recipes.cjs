const fs = require('fs');
const path = require('path');

// Master East Asian Recipe Builder (40 dishes: 17 Japanese, 11 Chinese, 12 Korean)
const eastAsianRecipes = {};

function addRecipe(data) {
  if (!data.id) throw new Error('Recipe missing ID');
  if (eastAsianRecipes[data.id]) {
    console.warn(`Duplicate recipe ID: ${data.id}`);
  }
  eastAsianRecipes[data.id] = data;
}

const batches = [
  './data/east_asian_japan1.cjs',
  './data/east_asian_japan2.cjs',
  './data/east_asian_china.cjs',
  './data/east_asian_korea.cjs'
];

batches.forEach(file => {
  const recipes = require(file);
  console.log(`Loaded ${recipes.length} recipes from ${file}`);
  recipes.forEach(r => addRecipe(r));
});

const totalKeys = Object.keys(eastAsianRecipes);
console.log(`Successfully compiled ${totalKeys.length} East Asian recipes!`);

// Write out TypeScript file
const outPath = path.join(__dirname, '../src/data/recipes/eastAsian.ts');
const fileHeader = `import type { DetailedRecipe } from './types';\n\nexport const EAST_ASIAN_RECIPES: Record<string, DetailedRecipe> = `;
const fileContent = fileHeader + JSON.stringify(eastAsianRecipes, null, 2) + ';\n';

fs.writeFileSync(outPath, fileContent, 'utf8');
console.log(`Wrote ${outPath} successfully (${fileContent.length} bytes)!`);
