// Mediterranean Western Culinary Recipes (Spanish 5 + Greek 5 = 10 dishes)
module.exports = [
  // 1. PAELLA (Valencian Seafood & Chicken Paella)
  {
    id: 'paella',
    name: 'Authentic Valencian Seafood Paella (Paella de Marisco)',
    cuisine: 'Spanish',
    region: 'Spain (Valencia)',
    servings: 4,
    prepTime: 25,
    cookTime: 30,
    difficulty: 'Hard',
    overview: {
      summary: 'The pride of Valencia: round-grain Bomba rice simmered in a wide, shallow carbon steel pan over an open flame, infused with saffron threads, pimentón de la Vera, rich shrimp-head seafood broth, giant prawns, mussels, and squid, cooked undisturbed until a prized, crackling, caramelized bottom crust (Socarrat) forms beneath tender saffron pearls.',
      appearance: 'A shallow golden-amber pan laden with glossy saffron rice, crowned with jumbo red prawns, steamed mussels opened in their shells, calamari rings, and lemon wedges.',
      texture: 'Plump, al dente rice grains that remain separate and infused with broth, contrasted with the shatteringly crisp, toasted socarrat crust on the bottom and tender sweet seafood.',
      flavor: 'Deep sea brininess, floral bittersweet saffron, smoky paprika, sweet caramelized sofrito (tomato, garlic, onion), and clean fresh lemon.',
      restingTimeMinutes: 5
    },
    equipment: [
      { name: '15-inch carbon steel Paella pan (Paellera)', purpose: 'Wide flat bottom and low shallow sides allow liquid to evaporate evenly so rice cooks in a thin layer.' },
      { name: 'Wooden cooking paddle', purpose: 'For sautéing sofrito and smoothing rice into an even layer.' }
    ],
    beforeYouStart: [
      { task: 'Clean 12 fresh mussels, debeard, and discard any cracked shells.', durationMinutes: 5 },
      { task: 'Steep 1/2 tsp crushed saffron threads in 4 tbsp warm broth for 15 minutes to release deep golden crocin pigments.', durationMinutes: 15 },
      { task: 'Finely grate 2 ripe tomatoes (discarding skins) and finely dice 1 small yellow onion and 4 garlic cloves (the sofrito).', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'Bomba Rice Selection', technique: 'Must use Spanish round-grain rice (Arroz Bomba or Calasparra). Bomba rice absorbs three times its volume in broth without bursting or releasing excess amylopectin starch, keeping grains separate and al dente.' },
      { item: 'Socarrat Formation (The Golden Crust)', technique: 'During the final 3 minutes of cooking, increase heat to medium-high. Listen for a distinct crackling, popping sound and smell toasted rice. The rice starches caramelize against the hot oiled steel into a legendary golden-brown crust.' }
    ],
    essentialIngredients: [
      { name: 'Spanish Bomba rice (Arroz Bomba)', prep: 'dry round-grain rice (never wash!)', amount: '350g', metric: '350g', imperial: '12 oz', common: '1.75 cups' },
      { name: 'Rich seafood stock (Caldo de Marisco)', prep: 'piping hot, infused with shrimp heads', amount: '1 liter', metric: '1000ml', imperial: '34 fl oz', common: '4.25 cups' },
      { name: 'Large raw tiger prawns or langoustines', prep: 'whole, shell-on for rich flavor', amount: '8 prawns', metric: '350g', imperial: '12 oz', common: '8 prawns' },
      { name: 'Squid / Calamari', prep: 'cleaned and sliced into 1cm rings', amount: '200g', metric: '200g', imperial: '7 oz', common: '1 cup' },
      { name: 'Fresh Mediterranean mussels', prep: 'scrubbed and debearded', amount: '12 mussels', metric: '300g', imperial: '10.5 oz', common: '12 mussels' },
      { name: 'Spanish saffron threads (Azafrán)', prep: 'crushed and bloomed in warm broth', amount: '1/2 tsp', metric: '1g', imperial: '0.03 oz', common: '1 generous pinch' },
      { name: 'Sweet Spanish smoked paprika (Pimentón dulce)', prep: 'wood-smoked paprika', amount: '1 tbsp', metric: '8g', imperial: '0.3 oz', common: '1 tbsp' },
      { name: 'Ripe tomatoes', prep: 'grated into pulp without skin', amount: '2 medium', metric: '200g', imperial: '7 oz', common: '2 tomatoes' },
      { name: 'Yellow onion & Garlic cloves', prep: 'finely minced', amount: '1 onion + 4 garlic cloves', metric: '150g', imperial: '5.3 oz', common: 'mixed' },
      { name: 'Extra virgin Spanish olive oil', prep: 'generous pour', amount: '4 tbsp', metric: '60ml', imperial: '2 fl oz', common: '1/4 cup' },
      { name: 'Fresh lemons', prep: 'cut into wedges', amount: '2 lemons', metric: '100g', imperial: '3.5 oz', common: '2 lemons' }
    ],
    steps: [
      {
        step: 1,
        title: 'SEAR PRAWNS & CALAMARI IN OLIVE OIL',
        whatYouNeed: ['Paella pan', '4 tbsp olive oil', 'Whole prawns', 'Squid rings'],
        description: 'Heat olive oil in the wide paella pan over medium-high heat. Add whole prawns and squid rings. Sear for 2 minutes on each side until prawns turn bright coral-red and squid turns opaque. Transfer seafood to a platter, leaving the fragrant red oil in the pan.',
        howToDoIt: 'High-heat searing infuses the olive oil with sweet seafood essences before the rice is added.',
        heat: 'Medium-High Heat',
        duration: 4,
        visualCues: 'Prawns curl and turn coral-red; oil turns golden-orange.',
        hear: 'Brisk, eager sizzle.',
        smell: 'Searing sweet seafood and fragrant olive oil.',
        textureCheck: 'Plump seared seafood.',
        whatShouldThisLookLike: 'Bright coral prawns seared in fragrant oil.',
        tip: 'Do not fully cook the prawns now — they will finish gently steaming on top of the rice.',
        commonMistake: 'Overcooking seafood until rubbery early on.',
        moveOnWhen: 'Prawns and squid are seared and transferred to platter.',
        quickInstructions: 'Sear prawns and squid in 4 tbsp olive oil 2 mins per side; transfer to plate.'
      },
      {
        step: 2,
        title: 'BUILD THE SOFRITO (ONION, GARLIC, TOMATO & PAPRIKA)',
        whatYouNeed: ['Minced onion', 'Minced garlic', 'Grated tomato pulp', '1 tbsp pimentón paprika'],
        description: 'Reduce heat to medium. Add minced onion and garlic to the oil; cook 4 minutes until soft. Stir in grated tomato pulp. Cook for 5 minutes, stirring constantly, until the tomato water evaporates and the mixture darkens into a thick, jammy paste. Stir in pimentón for 30 seconds.',
        howToDoIt: 'A well-concentrated sofrito is the flavor heart of Spanish rice dishes, providing caramelized savory sweetness.',
        heat: 'Medium Heat',
        duration: 7,
        visualCues: 'Tomato reduces into a deep, jam-like, glistening red-brown paste that parts when a spoon runs through it.',
        smell: 'Sweet caramelized tomato, garlic, and smoky paprika.',
        textureCheck: 'Thick, jammy paste.',
        whatShouldThisLookLike: 'Dark, glistening sofrito coating the center of the pan.',
        tip: 'Stir pimentón for 30 seconds only before adding rice — burned paprika turns terribly bitter.',
        commonMistake: 'Leaving the sofrito wet and watery, which steams the rice instead of frying it.',
        moveOnWhen: 'Sofrito is thick, jammy, and aromatic.',
        quickInstructions: 'Sauté onion and garlic 4 mins; add tomato pulp, cook 5 mins until jammy; stir in pimentón.'
      },
      {
        step: 3,
        title: 'TOAST BOMBA RICE & ADD HOT SAFFRON BROTH',
        whatYouNeed: ['350g Bomba rice', '1L hot seafood stock', 'Bloomed saffron threads', '1 tsp salt'],
        description: 'Pour dry Bomba rice into the sofrito. Stir constantly for 2 minutes to toast the rice grains until translucent and coated in red oil. Pour in 1 liter of boiling hot seafood stock, the bloomed saffron, and 1 tsp salt. Use your wooden spoon to distribute the rice evenly across the pan. FROM THIS MOMENT ON, NEVER STIR THE RICE AGAIN!',
        howToDoIt: 'Never stir rice after broth is added! Stirring releases starch into the liquid, turning paella into creamy risotto instead of distinct, separate al dente grains.',
        heat: 'High Heat to boil',
        duration: 4,
        visualCues: 'Broth boils furiously with golden saffron bubbles; rice is evenly distributed in a flat layer.',
        smell: 'Floral bittersweet saffron, rich seafood broth, and smoky paprika.',
        textureCheck: 'Submerged rice boiling evenly.',
        whatShouldThisLookLike: 'Golden yellow broth boiling across the entire wide pan.',
        tip: 'Smooth the rice flat with your paddle once, then step away and let the fire do the work.',
        commonMistake: 'Stirring the rice during cooking — ruins the individual grain texture and prevents socarrat.',
        moveOnWhen: 'Broth is boiling vigorously across the entire surface.',
        quickInstructions: 'Toast rice in sofrito 2 mins, pour in 1L boiling saffron stock, spread flat, do not stir again.'
      },
      {
        step: 4,
        title: 'THE 18-MINUTE SIMMER & SEAFOOD ARRANGEMENT',
        whatYouNeed: ['Seared prawns', 'Seared squid', '12 cleaned mussels'],
        description: 'Cook on medium-high heat for 8 minutes until rice grains emerge above the liquid. Reduce heat to medium-low. Arrange seared prawns, squid, and raw mussels hinge-side down in artistic circles across the rice. Simmer undisturbed for 7 minutes until all liquid is absorbed and mussels open wide.',
        howToDoIt: 'Placing mussels hinge-side down ensures their released briny juices flow directly into the rice as they pop open.',
        heat: 'Medium-Low Heat',
        duration: 10,
        visualCues: 'Liquid is absorbed; plump saffron rice grains are exposed; mussels pop open displaying orange meat.',
        hear: 'Boiling transitions to gentle sizzling.',
        smell: 'Sweet ocean mussels and toasted saffron rice.',
        textureCheck: 'Rice grains are tender with slight al dente core.',
        whatShouldThisLookLike: 'Glistening paella with opened mussels and red prawns nestled in golden rice.',
        tip: 'Discard any mussels that do not open after 7 minutes.',
        commonMistake: 'Covering with foil too early, trapping steam that softens the rice.',
        moveOnWhen: 'Liquid is fully absorbed and mussels are wide open.',
        quickInstructions: 'Cook 8 mins, lower heat, arrange seafood and mussels on top, simmer 7 mins until liquid is gone.'
      },
      {
        step: 5,
        title: 'BUILD THE SOCARRAT (CRACKLING CRUST) & REST',
        whatYouNeed: ['Paella pan', 'Clean kitchen towel'],
        description: 'Crank heat to medium-high for 2 to 3 minutes. Listen closely: you will hear a rapid, rhythmic crackling and popping sound, and smell the intoxicating aroma of toasted rice. Poke the bottom with a spoon: you will feel a hard, crisp crust. TURN OFF HEAT IMMEDIATELY. Cover the entire pan with a clean tea towel and let rest undisturbed for 5 minutes before serving with lemon wedges.',
        howToDoIt: 'High heat fries the bottom layer of rice in the rendered olive oil, creating the coveted crispy socarrat. The 5-minute towel rest allows surface rice to soften while the crust sets.',
        heat: 'Medium-High 2-3 mins, then OFF',
        duration: 7,
        visualCues: 'Faint wisps of toasted smoke; rice edges pull slightly away from metal; crust forms.',
        hear: 'Sharp, distinct crackling and popping sounds ("ch-ch-ch").',
        smell: 'Deep toasted rice aroma (not acrid black smoke!).',
        textureCheck: 'Shatteringly crisp crust on pan bottom.',
        whatShouldThisLookLike: 'Masterpiece Valencian Paella de Marisco.',
        tip: 'Scrape the crunchy golden-brown socarrat from the bottom with a spoon for every guest!',
        commonMistake: 'Leaving on high heat until it smells like burnt rubber — watch the aroma like a hawk.',
        moveOnWhen: '5-minute towel rest is complete.',
        quickInstructions: 'Crank heat 2-3 mins until loud crackling is heard (socarrat); turn off heat, cover with towel, rest 5 mins.'
      }
    ],
    commonMistakes: [
      { mistake: 'Rice was mushy and clumpy like risotto.', remedy: 'The rice was stirred while cooking. Never stir paella rice after the broth is added.' },
      { mistake: 'Socarrat was black, bitter, and burnt.', remedy: 'Heat was left on too long at the end. Turn off the flame the instant you smell toasted rice.' }
    ],
    troubleshooting: [
      {
        problem: 'Top layer of rice is still slightly hard after liquid is gone',
        whatHappened: 'Evaporation was too rapid on high wind or high burner.',
        whyItHappened: 'Starch didn\'t fully hydrate.',
        whatToDoNow: 'Cover pan tightly with aluminum foil and rest off heat for 8 minutes; trapped steam will finish cooking the top rice.',
        howToPrevent: 'Keep liquid at a steady, gentle simmer.'
      }
    ],
    substitutions: [
      { original: 'Bomba rice', substitute: 'Calasparra rice, Senia rice, or Italian Arborio', notes: 'Arborio works in a pinch, but contains slightly more surface starch.' },
      { original: 'Seafood mix', substitute: 'Chicken thighs and rabbit chunks with flat green beans (Paella Valenciana Tradicional)', notes: 'Chicken and rabbit with rosemary is the original 18th-century rural Valencian recipe.' }
    ],
    safetyNotes: [
      'Discard any mussels that remain tightly closed after cooking.'
    ],
    servingGuide: {
      restingTime: 'Rest 5 minutes covered with a tea towel.',
      garnishing: 'Fresh lemon wedges and fresh rosemary sprigs.',
      plating: 'Serve directly from the paella pan set in the center of the table.',
      temperature: 'Warm and comforting.',
      accompaniments: 'Allioli (Spanish garlic-olive oil emulsion) and chilled Spanish Albariño or Sangria.'
    }
  },

  // 2. TAPAS (Gambas al Ajillo - Sizzling Garlic Shrimp)
  {
    id: 'tapas',
    name: 'Classic Spanish Garlic Shrimp Tapas (Gambas al Ajillo)',
    cuisine: 'Spanish',
    region: 'Spain (Andalusia / Madrid)',
    servings: 4,
    prepTime: 10,
    cookTime: 5,
    difficulty: 'Easy',
    overview: {
      summary: 'The reigning star of Spanish tapas bars: plump, sweet raw shrimp flash-poached in a bubbling bath of extra virgin olive oil heavily infused with thinly sliced garlic cloves, dried bird\'s beak red chilies (Guindilla), and a splash of dry Spanish sherry (Fino), served bubbling fiercely in a terracotta cazuela with crusty rustic bread for dredging the fragrant garlic oil.',
      appearance: 'A sizzling terracotta dish with golden, bubbling olive oil packed with translucent garlic slivers, sliced red chilies, curled pink shrimp, and a shower of chopped emerald parsley.',
      texture: 'Plump, snappy, sweet shrimp enveloped in luxurious, warm, garlic-infused olive oil.',
      flavor: 'Intense roasted sweet garlic, fruity Spanish olive oil, delicate seafood sweetness, gentle chili warmth, and tangy dry sherry.',
      restingTimeMinutes: 1
    },
    equipment: [
      { name: 'Cazuela (traditional Spanish shallow earthenware terracotta dish) or small cast-iron skillet', purpose: 'Retains ferocious heat to serve the shrimp bubbling tableside.' },
      { name: 'Wooden spoon', purpose: 'For gently nudging garlic and shrimp.' }
    ],
    beforeYouStart: [
      { task: 'Peel and devein 400g raw jumbo shrimp; pat 100% bone-dry with paper towels (moisture splatters in hot oil).', durationMinutes: 5 },
      { task: 'Thinly slice 8 large cloves of fresh garlic into uniform chips.', durationMinutes: 3 },
      { task: 'Slice 2 dried Spanish Guindilla chilies (or red pepper flakes); chop fresh flat-leaf parsley.', durationMinutes: 2 }
    ],
    ingredientPrepGuide: [
      { item: 'Terracotta Cazuela Cooking', technique: 'If cooking in an authentic terracotta cazuela, heat it slowly over medium-low flame. Sudden extreme thermal shock can crack unglazed clay. Terracotta holds heat for 10 minutes, keeping the oil boiling at the table.' },
      { item: 'Garlic Chip Frying', technique: 'Slice garlic into uniform 1.5mm chips. Fry gently in warm olive oil until straw-golden. Never let garlic turn dark brown, or it becomes unpleasantly bitter.' }
    ],
    essentialIngredients: [
      { name: 'Raw jumbo shrimp / prawns', prep: 'peeled, deveined, patted bone-dry', amount: '400g', metric: '400g', imperial: '14 oz', common: '400g' },
      { name: 'Extra virgin Spanish olive oil', prep: 'rich fruity olive oil', amount: '120ml', metric: '120ml', imperial: '4 fl oz', common: '1/2 cup' },
      { name: 'Fresh garlic cloves', prep: 'peeled and sliced into 1.5mm chips', amount: '8 cloves', metric: '40g', imperial: '1.4 oz', common: '8 cloves' },
      { name: 'Dried Spanish Guindilla peppers or red pepper flakes', prep: 'sliced', amount: '2 peppers', metric: '3g', imperial: '0.1 oz', common: '1 tsp flakes' },
      { name: 'Dry Spanish Fino Sherry or dry white wine', prep: 'deglazes oil', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp' },
      { name: 'Coarse sea salt', prep: 'for seasoning', amount: '1 tsp', metric: '5g', imperial: '0.18 oz', common: '1 tsp' },
      { name: 'Fresh flat-leaf Italian parsley', prep: 'finely chopped', amount: '2 tbsp', metric: '10g', imperial: '0.35 oz', common: '2 tbsp' },
      { name: 'Crusty Spanish rustic bread (Pan de Barra)', prep: 'sliced for dipping', amount: '1 loaf', metric: '300g', imperial: '10.5 oz', common: '1 loaf' }
    ],
    steps: [
      {
        step: 1,
        title: 'INFUSE WARM OLIVE OIL WITH GARLIC CHIPS',
        whatYouNeed: ['Terracotta cazuela or skillet', '120ml olive oil', 'Sliced garlic chips', 'Sliced Guindilla chilies'],
        description: 'Pour 120ml olive oil into the cazuela over medium-low heat. Add sliced garlic chips and chilies. Sauté gently for 2 to 3 minutes, stirring constantly, until the garlic turns pale straw-golden and softens (do NOT brown!).',
        howToDoIt: 'Gentle low-temperature frying infuses the garlic and chili oils into the olive oil without burning.',
        heat: 'Medium-Low Heat',
        duration: 3,
        visualCues: 'Tiny bubbles sizzle gently around garlic slices; garlic turns pale golden.',
        smell: 'Intense sweet, roasted garlic aroma.',
        textureCheck: 'Soft, pale golden garlic chips.',
        whatShouldThisLookLike: 'Garlic chips and chilies gently sizzling in olive oil.',
        tip: 'Remove pan from flame for 10 seconds if garlic browns too quickly.',
        commonMistake: 'Frying garlic on high heat — burnt garlic turns bitter and ruins the oil.',
        moveOnWhen: 'Garlic is pale golden and fragrant.',
        quickInstructions: 'Infuse olive oil with garlic chips and chilies over medium-low for 2-3 mins until straw-golden.'
      },
      {
        step: 2,
        title: 'ADD SHRIMP & FLASH-POACH (90 SECONDS)',
        whatYouNeed: ['Dry raw shrimp', '1 tsp coarse sea salt'],
        description: 'Turn heat up to medium-high. Immediately slide the dry shrimp into the bubbling oil in a single layer. Sprinkle with 1 tsp coarse sea salt. Cook undisturbed for 60 seconds until undersides turn pink. Turn shrimp over with tongs and cook 30 seconds more until curled and opaque.',
        howToDoIt: 'Flash-poaching in hot oil cooks the shrimp instantly while keeping them plump and sweet.',
        heat: 'Medium-High Heat',
        duration: 2,
        visualCues: 'Shrimp curl into coral-pink C-shapes; oil bubbles vigorously.',
        hear: 'Lively, energetic sizzling.',
        smell: 'Sweet searing seafood and garlic.',
        textureCheck: 'Plump, firm, and snappy.',
        whatShouldThisLookLike: 'Pink curled shrimp sizzling in bubbling garlic oil.',
        tip: 'Ensure shrimp are 100% dry before adding to prevent hot oil splatters.',
        commonMistake: 'Overcooking shrimp past 2 minutes — they will shrink and turn rubbery.',
        moveOnWhen: 'Shrimp are pink and curled.',
        quickInstructions: 'Add shrimp and salt to hot oil; cook 60s, flip, cook 30s until opaque.'
      },
      {
        step: 3,
        title: 'SPLASH SHERRY, SCATTER PARSLEY & SERVE BUBBLING',
        whatYouNeed: ['2 tbsp dry sherry', 'Chopped parsley', 'Wooden trivet', 'Crusty bread'],
        description: 'Splash in 2 tbsp dry sherry (it will hiss and sizzle violently). TURN OFF HEAT IMMEDIATELY. Scatter chopped fresh parsley across the top. Carry the cazuela directly to the table on a heatproof trivet while the oil continues bubbling vigorously. Serve immediately with crusty bread.',
        howToDoIt: 'The terracotta cazuela holds heat so the dish continues to sizzle at the table.',
        heat: 'Off Heat',
        duration: 1,
        visualCues: 'Fiercely bubbling golden oil with pink shrimp, golden garlic chips, and green parsley.',
        hear: 'Loud, dramatic crackling sizzle at the table.',
        smell: 'Rich garlic, sherry, olive oil, and seafood perfume.',
        textureCheck: 'Succulent shrimp, warm luxurious dipping oil.',
        whatShouldThisLookLike: 'Authentic Madrid tapas bar sizzling Gambas al Ajillo.',
        tip: 'Dredge generous slices of crusty bread into the bubbling garlic oil — it is the greatest part of the dish!',
        commonMistake: 'Letting it cool down — Gambas al Ajillo MUST be served sizzling hot.',
        moveOnWhen: 'Served bubbling at the table.',
        quickInstructions: 'Splash sherry, add parsley, turn off heat, serve bubbling with crusty bread.'
      }
    ],
    commonMistakes: [
      { mistake: 'Garlic was dark brown and tasted bitter.', remedy: 'Garlic was fried too fast on high heat. Keep heat low until shrimp are added.' },
      { mistake: 'Oil splattered violently everywhere.', remedy: 'Shrimp were wet. Always pat raw shrimp 100% bone-dry with paper towels.' }
    ],
    troubleshooting: [
      {
        problem: 'Shrimp are rubbery and tough',
        whatHappened: 'Cooked longer than 2 minutes in hot oil.',
        whyItHappened: 'Shrimp cook very fast in hot oil.',
        whatToDoNow: 'Remove shrimp from hot oil immediately onto a side plate.',
        howToPrevent: 'Turn off heat the moment shrimp turn opaque pink.'
      }
    ],
    substitutions: [
      { original: 'Jumbo shrimp', substitute: 'Sliced calamari rings or button mushrooms (Champiñones al Ajillo)', notes: 'Garlic mushrooms (Champiñones al Ajillo) is an equally legendary vegetarian Spanish tapa.' }
    ],
    safetyNotes: [
      'The bubbling olive oil in the cazuela is over 160°C; do not touch with bare hands.'
    ],
    servingGuide: {
      restingTime: 'Eat immediately while bubbling.',
      garnishing: 'Fresh flat-leaf parsley and whole garlic chips.',
      plating: 'Serve directly in the sizzling terracotta cazuela on a wooden board.',
      temperature: 'Scorching and bubbling.',
      accompaniments: 'Crusty rustic bread, Spanish olives, and chilled dry Sherry (Manzanilla) or cold Spanish beer.'
    }
  },

  // 3. TORTILLA ESPANOLA (Spanish Potato & Onion Omelette)
  {
    id: 'tortilla-espa-ola',
    name: 'Authentic Spanish Potato Omelette (Tortilla Española)',
    cuisine: 'Spanish',
    region: 'Spain (Madrid / Basque / National)',
    servings: 6,
    prepTime: 25,
    cookTime: 25,
    difficulty: 'Medium',
    overview: {
      summary: 'The holy grail of Spanish everyday gastronomy: thinly sliced Yukon Gold potatoes and sweet yellow onions poached slowly in generous Spanish extra virgin olive oil until meltingly tender (never browned), drained, folded into beaten eggs to soak for 15 minutes, and gently cooked in a skillet to produce a golden exterior with a creamy, custardy, slightly runny molten center (Meloso).',
      appearance: 'A thick, golden-amber cake with rounded, smooth edges; when sliced, reveals a luscious, custardy interior of layered tender potatoes and onions bound in golden egg.',
      texture: 'Contrasting textures: delicately set golden outer skin enclosing a meltingly soft, creamy, custardy potato-and-egg center.',
      flavor: 'Pure, sweet simplicity: rich fruity olive oil, sweet caramelized onions, creamy potatoes, rich egg custard, and sea salt.',
      restingTimeMinutes: 10
    },
    equipment: [
      { name: '9 to 10-inch heavy non-stick skillet (or seasoned cast iron)', purpose: 'Essential for cooking and flipping the thick omelette without sticking.' },
      { name: 'Flat rimless plate (larger than the skillet)', purpose: 'For the legendary two-handed tortilla flip.' },
      { name: 'Colander and heatproof bowl', purpose: 'For draining and reserving the fragrant potato-infused olive oil.' }
    ],
    beforeYouStart: [
      { task: 'Peel 800g Yukon Gold or Kennebec potatoes; slice thinly into 3mm uniform half-moons.', durationMinutes: 10 },
      { task: 'Slice 1 large yellow onion into thin 3mm half-moons.', durationMinutes: 5 },
      { task: 'Whisk 8 large eggs with 1.5 tsp fine sea salt in a large bowl.', durationMinutes: 3 }
    ],
    ingredientPrepGuide: [
      { item: 'Potato Poaching (Confit)', technique: 'Potatoes and onions must be confited (poached) slowly in olive oil over medium-low heat. They should become buttery soft and fork-tender without developing any crispy brown crust.' },
      { item: 'The 15-Minute Egg Soak (El Reposo)', technique: 'Draining hot poached potatoes and folding them directly into the beaten eggs to rest for 15 minutes before cooking is the #1 secret of Spanish abuelas. The warm potatoes absorb the egg custard, releasing starches that create an ultra-creamy, molten interior.' }
    ],
    essentialIngredients: [
      { name: 'Yukon Gold or Kennebec potatoes', prep: 'peeled and sliced into 3mm half-moons', amount: '800g', metric: '800g', imperial: '1.75 lbs', common: '4 medium' },
      { name: 'Yellow onion', prep: 'thinly sliced into half-moons', amount: '1 large', metric: '250g', imperial: '9 oz', common: '1 onion' },
      { name: 'Large fresh eggs', prep: 'beaten lightly with salt', amount: '8 eggs', metric: '400g', imperial: '14 oz', common: '8 eggs' },
      { name: 'Spanish extra virgin olive oil', prep: 'for poaching (drained & reserved)', amount: '350ml', metric: '350ml', imperial: '12 fl oz', common: '1.5 cups' },
      { name: 'Fine sea salt', prep: 'divided (1 tsp for potatoes, 1/2 tsp for eggs)', amount: '1.5 tsp', metric: '8g', imperial: '0.3 oz', common: '1.5 tsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'POACH POTATOES & ONIONS IN OLIVE OIL (CONFIT)',
        whatYouNeed: ['Skillet', '350ml olive oil', 'Sliced potatoes', 'Sliced onions', '1 tsp salt'],
        description: 'Heat 350ml olive oil in skillet over medium heat. Add sliced potatoes, onions, and 1 tsp salt. The oil should cover the vegetables. Reduce heat to medium-low. Poach gently for 20 minutes, turning occasionally with a spatula, until the potatoes are completely fork-tender and buttery soft without browning.',
        howToDoIt: 'Low-heat oil poaching breaks down potato starches into a melt-in-the-mouth consistency.',
        heat: 'Medium-Low Heat',
        duration: 20,
        visualCues: 'Gentle lazy bubbles around the potatoes; potatoes turn translucent and soft with zero browning.',
        smell: 'Sweet poached onions and warm olive oil.',
        textureCheck: 'A wooden spoon cuts easily through a potato slice with zero resistance.',
        whatShouldThisLookLike: 'Buttery soft potatoes and onions submerged in golden oil.',
        tip: 'Do not let the potatoes brown or crisp — this is a confit, not French fries!',
        commonMistake: 'Frying on high heat until potatoes develop brown crusts, making the tortilla tough.',
        moveOnWhen: 'Potatoes are fork-tender throughout.',
        quickInstructions: 'Poach potatoes and onions in olive oil on medium-low for 20 mins until buttery soft.'
      },
      {
        step: 2,
        title: 'DRAIN & THE 15-MINUTE EGG SOAK (EL REPOSO)',
        whatYouNeed: ['Colander over bowl', 'Poached potatoes & onions', 'Bowl of 8 beaten eggs'],
        description: 'Pour the skillet contents into a colander set over a bowl. Let drain for 3 minutes (reserve the golden potato oil for future cooking!). Dump the warm, drained potatoes and onions directly into the bowl of beaten eggs. Stir gently once. Let sit undisturbed for 15 minutes.',
        howToDoIt: 'Warm potatoes absorb the beaten egg while releasing starches into the egg mixture, creating the luxurious custardy texture.',
        heat: 'No Heat',
        duration: 15,
        visualCues: 'Potatoes soften further and soak up the egg; mixture thickens slightly into a rich, yellow batter.',
        textureCheck: 'Thick, homogeneous, custardy potato-egg mixture.',
        whatShouldThisLookLike: 'Warm potatoes soaking in golden beaten eggs.',
        tip: 'This 15-minute rest is the secret difference between a dry omelette and a luscious Spanish tortilla.',
        commonMistake: 'Pouring the mixture straight into the pan without resting.',
        moveOnWhen: '15-minute rest is complete.',
        quickInstructions: 'Drain potatoes (reserve oil); fold warm potatoes into beaten eggs, rest 15 mins.'
      },
      {
        step: 3,
        title: 'SEAR THE BASE & SHAPE THE EDGES',
        whatYouNeed: ['Skillet', '2 tbsp reserved olive oil', 'Potato-egg mixture', 'Silicone spatula'],
        description: 'Wipe the skillet clean. Heat 2 tbsp reserved olive oil over high heat until smoking hot. Pour the potato-egg mixture all at once into the pan. Shake the pan vigorously for 30 seconds while running a spatula around the edge to tuck the sides into a smooth rounded curve. Reduce heat to medium-low and cook for 3 minutes.',
        howToDoIt: 'High initial heat sets the outer crust instantly, while tucking with a spatula rounds the edges.',
        heat: 'High for 30s, then Medium-Low 3 mins',
        duration: 4,
        visualCues: 'Edges set firmly into a smooth rounded curve; bottom is golden-brown; top remains wet and runny.',
        textureCheck: 'Bottom crust is set; center jiggles.',
        whatShouldThisLookLike: 'Thick golden cake with rounded edges and soft top.',
        tip: 'Tuck the edges inward continuously with your spatula to create the iconic rounded pillow shape.',
        commonMistake: 'Letting it cook until completely solid on top — it will be overcooked and dry.',
        moveOnWhen: 'Bottom is golden and slides freely when pan is shaken.',
        quickInstructions: 'Pour mixture into hot pan, shake 30s, tuck edges, cook medium-low 3 mins.'
      },
      {
        step: 4,
        title: 'THE LEGENDARY PLATE FLIP (LA VUELTA)',
        whatYouNeed: ['Flat rimless plate (larger than skillet)', 'Both hands', 'Sink or board'],
        description: 'Place a large flat plate upside down over the skillet. Hold the plate firmly against the skillet with your left palm. With your right hand gripping the skillet handle, in one swift, confident, decisive motion, invert the skillet so the tortilla lands onto the plate. Slide the tortilla gently back into the skillet, raw side down.',
        howToDoIt: 'Confidence and swift commitment are essential: hesitation causes hot egg to leak out the sides.',
        heat: 'Off Heat during flip',
        duration: 1,
        visualCues: 'Gorgeous, smooth, golden-amber crust facing up on the plate; slides back into pan.',
        textureCheck: 'Golden exterior with molten soft center.',
        whatShouldThisLookLike: 'Flawlessly flipped golden Spanish tortilla.',
        tip: 'Execute the flip over a sink or cutting board the first time in case of any drips.',
        commonMistake: 'Flipping hesitantly or using a plate smaller than the pan.',
        moveOnWhen: 'Tortilla is successfully inverted back into the skillet.',
        quickInstructions: 'Place plate over pan, invert in one swift motion, slide tortilla back in raw side down.'
      },
      {
        step: 5,
        title: 'COOK SECOND SIDE & REST FOR RUNNY CUSTARD',
        whatYouNeed: ['Silicone spatula', 'Serving plate'],
        description: 'Tuck the edges under with your spatula to round off the bottom. Cook on medium-low heat for just 2 to 3 minutes for an authentic creamy, runny center (Meloso), or 4 minutes for fully set. Slide onto a serving plate. Let rest for at least 10 minutes before slicing.',
        howToDoIt: 'Resting allows the molten egg custard to settle into a sliceable, creamy texture.',
        heat: 'Medium-Low Heat 2-3 mins, then Rest',
        duration: 12,
        visualCues: 'Golden-amber on both sides with rounded edges; jiggles slightly in center.',
        smell: 'Rich roasted potato, caramelized onion, and egg.',
        textureCheck: 'Tender crust, creamy molten interior.',
        whatShouldThisLookLike: 'Masterpiece Tortilla Española resting on a ceramic platter.',
        tip: 'In Spain, Tortilla Española is traditionally served warm or at room temperature, never scorching hot.',
        commonMistake: 'Slicing immediately out of the pan — the molten custard center will spill out.',
        moveOnWhen: '10-minute rest is complete.',
        quickInstructions: 'Cook second side on medium-low for 2-3 mins; slide onto plate, rest 10 mins before slicing.'
      }
    ],
    commonMistakes: [
      { mistake: 'Tortilla stuck and fell apart during the flip.', remedy: 'A scratched pan was used or not enough oil. Use a reliable non-stick pan with 2 tbsp oil.' },
      { mistake: 'Interior was dry, rubbery, and overcooked.', remedy: 'Cooked too long on the second side. Keep second side to 2-3 minutes for a creamy center.' }
    ],
    troubleshooting: [
      {
        problem: 'Tortilla is too runny and liquid spills out when sliced',
        whatHappened: 'Second side cooked for less than 1 minute.',
        whyItHappened: 'Very runny Basque style (tortilla poco hecha).',
        whatToDoNow: 'It is highly prized this way in Spain! If you prefer it firmer, microwave slice for 20 seconds.',
        howToPrevent: 'Cook second side 3 minutes and rest 10 minutes.'
      }
    ],
    substitutions: [
      { original: 'Yellow onion', substitute: 'Tortilla sin cebolla (Potato only)', notes: 'Spain is famously divided between "con cebolla" (with onion) and "sin cebolla" (without onion).' }
    ],
    safetyNotes: [
      'Use pasteurized fresh eggs if enjoying the traditional runny (meloso) center.'
    ],
    servingGuide: {
      restingTime: 'Rest 10 minutes before slicing.',
      garnishing: 'Flaky sea salt on top.',
      plating: 'Serve on a wide round ceramic plate, cut into 6 pie wedges (Pinchos).',
      temperature: 'Warm or room temperature (peak flavor).',
      accompaniments: 'Crusty rustic bread, Spanish green olives (Manzanilla), and cold beer or Rioja wine.'
    }
  },

  // 4. GAZPACHO (Andalusian Chilled Tomato Soup)
  {
    id: 'gazpacho',
    name: 'Traditional Andalusian Chilled Gazpacho (Gazpacho Andaluz)',
    cuisine: 'Spanish',
    region: 'Spain (Andalusia / Seville)',
    servings: 4,
    prepTime: 20,
    cookTime: 0,
    difficulty: 'Easy',
    overview: {
      summary: 'Andalusia\'s liquid gold for scorching summer days: vine-ripened Roma tomatoes, crisp cucumber, green Italian pepper, garlic, and stale crustless rustic bread pureed in a high-speed blender with aged Sherry vinegar (Vinagre de Jerez) and emulsified with generous fruity Spanish extra virgin olive oil into a silky, creamy, salmon-orange emulsion, chilled ice-cold.',
      appearance: 'A vibrant, creamy, salmon-orange chilled soup with a velvety mirror sheen, garnished with micro-diced cucumber, green pepper, and a spiral drizzle of emerald olive oil.',
      texture: 'Impossibly silky, creamy, smooth emulsion (resembling melted velvet) with zero graininess or seeds.',
      flavor: 'Bright, refreshing, cooling burst: sweet vine tomatoes, grassy cucumber, zesty sherry vinegar acidity, rich peppery olive oil, and gentle garlic warmth.',
      restingTimeMinutes: 120
    },
    equipment: [
      { name: 'High-speed blender (Vitamix or similar)', purpose: 'Essential for emulsifying olive oil with vegetable juices into a silky, creamy salmon-pink liquid.' },
      { name: 'Fine-mesh sieve (Chinois)', purpose: 'Strains out remaining tomato seeds and skins for restaurant-grade velvet smoothness.' }
    ],
    beforeYouStart: [
      { task: 'Core and roughly chop 1kg ripe red vine or Roma tomatoes.', durationMinutes: 5 },
      { task: 'Peel 1 cucumber; deseed 1 Italian green pepper (Pimiento Italiano); peel 1 small clove of garlic (germ removed).', durationMinutes: 5 },
      { task: 'Tear 50g stale rustic white bread (crusts removed) and soak in 2 tbsp water.', durationMinutes: 2 }
    ],
    ingredientPrepGuide: [
      { item: 'Olive Oil Emulsification', technique: 'Gazpacho gets its signature creamy salmon-orange color from emulsification, not cream! Drizzling 100ml extra virgin olive oil into the blender on high speed creates an emulsion between vegetable water and oil molecules, transforming red juice into silky orange velvet.' },
      { item: 'Garlic Germ Removal', technique: 'Cut garlic clove in half and pry out the green inner sprout (germ). The germ contains bitter, repeating sulfur that overpowers raw chilled soups.' }
    ],
    essentialIngredients: [
      { name: 'Ripe red vine-ripened or Roma tomatoes', prep: 'cored and roughly chopped', amount: '1000g', metric: '1000g', imperial: '2.2 lbs', common: '1kg' },
      { name: 'Cucumber (peeled)', prep: 'roughly chopped (reserve 2 tbsp for garnish)', amount: '1 medium', metric: '150g', imperial: '5.3 oz', common: '1 piece' },
      { name: 'Italian green pepper (Pimiento Italiano) or cubanelle', prep: 'seeded and chopped', amount: '1 pepper', metric: '80g', imperial: '2.8 oz', common: '1 pepper' },
      { name: 'Fresh garlic clove', prep: 'peeled, green germ removed', amount: '1 small clove', metric: '5g', imperial: '0.17 oz', common: '1 clove' },
      { name: 'Stale rustic white bread (crustless)', prep: 'soaked in water', amount: '50g', metric: '50g', imperial: '1.8 oz', common: '1 slice' },
      { name: 'Spanish extra virgin olive oil', prep: 'premium cold-pressed fruity olive oil', amount: '100ml', metric: '100ml', imperial: '3.4 fl oz', common: '1/2 cup' },
      { name: 'Spanish Sherry vinegar (Vinagre de Jerez)', prep: 'aged wine vinegar', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp' },
      { name: 'Fine sea salt', prep: 'seasoning', amount: '1.5 tsp', metric: '8g', imperial: '0.3 oz', common: '1.5 tsp' },
      { name: 'Cold water', prep: 'only if needed to adjust thickness', amount: '50ml', metric: '50ml', imperial: '1.7 fl oz', common: 'optional' }
    ],
    steps: [
      {
        step: 1,
        title: 'BLEND VEGETABLES & AROMATICS UNTIL SMOOTH',
        whatYouNeed: ['High-speed blender', 'Tomatoes', 'Cucumber', 'Green pepper', 'Garlic', 'Soaked bread', 'Sherry vinegar', 'Salt'],
        description: 'Place chopped tomatoes, cucumber, green pepper, germless garlic clove, soaked bread, sherry vinegar, and 1.5 tsp salt into the blender pitcher. Blend on high speed for 2 full minutes until completely pureed and liquid.',
        howToDoIt: 'High speed breaks down vegetable cell walls, releasing natural juices and tomato pectin.',
        heat: 'No Heat',
        duration: 2,
        visualCues: 'Vegetables liquefy into a deep crimson-red puree.',
        smell: 'Fresh summer tomatoes, crisp cucumber, and tangy sherry vinegar.',
        textureCheck: 'Smooth, frothy liquid.',
        whatShouldThisLookLike: 'Red vegetable liquid in the blender.',
        tip: 'Never add ice directly to the blender — melting ice waters down the intense flavor.',
        commonMistake: 'Adding too much raw garlic — raw garlic intensifies over time in cold soup.',
        moveOnWhen: 'Puree is completely liquid.',
        quickInstructions: 'Blend tomatoes, cucumber, pepper, garlic, bread, vinegar, and salt on high for 2 mins.'
      },
      {
        step: 2,
        title: 'SLOW-DRIZZLE OLIVE OIL TO EMULSIFY TO SALMON-PINK',
        whatYouNeed: ['100ml extra virgin olive oil'],
        description: 'With the blender running on medium-high speed, slowly drizzle the 100ml of extra virgin olive oil through the lid opening in a thin, continuous stream over 60 seconds. Watch the color transform: the crimson soup will emulsify into a creamy, pale salmon-orange velvet.',
        howToDoIt: 'Slowly adding olive oil under high shear forces creates a stable lipid emulsion that gives Gazpacho its creamy body without a drop of dairy.',
        heat: 'No Heat',
        duration: 2,
        visualCues: 'Soup changes color from dark red to brilliant creamy salmon-pink; surface turns satiny smooth.',
        textureCheck: 'Velvety, rich, and creamy.',
        whatShouldThisLookLike: 'Creamy salmon-orange emulsion.',
        tip: 'Use a fruity, mild extra virgin olive oil so the olive oil flavor doesn\'t overpower the tomatoes.',
        commonMistake: 'Dumping oil in all at once before blending — oil won\'t emulsify and will separate on top.',
        moveOnWhen: 'Soup is fully emulsified and salmon-pink.',
        quickInstructions: 'Drizzle 100ml olive oil into running blender for 60s until soup emulsifies into creamy salmon-orange.'
      },
      {
        step: 3,
        title: 'STRAIN THROUGH FINE SIEVE FOR VELVET TEXTURE',
        whatYouNeed: ['Fine-mesh sieve (chinois)', 'Large bowl or pitcher', 'Ladle'],
        description: 'Pour the blended gazpacho through a fine-mesh sieve set over a pitcher. Use the back of a ladle to press the liquid through, leaving behind any tiny seeds and skins. Discard the residue.',
        howToDoIt: 'Straining elevates Gazpacho from a rustic salsa into a refined, silky, restaurant-quality soup.',
        heat: 'No Heat',
        duration: 4,
        visualCues: 'Ultra-smooth, glossy, seedless salmon-orange liquid collects in the pitcher.',
        textureCheck: 'Pure liquid silk with zero grit.',
        whatShouldThisLookLike: 'A pitcher of velvety smooth Spanish Gazpacho.',
        tip: 'Taste: adjust with an extra splash of Sherry vinegar for acidity or salt.',
        commonMistake: 'Skipping straining — seeds and skins create a gritty mouthfeel.',
        moveOnWhen: 'All soup is strained.',
        quickInstructions: 'Strain soup through fine sieve with ladle; discard seeds and skins.'
      },
      {
        step: 4,
        title: 'CHILL ICE-COLD FOR AT LEAST 2 HOURS',
        whatYouNeed: ['Pitcher with soup', 'Refrigerator'],
        description: 'Cover pitcher and refrigerate for at least 2 hours (or overnight). Gazpacho MUST be served ice-cold to experience its crisp, refreshing magic.',
        howToDoIt: 'Chilling allows the flavors to harmonize while cold temperature dulls the garlic and sharpens the tomato sweetness.',
        heat: 'Cold Refrigeration (4°C / 39°F)',
        duration: 120,
        visualCues: 'Thickens slightly in the cold; brilliant color stabilizes.',
        textureCheck: 'Ice-cold, smooth velvet.',
        whatShouldThisLookLike: 'Chilled pitcher of Gazpacho.',
        tip: 'Chill your serving bowls or glasses in the freezer for 15 minutes before serving.',
        commonMistake: 'Serving at room temperature — warm Gazpacho tastes flat and unappealing.',
        moveOnWhen: 'Soup is chilled ice-cold.',
        quickInstructions: 'Refrigerate soup for at least 2 hours until ice-cold.'
      },
      {
        step: 5,
        title: 'POUR & GARNISH WITH TROPIEZOS',
        whatYouNeed: ['Chilled bowls or glasses', 'Reserved micro-diced cucumber, green pepper, croutons', 'Extra virgin olive oil'],
        description: 'Pour ice-cold Gazpacho into chilled bowls or tumblers. Float a spoonful of micro-diced cucumber and green pepper (tropiezos) in the center. Drizzle a swirl of vibrant green olive oil over the surface. Serve immediately.',
        howToDoIt: 'The crunchy diced vegetable garnish (tropiezos) provides delightful textural crunch against the silky soup.',
        heat: 'Off Heat',
        duration: 2,
        visualCues: 'Gleaming salmon-orange soup accented with emerald olive oil swirls and colorful crunchy garnish.',
        smell: 'Fragrant olive oil, vine tomatoes, and sherry vinegar.',
        textureCheck: 'Silky, ice-cold, refreshing crunch.',
        whatShouldThisLookLike: 'Masterpiece Andalusian Gazpacho.',
        tip: 'In Seville and Cordoba, Gazpacho is often poured into tall glasses and drunk as a refreshing beverage!',
        commonMistake: 'Serving in warm bowls, which warms the soup instantly.',
        moveOnWhen: 'Plated and served.',
        quickInstructions: 'Ladle ice-cold soup into bowls, top with diced cucumber, pepper, and olive oil swirl.'
      }
    ],
    commonMistakes: [
      { mistake: 'Soup was watery and separated.', remedy: 'Olive oil was not emulsified properly or bread was omitted. Drizzle oil slowly into running blender.' },
      { mistake: 'Soup was grainy with seeds.', remedy: 'Soup wasn\'t strained through a fine sieve.' }
    ],
    troubleshooting: [
      {
        problem: 'Soup is too sour and acidic',
        whatHappened: 'Tomatoes had high acidity or too much vinegar was added.',
        whyItHappened: 'Acid imbalance.',
        whatToDoNow: 'Blend in 1/2 slice extra soaked bread and 1 tbsp extra olive oil to mellow the acid.',
        howToPrevent: 'Taste tomatoes before adding vinegar.'
      }
    ],
    substitutions: [
      { original: 'Sherry vinegar (Vinagre de Jerez)', substitute: 'Red wine vinegar or apple cider vinegar', notes: 'Red wine vinegar provides pleasant crisp acidity.' },
      { original: 'Stale bread', substitute: 'Can be omitted for gluten-free gazpacho', notes: 'Texture will be slightly lighter, but still delicious.' }
    ],
    safetyNotes: [
      'Store chilled in refrigerator; consume within 3 days.'
    ],
    servingGuide: {
      restingTime: 'Chill 2 hours before serving.',
      garnishing: 'Micro-diced cucumber, green pepper, croutons, and a drizzle of extra virgin olive oil.',
      plating: 'Chilled shallow bowls or tall drinking glasses.',
      temperature: 'Ice-cold.',
      accompaniments: 'Spanish jamón ibérico, Manchego cheese, and crusty bread.'
    }
  },

  // 5. SPANISH CHURROS (Churros con Chocolate)
  {
    id: 'spanish-churros',
    name: 'Madrid Street Churros with Thick Chocolate (Churros con Chocolate)',
    cuisine: 'Spanish',
    region: 'Spain (Madrid / National)',
    servings: 4,
    prepTime: 20,
    cookTime: 15,
    difficulty: 'Medium',
    overview: {
      summary: 'Madrid\'s legendary breakfast and midnight indulgence: golden fluted star-shaped dough batons made from simple choux-like dough (flour, boiling water, salt) piped through a star nozzle, fried in hot oil until blistered, golden, and shatteringly crisp, dusted with sugar and served alongside a cup of thick, velvety, spoon-coating Spanish drinking chocolate (Chocolate a la Taza).',
      appearance: 'A towering stack of golden-amber, ridged star batons dusted with crystalline sugar, paired with a cup of dark, steaming, thick glossy Spanish hot chocolate.',
      texture: 'Shatteringly crisp, light, airy exterior giving way to a tender, soft, steaming interior, dipped into thick velvety molten chocolate.',
      flavor: 'Pure toasted fried dough with a whisper of salt, balanced by the bitter-sweet intensity of dark Spanish chocolate.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Churrera (churro gun) or heavy piping bag with closed star tip (Wilton 1M or 2D)', purpose: 'Fluted star ridges are CRITICAL: ridges increase surface area and prevent steam explosions during frying.' },
      { name: 'Deep heavy pot or Dutch oven for frying', purpose: 'Maintains steady 190°C (375°F) oil temperature.' },
      { name: 'Kitchen shears', purpose: 'For snipping churros cleanly as they are piped into the oil.' }
    ],
    beforeYouStart: [
      { task: 'Bring 250ml water, 1 tbsp olive oil, and 1/2 tsp salt to a rolling boil in a saucepan.', durationMinutes: 3 },
      { task: 'Prepare star nozzle in heavy-duty piping bag or churrera.', durationMinutes: 2 },
      { task: 'Prepare thick chocolate: whisk 150g dark Spanish chocolate (70%), 400ml whole milk, and 1 tbsp cornstarch in a saucepan over medium heat until thick as pudding.', durationMinutes: 8 }
    ],
    ingredientPrepGuide: [
      { item: 'Star Nozzle Mandatory Safety Rule', technique: 'Churros MUST be piped through a ridged star tip, NEVER a round smooth tip! Smooth round dough traps internal steam, creating dangerous explosions in hot oil. The star ridges allow steam to expand safely while creating maximum crunchy surface area.' },
      { item: 'Scalding the Flour', technique: 'Pour boiling water all at once over the flour and stir vigorously. Scalding pre-cooks the starches, creating a stiff, smooth dough with no gluten elasticity that fries crisp.' }
    ],
    essentialIngredients: [
      { name: 'All-purpose flour', prep: 'sifted', amount: '200g', metric: '200g', imperial: '7 oz', common: '1.5 cups' },
      { name: 'Boiling water', prep: 'rolling boil', amount: '250ml', metric: '250ml', imperial: '8.5 fl oz', common: '1 cup' },
      { name: 'Spanish olive oil or neutral oil', prep: '1 tbsp for dough + 1 liter for frying', amount: '1 liter', metric: '1000ml', imperial: '34 fl oz', common: 'for frying' },
      { name: 'Fine sea salt', prep: 'for dough', amount: '1/2 tsp', metric: '3g', imperial: '0.1 oz', common: '1/2 tsp' },
      { name: 'Granulated sugar (or cinnamon sugar)', prep: 'for dusting', amount: '1/2 cup', metric: '100g', imperial: '3.5 oz', common: '1/2 cup' },
      { name: 'Dark Spanish baking chocolate (70% cocoa)', prep: 'chopped for dipping sauce', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '1 cup chunks' },
      { name: 'Whole milk', prep: 'for chocolate', amount: '400ml', metric: '400ml', imperial: '13.5 fl oz', common: '1.75 cups' },
      { name: 'Cornstarch (Maizena)', prep: 'thickener for authentic chocolate a la taza', amount: '1 tbsp', metric: '10g', imperial: '0.35 oz', common: '1 tbsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'SCALD & BEAT CHURRO DOUGH (NO EGGS)',
        whatYouNeed: ['Saucepan with boiling water, 1 tbsp oil, 1/2 tsp salt', '200g sifted flour', 'Wooden spoon'],
        description: 'Bring 250ml water, 1 tbsp oil, and 1/2 tsp salt to a rolling boil. Remove from heat. Dump in all 200g flour at once. Beat vigorously with a wooden spoon for 1 to 2 minutes until a stiff, smooth dough pulls away from the sides into a cohesive ball. Let cool for 5 minutes.',
        howToDoIt: 'Boiling water gelatinizes the flour starches instantly, creating a stiff dough that holds sharp star ridges.',
        heat: 'Boiling water, then OFF',
        duration: 5,
        visualCues: 'Flour absorbs water instantly into a smooth, thick, putty-like dough ball.',
        textureCheck: 'Stiff, pliable, non-sticky dough.',
        whatShouldThisLookLike: 'A smooth ball of warm scalded dough.',
        tip: 'Authentic Madrid street churros use NO eggs — just flour, water, and salt for the purest crisp crunch!',
        commonMistake: 'Leaving dry flour pockets — beat vigorously until completely uniform.',
        moveOnWhen: 'Dough is smooth and cohesive.',
        quickInstructions: 'Dump flour into boiling salted water, beat vigorously into stiff dough ball, rest 5 mins.'
      },
      {
        step: 2,
        title: 'SIMMER THICK CHOCOLATE A LA TAZA',
        whatYouNeed: ['Small saucepan', '400ml milk', '1 tbsp cornstarch', '150g dark chocolate', '2 tbsp sugar'],
        description: 'In a saucepan, whisk cold milk and cornstarch until dissolved. Add chopped dark chocolate and sugar. Heat over medium-low heat, whisking constantly, until the chocolate melts and the mixture thickens into a glossy, pudding-like, spoon-coating liquid. Keep warm on low heat.',
        howToDoIt: 'Spanish dipping chocolate is thickened with cornstarch so it clings heavily to churros like melted ganache.',
        heat: 'Medium-Low Heat',
        duration: 8,
        visualCues: 'Chocolate turns dark mahogany, glossy, and thickens to coat the back of a spoon.',
        smell: 'Intense rich roasted dark cocoa.',
        textureCheck: 'Thick, velvety, pourable pudding consistency.',
        whatShouldThisLookLike: 'Thick Spanish dipping chocolate simmering gently.',
        tip: 'Whisk continuously so the cornstarch doesn\'t scorch at the bottom.',
        commonMistake: 'Making thin American hot cocoa — Spanish chocolate must be thick enough to hold a spoon upright!',
        moveOnWhen: 'Chocolate is thick, glossy, and kept warm.',
        quickInstructions: 'Whisk milk, cornstarch, dark chocolate, and sugar over medium-low 8 mins until thick.'
      },
      {
        step: 3,
        title: 'HEAT OIL TO 190°C (375°F) & LOAD PIPING BAG',
        whatYouNeed: ['Heavy pot with 1L oil', 'Thermometer', 'Piping bag with star nozzle', 'Warm dough'],
        description: 'Heat 1 liter of oil to 190°C (375°F). Pack the warm dough firmly into the piping bag fitted with the star nozzle, pressing out any air pockets.',
        howToDoIt: '190°C oil fries the ridged exterior into a rigid, crispy shell before the dough can absorb oil.',
        heat: 'Medium-High Heat',
        duration: 8,
        visualCues: 'Oil shimmers steadily at 190°C; piping bag is packed tight.',
        textureCheck: 'Firm dough loaded in piping bag.',
        whatShouldThisLookLike: 'Hot oil and loaded star-tip piping bag ready to fry.',
        tip: 'Use a heavy-duty canvas or thick silicone piping bag; the dough is very stiff and can tear flimsy plastic bags.',
        commonMistake: 'Frying at 160°C — cold oil turns churros into greasy, soggy bread sticks.',
        moveOnWhen: 'Oil reaches 190°C.',
        quickInstructions: 'Heat oil to 190°C; pack warm dough into piping bag with star nozzle.'
      },
      {
        step: 4,
        title: 'PIPE, SNIP & FRY TO GOLDEN CRISPNESS',
        whatYouNeed: ['Loaded piping bag', 'Kitchen shears', 'Hot oil', 'Spider skimmer'],
        description: 'Hold piping bag directly over the hot oil. Squeeze out a 12cm (5 inch) length of dough. Snip cleanly with kitchen shears, letting the dough drop gently into the oil. Repeat for 4 to 5 churros. Fry for 3 to 4 minutes, turning with the spider skimmer, until deep golden-brown, blistered, and rigid.',
        howToDoIt: 'The star ridges expand safely in the hot oil, frying into shatteringly crisp edges.',
        heat: 'Medium-High Heat (maintain 190°C)',
        duration: 4,
        visualCues: 'Churros float buoyantly, turning deep golden-amber with sharp crispy star ridges.',
        hear: 'Steady, crackling frying sizzle.',
        smell: 'Toasted fried dough and pastry.',
        textureCheck: 'Rigid, crispy shell when tapped with metal spider.',
        whatShouldThisLookLike: 'Golden-amber, straight, ridged Spanish churros.',
        tip: 'Snip close to the oil surface to prevent splashing hot oil.',
        commonMistake: 'Overcrowding the pot — fry only 4 or 5 at a time to keep oil at 190°C.',
        moveOnWhen: 'Churros are deep golden and crisp.',
        quickInstructions: 'Pipe 12cm lengths into 190°C oil, snip with shears, fry 3-4 mins until golden-brown.'
      },
      {
        step: 5,
        title: 'DRAIN, DUST IN SUGAR & SERVE WITH CHOCOLATE',
        whatYouNeed: ['Spider skimmer', 'Wire rack with paper towels', 'Granulated sugar', 'Mug of thick hot chocolate'],
        description: 'Lift churros with the spider skimmer, drain for 30 seconds on paper towels, then immediately roll in granulated sugar while hot. Stack on a plate. Serve immediately alongside a steaming cup of thick chocolate for dipping!',
        howToDoIt: 'Rolling while hot allows sugar crystals to melt slightly and adhere to the crispy ridges.',
        heat: 'Off Heat',
        duration: 2,
        visualCues: 'Glistening golden star batons encrusted in sugar crystals next to dark steaming chocolate.',
        smell: 'Sweet sugar, hot fried dough, and rich dark chocolate.',
        textureCheck: 'Shatteringly crisp crunch giving way to soft steaming interior, coated in molten chocolate.',
        whatShouldThisLookLike: 'Iconic Madrid Chocolatería San Ginés Churros con Chocolate.',
        tip: 'Plunge the churro deep into the thick chocolate so it emerges thickly coated like a paintbrush!',
        commonMistake: 'Letting churros cool down — churros are best eaten within 5 minutes of frying.',
        moveOnWhen: 'Plated and ready to dip.',
        quickInstructions: 'Drain churros 30s, roll in sugar, serve hot with thick dipping chocolate.'
      }
    ],
    commonMistakes: [
      { mistake: 'Churros exploded in the hot oil.', remedy: 'A smooth round nozzle was used or dough had air pockets. ALWAYS use a closed star nozzle to allow steam expansion.' },
      { mistake: 'Churros were greasy and raw inside.', remedy: 'Oil was too cool or dough wasn\'t fried long enough. Keep oil strictly at 190°C and fry for 3-4 mins.' }
    ],
    troubleshooting: [
      {
        problem: 'Dough is too stiff to squeeze through the piping bag',
        whatHappened: 'Dough cooled down and hardened.',
        whyItHappened: 'Starch sets as it cools.',
        whatToDoNow: 'Microwave dough in a bowl for 15 seconds to soften slightly, then reload piping bag.',
        howToPrevent: 'Pipe while dough is still pleasantly warm.'
      }
    ],
    substitutions: [
      { original: 'Granulated sugar dusting', substitute: 'Cinnamon sugar (1/2 cup sugar + 1 tsp cinnamon)', notes: 'Cinnamon sugar is a beloved Latin American variation.' }
    ],
    safetyNotes: [
      'NEVER pipe dough without a star nozzle — smooth dough can burst violently in hot oil.'
    ],
    servingGuide: {
      restingTime: 'Eat immediately piping hot.',
      garnishing: 'Granulated sugar coating.',
      plating: 'Stacked on a paper-lined plate alongside a wide ceramic cup of thick hot chocolate.',
      temperature: 'Piping hot and crispy.',
      accompaniments: 'Thick Spanish dipping chocolate (Chocolate a la Taza) and fresh orange juice.'
    }
  },

  // 6. MOUSSAKA (Greek Baked Eggplant & Spiced Meat Casserole)
  {
    id: 'moussaka',
    name: 'Traditional Greek Baked Moussaka (Mousakas)',
    cuisine: 'Greek',
    region: 'Greece (Athens / Crete / National)',
    servings: 6,
    prepTime: 40,
    cookTime: 50,
    difficulty: 'Hard',
    overview: {
      summary: 'The grand centerpiece of Greek cuisine: layered casserole of roasted sliced eggplant and potatoes, blanketed with a rich, aromatic spiced lamb and beef ragù seasoned with cinnamon, cloves, allspice, red wine, and tomatoes, crowned with a thick, golden, fluffy layer of Greek béchamel sauce enriched with egg yolks and grated Kefalotyri cheese, baked to a puffed, golden-brown crust.',
      appearance: 'A tall, stately baked casserole showing distinct architectural layers: golden potato base, dark purple roasted eggplant, rich mahogany spiced meat, and a thick, puffed, golden-brown cheese béchamel top.',
      texture: 'Rich, melt-in-the-mouth roasted eggplant, savory minced meat, and an airy, pillowy, custardy béchamel topping with a golden cheese crust.',
      flavor: 'Warm Mediterranean comfort: sweet cinnamon and clove notes, savory lamb umami, rich roasted eggplant, and nutty, buttery, nutmeg-scented béchamel.',
      restingTimeMinutes: 25
    },
    equipment: [
      { name: '9x13 inch deep ceramic or glass baking dish (casserole)', purpose: 'Holds the tall multi-layered casserole.' },
      { name: 'Two large baking sheets lined with parchment', purpose: 'For roasting sliced eggplants and potatoes without absorbing excess frying oil.' },
      { name: 'Saucepan and balloon whisk', purpose: 'For building the velvety Greek béchamel sauce.' }
    ],
    beforeYouStart: [
      { task: 'Slice 2 large eggplants lengthwise into 1cm thick planks; salt generously and drain in colander 30 mins to purge bitterness; pat dry.', durationMinutes: 30 },
      { task: 'Peel and slice 2 large Yukon Gold potatoes into 8mm rounds; toss with 2 tbsp olive oil and roast at 200°C for 20 mins until tender.', durationMinutes: 20 },
      { task: 'Roast salted eggplant slices on baking sheets brushed with olive oil at 200°C for 20 mins until golden and soft.', durationMinutes: 20 }
    ],
    ingredientPrepGuide: [
      { item: 'Oven-Roasting vs Frying Eggplants', technique: 'Traditional village recipes fry eggplants in oil, but eggplants act like sponges and absorb liters of grease. Oven-roasting sliced eggplants on parchment brushed with olive oil yields silky, tender eggplant with a fraction of the grease, preventing a heavy, oily moussaka.' },
      { item: 'The Mandatory 25-Minute Rest (El Reposo)', technique: 'You MUST rest the baked Moussaka for at least 25 to 30 minutes before cutting! Slicing directly out of the oven causes the molten layers to collapse into a messy puddle. Resting allows the béchamel custard to set into tall, proud, clean restaurant squares.' }
    ],
    essentialIngredients: [
      { name: 'Large globe eggplants', prep: 'sliced 1cm thick, salted, roasted tender', amount: '2 large', metric: '800g', imperial: '1.75 lbs', common: '2 eggplants' },
      { name: 'Yukon Gold potatoes', prep: 'sliced 8mm rounds, roasted tender', amount: '2 large', metric: '500g', imperial: '1.1 lbs', common: '2 potatoes' },
      { name: 'Ground lamb (or 50/50 lamb and beef)', prep: 'lean ground meat', amount: '600g', metric: '600g', imperial: '1.3 lbs', common: '600g' },
      { name: 'Yellow onion & Garlic cloves', prep: 'finely diced', amount: '1 large onion + 4 garlic cloves', metric: '200g', imperial: '7 oz', common: 'mixed' },
      { name: 'Canned crushed tomatoes', prep: 'pureed', amount: '400g', metric: '400g', imperial: '14 oz', common: '1 can' },
      { name: 'Dry Greek red wine', prep: 'deglazes meat sauce', amount: '120ml', metric: '120ml', imperial: '4 fl oz', common: '1/2 cup' },
      { name: 'Ground cinnamon & ground allspice', prep: 'signature Greek spices', amount: '1 tsp cinnamon + 1/2 tsp allspice + pinch cloves', metric: '5g', imperial: '0.18 oz', common: 'spices' },
      { name: 'Unsalted butter', prep: 'for béchamel roux', amount: '75g', metric: '75g', imperial: '2.6 oz', common: '5 tbsp' },
      { name: 'All-purpose flour', prep: 'for roux', amount: '75g', metric: '75g', imperial: '2.6 oz', common: '1/2 cup' },
      { name: 'Whole milk', prep: 'warmed', amount: '750ml', metric: '750ml', imperial: '25 fl oz', common: '3 cups' },
      { name: 'Large egg yolks', prep: 'whisked into warm béchamel', amount: '2 yolks', metric: '40g', imperial: '1.4 oz', common: '2 yolks' },
      { name: 'Grated Kefalotyri or Pecorino cheese', prep: 'divided (half in béchamel, half on top)', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '1 cup' },
      { name: 'Ground nutmeg', prep: 'freshly grated for béchamel', amount: '1/2 tsp', metric: '1.5g', imperial: '0.05 oz', common: '1/2 tsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'ROAST POTATOES & EGGPLANTS',
        whatYouNeed: ['Baking sheets', 'Potato rounds', 'Eggplant planks', 'Olive oil'],
        description: 'Arrange potato rounds in a single layer on one baking sheet and drained, dried eggplant planks on a second sheet. Brush both sides generously with olive oil and sprinkle with salt. Roast in preheated 200°C (400°F) oven for 20 minutes until tender and lightly golden.',
        howToDoIt: 'Roasting par-cooks the vegetables and dehydrates excess water so the casserole doesn\'t become soggy.',
        heat: '200°C (400°F)',
        duration: 20,
        visualCues: 'Potatoes are fork-tender; eggplants are soft, collapsed, and golden-brown on edges.',
        textureCheck: 'Buttery soft vegetables.',
        whatShouldThisLookLike: 'Tender roasted vegetable slices ready for layering.',
        tip: 'Salting and draining eggplants beforehand extracts bitter juices and tightens cell structure.',
        commonMistake: 'Layering raw eggplants — they will release cups of water, turning moussaka into soup.',
        moveOnWhen: 'Vegetables are roasted and tender.',
        quickInstructions: 'Brush sliced potatoes and eggplants with olive oil; roast at 200°C for 20 mins until tender.'
      },
      {
        step: 2,
        title: 'SIMMER THE SPICED GREEK MEAT SAUCE',
        whatYouNeed: ['Large skillet', '600g ground lamb/beef', 'Diced onion & garlic', 'Red wine', 'Crushed tomatoes', 'Cinnamon, allspice, cloves'],
        description: 'Heat 1 tbsp olive oil in skillet over medium-high heat. Add ground meat; brown for 5 minutes, breaking into fine crumbles. Add onion and garlic; cook 3 minutes. Pour in red wine; scrape fond and boil 2 minutes until reduced. Add crushed tomatoes, cinnamon, allspice, pinch of cloves, 1 tsp salt, and black pepper. Simmer uncovered over low heat for 20 minutes until thick and dry with no watery liquid pooling.',
        howToDoIt: 'The meat sauce must be thick and dry so the casserole holds clean, tall slices.',
        heat: 'Medium-Low Simmer',
        duration: 25,
        visualCues: 'Deep mahogany, rich, thick meat sauce with zero loose watery liquid.',
        smell: 'Incredible aroma of cinnamon, cloves, red wine, and savory lamb.',
        textureCheck: 'Thick, spreadable ragù.',
        whatShouldThisLookLike: 'A thick, fragrant Greek spiced meat sauce.',
        tip: 'Ensure the sauce is well-reduced before assembling.',
        commonMistake: 'Leaving the sauce wet and runny — turns the baked moussaka into a slumping mess.',
        moveOnWhen: 'Meat sauce is thick, dry, and aromatic.',
        quickInstructions: 'Brown meat with onions; add wine, tomatoes, and spices; simmer 20 mins until thick and dry.'
      },
      {
        step: 3,
        title: 'WHISK THE FLUFFY GREEK BÉCHAMEL',
        whatYouNeed: ['Saucepan', '75g butter', '75g flour', '750ml warm milk', 'Nutmeg', '2 egg yolks', '50g grated cheese', 'Whisk'],
        description: 'Melt 75g butter in saucepan over medium heat. Whisk in 75g flour; cook roux for 2 minutes. Gradually pour in 750ml warm milk in a steady stream, whisking constantly to prevent lumps. Simmer gently for 4 minutes until thick and glossy like pudding. Remove from heat. Whisk in grated nutmeg, 1/2 tsp salt, 50g grated cheese, and finally the 2 egg yolks.',
        howToDoIt: 'Adding egg yolks (Greek béchamel tradition) enriches the sauce and causes it to puff into a golden, custard-like soufflé layer when baked.',
        heat: 'Medium Heat 4 mins, then OFF',
        duration: 8,
        visualCues: 'Silky, thick, snow-white sauce transforming into a glossy, rich golden-yellow custard.',
        smell: 'Warm nutty nutmeg, melted cheese, and toasted butter.',
        textureCheck: 'Thick, velvet custard that coats the whisk.',
        whatShouldThisLookLike: 'Thick, golden, velvety Greek béchamel.',
        tip: 'Whisk egg yolks in off the heat so they don\'t scramble.',
        commonMistake: 'Dumping cold milk into hot roux all at once — causes stubborn lumps.',
        moveOnWhen: 'Béchamel is thick, velvety, and seasoned.',
        quickInstructions: 'Make roux with butter and flour, whisk in warm milk until thick, stir in nutmeg, cheese, and yolks off heat.'
      },
      {
        step: 4,
        title: 'LAYER THE ARCHITECTURE & BAKE',
        whatYouNeed: ['9x13 baking dish', 'Roasted potatoes', 'Roasted eggplants', 'Spiced meat sauce', 'Béchamel', 'Remaining 50g cheese'],
        description: 'In the baking dish, lay the roasted potatoes in an even, overlapping single layer across the bottom. Layer half the roasted eggplant planks on top. Spread the entire spiced meat sauce evenly over the eggplants. Layer the remaining roasted eggplant planks. Pour the velvety béchamel over the top, smoothing flat with a spatula. Sprinkle remaining 50g grated cheese on top. Bake at 180°C (350°F) for 45 to 50 minutes.',
        howToDoIt: 'Potatoes at the base provide rigid structural support to anchor the soft eggplants and meat.',
        heat: '180°C (350°F) for 45-50 mins',
        duration: 50,
        visualCues: 'Top puffs up and bakes into a gorgeous golden-brown, bronzed crust; sauce bubbles around edges.',
        smell: 'Heavenly aroma of baked cheese, cinnamon, roasted lamb, and nutmeg.',
        textureCheck: 'Top crust is firm, golden, and puffed.',
        whatShouldThisLookLike: 'Puffed, bronzed, bubbling Greek Moussaka.',
        tip: 'Broil for the final 2 minutes if you crave extra dark golden-brown cheese spots on top.',
        commonMistake: 'Baking at too high heat, which scorches the béchamel before the layers heat through.',
        moveOnWhen: 'Top is deep golden-brown and puffed.',
        quickInstructions: 'Layer potatoes, eggplant, meat sauce, eggplant, béchamel, and cheese; bake at 180°C for 45-50 mins.'
      },
      {
        step: 5,
        title: 'THE MANDATORY 25-MINUTE REST & SQUARE SLICE',
        whatYouNeed: ['Sharp knife', 'Flat spatula', 'Serving plates'],
        description: 'Remove Moussaka from oven. LEAVE UNDISTURBED TO REST ON A WIRE RACK FOR A FULL 25 TO 30 MINUTES. (Crucial step!). As it rests, the puffed béchamel settles and the eggplants and meat bind into a firm, cohesive mosaic. Slice into clean, tall rectangular squares and lift onto plates with a spatula.',
        howToDoIt: 'Resting allows the molten gelatin and béchamel proteins to cool and set, guaranteeing clean, tall restaurant squares.',
        heat: 'Off Heat (Cooling/Setting)',
        duration: 25,
        visualCues: 'Puffed top settles slightly into a taut, golden, bronzed crust; layers hold firm.',
        textureCheck: 'Firm, sliceable, and cohesive.',
        whatShouldThisLookLike: 'Tall, majestic square of layered Greek Moussaka.',
        tip: 'Never cut straight from the oven — hot moussaka will collapse into a runny heap.',
        commonMistake: 'Slicing while boiling hot, ruining the magnificent layered presentation.',
        moveOnWhen: '25-minute rest complete; sliced and served.',
        quickInstructions: 'Rest for 25-30 mins on counter; slice into clean squares and serve warm.'
      }
    ],
    commonMistakes: [
      { mistake: 'Moussaka collapsed into a soupy puddle on the plate.', remedy: 'Eggplants were layered raw, meat sauce was too watery, or moussaka wasn\'t rested 25 minutes before slicing.' },
      { mistake: 'Béchamel was runny and didn\'t set.', remedy: 'Roux was too thin or egg yolks were omitted. Béchamel must be thick like pudding.' }
    ],
    troubleshooting: [
      {
        problem: 'Béchamel is browning too fast in the oven',
        whatHappened: 'Oven top element is too hot.',
        whyItHappened: 'Cheese caramelizing early.',
        whatToDoNow: 'Tent loosely with a sheet of aluminum foil for the remaining bake time.',
        howToPrevent: 'Bake on middle oven rack at 180°C.'
      }
    ],
    substitutions: [
      { original: 'Ground lamb', substitute: '100% ground beef or cooked brown lentils (Vegetarian Lentil Moussaka)', notes: 'Lentil Moussaka with roasted eggplant and zucchini is a beloved Greek Orthodox fasting dish.' },
      { original: 'Kefalotyri cheese', substitute: 'Pecorino Romano or aged Parmesan', notes: 'Provides the identical salty, sheep\'s milk sharpness.' }
    ],
    safetyNotes: [
      'Ground meat must reach internal temperature of 74°C (165°F).'
    ],
    servingGuide: {
      restingTime: 'Rest 25 to 30 minutes before slicing.',
      garnishing: 'Fresh flat-leaf parsley sprigs.',
      plating: 'Serve a tall square on warm dinner plates with a fork and knife.',
      temperature: 'Warm (never scorching hot).',
      accompaniments: 'Crisp Greek village salad (Horiatiki) with feta and kalamata olives, and dry Greek red wine (Agiorgitiko).'
    }
  },

  // 7. SOUVLAKI (Greek Skewered Pork / Souvlaki Kalamaki)
  {
    id: 'souvlaki',
    name: 'Authentic Greek Pork Souvlaki Skewers (Souvlaki Kalamaki)',
    cuisine: 'Greek',
    region: 'Greece (Athens / National)',
    servings: 4,
    prepTime: 25,
    cookTime: 10,
    difficulty: 'Easy',
    overview: {
      summary: 'Greece\'s ultimate street food treasure: succulent chunks of pork shoulder marinated in extra virgin olive oil, fresh lemon juice, garlic, and wild Greek oregano (Rigani), threaded onto wooden skewers and grilled over hot coals until charred and juicy, served with warm pocketless pita bread, thick garlicky tzatziki, sliced tomatoes, and red onions.',
      appearance: 'Sizzling wooden skewers of golden-charred pork cubes flecked with wild oregano, served on warm grilled pita with glistening white tzatziki and ruby tomatoes.',
      texture: 'Juicy, succulent, tender pork with crispy, caramelized charred edges, wrapped in warm, pillowy soft pita with creamy, cool tzatziki.',
      flavor: 'Bright Mediterranean simplicity: savory pork fat, sharp lemon acidity, pungent garlic, herbal peppery oregano, and cool cucumber-yogurt freshness.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: '12 wooden skewers (20cm)', purpose: 'Soaked in water for 30 minutes to prevent burning on grill.' },
      { name: 'Outdoor charcoal grill or ridged cast-iron grill pan', purpose: 'For high-heat grilling and smoky char marks.' },
      { name: 'Tongs and basting brush', purpose: 'For turning and basting skewers with lemon-oregano glaze.' }
    ],
    beforeYouStart: [
      { task: 'Soak wooden skewers in cold water for 30 minutes.', durationMinutes: 30 },
      { task: 'Cut 700g pork shoulder (pork neck / collar) into uniform 2.5cm cubes.', durationMinutes: 8 },
      { task: 'Whisk marinade: 4 tbsp olive oil, juice of 1 lemon, 4 minced garlic cloves, 1.5 tbsp dried Greek oregano, 1 tsp salt, and black pepper; marinate pork 30 minutes.', durationMinutes: 30 }
    ],
    ingredientPrepGuide: [
      { item: 'Pork Collar / Shoulder Selection', technique: 'Never use lean pork loin or tenderloin! Pork shoulder or neck (Laimos) has the ideal 20% intramuscular fat marbling that melts during grilling, keeping the skewered meat succulent and tender rather than dry.' },
      { item: 'Greek Oregano (Rigani)', technique: 'Must use wild Greek dried oregano (Rigani). Greek oregano grows on rocky hillsides and has a pungent, earthy, peppery intensity that fresh supermarket oregano cannot match.' }
    ],
    essentialIngredients: [
      { name: 'Pork shoulder or pork neck (collar)', prep: 'trimmed and cut into 2.5cm cubes', amount: '700g', metric: '700g', imperial: '1.5 lbs', common: '700g' },
      { name: 'Extra virgin Greek olive oil', prep: 'divided (marinade & basting)', amount: '6 tbsp', metric: '90ml', imperial: '3 fl oz', common: '6 tbsp' },
      { name: 'Fresh lemons', prep: 'juiced for marinade + extra wedges for serving', amount: '2 lemons', metric: '60ml', imperial: '2 fl oz', common: '2 lemons' },
      { name: 'Fresh garlic cloves', prep: 'finely minced', amount: '4 cloves', metric: '15g', imperial: '0.5 oz', common: '4 cloves' },
      { name: 'Dried wild Greek oregano (Rigani)', prep: 'crushed between palms', amount: '2 tbsp', metric: '6g', imperial: '0.2 oz', common: '2 tbsp' },
      { name: 'Fine sea salt & black pepper', prep: 'seasoning', amount: '1.5 tsp salt + 1 tsp pepper', metric: '10g', imperial: '0.35 oz', common: 'seasoning' },
      { name: 'Greek pocketless pita breads', prep: 'brushed with olive oil & grilled warm', amount: '4 pitas', metric: '4 pieces', imperial: '4 pieces', common: '4 pitas' },
      { name: 'Tzatziki sauce', prep: 'strained Greek yogurt, cucumber, garlic & dill', amount: '1 cup', metric: '250g', imperial: '9 oz', common: '1 cup' },
      { name: 'Ripe red tomatoes and red onion', prep: 'sliced for serving', amount: '1 tomato + 1/2 red onion', metric: '150g', imperial: '5.3 oz', common: 'sliced' }
    ],
    steps: [
      {
        step: 1,
        title: 'THREAD PORK SNUGLY ONTO SOAKED SKEWERS',
        whatYouNeed: ['Marinated pork cubes', '12 soaked wooden skewers'],
        description: 'Thread 4 to 5 cubes of marinated pork onto each soaked skewer. Push the meat pieces snugly together against each other, leaving 5cm bare at the bottom for a handle. Lay on a tray and season with an extra dusting of dried oregano and coarse salt.',
        howToDoIt: 'Packing cubes snugly prevents meat from drying out during intense high-heat grilling.',
        heat: 'No Heat',
        duration: 8,
        visualCues: 'Neat skewers of pork cubes glistening with olive oil and green oregano specks.',
        textureCheck: 'Firmly packed skewers.',
        whatShouldThisLookLike: 'Tray of threaded pork souvlaki skewers.',
        tip: 'Wipe bare wood handles clean so they don\'t char.',
        commonMistake: 'Leaving large gaps between pieces — thin edges burn to charcoal while meat dries out.',
        moveOnWhen: 'All skewers are threaded.',
        quickInstructions: 'Thread 4-5 pork cubes snugly onto each soaked skewer, dust with extra oregano.'
      },
      {
        step: 2,
        title: 'PREHEAT GRILL TO BLISTERING HEAT',
        whatYouNeed: ['Charcoal grill or cast-iron grill pan', 'Tongs', 'Oil brush'],
        description: 'Preheat grill over high heat until smoking hot (220°C / 425°F). Brush grates with olive oil. Searing heat is essential to char the exterior fat while locking in juices.',
        howToDoIt: 'High heat creates instant Maillard browning and smoky charring without overcooking the interior.',
        heat: 'High Heat',
        duration: 5,
        visualCues: 'Grill grates smoking lightly; oil burns clean.',
        smell: 'Clean hot grill.',
        textureCheck: 'Smoking hot.',
        whatShouldThisLookLike: 'Blazing hot grill ready for skewers.',
        tip: 'Lay a strip of aluminum foil under the wooden handles on the grill to prevent them from catching flame.',
        commonMistake: 'Grilling over low heat — pork will dry out and turn gray.',
        moveOnWhen: 'Grill is smoking hot.',
        quickInstructions: 'Preheat grill over high heat until smoking hot; oil grates.'
      },
      {
        step: 3,
        title: 'GRILL, TURN & CHAR (8 TO 10 MINUTES)',
        whatYouNeed: ['Skewers', 'Tongs', 'Basting glaze (olive oil + lemon juice)'],
        description: 'Lay skewers on the grill grates. Grill for 2 to 3 minutes per side, turning four times (quarter turns) for 8 to 10 minutes total. As fat drips onto hot coals, small flames will kiss the meat with authentic smoky char. In the final 2 minutes, brush with a mixture of olive oil and fresh lemon juice.',
        howToDoIt: 'Quarter-turns ensure even caramelization on all four sides while basting adds a glistening citrus glaze.',
        heat: 'High Heat',
        duration: 9,
        visualCues: 'Pork turns golden-brown with dark, blistered, caramelized char marks on all sides; juices sizzle.',
        hear: 'Intense crackling and dripping fat sizzle.',
        smell: 'Incredible aroma of sizzling pork fat, charred oregano, and lemon.',
        textureCheck: 'Springy and succulent to the touch (71°C / 160°F).',
        whatShouldThisLookLike: 'Sizzling, charred, golden pork skewers.',
        tip: 'Do not overcook past 10 minutes — pork shoulder stays juicy when cooked to medium-well.',
        commonMistake: 'Leaving skewers stationary, causing one side to burn black while the other stays pale.',
        moveOnWhen: 'Pork is charred on all sides and cooked to 71°C.',
        quickInstructions: 'Grill skewers 8-10 mins, turning 4 times; baste with lemon and olive oil in final 2 mins.'
      },
      {
        step: 4,
        title: 'WARM PITA BREADS & REST SKEWERS',
        whatYouNeed: ['4 Greek pitas', 'Olive oil', 'Oregano', 'Tongs'],
        description: 'Transfer cooked souvlaki to a warm plate and rest 2 minutes. Brush Greek pocketless pita breads with olive oil, sprinkle with oregano, and place on the grill for 60 seconds per side until warm, puffed, and lightly marked with grill lines.',
        howToDoIt: 'Warming the pita softens the bread into an ultra-pliable, warm wrap.',
        heat: 'Medium-High Heat',
        duration: 2,
        visualCues: 'Pita bread puffs slightly with golden grill marks.',
        smell: 'Toasted bakery bread and oregano.',
        textureCheck: 'Pillowy soft and warm.',
        whatShouldThisLookLike: 'Warm, soft, grilled pita bread.',
        tip: 'Use authentic thick, Greek pocketless pita — not thin Middle Eastern pocket pita.',
        commonMistake: 'Serving cold pita bread, which cracks when folded.',
        moveOnWhen: 'Pitas are grilled and warm.',
        quickInstructions: 'Rest skewers 2 mins; grill oiled pitas 60s per side until warm and puffed.'
      },
      {
        step: 5,
        title: 'SERVE WITH TZATZIKI, TOMATOES & RED ONION',
        whatYouNeed: ['Grilled skewers', 'Warm pitas', 'Tzatziki sauce', 'Sliced tomatoes & onions', 'Lemon wedges'],
        description: 'Arrange warm pitas on a platter. Lay skewers on top. Squeeze fresh lemon juice generously over the hot pork. Serve with thick bowls of tzatziki, sliced ripe tomatoes, thin red onions, and lemon wedges. Diners can slide the pork off the wooden skewer directly into the warm pita with tzatziki and eat with hands!',
        howToDoIt: 'The hot, charred, savory pork contrasts sublimely with cool, garlicky cucumber tzatziki and warm pita.',
        heat: 'Off Heat',
        duration: 1,
        visualCues: 'Sizzling golden-charred skewers, warm pitas, glistening white tzatziki, and ruby tomatoes.',
        smell: 'Charcoal smoke, fresh lemon, oregano, and garlic.',
        textureCheck: 'Succulent pork, soft warm pita, cool creamy sauce, and crunchy red onions.',
        whatShouldThisLookLike: 'Authentic Athens Plaka street-style Souvlaki platter.',
        tip: 'In Greece, a handful of crispy French fries is traditionally stuffed right inside the pita wrap!',
        commonMistake: 'Letting skewers sit until cold — eat hot off the fire.',
        moveOnWhen: 'Plated and served.',
        quickInstructions: 'Plate skewers on warm pitas, squeeze lemon, serve with tzatziki, tomatoes, and onions.'
      }
    ],
    commonMistakes: [
      { mistake: 'Meat was dry and chewy.', remedy: 'Lean pork loin was used. Always use pork shoulder or collar (20% fat) for succulent skewers.' },
      { mistake: 'Wooden skewers caught fire.', remedy: 'Skewers were dry. Soak in cold water for at least 30 minutes.' }
    ],
    troubleshooting: [
      {
        problem: 'Flames flare up wildly from dripping pork fat',
        whatHappened: 'Fat dripped directly onto hot coals.',
        whyItHappened: 'Normal barbecue physics.',
        whatToDoNow: 'Move skewers to indirect heat for 30 seconds until flame subsides.',
        howToPrevent: 'Trim excessive exterior fat chunks before threading.'
      }
    ],
    substitutions: [
      { original: 'Pork shoulder', substitute: 'Boneless chicken thighs (Chicken Souvlaki) or lamb leg cubes', notes: 'Chicken souvlaki marinated with mustard, lemon, and oregano is immensely popular.' }
    ],
    safetyNotes: [
      'Pork must reach minimum safe internal temperature of 71°C (160°F).'
    ],
    servingGuide: {
      restingTime: 'Rest 2 minutes before eating.',
      garnishing: 'Extra sprinkle of wild Greek oregano, coarse sea salt, and fresh lemon juice.',
      plating: 'Served on a wooden board or platter with warm pitas and bowls of tzatziki.',
      temperature: 'Sizzling hot off the fire.',
      accompaniments: 'Cold Mythos beer, Greek village salad, and crispy oregano French fries.'
    }
  },

  // 8. GYROS (Greek Shaved Spiced Meat Wraps)
  {
    id: 'gyros',
    name: 'Street-Style Greek Gyros (Gyros Pita)',
    cuisine: 'Greek',
    region: 'Greece (Thessaloniki / Athens)',
    servings: 4,
    prepTime: 25,
    cookTime: 20,
    difficulty: 'Medium',
    overview: {
      summary: 'The reigning champion of Greek street food: tender, seasoned pork or lamb-and-beef seasoned with garlic, Greek oregano, coriander, and cumin, cooked and shaved into crispy-edged ribbons, wrapped tightly inside a warm, oiled, pocketless Greek pita with cool garlicky tzatziki, ripe sliced tomatoes, thinly sliced red onions, and a handful of freshly fried crispy French fries.',
      appearance: 'A plump, handheld parchment-wrapped cone displaying layers of warm fluffy pita, crispy-edged shaved seasoned meat ribbons, glistening white tzatziki, red tomatoes, and golden French fries peeking from the top.',
      texture: 'Contrasting textures: pillowy soft warm pita, crispy caramelized shaved meat edges, cool creamy tzatziki, crunchy red onions, and crisp potato fries.',
      flavor: 'Explosion of Greek comfort: savory spiced roasted meat, pungent garlic, herbal oregano, sweet ripe tomato, and tangy cucumber yogurt.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Heavy 12-inch cast-iron skillet or griddle', purpose: 'For flash-searing shaved meat ribbons into crispy-edged perfection.' },
      { name: 'Parchment paper squares (30x30cm)', purpose: 'For wrapping the gyros into handheld street cones.' }
    ],
    beforeYouStart: [
      { task: 'Prepare seasoned meat loaf (or thinly slice pork shoulder marinated in olive oil, vinegar, garlic, and oregano); bake at 180°C for 35 mins until firm; cool and slice paper-thin.', durationMinutes: 40 },
      { task: 'Fry or bake 200g crispy French fries dusted with salt and oregano.', durationMinutes: 15 },
      { task: 'Slice 2 ripe tomatoes into half-moons and slice 1 red onion thinly.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'Shaving & Searing Technique', technique: 'Slice the chilled cooked spiced meat loaf paper-thin (2mm). Right before serving, flash-sear the thin ribbons in a screaming hot skillet with a drop of olive oil for 2 minutes. The edges will blister and crisp into authentic rotisserie-style gyros shavings.' },
      { item: 'French Fries Inside the Wrap', technique: 'In Greece, French fries are NEVER served merely on the side — a generous handful of hot crispy fries is ALWAYS wrapped directly INSIDE the pita wrap!' }
    ],
    essentialIngredients: [
      { name: 'Thinly sliced spiced gyro meat (pork or lamb/beef blend)', prep: 'sliced paper-thin (2mm)', amount: '500g', metric: '500g', imperial: '1.1 lbs', common: '500g' },
      { name: 'Greek pocketless pita breads', prep: 'brushed with olive oil & grilled warm', amount: '4 large pitas', metric: '4 pieces', imperial: '4 pieces', common: '4 pitas' },
      { name: 'Authentic Greek Tzatziki sauce', prep: 'strained Greek yogurt, cucumber, garlic, dill', amount: '1 cup', metric: '250g', imperial: '9 oz', common: '1 cup' },
      { name: 'Crispy fried French fries', prep: 'hot, dusted with oregano & salt', amount: '200g', metric: '200g', imperial: '7 oz', common: '2 cups' },
      { name: 'Ripe red tomatoes', prep: 'sliced into thin half-moons', amount: '2 medium', metric: '200g', imperial: '7 oz', common: '2 tomatoes' },
      { name: 'Red onion', prep: 'thinly sliced into half-moons', amount: '1 small', metric: '80g', imperial: '2.8 oz', common: '1 onion' },
      { name: 'Dried wild Greek oregano (Rigani)', prep: 'for dusting', amount: '1 tbsp', metric: '3g', imperial: '0.1 oz', common: '1 tbsp' },
      { name: 'Sweet paprika', prep: 'for dusting inside wrap', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'FLASH-SEAR SHAVED MEAT TO CRISPY BLISTERS',
        whatYouNeed: ['Cast-iron skillet', '1 tbsp olive oil', '500g thinly sliced gyro meat'],
        description: 'Heat 1 tbsp olive oil in the cast-iron skillet over high heat until smoking hot. Add the shaved meat ribbons. Flash-sear for 2 to 3 minutes, tossing constantly, until the edges curl, blister, and turn dark golden-brown and crispy.',
        howToDoIt: 'High heat flash-fries the thin ribbons in seconds, mimicking the caramelized crispy edges shaved from a vertical rotisserie spit.',
        heat: 'High Heat',
        duration: 3,
        visualCues: 'Meat ribbons sizzle furiously; thin edges turn dark mahogany and crackling crisp.',
        hear: 'Intense, rhythmic crackling sizzle.',
        smell: 'Savory roasted spiced meat, garlic, and oregano.',
        textureCheck: 'Crispy caramelized edges, tender center.',
        whatShouldThisLookLike: 'Crispy-edged, sizzling gyro meat shavings.',
        tip: 'Do not crowd the pan; sear in two quick batches if needed.',
        commonMistake: 'Cooking on low heat, which steams the meat into soft, limp strips.',
        moveOnWhen: 'Meat edges are dark brown and crispy.',
        quickInstructions: 'Flash-sear shaved gyro meat in hot skillet for 2-3 mins until edges are crispy and browned.'
      },
      {
        step: 2,
        title: 'GRILL PITA BREADS TILL PUFFY & PLIABLE',
        whatYouNeed: ['4 Greek pitas', 'Olive oil brush', 'Skillet or grill'],
        description: 'Brush both sides of the pocketless pita breads with olive oil. Place in hot skillet for 60 seconds per side until puffed, warm, and soft with golden blisters.',
        howToDoIt: 'Warming the bread ensures it can be rolled into a cone without tearing.',
        heat: 'Medium-High Heat',
        duration: 2,
        visualCues: 'Pita swells with steam, turning pillowy soft and golden.',
        textureCheck: 'Soft, pliable, and warm.',
        whatShouldThisLookLike: 'Warm, golden grilled pita bread.',
        tip: 'Keep warmed pitas stacked under a clean kitchen towel while assembling.',
        commonMistake: 'Over-toasting pita until hard and brittle — it will snap when rolled.',
        moveOnWhen: 'Pitas are warm and pliable.',
        quickInstructions: 'Brush pitas with olive oil, grill 60s per side until warm and soft.'
      },
      {
        step: 3,
        title: 'SPREAD TZATZIKI & LAYER THE HEROES',
        whatYouNeed: ['Warm pita', '2 tbsp tzatziki', 'Crispy seared gyro meat', 'Tomato slices', 'Red onion'],
        description: 'Lay a warm pita flat on a square of parchment paper. Spread 2 generous tablespoons of thick tzatziki down the center. Mound a generous portion of sizzling crispy gyro meat over the sauce. Top with 3 slices of tomato and thin red onion slivers.',
        howToDoIt: 'Spreading tzatziki on the bread anchors the meat and lubricates every bite.',
        heat: 'No Heat',
        duration: 2,
        visualCues: 'Abundant mound of steaming crispy meat, white garlic sauce, ruby tomatoes, and purple onions.',
        smell: 'Cool cucumber garlic, roasted meat, and warm bread.',
        textureCheck: 'Juicy, rich, and abundant.',
        whatShouldThisLookLike: 'Loaded pita ready for French fries.',
        tip: 'Dust the tomatoes with a pinch of salt and dried oregano.',
        commonMistake: 'Skimping on meat — a real Greek gyro is packed to bursting.',
        moveOnWhen: 'Meat, tzatziki, tomatoes, and onions are layered.',
        quickInstructions: 'Spread tzatziki on warm pita; layer with sizzling meat, tomato slices, and red onion.'
      },
      {
        step: 4,
        title: 'STUFF WITH FRIES & ROLL INTO STREET CONE',
        whatYouNeed: ['Crispy hot French fries', 'Parchment paper square', 'Sweet paprika'],
        description: 'Stuff 6 to 8 piping hot, crispy French fries directly on top of the fillings. Dust with sweet paprika. Bring the left and right edges of the pita tightly together around the fillings into an open-faced cone. Wrap the parchment paper tightly around the bottom half, twisting the bottom tail securely to lock the cone.',
        howToDoIt: 'Wrapping in parchment paper contains the juices and allows diners to peel paper down as they eat without spilling.',
        heat: 'No Heat',
        duration: 2,
        visualCues: 'Tightly wrapped street-food cone with golden fries, crispy meat, and red tomatoes peeking out the top.',
        textureCheck: 'Firm, handheld parcel.',
        whatShouldThisLookLike: 'Iconic Greek street Gyros Pita.',
        tip: 'Tuck the parchment tightly at the base to prevent tzatziki from leaking onto your hands.',
        commonMistake: 'Forgetting the French fries — in Greece, fries inside the gyro are non-negotiable!',
        moveOnWhen: 'Wrapped securely in parchment paper.',
        quickInstructions: 'Top with hot French fries and paprika; roll pita into cone and wrap tightly with parchment.'
      }
    ],
    commonMistakes: [
      { mistake: 'Pita cracked and ripped open during wrapping.', remedy: 'Pita was cold or over-toasted. Warm until soft, pliable, and steamy.' },
      { mistake: 'Meat was soggy and limp.', remedy: 'Meat wasn\'t flash-seared. Always sear thin ribbons in a smoking hot pan for 2 minutes.' }
    ],
    troubleshooting: [
      {
        problem: 'Wrap is leaking sauce from the bottom',
        whatHappened: 'Parchment tail was not twisted shut.',
        whyItHappened: 'Gravity pulls tzatziki down.',
        whatToDoNow: 'Wrap a second napkin or parchment tightly around the base.',
        howToPrevent: 'Twist the bottom of the parchment tightly like a candy wrapper.'
      }
    ],
    substitutions: [
      { original: 'Pork gyro meat', substitute: 'Chicken gyro meat or grilled halloumi cheese (Vegetarian Gyro)', notes: 'Halloumi Gyro with tzatziki and fries is an extraordinary vegetarian street food option.' }
    ],
    safetyNotes: [
      'Meat must be cooked thoroughly before slicing and searing.'
    ],
    servingGuide: {
      restingTime: 'Eat immediately while hot and crispy.',
      garnishing: 'Dusting of sweet paprika and dried oregano.',
      plating: 'Wrapped in street-style parchment paper.',
      temperature: 'Piping hot meat and fries with cool tzatziki.',
      accompaniments: 'Cold Greek beer (Alfa or Fix) and extra tzatziki for dipping.'
    }
  },

  // 9. GREEK SALAD (Horiatiki Salata)
  {
    id: 'greek-salad',
    name: 'Traditional Greek Village Salad (Horiatiki Salata)',
    cuisine: 'Greek',
    region: 'Greece (Village / Island / National)',
    servings: 4,
    prepTime: 15,
    cookTime: 0,
    difficulty: 'Easy',
    overview: {
      summary: 'The pure, sun-drenched soul of the Mediterranean: ripe, room-temperature vine tomatoes cut into rustic wedges, crisp Persian cucumbers, thinly sliced red onions, and green bell peppers, tossed with briny Kalamata olives, crowned with a whole slab of creamy sheep\'s milk Greek Feta cheese, showered with wild mountain oregano (Rigani), and bathed in robust Greek extra virgin olive oil and red wine vinegar.',
      appearance: 'A vibrant, colorful bowl of glistening ruby tomatoes, green cucumber and peppers, dark purple Kalamata olives, and purple onions, crowned with a pristine white slab of feta cheese showered with green oregano.',
      texture: 'Juicy, sweet tomato burst, crisp crunchy cucumbers and peppers, tender briny olives, and creamy, crumbly feta cheese.',
      flavor: 'Peak Mediterranean freshness: sweet vine tomatoes, sharp red wine vinegar, grassy peppery olive oil, salty tangy feta, and pungent mountain oregano.',
      restingTimeMinutes: 5
    },
    equipment: [
      { name: 'Wide shallow ceramic salad bowl', purpose: 'Allows vegetables to be arranged rustically without crushing delicate tomatoes.' },
      { name: 'Sharp chef\'s knife', purpose: 'For cutting clean rustic wedges.' }
    ],
    beforeYouStart: [
      { task: 'Ensure 4 large vine-ripened tomatoes are at ROOM TEMPERATURE (never refrigerate tomatoes; cold destroys aroma).', durationMinutes: 1 },
      { task: 'Cut 2 cucumbers into thick 1cm rounds; slice 1 green bell pepper into rings; slice 1/2 red onion into thin half-moons.', durationMinutes: 5 },
      { task: 'Rinse and drain 16 whole Kalamata olives.', durationMinutes: 2 }
    ],
    ingredientPrepGuide: [
      { item: 'No Lettuce Rule (Strict Greek Tradition)', technique: 'Authentic Horiatiki (Village Salad) NEVER contains lettuce, greens, or leafy cabbage! It is strictly an assembly of summer vine vegetables, olives, and feta.' },
      { item: 'Whole Feta Slab Presentation', technique: 'Never crumble or dice the feta into tiny cubes! Tradition demands placing one whole, solid 200g slab of feta cheese directly on top of the salad. Diners break pieces off with their forks as they eat.' }
    ],
    essentialIngredients: [
      { name: 'Ripe vine-ripened tomatoes', prep: 'at room temperature, cut into rustic wedges', amount: '4 large', metric: '600g', imperial: '21 oz', common: '4 tomatoes' },
      { name: 'Cucumbers (Persian or English)', prep: 'peeled in zebra stripes, cut into 1cm rounds', amount: '2 medium', metric: '250g', imperial: '9 oz', common: '2 cucumbers' },
      { name: 'Green bell pepper', prep: 'seeded and sliced into thin rings', amount: '1 pepper', metric: '120g', imperial: '4.2 oz', common: '1 pepper' },
      { name: 'Red onion', prep: 'thinly sliced into half-moons', amount: '1/2 onion', metric: '80g', imperial: '2.8 oz', common: '1/2 onion' },
      { name: 'Authentic Kalamata olives', prep: 'whole, pit-in for maximum flavor', amount: '16 olives', metric: '80g', imperial: '2.8 oz', common: '1/2 cup' },
      { name: 'Authentic Greek Feta cheese (sheep/goat milk)', prep: '1 whole solid slab', amount: '200g', metric: '200g', imperial: '7 oz', common: '1 block' },
      { name: 'Extra virgin Greek olive oil', prep: 'generous pour (Kalamata olive oil)', amount: '5 tbsp', metric: '75ml', imperial: '2.5 fl oz', common: '1/3 cup' },
      { name: 'Red wine vinegar', prep: 'sharp aged vinegar', amount: '1.5 tbsp', metric: '22ml', imperial: '0.75 fl oz', common: '1.5 tbsp' },
      { name: 'Dried wild Greek oregano (Rigani)', prep: 'crushed between palms', amount: '1 tbsp', metric: '3g', imperial: '0.1 oz', common: '1 tbsp' },
      { name: 'Flaky sea salt', prep: 'for seasoning tomatoes', amount: '1 tsp', metric: '5g', imperial: '0.18 oz', common: '1 tsp' },
      { name: 'Crusty rustic bread (for Papara dipping)', prep: 'for soaking juices', amount: '1 loaf', metric: '300g', imperial: '10.5 oz', common: '1 loaf' }
    ],
    steps: [
      {
        step: 1,
        title: 'CUT TOMATOES & SALT TO RELEASE SWEET NECTAR',
        whatYouNeed: ['Room-temperature tomatoes', 'Shallow ceramic bowl', '1 tsp flaky sea salt'],
        description: 'Cut tomatoes into rustic wedges over the salad bowl so every drop of juice falls into the bowl. Sprinkle tomatoes with 1 tsp flaky sea salt. Let sit for 3 minutes.',
        howToDoIt: 'Salt draws out sweet tomato juices through osmosis, which will mingle with the olive oil to create the legendary salad dressing.',
        heat: 'No Heat',
        duration: 3,
        visualCues: 'Tomatoes glisten and release sweet red juices into the bottom of the bowl.',
        smell: 'Intense sweet summer tomato perfume.',
        textureCheck: 'Juicy, plump wedges.',
        whatShouldThisLookLike: 'Tomato wedges releasing red juices in the bowl.',
        tip: 'Never use cold refrigerated tomatoes — cold deactivates the aromatic volatile enzymes that give tomatoes flavor.',
        commonMistake: 'Cutting tomatoes on a flat board and leaving the delicious juice behind.',
        moveOnWhen: 'Tomatoes have released their juices.',
        quickInstructions: 'Cut tomatoes into rustic wedges over the bowl; sprinkle with salt, rest 3 mins.'
      },
      {
        step: 2,
        title: 'ADD CUCUMBERS, PEPPERS, ONIONS & OLIVES',
        whatYouNeed: ['Sliced cucumbers', 'Green pepper rings', 'Red onion slivers', 'Whole Kalamata olives'],
        description: 'Add sliced cucumbers, green pepper rings, thinly sliced red onions, and whole Kalamata olives to the bowl with the tomatoes. Toss gently with your hands or spoons to distribute ingredients.',
        howToDoIt: 'Tossing gently coats the crisp vegetables in the salted tomato juices.',
        heat: 'No Heat',
        duration: 2,
        visualCues: 'Vibrant mosaic of red, green, purple, and black vegetables glistening with tomato juice.',
        textureCheck: 'Crisp, crunchy, and juicy.',
        whatShouldThisLookLike: 'Tossed village vegetables in shallow bowl.',
        tip: 'Use whole olives with pits — pitted olives lose their firmness and absorb excess water.',
        commonMistake: 'Adding lettuce — authentic Greek salad NEVER contains lettuce!',
        moveOnWhen: 'Vegetables are mixed.',
        quickInstructions: 'Add cucumbers, green peppers, red onions, and Kalamata olives; toss gently.'
      },
      {
        step: 3,
        title: 'CROWN WITH WHOLE FETA SLAB & WILD OREGANO',
        whatYouNeed: ['1 whole 200g slab Greek feta cheese', 'Dried Greek oregano (rigani)'],
        description: 'Place the entire solid slab of feta cheese proudly in the center on top of the vegetables. Shower the feta slab and vegetables generously with dried wild Greek oregano, rubbing the herb between your palms as you sprinkle to release its oils.',
        howToDoIt: 'Presenting feta as a whole unbroken slab keeps the cheese fresh and allows diners to cut their own portions.',
        heat: 'No Heat',
        duration: 1,
        visualCues: 'Pristine white block of feta cheese crowned with green crushed oregano sitting atop the vibrant vegetables.',
        smell: 'Pungent herbal oregano and tangy sheep\'s milk cheese.',
        textureCheck: 'Creamy, crumbly feta block.',
        whatShouldThisLookLike: 'Authentic Greek village salad crowned with feta.',
        tip: 'Rubbing dried oregano between your palms crushes the dried leaf cells, blooming the aroma instantly.',
        commonMistake: 'Dicing feta into tiny cubes — authentic tavernas always serve a single solid slab.',
        moveOnWhen: 'Feta is crowned and showered with oregano.',
        quickInstructions: 'Place whole slab of feta on top; shower generously with crushed Greek oregano.'
      },
      {
        step: 4,
        title: 'THE COPIOUS OLIVE OIL & VINEGAR BATH (PAPARA)',
        whatYouNeed: ['5 tbsp extra virgin olive oil', '1.5 tbsp red wine vinegar', 'Crusty bread'],
        description: 'Pour 5 tablespoons of rich extra virgin olive oil generously all over the feta slab and vegetables. Drizzle red wine vinegar across the bowl. Let sit for 5 minutes before eating so the juices, oil, and vinegar marry in the bottom of the bowl. Serve with thick crusty bread for dredging ("Papara").',
        howToDoIt: 'The mingling of olive oil, vinegar, salt, and sweet tomato water in the bottom of the bowl creates "Zoumi" — the prize nectar meant for dipping crusty bread.',
        heat: 'No Heat',
        duration: 5,
        visualCues: 'Feta and vegetables glisten with rich golden-green olive oil; ruby vinaigrette pools at the bottom.',
        smell: 'Intoxicating aroma of peppery olive oil, sweet tomatoes, and tangy vinegar.',
        textureCheck: 'Crisp, juicy, and creamy.',
        whatShouldThisLookLike: 'The ultimate Greek Horiatiki Salata.',
        tip: 'Dunking crusty bread into the pooled bottom juices is called "Papara" in Greece and is an essential cultural ritual!',
        commonMistake: 'Skimping on olive oil — Greek salad demands a generous, abundant pour.',
        moveOnWhen: '5-minute rest complete; served with bread.',
        quickInstructions: 'Pour olive oil and vinegar generously over feta and vegetables; rest 5 mins; serve with crusty bread.'
      }
    ],
    commonMistakes: [
      { mistake: 'Salad was watery and bland.', remedy: 'Refrigerated, mealy tomatoes were used. Always use room-temperature ripe summer vine tomatoes.' },
      { mistake: 'Salad contained lettuce.', remedy: 'Traditional Greek salad NEVER contains lettuce. Only summer vine vegetables.' }
    ],
    troubleshooting: [
      {
        problem: 'Feta is too salty',
        whatHappened: 'Feta brine was high in sodium.',
        whyItHappened: 'Preservation brine.',
        whatToDoNow: 'Rinse feta slab under cold water for 10 seconds and pat dry before placing on salad.',
        howToPrevent: 'Taste a crumb of feta before assembly.'
      }
    ],
    substitutions: [
      { original: 'Greek Feta (sheep milk)', substitute: 'French feta or goat cheese log', notes: 'French feta is milder and exceptionally creamy.' },
      { original: 'Kalamata olives', substitute: 'Black oil-cured olives or green Castelvetrano olives', notes: 'Provide rich briny olive savoriness.' }
    ],
    safetyNotes: [
      'Serve fresh at room temperature within 2 hours of preparation.'
    ],
    servingGuide: {
      restingTime: 'Rest 5 minutes for juices to marry.',
      garnishing: 'Extra sprinkle of dried oregano and a whole olive on top of the feta.',
      plating: 'Wide shallow rustic earthenware or ceramic bowl.',
      temperature: 'Room temperature (never cold!).',
      accompaniments: 'Crusty rustic country bread (essential for dipping juices) and crisp white Greek wine (Assyrtiko or Retsina).'
    }
  },

  // 10. GREEK BAKLAVA (Traditional Walnut & Spiced Honey Baklava)
  {
    id: 'greek-baklava',
    name: 'Traditional Greek Spiced Honey Baklava (Baklavas)',
    cuisine: 'Greek',
    region: 'Greece (Peloponnese / Aegean Islands)',
    servings: 12,
    prepTime: 45,
    cookTime: 50,
    difficulty: 'Hard',
    overview: {
      summary: 'The golden crown of Greek confectionery: 30 paper-thin layers of crisp, butter-brushed phyllo pastry encasing a fragrant spiced filling of finely chopped walnuts, cinnamon, and ground cloves, scored into elegant diamond shapes, baked until shatteringly crisp and deep golden, then drenched while sizzling hot with a cold, fragrant spiced honey syrup infused with lemon peel and cinnamon.',
      appearance: 'A golden-bronzed baking dish scored into neat diamond tiles showing dozens of micro-thin flaky layers, glistening with golden honey syrup and topped with crushed green pistachios.',
      texture: 'The ultimate textural contrast: top layers shatter like delicate glass wafers, giving way to a crunchy, spiced nut core and syrupy, tender, honey-soaked base.',
      flavor: 'Intensely fragrant, sweet, and nutty: rich European butter, warm spicy cinnamon and clove warmth, toasted walnuts, and floral citrus honey syrup.',
      restingTimeMinutes: 240
    },
    equipment: [
      { name: '9x13 inch metal baking pan with straight sides', purpose: 'Metal conducts heat evenly to bake crisp bottom phyllo layers without sogginess.' },
      { name: 'Natural bristle pastry brush', purpose: 'Gently glides melted butter across delicate paper-thin phyllo sheets without tearing them.' },
      { name: 'Razor-sharp chef\'s knife', purpose: 'Crucial for scoring the diamond pattern through all 30 layers BEFORE baking.' }
    ],
    beforeYouStart: [
      { task: 'Thaw 1 pack (454g) phyllo pastry in the refrigerator overnight (never thaw at room temp, or sheets fuse together into a sticky block).', durationMinutes: 720 },
      { task: 'Finely chop 350g raw walnuts in a food processor into coarse breadcrumb size (do not puree into paste!).', durationMinutes: 5 },
      { task: 'Toss chopped walnuts with 1.5 tbsp ground cinnamon, 1/2 tsp ground cloves, and 2 tbsp sugar.', durationMinutes: 2 },
      { task: 'Clarify or melt 250g unsalted European butter.', durationMinutes: 5 },
      { task: 'Simmer syrup: 300g sugar, 250ml water, 120ml Greek thyme honey, 1 cinnamon stick, and strip of lemon peel for 10 mins; cool completely in fridge.', durationMinutes: 20 }
    ],
    ingredientPrepGuide: [
      { item: 'The Hot Baklava / Cold Syrup Rule', technique: 'The cardinal law of perfect baklava: POUR COLD SYRUP OVER HOT BAKLAVA (or hot syrup over completely cold baklava). Pouring hot syrup over hot baklava turns the delicate phyllo into soggy, rubbery mush. Hot pastry shocked with cold syrup drinks the syrup while keeping every delicate phyllo wafer shatteringly crisp.' },
      { item: 'Phyllo Handling', technique: 'Phyllo pastry is paper-thin and dries out within 2 minutes of exposure to air. Keep the unrolled phyllo stack covered under plastic wrap and a lightly damp (not wet!) tea towel while you work.' }
    ],
    essentialIngredients: [
      { name: 'Phyllo pastry sheets (#4 thin)', prep: 'thawed overnight, trimmed to 9x13 pan size', amount: '1 pack (approx 30 sheets)', metric: '454g', imperial: '1 lb', common: '1 pack' },
      { name: 'Unsalted European butter (82% fat)', prep: 'melted and clarified', amount: '250g', metric: '250g', imperial: '9 oz', common: '1 cup + 2 tbsp' },
      { name: 'Raw walnuts', prep: 'finely chopped coarse', amount: '350g', metric: '350g', imperial: '12 oz', common: '3.5 cups' },
      { name: 'Ground cinnamon & ground cloves', prep: 'spiced nut mix', amount: '1.5 tbsp cinnamon + 1/2 tsp cloves', metric: '10g', imperial: '0.35 oz', common: 'spices' },
      { name: 'Granulated sugar', prep: 'divided (2 tbsp for nuts, 300g for syrup)', amount: '325g', metric: '325g', imperial: '11.5 oz', common: '1.5 cups' },
      { name: 'Cold water', prep: 'for syrup', amount: '250ml', metric: '250ml', imperial: '8.5 fl oz', common: '1 cup' },
      { name: 'Greek thyme honey or orange blossom honey', prep: 'for floral syrup', amount: '120ml', metric: '160g', imperial: '5.6 oz', common: '1/2 cup' },
      { name: 'Fresh lemon peel & lemon juice', prep: '1 peel strip + 1 tbsp juice (prevents sugar crystallization)', amount: '1 lemon', metric: '15ml', imperial: '0.5 fl oz', common: '1 lemon' },
      { name: 'Cinnamon stick', prep: 'whole quill for syrup', amount: '1 stick', metric: '5g', imperial: '0.18 oz', common: '1 stick' },
      { name: 'Shelled raw pistachios', prep: 'finely ground for final green diamond garnish', amount: '3 tbsp', metric: '25g', imperial: '0.9 oz', common: '3 tbsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'COOK SPICED HONEY SYRUP & CHILL COMPLETELY',
        whatYouNeed: ['Saucepan', '300g sugar', '250ml water', '120ml honey', 'Cinnamon stick', 'Lemon peel strip + 1 tbsp juice'],
        description: 'Combine sugar, water, honey, cinnamon stick, lemon peel strip, and lemon juice in a saucepan over medium heat. Bring to a boil, stirring until sugar dissolves. Simmer gently for 10 minutes until slightly thickened and syrupy. Remove from heat. Chill in the refrigerator for at least 1 hour until COMPLETELY COLD.',
        howToDoIt: 'Adding lemon juice prevents sugar crystals from forming as the syrup cools. The syrup MUST be cold when poured over hot baked baklava.',
        heat: 'Medium Heat',
        duration: 15,
        visualCues: 'Syrup turns glossy, clear, light golden-amber.',
        smell: 'Intoxicating aroma of floral honey, cinnamon, and lemon.',
        textureCheck: 'Pourable, cold, glossy syrup.',
        whatShouldThisLookLike: 'Chilled golden honey syrup ready in a pitcher.',
        tip: 'Make the syrup first so it has plenty of time to chill in the fridge.',
        commonMistake: 'Pouring warm syrup over hot baklava — creates a soggy, rubbery dessert.',
        moveOnWhen: 'Syrup is simmering, then chilled cold in fridge.',
        quickInstructions: 'Simmer sugar, water, honey, cinnamon, and lemon 10 mins; chill in fridge until completely cold.'
      },
      {
        step: 2,
        title: 'LAYER THE BOTTOM PHYLLO BASE (10 SHEETS)',
        whatYouNeed: ['9x13 metal pan', 'Melted butter & brush', 'Phyllo sheets under damp towel'],
        description: 'Brush the bottom and sides of the 9x13 baking pan generously with melted butter. Lay 1 sheet of phyllo into the pan. Brush the entire sheet gently with melted butter. Repeat with 9 more sheets (10 buttered sheets total) to build a sturdy, flaky bottom crust.',
        howToDoIt: 'A 10-sheet buttered base provides the structural foundation that holds the heavy spiced nut filling without tearing.',
        heat: 'No Heat',
        duration: 8,
        visualCues: 'Glistening, buttery, layered phyllo base in the pan.',
        textureCheck: 'Delicate, butter-coated sheets.',
        whatShouldThisLookLike: '10 buttered sheets of phyllo lining the pan.',
        tip: 'Dab the butter gently with the tip of the bristles rather than dragging roughly, which tears the paper.',
        commonMistake: 'Letting the phyllo stack sit uncovered — sheets dry and crumble into dust within 2 minutes.',
        moveOnWhen: '10 buttered sheets are layered.',
        quickInstructions: 'Layer and butter 10 sheets of phyllo in the pan to form the bottom crust.'
      },
      {
        step: 3,
        title: 'LAYER SPICED NUTS & PHYLLO LAYERS',
        whatYouNeed: ['Spiced walnut mix', 'Remaining phyllo sheets', 'Melted butter'],
        description: 'Scatter one-third of the spiced walnut mixture evenly across the 10th sheet. Lay 4 sheets of phyllo on top, brushing each with melted butter. Scatter the second third of the nuts. Layer 4 more buttered phyllo sheets. Scatter the final third of the nuts. Finish by layering the final 10 to 12 sheets of phyllo on top, brushing every single sheet generously with butter.',
        howToDoIt: 'Multiple nut layers separated by buttery phyllo sheets ensure even distribution of crunch and prevent the nuts from falling out when sliced.',
        heat: 'No Heat',
        duration: 15,
        visualCues: 'Tall, pristine stack of layered phyllo and spiced nuts, finished with a smooth buttered top.',
        smell: 'Cinnamon, cloves, and rich butter.',
        textureCheck: 'Firm, multi-layered pastry cake.',
        whatShouldThisLookLike: 'Assembled 30-layer baklava in the pan.',
        tip: 'Save the cleanest, most pristine phyllo sheets for the very top layer.',
        commonMistake: 'Pouring all nuts into one giant thick layer, which separates and causes the top pastry to slide off.',
        moveOnWhen: 'All nut and phyllo layers are assembled.',
        quickInstructions: 'Alternate 3 layers of spiced walnuts with buttered phyllo; top with 10-12 buttered sheets.'
      },
      {
        step: 4,
        title: 'SCORE DIAMOND TILES BEFORE BAKING (MANDATORY)',
        whatYouNeed: ['Razor-sharp chef\'s knife', 'Chilled pan (optional)'],
        description: 'Chill pan in fridge for 10 minutes so butter hardens slightly. Using a razor-sharp knife, cut parallel diagonal lines 4cm apart all the way through the pastry to the bottom of the pan. Cut opposite diagonal lines to create elegant diamond-shaped tiles. Mist the top with cold water drops.',
        howToDoIt: 'Baklava MUST be cut BEFORE baking! Once baked, the phyllo turns glass-brittle; trying to cut baked baklava shatters the delicate sheets into ruin.',
        heat: 'No Heat',
        duration: 5,
        visualCues: 'Exquisite geometric pattern of diamond tiles cut cleanly through all 30 layers.',
        textureCheck: 'Clean, surgical cuts through to the metal pan base.',
        whatShouldThisLookLike: 'Scored diamond-patterned raw baklava.',
        tip: 'Hold the top sheets down gently with your left fingers as your knife slices through.',
        commonMistake: 'Cutting only halfway through — you must cut all the way through to the bottom metal.',
        moveOnWhen: 'All diamond tiles are cut cleanly.',
        quickInstructions: 'Cut parallel diagonal lines through all layers to bottom of pan, creating diamond tiles.'
      },
      {
        step: 5,
        title: 'BAKE SLOWLY TO GOLDEN-BRONZED SHATTER (50 MINUTES)',
        whatYouNeed: ['Preheated oven (160°C / 325°F)'],
        description: 'Bake in preheated 160°C (325°F) oven for 50 to 55 minutes. Bake slowly until the top is puffed, deep golden-bronzed, and every visible phyllo layer has separated into a crisp, delicate wafer.',
        howToDoIt: 'Low, slow baking at 160°C allows heat to penetrate deep into the center, drying and crisping all 30 inner phyllo layers without scorching the top.',
        heat: '160°C (325°F) for 50-55 mins',
        duration: 50,
        visualCues: 'Puffed, glorious, deep golden-bronze top with thousands of paper-thin crispy layers visible along the diamond cut seams.',
        hear: 'Gentle, sizzling butter bubbles along the cuts.',
        smell: 'Incredible aroma of toasted walnuts, browning butter, and warm cinnamon.',
        textureCheck: 'Top layers are glass-brittle and crisp.',
        whatShouldThisLookLike: 'Puffed, golden-bronzed baked baklava.',
        tip: 'If the top browns too quickly at minute 40, tent loosely with aluminum foil.',
        commonMistake: 'Baking at 200°C — browns the top in 20 minutes while inner layers remain raw, pasty dough.',
        moveOnWhen: 'Pastry is deep golden-bronze throughout.',
        quickInstructions: 'Bake at 160°C (325°F) for 50-55 mins until deep golden-bronze and crisp throughout.'
      },
      {
        step: 6,
        title: 'THE SIZZLING DOUSE: COLD SYRUP ON HOT BAKLAVA',
        whatYouNeed: ['Boiling hot baked baklava straight from oven', 'Ice-cold spiced honey syrup from fridge', 'Ladle', 'Ground pistachios'],
        description: 'THE MOMENT THE BAKLAVA LEAVES THE OVEN (while sizzling hot), immediately ladle the ICE-COLD honey syrup slowly and evenly all over the hot pastry, concentrating along the cut diamond seams. It will roar, hiss, and bubble violently as the thirsty pastry drinks the syrup. Sprinkle a pinch of ground green pistachios in the center of each diamond tile. LET REST UNCOVERED FOR AT LEAST 4 HOURS.',
        howToDoIt: 'The thermal shock of cold syrup contacting hot pastry forces the expanding air pockets to contract, pulling the cold honey syrup deep into the core while keeping the wafer-thin top layers permanently crisp.',
        heat: 'Off Heat',
        duration: 5,
        visualCues: 'Violent hissing and bubbling; golden syrup cascades into the diamond seams; pastry drinks the syrup greedily.',
        hear: 'Loud, dramatic roaring hiss ("shhhhh!").',
        smell: 'The greatest sweet aroma in Mediterranean baking: honey, cinnamon, lemon, and hot buttered pastry.',
        textureCheck: 'Top remains shatteringly crisp; bottom becomes moist and honey-soaked.',
        whatShouldThisLookLike: 'Glistening, jewel-like Greek Honey Baklava tiles.',
        tip: 'Do NOT cover with foil while resting — steam will turn the crispy top layers soggy!',
        commonMistake: 'Eating immediately — baklava requires at least 4 hours (ideally overnight) for syrup to equalize.',
        moveOnWhen: 'Syrup is poured; resting uncovered for 4 hours.',
        quickInstructions: 'Pour ice-cold syrup over boiling hot baklava immediately; listen to the hiss; rest uncovered 4 hours.'
      }
    ],
    commonMistakes: [
      { mistake: 'Baklava was soggy, gummy, and limp.', remedy: 'Warm syrup was poured over warm baklava. The rule is strictly: ICE-COLD syrup over BOILING-HOT baklava.' },
      { mistake: 'Phyllo shattered into crumbs when trying to cut.', remedy: 'Baklava was cut after baking. ALWAYS score diamond cuts before baking.' }
    ],
    troubleshooting: [
      {
        problem: 'Bottom layer is swimming in excess syrup after 2 hours',
        whatHappened: 'Normal early absorption stage.',
        whyItHappened: 'Phyllo drinks syrup slowly over hours.',
        whatToDoNow: 'Leave uncovered at room temperature; by hour 4 all syrup will be fully absorbed into the pastry.',
        howToPrevent: 'Trust the 4-hour resting process.'
      }
    ],
    substitutions: [
      { original: 'Walnuts', substitute: 'Raw pistachios (Pistachio Baklava) or blanched almonds', notes: 'Pistachio baklava is the prized northern Greek and Aegean island variation.' },
      { original: 'Greek thyme honey', substitute: 'Orange blossom honey or clover honey', notes: 'Provides rich floral sweetness.' }
    ],
    safetyNotes: [
      'Take care when pouring cold syrup over hot pan — steam and boiling butter will sputter violently.'
    ],
    servingGuide: {
      restingTime: 'Rest at least 4 hours uncovered at room temperature (ideally overnight).',
      garnishing: 'Finely ground raw green pistachios on each diamond center.',
      plating: 'Lift individual diamond tiles with a small offset spatula onto small dessert plates.',
      temperature: 'Room temperature (never cold from the fridge).',
      accompaniments: 'Strong, unfiltered Greek coffee (Ellinikos Kafes) boiled in a briki.'
    }
  }
];
