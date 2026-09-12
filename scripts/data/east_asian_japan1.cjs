// Japanese culinary recipes Part 1
module.exports = [
  // 1. SUSHI
  {
    id: 'sushi',
    name: 'Authentic Edomae Nigiri & Maki Sushi',
    cuisine: 'Japanese',
    region: 'Japan (Tokyo / Kanto)',
    servings: 4,
    prepTime: 45,
    cookTime: 30,
    difficulty: 'Hard',
    overview: {
      summary: 'The pinnacle of Japanese culinary artistry: seasoned sushi rice (shari) prepared from premium short-grain Japonica rice seasoned with warm awase-zu (rice vinegar, sugar, salt) and cooled in a wooden hangiri, paired with fresh sashimi-grade fish, hand-molded into delicate nigiri and rolled in crisp toasted nori seaweed.',
      appearance: 'Pristine, gleaming arrangement of salmon and tuna nigiri alongside vibrant avocado and cucumber maki rolls, served with pickled gari (ginger) and freshly grated wasabi.',
      texture: 'Fluffy, individual grains of seasoned rice that hold together when picked up with fingers, yet crumble effortlessly upon the tongue, paired with buttery, velvety raw fish.',
      flavor: 'Delicate balance of sweet-tart vinegar acidity, clean savory rice, rich umami fish, and pungent nasal warmth from wasabi.',
      restingTimeMinutes: 5
    },
    equipment: [
      { name: 'Hangiri (wooden sushi rice tub) or wide wooden/ceramic bowl', purpose: 'Absorbs excess surface moisture from rice while vinegar seasoning is sliced in.' },
      { name: 'Shamoji (flat rice paddle)', purpose: 'For cutting and folding vinegar into rice with slicing motions without mashing grains.' },
      { name: 'Uchiwa (hand fan)', purpose: 'Rapidly cools seasoned rice to room temperature, giving grains a brilliant glossy lacquer.' },
      { name: 'Makisu (bamboo rolling mat)', purpose: 'For rolling tight, even cylindrical nori maki rolls.' },
      { name: 'Yanagiba (Japanese slicing knife)', purpose: 'Single-bevel blade that slices sashimi-grade fish in one clean pulling motion without bruising flesh.' }
    ],
    beforeYouStart: [
      { task: 'Rinse 400g short-grain sushi rice gently in cold water 4–5 times until water runs clear; drain in colander for 20 minutes.', durationMinutes: 25 },
      { task: 'Whisk 60ml rice vinegar, 2 tbsp sugar, and 1.5 tsp fine sea salt until completely dissolved (awase-zu seasoning).', durationMinutes: 5 },
      { task: 'Prepare Tezu (vinegar water): mix 200ml cold water with 2 tbsp rice vinegar in a bowl for wetting hands during molding.', durationMinutes: 2 }
    ],
    ingredientPrepGuide: [
      { item: 'Shari Rice Cutting (Kiri-Kata)', technique: 'Pour warm cooked rice into hangiri. Drizzle awase-zu over paddle. Cut through the rice horizontally and vertically in slicing motions with the paddle edge at a 45-degree angle while fanning vigorously with an uchiwa fan. Never mash or stir in circles! Slicing separates individual grains, while fanning rapidly evaporates moisture and sets a mirror-like gloss.' },
      { item: 'Fish Slicing (Sogi-Zukuri)', technique: 'Slice sashimi-grade fish with the yanagiba knife tilted at a 45-degree angle. Pull the blade backward from heel to tip in one single, continuous, fluid pulling stroke without sawing back and forth.' }
    ],
    essentialIngredients: [
      { name: 'Short-grain Japanese sushi rice (Koshihikari)', prep: 'rinsed & drained', amount: '400g', metric: '400g', imperial: '14 oz', common: '2 cups dry' },
      { name: 'Cold water for cooking rice', prep: '1:1.1 ratio for firm shari', amount: '440ml', metric: '440ml', imperial: '15 fl oz', common: '1.85 cups' },
      { name: 'Rice vinegar (Komezu)', prep: 'unseasoned brewed rice vinegar', amount: '60ml', metric: '60ml', imperial: '2 fl oz', common: '1/4 cup' },
      { name: 'Granulated sugar', prep: 'dissolved in vinegar', amount: '2 tbsp', metric: '25g', imperial: '0.9 oz', common: '2 tbsp' },
      { name: 'Fine sea salt', prep: 'dissolved in vinegar', amount: '1.5 tsp', metric: '9g', imperial: '0.3 oz', common: '1.5 tsp' },
      { name: 'Sashimi-grade salmon & bluefin tuna fillets', prep: 'sliced at 45° angle into 15g neta slices', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '300g' },
      { name: 'Toasted Nori seaweed sheets', prep: 'crisp, halved for maki', amount: '4 sheets', metric: '4 sheets', imperial: '4 sheets', common: '4 sheets' },
      { name: 'Japanese cucumber (Kyuri)', prep: 'seeded & cut into thin matchsticks', amount: '1 cucumber', metric: '100g', imperial: '3.5 oz', common: '1 piece' },
      { name: 'Ripe Avocado', prep: 'peeled & cut into thin 5mm strips', amount: '1 avocado', metric: '150g', imperial: '5.3 oz', common: '1 piece' },
      { name: 'Real Wasabi paste (Hon-wasabi)', prep: 'grated fresh or quality paste', amount: '2 tbsp', metric: '30g', imperial: '1 oz', common: '2 tbsp' },
      { name: 'Pickled sushi ginger (Gari)', prep: 'thin sweet pink slices', amount: '50g', metric: '50g', imperial: '1.8 oz', common: '1/3 cup' },
      { name: 'Japanese Soy Sauce (Shoyu)', prep: 'for dipping', amount: '60ml', metric: '60ml', imperial: '2 fl oz', common: '1/4 cup' }
    ],
    optionalIngredients: [
      { name: 'Toasted white sesame seeds', prep: 'for inside-out California maki', amount: '1 tbsp', metric: '10g', imperial: '0.35 oz', common: '1 tbsp', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'COOK SUSHI RICE TO AL DENTE PERFECTION',
        whatYouNeed: ['400g rinsed sushi rice', '440ml cold water', 'Heavy rice pot with tight lid or rice cooker'],
        description: 'Combine rinsed, drained rice and 440ml water in a heavy pot. Let soak for 20 minutes before cooking. Bring to a boil over medium-high heat. As soon as steam puffs vigorously from the lid, reduce heat to the lowest possible setting. Cook undisturbed for 12 minutes. Turn off heat and let steam for 10 minutes without lifting the lid.',
        howToDoIt: 'Pre-soaking hydrates the grain cores. Steaming undisturbed after cooking allows moisture to equalize throughout every single grain without breaking the starches.',
        heat: 'Medium-High to boil, then Lowest Heat 12 mins, then Off 10 mins',
        heatDescription: 'Controlled absorption.',
        duration: 25,
        visualCues: 'Rice swells into plump, pearlescent grains; no pooling water; steam holes appear across surface.',
        hear: 'Soft whisper of steam under the lid.',
        smell: 'Fragrant, clean, sweet steamed rice aroma.',
        textureCheck: 'Tender with a firm, toothsome center core.',
        whatShouldThisLookLike: 'Pristine, gleaming white short-grain rice.',
        tip: 'Never lift the lid during the 10-minute resting stage!',
        commonMistake: 'Using long-grain or jasmine rice — sushi requires short-grain Japonica rice for proper stickiness and chew.',
        moveOnWhen: 'Rice is cooked and has rested 10 minutes off heat.',
        quickInstructions: 'Cook rice and water on lowest heat 12 mins after boiling; rest covered 10 mins off heat.'
      },
      {
        step: 2,
        title: 'SEASON WITH AWASE-ZU & RAPID FAN COOLING',
        whatYouNeed: ['Hot steamed rice', '60ml prepared awase-zu vinegar', 'Hangiri tub or wide bowl', 'Rice paddle (shamoji)', 'Uchiwa fan'],
        description: 'Immediately tip the piping-hot rice into the wooden hangiri tub. Drizzle the awase-zu vinegar evenly over the paddle all across the rice. With the paddle edge held at a 45-degree angle, make gentle cutting and slicing motions (like slicing bread) horizontally and vertically across the rice while fanning vigorously with the uchiwa fan in your other hand. Continue for 3–4 minutes until all vinegar is absorbed and rice cools to body temperature (36°C / 97°F). Cover with a damp cloth.',
        howToDoIt: 'Slicing separates the grains so every grain is coated in vinegar without crushing them. Rapid fanning drives off excess steam, sealing the outside into a brilliant, glossy lacquer.',
        heat: 'Off',
        heatDescription: 'Cooling station.',
        duration: 5,
        visualCues: 'Rice transforms from matte white to a brilliant, shiny, glistening lacquer; grains remain separate and unbroken.',
        hear: 'Rhythmic slicing through rice and whoosh of the fan.',
        smell: 'Bright, sweet, tangy rice vinegar aroma.',
        textureCheck: 'Separate, slightly sticky grains with distinct chew; body temperature.',
        whatShouldThisLookLike: 'Glistening, glossy, individual grains of seasoned sushi rice (shari).',
        tip: 'Never refrigerate sushi rice! Cold temperatures recrystallize the amylose starches into hard, dry, chalky grains.',
        commonMistake: 'Stirring the rice in circles like porridge — this crushes the grains into a pasty glob.',
        moveOnWhen: 'Rice is cooled to body temperature, glossy, and covered with damp cloth.',
        quickInstructions: 'Slice awase-zu into hot rice with paddle while fanning rapidly 3-4 mins until glossy and body-warm.'
      },
      {
        step: 3,
        title: 'FORM NIGIRI (HAND-MOLDED SUSHI)',
        whatYouNeed: ['Seasoned shari rice', 'Sashimi fish slices (neta)', 'Wasabi paste', 'Tezu (vinegar water bowl)'],
        description: 'Dip your fingers lightly in tezu (vinegar water) and clap hands to shed excess moisture. Pick up a 20g portion of warm shari rice in your right hand and gently shape into a compact oval cylinder using your palm and fingers. With your left hand, pick up a slice of salmon or tuna. Dab a tiny smear of wasabi across the center of the fish with your right index finger. Place the rice cylinder onto the fish. Gently press with your right thumb and forefinger while cradling with your left palm to weld fish to rice. Flip over and press top lightly to curve. Set on serving board.',
        howToDoIt: 'Use gentle pressure: nigiri should contain micro-pockets of air between the grains. It should hold its shape when picked up with fingers, but melt apart instantly on the tongue.',
        heat: 'Off',
        heatDescription: 'Assembly station.',
        duration: 8,
        visualCues: 'A sleek, elegant oblong mound of fish draped gracefully over a pillow of rice, holding its shape cleanly.',
        hear: 'None',
        smell: 'Fresh sea fish, tangy vinegar rice, and wasabi.',
        textureCheck: 'Tender fish resting on light, airy rice cylinder.',
        whatShouldThisLookLike: 'Restaurant-quality Edomae Nigiri.',
        tip: 'Keep hands moist with tezu, but not soaking wet; dry hands cause rice to stick like glue.',
        commonMistake: 'Squeezing rice too hard — dense, compacted rice balls feel heavy and leaden to eat.',
        moveOnWhen: 'All nigiri pieces are hand-molded.',
        quickInstructions: 'Shape 20g rice into oval with wet hands; dab wasabi on fish slice, press rice onto fish, shape gently.'
      },
      {
        step: 4,
        title: 'ROLL CYLINDRICAL NORI MAKI WITH MAKISU',
        whatYouNeed: ['Half nori sheet', 'Makisu bamboo mat', '100g shari rice', 'Cucumber matchsticks', 'Avocado strips', 'Tezu bowl', 'Sharp chef knife'],
        description: 'Place half a sheet of nori shiny-side down on the bamboo mat, aligned with the bottom edge. Moisten hands in tezu. Spread 100g of rice evenly across the nori, leaving an uncovered 1.5cm border at the top edge. Place cucumber and avocado strips horizontally across the center of the rice. Lift the bottom edge of the bamboo mat over the fillings, tucking the edge firmly to enclose the ingredients. Roll forward with firm, even pressure to form a tight, round cylinder. Wipe knife blade with damp cloth, and slice into 6 or 8 equal rounds in single pulling strokes.',
        howToDoIt: 'Even pressure across the bamboo mat produces a tight cylinder that slices cleanly without squishing the avocado or tearing the nori.',
        heat: 'Off',
        heatDescription: 'Rolling station.',
        duration: 8,
        visualCues: 'Tightly rolled cylindrical maki; clean circular cross-sections displaying colorful concentric centers.',
        hear: 'Crisp snap of the toasted nori as rolled.',
        smell: 'Toasted sea nori, fresh cucumber, and avocado.',
        textureCheck: 'Crisp outer nori, fluffy rice, crunchy cucumber, creamy avocado.',
        whatShouldThisLookLike: 'Neat circular maki sushi pieces with centered fillings.',
        tip: 'Wipe your knife blade on a wet cloth between every slice to ensure clean, razor-sharp cuts.',
        commonMistake: 'Sawing back and forth with a dull knife — this crushes the roll flat.',
        moveOnWhen: 'Maki rolls are sliced into neat rounds.',
        quickInstructions: 'Spread rice on nori leaving top border; lay cucumber & avocado, roll tight with bamboo mat; slice with wet knife.'
      }
    ],
    commonMistakes: [
      { mistake: 'Rice was hard and dry.', remedy: 'You refrigerated the sushi rice. Sushi rice must be prepared fresh and kept at room/body temperature covered with a damp towel.' },
      { mistake: 'Rice fell apart in soy sauce.', remedy: 'Dipped the rice side into the soy sauce. In authentic Japanese etiquette, always turn the nigiri upside down and dip ONLY the fish slice into the soy sauce.' }
    ],
    troubleshooting: [
      {
        problem: 'Rice is sticking all over fingers while molding',
        whatHappened: 'Hands are too dry or starch is building up.',
        whyItHappened: 'Forgot to dip in tezu.',
        whatToDoNow: 'Wash hands thoroughly, dip fingers in tezu (vinegar water), and clap hands to shed excess drops before touching rice.',
        howToPrevent: 'Re-dip fingertips in tezu before picking up each portion of rice.'
      }
    ],
    substitutions: [
      { original: 'Sashimi-grade raw fish', substitute: 'Cooked prawns, smoked salmon, or seasoned firm tofu / tamagoyaki', notes: 'Tamagoyaki (sweet egg omelet) and avocado make wonderful beginner sushi.' }
    ],
    safetyNotes: [
      'Raw fish MUST be certified "sashimi-grade" / flash-frozen at -20°C for 7 days to eliminate any parasite risk.',
      'Prepare and consume sushi within 2 hours at room temperature.'
    ],
    servingGuide: {
      restingTime: 'Serve immediately.',
      garnishing: 'Serve with neat rosettes of pickled ginger (gari) and freshly grated wasabi.',
      plating: 'Present on a black slate, wooden sushi geta board, or ceramic platter.',
      temperature: 'Rice at body temperature (36°C); fish chilled (10–12°C).',
      accompaniments: 'Japanese soy sauce (shoyu) for dipping fish, warm green tea (agari), and hot miso soup.'
    }
  },

  // 2. SASHIMI
  {
    id: 'sashimi',
    name: 'Artisan Sashimi Moriawase (Fresh Sliced Fish Platter)',
    cuisine: 'Japanese',
    region: 'Japan',
    servings: 4,
    prepTime: 25,
    cookTime: 0,
    difficulty: 'Hard',
    overview: {
      summary: 'The purest expression of Japanese gastronomy: pristine, premium sashimi-grade fish (salmon, tuna, yellowtail) sliced into precise artistic cuts (Hira-zukuri straight cuts and Sogi-zukuri angled bias cuts) using a razor-sharp single-bevel Yanagiba knife, presented on a bed of fresh ice with daikon tsuma, green shiso leaves, wasabi, and premium shoyu.',
      appearance: 'A visual masterpiece: translucent, jewel-like slices of ruby-red tuna, marbled orange salmon, and pearlescent sea bass arranged artfully over a nest of snow-white daikon radish shreds and green shiso leaves, resting on crushed ice.',
      texture: 'Buttery, melt-in-the-mouth, velvety tenderness; completely firm and succulent with zero mushiness or stringy resistance.',
      flavor: 'Pure, clean, ocean-fresh sweetness with delicate maritime umami, contrasted by sharp nasal wasabi and savory soy sauce.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Yanagiba (Japanese sashimi knife)', purpose: 'Single-bevel blade designed to slice through raw fish in one pulling stroke without compressing muscle cells.' },
      { name: 'Benriner Japanese mandoline or sharp chef knife', purpose: 'For shaving daikon radish into paper-thin threadlike angel-hair nests (tsuma).' },
      { name: 'Bowl with crushed ice', purpose: 'Keeps fish chilled at optimum 4–6°C during plating and service.' }
    ],
    beforeYouStart: [
      { task: 'Keep sashimi-grade fish loins in the coldest part of the refrigerator (0–2°C) wrapped in paper towels until the moment of slicing.', durationMinutes: 30 },
      { task: 'Shave 200g daikon radish into threadlike strands (tsuma); soak in ice water for 10 minutes to curl and crisp, then drain completely.', durationMinutes: 15 },
      { task: 'Grind fresh wasabi root on a sharkskin grater (oroshi) in circular motions into a fine paste.', durationMinutes: 3 }
    ],
    ingredientPrepGuide: [
      { item: 'The Single-Stroke Pull (Hiki-Kiri)', technique: 'Place the heel of the Yanagiba knife on the top edge of the fish loin. Pull the knife backward toward you in one continuous, sweeping stroke from heel to the pointed tip, using the entire length of the blade. NEVER saw back and forth! A sawing motion crushes the delicate cellular structure and tears the fish surface, releasing water and turning it mushy.' },
      { item: 'Cut Thickness Rules', technique: 'Hira-zukuri (straight rectangular slices): cut salmon and tuna perpendicular to grain into 1cm (0.4 inch) thick slabs. Usu-zukuri (paper-thin slices): cut firm white fish (sea bass/flounder) on an extreme 30-degree bias into translucent 2mm sheets.' }
    ],
    essentialIngredients: [
      { name: 'Sashimi-grade Atlantic Salmon loin (Sake)', prep: 'skinless, pin bones removed, cold (0°C)', amount: '200g', metric: '200g', imperial: '7 oz', common: '200g loin' },
      { name: 'Sashimi-grade Bluefin/Yellowfin Tuna loin (Maguro)', prep: 'deep red akami cut, skinless', amount: '200g', metric: '200g', imperial: '7 oz', common: '200g loin' },
      { name: 'Sashimi-grade Yellowtail / Kingfish (Hamachi)', prep: 'trimmed, cold', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '150g' },
      { name: 'Daikon radish (for Tsuma angel-hair nests)', prep: 'shaved paper-thin into ice water', amount: '200g', metric: '200g', imperial: '7 oz', common: '1 cup shredded' },
      { name: 'Fresh Shiso leaves (Perilla)', prep: 'washed & dried', amount: '8 leaves', metric: '10g', imperial: '0.35 oz', common: '8 leaves' },
      { name: 'Freshly grated Wasabi paste', prep: 'grated on fine grater', amount: '2 tbsp', metric: '30g', imperial: '1 oz', common: '2 tbsp' },
      { name: 'Pickled ginger (Gari)', prep: 'sweet sliced ginger', amount: '40g', metric: '40g', imperial: '1.4 oz', common: '1/4 cup' },
      { name: 'Authentic Japanese Soy Sauce (Koikuchi Shoyu)', prep: 'for dipping', amount: '60ml', metric: '60ml', imperial: '2 fl oz', common: '1/4 cup' }
    ],
    optionalIngredients: [
      { name: 'Edible micro-flowers / Hanaho shiso blossoms', prep: 'for decorative Michelin garnish', amount: 'pinch', metric: '2g', imperial: '0.07 oz', common: 'pinch', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'PREPARE CRISP DAIKON TSUMA NEST',
        whatYouNeed: ['200g daikon radish', 'Mandoline or chef knife', 'Bowl of ice water', 'Colander'],
        description: 'Peel the daikon. Using a Japanese mandoline or sharp knife, slice the daikon into hair-thin julienne threads (tsuma). Submerge immediately in a bowl of ice-cold water for 10 minutes. The threads will curl, turn translucent, and become crisp. Drain thoroughly in a colander and gently pat dry with paper towels.',
        howToDoIt: 'Ice water tightens the daikon plant cells into crisp, curly threads that support the fish slices without leaking water onto the fish.',
        heat: 'Off',
        heatDescription: 'Prep station.',
        duration: 12,
        visualCues: 'Pristine, snow-white, curly, glistening angel-hair radish threads.',
        hear: 'None',
        smell: 'Clean, peppery radish freshness.',
        textureCheck: 'Crisp, firm, and thoroughly dried.',
        whatShouldThisLookLike: 'Fluffy white nest of shredded daikon.',
        tip: 'Ensure the daikon is thoroughly dried before plating; water will wash away the delicate fish oils.',
        commonMistake: 'Plating wet, soggy daikon — soggy radish ruins the pristine fish slices.',
        moveOnWhen: 'Daikon tsuma is crisp, drained, and dried.',
        quickInstructions: 'Shred daikon into thin hair threads, soak in ice water 10 mins until crisp; drain and dry thoroughly.'
      },
      {
        step: 2,
        title: 'THE HIRA-ZUKURI SLICE (SALMON & TUNA SLABS)',
        whatYouNeed: ['Cold salmon & tuna loins', 'Razor-sharp Yanagiba or long slicing knife', 'Clean cutting board'],
        description: 'Place the cold salmon loin on your cutting board with the grain running horizontally. Set the heel of your knife on the top edge at a 90-degree perpendicular angle to the board. In one smooth, continuous, pulling motion, draw the knife backward toward your chest, using the entire length of the blade to slice through the fish in a single stroke into a clean 1cm (0.4 inch) thick rectangular slab. Repeat for 8 slices of salmon and 8 slices of tuna.',
        howToDoIt: 'A single pulling stroke shears through muscle fibers with zero lateral friction, preserving the natural moisture and lipid sheen of the fish without tearing.',
        heat: 'Off',
        heatDescription: 'Slicing station.',
        duration: 6,
        visualCues: 'Mirror-smooth, lustrous, razor-sharp cut faces on each slice; zero ragged edges or crushed meat.',
        hear: 'Soft whisper of the blade through cold fish.',
        smell: 'Clean, ocean-fresh seafood aroma.',
        textureCheck: 'Buttery, firm, smooth cut faces.',
        whatShouldThisLookLike: 'Identical, rectangular, jewel-like slices of salmon and tuna.',
        tip: 'Wipe the knife blade with a damp cloth between every single cut to prevent fish fat buildup.',
        commonMistake: 'Sawing back and forth — sawing shreds the delicate muscle fibers and turns the fish surface dull.',
        moveOnWhen: 'All salmon and tuna pieces are sliced with mirror-smooth faces.',
        quickInstructions: 'Slice fish in single pulling strokes from heel to tip into 1cm rectangular slabs (no sawing!).'
      },
      {
        step: 3,
        title: 'THE SOGI-ZUKURI SLICE (ANGLED BIAS CUTS)',
        whatYouNeed: ['Yellowtail / Hamachi loin', 'Yanagiba knife'],
        description: 'Position the yellowtail loin. Tilt the knife blade at a 45-degree angle to the cutting board. Pull the blade from heel to tip in a single smooth diagonal stroke to create wide, thin, diamond-shaped slices approx 5mm thick. Repeat for 6 slices.',
        howToDoIt: 'Angled bias cutting creates wider surface area on firmer fish, making it feel silky and tender across the palate.',
        heat: 'Off',
        heatDescription: 'Slicing station.',
        duration: 4,
        visualCues: 'Translucent, wide diamond-shaped yellowtail slices with visible pearlescent grain.',
        hear: 'None',
        smell: 'Ocean sweetness.',
        textureCheck: 'Silky, delicate, thin slices.',
        whatShouldThisLookLike: 'Diamond-shaped translucent yellowtail slices.',
        tip: 'Keep the fish very cold (0–2°C); warm fish is soft and impossible to slice cleanly.',
        commonMistake: 'Slicing with a dull knife — dull knives crush the fish cells and expel liquid.',
        moveOnWhen: 'Yellowtail is sliced on the bias.',
        quickInstructions: 'Slice yellowtail on 45-degree angle into 5mm diamond slices in single pulling strokes.'
      },
      {
        step: 4,
        title: 'ARTISTIC PLATING ON BED OF ICE',
        whatYouNeed: ['Sliced fish', 'Daikon tsuma nests', 'Fresh shiso leaves', 'Crushed ice in shallow bowl', 'Wasabi paste', 'Pickled ginger (gari)'],
        description: 'Fill a wide, shallow ceramic platter with crushed ice. Arrange two fluffy mounds of daikon tsuma on the ice. Lean fresh green shiso leaves against the daikon mounds. Fan the salmon slices in an overlapping cascade of 3–4 slices over one leaf. Fan the ruby-red tuna slices over the second leaf. Arrange the yellowtail diamond slices in a delicate rose swirl in the center. Form a small teardrop quenelle of wasabi and place alongside pickled ginger. Serve immediately.',
        howToDoIt: 'Resting the arrangement over ice maintains an optimal temperature (4°C), preserving the firm texture and preventing the delicate fish fats from melting into grease.',
        heat: 'Off (Ice Cold)',
        heatDescription: 'Plating.',
        duration: 5,
        visualCues: 'Breathtaking visual arrangement: vibrant orange, deep ruby-red, and pearlescent white fish contrasting with emerald shiso and snow-white radish.',
        hear: 'None',
        smell: 'Fresh herbal shiso, sharp wasabi, and clean ocean seafood.',
        textureCheck: 'Ice-cold, firm, velvety fish slices.',
        whatShouldThisLookLike: 'Masterpiece Japanese Sashimi Moriawase platter.',
        tip: 'Eat in progression from lightest white fish (yellowtail) to richer orange salmon to deepest rich red tuna.',
        commonMistake: 'Dissolving wasabi into the soy sauce dish like soup — authentic etiquette is to place a tiny dab of wasabi directly onto the fish, then dip into soy sauce.',
        moveOnWhen: 'Platter is artfully arranged and served ice-cold.',
        quickInstructions: 'Arrange daikon nests and shiso over crushed ice; fan salmon, tuna, yellowtail; add wasabi and gari.'
      }
    ],
    commonMistakes: [
      { mistake: 'Fish was mushy and leaked water.', remedy: 'The fish was not sashimi-grade, was sliced warm, or the knife was dull. Keep fish at 0°C and use a razor-sharp blade.' }
    ],
    troubleshooting: [
      {
        problem: 'Fish surface looks dull instead of shiny',
        whatHappened: 'Knife was pushed down rather than pulled.',
        whyItHappened: 'Compressive force crushed the cells.',
        whatToDoNow: 'Serve on ice; the flavor will still be delicious.',
        howToPrevent: 'Always use a single backward pulling stroke with zero downward pressure.'
      }
    ],
    substitutions: [
      { original: 'Shiso leaves', substitute: 'Thin cucumber ribbons or shiso microgreens', notes: 'Provides fresh herbal aroma.' }
    ],
    safetyNotes: [
      'Use ONLY certified sashimi-grade raw fish that has been commercially flash-frozen to eliminate parasites.'
    ],
    servingGuide: {
      restingTime: 'Serve immediately on ice.',
      garnishing: 'Shiso leaves, daikon tsuma, and wasabi quenelle.',
      plating: 'Serve on a wide stone or ceramic platter over a bed of crushed ice.',
      temperature: 'Ice-cold (4°C).',
      accompaniments: 'Authentic Japanese dark soy sauce (shoyu), pickled gari ginger, and chilled Junmai Daiginjo sake.'
    }
  },

  // 3. RAMEN (SHOYU RAMEN)
  {
    id: 'ramen',
    name: 'Traditional Tokyo Shoyu Ramen',
    cuisine: 'Japanese',
    region: 'Japan (Tokyo / Kanto)',
    servings: 4,
    prepTime: 40,
    cookTime: 120,
    difficulty: 'Hard',
    overview: {
      summary: 'The benchmark of Japanese noodle craft: springy, chewy, alkalized wheat noodles (kansui noodles) submerged in a steaming, crystal-clear golden-amber chicken-dashi broth seasoned with a deeply savory shoyu tare, topped with rolled melt-in-the-mouth braised pork belly (chashu), a soft-boiled jammy marinated ramen egg (ajitsuke tamago), seasoned bamboo shoots (menma), nori, and scallions.',
      appearance: 'A steaming, deep ceramic ramen bowl filled with glistening golden-amber broth, neatly folded yellow noodles, crowned with two circular charred chashu rounds, a halved jammy orange ramen egg, menma, and a sheet of nori standing upright.',
      texture: 'Chewy, springy, toothsome noodles (kata-me chew) swimming in hot, savory broth; pork belly melts instantly without chewing; egg yolk is jammy custard.',
      flavor: 'Deep, multi-layered savory umami from kombu, katsuobushi, roasted chicken bones, and aged soy sauce, balanced by aromatic scallion oil.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Stockpot (6–8 qt)', purpose: 'For simmering clear chicken dashi broth without boiling violently.' },
      { name: 'Noodle strainer basket (Tebo)', purpose: 'Allows vigorous shaking to expel 100% of boiling water from noodles before dropping into broth.' },
      { name: 'Deep ceramic Ramen bowls (Donburi)', purpose: 'Retains scalding broth temperature throughout eating.' }
    ],
    beforeYouStart: [
      { task: 'Simmer 1kg chicken carcasses with ginger, scallions, and water on gentle heat for 2 hours; strain clear stock.', durationMinutes: 120 },
      { task: 'Roll 600g pork belly into a tight cylinder tied with butcher twine; braise in soy sauce, mirin, sake, and sugar for 90 mins (chashu).', durationMinutes: 90 },
      { task: 'Boil 4 eggs for exactly 6 minutes and 30 seconds; plunge into ice water, peel, and marinate in chashu braising liquid for 4 hours (ajitsuke tamago).', durationMinutes: 240 }
    ],
    ingredientPrepGuide: [
      { item: 'Clear Broth (Chintan) Rule', technique: 'The chicken broth MUST simmer gently at 90°C with lazy bubbles. NEVER boil vigorously! Violent boiling emulsifies fat and calcium into a cloudy broth (paitan). Shoyu ramen requires a crystal-clear, transparent amber broth (chintan).' },
      { item: 'The Noodle Water Shake (Yukiri)', technique: 'Boil fresh kansui ramen noodles for exactly 90 seconds. Lift in the tebo strainer and vigorously snap downward 4–5 times to expel all cooking water. Excess noodle water clings to noodles and dilutes the concentrated soup broth.' }
    ],
    essentialIngredients: [
      { name: 'Fresh alkalized ramen noodles (Kansui noodles)', prep: 'medium-thick wavy noodles', amount: '4 portions (500g)', metric: '500g', imperial: '1.1 lbs', common: '4 packs' },
      { name: 'Chicken bones / carcasses', prep: 'blanched & washed for clear stock', amount: '1kg', metric: '1000g', imperial: '2.2 lbs', common: '2 carcasses' },
      { name: 'Water for stock', prep: 'clean cold water', amount: '2.5 liters', metric: '2500ml', imperial: '85 fl oz', common: '10 cups' },
      { name: 'Kombu (dried kelp)', prep: 'steeped in cold stock', amount: '15g', metric: '15g', imperial: '0.5 oz', common: '1 sheet (10x10cm)' },
      { name: 'Katsuobushi (bonito flakes)', prep: 'for dashi depth', amount: '20g', metric: '20g', imperial: '0.7 oz', common: '1 cup packed' },
      { name: 'Shoyu Tare (concentrated soy seasoning)', prep: 'reduced soy, mirin, sake, kombu', amount: '120ml', metric: '120ml', imperial: '4 fl oz', common: '1/2 cup' },
      { name: 'Braised Pork Belly Chashu', prep: 'sliced 6mm thick & torched', amount: '8 slices', metric: '200g', imperial: '7 oz', common: '8 slices' },
      { name: 'Ajitsuke Tamago (ramen eggs)', prep: 'soft-boiled & marinated, halved', amount: '4 eggs', metric: '4 eggs', imperial: '4 eggs', common: '4 eggs' },
      { name: 'Menma (seasoned fermented bamboo shoots)', prep: 'drained', amount: '80g', metric: '80g', imperial: '2.8 oz', common: '1/2 cup' },
      { name: 'Aroma oil (scallion chicken fat / chiyu)', prep: 'rendered chicken fat with green scallions', amount: '4 tbsp', metric: '60ml', imperial: '2 fl oz', common: '4 tbsp' },
      { name: 'Scallions (negi)', prep: 'thinly sliced into fine rings', amount: '4 stalks', metric: '60g', imperial: '2.1 oz', common: '1/2 cup' },
      { name: 'Nori seaweed squares', prep: 'toasted crisp', amount: '4 sheets (small)', metric: '4 sheets', imperial: '4 sheets', common: '4 sheets' }
    ],
    optionalIngredients: [
      { name: 'Narutomaki (fish cake with pink spiral)', prep: 'thinly sliced', amount: '8 slices', metric: '30g', imperial: '1 oz', common: '8 slices', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'SIMMER CLEAR CHICKEN-DASHI BROTH (CHINTAN)',
        whatYouNeed: ['1kg cleaned chicken bones', '2.5 liters water', '15g kombu', '20g katsuobushi', 'Ginger slices', 'Scallion tops', 'Stockpot'],
        description: 'Place cleaned chicken bones and water in stockpot. Bring to a simmer over medium heat. Skim off all grey scum for 10 minutes until surface is clear. Add ginger slices, scallion greens, and kombu. Reduce heat to low-medium (90°C) so water produces gentle occasional bubbles. Simmer uncovered for 2 hours. Remove kombu after 45 minutes. At the 2-hour mark, turn off heat, add katsuobushi, steep for 10 minutes, and strain through a fine sieve into a clean pot. Keep at a bare simmer.',
        howToDoIt: 'Gentle simmering below boiling point extracts gelatin and umami from bones and bonito without emulsifying the fat, yielding a crystal-clear, golden broth with deep savory depth.',
        heat: 'Low-Medium Heat (90°C / 195°F)',
        heatDescription: 'Gentle occasional bubble; never a violent boil.',
        duration: 130,
        visualCues: 'Crystal-clear, glowing golden-amber broth with tiny yellow globules of chicken fat floating on top.',
        hear: 'Soft, gentle murmur.',
        smell: 'Intense umami aroma of roasted poultry, oceanic kombu, and smoky bonito.',
        textureCheck: 'Clear, light-bodied broth rich with dissolved collagen.',
        whatShouldThisLookLike: 'Crystal-clear golden-amber chicken dashi broth.',
        tip: 'Never let the broth boil vigorously, or it will turn cloudy.',
        commonMistake: 'Leaving kombu in boiling stock for 2 hours — boiled kombu releases bitter slimy alginates.',
        moveOnWhen: 'Broth is strained, clear, and steaming hot.',
        quickInstructions: 'Simmer chicken bones with water 2 hours gently; steep kombu and katsuobushi; strain clear broth.'
      },
      {
        step: 2,
        title: 'WARM BOWLS & COMBINE TARE + AROMA OIL',
        whatYouNeed: ['4 deep ramen bowls (pre-warmed with hot water)', '120ml Shoyu Tare', '4 tbsp scallion aroma oil (chiyu)', 'Steaming hot broth'],
        description: 'Warm the empty ramen bowls by filling with hot tap water for 2 minutes; pour out and wipe dry. Into the base of each dry, hot bowl, add 30ml Shoyu Tare and 1 tablespoon of fragrant scallion aroma oil (chiyu). Ladle 350ml of scalding-hot chicken dashi broth into each bowl. Whisk gently with chopsticks to combine.',
        howToDoIt: 'Pre-warming bowls prevents the scalding soup from dropping temperature. The aroma oil floats on top of the broth, acting as a thermal blanket that seals in heat and hits the nose with every slurp.',
        heat: 'Off',
        heatDescription: 'Bowl prep.',
        duration: 3,
        visualCues: 'A shimmering golden-amber soup with droplets of aromatic chicken fat pooling across the surface.',
        hear: 'None',
        smell: 'Rich roasted soy sauce, sweet mirin, and scallion chicken oil.',
        textureCheck: 'Piping-hot, savory broth.',
        whatShouldThisLookLike: 'Steaming amber broth with glistening fat beads in deep bowls.',
        tip: 'Assemble bowls right before dropping noodles into boiling water.',
        commonMistake: 'Pouring broth into cold bowls — the soup temperature will drop 15°C within 1 minute.',
        moveOnWhen: 'All 4 bowls are filled with hot broth and aroma oil.',
        quickInstructions: 'Add 30ml tare and 1 tbsp aroma oil to hot bowls; ladle 350ml scalding broth, whisk lightly.'
      },
      {
        step: 3,
        title: 'BOIL KANSUI NOODLES & THE YUKIRI SHAKE',
        whatYouNeed: ['4 portions fresh ramen noodles', 'Large pot of vigorously boiling unsalted water', 'Tebo strainer basket'],
        description: 'Bring a large pot of water to a violent, rolling boil. Drop fresh ramen noodles into the water, stirring vigorously with chopsticks to separate strands. Boil for exactly 90 seconds (for firm kata-me chew). Lift the noodles out using the tebo strainer basket. Vigorously snap and flick the strainer downward 4 to 5 times (the yukiri shake) to expel every single drop of water.',
        howToDoIt: 'Alkalized kansui gives noodles their springy chew. Expelling all cooking water via yukiri ensures that excess starchy water does not cling to the noodles and dilute the concentrated tare soup.',
        heat: 'High Rolling Boil',
        heatDescription: 'Violent roaring boil.',
        duration: 2,
        visualCues: 'Noodles turn translucent yellow and springy; tebo basket expels water cleanly.',
        hear: 'Roaring boil followed by rhythmic snaps of the strainer.',
        smell: 'Toasty, alkalized wheat aroma.',
        textureCheck: 'Springy, toothsome, firm al dente chew.',
        whatShouldThisLookLike: 'Tightly drained, steaming yellow noodles.',
        tip: 'Have bowls ready before boiling noodles — noodles must enter broth within 5 seconds of draining.',
        commonMistake: 'Gentle draining without shaking — wet noodles dilute the carefully calibrated broth.',
        moveOnWhen: 'Noodles are boiled 90 seconds and drained bone-dry.',
        quickInstructions: 'Boil noodles 90s in rolling water; snap strainer downward 4-5 times (yukiri) to expel all water.'
      },
      {
        step: 4,
        title: 'FOLD NOODLES & ASSEMBLE TOPPINGS',
        whatYouNeed: ['Bowls with broth', 'Drained noodles', '8 slices torched chashu', '4 halved ramen eggs', 'Menma', 'Nori sheets', 'Sliced scallions'],
        description: 'Gently lower the drained noodles into the soup bowl. Using chopsticks, lift and fold the noodles neatly into a uniform bed across the center of the bowl. Crown with 2 slices of torched pork chashu, 2 halves of marinated ramen egg with jammy yolk facing up, a bundle of menma bamboo shoots, and a mound of fresh sliced scallions. Tuck a square of nori upright against the back rim. Serve immediately.',
        howToDoIt: 'Folding the noodles creates an elegant presentation that allows the diner to pull individual strands smoothly with chopsticks without tangling.',
        heat: 'Off',
        heatDescription: 'Plating.',
        duration: 2,
        visualCues: 'A masterpiece: glistening amber soup with folded noodles, torched caramel pork, glowing orange egg yolks, and crisp green scallions.',
        hear: 'Soft steam hissing.',
        smell: 'The intoxicating, legendary Tokyo ramen shop aroma.',
        textureCheck: 'Piping hot, springy noodles, melt-in-mouth pork, jammy egg.',
        whatShouldThisLookLike: 'Authentic Tokyo Shoyu Ramen.',
        tip: 'Slurp vigorously! Slurping draws in air, cooling the scalding noodles while aerating the broth across the palate.',
        commonMistake: 'Letting ramen sit for 5 minutes — kansui noodles absorb broth rapidly and become soggy.',
        moveOnWhen: 'Bowls are assembled and served steaming hot.',
        quickInstructions: 'Fold noodles neatly in broth; arrange chashu, halved jammy egg, menma, scallions, nori. Serve instantly.'
      }
    ],
    commonMistakes: [
      { mistake: 'Broth was cloudy and greasy.', remedy: 'The chicken stock was boiled vigorously. Maintain a gentle simmer below 90°C for clear broth.' },
      { mistake: 'Noodles were soggy and broth tasted watery.', remedy: 'You didn\'t expel noodle water with the yukiri shake or over-boiled noodles. Boil for only 90 seconds and shake vigorously.' }
    ],
    troubleshooting: [
      {
        problem: 'Broth tastes slightly too salty or too mild',
        whatHappened: 'Tare to broth ratio was slightly off.',
        whyItHappened: 'Ladle volume variance.',
        whatToDoNow: 'Add 2 tablespoons hot dashi broth to dilute saltiness, or add 1 teaspoon tare to intensify.',
        howToPrevent: 'Use exact 30ml tare to 350ml broth per bowl.'
      }
    ],
    substitutions: [
      { original: 'Chicken carcasses', substitute: 'Whole chicken wings + pork neck bones', notes: 'Wings provide rich gelatin.' }
    ],
    safetyNotes: [
      'Ramen bowls are scalding hot; carry with two hands holding the bottom rim.'
    ],
    servingGuide: {
      restingTime: 'Zero — eat within 10 minutes.',
      garnishing: 'Torched chashu, jammy ajitama egg, menma, negi scallions, nori.',
      plating: 'Serve in deep, oversized Japanese ceramic donburi bowls with chopsticks and a porcelain soup spoon (renge).',
      temperature: 'Scalding hot (85°C+).',
      accompaniments: 'Pan-fried pork gyoza, pickled ginger, and chilled Asahi beer.'
    }
  },

  // 4. TONKOTSU RAMEN
  {
    id: 'tonkatsu-ramen',
    name: 'Hakata Tonkotsu Ramen (Rich Pork Bone Broth)',
    cuisine: 'Japanese',
    region: 'Japan (Fukuoka / Kyushu)',
    servings: 4,
    prepTime: 40,
    cookTime: 360,
    difficulty: 'Expert',
    overview: {
      summary: 'The holy grail of Kyushu ramen: pork femur (genkotsu) and neck bones boiled vigorously for 8–10 hours until bone marrow, collagen, and fat completely emulsify into a milky-white, opaque, rich, creamy broth. Served with ultra-thin, firm Hakata noodles, chashu pork, black garlic oil (mayu), wood-ear mushrooms (kikurage), and scallions.',
      appearance: 'Creamy, opaque ivory-white broth bubbling with micro-emulsified fat droplets, contrasting with thin yellow noodles, black kikurage strips, pink chashu, and a dark swirl of black garlic oil.',
      texture: 'Rich, velvety, lip-coating creamy broth packed with dissolved collagen; noodles are ultra-thin with a crisp, toothsome snap (katame/barikata).',
      flavor: 'Deeply savory, intense, porky umami richness balanced by garlic, ginger, and aromatic toasted sesame.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Heavy tall stockpot (8–10 qt)', purpose: 'Holds rolling, violent boil for hours without boiling dry.' },
      { name: 'Fine mesh sieve', purpose: 'For straining bone fragments and marrow solids to achieve velvety texture.' },
      { name: 'Immersion blender (optional)', purpose: 'For rapidly re-emulsifying fat and broth into an opaque ivory cream before serving.' }
    ],
    beforeYouStart: [
      { task: 'Soak 1.5kg pork femur bones (genkotsu) and 500g pork neck bones in cold water for 2 hours to draw out blood.', durationMinutes: 120 },
      { task: 'Blanch bones in boiling water for 10 minutes; drain and scrub under running water to remove all black coagulated marrow.', durationMinutes: 20 },
      { task: 'Rehydrate 20g dried wood-ear mushrooms (kikurage) in warm water for 20 minutes, then slice into thin matchsticks.', durationMinutes: 20 }
    ],
    ingredientPrepGuide: [
      { item: 'The Violent Rolling Boil (Emulsification)', technique: 'Unlike clear chintan broth, Tonkotsu MUST be boiled violently at a rolling boil for 6–8 hours. The physical agitation violently breaks melted pork fat and gelatin into microscopic droplets suspended in water, forming a permanent creamy white emulsion (just like mayonnaise).' },
      { item: 'Black Garlic Oil (Mayu)', technique: 'Slowly fry grated garlic in sesame oil and lard across three stages until dark charcoal-brown. Blend into a jet-black aromatic oil; a single teaspoon drizzled over white tonkotsu cuts through the rich pork fat with complex roasted smokiness.' }
    ],
    essentialIngredients: [
      { name: 'Pork femur / marrow bones (Genkotsu)', prep: 'cracked in half to expose marrow', amount: '1.5kg', metric: '1500g', imperial: '3.3 lbs', common: '4-5 bones' },
      { name: 'Pork neck bones / trotters', prep: 'blanched & cleaned for high gelatin', amount: '500g', metric: '500g', imperial: '1.1 lbs', common: '500g' },
      { name: 'Water for boiling', prep: 'replenished continuously', amount: '4 liters', metric: '4000ml', imperial: '135 fl oz', common: '16 cups' },
      { name: 'Yellow onion', prep: 'halved, skins left on', amount: '1 large', metric: '200g', imperial: '7 oz', common: '1 onion' },
      { name: 'Fresh ginger', prep: 'sliced thick', amount: '50g', metric: '50g', imperial: '1.8 oz', common: '2 inches' },
      { name: 'Garlic head', prep: 'halved crosswise', amount: '1 head', metric: '50g', imperial: '1.8 oz', common: '1 head' },
      { name: 'Thin straight Hakata-style ramen noodles', prep: 'firm, thin wheat noodles', amount: '4 portions (450g)', metric: '450g', imperial: '1 lb', common: '4 packs' },
      { name: 'Shio / Shoyu Tare (ramen seasoning base)', prep: 'concentrated sea salt & soy', amount: '120ml', metric: '120ml', imperial: '4 fl oz', common: '1/2 cup' },
      { name: 'Chashu pork belly slices', prep: 'tender braised slices', amount: '8 slices', metric: '200g', imperial: '7 oz', common: '8 slices' },
      { name: 'Kikurage (wood-ear mushrooms)', prep: 'rehydrated & thinly sliced', amount: '40g', metric: '40g', imperial: '1.4 oz', common: '1/2 cup' },
      { name: 'Black garlic oil (Mayu)', prep: 'for smoky drizzle', amount: '4 tsp', metric: '20ml', imperial: '0.7 fl oz', common: '4 tsp' },
      { name: 'Scallions (negi)', prep: 'finely sliced rings', amount: '4 stalks', metric: '60g', imperial: '2.1 oz', common: '1/2 cup' },
      { name: 'Toasted white sesame seeds', prep: 'lightly crushed in mortar', amount: '2 tbsp', metric: '20g', imperial: '0.7 oz', common: '2 tbsp' }
    ],
    optionalIngredients: [
      { name: 'Beni shoga (red pickled shredded ginger)', prep: 'for sharp acidic bite', amount: '2 tbsp', metric: '30g', imperial: '1 oz', common: '2 tbsp', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'BLANCH & SCRUB PORK BONES CLEAN',
        whatYouNeed: ['2kg pork bones', 'Stockpot filled with water', 'Tongs', 'Scrub brush'],
        description: 'Place all pork bones in a large pot and cover with cold water. Bring to a rapid rolling boil over high heat. Boil vigorously for 10 minutes. A thick layer of dark brown/black scum and coagulated blood will rise to the surface. Drain the entire pot into the sink. Take each bone under cold running water and thoroughly scrub away any dark clotted blood inside the crevices with a brush. Rinse the pot clean.',
        howToDoIt: 'Blanching and scrubbing away dark marrow clots is the absolute non-negotiable secret to a pure, milky-white, odor-free broth; skipping this will turn the broth dark grey, muddy, and barnyard-smelling.',
        heat: 'High Boil',
        heatDescription: 'Rolling boil for blanching.',
        duration: 20,
        visualCues: 'Dark scum boils off; scrubbed bones turn clean, pale, and ivory-white with pink meat.',
        hear: 'Vigorous boiling.',
        smell: 'Pungent animal scum boiling off.',
        textureCheck: 'Clean, scrubbed hard bones.',
        whatShouldThisLookLike: 'Pristine, clean scrubbed bones in a sparkling pot.',
        tip: 'Inspect the cavity of the marrow bones and push out any dark clotted blood with a chopstick.',
        commonMistake: 'Skipping the scrub — dirty bones produce an unpalatable muddy grey broth.',
        moveOnWhen: 'All bones are scrubbed clean and pot is washed.',
        quickInstructions: 'Boil bones 10 mins, discard dirty water; scrub all bones thoroughly clean under cold running water.'
      },
      {
        step: 2,
        title: 'THE 6-HOUR ROLLING BOIL (MILKY EMULSIFICATION)',
        whatYouNeed: ['Scrubbed clean bones', '4 liters water', 'Halved onion', 'Ginger', 'Garlic head', 'Heavy stockpot with lid'],
        description: 'Return cleaned bones to the pot with 4 liters of fresh water, onion, ginger, and garlic. Bring to a rolling boil over high heat. Keep the pot at a steady, vigorous rolling boil uncovered or partially lidded for 6 to 8 hours. As water evaporates, replenish with boiling water to keep bones submerged. Stir every 30 minutes, using a wooden spoon to scrape the bottom and smash the softening marrow out of the bones.',
        howToDoIt: 'The continuous violent tumbling of the rolling boil physically shears the melted fat and dissolving collagen into microscopic droplets, permanently suspending them in water to create an opaque, milky-white emulsion.',
        heat: 'High to Medium-High Heat',
        heatDescription: 'Continuous, violent, rolling, tumbling boil.',
        duration: 360,
        visualCues: 'Broth transforms from clear water into an opaque, creamy, milky-white liquid resembling melted vanilla ice cream; bones crumble.',
        hear: 'Continuous, energetic boiling and tumbling bones.',
        smell: 'Deep, rich, savory pork aroma filling the kitchen.',
        textureCheck: 'Thick, creamy, lip-coating liquid packed with gelatin.',
        whatShouldThisLookLike: 'Milky-white, opaque, rich boiling Tonkotsu broth.',
        tip: 'Keep the boil active! If you lower the heat to a gentle simmer, the emulsion breaks and fat floats to the top as a clear yellow oil layer.',
        commonMistake: 'Boiling on low heat — low heat makes clear pork broth, not milky tonkotsu.',
        moveOnWhen: 'Broth is milky-white, rich, and reduced to approx 1.5 liters.',
        quickInstructions: 'Boil bones vigorously for 6-8 hours with aromatics, replenishing water as needed, until opaque and milky-white.'
      },
      {
        step: 3,
        title: 'STRAIN & BLEND TO VELVET CREME',
        whatYouNeed: ['Boiled tonkotsu broth', 'Fine-mesh sieve', 'Clean pot', 'Immersion blender (optional)'],
        description: 'Pour the hot broth through a fine-mesh sieve into a clean pot, pressing firmly on the soft bone fragments and aromatics to extract every bit of marrow and collagen. Discard solids. If the fat has separated slightly, insert an immersion blender into the hot broth and blend on high for 60 seconds. The broth will instantly froth into a velvety, creamy, opaque white foam.',
        howToDoIt: 'Straining removes sharp bone splinters. High-speed mechanical blending ensures 100% micro-emulsification, creating that luxurious, silky, lip-sticking mouthfeel.',
        heat: 'Off, then Low Simmer',
        heatDescription: 'Straining and holding warm.',
        duration: 8,
        visualCues: 'Silky, creamy, pure ivory broth with a frothy surface; zero gritty particles.',
        hear: 'Whir of immersion blender.',
        smell: 'Rich, comforting, savory tonkotsu fragrance.',
        textureCheck: 'Velvety, rich, and coats the back of a spoon with a creamy film.',
        whatShouldThisLookLike: 'Liquid ivory velvet broth.',
        tip: 'Dip your fingers into a drop of cooled broth; your fingers should stick together from the dense collagen.',
        commonMistake: 'Skipping fine straining — tiny bone shards can ruin the eating experience.',
        moveOnWhen: 'Broth is strained smooth, velvety, and kept piping hot.',
        quickInstructions: 'Strain broth through fine sieve; blend 60s with immersion blender to micro-emulsify into creamy white froth.'
      },
      {
        step: 4,
        title: 'FLASH-BOIL THIN HAKATA NOODLES & ASSEMBLE',
        whatYouNeed: ['4 pre-warmed deep ramen bowls', '120ml Tare', 'Hot tonkotsu broth', 'Thin Hakata noodles (boiled 45–60s only!)', 'Chashu', 'Kikurage', 'Mayu (black garlic oil)', 'Scallions', 'Crushed sesame'],
        description: 'Add 30ml tare to each pre-warmed hot bowl. Ladle 350ml scalding milky tonkotsu broth; whisk lightly. Boil thin Hakata noodles in rolling water for ONLY 45 to 60 seconds (Hakata style is eaten firm/katame!). Shake out water vigorously with tebo. Place noodles in broth. Top with 2 slices chashu pork, shredded black kikurage mushrooms, sliced scallions, and crushed sesame seeds. Drizzle 1 teaspoon of jet-black garlic oil (mayu) in a swirl across the white broth. Serve instantly.',
        howToDoIt: 'Thin Hakata noodles cook in under 60 seconds; cooking longer makes them mushy in the rich, heavy broth. The black garlic oil cuts through the pork fat with deep roasted complexity.',
        heat: 'Off',
        heatDescription: 'Assembly.',
        duration: 3,
        visualCues: 'Stunning visual contrast: jet-black garlic oil swirling across milky-white broth, topped with pink chashu and black mushrooms.',
        hear: 'Soft hiss of steam.',
        smell: 'Rich pork, roasted black garlic, and toasted sesame.',
        textureCheck: 'Velvety, lip-sticking broth; snappy, firm noodles; crunchy wood-ear mushrooms.',
        whatShouldThisLookLike: 'World-class Hakata Tonkotsu Ramen bowl.',
        tip: 'Eat immediately! Hakata noodles are thin and absorb broth very rapidly.',
        commonMistake: 'Boiling Hakata noodles for 2–3 minutes — they turn into soggy paste.',
        moveOnWhen: 'Bowls are assembled and served steaming hot.',
        quickInstructions: 'Add tare and broth to bowls; boil thin noodles 45-60s, drain dry, add to broth. Top with chashu, kikurage, negi, mayu.'
      }
    ],
    commonMistakes: [
      { mistake: 'Broth was grey and tasted sour/funky.', remedy: 'You didn\'t blanch and scrub the bones clean under cold running water before the long boil.' },
      { mistake: 'Broth was thin and watery, not creamy white.', remedy: 'The heat was too low. Tonkotsu requires a continuous rolling boil for 6+ hours to physically emulsify the fat.' }
    ],
    troubleshooting: [
      {
        problem: 'Broth has a thick layer of clear yellow oil on top instead of being white',
        whatHappened: 'The rolling boil stopped and the emulsion broke.',
        whyItHappened: 'Heat was reduced.',
        whatToDoNow: 'Use an immersion blender on high speed for 90 seconds directly in the hot pot to force the fat back into micro-emulsion.',
        howToPrevent: 'Keep heat high enough for continuous rolling boil.'
      }
    ],
    substitutions: [
      { original: 'Pork femur bones', substitute: 'Pork trotters + chicken feet', notes: 'Adds immense gelatin to help emulsify the broth.' }
    ],
    safetyNotes: [
      'Violent boiling pots can bubble over; leave adequate headspace in the pot.'
    ],
    servingGuide: {
      restingTime: 'Zero — eat immediately.',
      garnishing: 'Swirl of black garlic oil (mayu), kikurage, scallions, crushed sesame, red beni shoga.',
      plating: 'Serve in deep ceramic Hakata-style ramen bowls.',
      temperature: 'Scalding hot.',
      accompaniments: 'Extra noodle refill (Kaedama), pan-fried gyoza, and cold draft beer.'
    }
  },

  // 5. UDON (KAKE UDON & TEMPURA UDON)
  {
    id: 'udon',
    name: 'Sanuki Kake Udon (Thick Chewy Wheat Noodles in Dashi)',
    cuisine: 'Japanese',
    region: 'Japan (Kagawa / Shikoku)',
    servings: 4,
    prepTime: 20,
    cookTime: 15,
    difficulty: 'Easy',
    overview: {
      summary: 'Sanuki-style comfort: thick, square-cut, delightfully chewy wheat noodles (Sanuki udon) steeped in a crystal-clear, delicate, piping-hot golden dashi broth (kakejiru) seasoned with usukuchi (light soy sauce) and mirin, crowned with crispy tempura flakes (tenkasu), sliced scallions, and kamaboko fish cake.',
      appearance: 'A clean, elegant Japanese bowl: thick ivory noodles coiled in a glowing golden broth, scattered with golden tenkasu crunch, fine green scallions, and pink-rimmed kamaboko.',
      texture: 'Superlatively chewy, springy, and slippery noodles (koshi bite) swimming in hot, soothing, clean broth with crisp tempura bits.',
      flavor: 'Deeply comforting, clean, oceanic dashi umami from kombu and katsuobushi with delicate sweet mirin notes.',
      restingTimeMinutes: 1
    },
    equipment: [
      { name: 'Large pasta pot', purpose: 'For boiling thick udon noodles in ample rolling water so they don\'t stick.' },
      { name: 'Noodle strainer (Tebo)', purpose: 'For boiling and rinsing noodles.' },
      { name: 'Medium saucepan', purpose: 'For simmering delicate kakejiru dashi broth.' }
    ],
    beforeYouStart: [
      { task: 'Steep 15g kombu in 1.2 liters cold water for 30 minutes; heat to bare simmer, remove kombu, add 25g katsuobushi for 5 mins, strain clear dashi.', durationMinutes: 40 },
      { task: 'Slice kamaboko (Japanese pink-and-white fish cake) into 5mm half-moons.', durationMinutes: 3 }
    ],
    ingredientPrepGuide: [
      { item: 'Cold Water Shock & Re-Heating (Numeri-Tori)', technique: 'Boil udon noodles until tender. Drain and immediately plunge into a bowl of cold water, rubbing the noodles vigorously between your hands to wash away surface starch (numeri-tori). This locks in the firm, chewy, resilient "koshi" texture. Right before serving, dunk the cold noodles in boiling water for 15 seconds to re-warm, then drain and slide into the hot soup bowl.' }
    ],
    essentialIngredients: [
      { name: 'Fresh or frozen Sanuki Udon noodles', prep: 'thick square-cut noodles', amount: '4 portions (800g)', metric: '800g', imperial: '1.75 lbs', common: '4 packs' },
      { name: 'Primary Dashi broth (Ichiban Dashi)', prep: 'fresh kombu & bonito stock', amount: '1.2 liters', metric: '1200ml', imperial: '40 fl oz', common: '5 cups' },
      { name: 'Usukuchi Shoyu (Japanese light soy sauce)', prep: 'preserves golden broth color', amount: '3 tbsp', metric: '45ml', imperial: '1.5 fl oz', common: '3 tbsp' },
      { name: 'Mirin (sweet rice wine)', prep: 'authentic brewed', amount: '3 tbsp', metric: '45ml', imperial: '1.5 fl oz', common: '3 tbsp' },
      { name: 'Granulated sugar', prep: 'subtle balance', amount: '1 tsp', metric: '4g', imperial: '0.14 oz', common: '1 tsp' },
      { name: 'Fine sea salt', prep: 'for broth seasoning', amount: '1 tsp', metric: '6g', imperial: '0.2 oz', common: '1 tsp' },
      { name: 'Kamaboko (steamed fish cake)', prep: 'pink-and-white slices', amount: '8 slices', metric: '40g', imperial: '1.4 oz', common: '8 slices' },
      { name: 'Tenkasu (crunchy fried tempura flakes)', prep: 'golden crisp bits', amount: '4 tbsp', metric: '30g', imperial: '1 oz', common: '1/4 cup' },
      { name: 'Scallions (negi)', prep: 'finely sliced rings', amount: '3 stalks', metric: '45g', imperial: '1.6 oz', common: '1/3 cup' },
      { name: 'Shichimi Togarashi (Japanese 7-spice)', prep: 'for table sprinkle', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' }
    ],
    optionalIngredients: [
      { name: 'Ebi Tempura (crispy tempura prawns)', prep: 'for Tempura Udon variation', amount: '4 pieces', metric: '120g', imperial: '4.2 oz', common: '4 prawns', optional: true },
      { name: 'Onsen Tamago (soft-poached hot spring egg)', prep: 'custardy egg', amount: '4 eggs', metric: '4 eggs', imperial: '4 eggs', common: '4 eggs', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'SIMMER GOLDEN KAKEJIRU DASHI BROTH',
        whatYouNeed: ['1.2 liters fresh dashi', '3 tbsp light soy sauce (usukuchi)', '3 tbsp mirin', '1 tsp sugar', '1 tsp salt', 'Saucepan'],
        description: 'In a saucepan, combine dashi broth, usukuchi light soy sauce, mirin, sugar, and salt. Bring to a gentle simmer over medium heat. Let simmer for 2 minutes to cook off raw alcohol from mirin. Keep at a bare simmer on lowest heat.',
        howToDoIt: 'Using usukuchi (light-colored) soy sauce seasons the broth with proper salinity and umami while keeping the soup crystal-clear and pale golden.',
        heat: 'Medium then Lowest Heat',
        heatDescription: 'Gentle warmth.',
        duration: 5,
        visualCues: 'Crystal-clear, luminous pale golden broth with zero cloudiness.',
        hear: 'Gentle simmer.',
        smell: 'Smoky bonito, sweet mirin, and oceanic kombu.',
        textureCheck: 'Light, clear, savory sipping broth.',
        whatShouldThisLookLike: 'Glistening golden kakejiru broth.',
        tip: 'Do not use dark soy sauce (koikuchi) — it will turn the delicate udon broth dark brown.',
        commonMistake: 'Boiling dashi violently — boiling makes bonito broth bitter.',
        moveOnWhen: 'Broth is seasoned, golden, and held hot.',
        quickInstructions: 'Simmer dashi with light soy, mirin, sugar, and salt for 2 mins; hold on low heat.'
      },
      {
        step: 2,
        title: 'BOIL UDON & COLD STARCH WASH (NUMERI-TORI)',
        whatYouNeed: ['4 portions Sanuki udon noodles', 'Large pot of boiling water', 'Colander', 'Bowl of cold water'],
        description: 'Drop udon noodles into a large pot of rapidly boiling water. Boil for 8–10 minutes (or 2–3 minutes for frozen udon) until tender with a chewy, firm core. Drain into a colander and immediately plunge into cold running water. Vigorously rub and wash the noodles with both hands to wash away surface starch (numeri-tori). Drain thoroughly.',
        howToDoIt: 'Rubbing in cold water strips away surface slime and shocks the wheat gluten, giving Sanuki udon its world-famous firm, chewy, slippery bite (koshi).',
        heat: 'High Boil',
        heatDescription: 'Rolling boil.',
        duration: 10,
        visualCues: 'Noodles turn translucent ivory; cold water wash leaves them silky, slippery, and separate.',
        hear: 'Boiling water.',
        smell: 'Clean wheat aroma.',
        textureCheck: 'Extremely chewy, springy, firm, and slippery.',
        whatShouldThisLookLike: 'Pristine, thick, shiny white udon noodles.',
        tip: 'Never skip the cold water wash; unwashed udon makes the broth thick and muddy.',
        commonMistake: 'Serving straight from boiling water without cold shock — noodles become limp and soggy.',
        moveOnWhen: 'Noodles are cold-washed and drained.',
        quickInstructions: 'Boil udon noodles until tender; plunge in cold water and wash away starch with hands; drain.'
      },
      {
        step: 3,
        title: 'FLASH RE-WARM & ASSEMBLE',
        whatYouNeed: ['Washed cold noodles', 'Pot of hot water', 'Strainer', '4 warmed deep bowls', 'Hot kakejiru broth', 'Kamaboko slices', 'Tenkasu', 'Scallions', 'Shichimi togarashi'],
        description: 'Dip the cold udon noodles into a pot of boiling water for 15 seconds to re-warm. Drain firmly and divide into 4 warmed deep soup bowls. Pour 300ml of scalding golden kakejiru broth over the noodles in each bowl. Top with 2 slices of pink kamaboko, a generous spoonful of crunchy tenkasu (tempura flakes), and sliced scallions. Dust with shichimi togarashi and serve immediately.',
        howToDoIt: 'Brief re-warming preserves the internal chewiness while ensuring the noodles are piping hot when submerged in the dashi broth.',
        heat: 'Off',
        heatDescription: 'Assembly.',
        duration: 3,
        visualCues: 'Steaming golden broth cradling thick white noodles, topped with pink fish cake, green scallions, and golden crunchy flakes.',
        hear: 'Crisp crackle as tenkasu hits hot broth.',
        smell: 'Incredible soothing dashi aroma with toasted tempura crunch.',
        textureCheck: 'Chewy, springy noodles; hot soothing broth; crispy tempura flakes.',
        whatShouldThisLookLike: 'Classic Japanese Sanuki Kake Udon.',
        tip: 'Add tempura flakes right at the table so they retain their crisp crunch.',
        commonMistake: 'Leaving cooked udon sitting on the counter — assemble and eat immediately.',
        moveOnWhen: 'Bowls are assembled and served hot.',
        quickInstructions: 'Re-warm noodles in boiling water 15s; drain into bowls, pour hot dashi broth, top with kamaboko, tenkasu, negi.'
      }
    ],
    commonMistakes: [
      { mistake: 'Noodles were slimy and broth turned cloudy.', remedy: 'You skipped the cold water wash (numeri-tori). Always rub cooked noodles in cold water to strip surface starch.' },
      { mistake: 'Broth was dark and tasted harsh.', remedy: 'You used dark soy sauce. Always use Japanese light soy sauce (usukuchi shoyu).' }
    ],
    troubleshooting: [
      {
        problem: 'Noodles feel too soft',
        whatHappened: 'Boiled for too long.',
        whyItHappened: 'Overcooking.',
        whatToDoNow: 'Shock immediately in ice water for 2 minutes to firm up gluten.',
        howToPrevent: 'Check noodles 2 minutes before package instructions; Sanuki udon should be firm.'
      }
    ],
    substitutions: [
      { original: 'Tenkasu (tempura flakes)', substitute: 'Crushed potato chips or panko lightly toasted in sesame oil', notes: 'Adds similar crunchy texture.' }
    ],
    safetyNotes: [
      'Serve in sturdy bowls; hot dashi broth is scalding.'
    ],
    servingGuide: {
      restingTime: 'Zero — eat immediately.',
      garnishing: 'Kamaboko slices, tenkasu tempura flakes, scallions, shichimi 7-spice.',
      plating: 'Serve in deep ceramic donburi bowls with chopsticks and wooden broth ladle.',
      temperature: 'Piping hot.',
      accompaniments: 'Crispy prawn tempura (Ebi Tempura), inari sushi (sweet tofu rice pockets), and cold green tea.'
    }
  },

  // 6. SOBA (ZARU SOBA)
  {
    id: 'soba',
    name: 'Traditional Zaru Soba (Chilled Buckwheat Noodles with Dipping Sauce)',
    cuisine: 'Japanese',
    region: 'Japan (Nagano / Shinshu)',
    servings: 4,
    prepTime: 15,
    cookTime: 10,
    difficulty: 'Easy',
    overview: {
      summary: 'The refined summer soul of Japanese dining: earthy buckwheat noodles (Nihachi 80/20 soba) boiled al dente, plunged into an ice water bath to snap the starches tight, and served chilled over a slotted bamboo tray (zaru) with crisp shredded nori. Dipped into a concentrated chilled dashi-soy sauce (tsuyu) spiked with wasabi and scallions, finished with hot cloudy noodle water (sobayu).',
      appearance: 'Neat nests of taupe-grey buckwheat noodles resting on a slatted bamboo mat, crowned with fine threads of black nori, alongside a dipping cup of dark amber tsuyu, wasabi, and scallions.',
      texture: 'Firm, toothsome, slippery, and delightfully al dente with a clean snap; completely refreshing and non-sticky.',
      flavor: 'Nutty, earthy buckwheat grain flavor contrasted by savory, sweet, smoky dashi dipping sauce and pungent wasabi.',
      restingTimeMinutes: 1
    },
    equipment: [
      { name: 'Zaru (slotted bamboo serving tray)', purpose: 'Allows water to drain freely beneath noodles so they remain firm and cold without becoming waterlogged.' },
      { name: 'Soba choko (ceramic dipping cups)', purpose: 'For holding the concentrated dipping sauce.' },
      { name: 'Large bowl with ice cubes', purpose: 'For temperature shocking noodles.' }
    ],
    beforeYouStart: [
      { task: 'Simmer 100ml dashi, 50ml mirin, and 50ml soy sauce for 3 minutes; chill completely in refrigerator (soba tsuyu).', durationMinutes: 20 },
      { task: 'Prepare a large bowl with water and 20 ice cubes.', durationMinutes: 2 }
    ],
    ingredientPrepGuide: [
      { item: 'Cold Water Starch Rub (Wash Shock)', technique: 'Boil soba for 4–5 minutes. Drain and plunge immediately into ice-cold water. Vigorously swish and rub noodles between both hands to remove excess surface starch until the water runs clear and noodles feel taut, firm, and slippery.' },
      { item: 'Sobayu Tradition', technique: 'DO NOT dump out the hot noodle boiling water! Save 1 cup in a small teapot. At the end of the meal, pour hot noodle water into your leftover dipping tsuyu cup to create a soothing, savory hot tea to sip.' }
    ],
    essentialIngredients: [
      { name: 'Buckwheat Soba noodles (Nihachi 80% buckwheat)', prep: 'dried or fresh', amount: '4 portions (350g)', metric: '350g', imperial: '12.3 oz', common: '4 bundles' },
      { name: 'Soba Tsuyu (concentrated dipping sauce)', prep: 'chilled dashi-soy reduction', amount: '200ml', metric: '200ml', imperial: '6.8 fl oz', common: '1 cup' },
      { name: 'Kizami Nori (shredded toasted seaweed)', prep: 'fine matchsticks', amount: '2 tbsp', metric: '6g', imperial: '0.2 oz', common: '2 tbsp' },
      { name: 'Scallions (negi)', prep: 'very finely sliced rings', amount: '3 stalks', metric: '45g', imperial: '1.6 oz', common: '1/3 cup' },
      { name: 'Wasabi paste', prep: 'fresh or paste', amount: '1.5 tbsp', metric: '22g', imperial: '0.8 oz', common: '1.5 tbsp' },
      { name: 'Water for boiling soba', prep: 'large pot', amount: '3 liters', metric: '3000ml', imperial: '100 fl oz', common: '12 cups' }
    ],
    optionalIngredients: [
      { name: 'Grated Nagaimo mountain yam (Tororo Soba)', prep: 'for slippery texture', amount: '1/2 cup', metric: '100g', imperial: '3.5 oz', common: '1/2 cup', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'BOIL SOBA NOODLES AL DENTE',
        whatYouNeed: ['350g soba noodles', '3 liters rapidly boiling water in large pot', 'Timer'],
        description: 'Drop soba noodles into rapidly boiling water in a fan shape. Stir gently with chopsticks to submerge and separate strands. Boil over medium-high heat for 4 to 5 minutes (follow package time closely) until tender with a firm al dente core. (Keep a cup of hot noodle water before draining!).',
        howToDoIt: 'Buckwheat contains delicate starches; boiling in massive water volume without salt prevents noodles from becoming gummy.',
        heat: 'High Rolling Boil',
        heatDescription: 'Active boiling.',
        duration: 5,
        visualCues: 'Noodles turn supple and grey-brown; water turns cloudy and pale tan from dissolved buckwheat starches.',
        hear: 'Lively bubbling.',
        smell: 'Nutty, earthy buckwheat grain aroma.',
        textureCheck: 'Al dente with a firm toothsome snap.',
        whatShouldThisLookLike: 'Tender grey-brown buckwheat noodles in boiling cloudy water.',
        tip: 'Reserve 1 cup of the cloudy boiling water (sobayu) in a small teapot before draining.',
        commonMistake: 'Over-boiling past 5 minutes — soba breaks into mush if overcooked.',
        moveOnWhen: 'Noodles are al dente (approx 4-5 mins).',
        quickInstructions: 'Boil soba noodles in rolling water 4-5 mins until al dente; reserve 1 cup boiling water for sobayu.'
      },
      {
        step: 2,
        title: 'THE ICE SHOCK & STARCH WASH',
        whatYouNeed: ['Cooked soba noodles', 'Colander', 'Large bowl of ice water'],
        description: 'Drain noodles in a colander. Immediately plunge into the bowl of ice water. Swish and gently rub the noodles between your palms under the cold water for 60 seconds to wash off all slippery surface starch. Lift and drain thoroughly, tossing in the colander to shake off every drop of water.',
        howToDoIt: 'The ice bath immediately stops cooking, tightening the buckwheat starches into a firm, snappy texture, while washing removes surface starch so the noodles never clump.',
        heat: 'Off (Ice Cold)',
        heatDescription: 'Ice shock.',
        duration: 3,
        visualCues: 'Noodles turn cold, glossy, taut, and separate cleanly without sticking to fingers.',
        hear: 'Swishing in ice water.',
        smell: 'Clean, fresh buckwheat.',
        textureCheck: 'Firm, toothsome, cold, and slippery.',
        whatShouldThisLookLike: 'Cold, taut, glistening buckwheat noodles.',
        tip: 'Shake vigorously in the colander — water left on noodles will dilute the dipping sauce.',
        commonMistake: 'Skipping the ice wash — unwashed soba turns into a sticky, clumped mess within 2 minutes.',
        moveOnWhen: 'Noodles are ice-cold, washed free of starch, and drained dry.',
        quickInstructions: 'Plunge cooked noodles into ice water, rub gently to wash off starch, drain completely dry.'
      },
      {
        step: 3,
        title: 'PLATE ON BAMBOO ZARU & ASSEMBLE',
        whatYouNeed: ['Chilled dry noodles', 'Slatted bamboo zaru trays', 'Kizami nori shreds', 'Chilled soba tsuyu dipping cups', 'Wasabi', 'Sliced scallions'],
        description: 'Form the noodles into loose, elegant coils and arrange across the slatted bamboo zaru tray. Crown with fine shreds of black nori. Pour chilled soba tsuyu into small ceramic dipping cups (soba choko). Place small dishes of sliced scallions and wasabi on the side.',
        howToDoIt: 'The slatted bamboo zaru lets any residual water drain beneath, keeping the noodles dry and taut. Dipping sauce is kept concentrated so each quick dip packs intense flavor.',
        heat: 'Off',
        heatDescription: 'Plating.',
        duration: 2,
        visualCues: 'Taupe-grey noodle nests crowned with black seaweed shreds over a natural bamboo mat, beside dark dipping sauce and green wasabi.',
        hear: 'None',
        smell: 'Earthy buckwheat, toasted nori, and savory dashi.',
        textureCheck: 'Ice-cold, firm noodles with clean snap.',
        whatShouldThisLookLike: 'Classic Japanese Zaru Soba service.',
        tip: 'Add a pinch of scallions and a dab of wasabi to the dipping sauce; pick up a bite of noodles, dip bottom third into sauce, and slurp vigorously.',
        commonMistake: 'Submerging the entire noodle portion in sauce for 30 seconds — soba should be dipped only halfway so you taste the pure buckwheat grain.',
        moveOnWhen: 'Plated on bamboo tray with dipping cup and condiments.',
        quickInstructions: 'Arrange noodles on bamboo zaru, top with nori shreds; serve with chilled tsuyu cup, wasabi, and scallions.'
      },
      {
        step: 4,
        title: 'THE SOBAYU FINALE',
        whatYouNeed: ['Leftover dipping sauce in cup', 'Reserved hot soba water (sobayu) in teapot'],
        description: 'After finishing all the noodles, pour the hot, cloudy, nutritious buckwheat boiling water (sobayu) from your teapot into the remaining dipping sauce in your cup. Stir and sip as a soothing hot tea.',
        howToDoIt: 'Sobayu contains water-soluble vitamins (B1, B2, rutin antioxidants) extracted from the buckwheat during boiling. Diluting the concentrated salty sauce with hot buckwheat water creates a delicious, restorative, healthy broth.',
        heat: 'Off',
        heatDescription: 'Table ritual.',
        duration: 2,
        visualCues: 'Dark sauce turns into a warm, comforting, pale-amber cloudy broth.',
        hear: 'Pouring sound.',
        smell: 'Toasty buckwheat tea and warm dashi.',
        textureCheck: 'Comforting, warm, drinkable tea.',
        whatShouldThisLookLike: 'Hot cup of seasoned Sobayu.',
        tip: 'This is the traditional conclusion to every authentic soba meal in Japan.',
        commonMistake: 'Throwing away the noodle water down the drain.',
        moveOnWhen: 'Sobayu is poured and enjoyed.',
        quickInstructions: 'Pour hot buckwheat cooking water (sobayu) into remaining dipping sauce; sip as warm tea.'
      }
    ],
    commonMistakes: [
      { mistake: 'Soba became gummy and clumped.', remedy: 'You didn\'t rinse in cold water or let it sit too long. Rinse vigorously under cold water and serve immediately.' }
    ],
    troubleshooting: [
      {
        problem: 'Dipping sauce is too salty',
        whatHappened: 'Tsuyu was not diluted.',
        whyItHappened: 'Concentrate used without water.',
        whatToDoNow: 'Add 2 tablespoons of cold water or ice to dilute to desired dipping strength.',
        howToPrevent: 'Follow 1:1 dashi to soy-mirin ratio for dipping tsuyu.'
      }
    ],
    substitutions: [
      { original: 'Buckwheat Soba', substitute: 'Chilled Somen or Cha-soba (green tea soba)', notes: 'Green tea soba offers delicate matcha fragrance.' }
    ],
    safetyNotes: [
      'Buckwheat is a common allergen; verify diners have no buckwheat allergy.'
    ],
    servingGuide: {
      restingTime: 'Serve immediately on ice-cold tray.',
      garnishing: 'Kizami nori matchsticks, sliced scallions, and fresh wasabi.',
      plating: 'Serve on slatted bamboo zaru mat with a ceramic dipping cup.',
      temperature: 'Ice-cold noodles; hot sobayu finale.',
      accompaniments: 'Crispy vegetable and prawn tempura (Tenzaru Soba) and hot sobayu.'
    }
  },

  // 7. TEMPURA
  {
    id: 'tempura',
    name: 'Authentic Tokyo Edo-Style Tempura (Crispy Prawns & Vegetables)',
    cuisine: 'Japanese',
    region: 'Japan (Tokyo)',
    servings: 4,
    prepTime: 30,
    cookTime: 20,
    difficulty: 'Hard',
    overview: {
      summary: 'The pinnacle of Japanese frying craft: succulent prawns, sweet potatoes, lotus root, and shiso leaves dipped in an ice-cold, barely-mixed, lumpy batter, fried in a sesame-blend oil at precise temperature with the "blooming flower" flicking technique (hana o sakaseru) into a gossamer-thin, lace-crisp, non-greasy golden jacket, served with warm tentsuyu dipping sauce and grated daikon.',
      appearance: 'Pristine, delicate, pale-golden tempura pieces crowned with airy, feathery lace frills (koromo), completely greaseless and dry, served alongside a warm amber dipping broth and white daikon mound.',
      texture: 'Impossibly light, airy, shatteringly crisp, and glass-like outer crust yielding to steaming, tender, juicy prawns and sweet vegetables.',
      flavor: 'Pure, clean sweetness of fresh seafood and vegetables accented by toasted sesame aroma and savory dashi-mirin dip.',
      restingTimeMinutes: 1
    },
    equipment: [
      { name: 'Heavy deep Dutch oven or cast iron tempura pot', purpose: 'Holds stable deep-frying temperature with rapid heat recovery.' },
      { name: 'Deep-fry thermometer', purpose: 'Accurately regulates frying oil at 175°C (350°F) for vegetables and 180°C (360°F) for prawns.' },
      { name: 'Long wooden cooking chopsticks (Saibashi)', purpose: 'For barely mixing batter and flicking batter drops onto frying prawns.' },
      { name: 'Wire tempura rack (Ami)', purpose: 'Allows excess oil to drain freely without steaming the crisp crust.' }
    ],
    beforeYouStart: [
      { task: 'Chill 250ml water with ice cubes; chill flour in the freezer for 20 minutes.', durationMinutes: 20 },
      { task: 'Peel and devein 8 large prawns, leave tail on; make 3 small diagonal incisions along the belly and gently snap the back tendon so prawns stay straight when fried.', durationMinutes: 15 },
      { task: 'Slice sweet potato (5mm rounds), lotus root (5mm rounds), and shiitake mushrooms; pat 100% dry.', durationMinutes: 10 }
    ],
    ingredientPrepGuide: [
      { item: 'Prawn Tendon Snapping', technique: 'Prawns curl naturally when heated. Make 3 diagonal cuts across the belly muscle and press the prawn flat on a board until you hear/feel the tendons snap. A straightened prawn stays long and dramatic during frying.' },
      { item: 'The Ice-Cold Lumpy Batter Rule', technique: 'Whisk 1 egg yolk and ice water together. Add cold flour and mix with chopsticks in 8 to 10 stabbing motions ONLY. DO NOT whisk smooth! The batter MUST have visible flour lumps and dry flour pockets. Smooth batter develops gluten, creating a tough, greasy, rubbery pancake shell; lumpy cold batter creates a shatteringly crisp, lace-thin glass crust.' },
      { item: 'Hana o Sakaseru (Making the Flower Bloom)', technique: 'Dip your chopsticks into wet batter and flick droplets directly onto the frying prawn in the oil. The droplets weld onto the crust, creating dramatic, airy, feathery tempura lace.' }
    ],
    essentialIngredients: [
      { name: 'Large prawns (Black Tiger or King prawns)', prep: 'peeled, deveined, tails on, tendons snapped straight', amount: '8 prawns', metric: '250g', imperial: '8.8 oz', common: '8 prawns' },
      { name: 'Japanese sweet potato (Satsumaimo)', prep: 'cut into 5mm rounds', amount: '1 small', metric: '150g', imperial: '5.3 oz', common: '8 rounds' },
      { name: 'Lotus root (Renkon)', prep: 'peeled & sliced into 5mm wheels', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '8 wheels' },
      { name: 'Shiitake mushrooms', prep: 'stems removed, cap scored with X', amount: '4 mushrooms', metric: '80g', imperial: '2.8 oz', common: '4 pieces' },
      { name: 'Fresh Shiso leaves', prep: 'washed & dried completely', amount: '4 leaves', metric: '5g', imperial: '0.18 oz', common: '4 leaves' },
      { name: 'Cake flour (low protein / Hakurikiko)', prep: 'chilled in freezer', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '1.25 cups' },
      { name: 'Cornstarch or potato starch (Katakuriko)', prep: 'for pre-dusting ingredients', amount: '3 tbsp', metric: '30g', imperial: '1 oz', common: '3 tbsp' },
      { name: 'Egg yolk (cold)', prep: 'separated from white', amount: '1 yolk', metric: '20g', imperial: '0.7 oz', common: '1 yolk' },
      { name: 'Ice water (ice cubes removed)', prep: 'ice-cold', amount: '250ml', metric: '250ml', imperial: '8.5 fl oz', common: '1 cup' },
      { name: 'Frying oil', prep: 'neutral oil (canola/peanut) + 20% toasted sesame oil', amount: '1 liter', metric: '1000ml', imperial: '34 fl oz', common: '4 cups' },
      { name: 'Tentsuyu dipping sauce', prep: 'dashi (150ml) + mirin (3 tbsp) + soy (3 tbsp) simmered', amount: '200ml', metric: '200ml', imperial: '6.8 fl oz', common: '1 cup' },
      { name: 'Daikon radish', prep: 'finely grated into snow (oroshi)', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '1/2 cup' },
      { name: 'Fresh ginger', prep: 'finely grated', amount: '1 tbsp', metric: '15g', imperial: '0.5 oz', common: '1 tbsp' }
    ],
    optionalIngredients: [
      { name: 'Matcha sea salt (Matcha-jio)', prep: 'fine salt mixed with green tea powder for dipping', amount: '1 tsp', metric: '5g', imperial: '0.18 oz', common: '1 tsp', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'PRE-DUST INGREDIENTS & REGULATE OIL',
        whatYouNeed: ['Prawns', 'Vegetable slices', '3 tbsp cornstarch', 'Frying oil in heavy pot', 'Thermometer (175°C / 350°F)'],
        description: 'Heat frying oil with 2 tbsp toasted sesame oil to 175°C (350°F). Lightly dust all prawns and vegetable slices in cornstarch, tapping off all excess powder so only a translucent dusting remains.',
        howToDoIt: 'Cornstarch acts as an adhesive primer; without a dry dusting, cold wet batter will slip off the smooth raw prawns in the hot oil.',
        heat: 'Medium Heat',
        heatDescription: 'Steady oil temperature.',
        duration: 8,
        visualCues: 'Prawns and vegetables have a whisper of white powder; oil is hot and clear.',
        hear: 'None.',
        smell: 'Faint nutty aroma of toasted sesame oil.',
        textureCheck: 'Dry, lightly dusted surfaces.',
        whatShouldThisLookLike: 'Lightly dusted prawns and vegetables ready for dipping.',
        tip: 'Leave the prawn tails un-dusted; fry tails clean for bright red contrast.',
        commonMistake: 'Heavy coating of starch — tap off excess so it doesn\'t turn gummy.',
        moveOnWhen: 'Oil is steady at 175°C and ingredients are dusted.',
        quickInstructions: 'Heat oil to 175°C; lightly dust prawns and vegetables with cornstarch, tapping off excess.'
      },
      {
        step: 2,
        title: 'MIX ICE-COLD LUMPY BATTER (10 STABS ONLY!)',
        whatYouNeed: ['1 cold egg yolk', '250ml ice-cold water', '150g chilled cake flour', 'Chopsticks', 'Mixing bowl'],
        description: 'Prepare batter ONLY when oil is hot and ready. In a bowl, whisk cold egg yolk and ice water until frothy. Dump the chilled flour into the liquid all at once. Using chopsticks, stab and poke into the flour 8 to 10 times only in a figure-eight pattern. DO NOT whisk! Leave large dry flour clumps and lumps floating on top. Keep bowl resting in ice.',
        howToDoIt: 'Low-protein cake flour + ice water + zero whisking completely prevents gluten network formation. When dropped in hot oil, the water in the lumps instantly vaporizes into steam, creating a feather-light, shattering, airy lace crust.',
        heat: 'Off',
        heatDescription: 'Ice-cold station.',
        duration: 2,
        visualCues: 'A watery, lumpy batter with visible dry flour pockets and floating lumps.',
        hear: 'None.',
        smell: 'Clean flour.',
        textureCheck: 'Watery, lumpy, cold liquid.',
        whatShouldThisLookLike: 'A very lumpy, barely mixed cold batter.',
        tip: 'Never whisk smooth! A smooth batter is a ruined tempura batter.',
        commonMistake: 'Whisking batter smooth like pancake batter — creates a heavy, greasy, doughy shell.',
        moveOnWhen: 'Batter is stabbed 10 times and still lumpy.',
        quickInstructions: 'Mix cold egg yolk and ice water; add chilled flour, stab with chopsticks 10 times only (leave lumpy!).'
      },
      {
        step: 3,
        title: 'FRY VEGETABLES & FLICK FLOWER LACE',
        whatYouNeed: ['Dusted sweet potato, lotus root, shiitake', 'Lumpy batter', 'Hot oil at 175°C', 'Tempura rack'],
        description: 'Dip vegetable slices into lumpy batter, let excess drip for 1 second, and slide gently into 175°C oil (fry shiso leaves by dipping ONLY the back side so the green front shines). Fry for 2.5–3 minutes, flipping once, until crisp and pale golden. Lift with chopsticks, drain over pot for 5 seconds, and transfer to wire rack.',
        howToDoIt: 'Vegetables cook at 175°C so the internal starches caramelize sweet and tender while the thin crust sets glass-crisp.',
        heat: 'Medium Heat (175°C / 350°F)',
        heatDescription: 'Steady gentle frying sizzle.',
        duration: 6,
        visualCues: 'Batter sets instantly into crisp, pale-cream bubbles; vegetables become fork-tender.',
        hear: 'Steady, crisp sizzling that softens as moisture evaporates.',
        smell: 'Sweet roasted sweet potato and sesame oil.',
        textureCheck: 'Shatteringly crisp, brittle shell.',
        whatShouldThisLookLike: 'Delicate pale-golden crisp tempura vegetables on a wire rack.',
        tip: 'Skim out any floating fried batter bits (tenkasu) between batches to keep oil clean.',
        commonMistake: 'Crowding the pot — fry only 3–4 pieces at a time.',
        moveOnWhen: 'Vegetables are crisp, pale golden, and drained.',
        quickInstructions: 'Dip vegetables in batter; fry at 175°C for 2.5-3 mins until crisp and pale golden. Drain on wire rack.'
      },
      {
        step: 4,
        title: 'FRY PRAWNS & THE BLOOMING FLOWER TRICK',
        whatYouNeed: ['Dusted prawns', 'Lumpy batter', 'Hot oil at 180°C', 'Chopsticks'],
        description: 'Increase heat slightly to 180°C (360°F). Holding a prawn by its dry tail, dip the body into batter. Slide into hot oil. Immediately dip chopsticks into the batter and flick 2 droplets over the frying prawn. The droplets will weld onto the crust, blooming into airy lace petals (hana o sakaseru). Fry for exactly 90 seconds to 2 minutes until straight, pale golden, and crisp. Lift out and drain on wire rack.',
        howToDoIt: 'Prawns cook rapidly; 90 seconds at 180°C leaves the interior translucent and sweet while the blooming batter frills crisp into delicate lace.',
        heat: 'Medium-High Heat (180°C / 360°F)',
        heatDescription: 'Lively, crisp sizzling.',
        duration: 4,
        visualCues: 'Prawn tail turns bright scarlet; body is enveloped in a feathery, airy golden-white lace coat; prawn stays straight.',
        hear: 'Energetic crackling in oil.',
        smell: 'Incredible aroma of fried prawns and toasted sesame.',
        textureCheck: 'Crisp, glass-like lace shell; juicy, springy prawn.',
        whatShouldThisLookLike: 'Pristine Edo-style prawn tempura with blooming lace frills.',
        tip: 'Do not overcook prawns — 90 seconds preserves sweet succulence.',
        commonMistake: 'Draining on paper towels — paper traps steam and makes tempura soggy. Always drain on an elevated wire rack.',
        moveOnWhen: 'Prawns are crisp, straight, and drained.',
        quickInstructions: 'Dip prawn body in batter, slide into 180°C oil; flick batter drops to bloom lace; fry 90s, drain on rack.'
      }
    ],
    commonMistakes: [
      { mistake: 'Tempura was heavy, oily, and soggy.', remedy: 'The batter was whisked smooth or not ice-cold. Keep batter lumpy, ice-cold, and oil at 175–180°C.' },
      { mistake: 'Prawns curled into a C-shape.', remedy: 'You didn\'t snap the belly tendons before frying. Make 3 cuts on the belly and press flat until tendons snap.' }
    ],
    troubleshooting: [
      {
        problem: 'Batter is warming up during frying',
        whatHappened: 'Ambient kitchen heat is warming the liquid.',
        whyItHappened: 'Dough resting too long.',
        whatToDoNow: 'Place the batter bowl inside a larger bowl filled with ice cubes, or drop 1 small ice cube directly into the batter.',
        howToPrevent: 'Keep the batter bowl resting over an ice bath throughout the cooking process.'
      }
    ],
    substitutions: [
      { original: 'Cake flour', substitute: 'All-purpose flour mixed with 25% cornstarch', notes: 'Reduces protein content to mimic Japanese low-protein flour.' }
    ],
    safetyNotes: [
      'Hot oil at 180°C splatters if water enters; ensure all ingredients are dried thoroughly before dipping.'
    ],
    servingGuide: {
      restingTime: '1 minute on wire rack.',
      garnishing: 'Serve with mounds of grated white daikon radish and grated ginger.',
      plating: 'Stack artfully on washi paper over a bamboo basket or plate.',
      temperature: 'Piping hot and shatteringly crisp.',
      accompaniments: 'Warm tentsuyu dipping sauce with grated daikon stirred in, matcha sea salt, and steamed rice.'
    }
  },

  // 8. TONKATSU
  {
    id: 'tonkatsu',
    name: 'Authentic Japanese Tonkatsu (Crispy Panko Pork Cutlet)',
    cuisine: 'Japanese',
    region: 'Japan (Tokyo)',
    servings: 4,
    prepTime: 20,
    cookTime: 15,
    difficulty: 'Medium',
    overview: {
      summary: 'Iconic Tokyo Yoshoku comfort: thick, juicy, tender center-cut pork loin chops (rosu) lightly scored, seasoned, dredged in flour, egg, and coarse, airy, flaky Japanese panko breadcrumbs, two-stage deep-fried until shatteringly crisp and deep golden-amber, sliced into thick juicy batons, served with sweet-tangy tonkatsu sauce, shredded cabbage, and spicy karashi mustard.',
      appearance: 'A thick, golden-amber breaded cutlet sliced into even 2cm batons, displaying a glistening white juicy pork interior and an airy panko crust, served over a mountain of finely shaved green cabbage with dark sauce.',
      texture: 'Superlatively crunchy panko crust that crackles loudly with every bite, contrasting with extraordinarily juicy, succulent pork tenderloin.',
      flavor: 'Rich, savory pork flavor paired with sweet-tart fruity tonkatsu sauce, toasted sesame, and nasal kick from karashi mustard.',
      restingTimeMinutes: 4
    },
    equipment: [
      { name: 'Heavy Dutch oven or deep skillet', purpose: 'Holds stable deep-frying temperature without dropping heat.' },
      { name: 'Meat mallet / tenderizer', purpose: 'Gently tenderizes pork fibers to ensure melt-in-the-mouth chew.' },
      { name: 'Wire draining rack', purpose: 'Allows steam to escape beneath cutlet so the bottom crust stays crisp.' }
    ],
    beforeYouStart: [
      { task: 'Trim excess fat from 4 center-cut pork loin chops (2.5cm thick); make small vertical cuts through the fat cap to prevent curling.', durationMinutes: 8 },
      { task: 'Shave 300g green cabbage into hair-thin threads; soak in ice water for 10 minutes to crisp, then spin dry in salad spinner.', durationMinutes: 12 }
    ],
    ingredientPrepGuide: [
      { item: 'Fat Cap Slitting (Sujikiri)', technique: 'Pork loin has a strip of fat and connective tissue along the outer rim. Cut 4–5 small vertical slits through this membrane with the tip of your knife. Connective tissue shrinks faster than meat when fried; slitting prevents the cutlet from curling into a bowl shape.' },
      { item: 'Coarse Fresh Panko (Nama Panko)', technique: 'Use coarse, flaky Japanese panko breadcrumbs (spritz dried panko with a tiny mist of water 5 minutes ahead to make it fluffy). Flaky panko flakes stand upright like needles, frying into an airy, crunchy crust that does not absorb excess grease.' }
    ],
    essentialIngredients: [
      { name: 'Pork loin chops (center-cut, bone-out)', prep: '2.5cm thick, fat cap slit, patted dry', amount: '4 chops (700g)', metric: '700g', imperial: '1.5 lbs', common: '4 chops' },
      { name: 'All-purpose flour', prep: 'for dusting', amount: '60g', metric: '60g', imperial: '2.1 oz', common: '1/2 cup' },
      { name: 'Eggs', prep: 'beaten with 1 tbsp water & 1 tsp oil', amount: '2 eggs', metric: '100g', imperial: '3.5 oz', common: '2 large' },
      { name: 'Coarse Japanese Panko breadcrumbs', prep: 'airy & flaky', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '2 cups' },
      { name: 'Fine sea salt & freshly cracked black pepper', prep: 'for seasoning meat', amount: '1 tsp each', metric: '6g', imperial: '0.2 oz', common: '1 tsp each' },
      { name: 'Frying oil', prep: 'neutral oil (canola/peanut)', amount: '800ml', metric: '800ml', imperial: '27 fl oz', common: '3.5 cups' },
      { name: 'Green cabbage', prep: 'shaved paper-thin, ice-soaked & spun dry', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '3 cups shredded' },
      { name: 'Japanese Tonkatsu sauce (Bull-Dog brand)', prep: 'sweet-tangy fruit-vegetable sauce', amount: '80ml', metric: '80ml', imperial: '2.7 fl oz', common: '1/3 cup' },
      { name: 'Japanese hot mustard (Karashi)', prep: 'spicy yellow mustard', amount: '2 tsp', metric: '10g', imperial: '0.35 oz', common: '2 tsp' },
      { name: 'Toasted white sesame seeds', prep: 'crushed in mortar (suribachi)', amount: '2 tbsp', metric: '20g', imperial: '0.7 oz', common: '2 tbsp' }
    ],
    optionalIngredients: [
      { name: 'Lemon wedges', prep: 'for squeezing over cutlet', amount: '4 wedges', metric: '4 wedges', imperial: '4 wedges', common: '4 wedges', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'TENDERIZE, SEASON & DREDGE IN TRIPLE COAT',
        whatYouNeed: ['4 pork chops', '1 tsp salt & pepper', '60g flour', '2 beaten eggs with 1 tsp oil', '150g panko', '3 shallow trays'],
        description: 'Lightly pound the pork chops with a meat mallet to an even 2cm thickness. Cut small vertical slits along the fat edge. Season both sides with salt and pepper. Set up 3 trays: flour, beaten egg, and panko. Dredge pork in flour, shaking off excess. Dip into beaten egg, coating completely. Transfer to panko tray; heap panko over the pork and press firmly with your palms so breadcrumbs adhere generously. Shake off loose crumbs.',
        howToDoIt: 'Adding a teaspoon of oil into the beaten egg creates a stronger bond between the flour and panko, preventing the crust from separating from the meat during slicing.',
        heat: 'Off',
        heatDescription: 'Dredging station.',
        duration: 8,
        visualCues: 'Cutlets are blanketed in a thick, even coat of flaky white panko breadcrumbs with no bald patches.',
        hear: 'None',
        smell: 'Seasoned pork and fresh breadcrumbs.',
        textureCheck: 'Fluffy, thick crumb coating adhering to meat.',
        whatShouldThisLookLike: 'Four evenly breaded pork cutlets resting on a tray.',
        tip: 'Let breaded cutlets rest for 5 minutes before frying; resting allows the egg to hydrate the inner panko, cementing the crust.',
        commonMistake: 'Using fine western breadcrumbs — fine breadcrumbs absorb grease and turn soggy; use coarse Japanese panko.',
        moveOnWhen: 'All 4 cutlets are breaded and rested 5 minutes.',
        quickInstructions: 'Pound pork chops, slit fat edge, season; dredge in flour, egg, and press firmly into panko.'
      },
      {
        step: 2,
        title: 'TWO-STAGE DEEP FRYING (CRISP & JUICY)',
        whatYouNeed: ['Breaded cutlets', 'Frying oil heated to 170°C (340°F)', 'Spider skimmer', 'Wire draining rack'],
        description: 'Heat oil to 170°C (340°F). Slide 2 cutlets gently into hot oil. Fry for 5 to 6 minutes on medium heat, flipping at the 3-minute mark, until pale golden. Lift out onto wire rack and rest for 3 minutes (residual heat continues cooking the interior meat gently). Increase oil heat to 180°C (360°F). Return cutlets to the hot oil for 60 to 90 seconds until the crust turns a deep, uniform golden-amber and the internal temperature reaches 63°C (145°F). Lift out and drain on wire rack.',
        howToDoIt: 'Two-stage frying is the restaurant secret: the first stage cooks the thick pork through gently without scorching the crumbs; the rest period lets internal juices settle; the second flash-fry creates an impervious, glass-crisp outer crust.',
        heat: 'Medium (170°C) then High (180°C)',
        heatDescription: 'Controlled frying.',
        duration: 10,
        visualCues: 'Panko bubbles vigorously; crust deepens to a rich, uniform golden-amber; bubbles subside as meat cooks through.',
        hear: 'Lively, rhythmic sizzling that gradually quiets down.',
        smell: 'Incredible aroma of toasted breadcrumbs and savory fried pork.',
        textureCheck: 'Rigid, shatteringly crunchy crust when tapped with tongs.',
        whatShouldThisLookLike: 'Deep golden-amber, crispy, crackling Tonkotsu cutlet.',
        tip: 'Resting on an elevated wire rack is mandatory — draining on paper towels traps escaping steam, turning the bottom crust soggy.',
        commonMistake: 'Frying in one single hot blast — panko burns black before the thick pork cooks through.',
        moveOnWhen: 'Cutlet registers 63°C (145°F) internally with deep golden-amber crust.',
        quickInstructions: 'Fry at 170°C for 5-6 mins, rest 3 mins on wire rack; flash-fry at 180°C for 90s until deep golden-crisp.'
      },
      {
        step: 3,
        title: 'REST, SLICE & SERVE',
        whatYouNeed: ['Hot fried cutlets', 'Wire rack', 'Chef knife', 'Cutting board'],
        description: 'Let cutlets rest on the wire rack for exactly 4 minutes. Transfer to cutting board. Using a sharp chef knife, slice straight down through the cutlet into 2cm wide batons with firm, confident single downward cuts. Listen to the loud crunch! Keep the sliced batons together in their original cutlet shape.',
        howToDoIt: 'Resting for 4 minutes allows the boiling meat juices to redistribute throughout the muscle fibers instead of gushing out onto the cutting board.',
        heat: 'Off',
        heatDescription: 'Resting and slicing.',
        duration: 4,
        visualCues: 'Loud crackle as knife cuts through; white juicy pork interior with a fine pink blush and shimmering moisture; panko crust remains intact.',
        hear: 'Loud, satisfying crunch of knife cutting through crisp panko.',
        smell: 'Juicy roasted pork and crunchy panko.',
        textureCheck: 'Shatteringly crisp crust; extraordinarily juicy, tender meat.',
        whatShouldThisLookLike: 'Sliced, juicy, golden Tonkatsu cutlet.',
        tip: 'Press the knife firmly straight down in one cut; do not saw back and forth or you will knock the breading off.',
        commonMistake: 'Slicing the second it leaves the hot oil — all the flavorful juices will pour out.',
        moveOnWhen: 'Cutlets are rested 4 mins and sliced into batons.',
        quickInstructions: 'Rest 4 mins on rack; slice into 2cm batons with firm downward cuts keeping shape.'
      },
      {
        step: 4,
        title: 'ASSEMBLE WITH SHREDDED CABBAGE & SAUCE',
        whatYouNeed: ['Sliced cutlet', 'Crisp shredded cabbage', 'Tonkatsu sauce', 'Karashi mustard', 'Crushed sesame seeds', 'Lemon wedge'],
        description: 'Place a large, airy mound of crisp shredded cabbage on the plate. Slide the sliced tonkatsu cutlet onto the plate, leaning against the cabbage. Drizzle dark tonkatsu sauce in zigzags across the meat. Place a dollop of spicy karashi mustard on the rim, sprinkle with crushed sesame seeds, and add a lemon wedge. Serve immediately.',
        howToDoIt: 'The sweet, crisp, digestive raw cabbage cuts through the rich pork fat, while the acidic tonkatsu sauce balances the crunchy savory meat.',
        heat: 'Off',
        heatDescription: 'Plating.',
        duration: 2,
        visualCues: 'Stunning contrast: golden-amber crunchy cutlet against a fluffy mountain of green cabbage, dark brown sauce, and yellow mustard.',
        hear: 'None',
        smell: 'Fruity tonkatsu sauce, spicy mustard, and hot pork cutlet.',
        textureCheck: 'Crunchy cutlet, refreshing crisp cabbage, tender pork.',
        whatShouldThisLookLike: 'Iconic Tokyo Tonkatsu Teishoku plate.',
        tip: 'Dip a piece of tonkatsu into crushed sesame and a dab of karashi mustard for the ultimate flavor bite.',
        commonMistake: 'Drowning the entire cutlet in sauce minutes ahead — drizzle right before eating to preserve crunch.',
        moveOnWhen: 'Plate is assembled and served.',
        quickInstructions: 'Plate cutlet alongside mountain of shredded cabbage; drizzle tonkatsu sauce, add karashi mustard and sesame.'
      }
    ],
    commonMistakes: [
      { mistake: 'Breading separated and fell off meat while slicing.', remedy: 'You didn\'t tap off excess flour or didn\'t press panko firmly. Add 1 tsp oil to egg and press panko with palms.' },
      { mistake: 'Pork was dry and tough.', remedy: 'Over-cooked beyond 65°C or used lean loin without resting. Rest 4 minutes to retain internal juices.' }
    ],
    troubleshooting: [
      {
        problem: 'Pork cutlet curled into a bowl in the oil',
        whatHappened: 'Connective tissue around the fat cap contracted.',
        whyItHappened: 'Forgot to slit the fat cap.',
        whatToDoNow: 'Press down gently with tongs in the oil to flatten as much as possible.',
        howToPrevent: 'Always make 4–5 vertical knife cuts through the fat rim before breading.'
      }
    ],
    substitutions: [
      { original: 'Pork loin (Rosu)', substitute: 'Pork tenderloin (Hire Katsu) or Chicken breast (Chicken Katsu)', notes: 'Hire katsu is leaner, melt-in-the-mouth tender, and very popular.' }
    ],
    safetyNotes: [
      'Pork must reach an internal temperature of 63°C (145°F) with a 3-minute rest.'
    ],
    servingGuide: {
      restingTime: '4 minutes on wire rack.',
      garnishing: 'Tonkatsu sauce drizzle, karashi mustard, crushed sesame, lemon wedge.',
      plating: 'Serve on a wide ceramic platter with a metal wire insert under the cutlet.',
      temperature: 'Hot and crunchy.',
      accompaniments: 'Mountain of ice-cold shredded cabbage, steamed white rice, tonjiru (pork miso soup), and Japanese pickles.'
    }
  },

  // 9. YAKITORI
  {
    id: 'yakitori',
    name: 'Authentic Tokyo Yakitori Negima (Skewered Chicken & Scallions)',
    cuisine: 'Japanese',
    region: 'Japan (Tokyo)',
    servings: 4,
    prepTime: 25,
    cookTime: 15,
    difficulty: 'Medium',
    overview: {
      summary: 'The soul of Japanese izakaya dining: succulent bite-sized cubes of chicken thigh and sweet Tokyo scallion batons threaded alternately onto bamboo skewers, grilled over intense radiant heat, dipped repeatedly into a sweet, savory, glossy tare glaze (reduced soy sauce, mirin, sake, and chicken juices), and caramelized to blistered, smoky perfection.',
      appearance: 'Glossy, caramel-glazed skewers with charred blister marks on juicy chicken chunks, alternating with sweet, blackened scallion batons, served hot over a ceramic platter with shichimi pepper.',
      texture: 'Crispy, caramelized, smoky exterior giving way to extraordinarily juicy, tender chicken and sweet, melting scallion centers.',
      flavor: 'Irresistible balance of savory umami soy, sweet mirin glaze, smoky charcoal char, and allium sweetness.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Cast iron grill pan or charcoal konro grill / oven broiler', purpose: 'Achieves intense radiant heat to caramelize tare glaze rapidly without drying meat.' },
      { name: 'Flat bamboo skewers (Teppo gushi / gun skewers)', purpose: 'Flat shape prevents chicken cubes from spinning when turned over the grill.' },
      { name: 'Basting brush or tall dipping jar for tare', purpose: 'For submerging skewers in tare glaze during grilling.' }
    ],
    beforeYouStart: [
      { task: 'Soak bamboo skewers in cold water for 30 minutes to prevent burning.', durationMinutes: 30 },
      { task: 'Simmer 100ml soy sauce, 100ml mirin, 50ml sake, and 2 tbsp sugar for 12 minutes until reduced by half into a glossy tare glaze.', durationMinutes: 15 },
      { task: 'Cut 500g chicken thighs into uniform 2.5cm cubes; cut Tokyo negi/scallions into 3cm batons.', durationMinutes: 8 }
    ],
    ingredientPrepGuide: [
      { item: 'Threading Negima Style', technique: 'Thread chicken cubes and scallion batons in alternating pattern: chicken, scallion, chicken, scallion, chicken (5 pieces per skewer). Thread through the center so the skewer is balanced.' },
      { item: 'The 3-Stage Tare Dip', technique: 'Grill skewers dry first until 70% cooked and lightly charred. Dip into the tare glaze, return to grill for 1 minute; dip a second time and grill for 1 minute; finish with a final third dip right before taking off the heat to create a lustrous, lacquered caramel shell.' }
    ],
    essentialIngredients: [
      { name: 'Boneless skinless chicken thighs', prep: 'cut into 2.5cm cubes', amount: '500g', metric: '500g', imperial: '1.1 lbs', common: '4 large thighs' },
      { name: 'Tokyo Negi or thick scallions', prep: 'cut into 3cm batons', amount: '4 stalks', metric: '150g', imperial: '5.3 oz', common: '2 cups batons' },
      { name: 'Japanese Soy Sauce (Shoyu)', prep: 'for tare glaze', amount: '100ml', metric: '100ml', imperial: '3.4 fl oz', common: '1/2 cup' },
      { name: 'Mirin (sweet rice wine)', prep: 'for tare glaze', amount: '100ml', metric: '100ml', imperial: '3.4 fl oz', common: '1/2 cup' },
      { name: 'Sake (Japanese rice wine)', prep: 'for tare glaze', amount: '50ml', metric: '50ml', imperial: '1.7 fl oz', common: '1/4 cup' },
      { name: 'Granulated sugar', prep: 'for tare glaze', amount: '2 tbsp', metric: '25g', imperial: '0.9 oz', common: '2 tbsp' },
      { name: 'Vegetable oil', prep: 'lightly greased on grill pan', amount: '1 tbsp', metric: '15ml', imperial: '0.5 fl oz', common: '1 tbsp' },
      { name: 'Shichimi Togarashi (7-spice powder)', prep: 'for table dusting', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Sansho pepper (Japanese mountain pepper)', prep: 'optional citrusy tongue-tingling spice', amount: '1/2 tsp', metric: '1.5g', imperial: '0.05 oz', common: '1/2 tsp' }
    ],
    optionalIngredients: [
      { name: 'Chicken skin or liver skewers', prep: 'for authentic izakaya assortment', amount: '100g', metric: '100g', imperial: '3.5 oz', common: 'optional', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'REDUCE SWEET SAVORY TARE GLAZE',
        whatYouNeed: ['100ml soy sauce', '100ml mirin', '50ml sake', '2 tbsp sugar', 'Small saucepan'],
        description: 'In a small saucepan, combine soy sauce, mirin, sake, and sugar. Bring to a boil over medium heat, stirring to dissolve sugar. Lower heat to medium-low and simmer uncovered for 10–12 minutes until the liquid reduces by half, turns glossy, and coats the back of a spoon in a light syrup. Pour into a tall, narrow heatproof jar or dipping container.',
        howToDoIt: 'Simmering evaporates alcohol and water while caramelizing sugars and soy amino acids, producing a rich, sticky glaze (tare) that clings to grilled meat.',
        heat: 'Medium-Low Heat',
        heatDescription: 'Gentle bubbling reduction.',
        duration: 12,
        visualCues: 'Liquid darkens into a glossy, dark amber-black syrup that clings to a dipped spoon.',
        hear: 'Soft, gentle bubbling.',
        smell: 'Intense sweet soy sauce, toasted caramel, and sake florals.',
        textureCheck: 'Syrupy, glossy glaze.',
        whatShouldThisLookLike: 'Rich, dark, glossy Yakitori Tare glaze.',
        tip: 'Do not reduce too far into candy syrup; it will thicken further as it cools.',
        commonMistake: 'Using un-reduced soy sauce — watery sauce runs off the skewers into the fire without glazing.',
        moveOnWhen: 'Tare is reduced by half, glossy, and poured into a dipping jar.',
        quickInstructions: 'Simmer soy sauce, mirin, sake, and sugar for 10-12 mins until reduced by half into glossy glaze.'
      },
      {
        step: 2,
        title: 'THREAD SKEWERS (NEGIMA PATTERN)',
        whatYouNeed: ['Chicken thigh cubes', 'Scallion batons', 'Soaked flat bamboo skewers'],
        description: 'Thread skewers tightly in alternating sequence: chicken cube, scallion baton, chicken cube, scallion baton, chicken cube (3 pieces of chicken and 2 pieces of scallion per skewer). Press ingredients snugly together so no bare wood is exposed between pieces. Repeat for 8 skewers.',
        howToDoIt: 'Snug threading protects the bamboo skewer from direct heat and ensures chicken pieces cook evenly without drying out individual edges.',
        heat: 'Off',
        heatDescription: 'Threading station.',
        duration: 8,
        visualCues: 'Uniform, tightly packed skewers with alternating pink chicken cubes and green/white scallions.',
        hear: 'None.',
        smell: 'Fresh scallions and chicken.',
        textureCheck: 'Firm, balanced, snugly threaded skewers.',
        whatShouldThisLookLike: 'Eight neat, identical Yakitori Negima skewers.',
        tip: 'Wipe bamboo handles clean so they don\'t scorch on the grill.',
        commonMistake: 'Leaving large gaps between chicken and scallions — the wood skewer will catch fire.',
        moveOnWhen: 'All 8 skewers are threaded.',
        quickInstructions: 'Thread soaked skewers in alternating pattern: chicken, scallion, chicken, scallion, chicken (tightly packed).'
      },
      {
        step: 3,
        title: 'SEAR DRY ON HIGH GRILL TO 70% COOKED',
        whatYouNeed: ['Threaded skewers', 'Cast iron grill pan on High heat or preheated broiler', '1 tbsp oil'],
        description: 'Lightly grease your grill pan and heat over high heat until smoking hot. Place skewers across the grill without crowding. Cook dry for 3 minutes until deep charred grill marks form on the bottom. Flip over and cook for 2.5 minutes on the second side. The chicken should be about 70% cooked through before applying glaze.',
        howToDoIt: 'Grilling dry first develops deep Maillard charring and renders excess poultry fat before sugary glaze is introduced.',
        heat: 'High Heat',
        heatDescription: 'Sizzling aggressively; visible grill smoke.',
        duration: 6,
        visualCues: 'Chicken turns opaque with distinct black-brown char marks; scallions blister and soften.',
        hear: 'Loud, vigorous crackling and sizzling.',
        smell: 'Smoky grilled chicken and roasted scallion aroma.',
        textureCheck: 'Chicken is firming up on surface.',
        whatShouldThisLookLike: 'Lightly charred, unglazed chicken skewers.',
        tip: 'Do not glaze with tare yet! Glaze applied too early will burn black before the chicken cooks inside.',
        commonMistake: 'Brushing tare on raw chicken — the sugar burns in 60 seconds, leaving raw meat inside.',
        moveOnWhen: 'Chicken is charred on both sides and 70% cooked.',
        quickInstructions: 'Sear dry on high-heat grill 3 mins per side until charred marks develop (no tare yet!).'
      },
      {
        step: 4,
        title: 'THE 3-STAGE TARE GLAZE DUNK & BLISTER',
        whatYouNeed: ['Partially cooked skewers', 'Jar of warm tare glaze', 'Tongs', 'Shichimi togarashi'],
        description: 'Dip each skewer completely into the tall jar of tare glaze (or brush liberally on all sides). Return to the grill for 60 seconds. Dip a second time into the tare and grill for another 60 seconds until the glaze caramelizes and bubbles with dark blistered spots. Dip a final third time for 5 seconds right before removing to create a lustrous, sticky lacquer coat. Transfer to a platter, dust with shichimi togarashi, and rest 2 minutes.',
        howToDoIt: 'Multi-stage dipping layers caramelized sugar and savory soy reduction onto the hot chicken, building a rich, lacquered, smoky crust that locks in juiciness.',
        heat: 'Medium-High Heat',
        heatDescription: 'Lively bubbling glaze.',
        duration: 3,
        visualCues: 'Deep mahogany-amber glossy lacquer coating; tare bubbles and caramelizes into charred blister spots; chicken is 75°C internally.',
        hear: 'Hissing and spitting as sugary tare caramelizes on hot iron.',
        smell: 'Irresistible izakaya fragrance: sweet caramelized soy, smoky chicken, and roasted scallions.',
        textureCheck: 'Sticky, caramelized exterior with extraordinarily tender, juicy chicken.',
        whatShouldThisLookLike: 'Glistening, mahogany-glazed, blistered Yakitori skewers.',
        tip: 'Keep the skewers moving during the tare stage so the sugar caramelizes without burning black.',
        commonMistake: 'Leaving skewers glazed on high heat for 3+ minutes — sugar will turn into bitter burnt carbon.',
        moveOnWhen: 'Skewers are glazed, blistered, and cooked through (75°C internally).',
        quickInstructions: 'Dip skewer in tare, grill 60s; dip second time, grill 60s until blistered; dip third time and serve hot.'
      }
    ],
    commonMistakes: [
      { mistake: 'Chicken was dry and burnt.', remedy: 'You used chicken breast instead of thighs or glazed too early. Always use chicken thighs and glaze only in the final 2 minutes.' },
      { mistake: 'Glaze was watery and washed off.', remedy: 'Tare was under-reduced. Simmer tare until reduced by half into a glossy syrup that coats a spoon.' }
    ],
    troubleshooting: [
      {
        problem: 'Bamboo skewers are catching fire on the grill',
        whatHappened: 'Skewers were not soaked in water or exposed ends caught flame.',
        whyItHappened: 'Dry wood under high heat.',
        whatToDoNow: 'Cover exposed wooden handles with a folded strip of aluminum foil on the grill.',
        howToPrevent: 'Always soak bamboo skewers in cold water for at least 30 minutes.'
      }
    ],
    substitutions: [
      { original: 'Chicken thighs', substitute: 'Chicken meatballs (Tsukune) or King Oyster mushrooms', notes: 'Mushroom yakitori glazed in tare is an incredible vegan alternative.' }
    ],
    safetyNotes: [
      'Chicken must reach an internal temperature of 75°C (167°F).'
    ],
    servingGuide: {
      restingTime: '2 minutes.',
      garnishing: 'Sprinkle with shichimi togarashi (7-spice) and sansho pepper.',
      plating: 'Arrange parallel on an elongated ceramic yakitori platter.',
      temperature: 'Piping hot off the grill.',
      accompaniments: 'Steamed edamame with sea salt, chilled draft beer, and cold sake.'
    }
  }
];
