import fs from 'fs';
import path from 'path';

// These 5 failed with HTTP 403 — fetch from alternative sources
const fallbacks = {
  // loremflickr with stable seeds as last resort — these are real food photos
  "focaccia":   "https://loremflickr.com/800/800/focaccia,bread/all?lock=42",
  "bruschetta": "https://loremflickr.com/800/800/bruschetta,italian/all?lock=43",
  "yakitori":   "https://loremflickr.com/800/800/yakitori,grilled,skewer/all?lock=44",
  "satay":      "https://loremflickr.com/800/800/satay,skewer,asian/all?lock=45",
};

async function run() {
  const dir = path.join(process.cwd(), 'public', 'food');
  for (const [id, url] of Object.entries(fallbacks)) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, redirect: 'follow' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(path.join(dir, `${id}.jpg`), buf);
      console.log(`✓ ${id}.jpg (${Math.round(buf.length/1024)}kb)`);
    } catch(e) {
      console.error(`✗ ${id}: ${e.message}`);
    }
  }
  console.log('Done.');
}
run();
