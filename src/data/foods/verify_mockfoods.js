import fs from 'fs';

const content = fs.readFileSync('src/data/mockFoods.ts', 'utf8');
const ids = ['hyderabadi-biryani', 'carbonara', 'sushi', 'tonkatsu-ramen', 'ramen', 'tacos'];

ids.forEach(id => {
  const match = content.match(new RegExp(`"id":\\s*"${id}"[\\s\\S]*?"name":\\s*"([^"]+)"[\\s\\S]*?"hero":\\s*"([^"]+)"`));
  if (match) {
    console.log(`✓ ${id} | Name: "${match[1]}" | Image: ${match[2]}`);
  } else {
    console.error(`✗ ${id} not found`);
  }
});
