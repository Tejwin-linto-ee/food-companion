const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/mockFoods.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Replace crepes
content = content.replace(
  /"hero": "https:\/\/loremflickr\.com\/800\/800\/cr%C3%AApes,food\/all\?lock=1381",\s*"top": "[^"]+",\s*"side": "[^"]+",\s*"closeup": "[^"]+",\s*"detail": "[^"]+",\s*"environment": "[^"]+"/g,
  `"hero": "/food/crepes.jpg",\n      "top": "/food/crepes.jpg",\n      "side": "/food/crepes.jpg",\n      "closeup": "/food/crepes.jpg",\n      "detail": "/food/crepes.jpg",\n      "environment": "/food/crepes.jpg"`
);

// Replace souffle
content = content.replace(
  /"hero": "https:\/\/loremflickr\.com\/800\/800\/souffl%C3%A9,food\/all\?lock=1401",\s*"top": "[^"]+",\s*"side": "[^"]+",\s*"closeup": "[^"]+",\s*"detail": "[^"]+",\s*"environment": "[^"]+"/g,
  `"hero": "/food/souffle.jpg",\n      "top": "/food/souffle.jpg",\n      "side": "/food/souffle.jpg",\n      "closeup": "/food/souffle.jpg",\n      "detail": "/food/souffle.jpg",\n      "environment": "/food/souffle.jpg"`
);

// Replace tortilla
content = content.replace(
  /"hero": "https:\/\/loremflickr\.com\/800\/800\/tortilla,food\/all\?lock=1431",\s*"top": "[^"]+",\s*"side": "[^"]+",\s*"closeup": "[^"]+",\s*"detail": "[^"]+",\s*"environment": "[^"]+"/g,
  `"hero": "/food/tortilla-espanola.jpg",\n      "top": "/food/tortilla-espanola.jpg",\n      "side": "/food/tortilla-espanola.jpg",\n      "closeup": "/food/tortilla-espanola.jpg",\n      "detail": "/food/tortilla-espanola.jpg",\n      "environment": "/food/tortilla-espanola.jpg"`
);

// Replace doner
content = content.replace(
  /"hero": "https:\/\/loremflickr\.com\/800\/800\/d%C3%B6ner,food\/all\?lock=1521",\s*"top": "[^"]+",\s*"side": "[^"]+",\s*"closeup": "[^"]+",\s*"detail": "[^"]+",\s*"environment": "[^"]+"/g,
  `"hero": "/food/doner.jpg",\n      "top": "/food/doner.jpg",\n      "side": "/food/doner.jpg",\n      "closeup": "/food/doner.jpg",\n      "detail": "/food/doner.jpg",\n      "environment": "/food/doner.jpg"`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated placeholder image URLs to local assets!');
