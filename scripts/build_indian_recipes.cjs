const fs = require('fs');
const path = require('path');

// Master Indian Recipe Builder
const indianRecipes = {};

// Helper to register recipe
function addRecipe(data) {
  if (!data.id) throw new Error('Recipe missing ID');
  indianRecipes[data.id] = data;
}

// 1. Load Butter Chicken
const butterChicken = {
  id: 'butter-chicken',
  name: 'Murgh Makhani (Butter Chicken)',
  cuisine: 'Indian',
  region: 'North Indian (Delhi / Punjab)',
  servings: 4,
  prepTime: 30,
  cookTime: 40,
  difficulty: 'Medium',
  overview: {
    summary: 'Tender tandoori-spiced chicken thighs seared until smokey and charred, simmered in a velvety, buttery tomato-cashew makhani gravy enriched with toasted kasuri methi (dried fenugreek leaves) and heavy cream.',
    appearance: 'Lustrous, vibrant orange-red gravy coating succulent golden-brown chicken chunks, drizzled with white cream spirals and garnished with ginger matchsticks.',
    texture: 'Ultra-silky, smooth gravy with melt-in-the-mouth chicken pieces.',
    flavor: 'Rich, mildly sweet, tangy, and deeply aromatic with subtle smokiness and fenugreek warmth.',
    restingTimeMinutes: 5
  },
  equipment: [
    { name: 'Heavy-bottomed Dutch oven or Kadhai (4–5 qt)', purpose: 'Distributes heat evenly to simmer the thick tomato sauce without scorching.' },
    { name: 'Cast iron skillet or heavy grill pan', purpose: 'Achieves authentic tandoor-like charring and Maillard browning on chicken pieces.' },
    { name: 'High-speed blender', purpose: 'Emulsifies tomatoes, cashews, and aromatics into a satin-smooth lump-free puree.' },
    { name: 'Fine-mesh sieve (chhalni)', purpose: 'Strains tomato sauce for the quintessential restaurant-grade velvet mouthfeel.' },
    { name: 'Meat thermometer', purpose: 'Ensures chicken pieces reach safe 74°C (165°F) internal doneness without drying out.' }
  ],
  beforeYouStart: [
    { task: 'Soak 35g raw cashews in 100ml warm water for 20 minutes to soften.', durationMinutes: 20 },
    { task: 'Cut boneless chicken thighs into uniform 3.5cm (1.5 inch) bite-sized pieces.', durationMinutes: 8 },
    { task: 'Rub chicken with lemon juice, salt, Kashmiri chili powder, and ginger-garlic paste for the 1st marinade; rest 15 mins.', durationMinutes: 15 },
    { task: 'Mix hung curd, mustard oil, garam masala, and kasuri methi for 2nd marinade; coat chicken and refrigerate.', durationMinutes: 10 }
  ],
  ingredientPrepGuide: [
    { item: 'Chicken Thighs', technique: 'Trim excess exterior fat, pat dry thoroughly, and cut into 3.5cm uniform cubes so all pieces cook at the same rate.' },
    { item: 'Kasuri Methi', technique: 'Gently rub dried fenugreek leaves between your palms over the pot right before serving to release aromatic volatile oils.' },
    { item: 'Cashews', technique: 'Boil or soak in hot water, then blend with tomato reduction until microscopic smoothness is achieved.' }
  ],
  essentialIngredients: [
    { name: 'Boneless skinless chicken thighs', prep: 'cut into 3.5cm cubes', amount: '700g', metric: '700g', imperial: '1.5 lbs', common: '1.5 lbs' },
    { name: 'Hung curd or Greek yogurt (full-fat)', prep: 'whisked smooth', amount: '120g', metric: '120g', imperial: '4.2 oz', common: '1/2 cup' },
    { name: 'Ginger-garlic paste', prep: 'freshly grated or pounded 50/50 ratio', amount: '2 tbsp', metric: '30g', imperial: '1 oz', common: '2 tbsp' },
    { name: 'Kashmiri red chili powder', prep: 'divided (for vibrant red color without harsh heat)', amount: '2 tbsp', metric: '16g', imperial: '0.6 oz', common: '2 tbsp' },
    { name: 'Fresh lemon juice', prep: 'freshly squeezed', amount: '1.5 tbsp', metric: '22ml', imperial: '0.75 fl oz', common: '1.5 tbsp' },
    { name: 'Mustard oil (or neutral oil)', prep: 'for marinade emulsification', amount: '1 tbsp', metric: '15ml', imperial: '0.5 fl oz', common: '1 tbsp' },
    { name: 'Ripe Roma tomatoes', prep: 'roughly chopped for boiling', amount: '750g', metric: '750g', imperial: '1.65 lbs', common: '5 large' },
    { name: 'Raw cashew nuts', prep: 'soaked in warm water 20 mins', amount: '35g', metric: '35g', imperial: '1.2 oz', common: '1/4 cup' },
    { name: 'Unsalted butter', prep: 'divided (cold cubes)', amount: '60g', metric: '60g', imperial: '2.1 oz', common: '4 tbsp' },
    { name: 'Heavy whipping cream (35% fat)', prep: 'chilled', amount: '80ml', metric: '80ml', imperial: '2.7 fl oz', common: '1/3 cup' },
    { name: 'Kasuri methi (dried fenugreek leaves)', prep: 'toasted lightly in a dry pan', amount: '1 tbsp', metric: '3g', imperial: '0.1 oz', common: '1 tbsp' },
    { name: 'Garam masala powder', prep: 'aromatic spice blend', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
    { name: 'Honey or cane sugar', prep: 'to balance tomato acidity', amount: '1.5 tsp', metric: '8g', imperial: '0.3 oz', common: '1.5 tsp' },
    { name: 'Green cardamom pods', prep: 'lightly cracked', amount: '4 pods', metric: '4 pods', imperial: '4 pods', common: '4 pods' },
    { name: 'Fine sea salt', prep: 'to taste', amount: '1.5 tsp', metric: '9g', imperial: '0.3 oz', common: '1.5 tsp' }
  ],
  optionalIngredients: [
    { name: 'Lump of natural charcoal (dhungar method)', prep: 'for tandoori smoke infusion', amount: '1 piece', metric: '1 piece', imperial: '1 piece', common: '1 piece', optional: true },
    { name: 'Fresh ginger', prep: 'cut into paper-thin matchstick juliennes for garnish', amount: '10g', metric: '10g', imperial: '0.35 oz', common: '1 tbsp', optional: true }
  ],
  steps: [
    {
      step: 1,
      title: 'FIRST MARINADE (ACID & PENETRATION)',
      whatYouNeed: ['700g chicken thighs', '1.5 tbsp lemon juice', '1 tbsp ginger-garlic paste', '1 tsp salt', '1 tbsp Kashmiri chili'],
      description: 'In a large glass bowl, toss the trimmed chicken cubes with lemon juice, salt, 1 tbsp ginger-garlic paste, and 1 tbsp Kashmiri chili powder. Massage thoroughly into the meat fibres. Rest at room temperature for 15 minutes.',
      howToDoIt: 'The lemon acid penetrates the muscle proteins, tenderizing them while allowing the chili and aromatics to seep into the core rather than sitting only on the exterior.',
      heat: 'Off (Room Temperature)',
      heatDescription: 'No heat applied yet; letting salt and citrus acid draw moisture and tenderize.',
      duration: 15,
      visualCues: 'Chicken will turn an even scarlet color; a light amount of clear liquid will pool at the bottom.',
      hear: 'None',
      smell: 'Bright, zesty lemon and sharp fresh garlic.',
      textureCheck: 'Chicken surface will feel slippery and softened.',
      whatShouldThisLookLike: 'Bright orange-red chicken chunks coated cleanly with no dry powdery clumps.',
      tip: 'Do not marinate longer than 30 minutes in the first acid stage or the meat fibers will begin to mush.',
      commonMistake: 'Using breast meat instead of thighs — breast meat turns chalky and stringy during the searing and subsequent simmering.',
      moveOnWhen: 'Chicken has rested for 15 minutes and the liquid looks lightly tinted orange.',
      quickInstructions: 'Coat chicken in lemon, salt, chili, ginger-garlic paste. Rest 15 mins.'
    },
    {
      step: 2,
      title: 'SECOND MARINADE (YOGURT & FAT BINDER)',
      whatYouNeed: ['Marinated chicken from Step 1', '120g hung curd', '1 tbsp mustard oil', '1 tsp garam masala', '1 tsp crushed kasuri methi'],
      description: 'Add hung curd, 1 tbsp mustard oil, garam masala, and kasuri methi directly to the bowl. Thoroughly mix until every single piece of chicken is enveloped in a thick, rich tandoori paste. Cover and refrigerate for at least 30 minutes (up to 4 hours).',
      howToDoIt: 'Hung curd provides a protective dairy barrier that insulates the meat during high-heat searing so the interior stays juicy while the outer crust chars.',
      heat: 'Chilled (Refrigerator)',
      heatDescription: 'Cold temperature preserves meat texture while dairy enzymes slowly tenderize.',
      duration: 30,
      visualCues: 'Chicken pieces are coated in a thick, opaque, brick-red yogurt blanket that does not drip or run.',
      hear: 'None',
      smell: 'Earthy fenugreek, warm garam masala spices, and dairy tang.',
      textureCheck: 'Creamy, clingy emulsion coating every surface.',
      whatShouldThisLookLike: 'Thick paste adhering tightly to the meat pieces without pooling watery liquid.',
      tip: 'Ensure the curd is properly hung (thick like cream cheese); watery yogurt will cause the chicken to boil in the pan instead of charring.',
      commonMistake: 'Skipping the mustard oil — oil helps fat-soluble spice pigments bloom and adhere.',
      moveOnWhen: 'Chicken is evenly coated and chilled for minimum 30 minutes.',
      quickInstructions: 'Mix in hung yogurt, mustard oil, garam masala, fenugreek. Chill 30 min.'
    },
    {
      step: 3,
      title: 'BUILD & SIMMER THE MAKHANI BASE',
      whatYouNeed: ['750g chopped Roma tomatoes', '35g soaked cashews', '4 cracked green cardamoms', '1 tbsp ginger-garlic paste', '1 tbsp butter', '100ml water', '1 tsp salt'],
      description: 'In your Dutch oven over medium heat, melt 1 tbsp butter. Add cracked green cardamoms and ginger-garlic paste, sautéing for 60 seconds. Tip in chopped tomatoes, soaked cashews, 100ml water, and 1 tsp salt. Bring to a boil, then reduce heat to low-medium. Cover and simmer for 20 minutes until tomatoes completely collapse into a soft mush.',
      howToDoIt: 'Simmering breaks down the tomato pectin and softens the cashews so they liquefy into a cream-like suspension when blended.',
      heat: 'Medium to Low-Medium Heat',
      heatDescription: 'Steady moderate bubbling under a lidded pot with gentle steam escaping.',
      duration: 20,
      visualCues: 'Tomatoes lose all structural integrity; cashew nuts become translucent and soft enough to crush between fingers.',
      hear: 'Gentle, muffled bubbling under the lid.',
      smell: 'Sweet cooked tomato aroma infused with warm cardamom florals.',
      textureCheck: 'Tomatoes are pulpy and spoon-tender.',
      whatShouldThisLookLike: 'A thick, chunky red stew with collapsed tomato skins and softened nuts.',
      tip: 'Roma (plum) tomatoes have the lowest water content and highest natural sweetness, preventing an overly sour gravy.',
      commonMistake: 'Leaving the heat too high without checking, causing the cashews to sink and scorch to the pan floor.',
      moveOnWhen: 'Tomatoes are completely soft and mashed with no firm chunks remaining.',
      quickInstructions: 'Melt butter, sauté cardamoms & ginger-garlic, add tomatoes, cashews, water; cover & simmer 20 mins.'
    },
    {
      step: 4,
      title: 'BLEND & STRAIN TO SILK PERFECTION',
      whatYouNeed: ['Simmered tomato-cashew mixture', 'High-speed blender', 'Fine sieve', 'Rubber spatula'],
      description: 'Allow the cooked tomato-cashew mixture to cool for 5 minutes. Transfer to a blender jar (do not overfill past 60% capacity). Blend on high speed for 90–120 seconds until completely emulsified and frothy. Pour the sauce through a fine-mesh sieve back into the clean Dutch oven, pressing firmly with a spatula to leave skins and seeds behind.',
      howToDoIt: 'Straining is non-negotiable for true butter chicken. It removes tomato peel flakes and seeds, leaving behind only the velvety emulsion.',
      heat: 'Off',
      heatDescription: 'Blender and strainer step; keep the stove turned off.',
      duration: 8,
      visualCues: 'Puree transforms from mottled red into a glossy, uniform peach-orange satin liquid.',
      hear: 'Whirring blender motor.',
      smell: 'Intensely rich, nutty tomato fragrance.',
      textureCheck: 'Silky smooth, completely free of gritty particles or seed fragments.',
      whatShouldThisLookLike: 'Liquid velvet cascading through the sieve without lumps.',
      tip: 'Vent the blender lid cap slightly and cover with a folded kitchen towel to prevent hot steam pressure buildup.',
      commonMistake: 'Skipping the fine sieve — without straining, the texture feels like marinara sauce rather than makhani gravy.',
      moveOnWhen: 'All sauce is strained into the pot and the sieve holds only dry skin/seed residue.',
      quickInstructions: 'Blend tomato-cashew mix on high for 2 mins, then press through fine sieve into Dutch oven.'
    },
    {
      step: 5,
      title: 'SEAR & CHAR THE TANDOORI CHICKEN',
      whatYouNeed: ['Marinated chicken from Step 2', 'Cast iron skillet', '1 tbsp butter or ghee', 'Tongs'],
      description: 'Set a heavy cast iron skillet over high heat for 3 minutes until smoking hot. Add 1 tbsp butter/ghee to coat. Place chicken pieces in a single layer with at least 1cm space between them (cook in two batches if necessary). Sear undisturbed for 3–4 minutes until deep dark charred blister spots form. Flip and cook 3 minutes on the second side. Chicken should be 80% cooked through.',
      howToDoIt: 'High radiant heat mimics a 450°C tandoor oven, creating charred smoky crust (Maillard reaction) while locking in moisture.',
      heat: 'High Heat',
      heatDescription: 'Sizzling aggressively on contact with visible wisps of aromatic smoke.',
      duration: 8,
      visualCues: 'Dark black-brown char marks on the edges and bottom; yogurt marinade caramelizes and tightens onto the meat.',
      hear: 'Loud, vigorous crackling and sizzling as moisture evaporates immediately.',
      smell: 'Deep, smoky tandoori aroma, like roasted barbecue.',
      textureCheck: 'Springy and firm on the exterior, still slightly juicy inside.',
      whatShouldThisLookLike: 'Golden-red chicken chunks with distinct dark charred grill marks.',
      tip: 'Do not crowd the skillet! If crowded, chicken releases liquid and boils in its juices instead of developing smoky char marks.',
      commonMistake: 'Continuously stirring or flipping the chicken — leave it alone so the char spots can develop.',
      moveOnWhen: 'Both batches of chicken have distinct blackened char marks on edges.',
      quickInstructions: 'Sear chicken in smoking-hot cast iron skillet 3-4 mins per side until charred on edges.'
    },
    {
      step: 6,
      title: 'UNITE, ENRICH & SIMMER',
      whatYouNeed: ['Strained makhani gravy', 'Seared charred chicken + pan drippings', 'Remaining 50g cold butter', '80ml heavy cream', '1.5 tsp honey', '1 tbsp crushed kasuri methi', '1 tsp garam masala'],
      description: 'Place the pot with strained makhani gravy over medium heat. Bring to a gentle simmer. Tip in the seared chicken pieces along with any browned pan juices. Simmer together for 7–8 minutes until chicken registers 74°C (165°F) internally. Lower heat to dead-low. Whisk in cold butter cubes one by one to emulsify. Drizzle in heavy cream, honey, garam masala, and rub kasuri methi between your palms directly into the gravy. Stir gently and take off the heat.',
      howToDoIt: 'Whisking cold butter into warm sauce is the classic French monter au beurre technique applied to Indian gravies — it creates a stable, glossy emulsion that never separates.',
      heat: 'Medium-Low to Dead-Low',
      heatDescription: 'Gentle occasional bubbling around the pan perimeter; never a violent boil once cream and butter are added.',
      duration: 10,
      visualCues: 'Sauce transforms from pale orange into a deep glossy sheen that coats the back of a spoon with a luxurious velvety film.',
      hear: 'Gentle, lazy blip-blop bubbling.',
      smell: 'The intoxicating signature aroma of butter chicken — toasted fenugreek, sweet tomato, warm cardamom, and dairy richness.',
      textureCheck: 'Thick, creamy, and coats a wooden spoon; if you draw a line with your finger across the spoon back, the line holds clean.',
      whatShouldThisLookLike: 'Tender charred chicken bathed in a glistening, velvety orange-red gravy.',
      tip: 'Do not boil vigorously after adding cream, or the dairy fat can split into an oily film.',
      commonMistake: 'Over-sweetening — butter chicken needs just enough honey to round off tomato tang, not taste like dessert.',
      moveOnWhen: 'Butter is melted and emulsified, chicken is cooked through, and sauce is thick and glistening.',
      quickInstructions: 'Simmer chicken in sauce 8 mins. Lower heat, fold in cold butter cubes, cream, honey, kasuri methi, garam masala.'
    }
  ],
  commonMistakes: [
    { mistake: 'Chicken turned dry and fibrous.', remedy: 'Always use bone-in or boneless chicken thighs instead of lean chicken breasts, which overcook in simmering sauce.' },
    { mistake: 'Gravy tastes sour and sharp.', remedy: 'Use sweet Roma tomatoes, simmer them thoroughly to evaporate acidity, and balance with 1–2 teaspoons of honey.' },
    { mistake: 'Gravy is gritty or grainy.', remedy: 'Cashews were either not soaked long enough or the sauce was not passed through a fine-mesh sieve.' }
  ],
  troubleshooting: [
    {
      problem: 'Sauce split into an oily layer on top',
      whatHappened: 'The dairy fats in the cream and butter separated from the water-based tomato emulsion.',
      whyItHappened: 'The sauce was boiled too violently after adding dairy, breaking the emulsification.',
      whatToDoNow: 'Remove from heat immediately. Whisk in 2 tablespoons of warm water or an extra splash of chilled cream vigorously until re-emulsified.',
      howToPrevent: 'Always reduce heat to dead-low before stirring in cold butter and heavy cream; never let it rapidly boil.'
    },
    {
      problem: 'The gravy lacks that signature smoky tandoor flavor',
      whatHappened: 'Chicken did not develop enough surface char in the pan.',
      whyItHappened: 'Skillet was not hot enough or pan was overcrowded, causing chicken to steam rather than sear.',
      whatToDoNow: 'Use the Dhungar method: place a small metal bowl on top of the curry, drop a red-hot natural charcoal briquette inside, pour 1/2 tsp ghee over the coal, and cover pot with a tight lid for 3 minutes.',
      howToPrevent: 'Preheat cast iron until smoking hot, shake off excess marinade, and sear in batches with plenty of space.'
    }
  ],
  substitutions: [
    { original: 'Raw cashews', substitute: 'Blanched almonds or sunflower seeds', notes: 'Blanched peeled almonds provide similar creamy body with a slightly milder nuttiness.' },
    { original: 'Kasuri methi', substitute: 'No direct substitute; omit or use pinch of celery seed powder', notes: 'Kasuri methi provides the irreplaceable signature restaurant aroma; omit if unavailable rather than substituting fresh herbs.' },
    { original: 'Kashmiri red chili', substitute: 'Paprika (sweet) mixed with a pinch of cayenne', notes: 'Gives the vibrant red hue without introducing excessive heat.' }
  ],
  safetyNotes: [
    'Raw chicken must reach an internal temperature of 74°C (165°F) verified with a meat thermometer.',
    'Always vent the blender lid and cover with a towel when blending hot tomato-cashew liquid to prevent explosive burns.',
    'Never leave hot charcoal unattended if utilizing the optional dhungar smoking method.'
  ],
  servingGuide: {
    restingTime: 'Rest curry for 5 minutes off heat so the butter emulsion settles and flavors harmonize.',
    garnishing: 'Drizzle 1 tablespoon of cold heavy cream in circular swirls, scatter paper-thin ginger matchsticks, and sprinkle toasted kasuri methi.',
    plating: 'Ladle into a deep, warmed copper handi or ceramic serving bowl.',
    temperature: 'Serve piping hot (approx 65°C / 150°F).',
    accompaniments: 'Tandoori Garlic Butter Naan, flaky Laccha Paratha, or fragrant Jeera Rice, paired with pickled sliced red onions (sirka pyaz) and fresh lemon wedges.'
  }
};
addRecipe(butterChicken);

// 2. Load all module batches
const batches = [
  './data/indian_north.cjs',
  './data/indian_north2.cjs',
  './data/indian_north3.cjs',
  './data/indian_north4.cjs',
  './data/indian_south1.cjs',
  './data/indian_south1b.cjs',
  './data/indian_south2.cjs',
  './data/indian_south3.cjs',
  './data/indian_west.cjs',
  './data/indian_west2.cjs',
  './data/indian_east.cjs'
];

batches.forEach(file => {
  const recipes = require(file);
  recipes.forEach(r => addRecipe(r));
});

const totalKeys = Object.keys(indianRecipes);
console.log(`Successfully compiled ${totalKeys.length} Indian recipes!`);

// Write out TypeScript file
const outPath = path.join(__dirname, '../src/data/recipes/indian.ts');
const fileHeader = `import type { DetailedRecipe } from './types';\n\nexport const INDIAN_RECIPES: Record<string, DetailedRecipe> = `;
const fileContent = fileHeader + JSON.stringify(indianRecipes, null, 2) + ';\n';

fs.writeFileSync(outPath, fileContent, 'utf8');
console.log(`Wrote ${outPath} successfully (${fileContent.length} bytes)!`);
