// North Indian culinary recipes Part 3
module.exports = [
  // 8. PALAK PANEER
  {
    id: 'palak-paneer',
    name: 'Palak Paneer (Spinach Cottage Cheese Curry)',
    cuisine: 'Indian',
    region: 'North Indian (Punjab)',
    servings: 4,
    prepTime: 20,
    cookTime: 25,
    difficulty: 'Easy',
    overview: {
      summary: 'Fresh spinach leaves blanched and shocked in an ice bath to preserve their vivid emerald hue, pureed with green chilies, then simmered with browned onions, ginger, garlic, and cumin. Folded with golden pan-seared malai paneer cubes, a splash of cream, and fragrant kasuri methi.',
      appearance: 'Striking, vibrant forest-green velvety gravy studded with golden-white seared paneer cubes, drizzled with cream and topped with fried garlic slivers.',
      texture: 'Silky, spoon-coating spinach sauce with pillow-soft, tender paneer cubes.',
      flavor: 'Fresh, earthy, gently spiced with warming cumin, pungent garlic, and sweet dairy creaminess.',
      restingTimeMinutes: 3
    },
    equipment: [
      { name: 'Large pot for blanching', purpose: 'Rapidly boils spinach in 2 minutes to cook without destroying green chlorophyll pigment.' },
      { name: 'Large bowl with ice water (ice bath)', purpose: 'Instantly arrests cooking to lock in radiant emerald color.' },
      { name: 'Blender or food processor', purpose: 'Purees blanched spinach into a coarse-smooth puree.' },
      { name: 'Heavy skillet or kadhai', purpose: 'For sautéing aromatics and simmering the gravy.' }
    ],
    beforeYouStart: [
      { task: 'Prepare a large bowl with cold water and 15 ice cubes.', durationMinutes: 3 },
      { task: 'Trim thick fibrous stems from 500g fresh spinach, wash leaves in cold water 3 times to remove all grit.', durationMinutes: 8 },
      { task: 'Cut 300g fresh paneer into 2.5cm (1 inch) cubes.', durationMinutes: 4 }
    ],
    ingredientPrepGuide: [
      { item: 'Spinach Blanching', technique: 'Drop washed spinach leaves into rapidly boiling salted water with 1/4 tsp baking soda for exactly 2 minutes. Plunge immediately into ice water. Squeeze out excess liquid gently. This keeps the color brilliant green instead of dull army green.' },
      { item: 'Paneer Searing', technique: 'Lightly pan-fry paneer cubes in ghee for 90 seconds until pale golden on edges, then soak in warm lightly salted water for 10 minutes to keep them exceptionally soft.' }
    ],
    essentialIngredients: [
      { name: 'Fresh spinach leaves (palak)', prep: 'washed, thick stems removed', amount: '500g', metric: '500g', imperial: '1.1 lbs', common: '2 large bunches' },
      { name: 'Fresh Malai Paneer', prep: 'cut into 2.5cm cubes', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '2.5 cups' },
      { name: 'Ghee or butter', prep: 'divided', amount: '3 tbsp', metric: '45g', imperial: '1.6 oz', common: '3 tbsp' },
      { name: 'Onion', prep: 'finely minced', amount: '1 large', metric: '150g', imperial: '5.3 oz', common: '3/4 cup' },
      { name: 'Tomatoes', prep: 'finely chopped', amount: '2 medium', metric: '180g', imperial: '6.3 oz', common: '3/4 cup' },
      { name: 'Ginger-garlic paste', prep: 'freshly pounded', amount: '1.5 tbsp', metric: '22g', imperial: '0.8 oz', common: '1.5 tbsp' },
      { name: 'Green chilies', prep: 'blanched with spinach', amount: '2 chilies', metric: '10g', imperial: '0.35 oz', common: '2 chilies' },
      { name: 'Cumin seeds (jeera)', prep: 'whole', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Garam masala powder', prep: 'fragrant blend', amount: '1/2 tsp', metric: '1.5g', imperial: '0.05 oz', common: '1/2 tsp' },
      { name: 'Kasuri methi', prep: 'crushed to powder', amount: '1 tsp', metric: '1g', imperial: '0.03 oz', common: '1 tsp' },
      { name: 'Heavy cream', prep: 'for finishing', amount: '3 tbsp', metric: '45ml', imperial: '1.5 fl oz', common: '3 tbsp' },
      { name: 'Fine sea salt', prep: 'to taste', amount: '1 tsp', metric: '6g', imperial: '0.2 oz', common: '1 tsp' },
      { name: 'Baking soda', prep: 'added to blanching water', amount: '1/4 tsp', metric: '1g', imperial: '0.03 oz', common: '1/4 tsp' }
    ],
    optionalIngredients: [
      { name: 'Garlic cloves', prep: 'sliced thin for garlic tadka garnish', amount: '4 cloves', metric: '12g', imperial: '0.4 oz', common: '4 cloves', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'BLANCH & ICE SHOCK SPINACH',
        whatYouNeed: ['500g spinach leaves', '2 green chilies', '1/4 tsp baking soda', 'Pot of boiling water', 'Large ice bath'],
        description: 'Bring 2 liters of water to a rolling boil with 1/4 tsp baking soda. Add cleaned spinach leaves and green chilies. Push down into water and boil for exactly 2 minutes. Using tongs, immediately transfer spinach into the ice water bath. Let sit for 2 minutes, then drain.',
        howToDoIt: 'Baking soda maintains alkaline pH, preventing acid from turning chlorophyll into dull brownish pheophytin. Ice shock immediately stops residual cooking.',
        heat: 'High Boil',
        heatDescription: 'Rolling boil.',
        duration: 5,
        visualCues: 'Spinach wilts into an intense, glowing emerald-green.',
        hear: 'Hissing as spinach enters boiling water.',
        smell: 'Clean, sweet leafy green aroma.',
        textureCheck: 'Wilted but tender, not slimy.',
        whatShouldThisLookLike: 'Vibrant fluorescent-green spinach floating in ice cubes.',
        tip: 'Never boil spinach for more than 2 minutes, or it will lose its vibrant color.',
        commonMistake: 'Covering the pot with a lid while boiling spinach, which traps volatile plant acids that dull the green color.',
        moveOnWhen: 'Spinach is ice-cold and drained.',
        quickInstructions: 'Boil spinach with baking soda for 2 mins; plunge into ice water 2 mins; drain.'
      },
      {
        step: 2,
        title: 'PUREE TO COARSE SILK',
        whatYouNeed: ['Blanched spinach and chilies', 'Blender'],
        description: 'Place cooled spinach and chilies in a blender. Pulse 4–5 times into a smooth, thick, vibrant green puree. Avoid over-blending into a watery juice; keep slight texture.',
        howToDoIt: 'Pulsing rather than continuous high-speed blending preserves microscopic body, preventing the sauce from separating in the pan.',
        heat: 'Off',
        heatDescription: 'Blender step.',
        duration: 2,
        visualCues: 'Intense emerald-green thick puree.',
        hear: 'Pulsing blender blades.',
        smell: 'Fresh, mildly pungent green pepper aroma.',
        textureCheck: 'Thick, creamy puree with slight body.',
        whatShouldThisLookLike: 'Vibrant green puree with the consistency of pancake batter.',
        tip: 'Do not add extra water while blending; spinach holds enough internal moisture.',
        commonMistake: 'Overheating the puree by blending too long at high speed, which oxidizes the green pigment.',
        moveOnWhen: 'Puree is smooth and uniformly green.',
        quickInstructions: 'Pulse spinach and chilies in blender into a thick vibrant green puree.'
      },
      {
        step: 3,
        title: 'BUILD AROMATIC BASE & SIMMER',
        whatYouNeed: ['2 tbsp ghee', '1 tsp cumin seeds', '150g minced onion', '1.5 tbsp ginger-garlic paste', '180g chopped tomatoes', '1 tsp salt', '1/2 tsp garam masala'],
        description: 'Heat 2 tbsp ghee in a kadhai over medium heat. Add cumin seeds and let crackle for 20 seconds. Add minced onions and sauté for 6–7 minutes until light golden. Add ginger-garlic paste and cook 1 minute. Add chopped tomatoes and salt. Cook for 5–6 minutes until tomatoes soften into a jammy base. Sprinkle garam masala.',
        howToDoIt: 'Lightly caramelized onions and sweet tomatoes create the savory flavor background that supports the mineral taste of spinach.',
        heat: 'Medium Heat',
        heatDescription: 'Steady sizzle.',
        duration: 12,
        visualCues: 'Onions turn soft golden; tomatoes break down into a glossy, thick paste with ghee releasing.',
        hear: 'Rhythmic sizzling.',
        smell: 'Cumin, fried garlic, and sweet onion aroma.',
        textureCheck: 'Thick, jammy onion-tomato base.',
        whatShouldThisLookLike: 'Golden-red masala base with melted ghee shining.',
        tip: 'Do not over-brown the onions dark brown; keep them light golden so they do not darken the spinach.',
        commonMistake: 'Adding turmeric powder — turmeric will react with spinach and turn it an unappealing olive-yellow color.',
        moveOnWhen: 'Tomatoes are mashed and oil separates.',
        quickInstructions: 'Sauté cumin, onions (6 mins), ginger-garlic, and tomatoes (5 mins) in ghee until jammy.'
      },
      {
        step: 4,
        title: 'UNITE, FOLD PANEER & FINISH WITH CREAM',
        whatYouNeed: ['Spinach puree', 'Cooked masala base', '300g cubed paneer', '3 tbsp heavy cream', '1 tsp crushed kasuri methi'],
        description: 'Pour the spinach puree into the kadhai with the masala base. Stir gently to combine. Simmer uncovered on low heat for only 4–5 minutes until heated through (do not over-boil). Gently fold in the paneer cubes. Stir in 3 tbsp heavy cream and crushed kasuri methi. Simmer for 1 minute, turn off heat, and serve.',
        howToDoIt: 'Simmering spinach briefly preserves both its fresh nutritional profile and glowing green color. Heavy cream mellows oxalic acidity.',
        heat: 'Low Heat',
        heatDescription: 'Gentle bubbling.',
        duration: 6,
        visualCues: 'Vibrant green gravy coats the white paneer cubes; cream streaks melt into pastel green ribbons.',
        hear: 'Quiet gentle blips.',
        smell: 'Rich dairy, fenugreek, and fresh green spinach.',
        textureCheck: 'Velvety, creamy, spoon-coating sauce with tender paneer.',
        whatShouldThisLookLike: 'Lustrous, deep emerald gravy hugging pristine white paneer cubes.',
        tip: 'Soaking paneer cubes in warm salted water before adding keeps them soft as marshmallows.',
        commonMistake: 'Boiling the spinach for 15+ minutes after pureeing — it will turn dark army green and develop a bitter taste.',
        moveOnWhen: 'Paneer is warm through and gravy is velvety.',
        quickInstructions: 'Add spinach puree, simmer 4 mins on low; fold in paneer, cream, and kasuri methi; warm 1 min.'
      }
    ],
    commonMistakes: [
      { mistake: 'Palak Paneer turned dull brown-green.', remedy: 'You boiled the spinach with a lid on, skipped the ice bath, or simmered it for too long. Always ice-shock and cook uncovered.' },
      { mistake: 'Paneer cubes are tough and rubbery.', remedy: 'Paneer was over-fried or boiled too long. Add fresh raw or lightly soaked paneer right at the end of cooking.' }
    ],
    troubleshooting: [
      {
        problem: 'Gravy has a bitter spinach aftertaste',
        whatHappened: 'Oxalic acid from mature spinach leaves remained concentrated.',
        whyItHappened: 'Mature spinach leaves were used without blanching or removing thick stems.',
        whatToDoNow: 'Whisk in 1 extra tablespoon of heavy cream or 1 teaspoon of butter with a tiny pinch of sugar to neutralize bitterness.',
        howToPrevent: 'Always blanch spinach for 2 minutes and trim away the thick stems.'
      }
    ],
    substitutions: [
      { original: 'Paneer', substitute: 'Extra-firm tofu or boiled potato cubes (Aloo Palak)', notes: 'Tofu provides a superb high-protein plant-based swap.' },
      { original: 'Heavy cream', substitute: 'Cashew cream (blended soaked cashews)', notes: 'Rich vegan substitute with silky texture.' }
    ],
    safetyNotes: [
      'Ensure spinach is thoroughly washed in multiple changes of water to remove all soil and grit.'
    ],
    servingGuide: {
      restingTime: '2 minutes.',
      garnishing: 'Drizzle a swirl of fresh cream and top with crisp golden fried garlic slivers.',
      plating: 'Serve in a wide, shallow ceramic bowl to showcase the vivid emerald color.',
      temperature: 'Warm to hot.',
      accompaniments: 'Garlic Naan, Tandoori Roti, Jeera Rice, and lime wedges.'
    }
  },

  // 9. SAMOSA
  {
    id: 'samosa',
    name: 'Punjabi Aloo Samosa',
    cuisine: 'Indian',
    region: 'North Indian (Punjab)',
    servings: 6,
    prepTime: 35,
    cookTime: 30,
    difficulty: 'Hard',
    overview: {
      summary: 'The king of Indian street food snacks — crisp, flaky, blister-free pastry cones infused with ajwain seeds, stuffed with a coarsely crushed potato-and-green-pea filling spiced with roasted coriander, cumin, fennel, and amchur, then slowly deep-fried to golden, crunchy perfection.',
      appearance: 'Distinctive upright three-cornered pyramidal pastries, uniformly golden-amber with a smooth, crisp crust free of oily surface blisters.',
      texture: 'Extremely flaky, crisp, shortcrust pastry that shatters upon biting, filled with moist, aromatic, chunky spiced potatoes.',
      flavor: 'Savory, spicy, tangy from amchur, with warm herbal notes of crushed coriander seeds and ajwain.',
      restingTimeMinutes: 5
    },
    equipment: [
      { name: 'Deep heavy iron kadhai or Dutch oven', purpose: 'Maintains stable low frying oil temperature so samosa pastry cooks slowly and crisps without burning.' },
      { name: 'Slotted spider skimmer', purpose: 'For lifting and turning samosas in hot oil.' },
      { name: 'Rolling pin (belan)', purpose: 'To roll dough into thin ovals.' },
      { name: 'Deep-fry / candy thermometer', purpose: 'Accurately regulates oil temperature at 150°C (300°F).' }
    ],
    beforeYouStart: [
      { task: 'Boil 500g potatoes in salted water until tender; cool completely, peel, and crush coarsely into chunky pieces (do not mash).', durationMinutes: 30 },
      { task: 'Rub 60g melted ghee into 250g all-purpose flour for 5 minutes until it resembles breadcrumbs (moin test: dough holds shape when squeezed).', durationMinutes: 6 },
      { task: 'Coarsely crush 1 tbsp coriander seeds and 1 tsp fennel seeds in a mortar.', durationMinutes: 3 }
    ],
    ingredientPrepGuide: [
      { item: 'Moin Dough Technique', technique: 'Rubbing fat (ghee) thoroughly into dry flour before adding water coats gluten strands in fat, guaranteeing a flaky, brittle, melt-in-the-mouth crust (khasta).' },
      { item: 'Potato Filling', technique: 'Potatoes MUST be cold and broken with fingers into irregular 1–2cm chunks. Warm or mashed potatoes become gummy and produce soggy samosas.' },
      { item: 'Two-Stage Frying', technique: 'Fry initially in low-temperature oil (140–150°C) for 15 minutes to cook the pastry through without blistering, then raise heat to 175°C for 3 minutes to turn golden-crisp.' }
    ],
    essentialIngredients: [
      { name: 'All-purpose flour (Maida)', prep: 'sifted', amount: '250g', metric: '250g', imperial: '8.8 oz', common: '2 cups' },
      { name: 'Desi Ghee (or oil)', prep: 'melted, for dough (moin)', amount: '60g', metric: '60g', imperial: '2.1 oz', common: '4 tbsp' },
      { name: 'Ajwain (carom seeds)', prep: 'crushed between palms', amount: '1/2 tsp', metric: '1.5g', imperial: '0.05 oz', common: '1/2 tsp' },
      { name: 'Cold water', prep: 'for stiff dough', amount: '80ml', metric: '80ml', imperial: '2.7 fl oz', common: '1/3 cup' },
      { name: 'Russet or Yukon Gold potatoes', prep: 'boiled, peeled, chunky crushed', amount: '500g', metric: '500g', imperial: '1.1 lbs', common: '3 large' },
      { name: 'Green peas (matar)', prep: 'fresh or thawed frozen', amount: '80g', metric: '80g', imperial: '2.8 oz', common: '1/2 cup' },
      { name: 'Whole coriander seeds', prep: 'coarsely crushed', amount: '1 tbsp', metric: '6g', imperial: '0.2 oz', common: '1 tbsp' },
      { name: 'Fennel seeds (saunf)', prep: 'coarsely crushed', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Cumin seeds', prep: 'whole', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Ginger', prep: 'finely grated', amount: '1 tbsp', metric: '15g', imperial: '0.5 oz', common: '1 tbsp' },
      { name: 'Green chilies', prep: 'finely minced', amount: '2 chilies', metric: '10g', imperial: '0.35 oz', common: '2 chilies' },
      { name: 'Amchur (dry mango powder)', prep: 'for signature tartness', amount: '1.5 tsp', metric: '5g', imperial: '0.18 oz', common: '1.5 tsp' },
      { name: 'Garam masala', prep: 'powder', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Red chili powder', prep: 'divided', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Fine sea salt', prep: 'divided (dough & filling)', amount: '1.5 tsp', metric: '9g', imperial: '0.3 oz', common: '1.5 tsp' },
      { name: 'Oil for deep frying', prep: 'neutral oil (peanut, canola, or sunflower)', amount: '800ml', metric: '800ml', imperial: '27 fl oz', common: '3.5 cups' }
    ],
    optionalIngredients: [
      { name: 'Cashew nuts (kaju)', prep: 'split and fried golden', amount: '20g', metric: '20g', imperial: '0.7 oz', common: '2 tbsp', optional: true },
      { name: 'Raisins (kishmish)', prep: 'for Punjabi halwai style sweet-savory pop', amount: '15g', metric: '15g', imperial: '0.5 oz', common: '1.5 tbsp', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'KNEAD STIFF SAMOSA DOUGH',
        whatYouNeed: ['250g maida', '60g melted ghee', '1/2 tsp ajwain', '1/2 tsp salt', '80ml cold water'],
        description: 'In a wide bowl, combine flour, salt, and ajwain. Pour in warm melted ghee. Rub the ghee thoroughly into the flour with your fingertips for 4–5 minutes until the mixture resembles breadcrumbs and holds together in a firm clump when squeezed in your fist. Gradually add cold water and knead into a very stiff, firm dough (much stiffer than roti dough). Cover with a damp cloth and rest for 30 minutes.',
        howToDoIt: 'A stiff, dry dough prevents surface blisters from bubbling during frying and creates the quintessential brittle, crunchy pastry shell.',
        heat: 'Off',
        heatDescription: 'Countertop prep.',
        duration: 35,
        visualCues: 'Flour clamps into a solid shape when squeezed in fist; finished dough is tight, smooth, and firm.',
        hear: 'None',
        smell: 'Buttery ghee and aromatic carom seed.',
        textureCheck: 'Very firm and stiff dough, not sticky at all.',
        whatShouldThisLookLike: 'Tight, firm ball of dough resting under a damp towel.',
        tip: 'Do not add extra water! Samosa dough must be stiff; soft dough results in a soft, limp samosa with oily blisters.',
        commonMistake: 'Adding too much water and kneading soft dough.',
        moveOnWhen: 'Dough is kneaded stiff and has rested for 30 minutes.',
        quickInstructions: 'Rub ghee into flour until it clumps when squeezed. Add cold water, knead stiff dough, rest 30 mins.'
      },
      {
        step: 2,
        title: 'SAUTÉ THE CHUNKY SPICED POTATO FILLING',
        whatYouNeed: ['1 tbsp oil', '1 tsp cumin', '1 tbsp crushed coriander seeds', '1 tsp crushed fennel', '1 tbsp grated ginger', '2 minced green chilies', '500g crushed cold potatoes', '80g green peas', '1.5 tsp amchur', '1 tsp garam masala', '1 tsp red chili powder', '1 tsp salt'],
        description: 'Heat 1 tbsp oil in a pan over medium heat. Add cumin, crushed coriander seeds, and fennel seeds; let sizzle for 30 seconds until fragrant. Add grated ginger and green chilies, cooking for 1 minute. Add green peas, followed by chunky crushed potatoes, amchur, garam masala, chili powder, and salt. Sauté for 4–5 minutes, stirring gently so potatoes absorb spices without turning into a smooth mash. Remove from heat and cool completely.',
        howToDoIt: 'Toasting whole crushed coriander and fennel seeds in oil releases pungent terpene oils that define authentic Punjabi samosa aroma.',
        heat: 'Medium Heat',
        heatDescription: 'Steady frying of spices and potatoes.',
        duration: 8,
        visualCues: 'Potatoes take on a warm yellow-orange hue speckled with dark toasted coriander seeds; peas remain whole.',
        hear: 'Gentle crackle of seeds and sizzle of potatoes.',
        smell: 'Pungent crushed coriander, earthy fennel, and tangy amchur.',
        textureCheck: 'Chunky, moist, flavorful potato filling.',
        whatShouldThisLookLike: 'Chunky spiced potato mixture with green peas, completely cooled.',
        tip: 'The filling MUST be completely cooled to room temperature before stuffing; hot filling creates steam that makes the pastry soggy.',
        commonMistake: 'Mashing the potatoes smooth like mashed potatoes — Punjabi samosa requires irregular chunks.',
        moveOnWhen: 'Filling is cooked and cooled to room temperature.',
        quickInstructions: 'Sauté crushed coriander, fennel, cumin, ginger, chilies; add chunky potatoes, peas, spices; cook 4 mins, cool completely.'
      },
      {
        step: 3,
        title: 'SHAPE CONES & SEAL AIRTIGHT',
        whatYouNeed: ['Rested dough', 'Rolling pin', 'Sharp knife', 'Small bowl of water', 'Cooled potato filling'],
        description: 'Divide dough into 5 equal balls. Roll one ball into an elongated oval shape about 20cm long and 12cm wide (approx 2mm thick). Slice across the center with a knife into two half-ovals (semi-circles). Take one half-oval. Brush straight cut edge lightly with water. Fold into a cone shape, overlapping the cut edges by 5mm, and press firmly to seal the seam. Hold cone like an ice cream cone in your hand. Fill with 2.5 tablespoons of potato filling, packing gently. Brush the top circular open rim with water, pinch the back edge to create a pleat, and press the edges together to seal flat. Samosa should stand upright on its base.',
        howToDoIt: 'Making a pleat on the back rim widens the base so the samosa sits upright on its flat bottom, allowing it to fry evenly.',
        heat: 'Off',
        heatDescription: 'Assembly station.',
        duration: 15,
        visualCues: 'Neat, freestanding triangular pastry pyramids with tightly pressed seams.',
        hear: 'None',
        smell: 'Herbal ajwain pastry and spiced filling.',
        textureCheck: 'Smooth, firm, taut pastry shell.',
        whatShouldThisLookLike: 'Symmetrical 3-cornered cones standing upright on a tray.',
        tip: 'Seal the seam with wet fingers and press firmly; any unsealed gap will open during frying and spill filling into the oil.',
        commonMistake: 'Over-stuffing the cone so the edges cannot seal tightly.',
        moveOnWhen: 'All 10 samosas are shaped, sealed, and standing upright.',
        quickInstructions: 'Roll oval, cut in half, form cone, seal seam with water, stuff with filling, pleat and seal top rim.'
      },
      {
        step: 4,
        title: 'SLOW LOW-HEAT FRYING (KHASTA STAGE)',
        whatYouNeed: ['10 shaped samosas', '800ml oil in deep kadhai', 'Slotted skimmer', 'Thermometer (140°C / 285°F)'],
        description: 'Heat frying oil in a kadhai over low-medium heat until barely warm (140°C / 285°F). Slide samosas gently into the oil. The oil should produce very tiny, gentle bubbles around the samosas. Fry on lowest heat undisturbed for 12–15 minutes, flipping occasionally with the skimmer, until the pastry turns pale golden and the crust feels firm and rigid to the touch.',
        howToDoIt: 'Slow, low-temperature frying dehydrates the pastry crust completely without creating moisture pockets that cause ugly blisters. This is the Halwai secret to bakery-smooth, crisp samosa shells.',
        heat: 'Low Heat (140°C / 285°F)',
        heatDescription: 'Quiet, gentle bubbling; no vigorous sputtering.',
        duration: 15,
        visualCues: 'Samosas slowly float to surface; pastry firms up with a smooth, matte pale-golden skin free of blisters.',
        hear: 'Very quiet, muffled bubbling.',
        smell: 'Toasted pastry aroma.',
        textureCheck: 'Crust turns hard and crisp when tapped with the skimmer.',
        whatShouldThisLookLike: 'Pale golden-cream samosas with porcelain-smooth crisp crusts.',
        tip: 'If you see vigorous bubbling and dark browning in the first 3 minutes, your oil is too hot! Turn off heat immediately.',
        commonMistake: 'Frying in hot oil — this produces thousands of tiny blisters and a soft, limp pastry that gets soggy in 10 minutes.',
        moveOnWhen: 'Crust is hard, rigid, and pale golden after 12-15 minutes.',
        quickInstructions: 'Fry in low-heat oil (140°C) for 15 mins until crust is firm, pale golden, and blister-free.'
      },
      {
        step: 5,
        title: 'HIGH-HEAT CRISP & DRAIN',
        whatYouNeed: ['Partially fried firm samosas', 'Spider skimmer', 'Paper towel-lined tray'],
        description: 'Increase heat to medium-high (175°C / 350°F). Fry the samosas for the final 3–4 minutes, turning frequently, until the crust deepens into a rich, uniform golden-amber color. Lift out with the spider skimmer, hold over the pan for 10 seconds to drain oil, and transfer to paper towels. Rest 5 minutes before serving.',
        howToDoIt: 'Raising the heat in the final stage drives out any remaining oil from the crust and achieves a stunning golden color and glass-like crunch.',
        heat: 'Medium-High Heat (175°C / 350°F)',
        heatDescription: 'Active, lively sizzling.',
        duration: 4,
        visualCues: 'Crust turns from pale cream to deep, uniform golden-amber; surface remains porcelain smooth.',
        hear: 'Lively, crisp frying crackle.',
        smell: 'Heavenly aroma of authentic fried samosas.',
        textureCheck: 'Incredibly crisp and rigid.',
        whatShouldThisLookLike: 'Gorgeous deep golden-amber pyramid samosas.',
        tip: 'Resting for 5 minutes allows the pastry to firm up to maximum crunch.',
        commonMistake: 'Crowding too many samosas in the final stage, which drops oil temperature.',
        moveOnWhen: 'Samosas are deep golden-brown, drained, and resting.',
        quickInstructions: 'Raise heat to 175°C for 3-4 mins until deep golden-amber. Drain and rest 5 mins.'
      }
    ],
    commonMistakes: [
      { mistake: 'Samosa has tiny bubbles and blisters all over.', remedy: 'The oil was too hot when you dropped the samosas in. Always start frying in warm (not hot) oil at 140°C.' },
      { mistake: 'Samosa opened in the oil and spilled filling.', remedy: 'The edges were not sealed tightly with water. Press seams firmly between wet fingers before frying.' }
    ],
    troubleshooting: [
      {
        problem: 'Samosas became soft and soggy after 20 minutes',
        whatHappened: 'The filling had too much moisture or the pastry was under-fried.',
        whyItHappened: 'Hot potatoes were stuffed into dough, releasing steam inside the sealed cone.',
        whatToDoNow: 'Re-crisp in an air fryer or oven at 180°C (350°F) for 6–8 minutes to restore crunchy texture.',
        howToPrevent: 'Always allow the cooked potato filling to cool 100% to room temperature before stuffing.'
      }
    ],
    substitutions: [
      { original: 'Desi Ghee (in dough)', substitute: 'Vegetable oil', notes: 'Oil creates a crispy crust, though ghee yields superior flaky melt-in-mouth richness.' },
      { original: 'Amchur', substitute: '1 tbsp lemon juice added off heat to filling', notes: 'Provides necessary tart contrast.' }
    ],
    safetyNotes: [
      'Never drop samosas into hot oil from a height; slide them gently along the side of the pan with a skimmer to prevent hot oil burns.'
    ],
    servingGuide: {
      restingTime: '5 minutes.',
      garnishing: 'Serve whole alongside fried salted green chilies.',
      plating: 'Present on a platter with small bowls of vibrant green chutney and dark sweet tamarind chutney.',
      temperature: 'Serve hot (approx 60°C).',
      accompaniments: 'Mint-coriander chutney, saunth (sweet tamarind chutney), and piping hot masala chai.'
    }
  },

  // 10. PANEER TIKKA
  {
    id: 'paneer-tikka',
    name: 'Tandoori Paneer Tikka',
    cuisine: 'Indian',
    region: 'North Indian (Punjab / Delhi)',
    servings: 4,
    prepTime: 25,
    cookTime: 15,
    difficulty: 'Easy',
    overview: {
      summary: 'Thick cubes of fresh malai paneer, crunchy bell peppers, and red onions coated in an ajwain-scented spiced hung curd and smoked mustard oil marinade, skewered and charred under intense heat until blistered, smoky, and melt-in-the-mouth soft.',
      appearance: 'Vivid orange-red skewered paneer cubes with dramatic charred blistered edges, alternated with charred red onions and green bell peppers, brushed with melted butter.',
      texture: 'Crispy, smoky crust with extraordinarily soft, milky, succulent paneer that yields effortlessly.',
      flavor: 'Smoky, tangy, aromatic, with subtle heat from Kashmiri chili and herbal warmth from fenugreek.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Metal or soaked bamboo skewers', purpose: 'To securely hold paneer and vegetables during high-heat broiling.' },
      { name: 'Baking sheet with elevated roasting rack', purpose: 'Allows hot air to swirl underneath so paneer does not stew in pooling juices.' },
      { name: 'Pastry brush', purpose: 'For basting melted butter to create instant char and keep paneer moist.' }
    ],
    beforeYouStart: [
      { task: 'Soak bamboo skewers in water for 30 minutes to prevent scorching.', durationMinutes: 30 },
      { task: 'Cut 400g fresh paneer into thick 3.5cm (1.5 inch) cubes with 1.5cm thickness.', durationMinutes: 5 },
      { task: 'Cut 1 green bell pepper, 1 red bell pepper, and 1 large red onion into 3.5cm square petals.', durationMinutes: 6 }
    ],
    ingredientPrepGuide: [
      { item: 'Paneer Sizing', technique: 'Cut paneer into generous 3.5cm squares. Small cubes dry out and turn rubbery under intense broiling heat.' },
      { item: 'Hung Curd Base', technique: 'Whisk thick hung curd with smoked mustard oil and roasted besan. The besan forms a heat-resistant coating that prevents the delicate paneer from weeping water under the broiler.' }
    ],
    essentialIngredients: [
      { name: 'Fresh Malai Paneer', prep: 'cut into 3.5cm cubes', amount: '400g', metric: '400g', imperial: '14 oz', common: '3 cups' },
      { name: 'Hung curd (thick Greek yogurt)', prep: 'whisked smooth', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '2/3 cup' },
      { name: 'Besan (gram flour)', prep: 'lightly roasted in a dry pan', amount: '1.5 tbsp', metric: '15g', imperial: '0.5 oz', common: '1.5 tbsp' },
      { name: 'Mustard oil', prep: 'heated to smoking point and cooled', amount: '1.5 tbsp', metric: '22ml', imperial: '0.75 fl oz', common: '1.5 tbsp' },
      { name: 'Ginger-garlic paste', prep: 'freshly pounded', amount: '1.5 tbsp', metric: '22g', imperial: '0.8 oz', common: '1.5 tbsp' },
      { name: 'Kashmiri red chili powder', prep: 'for bright color', amount: '1.5 tbsp', metric: '12g', imperial: '0.4 oz', common: '1.5 tbsp' },
      { name: 'Ajwain (carom seeds)', prep: 'crushed between palms', amount: '1/2 tsp', metric: '1.5g', imperial: '0.05 oz', common: '1/2 tsp' },
      { name: 'Kasuri methi', prep: 'toasted and crushed', amount: '1 tbsp', metric: '3g', imperial: '0.1 oz', common: '1 tbsp' },
      { name: 'Garam masala powder', prep: 'fragrant blend', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Chaat masala', prep: 'divided (marinade & finishing)', amount: '1.5 tsp', metric: '4.5g', imperial: '0.15 oz', common: '1.5 tsp' },
      { name: 'Lemon juice', prep: 'freshly squeezed', amount: '1.5 tbsp', metric: '22ml', imperial: '0.75 fl oz', common: '1.5 tbsp' },
      { name: 'Green & red bell peppers', prep: 'cut into 3.5cm squares', amount: '2 peppers', metric: '200g', imperial: '7 oz', common: '2 cups' },
      { name: 'Red onion', prep: 'separated into layers/petals', amount: '1 large', metric: '120g', imperial: '4.2 oz', common: '1 cup' },
      { name: 'Melted butter', prep: 'for basting', amount: '3 tbsp', metric: '45g', imperial: '1.6 oz', common: '3 tbsp' },
      { name: 'Fine sea salt', prep: 'to taste', amount: '1 tsp', metric: '6g', imperial: '0.2 oz', common: '1 tsp' }
    ],
    optionalIngredients: [
      { name: 'Black salt (kala namak)', prep: 'pinch in marinade for sulfurous complexity', amount: '1/4 tsp', metric: '1g', imperial: '0.03 oz', common: '1/4 tsp', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'WHISK THE TIKKA MARINADE',
        whatYouNeed: ['150g hung curd', '1.5 tbsp roasted besan', '1.5 tbsp warm smoked mustard oil', '1.5 tbsp Kashmiri chili', '1.5 tbsp ginger-garlic paste', '1/2 tsp crushed ajwain', '1 tbsp kasuri methi', '1 tsp garam masala', '1/2 tsp chaat masala', '1.5 tbsp lemon juice', '1 tsp salt'],
        description: 'In a large mixing bowl, whisk warm smoked mustard oil with Kashmiri chili powder until vibrant red. Whisk in hung curd, roasted besan, ginger-garlic paste, crushed ajwain, kasuri methi, garam masala, chaat masala, lemon juice, and salt into a thick, glossy paste.',
        howToDoIt: 'Whisking chili directly into warm mustard oil blooms its color without cooking the yogurt. The roasted besan binds moisture so the marinade clings securely to the smooth paneer.',
        heat: 'Off',
        heatDescription: 'Marinade assembly.',
        duration: 5,
        visualCues: 'Vibrant terracotta-red paste with a thick, glossy, spreadable texture.',
        hear: 'Whisking sounds.',
        smell: 'Pungent mustard, lemon zest, and toasted spices.',
        textureCheck: 'Thick like sour cream, not runny.',
        whatShouldThisLookLike: 'Smooth, bright red marinade that coats a spoon cleanly.',
        tip: 'Ensure the curd is completely hung and thick; watery yogurt will slide off paneer under the heat.',
        commonMistake: 'Using raw besan — unroasted besan leaves a chalky, raw legume taste.',
        moveOnWhen: 'Marinade is smooth, thick, and uniformly red.',
        quickInstructions: 'Whisk smoked mustard oil, chili, hung curd, roasted besan, aromatics, and spices into a thick paste.'
      },
      {
        step: 2,
        title: 'GENTLE COATING & MARINATION',
        whatYouNeed: ['Tikka marinade', '400g paneer cubes', '200g bell pepper squares', '120g onion squares'],
        description: 'First add the bell peppers and onions to the marinade; toss to coat. Then gently add the delicate paneer cubes. Use your clean hands or a soft silicone spatula to gently coat each paneer piece, taking care not to break the edges. Cover and rest in the refrigerator for 30–45 minutes.',
        howToDoIt: 'Coating vegetables first protects the tender paneer from excessive handling. 30 minutes allows spices and salt to penetrate the surface without drawing out paneer moisture.',
        heat: 'Chilled (Refrigerator)',
        heatDescription: 'Cold marination.',
        duration: 35,
        visualCues: 'Paneer and vegetables are enveloped in a thick blanket of red marinade.',
        hear: 'None',
        smell: 'Rich, spicy tandoori aroma.',
        textureCheck: 'Thick marinade adhering to every facet.',
        whatShouldThisLookLike: 'Thickly coated paneer and colorful pepper squares resting in a bowl.',
        tip: 'Do not marinate paneer overnight; prolonged contact with salt draws out moisture, turning paneer tough.',
        commonMistake: 'Roughly stirring paneer with a metal spoon, crumbling the cubes.',
        moveOnWhen: 'Paneer and vegetables have rested in marinade for 30 minutes.',
        quickInstructions: 'Coat peppers, onions, then paneer gently in marinade. Rest chilled 30 mins.'
      },
      {
        step: 3,
        title: 'THREAD SKEWERS & PREHEAT BROILER',
        whatYouNeed: ['Marinated paneer & veggies', 'Soaked skewers', 'Roasting rack over baking sheet', 'Oven preheated on Broil (240°C / 475°F)'],
        description: 'Thread onto skewers in alternating pattern: onion square, green pepper, paneer cube, red pepper, onion. Leave 5mm space between pieces. Suspend skewers over the roasting rack so they are elevated above the pan.',
        howToDoIt: 'Flanking each paneer cube with firm pepper and onion squares provides structural support on the skewer and prevents paneer from slipping when rotated.',
        heat: 'Off',
        heatDescription: 'Skewering station.',
        duration: 8,
        visualCues: 'Vibrant, colorful skewers neatly aligned on the elevated rack.',
        hear: 'None',
        smell: 'Spiced marinade.',
        textureCheck: 'Securely threaded skewers.',
        whatShouldThisLookLike: 'Neat skewers with alternating red, green, and orange blocks elevated on a wire rack.',
        tip: 'Line the bottom baking sheet with foil for easy cleanup of marinade drippings.',
        commonMistake: 'Crowding paneer cubes together with no space, preventing hot air from charring the sides.',
        moveOnWhen: 'All skewers are threaded and suspended on the rack.',
        quickInstructions: 'Thread skewers: onion, pepper, paneer, pepper, onion. Suspend over roasting tray.'
      },
      {
        step: 4,
        title: 'HIGH BROIL & BUTTER BASTE CHAR',
        whatYouNeed: ['Threaded skewers', 'Preheated broiler', '3 tbsp melted butter', 'Basting brush', '1 tsp chaat masala'],
        description: 'Slide the tray into the oven 15cm below the broiler. Broil for 7–8 minutes until edges begin to blister. Carefully pull out the tray, brush all sides liberally with melted butter, and rotate skewers 180 degrees. Return to broiler for 4–5 minutes until paneer edges have charred black-brown blister spots. Remove immediately, sprinkle with chaat masala, and rest 2 minutes before sliding off skewers.',
        howToDoIt: 'Short, fierce radiant heat sears the exterior into smoky tandoori blister marks while leaving the interior milky and succulent. Cooking beyond 12 minutes will turn paneer rubbery.',
        heat: 'Broil / High (240°C / 475°F)',
        heatDescription: 'Fierce radiant overhead heat causing active bubbling and sizzling.',
        duration: 12,
        visualCues: 'Dark charred blisters on paneer corners; vegetables blistered; butter sizzling loudly.',
        hear: 'Crisp crackling and spitting as butter hits the hot paneer.',
        smell: 'Incredible smoky barbecue aroma.',
        textureCheck: 'Paneer is soft as a pillow inside with a delicate charred crust.',
        whatShouldThisLookLike: 'Tempting blistered red paneer cubes flanked by charred vegetables.',
        tip: 'Watch closely in the final 2 minutes; broiler heat can move from golden to burnt quickly.',
        commonMistake: 'Overcooking paneer for 20+ minutes — this expels all whey moisture, turning paneer tough like pencil erasers.',
        moveOnWhen: 'Edges show attractive charred blisters and paneer is soft.',
        quickInstructions: 'Broil 7 mins, baste with melted butter, rotate, broil 4-5 mins until charred on corners. Dust with chaat masala.'
      }
    ],
    commonMistakes: [
      { mistake: 'Paneer turned hard and rubbery.', remedy: 'You broiled it too long. High-heat broiling should never exceed 12 minutes total for paneer.' },
      { mistake: 'Marinade was watery and dripped off.', remedy: 'You used ordinary unstrained yogurt. Always use hung curd or thick Greek yogurt drained for 45 minutes.' }
    ],
    troubleshooting: [
      {
        problem: 'I do not have an oven broiler',
        whatHappened: 'Need alternative cooking method.',
        whyItHappened: 'No oven available.',
        whatToDoNow: 'Cook skewers directly on a smoking-hot cast iron grill pan on the stove, turning every 2 minutes for 8 minutes total, basting with butter.',
        howToPrevent: 'A cast-iron grill pan on high heat produces identical charred grill marks.'
      }
    ],
    substitutions: [
      { original: 'Fresh Paneer', substitute: 'Extra-firm pressed tofu or Halloumi cheese', notes: 'Tofu is an ideal vegan substitute; halloumi grills beautifully with salty chew.' },
      { original: 'Mustard oil', substitute: 'Ghee with a pinch of ground mustard', notes: 'Milder flavor profile.' }
    ],
    safetyNotes: [
      'Use oven mitts when rotating hot metal skewers under the broiler.'
    ],
    servingGuide: {
      restingTime: '2 minutes.',
      garnishing: 'Dust with tangy chaat masala, fresh coriander leaves, and lemon juice.',
      plating: 'Arrange on a platter with thinly sliced red onion rings and lemon wedges.',
      temperature: 'Piping hot off the skewers.',
      accompaniments: 'Mint-coriander yogurt chutney, rumali roti, and spiced pickled onions.'
    }
  }
];
