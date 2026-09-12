import fs from 'fs';

const content = fs.readFileSync('src/data/mockFoods.ts', 'utf8');
const regex = /"id":\s*"([^"]+)",\s*"name":\s*"([^"]+)",\s*"cuisine":\s*"([^"]+)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
  if (match[3] === 'Japanese' || match[2].toLowerCase().includes('ramen') || match[2].toLowerCase().includes('tonkatsu')) {
    console.log(`${match[1]} | ${match[2]} | ${match[3]}`);
  }
}
