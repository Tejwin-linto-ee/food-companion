// South Indian culinary recipes Part 1
module.exports = [
  // 15. MASALA DOSA
  {
    id: 'masala-dosa',
    name: 'Crispy Mysore Masala Dosa',
    cuisine: 'Indian',
    region: 'South Indian (Karnataka / Tamil Nadu)',
    servings: 4,
    prepTime: 30,
    cookTime: 25,
    difficulty: 'Medium',
    overview: {
      summary: 'Iconic South Indian culinary masterpiece: an ultra-thin, golden, paper-crisp fermented rice and urad dal crepe, spread with a fiery red chili-garlic chutney, stuffed with a fragrant spiced turmeric potato masala, and griddled with pure desi butter or ghee.',
      appearance: 'Magnificent golden-amber rolled cylinder or folded triangle, blistered with fine micro-craters, brushed with melting butter, served with coconut chutney and hot sambar.',
      texture: 'Superlatively crisp and crunchy on the outer shell, tender and soft on the interior, encasing warm, fluffy potato masala.',
      flavor: 'Tangy fermented sourdough notes balanced by nutty roasted lentils, spicy garlic chutney, sweet butter, and mustard-curry leaf warmth.',
      restingTimeMinutes: 1
    },
    equipment: [
      { name: 'Heavy Cast Iron Dosa Tawa (11–12 inch)', purpose: 'Holds substantial thermal mass; cast iron produces a shattering, even golden crust that non-stick pans cannot replicate.' },
      { name: 'Flat-bottomed metal ladle (katori/vati)', purpose: 'For swirling batter outward from the center in smooth concentric circles in under 4 seconds.' },
      { name: 'Thin flexible steel spatula (dosa thiruppi)', purpose: 'Slides cleanly beneath the wafer-thin crepe without tearing.' },
      { name: 'Half a raw onion cut horizontally or potato on a fork', purpose: 'For seasoning and lightly oiling the cast iron tawa between dosas.' }
    ],
    beforeYouStart: [
      { task: 'Soak 300g idli/sona masoori rice, 100g whole white urad dal, 2 tbsp chana dal, and 1/2 tsp fenugreek seeds in water for 6 hours.', durationMinutes: 360 },
      { task: 'Grind dal to a fluffy cloud-like foam, grind rice to a fine semolina texture, combine with 1.5 tsp salt, and ferment in a warm spot (30°C) for 12–14 hours until doubled.', durationMinutes: 720 },
      { task: 'Boil 400g potatoes until tender, peel, and crush coarsely into chunky pieces.', durationMinutes: 25 }
    ],
    ingredientPrepGuide: [
      { item: 'Batter Consistency', technique: 'The fermented batter should be aerated, bubbly, and have the flowing consistency of heavy pancake batter. Add water a tablespoon at a time if too thick; too thick = thick rubbery pancake; too thin = tears and sticks.' },
      { item: 'Cast Iron Tawa Temperature', technique: 'The pan must be hot but not scorching. Before pouring, splash a few drops of water on the tawa — it should sizzle and evaporate within 2 seconds. Wipe with an oiled onion half to create an invisible non-stick seasoning film.' }
    ],
    essentialIngredients: [
      { name: 'Idli rice or Parboiled rice', prep: 'soaked 6 hours', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '1.5 cups' },
      { name: 'Whole skinless urad dal (black gram)', prep: 'soaked 6 hours', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '1/2 cup' },
      { name: 'Chana dal (split Bengal gram)', prep: 'for deep golden color & crispness', amount: '2 tbsp', metric: '25g', imperial: '0.9 oz', common: '2 tbsp' },
      { name: 'Methi seeds (fenugreek seeds)', prep: 'for fermentation & aroma', amount: '1/2 tsp', metric: '2g', imperial: '0.07 oz', common: '1/2 tsp' },
      { name: 'Potatoes', prep: 'boiled, peeled, chunky crushed', amount: '400g', metric: '400g', imperial: '14 oz', common: '3 medium' },
      { name: 'Mustard seeds', prep: 'whole black', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Fresh curry leaves', prep: 'torn', amount: '15 leaves', metric: '2g', imperial: '0.07 oz', common: '2 sprigs' },
      { name: 'Green chilies', prep: 'finely minced', amount: '2 chilies', metric: '10g', imperial: '0.35 oz', common: '2 chilies' },
      { name: 'Ginger', prep: 'finely grated', amount: '1 tbsp', metric: '15g', imperial: '0.5 oz', common: '1 tbsp' },
      { name: 'Onions', prep: 'thinly sliced into half-moons', amount: '2 medium', metric: '180g', imperial: '6.3 oz', common: '1 cup' },
      { name: 'Turmeric powder', prep: 'for golden potato color', amount: '1/2 tsp', metric: '1.5g', imperial: '0.05 oz', common: '1/2 tsp' },
      { name: 'Desi Butter (benne) or Ghee', prep: 'for griddling each dosa', amount: '80g', metric: '80g', imperial: '2.8 oz', common: '5 tbsp' },
      { name: 'Fine sea salt', prep: 'divided (batter & potato)', amount: '2 tsp', metric: '12g', imperial: '0.4 oz', common: '2 tsp' }
    ],
    optionalIngredients: [
      { name: 'Red chili-garlic chutney (Mysore chutney)', prep: 'spread on inner surface', amount: '4 tbsp', metric: '60g', imperial: '2.1 oz', common: '4 tbsp', optional: true },
      { name: 'Freshly chopped cilantro', prep: 'for potato garnish', amount: '2 tbsp', metric: '10g', imperial: '0.35 oz', common: '2 tbsp', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'PREPARE SPICED POTATO MASALA (ALOO BHAJI)',
        whatYouNeed: ['1 tbsp oil', '1 tsp mustard seeds', '15 curry leaves', '2 sliced onions', '2 minced green chilies', '1 tbsp grated ginger', '400g crushed potatoes', '1/2 tsp turmeric', '1 tsp salt', '60ml water'],
        description: 'Heat 1 tbsp oil in a pan over medium heat. Crackle mustard seeds for 20 seconds. Add curry leaves, green chilies, and ginger; sizzle for 30 seconds. Add sliced onions and sauté for 4–5 minutes until translucent and soft (do not brown). Stir in turmeric powder and salt. Add crushed potatoes and 60ml water. Mix well, crushing slightly, and simmer for 3 minutes until moist, soft, and fragrant. Remove from heat.',
        howToDoIt: 'Adding a splash of water prevents the potatoes from drying out on the hot griddle and creates a luscious, spreadable texture inside the crisp dosa.',
        heat: 'Medium Heat',
        heatDescription: 'Gentle sizzle.',
        duration: 10,
        visualCues: 'Vibrant sunshine-yellow potato mash speckled with green chilies, soft onions, and dark mustard seeds.',
        hear: 'Soft bubbling as water incorporates.',
        smell: 'Fragrant mustard, curry leaves, ginger, and turmeric.',
        textureCheck: 'Soft, moist, and easily spreadable with a spoon.',
        whatShouldThisLookLike: 'Bright yellow, moist, chunky potato bhaji.',
        tip: 'Keep the potato masala warm until ready to assemble.',
        commonMistake: 'Browning the onions dark — South Indian potato masala needs sweet, soft, translucent onions.',
        moveOnWhen: 'Potato masala is soft, moist, and uniformly yellow.',
        quickInstructions: 'Sputter mustard seeds and curry leaves; sauté onions, chilies, ginger. Add potatoes, turmeric, water; simmer 3 mins.'
      },
      {
        step: 2,
        title: 'TAWA REGULATION & TEMPERATURE CHECK',
        whatYouNeed: ['Cast iron tawa on Medium-High heat', 'Small bowl of water', 'Cut onion half dipped in oil', 'Paper towel'],
        description: 'Place your seasoned cast iron tawa over medium-high heat for 3–4 minutes until hot. Flick a few drops of cold water onto the pan — they should sizzle loudly, dance across the surface in beads (the Leidenfrost effect), and vanish within 2 seconds. Wipe the surface dry with a paper towel, then briskly rub the tawa with the oiled cut onion half. Reduce heat to medium.',
        howToDoIt: 'Splashing water tempers the pan to the exact optimal temperature (approx 180°C). Rubbing with an onion lays down a microscopic sulfurous organic film that prevents the high-starch batter from sticking.',
        heat: 'Medium-High then Medium',
        heatDescription: 'Hot cast iron with steady gentle heat.',
        duration: 4,
        visualCues: 'Water beads dance and vanish; tawa shows a smooth, satin-matte sheen without pooling oil.',
        hear: 'Sharp, loud hiss when water droplets hit.',
        smell: 'Toasted onion aroma.',
        textureCheck: 'Dry, smooth, seasoned surface.',
        whatShouldThisLookLike: 'Clean, smoking-hot, uniformly seasoned cast iron tawa.',
        tip: 'Never pour batter onto a tawa with visible pooled oil — the batter will slide around like grease and fail to spread.',
        commonMistake: 'Skipping the water splash — on an overheated pan, the batter cooks instantly onto the ladle and clumps into a ball.',
        moveOnWhen: 'Tawa is wiped and at steady medium heat.',
        quickInstructions: 'Heat tawa; splash water to check temperature, wipe dry, rub with oiled onion half, set to medium.'
      },
      {
        step: 3,
        title: 'POUR & SPIRAL SPREAD IN ONE MOTION',
        whatYouNeed: ['Fermented dosa batter', 'Flat-bottomed metal ladle'],
        description: 'Scoop a generous ladleful of batter (approx 80ml). Pour it directly into the center of the warm tawa. Immediately place the flat base of the ladle in the center and, with light, continuous pressure, spiral outward in swift concentric circles towards the edge until you form a paper-thin, 25cm (10 inch) circle. This must be done within 3 to 4 seconds before the batter sets.',
        howToDoIt: 'Continuous circular motion uses centrifugal force to push wet batter outward into a paper-thin membrane while leaving fine circular ridges that crisp up darker.',
        heat: 'Medium Heat',
        heatDescription: 'Steady contact heat.',
        duration: 1,
        visualCues: 'Batter spreads into a wide translucent disc; hundreds of tiny steam holes (micro-craters) open across the surface.',
        hear: 'Quiet, soft sizzle.',
        smell: 'Tangy, fermenting rice-dal steam.',
        textureCheck: 'Paper-thin batter film adhering firmly to the pan.',
        whatShouldThisLookLike: 'Thin circular crepe with fine spiral grooves and open micro-perforations.',
        tip: 'Keep the ladle base flat against the batter and do not lift the ladle until you reach the outer rim.',
        commonMistake: 'Lifting and tapping the ladle while spreading, which tears the delicate batter sheet.',
        moveOnWhen: 'Batter is spread into an even 25cm circle.',
        quickInstructions: 'Pour 80ml batter in center; spiral outward with flat ladle in 3 seconds to a 25cm thin circle.'
      },
      {
        step: 4,
        title: 'GHEE APPLICATION & GOLDEN CRISPING',
        whatYouNeed: ['Thinly spread dosa on tawa', '1 tbsp butter or ghee', 'Optional 1 tbsp red Mysore chutney', 'Flat spatula'],
        description: 'Let the dosa cook untouched for 45 seconds until the top surface transitions from opaque wet white to dry translucent cream. Drizzle 1 tbsp melted butter or ghee around the perimeter and over the surface. If making Mysore style, spread 1 tbsp red garlic chutney thinly across the center with a spatula. Cook on medium heat for 2 minutes without flipping until the underside turns a deep, uniform golden-amber and the edges begin to curl and release naturally from the pan.',
        howToDoIt: 'The butter seeps into the microscopic steam pores, frying the underside against the hot iron into a glass-crisp crust without burning.',
        heat: 'Medium Heat',
        heatDescription: 'Steady frying in bubbling butter.',
        duration: 3,
        visualCues: 'Edges turn golden-brown and pull away from the pan; underside glows deep amber through the thin crepe.',
        hear: 'Crisp, lively crackling of butter frying.',
        smell: 'Intense roasted ghee and toasted lentil aroma.',
        textureCheck: 'Edges feel rigid, brittle, and paper-crisp.',
        whatShouldThisLookLike: 'Golden-brown crepe with edges curling off the tawa.',
        tip: 'A true Masala Dosa is NEVER flipped! It cooks 100% from the bottom, while steam cooks the thin top layer.',
        commonMistake: 'Flipping the dosa like a pancake — this makes the crisp side soggy and ruins the potato presentation.',
        moveOnWhen: 'Underside is deep golden-brown and edges are curled.',
        quickInstructions: 'Drizzle butter around edges and surface; cook untouched 2 mins until underside is deep golden and edges lift.'
      },
      {
        step: 5,
        title: 'STUFF, FOLD & SERVE',
        whatYouNeed: ['Crispy golden dosa on tawa', '3 tbsp warm potato masala', 'Dosa thiruppi (spatula)'],
        description: 'Spoon 3 tablespoons of warm potato masala in a line across the center of the dosa. Slide your thin steel spatula underneath the edges to ensure complete release. Fold one-third of the dosa over the potato filling, then fold the opposite third over to form a neat golden roll (or fold in half into a giant half-moon). Slide immediately off the tawa onto a serving platter.',
        howToDoIt: 'Folding while on the hot pan allows the brittle crust to bend along natural crease lines without shattering.',
        heat: 'Off',
        heatDescription: 'Plating.',
        duration: 1,
        visualCues: 'A golden-amber, cylindrical or triangular rolled dosa with crispy blistered skin.',
        hear: 'Crackling crunch as the spatula folds the crisp shell.',
        smell: 'Toasted butter, curry leaves, and spiced potato.',
        textureCheck: 'Shatteringly crisp shell encasing soft potato.',
        whatShouldThisLookLike: 'Restaurant-style Masala Dosa: long, golden, and wafer-crisp.',
        tip: 'Serve immediately! Masala dosa loses its crispness within 4–5 minutes as steam from the potatoes penetrates the crust.',
        commonMistake: 'Letting the dosa sit on a plate before serving — eat it straight off the griddle.',
        moveOnWhen: 'Dosa is folded and transferred to the serving plate.',
        quickInstructions: 'Place potato masala in center, fold into a crisp roll, and slide onto serving platter immediately.'
      }
    ],
    commonMistakes: [
      { mistake: 'Batter stuck to the tawa and tore.', remedy: 'The tawa was either too hot or had too much oil. Always splash water to cool down and wipe completely before spreading.' },
      { mistake: 'Dosa was soft and pale, not crispy.', remedy: 'Batter was under-fermented, lacked chana dal, or was cooked on too low heat. Add 2 tbsp chana dal to soaking grains for crisp golden color.' }
    ],
    troubleshooting: [
      {
        problem: 'Batter did not ferment and double overnight',
        whatHappened: 'Ambient room temperature was too cold (below 25°C).',
        whyItHappened: 'Lactic acid bacteria and wild yeasts need 28–32°C to multiply.',
        whatToDoNow: 'Place the batter bowl inside your oven with the oven light turned on (creates a steady 30°C environment) for 4–6 hours, or add 1/2 tsp sugar and 1/4 tsp baking soda.',
        howToPrevent: 'Always ferment batter in the warmest spot in your kitchen (near stove or inside oven with light).'
      }
    ],
    substitutions: [
      { original: 'Desi Butter (benne)', substitute: 'Desi ghee, cold-pressed sesame oil, or coconut oil', notes: 'Sesame oil (gingelly) is traditional in Tamil Nadu and gives a distinct nutty aroma.' }
    ],
    safetyNotes: [
      'Cast iron tawa stays searingly hot; keep fingers clear when spreading with the ladle.'
    ],
    servingGuide: {
      restingTime: 'Zero — serve directly from griddle.',
      garnishing: 'Top with a small knob of melting butter.',
      plating: 'Serve on a fresh green banana leaf or wide steel thali.',
      temperature: 'Piping hot and shatteringly crisp.',
      accompaniments: 'Fresh coconut chutney, spicy red tomato-onion chutney, and hot vegetable sambar.'
    }
  },

  // 16. IDLI
  {
    id: 'idli',
    name: 'Kanchipuram & Classic Steamed Idli',
    cuisine: 'Indian',
    region: 'South Indian (Tamil Nadu / Karnataka)',
    servings: 4,
    prepTime: 20,
    cookTime: 12,
    difficulty: 'Medium',
    overview: {
      summary: 'The ultimate South Indian breakfast: pillowy-soft, cloud-like, naturally fermented steamed cakes made from parboiled rice and whole white urad dal. Naturally aerated, oil-free, highly digestible, and impossibly tender.',
      appearance: 'Pristine, snow-white, round disc-shaped steamed cakes with a delicate porous crumb and a silky smooth surface.',
      texture: 'Feather-light, spongy, and cloud-soft; compresses gently and bounces back like a sponge.',
      flavor: 'Delicate, mildly tangy from natural wild fermentation, with sweet creamy lentil undertones.',
      restingTimeMinutes: 3
    },
    equipment: [
      { name: 'Idli Steamer / Cooker with stacked tiered plates', purpose: 'Holds idlis above boiling water to steam uniformly without water dripping on cakes.' },
      { name: 'Wet grinder or high-powered blender', purpose: 'Grinds urad dal into a voluminous, aerated, foamy mousse.' },
      { name: 'Round-edged spoon', purpose: 'Dipped in water to effortlessly scoop hot idlis cleanly out of moulds.' }
    ],
    beforeYouStart: [
      { task: 'Soak 300g idli rice (parboiled) and 100g whole urad dal (gota) in separate bowls for 5–6 hours with 1/2 tsp methi seeds.', durationMinutes: 360 },
      { task: 'Grind dal for 20 minutes with ice water into a light, fluffy foam that floats in water; grind rice coarsely; mix with salt and ferment 12 hours.', durationMinutes: 720 },
      { task: 'Bring 400ml water to a boil in the bottom chamber of the idli steamer.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'Urad Dal Float Test', technique: 'Drop a small teaspoon of ground urad dal batter into a glass of water. If it floats on top like a cloud, the batter has sufficient incorporated air for feather-light idlis. If it sinks, beat with your hand for another 5 minutes.' },
      { item: 'Steaming Time', technique: 'Steam on medium-high heat for exactly 10–12 minutes. Over-steaming dries out the moisture, making idlis dense and rubbery.' }
    ],
    essentialIngredients: [
      { name: 'Idli Rice (parboiled rice)', prep: 'soaked 6 hours', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '1.5 cups' },
      { name: 'Whole white urad dal (gota)', prep: 'soaked 6 hours with methi', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '1/2 cup' },
      { name: 'Methi seeds (fenugreek)', prep: 'soaked with dal', amount: '1/2 tsp', metric: '2g', imperial: '0.07 oz', common: '1/2 tsp' },
      { name: 'Chilled ice water', prep: 'for grinding dal (prevents heat)', amount: '150ml', metric: '150ml', imperial: '5 fl oz', common: '2/3 cup' },
      { name: 'Non-iodized rock salt (crystal salt)', prep: 'crushed', amount: '1.5 tsp', metric: '9g', imperial: '0.3 oz', common: '1.5 tsp' },
      { name: 'Sesame oil (gingelly oil)', prep: 'for greasing idli moulds', amount: '1 tbsp', metric: '15ml', imperial: '0.5 fl oz', common: '1 tbsp' }
    ],
    optionalIngredients: [
      { name: 'Curry leaves & mustard seeds', prep: 'lightly tempered for Kanchipuram idli variation', amount: '1 tbsp', metric: '10g', imperial: '0.35 oz', common: '1 tbsp', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'WHIP & AERATION CHECK OF BATTER',
        whatYouNeed: ['Fermented idli batter', 'Clean hand', 'Glass of water'],
        description: 'Check your fermented batter: it should be risen, aerated, and smell pleasantly tangy. Gently fold the batter using a ladle or clean hand 2–3 times only. Do not vigorously beat or stir down the volume, or you will deflate the precious carbon dioxide bubbles. Drop a small teaspoon into a glass of water — it should float easily.',
        howToDoIt: 'Wild lactic fermentation creates microscopic CO2 pockets trapped within the urad dal protein mesh. Gentle handling preserves these air pockets, which expand during steaming into a cloud-soft crumb.',
        heat: 'Off',
        heatDescription: 'Preparation.',
        duration: 3,
        visualCues: 'Spongy, foamy, bubbly batter that rises to double its original volume.',
        hear: 'Soft crackle of bursting micro-bubbles.',
        smell: 'Fresh, pleasant, sourdough-like dairy tang.',
        textureCheck: 'Fluffy, light, aerated batter.',
        whatShouldThisLookLike: 'Cloud-like bubbly batter floating on a spoon.',
        tip: 'Never use an electric mixer on fermented batter; mix gently by hand in one direction.',
        commonMistake: 'Vigorously whipping fermented batter with a whisk, destroying all air pockets.',
        moveOnWhen: 'Batter is gently mixed and passes the water float test.',
        quickInstructions: 'Gently fold fermented bubbly batter 2-3 times; verify a teaspoon floats in water.'
      },
      {
        step: 2,
        title: 'GREASE MOULDS & FILL',
        whatYouNeed: ['Idli plates', '1 tbsp sesame oil or ghee', 'Pastry brush or fingers', 'Aerate batter'],
        description: 'Lightly grease the depressions of your idli plates with sesame oil or ghee. Spoon batter into each cavity, filling to about 80% capacity to leave room for expansion during steaming.',
        howToDoIt: 'Sesame oil imparts a subtle nutty aroma and prevents the delicate steamed crumb from sticking to the metal plates.',
        heat: 'Off',
        heatDescription: 'Loading plates.',
        duration: 3,
        visualCues: 'Smooth batter mounds filling 80% of each mould cavity.',
        hear: 'None',
        smell: 'Nutty sesame oil and fermented batter.',
        textureCheck: 'Thick, aerated batter holding dome shape.',
        whatShouldThisLookLike: 'Neatly filled idli cavities stacked on the tiered central rod.',
        tip: 'When stacking the tiered plates, offset the steam holes so steam from the lower tier circulates around the upper moulds without dripping water onto the idlis.',
        commonMistake: 'Overfilling the moulds to the brim — idlis will swell and merge into one giant misshapen block.',
        moveOnWhen: 'All idli cavities are filled to 80% capacity.',
        quickInstructions: 'Grease idli plates with sesame oil, fill cavities to 80% capacity, and stack on the stand.'
      },
      {
        step: 3,
        title: 'STEAM TO CLOUD PERFECTION',
        whatYouNeed: ['Filled idli stand', 'Steamer with 400ml boiling water', 'Tight lid'],
        description: 'Lower the idli stand into the steamer over rapidly boiling water. Cover tightly with the lid. Steam on medium-high heat for exactly 10 to 12 minutes. Do not open the lid during steaming. Turn off heat and let sit unopened for 3 minutes.',
        howToDoIt: 'Continuous high-humidity steam gelatinizes the rice starches while cooking the urad dal proteins, setting the airy bubble structure into a permanent spongy matrix.',
        heat: 'Medium-High Steam',
        heatDescription: 'Steady rolling steam escaping from the vent.',
        duration: 15,
        visualCues: 'Vigorous white steam whistling steadily from the lid vent.',
        hear: 'Steady, rhythmic boiling in the base.',
        smell: 'Warm, sweet, comforting aroma of steamed rice and dal.',
        textureCheck: 'Firm, puffed, spongy cakes.',
        whatShouldThisLookLike: 'Puffed snow-white domes inside the steamer.',
        tip: 'To test doneness, insert a wet toothpick or knife tip into the center of an idli — it should come out completely clean with no wet batter.',
        commonMistake: 'Steaming for 20+ minutes — over-steaming expels moisture, making idlis hard and rubbery.',
        moveOnWhen: 'Steamed for 10-12 minutes and rested for 3 minutes.',
        quickInstructions: 'Place idli stand in steamer, cover tight, steam 10-12 mins on medium-high. Rest 3 mins off heat.'
      },
      {
        step: 4,
        title: 'WATER SPRITZ & SCOOP',
        whatYouNeed: ['Steamed idli plates', 'Small spray bottle or water bowl', 'Round-edged spoon'],
        description: 'Remove the idli plates from the cooker. Let stand for 2 minutes to cool slightly. Dip a spoon into a bowl of cold water (or lightly sprinkle cold water on the edges of the idlis). Slide the back of the wet spoon smoothly around the edge and underneath each idli. Pop each idli cleanly out onto a serving tray.',
        howToDoIt: 'A cold water dip on the spoon breaks the surface tension between the hot starches and the metal, allowing the idli to slide out with an intact, mirror-smooth base.',
        heat: 'Off',
        heatDescription: 'Demoulding.',
        duration: 3,
        visualCues: 'Snow-white idlis release cleanly without leaving a trace of batter stuck to the metal moulds.',
        hear: 'Soft release sound.',
        smell: 'Pure, wholesome steamed rice aroma.',
        textureCheck: 'Cloud-soft, moist, bouncy sponge.',
        whatShouldThisLookLike: 'Pristine, gleaming white, fluffy discs.',
        tip: 'Never try to scoop idlis the second they leave the steamer; they are too delicate when piping hot and will tear.',
        commonMistake: 'Using a dry spoon — the hot idli will stick and rip in half.',
        moveOnWhen: 'All idlis are demoulded cleanly onto plates.',
        quickInstructions: 'Cool 2 mins, dip spoon in cold water, glide around edges and scoop out cleanly.'
      }
    ],
    commonMistakes: [
      { mistake: 'Idlis turned hard and dense like hockey pucks.', remedy: 'The urad dal was not aerated enough during grinding, the batter did not ferment properly, or salt was added with iodine (which kills wild yeasts).' },
      { mistake: 'Idlis are yellow or smell overly sour.', remedy: 'Batter was over-fermented (left too long in a hot spot). Discard or convert into sour uttapam.' }
    ],
    troubleshooting: [
      {
        problem: 'Idlis are sticky and gummy in the center',
        whatHappened: 'Under-steamed or water ratio was too high.',
        whyItHappened: 'Removed from the steamer too early or too much water was added during grinding.',
        whatToDoNow: 'Return the stand to the steamer and steam for an extra 4 minutes.',
        howToPrevent: 'Always test with a wet toothpick before removing from the pot.'
      }
    ],
    substitutions: [
      { original: 'Idli Rice', substitute: 'Parboiled ponni rice or Sona Masoori', notes: 'Parboiled rice is essential for fluffy texture; raw basmati produces dense idlis.' },
      { original: 'Sesame oil', substitute: 'Ghee or neutral oil', notes: 'Ghee provides a rich buttery finish.' }
    ],
    safetyNotes: [
      'Hot steam from the cooker can cause severe burns; open lid tilting away from your face.'
    ],
    servingGuide: {
      restingTime: '2 minutes before demoulding.',
      garnishing: 'Drizzle with a spoonful of warm melted ghee or South Indian idli podi (gunpowder) mixed with gingelly oil.',
      plating: 'Stack 3–4 idlis on a fresh banana leaf or plate.',
      temperature: 'Steaming hot.',
      accompaniments: 'Classic coconut chutney, spicy tomato-onion chutney, and piping hot aromatic drumstick sambar.'
    }
  }
];
