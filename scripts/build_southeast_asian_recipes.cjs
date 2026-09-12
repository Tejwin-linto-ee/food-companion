const fs = require('fs');
const path = require('path');

// Master Southeast Asian Recipe Builder (15 dishes)
const seaRecipes = {};

function addRecipe(data) {
  if (!data.id) throw new Error('Recipe missing ID');
  if (seaRecipes[data.id]) {
    console.warn(`Duplicate recipe ID: ${data.id}`);
  }
  seaRecipes[data.id] = data;
}

const recipes = require('./data/southeast_asian.cjs');
console.log(`Loaded ${recipes.length} recipes from ./data/southeast_asian.cjs`);
recipes.forEach(r => addRecipe(r));

const totalKeys = Object.keys(seaRecipes);
console.log(`Successfully compiled ${totalKeys.length} Southeast Asian recipes!`);

// Write out TypeScript file
const outPath = path.join(__dirname, '../src/data/recipes/southeastAsian.ts');
const fileHeader = `import type { DetailedRecipe } from './types';\n\nexport const SOUTHEAST_ASIAN_RECIPES: Record<string, DetailedRecipe> = `;
const fileContent = fileHeader + JSON.stringify(seaRecipes, null, 2) + ';\n';

fs.writeFileSync(outPath, fileContent, 'utf8');
console.log(`Wrote ${outPath} successfully (${fileContent.length} bytes)!`);
