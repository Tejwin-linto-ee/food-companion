const fs = require('fs');
const path = require('path');

// 1. Get all food IDs from mockFoods.ts
const mockContent = fs.readFileSync(path.join(__dirname, '../src/data/mockFoods.ts'), 'utf8');
const idRegex = /"id":\s*"([^"]+)"/g;
let match;
const foodIds = [];
while ((match = idRegex.exec(mockContent)) !== null) {
  foodIds.push(match[1]);
}

console.log(`Total mockFoods IDs: ${foodIds.length}`);

// 2. Read recipe keys from each recipe ts file
const files = [
  '../src/data/recipes/indian.ts',
  '../src/data/recipes/italian.ts',
  '../src/data/recipes/eastAsian.ts',
  '../src/data/recipes/southeastAsian.ts',
  '../src/data/recipes/mediterranean.ts',
  '../src/data/recipes/americasAndGlobal.ts'
];

const recipeIds = new Set();

files.forEach(f => {
  const content = fs.readFileSync(path.join(__dirname, f), 'utf8');
  // Each recipe object starts with "id": "..." or id: '...'
  const recipeRegex = /(?:"id"|id):\s*["']([^"']+)["']/g;
  let rm;
  let count = 0;
  while ((rm = recipeRegex.exec(content)) !== null) {
    recipeIds.add(rm[1]);
    count++;
  }
  console.log(`${f}: found ${count} recipes`);
});

console.log(`\nTotal unique recipe IDs in datasets: ${recipeIds.size}`);

// 3. Compare
const missing = foodIds.filter(id => !recipeIds.has(id));
if (missing.length > 0) {
  console.error(`Missing recipes for ${missing.length} foods:`, missing);
} else {
  console.log(`SUCCESS! Every single one of the ${foodIds.length} foods has a detailed recipe!`);
}
