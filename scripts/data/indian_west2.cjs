// West Indian culinary recipes Part 2 (Maharashtra, Gujarat, Rajasthan)
module.exports = [
  // 37. MISAL PAV
  {
    id: 'misal-pav',
    name: 'Kolhapuri Misal Pav (Fiery Sprouted Moth Bean Curry)',
    cuisine: 'Indian',
    region: 'Western Indian (Maharashtra / Kolhapur / Pune)',
    servings: 4,
    prepTime: 30,
    cookTime: 35,
    difficulty: 'Medium',
    overview: {
      summary: 'Fiery, complex, multi-layered Maharashtrian breakfast sensation: tender sprouted moth beans (matki) simmered in a dark, coconut-onion-poppy seed masala, topped with a fiery, shimmering red-oil spicy gravy (kat/tarri/rassa), heaped with crunchy farsan/sev, raw onions, and lemon, served with hot buttered ladi pav.',
      appearance: 'Dramatic presentation: a deep bowl filled with sprouted bean usal, crowned with golden crunchy farsan, surrounded by a pool of glistening scarlet-red spicy rassa (tarri), fresh cilantro, raw onion rings, and lemon wedges.',
      texture: 'Extraordinary textural symphony: tender sprouted beans, crunchy farsan, and soupy hot rassa soaked up by soft, pillowy pav bread.',
      flavor: 'Explosively fiery, savory, slightly tangy, with deep roasted coconut, garlic, and special Kolhapuri / Goda masala aromatics.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Heavy-bottomed pot / Dutch oven', purpose: 'For boiling sprouted beans and developing the oil separation (tarri).' },
      { name: 'Blender jar', purpose: 'For pureeing the roasted coconut and onion paste (vatan).' }
    ],
    beforeYouStart: [
      { task: 'Soak 200g moth beans (matki) for 8 hours, drain, tie in a damp muslin cloth, and keep in a dark warm spot for 16–24 hours to sprout long tails.', durationMinutes: 1440 },
      { task: 'Dry-roast 40g dry coconut (copra), 1 sliced onion, 1 tsp poppy seeds, and whole spices until dark brown; grind into smooth vatan paste with ginger-garlic and water.', durationMinutes: 15 }
    ],
    ingredientPrepGuide: [
      { item: 'Sprouted Matki', technique: 'Sprouted moth beans have sweet, nutty, tender tails. Boil them gently for 8 minutes in salted turmeric water until tender but holding their shape.' },
      { item: 'The Floating Red Tarri / Kat', technique: 'Sauté the roasted coconut-onion vatan paste with generous oil and Kashmiri chili powder until the red oil completely separates and floats to the top (tarri). Skim off half the tarri to serve in a separate bowl so diners can adjust their own heat level.' }
    ],
    essentialIngredients: [
      { name: 'Sprouted moth beans (matki)', prep: 'boiled 8 mins in salted water', amount: '250g', metric: '250g', imperial: '8.8 oz', common: '2 cups sprouted' },
      { name: 'Potatoes', prep: 'boiled & cubed small', amount: '1 large', metric: '150g', imperial: '5.3 oz', common: '1 cup' },
      { name: 'Onions', prep: 'divided (masala & raw garnish)', amount: '3 medium', metric: '300g', imperial: '10.5 oz', common: '1.5 cups' },
      { name: 'Dry coconut (copra / sukha narol)', prep: 'thinly sliced & roasted dark', amount: '40g', metric: '40g', imperial: '1.4 oz', common: '1/2 cup' },
      { name: 'Tomatoes', prep: 'finely chopped', amount: '2 medium', metric: '180g', imperial: '6.3 oz', common: '3/4 cup' },
      { name: 'Ginger-garlic paste', prep: 'freshly pounded', amount: '2 tbsp', metric: '30g', imperial: '1 oz', common: '2 tbsp' },
      { name: 'Kolhapuri Kanda Lasun Masala or Goda Masala', prep: 'special Maharashtrian spice', amount: '2 tbsp', metric: '16g', imperial: '0.6 oz', common: '2 tbsp' },
      { name: 'Kashmiri red chili powder', prep: 'for red tarri color', amount: '2 tbsp', metric: '16g', imperial: '0.6 oz', common: '2 tbsp' },
      { name: 'Poppy seeds (khus khus)', prep: 'roasted with coconut', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Turmeric powder', prep: 'powder', amount: '1/2 tsp', metric: '1.5g', imperial: '0.05 oz', common: '1/2 tsp' },
      { name: 'Mustard seeds', prep: 'whole black', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Hing (asafoetida)', prep: 'powder', amount: '1/4 tsp', metric: '1g', imperial: '0.03 oz', common: '1/4 tsp' },
      { name: 'Fresh curry leaves', prep: 'fresh', amount: '15 leaves', metric: '2g', imperial: '0.07 oz', common: '2 sprigs' },
      { name: 'Vegetable oil', prep: 'generous amount for tarri extraction', amount: '60ml', metric: '60ml', imperial: '2 fl oz', common: '4 tbsp' },
      { name: 'Hot water for rassa (broth)', prep: 'clean hot water', amount: '700ml', metric: '700ml', imperial: '24 fl oz', common: '3 cups' },
      { name: 'Farsan / Mixture (crunchy chickpea sev & pulses)', prep: 'for crunchy topping', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '1.5 cups' },
      { name: 'Ladi Pav bread rolls', prep: 'fresh, butter-toasted', amount: '8 rolls', metric: '8 rolls', imperial: '8 rolls', common: '8 rolls' },
      { name: 'Fresh lemon juice', prep: 'freshly squeezed', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp' },
      { name: 'Fresh cilantro', prep: 'finely chopped', amount: '1/3 cup', metric: '20g', imperial: '0.7 oz', common: '1/3 cup' },
      { name: 'Fine sea salt', prep: 'to taste', amount: '2 tsp', metric: '12g', imperial: '0.4 oz', common: '2 tsp' }
    ],
    optionalIngredients: [
      { name: 'Boiled black chickpeas (Kala Chana)', prep: 'mixed into beans', amount: '50g', metric: '50g', imperial: '1.8 oz', common: '1/3 cup', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'ROAST & BLEND THE VATAN COCONUT PASTE',
        whatYouNeed: ['40g sliced dry coconut', '1 sliced onion', '1 tsp poppy seeds', '2 tbsp ginger-garlic paste', 'Pan', 'Blender'],
        description: 'Heat a dry pan over medium heat. Roast sliced dry coconut until deep golden-brown. Remove. Add sliced onion to the pan with 1 tsp oil and sauté until dark brown with charred edges. Add poppy seeds for 30 seconds. Cool slightly. Transfer roasted coconut, onions, ginger-garlic paste, and 50ml water to a blender. Puree until completely smooth and thick (vatan paste).',
        howToDoIt: 'Deeply roasting dry coconut and onions until caramelized dark brown (bhajla masala) is the heart of Maharashtrian cuisine, imparting earthy smokiness and natural sweetness.',
        heat: 'Medium Heat',
        heatDescription: 'Dry roasting and browning.',
        duration: 10,
        visualCues: 'Coconut turns toasted amber; onions turn dark brown; pureed paste is smooth, thick, and dark tan.',
        hear: 'Soft sizzling of onions.',
        smell: 'Incredible aroma of toasted coconut and caramelized onion.',
        textureCheck: 'Smooth, thick paste.',
        whatShouldThisLookLike: 'Dark tan, smooth roasted coconut-onion paste.',
        tip: 'Do not burn the coconut black; deep golden-brown is the target.',
        commonMistake: 'Using fresh wet coconut — Misal requires dry coconut (copra) for shelf-life and roasted depth.',
        moveOnWhen: 'Vatan paste is blended smooth.',
        quickInstructions: 'Roast dry coconut and onions until dark brown; blend with poppy seeds and ginger-garlic into smooth paste.'
      },
      {
        step: 2,
        title: 'COOK THE FIERY RED RASSA (TARRI STAGE)',
        whatYouNeed: ['4 tbsp oil', '1 tsp mustard seeds', '1/4 tsp hing', '15 curry leaves', 'Vatan paste', 'Chopped tomatoes', '2 tbsp Kanda Lasun / Goda masala', '2 tbsp Kashmiri chili powder', '1/2 tsp turmeric', '700ml hot water', '2 tsp salt', 'Heavy pot'],
        description: 'Heat 4 tbsp oil in your pot over medium heat. Crackle mustard seeds, hing, and curry leaves. Add the ground vatan paste and sauté for 5–6 minutes until oil begins separating. Add chopped tomatoes, Kanda Lasun/Goda masala, Kashmiri chili powder, turmeric, and salt. Cook for 4 minutes until tomatoes break down. Pour in 700ml hot water. Bring to a rolling boil, then lower heat to low-medium. Simmer uncovered for 10–12 minutes until a shimmering, fiery crimson layer of spiced red oil (tarri/kat) floats proudly across the entire surface.',
        howToDoIt: 'Generous oil combined with slow simmering over low heat extracts fat-soluble red capsanthin pigments from the chili, creating the signature floating spicy oil layer (tarri) that defines Maharashtrian misal.',
        heat: 'Medium then Low-Medium Heat',
        heatDescription: 'Gentle simmering; red oil collecting on surface.',
        duration: 18,
        visualCues: 'A thick, glowing, fiery-red oil layer (tarri) floats like a mirror over the dark, bubbling spiced broth.',
        hear: 'Quiet, steady bubbling.',
        smell: 'Intensely spicy, aromatic, garlicky, and roasted coconut fragrance.',
        textureCheck: 'Thin, spicy, drinkable broth beneath shimmering red oil.',
        whatShouldThisLookLike: 'Fiery red rassa with a generous floating pool of scarlet oil on top.',
        tip: 'Skim off 1 cup of the floating red tarri into a small bowl; serve on the side so diners can spoon extra heat onto their bowl.',
        commonMistake: 'Using too little oil — without oil, the signature floating tarri cannot form.',
        moveOnWhen: 'Tarri is floating and broth has simmered 12 minutes.',
        quickInstructions: 'Sauté vatan paste in oil; add tomatoes and spices, cook 5 mins. Add 700ml water, simmer 12 mins until red tarri floats.'
      },
      {
        step: 3,
        title: 'SIMMER SPROUTED BEANS (USAL BASE)',
        whatYouNeed: ['250g boiled sprouted matki', '150g boiled cubed potatoes', 'Simmering rassa'],
        description: 'Add the boiled sprouted moth beans and cubed potatoes into the simmering rassa. Simmer gently on low heat for 5 minutes so the sprouts absorb the spicy gravy without becoming mushy.',
        howToDoIt: 'Adding the pre-boiled sprouts at the end preserves their delicate sprout tails and fresh crunch.',
        heat: 'Low Heat',
        heatDescription: 'Gentle simmer.',
        duration: 5,
        visualCues: 'Tender sprouted beans and soft potatoes suspended in the rich red gravy.',
        hear: 'Soft bubbling.',
        smell: 'Wholesome sprouted bean and spicy curry aroma.',
        textureCheck: 'Tender sprouts with a slight snap; soft potatoes.',
        whatShouldThisLookLike: 'Sprouted beans and potatoes bathed in fiery broth.',
        tip: 'Do not over-cook sprouts; they should maintain their delicate tails.',
        commonMistake: 'Boiling sprouts for 30 minutes, turning them into paste.',
        moveOnWhen: 'Sprouts are heated through and infused with gravy.',
        quickInstructions: 'Add boiled sprouted matki and potatoes into rassa; simmer on low for 5 mins.'
      },
      {
        step: 4,
        title: 'THE MULTI-TIERED MISAL ASSEMBLY',
        whatYouNeed: ['Hot usal (beans & gravy)', 'Extra red tarri broth', '150g crunchy farsan/sev', 'Finely minced raw onions', 'Chopped cilantro', 'Lemon wedges', 'Warm buttered pav'],
        description: 'Take a deep serving bowl. Ladle 1 generous cup of sprouted matki and potatoes (the Usal) at the bottom. Ladle 1/2 cup of hot fiery rassa over the beans. Heap a generous mountain of crunchy farsan / mixed sev on top. Spoon a ladle of the shimmering red tarri directly over the farsan. Top with a spoonful of finely minced raw red onions and fresh cilantro. Squeeze fresh lemon juice over the top. Serve immediately with warm butter-toasted pav.',
        howToDoIt: 'Layering crunchy farsan directly on top of hot beans and drowning it in spicy red broth creates the legendary textural contrast: crunchy farsan drinking in fiery gravy against soft tender sprouts.',
        heat: 'Off',
        heatDescription: 'Assembly.',
        duration: 2,
        visualCues: 'A towering, vibrant bowl: golden crunchy farsan crowned with raw onions and cilantro, surrounded by a moat of glowing scarlet tarri.',
        hear: 'Satisfying sizzle/crunch as hot broth meets crispy farsan.',
        smell: 'Explosive, spicy, citrusy, and savory fragrance.',
        textureCheck: 'Crunchy farsan melting into spicy broth over tender sprouts.',
        whatShouldThisLookLike: 'The authentic, show-stopping Kolhapuri Misal Pav.',
        tip: 'Serve immediately so the farsan stays crispy as you begin eating.',
        commonMistake: 'Mixing everything in the pot — Misal MUST be assembled in individual bowls layer by layer.',
        moveOnWhen: 'Bowl is assembled with usal, rassa, farsan, onions, cilantro, and lemon.',
        quickInstructions: 'Layer hot beans in bowl, add rassa, heap with crunchy farsan, ladle red tarri, top with onions, cilantro, and lemon.'
      }
    ],
    commonMistakes: [
      { mistake: 'Misal was bland and lacked the red oil sheen (tarri).', remedy: 'You didn\'t use enough oil or roasted coconut paste. Misal requires adequate oil to carry the chili pigment.' },
      { mistake: 'Farsan turned soggy before serving.', remedy: 'Farsan was added too early. Always add farsan right at the moment of serving.' }
    ],
    troubleshooting: [
      {
        problem: 'Rassa is too fiery for sensitive palates',
        whatHappened: 'Kolhapuri chili heat is intense.',
        whyItHappened: 'Heavy spice paste.',
        whatToDoNow: 'Serve a small bowl of thick chilled plain yogurt (dahi) or sweet coconut milk alongside to temper the heat (Dahi Misal style).',
        howToPrevent: 'Use mild Kashmiri chili powder and reduce green chilies.'
      }
    ],
    substitutions: [
      { original: 'Sprouted Matki (moth beans)', substitute: 'Sprouted whole moong beans or brown chickpeas', notes: 'Moong bean misal is nutritious, sweet, and widely popular.' }
    ],
    safetyNotes: [
      'The red tarri can be intensely spicy; taste before spooning extra over the bowl.'
    ],
    servingGuide: {
      restingTime: 'Serve immediately.',
      garnishing: 'Crowned with crunchy farsan, diced raw red onions, cilantro, and a wedge of lemon.',
      plating: 'Serve the assembled bowl on a tray flanked by buttered ladi pav, an extra bowl of hot red rassa/tarri, and lemon.',
      temperature: 'Piping hot and fiery.',
      accompaniments: 'Buttered ladi pav, extra tarri, sweet buttermilk (chaas), or chilled dahi.'
    }
  },

  // 38. PURAN POLI
  {
    id: 'puran-poli',
    name: 'Maharashtrian Puran Poli (Sweet Lentil Stuffed Flatbread)',
    cuisine: 'Indian',
    region: 'Western Indian (Maharashtra)',
    servings: 4,
    prepTime: 30,
    cookTime: 25,
    difficulty: 'Hard',
    overview: {
      summary: 'Sacred Maharashtrian festive flatbread: split Bengal gram (chana dal) simmered until soft, cooked down with organic jaggery, cardamom, and nutmeg into a silky, golden sweet paste (puran). Enveloped in an ultra-soft whole wheat and maida dough, rolled paper-thin, and pan-roasted on a tawa with generous desi ghee until golden and puffed.',
      appearance: 'Thin, golden, translucent flatbread with speckled golden-brown blisters, revealing the warm amber sweet lentil filling within, slathered with pure melted ghee.',
      texture: 'Paper-thin, incredibly soft, tender, and melt-in-the-mouth; folds like silk with zero resistance.',
      flavor: 'Rich, comforting caramel sweetness from jaggery, nutty chana dal, warming green cardamom, and aromatic nutmeg, enriched with ghee.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Puran Yantra (traditional food mill) or fine-mesh sieve', purpose: 'Passes hot cooked chana dal and jaggery into a lump-free, silky smooth paste.' },
      { name: 'Heavy iron tawa', purpose: 'For gentle, even pan-roasting without burning the sweet jaggery filling.' },
      { name: 'Rolling pin (belan)', purpose: 'To roll stuffed dough paper-thin.' }
    ],
    beforeYouStart: [
      { task: 'Soak 200g chana dal in water for 1 hour; drain.', durationMinutes: 60 },
      { task: 'Grate or chop 200g organic jaggery (gud) into fine shavings.', durationMinutes: 5 },
      { task: 'Grind 1/2 tsp green cardamom and freshly grate 1/4 tsp whole nutmeg.', durationMinutes: 3 }
    ],
    ingredientPrepGuide: [
      { item: 'Puran Consistency Test (The Spatula Stand Test)', technique: 'Cook cooked mashed chana dal with jaggery in a pan until thick and glossy. Insert a wooden spatula upright in the center of the puran: if the spatula stands straight up without tilting or falling over, the puran is cooked to perfect rolling consistency. If it falls, cook for 3–4 more minutes to evaporate excess moisture.' },
      { item: 'Soft Dough Rule', technique: 'Knead the wheat flour dough with oil until it is exceptionally soft and stretchy (equal in softness to the puran paste). If the dough is firmer than the puran, the filling will squirt out when rolled.' }
    ],
    essentialIngredients: [
      { name: 'Chana dal (split Bengal gram)', prep: 'soaked 1 hour & boiled tender', amount: '200g', metric: '200g', imperial: '7 oz', common: '1 cup dry' },
      { name: 'Jaggery (Gud)', prep: 'finely grated / powdered', amount: '200g', metric: '200g', imperial: '7 oz', common: '1 cup packed' },
      { name: 'Green cardamom powder', prep: 'freshly ground', amount: '1/2 tsp', metric: '1.5g', imperial: '0.05 oz', common: '1/2 tsp' },
      { name: 'Nutmeg powder (jaiphal)', prep: 'freshly grated', amount: '1/4 tsp', metric: '0.7g', imperial: '0.02 oz', common: 'pinch' },
      { name: 'Chakki Atta (whole wheat flour)', prep: 'sifted', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '1 cup' },
      { name: 'All-purpose flour (Maida)', prep: 'for elasticity', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '3/4 cup' },
      { name: 'Turmeric powder', prep: 'tiny pinch for golden dough tint', amount: '1/8 tsp', metric: '0.5g', imperial: '0.02 oz', common: 'pinch' },
      { name: 'Fine sea salt', prep: 'pinch for dough balance', amount: '1/4 tsp', metric: '1.5g', imperial: '0.05 oz', common: '1/4 tsp' },
      { name: 'Vegetable oil', prep: 'for kneading stretchy dough', amount: '3 tbsp', metric: '45ml', imperial: '1.5 fl oz', common: '3 tbsp' },
      { name: 'Water for dough', prep: 'lukewarm', amount: '150ml', metric: '150ml', imperial: '5 fl oz', common: '2/3 cup' },
      { name: 'Rice flour or fine atta for dusting', prep: 'for rolling', amount: '50g', metric: '50g', imperial: '1.8 oz', common: '1/3 cup' },
      { name: 'Pure Desi Ghee', prep: 'warm melted for roasting & slathering', amount: '80g', metric: '80g', imperial: '2.8 oz', common: '5 tbsp' }
    ],
    optionalIngredients: [
      { name: 'Saffron threads (kesar)', prep: 'dissolved in 1 tsp milk for royal aroma in puran', amount: 'pinch', metric: '0.2g', imperial: '0.01 oz', common: 'pinch', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'BOIL CHANA DAL TO BUTTERY SOFTNESS',
        whatYouNeed: ['200g soaked chana dal', '600ml water', 'Pinch of turmeric', 'Pressure cooker or pot', 'Colander'],
        description: 'Place soaked chana dal in pressure cooker with 600ml water and pinch of turmeric. Cook for 4 whistles (approx 15 minutes) until dal is completely soft and mashes easily between fingers with zero hard grit, but is not waterlogged. Drain thoroughly in a colander for 10 minutes. (Reserve the dark lentil stock to make Maharashtrian Katachi Amti!).',
        howToDoIt: 'Draining the cooked dal thoroughly is critical; excess water will make the jaggery puran runny and impossible to roll inside dough.',
        heat: 'Medium-High Pressure',
        heatDescription: 'Steady pressure cooking.',
        duration: 20,
        visualCues: 'Dal swells, turns deep yellow, and crushes into smooth cream between two fingers.',
        hear: 'Pressure cooker whistles.',
        smell: 'Sweet, earthy cooked lentil aroma.',
        textureCheck: 'Buttery soft; zero chalkiness.',
        whatShouldThisLookLike: 'Tender cooked chana dal drained dry in a strainer.',
        tip: 'Save the drained cooking water! It is the foundation for authentic Katachi Amti (spicy dal broth).',
        commonMistake: 'Under-cooking dal — firm dal grains will create lumps that pierce through the dough during rolling.',
        moveOnWhen: 'Dal is completely soft and thoroughly drained.',
        quickInstructions: 'Pressure cook chana dal with water for 15 mins until buttery soft; drain completely.'
      },
      {
        step: 2,
        title: 'COOK PURAN WITH JAGGERY & THE SPATULA TEST',
        whatYouNeed: ['Drained cooked dal', '200g grated jaggery', '1/2 tsp cardamom', '1/4 tsp nutmeg', 'Puran Yantra / sieve', 'Pan'],
        description: 'Pass the warm drained dal through a puran yantra or press through a fine-mesh sieve with the back of a ladle to achieve a velvety, lump-free mash. Transfer to a pan over medium-low heat. Add grated jaggery. The mixture will initially liquefy as jaggery melts. Cook for 12–15 minutes, stirring continuously, until it thickens into a glossy, dense paste. Perform the Spatula Test: stand your wooden spatula upright in the center; if it stands without falling, it is done. Stir in cardamom and nutmeg. Remove and cool completely.',
        howToDoIt: 'Passing through a fine sieve guarantees absolute smoothness with zero lumps. Cooling firms the puran into a moldable paste.',
        heat: 'Medium-Low Heat',
        heatDescription: 'Gentle bubbling and thickening.',
        duration: 18,
        visualCues: 'Puran turns from watery light tan into a thick, glossy, amber-golden paste that pulls away from pan sides.',
        hear: 'Soft plop-plop bubbling.',
        smell: 'Warm caramel jaggery, sweet lentils, and fragrant cardamom-nutmeg.',
        textureCheck: 'Firm, dense, moldable paste; passes the upright spatula test.',
        whatShouldThisLookLike: 'Smooth, golden-amber sweet lentil fudge.',
        tip: 'Puran firms up significantly as it cools; do not over-dry on the stove or it will turn hard like rock.',
        commonMistake: 'Leaving dal lumps — lumps will tear the dough during rolling.',
        moveOnWhen: 'Puran passes the upright spatula test and is cooled to room temperature.',
        quickInstructions: 'Mash dal through sieve, cook with jaggery 15 mins until spatula stands upright. Stir in spices, cool completely.'
      },
      {
        step: 3,
        title: 'KNEAD ULTRA-SOFT ELASTIC DOUGH',
        whatYouNeed: ['150g atta', '100g maida', '1/8 tsp turmeric', '1/4 tsp salt', '3 tbsp oil', '150ml warm water'],
        description: 'In a bowl, combine atta, maida, pinch of turmeric, salt, and 1 tbsp oil. Gradually add warm water and knead for 6–8 minutes into a very soft, stretchy dough. Add remaining 2 tbsp oil, working it into the dough until shiny and supple. Cover with a damp cloth and rest for 30 minutes.',
        howToDoIt: 'Maida adds elastic gluten stretch, while ample oil tenderizes the dough so it can be rolled paper-thin without snapping or tearing.',
        heat: 'Off',
        heatDescription: 'Dough station.',
        duration: 35,
        visualCues: 'A shiny, soft, golden-yellow dough that stretches easily when pulled.',
        hear: 'None',
        smell: 'Fresh dough.',
        textureCheck: 'Soft as an earlobe, stretchy, supple, non-sticky.',
        whatShouldThisLookLike: 'Oiled, soft, relaxed dough ball.',
        tip: 'The dough MUST be as soft as the cooled puran filling.',
        commonMistake: 'Making a stiff dough — stiff dough causes the soft filling to squirt out during rolling.',
        moveOnWhen: 'Dough is kneaded and has rested for 30 minutes.',
        quickInstructions: 'Knead flours, turmeric, salt, oil, and water into very soft elastic dough; rest 30 mins.'
      },
      {
        step: 4,
        title: 'STUFF & ROLL PAPER-THIN',
        whatYouNeed: ['Rested dough', 'Cooled puran filling', 'Rice flour for dusting', 'Rolling pin'],
        description: 'Divide dough into 6 equal balls (approx 50g each). Divide puran into 6 equal balls (approx 70g each — note puran is larger than dough!). Take one dough ball, flatten into a 10cm disc with thin edges. Place a puran ball in the center. Bring dough edges up around the sweet filling, pleating like a pouch. Pinch top tightly to seal, flatten gently between palms. Dip generously in rice flour. Roll with gentle, light, uniform pressure from center outward into a paper-thin, 20cm (8 inch) roundel about 1.5mm thick.',
        howToDoIt: 'Using a 1:1.5 dough-to-puran ratio creates the quintessential authentic poli where the dough is a gossamer whisper holding rich sweet filling. Rice flour provides a smooth glide for rolling without sticking.',
        heat: 'Off',
        heatDescription: 'Rolling station.',
        duration: 5,
        visualCues: 'Golden-amber sweet filling is visible through the paper-thin translucent dough skin with zero tears.',
        hear: 'None',
        smell: 'Sweet jaggery and cardamom.',
        textureCheck: 'Paper-thin, flexible disc (1.5mm).',
        whatShouldThisLookLike: 'An even 20cm round sweet flatbread with filling visible edge to edge.',
        tip: 'Use rice flour for dusting — rice flour has no gluten, so it does not make the dough tough during rolling.',
        commonMistake: 'Pressing hard with the rolling pin — roll with gentle, feather-light strokes.',
        moveOnWhen: 'Puran poli is rolled paper-thin with no tears.',
        quickInstructions: 'Enclose 70g puran ball in 50g dough disc; pinch seal, dust with rice flour, roll paper-thin to 20cm.'
      },
      {
        step: 5,
        title: 'PAN-ROAST ON TAWA WITH GHEE',
        whatYouNeed: ['Rolled puran poli', 'Heavy iron tawa over Medium heat', 'Melted desi ghee', 'Flat metal spatula'],
        description: 'Gently lay the puran poli onto a preheated medium tawa. Cook for 30 seconds until small bubbles rise. Flip over. Brush 1 tbsp melted desi ghee across the top. Cook for 35 seconds, flip again, and brush 1 tbsp ghee on the other side. The puran poli will puff up like a round balloon! Press edges gently with spatula. Once both sides have light golden-brown speckles, slide immediately onto a plate.',
        howToDoIt: 'Trapped moisture from the jaggery filling vaporizes into steam, inflating the two paper-thin dough sheets into a hollow balloon while ghee crisps the surface.',
        heat: 'Medium Heat',
        heatDescription: 'Lively sizzle in melted ghee.',
        duration: 2,
        visualCues: 'Puran poli inflates into a complete puffed globe; delicate golden speckles appear on both faces.',
        hear: 'Quiet sizzle of melting ghee.',
        smell: 'Heavenly aroma of toasted wheat, nutty ghee, and warm caramelized jaggery.',
        textureCheck: 'Slightly crisp surface, extraordinarily soft and tender.',
        whatShouldThisLookLike: 'Puffed golden Maharashtrian Puran Poli.',
        tip: 'Keep heat at medium; high heat will burn the sweet jaggery sugar inside.',
        commonMistake: 'Over-cooking on the pan — cook for under 90 seconds total to preserve softness.',
        moveOnWhen: 'Poli puffs into a balloon with golden speckles; transfer to plate.',
        quickInstructions: 'Cook on medium tawa 30s per side; brush liberally with ghee, let puff into a balloon, remove.'
      }
    ],
    commonMistakes: [
      { mistake: 'Puran burst out while rolling.', remedy: 'The puran had hard unmashed dal lumps or the dough was firmer than the filling. Always sieve dal and knead soft dough.' },
      { mistake: 'Puran poli turned hard and chewy.', remedy: 'You cooked it too long on low heat. Cook over medium heat for under 90 seconds total with generous ghee.' }
    ],
    troubleshooting: [
      {
        problem: 'Puran filling is too sticky and loose to shape into balls',
        whatHappened: 'Moisture did not fully evaporate during cooking.',
        whyItHappened: 'Under-cooked jaggery mixture.',
        whatToDoNow: 'Return puran to the pan and cook on low heat for 4–5 more minutes until it passes the upright spatula test, or stir in 1 tbsp roasted gram flour (besan).',
        howToPrevent: 'Always test with the upright spatula before turning off the heat.'
      }
    ],
    substitutions: [
      { original: 'Jaggery (Gud)', substitute: 'Granulated sugar (produces pale yellow Gujarati Vedmi / Puran Puri)', notes: 'Sugar creates a clean, sweet taste; jaggery gives traditional earthy caramel depth.' }
    ],
    safetyNotes: [
      'Hot jaggery steam inside the puffed poli is scalding; handle with care.'
    ],
    servingGuide: {
      restingTime: '1 minute.',
      garnishing: 'Slather with a generous spoonful of warm melted pure desi ghee.',
      plating: 'Serve folded in half on a festive thali.',
      temperature: 'Warm or room temperature.',
      accompaniments: 'Katachi Amti (spicy sour lentil broth made from reserved dal water), warm milk (saai doodh), or a dollop of fresh cream.'
    }
  },

  // 39. POHA (KANDA POHA)
  {
    id: 'poha',
    name: 'Maharashtrian Kanda Batata Poha (Spiced Flattened Rice)',
    cuisine: 'Indian',
    region: 'Western Indian (Maharashtra / Indore)',
    servings: 4,
    prepTime: 10,
    cookTime: 15,
    difficulty: 'Very Easy',
    overview: {
      summary: 'The beloved everyday Western Indian breakfast: thick flattened rice (jadha poha) rinsed gently until soft and fluffy, tempered in peanut oil with crackling mustard seeds, crunchy roasted peanuts, green chilies, turmeric, and curry leaves, tossed with soft steamed potatoes and sweet caramelized onions, finished with fresh lemon juice, grated coconut, and crispy sev.',
      appearance: 'Vibrant, sunny-yellow fluffy flattened rice speckled with red roasted peanuts, soft golden potato cubes, dark mustard seeds, and emerald cilantro, topped with fine sev.',
      texture: 'Fluffy, light, tender, and moist (never mushy or dry), with wonderful crunchy peanut and sev bursts.',
      flavor: 'Bright, citrusy, sweet-savory, and nutty with gentle green chili warmth and mustard pungency.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Colander / mesh strainer', purpose: 'For rinsing poha briefly and draining every drop of excess water.' },
      { name: 'Heavy kadhai or wide skillet with tight lid', purpose: 'For steam-finishing the rice flakes.' }
    ],
    beforeYouStart: [
      { task: 'Place 250g thick poha (flattened rice) in a colander; rinse under gentle running cold water for 30 seconds; drain completely and let rest 10 minutes to fluff.', durationMinutes: 10 },
      { task: 'Cut 1 large potato into small 1cm cubes.', durationMinutes: 3 }
    ],
    ingredientPrepGuide: [
      { item: 'Poha Selection & Rinsing Rule', technique: 'Use THICK poha (Jadha Poha). Never use thin paper poha (which turns into paste). Rinse gently in a colander under running water and drain immediately. DO NOT soak in a bowl of water! As it rests in the colander, it absorbs surface moisture and fluffs up into separate, tender grains.' }
    ],
    essentialIngredients: [
      { name: 'Thick flattened rice (Jadha Poha)', prep: 'rinsed & drained 10 mins', amount: '250g', metric: '250g', imperial: '8.8 oz', common: '3 cups' },
      { name: 'Raw peanuts (with red skin)', prep: 'for crunchy bite', amount: '50g', metric: '50g', imperial: '1.8 oz', common: '1/3 cup' },
      { name: 'Potato (Batata)', prep: 'cut into small 1cm cubes', amount: '1 large', metric: '150g', imperial: '5.3 oz', common: '1 cup cubes' },
      { name: 'Red onion (Kanda)', prep: 'finely diced', amount: '2 medium', metric: '180g', imperial: '6.3 oz', common: '1 cup' },
      { name: 'Green chilies', prep: 'finely minced', amount: '3 chilies', metric: '15g', imperial: '0.5 oz', common: '3 chilies' },
      { name: 'Mustard seeds', prep: 'whole black', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Hing (asafoetida)', prep: 'powder', amount: '1/4 tsp', metric: '1g', imperial: '0.03 oz', common: '1/4 tsp' },
      { name: 'Fresh curry leaves', prep: 'fresh', amount: '15 leaves', metric: '2g', imperial: '0.07 oz', common: '2 sprigs' },
      { name: 'Turmeric powder', prep: 'for bright yellow hue', amount: '1/2 tsp', metric: '1.5g', imperial: '0.05 oz', common: '1/2 tsp' },
      { name: 'Granulated sugar', prep: 'essential sweet-savory balance', amount: '1.5 tsp', metric: '6g', imperial: '0.2 oz', common: '1.5 tsp' },
      { name: 'Fine sea salt', prep: 'to taste', amount: '1.5 tsp', metric: '9g', imperial: '0.3 oz', common: '1.5 tsp' },
      { name: 'Peanut oil or neutral vegetable oil', prep: 'for sautéing', amount: '2.5 tbsp', metric: '38ml', imperial: '1.3 fl oz', common: '2.5 tbsp' },
      { name: 'Fresh lemon juice', prep: 'freshly squeezed', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp' },
      { name: 'Fresh cilantro', prep: 'finely chopped', amount: '1/3 cup', metric: '20g', imperial: '0.7 oz', common: '1/3 cup' }
    ],
    optionalIngredients: [
      { name: 'Fine Besan Sev (Nylon Sev)', prep: 'for street-style crunchy topping', amount: '4 tbsp', metric: '30g', imperial: '1 oz', common: '1/4 cup', optional: true },
      { name: 'Freshly grated coconut', prep: 'for garnish', amount: '2 tbsp', metric: '15g', imperial: '0.5 oz', common: '2 tbsp', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'FRY PEANUTS & CRISP POTATO CUBES',
        whatYouNeed: ['2.5 tbsp oil', '50g raw peanuts', '150g potato cubes', 'Pinch of salt', 'Heavy kadhai'],
        description: 'Heat 2.5 tbsp oil in your kadhai over medium heat. Add raw peanuts and fry for 2 minutes until they turn golden-brown, crackle, and smell nutty. Remove half the peanuts and set aside for crunchy garnish. To the remaining oil and peanuts, add the diced potatoes and a pinch of salt. Cover with lid and cook on medium-low heat for 5–6 minutes, stirring occasionally, until potatoes are golden-edged and fork-tender.',
        howToDoIt: 'Cooking small potato cubes directly in the peanut oil crisps their exterior while steam cooks their center, infusing them with nutty peanut richness.',
        heat: 'Medium Heat',
        heatDescription: 'Active frying.',
        duration: 8,
        visualCues: 'Peanuts crackle and turn golden-red; potato cubes turn golden-brown and are easily pierced with a fork.',
        hear: 'Lively crackling of peanuts and potatoes.',
        smell: 'Fragrant toasted peanuts and fried potatoes.',
        textureCheck: 'Tender potato cubes with crisp edges.',
        whatShouldThisLookLike: 'Golden potato cubes and peanuts sizzling in oil.',
        tip: 'Cut potatoes into tiny 1cm cubes so they cook through quickly without boiling.',
        commonMistake: 'Burning the peanuts by leaving them un-stirred over high heat.',
        moveOnWhen: 'Potatoes are fork-tender and golden.',
        quickInstructions: 'Fry peanuts in oil until golden; add potato cubes, cover and cook 5-6 mins until tender.'
      },
      {
        step: 2,
        title: 'TEMPER AROMATICS & SWEAT ONIONS',
        whatYouNeed: ['1 tsp mustard seeds', '1/4 tsp hing', '15 curry leaves', '3 minced green chilies', '180g diced red onions', '1/2 tsp turmeric'],
        description: 'Push potatoes to the side. Add mustard seeds to the hot oil; let them pop vigorously. Add hing, curry leaves, and green chilies; sauté for 20 seconds. Add diced onions. Sauté for 3–4 minutes until onions turn soft and translucent (do not brown). Stir in 1/2 tsp turmeric powder.',
        howToDoIt: 'Keeping onions soft and sweet (rather than browned) provides the moist, juicy base that hydrates the flattened rice.',
        heat: 'Medium Heat',
        heatDescription: 'Steady sizzle.',
        duration: 5,
        visualCues: 'Onions turn translucent, glossy, and bright yellow from turmeric; curry leaves crisp.',
        hear: 'Popping mustard seeds and gentle sizzle of onions.',
        smell: 'Sharp mustard, fried green chilies, and sweet onion aroma.',
        textureCheck: 'Soft, translucent onion mixture.',
        whatShouldThisLookLike: 'Bright yellow sautéed onions, potatoes, and peanuts.',
        tip: 'Do not brown the onions; they must remain translucent and juicy.',
        commonMistake: 'Adding turmeric directly onto dry poha — always bloom turmeric in hot oil so it distributes evenly.',
        moveOnWhen: 'Onions are soft and translucent.',
        quickInstructions: 'Pop mustard seeds, hing, curry leaves, chilies; sauté onions 3 mins until soft; stir in turmeric.'
      },
      {
        step: 3,
        title: 'TOSS POHA & STEAM UNDER LID',
        whatYouNeed: ['Fluffed drained poha', '1.5 tsp salt', '1.5 tsp sugar', '2 tbsp lemon juice', 'Kadhai lid'],
        description: 'Fluff the drained poha gently with your fingers to separate grains. Tip into the kadhai over the onion-potato base. Sprinkle salt, sugar, and fresh lemon juice all over. Gently fold everything together with a flat spatula from bottom to top until every rice flake is coated in the sunny-yellow turmeric oil. Cover with a tight lid, reduce heat to the lowest setting, and let steam for exactly 2 minutes.',
        howToDoIt: 'Trapping steam under the lid for 2 minutes plumps the rice flakes with moisture and melts the sugar into the lemon juice, ensuring the poha stays moist and fluffy without drying out.',
        heat: 'Lowest Heat',
        heatDescription: 'Gentle steaming warmth.',
        duration: 3,
        visualCues: 'Poha turns a uniform, vibrant sunshine-yellow; steam rises under the lid.',
        hear: 'Quiet whisper of steam.',
        smell: 'Zesty lemon, sweet sugar, turmeric, and peanuts.',
        textureCheck: 'Fluffy, separate, tender grains with zero mushiness.',
        whatShouldThisLookLike: 'Vibrant yellow, fluffy Poha steaming in the pan.',
        tip: 'Fold gently with a wide spatula; aggressive stirring with a spoon will break the fragile softened rice flakes into paste.',
        commonMistake: 'Skipping the 2-minute lid steam — without steam, poha can taste dry and sandy.',
        moveOnWhen: 'Poha is uniformly yellow, hot, and steamed 2 minutes.',
        quickInstructions: 'Fold fluffed poha, salt, sugar, and lemon juice into pan; cover and steam on low for 2 mins.'
      },
      {
        step: 4,
        title: 'GARNISH & SERVE',
        whatYouNeed: ['Hot poha', 'Reserved crispy peanuts', 'Fresh cilantro', '2 tbsp grated coconut', '4 tbsp nylon sev', 'Lemon wedges'],
        description: 'Turn off heat. Scatter the reserved crunchy peanuts, fresh chopped cilantro, fresh grated coconut, and fine nylon sev over the top. Serve immediately with extra lemon wedges.',
        howToDoIt: 'Adding the reserved peanuts and sev at the very end guarantees that every bite has contrasting textures: fluffy soft rice and shatteringly crisp crunch.',
        heat: 'Off',
        heatDescription: 'Garnishing.',
        duration: 1,
        visualCues: 'Vibrant yellow poha crowned with green herbs, white coconut, golden sev, and red peanuts.',
        hear: 'None',
        smell: 'Fresh cilantro, lemon zest, and toasted peanuts.',
        textureCheck: 'Fluffy, tender rice flakes contrasted with crispy sev and peanuts.',
        whatShouldThisLookLike: 'Colorful, tempting Mumbai / Indori Poha.',
        tip: 'Serve immediately while hot and fluffy.',
        commonMistake: 'Letting poha sit uncovered — it will dry out.',
        moveOnWhen: 'Garnished and ready to serve.',
        quickInstructions: 'Top with reserved peanuts, fresh cilantro, grated coconut, and sev; serve with lemon.'
      }
    ],
    commonMistakes: [
      { mistake: 'Poha turned into a soggy paste.', remedy: 'You soaked the poha in water or used thin paper poha. Use thick poha and only rinse in a colander under running water.' },
      { mistake: 'Poha was dry and hard to swallow.', remedy: 'You didn\'t rinse enough or skipped covering with a lid for 2 minutes with sugar and lemon juice.' }
    ],
    troubleshooting: [
      {
        problem: 'Poha feels slightly dry while tossing in the pan',
        whatHappened: 'Moisture evaporated too quickly.',
        whyItHappened: 'Heat was too high.',
        whatToDoNow: 'Sprinkle 2 tablespoons of water with your fingers over the poha, cover tightly with lid, and steam on low for 2 minutes.',
        howToPrevent: 'Always steam covered on lowest heat.'
      }
    ],
    substitutions: [
      { original: 'Thick Poha', substitute: 'Red rice poha or Brown rice poha', notes: 'Red rice poha is extraordinarily nutritious with a nutty, chewy bite.' }
    ],
    safetyNotes: [
      'Hot oil and popping mustard seeds can splatter; keep heat at medium.'
    ],
    servingGuide: {
      restingTime: 'Serve immediately.',
      garnishing: 'Nylon sev, fresh grated coconut, crispy peanuts, cilantro, and lemon wedge.',
      plating: 'Serve in a shallow plate or breakfast bowl.',
      temperature: 'Steaming hot.',
      accompaniments: 'Hot cutting masala chai, spicy green chili, and jalebi (the classic Indore Poha-Jalebi combo).'
    }
  },

  // 40. GUJARATI THALI
  {
    id: 'gujarati-thali',
    name: 'Authentic Kathiyawadi Gujarati Thali',
    cuisine: 'Indian',
    region: 'Western Indian (Gujarat / Kathiawar)',
    servings: 4,
    prepTime: 40,
    cookTime: 45,
    difficulty: 'Hard',
    overview: {
      summary: 'The grand vegetarian feast representing the five sacred tastes (sweet, sour, salty, bitter, spicy) in complete harmony: Sweet-Tangy Gujarati Khatti Meethi Dal (toor dal simmered with jaggery, peanuts, kokum, and cloves), Batata nu Shaak (cumin-spiced potato curry), soft paper-thin Phulkas with ghee, steamed Basmati rice, crunchy Kachumber salad, spicy green chili pickle, and silky Elaichi Shrikhand.',
      appearance: 'A magnificent large round stainless steel thali laden with concentric small katoris containing golden dal, potato shaak, white rice, folded rotlis, pickle, and a bowl of chilled creamy saffron-cardamom shrikhand.',
      texture: 'Superb balance of creamy, crunchy, soft, and soupy textures across all components.',
      flavor: 'Exquisite harmony of jaggery sweetness, lemon/kokum sourness, warming ginger-garlic-chili spice, and pure dairy richness.',
      restingTimeMinutes: 5
    },
    equipment: [
      { name: 'Large stainless steel Thali with 5 katoris (bowls)', purpose: 'Traditional compartmentalized royal Indian presentation.' },
      { name: 'Medium pots', purpose: 'For cooking dal and shaak simultaneously.' }
    ],
    beforeYouStart: [
      { task: 'Boil 150g toor dal with peanuts until creamy smooth; strain 2 tbsp kokum/tamarind pulp.', durationMinutes: 25 },
      { task: 'Boil and cube 3 medium potatoes for Batata nu Shaak.', durationMinutes: 15 },
      { task: 'Hang 300g yogurt for 2 hours, whisk with 4 tbsp powdered sugar, saffron, and cardamom to make Shrikhand; chill.', durationMinutes: 120 }
    ],
    ingredientPrepGuide: [
      { item: 'Gujarati Dal Harmony', technique: 'The soul of a Gujarati thali is the toor dal: simmer cooked dal with raw peanuts, cinnamon, cloves, jaggery, and kokum. It must taste distinctly sweet, tangy, and spicy in a single spoonful.' }
    ],
    essentialIngredients: [
      { name: 'Toor dal (split pigeon peas)', prep: 'cooked smooth for Gujarati dal', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '3/4 cup' },
      { name: 'Raw peanuts', prep: 'boiled in dal', amount: '2 tbsp', metric: '20g', imperial: '0.7 oz', common: '2 tbsp' },
      { name: 'Jaggery (Gud)', prep: 'shaved for dal', amount: '2 tbsp', metric: '25g', imperial: '0.9 oz', common: '2 tbsp' },
      { name: 'Kokum or lemon juice', prep: 'for dal tang', amount: '3 pieces', metric: '6g', imperial: '0.2 oz', common: '3 pieces' },
      { name: 'Potatoes (Batata)', prep: 'boiled & cubed', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '2 large' },
      { name: 'Whole wheat flour (Atta)', prep: 'for 8 soft rotlis', amount: '200g', metric: '200g', imperial: '7 oz', common: '1.5 cups' },
      { name: 'Basmati rice', prep: 'steamed fluffy', amount: '200g', metric: '200g', imperial: '7 oz', common: '1 cup' },
      { name: 'Hung curd (for Shrikhand)', prep: 'sweetened with sugar & cardamom', amount: '200g', metric: '200g', imperial: '7 oz', common: '1 cup' },
      { name: 'Desi Ghee', prep: 'divided across dishes', amount: '4 tbsp', metric: '60g', imperial: '2.1 oz', common: '4 tbsp' },
      { name: 'Mustard seeds, cumin, hing, curry leaves', prep: 'for dal and shaak tadka', amount: '2 portions', metric: '10g', imperial: '0.35 oz', common: 'spices' },
      { name: 'Fine sea salt', prep: 'to taste across dishes', amount: '2.5 tsp', metric: '15g', imperial: '0.5 oz', common: '2.5 tsp' }
    ],
    optionalIngredients: [
      { name: 'Kachumber (diced cucumber, tomato, onion, lemon)', prep: 'crunchy salad', amount: '1 cup', metric: '150g', imperial: '5.3 oz', common: '1 cup', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'SIMMER GUJARATI KHATTI MEETHI DAL',
        whatYouNeed: ['Cooked toor dal', '20g peanuts', '2 tbsp jaggery', '3 kokum pieces', '1 cinnamon, 2 cloves', '1 tbsp ghee', '1 tsp mustard seeds', 'Curry leaves', 'Hing', '1.5 tsp salt', '500ml water'],
        description: 'In a pot, combine cooked mashed toor dal, 500ml water, boiled peanuts, jaggery, kokum, cinnamon, cloves, and salt. Bring to a boil and simmer for 10 minutes. In a small pan, heat ghee, crackle mustard seeds, hing, and curry leaves; pour the sizzling tadka into the dal. Simmer for 3 minutes until aromatic and sweet-tangy.',
        howToDoIt: 'The slow reduction of jaggery, kokum, and whole cloves gives Gujarati dal its world-famous sweet, sour, and spicy balance.',
        heat: 'Medium Heat',
        heatDescription: 'Gentle bubbling.',
        duration: 15,
        visualCues: 'Golden-yellow thin aromatic dal with peanuts floating and glossy ghee droplets.',
        hear: 'Soft bubbling and hiss of tadka.',
        smell: 'Sweet jaggery, cloves, cinnamon, and tangy kokum.',
        textureCheck: 'Thin, drinkable, comforting lentil soup.',
        whatShouldThisLookLike: 'Golden Gujarati Dal with peanuts.',
        tip: 'Kokum gives a beautiful fruity tartness; use lemon juice if kokum is unavailable.',
        commonMistake: 'Making dal too thick — Gujarati dal is traditionally thin and soup-like.',
        moveOnWhen: 'Dal is aromatic, sweet-tangy, and simmered 15 mins.',
        quickInstructions: 'Simmer mashed toor dal with peanuts, jaggery, kokum, spices; temper with mustard, hing, curry leaves in ghee.'
      },
      {
        step: 2,
        title: 'PREPARE BATATA NU SHAAK (POTATO CURRY)',
        whatYouNeed: ['300g boiled potato cubes', '1.5 tbsp oil', '1 tsp cumin', '1/4 tsp hing', '1 tsp chili powder', '1/2 tsp turmeric', '1 tsp coriander-cumin powder', '1 tsp sugar', '1 tsp salt', '100ml water', 'Pan'],
        description: 'Heat oil in a pan. Add cumin seeds and hing; sizzle for 20 seconds. Add potato cubes, chili powder, turmeric, dhana-jeera powder, sugar, salt, and 100ml water. Simmer on medium-low heat for 6–7 minutes until the potatoes absorb spices and a glossy, semi-dry sauce coats the cubes. Garnish with fresh cilantro.',
        howToDoIt: 'Sugar and cumin round off the spices, creating a comforting, sweet-savory Gujarati shaak.',
        heat: 'Medium-Low Heat',
        heatDescription: 'Gentle simmer.',
        duration: 8,
        visualCues: 'Golden-yellow potato cubes coated in a glistening spiced glaze.',
        hear: 'Soft sizzling.',
        smell: 'Cumin, sweet sugar, and turmeric.',
        textureCheck: 'Tender potato cubes with thick clinging sauce.',
        whatShouldThisLookLike: 'Glossy, spiced Gujarati potato shaak.',
        tip: 'Do not mash potatoes; preserve neat cubes.',
        commonMistake: 'Omitting sugar — Kathiyawadi cuisine balances heat with subtle sweetness.',
        moveOnWhen: 'Potatoes are glazed and heated through.',
        quickInstructions: 'Sauté cumin and hing in oil; add potato cubes, spices, sugar, water; simmer 6 mins until glazed.'
      },
      {
        step: 3,
        title: 'PUFF ROTLIS & STEAM RICE',
        whatYouNeed: ['Whole wheat dough', 'Rolling pin', 'Tawa', 'Ghee', 'Steamed basmati rice'],
        description: 'Roll dough thin and cook soft rotlis on a hot tawa, puffing on direct flame. Brush generously with warm desi ghee. Fluff hot steamed basmati rice with a fork.',
        howToDoIt: 'Hot, paper-thin phulkas soaked in ghee are the primary vehicle for scooping up dal and shaak.',
        heat: 'Medium-High Flame',
        heatDescription: 'Quick flatbread roasting.',
        duration: 12,
        visualCues: 'Puffed spherical rotlis deflating under golden ghee; steaming white rice.',
        hear: 'Gentle hiss of steam.',
        smell: 'Toasted wheat, rich ghee, and fragrant rice.',
        textureCheck: 'Cloud-soft rotlis and fluffy separate rice.',
        whatShouldThisLookLike: 'Stack of soft ghee-brushed rotlis and bowl of rice.',
        tip: 'Keep rotlis wrapped in a cloth napkin until assembly.',
        commonMistake: 'Making thick rotis — Gujarati rotlis are famously thin as tissue.',
        moveOnWhen: 'Rotlis and rice are hot and ready.',
        quickInstructions: 'Puff thin rotlis on open flame, brush with ghee; fluff steamed rice.'
      },
      {
        step: 4,
        title: 'THE GRAND THALI PRESENTATION',
        whatYouNeed: ['Large round thali plate', '5 katoris (bowls)', 'Gujarati dal', 'Batata shaak', 'Chilled Shrikhand', 'Rice', 'Rotlis', 'Kachumber & pickle'],
        description: 'Arrange bowls in a semi-circle around the thali: fill one with hot Gujarati Dal, one with Batata nu Shaak, one with chilled sweet Shrikhand, and one with fresh Kachumber salad. Place a mound of steamed rice in the center topped with a spoonful of dal and ghee. Fold 2 hot rotlis into triangles and place alongside. Add spicy mango pickle and roasted papad. Serve immediately.',
        howToDoIt: 'The multi-bowl thali arrangement allows diners to sample sweet, sour, spicy, and cool dairy contrasts in every mouthful.',
        heat: 'Off',
        heatDescription: 'Service.',
        duration: 5,
        visualCues: 'A dazzling, colorful royal feast: golden dal, yellow potatoes, white rice, pale cream shrikhand, green salad.',
        hear: 'None',
        smell: 'Symphony of cardamom, cloves, roasted cumin, and ghee.',
        textureCheck: 'Harmonious interplay of hot, cold, soupy, crunchy, and soft.',
        whatShouldThisLookLike: 'Spectacular authentic Gujarati Thali.',
        tip: 'Serve shrikhand thoroughly chilled against the piping hot dal and rotlis.',
        commonMistake: 'Serving everything lukewarm — dal and shaak must be piping hot, shrikhand cold.',
        moveOnWhen: 'Thali is assembled and served.',
        quickInstructions: 'Arrange katoris of dal, shaak, chilled shrikhand, kachumber; place rice, folded rotlis, and papad in center.'
      }
    ],
    commonMistakes: [
      { mistake: 'Dal tasted only sweet, not balanced.', remedy: 'You didn\'t add enough kokum or lemon juice. Gujarati dal requires equal parts sweet jaggery and sour kokum.' }
    ],
    troubleshooting: [
      {
        problem: 'Shrikhand is watery instead of thick and spreadable',
        whatHappened: 'Yogurt was not hung long enough.',
        whyItHappened: 'Moisture remained in curd.',
        whatToDoNow: 'Squeeze in a muslin cloth firmly or whisk in 2 tablespoons of milk powder to thicken instantly.',
        howToPrevent: 'Hang yogurt in cheesecloth for at least 2 full hours.'
      }
    ],
    substitutions: [
      { original: 'Batata nu Shaak', substitute: 'Bhindi Sambhariya or Tindora Shaak', notes: 'Classic regional Gujarati vegetable dishes.' }
    ],
    safetyNotes: [
      'Handle hot bowls carefully when arranging on the thali.'
    ],
    servingGuide: {
      restingTime: 'Serve immediately.',
      garnishing: 'Cilantro on dal and shaak; pistachios and saffron strands on shrikhand.',
      plating: 'Serve on a large round brass or stainless steel thali.',
      temperature: 'Piping hot curries paired with chilled shrikhand.',
      accompaniments: 'Chilled Chaas (salted cumin buttermilk), roasted papad, and fresh green chilies.'
    }
  },

  // 41. RAJASTHANI THALI
  {
    id: 'rajasthani-thali',
    name: 'Royal Mewari Rajasthani Thali',
    cuisine: 'Indian',
    region: 'Western Indian (Rajasthan)',
    servings: 4,
    prepTime: 40,
    cookTime: 50,
    difficulty: 'Hard',
    overview: {
      summary: 'The grand desert feast of Rajput royalty: Panchmel Dal (5-lentil spicy stew), Gatte ki Sabzi (tender steamed chickpea-dumpling medallions in a spiced yogurt gravy), baked golden Baatis crushed in desi ghee, sweet cardamom Churma, fiery red Lahsun ki Chutney (garlic-chili paste), and crisp papad.',
      appearance: 'A regal royal thali featuring golden cracked baatis drenched in pure ghee, dark spiced dal, orange gatte curry, sweet churma mound, fiery red garlic chutney, and yellow kadhi.',
      texture: 'Dense, crunchy baked baatis softened by rich dal and ghee, velvety yogurt curry with firm dumplings, and crumbly sweet churma.',
      flavor: 'Bold, robust, spicy, rustic, heavily accented with garlic, hing, dry red chilies, roasted cumin, and pure desi ghee.',
      restingTimeMinutes: 5
    },
    equipment: [
      { name: 'Oven / Baati cooker / Heavy Dutch oven', purpose: 'For baking dense wheat baati balls to a cracked, golden crispness.' },
      { name: 'Heavy pot', purpose: 'For simmering Panchmel dal and Gatte curry.' }
    ],
    beforeYouStart: [
      { task: 'Knead 250g coarse wheat flour with 3 tbsp ghee, ajwain, salt, and water into a firm dough; shape into 4 round balls (baatis).', durationMinutes: 15 },
      { task: 'Soak 30g each of 5 lentils (toor, moong, chana, urad, masoor) for 30 minutes; pressure cook until soft.', durationMinutes: 30 },
      { task: 'Knead 100g besan with yogurt, spices, and oil; roll into cylinders, boil in water 10 mins, slice into gatta medallions.', durationMinutes: 20 }
    ],
    ingredientPrepGuide: [
      { item: 'The Sacred Ghee Dunk', technique: 'As soon as baatis are baked golden and cracked, crush each hot ball slightly between your palms and submerge completely into a bowl of warm desi ghee for 10 seconds so the ghee penetrates to the core.' }
    ],
    essentialIngredients: [
      { name: 'Coarse wheat flour (Baati atta)', prep: 'for baked baatis & churma', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '2 cups' },
      { name: 'Panchmel Dal (5 mixed lentils)', prep: 'toor, chana, moong, urad, masoor', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '3/4 cup' },
      { name: 'Besan (gram flour)', prep: 'for Gatte dumplings', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '3/4 cup' },
      { name: 'Plain full-fat yogurt', prep: 'whisked for gatte gravy', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '2/3 cup' },
      { name: 'Desi Ghee', prep: 'divided generously across all dishes', amount: '120g', metric: '120g', imperial: '4.2 oz', common: '1/2 cup' },
      { name: 'Garlic cloves', prep: 'for fiery garlic chutney & dal', amount: '20 cloves', metric: '60g', imperial: '2.1 oz', common: '20 cloves' },
      { name: 'Kashmiri dry red chilies', prep: 'pounded with garlic', amount: '8 chilies', metric: '16g', imperial: '0.6 oz', common: '8 chilies' },
      { name: 'Ajwain (carom seeds)', prep: 'crushed for baati dough & gatte', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Powdered sugar / boora', prep: 'for sweet churma', amount: '60g', metric: '60g', imperial: '2.1 oz', common: '1/3 cup' },
      { name: 'Fine sea salt', prep: 'to taste across dishes', amount: '3 tsp', metric: '18g', imperial: '0.6 oz', common: '3 tsp' }
    ],
    optionalIngredients: [
      { name: 'Ker Sangri', prep: 'traditional desert bean sabzi', amount: '1/2 cup', metric: '60g', imperial: '2.1 oz', common: '1/2 cup', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'BAKE THE CRACKED BAATIS',
        whatYouNeed: ['4 firm dough balls (baatis)', 'Preheated oven at 200°C (400°F) or Baati cooker', 'Bowl of 60g warm melted ghee'],
        description: 'Make a shallow cross indentation with your thumb on each dough ball. Place on a baking sheet in the preheated oven. Bake for 25–30 minutes, turning every 10 minutes, until the balls develop cracks and turn a deep, rustic golden-brown. Remove hot. Using a clean cloth, gently crush each hot baati between your palms to crack it open. Submerge completely in a bowl of warm desi ghee for 10 seconds; transfer to plate.',
        howToDoIt: 'Cracking the hot crust and dipping in ghee allows the clarified butter to soak deep into the dense, crumbly wheat crumb, turning it rich and tender.',
        heat: 'High Bake (200°C / 400°F)',
        heatDescription: 'Baking until cracked.',
        duration: 30,
        visualCues: 'Baatis develop deep natural cracks across the surface, turning rustic golden-amber; they sizzle when submerged in ghee.',
        hear: 'Crunch of crust cracking under palms.',
        smell: 'Toasted whole wheat, nutty ghee, and carom seeds.',
        textureCheck: 'Crisp, rigid, crumbly shell soaked in golden ghee.',
        whatShouldThisLookLike: 'Cracked golden baatis glistening with absorbed ghee.',
        tip: 'Bake until cracks appear naturally; cracks are proof that the inside is fully cooked.',
        commonMistake: 'Skipping the ghee dunk — baatis will taste dry and hard like bricks.',
        moveOnWhen: 'Baatis are baked, cracked, and soaked in ghee.',
        quickInstructions: 'Bake dough balls at 200°C for 25-30 mins until cracked; crush gently and soak in warm ghee 10s.'
      },
      {
        step: 2,
        title: 'SIMMER SPICY PANCHMEL DAL',
        whatYouNeed: ['Cooked 5-lentil mix', '2 tbsp ghee', '1 tsp cumin', '1/4 tsp hing', '10 chopped garlic cloves', '2 dried red chilies', '1 tsp chili powder', '1.5 tsp salt', 'Pot'],
        description: 'Mash cooked lentils lightly with 400ml water and salt; bring to a boil. In a separate pan, heat 2 tbsp ghee over medium heat. Crackle cumin, hing, whole red chilies, and chopped garlic; sauté until garlic turns deep golden-brown. Stir in chili powder and pour sizzling tadka into the dal. Simmer for 5 minutes.',
        howToDoIt: 'Deeply browned garlic in ghee provides the robust, earthy backbone characteristic of Rajasthani desert cooking.',
        heat: 'Medium Heat',
        heatDescription: 'Sizzling tadka.',
        duration: 10,
        visualCues: 'Thick, rustic, multi-lentil dal crowned with golden garlic bits and red chili oil.',
        hear: 'Loud sizzle of garlic tadka.',
        smell: 'Intense roasted garlic, cumin, and earthy lentils.',
        textureCheck: 'Hearty, thick, coarse lentil stew.',
        whatShouldThisLookLike: 'Rustic Rajasthani Panchmel Dal.',
        tip: 'Keep the dal thick so it clings to the crushed baatis.',
        commonMistake: 'Making dal watery.',
        moveOnWhen: 'Dal is thick and infused with garlic tadka.',
        quickInstructions: 'Simmer 5-lentil mix; temper with browned garlic, cumin, hing, and red chilies in ghee.'
      },
      {
        step: 3,
        title: 'COOK GATTE KI SABZI (CHICKPEA DUMPLINGS IN YOGURT GRAVY)',
        whatYouNeed: ['Sliced boiled gatta medallions', '150g whisked yogurt', '1.5 tbsp ghee', '1 tsp cumin', '1 tsp chili powder', '1/2 tsp turmeric', '1 tsp coriander powder', '1 tsp salt', 'Pan'],
        description: 'Whisk yogurt with chili powder, turmeric, coriander powder, and salt. Heat 1.5 tbsp ghee in a pan. Crackle cumin seeds. Reduce heat to low and pour in spiced yogurt, whisking continuously to prevent curdling. Simmer for 5 minutes until oil separates. Add boiled gatta medallions and 150ml gatta boiling water. Simmer for 8 minutes until dumplings absorb the tangy gravy.',
        howToDoIt: 'Continuous whisking stabilizes the yogurt proteins, while boiling water from the gatte adds natural starch to thicken the sauce.',
        heat: 'Low-Medium Heat',
        heatDescription: 'Gentle simmer.',
        duration: 12,
        visualCues: 'Golden-yellow gatta coins floating in a vibrant orange-red spiced yogurt gravy.',
        hear: 'Soft bubbling.',
        smell: 'Tangy yogurt, ajwain, and warming spices.',
        textureCheck: 'Tender, toothsome chickpea dumplings in velvety gravy.',
        whatShouldThisLookLike: 'Savory Gatte ki Sabzi.',
        tip: 'Do not boil yogurt over high heat or it will curdle.',
        commonMistake: 'Discarding gatta boiling water — that water holds starch and flavor.',
        moveOnWhen: 'Gatte are tender and gravy is thick.',
        quickInstructions: 'Whisk yogurt with spices; cook in ghee until oil separates, add gatte medallions, simmer 8 mins.'
      },
      {
        step: 4,
        title: 'CRUSH SWEET CARDAMOM CHURMA & ASSEMBLE THALI',
        whatYouNeed: ['1 hot baked baati', '60g powdered sugar', '2 tbsp melted ghee', '1/4 tsp cardamom', 'All prepared dishes', 'Royal Thali'],
        description: 'Crumble 1 hot baked baati finely into a bowl with your fingers (or pulse in a food processor to coarse breadcrumbs). Mix thoroughly with 60g powdered sugar, 2 tbsp warm melted ghee, and cardamom powder into a sweet, crumbly Churma mound. Arrange the thali: cracked ghee-soaked baatis, Panchmel Dal, Gatte ki Sabzi, sweet Churma, fiery garlic chutney, and papad. Serve hot.',
        howToDoIt: 'Churma is the traditional sweet companion created by crushing hot baked baatis with ghee and sugar, providing a blissful sweet counterpoint to the fiery dal and garlic.',
        heat: 'Off',
        heatDescription: 'Assembly.',
        duration: 5,
        visualCues: 'A majestic royal feast of desert warriors: golden baatis, dark dal, orange curry, sweet churma, and red garlic paste.',
        hear: 'None',
        smell: 'Pure Rajasthani royalty: roasted garlic, toasted wheat, cardamom, and rivers of desi ghee.',
        textureCheck: 'Hearty, rich, crunchy, and comforting.',
        whatShouldThisLookLike: 'Royal Mewari Rajasthani Thali.',
        tip: 'To eat, crush a baati with your hands in your plate, ladle hot dal and extra ghee over it, and mix together.',
        commonMistake: 'Using cold ghee — ghee must be warm and melted.',
        moveOnWhen: 'Thali is assembled and served.',
        quickInstructions: 'Crush 1 baati with sugar, ghee, and cardamom to make Churma; assemble thali with baatis, dal, gatte, and chutney.'
      }
    ],
    commonMistakes: [
      { mistake: 'Baatis were raw and doughy inside.', remedy: 'Baked too fast over excessive heat. Bake at steady 200°C for 30 minutes until natural cracks appear.' }
    ],
    troubleshooting: [
      {
        problem: 'Gatte dumplings are hard and chewy',
        whatHappened: 'Not enough oil/moin was added to the besan dough.',
        whyItHappened: 'Too much water or under-kneaded.',
        whatToDoNow: 'Simmer gatte in the gravy for an extra 6 minutes with 50ml extra water to soften.',
        howToPrevent: 'Always add 2 tbsp oil and 2 tbsp yogurt into the besan dough before rolling.'
      }
    ],
    substitutions: [
      { original: 'Baati Atta', substitute: 'Coarse stoneground whole wheat flour + 2 tbsp sooji', notes: 'Sooji provides authentic grainy texture.' }
    ],
    safetyNotes: [
      'Crushing hot baatis directly out of the oven can burn fingers; use a kitchen towel.'
    ],
    servingGuide: {
      restingTime: 'Serve immediately.',
      garnishing: 'Extra streams of warm melted desi ghee poured over baatis and dal.',
      plating: 'Serve on a large brass or copper royal thali.',
      temperature: 'Piping hot.',
      accompaniments: 'Fiery Lahsun ki Chutney (red chili-garlic paste), fried green chilies, roasted papad, and chilled chaas.'
    }
  },

  // 42. DAL BAATI CHURMA
  {
    id: 'dal-baati-churma',
    name: 'Authentic Rajasthani Dal Baati Churma',
    cuisine: 'Indian',
    region: 'Western Indian (Rajasthan / Marwar)',
    servings: 4,
    prepTime: 35,
    cookTime: 45,
    difficulty: 'Hard',
    overview: {
      summary: 'The quintessential trinity of Rajasthani culinary heritage: round, rustic, golden whole wheat baatis slow-baked until cracked, crushed, and drowned in hot desi ghee, served with spicy, smoky five-lentil Panchmel Dal, and sweet, coarse, ghee-rich cardamom Churma.',
      appearance: 'A hearty rustic platter: golden cracked baatis glistening with pools of pure desi ghee, a bowl of rich dark 5-lentil dal with garlic tadka, a mound of golden cardamom-scented churma, fiery red garlic chutney, and raw onion rings.',
      texture: 'Crispy and crunchy cracked wheat crust soaked in rich ghee, paired with velvety spiced lentils and melt-in-the-mouth sweet churma.',
      flavor: 'Deeply comforting, rustic, earthy, nutty, savory, and sweet with rich clarified butter warmth.',
      restingTimeMinutes: 3
    },
    equipment: [
      { name: 'Oven or Gas Tandoor / Baati Cooker', purpose: 'For dry-baking dense dough balls to cracked, golden perfection.' },
      { name: 'Heavy pot', purpose: 'For simmering the 5-lentil dal.' },
      { name: 'Wide mixing bowl', purpose: 'For crushing baatis into sweet churma.' }
    ],
    beforeYouStart: [
      { task: 'Knead 300g coarse wheat flour, 2 tbsp semolina (sooji), 4 tbsp ghee, 1/2 tsp ajwain, and 1/2 tsp salt with warm water into a tight, firm dough.', durationMinutes: 15 },
      { task: 'Soak 30g each of toor, chana, moong, masoor, and urad dal for 30 minutes; boil tender.', durationMinutes: 30 },
      { task: 'Melt 100g pure desi ghee in a warm bowl for the baati bath.', durationMinutes: 2 }
    ],
    ingredientPrepGuide: [
      { item: 'The Authentic Eating Ritual', technique: 'Crush the hot ghee-soaked baati in your plate with your fist into bite-sized pieces. Ladle 2 big spoonfuls of hot spiced dal directly over the crushed baati. Spoon sweet churma right next to it, dip a forkful of baati and dal, then take a pinch of sweet churma for the heavenly savory-sweet contrast.' }
    ],
    essentialIngredients: [
      { name: 'Coarse whole wheat flour (Atta)', prep: 'for baatis & churma', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '2 cups' },
      { name: 'Fine semolina (Sooji)', prep: 'for crisp grainy crumb', amount: '2 tbsp', metric: '25g', imperial: '0.9 oz', common: '2 tbsp' },
      { name: 'Panchmel Dal (5 mixed lentils)', prep: 'boiled soft', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '3/4 cup' },
      { name: 'Desi Ghee', prep: 'divided generously for baatis, dal, churma', amount: '120g', metric: '120g', imperial: '4.2 oz', common: '1/2 cup' },
      { name: 'Ajwain (carom seeds)', prep: 'crushed between palms', amount: '1/2 tsp', metric: '1.5g', imperial: '0.05 oz', common: '1/2 tsp' },
      { name: 'Baking powder', prep: 'tiny pinch for light crumb in baati', amount: '1/4 tsp', metric: '1g', imperial: '0.03 oz', common: '1/4 tsp' },
      { name: 'Powdered sugar (Boora / Tagar)', prep: 'for sweet churma', amount: '80g', metric: '80g', imperial: '2.8 oz', common: '1/2 cup' },
      { name: 'Cardamom powder', prep: 'freshly ground for churma', amount: '1/2 tsp', metric: '1.5g', imperial: '0.05 oz', common: '1/2 tsp' },
      { name: 'Garlic cloves', prep: 'finely chopped for dal tadka', amount: '8 cloves', metric: '24g', imperial: '0.8 oz', common: '8 cloves' },
      { name: 'Cumin seeds', prep: 'whole', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Hing (asafoetida)', prep: 'powder', amount: '1/4 tsp', metric: '1g', imperial: '0.03 oz', common: '1/4 tsp' },
      { name: 'Kashmiri red chili powder', prep: 'powder', amount: '1.5 tsp', metric: '4.5g', imperial: '0.15 oz', common: '1.5 tsp' },
      { name: 'Fine sea salt', prep: 'divided', amount: '2 tsp', metric: '12g', imperial: '0.4 oz', common: '2 tsp' }
    ],
    optionalIngredients: [
      { name: 'Chopped almonds & pistachios', prep: 'for churma garnish', amount: '2 tbsp', metric: '20g', imperial: '0.7 oz', common: '2 tbsp', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'SHAPE & BAKE GOLDEN CRACKED BAATIS',
        whatYouNeed: ['300g atta + 2 tbsp sooji dough with ajwain, 4 tbsp ghee, salt', 'Preheated oven at 200°C (400°F)', 'Baking sheet'],
        description: 'Divide firm dough into 6 equal balls (approx 75g each). Roll into smooth spheres without pressing too hard, and make a small indentation with your thumb on top. Place on baking sheet. Bake at 200°C (400°F) for 25–30 minutes, rotating at 15 minutes, until baatis turn golden-brown and show natural rustic cracks across the surface.',
        howToDoIt: 'Baking without steam dehydrates the outer crust, causing it to crack naturally while cooking the dense wheat interior through.',
        heat: 'High Bake (200°C / 400°F)',
        heatDescription: 'Dry oven baking.',
        duration: 30,
        visualCues: 'Deep natural cracks appear; crust turns rustic golden-brown with darker blistered edges.',
        hear: 'None',
        smell: 'Intense nutty toasted wheat and carom seed aroma.',
        textureCheck: 'Hard, rigid exterior that cracks under pressure.',
        whatShouldThisLookLike: 'Cracked, golden-brown baked wheat balls.',
        tip: 'Ensure the dough is firm; soft dough will collapse flat like cookies.',
        commonMistake: 'Taking baatis out before cracks form — inside will be raw dough.',
        moveOnWhen: 'Baatis are cracked and baked golden-brown throughout.',
        quickInstructions: 'Shape dough into 6 balls with thumb indent; bake at 200°C for 25-30 mins until cracked.'
      },
      {
        step: 2,
        title: 'THE RITUAL GHEE BATH',
        whatYouNeed: ['4 hot baked baatis (reserve 2 for churma)', 'Bowl of 60g warm melted desi ghee', 'Clean towel'],
        description: 'Take 4 hot baatis from the oven. Using a clean towel to protect your hands, gently press and squeeze each baati between your palms until it cracks open. Submerge the hot cracked baati completely into the bowl of warm melted desi ghee for 15 seconds. Lift out, letting excess ghee drip, and place on a serving plate.',
        howToDoIt: 'The hot cracked baati absorbs the warm melted ghee like a sponge into its core, creating the iconic rich, melting texture of authentic Marwari baati.',
        heat: 'Off',
        heatDescription: 'Ghee soaking.',
        duration: 2,
        visualCues: 'Baati cracks open, drinking in golden ghee until glistening and soaked.',
        hear: 'Crunch of crust cracking.',
        smell: 'Irresistible rich aroma of hot ghee and roasted wheat.',
        textureCheck: 'Crisp crust on outside, moist, tender, ghee-soaked crumb inside.',
        whatShouldThisLookLike: 'Glistening, ghee-drenched cracked baatis.',
        tip: 'Do this while baatis are scorching hot from the oven.',
        commonMistake: 'Drizzling a teaspoon of ghee on top — baati MUST be submerged to drink ghee into its core.',
        moveOnWhen: '4 baatis are cracked and ghee-soaked.',
        quickInstructions: 'Crush hot baatis gently to crack; submerge in warm melted ghee for 15s; transfer to plate.'
      },
      {
        step: 3,
        title: 'SIMMER PANCHMEL DAL & TEMPER',
        whatYouNeed: ['Cooked 5 lentils', '2 tbsp ghee', '1 tsp cumin', '1/4 tsp hing', '8 chopped garlic cloves', '1.5 tsp chili powder', 'Salt', 'Pot'],
        description: 'Mash boiled lentils with 350ml water and salt; bring to a boil. In a small pan, heat 2 tbsp ghee over medium heat. Sauté cumin, hing, and chopped garlic until garlic is golden-brown. Stir in chili powder and immediately pour sizzling tempering into the boiling dal. Simmer on low for 5 minutes.',
        howToDoIt: 'Simmering 5 complementary lentils creates complex protein richness and optimal clinging consistency.',
        heat: 'Medium-Low Heat',
        heatDescription: 'Sizzling tadka.',
        duration: 8,
        visualCues: 'Thick, rustic dal with golden garlic bits and red chili oil floating on top.',
        hear: 'Loud sizzle of garlic tadka.',
        smell: 'Deep roasted garlic and spiced lentils.',
        textureCheck: 'Thick, hearty, clinging dal.',
        whatShouldThisLookLike: 'Rich Rajasthani Panchmel Dal.',
        tip: 'Keep the dal thick so it clings to the crushed baati.',
        commonMistake: 'Making dal too watery.',
        moveOnWhen: 'Dal is thick and simmering.',
        quickInstructions: 'Boil mashed 5-lentil dal; temper with browned garlic, cumin, hing, chili in ghee; simmer 5 mins.'
      },
      {
        step: 4,
        title: 'PULSE SWEET CHURMA & ASSEMBLE TRINITY',
        whatYouNeed: ['2 reserved hot baked baatis', '80g powdered sugar', '3 tbsp melted ghee', '1/2 tsp cardamom', 'Chopped nuts', 'Food processor or bowl'],
        description: 'Break the 2 reserved hot baatis into pieces. Pulse in a food processor (or crush finely with hands) into coarse, breadcrumb-like texture. Transfer to a bowl. Mix in 80g powdered sugar, 3 tbsp warm melted ghee, and cardamom powder. Toss with chopped nuts into a sweet, crumbly Churma mound. Serve hot baatis, Panchmel dal, and sweet churma together on a platter.',
        howToDoIt: 'The hot baati crumbs absorb the ghee and sugar, creating the iconic sweet sandy texture of authentic Rajasthani Churma.',
        heat: 'Off',
        heatDescription: 'Assembly.',
        duration: 5,
        visualCues: 'Golden crumbly sweet churma mound alongside ghee-soaked cracked baatis and dark spiced dal.',
        hear: 'None',
        smell: 'Heavenly combination of sweet cardamom, roasted wheat, and garlic dal.',
        textureCheck: 'Crumbly sweet churma, crunchy soaked baati, velvety dal.',
        whatShouldThisLookLike: 'The authentic Rajasthani Dal Baati Churma trinity.',
        tip: 'To eat: crush baati on your plate, ladle hot dal and extra ghee over it, and alternate with spoonfuls of sweet churma.',
        commonMistake: 'Over-processing churma into a fine powder — it should remain coarse and crumbly.',
        moveOnWhen: 'Platter is assembled with dal, baati, and churma.',
        quickInstructions: 'Pulse 2 baatis to coarse crumbs, mix with sugar, ghee, cardamom for Churma. Serve with hot baatis and dal.'
      }
    ],
    commonMistakes: [
      { mistake: 'Baatis were hard and dry.', remedy: 'Under-baked or not dunked in ghee. Bake until cracked and submerge hot in warm ghee for 15 seconds.' }
    ],
    troubleshooting: [
      {
        problem: 'Churma feels dry and chalky',
        whatHappened: 'Not enough ghee was added.',
        whyItHappened: 'Coarse wheat crumbs absorbed all fat.',
        whatToDoNow: 'Warm 2 extra tablespoons of ghee and fold into the churma until moist and glossy.',
        howToPrevent: 'Always use 3–4 tbsp warm ghee for 2 baatis.'
      }
    ],
    substitutions: [
      { original: 'Panchmel Dal', substitute: 'Toor dal mixed with Chana dal and Moong dal', notes: 'Classic 3-lentil combination.' }
    ],
    safetyNotes: [
      'Take care when handling hot baatis directly out of the oven.'
    ],
    servingGuide: {
      restingTime: 'Serve immediately.',
      garnishing: 'Extra drizzle of warm desi ghee and chopped nuts on churma.',
      plating: 'Serve on a wide copper or brass thali with separate bowls.',
      temperature: 'Piping hot.',
      accompaniments: 'Fiery Lahsun ki Chutney, raw onion rings, fresh green chilies, and cold chaas (buttermilk).'
    }
  }
];
