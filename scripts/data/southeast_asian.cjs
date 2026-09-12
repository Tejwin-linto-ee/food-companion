// Southeast Asian Culinary Recipes (15 dishes)
module.exports = [
  // 1. PAD THAI (Bangkok Street Pad Thai Kung)
  {
    id: 'pad-thai',
    name: 'Authentic Bangkok Street Pad Thai (Pad Thai Kung)',
    cuisine: 'Thai / SE Asian',
    region: 'Thailand (Bangkok / Central)',
    servings: 4,
    prepTime: 25,
    cookTime: 12,
    difficulty: 'Medium',
    overview: {
      summary: 'Thailand\'s internationally beloved stir-fried street noodle masterwork: chewy medium rice noodles flash-fried in a searing wok with fresh tiger prawns, firm pressed yellow tofu, sweet preserved radish, and tiny sun-dried shrimp, bathed in an authentic tart-sweet tamarind-palm sugar-fish sauce reduction, scrambled with egg, tossed with garlic chives and fresh bean sprouts, and finished with crushed roasted peanuts and fresh lime.',
      appearance: 'Glistening golden-amber noodles flecked with pink curled prawns, golden tofu cubes, scrambled egg curds, emerald garlic chives, and white bean sprouts, flanked by a mound of crushed peanuts and a fresh lime wedge.',
      texture: 'The ultimate chewiness ("al dente" rice noodle spring), paired with snappy prawns, firm spongy tofu, and crunchy fresh bean sprouts and roasted peanuts.',
      flavor: 'Perfection of Thai flavor balance: deep fruity sourness from fresh tamarind pulp, rich caramel sweetness from palm sugar, savory pungency from fish sauce, and nutty roasted crunch.',
      restingTimeMinutes: 1
    },
    equipment: [
      { name: '14-inch seasoned carbon steel wok', purpose: 'Essential for high-heat rapid tossing without boiling or breaking delicate rice noodles.' },
      { name: 'Wok spatula (Chaan)', purpose: 'For lifting and folding noodles without chopping them into small fragments.' },
      { name: 'Wide mixing bowl for soaking noodles', purpose: 'Hydrates dried rice noodles in room-temperature water without turning them mushy.' }
    ],
    beforeYouStart: [
      { task: 'Soak 300g medium dried rice stick noodles (Sen Lek) in room-temperature water for 45 minutes until limp and pliable like leather ribbons; drain.', durationMinutes: 45 },
      { task: 'Prepare Pad Thai sauce: dissolve 4 tbsp tamarind paste, 4 tbsp palm sugar, 3 tbsp fish sauce, and 1 tbsp water over low heat until syrupy.', durationMinutes: 5 },
      { task: 'Cut 150g firm yellow pressed tofu into 2cm x 5mm matchsticks; finely mince 2 tbsp sweet preserved radish (Chai Poh).', durationMinutes: 5 },
      { task: 'Cut Chinese garlic chives (Kuicheai) into 4cm batons; peel 12 raw tiger prawns leaving tails intact.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'Noodle Soaking (Never Boil!)', technique: 'Pad Thai noodles must NEVER be boiled in hot water before stir-frying! Soaking in room-temperature water hydrates the interior starch while keeping the exterior firm. The noodles finish cooking by drinking the warm tamarind sauce directly in the searing wok, ensuring maximum flavor absorption and zero mushiness.' },
      { item: 'Tamarind Paste Selection', technique: 'Must use real brown tamarind pulp extracted with warm water. Never use Western vinegar or tomato ketchup (an unfortunate Western substitute) which destroys authentic Thai flavor balance.' }
    ],
    essentialIngredients: [
      { name: 'Dried medium rice stick noodles (Sen Lek)', prep: 'soaked in cold water 45 mins, drained', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '300g' },
      { name: 'Raw tiger prawns', prep: 'peeled, deveined, tails on', amount: '12 prawns', metric: '300g', imperial: '10.5 oz', common: '12 pieces' },
      { name: 'Extra-firm pressed yellow tofu', prep: 'cut into 2cm x 5mm matchsticks', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '1 cake' },
      { name: 'Sweet preserved radish (Chai Poh)', prep: 'finely minced', amount: '2 tbsp', metric: '30g', imperial: '1 oz', common: '2 tbsp' },
      { name: 'Small dried baby shrimp (Kung Haeng)', prep: 'rinsed and drained', amount: '2 tbsp', metric: '20g', imperial: '0.7 oz', common: '2 tbsp' },
      { name: 'Pure tamarind paste concentrate', prep: 'seedless brown pulp', amount: '4 tbsp', metric: '60ml', imperial: '2 fl oz', common: '1/4 cup' },
      { name: 'Thai palm sugar', prep: 'shaved and melted', amount: '4 tbsp', metric: '60g', imperial: '2.1 oz', common: '1/4 cup' },
      { name: 'Thai fish sauce (Nam Pla)', prep: 'premium anchovy extract', amount: '3 tbsp', metric: '45ml', imperial: '1.5 fl oz', common: '3 tbsp' },
      { name: 'Large eggs', prep: 'cracked into the wok', amount: '2 eggs', metric: '100g', imperial: '3.5 oz', common: '2 eggs' },
      { name: 'Fresh bean sprouts', prep: 'washed, drained, divided (half cooked, half raw)', amount: '200g', metric: '200g', imperial: '7 oz', common: '2 cups' },
      { name: 'Chinese garlic chives (Kuicheai)', prep: 'cut into 4cm batons', amount: '1 bunch', metric: '60g', imperial: '2.1 oz', common: '1/2 cup' },
      { name: 'Roasted unsalted peanuts', prep: 'crushed coarse', amount: '60g', metric: '60g', imperial: '2.1 oz', common: '1/2 cup' },
      { name: 'Limes', prep: 'cut into wedges for serving', amount: '2 limes', metric: '100g', imperial: '3.5 oz', common: '2 limes' },
      { name: 'Neutral cooking oil (canola or peanut)', prep: 'divided', amount: '4 tbsp', metric: '60ml', imperial: '2 fl oz', common: '4 tbsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'SEAR PRAWNS IN BLISTERING WOK',
        whatYouNeed: ['Carbon steel wok', '1.5 tbsp oil', '12 raw prawns'],
        description: 'Heat 1.5 tbsp oil in wok over high heat until smoking hot. Add prawns in a single layer. Sear for 60 seconds without moving until pink and caramelized on the bottom. Turn and sear 45 seconds until 90% cooked. Transfer prawns immediately to a plate.',
        howToDoIt: 'Flash-searing keeps prawns juicy and prevents them from overcooking into tough rubber while noodles cook.',
        heat: 'High Heat',
        duration: 2,
        visualCues: 'Prawns curl into tight coral C-shapes with golden browned edges.',
        hear: 'Intense, crackling sizzle.',
        smell: 'Seared sweet seafood and hot oil.',
        textureCheck: 'Plump and snappy.',
        whatShouldThisLookLike: 'Glistening pink seared prawns resting on a plate.',
        tip: 'Leave the fragrant prawn-flavored oil in the wok for the noodles!',
        commonMistake: 'Leaving prawns in the wok the entire cooking time — they will turn tough as leather.',
        moveOnWhen: 'Prawns are pink and transferred to plate.',
        quickInstructions: 'Sear prawns in hot oil for 90s until pink and curled; transfer to plate.'
      },
      {
        step: 2,
        title: 'STIR-FRY AROMATICS: TOFU, RADISH & DRIED SHRIMP',
        whatYouNeed: ['Wok', '1 tbsp oil', 'Tofu matchsticks', 'Minced preserved radish', 'Dried baby shrimp', '2 minced shallots'],
        description: 'Add 1 tbsp oil to wok over medium-high heat. Add pressed tofu, preserved radish, dried shrimp, and minced shallots. Stir-fry for 2 minutes until tofu edges turn crisp and golden and dried shrimp releases its intense savory aroma.',
        howToDoIt: 'Frying these firm umami aromatics builds the deep, savory foundation that flavors every bite of noodles.',
        heat: 'Medium-High Heat',
        duration: 2,
        visualCues: 'Tofu edges turn golden-amber; shallots soften and turn translucent.',
        smell: 'Intense roasted dried shrimp, sweet preserved radish, and fried allium aroma.',
        textureCheck: 'Tofu has a crisp outer skin.',
        whatShouldThisLookLike: 'Golden aromatics sizzling in the bottom of the wok.',
        tip: 'Preserved radish adds essential authentic salty-sweet depth that salt alone cannot mimic.',
        commonMistake: 'Burning shallots on high heat — keep ingredients moving constantly.',
        moveOnWhen: 'Tofu is golden and aromatics are fragrant.',
        quickInstructions: 'Stir-fry tofu, preserved radish, dried shrimp, and shallots 2 mins until golden.'
      },
      {
        step: 3,
        title: 'ADD NOODLES & TAMARIND SAUCE (THE DRINKING STAGE)',
        whatYouNeed: ['Soaked drained noodles', 'Prepared Pad Thai sauce (tamarind, palm sugar, fish sauce)', '2-3 tbsp water'],
        description: 'Push aromatics to one side. Add soaked noodles to the center of the wok. Immediately pour the tamarind sauce and 2 tbsp water directly over the noodles. Using your spatula, toss and fold the noodles vigorously through the sauce over high heat for 2 minutes until the noodles absorb the liquid, soften, and turn glossy golden-amber.',
        howToDoIt: 'The pliable soaked noodles "drink" the boiling tamarind sauce through rapid absorption, cooking to tender al dente perfection while locking flavor into the noodle core.',
        heat: 'High Heat',
        duration: 2,
        visualCues: 'Noodles turn from chalky white to translucent golden-brown, becoming limp, glossy, and tumbling freely.',
        hear: 'Rapid bubbling reduction.',
        smell: 'Fruity tart tamarind, caramelizing palm sugar, and pungent fish sauce.',
        textureCheck: 'Noodles are chewy, springy, and tender with zero crunch.',
        whatShouldThisLookLike: 'Tender, amber-glazed noodles thoroughly mixed with aromatics.',
        tip: 'If noodles are still stiff, splash in 1 more tablespoon of water; do not drown in liquid.',
        commonMistake: 'Pouring cold sauce onto boiled wet noodles — creates a soggy, broken soup.',
        moveOnWhen: 'Noodles have absorbed all sauce and are chewy-tender.',
        quickInstructions: 'Add noodles, pour in tamarind sauce and splash of water; toss 2 mins until absorbed.'
      },
      {
        step: 4,
        title: 'SCRAMBLE EGGS & FOLD',
        whatYouNeed: ['1.5 tbsp oil', '2 eggs'],
        description: 'Push all the noodles to one side of the wok. Swirl 1 tbsp oil into the empty side of the pan. Crack both eggs directly onto the hot metal. Break yolks with spatula. Let eggs fry for 15 seconds until bottoms set, then roughly scramble. While curds are still soft and custardy, fold the noodles over the eggs and toss together.',
        howToDoIt: 'Scrambling eggs separately creates distinct ribbons of golden yolk and white curd that coat the noodles without turning the dish into mush.',
        heat: 'High Heat',
        duration: 2,
        visualCues: 'Bright yellow and white scrambled egg ribbons dispersed throughout the amber noodles.',
        hear: 'Fierce sizzle as raw eggs contact hot oil.',
        smell: 'Toasted fried egg aroma.',
        textureCheck: 'Soft egg curds clinging to chewy noodles.',
        whatShouldThisLookLike: 'Noodles intertwined with fluffy golden egg curds.',
        tip: 'Fold noodles over eggs while eggs are 80% cooked so the remaining egg acts as an emulsifier.',
        commonMistake: 'Stirring eggs directly into noodles before they set, creating a pasty, gummy coating.',
        moveOnWhen: 'Eggs are cooked into soft ribbons and folded with noodles.',
        quickInstructions: 'Push noodles aside, scramble eggs on empty side until soft curds form, fold into noodles.'
      },
      {
        step: 5,
        title: 'ADD SPROUTS, CHIVES, PRAWNS & WOK HEI FINISH',
        whatYouNeed: ['Seared prawns', 'Half of bean sprouts (100g)', 'Garlic chive batons', 'Wok spatula'],
        description: 'Return seared prawns to the wok. Toss in half the fresh bean sprouts and all the garlic chives. Toss everything together over maximum heat for just 30 to 45 seconds until sprouts slightly wilt but retain a crisp, juicy crunch. TURN OFF HEAT IMMEDIATELY.',
        howToDoIt: 'Vegetables should only kiss the heat for seconds so their crisp crunch contrasts against the chewy noodles.',
        heat: 'Maximum Heat for 40s, then OFF',
        duration: 1,
        visualCues: 'Vibrant contrast of pink prawns, emerald chives, white bean sprouts, and golden noodles.',
        smell: 'Pungent garlic chives, smoky wok hei, and sweet tamarind.',
        textureCheck: 'Shatteringly crisp bean sprouts, tender chewy noodles, snappy prawns.',
        whatShouldThisLookLike: 'Masterpiece street-vendor Pad Thai in the wok.',
        tip: 'Keep the remaining raw bean sprouts for the serving plate to provide fresh temperature and texture contrast.',
        commonMistake: 'Cooking bean sprouts until limp and watery — they must remain crunchy!',
        moveOnWhen: 'Chives are wilted and prawns are hot.',
        quickInstructions: 'Add prawns, chives, and half the sprouts; toss 40s over max heat; turn off flame.'
      },
      {
        step: 6,
        title: 'PLATE WITH TRADITIONAL BANGKOK GARNISHES',
        whatYouNeed: ['Serving platter', 'Crushed roasted peanuts', 'Raw bean sprouts', 'Lime wedges', 'Thai chili powder (Prik Bon)'],
        description: 'Mound the hot Pad Thai onto a wide serving plate. On the side of the noodles, arrange: a neat heap of crushed roasted peanuts, a pile of fresh raw bean sprouts, fresh garlic chive sprigs, a pinch of red chili flakes, and a fat wedge of fresh lime. Squeeze fresh lime juice over the noodles immediately before eating!',
        howToDoIt: 'Bangkok street food is interactive: diners adjust the acidity (lime), heat (chili powder), and crunch (peanuts) to their exact personal preference.',
        heat: 'Off Heat',
        duration: 1,
        visualCues: 'Stunning banqueting plate with colorful noodles framed by fresh lime, raw sprouts, and crushed peanuts.',
        smell: 'Zesty fresh lime, toasted peanuts, and sweet tamarind.',
        textureCheck: 'Every bite is chewy, crunchy, and succulent.',
        whatShouldThisLookLike: 'Authentic street-style Pad Thai Kung.',
        tip: 'Toss the crushed peanuts and fresh lime juice through the noodles right at the table.',
        commonMistake: 'Omitting the fresh lime — lime juice provides the essential high acid note that cuts through sweet palm sugar.',
        moveOnWhen: 'Plated and ready to devour.',
        quickInstructions: 'Plate noodles; garnish with crushed peanuts, raw sprouts, lime wedges, and chili flakes.'
      }
    ],
    commonMistakes: [
      { mistake: 'Noodles were mushy, broken, and clumped.', remedy: 'Noodles were boiled in water instead of soaked in room-temperature water. Always cold-soak for 45 mins.' },
      { mistake: 'Dish tasted like ketchup or vinegar.', remedy: 'Western substitutes were used. Real Pad Thai requires authentic tamarind pulp and palm sugar.' }
    ],
    troubleshooting: [
      {
        problem: 'Noodles are stuck together in a sticky ball in the wok',
        whatHappened: 'Not enough oil or noodles were under-hydrated.',
        whyItHappened: 'Starches bonded without fat barrier.',
        whatToDoNow: 'Drizzle 1 tbsp oil and 2 tbsp warm water around the wok rim; toss vigorously with tongs to separate.',
        howToPrevent: 'Ensure noodles are soaked until limp and use adequate oil during stir-frying.'
      }
    ],
    substitutions: [
      { original: 'Tiger prawns', substitute: 'Sliced chicken thigh, pork loin, or extra pressed tofu (Vegetarian Pad Thai)', notes: 'Pad Thai Gai (Chicken) is equally beloved.' },
      { original: 'Chinese garlic chives', substitute: 'Green scallion batons', notes: 'Very good pantry alternative.' }
    ],
    safetyNotes: [
      'Prawns must be cooked thoroughly until opaque pink.'
    ],
    servingGuide: {
      restingTime: 'Serve immediately.',
      garnishing: 'Crushed roasted peanuts, fresh lime wedge, Thai chili powder, and fresh garlic chive sprigs.',
      plating: 'Wide shallow ceramic plate with condiments arranged neatly along the rim.',
      temperature: 'Piping hot.',
      accompaniments: 'Thai iced tea with condensed milk (Cha Yen) or fresh young coconut water.'
    }
  },

  // 2. GREEN CURRY (Thai Gaeng Keow Wan Gai)
  {
    id: 'green-curry',
    name: 'Authentic Thai Green Chicken Curry (Gaeng Keow Wan Gai)',
    cuisine: 'Thai / SE Asian',
    region: 'Thailand (Central / Bangkok)',
    servings: 4,
    prepTime: 25,
    cookTime: 20,
    difficulty: 'Medium',
    overview: {
      summary: 'The aromatic crown of Thai royal cuisine: tender chicken thigh chunks, pea eggplants, and round Thai eggplants simmered in a luscious, pale jade broth made by "cracking" rich coconut cream until it renders fragrant coconut oil, infused with fresh green chili paste, makrut lime leaves, palm sugar, fish sauce, and a generous blizzard of sweet Thai holy basil.',
      appearance: 'A pale jade-green, velvety coconut soup floating with glistening emerald coconut oil droplets, studded with tender chicken, purple-green Thai eggplants, scarlet chili slivers, and dark green basil.',
      texture: 'Silky, creamy, spoon-coating broth with tender succulent chicken and soft, spongy eggplants that burst with savory curry broth.',
      flavor: 'Herbaceous, floral, and intensely aromatic: fiery green bird\'s eye chili heat rounded by creamy coconut milk, citrusy makrut lime, sweet palm sugar, and anise-like Thai basil.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Heavy-bottomed saucepan or wok (3–4 qt)', purpose: 'For gently reducing and cracking coconut cream without scorching.' },
      { name: 'Mortar and pestle (or small food processor)', purpose: 'Pounds fresh green chilies, lemongrass, and galangal into an aromatic paste.' },
      { name: 'Wooden cooking spoon', purpose: 'For stirring and separating the cracked coconut oil.' }
    ],
    beforeYouStart: [
      { task: 'Cut 500g boneless skinless chicken thighs into uniform 3.5cm bite-sized pieces.', durationMinutes: 5 },
      { task: 'Quarter 4 round Thai green eggplants and submerge in salted water (prevents oxidation/browning).', durationMinutes: 5 },
      { task: 'Bruise and tear 6 makrut (kaffir) lime leaves, discarding the tough central rib.', durationMinutes: 2 },
      { task: 'Measure 250ml thick coconut cream (head of the can) and 400ml thinner coconut milk (body of the can).', durationMinutes: 2 }
    ],
    ingredientPrepGuide: [
      { item: 'Cracking Coconut Cream (Taek Man)', technique: 'Pour the thick coconut cream into a dry saucepan over medium-low heat. Simmer gently for 5–7 minutes without scorching. Water will evaporate and the emulsion will "break" or "crack", releasing clear, fragrant coconut oil that floats on top. Frying the curry paste in this rendered coconut oil blooms the volatile chili aromatics authentically.' },
      { item: 'Thai Eggplant Soaking', technique: 'Round Thai green eggplants (Makhuea Pro) oxidize and turn black within 2 minutes of cutting. Submerge cut wedges immediately in a bowl of cold water with 1 tsp salt until ready to drop into the simmering curry.' }
    ],
    essentialIngredients: [
      { name: 'Boneless skinless chicken thighs', prep: 'cut into 3.5cm cubes', amount: '500g', metric: '500g', imperial: '1.1 lbs', common: '500g' },
      { name: 'Authentic Thai green curry paste (Mae Ploy or handmade)', prep: 'fresh green chilies, lemongrass, galangal', amount: '3 tbsp', metric: '50g', imperial: '1.8 oz', common: '3 tbsp' },
      { name: 'Pure coconut cream (thick cream from top of can)', prep: 'for cracking oil', amount: '250ml', metric: '250ml', imperial: '8.5 fl oz', common: '1 cup' },
      { name: 'Coconut milk (lighter milk from bottom of can)', prep: 'broth body', amount: '400ml', metric: '400ml', imperial: '13.5 fl oz', common: '1.75 cups' },
      { name: 'Chicken stock or water', prep: 'liquid base', amount: '150ml', metric: '150ml', imperial: '5 fl oz', common: '2/3 cup' },
      { name: 'Round Thai green eggplants (Makhuea Pro)', prep: 'quartered and salted-water soaked', amount: '4 eggplants', metric: '150g', imperial: '5.3 oz', common: '4 eggplants' },
      { name: 'Pea eggplants (Makhuea Phuang)', prep: 'stemmed whole green pearls', amount: '50g', metric: '50g', imperial: '1.8 oz', common: '1/3 cup' },
      { name: 'Makrut (kaffir) lime leaves', prep: 'center veins removed, torn in half', amount: '6 leaves', metric: '6 leaves', imperial: '6 leaves', common: '6 leaves' },
      { name: 'Thai fish sauce (Nam Pla)', prep: 'premium quality', amount: '2.5 tbsp', metric: '37ml', imperial: '1.2 fl oz', common: '2.5 tbsp' },
      { name: 'Thai palm sugar', prep: 'shaved', amount: '1.5 tbsp', metric: '25g', imperial: '0.9 oz', common: '1.5 tbsp' },
      { name: 'Fresh Thai sweet basil leaves (Horapha)', prep: 'stems removed, packed leaves', amount: '1 cup', metric: '40g', imperial: '1.4 oz', common: '1 cup' },
      { name: 'Fresh red spur chilies (Prik Chi Fa) or red jalapeño', prep: 'sliced diagonally into thin matchsticks for garnish', amount: '1 chili', metric: '15g', imperial: '0.5 oz', common: '1 chili' }
    ],
    steps: [
      {
        step: 1,
        title: 'CRACK THE COCONUT CREAM (TAEK MAN)',
        whatYouNeed: ['Heavy saucepan', '250ml thick coconut cream'],
        description: 'Pour 250ml of thick coconut cream into the saucepan over medium heat. Simmer gently for 5 to 7 minutes, stirring occasionally. Watch closely: as water evaporates, tiny beads of clear, glistening coconut oil will separate and float to the surface, and the cream will bubble with a thick oily sheen.',
        howToDoIt: 'Cracking the coconut cream is the foundational secret of Thai curry: it creates natural cooking oil to fry the paste without adding heavy neutral oils.',
        heat: 'Medium-Low Heat',
        duration: 6,
        visualCues: 'Cream reduces and separates; clear droplets of coconut oil visibly pool and glisten on top.',
        hear: 'Steady, gentle sizzling simmer.',
        smell: 'Intense sweet, toasted coconut fragrance.',
        textureCheck: 'Thick, separated oily cream.',
        whatShouldThisLookLike: 'Reduced coconut cream with glistening oil floating on top.',
        tip: 'If using canned coconut cream without additives, it cracks easily. If it refuses to crack, add 1 tsp neutral oil.',
        commonMistake: 'Boiling on high heat — burns the coconut solids brown instead of separating clear oil.',
        moveOnWhen: 'Clear coconut oil has separated on top.',
        quickInstructions: 'Simmer thick coconut cream over medium-low for 5-7 mins until clear coconut oil separates.'
      },
      {
        step: 2,
        title: 'FRY GREEN CURRY PASTE IN COCONUT OIL',
        whatYouNeed: ['3 tbsp green curry paste', 'Cracked coconut cream'],
        description: 'Add 3 tablespoons of green curry paste directly into the cracked coconut oil. Fry over medium heat for 3 to 4 minutes, mashing and stirring constantly with your wooden spoon. The paste will dissolve into the cream and fry into an intensely fragrant, shimmering jade-green sauce.',
        howToDoIt: 'Frying paste in hot oil extracts oil-soluble flavor molecules from green chilies, galangal, lemongrass, and coriander roots.',
        heat: 'Medium Heat',
        duration: 4,
        visualCues: 'Paste turns brilliant pale jade-green; glistening green-tinted oil floats around the edges.',
        smell: 'Intense floral lemongrass, citrusy galangal, pungent shrimp paste, and fresh green chili.',
        textureCheck: 'Smooth, oily, aromatic curry paste base.',
        whatShouldThisLookLike: 'Shimmering jade-green curry paste sizzling in the pot.',
        tip: 'Take a deep breath — when the chili aromatics tickle your nose, the paste is properly cooked!',
        commonMistake: 'Adding liquid broth before frying the paste — boils the paste, leaving a raw, harsh, grassy taste.',
        moveOnWhen: 'Paste is deeply aromatic and green oil floats on perimeter.',
        quickInstructions: 'Fry curry paste in cracked coconut oil for 3-4 mins until aromatic and jade-green.'
      },
      {
        step: 3,
        title: 'SEAR CHICKEN IN THE CURRY PASTE',
        whatYouNeed: ['500g chicken thigh chunks'],
        description: 'Add chicken thigh pieces to the sizzling curry paste. Stir and toss for 3 minutes over medium-high heat until the exterior of all chicken pieces turns opaque and is coated in the fragrant green paste (chicken does not need to be cooked through yet).',
        howToDoIt: 'Searing chicken in the concentrated paste infuses the meat fibers with seasoning before broth is added.',
        heat: 'Medium-High Heat',
        duration: 3,
        visualCues: 'Chicken turns opaque white-green; juices mix with the rich curry paste.',
        smell: 'Rich savory poultry and spicy green chili.',
        textureCheck: 'Chicken is firming on exterior.',
        whatShouldThisLookLike: 'Chicken pieces completely coated in rich green curry paste.',
        tip: 'Always use chicken thighs — breast meat dries out during simmering.',
        commonMistake: 'Stirring so violently that chicken tears apart.',
        moveOnWhen: 'Chicken is opaque on the outside.',
        quickInstructions: 'Add chicken thighs, stir-fry 3 mins until coated and opaque on exterior.'
      },
      {
        step: 4,
        title: 'ADD LIQUIDS, EGGPLANTS & SIMMER TILL TENDER',
        whatYouNeed: ['400ml coconut milk', '150ml chicken broth', 'Quartered Thai eggplants', 'Pea eggplants', 'Torn makrut lime leaves', '2.5 tbsp fish sauce', '1.5 tbsp palm sugar'],
        description: 'Pour in 400ml coconut milk and 150ml chicken broth. Add drained Thai eggplants, pea eggplants, torn makrut lime leaves, fish sauce, and palm sugar. Bring to a boil over medium heat. Reduce to a gentle simmer for 10 minutes until chicken is tender and eggplants are translucent and soft.',
        howToDoIt: 'Gentle simmering cooks the eggplants until they turn soft and spongy, absorbing the rich curry broth like sponges.',
        heat: 'Medium-Low Simmer',
        duration: 10,
        visualCues: 'Sauce bubbles lazily; green eggplants soften and turn translucent olive-green; emerald oil droplets float on the surface.',
        smell: 'Exquisite harmony of sweet coconut, citrusy makrut lime, and spicy herbal aromatics.',
        textureCheck: 'A skewer pierces Thai eggplant effortlessly; chicken is tender (75°C).',
        whatShouldThisLookLike: 'Silky pale jade curry with tender chicken and soft eggplants.',
        tip: 'Taste the broth: it should taste salty-savory from fish sauce, followed by rich coconut sweetness and lingering chili heat.',
        commonMistake: 'Boiling violently on high heat, which can curdle the coconut milk into grainy specks.',
        moveOnWhen: 'Eggplants are tender and chicken is cooked through (10 mins).',
        quickInstructions: 'Add coconut milk, broth, eggplants, lime leaves, fish sauce, and palm sugar; simmer gently 10 mins.'
      },
      {
        step: 5,
        title: 'FOLD IN THAI BASIL & SERVE (HORAPHA FINISH)',
        whatYouNeed: ['1 cup fresh Thai sweet basil leaves', 'Sliced red chili matchsticks'],
        description: 'Toss in fresh Thai sweet basil leaves and red chili matchsticks. Push them under the surface with a spoon. TURN OFF HEAT IMMEDIATELY. Residual heat will wilt the basil in 20 seconds, releasing its intoxicating anise-cinnamon oils into the curry while keeping leaves vibrantly green.',
        howToDoIt: 'Thai basil volatile oils are extremely delicate; boiling basil cooks away its floral aroma and turns leaves black.',
        heat: 'Off Heat',
        duration: 1,
        visualCues: 'Vibrant contrast of pale jade curry, dark green basil leaves, and brilliant red chili matchsticks.',
        smell: 'Intense burst of fresh anise, licorice, and sweet herbal perfume.',
        textureCheck: 'Silky, velvety broth.',
        whatShouldThisLookLike: 'Authentic Thai Royal Green Curry ready for the table.',
        tip: 'Never substitute Italian sweet basil — authentic Thai basil (Horapha) has purple stems and a distinct licorice-clove punch.',
        commonMistake: 'Boiling the basil on the stove, which turns the leaves brown and ruins the fresh aroma.',
        moveOnWhen: 'Basil is wilted and fragrant.',
        quickInstructions: 'Stir in Thai basil and red chilies off heat; let wilt for 20 seconds; serve hot.'
      }
    ],
    commonMistakes: [
      { mistake: 'Curry was watery, bland, and separated.', remedy: 'Curry paste wasn\'t fried in cracked coconut cream. Always fry paste in separated coconut oil first.' },
      { mistake: 'Eggplants were brown, bitter, and hard.', remedy: 'Eggplants were not submerged in salted water after cutting, or weren\'t simmered long enough. Simmer until translucent.' }
    ],
    troubleshooting: [
      {
        problem: 'Curry is overwhelmingly spicy for guests',
        whatHappened: 'Green curry paste contains pure fiery green bird\'s eye chilies.',
        whyItHappened: 'High capsaicin concentration.',
        whatToDoNow: 'Whisk in 1/2 cup extra coconut milk and 1 tsp extra palm sugar to tame the heat.',
        howToPrevent: 'Use 2 tbsp paste instead of 3 if sensitive to spice.'
      }
    ],
    substitutions: [
      { original: 'Thai green eggplants', substitute: 'Zucchini chunks or Asian long eggplants cut into 3cm chunks', notes: 'Zucchini cooks in 5 minutes and absorbs curry flavor beautifully.' },
      { original: 'Chicken thighs', substitute: 'Peeled tiger prawns, sliced beef sirloin, or fried firm tofu', notes: 'Tofu Green Curry is a revered vegetarian Thai classic.' }
    ],
    safetyNotes: [
      'Chicken thighs must reach minimum internal temperature of 74°C (165°F).'
    ],
    servingGuide: {
      restingTime: 'Rest 2 minutes off heat before ladling.',
      garnishing: 'Fresh Thai sweet basil sprigs, red chili matchsticks, and a drizzle of coconut cream.',
      plating: 'Deep ceramic bowl with ladle.',
      temperature: 'Piping hot.',
      accompaniments: 'Steamed Thai Jasmine rice (Khao Hom Mali) or fermented rice vermicelli noodles (Khanom Jeen).'
    }
  },

  // 3. RED CURRY (Thai Gaeng Phed Gai)
  {
    id: 'red-curry',
    name: 'Classic Thai Red Chicken Curry (Gaeng Phed Gai)',
    cuisine: 'Thai / SE Asian',
    region: 'Thailand (Central / Southern)',
    servings: 4,
    prepTime: 20,
    cookTime: 20,
    difficulty: 'Medium',
    overview: {
      summary: 'Thailand\'s fiery, crimson coconut stew: tender chicken thighs and crunchy bamboo shoots simmered in a bold, aromatic red curry made from dried red spur chilies, lemongrass, galangal, and shrimp paste fried in cracked coconut cream, sweetened with palm sugar and seasoned with umami fish sauce, crowned with makrut lime leaves and Thai holy basil.',
      appearance: 'A vibrant scarlet-orange, velvety coconut soup floating with shimmering red chili oil droplets, loaded with tender chicken, ivory bamboo shoot strips, and torn dark basil leaves.',
      texture: 'Silky, rich, full-bodied broth, tender chicken chunks, and crisp, crunchy bamboo shoots.',
      flavor: 'Deeper, earthier heat than green curry: smoky dried red chili warmth, citrusy makrut lime, sweet coconut cream, savory fish sauce, and herbal basil.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Heavy saucepan or wok (3–4 qt)', purpose: 'For reducing coconut cream and simmering the curry evenly.' },
      { name: 'Wooden spoon', purpose: 'For dissolving and frying red curry paste.' }
    ],
    beforeYouStart: [
      { task: 'Cut 500g chicken thighs into 3.5cm bite-sized pieces.', durationMinutes: 5 },
      { task: 'Rinse 150g canned bamboo shoot strips in boiling water for 3 minutes to remove canned brine flavor; drain.', durationMinutes: 5 },
      { task: 'Tear 6 makrut lime leaves in half, removing central stems.', durationMinutes: 2 }
    ],
    ingredientPrepGuide: [
      { item: 'Bamboo Shoot Blanching', technique: 'Always boil canned bamboo shoots in fresh water for 3 minutes before adding to Thai curries. This neutralizes canned metallic odors and restores clean, sweet bamboo crunch.' }
    ],
    essentialIngredients: [
      { name: 'Boneless skinless chicken thighs', prep: 'cut into 3.5cm cubes', amount: '500g', metric: '500g', imperial: '1.1 lbs', common: '500g' },
      { name: 'Thai red curry paste (Mae Ploy or handmade)', prep: 'dried red chilies, lemongrass, galangal, shrimp paste', amount: '3 tbsp', metric: '50g', imperial: '1.8 oz', common: '3 tbsp' },
      { name: 'Pure coconut cream (thick top layer)', prep: 'for cracking oil', amount: '250ml', metric: '250ml', imperial: '8.5 fl oz', common: '1 cup' },
      { name: 'Coconut milk', prep: 'broth body', amount: '400ml', metric: '400ml', imperial: '13.5 fl oz', common: '1.75 cups' },
      { name: 'Chicken broth or water', prep: 'liquid', amount: '150ml', metric: '150ml', imperial: '5 fl oz', common: '2/3 cup' },
      { name: 'Bamboo shoot strips (canned)', prep: 'boiled 3 mins, drained', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '1 cup' },
      { name: 'Red bell pepper', prep: 'seeded and sliced into 1cm strips', amount: '1 medium', metric: '120g', imperial: '4.2 oz', common: '1 pepper' },
      { name: 'Makrut lime leaves', prep: 'torn in half', amount: '6 leaves', metric: '6 leaves', imperial: '6 leaves', common: '6 leaves' },
      { name: 'Thai fish sauce (Nam Pla)', prep: 'for seasoning', amount: '2.5 tbsp', metric: '37ml', imperial: '1.2 fl oz', common: '2.5 tbsp' },
      { name: 'Thai palm sugar', prep: 'shaved', amount: '1.5 tbsp', metric: '25g', imperial: '0.9 oz', common: '1.5 tbsp' },
      { name: 'Fresh Thai sweet basil (Horapha)', prep: 'leaves plucked', amount: '1 cup', metric: '40g', imperial: '1.4 oz', common: '1 cup' }
    ],
    steps: [
      {
        step: 1,
        title: 'CRACK COCONUT CREAM & FRY RED CURRY PASTE',
        whatYouNeed: ['Saucepan', '250ml coconut cream', '3 tbsp red curry paste'],
        description: 'Simmer 250ml coconut cream over medium-low heat for 6 minutes until clear coconut oil separates on top. Add 3 tbsp red curry paste. Fry and mash with a wooden spoon for 3 minutes until paste dissolves and oil turns a glowing, deep scarlet-orange.',
        howToDoIt: 'Frying dried chili paste in coconut oil blooms earthy capsanthin pigments and toast aromatics.',
        heat: 'Medium-Low Heat',
        duration: 9,
        visualCues: 'Paste turns brilliant fiery scarlet; red-tinted oil separates around the edges.',
        smell: 'Smoky dried chili, pungent galangal, and sweet coconut oil.',
        textureCheck: 'Smooth, oily, sizzling paste.',
        whatShouldThisLookLike: 'Glowing red curry paste sizzling in coconut oil.',
        tip: 'Keep heat moderate so the dried chilies don\'t scorch.',
        commonMistake: 'Rushing with high heat, which burns the dried chili flakes bitter.',
        moveOnWhen: 'Red oil is floating and paste is fragrant.',
        quickInstructions: 'Crack coconut cream 6 mins; fry red curry paste 3 mins until scarlet oil separates.'
      },
      {
        step: 2,
        title: 'SEAR CHICKEN IN SCARLET PASTE',
        whatYouNeed: ['Chicken thigh cubes'],
        description: 'Add chicken thigh pieces to the pan. Stir-fry for 3 minutes over medium-high heat until coated in red paste and opaque on the exterior.',
        howToDoIt: 'Coating chicken in hot paste sears flavor into the outer meat layers.',
        heat: 'Medium-High Heat',
        duration: 3,
        visualCues: 'Chicken turns opaque and takes on a vibrant orange-red coating.',
        textureCheck: 'Chicken is firming.',
        whatShouldThisLookLike: 'Chicken pieces coated in sizzling red paste.',
        tip: 'Ensure all chicken chunks touch the hot paste.',
        commonMistake: 'Crowding pan with cold un-drained chicken, releasing excess water.',
        moveOnWhen: 'Chicken is opaque on the outside.',
        quickInstructions: 'Add chicken thighs; stir-fry 3 mins until coated in red paste.'
      },
      {
        step: 3,
        title: 'ADD LIQUIDS, BAMBOO SHOOTS & SIMMER',
        whatYouNeed: ['400ml coconut milk', '150ml broth', 'Bamboo shoots', 'Red bell pepper', 'Torn lime leaves', 'Fish sauce', 'Palm sugar'],
        description: 'Pour in 400ml coconut milk and 150ml broth. Add bamboo shoots, red bell pepper strips, torn lime leaves, fish sauce, and palm sugar. Bring to a gentle boil, then simmer on medium-low for 10 minutes until chicken is cooked through (75°C) and peppers are tender-crisp.',
        howToDoIt: 'Simmering infuses the bamboo shoots and peppers with sweet coconut curry broth.',
        heat: 'Medium-Low Simmer',
        duration: 10,
        visualCues: 'Broth simmers gently into a rich scarlet-orange soup with floating red oil droplets.',
        smell: 'Citrusy lime leaves, sweet palm sugar, and savory coconut.',
        textureCheck: 'Crunchy bamboo shoots, tender chicken.',
        whatShouldThisLookLike: 'A vibrant red, simmering Thai curry pot.',
        tip: 'Taste broth and adjust: balance fish sauce (salty) and palm sugar (sweet).',
        commonMistake: 'Boiling furiously on high heat, separating coconut milk.',
        moveOnWhen: 'Chicken is cooked and peppers are tender.',
        quickInstructions: 'Add coconut milk, broth, bamboo shoots, peppers, lime leaves, fish sauce, and sugar; simmer 10 mins.'
      },
      {
        step: 4,
        title: 'STIR IN THAI BASIL & SERVE',
        whatYouNeed: ['1 cup Thai sweet basil'],
        description: 'Stir in fresh Thai sweet basil. TURN OFF HEAT. Let basil wilt in the hot curry for 20 seconds. Ladle into warm bowls and serve hot.',
        howToDoIt: 'Residual heat extracts the floral anise oils without overcooking leaves.',
        heat: 'Off Heat',
        duration: 1,
        visualCues: 'Dark green basil leaves wilted into fiery scarlet curry.',
        smell: 'Intense sweet anise and red chili aroma.',
        textureCheck: 'Silky, velvety broth.',
        whatShouldThisLookLike: 'Classic Thai Red Chicken Curry ready to serve.',
        tip: 'Serve with extra lime leaves for presentation.',
        commonMistake: 'Cooking basil on heat, which destroys delicate volatile oils.',
        moveOnWhen: 'Basil is wilted and fragrant.',
        quickInstructions: 'Stir in Thai basil off heat; rest 20 seconds; serve hot with Jasmine rice.'
      }
    ],
    commonMistakes: [
      { mistake: 'Curry tasted metallic or sour.', remedy: 'Canned bamboo shoots were added un-rinsed. Always boil bamboo shoots in water 3 mins first.' },
      { mistake: 'Curry was greasy and separated.', remedy: 'Boiled too violently. Keep heat at a gentle medium-low simmer.' }
    ],
    troubleshooting: [
      {
        problem: 'Curry is too thick and heavy',
        whatHappened: 'Simmered too long uncovered.',
        whyItHappened: 'Water evaporated excessively.',
        whatToDoNow: 'Whisk in 1/2 cup chicken broth or water; simmer 1 minute.',
        howToPrevent: 'Keep lid partially on during simmer.'
      }
    ],
    substitutions: [
      { original: 'Bamboo shoot strips', substitute: 'Kabocha squash chunks or sliced baby corn', notes: 'Kabocha Red Curry is a world-famous Thai autumn classic.' }
    ],
    safetyNotes: [
      'Chicken must reach 74°C internal temperature.'
    ],
    servingGuide: {
      restingTime: 'Rest 2 minutes.',
      garnishing: 'Fresh Thai basil sprigs and sliced red chilies.',
      plating: 'Deep ceramic bowl.',
      temperature: 'Piping hot.',
      accompaniments: 'Steamed Thai Jasmine rice and Thai cucumber relish (Ajad).'
    }
  },

  // 4. MASSAMAN CURRY (Royal Southern Thai Gaeng Massaman Neua)
  {
    id: 'massaman-curry',
    name: 'Royal Thai Massaman Beef Curry (Gaeng Massaman Neua)',
    cuisine: 'Thai / SE Asian',
    region: 'Southern Thailand (Muslim / Royal Court)',
    servings: 4,
    prepTime: 25,
    cookTime: 60,
    difficulty: 'Medium',
    overview: {
      summary: 'Ranked among the world\'s most delicious dishes: meltingly tender beef chuck slow-braised in a rich, mild coconut curry infused with roasted warm Persian and Indian spices (cardamom pods, cinnamon quills, cloves, star anise) blended with lemongrass and galangal, simmered with Yukon Gold potatoes, whole pearl onions, and toasted peanuts, balanced with tamarind, palm sugar, and fish sauce.',
      appearance: 'A thick, glossy, mahogany-amber curry laden with fork-tender beef chunks, golden potatoes, whole pearl onions, and roasted peanuts, with aromatic cinnamon sticks peeking through.',
      texture: 'Melt-in-the-mouth fork-tender beef, velvety soft potatoes, sweet caramelized whole onions, and crunchy roasted peanuts in an ultra-rich gravy.',
      flavor: 'Opulent, complex symphony: warm cinnamon and cardamom sweetness, rich coconut cream, tangy tamarind acidity, and savory roasted peanut richness.',
      restingTimeMinutes: 5
    },
    equipment: [
      { name: 'Heavy Dutch oven or enamelled cast-iron pot (4–5 qt)', purpose: 'Holds gentle low heat for slow-braising beef without scorching the thick coconut gravy.' },
      { name: 'Small dry skillet', purpose: 'For toasting whole spices (cardamom, cinnamon, cloves).' },
      { name: 'Wooden spoon', purpose: 'For scraping fond from pot bottom.' }
    ],
    beforeYouStart: [
      { task: 'Cut 600g beef chuck roast into generous 4cm cubes.', durationMinutes: 5 },
      { task: 'Peel and cut 3 Yukon Gold potatoes into 4cm large chunks; peel 8 small shallots or pearl onions (keep whole).', durationMinutes: 8 },
      { task: 'Toast whole spices in dry skillet for 2 mins: 1 cinnamon stick, 4 green cardamom pods, 3 cloves, and 1 star anise.', durationMinutes: 3 }
    ],
    ingredientPrepGuide: [
      { item: 'Slow Braising in Coconut Cream', technique: 'Massaman curry relies on slow braising. Simmering tough beef chuck in coconut cream and broth over low heat for 50 minutes breaks down collagen into rich gelatin, creating fork-tender beef that melts on the tongue.' }
    ],
    essentialIngredients: [
      { name: 'Beef chuck roast or brisket', prep: 'cut into 4cm large cubes', amount: '600g', metric: '600g', imperial: '1.3 lbs', common: '600g' },
      { name: 'Authentic Massaman curry paste', prep: 'roasted spices, chilies, lemongrass', amount: '4 tbsp', metric: '70g', imperial: '2.5 oz', common: '4 tbsp' },
      { name: 'Pure coconut cream (thick top)', prep: 'for cracking', amount: '250ml', metric: '250ml', imperial: '8.5 fl oz', common: '1 cup' },
      { name: 'Coconut milk', prep: 'braising liquid', amount: '400ml', metric: '400ml', imperial: '13.5 fl oz', common: '1.75 cups' },
      { name: 'Beef broth or water', prep: 'braising liquid', amount: '250ml', metric: '250ml', imperial: '8.5 fl oz', common: '1 cup' },
      { name: 'Yukon Gold potatoes', prep: 'peeled and cut into 4cm chunks', amount: '3 medium', metric: '350g', imperial: '12 oz', common: '3 potatoes' },
      { name: 'Small pearl onions or Asian shallots', prep: 'peeled, left whole', amount: '8 onions', metric: '150g', imperial: '5.3 oz', common: '8 pieces' },
      { name: 'Roasted unsalted peanuts', prep: 'whole', amount: '60g', metric: '60g', imperial: '2.1 oz', common: '1/2 cup' },
      { name: 'Whole spices', prep: '1 cinnamon stick, 4 bruised cardamom pods, 3 cloves, 1 star anise', amount: '1 set', metric: '10g', imperial: '0.35 oz', common: 'toasted' },
      { name: 'Tamarind paste concentrate', prep: 'for sour balance', amount: '2.5 tbsp', metric: '37ml', imperial: '1.2 fl oz', common: '2.5 tbsp' },
      { name: 'Thai palm sugar', prep: 'shaved', amount: '2 tbsp', metric: '30g', imperial: '1 oz', common: '2 tbsp' },
      { name: 'Thai fish sauce (Nam Pla)', prep: 'seasoning', amount: '2.5 tbsp', metric: '37ml', imperial: '1.2 fl oz', common: '2.5 tbsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'CRACK COCONUT CREAM & FRY MASSAMAN PASTE',
        whatYouNeed: ['Dutch oven', '250ml coconut cream', '4 tbsp Massaman paste', 'Toasted whole spices'],
        description: 'Simmer 250ml coconut cream in Dutch oven over medium-low heat for 6 minutes until coconut oil separates. Add 4 tbsp Massaman curry paste and the toasted whole spices (cinnamon, cardamom, cloves, star anise). Fry gently for 4 minutes until paste darkens to rich mahogany and oil glows.',
        howToDoIt: 'Frying whole spices with the paste infuses the coconut oil with warm Persian and Indian spice notes.',
        heat: 'Medium-Low Heat',
        duration: 10,
        visualCues: 'Paste turns dark mahogany-brown; fragrant reddish-brown oil pools on the surface.',
        smell: 'Intoxicating warm cinnamon, sweet cardamom, toasted cloves, and coconut.',
        textureCheck: 'Thick, oily aromatic paste.',
        whatShouldThisLookLike: 'Mahogany paste sizzling with cinnamon quills and cardamom pods.',
        tip: 'Bruise cardamom pods lightly with a knife flat so seeds can flavor the oil.',
        commonMistake: 'Frying on high heat, which burns the cinnamon and cardamom bitter.',
        moveOnWhen: 'Paste is deeply mahogany and fragrant.',
        quickInstructions: 'Crack coconut cream 6 mins; fry Massaman paste and whole spices 4 mins.'
      },
      {
        step: 2,
        title: 'SEAR BEEF CHUCK & ADD BRAISING LIQUIDS',
        whatYouNeed: ['600g beef cubes', '400ml coconut milk', '250ml beef broth'],
        description: 'Add beef chuck cubes to the pot. Stir-fry for 4 minutes until beef is coated and seared. Pour in 400ml coconut milk and 250ml beef broth. Bring to a boil. Reduce heat to the lowest setting, cover with lid tightly, and simmer gently for 45 minutes.',
        howToDoIt: 'Slow, covered simmering tenderizes beef chuck, breaking down tough connective tissue into gelatin.',
        heat: 'Lowest Simmer',
        duration: 45,
        visualCues: 'Slow lazy bubbles rising; beef shrinks and absorbs the dark gravy.',
        smell: 'Rich beef stew and warm spices.',
        textureCheck: 'Beef begins to yield when pressed.',
        whatShouldThisLookLike: 'Tender beef cubes simmering in rich mahogany coconut broth.',
        tip: 'Stir occasionally along the bottom so thick coconut cream does not scorch.',
        commonMistake: 'Boiling too fast, which evaporates liquid and toughens beef fibers.',
        moveOnWhen: 'Beef has braised for 45 minutes and is tenderizing.',
        quickInstructions: 'Add beef, sear 4 mins; add coconut milk and broth, cover and braise on low for 45 mins.'
      },
      {
        step: 3,
        title: 'ADD POTATOES, ONIONS, PEANUTS & FLAVOR BALANCERS',
        whatYouNeed: ['Potato chunks', 'Whole pearl onions', 'Roasted peanuts', 'Tamarind paste', 'Palm sugar', 'Fish sauce'],
        description: 'Add potato chunks, whole pearl onions, and roasted peanuts to the pot. Stir in tamarind paste, palm sugar, and fish sauce. Cover and simmer gently for another 20 minutes until potatoes are fork-tender and the gravy is thick and velvety.',
        howToDoIt: 'Adding potatoes in the final 20 minutes ensures they become tender without dissolving into mush.',
        heat: 'Medium-Low Simmer',
        duration: 20,
        visualCues: 'Potatoes become golden and fork-tender; onions turn translucent; gravy is thick and glossy.',
        smell: 'Sweet tamarind, roasted peanuts, and beefy coconut sauce.',
        textureCheck: 'Potatoes pierce easily; beef is melt-in-the-mouth tender.',
        whatShouldThisLookLike: 'Thick, opulent, mahogany Massaman curry with tender potatoes and beef.',
        tip: 'Taste: Massaman should be sweet, mildly tart from tamarind, and savory with gentle warm spice.',
        commonMistake: 'Adding potatoes at the beginning — they will disintegrate into soup.',
        moveOnWhen: 'Potatoes and beef are completely fork-tender.',
        quickInstructions: 'Add potatoes, onions, peanuts, tamarind, palm sugar, and fish sauce; simmer 20 mins.'
      },
      {
        step: 4,
        title: 'REST 5 MINUTES & SERVE ROYAL STYLE',
        whatYouNeed: ['Serving bowl', 'Extra roasted peanuts'],
        description: 'Turn off heat and let curry rest for 5 minutes. The oil will settle into a glossy sheen. Ladle into a deep serving dish, ensuring each portion gets tender beef, whole potatoes, sweet onions, and peanuts. Garnish with a sprinkle of extra roasted peanuts.',
        howToDoIt: 'Resting off heat allows the rich coconut emulsion to settle into maximum velvet smoothness.',
        heat: 'Off Heat',
        duration: 5,
        visualCues: 'Gleaming mahogany gravy with tender beef, golden potatoes, and floating peanuts.',
        smell: 'Warm, comforting, royal Thai spice fragrance.',
        textureCheck: 'Velvety spoon-coating sauce; fork-tender beef.',
        whatShouldThisLookLike: 'World-class Royal Thai Massaman Curry.',
        tip: 'Massaman curry tastes even better the next day after spices meld overnight!',
        commonMistake: 'Serving scorching hot without resting — flavors taste muddled until slightly cooled.',
        moveOnWhen: 'Rested and served.',
        quickInstructions: 'Rest 5 mins; ladle into bowl, garnish with roasted peanuts, serve with Jasmine rice.'
      }
    ],
    commonMistakes: [
      { mistake: 'Beef was tough and chewy.', remedy: 'Beef chuck was under-simmered. Beef needs at least 50-60 minutes of gentle low simmering to become tender.' },
      { mistake: 'Curry was cloyingly sweet.', remedy: 'Too much sugar and not enough tamarind. Balance palm sugar with tamarind paste.' }
    ],
    troubleshooting: [
      {
        problem: 'Gravy is too thin',
        whatHappened: 'Too much broth or potatoes weren\'t cooked enough to release starch.',
        whyItHappened: 'High liquid-to-cream ratio.',
        whatToDoNow: 'Simmer uncovered on medium heat for 5 minutes, stirring gently until reduced.',
        howToPrevent: 'Measure braising broth accurately.'
      }
    ],
    substitutions: [
      { original: 'Beef chuck', substitute: 'Chicken drumsticks / thighs or lamb shoulder', notes: 'Chicken Massaman (Gaeng Massaman Gai) cooks in just 30 minutes.' },
      { original: 'Yukon Gold potatoes', substitute: 'Sweet potatoes or butternut squash', notes: 'Adds magnificent natural sweetness.' }
    ],
    safetyNotes: [
      'Beef must reach internal temperature of 75°C (167°F).'
    ],
    servingGuide: {
      restingTime: 'Rest 5 minutes off heat.',
      garnishing: 'Roasted whole peanuts and fried shallots.',
      plating: 'Deep ceramic bowl.',
      temperature: 'Warm and comforting.',
      accompaniments: 'Steamed Thai Jasmine rice and Thai pickled cucumber salad (Ajad).'
    }
  },

  // 5. TOM YUM (Thai Tom Yum Goong)
  {
    id: 'tom-yum',
    name: 'Spicy & Sour Thai Prawn Soup (Tom Yum Goong)',
    cuisine: 'Thai / SE Asian',
    region: 'Thailand (Central)',
    servings: 4,
    prepTime: 15,
    cookTime: 12,
    difficulty: 'Easy',
    overview: {
      summary: 'Thailand\'s world-famous hot and sour soup: plump, sweet tiger prawns simmered in an electrifying, crystal-clear or creamy (Nam Khon) broth infused with bruised stalks of fresh lemongrass, thick coins of galangal, torn makrut lime leaves, bird\'s eye chilies, and straw mushrooms, electrified with roasted chili jam (Nam Prik Pao), fresh lime juice, and fish sauce.',
      appearance: 'A vibrant scarlet-orange steaming broth with shimmering red chili oil droplets, floating with pink curled prawns, white mushrooms, green lime leaves, and fresh cilantro.',
      texture: 'Light, invigorating broth with crisp, snappy prawns and juicy, tender straw mushrooms.',
      flavor: 'An electrifying sensory explosion: intensely sour fresh lime juice, fiery bird\'s eye chili heat, savory fish sauce umami, and citrusy herbal aromatics.',
      restingTimeMinutes: 1
    },
    equipment: [
      { name: 'Medium soup pot (3 qt)', purpose: 'For rapidly boiling the herbal broth.' },
      { name: 'Cleaver or heavy knife', purpose: 'For smashing lemongrass and galangal to release essential aromatic oils.' },
      { name: 'Citrus juicer', purpose: 'For extracting fresh lime juice.' }
    ],
    beforeYouStart: [
      { task: 'Peel 12 large tiger prawns, reserving heads and shells; devein prawns leaving tails intact.', durationMinutes: 8 },
      { task: 'Smash 2 lemongrass stalks with flat of cleaver and cut into 5cm diagonal batons; slice 1 knob galangal into 6 coins.', durationMinutes: 3 },
      { task: 'Tear 6 makrut lime leaves in half; crush 6 red bird\'s eye chilies lightly with knife flat.', durationMinutes: 2 },
      { task: 'Juice 3 fresh limes into a small bowl (keep fresh; never boil lime juice!).', durationMinutes: 3 }
    ],
    ingredientPrepGuide: [
      { item: 'Prawn Shell Stock Secret', technique: 'Sauté the prawn heads and shells in 1 tbsp oil in the soup pot for 2 minutes until bright coral and fragrant, then add water and simmer 5 minutes. Prawn tomalley inside the heads dissolves into the broth, creating an authentic rich orange hue and intense sweet seafood depth.' },
      { item: 'Off-Heat Lime Addition', technique: 'NEVER boil fresh lime juice in the pot! Boiling destroys delicate vitamin C and turns fresh lime juice bitter. Always stir fresh lime juice in OFF THE HEAT right before serving.' }
    ],
    essentialIngredients: [
      { name: 'Fresh tiger prawns (heads and shells reserved)', prep: 'peeled, deveined, tails on', amount: '12 large prawns', metric: '350g', imperial: '12 oz', common: '12 prawns' },
      { name: 'Water or light chicken stock', prep: 'for broth base', amount: '800ml', metric: '800ml', imperial: '27 fl oz', common: '3.5 cups' },
      { name: 'Fresh lemongrass stalks', prep: 'bruised and sliced diagonally into 5cm pieces', amount: '2 stalks', metric: '40g', imperial: '1.4 oz', common: '2 stalks' },
      { name: 'Fresh galangal (Kha)', prep: 'sliced into 6 thin coins', amount: '1 knob', metric: '25g', imperial: '0.9 oz', common: '6 slices' },
      { name: 'Makrut (kaffir) lime leaves', prep: 'torn in half, center ribs removed', amount: '6 leaves', metric: '6 leaves', imperial: '6 leaves', common: '6 leaves' },
      { name: 'Thai bird\'s eye chilies (Prik Kee Noo)', prep: 'bruised with side of knife', amount: '6 chilies', metric: '10g', imperial: '0.35 oz', common: '6 chilies' },
      { name: 'Fresh oyster mushrooms or straw mushrooms', prep: 'torn into bite-sized pieces', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '1.5 cups' },
      { name: 'Nam Prik Pao (Thai roasted chili jam in oil)', prep: 'for rich color & sweet-smoky depth', amount: '2 tbsp', metric: '30g', imperial: '1 oz', common: '2 tbsp' },
      { name: 'Thai fish sauce (Nam Pla)', prep: 'primary salt seasoning', amount: '3 tbsp', metric: '45ml', imperial: '1.5 fl oz', common: '3 tbsp' },
      { name: 'Fresh lime juice', prep: 'freshly squeezed, added off heat', amount: '4 tbsp', metric: '60ml', imperial: '2 fl oz', common: '1/4 cup' },
      { name: 'Evaporated milk or coconut milk (for Tom Yum Nam Khon)', prep: 'optional for creamy style', amount: '3 tbsp', metric: '45ml', imperial: '1.5 fl oz', common: '3 tbsp', optional: true },
      { name: 'Fresh cilantro (coriander) and culantro (sawtooth herb)', prep: 'roughly chopped', amount: '1/2 cup', metric: '20g', imperial: '0.7 oz', common: '1/2 cup' }
    ],
    steps: [
      {
        step: 1,
        title: 'SEAR PRAWN HEADS FOR RICH SEAFOOD STOCK',
        whatYouNeed: ['Soup pot', '1 tbsp oil', 'Reserved prawn heads and shells', '800ml water'],
        description: 'Heat 1 tbsp oil in soup pot over medium-high heat. Add prawn heads and shells. Sauté vigorously for 2 minutes, pressing heads with wooden spoon to release orange prawn tomalley. Pour in 800ml water. Bring to a boil, simmer 5 minutes, then strain out and discard shells.',
        howToDoIt: 'Extracting prawn head tomalley creates the authentic golden-orange broth that defines real Thai Tom Yum.',
        heat: 'Medium-High to boil',
        duration: 7,
        visualCues: 'Water turns a rich golden-orange color with fragrant shrimp oil floating on top.',
        smell: 'Intensely rich, sweet roasted seafood aroma.',
        textureCheck: 'Clear, golden-orange seafood stock.',
        whatShouldThisLookLike: 'Vibrant orange prawn stock bubbling in the pot.',
        tip: 'If using shell-less frozen shrimp, skip this step and use light chicken broth with 1 extra tsp fish sauce.',
        commonMistake: 'Throwing away prawn heads — that is where 80% of Tom Yum seafood flavor lives!',
        moveOnWhen: 'Stock is strained and simmering in clean pot.',
        quickInstructions: 'Sauté prawn heads in 1 tbsp oil 2 mins, add 800ml water, simmer 5 mins, strain stock.'
      },
      {
        step: 2,
        title: 'INFUSE THE THREE SACRED AROMATICS',
        whatYouNeed: ['Strained prawn stock', 'Smashed lemongrass', 'Galangal coins', 'Torn makrut lime leaves', 'Bruised chilies'],
        description: 'Bring the prawn stock back to a rolling boil. Add smashed lemongrass, galangal coins, torn makrut lime leaves, and bruised bird\'s eye chilies. Simmer vigorously for 3 minutes over medium-high heat.',
        howToDoIt: 'Boiling extracts the volatile citrusy, herbal essential oils from the fresh aromatics directly into the water.',
        heat: 'Medium-High Boil',
        duration: 3,
        visualCues: 'Vigorous bubbling rolling through the herbs; broth becomes intensely fragrant.',
        smell: 'Electrifying burst of fresh lemongrass, ginger-like galangal, and lime leaves.',
        textureCheck: 'Herb-infused steaming broth.',
        whatShouldThisLookLike: 'Herbs tumbling in boiling golden broth.',
        tip: 'Warn diners: lemongrass and galangal are flavoring aromatics and are not meant to be chewed whole.',
        commonMistake: 'Using dried herbs from a jar — fresh herbs are mandatory for Tom Yum vibrancy.',
        moveOnWhen: 'Broth is intensely fragrant after 3 minutes.',
        quickInstructions: 'Add lemongrass, galangal, lime leaves, and chilies; boil vigorously 3 mins.'
      },
      {
        step: 3,
        title: 'ADD MUSHROOMS, NAM PRIK PAO & PRAWNS',
        whatYouNeed: ['Mushrooms', '2 tbsp Nam Prik Pao (chili jam)', '3 tbsp fish sauce', '12 raw prawns', 'Evaporated milk (optional)'],
        description: 'Stir in Nam Prik Pao chili jam and fish sauce. Broth will turn a brilliant scarlet-orange. Add mushrooms and simmer 1 minute. Drop in the peeled prawns. Cook for just 90 seconds over medium heat until prawns curl pink and turn opaque. TURN OFF HEAT IMMEDIATELY.',
        howToDoIt: 'Prawns cook in 90 seconds; removing from heat instantly keeps them tender, juicy, and snappy.',
        heat: 'Medium Heat for 90s, then OFF',
        duration: 3,
        visualCues: 'Broth turns brilliant fiery orange-red; prawns curl into tight coral C-shapes.',
        smell: 'Sweet roasted chili jam, fresh prawns, and seafood umami.',
        textureCheck: 'Prawns are opaque and firm; mushrooms are juicy.',
        whatShouldThisLookLike: 'A fiery, scarlet-orange soup with curled pink prawns.',
        tip: 'For creamy style (Tom Yum Nam Khon), stir in 3 tbsp evaporated milk now.',
        commonMistake: 'Boiling prawns for 5 minutes until they shrink into hard rubber bullets.',
        moveOnWhen: 'Prawns are pink and heat is turned off.',
        quickInstructions: 'Add chili jam, fish sauce, and mushrooms; drop in prawns, cook 90s, turn off heat.'
      },
      {
        step: 4,
        title: 'OFF-HEAT LIME JUICE EXPLOSION & SERVE',
        whatYouNeed: ['4 tbsp fresh lime juice', 'Chopped cilantro', 'Serving bowl'],
        description: 'WITH THE HEAT COMPLETELY OFF, pour in 4 tablespoons of freshly squeezed lime juice. Stir once. Taste the broth — it should deliver an electrifying, mouthwatering balance of sour, spicy, and savory. Ladle into warm soup bowls and scatter fresh cilantro on top.',
        howToDoIt: 'Adding lime juice off-heat preserves raw enzymatic brightness and prevents bitterness.',
        heat: 'Off Heat',
        duration: 1,
        visualCues: 'Vibrant scarlet soup accented by green cilantro, pink prawns, and glistening red chili droplets.',
        smell: 'Intoxicating fresh lime, fiery chili, and lemongrass fragrance.',
        textureCheck: 'Snappy prawns, tender mushrooms, light broth.',
        whatShouldThisLookLike: 'World-famous Thai Tom Yum Goong.',
        tip: 'Adjust acidity with extra lime juice if you crave maximum sour punch!',
        commonMistake: 'Boiling the lime juice, which destroys the fresh sour notes.',
        moveOnWhen: 'Seasoned and plated.',
        quickInstructions: 'Stir in fresh lime juice off heat, add cilantro, serve steaming hot.'
      }
    ],
    commonMistakes: [
      { mistake: 'Soup tasted bitter.', remedy: 'Fresh lime juice was boiled in the pot. Always stir lime juice in off the heat.' },
      { mistake: 'Prawns were tough and rubbery.', remedy: 'Overcooked. Prawns cook in 90 seconds in boiling broth.' }
    ],
    troubleshooting: [
      {
        problem: 'Soup is too spicy for some guests',
        whatHappened: 'Chilies released intense capsaicin.',
        whyItHappened: 'Bruised bird\'s eye chilies are very hot.',
        whatToDoNow: 'Stir in 3 tablespoons of evaporated milk or coconut milk to mellow the heat into creamy Tom Yum Nam Khon.',
        howToPrevent: 'Use fewer chilies or remove seeds before bruising.'
      }
    ],
    substitutions: [
      { original: 'Tiger prawns', substitute: 'Sliced chicken breast (Tom Yum Gai) or mixed seafood (Talay)', notes: 'Chicken Tom Yum is a beloved everyday variation.' },
      { original: 'Oyster mushrooms', substitute: 'Straw mushrooms, beech mushrooms, or cremini mushrooms', notes: 'All absorb the sour-spicy broth wonderfully.' }
    ],
    safetyNotes: [
      'Prawns must be cooked until opaque pink throughout.'
    ],
    servingGuide: {
      restingTime: 'Serve immediately.',
      garnishing: 'Fresh cilantro leaves, sawtooth herb, and lime wheels.',
      plating: 'Traditional Thai brass hot pot with central chimney (Mor Fai) or deep ceramic soup bowl.',
      temperature: 'Piping hot and steaming.',
      accompaniments: 'Steamed Thai Jasmine rice and a fluffy Thai minced pork omelette (Kai Jeow).'
    }
  },

  // 6. TOM KHA (Thai Tom Kha Gai)
  {
    id: 'tom-kha',
    name: 'Aromatic Coconut Galangal Chicken Soup (Tom Kha Gai)',
    cuisine: 'Thai / SE Asian',
    region: 'Thailand (Central)',
    servings: 4,
    prepTime: 15,
    cookTime: 15,
    difficulty: 'Easy',
    overview: {
      summary: 'The velvety, soothing yin to Tom Yum\'s fiery yang: tender sliced chicken breast and oyster mushrooms poached in a luscious, silky coconut milk broth heavily infused with thick slices of fresh galangal (Kha), crushed lemongrass stalks, makrut lime leaves, and mild red chilies, balanced off the heat with fresh lime juice, fish sauce, and cilantro.',
      appearance: 'A velvety, ivory-white coconut soup with glistening dots of pale chili oil, floating with tender chicken slices, ruffled oyster mushrooms, and vibrant green cilantro.',
      texture: 'Ultra-silky, comforting, velvety coconut broth paired with meltingly tender chicken and juicy mushrooms.',
      flavor: 'Divine balance of rich creamy coconut sweetness, sharp peppery pine-citrus warmth from galangal, zesty sour lime, and savory fish sauce.',
      restingTimeMinutes: 1
    },
    equipment: [
      { name: 'Medium soup pot (3 qt)', purpose: 'For gently simmering coconut milk without boiling over.' },
      { name: 'Wooden spoon', purpose: 'For stirring the soup.' }
    ],
    beforeYouStart: [
      { task: 'Slice 400g chicken breast into thin 5mm bite-sized pieces.', durationMinutes: 5 },
      { task: 'Slice a large knob of fresh galangal into 10 thick coins (galangal is the hero of Tom Kha!).', durationMinutes: 3 },
      { task: 'Smash 2 lemongrass stalks and cut into 5cm pieces; tear 6 makrut lime leaves.', durationMinutes: 2 }
    ],
    ingredientPrepGuide: [
      { item: 'Galangal Dominance (Kha)', technique: 'Do NOT substitute ginger! Galangal (Kha) has a distinct sharp, piney, peppery, citrusy flavor profile that defines Tom Kha. Using ginger turns it into chicken ginger soup.' }
    ],
    essentialIngredients: [
      { name: 'Boneless skinless chicken breast or thighs', prep: 'thinly sliced into bite-sized pieces', amount: '400g', metric: '400g', imperial: '14 oz', common: '400g' },
      { name: 'Fresh galangal (Kha)', prep: 'sliced into 10 thick coins', amount: '1 large knob', metric: '40g', imperial: '1.4 oz', common: '10 slices' },
      { name: 'Pure coconut milk', prep: 'full fat', amount: '500ml', metric: '500ml', imperial: '17 fl oz', common: '2 cups' },
      { name: 'Light chicken stock or water', prep: 'liquid base', amount: '350ml', metric: '350ml', imperial: '12 fl oz', common: '1.5 cups' },
      { name: 'Fresh lemongrass stalks', prep: 'bruised & cut into 5cm batons', amount: '2 stalks', metric: '40g', imperial: '1.4 oz', common: '2 stalks' },
      { name: 'Makrut (kaffir) lime leaves', prep: 'torn in half', amount: '6 leaves', metric: '6 leaves', imperial: '6 leaves', common: '6 leaves' },
      { name: 'Fresh oyster mushrooms', prep: 'torn into bite-sized clusters', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '1.5 cups' },
      { name: 'Thai bird\'s eye chilies', prep: 'lightly bruised for gentle warmth', amount: '3 chilies', metric: '5g', imperial: '0.17 oz', common: '3 chilies' },
      { name: 'Thai fish sauce (Nam Pla)', prep: 'for savory seasoning', amount: '3 tbsp', metric: '45ml', imperial: '1.5 fl oz', common: '3 tbsp' },
      { name: 'Granulated sugar or palm sugar', prep: 'for balance', amount: '1 tsp', metric: '4g', imperial: '0.15 oz', common: '1 tsp' },
      { name: 'Fresh lime juice', prep: 'freshly squeezed, added off heat', amount: '3.5 tbsp', metric: '50ml', imperial: '1.7 fl oz', common: '3.5 tbsp' },
      { name: 'Fresh cilantro leaves', prep: 'for garnish', amount: '1/2 cup', metric: '20g', imperial: '0.7 oz', common: '1/2 cup' }
    ],
    steps: [
      {
        step: 1,
        title: 'INFUSE COCONUT BROTH WITH GALANGAL & HERBS',
        whatYouNeed: ['Soup pot', '500ml coconut milk', '350ml chicken stock', 'Galangal coins', 'Lemongrass batons', 'Lime leaves', 'Bruised chilies'],
        description: 'Combine coconut milk and chicken stock in pot. Add sliced galangal, lemongrass, torn lime leaves, and bruised chilies. Bring to a gentle simmer over medium heat. Simmer gently for 5 minutes so the galangal essential oils permeate the coconut cream.',
        howToDoIt: 'Gentle simmering extracts the piney, citrusy galangal oils into the coconut fats without boiling or curdling.',
        heat: 'Medium-Low Heat',
        duration: 5,
        visualCues: 'Ivory-white broth simmering gently with lazy bubbles; herbs float serenely.',
        smell: 'Intensely soothing, piney-peppery galangal and sweet coconut milk.',
        textureCheck: 'Silky, smooth broth.',
        whatShouldThisLookLike: 'Ivory broth simmering with aromatic herbs.',
        tip: 'Never let coconut milk boil violently or it can separate into oil and watery curds.',
        commonMistake: 'Boiling on high heat until coconut milk curdles.',
        moveOnWhen: 'Broth is deeply aromatic with galangal.',
        quickInstructions: 'Simmer coconut milk, stock, galangal, lemongrass, lime leaves, and chilies 5 mins.'
      },
      {
        step: 2,
        title: 'POACH CHICKEN & OYSTER MUSHROOMS',
        whatYouNeed: ['Sliced chicken breast', 'Torn oyster mushrooms', '3 tbsp fish sauce', '1 tsp sugar'],
        description: 'Add sliced chicken, oyster mushrooms, fish sauce, and sugar to the simmering broth. Simmer gently over medium-low heat for 5 minutes, stirring occasionally, until the chicken slices are cooked through, plump, and tender. TURN OFF HEAT.',
        howToDoIt: 'Gently poaching chicken breast in simmering coconut milk keeps the lean white meat meltingly soft and juicy.',
        heat: 'Medium-Low Heat 5 mins, then OFF',
        duration: 5,
        visualCues: 'Chicken turns opaque white and floats; mushrooms soften and glisten in ivory broth.',
        textureCheck: 'Chicken is tender and juicy (74°C).',
        whatShouldThisLookLike: 'Tender chicken and mushrooms suspended in ivory coconut broth.',
        tip: 'Do not overcook sliced chicken breast — 5 minutes of gentle poaching is ideal.',
        commonMistake: 'Cooking on high heat, which makes chicken breast tough and stringy.',
        moveOnWhen: 'Chicken is cooked through and heat is off.',
        quickInstructions: 'Add chicken, mushrooms, fish sauce, and sugar; simmer gently 5 mins; turn off heat.'
      },
      {
        step: 3,
        title: 'STIR IN FRESH LIME JUICE OFF HEAT & SERVE',
        whatYouNeed: ['3.5 tbsp fresh lime juice', 'Cilantro', 'Serving bowls'],
        description: 'With the heat OFF, pour in the fresh lime juice. Stir gently. Taste: the soup should taste rich, creamy, and mildly sweet, followed by a bright, refreshing splash of fresh lime acidity and lingering piney galangal warmth. Ladle into bowls and garnish with cilantro.',
        howToDoIt: 'Adding lime juice off-heat prevents curdling and preserves fresh citrus vibrancy.',
        heat: 'Off Heat',
        duration: 1,
        visualCues: 'Velvety ivory soup garnished with green cilantro and a few drops of red chili oil.',
        smell: 'Sweet coconut, tart lime, and peppery galangal.',
        textureCheck: 'Ultra-silky, soothing mouthfeel.',
        whatShouldThisLookLike: 'Authentic Thai Tom Kha Gai.',
        tip: 'A drop of chili oil (Nam Prik Pao) on top adds gorgeous visual contrast.',
        commonMistake: 'Boiling lime juice, which curdles the coconut milk and destroys the fresh flavor.',
        moveOnWhen: 'Seasoned and plated.',
        quickInstructions: 'Stir in fresh lime juice off heat, ladle into bowls, garnish with cilantro.'
      }
    ],
    commonMistakes: [
      { mistake: 'Soup curdled into grainy white flecks.', remedy: 'Broth was boiled too violently or lime juice was added while boiling. Keep at a gentle simmer and add lime off heat.' },
      { mistake: 'Soup tasted like ginger.', remedy: 'Ginger was used instead of galangal. Galangal is essential for authentic Tom Kha flavor.' }
    ],
    troubleshooting: [
      {
        problem: 'Soup tastes too rich and heavy',
        whatHappened: 'Coconut milk was excessively thick.',
        whyItHappened: 'High fat concentration.',
        whatToDoNow: 'Add 1/2 cup chicken stock and an extra squeeze of fresh lime juice.',
        howToPrevent: 'Use a 60/40 blend of coconut milk to chicken stock.'
      }
    ],
    substitutions: [
      { original: 'Chicken breast', substitute: 'Chicken thighs, peeled prawns, or firm tofu cubes', notes: 'Tofu Tom Kha is a revered Thai vegetarian comfort dish.' }
    ],
    safetyNotes: [
      'Chicken must reach 74°C internal temperature.'
    ],
    servingGuide: {
      restingTime: 'Serve immediately.',
      garnishing: 'Fresh cilantro leaves and sliced red chilies.',
      plating: 'Deep ceramic bowl.',
      temperature: 'Piping hot and comforting.',
      accompaniments: 'Steamed Jasmine rice.'
    }
  },

  // 7. MANGO STICKY RICE (Khao Niew Mamuang)
  {
    id: 'mango-sticky-rice',
    name: 'Thai Mango Sticky Rice (Khao Niew Mamuang)',
    cuisine: 'Thai / SE Asian',
    region: 'Thailand (Bangkok / Central)',
    servings: 4,
    prepTime: 20,
    cookTime: 25,
    difficulty: 'Easy',
    overview: {
      summary: 'Thailand\'s most celebrated dessert triumph: sweet glutinous rice steamed over fragrant pandan leaves, soaked in warm, rich coconut milk seasoned with palm sugar and sea salt until translucent and luscious, served alongside chilled slices of honey-sweet ripe Nam Dok Mai mangoes, drizzled with a thick salted coconut cream sauce and sprinkled with crisp toasted yellow mung beans.',
      appearance: 'A gleaming mound of translucent coconut sticky rice paired with beautifully fanned slices of golden-yellow ripe mango, draped in velvety white coconut sauce and golden toasted mung beans.',
      texture: 'Chewy, tender, gelatinous sticky rice grains coated in creamy coconut sauce, paired with silky melt-in-the-mouth sweet mango and crunchy mung beans.',
      flavor: 'Heavenly balance of luscious coconut richness, natural honey-floral mango sweetness, and a distinct touch of sea salt that makes the sweetness sing.',
      restingTimeMinutes: 20
    },
    equipment: [
      { name: 'Bamboo sticky rice steamer cone (Huad) and steaming pot (or regular bamboo steamer)', purpose: 'Steams glutinous rice purely with convective steam without submerging grains in water.' },
      { name: 'Cheesecloth or fine cotton towel', purpose: 'Lines the steamer so sticky rice grains do not fall through slats.' },
      { name: 'Small saucepan', purpose: 'For warming coconut milk and making salted coconut topping sauce.' }
    ],
    beforeYouStart: [
      { task: 'Soak 300g Thai glutinous sweet rice (Khao Niew) in cold water for at least 4 hours (or overnight); drain thoroughly.', durationMinutes: 240 },
      { task: 'Peel and slice 2 ripe sweet mangoes (Nam Dok Mai or Champagne/Ataulfo) into elegant fans.', durationMinutes: 5 },
      { task: 'Toast 2 tbsp split yellow mung beans in a dry pan for 3 mins until golden and crunchy.', durationMinutes: 3 }
    ],
    ingredientPrepGuide: [
      { item: 'Glutinous Rice Steaming (Never Boil!)', technique: 'Thai sticky rice MUST be steamed, never boiled in a pot like regular rice! Submerging sticky rice in water turns it into a gluey porridge. Steaming soaked grains suspended over boiling water cooks the starch cores while keeping individual grains intact, translucent, and chewy.' },
      { item: 'Salted Coconut Drizzle (Hua Kati)', technique: 'Simmer 100ml coconut cream with 1/2 tsp salt and 1/2 tsp rice flour until thick. That pronounced savory salt note is the traditional secret that cuts through the rich sugar and makes mango sticky rice unforgettable.' }
    ],
    essentialIngredients: [
      { name: 'Thai glutinous sweet sticky rice (Khao Niew)', prep: 'soaked 4 hours, drained', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '1.5 cups dry' },
      { name: 'Pure coconut milk (full fat)', prep: 'for soaking warm rice', amount: '250ml', metric: '250ml', imperial: '8.5 fl oz', common: '1 cup' },
      { name: 'Pure coconut cream (thick)', prep: 'for salted topping sauce', amount: '100ml', metric: '100ml', imperial: '3.4 fl oz', common: '1/2 cup' },
      { name: 'Granulated sugar or palm sugar', prep: 'dissolved in soaking coconut milk', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '1/2 cup' },
      { name: 'Fine sea salt', prep: 'divided (1/2 tsp for rice, 1/2 tsp for topping)', amount: '1 tsp', metric: '5g', imperial: '0.18 oz', common: '1 tsp' },
      { name: 'Fresh pandan leaves', prep: 'tied into a knot for steaming pot', amount: '2 leaves', metric: '10g', imperial: '0.35 oz', common: '2 leaves' },
      { name: 'Ripe sweet Thai mangoes (Nam Dok Mai or Ataulfo)', prep: 'chilled, peeled, and sliced into fans', amount: '2 large', metric: '600g', imperial: '21 oz', common: '2 mangoes' },
      { name: 'Toasted split yellow mung beans (Thua Thong)', prep: 'toasted golden for crunchy topping', amount: '2 tbsp', metric: '20g', imperial: '0.7 oz', common: '2 tbsp' },
      { name: 'Rice flour or cornstarch', prep: 'for thickening coconut topping sauce', amount: '1/2 tsp', metric: '2g', imperial: '0.07 oz', common: '1/2 tsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'STEAM GLUTINOUS STICKY RICE (20 MINUTES)',
        whatYouNeed: ['Soaked drained sticky rice', 'Steamer lined with cheesecloth', 'Pandan knot in water'],
        description: 'Drop pandan knot into boiling water beneath the steamer. Line steamer with damp cheesecloth and spread soaked drained rice in an even layer. Poke 3 small steam holes through the rice with a finger. Cover tightly. Steam over high heat for 20 minutes until grains turn translucent, shiny, and tender with a chewy bite.',
        howToDoIt: 'Pandan infuses the rising steam with vanilla-like fragrance, while steam holes ensure uniform heat distribution.',
        heat: 'High Steam',
        duration: 20,
        visualCues: 'Grains transform from chalky opaque white into gleaming, translucent, sticky pearls.',
        smell: 'Sweet vanilla pandan and steamed rice aroma.',
        textureCheck: 'Chewy, tender, and bouncy with no hard chalky core.',
        whatShouldThisLookLike: 'Translucent, glistening mound of hot steamed sticky rice.',
        tip: 'Flip the rice mass over in the cheesecloth at minute 15 for 100% even cooking.',
        commonMistake: 'Boiling sticky rice in a pot with water — turns into baby food.',
        moveOnWhen: 'Rice grains are translucent and chewy.',
        quickInstructions: 'Steam soaked rice over boiling water with pandan for 20 mins until translucent and chewy.'
      },
      {
        step: 2,
        title: 'WARM COCONUT SOAKING LIQUID',
        whatYouNeed: ['Small saucepan', '250ml coconut milk', '100g sugar', '1/2 tsp salt'],
        description: 'While rice steams, combine 250ml coconut milk, 100g sugar, and 1/2 tsp salt in a saucepan over medium-low heat. Stir gently for 3 minutes until sugar and salt dissolve completely. Do NOT boil. Keep warm.',
        howToDoIt: 'Warming dissolves the sugar and prevents cold coconut fat from congealing.',
        heat: 'Medium-Low Heat',
        duration: 3,
        visualCues: 'Smooth, warm, sweet coconut milk with no undissolved sugar crystals.',
        smell: 'Sweet, rich coconut fragrance.',
        textureCheck: 'Warm, smooth liquid.',
        whatShouldThisLookLike: 'Warm, sweet coconut syrup.',
        tip: 'Both the rice AND the coconut milk must be hot when combined so the starch drinks the liquid.',
        commonMistake: 'Boiling the coconut milk, which separates the oil.',
        moveOnWhen: 'Sugar is completely dissolved and liquid is hot.',
        quickInstructions: 'Warm coconut milk, sugar, and salt over low heat until dissolved; do not boil.'
      },
      {
        step: 3,
        title: 'DUMP RICE INTO COCONUT & REST (THE 20-MINUTE DRINK)',
        whatYouNeed: ['Hot steamed rice', 'Warm sweet coconut milk', 'Bowl with tight lid'],
        description: 'Dump the piping hot steamed rice immediately into a bowl. Pour the warm sweet coconut milk all at once over the hot rice. Stir gently with a spoon for 30 seconds (it will look like a soupy pudding — don\'t panic!). Cover the bowl tightly with a lid or plastic wrap. Let rest undisturbed for 20 minutes.',
        howToDoIt: 'The hot rice grains act like microscopic sponges, absorbing the sweet coconut milk until every grain swells into a rich, translucent, glossy jewel.',
        heat: 'No Heat (Covered steam absorption)',
        duration: 20,
        visualCues: 'All liquid is absorbed; rice transforms into a glossy, lustrous, moist, rich sticky rice mass.',
        textureCheck: 'Incredibly tender, rich, and cohesive.',
        whatShouldThisLookLike: 'Gleaming, plump coconut sticky rice with no loose liquid.',
        tip: 'Fluff the rice gently with a fork after 10 minutes and cover again.',
        commonMistake: 'Leaving the bowl uncovered — liquid evaporates into air instead of absorbing into the rice.',
        moveOnWhen: '20-minute rest is complete and rice has absorbed all liquid.',
        quickInstructions: 'Pour warm coconut milk over hot rice, stir, cover tightly, rest 20 mins until liquid is absorbed.'
      },
      {
        step: 4,
        title: 'SIMMER SALTED COCONUT TOPPING SAUCE',
        whatYouNeed: ['Small saucepan', '100ml coconut cream', '1/2 tsp salt', '1/2 tsp rice flour'],
        description: 'Whisk 100ml coconut cream, 1/2 tsp salt, and 1/2 tsp rice flour in a small saucepan over low heat. Simmer gently for 2 minutes, whisking constantly, until sauce thickens into a glossy, velvety white glaze. Remove from heat.',
        howToDoIt: 'A tiny bit of rice flour thickens the coconut cream so it drapes luxuriously over the rice without running off.',
        heat: 'Low Heat',
        duration: 2,
        visualCues: 'Sauce thickens into a velvet, snow-white ribbon that coats the spoon.',
        smell: 'Savory-sweet coconut aroma.',
        textureCheck: 'Velvety, pourable glaze.',
        whatShouldThisLookLike: 'Thick, white salted coconut sauce.',
        tip: 'That prominent pinch of salt is essential — it elevates the entire dessert!',
        commonMistake: 'Making it sweet — this topping sauce is meant to be SALTED.',
        moveOnWhen: 'Sauce is velvety and smooth.',
        quickInstructions: 'Whisk coconut cream, salt, and rice flour over low heat 2 mins until thick.'
      },
      {
        step: 5,
        title: 'PLATE WITH MANGO FANS & TOPPINGS',
        whatYouNeed: ['Warm coconut sticky rice', 'Sliced ripe mangoes', 'Salted coconut sauce', 'Toasted mung beans', 'Serving plates'],
        description: 'Scoop a mound of warm coconut sticky rice onto one side of the serving plate. Arrange half a sliced ripe mango in an elegant fan on the other side. Drizzle 2 tablespoons of the salted coconut sauce over the rice. Shower the rice with golden toasted mung beans for crunch. Serve warm.',
        howToDoIt: 'The contrast of warm, rich coconut rice with cool, refreshing sweet mango is pure Thai dessert perfection.',
        heat: 'Off Heat',
        duration: 2,
        visualCues: 'Pristine, gleaming presentation: ivory rice, snow-white sauce, golden crunchy mung beans, and vibrant yellow mango fan.',
        smell: 'Intoxicating ripe mango and sweet coconut fragrance.',
        textureCheck: 'Chewy rice, silky mango, velvety sauce, and crunchy mung beans.',
        whatShouldThisLookLike: 'World-class restaurant presentation of Mango Sticky Rice.',
        tip: 'Never refrigerate sticky rice before eating — cold temperatures cause starches to harden into rocks.',
        commonMistake: 'Using fibrous, sour, unripe mangoes — mangoes must be honey-sweet and fully ripe.',
        moveOnWhen: 'Plated and ready to devour.',
        quickInstructions: 'Mound warm rice, fan ripe mango slices, drizzle with salted coconut sauce, top with crunchy mung beans.'
      }
    ],
    commonMistakes: [
      { mistake: 'Sticky rice was hard and dry.', remedy: 'Rice wasn\'t soaked long enough or wasn\'t covered during the coconut soaking stage. Soak 4 hours and keep covered.' },
      { mistake: 'Rice was a mushy porridge.', remedy: 'Rice was boiled in water instead of steamed. Always steam in a cheesecloth-lined basket.' }
    ],
    troubleshooting: [
      {
        problem: 'Mangoes aren\'t sweet enough',
        whatHappened: 'Unripe or low-sugar fruit.',
        whyItHappened: 'Seasonality.',
        whatToDoNow: 'Dust sliced mango lightly with powdered sugar and a drop of lime juice.',
        howToPrevent: 'Look for fragrant, golden yellow Nam Dok Mai or Champagne mangoes.'
      }
    ],
    substitutions: [
      { original: 'Toasted split mung beans', substitute: 'Toasted white sesame seeds', notes: 'Sesame seeds provide a wonderful nutty crunch.' },
      { original: 'Thai Nam Dok Mai mangoes', substitute: 'Champagne / Ataulfo / Honey mangoes', notes: 'Nearly identical silky, fiberless honey sweetness.' }
    ],
    safetyNotes: [
      'Eat freshly made sticky rice within 6 hours at room temperature.'
    ],
    servingGuide: {
      restingTime: '20 minutes for coconut absorption.',
      garnishing: 'Salted coconut cream drizzle and toasted crunchy mung beans.',
      plating: 'Serve on a banana leaf lined ceramic plate with a fork and spoon.',
      temperature: 'Warm rice paired with cool room-temperature mango.',
      accompaniments: 'Chilled iced pandan tea or jasmine water.'
    }
  },

  // 8. LAKSA (Singapore / Penang Curry Laksa)
  {
    id: 'laksa',
    name: 'Singapore Katong Curry Laksa',
    cuisine: 'Thai / SE Asian',
    region: 'Southeast Asia (Singapore / Malaysia / Peranakan)',
    servings: 4,
    prepTime: 30,
    cookTime: 25,
    difficulty: 'Medium',
    overview: {
      summary: 'The crowning achievement of Nonya Peranakan cuisine: thick rice vermicelli noodles bathed in an intensely rich, spicy, golden-red coconut curry soup infused with a fragrant rempah spice paste of dried chilies, shallots, candlenuts, lemongrass, turmeric, and dried shrimp, laden with plump prawns, cockles, fish cake slices, and spongy fried tofu puffs (Tau Pok) that soak up the fiery broth, crowned with fresh laksa leaves (Vietnamese coriander) and sambal chili.',
      appearance: 'A vibrant, steaming orange-red coconut curry soup floating with spongy golden tofu puffs, sliced white-and-pink fish cakes, plump prawns, and deep green shredded laksa leaves.',
      texture: 'Chewy rice vermicelli, spongy tofu puffs bursting with hot broth, snappy sweet prawns, and rich velvety soup.',
      flavor: 'An intoxicating explosion of dried shrimp umami, creamy coconut richness, spicy chili heat, citrusy lemongrass, and distinct peppery herbal notes from laksa leaf.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Heavy stockpot (4–5 qt)', purpose: 'For simmering the coconut curry broth.' },
      { name: 'Noodle strainer basket (spider)', purpose: 'For blanching rice noodles in boiling water.' },
      { name: 'Food processor or mortar and pestle', purpose: 'For blending the complex rempah spice paste.' }
    ],
    beforeYouStart: [
      { task: 'Blend Rempah paste: 10 soaked dried chilies, 6 shallots, 4 garlic cloves, 4 candlenuts (kemiri), 2 lemongrass stalks, 20g fresh turmeric, and 2 tbsp soaked dried shrimp (hae bee).', durationMinutes: 10 },
      { task: 'Boil 300g thick fresh rice vermicelli noodles (Laksa noodles) for 3 mins; drain and rinse cold.', durationMinutes: 5 },
      { task: 'Slice 8 fried tofu puffs (Tau Pok) diagonally in half; slice 100g fish cakes into thin ribbons.', durationMinutes: 3 },
      { task: 'Finely shred 1/2 cup fresh laksa leaves (Daun Kesum / Vietnamese coriander).', durationMinutes: 2 }
    ],
    ingredientPrepGuide: [
      { item: 'Frying the Rempah (Tumis)', technique: 'The blended spice paste must be fried in 4 tbsp oil over medium-low heat for at least 10–12 minutes until oil separates from the paste ("Pecah Minyak"). Proper frying cooks out the raw sulfur of the shallots and blooms the turmeric and chili paste into an intoxicating aromatic base.' },
      { item: 'Tau Pok (Tofu Puffs) Sponges', technique: 'Squeeze halved tofu puffs under water to wash away surface frying oil, then simmer directly in the laksa broth for 5 minutes. They act like edible sponges, soaking up the fiery coconut broth.' }
    ],
    essentialIngredients: [
      { name: 'Thick fresh rice noodles (Laksa vermicelli)', prep: 'blanched and drained', amount: '400g', metric: '400g', imperial: '14 oz', common: '400g' },
      { name: 'Rempah spice paste (chilies, shallots, garlic, candlenuts, lemongrass, turmeric, dried shrimp)', prep: 'finely pureed', amount: '1 cup paste', metric: '200g', imperial: '7 oz', common: '1 cup' },
      { name: 'Raw tiger prawns (shells reserved for stock)', prep: 'peeled, deveined, tails on', amount: '12 prawns', metric: '300g', imperial: '10.5 oz', common: '12 prawns' },
      { name: 'Rich prawn & chicken stock', prep: 'simmered with prawn shells', amount: '1 liter', metric: '1000ml', imperial: '34 fl oz', common: '4 cups' },
      { name: 'Pure coconut milk', prep: 'full fat', amount: '400ml', metric: '400ml', imperial: '13.5 fl oz', common: '1.75 cups' },
      { name: 'Fried tofu puffs (Tau Pok)', prep: 'halved diagonally', amount: '8 puffs', metric: '80g', imperial: '2.8 oz', common: '8 puffs' },
      { name: 'Fish cake logs', prep: 'thinly sliced', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '1 piece' },
      { name: 'Fresh bean sprouts', prep: 'blanched 15 seconds', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '1.5 cups' },
      { name: 'Fresh laksa leaves (Daun Kesum / Vietnamese coriander)', prep: 'finely shredded', amount: '1/2 cup', metric: '20g', imperial: '0.7 oz', common: '1/2 cup' },
      { name: 'Hard-boiled eggs', prep: 'halved', amount: '2 eggs', metric: '100g', imperial: '3.5 oz', common: '2 eggs' },
      { name: 'Fish sauce & Salt', prep: 'for seasoning', amount: '2 tbsp fish sauce + 1 tsp salt', metric: '35ml', imperial: '1.2 fl oz', common: 'to taste' },
      { name: 'Sambal oelek chili paste', prep: 'for serving on side', amount: '4 tbsp', metric: '60g', imperial: '2.1 oz', common: '4 tbsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'FRY REMPAH SPICE PASTE TO OIL SEPARATION (PECAH MINYAK)',
        whatYouNeed: ['Stockpot', '4 tbsp oil', 'Rempah paste'],
        description: 'Heat 4 tbsp oil in the pot over medium-low heat. Add the blended rempah paste. Sauté slowly for 10 to 12 minutes, stirring constantly along the bottom. Watch the transformation: the paste will darken from orange to deep crimson-red, and fragrant red chili oil will separate and bubble away from the paste.',
        howToDoIt: 'Slow frying cooks out raw allium compounds and caramelizes the candlenuts and dried shrimp.',
        heat: 'Medium-Low Heat',
        duration: 12,
        visualCues: 'Paste darkens to deep crimson; clear red oil separates and floats on top ("Pecah Minyak").',
        smell: 'Incredible aroma of toasted dried shrimp, lemongrass, turmeric, and fried shallots.',
        textureCheck: 'Grainy, fragrant, separated paste.',
        whatShouldThisLookLike: 'Deep red, oily rempah paste bubbling in the pot.',
        tip: 'Stir continuously — candlenuts have high starch and stick easily to the pot bottom.',
        commonMistake: 'Rushing this step in 2 minutes — the broth will taste raw, bitter, and sulfurous.',
        moveOnWhen: 'Red oil separates completely from the dark red paste.',
        quickInstructions: 'Sauté rempah paste in 4 tbsp oil over medium-low for 10-12 mins until oil separates.'
      },
      {
        step: 2,
        title: 'ADD PRAWN STOCK & SIMMER BROTH',
        whatYouNeed: ['1L prawn stock', 'Halved tofu puffs (tau pok)', '2 tbsp fish sauce', '1 tsp sugar'],
        description: 'Pour 1 liter of hot prawn stock into the pot. Add halved tofu puffs, fish sauce, and sugar. Bring to a rolling boil over medium-high heat. Reduce to low, cover partially, and simmer for 10 minutes so the tofu puffs soak up the rich stock.',
        howToDoIt: 'Simmering allows the sponge-like tofu puffs to fill with savory broth.',
        heat: 'Medium-Low Simmer',
        duration: 10,
        visualCues: 'Tofu puffs swell and bob on top; broth turns a rich, opaque red-orange.',
        hear: 'Gentle, steady simmering.',
        smell: 'Savory seafood and rich spice broth.',
        textureCheck: 'Tofu puffs become heavy with absorbed liquid.',
        whatShouldThisLookLike: 'A rich red broth filled with swollen tofu puffs.',
        tip: 'Press tofu puffs under the surface with a spoon to ensure they absorb liquid.',
        commonMistake: 'Adding coconut milk now — coconut milk boiled for 10 minutes will curdle and lose its fresh sweetness.',
        moveOnWhen: 'Tofu puffs are swollen and broth is infused.',
        quickInstructions: 'Add 1L prawn stock and tofu puffs; simmer gently 10 mins.'
      },
      {
        step: 3,
        title: 'STIR IN COCONUT MILK & POACH PRAWNS',
        whatYouNeed: ['400ml coconut milk', '12 raw prawns', 'Sliced fish cakes'],
        description: 'Pour in 400ml coconut milk. Stir until broth turns a luscious, creamy golden-orange. Bring to a very gentle simmer (do NOT let it violently boil!). Add prawns and sliced fish cakes. Simmer gently for 3 minutes until prawns are pink and cooked through.',
        howToDoIt: 'Gentle simmering preserves the silky, velvety emulsion of the coconut milk.',
        heat: 'Medium-Low Heat',
        duration: 4,
        visualCues: 'Broth turns gorgeous creamy golden-red with orange oil droplets on top; prawns curl pink.',
        textureCheck: 'Plump snappy prawns, tender fish cakes.',
        whatShouldThisLookLike: 'Velvety, rich, golden-orange Laksa soup.',
        tip: 'Taste the broth: adjust with fish sauce for saltiness or a pinch of sugar for balance.',
        commonMistake: 'Boiling coconut milk on high heat, which separates it into an oily film and curdled solids.',
        moveOnWhen: 'Prawns are pink and soup is piping hot.',
        quickInstructions: 'Add coconut milk, bring to gentle simmer; poach prawns and fish cakes 3 mins.'
      },
      {
        step: 4,
        title: 'ASSEMBLE NOODLE BOWLS & LADLE HOT BROTH',
        whatYouNeed: ['4 soup bowls', 'Blanched rice noodles', 'Bean sprouts', 'Hard-boiled egg halves', 'Ladle'],
        description: 'Divide blanched rice noodles and bean sprouts among 4 warm soup bowls. Using tongs, arrange 3 cooked prawns, sliced fish cakes, and 4 swollen tofu puff halves on top of each bowl. Ladle boiling hot, creamy coconut curry broth generously over the noodles until fully submerged. Place half an egg in each bowl.',
        howToDoIt: 'Placing ingredients neatly in the bowl before ladling hot broth keeps presentation gorgeous and heats the noodles through.',
        heat: 'Off Heat',
        duration: 2,
        visualCues: 'Deep bowls of steaming, golden-orange coconut soup packed with prawns, tofu puffs, and egg.',
        smell: 'Intoxicating, rich Nonya coconut curry aroma.',
        textureCheck: 'Steaming hot, rich, and abundant.',
        whatShouldThisLookLike: 'Restaurant-grade bowl of Singapore Katong Laksa.',
        tip: 'In Katong style, noodles are traditionally cut short so the entire dish can be eaten with a soup spoon alone!',
        commonMistake: 'Letting noodles sit cold in the bowl before ladling — broth must be piping hot to warm noodles.',
        moveOnWhen: 'All 4 bowls are assembled and ladled.',
        quickInstructions: 'Divide noodles and sprouts in bowls, arrange prawns and tofu puffs, ladle hot broth over.'
      },
      {
        step: 5,
        title: 'SHOWER WITH LAKSA LEAF & SERVE WITH SAMBAL',
        whatYouNeed: ['Shredded laksa leaves (Daun Kesum)', 'Dollop of sambal chili'],
        description: 'Shower the top of each bowl with a generous tablespoon of finely shredded fresh laksa leaves. Place a dollop of spicy sambal chili on the rim or spoon. Serve immediately while piping hot.',
        howToDoIt: 'Fresh laksa leaf provides the unmistakable herbal, peppery, citrusy top note that distinguishes true Laksa from generic coconut curry.',
        heat: 'Off Heat',
        duration: 1,
        visualCues: 'Vibrant green shredded laksa leaves scattered across the golden-orange soup with red sambal chili.',
        smell: 'Pungent, citrusy-peppery laksa leaf and creamy coconut.',
        textureCheck: 'Every spoonful is rich, spicy, creamy, and crunchy.',
        whatShouldThisLookLike: 'The ultimate bowl of authentic Singapore Laksa.',
        tip: 'Squeeze the broth out of a tofu puff in your mouth — it\'s an explosion of flavor!',
        commonMistake: 'Omitting laksa leaves — laksa leaves are what makes Laksa "Laksa"!',
        moveOnWhen: 'Garnished and served immediately.',
        quickInstructions: 'Shower with shredded laksa leaves, add sambal on side, serve piping hot.'
      }
    ],
    commonMistakes: [
      { mistake: 'Broth was bland and lacked depth.', remedy: 'Rempah paste wasn\'t fried long enough or dried shrimp was omitted. Fry rempah until oil separates.' },
      { mistake: 'Coconut milk separated into curdled lumps.', remedy: 'Broth was boiled on high heat after adding coconut milk. Always keep at a gentle simmer.' }
    ],
    troubleshooting: [
      {
        problem: 'Broth is too spicy for some guests',
        whatHappened: 'Chili rempah was very hot.',
        whyItHappened: 'Spicy dried chilies.',
        whatToDoNow: 'Whisk in 1/2 cup extra coconut milk and 1/2 cup warm chicken stock to dilute the heat.',
        howToPrevent: 'Desced the dried chilies before blending into paste.'
      }
    ],
    substitutions: [
      { original: 'Fresh laksa leaves (Daun Kesum)', substitute: 'Fresh mint mixed with a touch of cilantro and lemon zest', notes: 'Very good aromatic substitute when laksa leaves are unavailable.' },
      { original: 'Candlenuts (Kemiri)', substitute: 'Raw macadamia nuts or raw cashews', notes: 'Provides the identical rich nutty thickening fat for the paste.' }
    ],
    safetyNotes: [
      'Prawns and seafood must be fresh and cooked thoroughly.'
    ],
    servingGuide: {
      restingTime: 'Serve immediately.',
      garnishing: 'Shredded laksa leaves, fresh lime wedge, and a spoonful of sambal chili.',
      plating: 'Deep ceramic laksa bowls with Chinese soup spoons and chopsticks.',
      temperature: 'Piping hot.',
      accompaniments: 'Lime juice drink (Calamansi) or iced sugarcane juice.'
    }
  },

  // 9. NASI GORENG (Indonesian Fried Rice)
  {
    id: 'nasi-goreng',
    name: 'Authentic Indonesian Wok-Fried Rice (Nasi Goreng)',
    cuisine: 'Thai / SE Asian',
    region: 'Indonesia (Java / Bali / National)',
    servings: 4,
    prepTime: 20,
    cookTime: 10,
    difficulty: 'Easy',
    overview: {
      summary: 'Indonesia\'s internationally revered national dish: chilled day-old jasmine rice stir-fried over roaring wok heat with a fragrant bumbu paste of shallots, garlic, red chilies, and toasted terasi (fermented shrimp paste), lacquered in rich, syrupy Kecap Manis (sweet soy sauce), crowned with a crispy-edged sunny-side-up fried egg (Telur Ceplok), cucumber ribbons, and crunchy prawn crackers (Kerupuk).',
      appearance: 'A dark mahogany-glazed mound of separate, glistening rice grains crowned with a golden, runny-yolked fried egg with lace-crisp brown edges, flanked by ruby tomato wedges and puffy crackers.',
      texture: 'Dry, light, separate rice grains infused with smoke, paired with a rich runny egg yolk, crunchy kerupuk prawn crackers, and refreshing cucumber.',
      flavor: 'Irresistible balance of caramelized molasses sweetness from kecap manis, savory fermented seafood umami from terasi, pungent allium warmth, and smoky wok hei.',
      restingTimeMinutes: 1
    },
    equipment: [
      { name: '14-inch seasoned carbon steel wok', purpose: 'For high-heat searing and imparting authentic smoky wok hei aroma.' },
      { name: 'Wok spatula (Chaan)', purpose: 'For tossing rice vigorously without mashing grains.' },
      { name: 'Small skillet', purpose: 'For frying eggs with crispy lace edges (Telur Ceplok).' }
    ],
    beforeYouStart: [
      { task: 'Fluff 600g chilled day-old cooked jasmine rice with damp fingers so every grain is separate.', durationMinutes: 5 },
      { task: 'Blend Bumbu paste: 4 shallots, 3 garlic cloves, 3 red curly chilies, and 1 tsp toasted terasi shrimp paste.', durationMinutes: 5 },
      { task: 'Dice 150g boneless chicken thigh into 1cm tiny cubes; slice 2 scallions.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'Kecap Manis Caramelization', technique: 'Kecap Manis is thick, syrupy Indonesian sweet soy sauce made from fermented soybeans and palm sugar. When drizzled along the red-hot wok wall, the palm sugar caramelizes instantly, coating the rice in an amber lacquer with deep smoky caramel depth.' },
      { item: 'Toasting Terasi (Shrimp Paste)', technique: 'Toast the terasi block over an open flame or in a dry pan for 60 seconds until crumbly and pungent before blending. Toasting eliminates raw pungency and unlocks deep savory umami.' }
    ],
    essentialIngredients: [
      { name: 'Day-old cooked jasmine rice', prep: 'chilled, grains separated', amount: '600g', metric: '600g', imperial: '21 oz', common: '4 cups cooked' },
      { name: 'Boneless chicken thighs or peeled small shrimp', prep: 'cut into 1cm dice', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '1 cup' },
      { name: 'Bumbu paste (shallots, garlic, red chilies, toasted terasi)', prep: 'finely pureed', amount: '3 tbsp paste', metric: '60g', imperial: '2.1 oz', common: '3 tbsp' },
      { name: 'Kecap Manis (Indonesian sweet soy sauce)', prep: 'primary glaze', amount: '3 tbsp', metric: '45ml', imperial: '1.5 fl oz', common: '3 tbsp' },
      { name: 'Regular soy sauce or fish sauce', prep: 'for savory balance', amount: '1 tbsp', metric: '15ml', imperial: '0.5 fl oz', common: '1 tbsp' },
      { name: 'Large eggs', prep: 'fried sunny-side up with crispy lace edges', amount: '4 eggs', metric: '200g', imperial: '7 oz', common: '4 eggs' },
      { name: 'Scallions / Green onions', prep: 'finely sliced', amount: '3 stalks', metric: '40g', imperial: '1.4 oz', common: '1/2 cup' },
      { name: 'Neutral cooking oil', prep: 'divided', amount: '4 tbsp', metric: '60ml', imperial: '2 fl oz', common: '4 tbsp' },
      { name: 'Kerupuk (Indonesian prawn crackers)', prep: 'fried puffy and crisp', amount: '8 crackers', metric: '40g', imperial: '1.4 oz', common: '8 pieces' },
      { name: 'English cucumber and tomato', prep: 'sliced for side garnish', amount: '1 each', metric: '150g', imperial: '5.3 oz', common: 'sliced' },
      { name: 'Fried crispy shallots (Bawang Goreng)', prep: 'for topping', amount: '2 tbsp', metric: '20g', imperial: '0.7 oz', common: '2 tbsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'FRY THE TELUR CEPLOK (CRISPY-EDGED EGGS)',
        whatYouNeed: ['Small skillet', '2 tbsp oil', '4 eggs'],
        description: 'Heat 2 tbsp oil in a small skillet over high heat until smoking hot. Crack 1 egg into the hot oil. The edges will immediately bubble, blister, and turn shatteringly crisp and golden-brown, while the yolk remains liquid and runny. Baste hot oil over the whites for 60 seconds. Remove to a plate. Repeat for all 4 eggs.',
        howToDoIt: 'High heat creates the iconic Indonesian crispy lace egg skirt while keeping the yolk molten.',
        heat: 'High Heat',
        duration: 4,
        visualCues: 'Frilly, blistered, dark golden-brown crispy edges with a trembling, warm liquid yellow yolk.',
        hear: 'Violent crackling and popping.',
        smell: 'Toasted fried egg.',
        textureCheck: 'Crispy lace edge, molten creamy yolk.',
        whatShouldThisLookLike: 'Picture-perfect Indonesian fried eggs.',
        tip: 'Keep eggs warm on a plate while you fry the rice.',
        commonMistake: 'Cooking on low heat — produces a soft, rubbery diner egg with no crispy edges.',
        moveOnWhen: 'All 4 eggs are fried and set aside.',
        quickInstructions: 'Fry eggs in hot oil 60s each until edges are brown and blistered but yolks are runny.'
      },
      {
        step: 2,
        title: 'FRY BUMBU PASTE & SEAR CHICKEN',
        whatYouNeed: ['Wok', '2 tbsp oil', '3 tbsp bumbu paste', 'Diced chicken'],
        description: 'Heat 2 tbsp oil in wok over medium-high heat. Add the blended bumbu paste. Sauté for 2 minutes until fragrant and oil separates. Add diced chicken; stir-fry for 2 minutes over high heat until chicken is cooked through and coated in the spicy red paste.',
        howToDoIt: 'Frying the paste cooks out the raw shallot and blooms the toasted shrimp paste into rich savory umami.',
        heat: 'High Heat',
        duration: 4,
        visualCues: 'Paste darkens; fragrant red oil bubbles; chicken turns opaque and caramelized.',
        hear: 'Lively, energetic sizzling.',
        smell: 'Intensely fragrant fried shallot, chili, and savory terasi shrimp paste.',
        textureCheck: 'Tender chicken cubes.',
        whatShouldThisLookLike: 'Chicken sizzling in rich, aromatic red bumbu paste.',
        tip: 'Ensure the chicken is diced small (1cm) so it cooks in 2 minutes.',
        commonMistake: 'Adding cold rice before the chicken is cooked through.',
        moveOnWhen: 'Chicken is cooked and bumbu is aromatic.',
        quickInstructions: 'Sauté bumbu paste 2 mins, add chicken, stir-fry 2 mins over high heat.'
      },
      {
        step: 3,
        title: 'ADD RICE & WOK-HEI TOSS',
        whatYouNeed: ['600g separated cold rice', 'Wok spatula'],
        description: 'Dump the cold, separated rice directly into the sizzling wok. Immediately toss and press with the back of the spatula, breaking up any remaining clumps. Stir-fry over maximum heat for 3 minutes, tossing continuously, until every rice grain is hot, dry, and coated in the spicy paste.',
        howToDoIt: 'Continuous tossing over maximum heat dehydrates the rice surface, infusing grains with smoky wok hei.',
        heat: 'Maximum High Heat',
        duration: 3,
        visualCues: 'Rice grains separate completely and bounce off the hot metal; wisps of blue smoke billow.',
        hear: 'Rhythmic crackling and popping sounds.',
        smell: 'Smoky wok hei, toasted rice, and savory spices.',
        textureCheck: 'Light, dry, bouncy grains.',
        whatShouldThisLookLike: 'Fluffy, separate rice tumbling through the wok.',
        tip: 'Keep the wok moving so the bottom doesn\'t scorch black.',
        commonMistake: 'Using freshly cooked warm rice, which turns into a soggy, gluey sludge.',
        moveOnWhen: 'Rice grains are popping and hot.',
        quickInstructions: 'Add rice; toss furiously over max heat for 3 mins until grains are separate and popping.'
      },
      {
        step: 4,
        title: 'DRIZZLE KECAP MANIS ALONG HOT WOK RIM',
        whatYouNeed: ['3 tbsp Kecap Manis', '1 tbsp soy sauce', 'Sliced scallions'],
        description: 'Drizzle 3 tbsp Kecap Manis and 1 tbsp soy sauce strictly along the highest red-hot rim of the wok (NOT on the rice directly). The sauce will sizzle, bubble, and atomize into sweet caramel smoke as it trickles down. Toss furiously for 60 seconds to coat the rice. Toss in sliced scallions. TURN OFF HEAT.',
        howToDoIt: 'Drizzling along the 250°C iron rim caramelizes the palm sugar in the sweet soy sauce, giving Nasi Goreng its legendary mahogany color and smoky sweetness.',
        heat: 'Maximum High Heat',
        duration: 2,
        visualCues: 'Steam and sweet smoke explode from the wok rim; rice turns a rich, lustrous mahogany-brown.',
        smell: 'Intoxicating caramelized palm sugar, savory soy, and scallions.',
        textureCheck: 'Every single grain is glazed, separate, and dry.',
        whatShouldThisLookLike: 'Rich mahogany, glistening Indonesian Nasi Goreng.',
        tip: 'Never pour thick sweet soy directly onto rice — it will create wet, soggy dark clumps.',
        commonMistake: 'Overusing kecap manis until rice becomes sweet and clumpy.',
        moveOnWhen: 'Rice is uniformly mahogany and scallions are wilted.',
        quickInstructions: 'Drizzle Kecap Manis along hot wok rim, toss 60s until mahogany, add scallions, turn off heat.'
      },
      {
        step: 5,
        title: 'PLATE WITH FRIED EGG & TRADITIONAL CONDIMENTS',
        whatYouNeed: ['4 plates', 'Crispy fried eggs', 'Prawn crackers (kerupuk)', 'Cucumber and tomato slices', 'Fried shallots (bawang goreng)'],
        description: 'Mound the mahogany fried rice onto 4 plates. Crown each mound with a crispy-edged fried egg (Telur Ceplok). Sprinkle generous fried crispy shallots over the egg. Arrange sliced cucumber, tomato wedges, and crunchy kerupuk prawn crackers alongside. Serve hot.',
        howToDoIt: 'Diners break the runny egg yolk, letting rich yolk mingle with the sweet-spicy mahogany rice.',
        heat: 'Off Heat',
        duration: 1,
        visualCues: 'Stunning Indonesian presentation: dark mahogany rice crowned with golden egg and bright red tomato and green cucumber slices.',
        smell: 'Sweet caramelized soy, fried egg, and crispy shallots.',
        textureCheck: 'Shatteringly crisp crackers, runny yolk, and light chewy rice.',
        whatShouldThisLookLike: 'Masterpiece Indonesian Nasi Goreng Istimewa.',
        tip: 'Dip the crunchy prawn crackers directly into the egg yolk and rice!',
        commonMistake: 'Serving without kerupuk and cucumber — they are essential textural counterpoints.',
        moveOnWhen: 'Plated and served.',
        quickInstructions: 'Mound rice, crown with crispy fried egg, sprinkle fried shallots, add crackers and cucumber.'
      }
    ],
    commonMistakes: [
      { mistake: 'Rice was wet and mushy.', remedy: 'Fresh warm rice was used. Always use day-old chilled rice that has dried out in the fridge.' },
      { mistake: 'Rice tasted bland with no depth.', remedy: 'Terasi (shrimp paste) was omitted. Terasi provides the irreplaceable soul of authentic Indonesian fried rice.' }
    ],
    troubleshooting: [
      {
        problem: 'Rice is sticking to the wok',
        whatHappened: 'Wok was not seasoned or hot enough.',
        whyItHappened: 'Cold metal bonds with starch.',
        whatToDoNow: 'Drizzle 1 tbsp oil down the sides and keep heat on maximum, scraping gently with spatula.',
        howToPrevent: 'Heat wok until smoking before adding oil and rice.'
      }
    ],
    substitutions: [
      { original: 'Kecap Manis', substitute: '2 tbsp dark soy sauce mixed with 1.5 tbsp brown sugar or molasses', notes: 'Simmer together for 1 min to create a thick sweet soy syrup.' },
      { original: 'Terasi shrimp paste', substitute: '1 tbsp Thai fish sauce or anchovy paste', notes: 'Provides savory fermented depth.' }
    ],
    safetyNotes: [
      'Store day-old rice properly in refrigerator below 4°C.'
    ],
    servingGuide: {
      restingTime: 'Serve immediately.',
      garnishing: 'Crispy fried shallots (Bawang Goreng) and a fresh lime wedge.',
      plating: 'Individual ceramic plates with condiments arranged along the perimeter.',
      temperature: 'Piping hot.',
      accompaniments: 'Chicken satay skewers with peanut sauce and Indonesian pickled cucumber (Acar).'
    }
  },

  // 10. RENDANG (Authentic Minangkabau Beef Rendang)
  {
    id: 'rendang',
    name: 'Authentic Minangkabau Beef Rendang (Rendang Daging)',
    cuisine: 'Thai / SE Asian',
    region: 'Indonesia (West Sumatra / Minangkabau)',
    servings: 6,
    prepTime: 35,
    cookTime: 180,
    difficulty: 'Hard',
    overview: {
      summary: 'The undisputed king of Southeast Asian curries, voted the world\'s #1 most delicious food: beef shank or chuck slow-cooked through three legendary stages (Gulai → Kalio → Rendang) in coconut milk infused with a complex bumbu paste of fresh chilies, lemongrass, galangal, turmeric leaves, and toasted grated coconut paste (Kerisik), cooked until all liquid evaporates and the beef fries in its own rendered spiced coconut oil, transforming into fork-tender, dark caramelized, mahogany-coated flavor bombs.',
      appearance: 'Dark mahogany-brown, nearly black caramelized chunks of beef completely coated in a thick, dry, granular spiced coconut oil paste, glistening with rich rendered oil.',
      texture: 'Fork-tender, melt-in-the-mouth beef that shreds effortlessly under a spoon, coated in a luscious, deeply concentrated, slightly gritty toasted coconut paste.',
      flavor: 'Unfathomable flavor depth: caramelized sweet coconut oil, smoky toasted kerisik, fiery chili warmth, floral lemongrass, earthy turmeric, and rich beef savoriness.',
      restingTimeMinutes: 10
    },
    equipment: [
      { name: 'Heavy-bottomed cast-iron Dutch oven or deep heavy wok (5–6 qt)', purpose: 'Essential for even heat distribution during 3 hours of simmering and reducing without scorching.' },
      { name: 'Dry cast-iron skillet', purpose: 'For toasting fresh grated coconut into dark golden Kerisik paste.' },
      { name: 'Mortar and pestle or spice grinder', purpose: 'Pounds toasted coconut into an oily, dark paste.' }
    ],
    beforeYouStart: [
      { task: 'Cut 1kg beef shank or chuck into generous 4.5cm cubes (do not cut small; beef shrinks by 40%).', durationMinutes: 10 },
      { task: 'Blend Bumbu paste: 12 shallots, 6 garlic cloves, 15 curly red chilies, 30g fresh galangal, 30g fresh ginger, 20g fresh turmeric, and 2 lemongrass stalks.', durationMinutes: 10 },
      { task: 'Toast 100g freshly grated unsweetened coconut in a dry skillet over low heat for 15 mins until dark golden-brown; pound in a mortar until oily (Kerisik paste).', durationMinutes: 20 },
      { task: 'Tie 2 turmeric leaves (daun kunyit) in knots; tear 6 makrut lime leaves.', durationMinutes: 2 }
    ],
    ingredientPrepGuide: [
      { item: 'The 3 Stages of Rendang', technique: 'Stage 1: Gulai (Yellow, watery boiling coconut stew, first 60 mins). Stage 2: Kalio (Thick, bubbling, oily gravy with separated coconut oil, minutes 60–120). Stage 3: Rendang (Complete liquid evaporation where beef fries in its own rendered spiced coconut oil over dead-low heat until dark mahogany-brown, minutes 120–180).' },
      { item: 'Kerisik (Toasted Coconut Paste)', technique: 'Toasting grated coconut slowly until deep nutty amber and pounding it until oils release is the traditional Minangkabau secret. Kerisik provides the signature dark color, nutty smokiness, and thick granular texture that clings to the beef.' }
    ],
    essentialIngredients: [
      { name: 'Beef shank, chuck roast, or brisket', prep: 'cut into 4.5cm large cubes', amount: '1000g', metric: '1000g', imperial: '2.2 lbs', common: '1kg' },
      { name: 'Bumbu spice paste (shallots, garlic, chilies, galangal, ginger, turmeric, lemongrass)', prep: 'finely pureed with splash of water', amount: '1.5 cups paste', metric: '300g', imperial: '10.5 oz', common: '1.5 cups' },
      { name: 'Pure thick coconut milk (from fresh coconuts or quality can)', prep: 'full fat', amount: '800ml', metric: '800ml', imperial: '27 fl oz', common: '3.5 cups' },
      { name: 'Kerisik (toasted coconut paste)', prep: 'toasted dark golden & pounded until oily', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '1/2 cup paste' },
      { name: 'Fresh lemongrass stalks', prep: 'bruised and tied in knots', amount: '2 stalks', metric: '40g', imperial: '1.4 oz', common: '2 stalks' },
      { name: 'Fresh turmeric leaf (Daun Kunyit)', prep: 'tied in a knot (crucial authentic aroma)', amount: '1 leaf', metric: '15g', imperial: '0.5 oz', common: '1 leaf' },
      { name: 'Makrut lime leaves', prep: 'torn in half', amount: '6 leaves', metric: '6 leaves', imperial: '6 leaves', common: '6 leaves' },
      { name: 'Asam Gelugur (dried garcinia slices) or 1 tbsp tamarind paste', prep: 'for mild fruit acidity', amount: '2 slices', metric: '10g', imperial: '0.35 oz', common: '2 slices' },
      { name: 'Fine sea salt', prep: 'seasoning', amount: '1.5 tbsp', metric: '20g', imperial: '0.7 oz', common: '1.5 tbsp' },
      { name: 'Palm sugar (Gula Melaka)', prep: 'shaved', amount: '1 tbsp', metric: '15g', imperial: '0.5 oz', common: '1 tbsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'STAGE 1: GULAI (WATERY BOILING COCONUT STEW)',
        whatYouNeed: ['Heavy Dutch oven', '800ml coconut milk', 'Bumbu paste', 'Lemongrass knots', 'Turmeric leaf', 'Lime leaves', 'Beef cubes'],
        description: 'Place coconut milk, bumbu spice paste, lemongrass knots, turmeric leaf, and torn lime leaves into the Dutch oven. Stir continuously over medium heat until it comes to a boil. Add the beef cubes and salt. Cook uncovered over medium heat for 60 minutes, stirring every 5 minutes along the bottom to prevent scorching.',
        howToDoIt: 'Constant stirring during early boiling prevents fresh coconut milk from curdling and helps the meat absorb aromatics.',
        heat: 'Medium Heat',
        duration: 60,
        visualCues: 'Yellowish-orange watery broth bubbling actively; beef shrinks slightly and absorbs color.',
        hear: 'Vigorous bubbling and boiling.',
        smell: 'Fragrant fresh turmeric, lemongrass, and sweet coconut milk.',
        textureCheck: 'Watery, thin soup with firm beef.',
        whatShouldThisLookLike: 'Yellow-orange boiling coconut stew (Gulai stage).',
        tip: 'Do NOT cover with a lid! Rendang requires continuous evaporation of all water.',
        commonMistake: 'Covering with a lid — water will never evaporate and you will end up with plain soup.',
        moveOnWhen: '60 minutes have elapsed and liquid has reduced by half.',
        quickInstructions: 'Boil coconut milk, paste, and herbs; add beef, cook uncovered on medium for 60 mins (Gulai stage).'
      },
      {
        step: 2,
        title: 'STAGE 2: KALIO (THICK OILY GRAVY & OIL SEPARATION)',
        whatYouNeed: ['100g Kerisik (toasted coconut paste)', 'Asam gelugur / tamarind', 'Palm sugar'],
        description: 'Stir in the pounded Kerisik (toasted coconut paste), asam gelugur, and palm sugar. Reduce heat to medium-low. Cook uncovered for another 60 minutes, stirring frequently every 2–3 minutes. The liquid will reduce into a thick, glossy, brownish-red gravy, and oil will begin separating from the coconut milk.',
        howToDoIt: 'Kerisik darkens the color and provides natural thickening fats, while the separating coconut oil begins caramelizing.',
        heat: 'Medium-Low Heat',
        duration: 60,
        visualCues: 'Color darkens from orange to rich brown; gravy thickens into heavy lava; clear coconut oil separates and bubbles aggressively around beef chunks.',
        hear: 'Heavy, slow, spitting bubbling ("plop-plop").',
        smell: 'Intense nutty toasted coconut, caramelized shallots, and rich beef fat.',
        textureCheck: 'Thick, heavy gravy clinging to tender beef.',
        whatShouldThisLookLike: 'Thick, brownish-red, oily curry (Kalio stage).',
        tip: 'Stir frequently from the bottom with a flat wooden spatula — as the sauce thickens, it scorches easily.',
        commonMistake: 'Walking away from the pot — thick Kalio sauce sticks and burns in seconds if ignored.',
        moveOnWhen: 'Sauce is thick, brown, and oil has fully separated (approx 120 mins total).',
        quickInstructions: 'Add kerisik, tamarind, and sugar; cook on medium-low 60 mins until thick and oily (Kalio stage).'
      },
      {
        step: 3,
        title: 'STAGE 3: RENDANG (DRY SLOW-FRYING TO MAHOGANY)',
        whatYouNeed: ['Flat wooden spatula', 'Dead-low heat burner'],
        description: 'Turn heat down to DEAD-LOW. All water has now evaporated. The beef is now shallow-frying in its own rendered spiced coconut oil. Cook for 45 to 60 minutes, stirring continuously and turning the beef chunks constantly. As they fry in the dark oil, the spices and coconut solids caramelize against the meat, turning the beef into dark mahogany-brown, nearly black nuggets.',
        howToDoIt: 'This slow-frying stage ("Merendang") dehydrates the beef completely, caramelizing sugars and creating an airtight protective coat that historically allowed Rendang to keep for weeks without refrigeration.',
        heat: 'Dead-Low Heat',
        duration: 50,
        visualCues: 'Gravy vanishes completely; beef chunks turn dark mahogany-brown, coated in a thick, dry, granular, glistening paste; clear oil pools on bottom.',
        hear: 'Gentle, dry shallow-frying sizzle.',
        smell: 'Intoxicating, deeply caramelized, smoky, nutty roasted beef and coconut.',
        textureCheck: 'Fork-tender beef that flakes easily; dry clinging paste.',
        whatShouldThisLookLike: 'Authentic dark mahogany-brown Minangkabau Beef Rendang.',
        tip: 'Never stop stirring during this stage; scrape the dark caramelized bits from the bottom so they coat the meat.',
        commonMistake: 'Stopping at the Kalio stage — authentic Rendang MUST be dry and dark mahogany, not wet gravy!',
        moveOnWhen: 'Beef is dark mahogany-brown, dry, and glistening with rendered oil.',
        quickInstructions: 'Fry beef in its own rendered oil on dead-low for 50 mins, stirring constantly until dark mahogany (Rendang stage).'
      },
      {
        step: 4,
        title: 'REST, DEGLAZE FAT & SERVE WITH STEAMED RICE',
        whatYouNeed: ['Warm serving dish', 'Slotted spoon'],
        description: 'TURN OFF HEAT. Let the Rendang rest in the pot for 10 minutes. If there is an excess pool of rendered clear coconut oil at the bottom, tilt the pot and spoon it off (reserve this fragrant spiced oil for frying eggs or rice!). Transfer the dark, glistening beef chunks and clinging caramelized spices to a serving dish. Serve warm with steamed rice.',
        howToDoIt: 'Resting allows the meat to reabsorb juices while the caramelized spice crust solidifies onto each chunk.',
        heat: 'Off Heat',
        duration: 10,
        visualCues: 'Deep dark mahogany beef chunks with glistening, spicy, granular coconut crust.',
        smell: 'The greatest aroma in Southeast Asian cuisine: deeply caramelized, smoky, and complex.',
        textureCheck: 'Melt-in-the-mouth fork tenderness.',
        whatShouldThisLookLike: 'Legendary authentic Indonesian Beef Rendang.',
        tip: 'Rendang famously tastes even more mind-blowing on the 2nd and 3rd day as the spices deepen!',
        commonMistake: 'Eating scorching hot — let it rest so the caramelized crust can be fully appreciated.',
        moveOnWhen: 'Rested and plated.',
        quickInstructions: 'Rest 10 mins, skim excess oil, plate dark mahogany beef with clinging spiced paste.'
      }
    ],
    commonMistakes: [
      { mistake: 'Rendang burned black and tasted bitter.', remedy: 'Heat was too high during the final stage. The final 50 minutes must be over dead-low heat with continuous stirring.' },
      { mistake: 'Dish remained a wet, soupy curry.', remedy: 'Cooked with a lid on or stopped too early. Rendang requires 3 full hours uncovered until all liquid evaporates.' }
    ],
    troubleshooting: [
      {
        problem: 'Beef is tender before sauce has reduced to dark Rendang',
        whatHappened: 'Beef pieces were cut too small or tender cut was used.',
        whyItHappened: 'Fast tenderization.',
        whatToDoNow: 'Carefully remove beef to a plate; crank heat to reduce sauce to dark oily paste, then fold beef back in for 5 mins.',
        howToPrevent: 'Always use tough beef shank or chuck cut into large 4.5cm cubes.'
      }
    ],
    substitutions: [
      { original: 'Fresh turmeric leaf (Daun Kunyit)', substitute: '2 extra makrut lime leaves + 1/2 tsp ground turmeric', notes: 'Gives good color and citrus warmth.' },
      { original: 'Beef shank', substitute: 'Beef chuck, brisket, or chicken thigh chunks (Ayam Rendang)', notes: 'Chicken Rendang cooks in only 75 minutes.' }
    ],
    safetyNotes: [
      'Beef must reach internal temperature of 75°C (167°F); Rendang preserves well naturally due to low moisture.'
    ],
    servingGuide: {
      restingTime: 'Rest 10 minutes before serving.',
      garnishing: 'Aromatic fried shallots and fresh kaffir lime leaf chiffonade.',
      plating: 'Wide ceramic or earthenware serving bowl.',
      temperature: 'Warm or room temperature.',
      accompaniments: 'Piping hot steamed Jasmine rice, cassava leaves (Daun Singkong), and green chili sambal (Sambal Ijo).'
    }
  },

  // 11. PHO (Vietnamese Beef Pho / Phở Bò)
  {
    id: 'pho',
    name: 'Traditional Hanoi Beef Pho (Phở Bò)',
    cuisine: 'Thai / SE Asian',
    region: 'Vietnam (Hanoi / Northern)',
    servings: 4,
    prepTime: 30,
    cookTime: 180,
    difficulty: 'Hard',
    overview: {
      summary: 'Vietnam\'s world-renowned culinary masterpiece: flat rice noodles (Bánh Phở) bathed in a crystal-clear, intensely aromatic, 6-hour beef bone broth simmered with charred ginger, roasted sweet onions, star anise, black cardamom, cinnamon, and coriander seeds, crowned with paper-thin slices of raw beef eye-round (Tái) that cook instantly in the boiling broth, tender braised brisket (Chín), fresh herbs, scallions, and lime.',
      appearance: 'A steaming, crystal-clear golden-amber broth filled with silky white flat noodles, pink tender beef slices, green scallions, fresh herbs, and floating micro-beads of rich bone marrow fat.',
      texture: 'Silky, slippery, tender rice noodles, meltingly tender beef slices, and crisp, refreshing fresh bean sprouts and herbs.',
      flavor: 'Pure, clean, sublime elegance: deep savory beef marrow umami, sweet roasted onion, warm anise-cinnamon aromatics, bright lime acidity, and fresh herbal mint-basil perfume.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Large 8 to 10-quart stockpot', purpose: 'For parboiling bones and simmering the slow, clear 6-hour broth.' },
      { name: 'Fine-mesh skimmer and cheesecloth strainer', purpose: 'Removes impurities and strains the broth into crystal-clear clarity.' },
      { name: 'Noodle spider basket', purpose: 'For flash-blanching flat rice noodles in seconds.' }
    ],
    beforeYouStart: [
      { task: 'Parboil 1.5kg beef marrow and knuckle bones in boiling water for 10 minutes to purge impurities; drain and scrub bones clean under cold running water.', durationMinutes: 15 },
      { task: 'Char 2 large yellow onions and 1 large hand of ginger directly over an open gas flame for 10 mins until skins are black and charred; scrape off loose charred skin and rinse.', durationMinutes: 12 },
      { task: 'Toast whole spices in dry pan: 5 star anise, 1 cinnamon stick, 2 black cardamoms (Thảo Quả), 1 tbsp coriander seeds, 4 cloves.', durationMinutes: 5 },
      { task: 'Freeze 250g beef eye-round or sirloin for 30 minutes; slice paper-thin (1.5mm) across the grain.', durationMinutes: 10 }
    ],
    ingredientPrepGuide: [
      { item: 'Bone Parboiling & Scrubbing', technique: 'The #1 secret to crystal-clear, mirror-clean Pho broth is parboiling the beef marrow bones for 10 minutes, dumping the murky scum water, and scrubbing every bone with a brush under cold running water. This removes coagulated blood and impurities, guaranteeing a clear golden broth.' },
      { item: 'Charring Aromatics (Nướng)', technique: 'Charring onions and ginger over an open flame caramelizes their natural sugars and releases sweet, smoky volatile oils that define authentic Hanoi broth.' }
    ],
    essentialIngredients: [
      { name: 'Beef marrow bones & knuckle bones', prep: 'parboiled 10 mins, scrubbed clean', amount: '1.5kg', metric: '1500g', imperial: '3.3 lbs', common: '1.5kg' },
      { name: 'Beef brisket or flank (Chín)', prep: 'simmered whole in broth for 2 hours, sliced thin', amount: '400g', metric: '400g', imperial: '14 oz', common: '400g' },
      { name: 'Beef eye of round or sirloin (Tái)', prep: 'sliced paper-thin (1.5mm) raw', amount: '250g', metric: '250g', imperial: '9 oz', common: '1/2 lb' },
      { name: 'Fresh flat pho rice noodles (Bánh Phở)', prep: 'at room temperature', amount: '500g', metric: '500g', imperial: '18 oz', common: '4 bowls' },
      { name: 'Yellow onions', prep: 'halved and charred over flame', amount: '2 large', metric: '350g', imperial: '12 oz', common: '2 onions' },
      { name: 'Fresh ginger', prep: 'charred over flame, bruised', amount: '80g', metric: '80g', imperial: '2.8 oz', common: '1 large hand' },
      { name: 'Whole spices', prep: '5 star anise, 1 cinnamon stick, 2 black cardamoms, 1 tbsp coriander seeds, 4 cloves (in spice bag)', amount: '1 pouch', metric: '25g', imperial: '0.9 oz', common: 'toasted' },
      { name: 'Yellow rock sugar (Đường Phèn)', prep: 'for mellow natural sweetness', amount: '35g', metric: '35g', imperial: '1.2 oz', common: '2 chunks' },
      { name: 'Premium Vietnamese fish sauce (Nước Mắm Phú Quốc)', prep: 'added at the end', amount: '4 tbsp', metric: '60ml', imperial: '2 fl oz', common: '1/4 cup' },
      { name: 'Fine sea salt', prep: 'primary seasoning', amount: '1.5 tbsp', metric: '22g', imperial: '0.8 oz', common: '1.5 tbsp' },
      { name: 'Fresh scallions & Cilantro', prep: 'finely sliced', amount: '1 cup', metric: '50g', imperial: '1.8 oz', common: '1 cup' },
      { name: 'Fresh Thai basil, culantro (ngò gai), bean sprouts, lime wedges, sliced bird\'s eye chilies', prep: 'for table herb basket', amount: '1 platter', metric: '200g', imperial: '7 oz', common: '1 platter' }
    ],
    steps: [
      {
        step: 1,
        title: 'PARBOIL & CLEAN BONES TO PURE CRYSTAL PURITY',
        whatYouNeed: ['Large stockpot', '1.5kg beef marrow/knuckle bones', 'Water for boiling', 'Brush'],
        description: 'Place scrubbed beef bones in stockpot, cover with cold water, and bring to a rolling boil over high heat. Boil furiously for 10 minutes as gray, frothy scum rises. Dump all the water into the sink. Scrub each bone thoroughly under cold running water with a brush to remove all clinging coagulated blood. Wash the pot clean.',
        howToDoIt: 'Purging blood and impurities before simmering ensures the long broth stays sparkling, golden-amber, and crystal-clear.',
        heat: 'High Heat',
        duration: 15,
        visualCues: 'Murky, gray, scummy water discarded; bones scrubbed pristine clean.',
        smell: 'Boiled bone impurities washed away.',
        textureCheck: 'Clean bones free of gray residue.',
        whatShouldThisLookLike: 'Pristine, clean beef bones ready for the long simmer.',
        tip: 'Never skip this step — un-parboiled bones produce cloudy, grey, murky broth.',
        commonMistake: 'Leaving bones to simmer without parboiling, which permanently clouds the broth.',
        moveOnWhen: 'Bones and pot are thoroughly washed clean.',
        quickInstructions: 'Boil bones for 10 mins, discard scummy water, scrub bones clean under cold water.'
      },
      {
        step: 2,
        title: 'THE 3-HOUR CRYSTAL SIMMER WITH CHARRED AROMATICS',
        whatYouNeed: ['Clean pot', 'Clean bones', 'Beef brisket', '4 liters cold water', 'Charred onions & ginger', '1.5 tbsp salt', 'Rock sugar'],
        description: 'Place clean bones and whole beef brisket into the clean stockpot. Add 4 liters of cold water. Bring to a gentle simmer over medium heat. Skim any remaining fine foam with a ladle. Add charred onions, charred ginger, rock sugar, and 1.5 tbsp salt. Reduce heat to the lowest setting (slow lazy simmer). Simmer uncovered for 2 hours. Remove brisket and chill in cold water (prevents darkening); slice thin.',
        howToDoIt: 'Low, lazy simmering gently melts bone marrow and collagen into gelatin without agitating fat into cloudy emulsions.',
        heat: 'Lowest Simmer (90°C / 195°F)',
        duration: 120,
        visualCues: 'Crystal-clear golden broth with gentle ripples and shimmering micro-droplets of yellow marrow fat.',
        smell: 'Intensely rich roasted beef, sweet charred onion, and ginger.',
        textureCheck: 'Tender cooked brisket; clear broth.',
        whatShouldThisLookLike: 'Clear, shimmering golden-amber broth simmering peacefully.',
        tip: 'Never let the broth boil vigorously! Violent boiling emulsifies fat into water, turning broth milky gray.',
        commonMistake: 'Covering with a lid — traps steam and creates convection that clouds the broth.',
        moveOnWhen: 'Brisket is tender and removed; broth has simmered 2 hours.',
        quickInstructions: 'Simmer bones, brisket, charred onions, ginger, rock sugar, and salt uncovered on low for 2 hours; remove brisket.'
      },
      {
        step: 3,
        title: 'STEEP SPICE POUCH & SEASON WITH FISH SAUCE',
        whatYouNeed: ['Toasted whole spices in spice bag', '4 tbsp premium fish sauce'],
        description: 'Place toasted spices (star anise, cinnamon, black cardamom, coriander seeds, cloves) inside a cheesecloth bag. Submerge bag in the simmering broth for 45 minutes only. Remove spice bag. Stir in 4 tbsp premium fish sauce. Strain entire broth through a fine-mesh sieve lined with cheesecloth into a clean pot. Keep at a rolling simmer.',
        howToDoIt: 'Steeping spices for only 45 minutes extracts their sweet perfume without making the broth bitter or overly dark. Adding fish sauce at the end preserves its fresh umami.',
        heat: 'Low Simmer',
        duration: 45,
        visualCues: 'Broth turns glistening golden-amber and crystal-clear; surface has tiny droplets of golden marrow fat.',
        smell: 'Heavenly, authentic Pho perfume: sweet star anise, warm cinnamon, roasted beef, and fish sauce.',
        textureCheck: 'Crystal-clear, rich broth.',
        whatShouldThisLookLike: 'Mirror-clear, golden-amber Hanoi Pho broth.',
        tip: 'Never leave star anise in the broth for hours — it will turn the broth dark brown and licorice-bitter.',
        commonMistake: 'Boiling fish sauce for hours, which turns it sour and pungent.',
        moveOnWhen: 'Spice bag removed and broth is strained crystal-clear.',
        quickInstructions: 'Steep spice bag in broth for 45 mins; add fish sauce, strain broth through cheesecloth.'
      },
      {
        step: 4,
        title: 'FLASH-BLANCH NOODLES & ASSEMBLE BOWLS',
        whatYouNeed: ['4 large deep soup bowls', 'Fresh flat pho noodles (Bánh Phở)', 'Noodle spider', 'Pot of boiling water', 'Cooked sliced brisket', 'Paper-thin raw beef slices (Tái)', 'Sliced scallions & cilantro'],
        description: 'Dip fresh pho noodles in a pot of boiling water for 15 seconds using a noodle spider. Shake water off thoroughly and divide among 4 large warm bowls. Arrange thin slices of cooked brisket and spread the paper-thin raw beef slices (Tái) in a flat layer across the top of the noodles. Top with chopped scallions and cilantro.',
        howToDoIt: 'Spreading the raw beef slices flat in a single layer ensures the boiling broth cooks them to pink, succulent doneness in seconds.',
        heat: 'High Boil for noodle blanching',
        duration: 3,
        visualCues: 'Bowls filled with glistening white noodles, pink raw beef slices, dark cooked brisket, and green scallions.',
        textureCheck: 'Silky, pliable noodles.',
        whatShouldThisLookLike: 'Four beautifully assembled bowls ready for boiling broth.',
        tip: 'Ensure the raw beef is sliced paper-thin so it cooks instantly when broth is ladled.',
        commonMistake: 'Using cold, thick raw beef chunks — the broth will not be hot enough to cook them.',
        moveOnWhen: 'Bowls are assembled.',
        quickInstructions: 'Blanch noodles 15s, place in bowls, arrange cooked brisket, raw beef slices, and scallions on top.'
      },
      {
        step: 5,
        title: 'LADLE BOILING BROTH TO FLASH-COOK RAW BEEF',
        whatYouNeed: ['Rolling-boiling Pho broth', 'Ladle', 'Table herb platter (lime, chilies, Thai basil, culantro, bean sprouts)'],
        description: 'Bring the strained broth to a furious rolling boil. Immediately ladle the scorching broth directly OVER the raw beef slices in each bowl. The raw beef will instantly sizzle, change color from red to tender pink, and cook to melting perfection in 5 seconds. Serve immediately alongside a generous platter of fresh herbs, lime wedges, and sliced chilies.',
        howToDoIt: 'The extreme heat of the rolling-boiling broth flash-poaches the paper-thin beef directly in the bowl, creating the signature meltingly tender Phở Tái texture.',
        heat: 'Rolling Boil for Broth',
        duration: 2,
        visualCues: 'Raw pink beef curls and turns pale tender pink as boiling broth cascades over it; herbs float to top.',
        hear: 'Gentle sizzle as boiling broth contacts raw beef.',
        smell: 'The greatest soup aroma on earth: steaming beef broth, anise, lime, and fresh herbs.',
        textureCheck: 'Meltingly tender beef, silky noodles, light crystal broth.',
        whatShouldThisLookLike: 'A masterpiece bowl of Vietnamese Phở Bò Tái Nạm.',
        tip: 'Diners squeeze fresh lime and tear fresh herbs into the hot broth at the table!',
        commonMistake: 'Ladling lukewarm broth — raw beef will stay raw and noodles will turn gummy.',
        moveOnWhen: 'Served piping hot.',
        quickInstructions: 'Ladle rolling-boiling broth directly over raw beef slices to flash-poach; serve with fresh herbs and lime.'
      }
    ],
    commonMistakes: [
      { mistake: 'Broth was cloudy and grey.', remedy: 'Bones were not parboiled and scrubbed clean, or broth was boiled furiously on high heat. Parboil bones and simmer on lowest heat.' },
      { mistake: 'Broth tasted bitter and licorice-heavy.', remedy: 'Star anise and cinnamon were left in the pot too long. Steep whole spices for 45 minutes only.' }
    ],
    troubleshooting: [
      {
        problem: 'Broth lacks beefy body and richness',
        whatHappened: 'Not enough marrow bones or water was over-diluted.',
        whyItHappened: 'Low gelatin concentration.',
        whatToDoNow: 'Simmer uncovered over medium heat to reduce by 20%, then finish with 1 extra tbsp fish sauce.',
        howToPrevent: 'Use at least 1.5kg of marrow and knuckle bones for 4 liters of water.'
      }
    ],
    substitutions: [
      { original: 'Beef bones & brisket', substitute: 'Whole chicken carcass + chicken thighs (Phở Gà)', notes: 'Chicken Pho (Phở Gà) is equally historic and simmers in just 90 minutes.' },
      { original: 'Yellow rock sugar (Đường Phèn)', substitute: 'Granulated sugar or palm sugar', notes: 'Rock sugar provides a cleaner, milder sweetness without cloying.' }
    ],
    safetyNotes: [
      'Raw beef slices must be sliced paper-thin and broth must be at a rolling boil to flash-cook the meat safely.'
    ],
    servingGuide: {
      restingTime: 'Serve immediately steaming hot.',
      garnishing: 'Scallions, cilantro, and freshly cracked black pepper.',
      plating: 'Deep ceramic pho bowls with porcelain soup spoons and chopsticks.',
      temperature: 'Scorching hot.',
      accompaniments: 'Fresh herb platter (Thai basil, ngò gai culantro, bean sprouts, lime wedges, sliced bird\'s eye chilies), sriracha, and hoisin sauce.'
    }
  },

  // 12. BANH MI (Saigon Crispy Baguette)
  {
    id: 'banh-mi',
    name: 'Saigon Pork Pâté Bánh Mì (Bánh Mì Thịt Nguội)',
    cuisine: 'Thai / SE Asian',
    region: 'Vietnam (Saigon / Southern)',
    servings: 4,
    prepTime: 25,
    cookTime: 10,
    difficulty: 'Medium',
    overview: {
      summary: 'The world\'s ultimate sandwich triumph: a feather-light, shatteringly crisp Vietnamese rice-and-wheat baguette sliced open and smeared with rich French pork liver pâté and creamy egg mayonnaise, stuffed with slices of Vietnamese ham (Chả Lụa) and seasoned roast pork (Xá Xíu), layered with crisp sweet-tart pickled daikon and carrot (Đồ Chua), crunchy cucumber spears, fresh cilantro, fiery bird\'s eye chilies, and a savory dash of Maggi seasoning.',
      appearance: 'A golden-blistered baguette sliced open to showcase distinct layers: rich mahogany pâté, pink sliced meats, crunchy ivory and orange pickled ribbons, green cucumber spears, and vibrant cilantro bouquets.',
      texture: 'The miracle of Vietnamese baguettes: an impossibly thin, shatteringly crisp, paper-like crust ("Ròn rụm") with an airy, cloud-like crumb, giving way to creamy rich pâté, juicy meats, crunchy sweet-tart pickles, and fiery chilies.',
      flavor: 'Dazzling French-Vietnamese harmony: rich liver umami, creamy egg mayo, sweet savory pork, tangy pickled acidity, fresh cooling cucumber, and pungent chili kick.',
      restingTimeMinutes: 1
    },
    equipment: [
      { name: 'Toaster oven or conventional oven (200°C / 400°F)', purpose: 'For re-crisping baguettes to paper-thin shatteringly crisp perfection.' },
      { name: 'Serrated bread knife', purpose: 'Slices through the brittle crust cleanly without crushing the airy baguette.' }
    ],
    beforeYouStart: [
      { task: 'Prepare Đồ Chua (pickles): julienne 1 cup daikon and 1 cup carrot; massage with 1 tsp salt, drain, and pickle in 1/2 cup rice vinegar, 1/2 cup water, and 3 tbsp sugar for 30 minutes.', durationMinutes: 30 },
      { task: 'Thinly slice 200g Chả Lụa (Vietnamese steamed pork roll) and 200g cooked roast pork (Thịt Nguội).', durationMinutes: 5 },
      { task: 'Cut 1 English cucumber into 4 long lengthwise spears; slice 2 jalapeño or bird\'s eye chilies.', durationMinutes: 3 }
    ],
    ingredientPrepGuide: [
      { item: 'Vietnamese Baguette Structure', technique: 'Must use authentic Vietnamese baguettes (made with wheat and rice flour). French baguettes are too dense and chewy; Vietnamese baguettes have a paper-thin, glass-brittle crust that shatters on contact and an interior crumb light as cotton candy. Reheat in a 200°C oven for 3 minutes before assembling.' },
      { item: 'Pâté & Mayo Foundation', technique: 'Generously spread liver pâté on one inner wall and homemade egg yolk mayonnaise (bơ) on the other. This fat layer acts as a moisture barrier, keeping the pickles from making the crispy crust soggy while providing luxurious richness.' }
    ],
    essentialIngredients: [
      { name: 'Vietnamese baguettes (Bánh Mì)', prep: 'toasted 3 mins in oven until shatteringly crisp', amount: '4 baguettes', metric: '4 pieces', imperial: '4 pieces', common: '4 baguettes' },
      { name: 'Pork liver pâté (Pâté Gan)', prep: 'smooth, rich spreadable pâté', amount: '120g', metric: '120g', imperial: '4.2 oz', common: '1/2 cup' },
      { name: 'Vietnamese egg mayonnaise (Bơ)', prep: 'rich egg-yolk and oil emulsion', amount: '4 tbsp', metric: '60g', imperial: '2.1 oz', common: '4 tbsp' },
      { name: 'Chả Lụa (Vietnamese steamed pork sausage roll)', prep: 'thinly sliced into half-moons', amount: '200g', metric: '200g', imperial: '7 oz', common: '200g' },
      { name: 'Thịt Nguội or Xá Xíu (Vietnamese cured/roast pork)', prep: 'thinly sliced', amount: '200g', metric: '200g', imperial: '7 oz', common: '200g' },
      { name: 'Đồ Chua (pickled daikon and carrot ribbons)', prep: 'drained thoroughly', amount: '1.5 cups', metric: '200g', imperial: '7 oz', common: '1.5 cups' },
      { name: 'English cucumber', prep: 'cut into long thin lengthwise spears', amount: '1 cucumber', metric: '150g', imperial: '5.3 oz', common: '4 long spears' },
      { name: 'Fresh cilantro (coriander) sprigs', prep: 'long stems with leaves', amount: '1 cup', metric: '40g', imperial: '1.4 oz', common: '1 cup' },
      { name: 'Fresh red or green chilies (Jalapeño or Bird\'s Eye)', prep: 'sliced into thin rings', amount: '2 chilies', metric: '20g', imperial: '0.7 oz', common: '2 chilies' },
      { name: 'Maggi Seasoning sauce or light soy sauce', prep: 'a few drops for umami finish', amount: '2 tsp', metric: '10ml', imperial: '0.35 fl oz', common: '2 tsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'TOAST BAGUETTES TO SHATTERING CRISPNESS',
        whatYouNeed: ['4 Vietnamese baguettes', 'Oven preheated to 200°C (400°F)'],
        description: 'Mist baguettes lightly with a spray of water. Place directly on the middle oven rack at 200°C (400°F) for 3 to 4 minutes. Remove and let cool for 1 minute. Squeezing the baguette should produce an audible, glass-shattering crackle.',
        howToDoIt: 'Misting with water creates steam that crisps the paper-thin crust into brittle shards while keeping the interior crumb pillowy soft.',
        heat: '200°C (400°F) for 3-4 mins',
        duration: 5,
        visualCues: 'Crust turns blistered, golden-amber, and paper-thin.',
        hear: 'Loud, audible crackling when gently pressed.',
        smell: 'Toasted bakery bread aroma.',
        textureCheck: 'Shatteringly crisp exterior, cloud-like interior.',
        whatShouldThisLookLike: 'Blistered, golden, ultra-crisp baguettes.',
        tip: 'Never skip toasting — a limp, soft baguette completely ruins the Bánh Mì experience.',
        commonMistake: 'Using dense French baguettes that cut the roof of your mouth; use light Vietnamese baguettes.',
        moveOnWhen: 'Baguettes are crackling crisp.',
        quickInstructions: 'Mist baguettes with water; toast at 200°C for 3-4 mins until shatteringly crisp.'
      },
      {
        step: 2,
        title: 'SLICE & SMEAR PÂTÉ AND MAYONNAISE',
        whatYouNeed: ['Serrated bread knife', 'Toasted baguettes', 'Pâté', 'Vietnamese egg mayo'],
        description: 'Slice the baguette horizontally along one side, leaving the back hinge connected. Spread 2 tablespoons of rich pork liver pâté generously along the entire bottom half. Spread 1 tablespoon of rich egg mayo generously along the top inside flap.',
        howToDoIt: 'The fat from the pâté and mayo coats the bread, creating an impermeable flavor barrier that prevents pickle juices from wetting the crust.',
        heat: 'No Heat',
        duration: 3,
        visualCues: 'Bottom half lined in smooth, dark savory pâté; top half glazed in creamy golden mayonnaise.',
        smell: 'Savory liver pâté, butter, and warm bread.',
        textureCheck: 'Rich, creamy spread coating crisp bread.',
        whatShouldThisLookLike: 'Baguette lined with pâté and mayo.',
        tip: 'Spread edge-to-edge so every bite from the first to the last has rich pâté.',
        commonMistake: 'Skimping on pâté — pâté is the signature flavor backbone of authentic Saigon Bánh Mì.',
        moveOnWhen: 'All 4 baguettes are smeared with pâté and mayo.',
        quickInstructions: 'Slice baguettes open; spread bottom with pâté and top with egg mayo.'
      },
      {
        step: 3,
        title: 'LAYER COLD CUTS & CUCUMBER SPEARS',
        whatYouNeed: ['Sliced Chả Lụa pork roll', 'Sliced roast pork (thịt nguội)', 'Cucumber spears'],
        description: 'Layer overlapping slices of Chả Lụa (pork sausage) and roast pork along the bottom half over the pâté. Lay a long, crisp cucumber spear directly beside the meats along the spine of the baguette.',
        howToDoIt: 'Laying the long cucumber spear against the back spine acts as an architectural wall, holding the meats and pickles in place.',
        heat: 'No Heat',
        duration: 3,
        visualCues: 'Abundant layer of pink and white cold cuts framed by a long green cucumber spear.',
        textureCheck: 'Tender meats and crisp crunchy cucumber.',
        whatShouldThisLookLike: 'Tightly packed meats and cucumber inside baguette.',
        tip: 'Thinly sliced cold cuts fold over each other, creating airy, tender bite texture.',
        commonMistake: 'Using thick, rubbery slabs of meat that are hard to bite through cleanly.',
        moveOnWhen: 'Meats and cucumber are layered.',
        quickInstructions: 'Layer sliced pork meats over pâté; place cucumber spear along the spine.'
      },
      {
        step: 4,
        title: 'PACK PICKLES, HERBS, CHILIES & MAGGI DROPS',
        whatYouNeed: ['Drained Đồ Chua (pickles)', 'Cilantro sprigs', 'Chili slices', 'Maggi Seasoning'],
        description: 'Tightly pack a generous handful of drained pickled daikon and carrots (Đồ Chua) on top of the meats. Stuff long sprigs of fresh cilantro and slices of hot chilies into the opening. Drizzle 4–5 drops of Maggi Seasoning sauce along the length of the fillings. Press the sandwich closed.',
        howToDoIt: 'Draining the pickles thoroughly ensures explosive sweet-tart crunch without dripping soggy brine onto the toasted bread.',
        heat: 'No Heat',
        duration: 2,
        visualCues: 'Vibrant, colorful sandwich bursting with orange carrots, white daikon, green cilantro, and red chilies.',
        smell: 'Sweet-tangy vinegar, fragrant cilantro, savory Maggi, and crusty bread.',
        textureCheck: 'Shatteringly crisp bread, crunchy pickles, tender meats.',
        whatShouldThisLookLike: 'The ultimate street-style Saigon Bánh Mì.',
        tip: 'Leave cilantro stems long — the stems have the sweetest, crispest herbal crunch!',
        commonMistake: 'Adding wet, dripping pickles, which instantly softens the toasted bread.',
        moveOnWhen: 'Sandwich is packed, seasoned, and pressed closed.',
        quickInstructions: 'Pack drained pickles, cilantro, and chilies; add drops of Maggi sauce; press closed.'
      }
    ],
    commonMistakes: [
      { mistake: 'Bánh Mì was soggy and chewy.', remedy: 'Baguette wasn\'t toasted or pickles weren\'t drained. Toast baguette until shatteringly crisp and drain pickles thoroughly.' },
      { mistake: 'Sandwich was dry and choking.', remedy: 'Not enough pâté or mayo was used. Spread generously from edge to edge.' }
    ],
    troubleshooting: [
      {
        problem: 'Crust shatters into a million crumbs everywhere',
        whatHappened: 'This is actually the hallmark of a PERFECT Vietnamese baguette!',
        whyItHappened: 'Ultra-thin, brittle crust.',
        whatToDoNow: 'Embrace it! Authentic Saigon street vendors always serve Bánh Mì wrapped in paper to catch the delicious crumbs.',
        howToPrevent: 'Wrap the bottom half in parchment paper while eating.'
      }
    ],
    substitutions: [
      { original: 'Chả Lụa and Thịt Nguội', substitute: 'Grilled lemongrass pork (Bánh Mì Thịt Nướng), fried eggs (Bánh Mì Ốp La), or lemongrass tofu', notes: 'Bánh Mì Ốp La (Fried Egg Bánh Mì) is the #1 Vietnamese breakfast favorite.' }
    ],
    safetyNotes: [
      'Pâté and meats must be kept refrigerated until assembly.'
    ],
    servingGuide: {
      restingTime: 'Eat immediately while bread is hot and crackling.',
      garnishing: 'Fresh cilantro sprigs and sliced bird\'s eye chilies.',
      plating: 'Wrapped in parchment paper or served on a wooden board sliced diagonally in half.',
      temperature: 'Warm crackling bread with cool, refreshing fillings.',
      accompaniments: 'Iced Vietnamese coffee with condensed milk (Cà Phê Sữa Đá).'
    }
  },

  // 13. SEA SPRING ROLLS (Vietnamese Fresh Summer Rolls / Gỏi Cuốn)
  {
    id: 'sea-spring-rolls',
    name: 'Vietnamese Fresh Summer Rolls (Gỏi Cuốn)',
    cuisine: 'Thai / SE Asian',
    region: 'Vietnam (Southern / Saigon)',
    servings: 4,
    prepTime: 35,
    cookTime: 10,
    difficulty: 'Medium',
    overview: {
      summary: 'Vietnam\'s most refreshing culinary jewel: translucent, gossamer-thin rice paper sheets (Bánh Tráng) wrapped snugly around sweet poached tiger prawns halved to show their coral exterior, tender sliced pork belly, soft rice vermicelli noodles, fresh herbs (mint, Thai basil, cilantro), and garlic chives, dipped in a rich, warm hoisin-peanut sauce crowned with crushed peanuts and sambal.',
      appearance: 'Pristine, crystal-clear translucent rolls displaying vibrant coral-pink prawns and emerald herbs through the glassy skin, with green chive stalks extending from the ends.',
      texture: 'Delicate chew from the soft rice paper giving way to crunchy fresh herbs, bouncy rice noodles, tender juicy pork, and crisp snappy prawns.',
      flavor: 'Exceptionally clean, fresh, and refreshing: sweet prawns, fragrant herbal perfume of mint and basil, balanced by the rich, savory, nutty hoisin-peanut dipping sauce.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Wide shallow dish or pie pan with warm water', purpose: 'For dipping and hydrating brittle rice paper sheets evenly in 3 seconds.' },
      { name: 'Clean wooden cutting board or damp kitchen towel', purpose: 'Provides the ideal non-stick surface for rolling delicate rice paper.' },
      { name: 'Small saucepan', purpose: 'For warming the hoisin-peanut dipping sauce.' }
    ],
    beforeYouStart: [
      { task: 'Simmer 200g pork belly in water with 1 shallot and 1 tsp salt for 20 mins; cool in ice water and slice paper-thin.', durationMinutes: 25 },
      { task: 'Poach 12 large prawns in simmering water for 90 seconds; shock in ice water, peel, and slice in half lengthwise through the center.', durationMinutes: 10 },
      { task: 'Boil 100g thin rice vermicelli noodles (Bún) for 3 mins; rinse cold and drain dry.', durationMinutes: 5 },
      { task: 'Wash and shake dry fresh mint, Thai basil, and 8 whole Chinese garlic chive stalks (hẹ).', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'Rice Paper Dipping Technique', technique: 'Do NOT soak rice paper! Dip the dry sheet into warm water for JUST 2 TO 3 SECONDS, turning it once, then lay it immediately on your board while it still feels slightly stiff. It will soften into perfect pliable silk over the next 30 seconds as you add fillings. Soaking too long turns it into fragile, torn mush.' },
      { item: 'Prawn Halving & Placement', technique: 'Slice poached prawns in half lengthwise so you have 2 flat-backed halves with bright coral skin. Place the prawns cut-side UP (coral skin facing DOWN against the board) during the final fold so the gorgeous coral shrimp shows brightly through the translucent wrapper.' }
    ],
    essentialIngredients: [
      { name: 'Round Vietnamese rice paper wrappers (Bánh Tráng, 22cm)', prep: 'dry sheets', amount: '8 sheets', metric: '8 sheets', imperial: '8 sheets', common: '8 sheets' },
      { name: 'Tiger prawns', prep: 'poached, peeled & halved lengthwise', amount: '12 prawns', metric: '24 halves', imperial: '24 halves', common: '24 halves' },
      { name: 'Pork belly or pork shoulder', prep: 'simmered, chilled & sliced paper-thin', amount: '200g', metric: '200g', imperial: '7 oz', common: '200g' },
      { name: 'Cooked thin rice vermicelli (Bún)', prep: 'cold, drained dry', amount: '200g', metric: '200g', imperial: '7 oz', common: '2 cups' },
      { name: 'Fresh mint leaves & Thai basil', prep: 'stems removed', amount: '1 cup', metric: '40g', imperial: '1.4 oz', common: '1 cup' },
      { name: 'Chinese garlic chives (Hẹ)', prep: 'stems trimmed to 12cm lengths', amount: '8 stalks', metric: '30g', imperial: '1 oz', common: '8 stalks' },
      { name: 'Hoisin sauce', prep: 'dipping sauce base', amount: '1/2 cup', metric: '120ml', imperial: '4 fl oz', common: '1/2 cup' },
      { name: 'Creamy peanut butter', prep: 'for dipping sauce', amount: '3 tbsp', metric: '50g', imperial: '1.8 oz', common: '3 tbsp' },
      { name: 'Warm water or coconut water', prep: 'to thin dipping sauce', amount: '1/3 cup', metric: '80ml', imperial: '2.7 fl oz', common: '1/3 cup' },
      { name: 'Roasted peanuts', prep: 'crushed for dipping sauce garnish', amount: '2 tbsp', metric: '20g', imperial: '0.7 oz', common: '2 tbsp' },
      { name: 'Sambal oelek chili paste', prep: 'for dipping sauce', amount: '1 tbsp', metric: '15g', imperial: '0.5 oz', common: '1 tbsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'HYDRATE RICE PAPER (3 SECONDS ONLY)',
        whatYouNeed: ['Shallow dish of warm water', '1 sheet rice paper (bánh tráng)', 'Clean wooden board'],
        description: 'Take one dry sheet of rice paper. Dip it into the warm water, rotating it for 2 to 3 seconds so all surfaces are wet. Immediately lift it out, let excess water drip off for 2 seconds, and lay it flat on the clean board. It will still feel slightly rigid — it will become soft and pliable within 30 seconds.',
        howToDoIt: 'Quick dipping hydrates the surface without over-saturating the starch, preventing sticky tearing.',
        heat: 'Warm water (approx 40°C / 105°F)',
        duration: 1,
        visualCues: 'Wetted sheet lays flat on board, slowly softening from rigid plastic into supple, glassy silk.',
        textureCheck: 'Supple, stretchy, non-sticky.',
        whatShouldThisLookLike: 'A moist circular disc of rice paper resting on cutting board.',
        tip: 'Work on a damp wooden board or silicone mat — rice paper sticks stubbornly to dry laminate.',
        commonMistake: 'Soaking for 30 seconds in water — wrapper turns into a slimy torn mess that cannot be rolled.',
        moveOnWhen: 'Wrapper is pliable and flat.',
        quickInstructions: 'Dip rice paper in warm water 2-3 seconds only; lay flat on board to soften.'
      },
      {
        step: 2,
        title: 'LAYER HERBS, NOODLES & PORK ON LOWER THIRD',
        whatYouNeed: ['Mint & basil leaves', 'Small bundle of vermicelli', '2-3 slices thin pork belly'],
        description: 'Across the lower third of the rice paper, lay down a small bed of fresh mint and Thai basil leaves. Top with a neat bundle of cold rice vermicelli noodles. Lay 2 to 3 slices of paper-thin pork belly across the noodles.',
        howToDoIt: 'Layering greens and noodles on the bottom provides structural bulk to roll against.',
        heat: 'No Heat',
        duration: 1,
        visualCues: 'A neat horizontal cylinder of greens, white noodles, and pink pork on the lower third.',
        textureCheck: 'Compact cylinder.',
        whatShouldThisLookLike: 'Neat bed of fillings on the lower third of the rice paper.',
        tip: 'Do not overfill — use a modest amount so the roll is sleek and easy to bite.',
        commonMistake: 'Overstuffing with a giant mountain of noodles, tearing the delicate paper.',
        moveOnWhen: 'Noodles, herbs, and pork are laid on lower third.',
        quickInstructions: 'Place herbs, small handful of noodles, and pork slices on lower third of wrapper.'
      },
      {
        step: 3,
        title: 'THE FIRST TUCK & PRAWN ARRANGEMENT',
        whatYouNeed: ['3 halved prawns (coral side DOWN)'],
        description: 'Lift the bottom edge of the rice paper up and tightly over the noodles and pork, tucking it under to form a snug cylinder. Now look at the exposed upper half of the rice paper: arrange 3 prawn halves in a neat horizontal line, coral-pink skin facing DOWN against the board, cut side facing UP. Fold the left and right sides of the rice paper inward over the roll.',
        howToDoIt: 'Placing prawns coral-side down against the unrolled top paper ensures they display their vivid pink color through the translucent wrapper once finished.',
        heat: 'No Heat',
        duration: 2,
        visualCues: 'Prawns lay in a row on the clear paper; sides folded in like a neat envelope.',
        textureCheck: 'Tight, snug cylinder.',
        whatShouldThisLookLike: 'Tucked cylinder with prawns lined up ahead on the flat paper.',
        tip: 'Keep the roll taut and snug without stretching the paper to tearing point.',
        commonMistake: 'Rolling prawns inside the noodles — they become hidden and invisible.',
        moveOnWhen: 'Prawns are arranged and sides folded in.',
        quickInstructions: 'Roll bottom edge over noodles, arrange 3 prawn halves coral-down ahead, fold left and right sides in.'
      },
      {
        step: 4,
        title: 'INSERT CHIVE STALK & ROLL TIGHT TO SEAL',
        whatYouNeed: ['1 Chinese garlic chive stalk (hẹ)'],
        description: 'Place 1 garlic chive stalk across the prawns, allowing 3cm of the green stalk to extend out from the side of the roll. Roll forward tightly over the prawns and chive until fully sealed. The sticky rice paper seals itself upon contact. Repeat for all 8 rolls.',
        howToDoIt: 'The extending green chive antenna is the traditional hallmark of authentic Saigon Gỏi Cuốn.',
        heat: 'No Heat',
        duration: 2,
        visualCues: 'A sleek, tight, crystal-clear cylinder with vibrant pink prawns gleaming through, and a green chive stalk protruding elegantly.',
        textureCheck: 'Firm, taut, non-sticky roll.',
        whatShouldThisLookLike: 'Pristine, picture-perfect Vietnamese summer roll.',
        tip: 'Do not let finished rolls touch each other on the platter or their delicate skins will stick and tear.',
        commonMistake: 'Rolling too loose, causing ingredients to tumble out when dipped.',
        moveOnWhen: 'All 8 rolls are wrapped and resting separately.',
        quickInstructions: 'Place chive stalk across prawns; roll forward tightly to seal.'
      },
      {
        step: 5,
        title: 'SIMMER HOISIN-PEANUT SAUCE & SERVE',
        whatYouNeed: ['1/2 cup hoisin sauce', '3 tbsp peanut butter', '1/3 cup warm water', 'Crushed peanuts', 'Sambal'],
        description: 'In a small saucepan over medium-low heat, whisk hoisin sauce, peanut butter, and warm water for 2 minutes until smooth, glossy, and warm. Pour into individual dipping bowls. Top with a spoonful of crushed roasted peanuts and a dab of spicy sambal. Serve alongside the fresh summer rolls.',
        howToDoIt: 'Warm hoisin-peanut sauce provides rich sweet-savory nutty contrast to the cool, fresh, herbal rolls.',
        heat: 'Low Heat 2 mins',
        duration: 3,
        visualCues: 'Glistening translucent rolls beside warm, glossy brown peanut sauce studded with crushed peanuts.',
        smell: 'Toasted peanuts, sweet hoisin, and fresh mint-basil perfume.',
        textureCheck: 'Chewy rice paper snap, crisp herbs, snappy prawn, rich creamy sauce.',
        whatShouldThisLookLike: 'Magnificent banquet presentation of Gỏi Cuốn.',
        tip: 'Can also be served with classic Vietnamese Nước Chấm (lime-fish sauce-garlic dip).',
        commonMistake: 'Making rolls hours in advance — rice paper hardens and turns leathery if refrigerated.',
        moveOnWhen: 'Sauce is warm and rolls are served.',
        quickInstructions: 'Whisk hoisin, peanut butter, and water over low heat 2 mins; serve warm with rolls.'
      }
    ],
    commonMistakes: [
      { mistake: 'Rice paper tore into holes while wrapping.', remedy: 'Wrapper was soaked too long in water or was pulled too hard. Dip for 2-3 seconds only.' },
      { mistake: 'Summer rolls turned hard and rubbery.', remedy: 'Rolls were refrigerated. Always serve freshly made at room temperature within 2 hours.' }
    ],
    troubleshooting: [
      {
        problem: 'Finished rolls stick to each other and tear',
        whatHappened: 'Rice paper sticks instantly to other wet rice paper.',
        whyItHappened: 'Glutinous starch contact.',
        whatToDoNow: 'Keep rolls separated with small lettuce leaves or brush very lightly with a drop of sesame oil.',
        howToPrevent: 'Arrange rolls on platter with 1cm space between them.'
      }
    ],
    substitutions: [
      { original: 'Pork belly', substitute: 'Extra prawns, sliced fried firm tofu, or avocado spears', notes: 'Tofu-Avocado Summer Rolls are an insanely delicious vegetarian variation.' }
    ],
    safetyNotes: [
      'Prawns and pork must be fully cooked and chilled properly before rolling.'
    ],
    servingGuide: {
      restingTime: 'Serve immediately at room temperature.',
      garnishing: 'Crushed peanuts and sambal on the warm dipping sauce.',
      plating: 'Arranged on a banana leaf on a ceramic platter.',
      temperature: 'Cool room temperature rolls with warm dipping sauce.',
      accompaniments: 'Warm hoisin-peanut sauce and Vietnamese iced coffee.'
    }
  },

  // 14. ADOBO (Filipino Chicken & Pork Adobo)
  {
    id: 'adobo',
    name: 'Classic Filipino Chicken & Pork Adobo (Adobong Baboy at Manok)',
    cuisine: 'Thai / SE Asian',
    region: 'Philippines (National)',
    servings: 6,
    prepTime: 20,
    cookTime: 45,
    difficulty: 'Easy',
    overview: {
      summary: 'The beloved national dish of the Philippines: succulent bone-in chicken thighs and pork belly braised in cane vinegar, soy sauce, whole heads of crushed garlic, black peppercorns, and bay leaves, simmered until fork-tender, then pan-seared to blistered caramelized perfection and finished with the reduced, glossy, savory-tangy garlic glaze over mounds of garlic fried rice (Sinangag).',
      appearance: 'Deep mahogany, caramelized, glistening chunks of tender pork belly and seared chicken pieces swimming in a rich, reduced garlic-soy-vinegar glaze, studded with whole peppercorns and bay leaves.',
      texture: 'Fork-tender pork belly with melt-in-the-mouth fat, juicy succulent chicken, and crisp blistered caramelized skin.',
      flavor: 'Masterful Philippine balance: bold cane vinegar acidity mellowed by rich savory soy sauce, intoxicating roasted garlic, warming black pepper, and fragrant bay leaves.',
      restingTimeMinutes: 5
    },
    equipment: [
      { name: 'Heavy Dutch oven or wide enamelled braiser (4–5 qt)', purpose: 'Holds heat for braising and allows reduction and searing in one pot.' },
      { name: 'Wooden spoon', purpose: 'For stirring and scraping caramelized garlic fond.' }
    ],
    beforeYouStart: [
      { task: 'Cut 500g bone-in chicken thighs in half; cut 500g pork belly into 4cm cubes.', durationMinutes: 8 },
      { task: 'Crush 2 whole heads of fresh garlic (approx 20 cloves) with the flat of a knife; peel (leave rough).', durationMinutes: 5 },
      { task: 'Measure 120ml cane vinegar (or white vinegar), 120ml soy sauce, 1 tbsp whole black peppercorns, and 5 dried bay leaves.', durationMinutes: 3 }
    ],
    ingredientPrepGuide: [
      { item: 'Cane Vinegar Boiling Rule', technique: 'When adding vinegar to the pot, bring to a boil and DO NOT STIR for the first 3 minutes! Allowing vinegar to boil undisturbed cooks off harsh raw acetic fumes, mellowing the vinegar into a round, pleasant acidity.' },
      { item: 'The Searing Finish', technique: 'Authentic Adobo is a two-step process: braise until fork-tender, then sear the meat in its rendered fat until caramelized and crispy, then pour the reduced sauce over top.' }
    ],
    essentialIngredients: [
      { name: 'Bone-in skin-on chicken thighs', prep: 'halved', amount: '500g', metric: '500g', imperial: '1.1 lbs', common: '4 thighs' },
      { name: 'Pork belly (Liempo)', prep: 'cut into 4cm large cubes', amount: '500g', metric: '500g', imperial: '1.1 lbs', common: '500g' },
      { name: 'Filipino cane vinegar (Sukang Iloco) or distilled white vinegar', prep: 'braising acid', amount: '120ml', metric: '120ml', imperial: '4 fl oz', common: '1/2 cup' },
      { name: 'Soy sauce (Silver Swan or Datu Puti)', prep: 'savory foundation', amount: '120ml', metric: '120ml', imperial: '4 fl oz', common: '1/2 cup' },
      { name: 'Fresh garlic cloves', prep: 'whole heads, smashed and peeled', amount: '20 cloves', metric: '80g', imperial: '2.8 oz', common: '2 heads' },
      { name: 'Water or chicken broth', prep: 'braising liquid', amount: '250ml', metric: '250ml', imperial: '8.5 fl oz', common: '1 cup' },
      { name: 'Whole black peppercorns (Pamintang buo)', prep: 'lightly cracked with mortar', amount: '1.5 tbsp', metric: '15g', imperial: '0.5 oz', common: '1.5 tbsp' },
      { name: 'Dried bay leaves (Dahon ng laurel)', prep: 'whole leaves', amount: '5 leaves', metric: '5 leaves', imperial: '5 leaves', common: '5 leaves' },
      { name: 'Brown sugar', prep: 'balances vinegar acidity', amount: '1 tbsp', metric: '15g', imperial: '0.5 oz', common: '1 tbsp' },
      { name: 'Neutral cooking oil', prep: 'for searing', amount: '1 tbsp', metric: '15ml', imperial: '0.5 fl oz', common: '1 tbsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'COMBINE IN POT & SIMMER VINEGAR UNDISTURBED',
        whatYouNeed: ['Dutch oven', 'Chicken & pork pieces', 'Vinegar', 'Soy sauce', '20 smashed garlic cloves', 'Peppercorns', 'Bay leaves', 'Sugar', '250ml water'],
        description: 'Place chicken thighs, pork belly cubes, smashed garlic, peppercorns, bay leaves, soy sauce, water, and brown sugar into the Dutch oven. Pour cane vinegar over the top. Bring to a rolling boil over medium-high heat. LEAVE COMPLETELY UNDISTURBED FOR 3 MINUTES WITHOUT STIRRING.',
        howToDoIt: 'Allowing vinegar to boil undisturbed without stirring vaporizes the raw, pungent acetic acid fumes, creating a mellow, rounded braising liquid.',
        heat: 'Medium-High to boil',
        duration: 5,
        visualCues: 'Vigorous boiling bubbles; vinegar steam rises; meat turns dark amber from soy sauce.',
        hear: 'Active, roaring boil.',
        smell: 'Sharp vinegar steam mellowing into sweet, garlicky, savory aroma.',
        textureCheck: 'Meat submerged in bubbling liquid.',
        whatShouldThisLookLike: 'Meat and dozens of garlic cloves boiling in dark soy-vinegar broth.',
        tip: 'Resist the urge to stir during the first 3 minutes!',
        commonMistake: 'Stirring immediately — keeps raw vinegar acidity locked into the sauce.',
        moveOnWhen: '3 minutes of undisturbed boiling are complete.',
        quickInstructions: 'Combine meats, garlic, soy, vinegar, water, spices; boil 3 mins undisturbed without stirring.'
      },
      {
        step: 2,
        title: 'COVER & BRAISE UNTIL FORK-TENDER (35 MINUTES)',
        whatYouNeed: ['Pot lid'],
        description: 'Stir gently to combine. Reduce heat to low. Cover pot with lid. Simmer gently for 35 minutes, stirring once halfway through, until the pork belly is meltingly tender and chicken meat pulls easily from the bone.',
        howToDoIt: 'Low covered simmering breaks down pork fat and allows garlic and bay leaf oils to permeate deep into the meat fibers.',
        heat: 'Low Heat',
        duration: 35,
        visualCues: 'Gentle simmering bubbles beneath the lid; meat is tender and deeply browned.',
        smell: 'Intensely comforting roasted garlic, bay leaf, and savory adobo sauce.',
        textureCheck: 'Pork belly yields easily to a fork; garlic cloves are buttery soft.',
        whatShouldThisLookLike: 'Tender mahogany meats simmering in fragrant braising juices.',
        tip: 'Test pork: a fork should slide into the pork belly with zero resistance.',
        commonMistake: 'Rushing on high heat, which boils the chicken tough and dry.',
        moveOnWhen: 'Meat is fork-tender after 35 minutes.',
        quickInstructions: 'Cover and simmer on low for 35 mins until pork and chicken are fork-tender.'
      },
      {
        step: 3,
        title: 'SEPARATE MEAT & REDUCE ADOBO SAUCE TO GLAZE',
        whatYouNeed: ['Tongs', 'Plate'],
        description: 'Using tongs, transfer the chicken and pork pieces to a plate. Leave all liquid and cooked garlic cloves in the Dutch oven. Crank heat to medium-high. Boil the sauce uncovered for 6 to 8 minutes, stirring occasionally, until the liquid reduces by half into a thick, syrupy, glossy dark mahogany glaze.',
        howToDoIt: 'Reducing concentrates the garlic, vinegar, and collagen into a clinging, velvety lacquer.',
        heat: 'Medium-High Heat',
        duration: 8,
        visualCues: 'Sauce bubbles heavily, thickening into a glossy, dark mahogany glaze that coats the back of a spoon.',
        smell: 'Caramelized garlic and sweet-sour glaze.',
        textureCheck: 'Syrupy, spoon-coating sauce.',
        whatShouldThisLookLike: 'Thick, glossy, dark adobo sauce coating the pot.',
        tip: 'Mash a few of the soft garlic cloves into the sauce with your spoon to thicken it naturally.',
        commonMistake: 'Leaving the sauce thin and watery — authentic adobo glaze must be rich and clinging.',
        moveOnWhen: 'Sauce is reduced to a syrupy glaze.',
        quickInstructions: 'Remove meat; boil sauce uncovered 6-8 mins until reduced into a thick syrupy glaze.'
      },
      {
        step: 4,
        title: 'SEAR MEAT UNTIL BLISTERED & CARAMELIZED',
        whatYouNeed: ['Skillet or Dutch oven', '1 tbsp oil', 'Braised meats', 'Tongs'],
        description: 'Heat 1 tbsp oil in a skillet (or push reduced sauce aside in the Dutch oven) over high heat. Add the braised chicken and pork pieces. Sear for 2 minutes per side until the skin blisters and the edges turn dark mahogany and caramelized with crispy charred bits.',
        howToDoIt: 'Searing the braised meat caramelizes the surface sugars, adding a sensational crispy-crusted texture that elevates home adobo to restaurant perfection.',
        heat: 'High Heat',
        duration: 4,
        visualCues: 'Chicken skin blisters and turns crackling golden-mahogany; pork edges turn dark and crisp.',
        hear: 'Intense crackling and frying sizzle.',
        smell: 'Caramelized soy sauce and roasted pork fat.',
        textureCheck: 'Crispy caramelized crust enclosing fork-tender meat.',
        whatShouldThisLookLike: 'Crispy, deeply browned, caramelized adobo meats.',
        tip: 'Watch closely — sugary soy-coated meats brown very fast.',
        commonMistake: 'Skipping the sear — leaving meat pale and soggy.',
        moveOnWhen: 'Meats are blistered and caramelized.',
        quickInstructions: 'Sear braised meats in hot oil 2 mins per side until blistered and caramelized.'
      },
      {
        step: 5,
        title: 'RECOMBINE & SPOON OVER SINANGAG GARLIC RICE',
        whatYouNeed: ['Caramelized meats', 'Reduced adobo glaze', 'Serving platter', 'Garlic fried rice'],
        description: 'Pour the reduced, glossy adobo glaze and soft caramelized garlic cloves all over the crispy seared meats. Toss gently to coat every piece in the dark lacquer. Transfer to a warm serving dish. Serve hot alongside mounds of Filipino garlic fried rice (Sinangag).',
        howToDoIt: 'The thick, savory-tangy glaze drips into the garlic rice, creating the ultimate comfort food bite.',
        heat: 'Off Heat',
        duration: 2,
        visualCues: 'Deep mahogany, mirror-glazed meats resting in savory sauce with soft roasted garlic cloves.',
        smell: 'Intoxicating roasted garlic, bay leaf, and sweet-sour glaze.',
        textureCheck: 'Crisp exterior, meltingly tender meat, rich glaze.',
        whatShouldThisLookLike: 'Classic Filipino Chicken & Pork Adobo.',
        tip: 'Spoon extra adobo sauce directly over the garlic rice — it is universally considered the best part of the meal!',
        commonMistake: 'Discarding the cooked garlic cloves — they are sweet, mild, and delicious spread over rice.',
        moveOnWhen: 'Glazed and served.',
        quickInstructions: 'Pour reduced glaze over seared meats; toss to coat; serve hot with garlic rice.'
      }
    ],
    commonMistakes: [
      { mistake: 'Adobo tasted overwhelmingly sour.', remedy: 'Vinegar was stirred immediately upon boiling, or too much vinegar was used. Let vinegar boil 3 mins undisturbed.' },
      { mistake: 'Meat was tough and chewy.', remedy: 'Pork belly wasn\'t braised long enough. Braise for at least 35-40 mins until fork-tender.' }
    ],
    troubleshooting: [
      {
        problem: 'Sauce is too salty',
        whatHappened: 'Soy sauce reduced too aggressively.',
        whyItHappened: 'High sodium concentration.',
        whatToDoNow: 'Whisk in 1/4 cup water and 1 tsp brown sugar; simmer 1 minute.',
        howToPrevent: 'Measure soy sauce accurately.'
      }
    ],
    substitutions: [
      { original: 'Filipino cane vinegar (Sukang Iloco)', substitute: 'Distilled white vinegar or apple cider vinegar', notes: 'Apple cider vinegar adds pleasant gentle fruitiness.' },
      { original: 'Chicken and pork combination (CP Adobo)', substitute: 'All chicken thighs or all pork belly', notes: 'Pork Adobo or Chicken Adobo are equally revered individually.' }
    ],
    safetyNotes: [
      'Pork and chicken must reach minimum 74°C internal temperature.'
    ],
    servingGuide: {
      restingTime: 'Rest 5 minutes before serving.',
      garnishing: 'Fried garlic chips and whole stewed garlic cloves.',
      plating: 'Deep ceramic platter or wide shallow bowl.',
      temperature: 'Piping hot and saucy.',
      accompaniments: 'Garlic fried rice (Sinangag), sliced fresh tomatoes, and cold San Miguel beer.'
    }
  },

  // 15. SATAY (Indonesian Sate Ayam with Peanut Sauce)
  {
    id: 'satay',
    name: 'Indonesian Grilled Chicken Satay (Sate Ayam Madura)',
    cuisine: 'Thai / SE Asian',
    region: 'Indonesia (Madura / Java)',
    servings: 4,
    prepTime: 30,
    cookTime: 12,
    difficulty: 'Medium',
    overview: {
      summary: 'The pride of Indonesian street gastronomy: succulent boneless chicken thighs marinated in sweet soy sauce (Kecap Manis), coriander seeds, lemongrass, garlic, and turmeric, threaded onto bamboo skewers and grilled over charcoal until smoky, charred, and caramelized, bathed in a velvety, spicy, rich roasted peanut sauce (Bumbu Kacang), finished with sweet soy drizzle, fried shallots, and lime.',
      appearance: 'Sizzling bamboo skewers of golden-charred, mahogany-glazed chicken skewers nestled in a thick, velvety amber peanut sauce, glistening with sweet soy sauce and golden crispy shallots.',
      texture: 'Juicy, succulent, tender chicken with crispy caramelized charred edges, contrasted with thick, nutty, coarse-ground peanut sauce.',
      flavor: 'Smoky charcoal char, sweet molasses caramelization from kecap manis, earthy coriander and turmeric warmth, and rich, savory, spicy peanut sauce with fresh lime acidity.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: '16 bamboo skewers (20cm)', purpose: 'Soaked in water for 30 minutes to prevent burning on the grill.' },
      { name: 'Outdoor charcoal grill or heavy cast-iron grill pan', purpose: 'For high-heat grilling and smoky charring.' },
      { name: 'Food processor or mortar and pestle', purpose: 'For crushing roasted peanuts into coarse sauce.' },
      { name: 'Oil brush', purpose: 'For basting skewers with sweet soy marinade while grilling.' }
    ],
    beforeYouStart: [
      { task: 'Soak 16 bamboo skewers in cold water for 30 minutes.', durationMinutes: 30 },
      { task: 'Cut 600g boneless skinless chicken thighs into 2cm uniform cubes.', durationMinutes: 8 },
      { task: 'Blend marinade: 4 shallots, 3 garlic cloves, 1 tbsp ground coriander, 1 tsp turmeric, 1 tsp salt, and 3 tbsp Kecap Manis; marinate chicken 30 minutes.', durationMinutes: 30 },
      { task: 'Simmer peanut sauce: 150g roasted peanuts (crushed), 2 cloves minced garlic, 2 red chilies, 2 tbsp Kecap Manis, 1 tbsp palm sugar, and 200ml water for 5 minutes until thick.', durationMinutes: 8 }
    ],
    ingredientPrepGuide: [
      { item: 'Bamboo Skewer Soaking', technique: 'Bamboo skewers MUST soak in water for at least 30 minutes. Dry wood catches fire in seconds over hot coals, burning the skewer handles before the chicken can cook.' },
      { item: 'Threading Technique', technique: 'Thread 4 to 5 pieces of chicken snugly onto each skewer, pushing pieces close together. Keeping the pieces snug keeps the chicken juicy during high-heat grilling; loose, spread-out meat dries out and overcooks.' }
    ],
    essentialIngredients: [
      { name: 'Boneless skinless chicken thighs', prep: 'cut into 2cm cubes & marinated', amount: '600g', metric: '600g', imperial: '1.3 lbs', common: '600g' },
      { name: 'Kecap Manis (Indonesian sweet soy sauce)', prep: 'divided (marinade, basting, finishing)', amount: '6 tbsp', metric: '90ml', imperial: '3 fl oz', common: '6 tbsp' },
      { name: 'Ground coriander seeds (Ketumbar)', prep: 'essential satay spice', amount: '1 tbsp', metric: '8g', imperial: '0.3 oz', common: '1 tbsp' },
      { name: 'Ground turmeric (Kunyit)', prep: 'for golden-yellow color', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Fresh shallots & garlic', prep: 'finely pureed for marinade', amount: '4 shallots + 3 garlic cloves', metric: '40g', imperial: '1.4 oz', common: 'pureed' },
      { name: 'Roasted unsalted peanuts (skinless)', prep: 'crushed into a coarse meal for sauce', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '1 cup' },
      { name: 'Thai red bird\'s eye chilies', prep: 'finely minced for peanut sauce', amount: '2 chilies', metric: '5g', imperial: '0.17 oz', common: '2 chilies' },
      { name: 'Thai palm sugar or brown sugar', prep: 'for peanut sauce sweetness', amount: '1.5 tbsp', metric: '20g', imperial: '0.7 oz', common: '1.5 tbsp' },
      { name: 'Fresh limes or calamansi', prep: 'cut into wedges', amount: '2 limes', metric: '80g', imperial: '2.8 oz', common: '2 limes' },
      { name: 'Fried crispy shallots (Bawang Goreng)', prep: 'for garnish', amount: '2 tbsp', metric: '20g', imperial: '0.7 oz', common: '2 tbsp' },
      { name: 'Neutral cooking oil', prep: 'for basting glaze', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'THREAD CHICKEN SNUGLY ONTO SOAKED SKEWERS',
        whatYouNeed: ['Marinated chicken cubes', '16 soaked bamboo skewers'],
        description: 'Thread 4 to 5 cubes of marinated chicken onto each soaked skewer, pushing the meat cubes snugly together against one another. Leave the lower 6cm of the wooden skewer bare to serve as a clean handle. Lay threaded skewers on a tray.',
        howToDoIt: 'Packing meat pieces tightly together keeps moisture locked inside each cube during searing, ensuring succulent chicken.',
        heat: 'No Heat',
        duration: 10,
        visualCues: 'Uniform, neat skewers of yellow-amber marinated chicken with clean wooden handles.',
        textureCheck: 'Compact, firmly threaded skewers.',
        whatShouldThisLookLike: 'Tray of 16 threaded chicken satay skewers.',
        tip: 'Wipe bare wooden handles clean with a damp towel so they don\'t smoke on the grill.',
        commonMistake: 'Leaving gaps between chicken cubes — thin exposed edges will burn black and dry out.',
        moveOnWhen: 'All 16 skewers are threaded.',
        quickInstructions: 'Thread 4-5 chicken cubes snugly onto each soaked skewer, leaving handles bare.'
      },
      {
        step: 2,
        title: 'SIMMER VELVETY BUMBU KACANG PEANUT SAUCE',
        whatYouNeed: ['Small saucepan', '150g crushed peanuts', '2 minced chilies', '2 minced garlic cloves', '2 tbsp Kecap Manis', '1.5 tbsp palm sugar', '1/2 tsp salt', '200ml water'],
        description: 'Combine crushed peanuts, minced chilies, garlic, Kecap Manis, palm sugar, salt, and water in a saucepan over medium heat. Bring to a boil, stirring constantly. Simmer for 5 minutes until it reduces into a thick, coarse, velvety amber peanut sauce. Remove from heat and squeeze in 1 tsp fresh lime juice.',
        howToDoIt: 'Simmering releases peanut oils, emulsifying with the water and palm sugar into a rich sauce.',
        heat: 'Medium-Low Heat',
        duration: 6,
        visualCues: 'Sauce thickens into a rich, granular, bubbling amber glaze; oil beads form on surface.',
        smell: 'Intense roasted peanut, sweet molasses, and garlic aroma.',
        textureCheck: 'Thick, creamy, spoon-coating sauce with pleasant peanut grit.',
        whatShouldThisLookLike: 'Warm, glossy Indonesian peanut sauce.',
        tip: 'If sauce gets too thick, whisk in 2 tablespoons of warm water.',
        commonMistake: 'Using smooth peanut butter from a jar — authentic Bumbu Kacang must have coarse peanut texture.',
        moveOnWhen: 'Peanut sauce is thick, velvety, and seasoned.',
        quickInstructions: 'Simmer crushed peanuts, chilies, garlic, sweet soy, sugar, and water 5 mins until thick.'
      },
      {
        step: 3,
        title: 'PREHEAT GRILL & PREPARE BASTING GLAZE',
        whatYouNeed: ['Charcoal grill or cast-iron grill pan', '2 tbsp Kecap Manis + 1 tbsp oil (basting glaze)', 'Pastry brush'],
        description: 'Preheat grill over high heat until smoking hot (220°C / 425°F). Mix 2 tbsp Kecap Manis and 1 tbsp oil in a small bowl for the basting glaze. Lightly oil the grill grates.',
        howToDoIt: 'A screaming hot grill sears the chicken in minutes, caramelizing the sweet soy glaze while locking in juices.',
        heat: 'High Heat',
        duration: 5,
        visualCues: 'Grill grates smoking lightly; oil burns clean.',
        smell: 'Hot clean grill.',
        textureCheck: 'Smoking hot.',
        whatShouldThisLookLike: 'Blazing hot grill ready for skewers.',
        tip: 'Lay a folded sheet of foil under the exposed wooden handles so they don\'t catch fire.',
        commonMistake: 'Grilling on medium heat — chicken will dry out before developing caramelized grill marks.',
        moveOnWhen: 'Grill is smoking hot.',
        quickInstructions: 'Preheat grill over high heat; mix sweet soy and oil for basting glaze.'
      },
      {
        step: 4,
        title: 'GRILL, BASTE & CHAR TO MAHOGANY (8 MINUTES)',
        whatYouNeed: ['Skewers on grill', 'Tongs', 'Basting glaze & brush'],
        description: 'Lay skewers across the hot grill grates in a single layer. Grill undisturbed for 3 minutes until bottom edges are seared and charred. Turn skewers over. Brush the cooked side generously with the Kecap Manis basting glaze. Grill 3 minutes. Turn again, brush second side with glaze, and grill 1 to 2 more minutes until chicken is cooked through (75°C / 167°F) with blistered, caramelized edges.',
        howToDoIt: 'Basting with sweet soy in the final 2 minutes caramelizes the palm sugar directly over high heat, building an irresistible smoky crust without burning bitter.',
        heat: 'High Heat',
        duration: 8,
        visualCues: 'Chicken turns deep mahogany-bronze with blistered, charred grill marks; glaze sizzles and bubbles.',
        hear: 'Intense crackling and dripping fat sizzle.',
        smell: 'Incredible aroma of caramelized sweet soy sauce, roasted coriander, and charcoal smoke.',
        textureCheck: 'Juicy, springy chicken with crisp caramelized edges.',
        whatShouldThisLookLike: 'Glistening, mahogany-glazed chicken satay skewers with smoky char marks.',
        tip: 'Keep skewers moving during the final glazed minute to prevent sugar from burning to black ash.',
        commonMistake: 'Glazing at the very beginning — sugar will burn black before chicken cooks through.',
        moveOnWhen: 'Chicken is cooked through (75°C) and lacquered with charred edges.',
        quickInstructions: 'Grill skewers 3 mins, flip, brush with sweet soy glaze, grill 3 mins, brush again, cook 1-2 mins until charred.'
      },
      {
        step: 5,
        title: 'PLATE WITH PEANUT SAUCE, KECAP MANIS & SHALLOTS',
        whatYouNeed: ['Serving platter', 'Warm peanut sauce', 'Kecap Manis drizzle', 'Fried shallots', 'Lime wedges'],
        description: 'Spread a generous bed of warm peanut sauce across the serving platter. Stack the hot, sizzling chicken satay skewers on top. Drizzle extra Kecap Manis in thin zigzags over the skewers. Shower with crispy fried shallots (Bawang Goreng) and serve with fresh lime wedges.',
        howToDoIt: 'Dredging hot skewers through the rich peanut sauce allows the smoky charred chicken to absorb the creamy sauce in every bite.',
        heat: 'Off Heat',
        duration: 2,
        visualCues: 'Sizzling mahogany skewers resting in rich amber peanut sauce, glistening with dark soy glaze and golden shallots.',
        smell: 'Smoky charcoal, roasted peanuts, and sweet caramelized soy.',
        textureCheck: 'Succulent juicy chicken, crispy charred bits, crunchy shallots, and velvety sauce.',
        whatShouldThisLookLike: 'Authentic street-vendor Sate Ayam Madura.',
        tip: 'Squeeze fresh lime juice over the peanut sauce right before eating to add a bright citrus kick!',
        commonMistake: 'Serving peanut sauce cold — peanut sauce must be warm and velvety.',
        moveOnWhen: 'Plated and served immediately.',
        quickInstructions: 'Spread peanut sauce on platter, stack hot skewers on top, drizzle sweet soy, shower with fried shallots.'
      }
    ],
    commonMistakes: [
      { mistake: 'Bamboo skewers burned through and broke.', remedy: 'Skewers weren\'t soaked in water. Always soak for 30 minutes and shield handles with foil on the grill.' },
      { mistake: 'Chicken was dry and tough.', remedy: 'Chicken breast was used, or pieces were threaded too loosely. Use chicken thighs and thread pieces snugly.' }
    ],
    troubleshooting: [
      {
        problem: 'Sugary glaze is catching fire on the grill',
        whatHappened: 'Kecap Manis dripped directly onto hot coals.',
        whyItHappened: 'Sweet soy contains high sugar that flares easily.',
        whatToDoNow: 'Move skewers to indirect heat and turn frequently.',
        howToPrevent: 'Baste lightly and only in the final 2 minutes of cooking.'
      }
    ],
    substitutions: [
      { original: 'Chicken thighs', substitute: 'Beef sirloin cubes (Sate Sapi), lamb/mutton (Sate Kambing), or firm tofu cubes', notes: 'Sate Kambing (Lamb Satay) is immensely popular in Java.' }
    ],
    safetyNotes: [
      'Chicken thighs must reach minimum internal temperature of 75°C (167°F).'
    ],
    servingGuide: {
      restingTime: 'Rest 2 minutes before serving.',
      garnishing: 'Crispy fried shallots (Bawang Goreng), extra drizzle of Kecap Manis, and lime wedges.',
      plating: 'Stacked on a banana leaf on a wooden or ceramic platter.',
      temperature: 'Sizzling hot off the grill.',
      accompaniments: 'Compressed rice cakes (Lontong or Ketupat), pickled cucumber-shallot relish (Acar), and ice-cold beer.'
    }
  }
];
