const fs = require('fs');
const path = require('path');

// Master Mediterranean Recipe Builder (24 dishes: Spanish 5, Greek 5, Turkish 6, Middle Eastern 8)
const mediterraneanRecipes = {};

function addRecipe(data) {
  if (!data.id) throw new Error('Recipe missing ID');
  if (mediterraneanRecipes[data.id]) {
    console.warn(`Duplicate recipe ID: ${data.id}`);
  }
  mediterraneanRecipes[data.id] = data;
}

const batches = [
  './data/mediterranean_west.cjs',
  './data/mediterranean_east.cjs'
];

batches.forEach(file => {
  const recipes = require(file);
  console.log(`Loaded ${recipes.length} recipes from ${file}`);
  recipes.forEach(r => addRecipe(r));
});

const totalKeys = Object.keys(mediterraneanRecipes);
console.log(`Successfully compiled ${totalKeys.length} Mediterranean & Middle Eastern recipes!`);

// Write out TypeScript file
const outPath = path.join(__dirname, '../src/data/recipes/mediterranean.ts');
const fileHeader = `import type { DetailedRecipe } from './types';\n\nexport const MEDITERRANEAN_RECIPES: Record<string, DetailedRecipe> = `;
const fileContent = fileHeader + JSON.stringify(mediterraneanRecipes, null, 2) + ';\n';

fs.writeFileSync(outPath, fileContent, 'utf8');
console.log(`Wrote ${outPath} successfully (${fileContent.length} bytes)!`);
