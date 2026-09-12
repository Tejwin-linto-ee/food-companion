async function fetchJson(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'FoodCompanionBot/1.0' } });
  return res.json();
}

async function getWikimediaImages(query) {
  try {
    const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&gsrlimit=10&prop=imageinfo&iiprop=url&format=json`;
    const data = await fetchJson(searchUrl);
    if (!data.query || !data.query.pages) return [];
    
    return Object.values(data.query.pages)
      .map(page => page.imageinfo?.[0]?.url)
      .filter(url => url && (url.toLowerCase().endsWith('.jpg') || url.toLowerCase().endsWith('.jpeg') || url.toLowerCase().endsWith('.png')));
  } catch (e) {
    console.error('Error fetching ' + query, e.message);
    return [];
  }
}

async function main() {
  const q1 = await getWikimediaImages('Biryani');
  console.log('Biryani images:', q1.length > 0 ? q1[0] : 'None');
  const q2 = await getWikimediaImages('Masala Dosa');
  console.log('Masala Dosa images:', q2.length > 0 ? q2[0] : 'None');
}

main();
