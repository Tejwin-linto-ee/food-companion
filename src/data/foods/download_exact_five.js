import fs from 'fs';
import path from 'path';

const targets = {
  "hyderabadi-biryani": "https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
  "carbonara":          "https://www.jocooks.com/wp-content/uploads/2019/06/creamy-carbonara-1-2.jpg",
  "sushi":              "https://takestwoeggs.com/wp-content/uploads/2025/02/Sushi-at-home.jpg",
  "tonkatsu-ramen":     "https://honestcooking.com/wp-content/uploads/2026/03/homemade-tonkotsu-ramen.jpg",
  "tacos":              "https://www.kikkoman.eu/fileadmin/_processed_/5/2/csm_F1021-recipe-page-tacos-filled-with-pork-and-pickled-onions_Mobile_2f0219b18c.webp"
};

async function downloadTargets() {
  const publicDir = path.join(process.cwd(), 'public', 'food');
  
  for (const [id, url] of Object.entries(targets)) {
    console.log(`Downloading ${id} from ${url}...`);
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Referer': 'https://www.google.com/'
        }
      });
      console.log(`Status: ${res.status}, Content-Type: ${res.headers.get('content-type')}`);
      if (!res.ok) {
        console.error(`Failed ${id}: HTTP ${res.status}`);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      const ext = url.endsWith('.webp') ? '.webp' : '.jpg';
      const filepath = path.join(publicDir, `${id}${ext}`);
      fs.writeFileSync(filepath, buffer);
      console.log(`Saved ${filepath} (${Math.round(buffer.length / 1024)} KB)`);
      
      // Also save as .jpg if it was .webp or vice-versa to ensure matching compatibility
      if (ext === '.webp') {
        fs.writeFileSync(path.join(publicDir, `${id}.jpg`), buffer);
      }
    } catch (e) {
      console.error(`Error downloading ${id}:`, e);
    }
  }
}

downloadTargets();
