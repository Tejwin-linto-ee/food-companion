import fs from 'fs';
import path from 'path';

const newLinks = {
  "hyderabadi-biryani": "https://share.google/USOf8zsPP0XznDJj0",
  "carbonara":          "https://share.google/mhfKW40shROWd4q9w",
  "sushi":              "https://share.google/W2ph7ZeZpO3OiuyUV",
  "tonkatsu-ramen":     "https://share.google/qv7Ti2dP3Fdj783OM",
  "tacos":              "https://share.google/ricggTvJKcBXrTSkc"
};

async function testFetch() {
  for (const [id, url] of Object.entries(newLinks)) {
    console.log(`\nResolving ${id} from ${url}...`);
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        },
        redirect: 'follow'
      });
      console.log(`Status: ${res.status}, final URL: ${res.url}`);
      const html = await res.text();
      console.log(`HTML length: ${html.length}`);
      const match = html.match(/imgurl=(.*?)&/);
      if (match && match[1]) {
        const decoded = decodeURIComponent(match[1]);
        console.log(`Found imgurl: ${decoded}`);
      } else {
        // Let's check for any image URLs or meta tags
        const ogImage = html.match(/<meta property="og:image" content="(.*?)"/i);
        if (ogImage) console.log(`Found og:image: ${ogImage[1]}`);
        const twitterImage = html.match(/<meta name="twitter:image" content="(.*?)"/i);
        if (twitterImage) console.log(`Found twitter:image: ${twitterImage[1]}`);
        
        // Search for any googleusercontent or other direct image URLs in the page
        const imgUrls = [...html.matchAll(/https:\/\/[^"'\s]+\.(?:jpg|jpeg|png|webp)/gi)].map(m => m[0]);
        console.log(`Found image matches (${imgUrls.length}):`, imgUrls.slice(0, 3));
      }
    } catch (e) {
      console.error(`Error for ${id}:`, e);
    }
  }
}

testFetch();
