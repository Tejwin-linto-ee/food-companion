// Japanese culinary recipes Part 2 (Dishes 10-17)
module.exports = [
  // 10. OKONOMIYAKI (Osaka / Kansai savory cabbage pancake)
  {
    id: 'okonomiyaki',
    name: 'Osaka-Style Okonomiyaki',
    cuisine: 'Japanese',
    region: 'Japan (Kansai / Osaka)',
    servings: 4,
    prepTime: 25,
    cookTime: 20,
    difficulty: 'Medium',
    overview: {
      summary: 'Iconic Osaka savory cabbage pancake featuring shredded green cabbage folded into a light dashi-nagaimo batter, topped with pork belly strips, griddled golden and crisp on the outside and custardy within, finished with sweet okonomi sauce, kewpie mayo zigzags, aonori, and dancing katsuobushi flakes.',
      appearance: 'Thick, golden-brown disc decorated with lacquered dark sauce, crisscrossed white mayonnaise lines, emerald seaweed flakes, and waving bonito ribbons.',
      texture: 'Crispy pan-seared exterior with a fluffy, molten, steamed cabbage interior and crunchy pork bacon.',
      flavor: 'Rich umami, savory pork, sweet-tangy fruit barbecue sauce, creamy egg-mayo richness, and smoky sea saltiness.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Wide cast-iron griddle or heavy 12-inch non-stick skillet with lid', purpose: 'Holds even heat and allows pancake to steam under lid without scorching.' },
      { name: 'Two wide metal or heat-safe spatulas (Okonomiyaki kote)', purpose: 'Essential for flipping the heavy, delicate pancake cleanly without it crumbling.' },
      { name: 'Fine Japanese box grater (or microplane)', purpose: 'Grates sticky mountain yam (nagaimo) into a gelatinous slurry that aerates the batter.' }
    ],
    beforeYouStart: [
      { task: 'Core and finely chop 450g green cabbage into 4mm square pieces (avoid large strips which trap excess air).', durationMinutes: 10 },
      { task: 'Peel and finely grate 60g peeled fresh nagaimo (or mountain yam) into a slimy paste.', durationMinutes: 5 },
      { task: 'Whisk 100g all-purpose flour, 1/4 tsp baking powder, 1/4 tsp salt, and 120ml cold dashi stock together; whisk in grated nagaimo.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'Cabbage Chopping (Sainome-giri)', technique: 'Chop cabbage into small dice (approx 4-5mm) rather than long slaw strands. Small squares release moisture evenly and allow the pancake to bind without requiring excess heavy flour.' },
      { item: 'Nagaimo Handling', technique: 'Wear gloves if your skin is sensitive, as raw nagaimo can cause mild temporary skin tingling. Grate directly on a ceramic microplane.' }
    ],
    essentialIngredients: [
      { name: 'Green cabbage', prep: 'cored and finely chopped into 4mm dice', amount: '450g', metric: '450g', imperial: '1 lb', common: '1/2 medium head' },
      { name: 'Thinly sliced pork belly (butabara)', prep: 'cut into 10cm strips', amount: '200g', metric: '200g', imperial: '7 oz', common: '8 strips' },
      { name: 'All-purpose flour', prep: 'sifted', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '3/4 cup' },
      { name: 'Grated Nagaimo (Japanese mountain yam)', prep: 'finely grated into slimy slurry', amount: '60g', metric: '60g', imperial: '2.1 oz', common: '1/4 cup' },
      { name: 'Cold dashi stock', prep: 'kombu and bonito broth', amount: '120ml', metric: '120ml', imperial: '4 fl oz', common: '1/2 cup' },
      { name: 'Large eggs', prep: 'whisked lightly into batter right before cooking', amount: '3 eggs', metric: '150g', imperial: '5.3 oz', common: '3 large' },
      { name: 'Tenkasu (crispy tempura flakes)', prep: 'adds lightness and airy pockets', amount: '30g', metric: '30g', imperial: '1 oz', common: '1/3 cup' },
      { name: 'Beni shoga (red pickled ginger)', prep: 'finely minced', amount: '2 tbsp', metric: '25g', imperial: '0.9 oz', common: '2 tbsp' },
      { name: 'Okonomiyaki sauce (Otafuku or Worcestershire-ketchup blend)', prep: 'for brushing glaze', amount: '60ml', metric: '60ml', imperial: '2 fl oz', common: '1/4 cup' },
      { name: 'Kewpie Japanese mayonnaise', prep: 'in squeeze bottle for fine lines', amount: '40ml', metric: '40ml', imperial: '1.4 fl oz', common: '3 tbsp' },
      { name: 'Aonori (dried green laver seaweed)', prep: 'finely flaked', amount: '1 tbsp', metric: '5g', imperial: '0.2 oz', common: '1 tbsp' },
      { name: 'Katsuobushi (bonito flakes)', prep: 'thin paper ribbons that dance on hot food', amount: '10g', metric: '10g', imperial: '0.35 oz', common: '1 generous handful' }
    ],
    optionalIngredients: [
      { name: 'Small peeled raw shrimp or squid rings', prep: 'patted dry and folded into batter', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '1/2 cup', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'FOLD BATTER AND CABBAGE WITH AIR',
        whatYouNeed: ['Flour-dashi-nagaimo base', 'Chopped cabbage', 'Eggs', 'Tenkasu', 'Beni shoga'],
        description: 'Divide ingredients into two bowls for two large pancakes. Into each bowl, add half the cabbage, 1.5 whisked eggs, half the tempura flakes, pickled ginger, and half the dashi batter. Using a spoon or small spatula, scoop from bottom to top in gentle lifting motions for 15-20 seconds only. Stop when coated. Do not overmix or compress!',
        howToDoIt: 'Gentle folding incorporates pockets of air between cabbage leaves. Vigorous mixing crushes the cabbage, releases unwanted moisture, and turns the pancake into a dense rubbery disc.',
        heat: 'No Heat (Prep stage)',
        duration: 2,
        visualCues: 'A light, loose mountain of cabbage leaves glistening with a thin veil of batter, not a runny soup.',
        smell: 'Aromatic dashi and tangy pickled ginger.',
        textureCheck: 'Fluffy and loose with ample air pockets.',
        whatShouldThisLookLike: 'A loose, airy cabbage mixture suspended in light batter.',
        tip: 'Always mix each pancake individually right before pouring it onto the hot griddle.',
        commonMistake: 'Letting mixed batter sit for 15 minutes before cooking — cabbage will weep water and turn watery.',
        moveOnWhen: 'Cabbage is lightly coated and airy.',
        quickInstructions: 'Fold cabbage, egg, tempura flakes, and batter in lifting strokes for 20 seconds.'
      },
      {
        step: 2,
        title: 'GRIDDLE FIRST SIDE & LAYER PORK BELLY',
        whatYouNeed: ['Preheated skillet or griddle (180°C / 350°F)', '1 tbsp neutral cooking oil', 'Fluffy cabbage mixture', '4 strips pork belly'],
        description: 'Heat 1 tbsp oil in a wide skillet over medium-low heat. Mound the cabbage mixture onto the pan, forming a neat round disc about 18cm (7 inches) wide and 2.5cm (1 inch) thick. Do NOT press down with your spatula. Lay pork belly strips side-by-side across the top surface. Cover with a lid and griddle undisturbed for 5 minutes.',
        howToDoIt: 'Covering creates steam that cooks the thick interior through while the bottom develops a crisp golden shell.',
        heat: 'Medium-Low Heat (180°C / 350°F)',
        duration: 5,
        visualCues: 'Steam rising from beneath lid; bottom edge turns pale golden and holds its shape.',
        hear: 'Steady, gentle sizzling without crackling oil spitting wildly.',
        smell: 'Sweet toasted cabbage and rich dashi aroma.',
        textureCheck: 'Bottom crust is firm enough that the entire disc shifts when pan is gently shaken.',
        whatShouldThisLookLike: 'Tall 1-inch disc with raw pork strips on top and golden bottom.',
        tip: 'Resist pressing down! Pressing squeezes out steam and compacts the pancake into lead.',
        commonMistake: 'Flipping before bottom crust is fully set — the entire pancake will shatter.',
        moveOnWhen: 'Bottom is golden-brown and disc slides freely when pan is shaken.',
        quickInstructions: 'Mound cabbage 2.5cm thick, top with pork strips, cover, cook 5 mins over medium-low.'
      },
      {
        step: 3,
        title: 'THE TWO-SPATULA FLIP & LID STEAM',
        whatYouNeed: ['Two spatulas', 'Skillet lid'],
        description: 'Remove lid. Slide one spatula deep under the center of the pancake and place the second spatula firmly on top of the pork strips. In one swift, decisive rolling motion, invert the pancake so the pork belly lands directly on the hot skillet surface. Cover with lid and cook for another 5 minutes on medium-low.',
        howToDoIt: 'Using two spatulas supports the weight from both sides, eliminating pancake breakage.',
        heat: 'Medium-Low Heat',
        duration: 5,
        visualCues: 'Pork belly renders fat directly into the pan, sizzling vigorously; meat shrinks and browns.',
        hear: 'Audible sizzle as pork fat renders into the hot pan.',
        smell: 'Browning bacon and caramelized pork fat.',
        textureCheck: 'Pork is sizzling and adhering to the pancake.',
        whatShouldThisLookLike: 'Inverted pancake with pork rendering against the skillet base.',
        tip: 'Do not press down even after flipping; keep the internal steam pockets fluffy.',
        commonMistake: 'Smashing the pancake flat with a spatula like a burger patty.',
        moveOnWhen: '5 minutes of covered steaming on the pork side are complete.',
        quickInstructions: 'Flip pancake pork-side down using two spatulas, cover, cook 5 mins.'
      },
      {
        step: 4,
        title: 'UNCOVER, CRISP PORK & FINAL FLIP',
        whatYouNeed: ['Spatulas'],
        description: 'Remove lid to let remaining steam evaporate. Cook uncovered for 2 minutes over medium heat until pork belly is deeply golden, rendered, and ultra-crispy. Flip one final time so pork is on top, cooking for 1 minute to ensure total exterior crispness.',
        howToDoIt: 'Uncovering dries surface moisture, letting rendered pork fat fry the surface to crunchy perfection.',
        heat: 'Medium Heat',
        duration: 3,
        visualCues: 'Pork belly is lacquered amber and crispy; edges are browned.',
        hear: 'Sharper, crisper frying sounds as moisture vanishes.',
        smell: 'Savory fried bacon aroma.',
        textureCheck: 'Tapping pork surface with spatula yields a firm, crisp crunch.',
        whatShouldThisLookLike: 'Golden brown pancake with crispy crackling pork slices on top.',
        tip: 'If pork fat pools excessively, mop lightly with paper towel before final flip.',
        commonMistake: 'Serving directly from covered state without the uncovered crisping stage (will taste soggy).',
        moveOnWhen: 'Pork is shatteringly crisp and golden.',
        quickInstructions: 'Uncover, cook 2 mins to crisp pork, flip pork-up, cook 1 min.'
      },
      {
        step: 5,
        title: 'SAUCE, MAYO ZIGZAGS & DANCING TOPPINGS',
        whatYouNeed: ['Okonomiyaki sauce', 'Kewpie mayo', 'Pastry brush or spoon', 'Aonori', 'Katsuobushi'],
        description: 'Transfer pancake pork-side up to a warm serving plate. Generously brush 2 tablespoons of okonomiyaki sauce across the entire surface. Drizzle Kewpie mayo in thin, parallel diagonal zigzags. Dust generously with aonori seaweed powder. Pile a cloud of katsuobushi flakes in the center and watch them flutter and dance in the rising heat.',
        howToDoIt: 'Heat waves from the fresh pancake cause ultra-thin bonito flakes to contract and bend, creating their signature living dance.',
        heat: 'Off Heat',
        duration: 2,
        visualCues: 'Contrasting dark brown sauce and creamy white mayo lattices topped with dancing bonito ribbons.',
        smell: 'Smoky bonito, pungent nori, and sweet tangy sauce.',
        textureCheck: 'Crisp exterior gives way to a piping-hot, creamy interior.',
        whatShouldThisLookLike: 'Masterpiece street-food pancake covered in sauce, mayo, seaweed, and dancing flakes.',
        tip: 'Use a toothpick pulled through the mayo lines perpendicularly to create feather patterns.',
        commonMistake: 'Drizzling mayo before dark sauce — sauce will smear the clean lines.',
        moveOnWhen: 'Garnished and ready to serve immediately.',
        quickInstructions: 'Brush with brown sauce, drizzle mayo lines, sprinkle aonori and katsuobushi.'
      }
    ],
    commonMistakes: [
      { mistake: 'Pancake collapsed and broke during flip.', remedy: 'Batter was too wet or you used one flimsy fork/spatula. Always use two wide spatulas and ensure bottom crust is fully set before inverting.' },
      { mistake: 'Inside is raw, pasty dough while outside is burnt.', remedy: 'Heat was too high. Okonomiyaki must cook on medium-low covered with a lid to steam the dense cabbage through.' }
    ],
    troubleshooting: [
      {
        problem: 'Pancake feels heavy and dense like a hockey puck',
        whatHappened: 'Cabbage was over-stirred or pressed down with a spatula during cooking.',
        whyItHappened: 'Gluten developed from excess agitation and air was crushed out.',
        whatToDoNow: 'Enjoy with extra sauce and mayo; slice into smaller bite-sized wedges.',
        howToPrevent: 'Fold cabbage with lifting motions for 20 seconds maximum; never press pancake with spatula.'
      }
    ],
    substitutions: [
      { original: 'Nagaimo mountain yam', substitute: '1 tsp baking powder + 1 tbsp extra grated potato or cold water', notes: 'Provides lifting aeration, though authentic nagaimo gives the unique silky melt-in-the-mouth texture.' },
      { original: 'Pork belly slices', substitute: 'Thin bacon strips or sliced king oyster mushrooms', notes: 'Standard unsmoked bacon works wonderfully.' }
    ],
    safetyNotes: [
      'Raw pork belly must reach safe internal temperature of 71°C (160°F).'
    ],
    servingGuide: {
      restingTime: '1 minute.',
      garnishing: 'Okonomi sauce, Kewpie mayo, aonori, katsuobushi, beni shoga.',
      plating: 'Serve on a heated iron teppan plate or wooden board, sliced into 6 wedges.',
      temperature: 'Piping hot off the griddle.',
      accompaniments: 'Ice-cold draft beer or chilled oolong tea.'
    }
  },

  // 11. TAKOYAKI (Osaka Octopus Balls)
  {
    id: 'takoyaki',
    name: 'Osaka Crispy-Creamy Takoyaki',
    cuisine: 'Japanese',
    region: 'Japan (Kansai / Osaka)',
    servings: 4,
    prepTime: 25,
    cookTime: 20,
    difficulty: 'Hard',
    overview: {
      summary: 'Beloved Osaka street food spheres: molten, dashi-rich batter enveloping tender chunks of boiled octopus (tako), red pickled ginger, and crunchy tempura scraps, turned and molded in a specialized cast-iron indented pan until spherical and golden-crisp outside, molten within.',
      appearance: 'Golden-brown spherical orbs glistened with dark takoyaki glaze, zigzagged with Kewpie mayo, sprinkled with emerald aonori and swaying katsuobushi.',
      texture: 'Paper-thin, crispy outer shell giving way to a velvety, molten dashi cream surrounding a tender, chewy nugget of octopus.',
      flavor: 'Savory seafood umami, briny sweet octopus, tangy ginger, and sweet-savory glaze.',
      restingTimeMinutes: 3
    },
    equipment: [
      { name: 'Takoyaki pan (cast iron or electric multi-cavity pan)', purpose: 'Hemispherical cavities essential for shaping spherical balls.' },
      { name: 'Takoyaki picks or wooden skewers (2 per hand)', purpose: 'Allows rapid rotation and tucking of excess batter into the spheres.' },
      { name: 'Oil brush (Aburatsugi)', purpose: 'Applies oil liberally into every crevice to fry a crispy shell.' }
    ],
    beforeYouStart: [
      { task: 'Cut 180g boiled octopus tentacles into 1.5cm bite-sized cubes.', durationMinutes: 5 },
      { task: 'Whisk 150g takoyaki flour (or all-purpose flour), 500ml cold dashi, 2 eggs, 1 tsp soy sauce, and 1/2 tsp salt into a very thin, watery batter.', durationMinutes: 5 },
      { task: 'Finely mince 3 scallions, 2 tbsp pickled red ginger (beni shoga), and measure 40g tenkasu.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'Batter Consistency', technique: 'Takoyaki batter must be watery and thin (almost like crêpe batter) with a 3.5:1 liquid-to-flour ratio. A thick pancake batter produces rubbery dough balls instead of authentic molten custard centers.' }
    ],
    essentialIngredients: [
      { name: 'Boiled octopus tentacle (Madako)', prep: 'cut into 1.5cm cubes', amount: '180g', metric: '180g', imperial: '6.3 oz', common: '1 cup cubes' },
      { name: 'Takoyaki flour or all-purpose flour', prep: 'sifted', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '1 cup' },
      { name: 'Cold dashi stock', prep: 'rich bonito-kombu broth', amount: '500ml', metric: '500ml', imperial: '17 fl oz', common: '2 cups' },
      { name: 'Large eggs', prep: 'whisked into batter', amount: '2 eggs', metric: '100g', imperial: '3.5 oz', common: '2 large' },
      { name: 'Soy sauce (shoyu)', prep: 'seasoning for batter', amount: '1 tsp', metric: '5ml', imperial: '0.17 fl oz', common: '1 tsp' },
      { name: 'Tenkasu (crisp tempura pearls)', prep: 'essential for crispy structure', amount: '40g', metric: '40g', imperial: '1.4 oz', common: '1/2 cup' },
      { name: 'Beni shoga (red pickled ginger)', prep: 'finely minced', amount: '2 tbsp', metric: '25g', imperial: '0.9 oz', common: '2 tbsp' },
      { name: 'Scallions / Green onions', prep: 'finely sliced into rings', amount: '3 stalks', metric: '40g', imperial: '1.4 oz', common: '1/2 cup' },
      { name: 'Neutral cooking oil', prep: 'for generous greasing', amount: '4 tbsp', metric: '60ml', imperial: '2 fl oz', common: '4 tbsp' },
      { name: 'Takoyaki sauce or Otafuku sauce', prep: 'sweet savory glaze', amount: '60ml', metric: '60ml', imperial: '2 fl oz', common: '1/4 cup' },
      { name: 'Kewpie mayonnaise', prep: 'for drizzling', amount: '40ml', metric: '40ml', imperial: '1.4 fl oz', common: '3 tbsp' },
      { name: 'Aonori & Katsuobushi', prep: 'for topping', amount: '10g', metric: '10g', imperial: '0.35 oz', common: 'to garnish' }
    ],
    steps: [
      {
        step: 1,
        title: 'PREHEAT & OIL THE CAVITIES LIBERALLY',
        whatYouNeed: ['Takoyaki pan', 'Cooking oil', 'Oil brush'],
        description: 'Heat takoyaki pan over medium heat until smoking hot (200°C / 400°F). Dip oil brush generously in oil and coat every single hemispherical cavity and the flat rims between them. Oil should visibly puddle slightly (1-2mm) in each cup.',
        howToDoIt: 'Abundant hot oil shallow-fries the exterior batter into a crispy crust that easily spins without tearing.',
        heat: 'Medium-High Heat',
        duration: 3,
        visualCues: 'Oil shimmers and faint wisps of smoke appear; oil covers all surfaces.',
        smell: 'Hot clean oil.',
        textureCheck: 'Slick non-stick surface.',
        whatShouldThisLookLike: 'Glossy, well-oiled hot iron cavities.',
        tip: 'Never skimp on oil — dry cavities mean torn, mangled balls.',
        commonMistake: 'Pouring batter into a cool pan, which absorbs oil and sticks permanently.',
        moveOnWhen: 'Pan is smoking hot and glistening.',
        quickInstructions: 'Preheat pan, oil every cavity and flat top generously until smoking hot.'
      },
      {
        step: 2,
        title: 'POUR BATTER TO OVERFLOW & INSERT OCTOPUS',
        whatYouNeed: ['Whisked batter', 'Octopus cubes', 'Tenkasu', 'Pickled ginger', 'Scallions'],
        description: 'Whisk batter to lift settled flour. Pour batter aggressively across the entire pan, filling every cup to the brim and allowing batter to flood over the flat plate between cups. Immediately drop 1 cube of octopus into each hole. Scatter tenkasu, ginger, and scallions evenly across the entire surface.',
        howToDoIt: 'The overflow sheet provides the extra batter needed to tuck inside the spheres as they are rotated.',
        heat: 'Medium Heat',
        duration: 3,
        visualCues: 'Batter bubbles gently around cup rims; overflow sheet begins to turn opaque.',
        hear: 'Brisk, eager sizzle as batter contacts hot metal.',
        smell: 'Fragrant dashi and sweet seafood aroma.',
        textureCheck: 'Base inside the cup sets into a thin skin.',
        whatShouldThisLookLike: 'A unified sheet of bubbling batter with octopus and aromatics scattered on top.',
        tip: 'Always whisk batter before pouring because starch sinks rapidly to the bottom.',
        commonMistake: 'Filling only halfway up the cups, leaving no extra batter to form the top half of the sphere.',
        moveOnWhen: 'Edges in cups are set and opaque.',
        quickInstructions: 'Pour batter overflowing the pan, drop octopus in cups, scatter ginger, scallions, and tempura flakes.'
      },
      {
        step: 3,
        title: 'CUT GRID & 90-DEGREE ROTATION (THE TUCK)',
        whatYouNeed: ['2 skewers or takoyaki picks'],
        description: 'Using skewer tips, score straight lines through the cooked batter between cups to create a square grid around each hole. Insert a skewer under each ball and flip it 90 degrees onto its side. Push the surrounding square of cooked excess batter down into the cavity hole so raw batter flows out to form the second half.',
        howToDoIt: 'Tucking the overflow scraps inside creates the bulk and ensures a perfectly filled sphere.',
        heat: 'Medium Heat',
        duration: 4,
        visualCues: 'Balls sit at 90° angles; raw liquid spills down to contact the bottom hot cup.',
        hear: 'Fresh sizzling as raw liquid touches iron.',
        textureCheck: 'Soft but holding hemispherical shape.',
        whatShouldThisLookLike: 'Half-spheres turned on their sides with scraps tucked neatly inside.',
        tip: 'Work quickly down each row with rhythmic wrist twitches.',
        commonMistake: 'Attempting a full 180° flip immediately — all the liquid will leak out and flatten.',
        moveOnWhen: 'All balls are rotated 90° with scraps tucked in.',
        quickInstructions: 'Score grid lines, turn balls 90 degrees, and tuck excess sheet inside cavity.'
      },
      {
        step: 4,
        title: 'CONTINUOUS ROTATION & CRISPING',
        whatYouNeed: ['2 skewers', '1 tbsp oil for finishing'],
        description: 'Rotate balls another 90 degrees so raw batter faces the bottom. Now continuously spin and rotate the balls every 15–20 seconds with your skewers. Drizzle 1 tbsp of oil over the balls during the final 3 minutes to shallow-fry the crust into a deep amber shell.',
        howToDoIt: 'Constant spinning rounds off sharp corners and ensures uniform golden browning on all sides.',
        heat: 'Medium to Medium-High Heat',
        duration: 6,
        visualCues: 'Flawless golden-amber spherical balls that roll effortlessly in their cups.',
        hear: 'Crackling shallow-fry sizzle.',
        textureCheck: 'Shell is crisp and taut; ball feels firm when tapped with skewer.',
        whatShouldThisLookLike: 'Evenly browned, round, crispy takoyaki balls.',
        tip: 'The final oil drizzle is the street vendor secret to that signature exterior crunch.',
        commonMistake: 'Leaving them stationary in cups, which scorches flat spots.',
        moveOnWhen: 'Balls are spherical, golden-brown, and crisp on all sides.',
        quickInstructions: 'Keep spinning balls every 20 seconds, drizzle oil, cook until golden and crisp.'
      },
      {
        step: 5,
        title: 'GLAZE, TOP & SERVE PIPING HOT',
        whatYouNeed: ['Takoyaki sauce', 'Kewpie mayo', 'Aonori', 'Katsuobushi'],
        description: 'Transfer 6–8 takoyaki to a wooden boat-shaped dish (kyogi). Brush generously with takoyaki glaze, zigzag with Kewpie mayo, sprinkle with aonori, and heap with dancing katsuobushi flakes.',
        howToDoIt: 'Serve immediately, but warn diners: the molten cream interior stays dangerously hot for several minutes!',
        heat: 'Off Heat',
        duration: 2,
        visualCues: 'Gleaming sauce, mayonnaise ribbons, green seaweed, dancing bonito flakes.',
        smell: 'Rich savory street food aroma.',
        textureCheck: 'Crunchy bite revealing molten, velvety center.',
        whatShouldThisLookLike: 'Authentic street-style boat of takoyaki.',
        tip: 'Poke a small steam hole in the ball with a toothpick before popping it into your mouth.',
        commonMistake: 'Swallowing whole straight off the pan (known in Japan as "takoyaki tongue burn").',
        moveOnWhen: 'Plated and ready to devour.',
        quickInstructions: 'Brush with sauce, zigzag mayo, sprinkle aonori and bonito flakes.'
      }
    ],
    commonMistakes: [
      { mistake: 'Balls turned out hollow and deflated.', remedy: 'Not enough batter was used or you did not tuck the overflow scraps into the cavities.' },
      { mistake: 'Batter stuck and tore into pieces.', remedy: 'Pan was insufficiently preheated or lacked oil. Cast iron needs high heat and generous oiling.' }
    ],
    troubleshooting: [
      {
        problem: 'Takoyaki are misshapen and lumpy',
        whatHappened: 'Balls were rotated too late after batter was completely solid.',
        whyItHappened: 'Lack of liquid batter left inside to seal the sphere.',
        whatToDoNow: 'Add a small drop of raw batter into the cavity and spin immediately to fill the gap.',
        howToPrevent: 'Rotate the first 90 degrees while the interior is still completely liquid.'
      }
    ],
    substitutions: [
      { original: 'Boiled octopus (Tako)', substitute: 'Cooked peeled shrimp, diced sausage, or cubed cheddar cheese', notes: 'Cheese-takoyaki is a wildly popular modern Japanese izakaya variation.' }
    ],
    safetyNotes: [
      'Take extreme caution with the molten interior — steam can cause mouth burns if eaten immediately.'
    ],
    servingGuide: {
      restingTime: 'Rest 2–3 minutes before eating.',
      garnishing: 'Takoyaki glaze, Kewpie mayo, aonori seaweed, katsuobushi flakes.',
      plating: 'Serve 6 to 8 balls in traditional wooden boat trays or on ceramic plates with bamboo skewers.',
      temperature: 'Hot and molten.',
      accompaniments: 'Ramune soda, cold Japanese lager, or iced barley tea (mugicha).'
    }
  },

  // 12. CURRY RICE (Japanese Karē Raisu)
  {
    id: 'curry-rice',
    name: 'Japanese Beef Curry Rice (Karē Raisu)',
    cuisine: 'Japanese',
    region: 'Japan (National)',
    servings: 4,
    prepTime: 20,
    cookTime: 45,
    difficulty: 'Easy',
    overview: {
      summary: 'Japan\'s premier home-style comfort food: a rich, deeply savory, mildly sweet curry stew laden with tender stewing beef, melting caramelized onions, carrots, and russet potatoes, thickened with a fragrant toasted roux and sweetened with grated apple and honey, poured generously over steamed Japanese short-grain rice alongside tart red fukujinzuke pickles.',
      appearance: 'Glossy, velvety mahogany curry gravy blanketing one half of the plate, contrasted with pristine white steamed rice and jewel-like ruby pickles.',
      texture: 'Thick, spoon-coating silky gravy with fork-tender beef and velvety, melt-in-the-mouth potato chunks.',
      flavor: 'Warm, mildly spiced, deeply savory with umami soy sauce, rich caramelized onions, and subtle honey-apple sweetness.',
      restingTimeMinutes: 5
    },
    equipment: [
      { name: 'Heavy Dutch oven or enamelled cast-iron pot (4–5 qt)', purpose: 'Caramelizes onions deeply and simmers stew without burning the thick starch.' },
      { name: 'Wooden cooking spatula', purpose: 'Scrapes the fond from the bottom of the pot during sautéing.' },
      { name: 'Box grater', purpose: 'Grates fresh apple into fine pulp for natural sweetness and pectin.' }
    ],
    beforeYouStart: [
      { task: 'Cut 500g chuck beef into uniform 3cm cubes; season with 1/2 tsp salt and black pepper.', durationMinutes: 5 },
      { task: 'Slice 2 large yellow onions thinly into half-moons.', durationMinutes: 5 },
      { task: 'Peel and cut 2 carrots and 2 potatoes using the rangiri rolling cut (diagonal rolling cuts) for even cooking.', durationMinutes: 8 }
    ],
    ingredientPrepGuide: [
      { item: 'Rangiri Rolling Cut', technique: 'Cut vegetable diagonally at a 45-degree angle, rotate the carrot/potato 90 degrees towards you, and cut again. This creates triangular chunks with maximum surface area for absorbing curry flavor while maintaining structural integrity during simmering.' },
      { item: 'Potato Soaking', technique: 'Submerge cut potatoes in cold water for 10 minutes to wash off excess exterior surface starch, preventing the curry from turning prematurely gummy.' }
    ],
    essentialIngredients: [
      { name: 'Beef chuck roast or stewing beef', prep: 'cut into 3cm cubes', amount: '500g', metric: '500g', imperial: '1.1 lbs', common: '500g' },
      { name: 'Yellow onions', prep: 'thinly sliced for caramelization', amount: '2 large', metric: '400g', imperial: '14 oz', common: '2 large' },
      { name: 'Carrots', prep: 'peeled and cut rangiri style', amount: '2 medium', metric: '200g', imperial: '7 oz', common: '2 pieces' },
      { name: 'Russet or Yukon Gold potatoes', prep: 'peeled, cut rangiri & rinsed', amount: '2 medium', metric: '300g', imperial: '10.5 oz', common: '2 pieces' },
      { name: 'Japanese curry roux blocks (S&B Golden, Vermont, or Java)', prep: 'finely chopped with knife for instant dissolving', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '1/2 pack (4 cubes)' },
      { name: 'Beef broth, dashi, or water', prep: 'liquid base', amount: '800ml', metric: '800ml', imperial: '27 fl oz', common: '3.4 cups' },
      { name: 'Gala or Fuji apple', prep: 'peeled and finely grated with juice', amount: '1/2 apple', metric: '75g', imperial: '2.6 oz', common: '1/2 apple' },
      { name: 'Honey', prep: 'pure clover or wildflower', amount: '1 tbsp', metric: '20g', imperial: '0.7 oz', common: '1 tbsp' },
      { name: 'Japanese soy sauce (Shoyu)', prep: 'for umami depth', amount: '1 tbsp', metric: '15ml', imperial: '0.5 fl oz', common: '1 tbsp' },
      { name: 'Tonkatsu sauce or Worcestershire sauce', prep: 'for tangy finish', amount: '1 tbsp', metric: '15ml', imperial: '0.5 fl oz', common: '1 tbsp' },
      { name: 'Neutral cooking oil', prep: 'divided', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp' },
      { name: 'Cooked Japanese short-grain rice', prep: 'steamed hot', amount: '4 bowls', metric: '600g', imperial: '21 oz', common: '4 cups' },
      { name: 'Fukujinzuke (Japanese red radish relish)', prep: 'for garnish', amount: '4 tbsp', metric: '40g', imperial: '1.4 oz', common: '4 tbsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'SEAR THE BEEF CUBES',
        whatYouNeed: ['Dutch oven', '1 tbsp oil', '500g seasoned beef cubes'],
        description: 'Heat 1 tbsp oil in a Dutch oven over high heat until shimmering. Add beef cubes in a single layer with space between pieces. Sear undisturbed for 3 minutes until deep golden-brown on bottom. Turn and sear 2 more minutes. Remove seared beef to a plate (center will still be raw).',
        howToDoIt: 'High heat creates rich browned fond on the pot bottom through the Maillard reaction, establishing deep beefy flavor.',
        heat: 'High Heat',
        duration: 5,
        visualCues: 'Deep mahogany crust on beef edges; brown glaze sticks to bottom of pot.',
        hear: 'Vigorous, snapping sizzle.',
        smell: 'Rich roasted meat aroma.',
        textureCheck: 'Firm seared exterior.',
        whatShouldThisLookLike: 'Nicely browned beef cubes with glistening surfaces.',
        tip: 'Do not crowd the pot or beef will boil in its own juices instead of searing.',
        commonMistake: 'Fidgeting and constantly stirring beef before it can develop a brown crust.',
        moveOnWhen: 'Beef is well-browned on exterior and transferred to plate.',
        quickInstructions: 'Sear beef cubes in hot oil 5 mins until browned on all sides; remove to plate.'
      },
      {
        step: 2,
        title: 'CARAMELIZE ONIONS TO GOLDEN SWEETNESS',
        whatYouNeed: ['Sliced onions', '1 tbsp oil', 'Pinch of salt', 'Splash of water'],
        description: 'Reduce heat to medium-low. Add remaining 1 tbsp oil and sliced onions to the pot with a pinch of salt. Sauté slowly for 15 minutes, stirring frequently and scraping up the beef fond. If the bottom dries out or browns too fast, add 2 tablespoons of water to deglaze.',
        howToDoIt: 'Slow caramelization breaks down onion sugars into rich, jammy sweetness, which forms the quintessential foundation of Japanese curry.',
        heat: 'Medium-Low Heat',
        duration: 15,
        visualCues: 'Onions reduce to 1/3 volume, turning soft, translucent, and amber-gold.',
        smell: 'Sweet, savory caramelized onion fragrance.',
        textureCheck: 'Melted and tender.',
        whatShouldThisLookLike: 'Soft, golden jammy onions coating the bottom of the pot.',
        tip: 'The deeper the amber color on the onions, the richer your finished curry will taste.',
        commonMistake: 'Blasting onions on high heat, which scorches the tips bitter while centers remain raw.',
        moveOnWhen: 'Onions are deeply golden and jam-like.',
        quickInstructions: 'Sauté sliced onions on medium-low for 15 mins with a pinch of salt until golden amber.'
      },
      {
        step: 3,
        title: 'ADD VEGETABLES, BROTH & SIMMER TILL TENDER',
        whatYouNeed: ['Seared beef', 'Carrots', 'Potatoes', '800ml broth or water', 'Grated apple', 'Honey'],
        description: 'Return seared beef and any juices to the pot. Add carrots, drained potatoes, 800ml broth, grated apple, and honey. Bring to a boil over medium-high heat. Skim off any gray scum and froth floating on top with a fine skimmer. Reduce heat to low, cover with lid slightly ajar, and simmer gently for 25 minutes.',
        howToDoIt: 'Skimming removes impurities for a clean, glossy stew. Simmering on low tenderizes beef and cooks root vegetables through without breaking them apart.',
        heat: 'Medium-High to boil, then Low Simmer',
        duration: 25,
        visualCues: 'Slow lazy bubbles rising; carrots and potatoes become fork-tender.',
        smell: 'Sweet apple, beef, and earthy vegetable broth.',
        textureCheck: 'A skewer pierces through carrots and potatoes with zero resistance.',
        whatShouldThisLookLike: 'A vibrant stew with tender vegetables and beef in amber broth.',
        tip: 'Check that potatoes aren’t dissolving; if tender early, turn off heat.',
        commonMistake: 'Boiling violently on high heat, which shatters potatoes into mush.',
        moveOnWhen: 'Potatoes and carrots are completely fork-tender.',
        quickInstructions: 'Add beef, carrots, potatoes, broth, apple, and honey; boil, skim foam, cover and simmer 25 mins.'
      },
      {
        step: 4,
        title: 'MELT CURRY ROUX & SEASONINGS',
        whatYouNeed: ['Chopped curry roux (100g)', '1 tbsp soy sauce', '1 tbsp tonkatsu sauce', 'Ladle'],
        description: 'TURN OFF THE HEAT COMPLETELY. (Crucial step!). Place chopped roux cubes into a soup ladle. Dip ladle halfway into the hot broth and stir with chopsticks or a fork until the roux cubes dissolve completely into a thick paste. Stir this back into the pot. Add soy sauce and tonkatsu sauce. Turn heat back on to lowest setting and simmer gently for 5 minutes, stirring continuously.',
        howToDoIt: 'Turning off the heat prevents roux starches from clumping upon contact. Dissolving in a ladle ensures a velvet, lump-free sauce.',
        heat: 'OFF during roux addition, then Lowest Heat 5 mins',
        duration: 5,
        visualCues: 'Thin broth transforms into a thick, glossy, velvety mahogany-colored curry sauce.',
        hear: 'Heavy, slow "plop-plop" bubbling.',
        smell: 'Warm curry spices, toasted flour, and umami richness.',
        textureCheck: 'Sauce coats the back of a wooden spoon thickly; drawing a finger leaves a clear line.',
        whatShouldThisLookLike: 'Thick, glossy, restaurant-style curry gravy.',
        tip: 'Stir bottom continuously in figure-8 motions so starch does not stick and scorch.',
        commonMistake: 'Throwing whole cold roux blocks into rapidly boiling liquid — creates hard unblended lumps.',
        moveOnWhen: 'Curry is thick, glossy, and evenly blended.',
        quickInstructions: 'Turn off heat, dissolve roux in a ladle, stir in soy and tonkatsu sauce, simmer on low 5 mins.'
      },
      {
        step: 5,
        title: 'PLATE & SERVE OVER STEAMED RICE',
        whatYouNeed: ['4 plates', 'Hot steamed rice', 'Curry stew', 'Fukujinzuke pickles'],
        description: 'Spoon a mound of fluffy steamed Japanese rice onto one half of an oval curry plate. Ladle the hot curry gravy, tender beef, and vegetables generously onto the other half, letting sauce lap against the rice. Place a bright spoonful of red fukujinzuke pickles alongside.',
        howToDoIt: 'The half-and-half plating allows diners to mix each spoonful of rice with curry to their preferred ratio.',
        heat: 'Off Heat',
        duration: 2,
        visualCues: 'Vibrant contrast of pristine white rice, mahogany curry, and ruby-red pickles.',
        smell: 'Intensely comforting curry aroma.',
        textureCheck: 'Silky sauce with fluffy grains.',
        whatShouldThisLookLike: 'Classic Japanese diner-style curry plate.',
        tip: 'Curry tastes even richer the next day after resting overnight in the fridge!',
        commonMistake: 'Covering all the rice with curry so diners can’t control the rice-to-sauce ratio.',
        moveOnWhen: 'Plated and ready to enjoy with a spoon.',
        quickInstructions: 'Mound rice on half the plate, ladle curry on other half, add red pickles.'
      }
    ],
    commonMistakes: [
      { mistake: 'Curry scorched on the bottom of the pan.', remedy: 'Roux makes sauce very thick and prone to burning. Always keep heat low and stir frequently after adding roux.' },
      { mistake: 'Potatoes turned into mashed potato soup.', remedy: 'Potatoes were boiled too vigorously or cut too small. Use large rangiri cuts and gentle simmering.' }
    ],
    troubleshooting: [
      {
        problem: 'Curry sauce is too thin and watery',
        whatHappened: 'Too much water was added or vegetables released excess moisture.',
        whyItHappened: 'High liquid-to-roux ratio.',
        whatToDoNow: 'Simmer uncovered on low heat for 5–7 minutes, stirring constantly to reduce; or dissolve 1 extra roux square.',
        howToPrevent: 'Measure liquid accurately before simmering.'
      }
    ],
    substitutions: [
      { original: 'Beef chuck', substitute: 'Boneless chicken thighs or pork shoulder', notes: 'Chicken curry and pork curry (katsu-curry) are equally beloved staples across Japan.' },
      { original: 'Japanese curry roux blocks', substitute: '2 tbsp curry powder + 2 tbsp flour + 2 tbsp butter roux', notes: 'Commercial blocks contain spices, fruit paste, and thickening roux pre-balanced for authentic flavor.' }
    ],
    safetyNotes: [
      'Store leftover curry in the refrigerator within 2 hours; reheat thoroughly to a boil before eating.'
    ],
    servingGuide: {
      restingTime: 'Rest 5 minutes off heat before plating.',
      garnishing: 'Red fukujinzuke pickles and a drizzle of tonkatsu sauce.',
      plating: 'Serve on wide, shallow oval curry plates with a soup spoon.',
      temperature: 'Piping hot.',
      accompaniments: 'Crispy cabbage slaw with sesame dressing and warm green tea.'
    }
  },

  // 13. DONBURI (Katsudon / Oyakodon style rice bowl)
  {
    id: 'donburi',
    name: 'Classic Katsudon (Crispy Pork Cutlet & Egg Rice Bowl)',
    cuisine: 'Japanese',
    region: 'Japan (Tokyo / Kanto)',
    servings: 4,
    prepTime: 20,
    cookTime: 20,
    difficulty: 'Medium',
    overview: {
      summary: 'The reigning king of Japanese rice bowls: crispy panko-breaded pork tonkatsu simmered briefly in a sweet-savory dashi, soy, and mirin broth with sweet onions, enveloped in half-cooked, velvety eggs, slid gently over a deep bowl of steaming Japanese rice.',
      appearance: 'Deep ceramic bowl filled with fluffy white rice crowned with golden sliced cutlet, ribbons of golden yolk and white egg custard, and sliced scallions.',
      texture: 'Contrasting textures: crunchy panko edges soaked with savory sweet broth, creamy soft egg custard, and tender juicy pork over chewy rice.',
      flavor: 'Deep umami dashi, sweet mirin, savory soy sauce, rich egg yolk, and savory fried pork.',
      restingTimeMinutes: 1
    },
    equipment: [
      { name: 'Oyakodon pan (Donburi pan) or small 7-inch individual skillet', purpose: 'Individual pan with steep sides designed to slide the egg and cutlet intact directly onto rice.' },
      { name: 'Deep Donburi ceramic bowls', purpose: 'Retains heat and holds the generous portion of rice and toppings.' }
    ],
    beforeYouStart: [
      { task: 'Prepare or reheat 4 cooked crispy pork tonkatsu cutlets; slice into 2cm crosswise strips.', durationMinutes: 5 },
      { task: 'Thinly slice 1 large yellow onion into half-moons.', durationMinutes: 3 },
      { task: 'Whisk dashi stock, soy sauce, mirin, and sugar together (the donburi tsuyu broth).', durationMinutes: 2 },
      { task: 'Lightly beat eggs in a small bowl with chopsticks just 4–5 times (whites and yolks should remain partially separated).', durationMinutes: 1 }
    ],
    ingredientPrepGuide: [
      { item: 'Egg Beating Technique', technique: 'Do NOT beat eggs smooth! Puncturing the yolks and stirring 4 or 5 times with chopsticks leaves distinct streaks of yellow yolk and clear albumen. This creates the signature dual texture of firm white clouds and custardy molten yellow ribbons.' }
    ],
    essentialIngredients: [
      { name: 'Cooked Tonkatsu pork cutlets', prep: 'sliced crosswise into 2cm pieces', amount: '4 cutlets', metric: '600g', imperial: '21 oz', common: '4 cutlets' },
      { name: 'Large yellow onion', prep: 'thinly sliced into 4mm ribbons', amount: '1 large', metric: '200g', imperial: '7 oz', common: '1 large' },
      { name: 'Large eggs', prep: 'lightly broken, 2 per serving', amount: '8 eggs', metric: '400g', imperial: '14 oz', common: '8 eggs' },
      { name: 'Dashi stock', prep: 'kombu and bonito broth', amount: '360ml', metric: '360ml', imperial: '12 fl oz', common: '1.5 cups' },
      { name: 'Japanese soy sauce (Shoyu)', prep: 'for savory backbone', amount: '60ml', metric: '60ml', imperial: '2 fl oz', common: '1/4 cup' },
      { name: 'Mirin (sweet Japanese rice wine)', prep: 'adds luster and gentle sweetness', amount: '60ml', metric: '60ml', imperial: '2 fl oz', common: '1/4 cup' },
      { name: 'Granulated sugar', prep: 'balances sauce', amount: '1.5 tbsp', metric: '20g', imperial: '0.7 oz', common: '1.5 tbsp' },
      { name: 'Steamed Japanese short-grain rice', prep: 'warm in deep bowls', amount: '4 bowls', metric: '600g', imperial: '21 oz', common: '4 cups' },
      { name: 'Mitsuba (Japanese wild parsley) or scallions', prep: 'cut into 2cm lengths', amount: '2 tbsp', metric: '10g', imperial: '0.35 oz', common: '2 tbsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'SIMMER ONIONS IN DONTUYU BROTH (INDIVIDUAL PORTION)',
        whatYouNeed: ['Small 7-inch pan', '90ml broth mixture', '1/4 of sliced onions'],
        description: 'For each serving, pour 90ml of the dashi-soy-mirin-sugar broth into the small skillet over medium heat. Scatter a quarter of the sliced onions across the pan in an even layer. Cover and simmer for 3 minutes until onions are translucent and tender.',
        howToDoIt: 'Simmering infuses the onions with sweet dashi broth and softens their sharp sulfur into sweet aromatics.',
        heat: 'Medium Heat',
        duration: 3,
        visualCues: 'Liquid bubbles steadily; onions turn glassy and soft.',
        smell: 'Sweet, fragrant dashi and mirin aroma.',
        textureCheck: 'Onions tender to the bite.',
        whatShouldThisLookLike: 'Tender onions simmering in bubbling amber broth.',
        tip: 'Cook one or two servings at a time for restaurant-quality perfection and easy sliding.',
        commonMistake: 'Using a giant 12-inch pan for one cutlet — the liquid spreads too thin and evaporates in seconds.',
        moveOnWhen: 'Onions are soft and broth is bubbling.',
        quickInstructions: 'Simmer 90ml broth and sliced onions in small skillet for 3 mins until soft.'
      },
      {
        step: 2,
        title: 'PLACE SLICED TONKATSU CUTLET IN BROTH',
        whatYouNeed: ['1 sliced tonkatsu cutlet'],
        description: 'Reassemble the sliced tonkatsu cutlet onto your spatula and lay it directly over the simmering bed of onions in the center of the pan. Cook uncovered for 1 minute so the bottom crust absorbs the savory broth while the top crust stays crisp.',
        howToDoIt: 'Keeping the cutlet intact maintains beautiful presentation when slid onto the rice bowl.',
        heat: 'Medium Heat',
        duration: 1,
        visualCues: 'Broth bubbles up the sides of the golden cutlet.',
        hear: 'Brisk bubbling broth around the cutlet.',
        textureCheck: 'Bottom breading absorbs sauce, top remains crunchy.',
        whatShouldThisLookLike: 'Golden cutlet resting in the center of simmering onions and broth.',
        tip: 'Do not submerge the entire cutlet under liquid — you want textural contrast.',
        commonMistake: 'Flipping the cutlet over, which turns all the panko into soggy bread pudding.',
        moveOnWhen: 'Cutlet is warmed through in the bubbling broth.',
        quickInstructions: 'Lay sliced cutlet on the onions; simmer 1 minute.'
      },
      {
        step: 3,
        title: 'POUR FIRST EGG LAYER & COVER',
        whatYouNeed: ['2 lightly beaten eggs (half of amount)', 'Skillet lid'],
        description: 'Pour about two-thirds of the beaten egg mixture in a circular motion around the cutlet and over the onions, with just a little drizzled over the cutlet itself. Cover immediately with a lid and cook for 45 seconds on medium heat.',
        howToDoIt: 'Two-stage egg addition is the pro secret: the first stage cooks into a firm foundation, while the second stage provides the creamy custard top.',
        heat: 'Medium Heat',
        duration: 1,
        visualCues: 'Egg white puffs up and turns cloudy white around the edges.',
        smell: 'Rich egg and dashi aroma.',
        textureCheck: 'Base egg is softly set.',
        whatShouldThisLookLike: 'Puffed, set egg whites surrounding the cutlet.',
        tip: 'Always pour in a spiral starting from the outer ring toward the center.',
        commonMistake: 'Lifting the lid every 10 seconds, which lets heat escape and delays cooking.',
        moveOnWhen: 'First egg layer is 80% set.',
        quickInstructions: 'Pour 2/3 of beaten egg around cutlet, cover with lid, cook 45 seconds.'
      },
      {
        step: 4,
        title: 'ADD SECOND EGG LAYER & REST FOR JUKUJUKU CUSTARD',
        whatYouNeed: ['Remaining 1/3 beaten egg', 'Mitsuba leaves or scallions'],
        description: 'Remove lid. Pour remaining egg right over the center of the cutlet. Scatter mitsuba or scallions on top. Cover with lid, TURN OFF THE HEAT IMMEDIATELY, and let sit undisturbed for 30 seconds. Residual steam will cook the top egg to glossy, silky "jukujuku" (half-cooked runny-soft) perfection.',
        howToDoIt: 'Off-heat steaming guarantees the egg stays velvety and prevents overcooking into rubbery hard eggs.',
        heat: 'OFF (Residual steam)',
        duration: 1,
        visualCues: 'Lustrous, glossy golden egg ribbons that quiver when pan is shaken.',
        textureCheck: 'Velvety custard texture.',
        whatShouldThisLookLike: 'Pork cutlet enveloped in gleaming, half-runny egg.',
        tip: 'Japanese diners prize half-cooked eggs for their luxurious mouthfeel over hot rice.',
        commonMistake: 'Leaving the burner on high until the egg is completely dry and browned.',
        moveOnWhen: 'Egg is glossy and softly set.',
        quickInstructions: 'Pour remaining egg and herbs on top, turn off heat, cover 30 seconds.'
      },
      {
        step: 5,
        title: 'SLIDE GRACEFULLY ONTO RICE',
        whatYouNeed: ['Bowl of hot steamed rice', 'Spatula'],
        description: 'Hold the skillet at a 45-degree angle right above the warm bowl of rice. Gently shake the pan forward and back until the egg-cutlet-onion ensemble slides smoothly off the pan and lands perfectly centered atop the rice. Drizzle any remaining pan broth over the bowl.',
        howToDoIt: 'The rounded slope of the donburi pan allows the entire topping to slide as one unified disk without collapsing.',
        heat: 'Off Heat',
        duration: 1,
        visualCues: 'Glorious crown of golden panko, velvety egg, and sweet onion capping the rice.',
        smell: 'Irresistible fried pork, dashi, and steaming rice.',
        textureCheck: 'Hot, succulent, and comforting.',
        whatShouldThisLookLike: 'Picture-perfect restaurant katsudon bowl.',
        tip: 'Tilt the pan close to the bowl so the cutlet doesn’t drop and splash hot broth.',
        commonMistake: 'Scooping cutlet out with a fork, shattering the presentation.',
        moveOnWhen: 'Topping is seated gracefully on the rice.',
        quickInstructions: 'Tilt pan and slide the cutlet and egg directly over the bowl of rice.'
      }
    ],
    commonMistakes: [
      { mistake: 'Eggs became completely hard and dry.', remedy: 'Eggs cooked too long over high heat. Always shut off burner and let residual steam set the eggs.' },
      { mistake: 'Rice turned into a soggy soup.', remedy: 'Too much broth was added to the pan or it wasn’t allowed to simmer down before adding the cutlet.' }
    ],
    troubleshooting: [
      {
        problem: 'Egg stuck to the pan and won\'t slide out',
        whatHappened: 'Pan had dry spots or broth evaporated completely.',
        whyItHappened: 'Too little liquid or non-stick coating worn.',
        whatToDoNow: 'Use a flexible silicone spatula to gently run around the perimeter and ease it onto the rice.',
        howToPrevent: 'Ensure broth covers the entire bottom of the pan before adding eggs.'
      }
    ],
    substitutions: [
      { original: 'Tonkatsu pork cutlet', substitute: 'Chicken thigh cutlet (Chicken Katsudon) or diced raw chicken thighs (Oyakodon)', notes: 'Oyakodon (Parent & Child bowl) uses raw chicken thighs simmered in the broth before eggs.' }
    ],
    safetyNotes: [
      'Use pasteurized or fresh high-quality eggs if enjoying the authentic soft-cooked egg texture.'
    ],
    servingGuide: {
      restingTime: 'Serve immediately.',
      garnishing: 'Mitsuba, scallion rings, and a dusting of shichimi togarashi (7-spice chili).',
      plating: 'Deep ceramic donburi bowl.',
      temperature: 'Piping hot.',
      accompaniments: 'A bowl of hot miso soup and crunchy pickled daikon (takuan).'
    }
  },

  // 14. GYOZA (Japanese Pan-Fried Dumplings / Yaki-Gyoza)
  {
    id: 'gyoza',
    name: 'Crispy Pan-Fried Yaki Gyoza',
    cuisine: 'Japanese',
    region: 'Japan (Utsunomiya / Hamamatsu)',
    servings: 4,
    prepTime: 40,
    cookTime: 15,
    difficulty: 'Medium',
    overview: {
      summary: 'Japan\'s beloved pan-fried dumplings: delicate round wrappers stuffed with finely minced pork, shredded cabbage, garlic, ginger, and sesame oil, pleated neatly, pan-seared until the base is dark golden and crispy, then steam-fried under a lid with water (hanetsuki) to produce a tender, succulent top and a shatteringly crisp bottom.',
      appearance: 'Crescent-shaped pleated dumplings arranged in a circle or neat rows with a gleaming mahogany-crisped bottom and translucent steamed top.',
      texture: 'Contrast of shatteringly crisp, crackling base and tender, chewy steamed wrapper enclosing a juicy, savory meat filling.',
      flavor: 'Savory pork umami, punchy garlic-ginger aromatics, nutty toasted sesame oil, and bright rice vinegar-soy-chili dipping sauce.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: '10 to 12-inch heavy flat-bottomed skillet with tight lid (cast iron or non-stick)', purpose: 'Essential for even heat distribution and trapping steam during the steaming phase.' },
      { name: 'Small prep bowl with cold water', purpose: 'For wetting wrapper edges during pleating.' },
      { name: 'Baking sheet dusted with cornstarch', purpose: 'Prevents assembled raw gyoza from sticking before cooking.' }
    ],
    beforeYouStart: [
      { task: 'Finely mince 250g green cabbage; toss with 1/2 tsp salt and rest 10 minutes, then squeeze firmly in cheesecloth to extract excess water.', durationMinutes: 15 },
      { task: 'Finely mince 2 cloves garlic, 1 tbsp fresh ginger, and 3 stalks garlic chives (nira).', durationMinutes: 5 },
      { task: 'Combine 2 tbsp soy sauce, 2 tbsp rice vinegar, and 1 tsp rayu (Japanese chili oil) for the dipping sauce.', durationMinutes: 2 }
    ],
    ingredientPrepGuide: [
      { item: 'Squeezing Cabbage Moisture', technique: 'Cabbage is over 90% water. Squeezing out the liquid after salting is the #1 secret to preventing soggy, bursting gyoza. The squeezed cabbage stays crunchy while absorbing rich pork juices.' },
      { item: 'Kneading Filling', technique: 'Vigorously knead minced pork with soy sauce, sake, sesame oil, and salt using your hand in circular motions until the meat turns pale, sticky, and forms fibrous strands. This protein emulsification traps juices inside.' }
    ],
    essentialIngredients: [
      { name: 'Ground pork (70/30 meat to fat ratio)', prep: 'chilled', amount: '250g', metric: '250g', imperial: '9 oz', common: '1/2 lb' },
      { name: 'Green cabbage', prep: 'finely minced, salted and squeezed bone-dry', amount: '250g', metric: '250g', imperial: '9 oz', common: '2 cups' },
      { name: 'Nira (garlic chives) or scallions', prep: 'finely sliced', amount: '3 stalks', metric: '30g', imperial: '1 oz', common: '1/3 cup' },
      { name: 'Fresh ginger', prep: 'finely grated', amount: '1 tbsp', metric: '15g', imperial: '0.5 oz', common: '1 tbsp' },
      { name: 'Garlic cloves', prep: 'finely grated', amount: '2 cloves', metric: '10g', imperial: '0.35 oz', common: '2 cloves' },
      { name: 'Soy sauce (Shoyu)', prep: 'seasoning for meat', amount: '1 tbsp', metric: '15ml', imperial: '0.5 fl oz', common: '1 tbsp' },
      { name: 'Toasted sesame oil', prep: 'divided (filling & finishing)', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp' },
      { name: 'Japanese cooking sake', prep: 'for tenderizing meat', amount: '1 tbsp', metric: '15ml', imperial: '0.5 fl oz', common: '1 tbsp' },
      { name: 'Round gyoza wrappers (thin Japanese style)', prep: 'at room temperature', amount: '30 wrappers', metric: '30 wrappers', imperial: '30 wrappers', common: '1 pack' },
      { name: 'Neutral cooking oil', prep: 'for pan-frying', amount: '1.5 tbsp', metric: '22ml', imperial: '0.75 fl oz', common: '1.5 tbsp' },
      { name: 'Water for steaming', prep: 'warm water', amount: '80ml', metric: '80ml', imperial: '2.7 fl oz', common: '1/3 cup' }
    ],
    steps: [
      {
        step: 1,
        title: 'KNEAD & MIX THE JUICY FILLING',
        whatYouNeed: ['Ground pork', 'Squeezed cabbage', 'Nira chives', 'Ginger', 'Garlic', 'Soy sauce', 'Sake', '1 tbsp sesame oil'],
        description: 'Place ground pork, soy sauce, sake, salt, and 1 tbsp sesame oil in a bowl. Knead vigorously with your hand in circular strokes for 2 minutes until the meat becomes pale, sticky, and tacky. Add squeezed cabbage, nira, garlic, and ginger. Fold gently until evenly distributed. Cover and chill 15 minutes.',
        howToDoIt: 'Kneading develops myosin proteins that bind the fat and liquids, preventing the meat filling from shrinking into a hard dry ball during cooking.',
        heat: 'No Heat',
        duration: 5,
        visualCues: 'Pork turns from red to pale pink and sticky; vegetables are evenly specked.',
        smell: 'Aromatic garlic, ginger, and toasted sesame.',
        textureCheck: 'Tacky, paste-like consistency that holds together.',
        whatShouldThisLookLike: 'Cohesive, sticky dumpling filling.',
        tip: 'Keep the filling cold until ready to wrap so the pork fat stays firm.',
        commonMistake: 'Skipping the kneading stage, which results in crumbly, dry filling.',
        moveOnWhen: 'Filling is sticky and chilled.',
        quickInstructions: 'Knead pork with seasonings for 2 mins until sticky; fold in cabbage and aromatics.'
      },
      {
        step: 2,
        title: 'PLEAT AND ASSEMBLE THE GYOZA',
        whatYouNeed: ['Gyoza wrappers', 'Chilled filling', 'Small bowl of water', 'Cornstarch-dusted baking sheet'],
        description: 'Hold a wrapper flat on your non-dominant palm. Place 1 tablespoon (15g) of filling in the center. Dip your index finger in water and trace the outer half-circle edge. Fold wrapper in half over the filling without letting edges touch. Using your dominant thumb and index finger, create 4 to 6 small pleats along the front edge from right to left, pressing each pleat firmly against the flat back wrapper. Press base flat against the cutting board.',
        howToDoIt: 'Pleating only the front edge curves the dumpling into a natural crescent and creates a wide, flat bottom that sears perfectly against the pan.',
        heat: 'No Heat',
        duration: 20,
        visualCues: 'Neat crescent dumplings with 4–6 crisp pleats along the front curve and a wide flat base.',
        textureCheck: 'Seams are tightly glued with no air pockets.',
        whatShouldThisLookLike: 'Row of uniform, upright crescent dumplings.',
        tip: 'Flatten the bottom of each dumpling firmly against the board so it stands upright on its own.',
        commonMistake: 'Overfilling, which forces raw meat into the seams and causes dumplings to burst open in the pan.',
        moveOnWhen: 'All 30 dumplings are pleated and resting upright on baking sheet.',
        quickInstructions: 'Place 1 tbsp filling on wrapper, wet top edge, make 4-6 pleats on front, press base flat.'
      },
      {
        step: 3,
        title: 'SEAR THE CRISPY BASES',
        whatYouNeed: ['Skillet', '1 tbsp neutral oil', '15 gyoza (for one batch)'],
        description: 'Heat 1 tbsp oil in the skillet over medium heat until shimmering. Arrange gyoza in two neat rows or in a circular pinwheel, bases flat against the pan. Sear undisturbed for 2 to 3 minutes without moving them.',
        howToDoIt: 'Direct contact with hot oil fries the wrapper base into a rigid, golden crust before any moisture is introduced.',
        heat: 'Medium Heat',
        duration: 3,
        visualCues: 'Bottom edges of the wrappers turn pale golden-amber.',
        hear: 'Brisk, even sizzling.',
        smell: 'Toasted dumpling wrapper aroma.',
        textureCheck: 'Bottom is crisp and firm.',
        whatShouldThisLookLike: 'Upright dumplings with lightly browned bottoms.',
        tip: 'Lift one dumpling gently with a spatula to inspect the color before adding water.',
        commonMistake: 'Shaking the pan during the initial sear, which breaks delicate wrappers.',
        moveOnWhen: 'Bottoms are uniform golden brown.',
        quickInstructions: 'Arrange gyoza flat in hot oil; sear 2-3 mins until bottoms are golden.'
      },
      {
        step: 4,
        title: 'STEAM UNDER LID (THE STEAM-FRY)',
        whatYouNeed: ['80ml warm water', 'Skillet lid'],
        description: 'Pour 80ml of warm water directly into the pan (it will sizzle violently). Cover IMMEDIATELY with the lid. Reduce heat to medium-low and steam for 5 minutes. Trapped steam cooks the meat filling and gelatinizes the wrapper dough.',
        howToDoIt: 'The steam-fry method (pan-fry then steam) cooks the raw pork through while preserving the crisp bottom.',
        heat: 'Medium-Low Heat',
        duration: 5,
        visualCues: 'Lid fogs up with vigorous white steam; wrappers become translucent and glossy.',
        hear: 'Muffled, roaring boil beneath the lid.',
        smell: 'Savory pork and garlic chive steam.',
        textureCheck: 'Wrappers look translucent and plump.',
        whatShouldThisLookLike: 'Steaming dumplings with translucent skins.',
        tip: 'Have the lid in your other hand ready to cover the instant water hits the pan to prevent hot oil splatters.',
        commonMistake: 'Pouring too much water, which boils the dumplings soggy instead of steaming them.',
        moveOnWhen: '5 minutes have elapsed and water is almost completely absorbed.',
        quickInstructions: 'Pour in 80ml water, cover immediately with lid, steam on medium-low for 5 mins.'
      },
      {
        step: 5,
        title: 'UNCOVER, CRISP WITH SESAME OIL & SERVE',
        whatYouNeed: ['1 tbsp toasted sesame oil', 'Spatula', 'Serving plate'],
        description: 'Remove lid. There should only be a thin glaze of water remaining. Drizzle 1 tbsp of sesame oil around the perimeter of the pan so it flows under the dumplings. Cook uncovered on medium heat for 2 minutes until all water evaporates and the bottoms sizzle into a crackling, mahogany-crisp crust. Slide spatula under dumplings and flip onto a plate, crisp side up.',
        howToDoIt: 'Sesame oil fries the bottom crust in the final seconds, imparting nutty fragrance and an ultra-crisp crunch.',
        heat: 'Medium Heat',
        duration: 2,
        visualCues: 'Water evaporates; sizzling turns loud and crisp; bottoms are deep mahogany.',
        hear: 'Crackling shallow-fry sound.',
        smell: 'Intense nutty sesame oil aroma.',
        textureCheck: 'Shatteringly crisp base when tapped with spatula.',
        whatShouldThisLookLike: 'Glistening dumplings with a dark golden, crackling bottom.',
        tip: 'Invert a plate over the skillet and flip the entire pan upside down to reveal the gorgeous golden circle.',
        commonMistake: 'Removing from pan while water is still pooled at the bottom — crust will turn soggy immediately.',
        moveOnWhen: 'Bottoms are dark golden, dry, and crackling crisp.',
        quickInstructions: 'Uncover, drizzle sesame oil, fry 2 mins until water vanishes and bottoms crackle; invert onto plate.'
      }
    ],
    commonMistakes: [
      { mistake: 'Dumpling wrappers tore open during steaming.', remedy: 'Wrappers were overfilled or edges weren\'t sealed with water. Leave a 5mm border free of filling and press pleats firmly.' },
      { mistake: 'Bottom was soggy instead of crisp.', remedy: 'Dumplings were removed before water fully evaporated. Always uncover and fry with sesame oil until all liquid is gone.' }
    ],
    troubleshooting: [
      {
        problem: 'Gyoza are stuck stubbornly to the pan bottom',
        whatHappened: 'Starch adhered to pan before crust formed or non-stick coating failed.',
        whyItHappened: 'Insufficient oil during initial sear or rushed flip.',
        whatToDoNow: 'Turn off heat, cover with lid for 1 minute to let steam soften the grip, then nudge gently with a thin metal spatula.',
        howToPrevent: 'Use a seasoned cast-iron or good non-stick skillet and ensure oil coats the pan completely.'
      }
    ],
    substitutions: [
      { original: 'Ground pork', substitute: 'Ground chicken thighs or finely minced king oyster mushrooms with firm tofu', notes: 'Chicken gyoza are lighter and delicious with a pinch of yuzu kosho.' },
      { original: 'Nira (garlic chives)', substitute: 'Scallions mixed with 1 extra minced garlic clove', notes: 'Provides the exact pungent aromatic balance.' }
    ],
    safetyNotes: [
      'Raw pork must reach an internal temperature of 71°C (160°F).'
    ],
    servingGuide: {
      restingTime: '1 minute.',
      garnishing: 'Serve crisp side facing up, paired with small dipping bowls.',
      plating: 'Arrange in a tight circular pinwheel or parallel rows on an elongated ceramic platter.',
      temperature: 'Piping hot and crackling.',
      accompaniments: 'Dipping sauce (equal parts soy sauce and rice vinegar with a dash of rayu chili oil) and cold lager.'
    }
  },

  // 15. ONIGIRI (Japanese Rice Balls)
  {
    id: 'onigiri',
    name: 'Traditional Japanese Onigiri (Rice Balls)',
    cuisine: 'Japanese',
    region: 'Japan (National)',
    servings: 4,
    prepTime: 15,
    cookTime: 20,
    difficulty: 'Easy',
    overview: {
      summary: 'The iconic Japanese comfort food staple: freshly steamed short-grain rice molded by hand into classic triangles, seasoned with fine sea salt, stuffed with savory fillings like flaked salted salmon (sake), seasoned tuna-mayo, or tart pickled plum (umeboshi), wrapped in crisp roasted nori seaweed.',
      appearance: 'Neat triangular white rice parcels wrapped with a crisp black nori jacket, dotted with a morsel of filling on top for identification.',
      texture: 'Firm, fluffy individual rice grains that hold together comfortably in hand yet crumble tenderly upon the bite, with a crisp crunch from nori.',
      flavor: 'Pure savory rice enhanced by clean mineral sea salt, rich umami fillings, and toasted oceanic nori.',
      restingTimeMinutes: 5
    },
    equipment: [
      { name: 'Onigiri rice mold (optional for beginners)', purpose: 'Helps shape uniform triangular rice balls easily without burning hands.' },
      { name: 'Small bowl of water and fine sea salt', purpose: 'Keeps rice from sticking to hands and seasons the exterior surface.' }
    ],
    beforeYouStart: [
      { task: 'Cook 350g short-grain Japanese rice (unseasoned, plain steamed rice); let cool slightly to warm handling temperature (approx 50°C / 120°F).', durationMinutes: 20 },
      { task: 'Flake 1 grilled salted salmon fillet into small chunks; or mix 1 can drained tuna with 2 tbsp Kewpie mayo and 1/2 tsp soy sauce.', durationMinutes: 5 },
      { task: 'Cut nori seaweed sheets into 4cm wide strips.', durationMinutes: 2 }
    ],
    ingredientPrepGuide: [
      { item: 'Rice Selection & Temperature', technique: 'Only use Japanese short-grain rice (Koshihikari or similar). Medium or long grain rices lack the amylopectin starch required for the grains to cling together naturally. Mold while rice is warm; cold rice will not bind.' },
      { item: 'Hand Salting (Shio-Te)', technique: 'Wet both hands in water, shake off excess droplets, then rub 1/2 tsp fine sea salt across both palms. Salting your hands seasons the entire exterior surface while naturally inhibiting bacterial growth.' }
    ],
    essentialIngredients: [
      { name: 'Cooked short-grain Japanese rice', prep: 'steamed warm', amount: '600g', metric: '600g', imperial: '21 oz', common: '4 cups cooked' },
      { name: 'Fine sea salt', prep: 'for coating hands', amount: '2 tsp', metric: '10g', imperial: '0.35 oz', common: '2 tsp' },
      { name: 'Grilled salted salmon fillet (Sake)', prep: 'flaked into small bites', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '1 fillet' },
      { name: 'Canned tuna in oil', prep: 'drained and mixed with 2 tbsp Kewpie mayo & 1/2 tsp soy sauce', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '1 can' },
      { name: 'Toasted Nori seaweed sheets', prep: 'cut into 4cm x 15cm strips', amount: '4 sheets', metric: '4 sheets', imperial: '4 sheets', common: '4 sheets' },
      { name: 'Toasted white & black sesame seeds', prep: 'for dusting tops', amount: '1 tbsp', metric: '10g', imperial: '0.35 oz', common: '1 tbsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'PREPARE SALTED HANDS (SHIO-TE)',
        whatYouNeed: ['Bowl of cold water', 'Fine sea salt'],
        description: 'Dip both hands into the bowl of clean water and shake off excess droplets so palms are evenly damp. Dab your index and middle finger into fine sea salt (about 1/4 to 1/2 tsp) and rub your palms together evenly.',
        howToDoIt: 'Water creates a barrier preventing rice starch from sticking to skin, while salt seasons the exterior and preserves the rice.',
        heat: 'No Heat',
        duration: 1,
        visualCues: 'Glistening, evenly damp, salted palms.',
        textureCheck: 'Slick and salted.',
        whatShouldThisLookLike: 'Moist palms lightly coated with fine salt grains.',
        tip: 'If hands are too wet, the rice ball will turn mushy; if too dry, rice will stick like glue.',
        commonMistake: 'Trying to mold onigiri with dry hands — rice will cling to fingers in huge sticky clumps.',
        moveOnWhen: 'Hands are salted and damp.',
        quickInstructions: 'Wet hands in water, shake excess, rub 1/2 tsp salt evenly across palms.'
      },
      {
        step: 2,
        title: 'CREATE POCKET & INSERT FILLING',
        whatYouNeed: ['100g warm rice', '1 tbsp salmon or tuna-mayo filling'],
        description: 'Scoop about 100g (a generous handful) of warm rice into one hand. Make an indentation in the center with your thumb. Place 1 tablespoon of your chosen filling (salted salmon or tuna-mayo) into the pocket. Gently fold the surrounding rice over the pocket to completely conceal the filling inside.',
        howToDoIt: 'Enclosing the filling inside the core keeps it fresh and ensures every bite contains seasoned rice and savory center.',
        heat: 'No Heat',
        duration: 1,
        visualCues: 'A round ball of rice with filling hidden inside.',
        textureCheck: 'Warm and cohesive.',
        whatShouldThisLookLike: 'A smooth mound of rice hiding the filling.',
        tip: 'Reserve a tiny flake of filling to place on top later so you know what is inside each ball.',
        commonMistake: 'Overstuffing with filling, causing the rice ball to rupture and burst during shaping.',
        moveOnWhen: 'Filling is completely encased in rice.',
        quickInstructions: 'Make a dent in 100g warm rice, insert 1 tbsp filling, fold rice over to conceal.'
      },
      {
        step: 3,
        title: 'MOLD THE TRIANGLE (SANKAKU-KEI)',
        whatYouNeed: ['Both hands'],
        description: 'Cup your non-dominant hand into an L-shaped cradle to hold the bottom of the rice ball. Bend your top dominant hand into a V-shaped roof over the top. Press gently with a firm, rhythmic squeeze. Rotate the rice ball 120 degrees and squeeze again. Repeat 4–5 times until you form a neat, compact equilateral triangle with rounded edges.',
        howToDoIt: 'Use gentle, firm pressure — just enough for the grains to lock together. Squeezing too hard smashes the grains into a dense brick.',
        heat: 'No Heat',
        duration: 2,
        visualCues: 'A sharp, clean triangular prism about 3cm (1.2 inches) thick with flat sides.',
        textureCheck: 'Firm enough to hold its shape when lifted, yet fluffy inside.',
        whatShouldThisLookLike: 'Classic Japanese triangular onigiri.',
        tip: 'Apply pressure from the top "roof" hand while the bottom hand merely rotates and holds shape.',
        commonMistake: 'Squeezing with brutal force like playdough, mashing individual grains into paste.',
        moveOnWhen: 'Rice forms a stable, neat triangle.',
        quickInstructions: 'Form a V-shape with top hand and L-cradle with bottom; rotate and press 4-5 times into triangle.'
      },
      {
        step: 4,
        title: 'WRAP IN CRISP NORI SEAWEED',
        whatYouNeed: ['Nori strip', 'Formed rice ball', 'Tiny flake of filling for garnish'],
        description: 'Take a strip of nori. Wrap it around the bottom base of the triangular rice ball, bringing both ends up the sides so your fingers can hold the nori without touching sticky rice. Place a tiny morsel of filling right on the apex of the triangle.',
        howToDoIt: 'The nori acts as both a flavor enhancer and an edible wrapper, keeping fingers clean while eating on the go.',
        heat: 'No Heat',
        duration: 1,
        visualCues: 'Crisp black nori jacket hugging the gleaming white rice triangle with topping marker.',
        smell: 'Toasted ocean seaweed and warm rice.',
        textureCheck: 'Crisp nori against soft rice.',
        whatShouldThisLookLike: 'Convenience-store style authentic onigiri.',
        tip: 'Wrap nori immediately before eating if you love maximum crunch; wrap earlier if you prefer soft nori.',
        commonMistake: 'Wrapping wet nori that has been exposed to kitchen steam, causing it to turn rubbery.',
        moveOnWhen: 'Wrapped and decorated.',
        quickInstructions: 'Wrap nori strip around the base; dab a tiny flake of filling on top.'
      }
    ],
    commonMistakes: [
      { mistake: 'Onigiri crumbled apart when picked up.', remedy: 'Rice was too dry, cold, or you used long-grain rice. Use warm Japanese short-grain rice and press firmly enough to bind grains.' },
      { mistake: 'Rice was bland and tasteless.', remedy: 'You forgot the salt step. Shio-te (salting hands) is essential for seasoning plain rice.' }
    ],
    troubleshooting: [
      {
        problem: 'Rice is sticking all over your palms and fingers',
        whatHappened: 'Hands dried out between molding balls.',
        whyItHappened: 'Starches adhere to dry skin instantly.',
        whatToDoNow: 'Wash hands clean with cold water, rewets palms, and apply fresh salt.',
        howToPrevent: 'Dip fingers in water before molding every single rice ball.'
      }
    ],
    substitutions: [
      { original: 'Salted salmon', substitute: 'Umeboshi (salted pickled plum), spicy cod roe (mentaiko), or seasoned kombu seaweed', notes: 'Umeboshi is the timeless traditional filling known for keeping rice fresh on long journeys.' }
    ],
    safetyNotes: [
      'Eat freshly made onigiri within 6 hours at room temperature, or wrap tightly in plastic wrap and refrigerate.'
    ],
    servingGuide: {
      restingTime: 'Ready immediately.',
      garnishing: 'Toasted black and white sesame seeds on the rice shoulders.',
      plating: 'Serve on a bamboo tray or pack in a traditional bento box.',
      temperature: 'Warm or room temperature (never cold straight out of fridge).',
      accompaniments: 'Hot green tea (sencha), pickled radish (takuan), and miso soup.'
    }
  },

  // 16. BENTO (Traditional Japanese Bento Box)
  {
    id: 'bento',
    name: 'Artisan Japanese Shokado Bento Box',
    cuisine: 'Japanese',
    region: 'Japan (Kyoto / Tokyo)',
    servings: 4,
    prepTime: 35,
    cookTime: 25,
    difficulty: 'Medium',
    overview: {
      summary: 'The epitome of Japanese culinary harmony and visual balance: a compartmentalized meal featuring seasoned rice sprinkled with black sesame, sweet rolled omelette (tamagoyaki), teriyaki glazed chicken bites, blanched sesame spinach (goma-ae), and crisp pickled vegetables, balancing the 5 colors (white, black, red, yellow, green) and 5 flavors.',
      appearance: 'A vibrant lacquered bento box with distinct quadrants showcasing brilliant yellow omelette, emerald spinach, mahogany teriyaki, ruby cherry tomatoes, and white rice.',
      texture: 'Exciting array of textures: fluffy rice, custardy sweet egg, succulent glazed chicken, tender greens, and crunchy pickles.',
      flavor: 'Complete balance of sweet, savory, umami, tangy, and salty flavors that taste exceptional at room temperature.',
      restingTimeMinutes: 5
    },
    equipment: [
      { name: '4-compartment Bento Box (lacquered or multi-compartment lunch box)', purpose: 'Holds different food components separately without sauces mingling.' },
      { name: 'Makiyakinabe (rectangular tamagoyaki omelette pan)', purpose: 'For rolling sweet layered Japanese rolled omelette.' },
      { name: 'Silicon silicone baking cups or green shiso leaves', purpose: 'Partitions juicy dishes and prevents flavor transfer.' }
    ],
    beforeYouStart: [
      { task: 'Cook 400g Japanese short-grain rice and let cool to room temperature.', durationMinutes: 20 },
      { task: 'Cut 400g boneless chicken thighs into 3cm bite-sized nuggets.', durationMinutes: 5 },
      { task: 'Whisk 4 eggs with 1.5 tbsp dashi, 1 tbsp sugar, 1 tsp mirin, and 1/2 tsp soy sauce for tamagoyaki.', durationMinutes: 3 }
    ],
    ingredientPrepGuide: [
      { item: 'Tamagoyaki Rolling Technique', technique: 'Pour a thin layer of egg into the rectangular pan over medium-low heat. When 80% set, roll from far edge toward you into a cylinder. Push roll back to the far edge, oil the pan, pour another thin layer (lifting the cooked roll so raw egg flows underneath), and roll again. Repeat 3 times to build tender golden layers.' },
      { item: 'Cooling Before Packing', technique: 'All hot foods MUST cool to room temperature before packing and closing the bento lid. Closing warm food traps steam, creating condensation that makes fried foods soggy and accelerates bacterial growth.' }
    ],
    essentialIngredients: [
      { name: 'Boneless chicken thighs', prep: 'cut into 3cm bites for teriyaki', amount: '400g', metric: '400g', imperial: '14 oz', common: '400g' },
      { name: 'Teriyaki glaze (soy sauce, mirin, sake, sugar)', prep: 'equal parts (2 tbsp each)', amount: '8 tbsp', metric: '120ml', imperial: '4 fl oz', common: '1/2 cup' },
      { name: 'Large eggs', prep: 'whisked for tamagoyaki', amount: '4 eggs', metric: '200g', imperial: '7 oz', common: '4 eggs' },
      { name: 'Fresh baby spinach', prep: 'blanched, squeezed dry and tossed with sesame dressing', amount: '200g', metric: '200g', imperial: '7 oz', common: '1 bunch' },
      { name: 'Toasted ground sesame seeds (Surigoma)', prep: 'for spinach goma-ae', amount: '2 tbsp', metric: '20g', imperial: '0.7 oz', common: '2 tbsp' },
      { name: 'Cooked short-grain rice', prep: 'cooled to room temperature', amount: '600g', metric: '600g', imperial: '21 oz', common: '4 cups' },
      { name: 'Umeboshi (pickled red plum)', prep: 'centered on white rice (Hinomaru flag motif)', amount: '4 plums', metric: '4 pieces', imperial: '4 pieces', common: '4 plums' },
      { name: 'Black sesame seeds', prep: 'for sprinkling on rice', amount: '1 tbsp', metric: '10g', imperial: '0.35 oz', common: '1 tbsp' },
      { name: 'Cherry tomatoes & Edamame pods', prep: 'for color balance & gap fillers', amount: '8 pieces', metric: '100g', imperial: '3.5 oz', common: '8 pieces' }
    ],
    steps: [
      {
        step: 1,
        title: 'PREPARE SWEET ROLLED TAMAGOYAKI',
        whatYouNeed: ['Rectangular pan', 'Whisked egg mixture', 'Oil dabber'],
        description: 'Heat rectangular pan over medium-low heat with a thin film of oil. Pour 1/3 of the egg mixture. When softly set, roll tightly toward you. Push roll to far edge. Oil the empty pan surface, pour second layer (lifting roll so egg flows beneath). When set, roll forward. Repeat with final third. Transfer to bamboo mat to set square shape for 3 minutes; slice into 2cm thick rounds.',
        howToDoIt: 'Layering creates dozens of micro-folds that trap sweet savory custard within a firm, packable slice.',
        heat: 'Medium-Low Heat',
        duration: 8,
        visualCues: 'Golden spiral cross-section with no browned burn marks.',
        smell: 'Sweet, delicate dashi and egg aroma.',
        textureCheck: 'Tender, juicy, and springy like a sponge cake.',
        whatShouldThisLookLike: 'Yellow oval slices with spiral layers.',
        tip: 'Use a paper towel dipped in oil to re-grease the pan between every layer.',
        commonMistake: 'Cooking over high heat, which puffs the egg with air bubbles and browns the exterior dark.',
        moveOnWhen: 'Tamagoyaki is sliced into neat yellow spirals.',
        quickInstructions: 'Cook egg in 3 successive thin rolled layers in rectangular pan; cool and slice into 2cm rounds.'
      },
      {
        step: 2,
        title: 'SEAR & GLAZE TERIYAKI CHICKEN',
        whatYouNeed: ['Skillet', 'Chicken thigh cubes', 'Teriyaki glaze (soy, mirin, sake, sugar)'],
        description: 'Heat 1 tsp oil in a skillet over medium heat. Sear chicken thigh pieces skin-side down for 4 minutes until golden and crisp. Turn and cook 3 minutes. Pour in teriyaki glaze. Simmer rapidly for 2 minutes, rolling chicken pieces in the bubbling sauce until lacquered and glazed. Remove and cool on a plate.',
        howToDoIt: 'Reducing the sauce in the pan caramelizes the sugars into a clinging syrup that won\'t leak across the bento box.',
        heat: 'Medium to Medium-High Heat',
        duration: 9,
        visualCues: 'Chicken is coated in a sticky, mirror-gloss mahogany syrup.',
        smell: 'Rich caramelized soy sauce and sweet mirin.',
        textureCheck: 'Crispy skin, juicy interior, sticky glaze.',
        whatShouldThisLookLike: 'Glossy, mahogany glazed chicken bites.',
        tip: 'Cool chicken completely before packing so the glaze solidifies and stays put.',
        commonMistake: 'Packing hot watery chicken with runny un-reduced sauce, which soaks the entire bento.',
        moveOnWhen: 'Glaze is thick, glossy, and chicken is cooked to 75°C.',
        quickInstructions: 'Sear chicken 7 mins, add teriyaki glaze, reduce until sticky and lacquered; cool completely.'
      },
      {
        step: 3,
        title: 'BLANCH & DRESS SESAME SPINACH (GOMA-AE)',
        whatYouNeed: ['Pot of boiling salted water', 'Ice water bath', 'Spinach', 'Ground sesame, sugar, soy sauce'],
        description: 'Plunge spinach into boiling water for 30 seconds. Transfer immediately to ice water to lock in the vibrant green color. Squeeze spinach firmly with hands to expel all moisture. Cut into 4cm lengths. Toss with ground toasted sesame seeds, 1 tsp sugar, and 1 tsp soy sauce.',
        howToDoIt: 'Shocking in ice water deactivates chlorophyll enzymes, keeping the spinach brilliantly emerald green.',
        heat: 'High Heat (Boiling)',
        duration: 5,
        visualCues: 'Vibrant emerald green spinach leaves coated in nutty sesame seed paste.',
        smell: 'Toasted nutty sesame aroma.',
        textureCheck: 'Tender with a clean, slight leafy crunch.',
        whatShouldThisLookLike: 'Tightly packed bundles of green sesame spinach.',
        tip: 'Squeeze out every drop of water before seasoning so the dressing stays concentrated.',
        commonMistake: 'Leaving spinach wet and soggy, which dilutes the nutty sesame flavor.',
        moveOnWhen: 'Spinach is squeezed, chopped, and seasoned.',
        quickInstructions: 'Blanch spinach 30s, shock in ice water, squeeze dry, toss with sesame, sugar, and soy.'
      },
      {
        step: 4,
        title: 'THE 5-COLOR BENTO ASSEMBLY',
        whatYouNeed: ['Bento box', 'Cooled rice', 'Umeboshi', 'Tamagoyaki slices', 'Teriyaki chicken', 'Sesame spinach', 'Dividers', 'Edamame', 'Tomatoes'],
        description: 'Pack rice into the largest compartment (half the box). Press an umeboshi plum into the center (representing the Hinomaru flag) and sprinkle black sesame on the rice. Place a silicone cup or shiso leaf in the main compartment; fill with teriyaki chicken. In the next quadrants, arrange 2 slices of yellow tamagoyaki, green sesame spinach, red cherry tomatoes, and edamame pods to fill all gaps.',
        howToDoIt: 'Tight packing without gaps prevents items from shifting when the bento is carried.',
        heat: 'No Heat',
        duration: 8,
        visualCues: 'Stunning tapestry of 5 colors: White (rice), Black (sesame/nori), Red (plum/tomatoes), Yellow (omelette), Green (spinach/edamame).',
        smell: 'Harmonious aromas of sweet tamagoyaki, savory teriyaki, and nutty sesame.',
        textureCheck: 'Tightly packed, stable, and visually balanced.',
        whatShouldThisLookLike: 'A vibrant, exquisite, balanced Japanese bento box.',
        tip: 'Use edamame pods and cherry tomatoes as edible wedges to secure loose items tightly.',
        commonMistake: 'Leaving open empty spaces, which causes all components to slide into a messy jumble during transport.',
        moveOnWhen: 'Bento box is fully packed, vibrant, and securely arranged.',
        quickInstructions: 'Pack rice with umeboshi on one side; pack chicken, tamagoyaki, spinach, tomatoes, and edamame tightly on the other.'
      }
    ],
    commonMistakes: [
      { mistake: 'Bento developed condensation and turned soggy inside.', remedy: 'Food was packed while still hot. Always cool every item completely to room temperature before packing and lidding.' },
      { mistake: 'Flavors mingled into an unappealing blend.', remedy: 'Wet items touched dry items. Use silicone cups, shiso leaves, or dividers between dishes.' }
    ],
    troubleshooting: [
      {
        problem: 'Bento looks dull, flat, and unappetizing',
        whatHappened: 'Missing color contrast (all brown foods).',
        whyItHappened: 'Only meat and rice were packed.',
        whatToDoNow: 'Add a pop of bright green (edamame, parsley), red (cherry tomato), or yellow (corn, egg).',
        howToPrevent: 'Follow the traditional Japanese 5-color rule (Goshiki): White, Black, Red, Yellow, Green.'
      }
    ],
    substitutions: [
      { original: 'Teriyaki chicken', substitute: 'Pan-seared salmon with teriyaki or crispy karaage fried chicken', notes: 'Karaage remains crisp and flavorful at room temperature, making it a bento classic.' }
    ],
    safetyNotes: [
      'If not consuming within 4 hours, pack an ice pack on top of the bento box.'
    ],
    servingGuide: {
      restingTime: 'Ready immediately or packed for lunch.',
      garnishing: 'Umeboshi plum and toasted black sesame seeds.',
      plating: 'Lacquered wooden or modern multi-compartment bento box.',
      temperature: 'Room temperature (the traditional way to savor bento flavors).',
      accompaniments: 'Thermos of hot dashi broth or green tea.'
    }
  },

  // 17. MOCHI (Sweet Japanese Rice Cake / Daifuku)
  {
    id: 'mochi',
    name: 'Artisan Strawberry Daifuku Mochi (Ichigo Daifuku)',
    cuisine: 'Japanese',
    region: 'Japan (Kansai / Kyoto)',
    servings: 6,
    prepTime: 30,
    cookTime: 10,
    difficulty: 'Medium',
    overview: {
      summary: 'Kyoto\'s beloved springtime confectionery: sweet, tart whole fresh strawberries enveloped in silky sweet red bean paste (anko), wrapped in a pillowy, stretchy, translucent skin of freshly steamed mochiko sweet rice dough dusted with silky potato starch (katakuriko).',
      appearance: 'Pristine, powdery snow-white orbs with soft curves; when sliced in half, reveals a striking cross-section of vibrant ruby-red strawberry framed by dark mahogany anko and white mochi.',
      texture: 'Chewy, elastic, pillowy soft mochi skin giving way to smooth sweet red bean paste and a burst of crisp, juicy fresh strawberry.',
      flavor: 'Delicate balance of sweet glutinous rice, rich earthy bean paste, and bright refreshing strawberry acidity.',
      restingTimeMinutes: 10
    },
    equipment: [
      { name: 'Microwave-safe glass bowl & plastic wrap (or stovetop bamboo steamer)', purpose: 'For steaming glutinous rice flour into translucent mochi dough.' },
      { name: 'Silicone spatula', purpose: 'Handles hot, intensely sticky mochi dough without clinging.' },
      { name: 'Baking sheet dusted with potato starch (katakuriko)', purpose: 'Provides a non-stick surface for rolling and shaping mochi.' }
    ],
    beforeYouStart: [
      { task: 'Wash and hull 6 fresh medium strawberries; dry thoroughly with paper towels (moisture will break down anko).', durationMinutes: 5 },
      { task: 'Divide 150g smooth sweet red bean paste (koshian) into 6 equal portions (25g each).', durationMinutes: 5 },
      { task: 'Dust a clean work surface and rolling pin generously with 60g potato starch (katakuriko).', durationMinutes: 2 }
    ],
    ingredientPrepGuide: [
      { item: 'Strawberry Preparation', technique: 'Strawberries must be 100% bone-dry before wrapping. Any residual water droplets will cause the sweet bean paste to slip off and create wet pockets that dissolve the delicate mochi skin.' },
      { item: 'Flour Selection (Mochiko vs Shiratamako)', technique: 'Must use glutinous sweet rice flour (Mochiko or Shiratamako). Regular white rice flour (Joshinko) produces a stiff, dense cake with zero elasticity that hardens instantly.' }
    ],
    essentialIngredients: [
      { name: 'Shiratamako or Mochiko (glutinous sweet rice flour)', prep: 'fine powder', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '3/4 cup' },
      { name: 'Granulated sugar', prep: 'keeps mochi tender & soft', amount: '50g', metric: '50g', imperial: '1.8 oz', common: '1/4 cup' },
      { name: 'Cold water', prep: 'for dissolving flour', amount: '150ml', metric: '150ml', imperial: '5 fl oz', common: '2/3 cup' },
      { name: 'Fresh ripe strawberries', prep: 'hulled, washed, and dried completely', amount: '6 medium', metric: '150g', imperial: '5.3 oz', common: '6 berries' },
      { name: 'Koshian (smooth sweetened red bean paste)', prep: 'divided into 6 balls (25g each)', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '1/2 cup' },
      { name: 'Katakuriko (potato starch) or cornstarch', prep: 'for dusting work surface & hands', amount: '60g', metric: '60g', imperial: '2.1 oz', common: '1/2 cup' }
    ],
    steps: [
      {
        step: 1,
        title: 'WRAP STRAWBERRIES IN RED BEAN PASTE (ANKO)',
        whatYouNeed: ['6 dry strawberries', '6 balls of koshian (25g each)'],
        description: 'Flatten one ball of red bean paste in your palm into a 5cm disk. Place a strawberry in the center, tip pointing up. Mold the paste upward around the strawberry, covering the sides and leaving just the very tip of the berry exposed. Smooth into a neat cone. Repeat for all 6 berries and set aside.',
        howToDoIt: 'Leaving the pointed tip slightly exposed prevents an overly thick layer of bean paste at the apex, allowing the mochi skin to drape elegantly.',
        heat: 'No Heat',
        duration: 6,
        visualCues: 'Six smooth red bean cones with red strawberry tips peeking out.',
        textureCheck: 'Smooth, firm paste holding its shape around the fruit.',
        whatShouldThisLookLike: 'Chocolate-like coated strawberry cones.',
        tip: 'Chilling the anko-wrapped strawberries in the fridge for 10 minutes makes wrapping them in hot mochi much easier.',
        commonMistake: 'Wrapping wet strawberries, which makes the bean paste slide off in gooey clumps.',
        moveOnWhen: 'All 6 strawberries are wrapped in anko.',
        quickInstructions: 'Wrap 25g of bean paste around each dry strawberry, leaving the tip peeking out.'
      },
      {
        step: 2,
        title: 'STEAM THE MOCHI DOUGH TILL TRANSLUCENT',
        whatYouNeed: ['100g mochiko flour', '50g sugar', '150ml water', 'Microwave-safe glass bowl', 'Plastic wrap'],
        description: 'In the glass bowl, whisk mochiko flour, sugar, and water until completely smooth and lump-free. Cover loosely with plastic wrap. Microwave on HIGH (800W) for 1 minute. Remove and stir vigorously with a wet silicone spatula. Cover and microwave again for 1 minute. Stir. Microwave for a final 30 seconds until dough turns glossy, stretchy, and translucent.',
        howToDoIt: 'Heat gelatinizes the rice starches. The dough transitions from opaque white liquid to a thick, translucent, elastic mass.',
        heat: 'Microwave High (approx 2.5 minutes total)',
        duration: 3,
        visualCues: 'Dough turns from chalky white to shiny, slightly translucent, intensely sticky putty.',
        smell: 'Sweet, steamed sweet rice fragrance.',
        textureCheck: 'Extremely stretchy, glossy, and elastic.',
        whatShouldThisLookLike: 'A shiny, translucent ball of hot elastic mochi dough.',
        tip: 'Stirring between microwave bursts ensures even heat distribution and prevents rubbery scorched spots.',
        commonMistake: 'Under-cooking the dough, leaving chalky raw flour starches in the center.',
        moveOnWhen: 'Dough is translucent, glossy, and stretches without snapping.',
        quickInstructions: 'Whisk flour, sugar, water; microwave covered in 3 intervals (1 min, 1 min, 30s) stirring between, until translucent.'
      },
      {
        step: 3,
        title: 'DUST, ROLL & DIVIDE INTO 6 PORTIONS',
        whatYouNeed: ['Hot mochi dough', 'Potato starch dusted surface', 'Rolling pin dusted with starch', 'Bench scraper'],
        description: 'Scrape the hot mochi dough onto the heavily starch-dusted surface. Dust the top of the dough with more starch. Using your hands and a dusted rolling pin, gently pat and roll the dough into a flat rectangle about 6mm thick. Let cool for 2 minutes until comfortably warm. Use a bench scraper or cookie cutter to divide into 6 equal circular rounds.',
        howToDoIt: 'Potato starch neutralizes the intense surface tackiness of the mochi, allowing you to touch and roll it without sticking.',
        heat: 'No Heat',
        duration: 4,
        visualCues: 'Pillowy white dusted dough cut into 6 round disks.',
        textureCheck: 'Soft, powdery outside, ultra-elastic inside.',
        whatShouldThisLookLike: 'Six powdery, round, stretchy mochi wrappers.',
        tip: 'Brush off excess potato starch with a soft pastry brush so the mochi seams can stick to themselves when pinched.',
        commonMistake: 'Touching naked hot mochi with bare un-starched fingers — it will weld to your skin.',
        moveOnWhen: 'Six flat mochi rounds are cut and dusted.',
        quickInstructions: 'Roll hot dough onto starched surface 6mm thick; divide into 6 round wrappers.'
      },
      {
        step: 4,
        title: 'ENCASE AND PINCH THE DAIFUKU SHUT',
        whatYouNeed: ['Mochi round', 'Anko strawberry', 'Dusting brush'],
        description: 'Take one mochi wrapper in your dusted palm. Brush excess starch off the top. Place an anko-covered strawberry in the center, tip pointing DOWN against the palm. Gently stretch the edges of the mochi wrapper up and over the flat bottom of the strawberry. Gather the edges together and pinch firmly to seal the seam completely. Invert so the smooth rounded dome faces up. Dust lightly with starch.',
        howToDoIt: 'Pinching the seam on the flat bottom hides the closure and showcases the smooth, flawless dome on top.',
        heat: 'No Heat',
        duration: 6,
        visualCues: 'Pristine, powdery white dome with a smooth surface and no cracks.',
        textureCheck: 'Pillowy soft and yielding like a baby\'s cheek.',
        whatShouldThisLookLike: 'Exquisite, rounded snow-white daifuku mochi.',
        tip: 'If the seam won\'t stick, dab a tiny drop of water on your fingertip to dissolve the starch and glue the dough shut.',
        commonMistake: 'Stretching the mochi too thin over the strawberry tip, causing the fruit to puncture through.',
        moveOnWhen: 'All 6 daifuku are sealed, rounded, and resting on paper liners.',
        quickInstructions: 'Place berry tip-down in mochi wrapper, stretch dough up over the base, pinch shut, and invert.'
      },
      {
        step: 5,
        title: 'REST, SLICE & SERVE',
        whatYouNeed: ['Sharp knife or clean dental floss', 'Serving plates'],
        description: 'Let daifuku rest for 10 minutes at room temperature for the dough to set. To serve, wrap a piece of unflavored thread or dental floss around the vertical center of one daifuku, cross the ends, and pull through to slice cleanly in half, revealing the breathtaking ruby-red and white cross-section.',
        howToDoIt: 'Cutting with dental floss creates a surgical, smudge-free cross-section without squashing the delicate mochi.',
        heat: 'No Heat',
        duration: 2,
        visualCues: 'Stunning cross-section of red strawberry, dark anko halo, and pure white mochi boundary.',
        smell: 'Sweet fresh strawberry and delicate rice.',
        textureCheck: 'Chewy elastic skin, silky bean paste, crisp burst of strawberry juice.',
        whatShouldThisLookLike: 'Masterpiece Japanese wagashi confectionery.',
        tip: 'Never refrigerate mochi long-term — the rice starch retrogrades and turns hard and chalky.',
        commonMistake: 'Using a dull serrated knife to saw through the mochi, crushing the berry and smudging red juice across the white dough.',
        moveOnWhen: 'Sliced and displayed.',
        quickInstructions: 'Rest 10 mins; slice cleanly in half with dental floss to reveal the strawberry interior.'
      }
    ],
    commonMistakes: [
      { mistake: 'Mochi became hard and tough the next day.', remedy: 'Not enough sugar was used in the dough, or mochi was stored in the fridge. Sugar retains moisture and keeps mochi soft at room temperature.' },
      { mistake: 'Dough was impossible to shape and stuck to everything.', remedy: 'Under-dusted work surface. Use plenty of potato starch on hands, rolling pin, and board.' }
    ],
    troubleshooting: [
      {
        problem: 'Mochi dough tore while stretching over strawberry',
        whatHappened: 'Wrapper was rolled too thin or dough cooled down too much.',
        whyItHappened: 'Cold mochi loses its elasticity and tears.',
        whatToDoNow: 'Pinch a tiny piece of warm dough over the tear and smooth with a starched finger.',
        howToPrevent: 'Work quickly while dough is still warm and keep wrappers at least 5-6mm thick.'
      }
    ],
    substitutions: [
      { original: 'Strawberries (Ichigo)', substitute: 'Fresh green muscat grapes, ripe kiwi slices, or mango chunks', notes: 'Shine Muscat grape daifuku is an insanely popular luxury variation in Japan.' },
      { original: 'Koshian (red bean paste)', substitute: 'Shiroan (white bean paste) or chocolate hazelnut paste', notes: 'White bean paste gives an ultra-clean, elegant pastel appearance.' }
    ],
    safetyNotes: [
      'Mochi is very sticky and chewy; take small bites and chew thoroughly before swallowing.'
    ],
    servingGuide: {
      restingTime: '10 minutes at room temperature.',
      garnishing: 'Light dusting of potato starch.',
      plating: 'Serve on small dark ceramic or cedar wagashi plates with a small wooden pick (kuromoji).',
      temperature: 'Room temperature.',
      accompaniments: 'A bowl of freshly whisked ceremonial matcha green tea.'
    }
  }
];
