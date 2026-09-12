import fs from 'fs';

const generateId = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
const getLorem = (keyword, lock) => `https://loremflickr.com/800/800/${encodeURIComponent(keyword)},food/all?lock=${lock}`;

// ═══════════════════════════════════════════════════════════════════════════════
// CENTRALIZED IMAGE OVERRIDE MAP
// To add a new food photo: "food-id": "/food/filename.jpg"
// Food ID is the food name lowercased with spaces/special chars → hyphens
// ═══════════════════════════════════════════════════════════════════════════════
const manualOverrides = {
  // ── NORTH INDIAN (Batch 1 & 2) ────────────────────────────────────────────
  "butter-chicken":     "/food/butter-chicken.jpg",
  "chicken-tikka":      "/food/chicken-tikka.jpg",
  "tandoori-chicken":   "/food/tandoori-chicken.jpg",
  "naan":               "/food/naan.jpg",
  "roti":               "/food/roti.jpg",
  "paratha":            "/food/paratha.jpg",
  "chole-bhature":      "/food/chole-bhature.jpg",
  "rajma-chawal":       "/food/rajma-chawal.jpg",
  "dal-makhani":        "/food/dal-makhani.jpg",
  "paneer-tikka":       "/food/paneer-tikka.jpg",
  "palak-paneer":       "/food/palak-paneer.jpg",
  "aloo-paratha":       "/food/aloo-paratha.jpg",
  "samosa":             "/food/samosa.jpg",
  "kebab":              "/food/kebab.jpg",
  "biryani":            "/food/biryani.jpg",

  // ── SOUTH INDIAN (Batch 3) ────────────────────────────────────────────────
  "masala-dosa":        "/food/masala-dosa.jpg",
  "idli":               "/food/idli.jpg",
  "vada":               "/food/vada.jpg",
  "uttappam":           "/food/uttappam.jpg",
  "appam":              "/food/appam.jpg",
  "puttu":              "/food/puttu.jpg",
  "idiyappam":          "/food/idiyappam.jpg",
  "kerala-parotta":     "/food/kerala-parotta.jpg",
  "sambar":             "/food/sambar.jpg",
  "rasam":              "/food/rasam.jpg",
  "avial":              "/food/avial.jpg",
  "thoran":             "/food/thoran.jpg",
  "fish-curry":         "/food/fish-curry.jpg",
  "chicken-curry":      "/food/chicken-curry.jpg",
  "beef-fry":           "/food/beef-fry.jpg",
  "malabar-biryani":    "/food/malabar-biryani.jpg",
  "payasam":            "/food/payasam.jpg",
  "hyderabadi-biryani": "/food/hyderabadi-biryani.jpg",

  // ── WEST INDIAN (Batch 3) ────────────────────────────────────────────────
  "pav-bhaji":          "/food/pav-bhaji.jpg",
  "vada-pav":           "/food/vada-pav.jpg",
  "dhokla":             "/food/dhokla.jpg",
  "thepla":             "/food/thepla.jpg",
  "misal-pav":          "/food/misal-pav.jpg",
  "puran-poli":         "/food/puran-poli.jpg",
  "poha":               "/food/poha.jpg",
  "gujarati-thali":     "/food/gujarati-thali.jpg",
  "rajasthani-thali":   "/food/rajasthani-thali.jpg",
  "dal-baati-churma":   "/food/dal-baati-churma.jpg",

  // ── EAST INDIAN (Batch 3) ────────────────────────────────────────────────
  "macher-jhol":        "/food/macher-jhol.jpg",
  "luchi":              "/food/luchi.jpg",
  "aloo-dum":           "/food/aloo-dum.jpg",
  "rasgulla":           "/food/rasgulla.jpg",
  "sandesh":            "/food/sandesh.jpg",
  "mishti-doi":         "/food/mishti-doi.jpg",
  "momos":              "/food/momos.jpg",
  "thukpa":             "/food/thukpa.jpg",

  // ── ITALIAN (Batch 4) ────────────────────────────────────────────────────
  "pizza":              "/food/pizza.jpg",
  "pizza-margherita":   "/food/pizza-margherita.jpg",
  "carbonara":          "/food/carbonara.jpg",
  "bolognese":          "/food/bolognese.jpg",
  "lasagna":            "/food/lasagna.jpg",
  "ravioli":            "/food/ravioli.jpg",
  "gnocchi":            "/food/gnocchi.jpg",
  "risotto":            "/food/risotto.jpg",
  "tagliatelle":        "/food/tagliatelle.jpg",
  "focaccia":           "/food/focaccia.jpg",
  "bruschetta":         "/food/bruschetta.jpg",
  "tiramisu":           "/food/tiramisu.jpg",
  "cannoli":            "/food/cannoli.jpg",
  "panna-cotta":        "/food/panna-cotta.jpg",
  "gelato":             "/food/gelato.jpg",

  // ── JAPANESE (Batch 4) ───────────────────────────────────────────────────
  "sushi":              "/food/sushi.jpg",
  "sashimi":            "/food/sashimi.jpg",
  "ramen":              "/food/tonkatsu-ramen.jpg",
  "tonkatsu-ramen":     "/food/tonkatsu-ramen.jpg",
  "udon":               "/food/udon.jpg",
  "soba":               "/food/soba.jpg",
  "tempura":            "/food/tempura.jpg",
  "tonkatsu":           "/food/tonkatsu.jpg",
  "yakitori":           "/food/yakitori.jpg",
  "okonomiyaki":        "/food/okonomiyaki.jpg",
  "takoyaki":           "/food/takoyaki.jpg",
  "curry-rice":         "/food/curry-rice.jpg",
  "donburi":            "/food/donburi.jpg",
  "gyoza":              "/food/gyoza.jpg",
  "onigiri":            "/food/onigiri.jpg",
  "bento":              "/food/bento.jpg",
  "mochi":              "/food/mochi.jpg",

  // ── CHINESE (Batch 4) ────────────────────────────────────────────────────
  "dim-sum":            "/food/dim-sum.jpg",
  "dumplings":          "/food/dumplings.jpg",
  "fried-rice":         "/food/fried-rice.jpg",
  "chow-mein":          "/food/chow-mein.jpg",
  "peking-duck":        "/food/peking-duck.jpg",
  "kung-pao-chicken":   "/food/kung-pao-chicken.jpg",
  "mapo-tofu":          "/food/mapo-tofu.jpg",
  "hot-pot":            "/food/hot-pot.jpg",
  "bao":                "/food/bao.jpg",
  "wontons":            "/food/wontons.jpg",
  "chinese-spring-rolls": "/food/chinese-spring-rolls.jpg",

  // ── KOREAN (Batch 4) ─────────────────────────────────────────────────────
  "korean-bbq":         "/food/korean-bbq.jpg",
  "bibimbap":           "/food/bibimbap.jpg",
  "kimchi":             "/food/kimchi.jpg",
  "tteokbokki":         "/food/tteokbokki.jpg",
  "japchae":            "/food/japchae.jpg",
  "bulgogi":            "/food/bulgogi.jpg",
  "galbi":              "/food/galbi.jpg",
  "korean-fried-chicken": "/food/korean-fried-chicken.jpg",
  "kimchi-jjigae":      "/food/kimchi-jjigae.jpg",
  "sundubu-jjigae":     "/food/sundubu-jjigae.jpg",
  "kimbap":             "/food/kimbap.jpg",
  "mandu":              "/food/mandu.jpg",

  // ── THAI / SOUTHEAST ASIAN (Batch 4) ─────────────────────────────────────
  "pad-thai":           "/food/pad-thai.jpg",
  "green-curry":        "/food/green-curry.jpg",
  "red-curry":          "/food/red-curry.jpg",
  "massaman-curry":     "/food/massaman-curry.jpg",
  "tom-yum":            "/food/tom-yum.jpg",
  "tom-kha":            "/food/tom-kha.jpg",
  "mango-sticky-rice":  "/food/mango-sticky-rice.jpg",
  "laksa":              "/food/laksa.jpg",
  "nasi-goreng":        "/food/nasi-goreng.jpg",
  "rendang":            "/food/rendang.jpg",
  "pho":                "/food/pho.jpg",
  "banh-mi":            "/food/banh-mi.jpg",
  "sea-spring-rolls":   "/food/sea-spring-rolls.jpg",
  "adobo":              "/food/adobo.jpg",
  "satay":              "/food/satay.jpg",

  // ── MEXICAN / LATIN AMERICAN (Batch 4) ───────────────────────────────────
  "tacos":              "/food/tacos.jpg",
  "burritos":           "/food/burritos.jpg",
  "enchiladas":         "/food/enchiladas.jpg",
  "quesadillas":        "/food/quesadillas.jpg",
  "nachos":             "/food/nachos.jpg",
  "tamales":            "/food/tamales.jpg",
  "guacamole":          "/food/guacamole.jpg",
  "churros":            "/food/churros.jpg",
  "mole":               "/food/mole.jpg",
  "ceviche":            "/food/ceviche.jpg",
  "empanadas":          "/food/empanadas.jpg",
  "arepas":             "/food/arepas.jpg",

  // ── FRENCH (Batch 4) ─────────────────────────────────────────────────────
  "croissants":         "/food/croissants.jpg",
  "baguette":           "/food/baguette.jpg",
  "ratatouille":        "/food/ratatouille.jpg",
  "coq-au-vin":         "/food/coq-au-vin.jpg",
  "beef-bourguignon":   "/food/beef-bourguignon.jpg",
  "crepes":             "/food/crepes.jpg",
  "macarons":           "/food/macarons.jpg",
  "souffle":            "/food/souffle.jpg",

  // ── SPANISH (Batch 4) ────────────────────────────────────────────────────
  "paella":             "/food/paella.jpg",
  "tapas":              "/food/tapas.jpg",
  "tortilla-espanola":  "/food/tortilla-espanola.jpg",
  "gazpacho":           "/food/gazpacho.jpg",
  "spanish-churros":    "/food/spanish-churros.jpg",

  // ── GREEK (Batch 4) ──────────────────────────────────────────────────────
  "moussaka":           "/food/moussaka.jpg",
  "souvlaki":           "/food/souvlaki.jpg",
  "gyros":              "/food/gyros.jpg",
  "greek-salad":        "/food/greek-salad.jpg",
  "greek-baklava":      "/food/greek-baklava.jpg",

  // ── TURKISH (Batch 4) ────────────────────────────────────────────────────
  "turkish-kebab":      "/food/turkish-kebab.jpg",
  "doner":              "/food/doner.jpg",
  "lahmacun":           "/food/lahmacun.jpg",
  "pide":               "/food/pide.jpg",
  "meze":               "/food/meze.jpg",
  "turkish-baklava":    "/food/turkish-baklava.jpg",

  // ── MIDDLE EASTERN (Batch 4) ─────────────────────────────────────────────
  "hummus":             "/food/hummus.jpg",
  "falafel":            "/food/falafel.jpg",
  "shawarma":           "/food/shawarma.jpg",
  "fattoush":           "/food/fattoush.jpg",
  "tabouleh":           "/food/tabouleh.jpg",
  "kebabs":             "/food/kebabs.jpg",
  "manakish":           "/food/manakish.jpg",
  "mezze":              "/food/mezze.jpg",

  // ── AFRICAN (Batch 4) ────────────────────────────────────────────────────
  "injera":             "/food/injera.jpg",
  "doro-wat":           "/food/doro-wat.jpg",
  "tagine":             "/food/tagine.jpg",
  "couscous":           "/food/couscous.jpg",
  "jollof-rice":        "/food/jollof-rice.jpg",

  // ── AMERICAN (Batch 4) ───────────────────────────────────────────────────
  "burgers":            "/food/burgers.jpg",
  "fried-chicken":      "/food/fried-chicken.jpg",
  "steak":              "/food/steak.jpg",
  "pancakes":           "/food/pancakes.jpg",
  "waffles":            "/food/waffles.jpg",
  "mac-and-cheese":     "/food/mac-and-cheese.jpg",
  "bbq":                "/food/bbq.jpg",
  "hot-dogs":           "/food/hot-dogs.jpg",
  "sandwiches":         "/food/sandwiches.jpg",
  "cheesecake":         "/food/cheesecake.jpg",
  "apple-pie":          "/food/apple-pie.jpg",

  // ── OTHER REGIONAL (Batch 4) ─────────────────────────────────────────────
  "brazilian-dishes":   "/food/brazilian-dishes.jpg",
  "peruvian-dishes":    "/food/peruvian-dishes.jpg",
  "argentine-dishes":   "/food/argentine-dishes.jpg",
  "caribbean-dishes":   "/food/caribbean-dishes.jpg",
  "portuguese-dishes":  "/food/portuguese-dishes.jpg",
  "german-dishes":      "/food/german-dishes.jpg",
  "british-dishes":     "/food/british-dishes.jpg",
  "scandinavian-dishes":"/food/scandinavian-dishes.jpg",
};

// ═══════════════════════════════════════════════════════════════════════════════
// FOOD SEED DATA
// ═══════════════════════════════════════════════════════════════════════════════
const indianNorth = [
  { name: "Butter Chicken",    spiceLevel: "Mild",   mealType: ["Dinner","Lunch"],       dietTags: [] },
  { name: "Chicken Tikka",     spiceLevel: "Medium", mealType: ["Dinner","Snack"],       dietTags: [] },
  { name: "Tandoori Chicken",  spiceLevel: "Medium", mealType: ["Dinner","Lunch"],       dietTags: [] },
  { name: "Naan",              spiceLevel: "None",   mealType: ["Dinner","Lunch"],       dietTags: ["Vegetarian"] },
  { name: "Roti",              spiceLevel: "None",   mealType: ["Dinner","Lunch"],       dietTags: ["Vegetarian","Vegan"] },
  { name: "Paratha",           spiceLevel: "None",   mealType: ["Breakfast","Lunch"],    dietTags: ["Vegetarian"] },
  { name: "Chole Bhature",     spiceLevel: "Medium", mealType: ["Breakfast","Lunch"],    dietTags: ["Vegetarian"] },
  { name: "Dal Makhani",       spiceLevel: "Mild",   mealType: ["Dinner","Lunch"],       dietTags: ["Vegetarian","Gluten-Free"] },
  { name: "Palak Paneer",      spiceLevel: "Mild",   mealType: ["Dinner","Lunch"],       dietTags: ["Vegetarian","Gluten-Free"] },
  { name: "Samosa",            spiceLevel: "Medium", mealType: ["Snack"],                dietTags: ["Vegetarian"] },
  { name: "Paneer Tikka",      spiceLevel: "Medium", mealType: ["Snack","Starter"],      dietTags: ["Vegetarian"] },
  { name: "Rajma Chawal",      spiceLevel: "Mild",   mealType: ["Dinner","Lunch"],       dietTags: ["Vegetarian","Gluten-Free"] },
  { name: "Aloo Paratha",      spiceLevel: "None",   mealType: ["Breakfast","Lunch"],    dietTags: ["Vegetarian"] },
  { name: "Kebab",             spiceLevel: "Medium", mealType: ["Dinner","Snack"],       dietTags: [] },
  { name: "Biryani",           spiceLevel: "Medium", mealType: ["Dinner","Lunch"],       dietTags: ["Gluten-Free"] },
];

const indianSouth = [
  { name: "Masala Dosa",       spiceLevel: "Mild",   mealType: ["Breakfast","Lunch"],   dietTags: ["Vegetarian"] },
  { name: "Idli",              spiceLevel: "None",   mealType: ["Breakfast"],           dietTags: ["Vegetarian","Vegan","Gluten-Free"] },
  { name: "Vada",              spiceLevel: "Mild",   mealType: ["Breakfast","Snack"],   dietTags: ["Vegetarian"] },
  { name: "Uttappam",          spiceLevel: "Mild",   mealType: ["Breakfast","Lunch"],   dietTags: ["Vegetarian"] },
  { name: "Appam",             spiceLevel: "None",   mealType: ["Breakfast"],           dietTags: ["Vegetarian","Gluten-Free"] },
  { name: "Puttu",             spiceLevel: "None",   mealType: ["Breakfast"],           dietTags: ["Vegetarian","Gluten-Free"] },
  { name: "Idiyappam",         spiceLevel: "None",   mealType: ["Breakfast"],           dietTags: ["Vegetarian","Gluten-Free"] },
  { name: "Kerala Parotta",    spiceLevel: "None",   mealType: ["Dinner","Lunch"],      dietTags: ["Vegetarian"] },
  { name: "Sambar",            spiceLevel: "Medium", mealType: ["Breakfast","Lunch"],   dietTags: ["Vegetarian","Vegan","Gluten-Free"] },
  { name: "Rasam",             spiceLevel: "Medium", mealType: ["Lunch","Dinner"],      dietTags: ["Vegetarian","Vegan","Gluten-Free"] },
  { name: "Avial",             spiceLevel: "Mild",   mealType: ["Lunch","Dinner"],      dietTags: ["Vegetarian","Gluten-Free"] },
  { name: "Thoran",            spiceLevel: "Mild",   mealType: ["Lunch","Dinner"],      dietTags: ["Vegetarian","Vegan","Gluten-Free"] },
  { name: "Fish Curry",        spiceLevel: "Hot",    mealType: ["Lunch","Dinner"],      dietTags: ["Gluten-Free"] },
  { name: "Chicken Curry",     spiceLevel: "Medium", mealType: ["Lunch","Dinner"],      dietTags: ["Gluten-Free"] },
  { name: "Beef Fry",          spiceLevel: "Hot",    mealType: ["Lunch","Dinner"],      dietTags: ["Gluten-Free"] },
  { name: "Malabar Biryani",   spiceLevel: "Medium", mealType: ["Lunch","Dinner"],      dietTags: ["Gluten-Free"] },
  { name: "Payasam",           spiceLevel: "None",   mealType: ["Dessert"],             dietTags: ["Vegetarian","Gluten-Free"] },
  { name: "Hyderabadi Biryani",spiceLevel: "Medium", mealType: ["Lunch","Dinner"],      dietTags: ["Gluten-Free"] },
];

const indianWest = [
  { name: "Pav Bhaji",        spiceLevel: "Medium", mealType: ["Lunch","Snack"],       dietTags: ["Vegetarian"] },
  { name: "Vada Pav",         spiceLevel: "Hot",    mealType: ["Snack","Breakfast"],   dietTags: ["Vegetarian"] },
  { name: "Dhokla",           spiceLevel: "None",   mealType: ["Breakfast","Snack"],   dietTags: ["Vegetarian","Gluten-Free"] },
  { name: "Thepla",           spiceLevel: "Mild",   mealType: ["Breakfast","Snack"],   dietTags: ["Vegetarian"] },
  { name: "Misal Pav",        spiceLevel: "Hot",    mealType: ["Breakfast","Lunch"],   dietTags: ["Vegetarian"] },
  { name: "Puran Poli",       spiceLevel: "None",   mealType: ["Breakfast","Dessert"], dietTags: ["Vegetarian"] },
  { name: "Poha",             spiceLevel: "Mild",   mealType: ["Breakfast"],           dietTags: ["Vegetarian","Gluten-Free"] },
  { name: "Gujarati Thali",   spiceLevel: "Mild",   mealType: ["Lunch","Dinner"],      dietTags: ["Vegetarian"] },
  { name: "Rajasthani Thali", spiceLevel: "Medium", mealType: ["Lunch","Dinner"],      dietTags: [] },
  { name: "Dal Baati Churma", spiceLevel: "Medium", mealType: ["Lunch","Dinner"],      dietTags: ["Vegetarian"] },
];

const indianEast = [
  { name: "Macher Jhol",   spiceLevel: "Medium", mealType: ["Lunch","Dinner"],  dietTags: ["Gluten-Free"] },
  { name: "Luchi",         spiceLevel: "None",   mealType: ["Breakfast","Lunch"],dietTags: ["Vegetarian"] },
  { name: "Aloo Dum",      spiceLevel: "Medium", mealType: ["Lunch","Dinner"],  dietTags: ["Vegetarian","Vegan","Gluten-Free"] },
  { name: "Rasgulla",      spiceLevel: "None",   mealType: ["Dessert"],         dietTags: ["Vegetarian","Gluten-Free"] },
  { name: "Sandesh",       spiceLevel: "None",   mealType: ["Dessert"],         dietTags: ["Vegetarian","Gluten-Free"] },
  { name: "Mishti Doi",    spiceLevel: "None",   mealType: ["Dessert"],         dietTags: ["Vegetarian","Gluten-Free"] },
  { name: "Momos",         spiceLevel: "Mild",   mealType: ["Snack","Lunch"],   dietTags: [] },
  { name: "Thukpa",        spiceLevel: "Mild",   mealType: ["Lunch","Dinner"],  dietTags: [] },
];

const italian = [
  { name: "Pizza",            spiceLevel: "None",   mealType: ["Dinner","Lunch"],  dietTags: ["Vegetarian"] },
  { name: "Pizza Margherita", spiceLevel: "None",   mealType: ["Dinner","Lunch"],  dietTags: ["Vegetarian"] },
  { name: "Carbonara",        spiceLevel: "None",   mealType: ["Dinner","Lunch"],  dietTags: [] },
  { name: "Bolognese",        spiceLevel: "None",   mealType: ["Dinner","Lunch"],  dietTags: [] },
  { name: "Lasagna",          spiceLevel: "None",   mealType: ["Dinner","Lunch"],  dietTags: [] },
  { name: "Ravioli",          spiceLevel: "None",   mealType: ["Dinner","Lunch"],  dietTags: ["Vegetarian"] },
  { name: "Gnocchi",          spiceLevel: "None",   mealType: ["Dinner","Lunch"],  dietTags: ["Vegetarian"] },
  { name: "Risotto",          spiceLevel: "None",   mealType: ["Dinner","Lunch"],  dietTags: ["Vegetarian","Gluten-Free"] },
  { name: "Tagliatelle",      spiceLevel: "None",   mealType: ["Dinner","Lunch"],  dietTags: [] },
  { name: "Focaccia",         spiceLevel: "None",   mealType: ["Snack","Breakfast"],dietTags: ["Vegetarian","Vegan"] },
  { name: "Bruschetta",       spiceLevel: "None",   mealType: ["Starter","Snack"], dietTags: ["Vegetarian","Vegan"] },
  { name: "Tiramisu",         spiceLevel: "None",   mealType: ["Dessert"],         dietTags: ["Vegetarian"] },
  { name: "Cannoli",          spiceLevel: "None",   mealType: ["Dessert"],         dietTags: ["Vegetarian"] },
  { name: "Panna Cotta",      spiceLevel: "None",   mealType: ["Dessert"],         dietTags: ["Vegetarian","Gluten-Free"] },
  { name: "Gelato",           spiceLevel: "None",   mealType: ["Dessert"],         dietTags: ["Vegetarian","Gluten-Free"] },
];

const japanese = [
  { name: "Sushi",            spiceLevel: "None",   mealType: ["Dinner","Lunch"],  dietTags: ["Gluten-Free"] },
  { name: "Sashimi",          spiceLevel: "None",   mealType: ["Dinner","Lunch"],  dietTags: ["Gluten-Free"] },
  { name: "Ramen",            spiceLevel: "Mild",   mealType: ["Dinner","Lunch"],  dietTags: [] },
  { name: "Tonkatsu Ramen",   spiceLevel: "Mild",   mealType: ["Dinner","Lunch"],  dietTags: [] },
  { name: "Udon",             spiceLevel: "None",   mealType: ["Dinner","Lunch"],  dietTags: ["Vegetarian"] },
  { name: "Soba",             spiceLevel: "None",   mealType: ["Dinner","Lunch"],  dietTags: [] },
  { name: "Tempura",          spiceLevel: "None",   mealType: ["Dinner","Lunch"],  dietTags: [] },
  { name: "Tonkatsu",         spiceLevel: "None",   mealType: ["Dinner","Lunch"],  dietTags: [] },
  { name: "Yakitori",         spiceLevel: "None",   mealType: ["Snack","Dinner"],  dietTags: ["Gluten-Free"] },
  { name: "Okonomiyaki",      spiceLevel: "None",   mealType: ["Lunch","Dinner"],  dietTags: [] },
  { name: "Takoyaki",         spiceLevel: "None",   mealType: ["Snack"],           dietTags: [] },
  { name: "Curry Rice",       spiceLevel: "Mild",   mealType: ["Dinner","Lunch"],  dietTags: [] },
  { name: "Donburi",          spiceLevel: "None",   mealType: ["Dinner","Lunch"],  dietTags: ["Gluten-Free"] },
  { name: "Gyoza",            spiceLevel: "None",   mealType: ["Snack","Starter"], dietTags: [] },
  { name: "Onigiri",          spiceLevel: "None",   mealType: ["Snack","Breakfast"],dietTags: ["Gluten-Free"] },
  { name: "Bento",            spiceLevel: "None",   mealType: ["Lunch"],           dietTags: [] },
  { name: "Mochi",            spiceLevel: "None",   mealType: ["Dessert","Snack"], dietTags: ["Vegan","Gluten-Free"] },
];

const chinese = [
  { name: "Dim Sum",          spiceLevel: "None",   mealType: ["Breakfast","Lunch"],dietTags: [] },
  { name: "Dumplings",        spiceLevel: "None",   mealType: ["Snack","Lunch"],   dietTags: [] },
  { name: "Fried Rice",       spiceLevel: "None",   mealType: ["Dinner","Lunch"],  dietTags: [] },
  { name: "Chow Mein",        spiceLevel: "None",   mealType: ["Dinner","Lunch"],  dietTags: [] },
  { name: "Peking Duck",      spiceLevel: "None",   mealType: ["Dinner","Lunch"],  dietTags: [] },
  { name: "Kung Pao Chicken", spiceLevel: "Hot",    mealType: ["Dinner","Lunch"],  dietTags: ["Gluten-Free"] },
  { name: "Mapo Tofu",        spiceLevel: "Hot",    mealType: ["Dinner","Lunch"],  dietTags: ["Vegetarian","Gluten-Free"] },
  { name: "Hot Pot",          spiceLevel: "Medium", mealType: ["Dinner","Lunch"],  dietTags: [] },
  { name: "Bao",              spiceLevel: "None",   mealType: ["Snack","Breakfast"],dietTags: [] },
  { name: "Wontons",          spiceLevel: "None",   mealType: ["Snack","Starter"], dietTags: [] },
  { name: "Chinese Spring Rolls", spiceLevel: "None",mealType: ["Snack","Starter"],dietTags: [] },
];

const korean = [
  { name: "Korean BBQ",           spiceLevel: "Medium", mealType: ["Dinner","Lunch"],  dietTags: ["Gluten-Free"] },
  { name: "Bibimbap",             spiceLevel: "Medium", mealType: ["Dinner","Lunch"],  dietTags: [] },
  { name: "Kimchi",               spiceLevel: "Medium", mealType: ["Snack"],           dietTags: ["Vegan","Gluten-Free"] },
  { name: "Tteokbokki",           spiceLevel: "Hot",    mealType: ["Snack","Lunch"],   dietTags: ["Vegetarian","Gluten-Free"] },
  { name: "Japchae",              spiceLevel: "None",   mealType: ["Dinner","Lunch"],  dietTags: ["Gluten-Free"] },
  { name: "Bulgogi",              spiceLevel: "None",   mealType: ["Dinner","Lunch"],  dietTags: ["Gluten-Free"] },
  { name: "Galbi",                spiceLevel: "None",   mealType: ["Dinner","Lunch"],  dietTags: ["Gluten-Free"] },
  { name: "Korean Fried Chicken", spiceLevel: "Medium", mealType: ["Dinner","Snack"],  dietTags: [] },
  { name: "Kimchi Jjigae",        spiceLevel: "Medium", mealType: ["Lunch","Dinner"],  dietTags: ["Gluten-Free"] },
  { name: "Sundubu Jjigae",       spiceLevel: "Medium", mealType: ["Lunch","Dinner"],  dietTags: ["Gluten-Free"] },
  { name: "Kimbap",               spiceLevel: "None",   mealType: ["Lunch","Snack"],   dietTags: ["Gluten-Free"] },
  { name: "Mandu",                spiceLevel: "None",   mealType: ["Snack","Lunch"],   dietTags: [] },
];

const thaiSea = [
  { name: "Pad Thai",          spiceLevel: "Mild",   mealType: ["Dinner","Lunch"],  dietTags: ["Gluten-Free"] },
  { name: "Green Curry",       spiceLevel: "Hot",    mealType: ["Dinner","Lunch"],  dietTags: ["Gluten-Free"] },
  { name: "Red Curry",         spiceLevel: "Hot",    mealType: ["Dinner","Lunch"],  dietTags: ["Gluten-Free"] },
  { name: "Massaman Curry",    spiceLevel: "Medium", mealType: ["Dinner","Lunch"],  dietTags: ["Gluten-Free"] },
  { name: "Tom Yum",           spiceLevel: "Hot",    mealType: ["Lunch","Dinner"],  dietTags: ["Gluten-Free"] },
  { name: "Tom Kha",           spiceLevel: "Medium", mealType: ["Lunch","Dinner"],  dietTags: ["Gluten-Free"] },
  { name: "Mango Sticky Rice", spiceLevel: "None",   mealType: ["Dessert"],         dietTags: ["Vegan","Gluten-Free"] },
  { name: "Laksa",             spiceLevel: "Hot",    mealType: ["Lunch","Dinner"],  dietTags: [] },
  { name: "Nasi Goreng",       spiceLevel: "Medium", mealType: ["Lunch","Dinner"],  dietTags: [] },
  { name: "Rendang",           spiceLevel: "Hot",    mealType: ["Dinner","Lunch"],  dietTags: ["Gluten-Free"] },
  { name: "Pho",               spiceLevel: "Mild",   mealType: ["Breakfast","Lunch","Dinner"], dietTags: ["Gluten-Free"] },
  { name: "Banh Mi",           spiceLevel: "Mild",   mealType: ["Lunch","Snack"],   dietTags: [] },
  { name: "Sea Spring Rolls",  spiceLevel: "None",   mealType: ["Snack","Starter"], dietTags: [] },
  { name: "Adobo",             spiceLevel: "Mild",   mealType: ["Dinner","Lunch"],  dietTags: ["Gluten-Free"] },
  { name: "Satay",             spiceLevel: "Mild",   mealType: ["Snack","Starter"], dietTags: ["Gluten-Free"] },
];

const mexican = [
  { name: "Tacos",       spiceLevel: "Medium", mealType: ["Dinner","Lunch"],   dietTags: [] },
  { name: "Burritos",    spiceLevel: "Medium", mealType: ["Lunch","Dinner"],   dietTags: [] },
  { name: "Enchiladas",  spiceLevel: "Medium", mealType: ["Dinner","Lunch"],   dietTags: [] },
  { name: "Quesadillas", spiceLevel: "Mild",   mealType: ["Lunch","Snack"],    dietTags: ["Vegetarian"] },
  { name: "Nachos",      spiceLevel: "Mild",   mealType: ["Snack"],            dietTags: ["Vegetarian"] },
  { name: "Tamales",     spiceLevel: "Medium", mealType: ["Lunch","Dinner"],   dietTags: [] },
  { name: "Guacamole",   spiceLevel: "None",   mealType: ["Snack","Starter"],  dietTags: ["Vegan","Gluten-Free"] },
  { name: "Churros",     spiceLevel: "None",   mealType: ["Dessert","Snack"],  dietTags: ["Vegetarian"] },
  { name: "Mole",        spiceLevel: "Medium", mealType: ["Dinner","Lunch"],   dietTags: [] },
  { name: "Ceviche",     spiceLevel: "Medium", mealType: ["Starter","Lunch"],  dietTags: ["Gluten-Free"] },
  { name: "Empanadas",   spiceLevel: "Mild",   mealType: ["Snack","Lunch"],    dietTags: [] },
  { name: "Arepas",      spiceLevel: "None",   mealType: ["Breakfast","Snack"],dietTags: ["Gluten-Free"] },
];

const french = [
  { name: "Croissants",       spiceLevel: "None", mealType: ["Breakfast","Snack"],  dietTags: ["Vegetarian"] },
  { name: "Baguette",         spiceLevel: "None", mealType: ["Breakfast","Snack"],  dietTags: ["Vegetarian","Vegan"] },
  { name: "Ratatouille",      spiceLevel: "None", mealType: ["Dinner","Lunch"],     dietTags: ["Vegetarian","Vegan","Gluten-Free"] },
  { name: "Coq au Vin",       spiceLevel: "None", mealType: ["Dinner","Lunch"],     dietTags: [] },
  { name: "Beef Bourguignon", spiceLevel: "None", mealType: ["Dinner","Lunch"],     dietTags: [] },
  { name: "Crêpes",           spiceLevel: "None", mealType: ["Breakfast","Dessert"],dietTags: ["Vegetarian"] },
  { name: "Macarons",         spiceLevel: "None", mealType: ["Dessert","Snack"],    dietTags: ["Vegetarian","Gluten-Free"] },
  { name: "Soufflé",          spiceLevel: "None", mealType: ["Dessert"],            dietTags: ["Vegetarian","Gluten-Free"] },
];

const spanish = [
  { name: "Paella",             spiceLevel: "None", mealType: ["Dinner","Lunch"],   dietTags: ["Gluten-Free"] },
  { name: "Tapas",              spiceLevel: "None", mealType: ["Snack","Starter"],  dietTags: [] },
  { name: "Tortilla Española",  spiceLevel: "None", mealType: ["Breakfast","Lunch"],dietTags: ["Vegetarian","Gluten-Free"] },
  { name: "Gazpacho",           spiceLevel: "None", mealType: ["Starter","Lunch"],  dietTags: ["Vegan","Gluten-Free"] },
  { name: "Spanish Churros",    spiceLevel: "None", mealType: ["Breakfast","Dessert"],dietTags: ["Vegetarian"] },
];

const greek = [
  { name: "Moussaka",     spiceLevel: "None", mealType: ["Dinner","Lunch"],   dietTags: [] },
  { name: "Souvlaki",     spiceLevel: "None", mealType: ["Lunch","Dinner"],   dietTags: ["Gluten-Free"] },
  { name: "Gyros",        spiceLevel: "None", mealType: ["Lunch","Dinner"],   dietTags: [] },
  { name: "Greek Salad",  spiceLevel: "None", mealType: ["Starter","Lunch"],  dietTags: ["Vegetarian","Gluten-Free"] },
  { name: "Greek Baklava",spiceLevel: "None", mealType: ["Dessert"],          dietTags: ["Vegetarian"] },
];

const turkish = [
  { name: "Turkish Kebab",  spiceLevel: "Medium", mealType: ["Dinner","Lunch"],   dietTags: [] },
  { name: "Döner",          spiceLevel: "Mild",   mealType: ["Lunch","Dinner"],   dietTags: [] },
  { name: "Lahmacun",       spiceLevel: "Medium", mealType: ["Lunch","Dinner"],   dietTags: [] },
  { name: "Pide",           spiceLevel: "Mild",   mealType: ["Lunch","Dinner"],   dietTags: [] },
  { name: "Meze",           spiceLevel: "None",   mealType: ["Starter","Snack"],  dietTags: [] },
  { name: "Turkish Baklava",spiceLevel: "None",   mealType: ["Dessert"],          dietTags: ["Vegetarian"] },
];

const middleEastern = [
  { name: "Hummus",    spiceLevel: "None",   mealType: ["Snack","Starter"],  dietTags: ["Vegan","Gluten-Free"] },
  { name: "Falafel",   spiceLevel: "None",   mealType: ["Snack","Lunch"],    dietTags: ["Vegan"] },
  { name: "Shawarma",  spiceLevel: "Medium", mealType: ["Lunch","Dinner"],   dietTags: [] },
  { name: "Fattoush",  spiceLevel: "None",   mealType: ["Starter","Lunch"],  dietTags: ["Vegan"] },
  { name: "Tabouleh",  spiceLevel: "None",   mealType: ["Starter","Lunch"],  dietTags: ["Vegan","Gluten-Free"] },
  { name: "Kebabs",    spiceLevel: "Medium", mealType: ["Dinner","Lunch"],   dietTags: ["Gluten-Free"] },
  { name: "Manakish",  spiceLevel: "None",   mealType: ["Breakfast","Snack"],dietTags: ["Vegetarian"] },
  { name: "Mezze",     spiceLevel: "None",   mealType: ["Starter","Snack"],  dietTags: [] },
];

const african = [
  { name: "Injera",     spiceLevel: "None",   mealType: ["Lunch","Dinner"],  dietTags: ["Vegan","Gluten-Free"] },
  { name: "Doro Wat",   spiceLevel: "Hot",    mealType: ["Lunch","Dinner"],  dietTags: ["Gluten-Free"] },
  { name: "Tagine",     spiceLevel: "Medium", mealType: ["Dinner","Lunch"],  dietTags: ["Gluten-Free"] },
  { name: "Couscous",   spiceLevel: "None",   mealType: ["Lunch","Dinner"],  dietTags: ["Vegan"] },
  { name: "Jollof Rice",spiceLevel: "Medium", mealType: ["Lunch","Dinner"],  dietTags: ["Vegan","Gluten-Free"] },
];

const american = [
  { name: "Burgers",       spiceLevel: "None",   mealType: ["Lunch","Dinner"],  dietTags: [] },
  { name: "Fried Chicken", spiceLevel: "None",   mealType: ["Lunch","Dinner"],  dietTags: [] },
  { name: "Steak",         spiceLevel: "None",   mealType: ["Dinner","Lunch"],  dietTags: ["Gluten-Free"] },
  { name: "Pancakes",      spiceLevel: "None",   mealType: ["Breakfast"],       dietTags: ["Vegetarian"] },
  { name: "Waffles",       spiceLevel: "None",   mealType: ["Breakfast"],       dietTags: ["Vegetarian"] },
  { name: "Mac and Cheese",spiceLevel: "None",   mealType: ["Lunch","Dinner"],  dietTags: ["Vegetarian"] },
  { name: "BBQ",           spiceLevel: "None",   mealType: ["Dinner","Lunch"],  dietTags: ["Gluten-Free"] },
  { name: "Hot Dogs",      spiceLevel: "None",   mealType: ["Snack","Lunch"],   dietTags: [] },
  { name: "Sandwiches",    spiceLevel: "None",   mealType: ["Lunch","Snack"],   dietTags: [] },
  { name: "Cheesecake",    spiceLevel: "None",   mealType: ["Dessert"],         dietTags: ["Vegetarian"] },
  { name: "Apple Pie",     spiceLevel: "None",   mealType: ["Dessert"],         dietTags: ["Vegetarian"] },
];

const regional = [
  { name: "Brazilian Dishes",    spiceLevel: "None",   mealType: ["Dinner","Lunch"], dietTags: [] },
  { name: "Peruvian Dishes",     spiceLevel: "Medium", mealType: ["Dinner","Lunch"], dietTags: [] },
  { name: "Argentine Dishes",    spiceLevel: "None",   mealType: ["Dinner","Lunch"], dietTags: [] },
  { name: "Caribbean Dishes",    spiceLevel: "Medium", mealType: ["Dinner","Lunch"], dietTags: [] },
  { name: "Portuguese Dishes",   spiceLevel: "None",   mealType: ["Dinner","Lunch"], dietTags: [] },
  { name: "German Dishes",       spiceLevel: "None",   mealType: ["Dinner","Lunch"], dietTags: [] },
  { name: "British Dishes",      spiceLevel: "None",   mealType: ["Dinner","Lunch"], dietTags: [] },
  { name: "Scandinavian Dishes", spiceLevel: "None",   mealType: ["Dinner","Lunch"], dietTags: [] },
];

const allSeeds = [
  ...indianNorth.map(s => ({ ...s, cuisine: 'Indian',          region: 'North Indian' })),
  ...indianSouth.map(s => ({ ...s, cuisine: 'Indian',          region: 'South Indian' })),
  ...indianWest.map(s =>  ({ ...s, cuisine: 'Indian',          region: 'West Indian'  })),
  ...indianEast.map(s =>  ({ ...s, cuisine: 'Indian',          region: 'East Indian'  })),
  ...italian.map(s =>     ({ ...s, cuisine: 'Italian',         region: ''             })),
  ...japanese.map(s =>    ({ ...s, cuisine: 'Japanese',        region: ''             })),
  ...chinese.map(s =>     ({ ...s, cuisine: 'Chinese',         region: ''             })),
  ...korean.map(s =>      ({ ...s, cuisine: 'Korean',          region: ''             })),
  ...thaiSea.map(s =>     ({ ...s, cuisine: 'Thai / SE Asian', region: ''             })),
  ...mexican.map(s =>     ({ ...s, cuisine: 'Mexican',         region: 'Latin American'})),
  ...french.map(s =>      ({ ...s, cuisine: 'French',          region: ''             })),
  ...spanish.map(s =>     ({ ...s, cuisine: 'Spanish',         region: ''             })),
  ...greek.map(s =>       ({ ...s, cuisine: 'Greek',           region: ''             })),
  ...turkish.map(s =>     ({ ...s, cuisine: 'Turkish',         region: ''             })),
  ...middleEastern.map(s =>({ ...s, cuisine: 'Middle Eastern', region: ''             })),
  ...african.map(s =>     ({ ...s, cuisine: 'African',         region: ''             })),
  ...american.map(s =>    ({ ...s, cuisine: 'American',        region: ''             })),
  ...regional.map(s =>    ({ ...s, cuisine: 'Global',          region: ''             })),
];

// ═══════════════════════════════════════════════════════════════════════════════
// DESCRIPTIONS (used in card/detail view)
// ═══════════════════════════════════════════════════════════════════════════════
const DESCRIPTIONS = {
  "Butter Chicken": "Rich, creamy tomato-based curry with tender chicken — North India's most beloved comfort dish.",
  "Masala Dosa": "Crispy fermented rice crêpe filled with spiced potato, served with sambar and chutneys.",
  "Biryani": "Fragrant long-grain rice layered with spiced meat, saffron, and fried onions.",
  "Sushi": "Vinegared rice topped with fresh seafood, vegetables, and nori — Japanese culinary artistry.",
  "Ramen": "Rich noodle broth seasoned with soy, miso, or tonkotsu, topped with chashu pork, egg, and nori.",
  "Pizza": "Thin Italian flatbread topped with tomato sauce, mozzarella, and fresh ingredients, baked to perfection.",
  "Carbonara": "Silky Roman pasta made with eggs, Pecorino Romano, guanciale, and black pepper.",
  "Tacos": "Corn tortillas filled with seasoned meat, fresh salsa, and lime — the heart of Mexican street food.",
  "Pad Thai": "Stir-fried rice noodles with eggs, tofu or shrimp, peanuts, bean sprouts, and tamarind sauce.",
};

function getDescription(name) {
  return DESCRIPTIONS[name] || `Authentic ${name} — a beloved dish from its culinary tradition.`;
}

function getMoodsAndCharacteristics(seed) {
  const name = seed.name.toLowerCase();
  const mealType = seed.mealType || [];
  const spice = seed.spiceLevel;
  const moods = new Set();
  const primaryFlavors = new Set();
  const textures = new Set();

  if (mealType.includes('Dessert')) {
    moods.add('indulgent');
    moods.add('romantic');
    moods.add('comforting');
    primaryFlavors.add('Sweet');
    textures.add('Creamy');
  }

  if (mealType.includes('Breakfast') || mealType.includes('Snack')) {
    moods.add('quick');
    moods.add('energetic');
  }

  if (spice === 'Hot' || spice === 'Very Hot' || spice === 'Medium') {
    moods.add('spicy');
    moods.add('adventurous');
    primaryFlavors.add('Spiced');
    primaryFlavors.add('Bold');
  }

  if (seed.dietTags?.includes('Vegan') || seed.dietTags?.includes('Gluten-Free')) {
    moods.add('healthy');
    moods.add('light');
    primaryFlavors.add('Fresh');
  }

  if (name.includes('soup') || name.includes('curry') || name.includes('ramen') || name.includes('biryani') || name.includes('dal') || name.includes('pasta') || name.includes('carbonara') || name.includes('stew') || name.includes('hot pot') || name.includes('lasagna') || name.includes('risotto')) {
    moods.add('cozy');
    moods.add('comforting');
    primaryFlavors.add('Rich');
    primaryFlavors.add('Savory');
    textures.add('Silky');
    textures.add('Tender');
  }

  if (name.includes('salad') || name.includes('sashimi') || name.includes('sushi') || name.includes('spring roll') || name.includes('gazpacho') || name.includes('ceviche')) {
    moods.add('refreshing');
    moods.add('light');
    primaryFlavors.add('Fresh');
    primaryFlavors.add('Clean');
    textures.add('Crisp');
  }

  if (name.includes('taco') || name.includes('kebab') || name.includes('pizza') || name.includes('burger') || name.includes('fried') || name.includes('tempura') || name.includes('samosa') || name.includes('dosa') || name.includes('nacho')) {
    moods.add('energetic');
    moods.add('indulgent');
    primaryFlavors.add('Savory');
    textures.add('Crispy');
  }

  if (name.includes('roti') || name.includes('naan') || name.includes('paratha') || name.includes('baguette') || name.includes('focaccia')) {
    moods.add('comforting');
    moods.add('nostalgic');
    textures.add('Warm & Fluffy');
  }

  // Ensure at least 2 distinct moods
  if (moods.size === 0) {
    moods.add('comforting');
    moods.add('cozy');
  } else if (moods.size === 1) {
    moods.add('nostalgic');
  }

  if (primaryFlavors.size === 0) {
    primaryFlavors.add('Savory');
    primaryFlavors.add('Rich');
  }

  if (textures.size === 0) {
    textures.add('Tender');
  }

  return {
    moods: Array.from(moods).slice(0, 4),
    flavorProfile: {
      primary: Array.from(primaryFlavors).slice(0, 3),
      secondary: ['Aromatic', 'Balanced']
    },
    texture: Array.from(textures).slice(0, 3)
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// GENERATE
// ═══════════════════════════════════════════════════════════════════════════════
function run() {
  const allFoods = allSeeds.map((seed, index) => {
    const id = generateId(seed.name);
    const baseLock = index * 10;
    const kw = seed.name.split(' ')[0].toLowerCase();

    const override = manualOverrides[id];
    const gallery = override
      ? { hero: override }
      : {
          hero:        getLorem(kw, baseLock + 1),
          top:         getLorem(kw, baseLock + 2),
          side:        getLorem(kw, baseLock + 3),
          closeup:     getLorem(kw, baseLock + 4),
          detail:      getLorem(kw, baseLock + 5),
          environment: getLorem(kw, baseLock + 6),
        };

    const characteristics = getMoodsAndCharacteristics(seed);

    return {
      id,
      name: seed.name,
      cuisine: seed.cuisine,
      region: seed.region || '',
      description: getDescription(seed.name),
      gallery,
      moods: characteristics.moods,
      mealType: seed.mealType || ['Dinner', 'Lunch'],
      dietTags: seed.dietTags || [],
      spiceLevel: seed.spiceLevel,
      difficulty: seed.mealType?.includes('Breakfast') ? 'Easy' : 'Medium',
      prepTime: seed.mealType?.includes('Breakfast') ? 15 : 25,
      cookTime: seed.mealType?.includes('Dessert') ? 20 : 35,
      servings: 2,
      nutrition: {
        calories: seed.mealType?.includes('Dessert') ? 380 : seed.dietTags?.includes('Vegan') ? 320 : 510,
        protein: seed.dietTags?.includes('Vegan') ? 12 : 26,
        carbs: 48,
        fat: 18,
        fiber: 5
      },
      flavorProfile: characteristics.flavorProfile,
      texture: characteristics.texture,
      mainIngredients: [seed.name.split(' ')[0], "Spices"],
      ingredients: [
        { name: seed.name.split(' ')[0], amount: "300g" },
        { name: "Fresh herbs & seasoning", amount: "to taste" },
        { name: "Olive oil / Ghee", amount: "2 tbsp" }
      ],
      steps: [
        { step: 1, title: "Mise en place", description: `Gather and prepare all fresh ingredients for ${seed.name}.`, duration: 10, tip: "Bring chilled ingredients to room temperature for even cooking." },
        { step: 2, title: "Sauté & Aromatics", description: `Heat the pan over medium heat and develop deep aromatics for the dish.`, duration: 12, tip: "Don't rush the browning — that's where the fond and depth live." },
        { step: 3, title: "Simmer to Perfection", description: `Combine the main components and gently simmer until tender and thoroughly infused with flavors.`, duration: 18 },
        { step: 4, title: "Plating & Garnish", description: `Plate thoughtfully in warm bowls, garnish with freshly cut herbs, and serve hot.`, tip: "A squeeze of fresh lemon or finishing oil elevates the presentation." },
      ],
    };
  });

  const tsCode = `import { Food } from '../types/food';

export const MOCK_FOODS: Food[] = ${JSON.stringify(allFoods, null, 2)};

export const FOOD_MAP = new Map(MOCK_FOODS.map(f => [f.id, f]));
`;

  fs.writeFileSync('./src/data/mockFoods.ts', tsCode);

  const overriddenCount = allFoods.filter(f => manualOverrides[f.id]).length;
  console.log(`✓ mockFoods.ts updated: ${allFoods.length} foods total`);
  console.log(`  ${overriddenCount} with user-provided photos`);
  console.log(`  ${allFoods.length - overriddenCount} with fallback images`);
}

run();
