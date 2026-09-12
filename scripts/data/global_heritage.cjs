// Global Heritage Dishes (8 dishes: Brazilian, Peruvian, Argentine, Caribbean, Portuguese, German, British, Scandinavian)
module.exports = [
  // 17. BRAZILIAN DISHES (Authentic Feijoada Completa)
  {
    id: 'brazilian-dishes',
    name: 'Authentic Brazilian Feijoada Completa (Black Bean Stew with Smoked Pork, Farofa & Collard Greens)',
    cuisine: 'Global',
    region: 'South America (Brazil / Rio de Janeiro)',
    servings: 8,
    prepTime: 35,
    cookTime: 150,
    difficulty: 'Hard',
    overview: {
      summary: 'The national soul and Saturday gathering ritual of Brazil: a rich, slow-simmered black bean stew loaded with an opulent variety of salted pork, smoked Paio sausage, linguiça calabresa, pork ribs, and carne seca (cured salt beef). Simmered with garlic, bay leaves, and cachaça until meltingly tender in an inky, velvety bean gravy, served with toasted golden manioc flour (Farofa), garlicky sautéed collard greens (Couve a Mineira), fresh orange slices, and white rice.',
      appearance: 'A deep, inky black, glistening, thick stew brimming with succulent chunks of pork ribs, sliced smoked sausages, and tender black beans, served with golden farofa and emerald green collards.',
      texture: 'Creamy, rich, velvety bean gravy with fall-apart tender pork and sausages, contrasted with the dry, crunchy, buttery crunch of toasted farofa.',
      flavor: 'Deeply smoky, savory, pork-rich, and earthy, with aromatic garlic and bay leaves, brightened by sweet juicy orange slices.',
      restingTimeMinutes: 15
    },
    equipment: [
      { name: 'Large heavy Dutch oven or clay pot (Panela de barro)', purpose: 'For slow, gentle simmering of beans and meats without scorching.' },
      { name: 'Wide skillet', purpose: 'For toasting Farofa and sautéing collard greens.' }
    ],
    beforeYouStart: [
      { task: 'Soak 500g dry black beans (Feijão Preto) in water overnight.', durationMinutes: 720 },
      { task: 'Desalt salted meats (carne seca, salted ribs) by boiling in water for 15 minutes, drain.', durationMinutes: 20 },
      { task: 'Slice smoked sausages (linguiça and paio) into 1.5cm rounds.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'Mashing Beans to Thicken the Stew', technique: 'After 2 hours of simmering, scoop out 2 ladles of soft black beans into a bowl and smash them into a smooth paste with a fork. Stir the paste back into the pot. This releases natural bean starches that transform thin cooking liquid into an inky, velvety gravy.' },
      { item: 'Farofa (Toasted Yuca Flour)', technique: 'Toast coarse yuca/cassava flour (Farinha de Mandioca) in a skillet with plenty of sizzling butter, garlic, and bacon until golden-tan and crunchy. It acts as the crunchy savory sponge that soaks up bean gravy.' }
    ],
    essentialIngredients: [
      { name: 'Dry black beans (Feijão Preto)', prep: 'soaked overnight', amount: '500g', metric: '500g', imperial: '1.1 lbs', common: '2.5 cups' },
      { name: 'Smoked pork sausages (Linguiça Calabresa & Paio)', prep: 'sliced into 1.5cm rounds', amount: '400g', metric: '400g', imperial: '14 oz', common: '400g' },
      { name: 'Pork ribs or smoked pork shoulder', prep: 'cut into individual ribs', amount: '500g', metric: '500g', imperial: '1.1 lbs', common: '500g' },
      { name: 'Carne Seca or corned beef', prep: 'desalted and cubed', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '300g' },
      { name: 'Thick smoked bacon', prep: 'diced', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '1 cup' },
      { name: 'Yellow onions & Garlic cloves', prep: 'finely diced onion + 8 cloves minced garlic', amount: '2 onions + 8 cloves garlic', metric: '250g', imperial: '8.8 oz', common: 'mixed' },
      { name: 'Dried bay leaves', prep: 'essential aromatic', amount: '4 leaves', metric: '1g', imperial: '0.04 oz', common: '4 leaves' },
      { name: 'Brazilian Cachaça or white rum', prep: 'deglazing secret', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp' },
      { name: 'Toasted cassava flour (Farinha de Mandioca)', prep: 'for Farofa', amount: '2 cups', metric: '250g', imperial: '8.8 oz', common: '2 cups' },
      { name: 'Fresh collard greens (Couve)', prep: 'sliced into razor-thin ribbons', amount: '1 large bunch', metric: '300g', imperial: '10.5 oz', common: '1 bunch' },
      { name: 'Fresh sweet oranges', prep: 'peeled and sliced into rounds', amount: '2 oranges', metric: '250g', imperial: '8.8 oz', common: '2 oranges' },
      { name: 'White rice', prep: 'steamed warm with garlic', amount: '3 cups cooked', metric: '450g', imperial: '1 lb', common: '3 cups' }
    ],
    steps: [
      {
        step: 1,
        title: 'BROWN MEATS & SIMMER WITH BLACK BEANS',
        whatYouNeed: ['Large Dutch oven', 'Diced bacon', 'Sausages, ribs, carne seca', 'Soaked black beans', 'Bay leaves', 'Water'],
        description: 'In the Dutch oven over medium heat, fry diced bacon for 5 minutes until fat renders. Add sliced sausages, ribs, and carne seca. Brown for 8 minutes until sizzling and golden. Add soaked drained black beans, bay leaves, and 2.5 liters of water to submerge everything by 5cm. Bring to a boil, skim off foam, reduce heat to low, cover with lid, and simmer gently for 2 hours until the beans and meats are tender.',
        howToDoIt: 'Cooking the cured and smoked meats directly with the beans allows the rich gelatin, smoke, and pork fat to infuse every bean.',
        heat: 'Medium-Low Simmer',
        duration: 120,
        visualCues: 'Water darkens to inky black broth; sausages and ribs turn tender; beans soften completely.',
        smell: 'Rich smoky bacon, simmering pork, and earthy black beans.',
        textureCheck: 'Tender beans and melting pork.',
        whatShouldThisLookLike: 'A deep, inky black stew simmering with meats.',
        tip: 'Stir occasionally along the bottom so the beans do not catch.',
        commonMistake: 'Boiling on high heat, which breaks the beans into mush before the meat has softened.',
        moveOnWhen: 'Beans are soft and meats are tender.',
        quickInstructions: 'Brown bacon and meats, add soaked black beans, bay leaves, and water; simmer covered on low for 2 hours.'
      },
      {
        step: 2,
        title: 'TEMPER THE STEW WITH GARLIC & MASHED BEANS',
        whatYouNeed: ['Skillet with 2 tbsp oil', 'Diced onion', 'Minced garlic', 'Cachaça', '2 ladles of cooked beans'],
        description: 'In a separate skillet, sauté diced onions and minced garlic in 2 tbsp oil for 5 minutes until golden. Splash in 2 tbsp Cachaça to deglaze. Scoop 2 ladles of soft beans from the pot into the skillet, mash into a paste with a fork, and fry for 2 minutes. Pour this flavorful garlicky bean refogado back into the main pot. Simmer uncovered for 20 minutes until the stew thickens into a velvet, inky-black gravy.',
        howToDoIt: 'The "refogado" technique (frying mashed beans in garlic and oil) is the traditional Brazilian method to thicken and season the stew.',
        heat: 'Medium Heat to Low',
        duration: 25,
        visualCues: 'Stew transforms into an inky black, velvety, glossy gravy that coats a spoon heavily.',
        smell: 'Pungent fried garlic, sweet caramelized onions, and rich beans.',
        textureCheck: 'Creamy, thick gravy with whole beans and tender meat chunks.',
        whatShouldThisLookLike: 'Rich, velvety, dark black Feijoada.',
        tip: 'Taste for salt: the cured meats release salt as they simmer, so you rarely need to add extra salt.',
        commonMistake: 'Skipping the refogado, leaving the stew thin and watery.',
        moveOnWhen: 'Stew is thick, velvety, and fragrant.',
        quickInstructions: 'Sauté onion and garlic, deglaze with cachaça, mash in 2 ladles of beans, stir back into pot; simmer 20 mins.'
      },
      {
        step: 3,
        title: 'TOAST BUTTER FAROFA & SAUTÉ COLLARD GREENS',
        whatYouNeed: ['Skillet', '4 tbsp butter', '2 cups cassava flour (Mandioca)', 'Sliced collard greens', 'Garlic'],
        description: 'Melt 3 tbsp butter in a skillet over medium heat. Add cassava flour and 1/2 tsp salt. Toast, stirring constantly, for 6 to 8 minutes until light golden-brown and fragrant like popcorn; transfer to a bowl (Farofa). In the same skillet, heat 1 tbsp butter, add 2 cloves minced garlic for 30 seconds, toss in ribbon-sliced collard greens with a pinch of salt, and sauté for strictly 2 minutes until wilted but bright emerald green.',
        howToDoIt: 'Sautéing collards briefly keeps them vibrant green and tender with a fresh mineral crunch.',
        heat: 'Medium Heat',
        duration: 12,
        visualCues: 'Farofa turns golden-tan and crunchy; collard ribbons turn glossy and emerald green.',
        smell: 'Nutty toasted butter and garlicky sautéed greens.',
        textureCheck: 'Crunchy dry farofa; tender-crisp greens.',
        whatShouldThisLookLike: 'Golden farofa bowl and bright green sautéed collards.',
        tip: 'Farofa is eaten by sprinkling directly over the black beans — it provides irresistible crunch in every spoonful.',
        commonMistake: 'Overcooking collard greens into dark drab mush.',
        moveOnWhen: 'Farofa and collards are cooked and warm.',
        quickInstructions: 'Toast cassava flour in butter 6-8 mins until golden (Farofa); flash-sauté ribboned collard greens 2 mins.'
      },
      {
        step: 4,
        title: 'THE GRAND FEIJOADA COMPLETA PLATTER',
        whatYouNeed: ['Hot Feijoada', 'Steamed white rice', 'Toasted Farofa', 'Sautéed collards', 'Sliced fresh oranges'],
        description: 'Ladle the rich, steaming black bean stew into a large ceramic serving dish. Arrange around it the classic accompaniments: bowls of fluffy white garlic rice, crunchy golden Farofa, vibrant emerald collard greens, and slices of sweet fresh orange. Serve with caipirinhas and hot pepper sauce.',
        howToDoIt: 'The juicy orange slices are essential: their fresh citrus juice cuts through the heavy, unctuous pork fat between bites.',
        heat: 'No Heat',
        duration: 5,
        visualCues: 'A magnificent colorful banquet: inky black stew, white rice, golden farofa, green collards, and orange citrus wheels.',
        smell: 'Smoky meats, garlic, fresh orange, and toasted manioc.',
        textureCheck: 'Rich, melting stew paired with crunchy farofa and fresh citrus bursts.',
        whatShouldThisLookLike: 'The ultimate Brazilian celebratory feast.',
        tip: 'Build your plate: a bed of rice, generous ladle of feijoada, a dusting of farofa on top, collards on the side, and orange slices.',
        commonMistake: 'Omitting the oranges — they provide vital digestive balance to the rich meats.',
        moveOnWhen: 'Assembled and served.',
        quickInstructions: 'Ladle feijoada into bowls, serve with white rice, farofa, sautéed collards, and fresh orange slices.'
      }
    ],
    commonMistakes: [
      { mistake: 'Not desalting meats', remedy: 'Salted meats must be boiled in fresh water for 15 minutes before simmering to remove excess salt.' },
      { mistake: 'Skipping the Farofa', remedy: 'Farofa provides the essential crunchy textural contrast to the soft, rich beans.' }
    ],
    troubleshooting: [
      {
        problem: 'Stew is too salty',
        whatHappened: 'Cured meats released heavy salt.',
        whyItHappened: 'Meats were not desalted sufficiently.',
        whatToDoNow: 'Peel and drop 2 raw whole potatoes into the simmering stew for 20 minutes — they absorb excess salt, then discard them.',
        howToPrevent: 'Boil salted meats in fresh water first and do not add any salt until the end.'
      }
    ],
    substitutions: [
      { original: 'Carne Seca', substitute: 'Corned beef brisket or smoked ham hock', notes: 'Provides rich cured savory flavor.' },
      { original: 'Paio sausage', substitute: 'Smoked Polish Kielbasa or Spanish Chorizo', notes: 'Delivers great smoky richness.' }
    ],
    safetyNotes: ['Stew stays hot for a long time; let cool comfortably before eating.'],
    servingGuide: {
      restingTime: 'Rest 15 minutes before serving.',
      temperature: 'Piping hot.',
      garnishing: 'Fresh orange slices and chopped parsley.',
      accompaniments: 'Garlic white rice, toasted Farofa, Couve a Mineira (collards), and Caipirinhas.'
    }
  },

  // 18. PERUVIAN DISHES (Authentic Lomo Saltado)
  {
    id: 'peruvian-dishes',
    name: 'Authentic Peruvian Lomo Saltado (Wok-Flambéed Beef Tenderloin with Crispy Fries)',
    cuisine: 'Global',
    region: 'South America (Peru / Lima)',
    servings: 4,
    prepTime: 20,
    cookTime: 8,
    difficulty: 'Medium',
    overview: {
      summary: 'The ultimate masterpiece of Peruvian Chifa (Chinese-Peruvian) cuisine: prime beef tenderloin sliced into thick strips, flash-fried and flambéed in a screaming-hot carbon steel wok to achieve smoky "wok hei" (breath of the wok). Tossed in under 4 minutes with crisp red onions, ripe tomatoes, spicy Ají Amarillo chile paste, soy sauce (sillao), and red wine vinegar, then folded with hot, crispy french fries and served with white rice.',
      appearance: 'A sizzling, colorful stir-fry of seared mahogany beef strips, translucent red onion wedges, and ruby tomatoes coated in a glossy dark savory sauce, mingled with golden french fries and cilantro.',
      texture: 'Buttery-soft, tender beef strips with seared crust, crunchy crisp-tender onions, and french fries that soak up savory pan juices while retaining crunch.',
      flavor: 'Smoky wok char, savory soy sauce umami, tangy red wine vinegar acidity, fruity spicy Ají Amarillo warmth, and fresh herbal cilantro.',
      restingTimeMinutes: 1
    },
    equipment: [
      { name: '14-inch carbon steel wok or heavy cast-iron skillet', purpose: 'Essential to reach smoking-high temperatures for authentic "Wok Hei" and flambéing.' },
      { name: 'Wok spatula (Chuan)', purpose: 'For high-speed tossing of ingredients without crushing delicate tomatoes.' }
    ],
    beforeYouStart: [
      { task: 'Slice 500g beef tenderloin (or sirloin) into 1cm thick by 5cm long strips; season with 1/2 tsp salt, pepper, and 1 tsp soy sauce.', durationMinutes: 5 },
      { task: 'Cut 1 large red onion into thick 1.5cm wedges and 2 Roma tomatoes into thick wedges.', durationMinutes: 5 },
      { task: 'Prepare or fry 300g thick-cut golden french fries until ultra-crisp; keep warm.', durationMinutes: 15 },
      { task: 'Whisk stir-fry sauce: 3 tbsp soy sauce, 2 tbsp red wine vinegar, 1 tbsp oyster sauce, 1 tbsp Ají Amarillo paste.', durationMinutes: 2 }
    ],
    ingredientPrepGuide: [
      { item: 'THE WOK HEI FLAMBÉ (Breath of the Wok)', technique: 'You MUST cook over maximum screaming heat in small batches! When the beef hits the smoking oil, tilt the wok toward the flame so aerosolized oil droplets ignite in a brief, dramatic fireball. This flambé caramelizes the exterior in seconds and infuses the meat with the legendary smoky essence of authentic Peruvian Chifa.' },
      { item: 'Thick Vegetable Wedges', technique: 'Cut red onions and tomatoes into thick wedges! They are tossed in the searing wok for only 60 to 90 seconds so the onions remain sweet and crunchy while the tomatoes stay whole and juicy without turning into stew.' }
    ],
    essentialIngredients: [
      { name: 'Beef tenderloin (Lomo fino) or Top Sirloin', prep: 'cut into 1cm x 5cm strips, room temperature', amount: '500g', metric: '500g', imperial: '1.1 lbs', common: '500g' },
      { name: 'Red onion', prep: 'cut into thick 1.5cm wedges', amount: '1 large', metric: '180g', imperial: '6.3 oz', common: '1 onion' },
      { name: 'Ripe Roma tomatoes', prep: 'seeded and cut into thick wedges', amount: '2 medium', metric: '200g', imperial: '7 oz', common: '2 tomatoes' },
      { name: 'Peruvian Ají Amarillo paste', prep: 'yellow chili paste', amount: '1.5 tbsp', metric: '25g', imperial: '0.9 oz', common: '1.5 tbsp' },
      { name: 'Garlic cloves', prep: 'finely minced', amount: '3 cloves', metric: '9g', imperial: '0.3 oz', common: '3 cloves' },
      { name: 'Peruvian / Chinese dark soy sauce (Sillao)', prep: 'rich soy sauce', amount: '3 tbsp', metric: '45ml', imperial: '1.5 fl oz', common: '3 tbsp' },
      { name: 'Red wine vinegar', prep: 'essential tangy acidity', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp' },
      { name: 'Fresh cilantro leaves', prep: 'roughly chopped', amount: '1/2 cup', metric: '15g', imperial: '0.5 oz', common: '1/2 cup' },
      { name: 'Hot crispy french fries (Papas fritas)', prep: 'thick-cut and crispy', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '3 cups' },
      { name: 'High-smoke point oil (Vegetable or Canola)', prep: 'for wok frying', amount: '3 tbsp', metric: '45ml', imperial: '1.5 fl oz', common: '3 tbsp' },
      { name: 'Cooked white rice', prep: 'steamed warm with garlic', amount: '3 cups', metric: '450g', imperial: '1 lb', common: '3 cups' }
    ],
    steps: [
      {
        step: 1,
        title: 'FLASH-SEAR & FLAMBÉ BEEF IN SCREAMING HOT WOK',
        whatYouNeed: ['Carbon steel wok smoking hot', '2 tbsp oil', 'Seasoned beef strips in single layer'],
        description: 'Heat wok over high heat until wisps of smoke pour off the metal. Add 2 tbsp oil. Immediately drop in half the beef strips in a single layer. Sear undisturbed for 60 seconds until a dark charred crust forms. Toss and sear for 30 seconds. If using gas, tilt wok to ignite a brief flambé. Transfer beef to a plate and repeat with remaining beef.',
        howToDoIt: 'Cooking in two small batches ensures the meat sears with wok hei rather than boiling in its own juices.',
        heat: 'Maximum High Heat',
        duration: 3,
        visualCues: 'Loud crackling sizzle, dramatic flame flash, deep mahogany charred crust on tender beef.',
        hear: 'Explosive, violent wok sizzle.',
        smell: 'Incredible smoky wok hei and seared beef.',
        textureCheck: 'Seared crust, rare tender interior.',
        whatShouldThisLookLike: 'Smoky, charred beef strips resting on a plate.',
        tip: 'Have all ingredients prepped and within arm\'s reach — wok cooking moves at lightning speed!',
        commonMistake: 'Dumping all meat into the wok at once, cooling the metal and stewing the beef into gray rubber.',
        moveOnWhen: 'All beef is seared and set aside.',
        quickInstructions: 'Sear beef in smoking hot wok in two batches for 90 secs until charred and flambéed; transfer to plate.'
      },
      {
        step: 2,
        title: 'STIR-FRY ONIONS, AJÍ AMARILLO & GARLIC',
        whatYouNeed: ['Wok on high heat', '1 tbsp oil', 'Thick red onion wedges', 'Minced garlic', '1.5 tbsp Ají Amarillo paste'],
        description: 'Add 1 tbsp oil to the hot wok. Add onion wedges, garlic, and Ají Amarillo paste. Toss furiously over high heat for 60 seconds. The onions should become slightly translucent on the edges while remaining crisp and crunchy in the center.',
        howToDoIt: 'High-heat tossing sears the onion layers without cooking out their satisfying raw crunch.',
        heat: 'High Heat',
        duration: 1,
        visualCues: 'Onions glisten with orange Ají Amarillo oil and blister with faint charred edges.',
        smell: 'Sweet onions, pungent garlic, and fruity spicy yellow chile.',
        textureCheck: 'Crisp and crunchy.',
        whatShouldThisLookLike: 'Glossy red onion wedges blistered in yellow chile paste.',
        tip: 'Do not overcook the onions — they must provide texture against the soft beef and potatoes.',
        commonMistake: 'Sautéing onions until limp and soft.',
        moveOnWhen: 'Onions are blistered and crisp-tender.',
        quickInstructions: 'Toss red onions, garlic, and Ají Amarillo in hot wok for 60 seconds until blistered and crunchy.'
      },
      {
        step: 3,
        title: 'ADD TOMATOES, SAUCE & RETURN BEEF',
        whatYouNeed: ['Tomato wedges', 'Soy sauce & red wine vinegar mixture', 'Seared beef with juices'],
        description: 'Add the tomato wedges to the wok. Immediately pour in the soy sauce and vinegar mixture. Return the seared beef and all resting juices to the wok. Toss rapidly for 45 to 60 seconds just until the tomatoes soften slightly and the sauce forms a glossy, bubbling dark glaze that coats everything.',
        howToDoIt: 'Pouring vinegar around the hot wok rim vaporizes harsh acidity, leaving sweet fermented tang in the sauce.',
        heat: 'High Heat',
        duration: 1,
        visualCues: 'Tomatoes warm through and glisten; sauce bubbles into a rich, dark mahogany glaze.',
        hear: 'Vigorous bubbling and sizzling.',
        smell: 'Tangy vinegar, savory soy sauce, and rich beef.',
        textureCheck: 'Juicy, glossy stir-fry with tender beef and intact tomatoes.',
        whatShouldThisLookLike: 'Glistening beef, tomatoes, and onions in glossy brown sauce.',
        tip: 'Toss gently so the tomato wedges do not break apart.',
        commonMistake: 'Cooking tomatoes too long, turning the dish into tomato sauce.',
        moveOnWhen: 'Sauce is glossy and tomatoes are warm.',
        quickInstructions: 'Add tomatoes, sauce, and seared beef; toss 45-60 seconds on high until glossy and bubbling.'
      },
      {
        step: 4,
        title: 'FOLD IN CRISPY FRIES & CILANTRO',
        whatYouNeed: ['Hot crispy french fries', 'Chopped cilantro', 'Steamed white rice on plates'],
        description: 'Turn off the heat. Immediately toss the hot crispy french fries and chopped cilantro into the wok. Fold 2 to 3 times so the fries absorb some of the savory sauce while remaining crisp. Transfer onto plates alongside mounds of warm garlic white rice. Serve at once!',
        howToDoIt: 'Folding fries at the very end ensures the bottom halves soak up the delicious savory soy-vinegar juice while the tops stay crunchy.',
        heat: 'Off the Heat',
        duration: 1,
        visualCues: 'Golden french fries mingling with mahogany beef, purple onions, red tomatoes, and emerald cilantro.',
        smell: 'Fried potatoes, fresh cilantro, and savory stir-fry.',
        textureCheck: 'Crispy fries soaked in savory jus, tender beef, and crisp onions.',
        whatShouldThisLookLike: 'The ultimate Peruvian Lomo Saltado platter.',
        tip: 'In Peru, Lomo Saltado is traditionally served with two starches: french fries AND white rice — the best of both worlds!',
        commonMistake: 'Letting fries sit in the sauce in the pan, which turns them completely soggy.',
        moveOnWhen: 'Folded and served immediately.',
        quickInstructions: 'Turn off heat, fold in hot crispy fries and cilantro 3 times, serve immediately with white rice.'
      }
    ],
    commonMistakes: [
      { mistake: 'Overcrowding the wok', remedy: 'Sear beef in small batches over screaming heat to achieve wok hei rather than boiling.' },
      { mistake: 'Overcooking tomatoes', remedy: 'Toss tomatoes for strictly 60 seconds so they stay whole and juicy.' }
    ],
    troubleshooting: [
      {
        problem: 'Beef boiled in liquid instead of searing',
        whatHappened: 'Wok wasn\'t hot enough or was overloaded.',
        whyItHappened: 'Moisture escaped before Maillard crust could form.',
        whatToDoNow: 'Drain off liquid, reheat wok until smoking with 1 tbsp oil, and flash-sear beef in tiny batches.',
        howToPrevent: 'Dry beef strips with paper towels and cook only 250g at a time over maximum heat.'
      }
    ],
    substitutions: [
      { original: 'Ají Amarillo paste', substitute: '1 minced habanero or serrano + 1/2 tsp turmeric for color', notes: 'Provides similar fruity heat.' },
      { original: 'Beef tenderloin', substitute: 'Top Sirloin or Flank steak', notes: 'Cut thin against the grain for tenderness.' }
    ],
    safetyNotes: ['Wok flambéing produces brief open flames — keep face and hair back from wok rim.'],
    servingGuide: {
      restingTime: '0 minutes — serve immediately while fries are crisp.',
      temperature: 'Piping hot.',
      garnishing: 'Fresh chopped cilantro leaves.',
      accompaniments: 'Steamed garlic white rice, aji verde (Peruvian green sauce), and Inca Kola or Pisco Sour.'
    }
  },

  // 19. ARGENTINE DISHES (Authentic Asado Criollo with Fresh Chimichurri)
  {
    id: 'argentine-dishes',
    name: 'Authentic Argentine Asado with Fresh Chimichurri (Hardwood-Grilled Flank & Ribeye)',
    cuisine: 'Global',
    region: 'South America (Argentina / Pampas)',
    servings: 4,
    prepTime: 25,
    cookTime: 20,
    difficulty: 'Medium',
    overview: {
      summary: 'The sacred social ritual of Argentina: thick-cut prime beef (Vacio / Flank steak and Ojo de Bife / Ribeye) seasoned strictly with coarse sea salt (sal parrillera), grilled over gentle embers of hardwood charcoal. Cooked to a succulent medium-rare with a crispy salted crust, carved into thick juicy slices, and crowned with authentic fresh herbal Chimichurri (hand-chopped flat-leaf parsley, fresh oregano, garlic, red wine vinegar, ají molido, and extra virgin olive oil).',
      appearance: 'Sizzling, thick-cut grilled beef steaks with caramelized grill marks, carved into thick rosy-pink slices dressed with a vibrant emerald-green and red chimichurri herb sauce.',
      texture: 'Crispy salted crust yielding to tender, deeply beefy, juicy meat that melts on the tongue, contrasted with the fresh herby crunch of chimichurri.',
      flavor: 'Pure woodfire smoke and prime beef umami, balanced by the bright herbal acidity of fresh oregano, flat-leaf parsley, pungent garlic, and red wine vinegar.',
      restingTimeMinutes: 8
    },
    equipment: [
      { name: 'Parrilla (Argentine charcoal grill with V-shaped grates) or heavy cast-iron grill pan', purpose: 'For gentle ember heat and fat drainage to avoid flare-ups.' },
      { name: 'Sharp carving knife and wooden cutting board', purpose: 'To slice thick cuts across the grain.' }
    ],
    beforeYouStart: [
      { task: 'Prepare Chimichurri at least 2 hours ahead: mix 1 cup finely chopped flat-leaf parsley, 2 tbsp fresh oregano, 4 cloves minced garlic, 1 tsp ají molido, 1/4 cup red wine vinegar, 1/2 cup olive oil, salt.', durationMinutes: 120 },
      { task: 'Bring 1kg beef steaks (flank or ribeye) to room temperature for 45 minutes.', durationMinutes: 45 },
      { task: 'Season steaks aggressively with coarse sea salt (sal parrillera) 15 minutes before grilling.', durationMinutes: 15 }
    ],
    ingredientPrepGuide: [
      { item: 'THE CHIMICHURRI RULE (Hand-Chopped Only!)', technique: 'NEVER blend chimichurri in a food processor! Blending pulverizes parsley into green slime and turns olive oil bitter. Always finely hand-chop parsley and oregano with a sharp knife so the herbs remain clean, vibrant, and suspended in oil and vinegar.' },
      { item: 'Sal Parrillera (Coarse Salt Only)', technique: 'Authentic Asado uses coarse sea salt (sal parrillera). Fine salt penetrates too fast and turns meat salty; coarse crystals adhere to the surface, creating a crunchy, savory crust while meat juices stay inside.' }
    ],
    essentialIngredients: [
      { name: 'Flank steak (Vacío) or Ribeye steak (Ojo de Bife)', prep: 'thick-cut (at least 3.5cm), room temperature', amount: '1 kg', metric: '1000g', imperial: '2.2 lbs', common: '1 kg' },
      { name: 'Coarse sea salt (Sal parrillera / Kosher salt)', prep: 'for seasoning meat', amount: '2 tbsp', metric: '30g', imperial: '1 oz', common: '2 tbsp' },
      { name: 'Fresh flat-leaf Italian parsley', prep: 'finely hand-chopped', amount: '1 cup packed', metric: '40g', imperial: '1.4 oz', common: '1 cup' },
      { name: 'Fresh oregano leaves', prep: 'finely chopped', amount: '2 tbsp', metric: '6g', imperial: '0.2 oz', common: '2 tbsp' },
      { name: 'Fresh garlic cloves', prep: 'finely minced to tiny specks', amount: '4 cloves', metric: '12g', imperial: '0.4 oz', common: '4 cloves' },
      { name: 'Argentine Ají Molido (crushed red pepper)', prep: 'mild chili flakes', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Red wine vinegar', prep: 'acidic tang', amount: '1/4 cup', metric: '60ml', imperial: '2 fl oz', common: '1/4 cup' },
      { name: 'Extra virgin olive oil (Cold-pressed)', prep: 'oil base', amount: '1/2 cup', metric: '120ml', imperial: '4 fl oz', common: '1/2 cup' },
      { name: 'Warm water with 1/2 tsp salt (Salmuera)', prep: 'for blooming dried herbs', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp' },
      { name: 'Crusty bread or baguette', prep: 'for serving', amount: '1 loaf', metric: '300g', imperial: '10.5 oz', common: '1 loaf' }
    ],
    steps: [
      {
        step: 1,
        title: 'HAND-CHOP & EMULSIFY THE FRESH CHIMICHURRI',
        whatYouNeed: ['Chopped parsley', 'Chopped fresh oregano', 'Minced garlic', 'Ají molido', 'Warm salmuera (salted water)', 'Red wine vinegar', 'Olive oil'],
        description: 'In a glass jar or bowl, combine minced garlic, ají molido, and 2 tbsp warm salted water (this blooms the garlic and spices). Stir in red wine vinegar. Add finely hand-chopped parsley and oregano. Finally, pour in extra virgin olive oil and 1 tsp salt. Whisk with a fork. Let rest at room temperature for at least 2 hours so flavors marry into a vibrant emerald vinaigrette.',
        howToDoIt: 'Adding warm water first takes the raw harsh bite out of the garlic and blooms the dried pepper flakes.',
        heat: 'No Heat',
        duration: 10,
        visualCues: 'A shimmering, vibrant green oil-and-vinegar sauce loaded with suspended herbs and red pepper flecks.',
        smell: 'Intensely fragrant with garlic, fresh parsley, oregano, and sharp vinegar.',
        textureCheck: 'Chunky, herb-rich sauce that drips gracefully from a spoon.',
        whatShouldThisLookLike: 'Authentic Argentine green chimichurri.',
        tip: 'Make chimichurri a day in advance if possible — the flavor doubles in richness after 24 hours!',
        commonMistake: 'Blending in a food processor, creating an unappetizing pale green smoothie.',
        moveOnWhen: 'Chimichurri is mixed and resting.',
        quickInstructions: 'Combine garlic, ají molido, warm water, vinegar, chopped parsley, oregano, and olive oil; rest 2 hours.'
      },
      {
        step: 2,
        title: 'SEASON WITH COARSE SALT & GRILL OVER HARDWOOD EMBERS',
        whatYouNeed: ['Room-temp steaks', 'Coarse sea salt', 'Hot charcoal grill or grill pan'],
        description: 'Heavily coat both sides of the steaks with coarse sea salt. Place steaks onto the grill grates over medium-high hardwood charcoal embers (you should be able to hold your hand 10cm above the grate for 4-5 seconds). Grill undisturbed for 5 to 6 minutes until a deep caramelized crust forms. Flip and grill the second side for 4 to 5 minutes until internal temperature hits 52°C (125°F) for medium-rare.',
        howToDoIt: 'Gentle ember heat cooks thick Argentine cuts through to the center without charring the exterior to carbon.',
        heat: 'Medium-High Charcoal Heat',
        duration: 12,
        visualCues: 'Deep mahogany grill lines; fat melts and sizzles; meat tightens slightly with clear bubbling surface juices.',
        hear: 'Steady, deep sizzling over hardwood embers.',
        smell: 'Pure woodsmoke and caramelizing prime beef.',
        textureCheck: 'Springy and firm to gentle touch.',
        whatShouldThisLookLike: 'Caramelized, smoky steaks resting on the grill.',
        tip: 'Never pierce steak with a fork while turning — use tongs so precious internal juices stay locked inside!',
        commonMistake: 'Grilling over direct raging flames, which covers the meat in black bitter soot.',
        moveOnWhen: 'Steaks reach 52°C internal temperature.',
        quickInstructions: 'Coat steaks in coarse salt, grill over medium-high embers 5-6 mins per side to 52°C for medium-rare.'
      },
      {
        step: 3,
        title: 'REST 8 MINUTES & CARVE ACROSS THE GRAIN',
        whatYouNeed: ['Grilled steaks', 'Cutting board', 'Sharp carving knife', 'Chimichurri bowl'],
        description: 'Transfer steaks to a cutting board and let rest undisturbed for strictly 8 minutes. Brush off any excess loose salt crystals. Using a sharp carving knife held at a 45-degree angle, carve the meat across the grain into thick 1cm (1/2-inch) diagonal slices. Fan the slices out onto a wooden carving board.',
        howToDoIt: 'Resting allows the constricted muscle fibers to relax and re-absorb the rich meat juices.',
        heat: 'No Heat',
        duration: 8,
        visualCues: 'Uniform, juicy, rosy-pink center from edge to edge with a dark caramelized outer crust.',
        smell: 'Roasted woodsmoke and warm beef juices.',
        textureCheck: 'Tender, juicy slices that yield like butter.',
        whatShouldThisLookLike: 'A fanned-out board of succulent pink beef slices.',
        tip: 'Always identify the grain before slicing: flank steak grain runs along its length, so slice across the narrow width!',
        commonMistake: 'Slicing with the grain, turning tender beef into chewy ropes.',
        moveOnWhen: 'Steaks are rested and sliced.',
        quickInstructions: 'Rest steaks 8 mins, carve across the grain into thick 1cm slices, arrange on board.'
      },
      {
        step: 4,
        title: 'SPOON CHIMICHURRI OVER HOT BEEF & SERVE',
        whatYouNeed: ['Sliced beef', 'Fresh chimichurri', 'Warm crusty bread'],
        description: 'Spoon generous ribbons of fresh green chimichurri directly over the warm pink beef slices, letting the herbaceous olive oil and vinegar mingle with the hot meat juices on the board. Serve immediately with crusty bread to sop up the chimichurri-beef juices and a glass of Argentine Malbec.',
        howToDoIt: 'The tart vinegar and fresh garlic cut cleanly through the rich beef fat, refreshing the palate with every bite.',
        heat: 'No Heat',
        duration: 2,
        visualCues: 'Rosy pink beef slices glistening with dark green herbs, golden olive oil, and red pepper flecks.',
        smell: 'Woodsmoke, pungent garlic, fresh parsley, and red wine vinegar.',
        textureCheck: 'Juicy, succulent beef contrasted with fresh crunchy herb dressing.',
        whatShouldThisLookLike: 'The authentic Argentine Asado experience.',
        tip: 'Dip warm crusty bread directly into the seasoned juices on the wooden board — this is the asador\'s greatest reward!',
        commonMistake: 'Cooking chimichurri on the stove — it must always be served fresh and raw.',
        moveOnWhen: 'Dressed with chimichurri and served warm.',
        quickInstructions: 'Spoon fresh chimichurri over sliced warm beef, serve with crusty bread and Malbec red wine.'
      }
    ],
    commonMistakes: [
      { mistake: 'Blending chimichurri in a machine', remedy: 'Always hand-chop herbs with a knife for proper texture and to avoid bitter olive oil.' },
      { mistake: 'Slicing meat with the grain', remedy: 'Always carve across the grain to keep every slice tender.' }
    ],
    troubleshooting: [
      {
        problem: 'Chimichurri is too acidic',
        whatHappened: 'Vinegar overpowered the herbs.',
        whyItHappened: 'Too much vinegar was added.',
        whatToDoNow: 'Stir in 2-3 extra tablespoons of extra virgin olive oil and another pinch of salt to round out acidity.',
        howToPrevent: 'Follow the 2:1 ratio of olive oil to red wine vinegar.'
      }
    ],
    substitutions: [
      { original: 'Flank steak (Vacío)', substitute: 'Skirt steak (Entraña) or Ribeye (Ojo de Bife)', notes: 'Skirt steak is famous for immense beefy flavor.' },
      { original: 'Ají Molido', substitute: 'Crushed red pepper flakes or Aleppo pepper', notes: 'Adds mild aromatic warmth.' }
    ],
    safetyNotes: ['Charcoal grilling produces high heat; use long metal tongs.'],
    servingGuide: {
      restingTime: 'Rest 8 minutes before slicing.',
      temperature: 'Warm pink steak with cool herb sauce.',
      garnishing: 'Fresh parsley sprig and extra chimichurri.',
      accompaniments: 'Grilled provolone cheese (Provoleta), crusty bread, Ensalada Rusa, and Argentine Malbec.'
    }
  },

  // 20. CARIBBEAN DISHES (Authentic Jamaican Jerk Chicken)
  {
    id: 'caribbean-dishes',
    name: 'Authentic Jamaican Jerk Chicken (Pimento Allspice & Scotch Bonnet Charcoal Smoke)',
    cuisine: 'Global',
    region: 'Caribbean (Jamaica / Boston Beach)',
    servings: 4,
    prepTime: 30,
    cookTime: 40,
    difficulty: 'Medium',
    overview: {
      summary: 'The fiery, world-famous pride of Jamaica: bone-in chicken pieces marinated overnight in an intense, aromatic wet paste of fresh Scotch bonnet peppers, whole toasted pimento (allspice) berries, fresh scallions, thyme, ginger, garlic, dark brown sugar, soy sauce, and lime juice. Charcoal-grilled low and slow over sweet pimento wood smoke until deeply charred, caramelized, and succulent with an electrifying aromatic kick.',
      appearance: 'Deep mahogany, charred, smoky chicken pieces glistening with caramelized spiced marinade, revealing moist, juicy pink-tinged meat beneath the crispy charred skin.',
      texture: 'Crisp, charred skin packed with fiery spices, contrasting with juicy, tender, fall-apart chicken meat.',
      flavor: 'An unforgettable Jamaican flavor explosion: intense fruity Scotch bonnet fire, sweet woodsy pimento allspice, fragrant fresh thyme, pungent scallions, and deep smoky char.',
      restingTimeMinutes: 10
    },
    equipment: [
      { name: 'Charcoal grill with lid (Drum smoker or kettle grill)', purpose: 'Essential to create authentic Jamaican smoke and indirect heat cooking.' },
      { name: 'Pimento wood chips or allspice berries', purpose: 'Soaked in water and thrown on coals to create authentic Jamaican allspice smoke.' },
      { name: 'Food processor', purpose: 'To pulse jerk marinade ingredients into a coarse wet paste.' }
    ],
    beforeYouStart: [
      { task: 'WEAR GLOVES! Seed and roughly chop 3 to 4 fresh Scotch bonnet peppers (adjust for heat).', durationMinutes: 5 },
      { task: 'Toast 2 tbsp whole allspice berries (pimento) in dry pan for 2 mins, grind into coarse powder.', durationMinutes: 5 },
      { task: 'Pulse marinade in food processor: Scotch bonnets, ground allspice, 6 scallions, 5 garlic cloves, 1 thumb ginger, 2 tbsp fresh thyme, 3 tbsp soy sauce, 2 tbsp brown sugar, 2 tbsp lime juice, 1 tbsp oil, 1 tsp salt.', durationMinutes: 8 }
    ],
    ingredientPrepGuide: [
      { item: 'THE PIMENTO ALLSPICE ESSENCE (Jamaica\'s Secret)', technique: 'Authentic Jerk is defined by Pimento (allspice berries) and Scotch bonnet peppers. Pimento trees grow wild across Jamaica; soaking allspice berries and adding them to the charcoal coals generates the signature sweet aromatic smoke that defines authentic Boston Bay jerk chicken.' },
      { item: 'Scoring the Chicken to the Bone', technique: 'Make 2 deep diagonal slashes into the thickest parts of chicken thighs and drumsticks down to the bone. Rub the thick wet jerk paste deep into these cuts so the fiery, herbal marinade penetrates the meat completely.' }
    ],
    essentialIngredients: [
      { name: 'Bone-in, skin-on chicken thighs & drumsticks', prep: 'scored deeply to the bone', amount: '1.2 kg', metric: '1200g', imperial: '2.6 lbs', common: '8 pieces' },
      { name: 'Scotch bonnet peppers (or Habanero)', prep: 'stemmed (wear gloves!)', amount: '3 to 4 peppers', metric: '35g', imperial: '1.2 oz', common: '3-4 chiles' },
      { name: 'Whole allspice berries (Jamaican Pimento)', prep: 'freshly toasted and ground', amount: '2 tbsp', metric: '15g', imperial: '0.5 oz', common: '2 tbsp' },
      { name: 'Scallions (Green onions)', prep: 'roughly chopped', amount: '6 scallions', metric: '80g', imperial: '2.8 oz', common: '6 scallions' },
      { name: 'Fresh thyme leaves', prep: 'picked from woody stems', amount: '2 tbsp', metric: '6g', imperial: '0.2 oz', common: '2 tbsp' },
      { name: 'Fresh garlic & Fresh ginger', prep: 'peeled and chopped', amount: '5 cloves garlic + 2.5cm ginger', metric: '30g', imperial: '1 oz', common: 'mixed' },
      { name: 'Dark brown sugar', prep: 'caramelizes on grill', amount: '2 tbsp', metric: '25g', imperial: '0.9 oz', common: '2 tbsp' },
      { name: 'Dark soy sauce & Fresh lime juice', prep: 'liquid base', amount: '3 tbsp soy + 2 tbsp lime', metric: '75ml', imperial: '2.5 fl oz', common: '5 tbsp total' },
      { name: 'Ground cinnamon & Nutmeg', prep: 'sweet spices', amount: '1/2 tsp cinnamon + 1/4 tsp nutmeg', metric: '2g', imperial: '0.07 oz', common: 'mixed' },
      { name: 'Fine sea salt & Black pepper', prep: 'seasoning', amount: '1.5 tsp salt + 1 tsp pepper', metric: '10g', imperial: '0.35 oz', common: 'mixed' }
    ],
    steps: [
      {
        step: 1,
        title: 'SCORE CHICKEN & MARINATE IN WET JERK PASTE',
        whatYouNeed: ['Chicken pieces', 'Pulsed wet jerk paste', 'Latex gloves', 'Ziploc bag or bowl'],
        description: 'Wearing gloves, make 2 deep diagonal slashes into each chicken thigh and drumstick. Rub the dark green, fragrant jerk paste vigorously all over the chicken, pressing it deep into the cuts and under the skin. Seal in a Ziploc bag or covered bowl and refrigerate for at least 8 hours (overnight yields extraordinary flavor).',
        howToDoIt: 'Rubbing into deep slashes allows the potent allspice, garlic, and capsaicin to cure the meat all the way to the bone.',
        heat: 'No Heat (Chilled)',
        duration: 15,
        visualCues: 'Chicken is heavily coated in a thick, dark green, fragrant spice paste.',
        smell: 'Intense aroma of allspice, fresh thyme, pungent scallions, and fruity fiery Scotch bonnets.',
        textureCheck: 'Well-coated, slippery seasoned chicken.',
        whatShouldThisLookLike: 'Chicken pieces marinating in deep green jerk paste.',
        tip: 'DO NOT touch your eyes or face after handling the jerk marinade — Scotch bonnets are intensely fiery!',
        commonMistake: 'Marinating for only 30 minutes, which leaves the chicken meat bland inside.',
        moveOnWhen: 'Chicken is marinated overnight.',
        quickInstructions: 'Score chicken to bone, rub thoroughly with jerk paste; seal and refrigerate 8-24 hours.'
      },
      {
        step: 2,
        title: 'SET UP TWO-ZONE CHARCOAL GRILL WITH ALLSPICE SMOKE',
        whatYouNeed: ['Charcoal grill', 'Hardwood charcoal banked to one side', 'Soaked allspice berries / pimento chips'],
        description: 'Set up your grill for two-zone indirect cooking: bank hot coals on one side of the grill and leave the other side empty. Throw a handful of water-soaked allspice berries and wood chips directly onto the hot coals. Close the lid and adjust vents until the grill maintains 175°C (350°F) with fragrant sweet smoke billowing from the top vent.',
        howToDoIt: 'Two-zone indirect heat allows the chicken to cook slowly without burning the sugar in the marinade.',
        heat: 'Indirect Medium Heat (175°C / 350°F)',
        duration: 10,
        visualCues: 'White, fragrant, sweet-smelling smoke billows from the grill vents.',
        smell: 'Sweet, woodsy, exotic Jamaican pimento allspice smoke.',
        textureCheck: 'Grill stabilized at steady temperature.',
        whatShouldThisLookLike: 'A two-zone smoking charcoal grill ready for chicken.',
        tip: 'Place a foil drip pan on the empty side beneath the grill grate to catch chicken fat drippings.',
        commonMistake: 'Grilling directly over coals from the start, which burns the marinade black before the meat cooks.',
        moveOnWhen: 'Smoker is at 175°C with clean allspice smoke.',
        quickInstructions: 'Set up two-zone grill at 175°C, throw soaked allspice berries on coals for authentic pimento smoke.'
      },
      {
        step: 3,
        title: 'INDIRECT SMOKE-ROAST FOR 35 MINUTES',
        whatYouNeed: ['Marinated chicken', 'Tongs', 'Grill lid closed'],
        description: 'Place chicken pieces skin-side UP on the cool, indirect side of the grill (away from the hot coals). Cover with the lid, positioning the top vent directly above the chicken to draw the smoke across the meat. Smoke-cook undisturbed for 30 to 35 minutes until the chicken reaches an internal temperature of 70°C (160°F).',
        howToDoIt: 'Indirect smoke-roasting gently cooks the meat through while the woodsmoke adheres to the wet marinade.',
        heat: 'Indirect Heat (Lid Closed)',
        duration: 35,
        visualCues: 'Chicken skin tightens, browns into a deep mahogany sheen, and absorbs the sweet allspice smoke.',
        smell: 'Incredible aroma of smoking jerk spices, charred thyme, and roasting chicken.',
        textureCheck: 'Firming up, juices running clear.',
        whatShouldThisLookLike: 'Mahogany-glazed chicken pieces smoking on the indirect grate.',
        tip: 'Resist opening the lid frequently — keeping the lid closed traps heat and smoke.',
        commonMistake: 'Leaving chicken on direct heat, scorching the skin to charcoal ash.',
        moveOnWhen: 'Internal temperature reaches 70°C (160°F).',
        quickInstructions: 'Place chicken skin-side UP on indirect side, cover, smoke 30-35 mins to 70°C internal.'
      },
      {
        step: 4,
        title: 'CHAR DIRECTLY OVER COALS & REST',
        whatYouNeed: ['Smoke-roasted chicken', 'Tongs', 'Direct heat zone of coals'],
        description: 'Move chicken pieces directly over the hot coals skin-side down for 2 to 3 minutes. The brown sugar in the marinade will bubble, sizzle, and caramelize into authentic dark, crispy, blistered jerk char marks. Flip and char the other side for 1 minute. Remove to a platter and rest for 10 minutes before chopping with a cleaver.',
        howToDoIt: 'High-heat direct searing caramelizes the sugars into the signature charred crust that defines real jerk.',
        heat: 'Direct High Heat',
        duration: 5,
        visualCues: 'Dark, sizzling, blistered char marks on the mahogany skin; juices bubbling furiously.',
        hear: 'Intense sizzling and popping as chicken fat drips onto the hot coals.',
        smell: 'Charred spices, caramelized sugar, and intense allspice.',
        textureCheck: 'Crispy charred skin over succulent, tender meat; internal temp 75°C (165°F).',
        whatShouldThisLookLike: 'Authentic Jamaican street-style charred jerk chicken.',
        tip: 'In Jamaica, jerk chicken is chopped into bite-sized pieces with a heavy cleaver right before serving.',
        commonMistake: 'Skipping the final direct sear, leaving the skin rubbery.',
        moveOnWhen: 'Charred, reached 75°C, and rested 10 minutes.',
        quickInstructions: 'Sear directly over coals 2-3 mins until blistered and caramelized; rest 10 mins, chop with cleaver.'
      }
    ],
    commonMistakes: [
      { mistake: 'Not using gloves with Scotch bonnets', remedy: 'Scotch bonnets contain intense capsaicin. Always wear gloves during prep.' },
      { mistake: 'Using powdered allspice only', remedy: 'Toast whole pimento berries and throw soaked berries on the coals for authentic smoke.' }
    ],
    troubleshooting: [
      {
        problem: 'Chicken burned black before cooking through',
        whatHappened: 'Cooked over direct flames the whole time.',
        whyItHappened: 'Marinade has brown sugar which burns rapidly over direct heat.',
        whatToDoNow: 'Move to indirect heat immediately and cover with lid until cooked through to 75°C.',
        howToPrevent: 'Always cook 90% of the time on indirect heat, searing over coals only in the final 3 minutes.'
      }
    ],
    substitutions: [
      { original: 'Scotch bonnet peppers', substitute: 'Habanero peppers', notes: 'Identical heat and fruity floral profile.' },
      { original: 'Pimento wood chips', substitute: 'Pecan or applewood chips + soaked allspice berries on coals', notes: 'Recreates the sweet pimento smoke.' }
    ],
    safetyNotes: ['WEAR GLOVES when handling Scotch bonnet peppers; wash cutting boards immediately.'],
    servingGuide: {
      restingTime: 'Rest 10 minutes before carving.',
      temperature: 'Piping hot and juicy.',
      garnishing: 'Fresh lime wedges and extra jerk pepper sauce.',
      accompaniments: 'Jamaican Rice and Peas (coconut red bean rice), fried festival dumplings, plantains, and Red Stripe beer.'
    }
  }
];
