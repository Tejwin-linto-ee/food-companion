// Americas & Global: Mexican (4) + French (8) = 12 dishes
module.exports = [
  // 9. MOLE (Authentic Mole Poblano with Dark Chocolate & Dried Chiles)
  {
    id: 'mole',
    name: 'Authentic Mole Poblano (Traditional 20-Ingredient Mexican Dark Mole)',
    cuisine: 'Mexican',
    region: 'Central Mexico (Puebla)',
    servings: 6,
    prepTime: 40,
    cookTime: 60,
    difficulty: 'Expert',
    overview: {
      summary: 'The undisputed crown jewel of Mexican culinary art from the convents of Puebla: a masterwork sauce harmonizing three dried chiles (Ancho, Pasilla, and Mulato) with toasted pumpkin seeds, sesame seeds, almonds, raisins, Mexican canela, plantain, charred tortillas, roasted tomatoes, aromatics, and Mexican dark stone-ground chocolate (Ibarra/Abuelita). Simmered with rich chicken broth into a velvet, dark mahogany sauce draped over tender poached chicken.',
      appearance: 'A glossy, velvet-smooth, dark mahogany-black sauce generously draped over chicken pieces, crowned with toasted golden sesame seeds.',
      texture: 'Thick, luxurious, and velvet-smooth sauce with a heavy coating body that clings seductively to the meat.',
      flavor: 'An intricate symphony: deep earthy dried chiles, subtle roasty bitter chocolate, sweet raisins and plantains, warm cinnamon, and rich nutty sesame.',
      restingTimeMinutes: 15
    },
    equipment: [
      { name: 'High-speed blender', purpose: 'To pulverize seeds, nuts, chiles, and dried fruit into a mirror-smooth mole paste.' },
      { name: 'Heavy Dutch oven or clay Cazuela', purpose: 'To "fry" the pureed mole paste in lard and simmer without scorching.' },
      { name: 'Fine mesh sieve', purpose: 'To strain the sauce into silky velvet perfection.' }
    ],
    beforeYouStart: [
      { task: 'Stem, seed, and devein 4 Ancho chiles, 4 Pasilla chiles, and 4 Mulato chiles (reserve 1 tbsp of seeds for toasting).', durationMinutes: 10 },
      { task: 'Toast dried chiles in dry hot skillet for 20 seconds per side until fragrant (do not burn!), then soak in hot broth for 20 minutes.', durationMinutes: 20 },
      { task: 'Fry in lard: 1/4 cup almonds, 1/4 cup pumpkin seeds, 1/4 cup raisins, 1 sliced ripe plantain, and 1 stale corn tortilla until golden.', durationMinutes: 10 }
    ],
    ingredientPrepGuide: [
      { item: 'Toasting Chiles (No Burning!)', technique: 'Press dried chiles flat against a hot dry skillet for strictly 15-20 seconds per side until they change color slightly and release a fruity aroma. If they blacken or smoke, throw them away — burnt chiles impart an irrecoverable bitter acrid flavor to the entire mole!' },
      { item: 'Frying the Mole (Freír el Mole)', technique: 'Pouring the pureed mole paste into sizzling hot lard or oil spatters dramatically. Stir constantly over medium heat for 10 minutes until the sauce darkens from red-brown to deep mahogany and oil separates at the edges.' }
    ],
    essentialIngredients: [
      { name: 'Dried Ancho chiles', prep: 'stemmed, seeded, toasted, rehydrated', amount: '4 chiles', metric: '60g', imperial: '2.1 oz', common: '4 chiles' },
      { name: 'Dried Pasilla chiles', prep: 'stemmed, seeded, toasted, rehydrated', amount: '4 chiles', metric: '50g', imperial: '1.8 oz', common: '4 chiles' },
      { name: 'Dried Mulato chiles', prep: 'stemmed, seeded, toasted, rehydrated', amount: '4 chiles', metric: '60g', imperial: '2.1 oz', common: '4 chiles' },
      { name: 'Ripe Roma tomatoes & Tomatillos', prep: 'charred in skillet', amount: '3 tomatoes + 2 tomatillos', metric: '300g', imperial: '10.5 oz', common: '5 pieces' },
      { name: 'White onion & Garlic cloves', prep: 'charred until soft', amount: '1 onion + 5 cloves garlic', metric: '150g', imperial: '5.3 oz', common: 'mixed' },
      { name: 'Raw almonds & Raw pepitas (pumpkin seeds)', prep: 'toasted in lard', amount: '1/4 cup each', metric: '70g', imperial: '2.5 oz', common: '1/2 cup total' },
      { name: 'White sesame seeds', prep: 'toasted golden', amount: '1/4 cup', metric: '35g', imperial: '1.2 oz', common: '1/4 cup' },
      { name: 'Raisins', prep: 'fried plump in lard', amount: '1/4 cup', metric: '40g', imperial: '1.4 oz', common: '1/4 cup' },
      { name: 'Ripe sweet plantain', prep: 'sliced and fried golden', amount: '1/2 plantain', metric: '80g', imperial: '2.8 oz', common: '1/2 plantain' },
      { name: 'Corn tortilla', prep: 'stale, fried dark golden', amount: '1 tortilla', metric: '30g', imperial: '1 oz', common: '1 tortilla' },
      { name: 'Mexican stone-ground chocolate (Ibarra / Abuelita)', prep: 'chopped', amount: '80g', metric: '80g', imperial: '2.8 oz', common: '1 round tablet' },
      { name: 'Mexican Canela (Cinnamon), Cloves, Allspice', prep: 'ground spices', amount: '1 stick canela + 3 cloves + 3 allspice', metric: '6g', imperial: '0.2 oz', common: 'spices' },
      { name: 'Rich chicken broth', prep: 'hot, unsalted', amount: '4 cups', metric: '1 liter', imperial: '34 fl oz', common: '4 cups' },
      { name: 'Pure pork lard or vegetable oil', prep: 'for searing mole', amount: '3 tbsp', metric: '45ml', imperial: '1.5 fl oz', common: '3 tbsp' },
      { name: 'Poached chicken pieces (legs & thighs)', prep: 'cooked warm', amount: '6 pieces', metric: '800g', imperial: '1.8 lbs', common: '6 pieces' },
      { name: 'Fine sea salt', prep: 'seasoning', amount: '2 tsp', metric: '12g', imperial: '0.4 oz', common: '2 tsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'TOAST CHILES, NUTS, SEEDS & CHAR AROMATICS',
        whatYouNeed: ['Dried chiles', 'Nuts & seeds', 'Raisins', 'Plantain', 'Tortilla', 'Tomatoes & Onion', 'Skillet with 2 tbsp lard'],
        description: 'Toast stemmed dried chiles in a dry skillet for 20 seconds per side until fragrant; transfer to a bowl of hot chicken broth to soak for 20 minutes. In the same skillet with 2 tbsp lard, fry almonds, pepitas, raisins, sliced plantain, and stale tortilla until golden-brown. In a dry pan, char tomatoes, tomatillos, onion, and garlic until blackened in spots.',
        howToDoIt: 'Frying each ingredient individually caramelizes its natural sugars and releases essential oils that build mole\'s legendary complex flavor layers.',
        heat: 'Medium Heat',
        duration: 20,
        visualCues: 'Nuts turn golden; raisins puff like balloons; plantain caramelizes; chiles soften in hot broth.',
        smell: 'Incredible roasted aromas: toasted chiles, sweet fried plantains, and charred garlic.',
        textureCheck: 'Plump softened ingredients ready for blending.',
        whatShouldThisLookLike: 'Bowls of toasted seeds, fried fruit, and softened chiles ready to puree.',
        tip: 'Never rush the toasting — gentle heat prevents burning while coaxing out maximum nutty oils.',
        commonMistake: 'Burning the chiles, which ruins the entire pot with an acrid bitter taste.',
        moveOnWhen: 'All components are toasted, charred, and softened.',
        quickInstructions: 'Toast chiles 20 secs, soak in hot broth; fry nuts, raisins, plantain, and tortilla in lard; char tomatoes and onion.'
      },
      {
        step: 2,
        title: 'BLEND IN BATCHES INTO ULTRA-SMOOTH PASTE',
        whatYouNeed: ['High-speed blender', 'Soaked chiles & broth', 'Fried nuts, seeds, plantain', 'Charred vegetables', 'Spices'],
        description: 'Working in two batches, place the soaked chiles with 2 cups of the soaking broth, fried nuts, seeds, raisins, plantain, fried tortilla, charred tomatoes, onion, garlic, canela, cloves, and allspice into the blender. Blend on high speed for a full 3 to 4 minutes per batch until velvety smooth. Pour through a fine mesh strainer into a large bowl, pressing with a ladle.',
        howToDoIt: 'High-speed blending emulsifies the natural plant oils from seeds and nuts into a thick, uniform paste.',
        heat: 'No Heat',
        duration: 10,
        visualCues: 'A thick, glossy, reddish-brown satin paste with zero visible seeds or fibers.',
        smell: 'Complex, intoxicating blend of chiles, sweet fruits, and warm cinnamon.',
        textureCheck: 'Velvet smooth like melted chocolate.',
        whatShouldThisLookLike: 'Deep reddish-brown satin puree.',
        tip: 'Pass the puree through a fine sieve to catch any stubborn chile skins or seed fragments.',
        commonMistake: 'Under-blending, resulting in a gritty, grainy mole sauce.',
        moveOnWhen: 'Puree is silky smooth and strained.',
        quickInstructions: 'Blend soaked chiles, broth, fried nuts, fruits, charred vegetables, and spices for 3-4 mins; strain through sieve.'
      },
      {
        step: 3,
        title: 'SEAR THE MOLE & SIMMER WITH CHOCOLATE',
        whatYouNeed: ['Heavy Dutch oven', '1 tbsp lard', 'Strained mole paste', 'Remaining 2 cups broth', 'Mexican chocolate', 'Salt'],
        description: 'Heat 1 tbsp lard in a heavy Dutch oven over medium heat until shimmering. Carefully pour in the strained mole paste (it will splatter vigorously!). Cook, stirring constantly with a wooden paddle, for 8 to 10 minutes until the paste thickens, darkens to deep mahogany, and oil droplets glisten on the surface. Slowly whisk in the remaining 2 cups chicken broth. Add chopped Mexican chocolate and 2 tsp salt. Simmer over low heat, stirring frequently, for 30 minutes until thick, glossy, and luxurious.',
        howToDoIt: 'Frying the mole paste ("searing") deepens the chile notes, while melting the chocolate binds the bitter, sweet, and spicy elements together.',
        heat: 'Medium to Low Simmer',
        duration: 40,
        visualCues: 'Sauce deepens from reddish-brown to dark mahogany-black; glossy surface develops a mirror sheen.',
        hear: 'Heavy, slow bubbling "plop-plop" sound as the thick sauce simmers.',
        smell: 'Heady aroma of dark roasted chocolate, smoky chiles, and sweet spices.',
        textureCheck: 'Thick velvet sauce that coats the back of a wooden spoon and doesn\'t run.',
        whatShouldThisLookLike: 'Luxurious, dark mahogany velvet mole.',
        tip: 'Stir frequently along the bottom of the pot to prevent the heavy nuts and seeds from sticking and scorching.',
        commonMistake: 'Adding too much chocolate — Mole Poblano is NOT chocolate syrup! Chocolate is a balancing agent, not the primary flavor.',
        moveOnWhen: 'Sauce is thick, glossy, and chocolate is fully incorporated.',
        quickInstructions: 'Sear mole paste in hot lard 8 mins until darkened; add broth, chocolate, and salt; simmer on low 30 mins.'
      },
      {
        step: 4,
        title: 'DRAPE OVER CHICKEN & GARNISH WITH SESAME',
        whatYouNeed: ['Warm poached chicken pieces', 'Hot Mole Poblano', 'Toasted white sesame seeds', 'Platter'],
        description: 'Arrange warm poached chicken pieces on a large serving platter. Generously ladle the piping-hot Mole Poblano over the chicken until completely blanketed in dark velvet sauce. Scatter toasted white sesame seeds across the top. Serve immediately with warm corn tortillas and Mexican red rice.',
        howToDoIt: 'Traditional Mexican mole is draped over meat rather than stewed inside it, keeping the meat moist and tender while allowing the sauce to shine.',
        heat: 'No Heat',
        duration: 3,
        visualCues: 'Glistening, dark chocolate-colored sauce blanketing tender chicken, decorated with sparkling ivory sesame seeds.',
        smell: 'Rich roasted chiles, cocoa, and toasted sesame.',
        textureCheck: 'Ultra-tender poached chicken bathed in luxurious velvet sauce.',
        whatShouldThisLookLike: 'The regal masterpiece of Mexican cuisine.',
        tip: 'Mole tastes even better the next day as the 20 ingredients continue to marry and harmonize in the refrigerator.',
        commonMistake: 'Skimping on sauce — Mexican diners expect plenty of mole to wipe clean with warm tortillas!',
        moveOnWhen: 'Sauce is ladled, garnished, and served.',
        quickInstructions: 'Arrange warm chicken on platter, ladle hot mole generously over top, garnish with toasted sesame seeds.'
      }
    ],
    commonMistakes: [
      { mistake: 'Burning dried chiles', remedy: 'Toast chiles for only 20 seconds. Burnt chiles make the entire pot horribly bitter.' },
      { mistake: 'Too much sugar or chocolate', remedy: 'Mole should taste savory, earthy, and mildly spicy with cocoa undertones — never sweet like dessert sauce.' }
    ],
    troubleshooting: [
      {
        problem: 'Mole tastes slightly bitter',
        whatHappened: 'Chiles were toasted a few seconds too long.',
        whyItHappened: 'Excess tannin scorch.',
        whatToDoNow: 'Whisk in 1 tablespoon of brown sugar or piloncillo and 1 extra ounce of Mexican chocolate to round out bitterness.',
        howToPrevent: 'Toast chiles over medium-low heat and remove the second they become aromatic.'
      }
    ],
    substitutions: [
      { original: 'Mulato chiles', substitute: 'Extra Ancho chiles', notes: 'Ancho provides similar sweet raisin-chile depth.' },
      { original: 'Mexican stone-ground chocolate', substitute: '70% dark chocolate with 1/2 tsp ground cinnamon', notes: 'Provides rich bittersweet balance.' }
    ],
    safetyNotes: ['Splattering mole paste is very hot — wear an apron and stir with a long-handled wooden spoon.'],
    servingGuide: {
      restingTime: 'Rest 10 minutes before serving.',
      temperature: 'Piping hot.',
      garnishing: 'Toasted white sesame seeds.',
      accompaniments: 'Warm corn tortillas, Mexican red rice (Arroz Rojo), and refried black beans.'
    }
  },

  // 10. CEVICHE (Authentic Mexican Ceviche de Pescado)
  {
    id: 'ceviche',
    name: 'Authentic Mexican Fish Ceviche (Fresh Red Snapper Cured in Lime Juice)',
    cuisine: 'Mexican',
    region: 'Coastal Mexico (Veracruz / Sinaloa)',
    servings: 4,
    prepTime: 25,
    cookTime: 0,
    difficulty: 'Easy',
    overview: {
      summary: 'The ultimate coastal Mexican refreshment: ultra-fresh wild sea bass or red snapper diced into pristine cubes, cured in freshly squeezed lime juice until the citric acid gently denatures the fish proteins into firm, pearlescent white bites. Tossed with diced crisp cucumbers, Roma tomatoes, red onions, minced serrano chiles, fresh cilantro, and extra virgin olive oil, served over crisp corn tostadas with sliced avocado.',
      appearance: 'A vibrant, colorful mountain of firm pearlescent white fish cubes mixed with bright red tomatoes, emerald cucumbers, purple onions, and green cilantro, crowning a golden tostada.',
      texture: 'Firm, tender, bouncy fish with a clean delicate chew, paired with the crisp crunch of raw vegetables and the shatter of a fried corn tostada.',
      flavor: 'Electric, bright citrus acidity from pure lime juice, sweet clean ocean fish, fiery serrano kick, and cooling herbal cilantro.',
      restingTimeMinutes: 20
    },
    equipment: [
      { name: 'Glass or stainless steel mixing bowl', purpose: 'Essential! Never use reactive aluminum or copper bowls with high-acid lime juice.' },
      { name: 'Sharp chef knife', purpose: 'To dice fresh fish cleanly into sharp 1cm cubes without tearing delicate flesh.' }
    ],
    beforeYouStart: [
      { task: 'Obtain 500g sashimi-grade wild fish (Red Snapper, Sea Bass, or Halibut) kept ice-cold.', durationMinutes: 5 },
      { task: 'Freshly squeeze 1/2 cup (120ml) fresh lime juice through a strainer.', durationMinutes: 5 },
      { task: 'Dice 1 Persian cucumber, 2 Roma tomatoes, 1/2 red onion, and 1 serrano chile.', durationMinutes: 8 }
    ],
    ingredientPrepGuide: [
      { item: 'Cold Denaturation (The Lime "Cooking" Window)', technique: 'Citric acid cures fish by uncoiling protein coils (denaturing), turning translucent raw fish into opaque, firm white bites. The ideal window is 20 to 25 minutes! Under 15 minutes and the center is still raw; over 1 hour and the acid breaks down muscle fibers into tough, chalky, rubbery fish.' },
      { item: 'Ice-Cold Assembly', technique: 'Always keep the fish over a bowl of ice while dicing and curing. Warm temperatures degrade delicate fish enzymes and compromise texture and freshness.' }
    ],
    essentialIngredients: [
      { name: 'Fresh wild fish (Red Snapper, Sea Bass, or Corvina)', prep: 'skinned, boned, cut into 1cm cubes', amount: '500g', metric: '500g', imperial: '1.1 lbs', common: '500g' },
      { name: 'Freshly squeezed lime juice', prep: 'fresh (approx. 6-8 limes)', amount: '1/2 cup', metric: '120ml', imperial: '4 fl oz', common: '1/2 cup' },
      { name: 'Red onion', prep: 'finely diced into 5mm cubes', amount: '1/2 medium', metric: '60g', imperial: '2.1 oz', common: '1/2 onion' },
      { name: 'Persian cucumber', prep: 'peeled, seeded, and finely diced', amount: '1 cucumber', metric: '100g', imperial: '3.5 oz', common: '1 cucumber' },
      { name: 'Ripe Roma tomatoes', prep: 'seeded and diced into 5mm cubes', amount: '2 tomatoes', metric: '150g', imperial: '5.3 oz', common: '2 tomatoes' },
      { name: 'Fresh serrano chiles', prep: 'finely minced with seeds', amount: '1 to 2 chiles', metric: '15g', imperial: '0.5 oz', common: '1-2 chiles' },
      { name: 'Fresh cilantro leaves', prep: 'finely chopped', amount: '1/2 cup packed', metric: '20g', imperial: '0.7 oz', common: '1/2 cup' },
      { name: 'Extra virgin olive oil', prep: 'smooths acidity', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp' },
      { name: 'Fine sea salt & Mexican oregano', prep: 'seasoning', amount: '1 tsp salt + 1/2 tsp crushed oregano', metric: '7g', imperial: '0.25 oz', common: 'mixed' },
      { name: 'Crisp corn tostadas or tortilla chips', prep: 'for serving', amount: '8 tostadas', metric: '8 pieces', imperial: '8 pieces', common: '8 tostadas' },
      { name: 'Ripe Hass avocado', prep: 'sliced for garnish', amount: '1 avocado', metric: '150g', imperial: '5.3 oz', common: '1 avocado' }
    ],
    steps: [
      {
        step: 1,
        title: 'DICE COLD FISH & SUBMERGE IN LIME JUICE',
        whatYouNeed: ['500g fresh fish', '1/2 cup fresh lime juice', 'Glass bowl', '1/2 tsp salt'],
        description: 'Cut chilled fresh fish fillets into uniform 1cm (1/2-inch) cubes. Place fish cubes in a glass bowl. Pour fresh lime juice over the fish and sprinkle with 1/2 tsp salt. Stir gently so every cube is submerged in lime juice. Cover with plastic wrap and refrigerate for strictly 20 to 25 minutes.',
        howToDoIt: 'The citric acid penetrates the fish cubes from the outside inward, turning them opaque white.',
        heat: 'No Heat (Chilled in Refrigerator)',
        duration: 25,
        visualCues: 'Fish transforms from translucent, glossy pink-gray to opaque, firm, pearlescent white.',
        smell: 'Clean, fresh ocean breeze and bright tangy citrus.',
        textureCheck: 'Firm and springy to touch — no longer squishy or jelly-like.',
        whatShouldThisLookLike: 'Opaque white fish cubes sitting in clear lime juice.',
        tip: 'Check at 20 minutes: cut one cube in half. If the center has just turned opaque white with a faint translucent core, it is done perfectly!',
        commonMistake: 'Curing for 4 hours in the fridge, turning the fish rubbery, chalky, and disintegrating.',
        moveOnWhen: 'Fish cubes are opaque white throughout.',
        quickInstructions: 'Dice cold fish into 1cm cubes, submerge in fresh lime juice with 1/2 tsp salt; chill in fridge 20-25 mins.'
      },
      {
        step: 2,
        title: 'DRAIN EXCESS LIME JUICE (LEAVING JUST ENOUGH)',
        whatYouNeed: ['Cured fish in bowl'],
        description: 'Tilt the bowl and pour off about half of the accumulated cloudy lime juice (or gently drain through a colander, reserving 3 tablespoons of juice).',
        howToDoIt: 'Leaving just 3 tablespoons of lime juice keeps the ceviche juicy and zesty without drowning the other ingredients in sour liquid.',
        heat: 'No Heat',
        duration: 2,
        visualCues: 'Moist, glossy white fish cubes with a shallow pool of flavorful juice.',
        textureCheck: 'Firm cured fish.',
        whatShouldThisLookLike: 'Juicy cured fish ready for vegetables.',
        tip: 'The drained lime juice mixed with fish essences is prized as "Leche de Tigre" (Tiger\'s Milk) — drink it as a revitalizing shot!',
        commonMistake: 'Leaving all the lime juice in the bowl, creating a sour soup that wilts the fresh vegetables.',
        moveOnWhen: 'Half the excess liquid is drained.',
        quickInstructions: 'Pour off half of the lime juice, leaving 3 tablespoons of liquid with the cured fish.'
      },
      {
        step: 3,
        title: 'TOSS WITH CRUNCHY VEGETABLES & OLIVE OIL',
        whatYouNeed: ['Diced cucumber', 'Diced tomatoes', 'Diced red onion', 'Minced serrano', 'Chopped cilantro', 'Olive oil', 'Mexican oregano', '1/2 tsp salt'],
        description: 'Add diced cucumber, tomatoes, red onion, minced serrano, and cilantro to the cured fish. Drizzle with 2 tablespoons of extra virgin olive oil and sprinkle with crushed Mexican oregano and remaining 1/2 tsp salt. Toss gently with a spoon until evenly combined and glistening.',
        howToDoIt: 'A drizzle of olive oil coats the fish and rounds out the sharp lime acidity with smooth Mediterranean-Mexican richness.',
        heat: 'No Heat',
        duration: 3,
        visualCues: 'A dazzling rainbow mixture of white fish, ruby tomatoes, purple onions, and green herbs and chiles.',
        smell: 'Zesty lime, fragrant cilantro, olive oil, and sweet oregano.',
        textureCheck: 'Juicy, crisp, and refreshing.',
        whatShouldThisLookLike: 'A vibrant Mexican ceviche salad.',
        tip: 'Taste for seasoning: add an extra pinch of salt if needed — salt amplifies both the citrus and sweet fish flavors.',
        commonMistake: 'Rough tossing that breaks the delicate fish cubes apart.',
        moveOnWhen: 'Vegetables and fish are tossed and seasoned.',
        quickInstructions: 'Fold in diced cucumber, tomato, onion, serrano, cilantro, olive oil, oregano, and salt gently.'
      },
      {
        step: 4,
        title: 'SERVE ON CRISP CORN TOSTADAS WITH AVOCADO',
        whatYouNeed: ['Crisp corn tostadas', 'Finished ceviche', 'Sliced avocado', 'Mexican hot sauce'],
        description: 'Mound generous scoops of ceviche onto crisp golden corn tostadas. Top with fan-sliced fresh avocado and a dash of Mexican hot sauce (like Valentina or Cholula). Serve immediately with ice-cold drinks.',
        howToDoIt: 'Assemble tostadas right before eating so the crunchy fried corn shell stays crisp beneath the juicy ceviche.',
        heat: 'No Heat',
        duration: 2,
        visualCues: 'A towering, colorful tostada crowned with buttery green avocado slices.',
        smell: 'Toasted corn, zesty lime, and fresh ocean fish.',
        textureCheck: 'Loud crisp crunch of the tostada followed by juicy, firm, refreshing ceviche and creamy avocado.',
        whatShouldThisLookLike: 'A coastal Mexican beachside ceviche tostada.',
        tip: 'Serve with extra tortilla chips on the side for dipping up any ceviche that falls off the tostada.',
        commonMistake: 'Pre-assembling tostadas 30 minutes in advance, which turns the corn shell soggy.',
        moveOnWhen: 'Served immediately.',
        quickInstructions: 'Spoon ceviche onto crisp tostadas, crown with sliced avocado and hot sauce, serve immediately.'
      }
    ],
    commonMistakes: [
      { mistake: 'Using low-grade or frozen fish', remedy: 'Ceviche is not cooked with heat. You must use ultra-fresh, sashimi-grade wild saltwater fish.' },
      { mistake: 'Curing too long', remedy: 'Cure for strictly 20-25 minutes. Leaving fish in lime juice for hours makes it tough and chalky.' }
    ],
    troubleshooting: [
      {
        problem: 'Ceviche is overwhelmingly sour',
        whatHappened: 'Too much lime juice remains in the bowl.',
        whyItHappened: 'Fish was not drained before tossing with vegetables.',
        whatToDoNow: 'Whisk in 1 extra tablespoon of olive oil and fold in extra diced avocado to coat the palate with soothing healthy fats.',
        howToPrevent: 'Drain off half of the curing lime juice before adding vegetables.'
      }
    ],
    substitutions: [
      { original: 'Red Snapper', substitute: 'Halibut, Sea Bass, or peeled raw shrimp', notes: 'Shrimp cures to pink opacity in 25 minutes.' },
      { original: 'Tostadas', substitute: 'Saltine crackers (Galletas Saladas)', notes: 'Very popular authentic Mexican cantina style.' }
    ],
    safetyNotes: ['Use strictly sushi/sashimi-grade fish from a trusted fishmonger.', 'Keep fish on ice at all times until ready to eat.'],
    servingGuide: {
      restingTime: '0 minutes — eat immediately after tossing.',
      temperature: 'Ice cold and refreshing.',
      garnishing: 'Sliced avocado, fresh cilantro sprig, and Mexican hot sauce.',
      accompaniments: 'Crisp corn tostadas, tortilla chips, and Micheladas or cold Mexican beer.'
    }
  },

  // 11. EMPANADAS (Authentic Argentine / Latin Beef Empanadas Mendocinas)
  {
    id: 'empanadas',
    name: 'Authentic Latin Beef Empanadas (Empanadas Mendocinas with Spiced Beef & Olives)',
    cuisine: 'Mexican',
    region: 'Latin America (Argentina / Mendoza)',
    servings: 6,
    prepTime: 35,
    cookTime: 20,
    difficulty: 'Medium',
    overview: {
      summary: 'The pride of Latin American pastry craft: flaky, golden dough disks (discos de empanada) hand-folded around a savory filling of beef steak finely diced by knife (carne a cuchillo), braised with an equal weight of sweet caramelized onions, cumin, pimentón dulce, green olives, and hard-boiled eggs. Sealed with the traditional braided rope edge (el repulgue) and baked until blistered, golden-brown, and bursting with fragrant savory juices.',
      appearance: 'Half-moon golden-brown pastries with a glossy egg-washed sheen and an intricate braided rope crust around the curved rim, puffed with steam.',
      texture: 'Flaky, buttery, crisp crust that shatters on the bite, giving way to an extraordinarily juicy, tender spiced beef and onion interior.',
      flavor: 'Rich roasted beef, sweet caramelized onions, warm earthy cumin and smoked paprika, punctuated by salty green olives.',
      restingTimeMinutes: 5
    },
    equipment: [
      { name: 'Baking sheet & parchment paper', purpose: 'For baking empanadas evenly at high heat.' },
      { name: 'Wide skillet', purpose: 'For braising the beef and onion filling (el picadillo).' },
      { name: 'Pastry brush', purpose: 'To apply egg wash for a lustrous golden crust.' }
    ],
    beforeYouStart: [
      { task: 'Prepare or thaw 12 empanada dough disks (13cm diameter).', durationMinutes: 10 },
      { task: 'Finely dice 500g beef sirloin or flank steak by knife into 5mm cubes (or use coarse ground beef).', durationMinutes: 10 },
      { task: 'Slice 2 hard-boiled eggs and pit 12 green olives.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: '1:1 Onion-to-Beef Ratio (The Mendoza Secret)', technique: 'Authentic Argentine empanadas use equal parts onions to beef by weight! The onions melt down into a sweet, rich broth that keeps the interior of the pastry outrageously juicy without adding tomato sauce or flour.' },
      { item: 'Chilling the Filling Overnight', technique: 'Always cool the cooked beef filling completely in the refrigerator until the rendered beef fat solidifies into a firm gel. Cold filling is easy to spoon onto dough and melts into savory broth inside the hot oven!' },
      { item: 'The Repulgue (Braided Rope Edge)', technique: 'Fold the dough over the filling into a half-moon, press the edges flat with your fingers, then fold and crimp the corner inward at a 45-degree angle in overlapping pleats to seal.' }
    ],
    essentialIngredients: [
      { name: 'Empanada dough disks (Discos de empanada)', prep: 'flour, butter/lard, water dough, 13cm rounds', amount: '12 disks', metric: '12 pieces', imperial: '12 pieces', common: '12 rounds' },
      { name: 'Beef sirloin or flank steak', prep: 'hand-cut into 5mm dice', amount: '500g', metric: '500g', imperial: '1.1 lbs', common: '500g' },
      { name: 'Yellow onions', prep: 'finely diced (equal weight to beef!)', amount: '3 large (500g)', metric: '500g', imperial: '1.1 lbs', common: '3 onions' },
      { name: 'Beef tallow, lard, or butter', prep: 'for sautéing', amount: '3 tbsp', metric: '45g', imperial: '1.6 oz', common: '3 tbsp' },
      { name: 'Sweet Spanish smoked paprika (Pimentón dulce)', prep: 'warm spice', amount: '1.5 tbsp', metric: '12g', imperial: '0.4 oz', common: '1.5 tbsp' },
      { name: 'Ground cumin', prep: 'earthy aromatic', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Crushed red pepper flakes (Ají molido)', prep: 'gentle warmth', amount: '1/2 tsp', metric: '1g', imperial: '0.04 oz', common: '1/2 tsp' },
      { name: 'Green pitted olives', prep: 'sliced in half', amount: '12 olives', metric: '40g', imperial: '1.4 oz', common: '12 olives' },
      { name: 'Hard-boiled eggs', prep: 'peeled and chopped into 1cm chunks', amount: '2 eggs', metric: '100g', imperial: '3.5 oz', common: '2 eggs' },
      { name: 'Fine sea salt & Black pepper', prep: 'seasoning', amount: '1.5 tsp salt + 1 tsp pepper', metric: '10g', imperial: '0.35 oz', common: 'mixed' },
      { name: 'Egg beaten with 1 tbsp milk', prep: 'egg wash for golden glaze', amount: '1 egg', metric: '50g', imperial: '1.8 oz', common: '1 egg' }
    ],
    steps: [
      {
        step: 1,
        title: 'COOK SWEET ONIONS & SPICED BEEF FILLING',
        whatYouNeed: ['Skillet', '3 tbsp lard or butter', 'Diced onions', 'Hand-cut beef', 'Paprika, Cumin, Ají molido', 'Salt & Pepper'],
        description: 'Melt lard in a wide skillet over medium heat. Add the diced onions with 1 tsp salt. Sauté gently for 12 to 15 minutes until soft, sweet, and translucent (do not brown). Turn heat to high, add the diced beef, sweet paprika, cumin, ají molido, and black pepper. Stir rapidly for 3 to 4 minutes just until the beef changes color from red to brown. Remove from heat immediately while the beef is still juicy. Cool completely, then refrigerate for at least 2 hours until the beef juices solidify into a firm gel.',
        howToDoIt: 'Cooking the beef quickly prevents it from toughening, and chilling turns the juices solid so they don\'t tear the dough during folding.',
        heat: 'Medium to High Heat',
        duration: 20,
        visualCues: 'Onions soften into a sweet glaze; beef turns brown in fragrant red paprika juices.',
        smell: 'Sweet cooked onions, earthy cumin, and rich beef.',
        textureCheck: 'Juicy, savory meat mixture that chills into a solid spoonable filling.',
        whatShouldThisLookLike: 'Cold, firm spiced beef filling ready for folding.',
        tip: 'Stir in chopped hard-boiled eggs and green olives into the cold filling right before assembling.',
        commonMistake: 'Using hot filling on raw dough, which melts the dough fat and creates soggy, torn empanadas.',
        moveOnWhen: 'Filling is cooked and chilled firm.',
        quickInstructions: 'Sauté onions 12 mins, add beef and spices, cook 3 mins until browned; cool and chill firm in fridge.'
      },
      {
        step: 2,
        title: 'FILL & FORM THE REshape HALF-MOON',
        whatYouNeed: ['12 dough disks', 'Chilled beef filling', 'Chopped eggs & olives', 'Small bowl of water'],
        description: 'Lay dough disks flat on a clean surface. Spoon 2 heaped tablespoons of chilled beef filling onto the center of each disk. Add 1 piece of olive and a chunk of hard-boiled egg. Dip your finger in water and moisten the outer half-rim of the dough disk. Fold the dough over the filling to form a half-moon. Press the edges together firmly with your fingers to seal.',
        howToDoIt: 'A tiny dab of water creates a tacky seal, preventing the savory broth from leaking out during baking.',
        heat: 'No Heat',
        duration: 8,
        visualCues: 'Neat half-moon dough parcels with sealed flat rims.',
        textureCheck: 'Plump, firmly sealed parcels.',
        whatShouldThisLookLike: 'Twelve half-moon empanadas ready for repulgue.',
        tip: 'Do not overfill, or the seam will burst open in the hot oven.',
        commonMistake: 'Getting oil or grease onto the sealing rim, which prevents the dough from sticking together.',
        moveOnWhen: 'All empanadas are folded and edges pressed flat.',
        quickInstructions: 'Place 2 tbsp filling, egg, and olive on dough disk; moisten edge, fold into half-moon, and press seam tight.'
      },
      {
        step: 3,
        title: 'BRAID THE TRADITIONAL REPULGUE EDGE',
        whatYouNeed: ['Folded empanadas', 'Baking sheet lined with parchment'],
        description: 'Starting at one corner of the half-moon, pinch the edge between your thumb and index finger, fold it inward at a 45-degree angle, and press down. Move your fingers along the rim, repeating the pinch-and-fold motion all the way to the other corner to create a gorgeous braided rope pattern. Place empanadas onto the parchment-lined baking sheet.',
        howToDoIt: 'The repulgue isn\'t just decorative — the overlapping folds create a double-thick reinforced barrier that withstands internal boiling steam.',
        heat: 'No Heat',
        duration: 6,
        visualCues: 'A decorative, tight, braided rope crust along the curved border of each empanada.',
        textureCheck: 'Taut, tightly sealed braided edge.',
        whatShouldThisLookLike: 'Classic artisanal Argentine empanadas.',
        tip: 'If braiding is intimidating, you can firmly crimp the edges with the tines of a fork instead!',
        commonMistake: 'Loose folds that unravel when the pastry puffs in the oven.',
        moveOnWhen: 'All 12 empanadas are braided and placed on baking sheet.',
        quickInstructions: 'Pinch and fold edges inward at 45-degree angle to create braided rope crust; place on baking sheet.'
      },
      {
        step: 4,
        title: 'EGG WASH & BAKE AT 220°C UNTIL BLISTERED',
        whatYouNeed: ['Egg wash (beaten egg + 1 tbsp milk)', 'Pastry brush', 'Preheated oven (220°C / 430°F)'],
        description: 'Brush the tops of the empanadas evenly with egg wash. Slide the baking sheet into the upper-middle rack of the preheated oven. Bake for 15 to 18 minutes until the pastry puffs, turns deep golden-brown, and develops tiny blistered spots on the surface. Transfer to a wire rack and rest for 5 minutes.',
        howToDoIt: 'High heat bakes the pastry quickly so it crisps before the internal juices boil over and rupture the dough.',
        heat: 'Oven at 220°C / 430°F',
        duration: 18,
        visualCues: 'Deep amber-golden blistered crust with glossy sheen; steam puffing gently.',
        hear: 'Gentle sizzling as butter melts in the crust.',
        smell: 'Incredible aroma of baked butter pastry, sweet cumin, and roasted beef.',
        textureCheck: 'Crisp, flaky pastry shell that feels light and hollow.',
        whatShouldThisLookLike: 'Puffed, shimmering golden empanadas.',
        tip: 'Resting for 5 minutes allows the molten internal broth to settle so it doesn\'t squirt out and burn your tongue!',
        commonMistake: 'Baking at low oven temperature (175°C), which causes juices to pool and soften the bottom crust.',
        moveOnWhen: 'Empanadas are golden-brown and rested 5 minutes.',
        quickInstructions: 'Brush with egg wash, bake at 220°C for 15-18 mins until deep golden-brown; rest 5 mins.'
      }
    ],
    commonMistakes: [
      { mistake: 'Filling with hot meat', remedy: 'Always chill the filling completely until the fat solidifies before assembling.' },
      { mistake: 'Not sealing edges properly', remedy: 'Pinch and braid tightly so the delicious savory meat juices stay trapped inside.' }
    ],
    troubleshooting: [
      {
        problem: 'Empanadas burst open and leaked juice on the pan',
        whatHappened: 'The steam pressure popped the seam.',
        whyItHappened: 'The repulgue was too loose, or filling was overstuffed.',
        whatToDoNow: 'They are still delicious! Serve with a spoon to scoop up the savory broth.',
        howToPrevent: 'Seal firmly with water and crimp tightly; do not overfill past 2 tablespoons.'
      }
    ],
    substitutions: [
      { original: 'Discos de empanada', substitute: 'Roll out pie dough or puff pastry to 2.5mm and cut into 13cm rounds', notes: 'Creates an ultra-flaky crust.' },
      { original: 'Beef sirloin', substitute: 'Coarse ground beef chuck (80/20)', notes: 'Saves knife work while retaining great flavor.' }
    ],
    safetyNotes: ['Internal juices are extremely hot right out of the oven — let rest 5 minutes before biting.'],
    servingGuide: {
      restingTime: 'Rest 5 minutes before eating.',
      temperature: 'Warm.',
      garnishing: 'Lemon wedges on the side.',
      accompaniments: 'Fresh Chimichurri sauce, Criolla salsa, and Malbec red wine.'
    }
  },

  // 12. AREPAS (Authentic Venezuelan Arepas Rellenas - Reina Pepiada)
  {
    id: 'arepas',
    name: 'Authentic Venezuelan Arepas Rellenas (Reina Pepiada - Avocado & Chicken Salad)',
    cuisine: 'Mexican',
    region: 'South America (Venezuela / Colombia)',
    servings: 4,
    prepTime: 20,
    cookTime: 20,
    difficulty: 'Easy',
    overview: {
      summary: 'The national soul of Venezuela: golden, crispy corn cakes made from pre-cooked white cornmeal (Harina P.A.N.), water, and salt. Griddled on a hot budare (comal) until crisp on both sides, baked in the oven until hollow and puffed, then sliced open like a pocket and generously stuffed with the iconic "Reina Pepiada" filling: shredded poached chicken tossed with rich mashed Hass avocado, lime juice, cilantro, and mayonnaise.',
      appearance: 'Thick, round, golden-white corn cakes with toasted brown freckles, split open like a clam to reveal an overflowing creamy green-and-white filling of shredded chicken and avocado.',
      texture: 'Crisp, crackling outer shell yielding to a soft, steaming, pillowy corn interior, filled with rich, creamy, tender chicken salad.',
      flavor: 'Pure sweet roasted corn, rich buttery avocado, savory poached chicken, bright lime tang, and creamy mayonnaise.',
      restingTimeMinutes: 3
    },
    equipment: [
      { name: 'Cast-iron skillet or Budare', purpose: 'To sear the outer crust on both sides before finishing in the oven.' },
      { name: 'Oven at 200°C (400°F)', purpose: 'To bake the arepas until puffed and cooked through to the center.' },
      { name: 'Mixing bowl', purpose: 'To knead the corn dough effortlessly by hand.' }
    ],
    beforeYouStart: [
      { task: 'Preheat oven to 200°C (400°F).', durationMinutes: 15 },
      { task: 'Shred 300g cooked poached chicken breast.', durationMinutes: 5 },
      { task: 'Mash 2 ripe Hass avocados with 2 tbsp mayonnaise, 1 tbsp lime juice, 1/4 diced onion, salt, and pepper.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'THE HARINA P.A.N. RULE: Pre-Cooked Cornmeal Only!', technique: 'You MUST use pre-cooked white cornmeal (Harina P.A.N. or Masarepa). You CANNOT use regular raw cornmeal, polenta, or Mexican masa harina! Pre-cooked corn flour absorbs water instantly into a smooth, pliable dough without cooking.' },
      { item: 'The Hollow Tap Doneness Test', technique: 'When an arepa is fully cooked, tapping the flat side with your knuckles produces a distinct hollow drum sound ("toc-toc"), signaling the interior has puffed into a steamy pocket.' }
    ],
    essentialIngredients: [
      { name: 'Pre-cooked white cornmeal (Harina P.A.N. / Masarepa)', prep: 'essential flour', amount: '2 cups', metric: '300g', imperial: '10.5 oz', common: '2 cups' },
      { name: 'Warm water', prep: 'dough hydration', amount: '2.5 cups', metric: '600ml', imperial: '20 fl oz', common: '2.5 cups' },
      { name: 'Fine sea salt', prep: 'dissolved in water', amount: '1 tsp', metric: '6g', imperial: '0.2 oz', common: '1 tsp' },
      { name: 'Neutral oil or butter', prep: 'for coating skillet and hands', amount: '1 tbsp', metric: '15ml', imperial: '0.5 fl oz', common: '1 tbsp' },
      { name: 'Shredded cooked chicken breast', prep: 'poached and shredded fine', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '300g' },
      { name: 'Ripe Hass avocados', prep: 'mashed with lime', amount: '2 avocados', metric: '300g', imperial: '10.5 oz', common: '2 avocados' },
      { name: 'Mayonnaise', prep: 'binds chicken salad', amount: '2 to 3 tbsp', metric: '45g', imperial: '1.6 oz', common: '3 tbsp' },
      { name: 'White onion & Garlic clove', prep: 'finely grated', amount: '1/4 onion + 1 clove garlic', metric: '35g', imperial: '1.2 oz', common: 'mixed' },
      { name: 'Fresh lime juice & Cilantro', prep: 'seasoning', amount: '1 tbsp lime + 2 tbsp chopped cilantro', metric: '20g', imperial: '0.7 oz', common: 'mixed' }
    ],
    steps: [
      {
        step: 1,
        title: 'MIX & KNEAD HARINA P.A.N. DOUGH',
        whatYouNeed: ['2.5 cups warm water', '1 tsp salt', '2 cups Harina P.A.N.', 'Large bowl'],
        description: 'In a large bowl, dissolve 1 tsp salt in 2.5 cups of warm water. Gradually rain the Harina P.A.N. into the water with one hand while stirring continuously with your other hand. Knead with your fingers for 2 minutes into a smooth, lump-free dough. Let it rest for 5 minutes so the cornmeal fully absorbs the water.',
        howToDoIt: 'Always add the flour to the water, not water to flour! This guarantees a smooth, clump-free dough.',
        heat: 'No Heat',
        duration: 8,
        visualCues: 'A soft, supple, snow-white dough that pulls away cleanly from the bowl.',
        smell: 'Sweet, clean roasted corn flour.',
        textureCheck: 'Pliable and smooth like Play-Doh with zero cracks when pressed.',
        whatShouldThisLookLike: 'A smooth white ball of corn dough.',
        tip: 'If dough feels dry and cracks at the edges when pressed, knead in 2 tablespoons of warm water.',
        commonMistake: 'Making dough too stiff, which creates hard, dry arepas that crack when griddled.',
        moveOnWhen: 'Dough is soft, hydrated, and rested 5 minutes.',
        quickInstructions: 'Dissolve salt in warm water, rain in Harina P.A.N. while stirring, knead 2 mins, rest 5 mins.'
      },
      {
        step: 2,
        title: 'SHAPE INTO SMOOTH THICK DISKS',
        whatYouNeed: ['Rested dough', 'Small bowl of water for hands'],
        description: 'Divide dough into 4 equal balls (about 220g each). Roll each ball between your palms until perfectly smooth without cracks. Place on a surface and gently flatten with your palm into a round disk about 10cm (4 inches) across and 2cm (3/4 inch) thick. Smooth any cracks along the rim with a wet finger.',
        howToDoIt: 'Keeping the disks 2cm thick is essential so you can slice them open and create a deep pocket for filling.',
        heat: 'No Heat',
        duration: 5,
        visualCues: 'Smooth, plump, white pucks with rounded, crack-free edges.',
        textureCheck: 'Firm yet soft disks.',
        whatShouldThisLookLike: 'Four identical white corn pucks ready for the pan.',
        tip: 'Dip your hands in water occasionally to keep the dough slick and prevent sticking.',
        commonMistake: 'Flattening them thin like tortillas — arepas must be thick cakes!',
        moveOnWhen: 'All 4 arepas are shaped and crack-free.',
        quickInstructions: 'Roll dough into balls, flatten with palm into 10cm wide and 2cm thick disks; smooth rim cracks with wet fingers.'
      },
      {
        step: 3,
        title: 'SEAR ON BUDARE & BAKE IN OVEN UNTIL HOLLOW',
        whatYouNeed: ['Cast-iron skillet lightly oiled', 'Formed arepas', 'Preheated oven (200°C / 400°F)'],
        description: 'Lightly wipe a cast-iron skillet with oil and heat over medium heat. Place arepas in the skillet. Cook undisturbed for 5 minutes until a crisp crust forms with toasted golden-brown spots. Flip and cook 5 minutes on the other side. Transfer the skillet (or transfer arepas to an oven rack) directly into the 200°C oven. Bake for 10 to 12 minutes until puffed. Tap with your knuckle: they must sound hollow like a drum!',
        howToDoIt: 'Griddling creates the crisp protective shell, while oven baking turns the interior water into steam, puffing the arepa and leaving a tender crumb.',
        heat: 'Medium Heat to 200°C Oven',
        duration: 22,
        visualCues: 'Crisp golden-brown toasted spots; arepas puff upward slightly with rounded bellies.',
        hear: 'Hollow drum sound ("toc-toc") when tapped on the flat side.',
        smell: 'Incredible aroma of toasted corn cakes baking in the oven.',
        textureCheck: 'Crisp, rigid shell with light, steamy interior.',
        whatShouldThisLookLike: 'Puffed, golden-toasted Venezuelan arepas.',
        tip: 'If tapping sounds dull and heavy, bake for 3 more minutes until the hollow drum sound appears.',
        commonMistake: 'Skipping the oven step, leaving the thick center doughy and raw.',
        moveOnWhen: 'Arepas sound hollow when tapped.',
        quickInstructions: 'Sear in hot skillet 5 mins per side until toasted, bake at 200°C for 10-12 mins until they sound hollow when tapped.'
      },
      {
        step: 4,
        title: 'SLICE OPEN POCKET & STUFF REINA PEPIADA',
        whatYouNeed: ['Hot baked arepas', 'Serrated knife', 'Reina Pepiada filling (chicken & avocado salad)'],
        description: 'Hold a hot arepa with a clean towel. Using a serrated knife, slice horizontally three-quarters of the way through, creating a deep pocket with a hinge on one side. Steam will billow out. Slather with a knob of butter if desired, then pack generously with the creamy green Reina Pepiada chicken-avocado filling. Serve warm!',
        howToDoIt: 'Leaving one side uncut keeps the filling securely inside as you take bites.',
        heat: 'No Heat',
        duration: 3,
        visualCues: 'Crispy golden arepa overflowing with bright green avocado chicken salad.',
        smell: 'Hot toasted corn, buttery avocado, and fresh cilantro.',
        textureCheck: 'Crispy crackling shell yielding to steamy soft corn crumb and cool, creamy, savory filling.',
        whatShouldThisLookLike: 'The world-famous Venezuelan Reina Pepiada arepa ready to eat.',
        tip: 'Eat with your hands wrapped in a napkin — it is the ultimate Venezuelan comfort food.',
        commonMistake: 'Slicing all the way through into two disconnected halves.',
        moveOnWhen: 'Stuffed and served warm.',
        quickInstructions: 'Slice hot arepa 3/4 through to form pocket, spread butter inside, pack with avocado chicken salad.'
      }
    ],
    commonMistakes: [
      { mistake: 'Using regular cornmeal or masa harina', remedy: 'You MUST use pre-cooked cornmeal (Harina P.A.N.). Other corn flours will not work.' },
      { mistake: 'Underbaking the center', remedy: 'Always finish in a 200°C oven until the arepas sound hollow when tapped.' }
    ],
    troubleshooting: [
      {
        problem: 'Dough cracked badly while shaping',
        whatHappened: 'Dough lacked sufficient hydration.',
        whyItHappened: 'Flour absorbed all water during resting.',
        whatToDoNow: 'Add 2-3 tablespoons of warm water and knead vigorously for 60 seconds until smooth again.',
        howToPrevent: 'Use the full 2.5 cups of water for 2 cups of flour.'
      }
    ],
    substitutions: [
      { original: 'Reina Pepiada filling', substitute: 'Shredded beef (Carne Mechada) or Black beans & white cheese (Dominó)', notes: 'Other legendary authentic Venezuelan fillings.' }
    ],
    safetyNotes: ['Watch out for hot billowing steam when slicing open freshly baked arepas.'],
    servingGuide: {
      restingTime: 'Rest 2 minutes before slicing.',
      temperature: 'Warm corn pocket with cool creamy filling.',
      garnishing: 'Extra cilantro sprig and a dash of hot pepper sauce (Guasacaca).',
      accompaniments: 'Fresh tropical fruit juice (Papelón con limón) or cold beer.'
    }
  },

  // 13. CROISSANTS (Classic French Butter Croissants - Viennoiserie)
  {
    id: 'croissants',
    name: 'Classic French Butter Croissants (Artisanal Laminated Croissants au Beurre)',
    cuisine: 'French',
    region: 'France (Paris)',
    servings: 8,
    prepTime: 60,
    cookTime: 20,
    difficulty: 'Expert',
    overview: {
      summary: 'The pinnacle of French viennoiserie craft: a slow-fermented yeast dough (détrempe) laminated with a solid block of cold European high-fat butter (beurre de tourage) through three precise letter folds (tour simples) to create 55 alternating gossamer micro-layers of butter and dough. Hand-rolled into elegant crescent crescents, proofed until jiggly like soufflés, and baked until deeply golden, shatteringly flaky outside with a translucent open honeycomb crumb inside.',
      appearance: 'Deep golden-amber crescent pastries with a glossy lacquered sheen, displaying dozens of distinct, paper-thin, crackling caramelized exterior layers.',
      texture: 'Shatteringly crisp, brittle outer crust that flakes into hundreds of shards, giving way to an impossibly airy, feather-light, buttery honeycomb alveoli web inside.',
      flavor: 'Rich, sweet caramelized cultured butter, gentle yeast fermentation tang, and subtle toasted wheat sweetness.',
      restingTimeMinutes: 10
    },
    equipment: [
      { name: 'Heavy French rolling pin', purpose: 'For applying even, gentle pressure during lamination without crushing butter layers.' },
      { name: 'Baking sheet & parchment paper', purpose: 'For proofing and baking.' },
      { name: 'Ruler & Pizza wheel / pastry cutter', purpose: 'To measure and slice uniform triangles for shaping.' }
    ],
    beforeYouStart: [
      { task: 'Prepare détrempe: 500g bread flour, 260ml cold milk, 50g sugar, 10g salt, 10g instant yeast, 50g soft butter. Knead 5 mins, chill overnight.', durationMinutes: 720 },
      { task: 'Pound 250g cold European butter (82% fat) between parchment paper into a neat 18x18cm square butter block (beurre de tourage); chill.', durationMinutes: 15 },
      { task: 'Ensure dough and butter block are at the exact same temperature (around 12-14°C / 54-57°F) before laminating.', durationMinutes: 10 }
    ],
    ingredientPrepGuide: [
      { item: 'Temperature Synchronization (The Lamination Secret)', technique: 'The butter and dough MUST be the same pliability and temperature! If butter is too cold, it shatters into hard flakes inside the dough. If butter is too warm, it melts into the dough, turning croissants into brioche. It should bend like a credit card without breaking.' },
      { item: 'The 3 Letter Folds (Tours Simples)', technique: 'Enclose butter block in dough. Roll out to 60cm long, fold in thirds like a business letter (Fold 1). Chill 30 mins. Repeat roll and fold twice more (Folds 2 and 3) to create 55 micro-layers.' }
    ],
    essentialIngredients: [
      { name: 'Unbleached bread flour (Type 55 or strong flour)', prep: 'for gluten structure', amount: '500g', metric: '500g', imperial: '1.1 lbs', common: '4 cups' },
      { name: 'Cold whole milk', prep: 'liquid base', amount: '260ml', metric: '260ml', imperial: '8.8 fl oz', common: '1.1 cups' },
      { name: 'High-fat European unsalted butter (82-84% fat)', prep: 'cold, for butter block (tourage)', amount: '250g', metric: '250g', imperial: '8.8 oz', common: '1 cup + 2 tbsp' },
      { name: 'Granulated white sugar', prep: 'yeast fuel & sweetness', amount: '50g', metric: '50g', imperial: '1.8 oz', common: '1/4 cup' },
      { name: 'Unsalted butter (for dough)', prep: 'softened', amount: '50g', metric: '50g', imperial: '1.8 oz', common: '3.5 tbsp' },
      { name: 'Instant dry yeast', prep: 'active', amount: '10g', metric: '10g', imperial: '0.35 oz', common: '1 tbsp' },
      { name: 'Fine sea salt', prep: 'essential for flavor and gluten control', amount: '10g', metric: '10g', imperial: '0.35 oz', common: '1.5 tsp' },
      { name: 'Egg yolk whisked with 1 tbsp heavy cream', prep: 'egg wash for mirror shine', amount: '1 yolk', metric: '20g', imperial: '0.7 oz', common: '1 yolk' }
    ],
    steps: [
      {
        step: 1,
        title: 'ENCLOSE BUTTER BLOCK & PERFORM 3 LETTER FOLDS',
        whatYouNeed: ['Chilled dough', '18x18cm butter block', 'Rolling pin', 'Parchment paper'],
        description: 'Roll the chilled dough into a 26x26cm square. Place the 18x18cm cold butter block diagonally in the center like a diamond. Fold the four flaps of dough over the butter like an envelope, pinching seams tightly to seal. Roll gently and evenly into a 60x20cm rectangle. Fold the bottom third up and top third down (Fold 1). Wrap in plastic and chill 30 minutes. Repeat this rolling and folding process two more times (chill 30 minutes between each fold).',
        howToDoIt: 'Roll with smooth, gentle, lengthwise strokes from the center outward. Never squash the edges, which would smash and fuse the micro-layers.',
        heat: 'No Heat (Chilled)',
        duration: 90,
        visualCues: 'A smooth, pliable, laminated dough packet with visible, even strata of butter and dough.',
        smell: 'Sweet yeasty dough and cultured rich butter.',
        textureCheck: 'Cold, elastic, supple dough that bends without cracking.',
        whatShouldThisLookLike: 'A neat rectangular tri-folded dough packet resting in the fridge.',
        tip: 'If at any point the butter feels soft or greasy, immediately return the dough to the freezer for 10 minutes.',
        commonMistake: 'Rushing without chilling, causing butter to melt and bleed out of the dough.',
        moveOnWhen: 'All 3 letter folds are completed and dough has chilled 1 hour.',
        quickInstructions: 'Enclose butter block in dough, roll to 60cm, letter-fold; chill 30 mins; repeat 2 more times (3 folds total).'
      },
      {
        step: 2,
        title: 'CUT TRIANGLES & ROLL INTO CROISSANTS',
        whatYouNeed: ['Laminated dough', 'Ruler', 'Pizza wheel or knife', 'Baking sheet with parchment'],
        description: 'Roll chilled dough on a lightly floured surface into a long 25x70cm strip (4mm thick). Using a ruler and pizza cutter, trim uneven edges. Cut into isosceles triangles (10cm wide base by 25cm long). Make a tiny 1cm notch in the center of the base. Gently stretch the triangle lengthwise, then roll from the base up toward the pointed tip. Place tip-side down on parchment paper. Curve tips inward slightly.',
        howToDoIt: 'Tucking the pointed tip firmly underneath the croissant prevents it from unrolling during oven spring.',
        heat: 'No Heat',
        duration: 15,
        visualCues: 'Eight symmetrical crescent rolls with sharp visible laminated striped layers on the exposed cuts.',
        textureCheck: 'Cold, delicate, shaped pastry rolls.',
        whatShouldThisLookLike: 'Eight beautifully rolled croissants arranged on baking sheets.',
        tip: 'Never pinch or squeeze the cut edges — keep them clean so the layers can expand freely.',
        commonMistake: 'Rolling too loosely, causing the croissant to collapse into a flat slug during baking.',
        moveOnWhen: 'All croissants are rolled and spaced 8cm apart on sheets.',
        quickInstructions: 'Roll dough to 4mm, cut into 10x25cm triangles, stretch gently, roll from base to tip, place tip underneath.'
      },
      {
        step: 3,
        title: 'THE CRITICAL PROOF (THE WIGGLE TEST)',
        whatYouNeed: ['Shaped croissants', 'Warm draft-free spot (24-26°C / 75-78°F)', 'Clean water spray'],
        description: 'Let croissants proof in a draft-free spot at 24°C to 26°C for 2 to 2.5 hours. They must double in size, puff dramatically, and develop visible separation of layers. Perform the Wiggle Test: gently shake the baking sheet — the croissants should wobble and jiggle delicately like soft marshmallow soufflés.',
        howToDoIt: 'NEVER proof croissants above 28°C (82°F)! Butter melts at 32°C; if the proofing area is too hot, the butter pools on the tray and ruins the lamination.',
        heat: 'Proofing Warmth (25°C / 77°F max)',
        duration: 150,
        visualCues: 'Croissants double in size, expand with visible air pockets, and jiggle delicately when the tray is tapped.',
        smell: 'Sweet, buttery, fermented bakery perfume.',
        textureCheck: 'Feather-light and fragile — do not poke firmly or they will deflate!',
        whatShouldThisLookLike: 'Puffed, delicate, jiggly croissants ready for the oven.',
        tip: 'Brush with egg wash very gently using a feathery soft brush, avoiding the exposed laminated cut edges.',
        commonMistake: 'Under-proofing, which results in dense, heavy, oily croissants that leak butter.',
        moveOnWhen: 'Croissants pass the wiggle test and are puffed like pillows.',
        quickInstructions: 'Proof at 25°C for 2-2.5 hours until doubled and jiggly like marshmallow; brush gently with egg wash.'
      },
      {
        step: 4,
        title: 'BAKE AT 200°C TO GOLDEN HONEYCOMB CRUNCH',
        whatYouNeed: ['Preheated oven (200°C / 400°F)', 'Egg-washed croissants'],
        description: 'Bake at 200°C (400°F) for 10 minutes, then lower oven temperature to 180°C (350°F) and bake for 8 to 10 more minutes until deep golden-amber throughout. Transfer to a wire cooling rack and let rest for 10 minutes before eating.',
        howToDoIt: 'High initial heat vaporizes water in the butter into steam, pushing the 55 layers apart before the crust sets.',
        heat: '200°C for 10 mins, then 180°C for 10 mins',
        duration: 20,
        visualCues: 'Deep caramelized amber-golden crust with shatteringly crisp flaking layers; no pale butter spots.',
        hear: 'Delicate, quiet crackling as the crisp crust cools on the rack.',
        smell: 'Incredible, heavenly Parisian boulangerie aroma filling the house.',
        textureCheck: 'Crisp shatter on the outside; slice in half to admire the translucent, open honeycomb interior.',
        whatShouldThisLookLike: 'Flawless artisanal Parisian butter croissants.',
        tip: 'Wait 10 minutes before cutting — eating straight from the oven squishes the delicate hot steam honeycomb into gummy dough.',
        commonMistake: 'Under-baking, leaving the center layers doughy and pale.',
        moveOnWhen: 'Cooled 10 minutes on wire rack.',
        quickInstructions: 'Bake at 200°C 10 mins, lower to 180°C for 10 mins until deep amber-golden; cool on wire rack 10 mins.'
      }
    ],
    commonMistakes: [
      { mistake: 'Proofing too hot', remedy: 'Keep proofing temperature strictly below 27°C so the laminated butter does not melt.' },
      { mistake: 'Butter too cold during lamination', remedy: 'Pound butter until pliable so it bends without fracturing into brittle shards.' }
    ],
    troubleshooting: [
      {
        problem: 'A puddle of melted butter pooled on the baking sheet',
        whatHappened: 'Lamination broke down.',
        whyItHappened: 'Croissants were under-proofed or proofed in an environment over 30°C.',
        whatToDoNow: 'Continue baking until deeply browned — they will still taste like delicious butter biscuits.',
        howToPrevent: 'Proof until fully doubled and jiggly at room temperature (24-26°C).'
      }
    ],
    substitutions: [
      { original: 'European butter (82% fat)', substitute: 'Kerrygold or Plugrá cultured butter', notes: 'Higher fat content and lower water is essential for flaky lamination.' }
    ],
    safetyNotes: ['Handle hot baking sheets with heat-resistant oven mitts.'],
    servingGuide: {
      restingTime: 'Rest 10 minutes on a wire rack before serving.',
      temperature: 'Warm room temperature.',
      garnishing: 'None — pure golden butter perfection.',
      accompaniments: 'Café au lait, espresso, and artisanal fruit preserves.'
    }
  },

  // 14. BAGUETTE (Traditional French Baguette de Tradition)
  {
    id: 'baguette',
    name: 'Traditional French Baguette (Baguette de Tradition with Poolish & Steam Baking)',
    cuisine: 'French',
    region: 'France (Paris)',
    servings: 3,
    prepTime: 40,
    cookTime: 22,
    difficulty: 'Hard',
    overview: {
      summary: 'Protected by French decree and UNESCO heritage: authentic Baguette de Tradition made with only four pure ingredients — unbleached wheat flour, water, salt, and yeast. Crafted via an overnight poolish pre-ferment, gentle coil folding to preserve delicate fermentation bubbles, shaped into taut slender batons, scored with overlapping razor cuts (grignes), and baked on a scorching baking stone with steam to create the legendary singing crackly crust and wild open honeycomb crumb.',
      appearance: 'A long, slender golden-amber baton with blistered crust, prominent raised caramelized ears along the razor cuts, and a pale, flour-dusted underside.',
      texture: 'Shatteringly crisp, crackling, thin crust that "sings" when squeezed, yielding to a light, chewy, custard-like crumb riddled with wild, irregular aeration holes.',
      flavor: 'Deeply aromatic: sweet toasted wheat, complex lactic acidity from long fermentation, clean salinity, and caramelized malt crust.',
      restingTimeMinutes: 15
    },
    equipment: [
      { name: 'Baking stone / Pizza steel & cast-iron steam pan', purpose: 'For high conductive bottom heat and instant steam injection.' },
      { name: 'Baker\'s Couche (Linen proofing cloth)', purpose: 'Supports slender shaped baguettes as they rise without flattening.' },
      { name: 'Baker\'s Lame (Curved razor blade)', purpose: 'To score shallow overlapping cuts at a 30-degree angle for beautiful crust ears.' }
    ],
    beforeYouStart: [
      { task: 'Prepare Poolish 12 hours ahead: 150g flour, 150ml water, pinch of yeast. Ferment overnight until bubbling actively.', durationMinutes: 720 },
      { task: 'Preheat oven with baking stone on center rack and cast-iron pan on bottom rack to 250°C (480°F) for 45 minutes.', durationMinutes: 45 },
      { task: 'Boil 1 cup of water for steam injection.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'High Hydration Handling (Autolyse & Coil Folds)', technique: 'At 72% hydration, dough is wet and sticky. Do not knead aggressively on a floured board! Use 3 sets of gentle wet-hand coil folds inside the bowl spaced 30 minutes apart to build strong gluten while keeping bubbles intact.' },
      { item: 'Scoring with a Lame (The 30-Degree Angle)', technique: 'Hold the razor blade almost flat at a 30-degree angle to the dough surface. Make 4 overlapping lengthwise cuts down the center line. Cutting at an angle creates a flap that lifts into a crisp caramelized "ear" during oven spring.' }
    ],
    essentialIngredients: [
      { name: 'Unbleached bread flour (French Type 65 preferred)', prep: 'high-protein flour', amount: '500g total (150g poolish + 350g final)', metric: '500g', imperial: '1.1 lbs', common: '4 cups' },
      { name: 'Cold water (72% hydration)', prep: 'divided', amount: '360ml total (150ml poolish + 210ml final)', metric: '360ml', imperial: '12.2 fl oz', common: '1.5 cups' },
      { name: 'Fine sea salt', prep: 'vital for crust and flavor', amount: '10g', metric: '10g', imperial: '0.35 oz', common: '1.5 tsp' },
      { name: 'Instant dry yeast', prep: 'divided', amount: '2g (pinch for poolish + 1/2 tsp final)', metric: '2g', imperial: '0.07 oz', common: '1/2 tsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'AUTOLYSE & COIL FOLDS FOR WILD CRUMB',
        whatYouNeed: ['Poolish pre-ferment', '350g flour', '210ml water', '10g salt', '1/2 tsp yeast'],
        description: 'In a large bowl, mix the bubbly poolish with the remaining water, flour, yeast, and salt until a shaggy, wet dough forms. Rest covered for 30 minutes (autolyse). Wet your hands with cold water. Perform 3 sets of gentle "coil folds" (lifting the dough from the center and letting both ends tuck underneath) spaced 30 minutes apart. Let bulk ferment for 1.5 hours until aerated and doubled.',
        howToDoIt: 'Coil folds align gluten chains without popping the delicate carbon dioxide bubbles created by yeast.',
        heat: 'No Heat (Room Temp)',
        duration: 120,
        visualCues: 'Dough turns smooth, domed, and jiggly with large translucent fermentation bubbles on the surface.',
        smell: 'Yeasty, sweet, slightly fruity fermentation aroma.',
        textureCheck: 'Stretchy, billowy, cloud-like dough.',
        whatShouldThisLookLike: 'Aerated, lively dough in a bowl.',
        tip: 'Never punch down baguette dough! Handle with extreme gentleness to preserve the open honeycomb crumb.',
        commonMistake: 'Over-kneading or adding excess dry flour, resulting in dense sandwich-bread crumb.',
        moveOnWhen: 'Dough is aerated, doubled, and full of bubbles.',
        quickInstructions: 'Mix poolish, flour, water, salt, yeast; rest 30 mins, perform 3 coil folds every 30 mins; ferment 1.5 hrs.'
      },
      {
        step: 2,
        title: 'PRE-SHAPE & REST (LE DÉTENTE)',
        whatYouNeed: ['Fermented dough', 'Bench scraper', 'Lightly floured surface'],
        description: 'Gently tip dough onto a lightly floured surface. Using a bench scraper, divide into 3 equal pieces (about 285g each). Gently pat each into a loose rectangle, fold the top down and bottom up, and roll into a loose cylinder. Place on a floured towel and let rest (la détente) for 15 minutes to relax gluten.',
        howToDoIt: 'Resting the pre-shaped cylinders allows the gluten to relax so you can roll them out into long slender batons without tearing.',
        heat: 'No Heat',
        duration: 15,
        visualCues: 'Three relaxed, pillowy dough cylinders resting on the counter.',
        textureCheck: 'Soft, relaxed dough that yields easily to gentle touch.',
        whatShouldThisLookLike: 'Three plump dough logs ready for final shaping.',
        tip: 'Handle with light fingertips — do not press out the internal air bubbles.',
        commonMistake: 'Trying to stretch dough immediately into long batons, which tears the gluten network.',
        moveOnWhen: 'Gluten is relaxed and dough is ready to shape.',
        quickInstructions: 'Divide into 3 pieces (285g each), fold into loose cylinders, rest 15 mins to relax gluten.'
      },
      {
        step: 3,
        title: 'FINAL SHAPING & PROOFING IN LINEN COUCHE',
        whatYouNeed: ['Rested dough logs', 'Floured linen baker\'s couche (or thick cotton towel)'],
        description: 'Take one cylinder, flatten gently. Fold the top edge down two-thirds and seal with your thumb. Fold the bottom edge up and seal. Now fold the top edge all the way over to meet the bottom seam, pinching firmly with your palm to create surface tension. Roll gently under both hands from the center outward to lengthen into a slender 38cm (15-inch) baton with tapered tips. Place seam-side UP in the folds of a floured linen couche. Proof for 45 minutes.',
        howToDoIt: 'The linen couche holds the sides of the slender baguettes upright so they expand upward rather than spreading into flat pancakes.',
        heat: 'No Heat',
        duration: 45,
        visualCues: 'Slender, taut batons nestled in linen pleats, puffing by about 50%.',
        textureCheck: 'Supple, puffy, and elastic.',
        whatShouldThisLookLike: 'Three elegant baguettes resting in linen folds.',
        tip: 'Taper the ends slightly by pressing a little firmer with your palms as you reach the edges.',
        commonMistake: 'Failing to build surface tension during shaping, causing the bread to bake flat.',
        moveOnWhen: 'Batons are puffed and ready to bake.',
        quickInstructions: 'Fold dough to build tight surface tension, roll to 38cm, place in floured linen couche for 45 mins.'
      },
      {
        step: 4,
        title: 'SCORE WITH LAME & BAKE WITH STEAM AT 250°C',
        whatYouNeed: ['Baker\'s lame or razor', 'Preheated stone (250°C)', 'Preheated cast-iron pan', '1 cup boiling water', 'Baking peel'],
        description: 'Transfer baguettes seam-side down onto parchment paper. Dust lightly with flour. Using the razor held at a 30-degree angle, make 4 swift, overlapping lengthwise cuts down the center. Slide parchment with baguettes onto the blistering-hot baking stone. Immediately pour 1 cup boiling water into the hot cast-iron pan on the bottom rack and shut the door instantly to trap steam. Bake with steam for 10 minutes, remove steam pan, and bake for 12 more minutes until deep golden-amber and blistered.',
        howToDoIt: 'Steam delays crust formation for the first 8 minutes, allowing the bread to expand dramatically (oven spring) while dissolving surface starches into a glossy, shatteringly crisp crust.',
        heat: 'Oven at 250°C / 480°F with Steam',
        duration: 22,
        visualCues: 'Baguettes expand rapidly; scores peel open into dramatic caramelized "ears"; crust turns deep chestnut-golden with micro-blisters.',
        hear: 'Hissing steam upon water injection; bread "sings" with tiny crackles when removed from the oven.',
        smell: 'Incredible aroma of caramelized roasted malt and sweet toasted wheat.',
        textureCheck: 'Crisp, feather-light baton that feels hollow and sings when gently squeezed.',
        whatShouldThisLookLike: 'Authentic Parisian bakery baguettes.',
        tip: 'Listen to your bread! As the baguettes cool on the rack, the crust contracts and produces a distinct crackling, singing sound.',
        commonMistake: 'Baking without steam, resulting in a dull, thick, pale, leather-like crust.',
        moveOnWhen: 'Baguettes are deeply browned and cooled 15 minutes.',
        quickInstructions: 'Score 4 times with razor at 30-degree angle, slide onto 250°C stone, pour boiling water into steam pan, bake 22 mins.'
      }
    ],
    commonMistakes: [
      { mistake: 'Baking without steam', remedy: 'Steam is non-negotiable for baguettes. Pour boiling water into a preheated cast-iron pan to create steam.' },
      { mistake: 'Scoring across instead of lengthwise', remedy: 'Score almost parallel to the length of the baguette, overlapping each cut by one-third.' }
    ],
    troubleshooting: [
      {
        problem: 'Baguette is flat with no open ears',
        whatHappened: 'Oven spring was restricted.',
        whyItHappened: 'The dough was over-proofed, under-steamed, or the razor cuts were too deep.',
        whatToDoNow: 'Slice and enjoy — flavor from the poolish will still be magnificent.',
        howToPrevent: 'Bake when puffed 50%, score at a shallow 30-degree angle, and inject plenty of steam.'
      }
    ],
    substitutions: [
      { original: 'French T65 flour', substitute: 'Unbleached high-protein bread flour (12.5% protein)', notes: 'Delivers excellent structure and open crumb.' }
    ],
    safetyNotes: ['Stand back when pouring boiling water into the hot cast-iron pan — steam shoots out rapidly!'],
    servingGuide: {
      restingTime: 'Rest 15 minutes on a wire rack before slicing.',
      temperature: 'Room temperature or warm.',
      garnishing: 'None — pure rustic crust.',
      accompaniments: 'French salted butter, ripe Camembert or Brie cheese, and red wine.'
    }
  }
];
