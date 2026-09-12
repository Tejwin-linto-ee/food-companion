// North Indian culinary recipes Part 4
module.exports = [
  // 11. RAJMA CHAWAL
  {
    id: 'rajma-chawal',
    name: 'Jammu Rajma Chawal (Kidney Beans with Fragrant Rice)',
    cuisine: 'Indian',
    region: 'North Indian (Jammu & Kashmir / Punjab)',
    servings: 4,
    prepTime: 20,
    cookTime: 55,
    difficulty: 'Easy',
    overview: {
      summary: 'Iconic North Indian comfort food: small red Jammu kidney beans slow-simmered in a rich, velvety ginger-garlic-onion-tomato gravy spiced with anardana, Kashmiri chili, and garam masala, served over piping hot, fluffy, long-grain steamed Basmati rice with a dollop of pure desi ghee.',
      appearance: 'Deep terracotta-hued, glossy, thick kidney bean stew spooned generously over a mound of glistening white, pristine, separated grains of long Basmati rice, crowned with ginger juliennes and melting ghee.',
      texture: 'Melt-in-the-mouth creamy kidney beans with rich, clinging gravy contrasted with tender, fluffy, individual rice grains.',
      flavor: 'Hearty, comforting, savory, slightly tangy from dried pomegranate and tomatoes, with aromatic warming spices.',
      restingTimeMinutes: 5
    },
    equipment: [
      { name: 'Pressure Cooker or Heavy Dutch oven', purpose: 'Cooks dense kidney beans to creamy tenderness in 30 minutes.' },
      { name: 'Heavy-bottomed pot with tight lid', purpose: 'For absorption-method steamed Basmati rice.' },
      { name: 'Wooden ladle or potato masher', purpose: 'To mash a portion of beans to naturally thicken the gravy.' }
    ],
    beforeYouStart: [
      { task: 'Rinse 250g Kashmiri/Jammu red kidney beans and soak in 1 liter of cold water for 10–12 hours (overnight).', durationMinutes: 720 },
      { task: 'Rinse 300g aged long-grain Basmati rice gently 3 times until water runs clear; soak in cold water for 30 minutes.', durationMinutes: 30 }
    ],
    ingredientPrepGuide: [
      { item: 'Rajma Soaking', technique: 'Kidney beans must be fully rehydrated (wrinkle-free and doubled in volume). Drain and discard the soaking water before boiling.' },
      { item: 'Basmati Rice', technique: 'Soaking for 30 minutes allows grains to absorb water to their core so they elongate into long, non-sticky needle-like grains during cooking.' }
    ],
    essentialIngredients: [
      { name: 'Red Kidney Beans (Jammu or Chitra Rajma)', prep: 'soaked overnight', amount: '250g', metric: '250g', imperial: '8.8 oz', common: '1.25 cups dry' },
      { name: 'Aged Long-Grain Basmati Rice', prep: 'rinsed & soaked 30 mins', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '1.5 cups' },
      { name: 'Ghee or Mustard oil', prep: 'divided', amount: '3 tbsp', metric: '45g', imperial: '1.6 oz', common: '3 tbsp' },
      { name: 'Onions', prep: 'very finely minced', amount: '2 medium', metric: '200g', imperial: '7 oz', common: '1 cup' },
      { name: 'Tomatoes', prep: 'pureed fresh', amount: '3 medium', metric: '250g', imperial: '8.8 oz', common: '1 cup' },
      { name: 'Ginger-garlic paste', prep: 'freshly pounded', amount: '2 tbsp', metric: '30g', imperial: '1 oz', common: '2 tbsp' },
      { name: 'Green chilies', prep: 'finely minced', amount: '2 chilies', metric: '10g', imperial: '0.35 oz', common: '2 chilies' },
      { name: 'Kashmiri red chili powder', prep: 'for rich red hue', amount: '1.5 tbsp', metric: '12g', imperial: '0.4 oz', common: '1.5 tbsp' },
      { name: 'Coriander powder', prep: 'ground', amount: '1.5 tbsp', metric: '12g', imperial: '0.4 oz', common: '1.5 tbsp' },
      { name: 'Cumin seeds', prep: 'whole', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Garam masala powder', prep: 'fragrant blend', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Amchur (dry mango powder)', prep: 'for mild tang', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Fine sea salt', prep: 'divided (beans & rice)', amount: '2 tsp', metric: '12g', imperial: '0.4 oz', common: '2 tsp' },
      { name: 'Water for cooking beans', prep: 'clean water', amount: '800ml', metric: '800ml', imperial: '27 fl oz', common: '3.5 cups' },
      { name: 'Water for cooking rice', prep: '1:1.75 ratio', amount: '525ml', metric: '525ml', imperial: '18 fl oz', common: '2.25 cups' }
    ],
    optionalIngredients: [
      { name: 'Fresh ginger matchsticks', prep: 'paper-thin for garnish', amount: '1 tbsp', metric: '10g', imperial: '0.35 oz', common: '1 tbsp', optional: true },
      { name: 'Whole green cardamom & cloves', prep: 'for boiling with rice', amount: '2 pods + 2 cloves', metric: '1g', imperial: '0.03 oz', common: 'pinch', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'BOIL RAJMA TO MELTING TENDERNESS',
        whatYouNeed: ['250g soaked kidney beans', '800ml water', '1 tsp salt', '1 black cardamom', '1 bay leaf', 'Pressure cooker'],
        description: 'Drain soaked beans. Place in pressure cooker with 800ml fresh water, salt, black cardamom, and bay leaf. Cook on high until 1 whistle blows, then lower heat to medium-low and cook for 25 minutes (or 35 minutes high pressure in Instant Pot). Let pressure release naturally.',
        howToDoIt: 'Cooking with a black cardamom pod infuses a smoky warmth deep into the bean broth while pressure softens the dense legume starch.',
        heat: 'Medium-Low Pressure',
        heatDescription: 'Steady hiss.',
        duration: 35,
        visualCues: 'Beans are plump, dark red, and yield like butter when crushed with a fork.',
        hear: 'Steady pressure cooker hiss.',
        smell: 'Rich bean and black cardamom aroma.',
        textureCheck: 'Completely soft and creamy; zero firmness in the center.',
        whatShouldThisLookLike: 'Tender crimson beans in a rich red-brown broth.',
        tip: 'Never cook kidney beans in hard water or without soaking; they will stay tough.',
        commonMistake: 'Opening the cooker too fast with manual release — let it release naturally so beans absorb moisture as they settle.',
        moveOnWhen: 'A bean mashed between your thumb and index finger has zero graininess.',
        quickInstructions: 'Pressure cook soaked rajma with water, salt, black cardamom, and bay leaf for 25 mins.'
      },
      {
        step: 2,
        title: 'COOK THE ONION-TOMATO BHUNAI MASALA',
        whatYouNeed: ['2 tbsp ghee or oil', '1 tsp cumin seeds', '200g minced onions', '2 tbsp ginger-garlic paste', '2 minced green chilies', '250g tomato puree', '1.5 tbsp Kashmiri chili', '1.5 tbsp coriander powder', '1 tsp salt'],
        description: 'In a heavy pot, heat 2 tbsp ghee over medium heat. Crackle cumin seeds for 20 seconds. Add minced onions and sauté for 10–12 minutes until rich golden-brown. Stir in ginger-garlic paste and green chilies, cooking for 2 minutes. Add pureed tomatoes, Kashmiri chili, coriander powder, and salt. Cook on medium heat for 8–10 minutes, stirring often, until the tomato paste darkens into a jammy texture and glistening droplets of ghee separate at the edges.',
        howToDoIt: 'The bhunai process (slowly caramelizing onions, garlic, and tomato with spices until oil separates) is the secret to deep restaurant-style curry depth.',
        heat: 'Medium Heat',
        heatDescription: 'Steady sizzle with steam rising; fat separating around the perimeter.',
        duration: 20,
        visualCues: 'Onions shrink and darken to rich amber; tomatoes reduce to a glossy, thick paste releasing droplets of ghee.',
        hear: 'Active, quiet frying sizzle.',
        smell: 'Sweet caramelized onion, spicy garlic, and roasted coriander.',
        textureCheck: 'Jammy, thick paste.',
        whatShouldThisLookLike: 'Dark reddish-brown concentrated curry paste.',
        tip: 'Take your time browning the onions; pale onions will make the rajma taste sweet and watery.',
        commonMistake: 'Adding the boiled beans before the tomato-spice mixture has released its oil.',
        moveOnWhen: 'Masala is dark, glossy, and oil beads at the perimeter.',
        quickInstructions: 'Brown onions in ghee 10 mins, add ginger-garlic and chilies; add tomatoes and spices, cook 10 mins until oil separates.'
      },
      {
        step: 3,
        title: 'SIMMER & COARSE CRUSH TO VELVET',
        whatYouNeed: ['Boiled rajma + cooking broth', 'Cooked masala base', 'Potato masher', '1 tsp garam masala', '1 tsp amchur', '1 tbsp butter'],
        description: 'Pour the boiled beans and their dark cooking broth into the masala pot. Bring to a vigorous boil, then reduce heat to low-medium. Take a potato masher or ladle and coarsely mash about 1/4 of the beans against the pot bottom. Simmer gently uncovered for 15–18 minutes until the gravy thickens into a luxurious, creamy consistency. Stir in garam masala, amchur, and 1 tbsp butter. Turn off heat and rest 5 minutes.',
        howToDoIt: 'Crushing a portion of the kidney beans releases their rich, starchy interior, naturally emulsifying the water and tomato base into a velvety gravy without added cream.',
        heat: 'Low-Medium Heat',
        heatDescription: 'Gentle, steady simmer with soft bubbling.',
        duration: 18,
        visualCues: 'Gravy transforms from watery liquid into a thick, clinging stew coating the back of a spoon.',
        hear: 'Soft, gentle simmering sounds.',
        smell: 'Earthy, comforting North Indian home-cooked aroma.',
        textureCheck: 'Thick, creamy, and clinging with whole beans suspended throughout.',
        whatShouldThisLookLike: 'Rich, glossy, terracotta-red kidney bean curry.',
        tip: 'Rajma thickens dramatically as it cools; leave it slightly looser than your desired final consistency.',
        commonMistake: 'Mashing all the beans — keep 75% whole for satisfying texture.',
        moveOnWhen: 'Gravy is thick, glossy, and coats a wooden spoon.',
        quickInstructions: 'Add beans and broth to masala; mash 25% to thicken, simmer 15 mins. Fold in garam masala, amchur, butter.'
      },
      {
        step: 4,
        title: 'STEAM FLUFFY AROMATIC BASMATI RICE',
        whatYouNeed: ['300g soaked Basmati rice (drained)', '525ml water', '1 tsp salt', '1 tsp ghee', 'Optional cardamom and cloves', 'Pot with tight lid'],
        description: 'In a medium heavy pot, combine drained soaked rice, 525ml water, salt, 1 tsp ghee, and whole spices. Bring to a rolling boil over high heat uncovered. Let boil for 2–3 minutes until the water level drops to the surface of the rice and steam craters appear. Immediately cover with a tight lid, reduce heat to the lowest possible setting, and cook undisturbed for 10 minutes. Turn off heat and let steam for 5 minutes without opening the lid. Fluff gently with a fork.',
        howToDoIt: 'Soaking hydrates the starch core, allowing rapid boiling to set the outer shell without breaking. Trapped steam cooks the grains to maximum elongation without stickiness.',
        heat: 'High Boil then Lowest Heat then Off',
        heatDescription: 'Vigorous boil for 2 mins, then dead-low under lid, then resting off heat.',
        duration: 18,
        visualCues: 'Grains double in length, stand upright, and separate cleanly with zero clumping.',
        hear: 'Soft ticking of trapped steam under the lid.',
        smell: 'Incredible fragrant floral basmati aroma with subtle cardamom hints.',
        textureCheck: 'Tender, light, separate grains with a toothsome bite.',
        whatShouldThisLookLike: 'Pristine, glistening white needles of rice that separate effortlessly with a fork.',
        tip: 'Never stir rice with a spoon while boiling; stirring breaks the fragile elongating grains.',
        commonMistake: 'Opening the lid during the 10-minute steam phase, releasing critical moisture.',
        moveOnWhen: 'Rice is fluffed with a fork and grains are long, light, and separate.',
        quickInstructions: 'Boil soaked rice and water until craters form; cover, cook on lowest heat 10 mins, rest 5 mins, fluff with fork.'
      }
    ],
    commonMistakes: [
      { mistake: 'Rajma was hard and gritty.', remedy: 'Under-soaking or not cooking long enough in the pressure cooker. Soaked beans need 25+ minutes of pressure cooking.' },
      { mistake: 'Rice was mushy and clumpy.', remedy: 'Too much water or stirring during cooking. Follow the exact 1:1.75 rice-to-water ratio and fluff only with a fork.' }
    ],
    troubleshooting: [
      {
        problem: 'Rajma gravy is too thin and watery',
        whatHappened: 'Not enough beans were mashed to release starches.',
        whyItHappened: 'Broth did not reduce sufficiently.',
        whatToDoNow: 'Mash an extra 2 tablespoons of beans against the pot side and simmer uncovered on medium heat for 5 minutes.',
        howToPrevent: 'Always mash roughly 25% of the cooked beans with a potato masher.'
      }
    ],
    substitutions: [
      { original: 'Jammu Rajma', substitute: 'Dark red kidney beans or pinto beans', notes: 'Pinto beans cook slightly faster and provide a delightfully creamy texture.' }
    ],
    safetyNotes: [
      'Raw red kidney beans contain high levels of phytohaemagglutinin; always boil vigorously for at least 10 minutes to eliminate toxins.'
    ],
    servingGuide: {
      restingTime: '5 minutes.',
      garnishing: 'Top rajma with fine ginger juliennes, chopped cilantro, and a spoonful of hot melted desi ghee.',
      plating: 'Spoon a generous mound of steaming basmati rice onto a plate, create a shallow well in the center, and ladle hot rajma over the top.',
      temperature: 'Piping hot.',
      accompaniments: 'Sliced red onions tossed with lemon juice and salt, fresh green chilies, mango pickle, and crisp roasted papad.'
    }
  },

  // 12. ALOO PARATHA
  {
    id: 'aloo-paratha',
    name: 'Dhaba-Style Punjabi Aloo Paratha',
    cuisine: 'Indian',
    region: 'North Indian (Punjab)',
    servings: 4,
    prepTime: 25,
    cookTime: 20,
    difficulty: 'Medium',
    overview: {
      summary: 'Golden, crispy, griddled whole wheat flatbread stuffed edge-to-edge with an aromatic spiced potato filling seasoned with roasted cumin, anardana, amchur, fresh green chilies, and cilantro. Cooked on an iron tawa with generous dollops of desi ghee, served with homemade white butter (makhan).',
      appearance: 'Substantial, round, golden-amber flatbread with speckled brown blisters, slightly puffed, revealing spiced potato filling when torn, crowned with a melting slab of white butter.',
      texture: 'Crispy and crunchy crust yielding to a soft, steamy, fragrant potato center.',
      flavor: 'Toasted whole wheat with buttery crunch, paired with spicy, tangy, savory potato filling.',
      restingTimeMinutes: 1
    },
    equipment: [
      { name: 'Heavy iron tawa or cast iron skillet', purpose: 'Ensures even crisping of the flatbread without burning.' },
      { name: 'Rolling pin (belan) and rolling board', purpose: 'For rolling stuffed dough evenly without bursting.' },
      { name: 'Flat metal spatula', purpose: 'To press the edges onto the hot griddle for uniform browning.' }
    ],
    beforeYouStart: [
      { task: 'Boil 500g potatoes in salted water until tender; cool completely, peel, and mash smooth with no hard lumps.', durationMinutes: 30 },
      { task: 'Knead 250g chakki atta with 160ml water into a very soft, pliable dough; rest covered for 20 minutes.', durationMinutes: 25 }
    ],
    ingredientPrepGuide: [
      { item: 'Potato Filling Consistency', technique: 'Potatoes MUST be cold and mashed completely smooth. Any hard lump of potato will tear through the dough during rolling and cause filling to burst out.' },
      { item: 'Soft Dough Rule', technique: 'The wheat dough must be equally soft as the potato filling. If the dough is firmer than the filling, the potato will squirt out of the edges when rolled.' }
    ],
    essentialIngredients: [
      { name: 'Chakki Atta (whole wheat flour)', prep: 'sifted', amount: '250g', metric: '250g', imperial: '8.8 oz', common: '2 cups' },
      { name: 'Lukewarm water', prep: 'for soft dough', amount: '160ml', metric: '160ml', imperial: '5.4 fl oz', common: '2/3 cup' },
      { name: 'Potatoes (Yukon Gold or Russet)', prep: 'boiled, peeled, mashed smooth without lumps', amount: '500g', metric: '500g', imperial: '1.1 lbs', common: '3 large' },
      { name: 'Green chilies', prep: 'very finely minced', amount: '2 chilies', metric: '10g', imperial: '0.35 oz', common: '2 chilies' },
      { name: 'Fresh ginger', prep: 'finely grated', amount: '1 tbsp', metric: '15g', imperial: '0.5 oz', common: '1 tbsp' },
      { name: 'Fresh cilantro', prep: 'finely chopped', amount: '3 tbsp', metric: '15g', imperial: '0.5 oz', common: '3 tbsp' },
      { name: 'Roasted cumin powder', prep: 'freshly ground', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Amchur (dry mango powder)', prep: 'for tartness', amount: '1.5 tsp', metric: '5g', imperial: '0.18 oz', common: '1.5 tsp' },
      { name: 'Anardana powder', prep: 'coarsely crushed pomegranate seeds', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Garam masala', prep: 'powder', amount: '1/2 tsp', metric: '1.5g', imperial: '0.05 oz', common: '1/2 tsp' },
      { name: 'Red chili powder', prep: 'for mild heat', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Ajwain (carom seeds)', prep: 'crushed into dough', amount: '1/2 tsp', metric: '1.5g', imperial: '0.05 oz', common: '1/2 tsp' },
      { name: 'Fine sea salt', prep: 'divided (dough & filling)', amount: '1.5 tsp', metric: '9g', imperial: '0.3 oz', common: '1.5 tsp' },
      { name: 'Desi Ghee (or butter)', prep: 'for pan-roasting', amount: '60g', metric: '60g', imperial: '2.1 oz', common: '4 tbsp' }
    ],
    optionalIngredients: [
      { name: 'Fresh homemade white butter (makhan)', prep: 'for topping hot paratha', amount: '4 pats', metric: '40g', imperial: '1.4 oz', common: '4 pats', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'PREPARE LUMPFREE SPICED POTATO FILLING',
        whatYouNeed: ['500g cold mashed potatoes', '2 minced green chilies', '1 tbsp grated ginger', '3 tbsp chopped cilantro', '1 tsp roasted cumin', '1.5 tsp amchur', '1 tsp anardana', '1/2 tsp garam masala', '1 tsp chili powder', '1 tsp salt'],
        description: 'In a bowl, combine mashed potatoes, ginger, green chilies, cilantro, roasted cumin, amchur, anardana, garam masala, red chili, and salt. Mix thoroughly with a fork. Divide into 4 equal, smooth balls (approx 120g each).',
        howToDoIt: 'Adding spices to cold mashed potatoes ensures salt does not draw out water and turn the mixture into a wet, runny paste.',
        heat: 'Off',
        heatDescription: 'Filling prep station.',
        duration: 5,
        visualCues: 'Evenly spiced potato balls speckled with green herbs and red chili.',
        hear: 'None',
        smell: 'Tangy mango powder, sharp ginger, and herbal cilantro.',
        textureCheck: 'Firm, smooth, moldable potato paste with zero hard lumps.',
        whatShouldThisLookLike: 'Four smooth spiced potato balls sitting on a plate.',
        tip: 'Taste the potato mixture — it should taste slightly saltier and tangier than usual because the unseasoned wheat dough will balance it.',
        commonMistake: 'Leaving potato chunks — chunks will tear through the dough when rolling.',
        moveOnWhen: 'Potato mixture is smooth, spiced, and divided into 4 balls.',
        quickInstructions: 'Mix cold mashed potatoes with chilies, ginger, cilantro, spices, and salt. Divide into 4 balls.'
      },
      {
        step: 2,
        title: 'STUFF & PLEAT THE DOUGH PACKET',
        whatYouNeed: ['Rested wheat dough', '4 potato balls', 'Extra atta for dusting', 'Rolling pin'],
        description: 'Divide dough into 4 equal balls (approx 90g each). Take one dough ball, roll into a 10cm disc, keeping the edges thinner than the center. Place a potato filling ball in the center. Bring the edges of the dough up around the filling, pleating like a pouch. Pinch the top pleats together tightly to seal completely. Gently flatten the stuffed ball between your palms.',
        howToDoIt: 'Keeping the center of the dough disc thick provides a cushion beneath the heavy filling, while thin edges pleat cleanly at the top without forming a dense knot of dough.',
        heat: 'Off',
        heatDescription: 'Stuffing station.',
        duration: 5,
        visualCues: 'A smooth, plump, sealed dough bun with no cracks or visible filling.',
        hear: 'None',
        smell: 'Fresh wheat and spiced potato.',
        textureCheck: 'Soft, pliable stuffed disc.',
        whatShouldThisLookLike: 'Tightly sealed, plump round dough pouch.',
        tip: 'Dust the stuffed pouch lightly with flour before pressing to prevent sticking to your palms.',
        commonMistake: 'Failing to pinch the pleats firmly, causing filling to leak onto the rolling board.',
        moveOnWhen: 'All 4 dough balls are stuffed and sealed.',
        quickInstructions: 'Roll 10cm disc, place potato ball in center, pleat edges to enclose, pinch tight, flatten gently.'
      },
      {
        step: 3,
        title: 'GENTLE ROLLING FROM CENTER TO EDGE',
        whatYouNeed: ['Stuffed dough pouch', 'Rolling pin', 'Dry flour for dusting'],
        description: 'Dust the sealed dough disc generously with dry flour. Gently roll outward from the center toward the edges with light, even pressure. Rotate the paratha a quarter turn with each stroke to maintain a circular shape, rolling until it reaches 20cm (8 inches) in diameter and approx 4mm thick.',
        howToDoIt: 'Rolling gently from center to perimeter distributes the potato filling all the way to the very outer crust without tearing the gluten membrane.',
        heat: 'Off',
        heatDescription: 'Rolling surface.',
        duration: 3,
        visualCues: 'Spiced potato filling becomes faintly visible through the translucent top dough layer without bursting through.',
        hear: 'None',
        smell: 'Toasty wheat and spices.',
        textureCheck: 'Even, supple 4mm thick round disc.',
        whatShouldThisLookLike: 'An even 20cm round flatbread with filling spread uniformly edge to edge.',
        tip: 'If an air bubble forms while rolling, gently prick it with a toothpick to let air escape without tearing.',
        commonMistake: 'Pressing down hard with the rolling pin — this tears the dough and causes potato filling to stick to the pin.',
        moveOnWhen: 'Paratha is rolled to 20cm diameter with no tears.',
        quickInstructions: 'Roll stuffed pouch with light pressure from center out into an even 20cm flatbread.'
      },
      {
        step: 4,
        title: 'PAN-ROAST WITH DESI GHEE',
        whatYouNeed: ['Rolled paratha', 'Iron tawa over Medium heat', '2 tbsp desi ghee', 'Flat metal spatula'],
        description: 'Place paratha on a preheated medium-hot iron tawa. Cook dry for 45 seconds until small bubbles appear on top. Flip over. Brush 1 tbsp desi ghee over the cooked top. After 45 seconds, flip again and brush 1 tbsp ghee over the other side. Press edges gently with the flat spatula, rotating frequently, for 2 minutes until both sides are deep golden-brown, blistered, and crispy.',
        howToDoIt: 'Pressing the edges with a spatula forces heat into the thicker perimeter where the pleats sealed, ensuring the entire paratha cooks evenly.',
        heat: 'Medium Heat',
        heatDescription: 'Lively sizzle; ghee bubbling gently around the crust without smoking.',
        duration: 4,
        visualCues: 'Paratha swells with steam; beautiful dark golden-brown blister spots appear on both faces.',
        hear: 'Crisp, appetizing crackle of ghee frying the wheat crust.',
        smell: 'Intoxicating aroma of fried whole wheat, toasty ghee, and spiced potatoes.',
        textureCheck: 'Crispy and crunchy crust with a soft, steamy center.',
        whatShouldThisLookLike: 'Magnificent golden-brown, blistered Punjabi paratha.',
        tip: 'Do not use low heat or the paratha will dry out and turn hard; medium heat keeps the inside steamy and outside crispy.',
        commonMistake: 'Using oil instead of ghee — ghee provides the quintessential crispness and dhaba aroma.',
        moveOnWhen: 'Both sides are crispy, golden-brown, and paratha puffs with steam.',
        quickInstructions: 'Cook dry on medium tawa 45s per side; brush liberally with ghee, press edges, and fry until golden-crisp.'
      }
    ],
    commonMistakes: [
      { mistake: 'Filling burst out while rolling.', remedy: 'The potatoes had hard lumps or the dough was too stiff. Always mash potatoes 100% smooth and knead very soft dough.' },
      { mistake: 'Paratha is soggy.', remedy: 'The potatoes were boiled and mashed while hot, creating moisture. Always cool boiled potatoes completely before mashing.' }
    ],
    troubleshooting: [
      {
        problem: 'Filling is concentrated only in the center while edges are empty dough',
        whatHappened: 'Rolled only in the center without pushing outward.',
        whyItHappened: 'Downward pressure rather than rolling toward perimeter.',
        whatToDoNow: 'Cook as is; on subsequent parathas, use rolling strokes that push gently from center all the way past the outer rim.',
        howToPrevent: 'Always roll from center outward in gentle radiating strokes.'
      }
    ],
    substitutions: [
      { original: 'Desi Ghee', substitute: 'Mustard oil or vegan butter', notes: 'Mustard oil is popular in UP/Bihar and gives a sharp, pungent crispness.' },
      { original: 'Anardana powder', substitute: 'Extra amchur or chaat masala', notes: 'Provides necessary tart kick.' }
    ],
    safetyNotes: [
      'Ghee can splatter if the tawa is too hot; keep flame at medium.'
    ],
    servingGuide: {
      restingTime: '1 minute.',
      garnishing: 'Place a generous knob of fresh white butter (makhan) directly on top of the piping hot paratha so it melts into a pool.',
      plating: 'Serve on a wide plate alongside bowls of fresh thick curd and spicy pickle.',
      temperature: 'Piping hot off the tawa.',
      accompaniments: 'Chilled plain yogurt (dahi), spicy mango or lime pickle (achar), and fresh green chilies.'
    }
  },

  // 13. KEBAB (MUGHLAI SEEKH KEBAB)
  {
    id: 'kebab',
    name: 'Mughlai Gosht Seekh Kebab',
    cuisine: 'Indian',
    region: 'North Indian (Awadh / Lucknow)',
    servings: 4,
    prepTime: 30,
    cookTime: 15,
    difficulty: 'Medium',
    overview: {
      summary: 'Royal Awadhi spiced minced mutton (lamb) skewers blended with raw papaya paste tenderizer, fried brown onions (birista), fresh mint, ginger, garlic, and roasted chickpea flour. Molded around flat steel seekhs and charred over intense heat until succulent, juicy, and smoky.',
      appearance: 'Long, cylindrical, succulent golden-brown kebabs with dark charred blister rings, glistening with melted butter, served over red onion rings with lemon wedges.',
      texture: 'Crisp, smoky exterior giving way to an extraordinarily tender, melt-in-the-mouth, juicy interior.',
      flavor: 'Rich, savory, deeply spiced with warm mace, nutmeg, roasted cumin, and pungent fresh mint.',
      restingTimeMinutes: 3
    },
    equipment: [
      { name: 'Wide flat metal seekh skewers (15–20mm wide)', purpose: 'Flat blades prevent the soft minced meat from spinning when turned over heat.' },
      { name: 'Heavy cast iron grill pan or oven broiler', purpose: 'Achieves intense radiant heat to sear meat juices quickly.' },
      { name: 'Meat mincer or food processor', purpose: 'Mincing meat to a fine, paste-like consistency.' }
    ],
    beforeYouStart: [
      { task: 'Mince 500g lamb (with 20% fat) twice through a fine grinding plate.', durationMinutes: 10 },
      { task: 'Fry 1 sliced onion in ghee until deep golden-brown (birista); cool and crush finely.', durationMinutes: 12 },
      { task: 'Dry roast 2 tbsp besan (gram flour) in a pan for 2 minutes until nutty.', durationMinutes: 3 }
    ],
    ingredientPrepGuide: [
      { item: 'Meat Fat Ratio', technique: 'Lamb mince MUST contain at least 20% fat. Lean lamb makes dry, crumbly kebabs that fall off the skewer. Fat binds the mince and keeps it juicy under intense heat.' },
      { item: 'Kneading the Mince', technique: 'Knead the seasoned mince vigorously with the heel of your hand for 6–8 minutes. This develops the protein myosin, forming a sticky fibrous paste that clings securely to the skewer without cracking.' }
    ],
    essentialIngredients: [
      { name: 'Minced lamb or mutton (20% fat)', prep: 'finely double-minced', amount: '500g', metric: '500g', imperial: '1.1 lbs', common: '1.1 lbs' },
      { name: 'Raw green papaya paste', prep: 'natural meat tenderizer', amount: '1.5 tbsp', metric: '22g', imperial: '0.8 oz', common: '1.5 tbsp' },
      { name: 'Fried brown onions (Birista)', prep: 'crushed finely', amount: '40g', metric: '40g', imperial: '1.4 oz', common: '1/3 cup' },
      { name: 'Roasted besan (gram flour)', prep: 'for binding', amount: '2 tbsp', metric: '20g', imperial: '0.7 oz', common: '2 tbsp' },
      { name: 'Ginger-garlic paste', prep: 'freshly pounded', amount: '2 tbsp', metric: '30g', imperial: '1 oz', common: '2 tbsp' },
      { name: 'Fresh mint leaves', prep: 'finely chopped', amount: '3 tbsp', metric: '15g', imperial: '0.5 oz', common: '3 tbsp' },
      { name: 'Fresh cilantro leaves', prep: 'finely chopped', amount: '3 tbsp', metric: '15g', imperial: '0.5 oz', common: '3 tbsp' },
      { name: 'Green chilies', prep: 'finely minced', amount: '2 chilies', metric: '10g', imperial: '0.35 oz', common: '2 chilies' },
      { name: 'Garam masala powder', prep: 'royal blend', amount: '1.5 tsp', metric: '4.5g', imperial: '0.15 oz', common: '1.5 tsp' },
      { name: 'Roasted cumin powder', prep: 'ground', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Mace and nutmeg powder (javitri-jaiphal)', prep: 'finely ground', amount: '1/2 tsp', metric: '1.5g', imperial: '0.05 oz', common: '1/2 tsp' },
      { name: 'Kashmiri red chili powder', prep: 'for warm color', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Fine sea salt', prep: 'to taste', amount: '1.5 tsp', metric: '9g', imperial: '0.3 oz', common: '1.5 tsp' },
      { name: 'Desi Ghee or melted butter', prep: 'for basting', amount: '3 tbsp', metric: '45g', imperial: '1.6 oz', common: '3 tbsp' }
    ],
    optionalIngredients: [
      { name: 'Chaat masala', prep: 'for dusting finished kebabs', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'SEASON & INTENSELY KNEAD THE MINCE',
        whatYouNeed: ['500g lamb mince', '1.5 tbsp raw papaya paste', '40g crushed birista', '2 tbsp roasted besan', '2 tbsp ginger-garlic paste', '3 tbsp mint', '3 tbsp cilantro', '2 chilies', 'all spices', '1.5 tsp salt'],
        description: 'In a large bowl, combine lamb mince with all aromatics, spices, papaya paste, crushed fried onions, and roasted besan. Knead vigorously with your knuckles and palms for 6–8 minutes like bread dough until the meat turns pale, sticky, and forms fibrous strands. Cover and refrigerate for 1 hour.',
        howToDoIt: 'Vigorous mechanical kneading extracts myosin protein from muscle fibers. When hydrated with salt and fat, myosin forms a cross-linked sticky network that holds the kebab firmly on the skewer during cooking.',
        heat: 'Chilled (Refrigerator)',
        heatDescription: 'Cold resting to firm fats.',
        duration: 70,
        visualCues: 'Minced meat changes from loose ground meat into a uniform, sticky, cohesive paste.',
        hear: 'None',
        smell: 'Fragrant mint, warm mace, and savory spices.',
        textureCheck: 'Sticky, cohesive, paste-like consistency.',
        whatShouldThisLookLike: 'Uniform spiced meat paste adhering tightly to the bowl.',
        tip: 'If the mince is too wet, add an extra tablespoon of roasted besan to absorb excess moisture.',
        commonMistake: 'Mixing gently with a spoon without kneading — loose meat will crack and tumble off the skewer into the fire.',
        moveOnWhen: 'Meat is kneaded to a sticky paste and chilled for 1 hour.',
        quickInstructions: 'Knead lamb mince with spices, papaya, herbs, and besan for 7 mins until sticky. Chill 1 hour.'
      },
      {
        step: 2,
        title: 'MOLD ONTO FLAT SEEKH SKEWERS',
        whatYouNeed: ['Chilled meat paste', '4 flat metal seekhs (skewers)', 'Bowl of cold water for hands'],
        description: 'Divide meat into 4 large portions (approx 125g each). Wet your hands with cold water. Grab one portion of meat and shape into an elongated cylinder in your palm. Thread the skewer through the center. Using your thumb and fingers, gently press and slide the meat along the skewer into an even 20cm (8 inch) cylinder about 2.5cm thick. Use your fingertips to make gentle decorative indentations along the kebab.',
        howToDoIt: 'Wet hands prevent the sticky meat paste from clinging to your skin and give the kebab a smooth, sealed exterior.',
        heat: 'Off',
        heatDescription: 'Assembly station.',
        duration: 8,
        visualCues: 'Long, even cylinders of meat firmly hugging the flat metal skewers with finger-pressed ridges.',
        hear: 'None',
        smell: 'Aromatic seasoned lamb.',
        textureCheck: 'Taut, smooth cylinder adhering tightly to metal.',
        whatShouldThisLookLike: 'Four evenly molded seekh kebabs on flat metal skewers.',
        tip: 'Ensure the top and bottom ends of the meat cylinder are pinched tightly against the skewer to anchor them.',
        commonMistake: 'Using round thin skewers — round skewers rotate freely inside the cooked meat, making it impossible to flip.',
        moveOnWhen: 'All 4 kebabs are molded securely onto skewers.',
        quickInstructions: 'With wet hands, press and slide 125g meat along each flat skewer into a 20cm cylinder.'
      },
      {
        step: 3,
        title: 'HIGH-HEAT CHAR & BASTE',
        whatYouNeed: ['Molded skewers', 'Cast iron grill pan on High heat or Oven Broiler (240°C)', '3 tbsp melted ghee', 'Basting brush'],
        description: 'Preheat a heavy grill pan over high heat (or preheat oven broiler). Place skewers across the grill. Sear undisturbed for 3 minutes. Turn 90 degrees and sear for 2 minutes. Liberally brush all sides with melted ghee. Continue rotating and cooking for 8–10 minutes total until the exterior is deeply charred with brown grill marks and the meat registers 72°C (160°F) internally.',
        howToDoIt: 'Fierce contact heat creates rapid Maillard browning, crusting the exterior and trapping the rendered fat juices inside.',
        heat: 'High Heat',
        heatDescription: 'Sizzling aggressively; drops of fat vaporizing into aromatic smoke.',
        duration: 10,
        visualCues: 'Distinct blackened char grill lines; meat firms up and shrinks slightly on the skewer; ghee bubbles over the crust.',
        hear: 'Loud crackling and spitting as fat renders.',
        smell: 'Incredible Mughlai royal barbecue char.',
        textureCheck: 'Firm and springy on the surface, juicy inside.',
        whatShouldThisLookLike: 'Deep golden-brown charred seekh kebabs glistening with butter.',
        tip: 'Do not turn the kebabs during the first 2 minutes; turning too early can tear the delicate unsealed meat.',
        commonMistake: 'Overcooking beyond 12 minutes — overcooked lamb dries out and turns crumbly.',
        moveOnWhen: 'Kebabs are charred on all facets and reach 72°C internally.',
        quickInstructions: 'Grill on high heat 8-10 mins, rotating every 2 mins and basting with ghee until charred.'
      },
      {
        step: 4,
        title: 'SLIDE OFF SKEWER & REST',
        whatYouNeed: ['Hot cooked skewers', 'Clean kitchen cloth or flatbread', 'Tongs', '1 tsp chaat masala'],
        description: 'Let skewers rest for 2 minutes. Hold the skewer vertically with a clean cloth. Using a piece of flatbread or tongs, gently grip the top of the kebab and slide it downward off the metal skewer in one smooth motion onto a serving plate. Dust with chaat masala.',
        howToDoIt: 'Resting for 2 minutes lets the internal meat juices settle and prevents the kebab from breaking apart when sliding off.',
        heat: 'Off',
        heatDescription: 'Resting and de-skewering.',
        duration: 3,
        visualCues: 'Intact hollow-centered kebab cylinders resting on the platter.',
        hear: 'Soft sizzle.',
        smell: 'Smoky spiced meat and tangy chaat masala.',
        textureCheck: 'Tender, juicy, and succulent.',
        whatShouldThisLookLike: 'Perfect cylindrical seekh kebabs dusted with chaat masala.',
        tip: 'If the meat sticks to the skewer, twist the skewer gently before sliding to break the vacuum.',
        commonMistake: 'Yanking aggressively, which tears the hot kebab into broken chunks.',
        moveOnWhen: 'Kebabs are slid off skewers and dusted with chaat masala.',
        quickInstructions: 'Rest 2 mins, slide kebabs gently off skewers using a cloth or bread; dust with chaat masala.'
      }
    ],
    commonMistakes: [
      { mistake: 'Kebabs cracked and fell off skewer.', remedy: 'The meat mince was too lean or not kneaded long enough to develop myosin. Always use 20% fat and knead 7 minutes.' },
      { mistake: 'Kebabs are dry and tough.', remedy: 'They were cooked too long. High heat should cook lamb seekh kebabs in under 10 minutes.' }
    ],
    troubleshooting: [
      {
        problem: 'I do not have metal seekh skewers',
        whatHappened: 'Need alternative cooking shape.',
        whyItHappened: 'No flat skewers available.',
        whatToDoNow: 'Shape the meat into 10cm long finger-shaped kebabs (Galouti/Shami style) and pan-fry in a cast iron skillet with 2 tbsp ghee for 4 minutes per side.',
        howToPrevent: 'Pan-frying patties produces equally delicious tender kebabs.'
      }
    ],
    substitutions: [
      { original: 'Minced Lamb/Mutton', substitute: 'Minced chicken or turkey thighs (with fat)', notes: 'Chicken seekh kebabs cook in 6–8 minutes and are exceptionally tender.' },
      { original: 'Raw papaya paste', substitute: '1 tsp meat tenderizer powder or 1 tbsp lemon juice', notes: 'Papaya contains papain enzyme which softens tough fibers.' }
    ],
    safetyNotes: [
      'Minced red meat must reach an internal temperature of 72°C (160°F).'
    ],
    servingGuide: {
      restingTime: '2 minutes.',
      garnishing: 'Sprinkle with chaat masala, chopped mint leaves, and fresh lemon juice.',
      plating: 'Serve on a platter lined with sliced red onion rings tossed in lemon and chili.',
      temperature: 'Piping hot.',
      accompaniments: 'Mint-coriander yogurt chutney, rumali roti or naan, and fresh lemon wedges.'
    }
  },

  // 14. AWADHI DUM BIRYANI
  {
    id: 'biryani',
    name: 'Awadhi Gosht Dum Biryani (Lucknowi Biryani)',
    cuisine: 'Indian',
    region: 'North Indian (Awadh / Lucknow)',
    servings: 6,
    prepTime: 40,
    cookTime: 60,
    difficulty: 'Hard',
    overview: {
      summary: 'The pinnacle of Royal Awadhi cuisine: tender bone-in mutton pieces cooked in a rich, aromatic spiced stock (yakhni), layered in a heavy handi with 70% par-cooked fragrant long-grain Basmati rice, infused with saffron-kewra milk, golden fried onions (birista), fresh mint, and desi ghee, then sealed airtight with dough and slow dum-cooked to aromatic perfection.',
      appearance: 'Breathtaking mosaic of dual-toned rice grains: snow-white, saffron-gold, and spiced amber, adorned with crispy fried onions, fresh mint leaves, and tender fall-apart meat.',
      texture: 'Fluffy, long, individual grains of rice that never stick together, paired with melt-in-the-mouth bone-in meat.',
      flavor: 'Subtle, delicate, aristocratic, deeply perfumed with green cardamom, mace, saffron, and screwpine (kewra) florals.',
      restingTimeMinutes: 10
    },
    equipment: [
      { name: 'Heavy-bottomed Biryani Handi or Dutch Oven with tight lid', purpose: 'Distributes slow heat evenly during the sealed dum stage without burning the bottom layer.' },
      { name: 'Heavy flat tawa / cast iron griddle', purpose: 'Placed under the handi as a heat diffuser to prevent direct flame scorching during dum.' },
      { name: 'Large pasta pot', purpose: 'For boiling rice in massive water volume so grains elongate without friction.' },
      { name: 'Perforated spider skimmer', purpose: 'Gently transfers par-cooked rice directly from boiling water to the handi.' }
    ],
    beforeYouStart: [
      { task: 'Rinse 500g aged Basmati rice gently 3 times until water runs clear; soak in cold water for 30 minutes.', durationMinutes: 30 },
      { task: 'Steep 1/2 tsp crushed saffron threads in 60ml warm milk with 1 tsp kewra water for 20 minutes.', durationMinutes: 20 },
      { task: 'Slice 3 large onions paper-thin and deep-fry in ghee until golden-brown and crisp (birista); drain on paper.', durationMinutes: 15 }
    ],
    ingredientPrepGuide: [
      { item: 'Rice Par-Cooking (70% Dum Rule)', technique: 'Boil rice in plenty of salted water with whole spices for exactly 6–7 minutes until the grain is long and flexible but still has a firm raw bite in the center when broken. It finishes cooking inside the sealed handi by absorbing the fragrant meat steam.' },
      { item: 'Dough Seal (Purdah)', technique: 'Roll a rope of simple wheat flour and water dough along the rim of the pot. Press the heavy lid firmly down onto the dough to create an absolute airtight seal that locks in all fragrant steam.' }
    ],
    essentialIngredients: [
      { name: 'Bone-in lamb/mutton or chicken pieces', prep: 'cut into 5cm pieces', amount: '800g', metric: '800g', imperial: '1.75 lbs', common: '800g' },
      { name: 'Aged long-grain Basmati rice (Extra Long)', prep: 'soaked 30 mins', amount: '500g', metric: '500g', imperial: '1.1 lbs', common: '2.5 cups' },
      { name: 'Fried brown onions (Birista)', prep: 'divided', amount: '120g', metric: '120g', imperial: '4.2 oz', common: '1 cup' },
      { name: 'Plain full-fat yogurt (whisked)', prep: 'room temperature', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '2/3 cup' },
      { name: 'Ginger-garlic paste', prep: 'freshly pounded', amount: '2.5 tbsp', metric: '38g', imperial: '1.3 oz', common: '2.5 tbsp' },
      { name: 'Desi Ghee', prep: 'divided', amount: '5 tbsp', metric: '75g', imperial: '2.6 oz', common: '5 tbsp' },
      { name: 'Saffron threads (kesar)', prep: 'steeped in 60ml warm milk', amount: '1/2 tsp', metric: '1g', imperial: '0.03 oz', common: 'pinch' },
      { name: 'Kewra water (screwpine essence)', prep: 'for royal aroma', amount: '1 tsp', metric: '5ml', imperial: '0.17 fl oz', common: '1 tsp' },
      { name: 'Green cardamom pods', prep: 'lightly cracked (divided)', amount: '8 pods', metric: '2g', imperial: '0.07 oz', common: '8 pods' },
      { name: 'Cloves', prep: 'whole (divided)', amount: '6 cloves', metric: '1g', imperial: '0.03 oz', common: '6 cloves' },
      { name: 'Cinnamon sticks', prep: 'broken (divided)', amount: '2 sticks', metric: '4g', imperial: '0.14 oz', common: '2 sticks' },
      { name: 'Shahi jeera (caraway seeds)', prep: 'for yakhni & rice', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Mace and nutmeg powder', prep: 'finely ground', amount: '1/2 tsp', metric: '1.5g', imperial: '0.05 oz', common: '1/2 tsp' },
      { name: 'Kashmiri red chili powder', prep: 'for gentle heat', amount: '1 tbsp', metric: '8g', imperial: '0.3 oz', common: '1 tbsp' },
      { name: 'Fresh mint leaves', prep: 'roughly torn', amount: '1/2 cup', metric: '20g', imperial: '0.7 oz', common: '1/2 cup' },
      { name: 'Fresh cilantro leaves', prep: 'chopped', amount: '1/2 cup', metric: '20g', imperial: '0.7 oz', common: '1/2 cup' },
      { name: 'Coarse sea salt for boiling rice', prep: 'for pasta-like water', amount: '2 tbsp', metric: '30g', imperial: '1 oz', common: '2 tbsp' },
      { name: 'Atta dough rope (flour + water)', prep: 'for sealing lid', amount: '100g', metric: '100g', imperial: '3.5 oz', common: 'handful' }
    ],
    optionalIngredients: [
      { name: 'Meetha ittar (edible Mughlai perfume)', prep: 'traditional royal touch', amount: '2 drops', metric: '2 drops', imperial: '2 drops', common: '2 drops', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'BRAISE THE AROMATIC YAKHNI MEAT BASE',
        whatYouNeed: ['800g meat', '3 tbsp ghee', '4 cracked cardamoms', '3 cloves', '1 cinnamon stick', '2.5 tbsp ginger-garlic paste', '150g whisked yogurt', 'half the birista (fried onions)', '1 tbsp chili powder', '1/2 tsp mace-nutmeg', '1.5 tsp salt', '200ml water'],
        description: 'Heat 3 tbsp ghee in your handi over medium heat. Add cardamoms, cloves, and cinnamon; sizzle for 30 seconds. Add meat pieces and sear for 6–8 minutes until lightly browned. Stir in ginger-garlic paste for 2 minutes. Lower heat, add whisked yogurt, half the fried onions, chili powder, mace-nutmeg, and salt. Cook 5 minutes until oil separates. Add 200ml water, cover, and simmer for 30 minutes (mutton) or 15 minutes (chicken) until meat is 80% tender and sitting in a thick, flavorful gravy.',
        howToDoIt: 'Awadhi style cooks the meat in its gravy first (Pakki Yakhni method), ensuring the meat is thoroughly tender and coated in rich stock before the rice is layered.',
        heat: 'Medium then Low Heat',
        heatDescription: 'Gentle braising under lid.',
        duration: 35,
        visualCues: 'Meat is tender and browned; rich mahogany-red gravy coats the bottom of the pot with glistening ghee on top.',
        hear: 'Steady, quiet bubbling.',
        smell: 'Intoxicating royal Mughlai aroma of browned onions, mace, and meat.',
        textureCheck: 'Meat is 80% tender; gravy is thick like heavy sauce.',
        whatShouldThisLookLike: 'Tender meat pieces in a rich, concentrated, spiced gravy.',
        tip: 'Ensure there is about 150ml of liquid gravy in the base; this liquid is essential for generating steam to finish cooking the rice during dum.',
        commonMistake: 'Drying out the gravy completely — without liquid at the bottom, the bottom layer will scorch.',
        moveOnWhen: 'Meat is 80% tender with rich gravy remaining at the bottom.',
        quickInstructions: 'Sear meat in ghee with whole spices, ginger-garlic; add yogurt, birista, spices, water; braise until 80% tender.'
      },
      {
        step: 2,
        title: 'PAR-BOIL BASMATI RICE TO 70% (THE CRUCIAL STAGE)',
        whatYouNeed: ['500g soaked Basmati rice', '3 liters water in large pot', '2 tbsp coarse salt', '4 cracked cardamoms', '3 cloves', '1 cinnamon stick', '1 tsp shahi jeera', '1 tbsp oil', 'Spider skimmer'],
        description: 'Bring 3 liters of water to a rolling, violent boil with salt, whole spices, and 1 tbsp oil (water should taste as salty as the sea). Add the soaked, drained rice. Cook at a rapid rolling boil for exactly 6 to 7 minutes. Test a grain: it should have lengthened significantly, bend easily without snapping, but when broken with your fingernail, you should still see a firm, chalky white core inside (70% cooked). Immediately turn off heat.',
        howToDoIt: 'Cooking rice in massive water volume allows the grains to float freely without rubbing, resulting in long, unbroken needles. Par-cooking to 70% ensures the rice absorbs the remaining 30% of moisture from the fragrant meat steam during the sealed dum stage without turning mushy.',
        heat: 'High Rolling Boil',
        heatDescription: 'Vigorous, roaring boil.',
        duration: 7,
        visualCues: 'Rice grains double in length, swimming actively in the boiling water.',
        hear: 'Roaring, bubbling water.',
        smell: 'Fragrant sweet Basmati steam and whole spices.',
        textureCheck: 'Grain bends easily, but has a slight firm raw grain in the center.',
        whatShouldThisLookLike: 'Long, elegant, semi-cooked white rice needles.',
        tip: 'Have your skimmer and handi ready beside the boiling pot; 30 seconds can mean the difference between perfect biryani and mush.',
        commonMistake: 'Over-boiling the rice past 80% — the biryani will turn into a mushy rice casserole.',
        moveOnWhen: 'Rice is exactly 70% cooked (approx 6-7 minutes).',
        quickInstructions: 'Boil soaked rice in heavily salted water with whole spices for 6-7 mins until 70% cooked (firm center).'
      },
      {
        step: 3,
        title: 'ROYAL LAYERING & DOUGH SEALING',
        whatYouNeed: ['Handi with warm meat and gravy', 'Par-cooked hot rice', 'Spider skimmer', 'Remaining birista', '1/2 cup mint', '1/2 cup cilantro', 'Saffron-kewra milk', '2 tbsp melted ghee', 'Atta dough rope', 'Handi lid'],
        description: 'Using the spider skimmer, lift hot rice out of the boiling water, shake gently, and spread evenly over the meat base in the handi. Scatter the remaining fried onions (birista), chopped mint, and cilantro over the rice. Drizzle the golden saffron-kewra milk in ribbons across the top, followed by 2 tbsp melted ghee. Roll your prepared atta dough into a long snake rope and press it all along the upper rim of the handi. Press the lid firmly onto the dough to create an airtight seal.',
        howToDoIt: 'The dough seal traps 100% of the internal steam and aromatic volatiles (kewra, saffron, meat stock), forcing them to circulate through every grain of rice under slight pressure.',
        heat: 'Off',
        heatDescription: 'Assembly station.',
        duration: 8,
        visualCues: 'Snow-white rice draped with fried onions, emerald mint, and brilliant saffron-yellow ribbons; lid sealed with dough.',
        hear: 'None',
        smell: 'Heavenly combination of sweet saffron, kewra florals, and rich fried onions.',
        textureCheck: 'Fluffy layered rice resting over meat.',
        whatShouldThisLookLike: 'Tightly sealed handi with dough collar clamped around the lid.',
        tip: 'Work quickly while the rice is steaming hot so heat is trapped inside immediately.',
        commonMistake: 'Leaving gaps in the dough seal — steam will escape and rice will dry out.',
        moveOnWhen: 'Lid is completely sealed with dough with zero steam gaps.',
        quickInstructions: 'Layer hot rice over meat; top with birista, mint, cilantro, saffron milk, ghee. Seal lid with dough rope.'
      },
      {
        step: 4,
        title: 'THE DUM COOKING (STEAM INFUSION)',
        whatYouNeed: ['Sealed handi', 'Heavy cast iron tawa (diffuser)', 'Stove burner'],
        description: 'Place the sealed handi directly on high heat for 3 minutes until you hear the liquid sizzling inside and the dough seal begins to firm. Place a heavy cast iron tawa on the burner, and set the handi on top of the tawa. Reduce heat to low. Cook on "dum" for 25 minutes undisturbed. Turn off the heat and let the handi rest unopened for 10 minutes.',
        howToDoIt: 'The cast iron tawa acts as a thermal buffer, shielding the bottom layer of meat from direct flame scorching while gently radiating heat to vaporize the stock into fragrant dum steam.',
        heat: 'High for 3 mins, then Low (on tawa diffuser) for 25 mins, then Off',
        heatDescription: 'Indirect, gentle bottom heat.',
        duration: 38,
        visualCues: 'The raw dough seal bakes hard and dry; a wisp of fragrant steam may hiss through micro-crevices.',
        hear: 'Gentle, muffled ticking inside the pot.',
        smell: 'The intoxicating, regal fragrance of Lucknowi biryani permeating the entire house.',
        textureCheck: 'Dough seal feels baked hard like a cracker.',
        whatShouldThisLookLike: 'Sealed handi resting with baked dough seal.',
        tip: 'Resist the temptation to open the pot! The 10-minute rest off heat allows the rice starches to firm and flavors to settle.',
        commonMistake: 'Placing handi directly on flame for 25 minutes without a tawa diffuser — the bottom meat will burn black.',
        moveOnWhen: 'Dum cooked for 25 minutes and rested 10 minutes off heat.',
        quickInstructions: 'High heat 3 mins; place on heavy tawa diffuser on low heat for 25 mins. Rest unopened 10 mins.'
      },
      {
        step: 5,
        title: 'OPENING THE DUM & THE ROYAL CUT',
        whatYouNeed: ['Resting handi', 'Sharp knife', 'Flat biryani paddle or wide slotted spatula'],
        description: 'Using a sharp knife, carefully slice through the baked dough seal around the rim. Lift the lid. Inhale the royal aroma! Using a flat spatula, gently "cut" into the biryani from the outer edge down to the bottom, lifting from the bottom to bring meat, spiced rice, and white rice up together in one gentle motion. Do not stir or churn.',
        howToDoIt: 'Cutting from the edge preserves the individual long rice grains intact and maintains the iconic multi-colored mosaic appearance of authentic biryani.',
        heat: 'Off',
        heatDescription: 'Unsealing.',
        duration: 3,
        visualCues: 'A burst of perfumed steam rushes out; rice shows gorgeous white, yellow, and amber colors.',
        hear: 'Hiss of released steam.',
        smell: 'Pure culinary majesty: saffron, rose, mace, cardamom, and roasted meat.',
        textureCheck: 'Every single grain of rice is separate, long, fluffy, and tender; meat falls off the bone.',
        whatShouldThisLookLike: 'Regal Awadhi Dum Biryani with glistening multicolored grains and tender meat.',
        tip: 'Never mix biryani with a circular stirring motion like a stew — you will snap the long rice grains into broken mush.',
        commonMistake: 'Vigorously churning the pot like fried rice, destroying the distinct color layers.',
        moveOnWhen: 'Biryani is gently cut and served onto platters.',
        quickInstructions: 'Cut dough seal, lift lid; gently cut from edge with a flat paddle to mix white and spiced rice.'
      }
    ],
    commonMistakes: [
      { mistake: 'Bottom layer was burnt.', remedy: 'You did not use a heavy cast-iron tawa under the handi or left the heat too high. Always use an indirect heat diffuser.' },
      { mistake: 'Rice was sticky and broken.', remedy: 'Rice was boiled past 70% or churned vigorously with a spoon. Only par-boil to 70% and fluff gently with a flat spatula.' }
    ],
    troubleshooting: [
      {
        problem: 'Rice feels slightly dry or undercooked on the top layer',
        whatHappened: 'Not enough steam reached the top grains.',
        whyItHappened: 'The dough seal had a leak or the rice was boiled for less than 6 minutes.',
        whatToDoNow: 'Sprinkle 3 tablespoons of warm milk or water over the top, reseal with foil, and place back on the low tawa for 6 minutes.',
        howToPrevent: 'Ensure dough seal is completely airtight and rice is boiled to a full 70% before layering.'
      }
    ],
    substitutions: [
      { original: 'Mutton/Lamb', substitute: 'Chicken pieces or Paneer/mixed vegetables (Kathal/jackfruit)', notes: 'For vegetable/chicken biryani, reduce dum cooking time to 18 minutes.' },
      { original: 'Kewra water', substitute: 'Rose water', notes: 'Provides an exquisite floral aroma.' }
    ],
    safetyNotes: [
      'Take extreme care when cutting the dough seal; a massive burst of scalding 100°C steam will escape instantly.'
    ],
    servingGuide: {
      restingTime: '10 minutes resting before breaking the seal.',
      garnishing: 'Garnish with extra crispy fried brown onions, mint sprigs, and a silver leaf (vark) if celebrating.',
      plating: 'Serve on a wide oval royal platter, making sure each portion has a mix of white grains, saffron grains, and tender meat.',
      temperature: 'Piping hot.',
      accompaniments: 'Burani Raita (garlicky spiced yogurt), Mirchi ka Salan (peanut-sesame chili gravy), and fresh cucumber salad.'
    }
  }
];
