// South Indian culinary recipes Part 1B
module.exports = [
  // 17. MEDU VADA
  {
    id: 'vada',
    name: 'Crispy South Indian Medu Vada',
    cuisine: 'Indian',
    region: 'South Indian (Tamil Nadu / Karnataka / Andhra)',
    servings: 4,
    prepTime: 25,
    cookTime: 20,
    difficulty: 'Medium',
    overview: {
      summary: 'Crispy, golden-brown, donut-shaped fritters made from soaked whole white urad dal ground with minimal ice water into a fluffy, aerated batter. Folded with crushed black peppercorns, fresh ginger, green chilies, and curry leaves, shaped with a hole in the center, and deep-fried to a crunchy exterior and melt-in-the-mouth fluffy interior.',
      appearance: 'Perfect golden-amber donuts with a smooth, crunchy crust, speckled with black peppercorns and green curry leaves, served piping hot alongside coconut chutney and hot sambar.',
      texture: 'Shatteringly crisp, brittle exterior yielding to an extraordinarily light, aerated, cotton-soft interior with zero grease absorption.',
      flavor: 'Savory, nutty lentil richness accented by sharp ginger heat, citrusy curry leaves, and the sudden biting warmth of cracked black pepper.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Heavy iron kadhai or deep fryer', purpose: 'Holds stable deep-frying temperature at 180°C (350°F).' },
      { name: 'Slotted spider skimmer', purpose: 'For turning and draining vadas without bruising the crust.' },
      { name: 'Small plastic sheet / banana leaf or wet palms', purpose: 'For shaping the donut ring and releasing into hot oil.' }
    ],
    beforeYouStart: [
      { task: 'Soak 250g whole white urad dal in cold water for 3 hours (do not over-soak or dal absorbs excess water).', durationMinutes: 180 },
      { task: 'Drain dal thoroughly in a colander for 10 minutes until completely dry of surface water.', durationMinutes: 10 },
      { task: 'Chill 100ml water with ice cubes for grinding.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'Grinding Technique', technique: 'Grind dal using 2–3 tablespoons of ice-cold water only. Add water in small teaspoons. The batter must become thick, fluffy, and voluminous like marshmallow fluff without turning runny.' },
      { item: 'Whipping Aeration Test', technique: 'Beat the ground batter with your hand in one direction for 3 minutes. Drop a teaspoon of batter into a bowl of water: it MUST float completely on the surface like an island. If it sinks, beat for 2 more minutes to incorporate air.' }
    ],
    essentialIngredients: [
      { name: 'Whole white urad dal (gota)', prep: 'soaked 3 hours & drained dry', amount: '250g', metric: '250g', imperial: '8.8 oz', common: '1.25 cups dry' },
      { name: 'Ice water', prep: 'added teaspoon by teaspoon during grinding', amount: '50ml', metric: '50ml', imperial: '1.7 fl oz', common: '3.5 tbsp' },
      { name: 'Whole black peppercorns', prep: 'coarsely cracked', amount: '1.5 tsp', metric: '4.5g', imperial: '0.15 oz', common: '1.5 tsp' },
      { name: 'Fresh ginger', prep: 'finely minced', amount: '1 tbsp', metric: '15g', imperial: '0.5 oz', common: '1 tbsp' },
      { name: 'Green chilies', prep: 'finely minced', amount: '2 chilies', metric: '10g', imperial: '0.35 oz', common: '2 chilies' },
      { name: 'Fresh curry leaves', prep: 'finely chopped', amount: '15 leaves', metric: '2g', imperial: '0.07 oz', common: '2 sprigs' },
      { name: 'Hing (asafoetida)', prep: 'powder', amount: '1/4 tsp', metric: '1g', imperial: '0.03 oz', common: '1/4 tsp' },
      { name: 'Rice flour', prep: 'for extra crispness', amount: '1.5 tbsp', metric: '15g', imperial: '0.5 oz', common: '1.5 tbsp' },
      { name: 'Fine sea salt', prep: 'to taste', amount: '1 tsp', metric: '6g', imperial: '0.2 oz', common: '1 tsp' },
      { name: 'Oil for deep frying', prep: 'peanut or sunflower oil', amount: '750ml', metric: '750ml', imperial: '25 fl oz', common: '3 cups' }
    ],
    optionalIngredients: [
      { name: 'Fresh coconut pieces', prep: 'chopped into tiny 3mm bits for crunch', amount: '2 tbsp', metric: '20g', imperial: '0.7 oz', common: '2 tbsp', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'ICE-COLD GRIND & AERATION WHIP',
        whatYouNeed: ['250g drained urad dal', '50ml ice water', 'Food processor or wet grinder', 'Bowl of water for float test'],
        description: 'Add drained urad dal to your grinder. Sprinkle 1 tablespoon of ice-cold water. Grind in pulses, stopping to scrape down sides, adding water only by the teaspoon. Grind until the batter is dense, smooth, and fluffy like whipped meringue (takes 8–10 minutes). Transfer to a bowl. Beat vigorously with your hand in one direction for 3 minutes to incorporate maximum air. Drop a teaspoon into water — it must float like a cloud.',
        howToDoIt: 'Ice water prevents the grinder motor from heating the batter. Heating denatures dal proteins, causing the batter to weep liquid and absorb massive oil during frying.',
        heat: 'Off',
        heatDescription: 'Grinding station.',
        duration: 15,
        visualCues: 'Batter turns from pale yellow to snowy-white and expands 1.5x in volume like shaving cream.',
        hear: 'Whisking sound as hand incorporates air.',
        smell: 'Clean, sweet, fresh lentil aroma.',
        textureCheck: 'Fluffy, thick, holding its peak without dripping from a spoon.',
        whatShouldThisLookLike: 'Thick, white, marshmallow-like batter floating on water.',
        tip: 'If batter becomes accidentally watery, stir in 1–2 tbsp of fine rice flour to absorb excess moisture.',
        commonMistake: 'Pouring all water at once — you will get runny batter that cannot be shaped into donuts.',
        moveOnWhen: 'Batter is white, fluffy, and passes the water float test.',
        quickInstructions: 'Grind dal with minimal ice water into thick white fluff; beat by hand 3 mins until a spoonful floats in water.'
      },
      {
        step: 2,
        title: 'FOLD IN AROMATICS & SEASONINGS',
        whatYouNeed: ['Whipped dal batter', '1.5 tsp cracked black pepper', '1 tbsp minced ginger', '2 minced green chilies', 'Chopped curry leaves', '1/4 tsp hing', '1.5 tbsp rice flour', '1 tsp salt'],
        description: 'Fold cracked black pepper, minced ginger, green chilies, curry leaves, hing, rice flour, and salt into the whipped batter using a spatula. Mix gently in one direction to distribute spices evenly without knocking out incorporated air.',
        howToDoIt: 'Adding salt and aromatics at the very end ensures salt does not draw out moisture from the dal while resting.',
        heat: 'Off',
        heatDescription: 'Flavoring.',
        duration: 3,
        visualCues: 'White fluffy batter speckled with black pepper, green herbs, and ginger.',
        hear: 'None',
        smell: 'Sharp ginger, peppery warmth, and citrusy curry leaves.',
        textureCheck: 'Fluffy, workable dough-like batter.',
        whatShouldThisLookLike: 'Speckled, thick, aerated batter.',
        tip: 'Fry immediately after adding salt; letting salted batter sit causes it to liquefy.',
        commonMistake: 'Adding salt before beating the batter — salt breaks the foam volume.',
        moveOnWhen: 'Spices are folded evenly into batter.',
        quickInstructions: 'Fold in pepper, ginger, chilies, curry leaves, hing, rice flour, and salt gently.'
      },
      {
        step: 3,
        title: 'SHAPE THE DONUT RING (MEDU HOLE)',
        whatYouNeed: ['Flavored batter', 'Bowl of water for wetting hands', 'Small wet plastic sheet or your wet palm'],
        description: 'Heat frying oil in a kadhai to 180°C (350°F). Wet both your hands thoroughly with water. Scoop a lemon-sized ball of batter (approx 50g) in your right hand. Smooth the ball gently on your wet palm or on a wet plastic sheet. Poke a hole in the center with your wet index finger to form a neat donut ring.',
        howToDoIt: 'The hole in the center is functional: it allows hot oil to flow through the core, cooking the thick center simultaneously with the outer rim so the vada cooks through without raw batter in the middle.',
        heat: 'Off (Hand Shaping)',
        heatDescription: 'Shaping at pan side.',
        duration: 1,
        visualCues: 'Smooth, round donut of white batter resting on wet fingers.',
        hear: 'None',
        smell: 'Herbal batter.',
        textureCheck: 'Soft ring that slides easily on wet skin.',
        whatShouldThisLookLike: 'Neat donut-shaped batter ring ready to drop.',
        tip: 'Keep hands wet with water before scooping each vada; water prevents the sticky batter from clinging to your fingers.',
        commonMistake: 'Making vadas without a center hole — the exterior will burn before the thick center cooks through.',
        moveOnWhen: 'Donut is formed and ready to release into oil.',
        quickInstructions: 'With wet hands, shape 50g batter into a ball, flatten on palm, poke a hole in center with index finger.'
      },
      {
        step: 4,
        title: 'DEEP FRY TO GOLDEN CRUNCH',
        whatYouNeed: ['Shaped vada ring', 'Hot oil at 180°C (350°F)', 'Spider skimmer', 'Paper towel-lined tray'],
        description: 'Gently tilt your palm and slide the shaped vada into the hot oil close to the surface. It will sink for 2 seconds, then immediately bob to the surface and inflate into a plump ring. Fry 3–4 vadas per batch on medium heat for 4–5 minutes, flipping frequently with the spider skimmer, until they turn a deep, uniform golden-amber color. Lift out, drain for 10 seconds over the pot, and transfer to paper towels.',
        howToDoIt: 'Frying at 180°C flashes external moisture into steam, forming a rigid, impervious crust that prevents oil from penetrating the aerated interior.',
        heat: 'Medium Heat (180°C / 350°F)',
        heatDescription: 'Steady, lively bubbling around each vada without smoking.',
        duration: 5,
        visualCues: 'Vadas puff into plump rings; crust turns from pale cream to deep golden-amber; bubbles subside as moisture leaves.',
        hear: 'Lively, crisp sizzling that gradually softens as crust sets.',
        smell: 'Incredible aroma of hot, crispy fried lentils and black pepper.',
        textureCheck: 'Rigid, shatteringly crisp shell when tapped with skimmer.',
        whatShouldThisLookLike: 'Glossy, perfectly round golden-amber medu vadas.',
        tip: 'Fry on medium heat; high heat browns the outside in 1 minute, leaving raw batter in the center.',
        commonMistake: 'Dropping vadas into cool oil (<160°C) — they will absorb grease like a sponge and become heavy and oily.',
        moveOnWhen: 'Vadas are deep golden on both sides, drained, and crisp.',
        quickInstructions: 'Slide into 180°C oil; fry 4-5 mins on medium, turning often until deep golden-amber. Drain.'
      }
    ],
    commonMistakes: [
      { mistake: 'Vadas soaked up too much oil.', remedy: 'The batter had too much water or the frying oil was too cold. Keep batter thick and fry at steady 180°C.' },
      { mistake: 'Interior is raw and pasty while outside is dark.', remedy: 'Oil was too hot (>195°C) or you did not make a hole in the center.' }
    ],
    troubleshooting: [
      {
        problem: 'Batter is too sticky to release from fingers into oil',
        whatHappened: 'Hands were not wet enough with water.',
        whyItHappened: 'Lentil starches adhered to dry skin.',
        whatToDoNow: 'Dip your fingers in water before handling each portion, or shape on a wet plastic sheet and flip it into the oil.',
        howToPrevent: 'Keep a small bowl of cold water beside the stove and dip hands before every single vada.'
      }
    ],
    substitutions: [
      { original: 'Rice flour', substitute: 'Fine semolina (sooji) or cornstarch', notes: 'Sooji adds fantastic long-lasting crunch to the crust.' }
    ],
    safetyNotes: [
      'Slide vadas gently right at oil level; dropping from a height causes dangerous hot oil splatters.'
    ],
    servingGuide: {
      restingTime: '2 minutes.',
      garnishing: 'Serve whole alongside fried green chilies and fresh curry leaves.',
      plating: 'Serve 2 hot vadas on a banana leaf alongside bowls of chutney and hot sambar (or serve submerged as Sambar Vada).',
      temperature: 'Piping hot and crisp.',
      accompaniments: 'Fresh coconut chutney, spicy red chili-garlic chutney, and hot tangy drumstick sambar.'
    }
  },

  // 18. UTTAPPAM
  {
    id: 'uttappam',
    name: 'South Indian Onion Tomato Uttappam',
    cuisine: 'Indian',
    region: 'South Indian (Tamil Nadu / Kerala)',
    servings: 4,
    prepTime: 15,
    cookTime: 15,
    difficulty: 'Easy',
    overview: {
      summary: 'Thick, soft, savory fermented rice and lentil pancake, studded generously with finely diced red onions, ripe tomatoes, green chilies, and fresh coriander. Griddled with cold-pressed sesame oil or ghee until golden and crispy on the edges while remaining spongy and pillowy in the center.',
      appearance: 'Vibrant, colorful, thick golden-crusted pancake embedded with red onions, bright red tomatoes, and green herbs, served with coconut chutney.',
      texture: 'Crispy and browned along the bottom and outer perimeter, soft, spongy, and moist in the center with crunchy onion bites.',
      flavor: 'Tangy fermented sourdough profile balanced by sweet caramelized onions, fresh acid from tomatoes, and aromatic curry leaf warmth.',
      restingTimeMinutes: 1
    },
    equipment: [
      { name: 'Heavy Cast Iron Tawa or Skillet', purpose: 'Produces a crispy, golden bottom while cooking the thick batter through.' },
      { name: 'Wide metal spatula', purpose: 'For flipping the heavy, topping-laden pancake cleanly.' }
    ],
    beforeYouStart: [
      { task: 'Finely dice 2 red onions, 2 ripe plum tomatoes, 2 green chilies, and 1/4 cup cilantro.', durationMinutes: 8 },
      { task: 'Use slightly sour 2nd or 3rd-day fermented idli/dosa batter (slightly thicker than dosa batter).', durationMinutes: 2 }
    ],
    ingredientPrepGuide: [
      { item: 'Topping Embedding', technique: 'Press diced vegetable toppings gently into the wet top batter using the flat of your spatula immediately after pouring so they bind into the pancake before flipping.' }
    ],
    essentialIngredients: [
      { name: 'Fermented Idli/Dosa batter', prep: 'thick, aerated consistency', amount: '400g', metric: '400g', imperial: '14 oz', common: '2 cups' },
      { name: 'Red onions', prep: 'finely diced into 5mm cubes', amount: '2 medium', metric: '180g', imperial: '6.3 oz', common: '1 cup' },
      { name: 'Plum tomatoes', prep: 'seeded & finely diced', amount: '2 medium', metric: '150g', imperial: '5.3 oz', common: '3/4 cup' },
      { name: 'Green chilies', prep: 'finely minced', amount: '2 chilies', metric: '10g', imperial: '0.35 oz', common: '2 chilies' },
      { name: 'Fresh cilantro', prep: 'finely chopped', amount: '1/4 cup', metric: '15g', imperial: '0.5 oz', common: '1/4 cup' },
      { name: 'Fresh curry leaves', prep: 'finely shredded', amount: '10 leaves', metric: '1.5g', imperial: '0.05 oz', common: '1 sprig' },
      { name: 'Cold-pressed sesame oil (gingelly) or Ghee', prep: 'for pan-griddling', amount: '3 tbsp', metric: '45ml', imperial: '1.5 fl oz', common: '3 tbsp' },
      { name: 'Idli podi (gunpowder spice)', prep: 'optional sprinkle over toppings', amount: '1 tbsp', metric: '10g', imperial: '0.35 oz', common: '1 tbsp' },
      { name: 'Fine sea salt', prep: 'pinch over vegetables', amount: '1/2 tsp', metric: '3g', imperial: '0.1 oz', common: '1/2 tsp' }
    ],
    optionalIngredients: [
      { name: 'Grated carrot or beetroot', prep: 'for extra color & sweetness', amount: '1/4 cup', metric: '30g', imperial: '1 oz', common: '1/4 cup', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'POUR THICK BATTER ROUNDEL',
        whatYouNeed: ['Thick fermented batter', 'Cast iron tawa on Medium heat', '1 tsp sesame oil', 'Ladle'],
        description: 'Heat cast iron tawa over medium heat. Lightly grease with a drop of sesame oil. Pour 2 full ladles of thick batter (approx 120ml) onto the center. With the back of the ladle, spread it out slightly into an even 18cm (7 inch) circle about 8–10mm thick. Do not spread it thin like a dosa; uttappam must remain a thick pancake.',
        howToDoIt: 'Leaving the batter thick creates a moist, spongy interior that traps steam, while the bottom crisps against the hot cast iron.',
        heat: 'Medium Heat',
        heatDescription: 'Steady moderate heat.',
        duration: 1,
        visualCues: 'Thick white pancake batter with small steam bubbles opening across the surface.',
        hear: 'Gentle, quiet sizzle.',
        smell: 'Pleasantly tangy fermenting batter.',
        textureCheck: 'Thick batter with spongy rising edges.',
        whatShouldThisLookLike: 'Thick, white 18cm batter roundel.',
        tip: 'Use slightly sour batter; the natural acidity complements the sweetness of caramelized onions.',
        commonMistake: 'Spreading the batter too thin — it turns into a dry, flat pancake instead of a pillowy uttappam.',
        moveOnWhen: 'Batter is poured into a thick 18cm circle.',
        quickInstructions: 'Pour 2 ladles of batter on medium tawa; spread gently to an 18cm thick circle (8mm thick).'
      },
      {
        step: 2,
        title: 'EMBED TOPPINGS & PRESS',
        whatYouNeed: ['Wet batter pancake', 'Diced onions', 'Diced tomatoes', 'Green chilies', 'Cilantro', 'Curry leaves', 'Pinch of salt & idli podi', 'Flat metal spatula'],
        description: 'Immediately scatter a generous handful of diced onions, tomatoes, green chilies, curry leaves, and cilantro over the wet batter. Sprinkle a pinch of salt and optional idli podi over the vegetables. Take your flat metal spatula and press the vegetables gently down into the wet batter so they sink halfway in.',
        howToDoIt: 'Pressing anchors the vegetables into the batter before the starches cook; otherwise, when you flip the pancake, all toppings will fall off onto the griddle.',
        heat: 'Medium Heat',
        heatDescription: 'Steady sizzle.',
        duration: 1,
        visualCues: 'Vibrant mosaic of red tomatoes, onions, and green herbs embedded firmly into the white batter.',
        hear: 'Soft sizzling.',
        smell: 'Aromatic fresh vegetables and herbs meeting warm batter.',
        textureCheck: 'Toppings level with the pancake surface.',
        whatShouldThisLookLike: 'Colorful vegetable toppings firmly pressed into batter.',
        tip: 'Press firmly but gently so you do not squash the pancake flat.',
        commonMistake: 'Adding toppings after the surface has already cooked and dried — toppings will not stick.',
        moveOnWhen: 'Toppings are firmly embedded in batter.',
        quickInstructions: 'Scatter onions, tomatoes, chilies, herbs, podi over wet batter; press gently with spatula to embed.'
      },
      {
        step: 3,
        title: 'GHEE DRIZZLE & FLIP TO CARAMELIZE',
        whatYouNeed: ['Uttappam on pan', '1 tbsp sesame oil or ghee', 'Wide metal spatula'],
        description: 'Drizzle 1 tbsp sesame oil or ghee around the perimeter and over the vegetable topping. Cover with a domed lid and cook on medium heat for 2.5 minutes until the bottom is deep golden-brown and the edges look set. Remove lid. Slide your spatula underneath, flip over, and cook for 2 minutes on the vegetable side so onions and tomatoes caramelize against the iron.',
        howToDoIt: 'Covering with a lid traps steam to cook the thick center through. Flipping directly onto the vegetables caramelizes the natural sugars in onions and tomatoes, creating sweet, blistered flavors.',
        heat: 'Medium Heat',
        heatDescription: 'Lively sizzle.',
        duration: 5,
        visualCues: 'Bottom is deep golden-brown; flipped side shows gorgeous browned onion edges and roasted tomatoes.',
        hear: 'Lively sizzling of onions frying against the tawa.',
        smell: 'Sweet caramelized onions, roasted tomatoes, and nutty sesame oil.',
        textureCheck: 'Crispy crust on both faces, soft and spongy within.',
        whatShouldThisLookLike: 'Golden pancake with caramelized, roasted vegetable topping.',
        tip: 'Do not press down hard after flipping; you want the pancake to remain spongy.',
        commonMistake: 'Flipping before the bottom is fully browned, causing the soft pancake to break in half.',
        moveOnWhen: 'Vegetables are caramelized and bottom is golden-crisp.',
        quickInstructions: 'Drizzle oil around edges, cover 2.5 mins. Flip and cook 2 mins until vegetables caramelize.'
      }
    ],
    commonMistakes: [
      { mistake: 'Toppings fell off into the pan when flipped.', remedy: 'You did not press the vegetables firmly into the wet batter immediately after pouring.' },
      { mistake: 'Center was raw and pasty.', remedy: 'The heat was too high or you didn\'t cover with a lid. Cover with a lid on medium heat so steam cooks the thick center.' }
    ],
    troubleshooting: [
      {
        problem: 'Uttappam stuck to the pan and tore',
        whatHappened: 'Cast iron pan was dry or not seasoned.',
        whyItHappened: 'Insufficient fat around the thick pancake.',
        whatToDoNow: 'Drizzle an extra teaspoon of oil under the edges and let cook 1 minute longer; as the crust browns, it naturally releases from iron.',
        howToPrevent: 'Always grease tawa lightly before pouring and drizzle 1 tbsp oil around edges.'
      }
    ],
    substitutions: [
      { original: 'Cold-pressed sesame oil (gingelly)', substitute: 'Ghee or butter', notes: 'Ghee adds luxurious dairy richness.' }
    ],
    safetyNotes: [
      'Take care when flipping the heavy, oil-basted pancake to avoid oil splatters.'
    ],
    servingGuide: {
      restingTime: '1 minute.',
      garnishing: 'Dust lightly with extra idli podi and a drizzle of melted ghee.',
      plating: 'Serve whole on a plate with vegetable side up.',
      temperature: 'Hot off the tawa.',
      accompaniments: 'Coconut chutney, spicy onion-tomato chutney, and piping hot sambar.'
    }
  },

  // 19. APPAM (KERALA PALAPPAM)
  {
    id: 'appam',
    name: 'Kerala Palappam (Lacy Fermented Rice Pancakes)',
    cuisine: 'Indian',
    region: 'South Indian (Kerala)',
    servings: 4,
    prepTime: 20,
    cookTime: 15,
    difficulty: 'Medium',
    overview: {
      summary: 'Delicate, bowl-shaped fermented rice and coconut milk crepes with paper-thin, crisp, lacy frilled edges and a soft, pillowy, spongy white dome in the center. Swirled in a curved iron appachatti wok, steamed under a lid, and served with vegetable stew or sweetened coconut milk.',
      appearance: 'Exquisite bowl-shaped pancake with an ultra-thin, golden, crisp lacy filigree perimeter surrounding a thick, pristine snow-white, spongy cloud in the middle.',
      texture: 'Crisp, feather-light crunch around the lacy rim contrasting with a soft, moist, melt-in-the-mouth honeycomb sponge center.',
      flavor: 'Delicate, subtle natural sweetness with gentle coconut cream richness and a clean, refreshing fermented tang.',
      restingTimeMinutes: 1
    },
    equipment: [
      { name: 'Appachatti (curved appam wok with lid)', purpose: 'The curved bowl shape allows thin batter to pool into a thick center while clinging to the high edges in a paper-thin lace.' },
      { name: 'Deep domed lid', purpose: 'Traps steam to cook the thick center sponge without flipping.' }
    ],
    beforeYouStart: [
      { task: 'Soak 300g raw rice in water for 4 hours; drain.', durationMinutes: 240 },
      { task: 'Grind soaked rice with 1 cup fresh grated coconut, 1/2 cup cooked rice, 1/2 tsp yeast, 2 tbsp sugar, and water into a smooth batter; ferment 8–10 hours.', durationMinutes: 600 },
      { task: 'Stir 100ml thick coconut milk and 1/2 tsp salt into fermented batter.', durationMinutes: 3 }
    ],
    ingredientPrepGuide: [
      { item: 'Cooked Rice in Batter', technique: 'Blending a small portion of cooked rice into the raw rice batter provides gelatinized starch that creates the iconic honeycomb sponginess in the center dome.' },
      { item: 'Swirling the Appachatti', technique: 'Pour batter into the center of the warm wok, lift the wok by both handles, tilt and swirl in a continuous 360-degree motion once or twice. The batter coats the curved sides in a thin film while the excess pools naturally in the center.' }
    ],
    essentialIngredients: [
      { name: 'Raw white rice (Sona Masoori or Raw Ponni)', prep: 'soaked 4 hours', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '1.5 cups' },
      { name: 'Fresh grated coconut', prep: 'finely grated', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '1 cup' },
      { name: 'Cooked rice', prep: 'soft cooked', amount: '80g', metric: '80g', imperial: '2.8 oz', common: '1/2 cup' },
      { name: 'Thick coconut milk', prep: 'fresh or canned', amount: '100ml', metric: '100ml', imperial: '3.4 fl oz', common: '1/2 cup' },
      { name: 'Instant dry yeast', prep: 'active', amount: '1/2 tsp', metric: '1.5g', imperial: '0.05 oz', common: '1/2 tsp' },
      { name: 'Granulated sugar', prep: 'for fermentation & sweetness', amount: '2 tbsp', metric: '25g', imperial: '0.9 oz', common: '2 tbsp' },
      { name: 'Fine sea salt', prep: 'added after fermentation', amount: '1/2 tsp', metric: '3g', imperial: '0.1 oz', common: '1/2 tsp' },
      { name: 'Coconut oil', prep: 'lightly greased on wok', amount: '1 tsp', metric: '5ml', imperial: '0.17 fl oz', common: '1 tsp' }
    ],
    optionalIngredients: [
      { name: 'Toddy (fermented palm sap)', prep: 'traditional fermentation agent in place of yeast', amount: '60ml', metric: '60ml', imperial: '2 fl oz', common: '1/4 cup', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'AERATE & CHECK BATTER CONSISTENCY',
        whatYouNeed: ['Fermented appam batter', '100ml thick coconut milk', '1/2 tsp salt'],
        description: 'Inspect fermented batter: it should be light, bubbly, and smell sweet and fermented. Gently fold in 100ml thick coconut milk and 1/2 tsp salt. The consistency should be flowing and slightly thinner than regular dosa batter (similar to light cream).',
        howToDoIt: 'Adding thick coconut milk right before cooking enriches the center sponge and gives the lacy frills a rich, toasted coconut fragrance.',
        heat: 'Off',
        heatDescription: 'Batter station.',
        duration: 3,
        visualCues: 'Bubbly, frothy, flowing batter with tiny popping surface bubbles.',
        hear: 'Gentle crackle of micro-bubbles.',
        smell: 'Sweet coconut, yeast, and fermented rice aroma.',
        textureCheck: 'Flowing cream consistency, not thick or clumpy.',
        whatShouldThisLookLike: 'Silky, foamy, flowing white batter.',
        tip: 'If batter is too thick, center will not cook through; add 2 tbsp water if needed.',
        commonMistake: 'Making batter too thick, preventing smooth swirling around the curved pan.',
        moveOnWhen: 'Coconut milk is incorporated and batter is flowing.',
        quickInstructions: 'Fold coconut milk and salt into bubbly fermented batter to reach light cream consistency.'
      },
      {
        step: 2,
        title: 'POUR & THE 360-DEGREE PAN SWIRL',
        whatYouNeed: ['Appachatti wok on Medium heat', 'Few drops coconut oil on paper towel', '1 ladle of batter (approx 75ml)'],
        description: 'Heat the appachatti over medium heat. Lightly wipe with an oiled paper towel. Pour 1 ladleful (approx 75ml) of batter directly into the center. Immediately lift the pan by both handles, tilt it at an angle, and smoothly swirl it in a complete 360-degree circle twice. Return pan to stove.',
        howToDoIt: 'Centrifugal force washes a thin layer of batter up the curved sloping walls where it immediately clings and cooks into a lacy web, while remaining batter flows back to settle into a thick central cushion.',
        heat: 'Medium Heat',
        heatDescription: 'Steady moderate heat.',
        duration: 1,
        visualCues: 'A paper-thin film coats the curved walls; excess batter pools in the center depression, bubbling with steam holes.',
        hear: 'Soft hiss during the swirl.',
        smell: 'Toasted coconut and sweet rice.',
        textureCheck: 'Thin lacy rim with thick liquid center.',
        whatShouldThisLookLike: 'Bowl-shaped batter coat with a thick pool in the center.',
        tip: 'Swirl smoothly in one continuous fluid motion without jerking.',
        commonMistake: 'Hesitating before swirling — if batter sits in the pan for 3 seconds, it sets and will not swirl.',
        moveOnWhen: 'Batter is swirled up the sides with center pooled.',
        quickInstructions: 'Pour 75ml batter in center of hot wok, lift and swirl 360 degrees in one motion; set on stove.'
      },
      {
        step: 3,
        title: 'COVER, STEAM & CRISP UNDER LID',
        whatYouNeed: ['Appachatti with swirled batter', 'Tight domed lid'],
        description: 'Immediately cover the pan tightly with its domed lid. Cook on medium-low heat for 2 to 2.5 minutes undisturbed. Do not remove lid during cooking.',
        howToDoIt: 'Appam is NEVER flipped. The trapped steam under the curved lid cooks the thick center into a spongy honeycomb dome, while direct contact heat fries the thin edges crisp.',
        heat: 'Medium-Low Heat',
        heatDescription: 'Trapped steam cooking.',
        duration: 2.5,
        visualCues: 'Steam wisps escape from lid edges.',
        hear: 'Gentle hissing of trapped steam.',
        smell: 'Sweet steamed rice and toasted coconut.',
        textureCheck: 'Center is cooked through like a fluffy sponge.',
        whatShouldThisLookLike: 'Lidded wok steaming gently.',
        tip: 'Keep heat at medium-low so the lacy edges do not burn before the thick center sponge cooks through.',
        commonMistake: 'Flipping the appam — appam must cook entirely by trapped steam from above and griddle heat from below.',
        moveOnWhen: 'Cooked for 2.5 minutes under lid.',
        quickInstructions: 'Cover tightly with domed lid; steam 2-2.5 mins on medium-low without opening.'
      },
      {
        step: 4,
        title: 'UNCOVER, RELEASE & SERVE',
        whatYouNeed: ['Cooked appam in wok', 'Thin spatula or butter knife'],
        description: 'Remove the lid. The center should be completely set, opaque white, and springy to the touch with small honeycomb craters. The lacy outer edges should be golden-brown and naturally pulling away from the sides. Gently run a thin spatula around the top rim to release, then slide the appam onto a plate.',
        howToDoIt: 'As the thin lacy edges lose moisture, they crisp and separate cleanly from the pan without sticking.',
        heat: 'Off',
        heatDescription: 'Demoulding.',
        duration: 1,
        visualCues: 'Center is a soft, snow-white spongy dome; edges are crisp, golden, and lacy.',
        hear: 'Delicate crunch when rim is touched.',
        smell: 'Fresh coconut and sweet fermented rice.',
        textureCheck: 'Crisp lacy perimeter with cloud-soft spongy center.',
        whatShouldThisLookLike: 'Pristine, bowl-shaped Kerala Palappam with golden lacy frills.',
        tip: 'Slide onto plate immediately; do not stack hot appams or steam will soften the crisp lace.',
        commonMistake: 'Lifting while center is still wet and shiny — cook 30 seconds longer if center is tacky.',
        moveOnWhen: 'Appam slides cleanly onto plate.',
        quickInstructions: 'Uncover; verify center is springy and edges are golden-crisp; slide onto plate.'
      }
    ],
    commonMistakes: [
      { mistake: 'Center remained raw and sticky.', remedy: 'The lid was opened too early or batter was too thick. Steam undisturbed for 2.5 minutes on medium-low.' },
      { mistake: 'Lacy edges tore when swirling.', remedy: 'The wok was too hot or batter was too thin. Allow pan to cool slightly before swirling.' }
    ],
    troubleshooting: [
      {
        problem: 'I do not have a curved appachatti wok',
        whatHappened: 'Need alternative pan.',
        whyItHappened: 'Only flat skillet available.',
        whatToDoNow: 'Use a small 8-inch non-stick skillet or wok; pour batter and tilt to coat the edges, or make flat spongy pancakes (Vellayappam style).',
        howToPrevent: 'A small curved wok produces the traditional bowl shape.'
      }
    ],
    substitutions: [
      { original: 'Instant dry yeast', substitute: '1/4 cup fresh coconut water fermented for 24 hours', notes: 'Traditional organic fermentation method.' }
    ],
    safetyNotes: [
      'Appachatti wok handles get very hot; use silicone grips or folded cloths when swirling.'
    ],
    servingGuide: {
      restingTime: 'Serve immediately.',
      garnishing: 'Serve as an open bowl.',
      plating: 'Place on a plate with curved edges upright.',
      temperature: 'Piping hot.',
      accompaniments: 'Kerala Vegetable Stew (Ishtu), Chicken Stew, Egg Roast, or sweet sweetened coconut milk with cardamom.'
    }
  },

  // 20. PUTTU
  {
    id: 'puttu',
    name: 'Kerala Ari Puttu (Steamed Rice & Coconut Cylinders)',
    cuisine: 'Indian',
    region: 'South Indian (Kerala)',
    servings: 4,
    prepTime: 20,
    cookTime: 12,
    difficulty: 'Medium',
    overview: {
      summary: 'Traditional Kerala breakfast staple: coarsely ground roasted rice flour moistened with salted water into damp breadcrumbs, layered alternately with sweet freshly grated coconut inside a cylindrical steel puttu kutti, and steam-cooked into aromatic, tender, crumbly logs.',
      appearance: 'Striking cylindrical white log with alternating layers of fluffy steamed rice flour and snow-white grated coconut bands.',
      texture: 'Moist, tender, crumbly, and melt-in-the-mouth soft without being sticky or dry.',
      flavor: 'Pure, wholesome toasted rice flavor enriched with sweet nutty fresh coconut and gentle salt.',
      restingTimeMinutes: 1
    },
    equipment: [
      { name: 'Puttu Kudam & Kutti (cylindrical puttu steamer)', purpose: 'Water boils in the bottom pot (kudam), forcing steam up through the perforated disc of the cylinder (kutti) to cook the rice evenly.' },
      { name: 'Long wooden pusher rod', purpose: 'To gently push the steamed puttu log out of the cylinder onto the plate.' }
    ],
    beforeYouStart: [
      { task: 'Grate 1 fresh coconut to yield 150g fresh white coconut shavings.', durationMinutes: 10 },
      { task: 'Dissolve 1 tsp salt in 150ml warm water for moistening the flour.', durationMinutes: 2 }
    ],
    ingredientPrepGuide: [
      { item: 'Puttu Flour Moisture Test (The Fist Test)', technique: 'Sprinkle salted warm water onto roasted rice flour in small splashes. Rub between your palms to break all lumps. Squeeze a fistful of flour: it MUST hold its shape firmly without crumbling, but when poked gently with a thumb, it should break apart easily into damp crumbs. If too dry = chalky puttu; if too wet = dense rubbery dough.' }
    ],
    essentialIngredients: [
      { name: 'Roasted Rice Flour for Puttu (coarse)', prep: 'dry roasted', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '2 cups' },
      { name: 'Warm water', prep: 'salted', amount: '160ml', metric: '160ml', imperial: '5.4 fl oz', common: '2/3 cup' },
      { name: 'Fine sea salt', prep: 'dissolved in warm water', amount: '1 tsp', metric: '6g', imperial: '0.2 oz', common: '1 tsp' },
      { name: 'Freshly grated coconut', prep: 'white flesh only', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '1.5 cups' }
    ],
    optionalIngredients: [
      { name: 'Cardamom powder', prep: 'mixed with coconut for sweet puttu', amount: '1/4 tsp', metric: '0.7g', imperial: '0.02 oz', common: 'pinch', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'MOISTEN & RUB RICE FLOUR (FIST TEST)',
        whatYouNeed: ['300g coarse roasted rice flour', '160ml warm water with 1 tsp salt', 'Wide mixing bowl'],
        description: 'Place rice flour in a wide bowl. Sprinkle salted warm water a few tablespoons at a time over the flour. Rub the flour between your palms continuously to distribute moisture evenly and break up any large clumps. Continue until the flour resembles damp breadcrumbs. Squeeze a handful in your fist: it should hold its shape like a solid clump, but crumble cleanly when touched with your finger. Rest covered for 10 minutes.',
        howToDoIt: 'Resting allows the dry roasted rice starches to absorb water to their core, ensuring the puttu cooks soft and moist rather than dry and sandy.',
        heat: 'Off',
        heatDescription: 'Preparation.',
        duration: 12,
        visualCues: 'Flour turns from dry white powder into damp, crumbly, lump-free sand-like granules.',
        hear: 'None',
        smell: 'Nutty, toasted rice aroma.',
        textureCheck: 'Damp crumbs that hold together when squeezed, but break apart easily.',
        whatShouldThisLookLike: 'Even damp rice granules resting in a bowl.',
        tip: 'If there are stubborn lumps, pulse the moistened flour in a food processor for 5 seconds to achieve uniform texture.',
        commonMistake: 'Pouring too much water, turning the flour into a sticky dough.',
        moveOnWhen: 'Flour passes the fist test and has rested 10 minutes.',
        quickInstructions: 'Rub warm salted water into rice flour until it passes the fist test (holds shape when squeezed, breaks easily).'
      },
      {
        step: 2,
        title: 'LAYER COCONUT & FLOUR IN PUTTU KUTTI',
        whatYouNeed: ['Moistened rice flour', '150g grated coconut', 'Puttu cylinder with perforated disc'],
        description: 'Drop the perforated steel disc into the bottom of the puttu cylinder. Add 2 tablespoons of freshly grated coconut at the bottom. Loosely spoon in moistened rice flour until one-third full. Add another layer of 1.5 tbsp coconut, followed by rice flour, repeating to finish with a layer of grated coconut at the top. Do not press or pack the flour down! Keep it completely loose.',
        howToDoIt: 'Steam must travel up freely through the microscopic spaces between the loose flour granules. If you pack the flour down firmly, steam gets blocked and the puttu remains raw in the center.',
        heat: 'Off',
        heatDescription: 'Layering.',
        duration: 3,
        visualCues: 'Striped layers of white grated coconut and damp rice flour filling the metal cylinder to the rim.',
        hear: 'None',
        smell: 'Fresh coconut and sweet toasted rice.',
        textureCheck: 'Loosely filled cylinder.',
        whatShouldThisLookLike: 'Cylindrical metal tube filled with alternating layers of coconut and rice flour.',
        tip: 'Spoon the flour in gently; never push it down with your fingers.',
        commonMistake: 'Pressing the flour down firmly — this creates a dense cement-like plug that steam cannot penetrate.',
        moveOnWhen: 'Cylinder is loosely filled and capped with its lid.',
        quickInstructions: 'Place perforated disc in cylinder; loosely layer coconut and rice flour alternately without pressing; cap lid.'
      },
      {
        step: 3,
        title: 'STEAM ONTO KUDAM TO PERFECTION',
        whatYouNeed: ['Layered puttu kutti', 'Puttu kudam (base pot) with 500ml boiling water', 'Oven mitts'],
        description: 'Ensure water in the bottom pot (kudam) is boiling vigorously with visible steam. Fit the filled cylinder securely onto the nozzle of the pot. Cook on medium-high heat. Within 2–3 minutes, steam will start escaping from the top lid holes. Once steam vents steadily, steam for exactly 5 to 6 minutes.',
        howToDoIt: 'High-pressure steam passing through the loose flour gelatinizes the rice starches and cooks the coconut, binding the crumbs into a tender cohesive cylinder.',
        heat: 'Medium-High Steam',
        heatDescription: 'Vigorous steam whistling through the lid vents.',
        duration: 7,
        visualCues: 'Jets of aromatic white steam blowing steadily through the 3 holes on the lid.',
        hear: 'Steady hissing of steam and boiling water below.',
        smell: 'Intoxicating aroma of sweet steamed coconut and toasted rice.',
        textureCheck: 'Puttu log is fully cooked and cohesive.',
        whatShouldThisLookLike: 'Puttu cylinder whistling with fragrant steam.',
        tip: 'Steam for a full 5 minutes after steam begins venting from the top holes.',
        commonMistake: 'Removing as soon as the first wisp of steam appears — it needs 5 minutes of continuous steam to cook through.',
        moveOnWhen: 'Steamed for 5 minutes after steam vents from the lid.',
        quickInstructions: 'Attach cylinder to pot of boiling water; once steam vents from lid, steam for 5 minutes.'
      },
      {
        step: 4,
        title: 'PUSH OUT & UNMOULD',
        whatYouNeed: ['Hot steamed cylinder', 'Long wooden pusher rod', 'Serving plate', 'Kitchen towel'],
        description: 'Remove the hot cylinder from the pot using a kitchen towel. Remove the lid. Hold the cylinder horizontally over a serving plate. Insert the wooden pusher rod through the bottom hole against the perforated disc, and gently push the steamed puttu log forward in one smooth motion onto the plate.',
        howToDoIt: 'The log should slide out cleanly in one intact, steaming cylinder with defined white coconut rings.',
        heat: 'Off',
        heatDescription: 'Demoulding.',
        duration: 1,
        visualCues: 'An intact, steaming cylindrical white log with decorative toasted coconut bands.',
        hear: 'Soft sliding sound.',
        smell: 'Pure Kerala morning aroma: sweet coconut and steamed rice.',
        textureCheck: 'Tender, crumbly, and melt-in-the-mouth soft.',
        whatShouldThisLookLike: 'Intact cylindrical Kerala Puttu log resting on a plate.',
        tip: 'Push smoothly and steadily to prevent the hot log from crumbling.',
        commonMistake: 'Pushing too violently, causing the cylinder to shatter into loose crumbs.',
        moveOnWhen: 'Puttu log is cleanly extruded onto the serving plate.',
        quickInstructions: 'Hold cylinder over plate, push wooden rod through bottom disc to slide the puttu log out cleanly.'
      }
    ],
    commonMistakes: [
      { mistake: 'Puttu crumbled into dry sand on the plate.', remedy: 'The flour was not moistened enough with water. It must pass the fist test before layering.' },
      { mistake: 'Puttu was dense, hard, and uncooked.', remedy: 'You pressed the flour down into the cylinder instead of spooning it in loosely.' }
    ],
    troubleshooting: [
      {
        problem: 'I do not have a puttu maker (kudam & kutti)',
        whatHappened: 'Need alternative steaming vessel.',
        whyItHappened: 'No traditional puttu tube available.',
        whatToDoNow: 'Place moistened flour and coconut layers into idli moulds or small stainless steel bowls (katoris) and steam inside a regular idli steamer for 8 minutes.',
        howToPrevent: 'Idli moulds produce delicious round puttu discs with identical flavor.'
      }
    ],
    substitutions: [
      { original: 'White Rice Flour', substitute: 'Ragi flour (finger millet) or Wheat flour', notes: 'Ragi puttu is exceptionally healthy and deeply earthy.' }
    ],
    safetyNotes: [
      'The metal cylinder gets extremely hot; always use a kitchen towel when handling.'
    ],
    servingGuide: {
      restingTime: '1 minute.',
      garnishing: 'Showcase intact cylindrical shape with visible coconut bands.',
      plating: 'Serve on a banana leaf alongside ripe bananas or spicy curry.',
      temperature: 'Steaming hot.',
      accompaniments: 'Kerala Kadala Curry (black chickpea curry in roasted coconut gravy), ripe yellow bananas (Pazham), and papadum.'
    }
  }
];
