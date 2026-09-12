const fs = require('fs');
const path = require('path');

const mockContent = fs.readFileSync(path.join(__dirname, '../src/data/mockFoods.ts'), 'utf8');
const heroMatches = [...mockContent.matchAll(/"hero":\s*"([^"]+)"/g)].map(m => m[1]);

let missingCount = 0;
let externalCount = 0;
let localCount = 0;

heroMatches.forEach(heroUrl => {
  if (heroUrl.startsWith('/food/')) {
    localCount++;
    const fullPath = path.join(__dirname, '../public', heroUrl);
    if (!fs.existsSync(fullPath)) {
      console.log('Missing local image file:', fullPath);
      missingCount++;
    }
  } else if (heroUrl.startsWith('http')) {
    externalCount++;
    console.log('External hero URL:', heroUrl);
  } else {
    console.log('Unknown format:', heroUrl);
  }
});

console.log(`Total hero images checked: ${heroMatches.length}`);
console.log(`Local images in public/food: ${localCount}`);
console.log(`External URLs: ${externalCount}`);
console.log(`Missing files: ${missingCount}`);
