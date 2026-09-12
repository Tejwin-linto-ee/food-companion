// North Indian culinary recipes Part 2
module.exports = [
  // 6. CHOLE BHATURE
  {
    id: 'chole-bhature',
    name: 'Amritsari Chole Bhature',
    cuisine: 'Indian',
    region: 'North Indian (Punjab / Delhi)',
    servings: 4,
    prepTime: 30,
    cookTime: 50,
    difficulty: 'Medium',
    overview: {
      summary: 'Authentic dark, robustly spiced Amritsari chickpea curry simmered with black tea, dried amla, and anardana (wild pomegranate powder), paired with giant, golden, fermented deep-fried bhature that puff like hollow balloons.',
      appearance: 'Deep dark-brown, glossy chickpea curry garnished with pickled green chili and ginger matchsticks, served alongside a pair of puffed, golden-crisp bhature balloons.',
      texture: 'Buttery-soft chickpeas enveloped in thick clinging spiced gravy; bhature are crisp on the surface and hollow, tender, and slightly chewy inside.',
      flavor: 'Tangy, earthy, deeply savory with sour notes of anardana and amla, balanced by aromatic spices.',
      restingTimeMinutes: 5
    },
    equipment: [
      { name: 'Heavy pressure cooker or Instant Pot', purpose: 'Cooks soaked chickpeas to melting buttery tenderness in 25–30 minutes.' },
      { name: 'Deep heavy iron kadhai / wok', purpose: 'For deep-frying bhature balloons with rapid heat recovery.' },
      { name: 'Slotted metal spider ladle', purpose: 'Bastes hot oil over bhatura to force instant inflation and lifts cleanly.' }
    ],
    beforeYouStart: [
      { task: 'Soak 300g dried chickpeas (kabuli chana) in plenty of water with 1/2 tsp baking soda for 8–12 hours.', durationMinutes: 600 },
      { task: 'Make a bouquet garni (potli) with 2 black tea bags, 3 green cardamoms, 1 black cardamom, 1 cinnamon stick, and 2 dried amla pieces.', durationMinutes: 5 },
      { task: 'Knead bhatura dough with maida, sooji, baking soda, yogurt, and warm water; rest in a warm spot for 2 hours.', durationMinutes: 120 }
    ],
    ingredientPrepGuide: [
      { item: 'Chickpeas', technique: 'Soaking with baking soda softens the outer skin. Cooking with the tea pouch imparts the signature deep dark Amritsari hue and rich tannins.' },
      { item: 'Anardana (Pomegranate Seeds)', technique: 'Grind dried wild pomegranate seeds coarsely; they provide the irreplaceable fruity tartness authentic to Punjabi chole.' },
      { item: 'Bhatura Dough', technique: 'Incorporate 2 tbsp fine semolina (sooji) into refined flour. Sooji gives the balloon its crisp structural shell so it stays puffed when plated.' }
    ],
    essentialIngredients: [
      { name: 'Dried chickpeas (Kabuli chana)', prep: 'soaked 8+ hours', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '1.5 cups dry' },
      { name: 'Black tea bags', prep: 'tied with whole spices into a pouch', amount: '2 bags', metric: '2 bags', imperial: '2 bags', common: '2 bags' },
      { name: 'Dried amla (Indian gooseberry)', prep: 'for dark color and tang', amount: '3 pieces', metric: '6g', imperial: '0.2 oz', common: '3 pieces' },
      { name: 'Onions', prep: 'finely grated or minced', amount: '2 medium', metric: '200g', imperial: '7 oz', common: '1 cup' },
      { name: 'Tomatoes', prep: 'pureed smooth', amount: '3 medium', metric: '250g', imperial: '8.8 oz', common: '1 cup puree' },
      { name: 'Ginger-garlic paste', prep: 'freshly pounded', amount: '2 tbsp', metric: '30g', imperial: '1 oz', common: '2 tbsp' },
      { name: 'Anardana powder (dried pomegranate seeds)', prep: 'coarsely ground', amount: '1.5 tbsp', metric: '15g', imperial: '0.5 oz', common: '1.5 tbsp' },
      { name: 'Chole masala powder', prep: 'roasted blend', amount: '2 tbsp', metric: '16g', imperial: '0.6 oz', common: '2 tbsp' },
      { name: 'Kasuri methi', prep: 'crushed', amount: '1 tbsp', metric: '3g', imperial: '0.1 oz', common: '1 tbsp' },
      { name: 'Desi ghee', prep: 'for tempering (tadka)', amount: '3 tbsp', metric: '45g', imperial: '1.6 oz', common: '3 tbsp' },
      { name: 'Green chilies', prep: 'slit lengthwise for tadka', amount: '3 chilies', metric: '15g', imperial: '0.5 oz', common: '3 chilies' },
      { name: 'Fresh ginger juliennes', prep: 'cut into paper-thin matchsticks', amount: '1 tbsp', metric: '10g', imperial: '0.35 oz', common: '1 tbsp' },
      { name: 'All-purpose flour (Maida)', prep: 'for bhature', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '2.5 cups' },
      { name: 'Fine semolina (Sooji)', prep: 'for crispness in bhature', amount: '2 tbsp', metric: '25g', imperial: '0.9 oz', common: '2 tbsp' },
      { name: 'Plain yogurt', prep: 'whisked, for bhature fermentation', amount: '80g', metric: '80g', imperial: '2.8 oz', common: '1/3 cup' },
      { name: 'Baking powder', prep: 'for bhatura dough', amount: '1/2 tsp', metric: '2g', imperial: '0.07 oz', common: '1/2 tsp' },
      { name: 'Baking soda', prep: 'divided (chana & dough)', amount: '1/2 tsp', metric: '2g', imperial: '0.07 oz', common: '1/2 tsp' },
      { name: 'Oil for deep frying', prep: 'neutral high smoke point oil', amount: '600ml', metric: '600ml', imperial: '20 fl oz', common: '2.5 cups' }
    ],
    optionalIngredients: [
      { name: 'Carom seeds (Ajwain)', prep: 'added to bhatura dough', amount: '1/2 tsp', metric: '1.5g', imperial: '0.05 oz', common: '1/2 tsp', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'BOIL CHICKPEAS WITH TEA POUCH',
        whatYouNeed: ['300g soaked chickpeas', '2 tea bags', '3 pieces dried amla', '1 black cardamom', '1 cinnamon stick', '1/4 tsp baking soda', '1 tsp salt', '900ml water'],
        description: 'Drain soaked chickpeas. Transfer to a pressure cooker with 900ml fresh water, salt, 1/4 tsp baking soda, and the spice-tea pouch. Cook on medium-high for 1 whistle, then reduce heat to low and cook for 25 minutes (or 35 minutes high pressure in Instant Pot). Let pressure release naturally.',
        howToDoIt: 'Baking soda softens the chickpea skins to a melt-in-the-mouth consistency while the tea bags and amla react to dye the chickpeas a deep, rich ebony brown.',
        heat: 'Medium-High then Low',
        heatDescription: 'Steady pressure cooking.',
        duration: 35,
        visualCues: 'Chickpeas turn deep walnut-brown; mash effortlessly between two fingers with zero chalkiness.',
        hear: 'Steady gentle hiss of cooker weight.',
        smell: 'Aromatic tea tannins and whole spices.',
        textureCheck: 'Buttery-soft, creamy interior.',
        whatShouldThisLookLike: 'Tender dark-brown chickpeas sitting in rich ebony broth.',
        tip: 'Discard the tea bags immediately after cooking; squeezing them will add excess bitterness.',
        commonMistake: 'Not soaking chickpeas long enough, leaving a hard, chalky center.',
        moveOnWhen: 'Chickpeas crush effortlessly between your thumb and forefinger.',
        quickInstructions: 'Pressure cook chickpeas with tea pouch, amla, soda, and salt for 25 mins until buttery soft.'
      },
      {
        step: 2,
        title: 'BUILD THE AROMATIC MASALA GRAVY',
        whatYouNeed: ['2 tbsp ghee or oil', '200g grated onion', '2 tbsp ginger-garlic paste', '250g tomato puree', '1.5 tbsp anardana powder', '2 tbsp chole masala', '1 tsp salt'],
        description: 'In a separate kadhai, heat 2 tbsp ghee over medium heat. Add grated onion and sauté for 10–12 minutes until deep golden-brown. Add ginger-garlic paste and cook 2 minutes. Stir in pureed tomatoes, anardana powder, chole masala, and salt. Cook for 8–10 minutes until the oil separates from the masala base.',
        howToDoIt: 'Cooking onions until deep golden caramelization forms the sweet-savory foundation (bhunai) necessary to carry the heavy spices.',
        heat: 'Medium Heat',
        heatDescription: 'Gentle active frying; oil beads out at the edges of the paste.',
        duration: 20,
        visualCues: 'Onions shrink to a rich brown paste; tomatoes darken to maroon and glossy ghee pools around the edges.',
        hear: 'Soft sizzling as water evaporates.',
        smell: 'Intense roasted onion, tangy pomegranate, and warm spices.',
        textureCheck: 'Thick, jammy, glistening masala paste.',
        whatShouldThisLookLike: 'Deep dark reddish-brown cooked paste releasing oil at the perimeter.',
        tip: 'Grated onions caramelize more evenly than roughly chopped onions, creating a smoother sauce.',
        commonMistake: 'Rushing onion browning — raw onions leave an unpleasant sulfurous aftertaste in chole.',
        moveOnWhen: 'Masala is deep dark brown and ghee glistens on the surface.',
        quickInstructions: 'Brown grated onions in ghee (10 mins), add ginger-garlic, tomato puree, anardana, and chole masala until oil separates.'
      },
      {
        step: 3,
        title: 'SIMMER & COARSE MASH',
        whatYouNeed: ['Cooked dark chickpeas + cooking liquor', 'Cooked masala base', 'Potato masher', '1 tbsp kasuri methi'],
        description: 'Tip the boiled chickpeas and their dark cooking liquid into the kadhai with the masala. Stir well and bring to a simmer. Take a potato masher and lightly crush about 20% of the chickpeas against the bottom of the pan. Simmer uncovered on low heat for 15 minutes until thick and glossy. Stir in crushed kasuri methi.',
        howToDoIt: 'Crushing a portion of the chickpeas releases their internal starches, naturally thickening the broth into a rich, clinging gravy without needing cornstarch or flour.',
        heat: 'Low-Medium Heat',
        heatDescription: 'Slow, steady simmer with gentle bubbling.',
        duration: 15,
        visualCues: 'Broth thickens into a dark, luxurious gravy coating the back of a spoon.',
        hear: 'Rhythmic, quiet bubbling.',
        smell: 'Earthy, rich Punjabi curry aroma.',
        textureCheck: 'Creamy, thick gravy with tender whole chickpeas suspended throughout.',
        whatShouldThisLookLike: 'Thick, lustrous, dark chocolate-brown chole.',
        tip: 'If gravy gets too thick, add 50ml hot water; chole thickens significantly as it cools.',
        commonMistake: 'Mashing all the chickpeas into a paste — preserve 80% whole chickpeas for texture.',
        moveOnWhen: 'Gravy is thick, dark, and clings to a wooden spoon.',
        quickInstructions: 'Combine chickpeas and liquid with masala, mash 20% of beans to thicken, simmer 15 mins, fold in kasuri methi.'
      },
      {
        step: 4,
        title: 'HING & GINGER TADKA TEMPERING',
        whatYouNeed: ['1 tbsp ghee', '1/4 tsp hing (asafoetida)', '3 slit green chilies', '1 tbsp ginger matchsticks', '1/2 tsp Kashmiri chili powder'],
        description: 'Heat 1 tbsp ghee in a small tadka pan until hot. Add hing, slit green chilies, and ginger matchsticks. Sauté for 30 seconds until ginger turns pale golden and chilies blister. Turn off heat, stir in Kashmiri chili powder for color, and immediately pour the sizzling ghee over the simmering chole.',
        howToDoIt: 'A finishing hot ghee tadka extracts aromatic essential oils from ginger and chilies and floats a glossy, fragrant red layer over the dark curry.',
        heat: 'Medium-High for 1 minute',
        heatDescription: 'Vigorous sizzling in the small ladle.',
        duration: 2,
        visualCues: 'Chilies blister white; ginger curls and crisps; paprika turns ghee bright ruby-red.',
        hear: 'Loud, dramatic crackling and sizzle as tadka meets curry.',
        smell: 'Pungent hing, fried ginger, and toasted chili aroma.',
        textureCheck: 'Glossy red film atop the dark curry.',
        whatShouldThisLookLike: 'Glistening dark chole crowned with blistered green chilies and golden ginger slivers.',
        tip: 'Pour the tadka while the chole is still gently bubbling on the stove.',
        commonMistake: 'Burning the paprika by adding it over direct heat — always take the pan off the burner first.',
        moveOnWhen: 'Tadka is poured and mixed lightly into top layer.',
        quickInstructions: 'Fry hing, ginger matchsticks, and slit chilies in ghee for 30s. Stir in chili powder and pour over chole.'
      },
      {
        step: 5,
        title: 'ROLL & FRY THE PUFFED BHATURE',
        whatYouNeed: ['Rested bhatura dough', 'Rolling pin', 'Oil for frying (heated to 190°C / 375°F)', 'Deep kadhai', 'Spider skimmer'],
        description: 'Divide rested dough into 6 smooth balls. Grease your rolling board with oil (avoid dry flour). Roll dough into an oval 20cm long and 3mm thick. Heat frying oil to 190°C (375°F). Gently slide the rolled dough into the hot oil. Immediately press down gently on the dough with the back of the spider skimmer. Once it inflates into a huge balloon, splash hot oil over the top, flip over, and fry for 20 seconds until pale golden-crisp. Drain on paper towels.',
        howToDoIt: 'Gentle downward pressure under the hot oil submerges the dough, causing moisture inside to instantly flash into high-pressure steam, blowing the bhatura up like a balloon.',
        heat: 'High Deep-Frying Heat (190°C / 375°F)',
        heatDescription: 'Oil hot enough that a scrap of dough rises to the surface in 1 second.',
        duration: 2,
        visualCues: 'Bhatura inflates into a taut, spherical golden globe in 5 seconds.',
        hear: 'Roaring sizzle of hot oil bubbling around the dough edges.',
        smell: 'Crispy fried bread aroma.',
        textureCheck: 'Crisp, delicate shell with a hollow, steamy interior.',
        whatShouldThisLookLike: 'Gigantic, golden-blistered, perfectly puffed bhatura.',
        tip: 'Never use dry flour for rolling bhature; the loose flour burns and turns the frying oil black and bitter. Use oil on your rolling board.',
        commonMistake: 'Frying in oil that is not hot enough (<175°C) — the bhatura will sink, absorb heavy grease, and fail to puff.',
        moveOnWhen: 'Bhatura is fully puffed, pale golden on both sides, and drained.',
        quickInstructions: 'Roll dough with oiled pin to 3mm oval. Slide into 190°C oil, press gently to puff, flip for 20s, drain.'
      }
    ],
    commonMistakes: [
      { mistake: 'Bhature did not puff into balloons.', remedy: 'The oil was not hot enough or the dough was not rested long enough. Oil must be at least 190°C and dough rested 2 hours.' },
      { mistake: 'Chole was pale and watery.', remedy: 'You skipped the tea bags/amla and did not mash 20% of the chickpeas to emulsify the starches.' }
    ],
    troubleshooting: [
      {
        problem: 'Bhature deflated immediately after removing from oil',
        whatHappened: 'The outer crust was fried too briefly and lacked structural crispness.',
        whyItHappened: 'Removed from oil before the semolina (sooji) starches could set firm.',
        whatToDoNow: 'Serve immediately while hot, and fry subsequent bhature 10 seconds longer until a delicate pale-golden crust forms.',
        howToPrevent: 'Always include 2 tbsp fine semolina (sooji) in the dough for structural integrity.'
      }
    ],
    substitutions: [
      { original: 'Dried amla', substitute: '1 tbsp tamarind paste or extra lemon juice', notes: 'Provides the tart profile, though amla uniquely darkens the color.' },
      { original: 'Anardana powder', substitute: 'Amchur (dry mango powder)', notes: 'Gives sharp acidity, but lacks the subtle berry fruitiness of wild pomegranate.' }
    ],
    safetyNotes: [
      'Deep frying oil at 190°C is extremely hot; slide bhature gently away from you to avoid oil splashes.',
      'Ensure the chickpeas are cooled slightly before handling pressure cooker lid.'
    ],
    servingGuide: {
      restingTime: 'Serve immediately while bhature are puffed.',
      garnishing: 'Top chole with extra ginger juliennes, cilantro, and lemon wedges.',
      plating: 'Serve chole in a deep bowl flanked by two hot, puffed bhature on a wide stainless steel thali.',
      temperature: 'Piping hot.',
      accompaniments: 'Sirka pyaz (vinegar pickled pearl onions), Punjabi mango pickle, and spiced fried green chilies.'
    }
  },

  // 7. DAL MAKHANI
  {
    id: 'dal-makhani',
    name: 'Dal Makhani (Slow-Cooked Black Lentil Stew)',
    cuisine: 'Indian',
    region: 'North Indian (Punjab / Delhi)',
    servings: 6,
    prepTime: 20,
    cookTime: 180,
    difficulty: 'Medium',
    overview: {
      summary: 'Legendary slow-cooked North Indian lentil dish made from whole black urad dal and red kidney beans (rajma). Soaked overnight, simmered for 3+ hours over a slow fire, enriched with ginger, garlic, tomato puree, generous chunks of butter, and heavy cream until it achieves a legendary velvety, creamy texture.',
      appearance: 'Deep mahogany-brown, ultra-thick and glossy lentil stew, swirl-drizzled with cream and topped with a melting pat of white butter.',
      texture: 'Extremely creamy, velvety, and luscious with lentils that completely melt on the tongue.',
      flavor: 'Rich, earthy, buttery, mildly smoky, with gentle tomato tang and aromatic spices.',
      restingTimeMinutes: 10
    },
    equipment: [
      { name: 'Heavy-bottomed Dutch oven or thick cast-iron pot (5–6 qt)', purpose: 'Essential for 3 hours of slow simmering without sticking or scorching.' },
      { name: 'Wooden masher or back of a ladle (mathani)', purpose: 'To press lentils against the pot walls, releasing starches for natural creaminess.' }
    ],
    beforeYouStart: [
      { task: 'Rinse 250g whole black urad dal and 50g rajma (kidney beans) in water multiple times until water runs clear.', durationMinutes: 5 },
      { task: 'Soak lentils and beans together in 1.5 liters of cold water for at least 10–12 hours (overnight).', durationMinutes: 720 }
    ],
    ingredientPrepGuide: [
      { item: 'Whole Black Urad Dal', technique: 'Rub the lentils vigorously between your hands under running cold water. This removes surface dust and polishes the dark lentil coats.' },
      { item: 'Tomato Puree', technique: 'Use smooth, strained tomato passata or puree to ensure the dal has no gritty tomato seeds or skins.' },
      { item: 'Slow Mash', technique: 'At the 2-hour mark, vigorously press lentils against the pot floor with a wooden spoon. This crushes the cooked starch cores and binds with the butter into an emulsion.' }
    ],
    essentialIngredients: [
      { name: 'Sabut Urad Dal (whole black lentils)', prep: 'soaked overnight', amount: '250g', metric: '250g', imperial: '8.8 oz', common: '1.25 cups dry' },
      { name: 'Rajma (red kidney beans)', prep: 'soaked overnight', amount: '50g', metric: '50g', imperial: '1.8 oz', common: '1/4 cup dry' },
      { name: 'Cold water', prep: 'for initial boil', amount: '1.2 liters', metric: '1200ml', imperial: '40 fl oz', common: '5 cups' },
      { name: 'Salt', prep: 'divided', amount: '1.5 tsp', metric: '9g', imperial: '0.3 oz', common: '1.5 tsp' },
      { name: 'Ginger-garlic paste', prep: 'finely pounded', amount: '2.5 tbsp', metric: '38g', imperial: '1.3 oz', common: '2.5 tbsp' },
      { name: 'Tomato puree (passata)', prep: 'smooth, no seeds', amount: '250g', metric: '250g', imperial: '8.8 oz', common: '1 cup' },
      { name: 'Kashmiri red chili powder', prep: 'for deep red color', amount: '1.5 tbsp', metric: '12g', imperial: '0.4 oz', common: '1.5 tbsp' },
      { name: 'Garam masala powder', prep: 'fragrant blend', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Kasuri methi (fenugreek leaves)', prep: 'crushed between palms', amount: '1 tbsp', metric: '3g', imperial: '0.1 oz', common: '1 tbsp' },
      { name: 'Unsalted butter', prep: 'divided into chunks', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '7 tbsp' },
      { name: 'Heavy whipping cream', prep: 'divided', amount: '80ml', metric: '80ml', imperial: '2.7 fl oz', common: '1/3 cup' }
    ],
    optionalIngredients: [
      { name: 'Natural charcoal lump (dhungar method)', prep: 'for restaurant smoky flavor', amount: '1 lump', metric: '1 lump', imperial: '1 lump', common: '1 lump', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'INITIAL LENTIL BOIL & FOAM SKIMMING',
        whatYouNeed: ['Soaked urad dal & rajma', '1.2 liters water', '1 tsp salt', '1 tbsp ginger-garlic paste', '1 tsp Kashmiri chili', 'Ladle'],
        description: 'Drain soaked dal and rinse. In your heavy pot or pressure cooker, add dal, 1.2L water, salt, 1 tbsp ginger-garlic paste, and 1 tsp Kashmiri chili. Bring to a rolling boil over high heat. Skim off and discard any greyish foam that rises to the surface during the first 5 minutes. Cover and cook on medium-low for 45 minutes in a pressure cooker (or 90 minutes in a lidded Dutch oven) until lentils are very soft.',
        howToDoIt: 'Skimming the foam removes bitter saponins. The initial seasoning penetrates deep into the softening lentil skins.',
        heat: 'Medium-Low Heat',
        heatDescription: 'Steady simmering under lid.',
        duration: 50,
        visualCues: 'Lentils swell, skins split open, and cooking water turns into a muddy purple-brown broth.',
        hear: 'Muffled, rhythmic boiling sounds.',
        smell: 'Earthy, hearty bean aroma.',
        textureCheck: 'Lentils crush easily between fingers without resistance.',
        whatShouldThisLookLike: 'Tender split lentils suspended in dark cooking liquor.',
        tip: 'Never add butter or tomatoes during this initial boil; acidity delays lentil softening.',
        commonMistake: 'Using under-soaked dal — whole urad dal has a tough fibrous seed coat that requires 10+ hours of soaking.',
        moveOnWhen: 'Beans crush to a smooth paste between your fingers.',
        quickInstructions: 'Boil soaked dal and rajma with salt, ginger-garlic, and chili; skim foam, simmer 45 mins until tender.'
      },
      {
        step: 2,
        title: 'ADD TOMATO & SPICE BASE',
        whatYouNeed: ['Boiled dal', '250g tomato puree', '1.5 tbsp ginger-garlic paste', '1 tbsp Kashmiri chili', '40g butter'],
        description: 'Stir in tomato puree, remaining 1.5 tbsp ginger-garlic paste, 1 tbsp Kashmiri chili powder, and 40g cold butter. Bring to a gentle boil, then reduce heat to the lowest setting.',
        howToDoIt: 'Adding the butter and tomato together allows the fat-soluble carotenoids in tomato and chili to dissolve into the dairy fat, creating a vibrant reddish-brown sheen.',
        heat: 'Low Heat',
        heatDescription: 'Gentle, lazy simmer.',
        duration: 10,
        visualCues: 'The broth brightens to a deep terracotta-red color; melted butter beads across the surface.',
        hear: 'Soft, gentle bubbling.',
        smell: 'Tomato richness mingling with warm ginger and garlic.',
        textureCheck: 'Liquid begins to thicken as tomato puree integrates.',
        whatShouldThisLookLike: 'Rich red-brown lentil stew with melting butter streaks.',
        tip: 'Kashmiri chili is essential here — it gives that classic restaurant red hue without scorching heat.',
        commonMistake: 'Using raw chopped tomatoes instead of smooth puree, which creates chunky bits instead of a smooth dal.',
        moveOnWhen: 'Tomatoes and butter are thoroughly incorporated.',
        quickInstructions: 'Stir in tomato puree, remaining ginger-garlic, Kashmiri chili, and 40g butter; reduce heat to low.'
      },
      {
        step: 3,
        title: 'THE SLOW SIMMER & CONTINUOUS MASH',
        whatYouNeed: ['Simmering dal', 'Wooden spoon or ladle back', 'Splash of hot water if needed'],
        description: 'Simmer the dal uncovered on very low heat for at least 90 minutes. Every 10–12 minutes, stir thoroughly and use the back of your ladle to crush and grind the lentils against the side and floor of the pot. If the dal becomes too thick, stir in 100ml hot water.',
        howToDoIt: 'Continuous crushing against the pot breaks down the starch granules in the urad dal, creating a natural suspension that thickens into a velvety cream.',
        heat: 'Dead-Low Heat',
        heatDescription: 'Barely perceptible simmer; occasional lazy bubble breaking the surface.',
        duration: 90,
        visualCues: 'Color deepens from red-orange into rich, glistening dark mahogany; sauce becomes thick like custard.',
        hear: 'Occasional soft "plop" as thick bubbles surface.',
        smell: 'Incredible deep, slow-cooked caramelized aroma.',
        textureCheck: 'Velvety, creamy, and clings heavily to the wooden spoon.',
        whatShouldThisLookLike: 'A luscious, thick, dark-brown dal with no watery separation.',
        tip: 'Keep the heat very low and stir frequently; because this dal is thick and starchy, it can easily scorch to the bottom if ignored.',
        commonMistake: 'Rushing the simmering time — 20 minutes produces watery lentils; only 90+ minutes yields the legendary creaminess.',
        moveOnWhen: 'Dal is thick, glossy, velvety, and mahogany-brown.',
        quickInstructions: 'Slow simmer on lowest heat for 90 mins, frequently mashing lentils against pot sides with a ladle.'
      },
      {
        step: 4,
        title: 'ENRICH WITH BUTTER, CREAM & KASURI METHI',
        whatYouNeed: ['Thick simmered dal', 'Remaining 60g butter (cubed)', '80ml heavy cream', '1 tsp garam masala', '1 tbsp crushed kasuri methi'],
        description: 'Whisk in the remaining 60g cold butter cubes one by one, allowing each to melt and emulsify into the dal. Stir in heavy cream (reserving 1 tbsp for garnish), garam masala, and rub kasuri methi between your palms directly into the pot. Simmer gently for 5 minutes, then turn off heat and rest covered for 10 minutes.',
        howToDoIt: 'Emulsifying cold butter into warm dal produces an impossibly glossy, silky mouthfeel. Resting allows the starch network to stabilize.',
        heat: 'Lowest Heat for 5 minutes, then Off',
        heatDescription: 'Gentle warmth to melt butter without boiling the cream.',
        duration: 15,
        visualCues: 'The dal takes on a satin sheen, lighter in color, looking like melted chocolate silk.',
        hear: 'Quiet gentle simmer.',
        smell: 'Intoxicating aroma of sweet cream, roasted fenugreek, and warming garam masala.',
        textureCheck: 'Ultra-luxurious, coat-the-tongue creaminess.',
        whatShouldThisLookLike: 'Restaurant-quality Dal Makhani: velvety, deep, and glistening.',
        tip: 'Do not allow the dal to boil vigorously after adding cream and butter, or the emulsion can split.',
        commonMistake: 'Skipping kasuri methi — it provides the signature herbal finish that balances the intense dairy richness.',
        moveOnWhen: 'Butter is fully melted and incorporated; rest covered 10 mins.',
        quickInstructions: 'Stir in 60g butter, cream, garam masala, and kasuri methi; warm 5 mins, then rest covered 10 mins.'
      }
    ],
    commonMistakes: [
      { mistake: 'Dal is watery and separated.', remedy: 'You did not simmer long enough or failed to mash the lentils against the pot sides. Simmer 90+ minutes and mash vigorously.' },
      { mistake: 'Dal burnt on the bottom.', remedy: 'Heat was too high or pot was left un-stirred. Always use a heavy-bottomed Dutch oven on the lowest flame and stir every 10 minutes.' }
    ],
    troubleshooting: [
      {
        problem: 'Dal feels too heavy or cloying',
        whatHappened: 'A high concentration of dairy fat overwhelmed the palate.',
        whyItHappened: 'Not enough acidity to cut through the rich cream and butter.',
        whatToDoNow: 'Stir in 1 teaspoon of fresh lemon juice or an extra pinch of amchur (dry mango powder) to brighten the profile.',
        howToPrevent: 'Ensure 250g of tomato puree is used to maintain proper acid balance.'
      }
    ],
    substitutions: [
      { original: 'Heavy whipping cream', substitute: 'Full-fat coconut cream or cashew cream', notes: 'Creates an exceptionally creamy vegan alternative with subtle nutty richness.' },
      { original: 'Butter', substitute: 'Vegan block butter or cold-pressed coconut oil', notes: 'Works well for vegan preparation.' }
    ],
    safetyNotes: [
      'Raw kidney beans (rajma) must be boiled vigorously for at least 10 minutes to destroy phytohaemagglutinin toxins before slow-cooking.'
    ],
    servingGuide: {
      restingTime: '10 minutes resting off heat.',
      garnishing: 'Swirl 1 tablespoon of heavy cream in a spiral over the surface, scatter ginger matchsticks, and place a cube of butter in the center.',
      plating: 'Serve in a warm ceramic handi or deep copper bowl.',
      temperature: 'Hot (60°C / 140°F).',
      accompaniments: 'Garlic Naan, Tandoori Roti, Jeera Rice, and crisp sliced onion rings.'
    }
  }
];
