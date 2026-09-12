// West Indian culinary recipes (Maharashtra, Gujarat, Rajasthan)
module.exports = [
  // 33. PAV BHAJI
  {
    id: 'pav-bhaji',
    name: 'Mumbai Chowpatty Pav Bhaji',
    cuisine: 'Indian',
    region: 'Western Indian (Maharashtra / Mumbai)',
    servings: 4,
    prepTime: 20,
    cookTime: 30,
    difficulty: 'Easy',
    overview: {
      summary: 'The undisputed king of Mumbai street food: a vibrant, buttery, spiced vegetable mash of potatoes, cauliflower, green peas, and capsicum simmered on a giant flat iron tawa with Pav Bhaji masala, dollops of Amul butter, and fresh cilantro, served with soft, golden butter-toasted ladi pav.',
      appearance: 'Glistening, deep reddish-orange vegetable mash pooled with melting yellow butter, served alongside golden-toasted split bread rolls, finely diced red onions, and fresh lime wedges.',
      texture: 'Coarse, thick, velvety vegetable puree with soft texture; pav rolls are feather-soft with a crisp, buttery griddled crust.',
      flavor: 'Rich, buttery, tangy, mildly spicy with aromatic notes of roasted coriander, fennel, dried mango, and garlic.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Large heavy flat iron tawa or wide skillet (12 inch)', purpose: 'Essential for traditional tawa mashing and caramelizing the vegetable puree with butter.' },
      { name: 'Stainless steel potato masher (pav bhaji masher)', purpose: 'For rhythmically crushing boiled vegetables directly on the hot griddle.' }
    ],
    beforeYouStart: [
      { task: 'Boil 400g potatoes, 150g cauliflower florets, and 100g green peas until fork-tender; drain.', durationMinutes: 20 },
      { task: 'Finely dice 2 red onions, 3 ripe tomatoes, and 1 green bell pepper (capsicum).', durationMinutes: 8 },
      { task: 'Have 100g cold salted butter (Amul butter preferred) cut into generous pats.', durationMinutes: 2 }
    ],
    ingredientPrepGuide: [
      { item: 'Continuous Tawa Mashing', technique: 'Vigorously press and crush the vegetables against the hot iron surface using a potato masher while splashing hot water. This releases starches and emulsifies the butter directly into the vegetable fibers, creating the signature glossy street-cart texture.' }
    ],
    essentialIngredients: [
      { name: 'Potatoes (Yukon Gold or Russet)', prep: 'boiled & peeled', amount: '400g', metric: '400g', imperial: '14 oz', common: '3 medium' },
      { name: 'Cauliflower florets', prep: 'boiled tender', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '1.5 cups' },
      { name: 'Green peas (matar)', prep: 'boiled tender', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '3/4 cup' },
      { name: 'Green bell pepper (capsicum)', prep: 'very finely diced', amount: '1 large', metric: '120g', imperial: '4.2 oz', common: '1 cup' },
      { name: 'Red onions', prep: 'finely minced (divided)', amount: '2 medium', metric: '200g', imperial: '7 oz', common: '1 cup' },
      { name: 'Ripe tomatoes', prep: 'finely chopped', amount: '3 medium', metric: '250g', imperial: '8.8 oz', common: '1 cup' },
      { name: 'Ginger-garlic paste', prep: 'freshly pounded', amount: '2 tbsp', metric: '30g', imperial: '1 oz', common: '2 tbsp' },
      { name: 'Pav Bhaji Masala powder', prep: 'Everest or Badshah blend', amount: '2.5 tbsp', metric: '20g', imperial: '0.7 oz', common: '2.5 tbsp' },
      { name: 'Kashmiri red chili powder', prep: 'for street-style bright red color', amount: '1.5 tbsp', metric: '12g', imperial: '0.4 oz', common: '1.5 tbsp' },
      { name: 'Kasuri methi', prep: 'crushed between palms', amount: '1 tbsp', metric: '3g', imperial: '0.1 oz', common: '1 tbsp' },
      { name: 'Cold salted butter (Amul)', prep: 'divided into chunks', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '7 tbsp' },
      { name: 'Ladi Pav (soft white Indian bread rolls)', prep: 'split horizontally', amount: '8 rolls', metric: '8 rolls', imperial: '8 rolls', common: '8 rolls' },
      { name: 'Fresh lemon juice', prep: 'freshly squeezed', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp' },
      { name: 'Fresh cilantro', prep: 'finely chopped', amount: '1/3 cup', metric: '20g', imperial: '0.7 oz', common: '1/3 cup' },
      { name: 'Fine sea salt', prep: 'to taste', amount: '1.5 tsp', metric: '9g', imperial: '0.3 oz', common: '1.5 tsp' },
      { name: 'Warm water', prep: 'for thinning during mashing', amount: '250ml', metric: '250ml', imperial: '8.5 fl oz', common: '1 cup' }
    ],
    optionalIngredients: [
      { name: 'Finely grated processed cheese (Amul cheese)', prep: 'for Cheese Pav Bhaji variation', amount: '50g', metric: '50g', imperial: '1.8 oz', common: '1/2 cup', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'SAUTÉ AROMATICS & BELL PEPPERS ON TAWA',
        whatYouNeed: ['2 tbsp butter + 1 tbsp oil', '150g minced onions', '120g diced green capsicum', '2 tbsp ginger-garlic paste', 'Heavy flat tawa or skillet'],
        description: 'Melt 2 tbsp butter with 1 tbsp oil on your tawa over medium heat (oil prevents butter from scorching). Add minced onions and diced capsicum. Sauté for 5–6 minutes until capsicum softens and onions turn translucent. Add ginger-garlic paste and sauté for 2 minutes until fragrant.',
        howToDoIt: 'Adding capsicum early allows its pungent raw crunch to soften into the sweet onion base, forming the classic street-side aroma.',
        heat: 'Medium Heat',
        heatDescription: 'Steady sizzle in foaming butter.',
        duration: 8,
        visualCues: 'Capsicum turns bright green and tender; onions are soft and glossy.',
        hear: 'Lively, appetizing sizzle.',
        smell: 'Incredible aroma of melting butter, garlic, and sautéed capsicum.',
        textureCheck: 'Soft, tender vegetable base.',
        whatShouldThisLookLike: 'Softened onions and diced peppers glistening in butter.',
        tip: 'Dice capsicum very fine so it integrates seamlessly into the mash.',
        commonMistake: 'Browning onions dark — pav bhaji onions should remain soft and sweet.',
        moveOnWhen: 'Capsicum is tender and onions are translucent.',
        quickInstructions: 'Sauté onions and capsicum in butter and oil for 6 mins; add ginger-garlic for 2 mins.'
      },
      {
        step: 2,
        title: 'TOMATOES, SPICES & THE CONTINUOUS MASH',
        whatYouNeed: ['Chopped tomatoes', 'Boiled potatoes, cauliflower, peas', '2.5 tbsp pav bhaji masala', '1.5 tbsp Kashmiri chili', '1.5 tsp salt', 'Stainless potato masher', '150ml warm water'],
        description: 'Add chopped tomatoes, pav bhaji masala, Kashmiri chili, and salt. Cook for 4 minutes until tomatoes soften. Tip in boiled potatoes, cauliflower, and green peas. Take your potato masher and vigorously mash everything together directly on the hot tawa. Splash in 150ml warm water gradually, pressing and churning with the masher for 6–8 minutes until the vegetables form a homogeneous, thick, textured mash.',
        howToDoIt: 'Mashing on the hot griddle mechanically breaks down the potato starches while forcing the boiling tomato water and butter into an emulsified, velvety puree.',
        heat: 'Medium Heat',
        heatDescription: 'Active bubbling and sizzling during mashing.',
        duration: 12,
        visualCues: 'Distinct vegetable pieces disappear into a thick, uniform reddish-orange textured mash.',
        hear: 'Rhythmic thumping of the masher and loud sizzling.',
        smell: 'Intense spicy Pav Bhaji aroma with tangy tomato and roasted spices.',
        textureCheck: 'Coarse, thick, velvety mash with micro-chunks of peas and potato.',
        whatShouldThisLookLike: 'Vibrant orange-red bubbling vegetable puree on the flat tawa.',
        tip: 'Add warm water in small splashes as you mash to maintain a thick, spoonable consistency.',
        commonMistake: 'Using a blender — blending turns boiled potatoes gummy and gluey like paste.',
        moveOnWhen: 'Vegetables are completely mashed and evenly spiced.',
        quickInstructions: 'Add tomatoes and spices; add boiled vegetables and mash vigorously on tawa with water for 8 mins.'
      },
      {
        step: 3,
        title: 'ENRICH WITH BUTTER, FENUGREEK & LEMON',
        whatYouNeed: ['Mashed bhaji', '50g cold butter (divided)', '1 tbsp crushed kasuri methi', '2 tbsp lemon juice', 'Chopped cilantro'],
        description: 'Push the bhaji to the edges of the tawa, creating an open circle in the center. Melt 2 tbsp butter in the center hole with 1/2 tsp extra pav bhaji masala, 1 tbsp kasuri methi, and chopped cilantro. Let it sizzle for 30 seconds, then fold the bhaji back into the center. Stir in fresh lemon juice and simmer on low for 5 minutes. Adjust consistency with 50ml hot water if needed.',
        howToDoIt: 'Blooming extra masala and kasuri methi in fresh butter in the center well (the Chowpatty dhaba technique) imparts a glossy finish and restaurant-grade aroma.',
        heat: 'Low Heat',
        heatDescription: 'Gentle bubbling.',
        duration: 6,
        visualCues: 'Bhaji turns glossy and deep red-amber; melted butter creates a shiny film on top.',
        hear: 'Soft, lazy bubbling.',
        smell: 'Heavenly buttery fenugreek and toasted spices.',
        textureCheck: 'Luxurious, creamy, spoon-coating mash.',
        whatShouldThisLookLike: 'Glossy, vibrant red Pav Bhaji.',
        tip: 'Bhaji thickens as it sits; keep it slightly loose.',
        commonMistake: 'Omitting lemon juice — acidity is crucial to balance the heavy butter.',
        moveOnWhen: 'Butter is emulsified and bhaji is glossy.',
        quickInstructions: 'Melt butter in center with masala and kasuri methi; fold into bhaji with lemon juice, simmer 5 mins.'
      },
      {
        step: 4,
        title: 'TOAST PAV WITH BUTTER & SPICE ON TAWA',
        whatYouNeed: ['8 split pav rolls', '30g butter', 'Pinch of pav bhaji masala & cilantro', 'Hot tawa'],
        description: 'Push bhaji to one side of the tawa (or transfer to a warm bowl). Melt 1 tbsp butter on the cleared hot surface. Sprinkle a pinch of pav bhaji masala and chopped cilantro into the melting butter. Press the open cut sides of the split pav rolls down into the spiced butter. Toast for 60–90 seconds until golden-brown and crispy-edged, then flip for 20 seconds to warm the top.',
        howToDoIt: 'Toasting bread rolls in spiced butter on the same pan as the bhaji absorbs all residual fond and provides a crisp, buttery crust with a pillow-soft interior.',
        heat: 'Medium Heat',
        heatDescription: 'Sizzling butter frying the bread.',
        duration: 3,
        visualCues: 'Cut faces of pav turn golden-brown, crisp, and glistening with butter and green cilantro.',
        hear: 'Crisp crackle as bread hits butter.',
        smell: 'Toasted buttery bread and spices.',
        textureCheck: 'Crispy golden crust with warm, pillow-soft interior.',
        whatShouldThisLookLike: 'Golden-toasted spiced pav rolls.',
        tip: 'Serve immediately while pav is hot and crisp.',
        commonMistake: 'Toasting dry without butter — pav must be richly buttered.',
        moveOnWhen: 'Pav rolls are golden-crisp on cut faces.',
        quickInstructions: 'Melt butter with masala and cilantro on tawa; press split pav down and toast 90s until golden-crisp.'
      }
    ],
    commonMistakes: [
      { mistake: 'Bhaji is pale and watery.', remedy: 'You didn\'t use enough Kashmiri chili or didn\'t mash on the hot tawa to emulsify. Mash continuously until thick.' },
      { mistake: 'Bhaji tastes bland.', remedy: 'Not enough salt, butter, or lemon. Street-style Pav Bhaji requires bold seasoning, generous butter, and sharp citrus.' }
    ],
    troubleshooting: [
      {
        problem: 'Bhaji is too spicy for children',
        whatHappened: 'Chili powder or masala was heavy.',
        whyItHappened: 'Heat level too high.',
        whatToDoNow: 'Fold in an extra 2 tablespoons of butter and 1/4 cup boiled mashed potatoes or sweet cream to mellow the heat.',
        howToPrevent: 'Use mild Kashmiri chili powder exclusively for red color.'
      }
    ],
    substitutions: [
      { original: 'Ladi Pav', substitute: 'Soft burger buns, brioche buns, or dinner rolls', notes: 'Brioche rolls toast into wonderfully buttery carriers.' },
      { original: 'Amul Butter', substitute: 'Unsalted butter with 1/4 tsp extra salt, or vegan block butter', notes: 'Amul salted butter provides the authentic salty street flavor.' }
    ],
    safetyNotes: [
      'Hot mashed bhaji can bubble and splatter like lava; keep heat on low-medium during simmering.'
    ],
    servingGuide: {
      restingTime: '2 minutes.',
      garnishing: 'Place a generous square pat of cold butter directly in the center of the steaming bhaji; sprinkle with chopped cilantro.',
      plating: 'Serve on a partitioned stainless steel thali plate alongside hot toasted pav, a mound of finely diced raw red onions, and fresh lemon wedges.',
      temperature: 'Piping hot.',
      accompaniments: 'Sirka onions, extra toasted pav rolls, and chilled masala chaas (buttermilk).'
    }
  },

  // 34. VADA PAV
  {
    id: 'vada-pav',
    name: 'Mumbai Street Vada Pav (Batata Vada Burger)',
    cuisine: 'Indian',
    region: 'Western Indian (Maharashtra / Mumbai)',
    servings: 4,
    prepTime: 25,
    cookTime: 20,
    difficulty: 'Medium',
    overview: {
      summary: 'The iconic working-class burger of Mumbai: a golden, crisp, gram-flour-battered spiced potato fritter (batata vada) stuffed inside a fluffy pav roll slathered with fiery dry garlic-peanut chutney, tangy tamarind chutney, and spicy green mint chutney, served with fried salted green chilies.',
      appearance: 'A plump golden-yellow batata vada cradled inside a split white pav roll, layered with ruby-red dry garlic powder, sweet brown chutney, and green chutney, crowned with a blistered green chili.',
      texture: 'Crisp, delicate gram flour shell shattering into a pillowy, soft, steamy spiced potato center, cushioned by cloud-soft bread rolls and crunchy peanut chutney.',
      flavor: 'An explosion of savory, garlicky, spicy, tangy, and sweet contrasts with mustard and curry leaf warmth.',
      restingTimeMinutes: 1
    },
    equipment: [
      { name: 'Deep heavy kadhai / Dutch oven', purpose: 'For deep-frying batata vadas at steady 180°C (350°F).' },
      { name: 'Wire whisk', purpose: 'To whisk smooth, lump-free gram flour batter.' },
      { name: 'Slotted skimmer ladle', purpose: 'For dropping and draining vadas.' }
    ],
    beforeYouStart: [
      { task: 'Boil 500g potatoes in salted water until fork-tender; cool completely, peel, and crush coarsely.', durationMinutes: 25 },
      { task: 'Pound 6 green chilies, 8 garlic cloves, and 1.5 inch ginger into a coarse paste in a mortar.', durationMinutes: 5 },
      { task: 'Whisk 150g besan with 1 tbsp rice flour, 1/4 tsp turmeric, 1/4 tsp baking soda, 1 tsp salt, and 120ml water into a smooth batter coating the back of a spoon.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'Dry Garlic Peanut Chutney (Lasun Chutney)', technique: 'Pulse fried besan droplets (chura) with roasted peanuts, whole garlic cloves, Kashmiri red chili powder, and salt. This dry red powder is the soul of authentic Mumbai Vada Pav.' },
      { item: 'Cold Potato Rule', technique: 'Potatoes must be 100% cooled before seasoning and shaping into balls; warm potatoes release steam, causing the gram flour batter to slip off during deep-frying.' }
    ],
    essentialIngredients: [
      { name: 'Potatoes (Russet or Yukon Gold)', prep: 'boiled, peeled, chunky crushed', amount: '500g', metric: '500g', imperial: '1.1 lbs', common: '3 large' },
      { name: 'Besan (chickpea / gram flour)', prep: 'sifted for batter', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '1.25 cups' },
      { name: 'Rice flour', prep: 'for extra crispy batter shell', amount: '1.5 tbsp', metric: '15g', imperial: '0.5 oz', common: '1.5 tbsp' },
      { name: 'Green chilies', prep: 'divided (masala & fried garnish)', amount: '8 chilies', metric: '30g', imperial: '1 oz', common: '8 chilies' },
      { name: 'Garlic cloves', prep: 'divided (masala & dry chutney)', amount: '15 cloves', metric: '45g', imperial: '1.6 oz', common: '15 cloves' },
      { name: 'Fresh ginger', prep: 'pounded', amount: '1.5 tbsp', metric: '20g', imperial: '0.7 oz', common: '1.5 tbsp' },
      { name: 'Mustard seeds', prep: 'whole black', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Hing (asafoetida)', prep: 'powder', amount: '1/4 tsp', metric: '1g', imperial: '0.03 oz', common: '1/4 tsp' },
      { name: 'Fresh curry leaves', prep: 'chopped', amount: '15 leaves', metric: '2g', imperial: '0.07 oz', common: '2 sprigs' },
      { name: 'Turmeric powder', prep: 'divided (filling & batter)', amount: '1/2 tsp', metric: '1.5g', imperial: '0.05 oz', common: '1/2 tsp' },
      { name: 'Roasted peanuts (peeled)', prep: 'for dry garlic chutney', amount: '50g', metric: '50g', imperial: '1.8 oz', common: '1/3 cup' },
      { name: 'Kashmiri chili powder', prep: 'for fiery red dry chutney', amount: '2 tbsp', metric: '16g', imperial: '0.6 oz', common: '2 tbsp' },
      { name: 'Baking soda', prep: 'for airy crisp batter', amount: '1/4 tsp', metric: '1g', imperial: '0.03 oz', common: '1/4 tsp' },
      { name: 'Fresh lemon juice', prep: 'for potato filling', amount: '1 tbsp', metric: '15ml', imperial: '0.5 fl oz', common: '1 tbsp' },
      { name: 'Fresh cilantro', prep: 'finely chopped', amount: '3 tbsp', metric: '15g', imperial: '0.5 oz', common: '3 tbsp' },
      { name: 'Ladi Pav bread rolls', prep: 'fresh, split 3/4 way through', amount: '6 rolls', metric: '6 rolls', imperial: '6 rolls', common: '6 rolls' },
      { name: 'Oil for deep frying', prep: 'peanut or sunflower oil', amount: '750ml', metric: '750ml', imperial: '25 fl oz', common: '3 cups' },
      { name: 'Fine sea salt', prep: 'divided', amount: '2 tsp', metric: '12g', imperial: '0.4 oz', common: '2 tsp' }
    ],
    optionalIngredients: [
      { name: 'Sweet tamarind-date chutney & Spicy green chutney', prep: 'for slathering inside pav', amount: '4 tbsp each', metric: '60g', imperial: '2.1 oz', common: '4 tbsp', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'TEMPER & SHAPE SPICED POTATO BALLS',
        whatYouNeed: ['1 tbsp oil', '1 tsp mustard seeds', '1/4 tsp hing', '15 curry leaves', 'Pounded chili-garlic-ginger paste', '1/4 tsp turmeric', '500g cold crushed potatoes', '1 tbsp lemon juice', '3 tbsp cilantro', '1 tsp salt'],
        description: 'Heat 1 tbsp oil in a pan. Crackle mustard seeds for 20 seconds. Add hing, curry leaves, and the pounded chili-garlic-ginger paste. Sauté for 90 seconds until fragrant. Add turmeric and salt. Pour this hot tempering over the cold crushed potatoes. Add lemon juice and chopped cilantro. Mix thoroughly with a fork. Divide and roll into 6 equal smooth spheres (approx 85g each).',
        howToDoIt: 'Pouring the hot tempered oil and aromatic paste over cold potatoes infuses deep garlic-mustard flavor without cooking the potatoes into mush.',
        heat: 'Medium Heat for 2 mins, then Off',
        heatDescription: 'Quick tempering.',
        duration: 8,
        visualCues: 'Vibrant yellow potato balls speckled with dark mustard seeds, green chilies, and fresh herbs.',
        hear: 'Crackle of mustard seeds in hot oil.',
        smell: 'Intense aroma of fried garlic, curry leaves, and mustard.',
        textureCheck: 'Smooth, firm, moldable potato spheres.',
        whatShouldThisLookLike: 'Six neat yellow spiced potato spheres on a plate.',
        tip: 'Ensure the potato balls are firm; if soft, chill in the refrigerator for 15 minutes before battering.',
        commonMistake: 'Mashing potatoes warm — warm potatoes make loose balls that deform in the hot oil.',
        moveOnWhen: 'Potato mixture is divided into 6 smooth spheres.',
        quickInstructions: 'Sputter mustard, hing, curry leaves, chili-garlic-ginger paste; mix into cold potatoes with lemon, cilantro, salt. Roll 6 balls.'
      },
      {
        step: 2,
        title: 'WHISK CRISPY BESAN BATTER',
        whatYouNeed: ['150g besan', '1.5 tbsp rice flour', '1/4 tsp turmeric', '1/4 tsp baking soda', '1 tsp salt', '120ml water', '1 tbsp hot frying oil'],
        description: 'In a bowl, whisk besan, rice flour, turmeric, baking soda, and salt. Add 120ml water gradually, whisking vigorously until you have a smooth, glossy, lump-free batter with the consistency of heavy pancake batter. Whisk in 1 tbsp of hot frying oil from the kadhai right before dipping.',
        howToDoIt: 'Adding rice flour and a tablespoon of hot oil (moin) into the batter creates a shatteringly crisp, micro-aerated crust that stays crunchy after frying.',
        heat: 'Off',
        heatDescription: 'Batter station.',
        duration: 4,
        visualCues: 'Smooth, golden-yellow, silky batter that ribbons off the whisk and coats the back of a spoon cleanly.',
        hear: 'Whisking sounds.',
        smell: 'Nutty gram flour aroma.',
        textureCheck: 'Coats a dipped finger with a smooth, opaque yellow jacket.',
        whatShouldThisLookLike: 'Smooth, lump-free golden batter.',
        tip: 'If batter is too thin, it runs off the potato; if too thick, the vada shell turns into a heavy doughy pancake.',
        commonMistake: 'Whisking cold water without hot oil — results in a soft, limp vada shell.',
        moveOnWhen: 'Batter is smooth, coats a spoon, and hot oil is whisked in.',
        quickInstructions: 'Whisk besan, rice flour, turmeric, soda, salt, water, and 1 tbsp hot oil into a smooth ribboning batter.'
      },
      {
        step: 3,
        title: 'DEEP-FRY BATATA VADAS & CRISPY CHURA',
        whatYouNeed: ['Potato balls', 'Besan batter', 'Frying oil heated to 180°C (350°F)', 'Spider skimmer', 'Paper towels'],
        description: 'Dip each potato ball completely into the besan batter, rolling gently to coat evenly. Lift with your fingers or a spoon, let excess batter drip for 1 second, and gently slide into hot oil. Dip your fingers into the remaining batter and flick droplets into the hot oil (this creates crispy fried bits called "chura" for the garlic chutney). Fry vadas on medium heat for 4–5 minutes, turning gently, until the crust is pale golden, firm, and crisp. Lift out, drain on paper towels, and scoop out the golden fried chura droplets.',
        howToDoIt: 'Frying at 180°C sets the besan shell instantly, sealing the potato center without absorbing excess oil.',
        heat: 'Medium Heat (180°C / 350°F)',
        heatDescription: 'Steady lively bubbling.',
        duration: 6,
        visualCues: 'Vadas puff slightly, floating on the oil surface; crust turns smooth, rigid, and pale golden-yellow.',
        hear: 'Lively, crisp frying crackle.',
        smell: 'Incredible Mumbai street food aroma: fried chickpea batter and garlic.',
        textureCheck: 'Crispy, firm outer shell when tapped with the skimmer.',
        whatShouldThisLookLike: 'Pristine, spherical golden Batata Vadas and crispy fried golden flakes (chura).',
        tip: 'Do not brown the vadas dark brown; authentic batata vadas are pale yellow-gold.',
        commonMistake: 'Dropping vadas into oil that is not hot enough (<160°C) — batter will separate and tear.',
        moveOnWhen: 'All 6 vadas are fried golden-crisp and drained alongside fried chura.',
        quickInstructions: 'Dip potato balls in batter, slide into 180°C oil with batter drops; fry 4-5 mins until pale golden-crisp. Drain.'
      },
      {
        step: 4,
        title: 'PULSE THE LEGENDARY DRY GARLIC CHUTNEY',
        whatYouNeed: ['Fried crispy chura droplets from Step 3', '50g roasted peanuts', '8 garlic cloves (raw or lightly fried)', '2 tbsp Kashmiri chili powder', '1/2 tsp salt', 'Small blender jar'],
        description: 'In a small blender or spice grinder, place the cooled crispy fried chura flakes, roasted peanuts, garlic cloves, Kashmiri chili powder, and salt. Pulse 4–5 times in short bursts until it forms a coarse, fiery-red, crunchy dry powder. Do not add water.',
        howToDoIt: 'Using the fried besan drops (chura) from the vada frying is the authentic street-vendor secret: it absorbs the garlic oils and creates the iconic crunchy, crimson dry chutney.',
        heat: 'Off',
        heatDescription: 'Chutney blender.',
        duration: 3,
        visualCues: 'Vibrant scarlet-red, coarse, crunchy dry powder.',
        hear: 'Pulsing blender blades.',
        smell: 'Pungent raw garlic, nutty roasted peanuts, and spicy chili.',
        textureCheck: 'Coarse, crunchy, dry crumb.',
        whatShouldThisLookLike: 'Bright red, coarse dry garlic-peanut powder.',
        tip: 'Pulse in short bursts; blending continuously will release peanut oils and turn it into a sticky paste instead of a dry powder.',
        commonMistake: 'Adding water — this must remain a 100% dry powder.',
        moveOnWhen: 'Chutney is pulsed to a coarse red powder.',
        quickInstructions: 'Pulse fried chura, peanuts, garlic, Kashmiri chili, and salt in blender into coarse dry red powder.'
      },
      {
        step: 5,
        title: 'ASSEMBLE THE MUMBAI VADA PAV',
        whatYouNeed: ['6 fresh pav rolls', '6 hot batata vadas', 'Dry red garlic chutney', 'Optional green & tamarind chutneys', 'Fried green chilies'],
        description: 'Slit a pav roll 3/4 of the way through, keeping the back attached like a hinge. Slather the bottom with green chutney and sweet tamarind chutney. Heap 1 generous tablespoon of fiery dry red garlic chutney onto the bread. Place a piping-hot batata vada in the center. Press the top bun down firmly with your palm to squash the vada slightly so the flavors fuse. Crown with a fried salted green chili and serve immediately.',
        howToDoIt: 'Squashing the vada slightly bursts the crisp outer crust, allowing the warm, aromatic potato interior and melting steam to mingle directly with the spicy chutneys and soft bread.',
        heat: 'Off',
        heatDescription: 'Assembly.',
        duration: 2,
        visualCues: 'Plump white pav stuffed with golden batata vada and crimson red garlic chutney, topped with blistered chili.',
        hear: 'Delicate crunch as the palm squashes the crisp vada shell.',
        smell: 'Explosion of fried garlic, tangy tamarind, and warm spiced potatoes.',
        textureCheck: 'Shatteringly crisp vada crust, soft steamy potato, cloud-soft bun.',
        whatShouldThisLookLike: 'The ultimate Mumbai street-food Vada Pav.',
        tip: 'Prick whole green chilies with a knife before deep-frying for 30 seconds to prevent them from bursting in the hot oil.',
        commonMistake: 'Letting assembled vada pav sit for 15 minutes — eat immediately while the vada is hot and crisp.',
        moveOnWhen: 'All Vada Pavs are assembled with chutneys and fried chilies.',
        quickInstructions: 'Slit pav, spread chutneys, heap dry red garlic powder, insert hot vada, squash gently, top with fried chili.'
      }
    ],
    commonMistakes: [
      { mistake: 'Batter fell off the potato ball in hot oil.', remedy: 'The potato balls were warm or wet. Ensure potatoes are cooled completely and firm before dipping.' },
      { mistake: 'Dry garlic chutney turned into oily paste.', remedy: 'You blended continuously. Pulse in 1-second bursts so it stays a coarse, crunchy powder.' }
    ],
    troubleshooting: [
      {
        problem: 'Vada crust is soft and oily',
        whatHappened: 'Frying oil temperature was below 160°C.',
        whyItHappened: 'Dropped too many vadas at once, cooling the oil.',
        whatToDoNow: 'Fry in smaller batches of 2–3 vadas at steady 180°C.',
        howToPrevent: 'Use a thermometer to maintain oil at 180°C.'
      }
    ],
    substitutions: [
      { original: 'Ladi Pav', substitute: 'Soft slider buns or brioche dinner rolls', notes: 'Soft white rolls work wonderfully.' }
    ],
    safetyNotes: [
      'Always prick green chilies with a knife before deep-frying; whole sealed chilies will explode violently in hot oil.'
    ],
    servingGuide: {
      restingTime: 'Eat immediately.',
      garnishing: 'Fried salted green chili perched on top of each vada pav.',
      plating: 'Serve wrapped in butter paper or on a paper plate street-style.',
      temperature: 'Piping hot.',
      accompaniments: 'Extra dry garlic chutney, fried salted green chilies, and hot cutting masala chai.'
    }
  },

  // 35. DHOKLA (KHAMAN DHOKLA)
  {
    id: 'dhokla',
    name: 'Gujarati Nylon Khaman Dhokla (Steamed Spongy Gram Cakes)',
    cuisine: 'Indian',
    region: 'Western Indian (Gujarat)',
    servings: 4,
    prepTime: 15,
    cookTime: 20,
    difficulty: 'Medium',
    overview: {
      summary: 'Feather-light, juicy, vibrant yellow steamed savory cakes made from fine gram flour (besan) aerated with fruit salt (Eno). Steamed into an airy honeycomb sponge, drenched in a sweet, tangy, mustard-seed, green-chili, and sesame tempering water that soaks through every cell, topped with fresh coconut and cilantro.',
      appearance: 'Vibrant sunshine-yellow square cake with a visible open honeycomb sponge, glistening with sweet-tangy tempering syrup, garnished with green chilies, black mustard seeds, white sesame seeds, fresh coconut, and cilantro.',
      texture: 'Impossibly light, spongy, and juicy; when bitten, it releases a sweet-tangy burst without ever feeling dry or chalky.',
      flavor: 'Sweet, tangy, mildly spicy, with nutty mustard-seed pops and clean savory chickpea flour.',
      restingTimeMinutes: 5
    },
    equipment: [
      { name: 'Steamer / large lidded pot with steamer rack', purpose: 'Produces vigorous continuous steam to bake the cake in 18 minutes.' },
      { name: 'Round or square 8-inch cake pan', purpose: 'For steaming the batter.' },
      { name: 'Wire whisk', purpose: 'For aerating the besan batter.' }
    ],
    beforeYouStart: [
      { task: 'Grease an 8-inch metal cake pan with 1 tsp oil.', durationMinutes: 2 },
      { task: 'Bring 500ml water to a rolling boil in your steamer over high heat with the lid on.', durationMinutes: 5 },
      { task: 'Measure 1 tsp Eno fruit salt (regular flavor) and have it ready right by the mixing bowl.', durationMinutes: 1 }
    ],
    ingredientPrepGuide: [
      { item: 'Sifting Besan', technique: 'Besan MUST be sifted twice through a fine sieve to eliminate all compacted lumps and introduce air before whisking with water.' },
      { item: 'The Eno Reaction (Instant Aeration)', technique: 'Add Eno fruit salt to the batter and whisk vigorously in ONE direction for exactly 30 seconds. The batter will instantly fizz, froth, and expand to twice its volume like shaving foam. Pour immediately into the greased tin and place in the hot steamer without a second of hesitation.' },
      { item: 'Tempering Water Drench', technique: 'Boil water with sugar, lemon juice, green chilies, and mustard seeds. Pour this warm liquid generously all over the warm steamed cake. The airy sponge acts like a sponge, drinking in the sweet-tangy syrup to become delightfully juicy.' }
    ],
    essentialIngredients: [
      { name: 'Fine Besan (gram flour)', prep: 'sifted twice', amount: '200g', metric: '200g', imperial: '7 oz', common: '1.5 cups' },
      { name: 'Fine semolina (Sooji)', prep: 'for structural crumb', amount: '1.5 tbsp', metric: '15g', imperial: '0.5 oz', common: '1.5 tbsp' },
      { name: 'Water for batter', prep: 'room temperature', amount: '200ml', metric: '200ml', imperial: '6.8 fl oz', common: '3/4 cup + 2 tbsp' },
      { name: 'Granulated sugar', prep: 'divided (batter & tempering)', amount: '3 tbsp', metric: '38g', imperial: '1.3 oz', common: '3 tbsp' },
      { name: 'Citric acid crystals (or lemon juice)', prep: 'for bright tartness & leavening', amount: '1/2 tsp', metric: '2g', imperial: '0.07 oz', common: '1/2 tsp' },
      { name: 'Turmeric powder', prep: 'use very sparingly (pinch only!)', amount: '1/8 tsp', metric: '0.5g', imperial: '0.02 oz', common: 'tiny pinch' },
      { name: 'Fine sea salt', prep: 'divided', amount: '1 tsp', metric: '6g', imperial: '0.2 oz', common: '1 tsp' },
      { name: 'Vegetable oil', prep: 'divided (batter & tempering)', amount: '2.5 tbsp', metric: '38ml', imperial: '1.3 fl oz', common: '2.5 tbsp' },
      { name: 'Eno Fruit Salt (regular/unflavored)', prep: 'added at the very end', amount: '1 tsp', metric: '5g', imperial: '0.18 oz', common: '1 tsp' },
      { name: 'Mustard seeds', prep: 'whole black', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'White sesame seeds (til)', prep: 'whole', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Hing (asafoetida)', prep: 'pinch', amount: '1/4 tsp', metric: '1g', imperial: '0.03 oz', common: '1/4 tsp' },
      { name: 'Green chilies', prep: 'slit lengthwise for tempering', amount: '4 chilies', metric: '15g', imperial: '0.5 oz', common: '4 chilies' },
      { name: 'Fresh curry leaves', prep: 'fresh', amount: '12 leaves', metric: '2g', imperial: '0.07 oz', common: '1 sprig' },
      { name: 'Water for tempering syrup', prep: 'clean water', amount: '180ml', metric: '180ml', imperial: '6 fl oz', common: '3/4 cup' },
      { name: 'Fresh lemon juice', prep: 'for tempering syrup', amount: '1.5 tbsp', metric: '22ml', imperial: '0.75 fl oz', common: '1.5 tbsp' },
      { name: 'Freshly grated coconut', prep: 'for garnish', amount: '2 tbsp', metric: '15g', imperial: '0.5 oz', common: '2 tbsp' },
      { name: 'Fresh cilantro', prep: 'finely chopped', amount: '3 tbsp', metric: '15g', imperial: '0.5 oz', common: '3 tbsp' }
    ],
    optionalIngredients: [
      { name: 'Ginger paste', prep: '1/2 tsp in batter', amount: '1/2 tsp', metric: '2.5g', imperial: '0.08 oz', common: '1/2 tsp', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'WHISK SMOOTH CITRIC BESAN BATTER',
        whatYouNeed: ['200g sifted besan', '1.5 tbsp sooji', '200ml water', '1.5 tbsp sugar', '1/2 tsp citric acid', '1/8 tsp turmeric', '1 tsp salt', '1 tbsp oil', 'Wire whisk'],
        description: 'In a bowl, dissolve 1.5 tbsp sugar, citric acid, 1/8 tsp turmeric, and 1 tsp salt in 200ml water. In another bowl, combine sifted besan and sooji. Pour the seasoned water into the flour while whisking continuously. Whisk in 1 tbsp oil. Whisk vigorously for 3 minutes until smooth, glossy, and lump-free. Rest batter for 10 minutes.',
        howToDoIt: 'Resting allows the semolina to absorb liquid, giving the batter structural strength so the delicate steamed bubbles do not collapse under their own weight.',
        heat: 'Off',
        heatDescription: 'Batter preparation.',
        duration: 15,
        visualCues: 'Smooth, pale-yellow, silky batter that flows off the whisk in an even ribbon.',
        hear: 'Whisking sound.',
        smell: 'Clean, sweet, tangy chickpea aroma.',
        textureCheck: 'Flowing pancake batter consistency.',
        whatShouldThisLookLike: 'Lump-free pale yellow batter.',
        tip: 'Use only 1/8 tsp turmeric! Excess turmeric reacts with the alkaline Eno fruit salt, producing ugly red/brown chemical spots.',
        commonMistake: 'Adding too much turmeric — dhokla will come out spotted with brick-red blotches.',
        moveOnWhen: 'Batter is smooth and has rested 10 minutes.',
        quickInstructions: 'Whisk water, sugar, citric acid, turmeric, salt, oil, sooji, and besan for 3 mins. Rest 10 mins.'
      },
      {
        step: 2,
        title: 'THE ENO ACTIVATION & IMMEDIATE STEAMING',
        whatYouNeed: ['Rested batter', '1 tsp Eno fruit salt', '1 tsp water', 'Greased 8-inch pan', 'Boiling steamer'],
        description: 'Ensure steamer water is at a rolling boil. Add 1 tsp Eno fruit salt directly onto the batter. Sprinkle 1 teaspoon of water over the Eno to activate it (it will fizz aggressively). Immediately whisk vigorously in ONE direction for 30 seconds until the batter turns pale, foamy, and doubles in volume. Pour instantly into the greased cake pan. Place immediately into the boiling steamer, cover with lid, and steam on high heat for 18–20 minutes undisturbed.',
        howToDoIt: 'Eno (sodium bicarbonate + citric acid) reacts with moisture to release billions of carbon dioxide micro-bubbles. Placing immediately into fierce steam expands and traps these bubbles before they can pop.',
        heat: 'High Steam',
        heatDescription: 'Rolling, vigorous steam.',
        duration: 20,
        visualCues: 'Batter transforms into voluminous white-yellow shaving foam; inside steamer, it puffs into a high, spongy cake.',
        hear: 'Fizzing effervescence of Eno reacting.',
        smell: 'Warm sweet aroma of steamed chickpea cake.',
        textureCheck: 'Cake puffs high and springs back when touched; toothpick comes out clean.',
        whatShouldThisLookLike: 'Puffed, spongy, bright sunshine-yellow steamed cake.',
        tip: 'Wrap the underside of the steamer lid in a clean kitchen towel so condensed water drips to the sides instead of falling onto the dhokla.',
        commonMistake: 'Delaying after adding Eno — if you wait 2 minutes before steaming, the gas escapes and the dhokla becomes dense.',
        moveOnWhen: 'Toothpick inserted in center comes out completely dry and clean (approx 18-20 mins).',
        quickInstructions: 'Sprinkle Eno on batter with 1 tsp water; whisk 30s in one direction until foamy. Pour into pan, steam on high 18-20 mins.'
      },
      {
        step: 3,
        title: 'PREPARE SWEET-TANGY TEMPERING SYRUP',
        whatYouNeed: ['1.5 tbsp oil', '1 tsp mustard seeds', '1 tsp sesame seeds', '1/4 tsp hing', '4 slit green chilies', '12 curry leaves', '180ml water', '1.5 tbsp sugar', '1.5 tbsp lemon juice', 'Saucepan'],
        description: 'While dhokla steams, heat 1.5 tbsp oil in a small pan. Add mustard seeds and let them pop. Add sesame seeds, hing, slit green chilies, and curry leaves; sizzle for 20 seconds. Pour in 180ml water and 1.5 tbsp sugar. Bring to a rolling boil and simmer for 2 minutes until sugar dissolves completely. Stir in 1.5 tbsp lemon juice and turn off heat.',
        howToDoIt: 'The sweet-tangy tempering liquid is the secret to "Nylon" Khaman Dhokla; without it, steamed besan is dry and chokes the throat.',
        heat: 'Medium Heat',
        heatDescription: 'Active boiling syrup.',
        duration: 4,
        visualCues: 'Mustard and sesame seeds float in clear, glossy, aromatic sweet-sour syrup with blistered green chilies.',
        hear: 'Crackling seeds followed by hissing as water is added.',
        smell: 'Tangy lemon, toasted mustard, sesame, and green chili.',
        textureCheck: 'Warm, sweet-sour aromatic liquid.',
        whatShouldThisLookLike: 'Clear tempering syrup with floating seeds and blistered chilies.',
        tip: 'Both the dhokla and the syrup should be warm (not cold) when combined for optimal absorption.',
        commonMistake: 'Pouring cold syrup onto a cold dhokla — it will pool on top instead of soaking through.',
        moveOnWhen: 'Tempering syrup is boiled and warm.',
        quickInstructions: 'Sputter mustard, sesame, hing, chilies, curry leaves in oil; add water and sugar, boil 2 mins; stir in lemon juice.'
      },
      {
        step: 4,
        title: 'THE DRENCH, SLICE & GARNISH',
        whatYouNeed: ['Steamed warm dhokla cake', 'Warm tempering syrup', 'Knife', '2 tbsp fresh grated coconut', '3 tbsp fresh cilantro'],
        description: 'Remove the steamed dhokla from the steamer and let cool for 5 minutes. Run a knife around the edges and invert onto a wide serving platter. Slice into neat 4cm (1.5 inch) squares. Slowly and evenly ladle the warm tempering syrup over the entire cake, allowing the liquid to seep down into the cut lines and absorb through the porous honeycomb sponge. Scatter fresh grated coconut and chopped cilantro on top. Rest for 5 minutes before serving.',
        howToDoIt: 'The open porous crumb acts like a sponge, drinking in every drop of the seasoned syrup until each bite is juicy, plump, and bursting with flavor.',
        heat: 'Off',
        heatDescription: 'Assembly.',
        duration: 8,
        visualCues: 'The yellow cake absorbs all the liquid, swelling slightly and turning glossy, crowned with white coconut and herbs.',
        hear: 'Soft squelch as syrup drinks into the sponge.',
        smell: 'Incredible sweet, tangy, mustard-and-coconut aroma.',
        textureCheck: 'Juicy, melt-in-the-mouth soft and spongy.',
        whatShouldThisLookLike: 'Pristine, glistening yellow Khaman Dhokla squares.',
        tip: 'Pour the liquid slowly so every square receives an equal share.',
        commonMistake: 'Slicing after pouring syrup — slice FIRST so the liquid penetrates all the interior cut edges.',
        moveOnWhen: 'All syrup is absorbed and dhokla is garnished.',
        quickInstructions: 'Invert cake onto platter, cut into squares; ladle warm tempering syrup all over to absorb; top with coconut and cilantro.'
      }
    ],
    commonMistakes: [
      { mistake: 'Dhokla has red or brown spots all over.', remedy: 'Too much turmeric was used. Turmeric reacts chemically with alkaline Eno. Use only a tiny 1/8 tsp pinch.' },
      { mistake: 'Dhokla is dry and chokes the throat.', remedy: 'You didn\'t make or pour enough tempering water. The sweet-tangy syrup is what makes it juicy.' }
    ],
    troubleshooting: [
      {
        problem: 'Dhokla did not rise and came out flat and dense',
        whatHappened: 'Eno was expired or delayed before steaming.',
        whyItHappened: 'CO2 gas escaped before batter reached the steamer.',
        whatToDoNow: 'Cut into bite-sized pieces, toss with tempering syrup and extra chutney as "Sev Khamani" (a popular repurposed Gujarati snack).',
        howToPrevent: 'Always ensure water is vigorously boiling before adding fresh Eno, and steam immediately.'
      }
    ],
    substitutions: [
      { original: 'Eno fruit salt', substitute: '1/2 tsp baking soda + 1 tsp lemon juice', notes: 'Traditional leavening duo that produces good rise.' }
    ],
    safetyNotes: [
      'Take care when opening the hot steamer lid to avoid scalding steam burns.'
    ],
    servingGuide: {
      restingTime: '5 minutes after soaking.',
      garnishing: 'Showcase neat squares garnished with green chilies, mustard seeds, sesame, coconut, and cilantro.',
      plating: 'Serve on a wide plate alongside chutneys.',
      temperature: 'Warm or room temperature.',
      accompaniments: 'Spicy green mint-coriander chutney, sweet papaya sambharo, and hot fried green chilies.'
    }
  },

  // 36. THEPLA
  {
    id: 'thepla',
    name: 'Gujarati Methi Thepla (Spiced Fenugreek Flatbread)',
    cuisine: 'Indian',
    region: 'Western Indian (Gujarat)',
    servings: 4,
    prepTime: 20,
    cookTime: 15,
    difficulty: 'Easy',
    overview: {
      summary: 'Beloved Gujarati travel flatbread: wholesome whole wheat flour, gram flour (besan), and fresh tender fenugreek (methi) leaves kneaded with yogurt, sesame seeds, ajwain, turmeric, and ginger-chili paste. Rolled paper-thin, lightly pan-roasted on a tawa with oil until soft and speckled, retaining its pillowy softness for days.',
      appearance: 'Thin, pliable, golden-yellow round flatbread generously flecked with emerald-green fenugreek leaves and white sesame seeds, with delicate light brown speckles.',
      texture: 'Extremely soft, paper-thin, pliable, and melt-in-the-mouth tender.',
      flavor: 'Nutty, earthy, savory, with a delightful bitter-sweet tang from fresh methi, yogurt, and toasted sesame.',
      restingTimeMinutes: 1
    },
    equipment: [
      { name: 'Iron tawa or flat skillet', purpose: 'For quick, high-heat pan-roasting without drying out.' },
      { name: 'Rolling pin (belan)', purpose: 'To roll dough paper-thin.' }
    ],
    beforeYouStart: [
      { task: 'Pick tender leaves from 1 bunch of fresh methi (fenugreek); wash thoroughly in cold water to remove grit, drain, and chop finely (approx 100g).', durationMinutes: 12 },
      { task: 'Pound 2 green chilies with 1 inch ginger into a fine paste.', durationMinutes: 3 }
    ],
    ingredientPrepGuide: [
      { item: 'Yogurt & Oil Kneading', technique: 'Knead the flour with whisked yogurt and 2 tbsp oil instead of water alone. The lactic acid in yogurt and the fat tenderize gluten, allowing thepla to remain soft as silk for 4–5 days without staling.' }
    ],
    essentialIngredients: [
      { name: 'Chakki Atta (whole wheat flour)', prep: 'sifted', amount: '250g', metric: '250g', imperial: '8.8 oz', common: '2 cups' },
      { name: 'Besan (gram flour)', prep: 'for nutty softness', amount: '3 tbsp', metric: '30g', imperial: '1 oz', common: '3 tbsp' },
      { name: 'Fresh fenugreek leaves (methi)', prep: 'washed, dried, finely chopped', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '1.5 cups chopped' },
      { name: 'Plain yogurt (curd)', prep: 'whisked', amount: '80g', metric: '80g', imperial: '2.8 oz', common: '1/3 cup' },
      { name: 'White sesame seeds (til)', prep: 'whole', amount: '1.5 tbsp', metric: '15g', imperial: '0.5 oz', common: '1.5 tbsp' },
      { name: 'Ajwain (carom seeds)', prep: 'crushed between palms', amount: '1/2 tsp', metric: '1.5g', imperial: '0.05 oz', common: '1/2 tsp' },
      { name: 'Ginger-green chili paste', prep: 'freshly pounded', amount: '1.5 tbsp', metric: '20g', imperial: '0.7 oz', common: '1.5 tbsp' },
      { name: 'Turmeric powder', prep: 'for golden color', amount: '1/2 tsp', metric: '1.5g', imperial: '0.05 oz', common: '1/2 tsp' },
      { name: 'Kashmiri red chili powder', prep: 'for mild warmth', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Coriander-cumin powder (dhana jeera)', prep: 'ground', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Vegetable oil or groundnut oil', prep: 'divided (dough & griddling)', amount: '60ml', metric: '60ml', imperial: '2 fl oz', common: '4 tbsp' },
      { name: 'Fine sea salt', prep: 'to taste', amount: '1 tsp', metric: '6g', imperial: '0.2 oz', common: '1 tsp' },
      { name: 'Warm water', prep: 'as needed for soft dough', amount: '50ml', metric: '50ml', imperial: '1.7 fl oz', common: '3 tbsp' }
    ],
    optionalIngredients: [
      { name: 'Granulated sugar', prep: 'traditional Gujarati sweet-savory balance', amount: '1 tsp', metric: '4g', imperial: '0.14 oz', common: '1 tsp', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'KNEAD SOFT YOGURT DOUGH',
        whatYouNeed: ['250g atta', '3 tbsp besan', '100g chopped methi', '80g yogurt', '1.5 tbsp sesame seeds', '1/2 tsp ajwain', 'Ginger-chili paste', 'All spices', '2 tbsp oil', '1 tsp salt', '1 tsp sugar', '50ml warm water'],
        description: 'In a wide bowl, combine flours, spices, sesame seeds, ajwain, salt, sugar, and chopped methi leaves. Add yogurt, ginger-chili paste, and 2 tbsp oil. Rub together with your fingertips. Gradually add warm water by tablespoons and knead into a very soft, smooth, pliable dough. Smear with 1 tsp oil, cover with a damp cloth, and rest for 15 minutes.',
        howToDoIt: 'Adding yogurt tenderizes the flour proteins while methi leaves release natural moisture into the dough as they rest.',
        heat: 'Off',
        heatDescription: 'Kneading station.',
        duration: 20,
        visualCues: 'A soft, pliable, golden-yellow dough studded with green fenugreek flecks and white sesame seeds.',
        hear: 'None',
        smell: 'Aromatic fresh fenugreek, sesame, and ginger.',
        textureCheck: 'Soft as an earlobe, non-sticky, supple.',
        whatShouldThisLookLike: 'Smooth, speckled yellow-green dough ball resting under a towel.',
        tip: 'Ensure methi leaves are dry after washing; wet leaves will make the dough sticky as it rests.',
        commonMistake: 'Adding too much water initially — methi leaves will weep water when salted.',
        moveOnWhen: 'Dough is kneaded soft and has rested 15 minutes.',
        quickInstructions: 'Mix flours, methi, yogurt, sesame, spices, oil, and salt; knead into soft dough with water. Rest 15 mins.'
      },
      {
        step: 2,
        title: 'ROLL PAPER-THIN ROUNDELS',
        whatYouNeed: ['Rested dough', 'Extra atta for dusting', 'Rolling pin'],
        description: 'Divide dough into 8 equal balls (approx 45g each). Take one ball, dust lightly with flour, and roll on your board with gentle, even strokes into a paper-thin, 16cm (6.5 inch) circular flatbread. Dust with extra flour if it sticks.',
        howToDoIt: 'Theplas must be rolled paper-thin (approx 1mm thick); thick theplas become chewy and hard when cooled.',
        heat: 'Off',
        heatDescription: 'Rolling surface.',
        duration: 5,
        visualCues: 'Thin, translucent, round yellow disc patterned with green leaves and sesame seeds.',
        hear: 'None',
        smell: 'Fresh herbs and sesame.',
        textureCheck: 'Paper-thin, flexible sheet.',
        whatShouldThisLookLike: 'A neat, thin 16cm flatbread.',
        tip: 'Shake off excess dry dusting flour before placing on the hot tawa to prevent burnt flour residue.',
        commonMistake: 'Rolling too thick like a paratha — thepla should be wafer-thin.',
        moveOnWhen: 'Thepla is rolled thin and round.',
        quickInstructions: 'Roll 45g dough ball with light dusting flour into a paper-thin 16cm roundel.'
      },
      {
        step: 3,
        title: 'FLASH PAN-ROAST WITH OIL',
        whatYouNeed: ['Rolled thepla', 'Hot iron tawa over Medium-High heat', 'Oil for brushing', 'Metal spatula'],
        description: 'Lay the thepla on the hot tawa. Cook for 20 seconds until tiny bubbles appear on the surface. Flip over. Brush 1 tsp oil across the cooked face. After 25 seconds, flip again and brush 1 tsp oil on the second side. Press the edges gently with a flat spatula, rotating continuously, for 20–30 seconds until light golden-brown freckles appear on both sides. Remove immediately.',
        howToDoIt: 'Theplas must be flash-cooked quickly (under 75 seconds total) over medium-high heat with generous oil. Slow cooking over low heat dries out the thin flatbread, turning it into a brittle cracker.',
        heat: 'Medium-High Heat',
        heatDescription: 'Fast, lively sizzle.',
        duration: 1.5,
        visualCues: 'Thepla puffs lightly; soft golden-brown speckles develop across both faces while remaining soft and pliable.',
        hear: 'Crisp sizzling as oil hits the hot surface.',
        smell: 'Incredible aroma of toasted sesame, roasted fenugreek, and spices.',
        textureCheck: 'Extremely soft, pliable, and flexible.',
        whatShouldThisLookLike: 'Soft, golden-speckled flatbread patterned with green methi leaves.',
        tip: 'Stack hot theplas on top of each other inside a cloth-lined container; stacking traps residual steam and keeps them soft as handkerchiefs.',
        commonMistake: 'Over-cooking on low heat — this turns thepla into a hard papad.',
        moveOnWhen: 'Both sides have light golden speckles (approx 60-75 seconds total).',
        quickInstructions: 'Cook on medium-high tawa 20s; flip, brush with oil, flip and brush second side; press 20s until speckled and soft.'
      }
    ],
    commonMistakes: [
      { mistake: 'Thepla turned hard and crispy like a cracker.', remedy: 'Cooked too long on low heat. Flash-cook over medium-high heat for only 60–75 seconds total with oil.' },
      { mistake: 'Thepla tastes unpleasantly bitter.', remedy: 'You used bitter stems instead of tender leaves, or omitted yogurt and a pinch of sugar which balance methi bitterness.' }
    ],
    troubleshooting: [
      {
        problem: 'Dough became sticky and wet while resting',
        whatHappened: 'Salt drew out water from the fresh methi leaves.',
        whyItHappened: 'Moisture released from greens.',
        whatToDoNow: 'Knead in 2 tablespoons of dry whole wheat flour to restore soft, workable consistency.',
        howToPrevent: 'Ensure methi leaves are completely dry before chopping and adding to flour.'
      }
    ],
    substitutions: [
      { original: 'Fresh Methi leaves', substitute: 'Kasuri methi (dried fenugreek leaves, soaked and squeezed) or fresh spinach (Palak Thepla)', notes: 'Kasuri methi theplas are deeply aromatic and convenient year-round.' }
    ],
    safetyNotes: [
      'Take care when brushing oil on the hot tawa to avoid oil spatters.'
    ],
    servingGuide: {
      restingTime: 'Stack hot inside a cloth-lined box.',
      garnishing: 'Serve soft and folded.',
      plating: 'Fold into quarters and serve on a plate.',
      temperature: 'Warm or room temperature.',
      accompaniments: 'Chundo (sweet Gujarati mango pickle), plain thick yogurt (dahi), and piping hot masala chai.'
    }
  }
];
