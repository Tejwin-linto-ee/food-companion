// French Classic Culinary Recipes (6 dishes: Ratatouille, Coq au Vin, Boeuf Bourguignon, Crêpes, Macarons, Soufflé)
module.exports = [
  // 15. RATATOUILLE (Traditional Provençal Ratatouille Niçoise)
  {
    id: 'ratatouille',
    name: 'Authentic Provençal Ratatouille (Slow-Simmered Ratatouille Niçoise)',
    cuisine: 'French',
    region: 'France (Provence / Nice)',
    servings: 4,
    prepTime: 30,
    cookTime: 45,
    difficulty: 'Medium',
    overview: {
      summary: 'The sun-drenched soul of Provence: ripe Mediterranean vegetables — eggplant, zucchini, red bell peppers, sweet yellow onions, and vine-ripened tomatoes — each sautéed separately in fragrant extra virgin olive oil to caramelize individual sugars and preserve distinct textures. Then united gently in a heavy Dutch oven with fresh thyme, rosemary, bay leaf, and crushed garlic, and slow-simmered until meltingly tender and glossy.',
      appearance: 'A glistening, colorful stew of tender ruby tomatoes, golden zucchini cubes, deep purple eggplant, and sweet red peppers bathed in olive-oil-sheened juices, flecked with fresh green thyme.',
      texture: 'Silky, meltingly tender vegetables that retain their individual shapes without disintegrating into mush, bathed in a rich, velvety vegetable emulsion.',
      flavor: 'Sweet caramelized peppers and onions, rich earthy eggplant, sunny tomato acidity, and fragrant herbal garrigue perfume of thyme and garlic.',
      restingTimeMinutes: 15
    },
    equipment: [
      { name: 'Wide heavy skillet or sauté pan', purpose: 'For sautéing each vegetable individually in olive oil to build caramelization.' },
      { name: 'Heavy enamelled Dutch oven or Cocotte', purpose: 'For the slow, gentle final braise of all united vegetables.' }
    ],
    beforeYouStart: [
      { task: 'Cut 1 large eggplant into uniform 2.5cm cubes; toss with 1 tsp salt in a colander and drain for 20 minutes to purge excess water.', durationMinutes: 20 },
      { task: 'Cut 2 medium zucchini into 2cm cubes, 2 red bell peppers into 2cm squares, and dice 2 yellow onions.', durationMinutes: 10 },
      { task: 'Score, blanch, peel, seed, and coarsely chop 4 ripe vine tomatoes.', durationMinutes: 10 }
    ],
    ingredientPrepGuide: [
      { item: 'THE PROVENÇAL GOLDEN RULE: Sauté Each Vegetable Separately!', technique: 'Never dump all raw vegetables into one pot at the same time! Each vegetable has different water content and cooking times. Cooking them individually in hot olive oil caramelizes each vegetable\'s sugars and seals its texture before they are simmered together.' },
      { item: 'Olive Oil Emulsion', technique: 'Generous amounts of fruity Provençal extra virgin olive oil are essential. As the vegetables simmer, the olive oil emulsifies with the tomato juices into a luxurious, glossy sauce.' }
    ],
    essentialIngredients: [
      { name: 'Globe eggplant (Aubergine)', prep: 'cubed into 2.5cm pieces, salted and dried', amount: '1 large', metric: '400g', imperial: '14 oz', common: '1 eggplant' },
      { name: 'Zucchini (Courgettes)', prep: 'cubed into 2cm pieces', amount: '2 medium', metric: '350g', imperial: '12 oz', common: '2 zucchini' },
      { name: 'Red bell peppers', prep: 'seeded and cut into 2cm squares', amount: '2 large', metric: '300g', imperial: '10.5 oz', common: '2 peppers' },
      { name: 'Yellow onions', prep: 'diced into 1cm pieces', amount: '2 medium', metric: '250g', imperial: '8.8 oz', common: '2 onions' },
      { name: 'Ripe vine tomatoes', prep: 'peeled, seeded, and chopped', amount: '4 medium', metric: '400g', imperial: '14 oz', common: '4 tomatoes' },
      { name: 'Fresh garlic cloves', prep: 'thinly sliced', amount: '4 cloves', metric: '12g', imperial: '0.4 oz', common: '4 cloves' },
      { name: 'Fresh thyme sprigs & Bay leaf', prep: 'tied with kitchen twine', amount: '4 sprigs thyme + 1 bay leaf', metric: '5g', imperial: '0.18 oz', common: 'bouquet garni' },
      { name: 'Extra virgin olive oil (Provençal)', prep: 'generous pour for cooking', amount: '6 tbsp', metric: '90ml', imperial: '3 fl oz', common: '6 tbsp' },
      { name: 'Fresh basil leaves', prep: 'hand-torn for final garnish', amount: '1/2 cup packed', metric: '15g', imperial: '0.5 oz', common: '1/2 cup' },
      { name: 'Fine sea salt & Freshly ground black pepper', prep: 'seasoning', amount: '1.5 tsp salt + 1 tsp pepper', metric: '10g', imperial: '0.35 oz', common: 'mixed' }
    ],
    steps: [
      {
        step: 1,
        title: 'SAUTÉ VEGETABLES INDIVIDUALLY IN OLIVE OIL',
        whatYouNeed: ['Skillet', 'Olive oil', 'Salted dried eggplant cubes', 'Zucchini cubes', 'Bell pepper squares'],
        description: 'Heat 2 tbsp olive oil in a wide skillet over medium-high heat. Add dried eggplant cubes in a single layer. Sauté for 6 minutes, turning often, until golden-brown and tender; transfer to a bowl. Add 1 tbsp oil to the skillet, sauté zucchini cubes for 5 minutes until lightly browned; transfer to bowl. Add 1 tbsp oil, sauté bell peppers for 5 minutes until soft and blistering at edges; transfer to bowl.',
        howToDoIt: 'High heat caramelizes exterior vegetable sugars without turning them into soggy mush.',
        heat: 'Medium-High Heat',
        duration: 18,
        visualCues: 'Eggplants turn dark golden-amber; zucchini develops light brown freckles; peppers soften with blistered edges.',
        hear: 'Lively, crisp frying sizzle for each vegetable batch.',
        smell: 'Incredible aroma of caramelized vegetables and fruity hot olive oil.',
        textureCheck: 'Tender with distinct edges — not collapsed.',
        whatShouldThisLookLike: 'Bowls of caramelized golden-brown vegetables.',
        tip: 'Do not crowd the pan — sauté in batches if your pan is small so vegetables fry rather than steam.',
        commonMistake: 'Cooking all vegetables together from raw, resulting in gray watery mush.',
        moveOnWhen: 'Eggplant, zucchini, and peppers are separately browned and tender.',
        quickInstructions: 'Sauté eggplant cubes 6 mins, zucchini 5 mins, and bell peppers 5 mins separately in olive oil until golden.'
      },
      {
        step: 2,
        title: 'COOK SWEET ONIONS, GARLIC & TOMATOES',
        whatYouNeed: ['Dutch oven', '2 tbsp olive oil', 'Diced onions', 'Sliced garlic', 'Chopped peeled tomatoes', 'Bouquet garni', 'Salt & Pepper'],
        description: 'In a heavy Dutch oven, heat 2 tbsp olive oil over medium heat. Add diced onions and 1 tsp salt. Cook gently for 8 minutes until soft, sweet, and translucent. Stir in sliced garlic for 1 minute. Add chopped tomatoes, bouquet garni (thyme and bay leaf), and black pepper. Simmer for 10 minutes, breaking up tomatoes with a wooden spoon, until a thick, rich compote forms.',
        howToDoIt: 'Slowly cooking the onions and tomatoes creates the sweet, acidic foundation that unites the other vegetables.',
        heat: 'Medium to Low Heat',
        duration: 15,
        visualCues: 'Tomatoes break down into a thick, bubbling, glistening red-orange fond with fragrant olive oil.',
        smell: 'Sweet onions, garlic, warm tomatoes, and earthy thyme.',
        textureCheck: 'Thick, jammy tomato compote.',
        whatShouldThisLookLike: 'A fragrant, bubbling Provençal tomato-onion base.',
        tip: 'Peeling the tomatoes by blanching in boiling water for 30 seconds ensures no papery skins disrupt the smooth stew.',
        commonMistake: 'Rushing the onions and burning the garlic.',
        moveOnWhen: 'Tomato compote is thick and jammy.',
        quickInstructions: 'Sauté onions in Dutch oven 8 mins, add garlic, add peeled tomatoes and herbs, simmer 10 mins into thick compote.'
      },
      {
        step: 3,
        title: 'UNITE VEGETABLES & SLOW-SIMMER TOGETHER',
        whatYouNeed: ['Tomato base in Dutch oven', 'Browned eggplant, zucchini, and peppers'],
        description: 'Gently fold the sautéed eggplant, zucchini, and bell peppers into the tomato compote in the Dutch oven. Stir carefully with a wooden spoon to coat all vegetables in the sauce without crushing them. Cover the pot with a lid, reduce heat to low, and simmer gently for 20 minutes. Uncover and simmer 10 more minutes until excess liquid evaporates and the sauce is glossy and thick.',
        howToDoIt: 'Simmering uncovered at the end concentrates the natural juices and emulsifies the olive oil into a lustrous glaze.',
        heat: 'Low Gentle Simmer',
        duration: 30,
        visualCues: 'Vegetables are completely tender yet distinct; sauce thickens into a glossy, olive-oil-sheened coating.',
        hear: 'Gentle, intermittent bubbling.',
        smell: 'Rich Provençal garden aromas: sweet peppers, thyme, and roasted eggplant.',
        textureCheck: 'Melt-in-the-mouth tenderness while each vegetable cube remains whole and recognizable.',
        whatShouldThisLookLike: 'A vibrant, glossy, colorful French stew.',
        tip: 'Stir only once or twice very gently — excessive stirring will break the tender zucchini and eggplant into baby food.',
        commonMistake: 'Boiling aggressively, which emulsifies air and destroys the jewel-like clarity of the stew.',
        moveOnWhen: 'Vegetables are meltingly tender and sauce is thick and glossy.',
        quickInstructions: 'Fold browned vegetables into tomato base, simmer covered on low for 20 mins, uncover and simmer 10 mins.'
      },
      {
        step: 4,
        title: 'REST & GARNISH WITH FRESH BASIL & OLIVE OIL',
        whatYouNeed: ['Simmered Ratatouille', 'Fresh basil leaves', 'Top-quality extra virgin olive oil'],
        description: 'Remove Dutch oven from heat. Discard thyme sprigs and bay leaf. Let rest for at least 15 minutes (or cool to warm room temperature). Just before serving, tear fresh basil leaves over the top and drizzle with a generous swirl of fruity extra virgin olive oil. Serve with crusty baguette.',
        howToDoIt: 'Ratatouille is legendary because it tastes far superior at warm room temperature or the next day, allowing all vegetable flavors to harmonize completely.',
        heat: 'No Heat',
        duration: 15,
        visualCues: 'Deep jewel tones of purple, red, and yellow glinting beneath green torn basil and olive oil.',
        smell: 'Fresh peppery basil and sweet braised vegetables.',
        textureCheck: 'Silky, velvety, and luxurious on the palate.',
        whatShouldThisLookLike: 'The authentic French country ratatouille.',
        tip: 'Never serve ratatouille piping, tongue-burning hot — let it cool to warm room temperature to appreciate its delicate sweetness.',
        commonMistake: 'Serving straight off a boiling stove.',
        moveOnWhen: 'Rested, garnished with basil, and ready to serve.',
        quickInstructions: 'Discard herb bundle, rest 15 minutes, fold in fresh torn basil and drizzle with extra virgin olive oil; serve warm.'
      }
    ],
    commonMistakes: [
      { mistake: 'Dumping everything in raw', remedy: 'Sauté each vegetable individually first to caramelize and build flavor.' },
      { mistake: 'Serving boiling hot', remedy: 'Ratatouille should be served warm or at room temperature for maximum sweetness.' }
    ],
    troubleshooting: [
      {
        problem: 'Ratatouille is watery and thin',
        whatHappened: 'Vegetables released too much moisture.',
        whyItHappened: 'The pot remained covered the entire time.',
        whatToDoNow: 'Uncover pot, turn heat to medium, and simmer briskly for 6-8 minutes until excess water evaporates and sauce is thick.',
        howToPrevent: 'Always finish cooking uncovered for the last 10 minutes.'
      }
    ],
    substitutions: [
      { original: 'Fresh tomatoes', substitute: 'Whole canned San Marzano plum tomatoes, crushed by hand', notes: 'Excellent year-round alternative to out-of-season fresh tomatoes.' }
    ],
    safetyNotes: ['Vegetables stay hot inside Dutch oven for a long time; let cool comfortably.'],
    servingGuide: {
      restingTime: 'Rest 15 minutes (or serve at room temperature the next day).',
      temperature: 'Warm or room temperature.',
      garnishing: 'Fresh hand-torn basil leaves and a drizzle of extra virgin olive oil.',
      accompaniments: 'Crusty French baguette, roasted chicken, grilled fish, or soft goat cheese.'
    }
  },

  // 16. COQ AU VIN (Authentic French Braised Chicken in Burgundy Wine)
  {
    id: 'coq-au-vin',
    name: 'Authentic French Coq au Vin (Chicken Braised in Red Burgundy Wine with Bacon & Mushrooms)',
    cuisine: 'French',
    region: 'France (Burgundy)',
    servings: 4,
    prepTime: 30,
    cookTime: 60,
    difficulty: 'Hard',
    overview: {
      summary: 'The grand classic of Burgundy: chicken pieces seared in rendered smoked pork lardons, braised gently in a full bottle of dry red Burgundy wine (Pinot Noir) with aromatics, rich veal or chicken stock, and a bouquet garni. Finished with golden caramelized pearl onions and browned cremini mushrooms, then thickened with a traditional beurre manié into a glossy, mirror-finish mahogany sauce.',
      appearance: 'Tender chicken pieces coated in a luxurious, dark burgundy-purple glossy sauce, adorned with glistening glazed pearl onions, browned mushrooms, and crispy smoked bacon lardons.',
      texture: 'Fall-off-the-bone tender chicken that stays succulent, contrasted with tender-crisp mushrooms, sweet melting pearl onions, and chewy smoky lardons.',
      flavor: 'Deep, rich, and sophisticated: dry red wine reduction, smoky cured bacon, savory chicken, earthy mushrooms, and sweet caramelized onions with thyme and garlic.',
      restingTimeMinutes: 10
    },
    equipment: [
      { name: 'Heavy enamelled Dutch oven (Cocotte)', purpose: 'Essential for even browning, slow braising, and heat retention.' },
      { name: 'Spider skimmer or slotted spoon', purpose: 'To transfer lardons, chicken, and vegetables without losing rendered fat.' }
    ],
    beforeYouStart: [
      { task: 'Cut 150g thick-cut smoked bacon into 1cm batons (lardons).', durationMinutes: 5 },
      { task: 'Pat 1.2kg bone-in, skin-on chicken pieces (thighs and drumsticks) completely dry with paper towels; season with 1 tsp salt.', durationMinutes: 5 },
      { task: 'Peel 16 fresh pearl onions (blanch in boiling water for 1 minute to slip skins off easily) and clean 250g cremini mushrooms.', durationMinutes: 10 }
    ],
    ingredientPrepGuide: [
      { item: 'Wine Selection (The Pinot Noir Rule)', technique: 'Always use a full-bodied, dry, fruit-forward red wine — traditionally a Burgundy Pinot Noir or Côtes du Rhône. Never use cheap "cooking wine" containing salt and preservatives! If you wouldn\'t drink it from a glass, don\'t put it in your sauce.' },
      { item: 'Beurre Manié Sauce Finishing', technique: 'Knead equal parts softened butter (2 tbsp) and all-purpose flour (2 tbsp) into a smooth paste (beurre manié). Whisking small nuggets of this cold paste into the hot simmering wine sauce thickens it into a glossy, mirror-like velvet glaze without lumps.' }
    ],
    essentialIngredients: [
      { name: 'Bone-in, skin-on chicken thighs & drumsticks', prep: 'trimmed and dried', amount: '1.2 kg', metric: '1200g', imperial: '2.6 lbs', common: '6-8 pieces' },
      { name: 'Smoked thick-cut bacon (Lardons)', prep: 'sliced into 1cm matchsticks', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '1 cup' },
      { name: 'Dry red Burgundy wine (Pinot Noir)', prep: 'good quality drinking wine', amount: '1 bottle (750ml)', metric: '750ml', imperial: '25 fl oz', common: '1 bottle' },
      { name: 'Rich chicken or veal stock', prep: 'low sodium', amount: '2 cups', metric: '480ml', imperial: '16 fl oz', common: '2 cups' },
      { name: 'Pearl onions', prep: 'peeled whole', amount: '16 onions', metric: '200g', imperial: '7 oz', common: '16 onions' },
      { name: 'Cremini or button mushrooms', prep: 'cleaned and halved/quartered', amount: '250g', metric: '250g', imperial: '8.8 oz', common: '2.5 cups' },
      { name: 'Carrots', prep: 'peeled and sliced into 2cm rounds', amount: '2 medium', metric: '150g', imperial: '5.3 oz', common: '2 carrots' },
      { name: 'Yellow onion & Garlic cloves', prep: 'diced onion + 4 smashed garlic cloves', amount: '1 onion + 4 cloves', metric: '150g', imperial: '5.3 oz', common: 'mixed' },
      { name: 'Tomato paste', prep: 'concentrated', amount: '1 tbsp', metric: '20g', imperial: '0.7 oz', common: '1 tbsp' },
      { name: 'Cognac or brandy', prep: 'for flambé deglazing', amount: '1/4 cup', metric: '60ml', imperial: '2 fl oz', common: '1/4 cup' },
      { name: 'Bouquet garni (Fresh thyme, rosemary, bay leaf, parsley stems)', prep: 'tied with twine', amount: '1 bundle', metric: '10g', imperial: '0.35 oz', common: 'bundle' },
      { name: 'Unsalted butter & All-purpose flour (Beurre Manié)', prep: 'mashed into paste', amount: '2 tbsp butter + 2 tbsp flour', metric: '30g each', imperial: '1 oz each', common: '2 tbsp each' },
      { name: 'Fine sea salt & Black pepper', prep: 'seasoning', amount: '1.5 tsp salt + 1 tsp pepper', metric: '10g', imperial: '0.35 oz', common: 'mixed' }
    ],
    steps: [
      {
        step: 1,
        title: 'RENDER LARDONS & SEAR CHICKEN IN BACON FAT',
        whatYouNeed: ['Dutch oven', 'Bacon lardons', 'Chicken pieces', 'Tongs', 'Spider skimmer'],
        description: 'In the Dutch oven over medium heat, cook bacon lardons for 7 to 8 minutes until golden-brown and crispy, rendering their smoky fat. Remove lardons with a slotted spoon to a plate, leaving the hot fat in the pot. Increase heat to medium-high. Working in batches, add chicken pieces skin-side down. Sear for 5 to 6 minutes until the skin is deep golden-brown and crispy. Flip and sear for 3 minutes on the other side. Transfer chicken to a plate.',
        howToDoIt: 'Rendering the bacon fat first provides the flavorful cooking medium that infuses the chicken skin with smoke and richness.',
        heat: 'Medium to Medium-High Heat',
        duration: 18,
        visualCues: 'Lardons turn crispy and golden-amber; chicken develops a rich, crackling golden-brown skin.',
        hear: 'Loud, steady sizzle of chicken searing in rendered bacon fat.',
        smell: 'Irresistible smoky bacon and searing poultry.',
        textureCheck: 'Crisp chicken skin.',
        whatShouldThisLookLike: 'Crisp bacon and seared chicken pieces resting on plates.',
        tip: 'Do not crowd the Dutch oven — searing in two batches ensures chicken browns deeply rather than steaming.',
        commonMistake: 'Discarding the rendered bacon fat — it is the flavor engine of Coq au Vin!',
        moveOnWhen: 'Lardons are crisp, chicken is seared, and set aside.',
        quickInstructions: 'Crisp lardons in Dutch oven, remove; sear chicken pieces in bacon fat 5-6 mins per side until golden.'
      },
      {
        step: 2,
        title: 'BROWN MUSHROOMS & PEARL ONIONS (THE GARNITURE)',
        whatYouNeed: ['Mushrooms', 'Pearl onions', '1 tbsp butter', 'Bacon fat in pot'],
        description: 'Pour off all but 2 tbsp fat from the Dutch oven. Add pearl onions and mushrooms. Sauté over medium-high heat for 6 to 8 minutes, tossing frequently, until the onions develop golden caramelized spots and the mushrooms are browned and tender. Transfer onions and mushrooms to a plate and set aside.',
        howToDoIt: 'Browning the garniture separately prevents them from turning soggy and waterlogged during the long braise.',
        heat: 'Medium-High Heat',
        duration: 8,
        visualCues: 'Mushrooms turn deep chestnut-brown; pearl onions are glossy with browned caramelized patches.',
        smell: 'Sweet roasting onions and earthy browned mushrooms.',
        textureCheck: 'Tender with a slight bite.',
        whatShouldThisLookLike: 'Caramelized mushrooms and whole pearl onions.',
        tip: 'Reserve these vegetables to add back during the final 15 minutes of cooking so they retain their texture.',
        commonMistake: 'Simmering mushrooms for an hour with the chicken, which turns them rubbery and gray.',
        moveOnWhen: 'Mushrooms and onions are browned and transferred to plate.',
        quickInstructions: 'Sauté pearl onions and mushrooms in remaining fat 6-8 mins until browned; set aside.'
      },
      {
        step: 3,
        title: 'DEGLAZE WITH COGNAC & BRAISE IN BURGUNDY WINE',
        whatYouNeed: ['Diced onion & sliced carrots', '4 smashed garlic cloves', '1 tbsp tomato paste', '1/4 cup Cognac', '750ml Burgundy wine', '2 cups stock', 'Bouquet garni', 'Seared chicken & lardons'],
        description: 'Add diced onion and carrots to the pot; cook 4 minutes until softened. Stir in smashed garlic and tomato paste for 1 minute. Pour in 1/4 cup Cognac and scrape up all browned bits (fond) from the bottom. Pour in the full bottle of red Burgundy wine and 2 cups chicken stock. Return seared chicken, crispy lardons, and bouquet garni to the pot. Bring to a boil, reduce to low, cover with lid, and simmer gently for 40 minutes.',
        howToDoIt: 'Scraping up the caramelized fond with wine dissolves the concentrated proteins directly into the braising liquid.',
        heat: 'Low Gentle Simmer',
        duration: 45,
        visualCues: 'Deep crimson wine broth gently bubbling around tender chicken pieces.',
        smell: 'Heady aroma of simmering Pinot Noir, herbs, bacon, and garlic.',
        textureCheck: 'Chicken is tender and yielding to a fork.',
        whatShouldThisLookLike: 'Chicken pieces braising in aromatic red wine broth.',
        tip: 'Keep the simmer gentle — boiling vigorously will dry out the chicken meat and make it stringy.',
        commonMistake: 'Using sweet cooking wine or oaky California Cabernet, which turns bitter when reduced.',
        moveOnWhen: 'Chicken is fork-tender after 40 minutes.',
        quickInstructions: 'Cook onion, carrot, garlic, tomato paste; deglaze with Cognac, add wine, stock, chicken, lardons, and herbs; simmer covered 40 mins.'
      },
      {
        step: 4,
        title: 'THICKEN WITH BEURRE MANIÉ & GLOSS SAUCE',
        whatYouNeed: ['Browned mushrooms & pearl onions', 'Beurre manié (mashed butter & flour)', 'Whisk'],
        description: 'Add the reserved browned pearl onions and mushrooms to the pot. Simmer uncovered for 10 minutes. Transfer chicken pieces and vegetables with a slotted spoon to a warm serving platter. Whisk small pea-sized pieces of the beurre manié paste into the hot simmering wine sauce. Simmer briskly for 4 to 5 minutes, whisking constantly, until the sauce reduces into a rich, glossy, mirror-like burgundy velvet glaze that coats the back of a spoon. Taste and adjust seasoning with salt and pepper.',
        howToDoIt: 'Cold butter in the beurre manié coats flour particles, allowing them to disperse into the hot liquid and thicken instantly without clumping into lumps.',
        heat: 'Medium Heat',
        duration: 15,
        visualCues: 'Sauce transforms from thin purple broth into a luxurious, glossy, dark mahogany-purple velvet glaze.',
        smell: 'Rich reduced wine, sweet butter, and roasted aromatics.',
        textureCheck: 'Silky, velvety sauce with high-gloss sheen.',
        whatShouldThisLookLike: 'A mirror-like burgundy sauce bubbling gently.',
        tip: 'Ladle the glossy sauce generously over the chicken, mushrooms, and pearl onions on the platter.',
        commonMistake: 'Dumping raw dry flour into hot sauce, creating gummy white flour dumplings.',
        moveOnWhen: 'Sauce is thick, glossy, and poured over chicken.',
        quickInstructions: 'Add mushrooms and onions for 10 mins, remove chicken to platter, whisk beurre manié into sauce until glossy and thick; pour over chicken.'
      }
    ],
    commonMistakes: [
      { mistake: 'Using cheap cooking wine', remedy: 'Always use a drinkable, fruit-forward red wine like Pinot Noir or Côtes du Rhône.' },
      { mistake: 'Boiling the chicken rapidly', remedy: 'Keep at a gentle simmer to ensure chicken stays meltingly tender.' }
    ],
    troubleshooting: [
      {
        problem: 'Sauce tastes overly acidic',
        whatHappened: 'The red wine acid was too sharp.',
        whyItHappened: 'Wine was high in acidity and lacked residual fruit sweetness.',
        whatToDoNow: 'Whisk in 1 teaspoon of red currant jelly, honey, or a pinch of sugar and 1 extra tablespoon of butter.',
        howToPrevent: 'Select a fruit-forward Pinot Noir rather than a high-tannin astringent wine.'
      }
    ],
    substitutions: [
      { original: 'Burgundy Pinot Noir', substitute: 'Côtes du Rhône, Syrah, or Merlot', notes: 'Delivers excellent dark berry depth.' },
      { original: 'Cognac', substitute: 'Brandy or extra chicken stock', notes: 'Adds rich caramel warmth.' }
    ],
    safetyNotes: ['Turn off heat when pouring Cognac near open flames to avoid unexpected flare-ups.'],
    servingGuide: {
      restingTime: 'Rest 10 minutes before serving.',
      temperature: 'Piping hot.',
      garnishing: 'Fresh chopped flat-leaf parsley and crispy bacon lardons.',
      accompaniments: 'Buttery mashed potatoes (Purée Robuchon), buttered egg noodles, or crusty French baguette.'
    }
  },

  // 17. BEEF BOURGUIGNON (Authentic Boeuf Bourguignon)
  {
    id: 'beef-bourguignon',
    name: 'Authentic French Beef Bourguignon (Boeuf Bourguignon Braised in Red Wine)',
    cuisine: 'French',
    region: 'France (Burgundy)',
    servings: 6,
    prepTime: 35,
    cookTime: 180,
    difficulty: 'Hard',
    overview: {
      summary: 'The ultimate masterpiece of French home cooking immortalized by Auguste Escoffier and Julia Child: large cubes of well-marbled beef chuck seared in rendered smoked pork lardons until deeply mahogany, slow-braised for three hours in a full bottle of French Burgundy red wine, rich beef stock, roasted carrots, garlic, and a bouquet garni. Finished with golden butter-glazed pearl onions and browned mushrooms in a satin-smooth, deeply savory wine reduction.',
      appearance: 'A majestic cocotte of meltingly tender, dark mahogany beef cubes bathed in an opaque, glossy, deep burgundy-brown sauce, surrounded by whole golden pearl onions, cremini mushrooms, and tender carrot rounds.',
      texture: 'Fork-tender beef that dissolves effortlessly on the tongue, yielding like butter without being stringy, in a rich, gelatinous, velvet sauce.',
      flavor: 'Deeply unctuous, layered, and complex: caramelized beef, rich red wine reduction, smoky bacon, earthy mushrooms, sweet carrots, and roasted aromatics.',
      restingTimeMinutes: 15
    },
    equipment: [
      { name: 'Heavy 5 to 7-quart cast-iron Dutch oven (Le Creuset)', purpose: 'Essential for heavy heat retention during a 3-hour low-and-slow oven braise.' },
      { name: 'Paper towels', purpose: 'To dry beef cubes thoroughly before searing for maximum Maillard crust.' }
    ],
    beforeYouStart: [
      { task: 'Preheat oven to 160°C (325°F).', durationMinutes: 15 },
      { task: 'Cut 1.3kg beef chuck roast into large, uniform 5cm (2-inch) cubes; pat completely bone-dry with paper towels.', durationMinutes: 10 },
      { task: 'Slice 180g smoked thick bacon into 1cm lardons.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'Large 5cm (2-Inch) Meat Cubes', technique: 'Never cut stew meat into tiny pieces! Beef shrinks by 30% during a 3-hour braise. Large 5cm cubes retain internal gelatin and juices, yielding meltingly tender morsels rather than dry, shredded fibers.' },
      { item: 'Bone-Dry Searing', technique: 'Moisture on the surface of meat turns into steam, preventing browning. Dry the meat thoroughly on paper towels and sear in a single uncrowded layer so each cube develops a dark mahogany crust.' }
    ],
    essentialIngredients: [
      { name: 'Beef chuck roast (Paleron / Macreuse)', prep: 'well-marbled, cut into 5cm (2-inch) cubes, bone-dry', amount: '1.3 kg', metric: '1300g', imperial: '2.8 lbs', common: '1.3 kg' },
      { name: 'Smoked thick-cut bacon', prep: 'sliced into 1cm lardons', amount: '180g', metric: '180g', imperial: '6.3 oz', common: '1.25 cups' },
      { name: 'Dry red Burgundy wine (Pinot Noir or Côtes du Rhône)', prep: 'full bottle', amount: '1 bottle (750ml)', metric: '750ml', imperial: '25 fl oz', common: '1 bottle' },
      { name: 'Rich beef stock (or veal stock)', prep: 'hot, unsalted', amount: '2 to 3 cups', metric: '600ml', imperial: '20 fl oz', common: '2.5 cups' },
      { name: 'Carrots', prep: 'peeled and sliced into thick 2.5cm diagonal chunks', amount: '3 large', metric: '250g', imperial: '8.8 oz', common: '3 carrots' },
      { name: 'Yellow onion & Garlic cloves', prep: 'sliced onion + 4 smashed garlic cloves', amount: '1 onion + 4 cloves', metric: '160g', imperial: '5.6 oz', common: 'mixed' },
      { name: 'Tomato paste', prep: 'concentrated', amount: '2 tbsp', metric: '35g', imperial: '1.2 oz', common: '2 tbsp' },
      { name: 'All-purpose flour', prep: 'for dusting seared beef', amount: '2 tbsp', metric: '20g', imperial: '0.7 oz', common: '2 tbsp' },
      { name: 'Pearl onions', prep: 'peeled whole', amount: '18 onions', metric: '220g', imperial: '7.8 oz', common: '18 onions' },
      { name: 'Cremini mushrooms', prep: 'quartered and browned in butter', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '3 cups' },
      { name: 'Bouquet garni (Thyme, rosemary, bay leaf, parsley)', prep: 'tied with twine', amount: '1 bundle', metric: '10g', imperial: '0.35 oz', common: 'bundle' },
      { name: 'Butter', prep: 'for glazing onions and mushrooms', amount: '2 tbsp', metric: '30g', imperial: '1 oz', common: '2 tbsp' },
      { name: 'Fine sea salt & Coarse black pepper', prep: 'seasoning', amount: '2 tsp salt + 1 tsp pepper', metric: '14g', imperial: '0.5 oz', common: 'mixed' }
    ],
    steps: [
      {
        step: 1,
        title: 'CRISP LARDONS & SEAR BEEF IN BATCHES',
        whatYouNeed: ['Dutch oven', 'Bacon lardons', 'Dry beef cubes', 'Tongs', 'Spider skimmer'],
        description: 'In the Dutch oven over medium heat, fry bacon lardons for 8 minutes until golden and crispy. Remove lardons with a slotted spoon. Turn heat to high. Working in 3 separate batches, add beef cubes in a single uncrowded layer. Sear undisturbed for 3 to 4 minutes per side until all sides are deeply browned and caramelized with a dark mahogany crust. Transfer seared beef to a plate.',
        howToDoIt: 'Extreme contact heat triggers deep Maillard caramelization, creating the rich fond that forms the backbone of the sauce.',
        heat: 'Medium to High Heat',
        duration: 25,
        visualCues: 'Crisp lardons; beef cubes turn dark mahogany-brown on all six sides with clear rendered drippings.',
        hear: 'Intense, crackling searing sizzle.',
        smell: 'Incredible aroma of seared beef and smoky bacon fat.',
        textureCheck: 'Firm caramelized exterior crust.',
        whatShouldThisLookLike: 'Piles of dark mahogany seared beef cubes.',
        tip: 'Never crowd the pan! Crowding causes meat to steam and release gray water instead of searing.',
        commonMistake: 'Turning meat constantly — let it sit undisturbed to develop a deep brown crust.',
        moveOnWhen: 'All beef is deeply seared and resting on a plate.',
        quickInstructions: 'Fry lardons, remove; sear beef in 3 batches over high heat 3-4 mins per side until deeply mahogany.'
      },
      {
        step: 2,
        title: 'SAUTÉ AROMATICS & DUST WITH FLOUR',
        whatYouNeed: ['Sliced onion & carrots', 'Garlic', 'Tomato paste', '2 tbsp flour', 'Seared beef & lardons'],
        description: 'In the remaining fat, sauté sliced onion and carrots for 5 minutes until lightly browned. Stir in garlic and tomato paste for 1 minute. Return seared beef and lardons to the pot with any accumulated resting juices. Sprinkle 2 tbsp flour over the meat. Toss thoroughly for 2 minutes to coat meat and cook the raw flour.',
        howToDoIt: 'Dusting the meat with flour and searing briefly (singeing the flour / singer) prevents clumping and thickens the braise naturally.',
        heat: 'Medium Heat',
        duration: 8,
        visualCues: 'A light, toasted flour coating clinging to the glossy meat and vegetables.',
        smell: 'Sweet toasted flour, roasted garlic, and caramelizing vegetables.',
        textureCheck: 'Coated, glossy ingredients.',
        whatShouldThisLookLike: 'Beef and vegetables lightly toasted with flour.',
        tip: 'Cooking the flour for 2 minutes removes any raw flour taste before liquid is added.',
        commonMistake: 'Dumping liquid before cooking the flour, resulting in a starchy aftertaste.',
        moveOnWhen: 'Flour is toasted and absorbed into the fat.',
        quickInstructions: 'Sauté onion and carrots 5 mins, add garlic and tomato paste; return beef, sprinkle with flour, toss 2 mins.'
      },
      {
        step: 3,
        title: 'ADD BURGUNDY WINE, STOCK & OVEN-BRAISE FOR 3 HOURS',
        whatYouNeed: ['750ml Burgundy wine', '2.5 cups hot beef stock', 'Bouquet garni', '2 tsp salt, 1 tsp pepper', 'Preheated oven (160°C / 325°F)'],
        description: 'Pour in the entire bottle of red Burgundy wine and enough hot beef stock so the meat is barely submerged. Add the bouquet garni, 2 tsp salt, and black pepper. Bring to a gentle simmer on the stovetop, scraping the bottom of the pot to dissolve all caramelized bits. Cover with a tight-fitting lid and transfer to the 160°C (325°F) oven. Braise for 2.5 to 3 hours undisturbed.',
        howToDoIt: 'The steady, gentle radiant heat of the oven cooks the meat evenly without the hot spots of a stovetop burner.',
        heat: 'Oven at 160°C / 325°F',
        duration: 180,
        visualCues: 'The liquid reduces by one-third, turning into a deep, dark mahogany-purple, bubbling velvet sauce; beef is fork-tender.',
        smell: 'The intoxicating, legendary aroma of slow-braised Burgundy wine, beef, and herbs.',
        textureCheck: 'Beef yields effortlessly to a fork with zero resistance — meltingly soft.',
        whatShouldThisLookLike: 'Tender mahogany beef cubes nestled in bubbling rich wine sauce.',
        tip: 'Check at 2.5 hours: pierce a beef cube with a fork. It should slide in like butter with no tugging.',
        commonMistake: 'Braising at too high a temperature (e.g. 200°C), which boils the meat into tough, dry shoe leather.',
        moveOnWhen: 'Beef is meltingly tender.',
        quickInstructions: 'Add bottle of wine, stock, herbs, salt; bring to simmer, cover, braise in 160°C oven for 2.5-3 hours until fork-tender.'
      },
      {
        step: 4,
        title: 'GLAZE PEARL ONIONS, MUSHROOMS & FINISH SAUCE',
        whatYouNeed: ['Pearl onions', 'Quartered mushrooms', '2 tbsp butter', 'Cooked Bourguignon', 'Chopped parsley'],
        description: 'While the beef braises, sauté mushrooms in 1 tbsp butter in a separate skillet until browned; transfer to a plate. In the same skillet, braise pearl onions in 1 tbsp butter and 1/4 cup water with a pinch of sugar for 15 minutes until glazed, tender, and browned. When beef is done, remove Dutch oven from oven. Skim excess fat from the surface. Fold in the glazed pearl onions and mushrooms. Simmer on low stovetop for 10 minutes to marry flavors. Discard bouquet garni and serve.',
        howToDoIt: 'Adding the glazed vegetables at the end ensures the mushrooms stay plump and the onions stay whole rather than dissolving into the braise.',
        heat: 'Low Heat',
        duration: 15,
        visualCues: 'Whole golden pearl onions and browned mushrooms glistening in dark mahogany velvet sauce alongside tender beef.',
        smell: 'Rich reduced wine, sweet butter, and roasted mushrooms.',
        textureCheck: 'Melting beef, juicy mushrooms, and sweet tender onions in velvety sauce.',
        whatShouldThisLookLike: 'The definitive French Boeuf Bourguignon.',
        tip: 'Boeuf Bourguignon is world-famous for tasting even better on day two — cool, refrigerate overnight, and reheat gently for an otherworldly dining experience.',
        commonMistake: 'Boiling the sauce aggressively with the delicate pearl onions, breaking them apart.',
        moveOnWhen: 'Vegetables are incorporated and dish has rested 15 minutes.',
        quickInstructions: 'Glaze onions and mushrooms in butter, fold into finished stew, simmer on low 10 mins, rest 15 mins before serving.'
      }
    ],
    commonMistakes: [
      { mistake: 'Cutting beef too small', remedy: 'Cut beef into large 5cm (2-inch) cubes. Small pieces dry out during a 3-hour braise.' },
      { mistake: 'Braising on high stovetop heat', remedy: 'Braise in a 160°C oven so heat remains gentle and uniform throughout.' }
    ],
    troubleshooting: [
      {
        problem: 'Sauce is too thin',
        whatHappened: 'Liquid did not reduce enough.',
        whyItHappened: 'Dutch oven lid was sealed too tightly with no evaporation.',
        whatToDoNow: 'Remove beef and vegetables to a warm platter, simmer sauce briskly on the stove for 6-8 minutes until glossy and thick, then pour back over.',
        howToPrevent: 'Braise with lid slightly ajar for the final 30 minutes.'
      }
    ],
    substitutions: [
      { original: 'Burgundy Pinot Noir', substitute: 'Côtes du Rhône, French Syrah, or Cabernet Franc', notes: 'Provides identical deep savory fruit notes.' },
      { original: 'Pearl onions', substitute: 'Small shallots peeled whole', notes: 'Sweet and luxurious alternative.' }
    ],
    safetyNotes: ['Heavy Dutch oven is scorching hot after 3 hours in oven — use heavy silicone mitts.'],
    servingGuide: {
      restingTime: 'Rest 15 minutes before serving.',
      temperature: 'Steaming hot.',
      garnishing: 'Fresh chopped flat-leaf parsley.',
      accompaniments: 'Pommes purée (buttery mashed potatoes), buttered egg noodles, or crusty French bread.'
    }
  },

  // 18. CRÊPES (Authentic French Crêpes de Froment)
  {
    id: 'cr-pes',
    name: 'Authentic French Crêpes (Paper-Thin Crêpes de Froment with Beurre Noisette)',
    cuisine: 'French',
    region: 'France (Brittany / Paris)',
    servings: 4,
    prepTime: 15,
    cookTime: 15,
    difficulty: 'Medium',
    overview: {
      summary: 'The iconic treasure of Brittany: paper-thin, gossamer crêpes made from a delicate batter of flour, whole eggs, milk, a pinch of sea salt, and nutty browned butter (beurre noisette). Poured into a hot skillet, swirled into a translucent sheet, and cooked in under 60 seconds until lacy, golden-speckled, and tender, then folded into quarters with lemon, sugar, or melted chocolate.',
      appearance: 'A gossamer, paper-thin, pale golden-amber circular flat pancake with delicate lacy, browned leopard freckles across the surface.',
      texture: 'Silky, tender, and feather-light with delicate crispy lacy edges, melting instantly on the tongue without any chewiness or rubberiness.',
      flavor: 'Nutty browned butter, sweet toasted wheat, delicate vanilla and milk, with caramelized sugar and citrus.',
      restingTimeMinutes: 30
    },
    equipment: [
      { name: '10-inch non-stick skillet or cast-iron Crêpière (Bilig)', purpose: 'Essential for even heat and effortless flipping of ultra-thin batter.' },
      { name: 'Thin silicone or metal offset spatula', purpose: 'To loosen delicate edges and flip the crêpe smoothly.' },
      { name: 'Blender or whisk & fine mesh sieve', purpose: 'To eliminate any flour lumps for a mirror-smooth batter.' }
    ],
    beforeYouStart: [
      { task: 'Brown 40g unsalted butter in a small skillet over medium heat for 3 minutes until nutty and golden (beurre noisette); cool slightly.', durationMinutes: 5 },
      { task: 'Blend batter: 200g flour, 3 eggs, 500ml milk, cooled browned butter, 2 tbsp sugar, 1 tsp vanilla, pinch of salt until smooth.', durationMinutes: 5 },
      { task: 'REST BATTER IN REFRIGERATOR FOR AT LEAST 30 MINUTES (essential for gluten relaxation).', durationMinutes: 30 }
    ],
    ingredientPrepGuide: [
      { item: 'THE RESTING RULE: Relaxing the Gluten', technique: 'Crêpe batter MUST rest for at least 30 minutes (or overnight) before cooking! Resting allows flour starches to hydrate fully and relaxes gluten strands, ensuring your crêpes turn out paper-thin, soft, and tender rather than rubbery.' },
      { item: 'The 3-Second Pan Tilt Swirl', technique: 'Pour 1/4 cup batter into the center of the hot pan with your dominant hand while simultaneously lifting and swirling the pan in a continuous circular motion with your other hand. The batter must coat the entire bottom in under 3 seconds before it sets.' }
    ],
    essentialIngredients: [
      { name: 'All-purpose flour', prep: 'sifted', amount: '200g', metric: '200g', imperial: '7 oz', common: '1.5 cups' },
      { name: 'Whole milk', prep: 'room temperature', amount: '500ml', metric: '500ml', imperial: '17 fl oz', common: '2 cups' },
      { name: 'Large eggs', prep: 'room temperature', amount: '3 eggs', metric: '150g', imperial: '5.3 oz', common: '3 eggs' },
      { name: 'Unsalted butter', prep: 'melted into brown butter (beurre noisette)', amount: '40g', metric: '40g', imperial: '1.4 oz', common: '3 tbsp' },
      { name: 'Granulated white sugar', prep: 'for sweet crêpes', amount: '2 tbsp', metric: '25g', imperial: '0.9 oz', common: '2 tbsp' },
      { name: 'Pure vanilla extract', prep: 'aromatic', amount: '1 tsp', metric: '5ml', imperial: '0.17 fl oz', common: '1 tsp' },
      { name: 'Fine sea salt', prep: 'essential flavor enhancer', amount: '1/4 tsp', metric: '1.5g', imperial: '0.05 oz', common: '1/4 tsp' },
      { name: 'Extra butter', prep: 'for lightly wiping pan between crêpes', amount: '1 tbsp', metric: '15g', imperial: '0.5 oz', common: '1 tbsp' }
    ],
    optionalIngredients: [
      { name: 'Fresh lemon juice & fine sugar', prep: 'classic Crêpe au Sucre', amount: '1 lemon + 2 tbsp sugar', metric: '50g', imperial: '1.8 oz', common: 'topping' },
      { name: 'Nutella or dark chocolate ganache', prep: 'filling', amount: '1/2 cup', metric: '150g', imperial: '5.3 oz', common: '1/2 cup' }
    ],
    steps: [
      {
        step: 1,
        title: 'BLEND & STRAIN BATTER, THEN REST 30 MINUTES',
        whatYouNeed: ['Flour', 'Milk', 'Eggs', 'Browned butter', 'Sugar, Vanilla, Salt', 'Blender', 'Fine sieve'],
        description: 'In a blender, combine milk, eggs, cooled browned butter, sugar, vanilla, salt, and flour. Blend on high speed for 30 seconds until completely smooth and frothy. Pour through a fine mesh strainer into a bowl to remove any microscopic flour lumps. Cover with plastic wrap and refrigerate for strictly 30 minutes to 1 hour.',
        howToDoIt: 'Straining guarantees a mirror-smooth liquid with the consistency of heavy cream, ensuring paper-thin spreadability.',
        heat: 'No Heat',
        duration: 35,
        visualCues: 'A pale cream-colored, silky, smooth, fluid batter with the viscosity of light cream.',
        smell: 'Nutty browned butter, sweet vanilla, and fresh dairy.',
        textureCheck: 'Liquid and runny — coats the back of a spoon with a very thin translucent film.',
        whatShouldThisLookLike: 'Smooth, rested crêpe batter.',
        tip: 'If after resting the batter feels as thick as pancake batter, whisk in 2 tablespoons of cold milk to thin it back out.',
        commonMistake: 'Skipping the rest, resulting in rubbery crêpes with chewy texture.',
        moveOnWhen: 'Batter has rested 30 minutes in refrigerator.',
        quickInstructions: 'Blend all ingredients 30 secs, strain through sieve, rest in refrigerator for 30-60 mins.'
      },
      {
        step: 2,
        title: 'HEAT SKILLET & THE SWIFT 3-SECOND SWIRL',
        whatYouNeed: ['10-inch non-stick skillet or crêpe pan', 'Touch of butter on paper towel', '1/4 cup rested batter'],
        description: 'Heat skillet over medium heat. Lightly wipe the pan with buttered paper towel (do not leave pools of butter). Lift the pan off the burner with one hand. Pour 1/4 cup (60ml) batter into the center while instantly tilting and rotating the pan in a smooth circular motion to spread the batter into an ultra-thin, even layer across the entire bottom. Return pan to heat.',
        howToDoIt: 'The pan must be tilted instantly upon pouring; if delayed even 2 seconds, the batter sets into a thick blob.',
        heat: 'Medium Heat',
        duration: 1,
        visualCues: 'A paper-thin translucent film of batter instantly coats the bottom and edges begin to set.',
        hear: 'Very soft, gentle sizzle.',
        smell: 'Sweet buttery batter cooking.',
        textureCheck: 'Thin liquid setting into a gossamer sheet.',
        whatShouldThisLookLike: 'A seamless, paper-thin batter circle covering the pan.',
        tip: 'The famous French rule: "The first crêpe is always for the dog!" Use the first crêpe to calibrate your pan temperature and pour quantity.',
        commonMistake: 'Pouring too much batter, resulting in a thick, spongy American pancake.',
        moveOnWhen: 'Batter is swirled and set.',
        quickInstructions: 'Wipe hot pan with buttered towel, pour 1/4 cup batter, instantly swirl in circles to coat pan in thin sheet.'
      },
      {
        step: 3,
        title: 'COOK 50 SECONDS, FLIP & COOK 20 SECONDS',
        whatYouNeed: ['Thin spatula', 'Skillet on medium heat'],
        description: 'Cook undisturbed for 45 to 50 seconds until the edges turn lacy, golden-brown, and naturally curl away from the pan. Slide a thin spatula gently under the center, lift with your fingers and the spatula, and flip in one swift motion. Cook the second side for just 20 to 25 seconds until lightly speckled with pale golden spots. Slide onto a warm plate.',
        howToDoIt: 'The first side takes 50 seconds to develop the classic browned leopard spots; the second side only needs 20 seconds.',
        heat: 'Medium Heat',
        duration: 2,
        visualCues: 'First side has gorgeous golden-amber lacy freckles; edges are crisp and paper-thin.',
        smell: 'Toasted butter, caramelized milk sugars, and vanilla.',
        textureCheck: 'Soft, pliable, and gossamer-thin.',
        whatShouldThisLookLike: 'A golden-speckled, paper-thin French crêpe.',
        tip: 'Stack cooked crêpes on top of each other on a plate covered with a clean towel — their steam keeps them soft and pliable.',
        commonMistake: 'Flipping too early while the top is still wet, which tears the delicate sheet.',
        moveOnWhen: 'Crêpe is cooked on both sides and slid onto plate.',
        quickInstructions: 'Cook 50 secs until edges curl, flip, cook 20 secs on second side; slide onto plate and repeat.'
      },
      {
        step: 4,
        title: 'FILL, FOLD INTO QUARTERS & SERVE',
        whatYouNeed: ['Cooked warm crêpes', 'Fresh lemon juice & sugar, or chocolate ganache'],
        description: 'Sprinkle warm crêpe with granulated sugar and a squeeze of fresh lemon juice (or spread with chocolate hazelnut). Fold in half, then fold in half again to form the classic French triangle (crêpe pliée en quatre). Serve immediately while warm.',
        howToDoIt: 'Folding into quarters traps the melted sugar and citrus juice inside the layers for a luscious bite.',
        heat: 'No Heat',
        duration: 1,
        visualCues: 'Elegant triangular folded crêpe dusted lightly with powdered sugar.',
        smell: 'Lemon, sugar, and warm buttery crêpe.',
        textureCheck: 'Melt-in-the-mouth soft and tender with delicate lacy edges.',
        whatShouldThisLookLike: 'Artisanal Parisian street crêpes.',
        tip: 'For Crêpes Suzette, bathe folded crêpes in a reduction of butter, orange juice, and Flambé with Grand Marnier!',
        commonMistake: 'Overfilling with heavy toppings that leak out and weigh down the delicate pastry.',
        moveOnWhen: 'Folded and served warm.',
        quickInstructions: 'Sprinkle with sugar and lemon juice, fold in half and half again into triangle; serve warm.'
      }
    ],
    commonMistakes: [
      { mistake: 'Skipping batter resting', remedy: 'Always rest batter for 30 minutes to relax gluten and hydrate starches.' },
      { mistake: 'Pan too cold or too hot', remedy: 'Medium heat is ideal. If too hot, batter cooks before you can swirl it across the pan.' }
    ],
    troubleshooting: [
      {
        problem: 'Crêpe tore when trying to flip',
        whatHappened: 'The batter was too fragile or flipped too early.',
        whyItHappened: 'The bottom was not fully cooked or batter was not rested.',
        whatToDoNow: 'Fold it up and eat it — it still tastes delicious! Ensure the edges curl and bottom is speckled before flipping the next one.',
        howToPrevent: 'Wait a full 50 seconds until the edges curl away from the pan before flipping.'
      }
    ],
    substitutions: [
      { original: 'Whole milk', substitute: 'Oat milk or almond milk', notes: 'Makes wonderful dairy-free crêpes.' },
      { original: 'Browned butter', substitute: 'Melted butter or coconut oil', notes: 'Browned butter gives signature nutty French aroma.' }
    ],
    safetyNotes: ['Flipping hot crêpes with fingers requires gentle care; use a spatula to protect fingertips.'],
    servingGuide: {
      restingTime: 'Serve immediately or keep warm under a towel.',
      temperature: 'Warm.',
      garnishing: 'Dusting of powdered sugar and fresh berries.',
      accompaniments: 'French cider, hot espresso, or champagne.'
    }
  },

  // 19. MACARONS (Classic Parisian Macarons with Dark Chocolate Ganache)
  {
    id: 'macarons',
    name: 'Classic Parisian Macarons (French Meringue Macarons with Chocolate Ganache)',
    cuisine: 'French',
    region: 'France (Paris)',
    servings: 12,
    prepTime: 45,
    cookTime: 16,
    difficulty: 'Expert',
    overview: {
      summary: 'The holy grail of French haute pâtisserie: ethereal meringue cookies made from ultra-fine sifted almond flour, confectioners\' sugar, and glossy whipped French meringue. Folded with surgical precision to the exact "macaronage" ribbon stage, piped into neat rounds, rested until a dry shell forms, and baked until the iconic ruffled "feet" (pieds) emerge below a satin-smooth dome, sandwiched around rich dark chocolate ganache.',
      appearance: 'Pristine, smooth, glossy pastel domes with straight, ruffled, bubbly "feet" at the base, sandwiching a thick ribbon of dark chocolate ganache.',
      texture: 'An eggshell-delicate, wafer-thin crisp exterior that shatters on contact, giving way to a dense, chewy, moist almond-meringue interior that melts into ganache.',
      flavor: 'Sweet nutty roasted almond, delicate vanilla, contrasted with rich, slightly bitter 70% dark chocolate ganache.',
      restingTimeMinutes: 45
    },
    equipment: [
      { name: 'Heavy baking sheets & silicone macaron mats or parchment paper', purpose: 'Double pan baking provides even heat distribution so ruffled feet rise without cracking the top.' },
      { name: 'Piping bag fitted with 1cm round plain tip', purpose: 'For piping uniform 3.5cm circles.' },
      { name: 'Food processor & fine mesh flour sifter', purpose: 'To pulse almond flour and sugar into microscopic dust.' }
    ],
    beforeYouStart: [
      { task: 'Pulse 100g super-fine almond flour and 100g powdered sugar in food processor 10 times, then sift twice through a fine sieve (discard coarse bits).', durationMinutes: 10 },
      { task: 'Separate 75g egg whites (approx. 2 large eggs) and let come to room temperature (aged egg whites whip best).', durationMinutes: 15 },
      { task: 'Prepare dark chocolate ganache: heat 100g heavy cream and pour over 100g chopped 70% dark chocolate, stir smooth and cool to piping consistency.', durationMinutes: 15 }
    ],
    ingredientPrepGuide: [
      { item: 'THE MACARONAGE STAGE: The Ribbon Test', technique: 'Folding the dry ingredients into the meringue is the most critical step in pastry! Use a rubber spatula to fold from the bottom, around the side, and cut through the middle, occasionally pressing against the bowl walls. Stop the exact moment the batter flows off the spatula in a continuous, glossy, unbroken ribbon that slowly re-absorbs into itself in 20 to 30 seconds. Under-folded = pointy tips; over-folded = runny pancakes.' },
      { item: 'The Skin Formation Rest (Crucial for Feet)', technique: 'After piping, tap the baking sheet firmly on the counter 4 times to release trapped air bubbles. Then let sit at room temperature for 30 to 45 minutes until a dull, dry, touch-safe skin forms. When you gently touch a macaron with a dry finger, no batter should stick to your skin. This skin forces expanding steam out through the bottom, creating the ruffled "feet"!' }
    ],
    essentialIngredients: [
      { name: 'Super-fine blanched almond flour', prep: 'sifted twice', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '1 cup' },
      { name: 'Confectioners\' / Powdered sugar', prep: 'sifted twice', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '3/4 cup' },
      { name: 'Egg whites', prep: 'room temperature (approx. 2 eggs)', amount: '75g', metric: '75g', imperial: '2.6 oz', common: '75g' },
      { name: 'Granulated white sugar', prep: 'fine sugar for meringue', amount: '70g', metric: '70g', imperial: '2.5 oz', common: '1/3 cup' },
      { name: 'Cream of tartar or lemon juice', prep: 'stabilizes egg white foam', amount: '1/8 tsp', metric: '0.5g', imperial: '0.02 oz', common: '1 pinch' },
      { name: 'Gel food coloring', prep: 'optional (powder or gel ONLY, never liquid)', amount: '2 drops', metric: '1g', imperial: '0.04 oz', common: '2 drops' },
      { name: 'Dark chocolate ganache (or buttercream)', prep: 'for sandwiching', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '3/4 cup' }
    ],
    steps: [
      {
        step: 1,
        title: 'WHIP STIFF GLOSSY FRENCH MERINGUE',
        whatYouNeed: ['75g room-temp egg whites', 'Pinch of cream of tartar', '70g granulated sugar', 'Hand mixer or stand mixer'],
        description: 'In a grease-free bowl, beat egg whites with cream of tartar on medium speed until foamy. Gradually add granulated sugar one tablespoon at a time over 2 minutes while increasing mixer speed to medium-high. Continue whipping for 4 to 5 minutes until the meringue is dense, glossy, and forms stiff, upright peaks that do not droop when the beaters are lifted. Add gel food coloring if using.',
        howToDoIt: 'Stiff meringue provides the air structure that lifts the cookie. The bowl should be able to be held upside down over your head without the meringue moving.',
        heat: 'No Heat',
        duration: 8,
        visualCues: 'Pristine, ultra-glossy white meringue forming razor-sharp upright peaks.',
        smell: 'Sweet, clean vanilla-sugar aroma.',
        textureCheck: 'Dense, firm, and glossy foam — no loose liquid at the bottom.',
        whatShouldThisLookLike: 'Stiff, glossy meringue peaks in the mixer bowl.',
        tip: 'Wipe your bowl and beaters with a paper towel dipped in lemon juice or vinegar before starting to remove any fat that prevents whipping.',
        commonMistake: 'Under-whipping the meringue, causing the macarons to hollow out and collapse.',
        moveOnWhen: 'Meringue forms sharp, stiff, upright peaks.',
        quickInstructions: 'Whip egg whites with cream of tartar, gradually add sugar, beat 5 mins until stiff, glossy peaks form.'
      },
      {
        step: 2,
        title: 'THE SACRED MACARONAGE (THE FIGURE-8 RIBBON)',
        whatYouNeed: ['Stiff meringue', 'Sifted almond flour & powdered sugar', 'Rubber spatula'],
        description: 'Dump half of the sifted almond flour and powdered sugar over the meringue. Fold gently with a rubber spatula until incorporated, then add the rest. Now perform "macaronage": scrape down the sides, sweep around the bowl, and press the batter gently against the bowl sides to deflate excess air pockets. Check every 5 folds. Stop the exact moment the batter flows off the spatula in a continuous ribbon that can draw a figure-8 without breaking, melting back into the batter in 25 seconds.',
        howToDoIt: 'Deflating just the right amount of air produces smooth shiny domes without air pockets or volcano cracks.',
        heat: 'No Heat',
        duration: 5,
        visualCues: 'Batter changes from thick and clumpy to glossy, lava-like, flowing ribbons.',
        textureCheck: 'Slow-flowing lava consistency that levels out slowly.',
        whatShouldThisLookLike: 'Glossy batter flowing off spatula in a thick ribbon.',
        tip: 'Count your folds — usually between 35 to 50 folds is the sweet spot. Stop early rather than late; over-mixing cannot be reversed!',
        commonMistake: 'Over-mixing, turning the batter into watery soup that spreads into flat, puddle cookies with no feet.',
        moveOnWhen: 'Batter flows in a figure-8 ribbon and settles in 25 seconds.',
        quickInstructions: 'Fold dry ingredients into meringue, deflate gently against bowl until batter flows like lava in figure-8 ribbons.'
      },
      {
        step: 3,
        title: 'PIPE, SLAM THE SHEET & FORM DRY SKIN',
        whatYouNeed: ['Piping bag with 1cm round tip', 'Baking sheets with parchment/mats', 'Kitchen timer'],
        description: 'Transfer batter to piping bag. Hold the bag perpendicular (90 degrees) 1cm above the baking sheet. Squeeze gently to pipe 3.5cm (1.5-inch) circles spaced 3cm apart. Release pressure, flick wrist sideways. Firmly slam the baking sheet flat onto the counter 4 times to dislodge trapped air bubbles. Let sit undisturbed at room temperature for 30 to 45 minutes until a matte, dry skin forms on top that does not stick to a gentle touch.',
        howToDoIt: 'Slamming the tray pops large bubbles that would otherwise crack the surface, and resting creates the protective dry skin.',
        heat: 'No Heat (Resting)',
        duration: 45,
        visualCues: 'Batter flattens smooth; air bubbles pop; glossy surface dulls into a dry, matte skin.',
        textureCheck: 'When touched gently with a dry fingertip, the surface feels dry and leather-like with zero stickiness.',
        whatShouldThisLookLike: 'Smooth, matte, round disks resting on the tray.',
        tip: 'If your kitchen is humid, place the trays near an electric fan to help the skins dry in 30 minutes.',
        commonMistake: 'Baking before the skin forms, causing steam to rupture through the top in volcano cracks.',
        moveOnWhen: 'Skins are completely dry to the touch.',
        quickInstructions: 'Pipe 3.5cm rounds, slam sheet on counter 4 times to pop bubbles, rest 30-45 mins until dry skin forms.'
      },
      {
        step: 4,
        title: 'BAKE AT 150°C FOR RUFFLED FEET & ASSEMBLE',
        whatYouNeed: ['Preheated oven (150°C / 300°F)', 'Dry macaron sheets', 'Piping bag with chocolate ganache'],
        description: 'Bake on the middle rack at 150°C (300°F) for 14 to 16 minutes. Around minute 5, watch through the glass: the iconic ruffled "feet" will rise around the bottom base. Touch the top gently at 14 minutes: if the cap wobbles, bake 1-2 more minutes until firm. Cool completely on the tray for 20 minutes; peel shells off cleanly. Pipe ganache onto one shell, top with another, and twist gently to sandwich.',
        howToDoIt: 'Never peel macarons while warm! When fully cooled, they release effortlessly from parchment with smooth, shiny bottoms.',
        heat: 'Oven at 150°C / 300°F',
        duration: 20,
        visualCues: 'Ruffled, bubbly feet rise 3mm at the base; top remains smooth, flat, and matte.',
        smell: 'Sweet toasted almonds and baked sugar.',
        textureCheck: 'Firm shells that peel cleanly off parchment; delicate crisp shell with chewy interior.',
        whatShouldThisLookLike: 'Perfect Parisian macarons with ruffled feet and ganache core.',
        tip: 'The 24-Hour Maturation Secret: Place assembled macarons in an airtight box in the fridge for 24 hours before eating! The moisture from the ganache migrates into the shells, creating the legendary melt-in-the-mouth chew.',
        commonMistake: 'Eating immediately off the pan when shells are dry and crunchy before maturing.',
        moveOnWhen: 'Sandwiched with ganache and matured 24 hours.',
        quickInstructions: 'Bake at 150°C for 14-16 mins until feet form and shells are firm; cool completely, sandwich with ganache; mature 24h.'
      }
    ],
    commonMistakes: [
      { mistake: 'Baking without dry skin', remedy: 'Always rest until a dry skin forms. Without the skin, steam cracks the top and prevents feet.' },
      { mistake: 'Over-macaronage', remedy: 'Stop folding the second the batter flows in a ribbon. Over-mixed batter turns into flat liquid.' }
    ],
    troubleshooting: [
      {
        problem: 'Tops cracked open in the oven',
        whatHappened: 'Steam escaped through the top.',
        whyItHappened: 'The macarons were baked before the dry skin formed, or oven was too hot.',
        whatToDoNow: 'They still taste delicious! Sandwich with ganache.',
        howToPrevent: 'Let sit until surface is dry to the touch, and verify oven temperature with an oven thermometer.'
      }
    ],
    substitutions: [
      { original: 'Chocolate ganache', substitute: 'Salted butter caramel, raspberry jam, or vanilla buttercream', notes: 'Classic Parisian macaron fillings.' }
    ],
    safetyNotes: ['Baking sheets are hot; let cool on heat-resistant trivets.'],
    servingGuide: {
      restingTime: 'Mature in refrigerator for 24 hours before serving for optimal texture.',
      temperature: 'Cool room temperature.',
      garnishing: 'None — pristine pastel domes.',
      accompaniments: 'Fine French tea (Earl Grey, Mariage Frères), espresso, or Champagne.'
    }
  },

  // 20. SOUFFLÉ (Classic French Chocolate Soufflé)
  {
    id: 'souffl-',
    name: 'Classic French Chocolate Soufflé (Soufflé au Chocolat with Molten Core)',
    cuisine: 'French',
    region: 'France (Paris)',
    servings: 4,
    prepTime: 25,
    cookTime: 14,
    difficulty: 'Hard',
    overview: {
      summary: 'The dramatic theater of French dessert mastery: individual ceramic ramekins coated meticulously with softened butter in upward brushstrokes and lined with crystallized sugar, filled with a rich base of melted 70% dark chocolate and egg yolks, lightened with glossy French meringue whipped to medium-soft peaks. Baked at high heat until rising straight upward like majestic top hats over the rims, with a delicate crisp crust and a cloud-like, molten chocolate interior.',
      appearance: 'Puffed individual dark chocolate towers rising 3 to 4 centimeters straight above the ceramic ramekin rim, dusted in fine powdered sugar with steam escaping from the center.',
      texture: 'Feather-light, cloud-like airy puff on the exterior yielding to a warm, velvety, molten chocolate pudding core.',
      flavor: 'Intense, bittersweet 70% dark chocolate richness, subtle vanilla, and sweet buttery crust, with zero egginess.',
      restingTimeMinutes: 0
    },
    equipment: [
      { name: 'Four 6-ounce (180ml) straight-sided ceramic ramekins', purpose: 'Straight vertical sides are essential so the soufflé expands straight upward without friction.' },
      { name: 'Pastry brush', purpose: 'To brush butter in vertical upward strokes along the ramekin walls.' },
      { name: 'Baking sheet & fine sieve', purpose: 'For baking ramekins evenly and dusting powdered sugar.' }
    ],
    beforeYouStart: [
      { task: 'Preheat oven to 190°C (375°F) with baking sheet on the lower-middle rack.', durationMinutes: 15 },
      { task: 'Coat ramekins: brush insides with softened butter in strictly UPWARD strokes, then coat with granulated sugar, tapping out excess.', durationMinutes: 5 },
      { task: 'Melt 120g 70% dark chocolate with 30g butter in a heatproof bowl over simmering water; cool slightly.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'THE UPWARD BUTTER STROKE (The Rise Secret)', technique: 'You MUST brush softened butter onto the ramekin walls in vertical upward brushstrokes from bottom to rim, then coat with sugar! The upward butter grain and sugar crystals create a non-stick microscopic ladder that allows the rising soufflé to climb freely without catching and tilting.' },
      { item: 'The Thumb Wipe Around the Rim', technique: 'After filling ramekins and leveling the top with a spatula, run your thumb around the inner top rim of the ramekin to create a 2mm indentation channel. This detaches the batter from the edge, ensuring it rises straight and flat like a top hat instead of spilling over.' }
    ],
    essentialIngredients: [
      { name: 'High-quality 70% dark chocolate', prep: 'finely chopped and melted', amount: '120g', metric: '120g', imperial: '4.2 oz', common: '120g' },
      { name: 'Unsalted butter', prep: 'divided (30g melted with chocolate + 20g for ramekins)', amount: '50g', metric: '50g', imperial: '1.8 oz', common: '3.5 tbsp' },
      { name: 'Large eggs', prep: 'separated into yolks and whites at room temperature', amount: '3 eggs', metric: '150g', imperial: '5.3 oz', common: '3 eggs' },
      { name: 'Granulated white sugar', prep: 'for meringue & coating ramekins', amount: '50g (3 tbsp for meringue + 2 tbsp for coating)', metric: '50g', imperial: '1.8 oz', common: '1/4 cup' },
      { name: 'Pure vanilla extract', prep: 'aromatic', amount: '1 tsp', metric: '5ml', imperial: '0.17 fl oz', common: '1 tsp' },
      { name: 'Fine sea salt', prep: 'balances chocolate bitterness', amount: '1/8 tsp', metric: '0.5g', imperial: '0.02 oz', common: '1 pinch' },
      { name: 'Powdered confectioners\' sugar', prep: 'for dusting hot soufflé', amount: '1 tbsp', metric: '10g', imperial: '0.35 oz', common: '1 tbsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'COAT RAMEKINS WITH UPWARD BUTTER & SUGAR',
        whatYouNeed: ['4 ceramic ramekins', 'Softened butter', 'Pastry brush', 'Granulated sugar'],
        description: 'Dip pastry brush in softened butter. Brush the interior bottoms and sides of four 6-ounce ramekins using strictly vertical, upward strokes from bottom to rim. Chill 2 minutes. Brush a second layer of upward butter strokes. Add 1 tbsp granulated sugar to each ramekin, roll around until completely coated with sugar crystals, and invert to tap out excess.',
        howToDoIt: 'Double upward butter strokes and sugar crystals eliminate surface tension, allowing the delicate foam to slide upward effortlessly.',
        heat: 'No Heat',
        duration: 5,
        visualCues: 'Glistening, sugar-encrusted ramekins with smooth, vertical crystalline walls.',
        textureCheck: 'Evenly coated non-stick sugar interior.',
        whatShouldThisLookLike: 'Sugar-frosted ceramic ramekins ready for batter.',
        tip: 'Never touch the buttered, sugared interior with your fingers — oils from your skin will create a sticky spot that stops the rise!',
        commonMistake: 'Brushing butter horizontally, which creates ridges that trap the soufflé and cause it to bake lopsided.',
        moveOnWhen: 'All 4 ramekins are buttered, sugared, and chilled.',
        quickInstructions: 'Brush ramekins with butter in vertical upward strokes twice, coat with sugar, tap out excess.'
      },
      {
        step: 2,
        title: 'MELT CHOCOLATE BASE & WHIP MEDIUM-SOFT MERINGUE',
        whatYouNeed: ['Melted chocolate & butter', '3 egg yolks', '3 egg whites', 'Pinch of salt', '3 tbsp sugar', 'Whisk & Mixer'],
        description: 'Whisk 3 egg yolks and vanilla into the melted chocolate-butter mixture until glossy. In a separate clean bowl, whip 3 egg whites with a pinch of salt until frothy. Gradually add 3 tbsp sugar and whip to medium-soft peaks (the peak should curl gently like an elf\'s hat when lifted — do NOT whip to stiff dry peaks!).',
        howToDoIt: 'Whipping to medium-soft peaks allows the air bubbles to expand flexibly in the oven; stiff, dry egg whites will tear and collapse under the chocolate weight.',
        heat: 'No Heat',
        duration: 6,
        visualCues: 'Meringue is glossy, pillowy, and forms soft peaks that curl gently at the tip.',
        smell: 'Rich melted dark chocolate and sweet vanilla.',
        textureCheck: 'Soft, billowy, creamy meringue foam.',
        whatShouldThisLookLike: 'Glossy soft-peak meringue and warm chocolate base.',
        tip: 'If you over-whip egg whites until dry and chunky, fold in a teaspoon of fresh liquid egg white to restore elasticity.',
        commonMistake: 'Whipping egg whites to stiff, dry clumpy foam, resulting in cracked, dry soufflés.',
        moveOnWhen: 'Chocolate base is smooth and meringue has glossy medium-soft peaks.',
        quickInstructions: 'Whisk yolks into melted chocolate; whip egg whites with sugar to glossy medium-soft peaks with curled tips.'
      },
      {
        step: 3,
        title: 'SACRED THREE-STAGE FOLD & THE THUMB WIPE',
        whatYouNeed: ['Chocolate base', 'Whipped meringue', 'Rubber spatula', 'Straight metal spatula / knife'],
        description: 'Whisk one-third of the meringue vigorously into the chocolate base to lighten it. Gently fold in the remaining meringue in two additions with a spatula in wide, gentle cutting sweeps until no white streaks remain. Divide batter evenly among the 4 prepared ramekins, filling slightly over the top. Level flat with a straight spatula. Run your thumb tip around the inner rim of each ramekin to create a clean 2mm groove.',
        howToDoIt: 'The thumb wipe detaches the batter from the edge, preventing mushroom-cap overflow and guaranteeing a straight vertical rise.',
        heat: 'No Heat',
        duration: 5,
        visualCues: 'A light, airy, chocolate mousse filling ramekins flush to the rim, with a neat indented ring around the perimeter.',
        smell: 'Intense dark chocolate and airy sweet meringue.',
        textureCheck: 'Light, billowy, airy chocolate mousse.',
        whatShouldThisLookLike: 'Cleanly leveled ramekins with a thumb groove around the rim.',
        tip: 'Work swiftly once folded to bake while the air bubbles are freshest.',
        commonMistake: 'Skipping the thumb wipe, causing the soufflé to stick to the rim and rise crookedly.',
        moveOnWhen: 'Ramekins are filled, leveled, and thumb-wiped.',
        quickInstructions: 'Lighten chocolate with 1/3 meringue, gently fold remaining meringue; fill ramekins flush, level flat, wipe inner rim with thumb.'
      },
      {
        step: 4,
        title: 'BAKE AT 190°C & SERVE WITHIN 2 MINUTES',
        whatYouNeed: ['Preheated oven (190°C / 375°F)', 'Filled ramekins on baking sheet', 'Powdered sugar & small sieve'],
        description: 'Place ramekins on the preheated baking sheet in the oven. Bake undisturbed for 12 to 14 minutes. NEVER OPEN THE OVEN DOOR during the first 10 minutes! The soufflés will rise dramatically 3 to 4cm above the rims. When the tops are set and edges firm with a slight wobble in the center, remove from oven. Immediately dust with powdered sugar and serve at once to guests with spoons ready!',
        howToDoIt: 'Opening the oven door causes a sudden drop in ambient temperature and air currents that will deflate the delicate rising structure.',
        heat: 'Oven at 190°C / 375°F',
        duration: 14,
        visualCues: 'Magnificent chocolate towers rising straight above the ceramic rims, puffed with a delicate crust and molten center.',
        smell: 'Decadent dark baked chocolate and caramelized sugar.',
        textureCheck: 'Delicate crisp shell with cloud-like, molten chocolate interior.',
        whatShouldThisLookLike: 'Dramatic, towering French chocolate soufflés.',
        tip: 'The French dining rule: "Soufflés wait for no one — guests must wait for the soufflé!" Have your diners seated before taking them out of the oven.',
        commonMistake: 'Opening the oven door at minute 8, causing the soufflés to collapse into flat crater pancakes.',
        moveOnWhen: 'Baked, risen high, dusted with powdered sugar, and served within 2 minutes.',
        quickInstructions: 'Bake at 190°C for 12-14 mins without opening oven door; dust with powdered sugar and serve within 2 mins.'
      }
    ],
    commonMistakes: [
      { mistake: 'Opening the oven door during baking', remedy: 'Do NOT open the oven door! Sudden cold air deflates rising soufflés.' },
      { mistake: 'Horizontal butter strokes', remedy: 'Always brush butter in vertical upward strokes to guide the rise.' }
    ],
    troubleshooting: [
      {
        problem: 'Soufflé rose lopsided and tilted to one side',
        whatHappened: 'One side caught on the ramekin wall.',
        whyItHappened: 'The butter was not applied evenly in upward strokes, or the thumb wipe was missed on that side.',
        whatToDoNow: 'Dust with powdered sugar and eat immediately — texture and flavor are still divine!',
        howToPrevent: 'Double-brush upward with butter, coat with sugar, and create an even thumb groove around the entire rim.'
      }
    ],
    substitutions: [
      { original: '70% dark chocolate', substitute: 'Grand Marnier or Passion Fruit base', notes: 'For classic French fruit or liqueur soufflés.' }
    ],
    safetyNotes: ['Ceramic ramekins are piping hot — place on individual saucers before serving to guests.'],
    servingGuide: {
      restingTime: '0 minutes — serve within 120 seconds before deflation begins.',
      temperature: 'Piping hot from the oven.',
      garnishing: 'Dusting of powdered confectioners\' sugar.',
      accompaniments: 'Crème anglaise, heavy pouring cream, or a scoop of vanilla bean ice cream dropped into the center.'
    }
  }
];
