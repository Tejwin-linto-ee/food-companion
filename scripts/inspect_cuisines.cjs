const fs = require('fs');
const content = fs.readFileSync('./src/data/mockFoods.ts', 'utf8');

const regex = /"id":\s*"([^"]+)"[\s\S]*?"name":\s*"([^"]+)"[\s\S]*?"cuisine":\s*"([^"]+)"/g;
let m;
const foods = [];
while ((m = regex.exec(content)) !== null) {
  foods.push({ id: m[1], name: m[2], cuisine: m[3] });
}

console.log('Total foods found:', foods.length);

const byCuisine = {};
foods.forEach(f => {
  byCuisine[f.cuisine] = byCuisine[f.cuisine] || [];
  byCuisine[f.cuisine].push(f);
});

Object.keys(byCuisine).forEach(c => {
  console.log(`${c} (${byCuisine[c].length}):`, byCuisine[c].map(x => `${x.id} (${x.name})`).join(', '));
});
