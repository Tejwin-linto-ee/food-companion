async function fetchJson(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'FoodCompanionBot/1.0' } });
  return res.json();
}

async function getWikiImages(query) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=10&prop=pageimages&piprop=original&format=json&origin=*`;
  const data = await fetchJson(url);
  if (!data.query || !data.query.pages) return [];
  return Object.values(data.query.pages)
    .filter(p => p.original && p.original.source)
    .map(p => p.original.source);
}

async function main() {
  const foods = ['Biryani', 'Masala Dosa', 'Margherita Pizza', 'Sushi'];
  for (const f of foods) {
    const imgs = await getWikiImages(f);
    console.log(f, imgs);
  }
}
main();
