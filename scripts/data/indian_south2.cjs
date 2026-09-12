// South Indian culinary recipes Part 2
module.exports = [
  // 21. IDIYAPPAM (STRING HOPPERS)
  {
    id: 'idiyappam',
    name: 'Kerala Idiyappam (Steamed Rice String Hoppers)',
    cuisine: 'Indian',
    region: 'South Indian (Kerala / Tamil Nadu)',
    servings: 4,
    prepTime: 20,
    cookTime: 12,
    difficulty: 'Medium',
    overview: {
      summary: 'Delicate, lacy nests of steamed rice vermicelli noodles made from finely ground roasted rice flour kneaded with boiling salted water and coconut oil. Extruded through an idiyappam press onto greased idli plates, topped with fresh grated coconut, and steamed into tender, cloud-soft nests.',
      appearance: 'Pristine, snow-white interwoven nests of fine vermicelli noodles, dotted with fresh coconut gratings, served with vegetable kurma or sweetened coconut milk.',
      texture: 'Feather-light, soft, and springy; noodles separate easily with a fork without sticking or mushing.',
      flavor: 'Pure, comforting toasted rice flavor with gentle sweet coconut undertones.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Idiyappam press (sevanazhi)', purpose: 'Extrudes hot dough through fine perforated holes into delicate vermicelli strands.' },
      { name: 'Idli steamer / steamer plates', purpose: 'Holds the extruded noodle nests above boiling water for quick steaming.' }
    ],
    beforeYouStart: [
      { task: 'Bring 300ml water to a rolling boil with 1 tsp coconut oil and 1 tsp salt.', durationMinutes: 5 },
      { task: 'Lightly grease steamer plates with coconut oil.', durationMinutes: 2 }
    ],
    ingredientPrepGuide: [
      { item: 'Boiling Water Knead', technique: 'Water MUST be at a rolling boil when poured onto the roasted rice flour. Boiling water pre-gelatinizes the starches, creating elasticity so the dough extrudes in long unbroken strands without snapping.' }
    ],
    essentialIngredients: [
      { name: 'Fine roasted rice flour (Idiyappam podi)', prep: 'sifted', amount: '250g', metric: '250g', imperial: '8.8 oz', common: '1.75 cups' },
      { name: 'Boiling water', prep: 'rolling boil', amount: '300ml', metric: '300ml', imperial: '10 fl oz', common: '1.25 cups' },
      { name: 'Coconut oil', prep: 'divided', amount: '1.5 tbsp', metric: '22ml', imperial: '0.75 fl oz', common: '1.5 tbsp' },
      { name: 'Fine sea salt', prep: 'dissolved in boiling water', amount: '1 tsp', metric: '6g', imperial: '0.2 oz', common: '1 tsp' },
      { name: 'Fresh grated coconut', prep: 'for topping nests', amount: '60g', metric: '60g', imperial: '2.1 oz', common: '1/2 cup' }
    ],
    optionalIngredients: [
      { name: 'Cardamom powder', prep: 'sprinkled over coconut', amount: '1/4 tsp', metric: '0.7g', imperial: '0.02 oz', common: 'pinch', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'BOILING WATER KNEAD & DOUGH REST',
        whatYouNeed: ['250g roasted rice flour', '300ml boiling water with 1 tsp salt & 1 tbsp coconut oil', 'Wooden spoon', 'Mixing bowl'],
        description: 'Place rice flour in a bowl. Pour boiling water gradually over the flour, stirring vigorously with the handle of a wooden spoon until a soft shaggy dough forms. Once cool enough to handle (after 2 minutes), knead with wet hands into a soft, smooth, non-sticky dough. Keep covered with a damp cloth.',
        howToDoIt: 'Boiling water instantly hydrates amylose starches, turning brittle rice flour into a pliable, stretchy dough.',
        heat: 'Off (Boiling water added)',
        heatDescription: 'Scalding water technique.',
        duration: 8,
        visualCues: 'Flour comes together into a satin-smooth, soft, pliable white dough.',
        hear: 'Soft sizzling as boiling water hits dry flour.',
        smell: 'Sweet aroma of gelatinized rice and coconut oil.',
        textureCheck: 'Soft as an earlobe, pliable, and completely smooth.',
        whatShouldThisLookLike: 'Smooth ball of warm white dough covered with a damp towel.',
        tip: 'If dough feels stiff, add 1–2 tablespoons of boiling water; stiff dough will be impossible to press through the nozzle.',
        commonMistake: 'Using lukewarm water — warm water will not gelatinize the starch, causing noodles to break into tiny brittle pieces.',
        moveOnWhen: 'Dough is soft, pliable, and kneaded smooth.',
        quickInstructions: 'Stir boiling salted water and oil into rice flour; knead into a soft, smooth dough while warm.'
      },
      {
        step: 2,
        title: 'EXTRUDE LACY NOODLE NESTS',
        whatYouNeed: ['Warm dough', 'Idiyappam press fitted with fine-hole disc', 'Greased steamer plates', 'Fresh grated coconut'],
        description: 'Lightly oil the inside of the idiyappam press. Fill the cylinder with warm dough. Hold the press over a greased idli cavity and rotate the handle, extruding the dough in continuous circular spirals to form a light, airy 10cm nest. Scatter 1 teaspoon of fresh grated coconut over the center of each nest.',
        howToDoIt: 'Extruding in loose overlapping circles keeps the noodle layers airy so steam can circulate through every strand without clumping.',
        heat: 'Off',
        heatDescription: 'Extrusion station.',
        duration: 4,
        visualCues: 'Intricate, delicate nests of fine white vermicelli noodles topped with snow-white coconut.',
        hear: 'Quiet hum of press mechanism.',
        smell: 'Fresh coconut and sweet rice.',
        textureCheck: 'Delicate, unbroken noodle strands.',
        whatShouldThisLookLike: 'Neat circular noodle nests sitting in the steamer cavities.',
        tip: 'Extrude the dough while it is still warm; cold dough becomes stiff and difficult to press.',
        commonMistake: 'Extruding too many layers on top of each other, creating a dense noodle block.',
        moveOnWhen: 'All noodle nests are extruded onto steamer plates.',
        quickInstructions: 'Fill press with warm dough; extrude in circles onto greased plates to make noodle nests; top with coconut.'
      },
      {
        step: 3,
        title: 'STEAM TO CLOUD TENDERNESS',
        whatYouNeed: ['Loaded steamer plates', 'Steamer with boiling water', 'Tight lid'],
        description: 'Place the steamer plates over vigorously boiling water. Cover tightly with lid. Steam on medium-high heat for exactly 8 to 10 minutes. Turn off heat and let rest unopened for 2 minutes.',
        howToDoIt: 'Gentle steam finishes gelatinizing the noodles, setting their shape so they remain soft, tender, and distinct.',
        heat: 'Medium-High Steam',
        heatDescription: 'Steady rolling steam.',
        duration: 10,
        visualCues: 'Noodles turn from chalky white to slightly translucent and firm.',
        hear: 'Rhythmic bubbling of water.',
        smell: 'Wholesome aroma of steamed fresh rice and coconut.',
        textureCheck: 'Soft, springy noodles that do not stick to dry fingers.',
        whatShouldThisLookLike: 'Steaming white nests with tender coconut flakes.',
        tip: 'To test doneness, touch a noodle strand with a wet finger; it should feel springy and not leave any wet paste.',
        commonMistake: 'Over-steaming beyond 12 minutes, making the noodles soggy.',
        moveOnWhen: 'Steamed for 8-10 minutes and rested 2 minutes.',
        quickInstructions: 'Steam nests covered for 8-10 mins on medium-high; rest 2 mins off heat.'
      },
      {
        step: 4,
        title: 'UNMOULD & PRESENT',
        whatYouNeed: ['Steamed nests', 'Flat spatula'],
        description: 'Remove plates from steamer. Let cool for 1 minute. Gently slide a thin spatula underneath each nest and lift onto a serving platter.',
        howToDoIt: 'Resting for 1 minute allows the outer starch structure to firm slightly, preventing the nest from tearing when lifted.',
        heat: 'Off',
        heatDescription: 'Plating.',
        duration: 1,
        visualCues: 'Intact, fluffy, lacy nests resting on the platter.',
        hear: 'None',
        smell: 'Steamed rice and sweet coconut.',
        textureCheck: 'Soft, springy, and feather-light.',
        whatShouldThisLookLike: 'Pristine, cloud-soft Kerala Idiyappam nests.',
        tip: 'Stack nests gently in a covered casserole to keep warm and moist.',
        commonMistake: 'Rough handling while hot, which shatters the noodle nests.',
        moveOnWhen: 'All nests are transferred intact to serving platter.',
        quickInstructions: 'Rest 1 min; lift nests gently with spatula onto serving plate.'
      }
    ],
    commonMistakes: [
      { mistake: 'Noodles broke into tiny pieces while pressing.', remedy: 'Water was not boiling when mixed into flour. Flour must be scalded with rolling-boil water.' },
      { mistake: 'Noodles are sticky and mushy.', remedy: 'Too much water was added or nests were over-steamed. Follow exact 1:1.2 flour to boiling water ratio.' }
    ],
    troubleshooting: [
      {
        problem: 'Dough is too hard to press through the nozzle',
        whatHappened: 'Flour absorbed all water and cooled down.',
        whyItHappened: 'Moisture evaporated or dough sat too long.',
        whatToDoNow: 'Add 2 tablespoons of boiling water and 1 tsp coconut oil; knead warm until soft and pliable.',
        howToPrevent: 'Keep dough covered with a damp towel and press while still warm.'
      }
    ],
    substitutions: [
      { original: 'White Rice Flour', substitute: 'Ragi flour (finger millet)', notes: 'Ragi idiyappam has an earthy nutty flavor and deep chocolate color.' }
    ],
    safetyNotes: [
      'Take care when pouring rolling-boil water into dry flour; stir with a wooden spoon first before touching with hands.'
    ],
    servingGuide: {
      restingTime: '1 minute.',
      garnishing: 'Showcase neat noodle nests topped with fresh coconut.',
      plating: 'Serve on a fresh banana leaf.',
      temperature: 'Warm to hot.',
      accompaniments: 'Kerala Vegetable Stew, Egg Roast, Chicken Curry, or sweetened warm coconut milk infused with cardamom.'
    }
  },

  // 22. KERALA PAROTTA (MALABAR PAROTTA)
  {
    id: 'kerala-parotta',
    name: 'Malabar Parotta (Flaky Kerala Layered Flatbread)',
    cuisine: 'Indian',
    region: 'South Indian (Kerala / Malabar)',
    servings: 4,
    prepTime: 30,
    cookTime: 20,
    difficulty: 'Hard',
    overview: {
      summary: 'The pride of Kerala street cuisine: an incredibly flaky, layered, spiral-pleated flatbread made from refined flour dough kneaded with egg, milk, sugar, and oil. Rested, stretched paper-thin until translucent, pleated into delicate coils, pan-roasted in ghee until golden-crisp, then vigorously beaten between hands to release hundreds of flaky, feathery layers.',
      appearance: 'Circular golden-brown flatbread with visible multi-tiered flaky concentric rings, blistered with golden speckles, brushed with ghee.',
      texture: 'Crispy, crunchy on the exterior, incredibly tender, stretchy, soft, and feathery layered inside.',
      flavor: 'Rich, buttery, slightly sweet, savory, and deeply comforting.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Heavy iron tawa or cast iron skillet', purpose: 'Maintains even contact heat to crisp outer layers without burning.' },
      { name: 'Oiled granite countertop or large steel prep table', purpose: 'Smooth surface for slapping and stretching dough paper-thin.' },
      { name: 'Rolling pin (optional)', purpose: 'For preliminary flattening before hand-stretching.' }
    ],
    beforeYouStart: [
      { task: 'Knead 350g maida with 1 egg, 60ml milk, 120ml water, 1 tbsp sugar, 1 tsp salt, and 2 tbsp oil for 10 full minutes until gluten is fully developed and elastic.', durationMinutes: 15 },
      { task: 'Coat dough ball with 1 tbsp oil, cover with damp cloth, and rest for at least 1 hour (crucial for elasticity).', durationMinutes: 60 }
    ],
    ingredientPrepGuide: [
      { item: 'Windowpane Gluten Test', technique: 'After 10 minutes of kneading, pull a small piece of dough: you should be able to stretch it paper-thin into a translucent windowpane without it tearing.' },
      { item: 'Slapping & Stretching (Veeshal)', technique: 'Oil your counter generously. Flatten a rested dough ball with oiled palms. Grab the edge with both hands, lift, slap down onto the oiled counter, and flip in a whipping motion repeatedly until the sheet stretches paper-thin and translucent.' },
      { item: 'The Kerala Parotta Clap (Thattal)', technique: 'Stack 2 hot parottas on a board immediately off the tawa. Vigorously clap your cupped hands against the outer edges toward the center 2–3 times. The shockwave shatters the brittle crust along the pleats, fluffing the layers into feathery ribbons.' }
    ],
    essentialIngredients: [
      { name: 'All-purpose flour (Maida)', prep: 'sifted', amount: '350g', metric: '350g', imperial: '12.3 oz', common: '2.75 cups' },
      { name: 'Egg (room temperature)', prep: 'whisked into liquid (or omit for veg)', amount: '1 egg', metric: '50g', imperial: '1.8 oz', common: '1 large' },
      { name: 'Whole milk', prep: 'lukewarm', amount: '60ml', metric: '60ml', imperial: '2 fl oz', common: '1/4 cup' },
      { name: 'Lukewarm water', prep: 'for kneading', amount: '120ml', metric: '120ml', imperial: '4 fl oz', common: '1/2 cup' },
      { name: 'Granulated sugar', prep: 'for golden Maillard browning', amount: '1 tbsp', metric: '12g', imperial: '0.4 oz', common: '1 tbsp' },
      { name: 'Fine sea salt', prep: 'for dough', amount: '1 tsp', metric: '6g', imperial: '0.2 oz', common: '1 tsp' },
      { name: 'Vegetable oil', prep: 'divided (dough, coating, stretching)', amount: '80ml', metric: '80ml', imperial: '2.7 fl oz', common: '1/3 cup' },
      { name: 'Desi Ghee or Coconut oil', prep: 'for pan-roasting', amount: '4 tbsp', metric: '60g', imperial: '2.1 oz', common: '4 tbsp' }
    ],
    optionalIngredients: [
      { name: 'Pure desi ghee', prep: 'for lamination brushing', amount: '2 tbsp', metric: '30g', imperial: '1 oz', common: '2 tbsp', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'INTENSE GLUTEN KNEADING & 1-HOUR REST',
        whatYouNeed: ['350g maida', '1 egg', '60ml milk', '120ml water', '1 tbsp sugar', '1 tsp salt', '2 tbsp oil'],
        description: 'Whisk egg, milk, water, sugar, salt, and 2 tbsp oil in a bowl. Add flour. Knead on a clean counter for 10 full minutes, slamming the dough against the counter every 2 minutes, until extraordinarily smooth, elastic, and stretchy. Roll into a smooth ball, submerge exterior in 1 tbsp oil, cover with a damp cloth, and rest for 1 hour at room temperature.',
        howToDoIt: 'Slamming and kneading develops strong gluten bonds, while resting relaxes the gluten proteins completely so they stretch paper-thin without snapping back.',
        heat: 'Off',
        heatDescription: 'Counter kneading.',
        duration: 70,
        visualCues: 'Dough turns from sticky shaggy mass into a satin-smooth, glossy, highly elastic sphere.',
        hear: 'Slapping sound of dough hitting counter.',
        smell: 'Sweet, enriched dough aroma.',
        textureCheck: 'Passes windowpane test; stretches into a translucent membrane.',
        whatShouldThisLookLike: 'Satin-smooth, oiled ball of dough resting under a damp towel.',
        tip: 'Do not skimp on the 1-hour rest — unstretched gluten will resist rolling and tear when slapped.',
        commonMistake: 'Kneading for only 2 minutes — parotta requires 10 minutes of mechanical kneading.',
        moveOnWhen: 'Dough passes windowpane test and has rested for 1 hour.',
        quickInstructions: 'Knead flour, egg, milk, water, sugar, salt, oil for 10 mins until elastic; coat in oil, rest 1 hour.'
      },
      {
        step: 2,
        title: 'PORTION & SECOND OIL REST',
        whatYouNeed: ['Rested elastic dough', '2 tbsp vegetable oil'],
        description: 'Pinch dough into 6 equal smooth balls (approx 90g each). Generously coat each ball in vegetable oil. Place in an oiled container, cover with plastic wrap or damp cloth, and rest for another 20 minutes.',
        howToDoIt: 'Soaking the portioned dough balls in oil lubricates the outer fibers, preventing a dry skin from forming and making hand-stretching effortless.',
        heat: 'Off',
        heatDescription: 'Resting station.',
        duration: 20,
        visualCues: 'Glistening, plump dough balls bathed in a light sheen of oil.',
        hear: 'None',
        smell: 'Fresh dough and oil.',
        textureCheck: 'Soft, pliable, and extremely relaxed.',
        whatShouldThisLookLike: 'Six shiny, oiled dough balls resting in a tray.',
        tip: 'Keep your hands well-oiled during handling.',
        commonMistake: 'Dusting with dry flour — flour will ruin the elasticity and burn on the griddle; use ONLY oil.',
        moveOnWhen: 'Dough balls have rested for 20 minutes.',
        quickInstructions: 'Divide into 6 balls, coat generously in oil, rest covered for 20 mins.'
      },
      {
        step: 3,
        title: 'SLAP, STRETCH PAPER-THIN & PLEAT SPIRAL',
        whatYouNeed: ['1 oiled dough ball', 'Oiled counter', '1 tsp melted ghee or oil'],
        description: 'Generously oil your work surface. Flatten one dough ball with your palms. Using the heels of your hands, spread and stretch outward from the center until you have a wide, paper-thin, translucent sheet (approx 40cm wide) so thin you can read a newspaper through it. Drizzle with 1 tsp ghee. Gather one edge with your fingers and fold into delicate accordion pleats like a paper fan, creating a long ribbon. Lift the pleated ribbon, stretch it gently lengthwise, then coil it into a tight spiral like a snail shell. Tuck the end tail underneath. Repeat for all balls and rest 10 minutes.',
        howToDoIt: 'Stretching paper-thin creates hundreds of micro-layers. The accordion pleating traps air between each layer, which expands into distinct flaky leaves during cooking.',
        heat: 'Off',
        heatDescription: 'Lamination station.',
        duration: 12,
        visualCues: 'Translucent dough stretched across the counter, pleated into a ruffled ribbon, coiled into a layered spiral.',
        hear: 'Soft rustle of dough pleats.',
        smell: 'Rich ghee and sweet dough.',
        textureCheck: 'Translucent, paper-thin membrane coiled into a layered spiral.',
        whatShouldThisLookLike: 'Tightly coiled dough spiral showing distinct layered rings.',
        tip: 'A few small holes in the stretched sheet are completely fine — they will be hidden inside the pleats.',
        commonMistake: 'Rolling with a floured rolling pin instead of hand-stretching with oil.',
        moveOnWhen: 'All 6 balls are stretched, pleated, coiled, and rested 10 mins.',
        quickInstructions: 'Stretch dough paper-thin on oiled counter; pleat into accordion ribbon, coil into spiral, rest 10 mins.'
      },
      {
        step: 4,
        title: 'GENTLE PALM PRESS & PAN-ROASTING',
        whatYouNeed: ['Coiled spiral disc', 'Oiled hands', 'Iron tawa over Medium heat', '2 tbsp ghee or oil', 'Metal spatula'],
        description: 'Using oiled fingers and palms, gently press the coiled spiral outward into an even 16cm (6.5 inch) disc about 5mm thick. Do not use a rolling pin. Place on a preheated medium-hot iron tawa. Cook dry for 1 minute until small bubbles appear. Flip over. Brush 1 tbsp ghee across the surface. Cook for 1.5 minutes, flip again, apply ghee, and press edges with a spatula, rotating constantly, for 3–4 minutes until both sides are deep golden-brown, blistered, and crispy.',
        howToDoIt: 'Hand pressing preserves the delicate accordion pleats intact. Cooking on medium heat in ghee fries the outer layers crisp while steam puffs the inner spirals.',
        heat: 'Medium Heat',
        heatDescription: 'Lively sizzle in bubbling ghee.',
        duration: 4,
        visualCues: 'Concentric spiral rings swell; flatbread develops glorious deep golden-amber blister spots.',
        hear: 'Vigorous, crisp sizzling of ghee.',
        smell: 'Heavenly aroma of authentic Malabar street-food parotta.',
        textureCheck: 'Crispy outer shell with visible concentric spiral ridges.',
        whatShouldThisLookLike: 'Golden-brown, multi-layered, blistered flatbread.',
        tip: 'Keep heat at medium; high heat will burn the exterior before inner layers cook through.',
        commonMistake: 'Pressing hard with a rolling pin — this crushes the layers together into a solid lump.',
        moveOnWhen: 'Both sides are crispy, deep golden-brown, and cooked through.',
        quickInstructions: 'Flatten spiral gently with oiled palms to 16cm disc; cook on medium tawa with ghee 3-4 mins until golden-crisp.'
      },
      {
        step: 5,
        title: 'THE MALABAR BEAT (RELEASING FEATHERY LAYERS)',
        whatYouNeed: ['2 hot cooked parottas', 'Cutting board', 'Clean folded towel or bare hands'],
        description: 'Stack 2 hot parottas on top of each other on a wooden board. While still piping hot off the tawa, cup your hands on opposite sides and vigorously clap/smack the edges inward toward the center 2 to 3 times sharply, rotating 90 degrees and clapping again.',
        howToDoIt: 'The sudden lateral kinetic shock shatters the brittle crust along the spiral pleats, instantly fluffing the flatbread into hundreds of delicate, feathery, separated layers.',
        heat: 'Off',
        heatDescription: 'Crushing technique.',
        duration: 1,
        visualCues: 'The flat parotta blooms open like a flower, exploding into dozens of soft, flaky, shredded ribbons.',
        hear: 'Satisfying crunch of shattering crisp layers.',
        smell: 'Intense roasted ghee and warm pastry.',
        textureCheck: 'Incredibly soft, flaky, feathery, and layered.',
        whatShouldThisLookLike: 'Fluffed, feathery Malabar Parotta with separated, flaky layers.',
        tip: 'Do this while parottas are scalding hot off the pan; if allowed to cool, the starches firm up and will not bloom into layers.',
        commonMistake: 'Skipping the beat — without clapping, the parotta remains flat and dense.',
        moveOnWhen: 'Layers are fluffed and feathery.',
        quickInstructions: 'Stack 2 hot parottas on board; vigorously clap edges inward with hands to bloom flaky layers.'
      }
    ],
    commonMistakes: [
      { mistake: 'Parotta is chewy and tough like rubber.', remedy: 'The dough was not rested long enough or was under-kneaded. Rest 1 hour after kneading and 20 minutes after portioning.' },
      { mistake: 'No visible layers formed.', remedy: 'You used a rolling pin and squashed the pleats flat, or skipped clapping the hot parottas.' }
    ],
    troubleshooting: [
      {
        problem: 'Dough tears when trying to stretch paper-thin',
        whatHappened: 'Gluten has not relaxed sufficiently.',
        whyItHappened: 'Rushed the resting time or dough is too cold.',
        whatToDoNow: 'Let the dough balls rest under oil for an additional 15 minutes at room temperature before attempting to stretch.',
        howToPrevent: 'Always allow a full 1-hour rest after the initial kneading.'
      }
    ],
    substitutions: [
      { original: 'Egg', substitute: '2 extra tbsp warm milk + 1 tbsp extra oil', notes: 'Produces fantastic vegetarian Malabar parottas with slightly less stretch.' }
    ],
    safetyNotes: [
      'Hot parottas release scalding steam when clapped; protect palms with a clean cloth if sensitive to heat.'
    ],
    servingGuide: {
      restingTime: '1 minute.',
      garnishing: 'Serve fluffed with layers open.',
      plating: 'Serve on a fresh banana leaf or plate.',
      temperature: 'Piping hot.',
      accompaniments: 'Kerala Beef Roast / Fry, Nadan Chicken Curry, Malabar Mutton Curry, or Vegetable Kurma.'
    }
  },

  // 23. SAMBAR
  {
    id: 'sambar',
    name: 'Traditional Tamil Brahmin Drumstick Sambar',
    cuisine: 'Indian',
    region: 'South Indian (Tamil Nadu / Karnataka / Kerala)',
    servings: 6,
    prepTime: 20,
    cookTime: 30,
    difficulty: 'Easy',
    overview: {
      summary: 'The quintessential South Indian lentil and vegetable stew: toor dal cooked until creamy, simmered with tart tamarind extract, pearl shallots (chinna vengayam), tender drumstick batons, and freshly roasted sambar podi, finished with a sizzling mustard-seed, fenugreek, hing, and curry-leaf ghee tadka.',
      appearance: 'Warm golden-orange, aromatic, medium-thick lentil stew laden with tender drumsticks, shallots, and carrots, crowned with a glossy ghee-tempered sheen and fresh cilantro.',
      texture: 'Comfortingly creamy lentil broth with tender whole vegetables that hold their shape.',
      flavor: 'Pungent, tangy, savory, and complexly spiced with roasted coriander, fenugreek bitterness, hing pungency, and tamarind sourness.',
      restingTimeMinutes: 5
    },
    equipment: [
      { name: 'Heavy pot or Dutch oven (4 qt)', purpose: 'For simmering dal and vegetables evenly.' },
      { name: 'Small tadka ladle (tempering pan)', purpose: 'For sputtering whole spices in hot ghee at peak heat.' },
      { name: 'Pressure cooker', purpose: 'Cooks toor dal to a creamy, lump-free mash in 15 minutes.' }
    ],
    beforeYouStart: [
      { task: 'Pressure cook 150g toor dal with 500ml water, 1/4 tsp turmeric, and 1/2 tsp oil for 4 whistles until completely soft; mash smooth.', durationMinutes: 20 },
      { task: 'Soak a lemon-sized ball of seedless tamarind (30g) in 150ml warm water for 15 minutes; squeeze to extract pulp, strain.', durationMinutes: 15 },
      { task: 'Peel 12 pearl onions (shallots), cut 1 drumstick into 5cm pieces, slice 1 carrot into rounds.', durationMinutes: 8 }
    ],
    ingredientPrepGuide: [
      { item: 'Toor Dal Mashing', technique: 'Mash the cooked toor dal vigorously with a wire whisk or wooden masher while hot until it forms a creamy, homogeneous suspension with zero visible hard lentils.' },
      { item: 'Tamarind Boiling', technique: 'Vegetables must be simmered in tamarind water and sambar powder first until tender before adding the cooked dal. This cooks out raw tamarind acidity.' }
    ],
    essentialIngredients: [
      { name: 'Toor dal (split pigeon peas)', prep: 'cooked and mashed smooth', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '3/4 cup dry' },
      { name: 'Seedless tamarind', prep: 'soaked & strained for pulp', amount: '30g', metric: '30g', imperial: '1 oz', common: 'lemon-sized ball' },
      { name: 'Shallots (pearl onions / sambar onions)', prep: 'peeled whole', amount: '12 onions', metric: '120g', imperial: '4.2 oz', common: '1 cup' },
      { name: 'Drumstick (Murungakkai)', prep: 'cut into 5cm pieces', amount: '1 drumstick', metric: '100g', imperial: '3.5 oz', common: '1 large' },
      { name: 'Carrot', prep: 'sliced into 1cm rounds', amount: '1 medium', metric: '80g', imperial: '2.8 oz', common: '1/2 cup' },
      { name: 'Tomato', prep: 'roughly chopped', amount: '1 medium', metric: '100g', imperial: '3.5 oz', common: '1/2 cup' },
      { name: 'Sambar powder', prep: 'freshly roasted & ground', amount: '2 tbsp', metric: '16g', imperial: '0.6 oz', common: '2 tbsp' },
      { name: 'Turmeric powder', prep: 'divided', amount: '1/2 tsp', metric: '1.5g', imperial: '0.05 oz', common: '1/2 tsp' },
      { name: 'Jaggery (cane sugar)', prep: 'to balance tamarind tang', amount: '1 tsp', metric: '5g', imperial: '0.18 oz', common: '1 tsp' },
      { name: 'Fine sea salt', prep: 'to taste', amount: '1.5 tsp', metric: '9g', imperial: '0.3 oz', common: '1.5 tsp' },
      { name: 'Desi Ghee (or sesame oil)', prep: 'for tempering (tadka)', amount: '1.5 tbsp', metric: '22g', imperial: '0.8 oz', common: '1.5 tbsp' },
      { name: 'Mustard seeds', prep: 'whole black', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Methi seeds (fenugreek)', prep: 'whole', amount: '1/4 tsp', metric: '1g', imperial: '0.03 oz', common: '1/4 tsp' },
      { name: 'Hing (asafoetida)', prep: 'powder', amount: '1/3 tsp', metric: '1.5g', imperial: '0.05 oz', common: '1/3 tsp' },
      { name: 'Dried red chilies', prep: 'broken in half', amount: '2 chilies', metric: '4g', imperial: '0.14 oz', common: '2 chilies' },
      { name: 'Fresh curry leaves', prep: 'fresh', amount: '15 leaves', metric: '2g', imperial: '0.07 oz', common: '2 sprigs' },
      { name: 'Fresh cilantro', prep: 'finely chopped', amount: '3 tbsp', metric: '15g', imperial: '0.5 oz', common: '3 tbsp' }
    ],
    optionalIngredients: [
      { name: 'Eggplant / Brinjal', prep: 'cut into cubes', amount: '1 small', metric: '60g', imperial: '2.1 oz', common: '1/2 cup', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'SIMMER VEGETABLES IN TAMARIND BROTH',
        whatYouNeed: ['Shallots', 'Drumstick pieces', 'Carrots', 'Chopped tomato', 'Strained tamarind water (300ml)', '2 tbsp sambar powder', '1/4 tsp turmeric', '1.5 tsp salt', '1 tsp jaggery', 'Pot'],
        description: 'In your main pot, combine shallots, drumstick pieces, carrots, tomato, tamarind water, 200ml extra water, sambar powder, turmeric, salt, and jaggery. Bring to a boil over medium-high heat. Cover and simmer for 10–12 minutes until drumsticks and shallots are tender and the raw, harsh taste of tamarind has evaporated.',
        howToDoIt: 'Cooking vegetables directly in tamarind broth infuses deep tangy flavor into the vegetables while the acid maintains the structural integrity of the drumstick so it does not collapse into mush.',
        heat: 'Medium Heat',
        heatDescription: 'Steady rolling boil under lid.',
        duration: 12,
        visualCues: 'Vegetables soften; drumsticks turn dark green and tender; liquid deepens into a fragrant, reddish-brown broth.',
        hear: 'Steady bubbling.',
        smell: 'Tangy tamarind, roasted coriander, and fenugreek.',
        textureCheck: 'Drumsticks are fork-tender; shallots are soft and translucent.',
        whatShouldThisLookLike: 'Tender vegetables simmering in an aromatic tangy broth.',
        tip: 'Never add cooked dal until vegetables are completely cooked; the thick dal slows down vegetable cooking.',
        commonMistake: 'Using boiling tamarind without jaggery — a small pinch of jaggery is essential to round off sharp acidity.',
        moveOnWhen: 'Drumsticks and carrots are tender when pierced with a fork.',
        quickInstructions: 'Boil shallots, drumsticks, carrots, tomato in tamarind water with sambar powder and salt for 10-12 mins.'
      },
      {
        step: 2,
        title: 'INCORPORATE MASHED TOOR DAL & SIMMER',
        whatYouNeed: ['Cooked mashed toor dal', 'Simmering vegetable broth', '100ml water if needed'],
        description: 'Pour the whisked, creamy cooked toor dal into the pot with the cooked vegetables. Stir well to combine. Bring to a gentle boil, then lower heat to medium-low. Simmer uncovered for 6–8 minutes, stirring occasionally, until the dal and tamarind broth harmonize into a cohesive, velvety stew.',
        howToDoIt: 'Simmering dal with the spiced tamarind reduction allows the lentil starches to hydrate and bind the liquid into a silky, spoon-coating emulsion.',
        heat: 'Medium-Low Heat',
        heatDescription: 'Gentle, steady simmer with soft bubbling.',
        duration: 8,
        visualCues: 'Sambar thickens into a golden-orange velvety stew with vegetables suspended evenly.',
        hear: 'Soft, quiet bubbling.',
        smell: 'Intense comforting aroma of traditional South Indian sambar.',
        textureCheck: 'Medium-thick, velvety, coats the back of a ladle.',
        whatShouldThisLookLike: 'Golden-orange, aromatic vegetable and lentil stew.',
        tip: 'If sambar is too thick, stir in 50ml hot water; it thickens significantly as it rests.',
        commonMistake: 'Violently boiling after adding dal, which can cause the dal to scorch to the bottom.',
        moveOnWhen: 'Dal is thoroughly incorporated and stew is velvety.',
        quickInstructions: 'Add mashed toor dal to vegetables; simmer gently for 6-8 mins on medium-low.'
      },
      {
        step: 3,
        title: 'THE SIZZLING GHEE TADKA TEMPERING',
        whatYouNeed: ['1.5 tbsp ghee', '1 tsp mustard seeds', '1/4 tsp methi seeds', '2 broken dried red chilies', '15 curry leaves', '1/3 tsp hing', 'Tadka ladle'],
        description: 'Heat 1.5 tbsp ghee in a small tadka pan over medium-high heat until hot. Add mustard seeds and let them crackle and pop vigorously. Add methi seeds, dried red chilies, and curry leaves; let sizzle for 15 seconds until chilies darken. Add hing powder, let it foam for 3 seconds, and immediately pour the entire sizzling tadka into the simmering sambar. Cover the pot with a lid immediately to trap the aromas.',
        howToDoIt: 'Pouring the piping hot ghee tadka directly into the simmering soup captures the volatile essential oils of hing and curry leaves inside the liquid before they can disperse into the room.',
        heat: 'Medium-High for 1 min, then Off',
        heatDescription: 'Vigorous sizzling and crackling.',
        duration: 2,
        visualCues: 'Mustard seeds dance and pop; curry leaves turn crisp; hing foams into golden bubbles.',
        hear: 'Loud crackling followed by a thunderous hiss as hot ghee hits the sambar.',
        smell: 'Extraordinary burst of roasted mustard, toasty fenugreek, and pungent hing.',
        textureCheck: 'Glossy droplets of ghee floating on the surface.',
        whatShouldThisLookLike: 'Vibrant ghee sheen crowning the golden sambar.',
        tip: 'Do not burn the methi (fenugreek) seeds — black methi turns intensely bitter. Add them right after mustard pops.',
        commonMistake: 'Leaving the pot open after adding tadka, allowing all aromatic steam to escape.',
        moveOnWhen: 'Tadka is poured and pot is covered for 2 minutes.',
        quickInstructions: 'Sputter mustard, methi, chilies, curry leaves, and hing in hot ghee; pour sizzling into sambar, cover immediately.'
      },
      {
        step: 4,
        title: 'CILANTRO GARNISH & REST',
        whatYouNeed: ['Resting sambar', '3 tbsp chopped fresh cilantro'],
        description: 'Remove lid, stir in fresh chopped cilantro gently, and let rest off heat for 5 minutes before serving.',
        howToDoIt: 'Resting allows the lentils and tamarind acids to meld into a balanced, harmonious flavor profile.',
        heat: 'Off',
        heatDescription: 'Resting.',
        duration: 5,
        visualCues: 'Glistening golden sambar with emerald flecks of cilantro and crispy curry leaves.',
        hear: 'None',
        smell: 'Fresh herbal cilantro and warm sambar spices.',
        textureCheck: 'Smooth, comforting, velvety soup.',
        whatShouldThisLookLike: 'Classic restaurant-grade South Indian Sambar.',
        tip: 'Sambar tastes even better the next day as flavors deepen.',
        commonMistake: 'Serving immediately without a 5-minute rest.',
        moveOnWhen: 'Sambar has rested 5 minutes.',
        quickInstructions: 'Stir in fresh cilantro; rest covered for 5 mins off heat.'
      }
    ],
    commonMistakes: [
      { mistake: 'Sambar is unpleasantly sour.', remedy: 'Too much tamarind was used. Add 1/2 teaspoon jaggery and a splash of mashed dal to balance the acidity.' },
      { mistake: 'Dal separated from watery broth.', remedy: 'Toor dal was not mashed smooth before adding. Always whisk the cooked dal into a puree.' }
    ],
    troubleshooting: [
      {
        problem: 'Sambar tastes bitter',
        whatHappened: 'Methi (fenugreek) seeds burnt in the tadka.',
        whyItHappened: 'Ghee was too hot when methi seeds were added.',
        whatToDoNow: 'Add a small pinch of jaggery and an extra splash of ghee to mask the bitterness.',
        howToPrevent: 'Add methi seeds after mustard pops and fry for no more than 10 seconds before pouring.'
      }
    ],
    substitutions: [
      { original: 'Shallots (sambar onions)', substitute: 'Diced red onion', notes: 'Shallots offer delicate sweetness; regular red onion works well if diced small.' },
      { original: 'Desi Ghee', substitute: 'Cold-pressed sesame oil (gingelly oil)', notes: 'Authentic vegan option with earthy aroma.' }
    ],
    safetyNotes: [
      'Hot ghee tadka can splatter when curry leaves are added; keep face clear.'
    ],
    servingGuide: {
      restingTime: '5 minutes.',
      garnishing: 'Sprinkle fresh coriander leaves and a drizzle of melted ghee.',
      plating: 'Ladle into small stainless steel bowls (katoris) or pour over steaming rice.',
      temperature: 'Piping hot.',
      accompaniments: 'Idli, Masala Dosa, Medu Vada, or Steamed Sona Masoori Rice with potato fry and papadum.'
    }
  },

  // 24. RASAM
  {
    id: 'rasam',
    name: 'Tamil Thakkali Rasam (Tomato Pepper Broth)',
    cuisine: 'Indian',
    region: 'South Indian (Tamil Nadu)',
    servings: 4,
    prepTime: 15,
    cookTime: 15,
    difficulty: 'Easy',
    overview: {
      summary: 'Revered South Indian digestive elixir and soup: ripe tomatoes crushed by hand, simmered in a tart tamarind extraction with freshly pounded black pepper, cumin seeds, garlic, and rasam podi, finished with a sizzling ghee-fried hing and curry leaf tempering.',
      appearance: 'Clear, fiery ruby-amber aromatic broth speckled with crushed black peppercorns, roasted cumin, floating tomato pearls, and emerald cilantro leaves.',
      texture: 'Light, thin, clean, drinkable broth that warms the chest and stimulates the palate.',
      flavor: 'Intensely bright, tangy, peppery, garlicky, and warming with savory cumin and sharp tamarind.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Eeya Chombu (traditional tin vessel) or heavy stainless pot', purpose: 'Traditional tin vessels impart a sweet, unique tin-seasoned flavor; stainless steel saucepan works wonderfully.' },
      { name: 'Mortar and pestle', purpose: 'For coarsely crushing garlic, black pepper, and cumin.' },
      { name: 'Small tadka pan', purpose: 'For the finishing ghee tempering.' }
    ],
    beforeYouStart: [
      { task: 'Soak small marble-sized tamarind (15g) in 100ml warm water for 10 minutes; extract pulp and strain.', durationMinutes: 10 },
      { task: 'Coarsely crush 1 tbsp whole black peppercorns and 1 tbsp cumin seeds in a mortar (do not make fine powder).', durationMinutes: 3 },
      { task: 'Crush 5 unpeeled garlic cloves lightly with the flat of a knife.', durationMinutes: 2 }
    ],
    ingredientPrepGuide: [
      { item: 'Hand-Crushing Tomatoes', technique: 'Crush ripe, juicy tomatoes thoroughly with your fingers into the tamarind water. Hand-crushing releases fresh cellular juices and pectin that a knife or blender shears into paste.' },
      { item: 'The One-Foam Rule (Oru Kodhi)', technique: 'Rasam is NEVER boiled! Heat gently until it froths and swells with a ring of foam around the edges with gentle steam in the center. The second it begins to foam, turn off the heat immediately. Boiling destroys the delicate volatile pepper-cumin aromas and turns rasam bitter.' }
    ],
    essentialIngredients: [
      { name: 'Ripe red tomatoes', prep: 'crushed thoroughly by hand', amount: '3 medium', metric: '300g', imperial: '10.5 oz', common: '3 tomatoes' },
      { name: 'Tamarind pulp (strained)', prep: 'from marble-sized ball', amount: '1 tbsp', metric: '15ml', imperial: '0.5 fl oz', common: '1 tbsp' },
      { name: 'Whole black peppercorns', prep: 'freshly coarsely crushed', amount: '1 tbsp', metric: '9g', imperial: '0.3 oz', common: '1 tbsp' },
      { name: 'Cumin seeds (jeera)', prep: 'freshly coarsely crushed', amount: '1 tbsp', metric: '9g', imperial: '0.3 oz', common: '1 tbsp' },
      { name: 'Garlic cloves', prep: 'lightly crushed with skins on', amount: '5 cloves', metric: '15g', imperial: '0.5 oz', common: '5 cloves' },
      { name: 'Turmeric powder', prep: 'for bright color', amount: '1/2 tsp', metric: '1.5g', imperial: '0.05 oz', common: '1/2 tsp' },
      { name: 'Hing (asafoetida)', prep: 'divided', amount: '1/3 tsp', metric: '1.5g', imperial: '0.05 oz', common: '1/3 tsp' },
      { name: 'Fine sea salt', prep: 'to taste', amount: '1.5 tsp', metric: '9g', imperial: '0.3 oz', common: '1.5 tsp' },
      { name: 'Cooked toor dal water (paruppu jalam)', prep: 'clear water from boiled dal (optional)', amount: '100ml', metric: '100ml', imperial: '3.4 fl oz', common: '1/2 cup' },
      { name: 'Water', prep: 'clean water', amount: '500ml', metric: '500ml', imperial: '17 fl oz', common: '2 cups' },
      { name: 'Desi Ghee', prep: 'for tempering', amount: '1 tbsp', metric: '15g', imperial: '0.5 oz', common: '1 tbsp' },
      { name: 'Mustard seeds', prep: 'whole black', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Dried red chili', prep: 'broken in two', amount: '1 chili', metric: '2g', imperial: '0.07 oz', common: '1 chili' },
      { name: 'Fresh curry leaves', prep: 'torn', amount: '15 leaves', metric: '2g', imperial: '0.07 oz', common: '2 sprigs' },
      { name: 'Fresh cilantro stems & leaves', prep: 'finely chopped', amount: '3 tbsp', metric: '15g', imperial: '0.5 oz', common: '3 tbsp' }
    ],
    optionalIngredients: [
      { name: 'Jaggery pinch', prep: 'to balance acid', amount: '1/4 tsp', metric: '1g', imperial: '0.03 oz', common: 'pinch', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'SIMMER TOMATO & TAMARIND BASE',
        whatYouNeed: ['3 crushed tomatoes', '1 tbsp tamarind pulp', '500ml water', '1/2 tsp turmeric', '1.5 tsp salt', '1/4 tsp hing', 'Medium pot'],
        description: 'In your pot, combine hand-crushed tomatoes, tamarind pulp, 500ml water, turmeric, salt, and half the hing. Bring to a boil over medium heat and simmer for 6–7 minutes until the raw edge of tamarind cooks off and tomato skins soften completely.',
        howToDoIt: 'Simmering raw tamarind and tomato first eliminates their harsh astringent bite before delicate ground spices are introduced.',
        heat: 'Medium Heat',
        heatDescription: 'Gentle bubbling.',
        duration: 7,
        visualCues: 'Broth turns a clear translucent ruby-gold with crushed tomato pulp floating throughout.',
        hear: 'Soft bubbling.',
        smell: 'Zesty tomato and tangy tamarind.',
        textureCheck: 'Thin, clear liquid broth.',
        whatShouldThisLookLike: 'Simmering golden-red tomato broth.',
        tip: 'Do not add crushed pepper and garlic in this stage; they will turn bitter if boiled.',
        commonMistake: 'Using tomato paste instead of fresh ripe tomatoes — fresh tomatoes provide critical acidity and freshness.',
        moveOnWhen: 'Tomatoes are soft and raw tamarind smell is gone (approx 7 mins).',
        quickInstructions: 'Simmer crushed tomatoes, tamarind, water, turmeric, salt, and hing for 7 mins until tomatoes soften.'
      },
      {
        step: 2,
        title: 'ADD FRESH POUNDED SPICES & DAL WATER',
        whatYouNeed: ['Crushed pepper-cumin powder', '5 crushed garlic cloves', '100ml dal water', 'Chopped cilantro stems'],
        description: 'Stir in the freshly crushed black pepper and cumin mixture, crushed garlic cloves, cilantro stems, and 100ml cooked dal water (or plain water). Stir well and reduce heat to medium-low.',
        howToDoIt: 'Adding crushed garlic and pepper towards the end preserves their punchy volatile oils (piperine and allicin), creating the signature medicinal soothing warmth of rasam.',
        heat: 'Medium-Low Heat',
        heatDescription: 'Gentle warming.',
        duration: 2,
        visualCues: 'Broth is flecked with black pepper specks and crushed garlic cloves.',
        hear: 'Soft murmur.',
        smell: 'Explosion of sharp black pepper, earthy cumin, and pungent garlic.',
        textureCheck: 'Thin, fragrant soup broth.',
        whatShouldThisLookLike: 'Aromatic ruby broth speckled with coarse spices.',
        tip: 'Always include the tender cilantro stems — they hold 10 times more flavor than the leaves alone.',
        commonMistake: 'Fine-grinding the pepper and cumin into powder — coarse pounding gives texture and clarity to the broth.',
        moveOnWhen: 'Spices are stirred in and heat is on low-medium.',
        quickInstructions: 'Stir in crushed pepper-cumin, crushed garlic, cilantro stems, and dal water.'
      },
      {
        step: 3,
        title: 'THE SACRED FROTH (DO NOT BOIL!)',
        whatYouNeed: ['Warming rasam pot'],
        description: 'Watch the pot closely over medium-low heat. In 3–4 minutes, a thick, creamy pale-yellow froth will begin forming around the edges of the pot and gently creep inward toward the center. As soon as the entire surface is covered in pale foam and the center swells (JUST before a boil breaks), TURN OFF THE HEAT IMMEDIATELY.',
        howToDoIt: 'This is the most critical rule of South Indian cooking: boiling rasam causes the volatile aromatics to evaporate and splits the broth, leaving it sour and bitter. Catching it at the foam stage preserves its aromatic purity.',
        heat: 'Medium-Low Heat then Turn Off',
        heatDescription: 'Gentle warming until frothing.',
        duration: 4,
        visualCues: 'A delicate creamy foam ring gathers at the edges and swells across the surface.',
        hear: 'Hissing whisper just as foam peaks.',
        smell: 'Incredible peppery garlic steam filling the kitchen.',
        textureCheck: 'Frothy surface over thin hot broth.',
        whatShouldThisLookLike: 'Surface covered in pale, frothy foam with gentle steam rising.',
        tip: 'Never walk away from the stove during this step; rasam will boil in seconds if left unattended.',
        commonMistake: 'Letting the rasam come to a rolling boil — this ruins the flavor completely.',
        moveOnWhen: 'Surface is covered in foam; turn off burner immediately.',
        quickInstructions: 'Heat gently until surface froths completely (do not boil!); turn off heat immediately.'
      },
      {
        step: 4,
        title: 'GHEE TADKA TEMPERING & COVER',
        whatYouNeed: ['1 tbsp ghee', '1 tsp mustard seeds', '1 dried red chili', '15 curry leaves', 'Pinch of hing', 'Fresh cilantro leaves', 'Tadka pan'],
        description: 'Heat 1 tbsp ghee in a tadka pan. Add mustard seeds and let pop. Add dried red chili, curry leaves, and a pinch of hing; sizzle for 10 seconds. Pour the sizzling ghee directly into the frothy rasam. Scatter fresh cilantro leaves on top. Cover immediately with a tight lid and let steep for 3 minutes before serving.',
        howToDoIt: 'Covering the pot locks the fragrant ghee-fried curry leaf and mustard vapor into the hot broth.',
        heat: 'Medium-High for 1 min, then Off',
        heatDescription: 'Sizzling tadka.',
        duration: 2,
        visualCues: 'Crisp popping mustard and blistering curry leaves floating on glistening ghee.',
        hear: 'Loud sizzle as tadka hits frothy soup.',
        smell: 'Fragrant ghee, curry leaves, and toasted mustard.',
        textureCheck: 'Glistening golden droplets atop clear broth.',
        whatShouldThisLookLike: 'Beautiful ruby-red broth adorned with green herbs and golden ghee.',
        tip: 'Serve in cups as a soothing soup or ladle over hot rice.',
        commonMistake: 'Leaving the pot uncovered, allowing all aromatic steam to dissipate.',
        moveOnWhen: 'Tadka is poured and pot is covered for 3 minutes.',
        quickInstructions: 'Sputter mustard, chili, curry leaves, and hing in ghee; pour into rasam, top with cilantro, cover 3 mins.'
      }
    ],
    commonMistakes: [
      { mistake: 'Rasam tastes bitter and flat.', remedy: 'You let it boil vigorously. Rasam must be removed from heat the moment foam covers the surface.' },
      { mistake: 'Rasam is too sour.', remedy: 'Too much tamarind. Stir in 100ml hot water and a pinch of jaggery.' }
    ],
    troubleshooting: [
      {
        problem: 'Rasam accidentally came to a rolling boil',
        whatHappened: 'Heat was left on too long.',
        whyItHappened: 'Missed the foam stage.',
        whatToDoNow: 'Immediately turn off heat, stir in 3 tablespoons of fresh cold water, a pinch of freshly crushed black pepper, and fresh cilantro to revive brightness.',
        howToPrevent: 'Stand right by the stove and turn heat off the second foam covers the center.'
      }
    ],
    substitutions: [
      { original: 'Cooked toor dal water', substitute: 'Plain water with 1/4 tsp cornstarch or extra crushed tomato', notes: 'Dal water adds subtle body; plain water makes a lighter clear broth (Saaru).' }
    ],
    safetyNotes: [
      'Ghee tadka pops vigorously; keep a lid handy to shield against splatters.'
    ],
    servingGuide: {
      restingTime: '3 minutes covered.',
      garnishing: 'Garnish with fresh cilantro leaves and floating fried curry leaves.',
      plating: 'Serve in small brass or ceramic tumblers to sip hot, or ladle over steamed rice.',
      temperature: 'Piping hot.',
      accompaniments: 'Steamed rice with potato fry (Urulaikizhangu Varuval), appalam (papad), and a side of plain yogurt.'
    }
  },

  // 25. AVIAL
  {
    id: 'avial',
    name: 'Kerala Traditional Sadya Avial',
    cuisine: 'Indian',
    region: 'South Indian (Kerala / Tamil Nadu)',
    servings: 6,
    prepTime: 25,
    cookTime: 20,
    difficulty: 'Medium',
    overview: {
      summary: 'The jewel of the traditional Kerala Onam Sadya feast: a medley of indigenous garden vegetables (drumstick, raw plantain, elephant yam, snake gourd, carrots, beans) cooked tender in turmeric-water, gently folded into a thick coarsely crushed coconut, cumin, and green chili paste, balanced with sour curd, and finished with a lavish swirl of raw virgin coconut oil and fresh bruised curry leaves.',
      appearance: 'Vibrant, thick, pastel pale-yellow vegetable medley, studded with whole green curry leaves and glistening with aromatic raw coconut oil.',
      texture: 'Tender-crisp vegetables that hold their baton shape, coated in a thick, coarse, creamy coconut-yogurt paste with zero runny sauce.',
      flavor: 'Earthy, subtly tangy, sweet from fresh coconut, with gentle green chili warmth and the unmistakable fragrance of raw cold-pressed coconut oil.',
      restingTimeMinutes: 5
    },
    equipment: [
      { name: 'Uruli (traditional shallow bronze pan) or wide heavy kadhai', purpose: 'Allows vegetables to cook in a single shallow layer without breaking or turning into mush.' },
      { name: 'Mixer jar / food processor', purpose: 'For coarsely pulsing coconut, cumin, and chilies without adding water.' }
    ],
    beforeYouStart: [
      { task: 'Cut all vegetables into uniform 5cm (2 inch) long by 1cm thick batons (uniform size ensures all vegetables cook evenly).', durationMinutes: 15 },
      { task: 'Grate 200g fresh coconut.', durationMinutes: 8 },
      { task: 'Coarsely pulse coconut with 1 tsp cumin seeds and 3 green chilies in a blender without water (keep it coarse, not a smooth paste).', durationMinutes: 3 }
    ],
    ingredientPrepGuide: [
      { item: 'Vegetable Baton Cutting', technique: 'Cut plantain, yam, carrots, beans, and drumsticks into matching 5cm long batons. Elephant foot yam (chena) and raw banana (nendrakai) take longest, so add them to the pot 3 minutes before quick-cooking beans and drumsticks.' },
      { item: 'Raw Coconut Oil & Curry Leaves (Pacha Velichenna)', technique: 'Pour raw cold-pressed coconut oil directly over the hot avial along with bruised fresh curry leaves off heat, and cover immediately. Never cook or fry this finishing oil — its raw unheated aroma defines authentic Kerala cuisine.' }
    ],
    essentialIngredients: [
      { name: 'Mixed Vegetables (baton cut)', prep: 'yam, raw banana, drumstick, carrot, green beans, snake gourd', amount: '600g', metric: '600g', imperial: '1.3 lbs', common: '4 cups batons' },
      { name: 'Turmeric powder', prep: 'for gentle yellow tint', amount: '1/2 tsp', metric: '1.5g', imperial: '0.05 oz', common: '1/2 tsp' },
      { name: 'Water for cooking vegetables', prep: 'minimal amount', amount: '150ml', metric: '150ml', imperial: '5 fl oz', common: '2/3 cup' },
      { name: 'Freshly grated coconut', prep: 'fresh white flesh', amount: '200g', metric: '200g', imperial: '7 oz', common: '2 cups' },
      { name: 'Cumin seeds (jeera)', prep: 'pulsed with coconut', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Green chilies', prep: 'pulsed with coconut', amount: '3 chilies', metric: '15g', imperial: '0.5 oz', common: '3 chilies' },
      { name: 'Sour plain yogurt (curd)', prep: 'whisked smooth', amount: '80g', metric: '80g', imperial: '2.8 oz', common: '1/3 cup' },
      { name: 'Cold-pressed virgin coconut oil', prep: 'raw for finishing', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp' },
      { name: 'Fresh curry leaves', prep: 'bruised between fingers', amount: '20 leaves', metric: '3g', imperial: '0.1 oz', common: '3 sprigs' },
      { name: 'Fine sea salt', prep: 'to taste', amount: '1.5 tsp', metric: '9g', imperial: '0.3 oz', common: '1.5 tsp' }
    ],
    optionalIngredients: [
      { name: 'Raw green mango', prep: 'sliced batons (can replace yogurt for traditional tartness)', amount: '50g', metric: '50g', imperial: '1.8 oz', common: '1/4 cup', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'COOK VEGETABLES WITH MINIMAL WATER',
        whatYouNeed: ['600g vegetable batons', '150ml water', '1/2 tsp turmeric', '1.5 tsp salt', 'Uruli or wide pan'],
        description: 'Place the harder vegetables (yam, raw banana) in the pan with 150ml water, turmeric, and salt. Cover and cook on medium heat for 4 minutes. Add the remaining vegetables (drumsticks, carrots, beans, snake gourd). Cover and simmer for 8–10 minutes until vegetables are tender-crisp. Most of the water should evaporate.',
        howToDoIt: 'Avial is a dry-to-thick dish; using minimal water allows the vegetables to steam in their own juices while retaining their distinct shape and crunch.',
        heat: 'Medium Heat',
        heatDescription: 'Gentle steam simmering under lid.',
        duration: 12,
        visualCues: 'Vegetables turn pale-yellow from turmeric, look glossy and tender, but hold their crisp baton shapes without breaking.',
        hear: 'Gentle hiss of steam.',
        smell: 'Sweet, earthy garden vegetable aroma with turmeric.',
        textureCheck: 'Fork-tender with a slight crisp snap.',
        whatShouldThisLookLike: 'Tender, vibrant vegetable batons with almost no pooling water at the bottom.',
        tip: 'Do not stir violently with a spoon; gently shake the pan or fold with a flat spatula to avoid breaking the drumsticks and plantains.',
        commonMistake: 'Adding 500ml water and boiling — vegetables will turn into baby-food mush.',
        moveOnWhen: 'Vegetables are tender and water has evaporated to a tablespoon.',
        quickInstructions: 'Cook hard vegetables with 150ml water, turmeric, and salt 4 mins; add soft vegetables, steam 8 mins until tender.'
      },
      {
        step: 2,
        title: 'FOLD IN COARSE COCONUT-CUMIN PASTE',
        whatYouNeed: ['Pulsed coconut-cumin-chili mixture', 'Cooked vegetables in pan'],
        description: 'Add the coarsely pulsed coconut-cumin-chili paste on top of the cooked vegetables. Do not stir yet! Cover with lid and let it steam on lowest heat for 2 minutes so the raw green chili and cumin heat softens. Then, using a flat wooden spatula, gently fold the coconut into the vegetables from the bottom up.',
        howToDoIt: 'Steaming the coconut paste on top before folding takes the raw edge off the green chilies and cumin without cooking out the fresh sweetness of coconut.',
        heat: 'Lowest Heat',
        heatDescription: 'Gentle steaming warmth.',
        duration: 3,
        visualCues: 'Pastel pale-yellow coconut paste clings tightly to every vegetable baton.',
        hear: 'Quiet whisper of steam.',
        smell: 'Fragrant sweet coconut, earthy cumin, and green chili.',
        textureCheck: 'Thick, chunky vegetable mixture coated in coconut.',
        whatShouldThisLookLike: 'Thick, creamy, pastel-yellow vegetable medley.',
        tip: 'Never grind the coconut into a watery puree; it must remain coarse and textured (thari-thari).',
        commonMistake: 'Over-cooking the coconut — once coconut is added, cook for no more than 3 minutes.',
        moveOnWhen: 'Coconut paste is steamed and gently folded into vegetables.',
        quickInstructions: 'Spread coarse coconut paste over vegetables, steam covered 2 mins; fold gently.'
      },
      {
        step: 3,
        title: 'STIR IN SOUR YOGURT',
        whatYouNeed: ['80g whisked sour yogurt (curd)'],
        description: 'Remove the pan from the heat. Whisk the sour curd until smooth, then pour it over the warm vegetable mixture. Gently fold with your spatula until evenly distributed throughout the dish. Do not cook on flame after adding yogurt.',
        howToDoIt: 'Adding yogurt off the flame prevents the dairy proteins from curdling and splitting into watery whey, keeping the avial velvety and rich.',
        heat: 'Off',
        heatDescription: 'Residual heat only.',
        duration: 2,
        visualCues: 'The sauce takes on a velvety, pale creamy finish.',
        hear: 'None',
        smell: 'Tangy dairy aroma balancing sweet coconut.',
        textureCheck: 'Thick, luxurious, clinging sauce.',
        whatShouldThisLookLike: 'Lustrous, pale-yellow vegetable medley bound by creamy coconut-yogurt.',
        tip: 'If using raw green mango, cook it with the vegetables in Step 1 and reduce yogurt to 2 tablespoons.',
        commonMistake: 'Boiling yogurt on high flame — it will curdle into tiny white curd specks.',
        moveOnWhen: 'Yogurt is smoothly folded in off heat.',
        quickInstructions: 'Remove pan from heat; gently fold in whisked sour yogurt.'
      },
      {
        step: 4,
        title: 'THE FINISHING COCONUT OIL & CURRY LEAF INFUSION',
        whatYouNeed: ['2 tbsp raw cold-pressed coconut oil', '20 fresh curry leaves (bruised)'],
        description: 'Bruise fresh curry leaves between your palms to rupture their oil glands and scatter them over the warm avial. Drizzle 2 tablespoons of pure, raw cold-pressed virgin coconut oil all over the top. Cover immediately with a tight lid. Let rest completely undisturbed for 5 minutes before serving.',
        howToDoIt: 'Trapping raw coconut oil and bruised curry leaves in the residual heat creates a steam-condensation chamber that infuses the entire dish with the legendary aroma of Kerala Sadya.',
        heat: 'Off',
        heatDescription: 'Aromatic infusion under lid.',
        duration: 5,
        visualCues: 'Raw coconut oil glistens like liquid gold over the pastel vegetables and emerald curry leaves.',
        hear: 'None',
        smell: 'The magnificent, unmistakable aroma of authentic Kerala Avial.',
        textureCheck: 'Rich, velvety, glossy vegetable batons.',
        whatShouldThisLookLike: 'Glistening, fragrant, restaurant-quality Sadya Avial.',
        tip: 'Use authentic cold-pressed virgin coconut oil for the true traditional flavor.',
        commonMistake: 'Tempering mustard seeds — traditional Sadya Avial NEVER has mustard seeds or fried tadka; it is finished strictly with raw oil and leaves.',
        moveOnWhen: 'Avial has rested covered for 5 minutes.',
        quickInstructions: 'Scatter bruised curry leaves, drizzle raw coconut oil, cover tightly, and rest 5 minutes.'
      }
    ],
    commonMistakes: [
      { mistake: 'Avial turned into mushy baby food.', remedy: 'You cut vegetables too small, added too much water, or stirred aggressively. Cut into 5cm batons and fold gently.' },
      { mistake: 'Yogurt split into watery liquid.', remedy: 'You boiled the dish after adding yogurt. Always fold yogurt off the flame.' }
    ],
    troubleshooting: [
      {
        problem: 'Avial is too watery and thin',
        whatHappened: 'Vegetables released too much moisture or too much water was added during boiling.',
        whyItHappened: 'Did not evaporate vegetable water before adding coconut.',
        whatToDoNow: 'Cook uncovered on medium heat for 2 minutes before adding yogurt to evaporate excess liquid, or stir in 1 tbsp roasted rice flour.',
        howToPrevent: 'Use only 150ml water for 600g of vegetables; they produce their own steam.'
      }
    ],
    substitutions: [
      { original: 'Elephant Foot Yam & Plantain', substitute: 'Zucchini, chayote squash, green beans, carrots, and potatoes', notes: 'Widely accessible vegetables that make a delicious modern avial.' },
      { original: 'Sour Curd (Yogurt)', substitute: 'Raw green mango slices or tamarind paste', notes: 'Traditional vegan temple version (Mango Avial).' }
    ],
    safetyNotes: [
      'Elephant foot yam can cause skin itching when raw; grease your hands with oil before peeling and slicing.'
    ],
    servingGuide: {
      restingTime: '5 minutes covered.',
      garnishing: 'Glistening raw coconut oil and fresh curry leaves.',
      plating: 'Serve on the top-left quarter of a fresh banana leaf in a traditional Onam Sadya layout.',
      temperature: 'Warm or room temperature.',
      accompaniments: 'Kerala Matta Rice, Parippu Curry with Ghee, Sambar, Rasam, and crunchy Papadum.'
    }
  },

  // 26. THORAN
  {
    id: 'thoran',
    name: 'Kerala Cabbage & Carrot Thoran (Coconut Stir-Fry)',
    cuisine: 'Indian',
    region: 'South Indian (Kerala)',
    servings: 4,
    prepTime: 15,
    cookTime: 10,
    difficulty: 'Very Easy',
    overview: {
      summary: 'Crisp, colorful, everyday Kerala dry vegetable stir-fry: finely shredded cabbage and carrots flash-cooked with mustard seeds, urad dal, dried red chilies, and curry leaves, tossed with fresh coarsely crushed coconut, cumin, garlic, and green chilies.',
      appearance: 'Vibrant, cheerful confetti of tender-crisp green cabbage, orange carrots, and white grated coconut, speckled with black mustard seeds and curry leaves.',
      texture: 'Pleasantly crunchy and tender-crisp with sweet, juicy coconut bursts; completely dry with zero liquid.',
      flavor: 'Fresh, clean, nutty from coconut and toasted lentils, with gentle heat from green chilies and earthy cumin.',
      restingTimeMinutes: 1
    },
    equipment: [
      { name: 'Wide heavy kadhai or skillet', purpose: 'Allows high-surface area flash-cooking so cabbage retains its crisp crunch without steaming.' }
    ],
    beforeYouStart: [
      { task: 'Finely shred 300g green cabbage and grate 1 large carrot into fine shreds.', durationMinutes: 8 },
      { task: 'Coarsely crush 100g grated coconut with 1/2 tsp cumin, 2 green chilies, and 2 garlic cloves with a pestle or blender pulse.', durationMinutes: 3 }
    ],
    ingredientPrepGuide: [
      { item: 'Dry Stir-Fry Rule', technique: 'Never add water! Cabbage contains over 90% water. Cooking covered on medium heat for 3–4 minutes releases just enough internal steam to cook the shreds tender while maintaining a crunchy bite.' }
    ],
    essentialIngredients: [
      { name: 'Green cabbage', prep: 'finely shredded', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '3 cups shredded' },
      { name: 'Carrot', prep: 'grated', amount: '1 large', metric: '100g', imperial: '3.5 oz', common: '1 cup' },
      { name: 'Freshly grated coconut', prep: 'fresh white', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '1 cup' },
      { name: 'Cumin seeds (jeera)', prep: 'crushed with coconut', amount: '1/2 tsp', metric: '1.5g', imperial: '0.05 oz', common: '1/2 tsp' },
      { name: 'Green chilies', prep: 'crushed with coconut', amount: '2 chilies', metric: '10g', imperial: '0.35 oz', common: '2 chilies' },
      { name: 'Garlic cloves', prep: 'crushed with coconut', amount: '2 cloves', metric: '6g', imperial: '0.2 oz', common: '2 cloves' },
      { name: 'Turmeric powder', prep: 'for bright yellow color', amount: '1/4 tsp', metric: '1g', imperial: '0.03 oz', common: '1/4 tsp' },
      { name: 'Coconut oil', prep: 'for sautéing', amount: '1.5 tbsp', metric: '22ml', imperial: '0.75 fl oz', common: '1.5 tbsp' },
      { name: 'Mustard seeds', prep: 'whole black', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Urad dal (split black gram)', prep: 'for crunchy bite', amount: '1 tsp', metric: '4g', imperial: '0.14 oz', common: '1 tsp' },
      { name: 'Dried red chili', prep: 'broken in pieces', amount: '1 chili', metric: '2g', imperial: '0.07 oz', common: '1 chili' },
      { name: 'Fresh curry leaves', prep: 'torn', amount: '15 leaves', metric: '2g', imperial: '0.07 oz', common: '2 sprigs' },
      { name: 'Fine sea salt', prep: 'to taste', amount: '1 tsp', metric: '6g', imperial: '0.2 oz', common: '1 tsp' }
    ],
    optionalIngredients: [
      { name: 'Shallots', prep: 'thinly sliced for extra sweetness', amount: '4 shallots', metric: '40g', imperial: '1.4 oz', common: '1/4 cup', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'SPUTTER MUSTARD, LENTILS & AROMATICS',
        whatYouNeed: ['1.5 tbsp coconut oil', '1 tsp mustard seeds', '1 tsp urad dal', '1 broken red chili', '15 curry leaves', 'Heavy kadhai'],
        description: 'Heat 1.5 tbsp coconut oil in your kadhai over medium heat. Add mustard seeds and let them crackle and pop. Add urad dal and sauté for 30 seconds until pale golden and nutty. Add broken red chili and curry leaves, letting them sizzle for 15 seconds.',
        howToDoIt: 'Toasting urad dal until golden creates crunchy toasted lentil nuggets that provide textural contrast against the tender cabbage.',
        heat: 'Medium Heat',
        heatDescription: 'Lively sizzle.',
        duration: 2,
        visualCues: 'Mustard seeds pop; urad dal turns from white to pale golden-brown; curry leaves crisp.',
        hear: 'Lively crackling and popping.',
        smell: 'Aromatic toasted coconut oil, nutty dal, and citrusy curry leaves.',
        textureCheck: 'Crisp dal and aromatics in hot oil.',
        whatShouldThisLookLike: 'Golden lentils and dancing mustard seeds in clear coconut oil.',
        tip: 'Watch the urad dal closely; it can turn from golden to burnt brown in 10 seconds.',
        commonMistake: 'Burning the lentils over high heat.',
        moveOnWhen: 'Urad dal is golden and mustard seeds have popped.',
        quickInstructions: 'Sputter mustard seeds, fry urad dal until golden, add red chili and curry leaves.'
      },
      {
        step: 2,
        title: 'FLASH-COOK SHREDDED CABBAGE & CARROTS',
        whatYouNeed: ['300g shredded cabbage', '100g grated carrot', '1/4 tsp turmeric', '1 tsp salt'],
        description: 'Add the shredded cabbage and carrots to the pan. Sprinkle turmeric powder and salt. Toss vigorously with a spatula for 2 minutes to coat in the seasoned oil. Cover with a lid, reduce heat to medium-low, and cook for 3 to 4 minutes only. Do not add water.',
        howToDoIt: 'Trapping the internal moisture under the lid creates steam that flash-cooks the thin shreds to tender-crispness in 3 minutes without water.',
        heat: 'Medium-Low Heat',
        heatDescription: 'Gentle enclosed steam.',
        duration: 5,
        visualCues: 'Cabbage wilts slightly, turning vibrant yellow-green speckled with orange carrots, while remaining crisp.',
        hear: 'Gentle sizzle under lid.',
        smell: 'Sweet, clean cooked cabbage and turmeric.',
        textureCheck: 'Tender-crisp with a firm crunch.',
        whatShouldThisLookLike: 'Bright yellow and orange shredded vegetables in the pan.',
        tip: 'Never cook cabbage until it turns limp and watery; it must have a crisp bite.',
        commonMistake: 'Pouring water into the pan — water turns cabbage soggy, sulfurous, and wet.',
        moveOnWhen: 'Cabbage is tender-crisp after 3-4 minutes.',
        quickInstructions: 'Toss cabbage, carrots, turmeric, salt in oil 2 mins; cover and cook on medium-low 3-4 mins (no water).'
      },
      {
        step: 3,
        title: 'TOSS WITH COARSE COCONUT MIXTURE',
        whatYouNeed: ['Pulsed coconut-cumin-chili-garlic mixture'],
        description: 'Remove the lid. Make a small well in the center of the cabbage. Add the coarsely crushed coconut mixture into the center. Fold the hot cabbage over the coconut and let rest for 1 minute on low heat. Then toss everything together over medium-high heat for 1–2 minutes until completely dry, vibrant, and hot. Turn off heat.',
        howToDoIt: 'Burying the coconut briefly in the center takes the raw edge off garlic and cumin, then flash-tossing over high heat drives off any surface moisture so the thoran remains completely dry.',
        heat: 'Medium-High Heat for 2 mins, then Off',
        heatDescription: 'Dry stir-frying.',
        duration: 3,
        visualCues: 'Colorful mosaic of shredded vegetables flecked with white coconut; completely dry pan bottom with zero liquid.',
        hear: 'Soft rustle of vegetables stir-frying.',
        smell: 'Fragrant fresh coconut, garlic, and cumin.',
        textureCheck: 'Crisp, crunchy, and dry.',
        whatShouldThisLookLike: 'Vibrant, dry, colorful Kerala Thoran.',
        tip: 'Serve hot or at room temperature.',
        commonMistake: 'Cooking coconut for too long, which makes it lose its sweet fresh juiciness.',
        moveOnWhen: 'Thoran is hot, completely dry, and tossed evenly.',
        quickInstructions: 'Bury coconut mixture in center 1 min; toss over medium-high 2 mins until dry and hot.'
      }
    ],
    commonMistakes: [
      { mistake: 'Thoran became watery and soggy.', remedy: 'You added water or salted the cabbage hours ahead. Never add water and cook on medium heat.' },
      { mistake: 'Cabbage smells sulfurous and overcooked.', remedy: 'Cooked too long. Total cooking time for cabbage thoran should be under 8 minutes.' }
    ],
    troubleshooting: [
      {
        problem: 'Liquid pooled at the bottom of the pan',
        whatHappened: 'Cabbage released excess moisture.',
        whyItHappened: 'Pan was covered too long on low heat.',
        whatToDoNow: 'Remove lid, increase heat to high, and toss continuously for 90 seconds to rapidly evaporate water.',
        howToPrevent: 'Keep lid on for maximum 3–4 minutes, then finish uncovered.'
      }
    ],
    substitutions: [
      { original: 'Cabbage & Carrot', substitute: 'Green beans, beetroots, spinach (Cheera Thoran), or raw papaya', notes: 'Almost any firm vegetable can be prepared using this exact authentic Thoran technique.' }
    ],
    safetyNotes: [
      'Mustard seeds pop out of hot oil; use a splatter screen or tilt lid momentarily.'
    ],
    servingGuide: {
      restingTime: '1 minute.',
      garnishing: 'Showcase bright confetti colors.',
      plating: 'Serve on a banana leaf or in a small side bowl.',
      temperature: 'Warm or room temperature.',
      accompaniments: 'Kerala Matta Rice, Moru Curry (seasoned buttermilk stew), Sambar, and fish fry.'
    }
  }
];
