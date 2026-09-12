async function fetchJson(url) {
  const res = await fetch(url);
  return res.json();
}

async function main() {
  const data = await fetchJson('https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian');
  console.log('Indian meals:', data.meals.map(m => m.strMeal + ' - ' + m.strMealThumb).slice(0, 5));
}
main();
