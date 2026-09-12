import fs from 'fs';
import path from 'path';

async function checkRamen() {
  const res = await fetch('https://share.google/qv7Ti2dP3Fdj783OM', {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  const html = await res.text();
  const tbns = [...html.matchAll(/https:\/\/encrypted-tbn[0-9]\.gstatic\.com\/images\?q=[^"'\s&]+/g)].map(m => m[0]);
  console.log('Found tbns:', tbns);
  
  // Try fetching the original image with curl or different User-Agent
  // The original URL was https://honestcooking.com/wp-content/uploads/2026/03/homemade-tonkotsu-ramen.jpg
  // Let's try fetching with curl
  const matches = [...html.matchAll(/https:\/\/[a-z0-9\-\.]*googleusercontent\.com[^"'\s&]+/gi)].map(m => m[0]);
  console.log('googleusercontent matches:', matches.slice(0, 10));
}

checkRamen();
