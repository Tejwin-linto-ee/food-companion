// Mediterranean East Culinary Recipes (Turkish 6 + Middle Eastern 8 = 14 dishes)
module.exports = [
  // 1. TURKISH KEBAB (Adana Kebab)
  {
    id: 'turkish-kebab',
    name: 'Authentic Adana Kebab (Spiced Hand-Minced Lamb on Flat Skewers)',
    cuisine: 'Turkish',
    region: 'Turkey (Adana)',
    servings: 4,
    prepTime: 30,
    cookTime: 15,
    difficulty: 'Medium',
    overview: {
      summary: 'The pride of Southern Turkey: succulent hand-minced lamb neck and tail fat (kuyruk yağı) kneaded with charred red capia peppers, Turkish red pepper flakes (pul biber), and salt. Molded meticulously onto wide, flat iron skewers and grilled over natural hardwood charcoal embers until deeply charred, juicy, and dripping with aromatic fat onto warm lavash.',
      appearance: 'Long, wide rippled skewers of mahogany charred lamb resting on charred flatbread, served alongside blistered green chiles, fire-roasted tomatoes, and sumac-dusted onion salad.',
      texture: 'Tender, juicy, and springy mince with crispy caramelized edges; moist and melting from lamb fat rather than dry or rubbery.',
      flavor: 'Smoky, lamb-rich, moderately fiery from sun-dried Turkish pepper, fragrant with charcoal char and sweet charred red pepper.',
      restingTimeMinutes: 3
    },
    equipment: [
      { name: 'Wide flat metal skewers (2cm to 2.5cm wide)', purpose: 'Essential! Round skewers allow minced meat to spin and fall off; wide flat skewers hold minced meat securely and conduct heat inside.' },
      { name: 'Charcoal grill or heavy cast-iron ribbed grill pan', purpose: 'To achieve extreme heat and authentic charcoal smokiness.' },
      { name: 'Zırh (Turkish curved cleaver) or large chef knife', purpose: 'For hand-chopping meat into tender mince rather than using a meat grinder.' }
    ],
    beforeYouStart: [
      { task: 'Keep ground lamb and tail fat very cold in the refrigerator until kneading to prevent fat from melting.', durationMinutes: 10 },
      { task: 'Finely mince 2 red capia or bell peppers, squeeze out all excess liquid using a fine mesh strainer.', durationMinutes: 5 },
      { task: 'Slice 2 red onions paper-thin and massage with 1 tbsp ground sumac and pinch of salt.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'Meat & Fat Ratio (80/20 or 75/25)', technique: 'Authentic Adana kebab requires lamb with 20-25% fat, traditionally lamb tail fat (kuyruk yağı). Lean beef or lean lamb will dry out completely and fall off the skewer into the fire.' },
      { item: 'Kneading Technique', technique: 'Knead the cold minced meat with salt and pepper paste vigorously for 8-10 minutes until myosin proteins develop and the meat becomes sticky and cohesive like dough.' }
    ],
    essentialIngredients: [
      { name: 'Ground lamb (shoulder or neck, 20% fat)', prep: 'chilled and hand-chopped fine', amount: '600g', metric: '600g', imperial: '1.3 lbs', common: '1.3 lbs' },
      { name: 'Lamb tail fat or beef tallow', prep: 'finely minced', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '100g' },
      { name: 'Red capia pepper or sweet red bell pepper', prep: 'finely minced and squeezed dry', amount: '1 large', metric: '120g', imperial: '4 oz', common: '1 pepper' },
      { name: 'Turkish red pepper flakes (Pul Biber / Aleppo)', prep: 'sun-dried silk flakes', amount: '2 tbsp', metric: '15g', imperial: '0.5 oz', common: '2 tbsp' },
      { name: 'Turkish sweet red pepper paste (Tatlı Biber Salçası)', prep: 'rich paste', amount: '1 tbsp', metric: '20g', imperial: '0.7 oz', common: '1 tbsp' },
      { name: 'Fine sea salt', prep: 'uniodized', amount: '1.5 tsp', metric: '9g', imperial: '0.3 oz', common: '1.5 tsp' },
      { name: 'Warm lavash or Turkish pide bread', prep: 'for wrapping and pressing onto skewers', amount: '4 flatbreads', metric: '4 pieces', imperial: '4 pieces', common: '4 breads' },
      { name: 'Sivri peppers or long green Turkish peppers', prep: 'whole for grilling', amount: '4 peppers', metric: '80g', imperial: '2.8 oz', common: '4 peppers' },
      { name: 'Ripe plum tomatoes', prep: 'halved for grilling', amount: '2 tomatoes', metric: '200g', imperial: '7 oz', common: '2 tomatoes' }
    ],
    optionalIngredients: [
      { name: 'Cumin powder (Kimyon)', prep: 'ground', amount: '1/2 tsp', metric: '1g', imperial: '0.04 oz', common: '1/2 tsp' },
      { name: 'Garlic cloves', prep: 'crushed to paste (for Urfa style)', amount: '2 cloves', metric: '6g', imperial: '0.2 oz', common: '2 cloves' }
    ],
    steps: [
      {
        step: 1,
        title: 'KNEAD THE MEAT MIXTURE UNTIL STICKY',
        whatYouNeed: ['Cold ground lamb', 'Chilled minced fat', 'Squeezed red pepper', 'Pul biber', 'Pepper paste', 'Salt'],
        description: 'In a chilled stainless steel bowl, combine minced lamb, fat, drained minced red pepper, pul biber, red pepper paste, and salt. Knead vigorously with your knuckles for 8 to 10 minutes. The meat will change texture from grainy to a smooth, sticky, emulsified paste that clings to your hand when inverted.',
        howToDoIt: 'Kneading activates protein strands (myosin), acting as a natural glue that binds the meat firmly without needing egg or breadcrumbs.',
        heat: 'No Heat (Chilled)',
        duration: 10,
        visualCues: 'The meat turns pale pink-orange and forms a cohesive, stringy, uniform paste.',
        smell: 'Sweet red peppers and seasoned lamb.',
        textureCheck: 'Tacky, uniform paste with no separated white fat granules.',
        whatShouldThisLookLike: 'A smooth, firm meat dough that holds its shape.',
        tip: 'If your hands get too warm and the fat begins to soften, cover the bowl and refrigerate for 20 minutes before continuing.',
        commonMistake: 'Under-kneading — if the proteins are not activated, the kebab will tear and fall off the skewer into the fire.',
        moveOnWhen: 'The meat dough is dense, sticky, and clings firmly to a bowl.',
        quickInstructions: 'Knead lamb, fat, pepper, pul biber, paste, and salt vigorously for 8-10 mins until sticky.'
      },
      {
        step: 2,
        title: 'MOLD THE KEBAB ONTO WIDE SKEWERS',
        whatYouNeed: ['Flat metal skewers', 'Bowl of warm salted water', 'Kneaded lamb mixture'],
        description: 'Divide meat into 4 equal balls (about 175g each). Dip your hands in warm salted water. Take one ball, push the skewer through the center, and squeeze the meat up and down the skewer with your thumb and fingers into a flat, 25cm (10-inch) ribbon. Press with your fingertips every 3cm to create characteristic wave ridges. Seal the top and bottom tips firmly onto the metal.',
        howToDoIt: 'The warm water prevents the fat from sticking to your palms while smoothing the meat into an airtight layer against the skewer.',
        heat: 'No Heat',
        duration: 8,
        visualCues: 'Flat, uniform 2cm-wide meat ribbons with distinct scalloped indentations along the blade.',
        textureCheck: 'Firmly adhering meat ribbon with sealed ends.',
        whatShouldThisLookLike: 'Classic wavy Adana kebab skewers ready for the coals.',
        tip: 'Never leave gaps or air pockets between the meat and the skewer, which causes heat pockets that drop meat.',
        commonMistake: 'Making the meat too thick at the center or forgetting to crimp the ends shut.',
        moveOnWhen: 'All 4 skewers are molded and rested in refrigerator for 15 minutes to firm up.',
        quickInstructions: 'Wet hands, press meat evenly onto flat skewers with wave indentations, seal ends, chill 15 mins.'
      },
      {
        step: 3,
        title: 'GRILL OVER HOT COALS WITH THE LAVASH PRESS',
        whatYouNeed: ['Hot grill', 'Skewers', 'Long green peppers', 'Halved tomatoes', 'Warm lavash'],
        description: 'Set skewers directly over white-hot hardwood charcoal coals (or on a screaming hot ribbed grill pan). Cook for 60 seconds until the bottom turns opaque, then immediately flip to set both sides. Continue turning every 60-90 seconds for 6-8 minutes total. When fat drips and flares, press a piece of lavash bread over the skewers to absorb the rendered spiced fat and extinguish flames.',
        howToDoIt: 'Frequent turning cooks the meat evenly and prevents fat from dropping into the coals and scorching the meat.',
        heat: 'High Charcoal Heat / Screaming Hot Pan',
        duration: 8,
        visualCues: 'Deep mahogany grill lines, bubbling surface juices, charred edges, and smoky glistening sheen.',
        hear: 'Vigorous sizzling and fat dripping onto coals.',
        smell: 'Incredible smoky grilled lamb and roasted pepper aroma.',
        textureCheck: 'Springy and firm to gentle finger touch, juices run completely clear.',
        whatShouldThisLookLike: 'Juicy, charred skewers glistening with spiced amber fat.',
        tip: 'The fat-soaked lavash bread used to blot the skewers is prized by Turkish grill masters — serve it under the kebabs!',
        commonMistake: 'Leaving skewers unturned on one side for too long, causing the skewer to overheat and the meat to drop.',
        moveOnWhen: 'Internal temperature reaches 74°C (165°F) with rich charring on both sides.',
        quickInstructions: 'Grill skewers over high heat, flip every 60-90 secs for 6-8 mins, press lavash over them to catch juices.'
      },
      {
        step: 4,
        title: 'SLIDE OFF SKEWER & ASSEMBLE PLATTER',
        whatYouNeed: ['Fat-soaked lavash', 'Sumac onion salad', 'Grilled peppers & tomatoes'],
        description: 'Lay a sheet of warm lavash over the cooked kebab. Grip the meat gently through the bread with one hand, and pull the metal skewer straight out with the other hand. The kebab slides off perfectly inside the warm bread. Arrange on a wooden board with sumac onions, blistered sivri chiles, and roasted tomatoes.',
        howToDoIt: 'Using the bread to grip the meat keeps the succulent kebab whole and transfers residual heat and fat into the crust.',
        heat: 'No Heat',
        duration: 3,
        visualCues: 'Whole juicy ribbed kebab resting on warm, fat-tinted lavash.',
        smell: 'Woodsmoke, sumac citrus, and roasted lamb.',
        textureCheck: 'Tender, juicy, melt-in-the-mouth meat.',
        whatShouldThisLookLike: 'A majestic Turkish kebab board steaming with aromatics.',
        tip: 'Squeeze fresh lemon over the sumac onions just before taking your first bite.',
        commonMistake: 'Tearing the meat by pulling the skewer before the kebab has rested 1 minute.',
        moveOnWhen: 'Kebabs are plated on lavash with garnishes.',
        quickInstructions: 'Use lavash to grip kebab and slide skewer out; serve with sumac onions and grilled vegetables.'
      }
    ],
    commonMistakes: [
      { mistake: 'Using lean meat', remedy: 'Adana kebab demands at least 20% fat. Lean meat becomes dry, tough, and will fall off the skewer.' },
      { mistake: 'Using round wooden skewers', remedy: 'Round skewers allow ground meat to rotate freely when flipped. You must use flat metal skewers or shape them as patties.' },
      { mistake: 'Adding wet onion puree', remedy: 'Pureed raw onion releases sulfurous water that disintegrates the meat matrix. If adding onion, grate it and squeeze every drop of liquid out through cheesecloth.' }
    ],
    troubleshooting: [
      {
        problem: 'Meat fell off skewer into the grill coals',
        whatHappened: 'The meat unraveled and fell into the fire.',
        whyItHappened: 'Either the meat was not kneaded enough to activate binding proteins, was too warm when shaped, or was cut too lean.',
        whatToDoNow: 'Rescue what you can, and grill remaining portions directly on a grill grate or flat plancha.',
        howToPrevent: 'Knead for a full 8-10 minutes until sticky and tacky, chill thoroughly before grilling, and turn skewers frequently.'
      },
      {
        problem: 'Kebab is dry and tough',
        whatHappened: 'Meat is chewy instead of meltingly tender.',
        whyItHappened: 'The meat was overcooked or lacked fat.',
        whatToDoNow: 'Brush liberally with melted butter or warm lamb fat, wrap tightly in warm lavash, and let steam for 3 minutes.',
        howToPrevent: 'Maintain 20-25% fat ratio and do not grill past 8 minutes.'
      }
    ],
    substitutions: [
      { original: 'Lamb tail fat', substitute: 'Finely minced beef suet or butter', notes: 'Tail fat provides signature aroma, but beef suet maintains texture.' },
      { original: 'Pul biber (Aleppo pepper)', substitute: 'Equal mix of sweet paprika and mild cayenne pepper', notes: 'Mimics the fruitiness and gentle warmth.' }
    ],
    safetyNotes: ['Ground lamb must reach an internal temperature of 74°C (165°F).', 'Handle hot metal skewers with silicone oven mitts.'],
    servingGuide: {
      restingTime: 'Rest for 2 minutes on lavash before slicing or rolling.',
      temperature: 'Piping hot from the coals.',
      garnishing: 'Fresh flat-leaf parsley, sumac, and lemon wedges.',
      accompaniments: 'Sumac onion salad, grilled sivri peppers, Ayran (frothy Turkish salted yogurt beverage), and Ezme salad.'
    }
  },

  // 2. DÖNER (Turkish Döner Kebab)
  {
    id: 'd-ner',
    name: 'Authentic Turkish Döner Kebab (Spiced Shaved Lamb & Beef Stack)',
    cuisine: 'Turkish',
    region: 'Turkey (Bursa / Istanbul)',
    servings: 4,
    prepTime: 30,
    cookTime: 25,
    difficulty: 'Medium',
    overview: {
      summary: 'The world-renowned Turkish culinary icon: layered ribbons of beef sirloin and spiced minced lamb marinated in grated onion juice, whole milk yogurt, garlic, oregano, and cumin. Chilled into a dense cylinder, shaved paper-thin, and pan-seared in bubbling butter until crisp-edged and succulent, then served inside warm Turkish pide or lavash with garlic yogurt and pickled red cabbage.',
      appearance: 'Thin, crispy caramelized ribbons of dark mahogany meat folded into puffy golden pide bread with vibrant purple pickled cabbage and creamy white yogurt sauce.',
      texture: 'Crispy browned edges with ultra-tender, juicy, spiced meat ribbons.',
      flavor: 'Rich roasted beef and lamb, sweet onion juice, aromatic oregano and cumin, balanced by tangy yogurt and crisp pickled acidity.',
      restingTimeMinutes: 5
    },
    equipment: [
      { name: 'Heavy cast-iron skillet or griddle', purpose: 'For high-heat flash-frying shaved meat strips to recreate rotisserie searing.' },
      { name: 'Plastic wrap and parchment paper', purpose: 'For rolling the marinated meat into a tight freezing log.' },
      { name: 'Razor-sharp chef knife or meat slicer', purpose: 'To shave partially frozen meat into paper-thin ribbons.' }
    ],
    beforeYouStart: [
      { task: 'Grate 1 large onion into a bowl and strain firmly through cheesecloth to extract 4 tbsp pure clear onion juice (discard pulp).', durationMinutes: 5 },
      { task: 'Whisk marinade: onion juice, 3 tbsp yogurt, 3 cloves minced garlic, 1 tbsp olive oil, 1 tsp oregano, 1 tsp cumin, 1 tsp black pepper, and 1.5 tsp salt.', durationMinutes: 5 },
      { task: 'Slice beef sirloin paper-thin against the grain.', durationMinutes: 10 }
    ],
    ingredientPrepGuide: [
      { item: 'Onion Juice Marinade Technique', technique: 'Only use the strained juice of grated onions! Raw onion flesh burns and turns bitter when seared, but the extracted juice tenderizes meat enzymes and imparts clean sweet aroma.' },
      { item: 'The Freezer Shave Method', technique: 'Roll the seasoned beef ribbons and minced lamb tightly in plastic wrap into a compact log. Freeze for 2 to 3 hours until semi-firm. This allows you to shave restaurant-thin döner ribbons easily with a chef knife.' }
    ],
    essentialIngredients: [
      { name: 'Beef sirloin or flank steak', prep: 'sliced paper-thin into wide sheets', amount: '400g', metric: '400g', imperial: '14 oz', common: '400g' },
      { name: 'Ground lamb (20% fat)', prep: 'chilled minced lamb', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '300g' },
      { name: 'Extracted yellow onion juice', prep: 'strained clear liquid', amount: '4 tbsp', metric: '60ml', imperial: '2 fl oz', common: '1/4 cup' },
      { name: 'Whole milk Greek yogurt', prep: 'thick plain yogurt', amount: '3 tbsp', metric: '45g', imperial: '1.6 oz', common: '3 tbsp' },
      { name: 'Garlic cloves', prep: 'finely grated to paste', amount: '4 cloves', metric: '12g', imperial: '0.4 oz', common: '4 cloves' },
      { name: 'Dried Turkish oregano (Kekik)', prep: 'crushed', amount: '1.5 tsp', metric: '3g', imperial: '0.1 oz', common: '1.5 tsp' },
      { name: 'Ground cumin & Ground coriander', prep: 'aromatic blend', amount: '1 tsp each', metric: '4g', imperial: '0.14 oz', common: '2 tsp total' },
      { name: 'Turkish red pepper flakes (Pul Biber)', prep: 'flaked', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Fine sea salt & Fresh black pepper', prep: 'seasoning', amount: '1.5 tsp salt + 1 tsp pepper', metric: '10g', imperial: '0.35 oz', common: 'mixed' },
      { name: 'Butter', prep: 'for searing shaved meat', amount: '3 tbsp', metric: '45g', imperial: '1.6 oz', common: '3 tbsp' },
      { name: 'Turkish pide bread or Lavash', prep: 'warmed', amount: '4 portions', metric: '4 portions', imperial: '4 portions', common: '4 breads' }
    ],
    optionalIngredients: [
      { name: 'Garlic yogurt sauce', prep: 'yogurt, minced garlic, lemon juice, salt', amount: '1 cup', metric: '240g', imperial: '8.5 oz', common: '1 cup' },
      { name: 'Pickled red cabbage', prep: 'shredded with lemon and salt', amount: '1 cup', metric: '100g', imperial: '3.5 oz', common: '1 cup' }
    ],
    steps: [
      {
        step: 1,
        title: 'SEASON & ASSEMBLE THE DÖNER LOG',
        whatYouNeed: ['Sliced beef', 'Ground lamb', 'Onion juice', 'Yogurt', 'Spices & Salt', 'Plastic wrap'],
        description: 'In a bowl, mix minced lamb with 2 tbsp onion juice, 1 tbsp yogurt, half the garlic, salt, and spices. In another bowl, toss the sliced beef with remaining onion juice, yogurt, and spices. Lay a large sheet of plastic wrap on your counter. Layer alternating sheets of marinated beef and flattened ground lamb. Roll up extremely tightly into a compact, solid cylinder (about 8cm / 3 inches in diameter). Twist ends tightly like a sausage.',
        howToDoIt: 'Layering whole beef steak with spiced minced lamb replicates the authentic vertical rotisserie spit structure, fusing lean steak with juicy melting lamb.',
        heat: 'No Heat',
        duration: 15,
        visualCues: 'A dense, tightly wrapped cylinder with marbled red meat and seasoned fat.',
        smell: 'Oregano, garlic, and savory spices.',
        textureCheck: 'Tight, firm meat log without air pockets.',
        whatShouldThisLookLike: 'A neat, firm butcher log wrapped in clingfilm.',
        tip: 'Twist the plastic wrap ends clockwise and counterclockwise to compress the meat as tightly as possible.',
        commonMistake: 'Wrapping loosely, which causes meat to crumble when sliced.',
        moveOnWhen: 'Log is tightly wrapped; freeze for 2 to 3 hours until semi-firm (firm enough to slice thin without collapsing).',
        quickInstructions: 'Layer spiced beef and ground lamb, roll into tight cylinder in plastic wrap, freeze 2-3 hours.'
      },
      {
        step: 2,
        title: 'SHAVE THE DÖNER INTO PAPER-THIN RIBBONS',
        whatYouNeed: ['Semi-frozen döner log', 'Sharp chef knife', 'Cutting board'],
        description: 'Remove meat log from the freezer and unwrap plastic wrap. Place flat on a sturdy wooden cutting board. Using a long, razor-sharp chef knife, slice downward shaved ribbons as thin as paper (1mm to 2mm thick). The shavings should naturally curl and fold.',
        howToDoIt: 'Semi-frozen meat allows you to slice tissue cleanly without tearing or squishing the muscle fibers.',
        heat: 'No Heat',
        duration: 10,
        visualCues: 'Delicate, curled, paper-thin shavings of marbled beef and lamb.',
        textureCheck: 'Cold, delicate shaved meat ribbons.',
        whatShouldThisLookLike: 'A bountiful pile of shaved meat ribbons ready for the pan.',
        tip: 'If the log is too rock-hard to slice, let it sit on the counter for 10 minutes to soften slightly.',
        commonMistake: 'Slicing thick steaks instead of thin ribbons; döner must be micro-thin to crisp instantly.',
        moveOnWhen: 'Entire log is shaved into a fluffy pile of ribbons.',
        quickInstructions: 'Unwrap semi-frozen meat log, shave downward into paper-thin (1-2mm) ribbons with a sharp knife.'
      },
      {
        step: 3,
        title: 'FLASH-SEAR IN SIZZLING BUTTER',
        whatYouNeed: ['Shaved döner meat', 'Cast-iron skillet', '3 tbsp butter', 'Pinch of salt'],
        description: 'Heat a wide cast-iron skillet over high heat until smoking. Add 1 tbsp butter. Toss in a single batch (about one third) of the shaved meat. Spread across the hot iron. Do not stir for 60 seconds so the bottom curls and crisps into dark caramelized lace. Toss for another 60 seconds until cooked through. Transfer to a bowl and repeat with remaining meat in batches.',
        howToDoIt: 'High-heat searing in butter triggers rapid Maillard caramelization, mimicking the intense radiated heat of a vertical flame rotisserie.',
        heat: 'High Heat',
        duration: 6,
        visualCues: 'Meat edges curl, turn deeply browned and crispy, while center remains juicy and tender.',
        hear: 'Intense, crackling sizzle as cold meat hits hot butter.',
        smell: 'Heady, mouthwatering aroma of seared lamb, browned butter, and roasted cumin.',
        textureCheck: 'Crisp-edged yet meltingly tender.',
        whatShouldThisLookLike: 'Glossy, curly ribbons of browned meat glistening in butter.',
        tip: 'Never crowd the skillet — frying too much at once releases water and boils the meat instead of searing.',
        commonMistake: 'Overcrowding the pan, causing meat to turn gray and soggy.',
        moveOnWhen: 'All meat ribbons are crisped and piled warm in a bowl.',
        quickInstructions: 'Sear shaved meat in hot butter in batches for 2 minutes total until edges are caramelized and crispy.'
      },
      {
        step: 4,
        title: 'WARM BREAD & ASSEMBLE DÖNER SANDWICH',
        whatYouNeed: ['Warm Turkish pide or lavash', 'Seared döner', 'Garlic yogurt', 'Pickled red cabbage', 'Sliced tomatoes'],
        description: 'Slice open warm Turkish pide bread to create a pocket. Slather interior with garlic yogurt sauce. Pack tightly with hot döner meat ribbons. Top with pickled red cabbage, tomato slices, fresh parsley, and a pinch of pul biber flakes. Serve immediately while piping hot.',
        howToDoIt: 'Layering meat directly against warm bread allows bread starches to soak up rich meat juices and melted butter.',
        heat: 'No Heat',
        duration: 4,
        visualCues: 'Bursting sandwich with layered meat ribbons, colorful purple cabbage, and creamy yogurt.',
        smell: 'Hot baked bread, seared meat, and pungent garlic.',
        textureCheck: 'Fluffy warm bread, crunchy pickled cabbage, and tender crispy meat.',
        whatShouldThisLookLike: 'An iconic street-style Turkish döner overflowing with toppings.',
        tip: 'For an authentic Iskender Döner variation, serve shaved meat over cubed pide, drenched in hot browned butter and warm tomato sauce alongside yogurt.',
        commonMistake: 'Soggy bread from adding watery tomato juice directly into the base.',
        moveOnWhen: 'Sandwiches are assembled and served.',
        quickInstructions: 'Stuff warm pide with garlic yogurt, hot döner meat, pickled cabbage, and tomato slices.'
      }
    ],
    commonMistakes: [
      { mistake: 'Cooking thick slices', remedy: 'Thick meat becomes chewy and rubbery. Shave while partially frozen to ensure razor-thin ribbons.' },
      { mistake: 'Skipping the onion juice straining', remedy: 'Adding onion pulp burns instantly into black bitter flecks during high heat searing. Only use clear strained onion juice.' }
    ],
    troubleshooting: [
      {
        problem: 'Meat boiled and turned gray in the skillet',
        whatHappened: 'Water pooled in the pan instead of sizzling.',
        whyItHappened: 'The pan was overcrowded or wasn\'t hot enough.',
        whatToDoNow: 'Drain off excess liquid, add 1 tbsp fresh butter, turn heat to high, and fry vigorously for 2 minutes to caramelize.',
        howToPrevent: 'Sear in small batches with screaming hot butter.'
      }
    ],
    substitutions: [
      { original: 'Ground lamb', substitute: 'Ground beef chuck (80/20)', notes: 'Beef chuck works well, though lamb delivers traditional döner richness.' },
      { original: 'Turkish pide bread', substitute: 'Warm pita bread or flat naan', notes: 'Provides an excellent sturdy pocket.' }
    ],
    safetyNotes: ['Reheat meat until steaming hot.', 'Store raw meat log strictly below 4°C before freezing.'],
    servingGuide: {
      restingTime: 'Serve immediately off the pan.',
      temperature: 'Piping hot.',
      garnishing: 'Pul biber pepper flakes and fresh chopped parsley.',
      accompaniments: 'Pickled red cabbage, Turkish pickles (turşu), garlic yogurt sauce, and french fries.'
    }
  },

  // 3. LAHMACUN (Turkish Thin Crispy Meat Flatbread)
  {
    id: 'lahmacun',
    name: 'Authentic Turkish Lahmacun (Crisp Thin Flatbread with Spiced Minced Lamb)',
    cuisine: 'Turkish',
    region: 'Turkey (Gaziantep / Şanlıurfa)',
    servings: 4,
    prepTime: 35,
    cookTime: 15,
    difficulty: 'Medium',
    overview: {
      summary: 'Often referred to as Turkish pizza: an ultra-thin, round unleavened flatbread rolled paper-thin, spread to the very edges with a finely pureed topping of raw minced lamb, ripe tomatoes, red peppers, garlic, Turkish pepper paste (biber salçası), and fresh parsley. Baked over blistering heat on a baking stone until the bottom is shatteringly crisp and charred while the spiced meat remains juicy and fragrant.',
      appearance: 'A large, paper-thin golden-crusted disk covered in a mosaic of ruby-red spiced meat and green parsley specks, served rolled up with lemon and fresh greens.',
      texture: 'Crisp, crackling base that bends flexibly without breaking when rolled up around fresh salad.',
      flavor: 'Tangy, savory, gently spicy from sun-dried peppers, fragrant with roasted garlic, fresh parsley, and sweet cooked tomatoes.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Baking stone / Pizza steel or upside-down heavy baking sheet', purpose: 'Essential to transfer instant high conductive heat to bake the thin crust in under 4 minutes.' },
      { name: 'Food processor', purpose: 'To pulse vegetables and aromatics into a fine paste without turning them into water.' },
      { name: 'Long rolling pin (Oklava)', purpose: 'To roll dough balls into paper-thin 25cm rounds.' }
    ],
    beforeYouStart: [
      { task: 'Place pizza stone on top oven rack and preheat oven to its absolute maximum temperature (250°C / 500°F) for at least 45 minutes.', durationMinutes: 45 },
      { task: 'Knead simple dough: 350g flour, 210ml warm water, 1 tsp yeast, 1 tsp salt, 1 tbsp olive oil. Rest 30 minutes.', durationMinutes: 30 },
      { task: 'Pulse in food processor: 1 onion, 1 red bell pepper, 2 tomatoes, 3 garlic cloves, 1 cup parsley into fine mince.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'Topping Consistency', technique: 'The meat topping must be a soft, spreadable paste. Squeeze excess vegetable juice from pureed tomatoes and peppers so the dough doesn\'t become soggy when spread.' },
      { item: 'Paper-Thin Rolling', technique: 'Roll the dough out so thin that you can almost see the counter through it (under 2mm). Lahmacun is not thick bread — it must be delicate and crisp.' }
    ],
    essentialIngredients: [
      { name: 'All-purpose flour', prep: 'unbleached', amount: '350g', metric: '350g', imperial: '12 oz', common: '2.5 cups' },
      { name: 'Warm water & Olive oil', prep: 'liquid base', amount: '210ml water + 1 tbsp oil', metric: '225ml', imperial: '7.6 fl oz', common: '1 cup' },
      { name: 'Ground lamb or lean beef (15% fat)', prep: 'finely ground', amount: '250g', metric: '250g', imperial: '8.8 oz', common: '250g' },
      { name: 'Ripe tomatoes', prep: 'seeded and pulsed fine', amount: '2 medium', metric: '180g', imperial: '6.3 oz', common: '2 tomatoes' },
      { name: 'Red bell pepper or capia pepper', prep: 'seeded and pulsed', amount: '1 pepper', metric: '100g', imperial: '3.5 oz', common: '1 pepper' },
      { name: 'Yellow onion & Garlic cloves', prep: 'pulsed fine', amount: '1 onion + 3 cloves garlic', metric: '120g', imperial: '4.2 oz', common: 'mixed' },
      { name: 'Turkish red pepper paste (Biber Salçası)', prep: 'spiced paste', amount: '1.5 tbsp', metric: '30g', imperial: '1 oz', common: '1.5 tbsp' },
      { name: 'Tomato paste', prep: 'concentrated', amount: '1 tbsp', metric: '20g', imperial: '0.7 oz', common: '1 tbsp' },
      { name: 'Fresh flat-leaf parsley', prep: 'finely minced', amount: '1 cup packed', metric: '40g', imperial: '1.4 oz', common: '1 cup' },
      { name: 'Pul biber flakes, Cumin, Salt, Black pepper', prep: 'spices', amount: '1.5 tsp salt, 1.5 tsp pul biber, 1/2 tsp cumin', metric: '12g', imperial: '0.4 oz', common: 'mixed' }
    ],
    optionalIngredients: [
      { name: 'Fresh lemon wedges & Fresh mint leaves', prep: 'for serving inside roll', amount: '2 lemons + fresh mint', metric: '100g', imperial: '3.5 oz', common: 'garnish' }
    ],
    steps: [
      {
        step: 1,
        title: 'PREPARE THE SPICED MEAT PASTE',
        whatYouNeed: ['Pulsed vegetables', 'Ground lamb', 'Pepper paste', 'Tomato paste', 'Parsley', 'Spices'],
        description: 'In a bowl, combine the ground lamb with the pulsed onion, pepper, tomato, and garlic mixture. Add the red pepper paste, tomato paste, minced parsley, pul biber, cumin, salt, and black pepper. Mix thoroughly with your hands until it forms a uniform, easily spreadable, paste-like consistency.',
        howToDoIt: 'The topping goes onto the raw dough completely uncooked and raw. Blending it thoroughly ensures it bakes and browns evenly in the oven within 4 minutes.',
        heat: 'No Heat',
        duration: 8,
        visualCues: 'A vibrant ruby-red meat paste with visible green parsley flecks.',
        smell: 'Fragrant with sweet peppers, parsley, and garlic.',
        textureCheck: 'Soft and spreadable like thick chunky jam.',
        whatShouldThisLookLike: 'A smooth, colorful meat topping.',
        tip: 'If the mixture feels stiff, mix in 1-2 tablespoons of cold water or olive oil until spreadable.',
        commonMistake: 'Leaving large chunks of vegetables, which prevent the meat from adhering to the dough.',
        moveOnWhen: 'Paste is uniform and spreadable.',
        quickInstructions: 'Mix ground lamb with pureed vegetables, tomato & pepper pastes, parsley, and spices into spreadable paste.'
      },
      {
        step: 2,
        title: 'ROLL DOUGH PAPER-THIN & SPREAD TOPPING',
        whatYouNeed: ['Rested dough balls (4 pieces)', 'Rolling pin', 'Parchment paper', 'Meat paste'],
        description: 'Divide rested dough into 4 equal balls. On a lightly floured surface, roll one ball with a rolling pin into a wide, paper-thin round disk (about 25cm / 10 inches across and 1.5mm thick). Transfer onto a sheet of parchment paper. Spread 3 heaped tablespoons of the meat paste all the way to the very edges in a thin, even layer using your fingers or the back of a spoon.',
        howToDoIt: 'Spread all the way to the rim! Unlike Italian pizza, lahmacun has no raised dough crust border (cornicione).',
        heat: 'No Heat',
        duration: 8,
        visualCues: 'A wide, translucent dough disk coated evenly with ruby meat paste to the outer edges.',
        textureCheck: 'Ultra-thin dough with a delicate, even meat layer.',
        whatShouldThisLookLike: 'A classic Turkish meat flatbread ready for the oven.',
        tip: 'Do not layer the meat too thickly — a thin layer cooks rapidly and guarantees a crisp crust.',
        commonMistake: 'Mounding meat in the middle, leaving the center soggy and underbaked.',
        moveOnWhen: 'Lahmacun is assembled on parchment paper.',
        quickInstructions: 'Roll dough paper-thin (25cm disk), transfer to parchment, spread thin layer of meat paste to edges.'
      },
      {
        step: 3,
        title: 'BLISTER ON PREHEATED PIZZA STONE',
        whatYouNeed: ['Preheated pizza stone (250°C / 500°F)', 'Pizza peel or inverted baking sheet'],
        description: 'Slide the parchment with the lahmacun directly onto the blistering-hot pizza stone in the preheated oven. Bake for 3 to 4 minutes. The bottom crust will brown and blister with charred leopard spots, while the meat topping bubbles vigorously and browns around the edges.',
        howToDoIt: 'The intense conductive heat from the baking stone vaporizes moisture immediately, crisping the thin base before the dough can turn soggy.',
        heat: 'Maximum Oven Heat (250°C / 500°F)',
        duration: 4,
        visualCues: 'Dough edges are deeply golden and crisp; bottom has dark brown blisters; meat is sizzled and cooked through.',
        hear: 'Brisk sizzling from bubbling fat on the stone.',
        smell: 'Charred crust, roasted lamb, and baked pepper aroma.',
        textureCheck: 'Crisp and rigid when lifted, yet pliable enough to roll.',
        whatShouldThisLookLike: 'A sizzling, aromatic flatbread with blistered edges.',
        tip: 'Remove parchment after the first 2 minutes if you want extra bottom charring directly on the stone.',
        commonMistake: 'Baking at low oven temperatures, making the dough rubbery and soft.',
        moveOnWhen: 'Bottom is crisp with leopard blisters and meat is cooked.',
        quickInstructions: 'Slide onto hot pizza stone at 250°C for 3-4 mins until crust is blistered and meat is sizzling.'
      },
      {
        step: 4,
        title: 'THE ROLLED SERVING RITUAL',
        whatYouNeed: ['Fresh flat-leaf parsley sprigs', 'Sliced ripe tomatoes', 'Fresh lemon wedges', 'Sumac'],
        description: 'Transfer hot lahmacun to a board. Squeeze fresh lemon juice generously over the meat. Lay fresh parsley sprigs, tomato slices, and a dusting of sumac down the center. Roll the lahmacun tightly into a cylinder (wrap) and take your first bite while crisp and steaming.',
        howToDoIt: 'Rolling the hot crispy flatbread around cold, acidic, herby salad creates the quintessential contrast of hot/cold, savory/citrus, and crisp/tender.',
        heat: 'No Heat',
        duration: 2,
        visualCues: 'A tight rolled flatbread bursting with fresh green herbs and red tomatoes at the ends.',
        smell: 'Zesty lemon, fresh parsley, and warm spiced meat.',
        textureCheck: 'Crispy crackling exterior with fresh crunchy herbs inside.',
        whatShouldThisLookLike: 'The ultimate Turkish street-food wrap ready to enjoy.',
        tip: 'Never eat lahmacun with a knife and fork — it is meant to be dressed with lemon and rolled with your hands!',
        commonMistake: 'Letting it sit flat on a plate for 10 minutes, where steam will soften the crisp crust.',
        moveOnWhen: 'Rolled and enjoyed immediately.',
        quickInstructions: 'Squeeze lemon over hot lahmacun, add parsley and tomatoes down the center, roll tightly and eat.'
      }
    ],
    commonMistakes: [
      { mistake: 'Dough rolled too thick', remedy: 'If rolled thick like pizza dough, the flatbread will be bread-like and doughy instead of crispy.' },
      { mistake: 'Topping too wet', remedy: 'Squeeze juice out of pulsed tomatoes and peppers before mixing into meat.' }
    ],
    troubleshooting: [
      {
        problem: 'Center of flatbread is soft and floppy',
        whatHappened: 'Crust failed to crisp up in the middle.',
        whyItHappened: 'Oven was not hot enough or the meat was applied too thickly in the center.',
        whatToDoNow: 'Pop it back directly onto the baking stone for 90 seconds without the parchment paper.',
        howToPrevent: 'Preheat pizza stone for 45 minutes at maximum temperature and spread meat evenly to the very perimeter.'
      }
    ],
    substitutions: [
      { original: 'Ground lamb', substitute: 'Ground beef chuck (80/20)', notes: 'Works deliciously with identical seasonings.' },
      { original: 'Biber salçası (Pepper paste)', substitute: 'Tomato paste mixed with 1 tsp smoked paprika and 1/2 tsp cayenne', notes: 'Recreates the savory red pepper depth.' }
    ],
    safetyNotes: ['Raw meat on dough cooks thoroughly in 4 minutes due to high oven heat and thin application.', 'Use oven mitts when handling 250°C pizza stone.'],
    servingGuide: {
      restingTime: 'Rest 30 seconds only.',
      temperature: 'Piping hot from the oven.',
      garnishing: 'Sumac, fresh parsley sprigs, and lemon quarters.',
      accompaniments: 'Ayran (salted yogurt drink) and pickled hot peppers.'
    }
  },

  // 4. PIDE (Turkish Boat-Shaped Flatbread with Spiced Beef & Cheese)
  {
    id: 'pide',
    name: 'Authentic Turkish Pide (Boat-Shaped Bread with Spiced Meat & Kaşar Cheese)',
    cuisine: 'Turkish',
    region: 'Turkey (Black Sea / Samsun)',
    servings: 4,
    prepTime: 40,
    cookTime: 18,
    difficulty: 'Medium',
    overview: {
      summary: 'The iconic Black Sea boat-shaped baked flatbread (İçli Pide): pillowy, golden yeast dough rolled into an oval, filled generously with spiced sautéed ground beef, onions, tomatoes, and melting Turkish Kaşar cheese. The sides are folded inward and ends twisted into elegant pointed boat tips, brushed with egg wash and melted butter, and baked until puffed and blistered.',
      appearance: 'Golden-brown, canoe-shaped crusts with blistered pillowy borders, cradling a bubbling center of spiced ground meat and golden melted cheese, glistening with melted butter.',
      texture: 'Crispy outer crust with a soft, airy crumb, contrasting with the rich, savory meat filling and stretchy melted cheese.',
      flavor: 'Buttery, yeasty crust, savory seasoned beef, sweet cooked onions, and creamy melted cheese with black nigella seeds.',
      restingTimeMinutes: 3
    },
    equipment: [
      { name: 'Baking sheet or pizza stone', purpose: 'For baking pides evenly at high heat.' },
      { name: 'Pastry brush', purpose: 'To brush egg wash on borders and hot melted butter after baking.' },
      { name: 'Rolling pin', purpose: 'To roll dough into long 35cm oval shapes.' }
    ],
    beforeYouStart: [
      { task: 'Prepare yeast dough: 400g bread flour, 240ml warm water, 1 tsp yeast, 1 tsp sugar, 1.5 tsp salt, 2 tbsp olive oil. Knead 8 mins and let rise 1 hour.', durationMinutes: 60 },
      { task: 'Sauté meat filling: 300g ground beef, 1 diced onion, 2 minced garlic cloves, 1 diced tomato, 1 tbsp pepper paste, 1 tsp cumin, salt, and black pepper. Cool completely.', durationMinutes: 15 },
      { task: 'Grate 150g Turkish Kaşar cheese or low-moisture mozzarella.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'Cooling Meat Filling', technique: 'Always allow cooked meat filling to cool to room temperature before placing on raw dough. Hot meat melts dough fat and creates soggy, gummy bottoms.' },
      { item: 'Boat Shaping Technique', technique: 'Roll dough into a long elongated oval. Fold the two long sides over the filling by 2cm, then pinch and twist the two opposite ends tightly together into pointed boat sterns.' }
    ],
    essentialIngredients: [
      { name: 'Bread flour or All-purpose flour', prep: 'unbleached', amount: '400g', metric: '400g', imperial: '14 oz', common: '3 cups' },
      { name: 'Warm water & Olive oil', prep: 'dough hydration', amount: '240ml water + 2 tbsp oil', metric: '270ml', imperial: '9 fl oz', common: '1.1 cups' },
      { name: 'Instant dry yeast & Sugar', prep: 'yeast activation', amount: '1 tsp yeast + 1 tsp sugar', metric: '8g', imperial: '0.3 oz', common: 'mixed' },
      { name: 'Ground beef chuck (80/20)', prep: 'sautéed and seasoned', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '300g' },
      { name: 'Yellow onion & Garlic', prep: 'finely diced', amount: '1 onion + 2 garlic cloves', metric: '110g', imperial: '3.9 oz', common: 'mixed' },
      { name: 'Tomato & Turkish pepper paste', prep: 'diced & paste', amount: '1 tomato + 1 tbsp biber salçası', metric: '100g', imperial: '3.5 oz', common: 'mixed' },
      { name: 'Turkish Kaşar cheese or Mozzarella', prep: 'coarsely grated', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '1.5 cups' },
      { name: 'Egg yolk beaten with 1 tsp milk', prep: 'for golden crust glaze', amount: '1 egg yolk', metric: '20g', imperial: '0.7 oz', common: '1 yolk' },
      { name: 'Butter', prep: 'melted for brushing hot crust', amount: '3 tbsp', metric: '45g', imperial: '1.6 oz', common: '3 tbsp' },
      { name: 'Nigella seeds or Sesame seeds', prep: 'for crust garnish', amount: '1 tbsp', metric: '10g', imperial: '0.35 oz', common: '1 tbsp' }
    ],
    optionalIngredients: [
      { name: 'Pastırma (Turkish cured beef)', prep: 'thinly sliced (for meat lovers)', amount: '60g', metric: '60g', imperial: '2.1 oz', common: '4 slices' },
      { name: 'Whole egg cracked on top in final 3 mins', prep: 'traditional village style', amount: '2 eggs', metric: '100g', imperial: '3.5 oz', common: '2 eggs' }
    ],
    steps: [
      {
        step: 1,
        title: 'ROLL DOUGH INTO LONG OVALS',
        whatYouNeed: ['Proofed dough balls (4 portions)', 'Rolling pin', 'Parchment paper', 'Flour for dusting'],
        description: 'Divide proofed dough into 4 equal portions (about 160g each). On a floured surface, roll each ball into an elongated oval shape, approximately 35cm long and 15cm wide (about 4mm thick). Transfer onto a parchment-lined baking sheet.',
        howToDoIt: 'Roll mainly in one direction back and forth to maintain the long canoe profile.',
        heat: 'No Heat',
        duration: 8,
        visualCues: 'Long, smooth, stretchy oval dough sheets.',
        textureCheck: 'Pliable, elastic yeast dough.',
        whatShouldThisLookLike: 'Four elongated oval flatbread bases.',
        tip: 'If dough keeps springing back, let it rest under a damp towel for 5 minutes so gluten relaxes.',
        commonMistake: 'Rolling into round circles instead of long ovals.',
        moveOnWhen: 'Dough ovals are laid out on parchment.',
        quickInstructions: 'Roll dough portions into long ovals (35cm x 15cm) and place on parchment-lined baking sheets.'
      },
      {
        step: 2,
        title: 'FILL & FOLD INTO TRADITIONAL BOAT SHAPE',
        whatYouNeed: ['Cooled meat filling', 'Grated cheese', 'Egg wash', 'Nigella seeds'],
        description: 'Spread grated Kaşar cheese along the center of the dough oval, leaving a 2.5cm clean border all around. Top cheese with cooled spiced ground beef filling. Fold the dough edges inward over the filling by 2cm, leaving the center exposed. Pinch, twist, and crimp the two opposing ends tightly together to form the pointed boat tips. Brush dough edges with egg wash and sprinkle nigella seeds.',
        howToDoIt: 'Pinching the ends tightly prevents the boat from opening and flattening out during oven spring.',
        heat: 'No Heat',
        duration: 10,
        visualCues: 'Tidy boat-shaped dough packets with glossy egg-washed rims and colorful beef-cheese centers.',
        textureCheck: 'Sturdy folded borders holding the filling.',
        whatShouldThisLookLike: 'Authentic canoe-shaped Turkish pides ready for baking.',
        tip: 'Firmly press your thumb and index finger into the pinched ends to seal the dough together.',
        commonMistake: 'Overfilling the pide, which makes edges spill open and flatten out while baking.',
        moveOnWhen: 'All 4 pides are shaped, glazed, and sprinkled with seeds.',
        quickInstructions: 'Add cheese and meat down center, fold sides in 2cm, pinch ends tightly into pointed boat tips, brush with egg wash.'
      },
      {
        step: 3,
        title: 'BAKE AT 220°C UNTIL BLISTERED & GOLDEN',
        whatYouNeed: ['Preheated oven (220°C / 430°F)', 'Baking sheet'],
        description: 'Slide baking sheets into the middle rack of preheated oven. Bake for 14 to 16 minutes until the crust puffs, turns deep golden-brown, and blisters, while the cheese bubbles furiously in the center.',
        howToDoIt: 'High oven heat creates rapid steam expansion in the dough, producing an airy, pillowy crumb inside a crispy crust.',
        heat: 'Oven at 220°C / 430°F',
        duration: 15,
        visualCues: 'Deep amber-golden blistered crust; bubbling golden cheese; sizzling browned beef.',
        smell: 'Rich bakery aroma of fresh baked bread, toasted nigella seeds, and spiced beef.',
        textureCheck: 'Hollow sound when tapping the crust edge; crispy bottom.',
        whatShouldThisLookLike: 'Puffed, gorgeous golden boat flatbreads with molten centers.',
        tip: 'If you love a runny yolk, crack a fresh egg into the center 3 minutes before removing from the oven.',
        commonMistake: 'Underbaking, leaving the folded dough border doughy and pale.',
        moveOnWhen: 'Crust is deep golden-brown and bottom is firm and crisp.',
        quickInstructions: 'Bake at 220°C for 14-16 minutes until crust is puffed, deeply browned, and cheese is bubbling.'
      },
      {
        step: 4,
        title: 'THE BUTTER BRUSH & SLICE',
        whatYouNeed: ['Melted butter', 'Pastry brush', 'Chef knife'],
        description: 'Immediately upon removing pides from the oven, brush the piping-hot crust borders generously with melted butter. The hot bread will drink in the butter, creating an irresistible sheen and velvety softness. Rest 3 minutes, then slice diagonally into 4cm strips across the boat.',
        howToDoIt: 'Brushing butter onto hot bread crust tenderizes the exterior while adding authentic Black Sea rich flavor.',
        heat: 'No Heat',
        duration: 3,
        visualCues: 'Glistening, glossy golden crust with buttery sheen.',
        smell: 'Decadent melted butter and warm yeast bread.',
        textureCheck: 'Crispy crackling exterior with melt-in-the-mouth soft crumb.',
        whatShouldThisLookLike: 'Sliced diagonal fingers of pide ready to pull apart and share.',
        tip: 'Serve sliced on a long wooden plank with fresh parsley and lemon quarters.',
        commonMistake: 'Slicing immediately without letting the molten cheese settle for 2 minutes.',
        moveOnWhen: 'Pides are buttered, sliced, and plated.',
        quickInstructions: 'Brush hot crust edges generously with melted butter, rest 3 mins, slice diagonally into strips.'
      }
    ],
    commonMistakes: [
      { mistake: 'Not sealing the boat tips', remedy: 'Pinch and twist the dough tips firmly so they do not unravel during baking.' },
      { mistake: 'Putting raw meat into the pide', remedy: 'For beginner home ovens, pre-sauté the beef so excess water evaporates and doesn\'t make the crust soggy.' }
    ],
    troubleshooting: [
      {
        problem: 'Dough unrolled and flattened in oven',
        whatHappened: 'The boat shape opened up flat.',
        whyItHappened: 'The pinched ends were not twisted firmly enough.',
        whatToDoNow: 'It still tastes spectacular! Continue baking until golden and slice like pizza.',
        howToPrevent: 'Dab a drop of water on dough tips and pinch firmly with twisting pressure.'
      }
    ],
    substitutions: [
      { original: 'Turkish Kaşar cheese', substitute: 'Low-moisture whole milk mozzarella or Provolone', notes: 'Provides identical rich melt and stretch.' },
      { original: 'Ground beef', substitute: 'Spinach and feta (Ispanaklı Pide)', notes: 'Classic vegetarian Turkish pide variation.' }
    ],
    safetyNotes: ['Bake until crust reaches internal temperature of 95°C (200°F).', 'Beware of molten hot cheese when taking first bite.'],
    servingGuide: {
      restingTime: 'Rest 3 minutes before slicing.',
      temperature: 'Warm and melty.',
      garnishing: 'Fresh parsley leaves and melted butter.',
      accompaniments: 'Turkish black tea, shepherd salad (çoban salatası), and Ayran.'
    }
  },

  // 5. MEZE (Turkish Meze Spread: Haydari, Acılı Ezme, Shakshuka)
  {
    id: 'meze',
    name: 'Authentic Turkish Meze Spread (Haydari, Acılı Ezme & Shakshuka)',
    cuisine: 'Turkish',
    region: 'Turkey (Aegean / Istanbul)',
    servings: 4,
    prepTime: 25,
    cookTime: 15,
    difficulty: 'Easy',
    overview: {
      summary: 'The soul of Turkish meyhane culture: an exquisite trio of traditional mezes designed for sharing with warm flatbread. Featuring Haydari (thick strained garlic yogurt infused with dried mint, dill, and crumbled white cheese), Acılı Ezme (hand-chopped fiery red pepper, tomato, and pomegranate molasses salad), and Turkish Shakshuka (crispy fried eggplant and peppers tossed in sweet garlicky tomato coulis).',
      appearance: 'A vibrant platter with a cool white mound of piped Haydari crowned with olive oil and dried mint, a glistening ruby-red mound of Acılı Ezme drizzled with dark pomegranate syrup, and golden cubes of roasted eggplant smothered in rich tomato sauce.',
      texture: 'Contrast between velvety rich strained yogurt, crunchy zesty hand-diced vegetables, and silky tender caramelized eggplant.',
      flavor: 'Tangy and creamy garlic mint, sweet and spicy pomegranate chili, and rich savory Mediterranean tomato eggplant.',
      restingTimeMinutes: 15
    },
    equipment: [
      { name: 'Wide frying pan or skillet', purpose: 'To shallow fry eggplant cubes until golden brown.' },
      { name: 'Sharp chef knife', purpose: 'For hand-mincing vegetables for Ezme rather than pureeing them.' },
      { name: 'Small serving ramekins or plates', purpose: 'For presenting the trio of colorful mezes.' }
    ],
    beforeYouStart: [
      { task: 'Cube 1 large eggplant into 2cm pieces, salt generously, and drain in colander for 20 minutes to purge bitterness.', durationMinutes: 20 },
      { task: 'Pat eggplant cubes completely dry with paper towels before frying.', durationMinutes: 5 },
      { task: 'Hand-dice 2 peeled tomatoes, 1 red pepper, and 1 green chile into microscopic 2mm dice for Ezme.', durationMinutes: 10 }
    ],
    ingredientPrepGuide: [
      { item: 'Haydari Strained Yogurt (Süzme Yoğurt)', technique: 'Must use extra-thick Greek yogurt or Turkish strained yogurt (süzme yoğurt). Thin runny yogurt will turn watery and ruin the dip.' },
      { item: 'Acılı Ezme Knife Technique', technique: 'Never puree Ezme in a blender! A blender pulverizes vegetables into watery soup. Hand-chopping retains texture, crispness, and ruby vibrancy.' }
    ],
    essentialIngredients: [
      { name: 'Thick strained Greek or Turkish yogurt (Süzme)', prep: 'full fat (10%)', amount: '250g', metric: '250g', imperial: '8.8 oz', common: '1 cup' },
      { name: 'Turkish white feta cheese (Beyaz Peynir)', prep: 'crumbled fine', amount: '50g', metric: '50g', imperial: '1.8 oz', common: '1/4 cup' },
      { name: 'Dried Turkish mint (Kuru Nane)', prep: 'crushed between palms', amount: '1 tbsp', metric: '5g', imperial: '0.18 oz', common: '1 tbsp' },
      { name: 'Fresh dill & Garlic cloves', prep: 'finely minced', amount: '2 tbsp dill + 2 cloves garlic', metric: '15g', imperial: '0.5 oz', common: 'mixed' },
      { name: 'Eggplant (Aubergine)', prep: 'peeled in zebra stripes, cubed into 2cm pieces', amount: '1 large', metric: '350g', imperial: '12 oz', common: '1 eggplant' },
      { name: 'Turkish long green peppers (Sivri)', prep: 'sliced into 2cm rings', amount: '2 peppers', metric: '60g', imperial: '2.1 oz', common: '2 peppers' },
      { name: 'Crushed canned tomatoes or grated fresh', prep: 'sauce base', amount: '1 cup', metric: '240g', imperial: '8.5 oz', common: '1 cup' },
      { name: 'Red capia pepper & Green bell pepper', prep: 'diced microscopic 2mm', amount: '1 red + 1 green', metric: '150g', imperial: '5.3 oz', common: '2 peppers' },
      { name: 'Pomegranate molasses (Nar Ekşisi)', prep: 'sour-sweet syrup', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp' },
      { name: 'Extra virgin olive oil', prep: 'for frying & drizzling', amount: '6 tbsp', metric: '90ml', imperial: '3 fl oz', common: '6 tbsp' },
      { name: 'Turkish red pepper paste & Pul biber', prep: 'chili seasoning', amount: '1 tbsp paste + 1 tsp flakes', metric: '20g', imperial: '0.7 oz', common: 'mixed' },
      { name: 'Warm Turkish pide or flatbread', prep: 'for dipping', amount: '4 portions', metric: '4 portions', imperial: '4 portions', common: '4 breads' }
    ],
    optionalIngredients: [
      { name: 'Toasted walnut halves', prep: 'finely crushed for Ezme garnish', amount: '3 tbsp', metric: '30g', imperial: '1 oz', common: '3 tbsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'WHIP THE HAYDARI (GARLIC MINT YOGURT)',
        whatYouNeed: ['Strained yogurt', 'Crumbled feta', 'Minced garlic', 'Dried mint', 'Fresh dill', '2 tbsp olive oil', 'Pinch of salt'],
        description: 'In a mixing bowl, mash crumbled white cheese with minced garlic and 1 tbsp warm olive oil into a smooth paste. Stir in the thick strained yogurt, dried mint, minced fresh dill, and 1/4 tsp salt. Mix vigorously with a fork until luscious, thick, and velvety. Transfer to a serving dish and smooth with the back of a spoon. Create a shallow well in the center and drizzle with olive oil and extra dried mint.',
        howToDoIt: 'Mashing the feta with garlic first ensures the cheese blends seamlessly into the yogurt without large lumpy pockets.',
        heat: 'No Heat',
        duration: 5,
        visualCues: 'Puffy, cloud-white, ultra-thick dip flecked with emerald herbs and green olive oil ribbons.',
        smell: 'Pungent garlic, refreshing mint, and tangy yogurt.',
        textureCheck: 'Dense and creamy — holds its shape on a spoon without dripping.',
        whatShouldThisLookLike: 'A pristine white meze bowl glistening with olive oil.',
        tip: 'Bloom the dried mint in 1 tbsp warm olive oil for 30 seconds before stirring into the yogurt for breathtaking flavor.',
        commonMistake: 'Using regular thin yogurt which turns watery in minutes.',
        moveOnWhen: 'Haydari is whipped, chilled in refrigerator.',
        quickInstructions: 'Mash feta, garlic, and oil; stir into thick yogurt with mint, dill, and salt; chill.'
      },
      {
        step: 2,
        title: 'HAND-CHOP THE ACILI EZME (SPICY SALAD DIP)',
        whatYouNeed: ['Finely diced tomatoes', 'Finely diced peppers', 'Pepper paste', 'Pomegranate molasses', 'Pul biber', 'Olive oil', 'Salt'],
        description: 'Place the hand-diced tomatoes, red peppers, and green peppers on your cutting board. Mince finely with a chef knife. Tilt cutting board over a bowl and press lightly with knife blade to discard half the excess watery liquid. In a bowl, whisk 1 tbsp pepper paste, 2 tbsp pomegranate molasses, 2 tbsp olive oil, 1 tsp pul biber, and 1/2 tsp salt. Toss with the minced vegetables and fresh parsley until glossy.',
        howToDoIt: 'Discarding excess water keeps Ezme thick, concentrated, and scoopable rather than soggy.',
        heat: 'No Heat',
        duration: 8,
        visualCues: 'A jewel-like mosaic of glistening ruby-red minced vegetables and herbs.',
        smell: 'Tart pomegranate molasses, spicy pepper paste, and fresh parsley.',
        textureCheck: 'Finely textured with crisp vegetable micro-crunch in every bite.',
        whatShouldThisLookLike: 'A glistening ruby-red mound of spicy Turkish salsa.',
        tip: 'Pomegranate molasses (Nar Ekşisi) is the secret ingredient that gives authentic Ezme its tangy, complex, fruity depth.',
        commonMistake: 'Blending in a food processor into watery baby food.',
        moveOnWhen: 'Ezme is combined and rested 10 minutes to marry flavors.',
        quickInstructions: 'Hand-chop vegetables fine, press out excess water, toss with pepper paste, pomegranate molasses, oil, and spices.'
      },
      {
        step: 3,
        title: 'FRY EGGPLANT & ASSEMBLE SHAKSHUKA (ŞAKŞUKA)',
        whatYouNeed: ['Salted dried eggplant cubes', 'Sliced green peppers', '4 tbsp olive oil', 'Tomato sauce', 'Garlic'],
        description: 'Heat 4 tbsp olive oil in a wide skillet over medium-high heat. Add dried eggplant cubes in a single layer. Fry for 5-6 minutes, turning frequently, until deep golden-brown and creamy inside. Add sliced peppers and cook 2 minutes. Transfer vegetables with a slotted spoon to a paper-towel-lined plate. In the remaining oil, sauté 2 minced garlic cloves for 30 seconds, add crushed tomatoes, and simmer 5 minutes with salt and pepper into a thick sauce. Pour warm tomato sauce over the golden eggplants.',
        howToDoIt: 'Frying eggplants until deep golden caramelizes exterior sugars while making the interior as soft as custard.',
        heat: 'Medium-High Heat',
        duration: 12,
        visualCues: 'Eggplants turn dark golden-amber; tomato sauce thickens into a rich, clinging glaze.',
        hear: 'Steady, crisp frying sizzle.',
        smell: 'Caramelized eggplant and garlicky sweet tomato coulis.',
        textureCheck: 'Velvety, melting eggplant cubes coated in rich sauce.',
        whatShouldThisLookLike: 'Golden fried eggplant cubes draped in vibrant red tomato sauce.',
        tip: 'Turkish Şakşuka is an eggplant meze served at room temperature — not to be confused with North African egg shakshuka!',
        commonMistake: 'Adding eggplant to cold oil, which causes it to soak up oil like a sponge.',
        moveOnWhen: 'Eggplant is fried and bathed in garlicky tomato sauce.',
        quickInstructions: 'Fry salted eggplant cubes until golden, fry peppers, simmer tomato-garlic sauce, drape sauce over eggplant.'
      },
      {
        step: 4,
        title: 'ASSEMBLE THE MEZE PLATTER',
        whatYouNeed: ['Haydari bowl', 'Acılı Ezme bowl', 'Shakshuka plate', 'Warm Turkish pide or pita bread'],
        description: 'Arrange all three mezes on a large serving platter or wooden board alongside warm sliced Turkish pide bread. Garnish Haydari with extra olive oil and dried mint, Ezme with crushed walnuts, and Shakshuka with fresh parsley leaves. Serve at cool room temperature for sharing.',
        howToDoIt: 'Serving mezes at cool room temperature rather than ice-cold allows the delicate olive oils, garlic, and spices to bloom on the palate.',
        heat: 'No Heat',
        duration: 2,
        visualCues: 'A stunning Mediterranean spread of white, ruby-red, and golden-amber dips.',
        smell: 'Garlic, olive oil, mint, and fresh bread.',
        textureCheck: 'Creamy, crunchy, and melting textures side by side.',
        whatShouldThisLookLike: 'An authentic Turkish meyhane table feast.',
        tip: 'Tear warm bread and use it as an edible scoop to taste across all three dishes.',
        commonMistake: 'Serving straight out of a freezing refrigerator, which mutes all flavors.',
        moveOnWhen: 'Meze spread is arranged and served.',
        quickInstructions: 'Arrange Haydari, Ezme, and Shakshuka on a platter, garnish with olive oil, walnuts, and herbs; serve with warm bread.'
      }
    ],
    commonMistakes: [
      { mistake: 'Not salting eggplant', remedy: 'Eggplant holds water and bitterness. Salting and resting 20 minutes pulls water out and prevents oil soaking.' },
      { mistake: 'Pureeing Ezme in a machine', remedy: 'Always hand-chop for authentic texture and clean release of juices.' }
    ],
    troubleshooting: [
      {
        problem: 'Haydari released watery liquid after chilling',
        whatHappened: 'A puddle of whey separated from the yogurt.',
        whyItHappened: 'The yogurt was not sufficiently strained.',
        whatToDoNow: 'Whisk in 1-2 tablespoons of finely crumbled white feta cheese or spoon off the top clear liquid.',
        howToPrevent: 'Use triple-strained Greek yogurt (10% fat).'
      }
    ],
    substitutions: [
      { original: 'Beyaz Peynir', substitute: 'Greek barrel-aged Feta', notes: 'Provides identical salty tang.' },
      { original: 'Pomegranate molasses', substitute: '1 tbsp balsamic vinegar glaze mixed with 1 tsp lemon juice', notes: 'Mimics the tart fruity acidity.' }
    ],
    safetyNotes: ['Refrigerate leftover yogurt mezes promptly below 4°C.', 'Watch out for hot oil splatters when frying eggplant.'],
    servingGuide: {
      restingTime: 'Rest 15 minutes before serving to marry flavors.',
      temperature: 'Cool room temperature.',
      garnishing: 'Extra virgin olive oil, crushed walnuts, and dried mint.',
      accompaniments: 'Warm Turkish flatbread, olives, feta cheese, and Rakı.'
    }
  },

  // 6. TURKISH BAKLAVA (Gaziantep Emerald Pistachio Baklava)
  {
    id: 'turkish-baklava',
    name: 'Authentic Gaziantep Pistachio Baklava (Fıstıklı Baklava)',
    cuisine: 'Turkish',
    region: 'Turkey (Gaziantep)',
    servings: 12,
    prepTime: 45,
    cookTime: 40,
    difficulty: 'Expert',
    overview: {
      summary: 'The jewel of Turkish pastry craft from the UNESCO culinary capital of Gaziantep: forty paper-thin micro-layers of yufka phyllo pastry brushed individually with pure clarified golden butter (sade yağ), stuffed with a thick vibrant emerald carpet of raw Antep pistachios, sliced into neat diamonds before baking, and drenched while sizzling hot with a sweet fragrant lemon syrup that crackles on contact.',
      appearance: 'Glistening golden-amber diamond pastries with dozens of whisper-thin crisp layers, revealing an intense emerald-green pistachio layer in the center, resting in clear syrup.',
      texture: 'Crispy crackling crunch from the top pastry layers followed by melting buttery softness and the rich earthy bite of roasted pistachios.',
      flavor: 'Rich clarified butter, sweet clean syrup, earthy floral Antep pistachios, and subtle lemon brightness with zero cloying cinnamon.',
      restingTimeMinutes: 60
    },
    equipment: [
      { name: 'Heavy 9x13-inch metal baking pan', purpose: 'Metal conducts intense bottom heat for crisp phyllo layers (avoid glass pyrex which creates soggy bottoms).' },
      { name: 'Soft wide pastry brush', purpose: 'To gently brush melted butter over fragile paper-thin phyllo sheets.' },
      { name: 'Heavy, razor-sharp chef knife', purpose: 'To slice raw layered baklava cleanly into diamonds without tearing delicate sheets.' }
    ],
    beforeYouStart: [
      { task: 'Thaw 1 pack (450g / 40 sheets) phyllo pastry in refrigerator overnight, then bring to room temperature for 2 hours.', durationMinutes: 120 },
      { task: 'Clarify 300g unsalted butter by gently melting, skimming off white foam, and pouring off pure golden butterfat (discard milk solids at bottom).', durationMinutes: 15 },
      { task: 'Finely grind 300g raw unsalted shelled pistachios in food processor into coarse emerald sand (do not puree into paste).', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'Sade Yağ (Clarified Butter)', technique: 'Must use clarified butter! Regular butter contains 16-18% water and milk solids. Water will make the delicate pastry sheets soggy, and milk solids will burn into black bitter specks in the oven.' },
      { item: 'The Hot Baklava + Cool Syrup Rule', technique: 'The syrup must be cooled to room temperature or warm, while the baked baklava must be piping hot and sizzling right out of the oven. Pouring cool syrup onto hot pastry creates the legendary crackling sound and keeps the layers crisp.' }
    ],
    essentialIngredients: [
      { name: 'Phyllo pastry sheets (Yufka)', prep: 'room temperature, kept under damp towel', amount: '1 package (40 sheets)', metric: '450g', imperial: '1 lb', common: '40 sheets' },
      { name: 'Clarified unsalted butter (Sade Yağ)', prep: 'melted and warm', amount: '250g', metric: '250g', imperial: '8.8 oz', common: '1 cup' },
      { name: 'Antep raw unsalted pistachios', prep: 'finely ground to coarse sand', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '2.5 cups' },
      { name: 'Granulated white sugar', prep: 'for pure clear syrup', amount: '2.5 cups', metric: '500g', imperial: '17.6 oz', common: '2.5 cups' },
      { name: 'Water', prep: 'for syrup', amount: '2 cups', metric: '480ml', imperial: '16 fl oz', common: '2 cups' },
      { name: 'Fresh lemon juice', prep: 'prevents sugar crystallization', amount: '1 tbsp', metric: '15ml', imperial: '0.5 fl oz', common: '1 tbsp' }
    ],
    optionalIngredients: [
      { name: 'Kaymak (Turkish clotted cream)', prep: 'for serving alongside', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '1/2 cup' }
    ],
    steps: [
      {
        step: 1,
        title: 'SIMMER & COOL THE SUGAR SYRUP',
        whatYouNeed: ['500g sugar', '480ml water', '1 tbsp fresh lemon juice', 'Saucepan'],
        description: 'In a saucepan, combine sugar and water over medium heat. Stir until sugar completely dissolves. Bring to a gentle boil, reduce heat to medium-low, and simmer undisturbed for 15 minutes until it thickens into a glossy, slightly viscous syrup. Stir in lemon juice and simmer for 2 more minutes. Remove from heat and allow to cool completely to lukewarm / room temperature.',
        howToDoIt: 'Adding lemon juice inverts the sucrose, preventing the sugar syrup from crystallizing into white grains inside the baklava.',
        heat: 'Medium-Low Heat',
        duration: 20,
        visualCues: 'Clear, transparent syrup that coats a spoon and forms a slow, heavy drop.',
        smell: 'Sweet, clean lemon-sugar aroma with no browning.',
        textureCheck: 'Silky, slightly viscous liquid.',
        whatShouldThisLookLike: 'Crystal-clear golden syrup cooling in a bowl.',
        tip: 'Always prepare the syrup first so it has time to cool while the pastry is being layered and baked.',
        commonMistake: 'Pouring hot syrup onto hot baklava, which turns the delicate pastry into mush.',
        moveOnWhen: 'Syrup is simmering, thickened, and set aside to cool.',
        quickInstructions: 'Boil sugar and water 15 mins, stir in lemon juice, simmer 2 mins, cool completely to room temperature.'
      },
      {
        step: 2,
        title: 'LAYER THE PHYLLO & EMERALD PISTACHIOS',
        whatYouNeed: ['Clarified butter', '40 phyllo sheets', 'Ground pistachios', 'Baking pan', 'Pastry brush'],
        description: 'Brush the bottom and sides of your 9x13-inch metal baking pan with clarified butter. Lay down 1 sheet of phyllo. Brush gently with melted clarified butter. Repeat this process with 20 sheets of phyllo, brushing every layer with butter. Pour all 300g of ground pistachios over the 20th layer, spreading in an even, vivid green carpet. Top with the remaining 20 sheets of phyllo, brushing each individual sheet with clarified butter.',
        howToDoIt: 'Keep unused phyllo sheets covered with plastic wrap and a damp kitchen towel at all times to prevent them from drying and turning brittle.',
        heat: 'No Heat',
        duration: 25,
        visualCues: 'A high, neat stack of 40 butter-brushed gossamer sheets with an intense green pistachio core.',
        textureCheck: 'Soft, supple, butter-glistening pastry stack.',
        whatShouldThisLookLike: 'A neat rectangular pastry stack ready for slicing.',
        tip: 'Do not pour heavy pools of butter — use gentle, feathery brushstrokes to cover the entire surface.',
        commonMistake: 'Leaving phyllo sheets exposed to the air, causing them to crack into unusable flakes.',
        moveOnWhen: 'All 40 sheets and pistachio filling are assembled.',
        quickInstructions: 'Butter 20 phyllo sheets, spread ground pistachios evenly, top with remaining 20 butter-brushed sheets.'
      },
      {
        step: 3,
        title: 'SLICE INTO DIAMONDS & BAKE UNTIL GOLDEN',
        whatYouNeed: ['Sharp chef knife', 'Assembled baklava', 'Preheated oven (175°C / 350°F)'],
        description: 'Using a razor-sharp chef knife, slice through all 40 layers down to the bottom of the pan into parallel 4cm strips, then slice diagonally to create classic diamond shapes. Pour any remaining clarified butter over the cuts. Bake at 175°C (350°F) for 40 to 45 minutes until the pastry puffs dramatically and turns deep uniform golden-amber throughout.',
        howToDoIt: 'You MUST slice before baking! Once baked and crisp, attempting to slice baklava will shatter the delicate pastry into thousands of pieces.',
        heat: 'Oven at 175°C / 350°F',
        duration: 45,
        visualCues: 'Baklava expands upward, displaying dozens of distinct, paper-thin, crackling golden-amber layers.',
        smell: 'Incredible aroma of toasted pistachios and sweet browned butter.',
        textureCheck: 'Crisp, feather-light, and hollow to light touch.',
        whatShouldThisLookLike: 'Puffed, shimmering golden-amber diamonds separated by crisp cuts.',
        tip: 'Hold the pastry down gently with your fingers while slicing to keep the top sheets from bunching up.',
        commonMistake: 'Underbaking the center layers, which leaves the inner phyllo doughy and raw.',
        moveOnWhen: 'Pastry is deeply golden throughout and puffed.',
        quickInstructions: 'Slice into diamonds with sharp knife before baking, bake at 175°C for 40-45 mins until deep golden.'
      },
      {
        step: 4,
        title: 'THE SIZZLING SYRUP POUR & REST',
        whatYouNeed: ['Piping hot baked baklava', 'Cooled room-temperature syrup', 'Ladle'],
        description: 'Immediately upon removing the sizzling hot baklava from the oven, slowly ladle the cooled room-temperature syrup evenly over every single cut and diamond. Listen for the euphoric, loud crackling and hissing as the hot buttered pastry drinks in the syrup. Allow to rest uncovered at room temperature for at least 2 hours (or overnight) to absorb syrup completely and set.',
        howToDoIt: 'The thermal shock of cool syrup hitting sizzling pastry causes the microscopic air pockets to contract, pulling the sweet syrup deep into every layer while maintaining crunch.',
        heat: 'No Heat',
        duration: 5,
        visualCues: 'Vigorous bubbling and hissing as clear syrup is absorbed, leaving a glossy, mirror-like sheen.',
        hear: 'Loud, crackling, hissing sizzle.',
        smell: 'Sweet, buttery perfume of Antep pistachios and lemon syrup.',
        textureCheck: 'Crackling crisp top with juicy, syrup-soaked bottom layers.',
        whatShouldThisLookLike: 'Glistening emerald-flecked Turkish baklava ready to rest.',
        tip: 'Never cover warm baklava with foil or plastic wrap, which traps steam and destroys the crispness.',
        commonMistake: 'Eating too early while hot and soggy before the syrup has set into the pastry.',
        moveOnWhen: 'Resting complete, syrup fully absorbed.',
        quickInstructions: 'Pour cool syrup over piping-hot baklava immediately out of oven, listen to sizzle, rest 2+ hours.'
      }
    ],
    commonMistakes: [
      { mistake: 'Using unclarified butter', remedy: 'Milk solids burn black at 175°C and water creates soggy pastry. Always clarify your butter.' },
      { mistake: 'Adding cinnamon or spices', remedy: 'Traditional Turkish Gaziantep baklava never uses cinnamon or cloves — the pure flavor comes strictly from green pistachios and butter.' }
    ],
    troubleshooting: [
      {
        problem: 'Baklava turned soggy the next day',
        whatHappened: 'Pastry lost its crisp shatter.',
        whyItHappened: 'The pan was covered while still warm, trapping steam, or syrup was too hot when poured.',
        whatToDoNow: 'Reheat in a 150°C (300°F) oven for 8 minutes to re-crisp the top layers.',
        howToPrevent: 'Always pour cooled syrup over hot baklava and leave uncovered at room temperature.'
      }
    ],
    substitutions: [
      { original: 'Antep pistachios', substitute: 'Raw unsalted California pistachios or walnuts (Cevizli Baklava)', notes: 'Walnuts make classic Istanbul-style baklava.' },
      { original: 'Clarified butter', substitute: 'Ghee', notes: 'Store-bought ghee is 100% clarified butter and works flawlessly.' }
    ],
    safetyNotes: ['Molten sugar syrup can cause severe burns; handle with care.', 'Hot baklava pan will sizzle aggressively when syrup is poured.'],
    servingGuide: {
      restingTime: 'Rest for at least 2 hours before serving (overnight is best).',
      temperature: 'Room temperature.',
      garnishing: 'A dusting of vibrant green ground pistachios over each diamond.',
      accompaniments: 'Turkish black tea or Turkish coffee, and a scoop of thick Kaymak (clotted cream) or Maras dondurma.'
    }
  },

  // 7. HUMMUS (Ultra-Smooth Authentic Levantine Hummus)
  {
    id: 'hummus',
    name: 'Authentic Ultra-Smooth Levantine Hummus (Hummus bi Tahina)',
    cuisine: 'Middle Eastern',
    region: 'Levant (Lebanon / Palestine / Syria)',
    servings: 6,
    prepTime: 20,
    cookTime: 45,
    difficulty: 'Easy',
    overview: {
      summary: 'The gold standard of Levantine mezze: dried chickpeas soaked overnight and simmered with baking soda until meltingly soft and skinless, then whipped while hot in a food processor with ice cubes, rich Lebanese sesame tahini, fresh lemon juice, garlic, and sea salt until gossamer, feather-light, and impossibly smooth. Served warm in shallow bowls with pools of fruity olive oil, whole chickpeas, and sumac.',
      appearance: 'A satiny, pale ivory-beige swoosh in a wide shallow bowl, with concentric ripples holding pools of dark green olive oil, garnished with warm whole chickpeas, paprika, and chopped parsley.',
      texture: 'Impossibly silky, velvety, and airy like whipped cream — completely devoid of graininess or grit.',
      flavor: 'Rich, nutty roasted sesame, sweet creamy chickpeas, bright lemony acidity, and gentle garlic warmth.',
      restingTimeMinutes: 5
    },
    equipment: [
      { name: 'Heavy-duty food processor or high-speed blender', purpose: 'To emulsify chickpeas and tahini into a microscopic silky puree.' },
      { name: 'Large pot', purpose: 'To boil chickpeas with baking soda until soft.' }
    ],
    beforeYouStart: [
      { task: 'Soak 250g dried chickpeas in 1 liter cold water with 1/2 tsp baking soda for 12 hours overnight.', durationMinutes: 720 },
      { task: 'Drain and rinse soaked chickpeas thoroughly before cooking.', durationMinutes: 2 },
      { task: 'Freshly squeeze 80ml (1/3 cup) lemon juice through a fine sieve to remove pulp.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'Baking Soda Boiling Secret', technique: 'Simmering soaked chickpeas with 1/2 tsp baking soda raises the pH of the cooking water, dissolving the pectin in chickpea skins. The skins break down effortlessly, yielding silky smooth hummus without needing to peel individual skins by hand.' },
      { item: 'The Ice Cube Emulsification', technique: 'Blending hot cooked chickpeas with ice cubes causes the sesame fat in tahini to whip into a pale, airy, fluffy emulsion, transforming dense puree into cloud-like hummus.' }
    ],
    essentialIngredients: [
      { name: 'Dried chickpeas (Garbanzo beans)', prep: 'soaked overnight (never canned for authentic texture)', amount: '250g dry', metric: '250g', imperial: '8.8 oz', common: '1.25 cups dry' },
      { name: 'Baking soda (Sodium bicarbonate)', prep: 'for softening skins', amount: '1 tsp total', metric: '5g', imperial: '0.18 oz', common: '1 tsp' },
      { name: 'High-grade Lebanese or Palestinian tahini', prep: 'pure 100% sesame paste, well-stirred', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '2/3 cup' },
      { name: 'Freshly squeezed lemon juice', prep: 'strained clear', amount: '80ml', metric: '80ml', imperial: '2.7 fl oz', common: '1/3 cup' },
      { name: 'Fresh garlic cloves', prep: 'crushed to paste', amount: '2 cloves', metric: '6g', imperial: '0.2 oz', common: '2 cloves' },
      { name: 'Ice cubes or ice-cold water', prep: 'for aerating emulsion', amount: '4 ice cubes', metric: '60g', imperial: '2.1 oz', common: '4 cubes' },
      { name: 'Fine sea salt & Ground cumin', prep: 'seasoning', amount: '1.5 tsp salt + 1/2 tsp cumin', metric: '10g', imperial: '0.35 oz', common: 'mixed' },
      { name: 'Extra virgin olive oil (Cold-pressed)', prep: 'generous pour for serving', amount: '4 tbsp', metric: '60ml', imperial: '2 fl oz', common: '1/4 cup' },
      { name: 'Warm pita bread', prep: 'for scooping', amount: '4 pitas', metric: '4 pitas', imperial: '4 pitas', common: '4 breads' }
    ],
    optionalIngredients: [
      { name: 'Sumac & Sweet paprika', prep: 'for dusting', amount: '1/2 tsp each', metric: '2g', imperial: '0.07 oz', common: '1/2 tsp' },
      { name: 'Toasted pine nuts', prep: 'sautéed in olive oil or butter', amount: '2 tbsp', metric: '20g', imperial: '0.7 oz', common: '2 tbsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'BOIL CHICKPEAS WITH BAKING SODA UNTIL MUSHY',
        whatYouNeed: ['Soaked drained chickpeas', '1/2 tsp baking soda', 'Pot with 1.5L water', '1 tsp salt'],
        description: 'Place drained soaked chickpeas into a large pot. Add 1/2 tsp baking soda and cook dry over medium heat for 2 minutes, stirring constantly, to scorch the skins. Pour in 1.5 liters of water. Bring to a boil, skim off white foam and floating loose skins with a skimmer. Reduce heat to medium-low and simmer for 40 to 50 minutes until chickpeas are completely meltingly soft — you should be able to smash a chickpea effortlessly between your thumb and pinky finger.',
        howToDoIt: 'Chickpeas for hummus must be significantly softer than salad chickpeas. If they have any bite left, your hummus will be grainy.',
        heat: 'Medium-Low Simmer',
        duration: 45,
        visualCues: 'Chickpeas break apart when gently pressed; skins disintegrate into the water.',
        smell: 'Earthy, nutty boiling legumes.',
        textureCheck: 'Completely mushy with zero grit or resistance.',
        whatShouldThisLookLike: 'Plump, falling-apart chickpeas in cloudy broth.',
        tip: 'Reserve 2 tablespoons of whole cooked chickpeas for garnish, and drain the rest while hot.',
        commonMistake: 'Under-boiling chickpeas, which results in a gritty, sandy texture that no blender can fix.',
        moveOnWhen: 'Chickpeas mash effortlessly between fingers.',
        quickInstructions: 'Boil soaked chickpeas with baking soda 40-50 mins until meltingly soft and falling apart; drain hot.'
      },
      {
        step: 2,
        title: 'PUREE WARM CHICKPEAS WITH GARLIC & SALT',
        whatYouNeed: ['Drained hot chickpeas', 'Garlic paste', '1.5 tsp salt', '1/2 tsp cumin', 'Food processor'],
        description: 'Transfer hot, drained chickpeas directly into the bowl of your food processor. Add crushed garlic, salt, and cumin. Process on high speed for 3 to 4 minutes without stopping. Scrape down the sides with a rubber spatula. The chickpeas should form a thick, completely smooth, steaming paste.',
        howToDoIt: 'Processing chickpeas while they are still steaming hot breaks down the starches into microscopic particles before they can cool and firm up.',
        heat: 'No Heat',
        duration: 4,
        visualCues: 'A thick, steaming, uniform beige paste with no visible chunks.',
        smell: 'Nutty chickpeas and fragrant garlic.',
        textureCheck: 'Warm, smooth, dense paste.',
        whatShouldThisLookLike: 'Thick, smooth chickpea puree.',
        tip: 'Let the machine run! Professional hummus shops blend their puree for a continuous 5 minutes.',
        commonMistake: 'Adding tahini and lemon juice too early before the chickpeas are fully pulverized.',
        moveOnWhen: 'Chickpeas are pulverized into an ultra-smooth paste.',
        quickInstructions: 'Process hot drained chickpeas with garlic, salt, and cumin on high for 3-4 minutes until smooth.'
      },
      {
        step: 3,
        title: 'EMULSIFY WITH TAHINI, LEMON & ICE CUBES',
        whatYouNeed: ['150g tahini', '80ml lemon juice', '4 ice cubes'],
        description: 'With the food processor running on high speed, slowly pour in the tahini paste. As the mixture thickens, pour in the strained lemon juice. Finally, drop in the 4 ice cubes one by one through the feed tube. Continue processing on high speed for 4 minutes. The hummus will transform dramatically: the color will lighten from dark tan to pale ivory, and the texture will become impossibly whipped, satiny, and light.',
        howToDoIt: 'The ice cubes rapidly chill and whip the sesame oil into an airy emulsion, exactly like whipping mayonnaise or buttercream.',
        heat: 'No Heat',
        duration: 5,
        visualCues: 'The hummus turns glossy, pale creamy ivory and expands into a fluffy, silky cloud.',
        hear: 'Whirring processor sound softens into a smooth churning hum.',
        smell: 'Rich roasted sesame, bright lemon, and garlic.',
        textureCheck: 'Feather-light, perfectly velvety, and melting on the tongue.',
        whatShouldThisLookLike: 'Restaurant-quality ivory hummus cascading off a spatula.',
        tip: 'Taste for seasoning: add an extra squeeze of lemon or pinch of salt if you prefer sharper acidity.',
        commonMistake: 'Using low-grade bitter tahini; always choose 100% pure sesame paste from Lebanon, Palestine, or Greece.',
        moveOnWhen: 'Hummus is pale ivory, fluffy, and silky smooth.',
        quickInstructions: 'With processor running, stream in tahini, lemon juice, then 4 ice cubes; whip 4 mins until pale and satiny.'
      },
      {
        step: 4,
        title: 'SWOOSH, GARNISH & SERVE',
        whatYouNeed: ['Wide shallow bowl', 'Spoon', 'Extra virgin olive oil', 'Reserved chickpeas', 'Sumac & Paprika', 'Warm pita'],
        description: 'Spoon warm hummus into the center of a wide, shallow bowl. Using the back of a large spoon, press down in the center and rotate the bowl with your other hand in a circular motion to create a dramatic rim and central well. Pour generous pools of fruity extra virgin olive oil into the groove. Garnish the center with reserved whole chickpeas, a dusting of red paprika, sumac, and fresh parsley. Serve immediately with warm pita.',
        howToDoIt: 'The classic circular swoosh isn\'t just decorative — the deep channel holds the generous pool of olive oil needed to enrich every bite.',
        heat: 'No Heat',
        duration: 3,
        visualCues: 'Artistic creamy ivory swirls cradling shimmering pools of dark golden-green olive oil.',
        smell: 'Fruity olive oil, roasted sesame, and warm bread.',
        textureCheck: 'Velvety smooth dip paired with warm fluffy pita.',
        whatShouldThisLookLike: 'A masterpiece Levantine mezze bowl ready to be wiped clean.',
        tip: 'Authentic hummus is traditionally served warm or at room temperature — never serve cold directly from the fridge!',
        commonMistake: 'Storing in a deep tall bowl where olive oil cannot pool properly.',
        moveOnWhen: 'Plated, garnished, and served.',
        quickInstructions: 'Spoon into shallow bowl, create a circular well with the back of a spoon, pool olive oil, dust with paprika and sumac.'
      }
    ],
    commonMistakes: [
      { mistake: 'Using canned chickpeas', remedy: 'Canned chickpeas have tough preserved skins and will never achieve authentic velvety smoothness. Always boil dried chickpeas with baking soda.' },
      { mistake: 'Adding olive oil into the blender', remedy: 'Never blend olive oil inside the food processor with hummus — high-speed blade friction oxidizes polyphenols, making the oil bitter. Always pour olive oil on top when serving.' }
    ],
    troubleshooting: [
      {
        problem: 'Hummus is too thick and dense',
        whatHappened: 'Puree feels heavy like putty.',
        whyItHappened: 'Lack of liquid emulsion.',
        whatToDoNow: 'Drop in 2 more ice cubes or 2 tbsp of ice water with machine running on high for 60 seconds.',
        howToPrevent: 'Always finish with ice cubes to achieve whipped airy lightness.'
      }
    ],
    substitutions: [
      { original: 'Lebanese tahini', substitute: 'Greek or Israeli sesame paste', notes: 'Ensure the ingredient label says 100% roasted sesame seeds with no additives.' },
      { original: 'Dried chickpeas', substitute: 'Canned chickpeas simmered with baking soda for 15 mins', notes: 'Acceptable quick fix, though dried is vastly superior.' }
    ],
    safetyNotes: ['Cool leftover hummus and store in airtight container in refrigerator for up to 5 days.'],
    servingGuide: {
      restingTime: 'Serve immediately or rest 10 minutes at room temperature.',
      temperature: 'Warm or room temperature (never cold).',
      garnishing: 'Extra virgin olive oil, whole chickpeas, sumac, sweet paprika, and pine nuts.',
      accompaniments: 'Warm puffed pita bread, pickled turnips, cucumbers, and fresh mint.'
    }
  },

  // 8. FALAFEL (Authentic Palestinian Crispy Herb Falafel)
  {
    id: 'falafel',
    name: 'Authentic Palestinian Falafel (Crisp Herb & Chickpea Fritters)',
    cuisine: 'Middle Eastern',
    region: 'Levant (Palestine / Lebanon / Jordan)',
    servings: 4,
    prepTime: 25,
    cookTime: 15,
    difficulty: 'Medium',
    overview: {
      summary: 'The pinnacle of Levantine street gastronomy: raw dried chickpeas soaked overnight until swollen, then coarsely ground with an abundant bouquet of fresh flat-leaf parsley, cilantro, fresh dill, garlic, scallions, cumin, and coriander. Formed into balls and flash-fried in hot oil until deep mahogany-brown and shatteringly crunchy on the outside, revealing an aromatic, moist, vibrant emerald-green interior.',
      appearance: 'Deep golden-mahogany spheres with a blistered crunchy crust, splitting open to reveal a vibrant bright green, steamy, herb-flecked center.',
      texture: 'Shatteringly crisp and crunchy exterior yielding to an airy, fluffy, tender crumb with zero mushiness.',
      flavor: 'Earthy nutty chickpeas, fragrant fresh herbs (cilantro, parsley, dill), aromatic cumin and coriander, with a gentle kick of garlic and toasted sesame.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Food processor', purpose: 'To pulse raw chickpeas and herbs into a coarse sand texture.' },
      { name: 'Falafel scoop / mold (Alep Falafel) or 2 tablespoons', purpose: 'To shape neat, uniform patties with aerated centers.' },
      { name: 'Deep heavy pot or Dutch oven & frying thermometer', purpose: 'To maintain steady oil temperature at 180°C (350°F).' }
    ],
    beforeYouStart: [
      { task: 'Soak 250g dried chickpeas in cold water with 1/2 tsp baking soda for 18-24 hours until tripled in size. (NEVER BOIL THEM!)', durationMinutes: 1080 },
      { task: 'Drain chickpeas thoroughly and spread on kitchen towels to dry completely — moisture is the enemy of crispy falafel.', durationMinutes: 15 },
      { task: 'Wash and thoroughly dry 1 cup cilantro, 1 cup flat-leaf parsley, and 1/2 cup fresh dill.', durationMinutes: 10 }
    ],
    ingredientPrepGuide: [
      { item: 'THE GOLDEN RULE: Raw Chickpeas Only!', technique: 'NEVER use canned or boiled cooked chickpeas for falafel! Cooked chickpeas turn into wet paste that dissolves into mush in hot oil. Soaked raw chickpeas retain raw starch that binds naturally and fries into a crisp, airy sponge.' },
      { item: 'Coarse Sand Texture', technique: 'Pulse in the food processor until the mixture resembles coarse wet beach sand or couscous. If you puree it into a paste, your falafels will be dense and leaden.' }
    ],
    essentialIngredients: [
      { name: 'Dried chickpeas', prep: 'soaked 24 hrs, completely dried (NEVER cooked!)', amount: '250g dry', metric: '250g', imperial: '8.8 oz', common: '1.25 cups dry' },
      { name: 'Fresh flat-leaf parsley', prep: 'stems removed, dried thoroughly', amount: '1 cup packed', metric: '40g', imperial: '1.4 oz', common: '1 cup' },
      { name: 'Fresh cilantro (Coriander leaves)', prep: 'stems removed, dried', amount: '1 cup packed', metric: '40g', imperial: '1.4 oz', common: '1 cup' },
      { name: 'Fresh dill', prep: 'feathery leaves only', amount: '1/2 cup packed', metric: '20g', imperial: '0.7 oz', common: '1/2 cup' },
      { name: 'Scallions (Green onions)', prep: 'chopped', amount: '4 scallions', metric: '50g', imperial: '1.8 oz', common: '4 onions' },
      { name: 'Garlic cloves', prep: 'peeled', amount: '4 cloves', metric: '12g', imperial: '0.4 oz', common: '4 cloves' },
      { name: 'Ground cumin & Ground coriander', prep: 'freshly toasted and ground', amount: '1.5 tbsp cumin + 1 tbsp coriander', metric: '15g', imperial: '0.5 oz', common: 'mixed' },
      { name: 'Baking powder (added just before frying)', prep: 'for airy puff', amount: '1 tsp', metric: '5g', imperial: '0.18 oz', common: '1 tsp' },
      { name: 'Toasted white sesame seeds', prep: 'for coating patties', amount: '2 tbsp', metric: '20g', imperial: '0.7 oz', common: '2 tbsp' },
      { name: 'Fine sea salt & Black pepper', prep: 'seasoning', amount: '1.5 tsp salt + 1/2 tsp pepper', metric: '10g', imperial: '0.35 oz', common: 'mixed' },
      { name: 'High smoke-point oil (Sunflower or Peanut oil)', prep: 'for deep frying', amount: '1 liter', metric: '1000ml', imperial: '34 fl oz', common: '4 cups' }
    ],
    optionalIngredients: [
      { name: 'Cayenne pepper or red pepper flakes', prep: 'for spicy kick', amount: '1/2 tsp', metric: '1g', imperial: '0.04 oz', common: '1/2 tsp' },
      { name: 'Tahini sauce', prep: 'tahini, lemon juice, water, garlic, salt', amount: '1 cup', metric: '240ml', imperial: '8 fl oz', common: '1 cup' }
    ],
    steps: [
      {
        step: 1,
        title: 'PULSE THE RAW CHICKPEAS & HERBS',
        whatYouNeed: ['Soaked dry chickpeas', 'Parsley', 'Cilantro', 'Dill', 'Scallions', 'Garlic', 'Spices & Salt', 'Food processor'],
        description: 'Add the drained, thoroughly dried raw chickpeas, herbs, scallions, garlic, cumin, coriander, salt, and black pepper into the food processor. Pulse in short 5-second bursts for 2 to 3 minutes, scraping down the sides several times, until the mixture resembles coarse wet green sand. It should easily hold together when squeezed in your palm without turning into a smooth puree.',
        howToDoIt: 'Short pulses ensure an even coarse meal. Do not run the motor continuously or the blades will heat and turn the mixture into hummus.',
        heat: 'No Heat',
        duration: 5,
        visualCues: 'A fragrant, vivid emerald-green coarse meal that clumps when compressed in your fist.',
        smell: 'Intensely fresh aroma of cilantro, dill, garlic, and earthy cumin.',
        textureCheck: 'Gritty, moist, sand-like texture that packs together.',
        whatShouldThisLookLike: 'Vibrant green herb-flecked chickpea meal.',
        tip: 'Transfer the mixture to a bowl, cover with plastic wrap, and chill in the refrigerator for 1 hour to firm up the starch bonds.',
        commonMistake: 'Pureeing until smooth like paste, resulting in heavy, rubbery, leaden falafels.',
        moveOnWhen: 'Mixture is pulsed to coarse sand and chilled.',
        quickInstructions: 'Pulse soaked raw chickpeas, herbs, garlic, and spices in short bursts until it resembles coarse green sand; chill 1 hr.'
      },
      {
        step: 2,
        title: 'ADD BAKING POWDER & SHAPE PATTIES',
        whatYouNeed: ['Chilled falafel mixture', '1 tsp baking powder', 'Sesame seeds', 'Falafel mold or tablespoons'],
        description: 'Sprinkle 1 tsp baking powder over the chilled mixture and gently fold it in with your fingers. Sprinkle sesame seeds onto a small saucer. Using a falafel scoop or two soup spoons, gently shape the mixture into 3.5cm (1.5-inch) balls or slightly flattened disks. Press one side lightly into sesame seeds. Handle gently — do not pack them down like dense golf balls.',
        howToDoIt: 'Packing too firmly creates a dense, impenetrable core. Keep the shaping loose and gentle so steam can circulate inside.',
        heat: 'No Heat',
        duration: 8,
        visualCues: 'Neat, round green patties with golden sesame seeds adhering to the crown.',
        textureCheck: 'Lightly held together, aerated patties.',
        whatShouldThisLookLike: 'A tray of 16-20 uniform green falafel patties.',
        tip: 'Baking powder creates microscopic carbon dioxide bubbles during frying, guaranteeing an airy, fluffy interior.',
        commonMistake: 'Adding baking powder hours in advance — it must only be added right before the oil is hot.',
        moveOnWhen: 'All patties are shaped and resting on a plate.',
        quickInstructions: 'Fold in baking powder right before frying, gently shape into 3.5cm patties, press tops in sesame seeds.'
      },
      {
        step: 3,
        title: 'DEEP FRY AT 180°C TO DEEP MAHOGANY CRUNCH',
        whatYouNeed: ['Hot frying oil at 180°C (350°F)', 'Slotted spoon / spider skimmer', 'Shaped falafels'],
        description: 'Heat oil in a deep pot to precisely 180°C (350°F). Carefully lower 5 to 6 falafels into the hot oil using a slotted spoon. Do not overcrowd. Fry undisturbed for 90 seconds so the crust sets, then gently turn. Fry for 3 to 4 minutes total until the exterior is a deep, rich mahogany brown. Remove with a spider skimmer and drain on a wire rack.',
        howToDoIt: 'Maintaining 180°C creates an instant waterproof crust, preventing oil from penetrating the interior so the falafel remains light and oil-free.',
        heat: 'Medium-High (180°C / 350°F oil)',
        duration: 8,
        visualCues: 'Vigorous bubbling upon entry; exterior transitions from pale green to deep golden, then rich mahogany-brown.',
        hear: 'Steady, crackling frying sizzle.',
        smell: 'Incredible aroma of toasted sesame, fried herbs, and roasted spices.',
        textureCheck: 'Shatteringly crisp shell that sounds hollow when tapped with metal tongs.',
        whatShouldThisLookLike: 'Dark mahogany crunchy nuggets draining on a rack.',
        tip: 'Drain on a wire cooling rack instead of paper towels so trapped steam doesn\'t soften the bottom crust.',
        commonMistake: 'Frying in oil below 165°C, which causes the patties to disintegrate or absorb oil.',
        moveOnWhen: 'All falafels are deep mahogany brown and crispy.',
        quickInstructions: 'Deep fry 5-6 patties at a time in 180°C oil for 3-4 mins until deep mahogany-brown and crunchy.'
      },
      {
        step: 4,
        title: 'SERVE PIPING HOT WITH TAHINI',
        whatYouNeed: ['Crispy hot falafels', 'Tahini sauce', 'Warm pita', 'Pickled turnips & cucumbers'],
        description: 'Crack one falafel open with your fingers to admire the steam rising from the vivid emerald-green interior. Serve immediately piled high on a plate with creamy lemon tahini sauce, pickled wild cucumbers, pink pickled turnips, and warm fluffy pita pockets.',
        howToDoIt: 'Falafels should always be eaten within 10 minutes of frying while the contrast between crunchy exterior and moist green center is at its peak.',
        heat: 'No Heat',
        duration: 2,
        visualCues: 'Crunchy brown spheres cracked open displaying vibrant jade-green fluffy cores.',
        smell: 'Herby steam and nutty sesame tahini.',
        textureCheck: 'Crispy crackle giving way to fluffy tender herb steam.',
        whatShouldThisLookLike: 'The definitive Middle Eastern street food feast.',
        tip: 'Stuff 3-4 crushed falafels into a warm pita pocket, drench in tahini sauce, and add chopped tomato and mint salad.',
        commonMistake: 'Covering with foil, which turns the crunchy crust soggy within 5 minutes.',
        moveOnWhen: 'Served piping hot.',
        quickInstructions: 'Serve immediately with creamy tahini sauce, pickled turnips, and warm pita.'
      }
    ],
    commonMistakes: [
      { mistake: 'Using canned chickpeas', remedy: 'Canned chickpeas have cooked starch that dissolves into mush in hot oil. You must use raw soaked chickpeas.' },
      { mistake: 'Oil temperature too low', remedy: 'If oil drops below 170°C, the falafels will fall apart into the oil. Use a thermometer to maintain 180°C.' }
    ],
    troubleshooting: [
      {
        problem: 'Falafels disintegrated into crumbs in the oil',
        whatHappened: 'The patty broke apart upon hitting the hot oil.',
        whyItHappened: 'Chickpeas were too wet, pulsed too coarsely, or oil was not hot enough.',
        whatToDoNow: 'Scoop out crumbs. Mix 1-2 tablespoons of chickpea flour or all-purpose flour into the remaining mixture to add binding strength, and ensure oil is at 180°C.',
        howToPrevent: 'Thoroughly dry soaked chickpeas on towels before processing, and chill the mixture for 1 hour.'
      }
    ],
    substitutions: [
      { original: 'Dried chickpeas', substitute: '50/50 dried chickpeas and dried fava beans (Ta\'ameya)', notes: 'The authentic Egyptian falafel style uses fava beans for an even creamier interior.' }
    ],
    safetyNotes: ['Never drop falafels from high above — gently lower with a slotted spoon to avoid oil splashing.', 'Keep water away from hot frying oil.'],
    servingGuide: {
      restingTime: 'Rest 1 minute on a wire rack before serving.',
      temperature: 'Piping hot from the fryer.',
      garnishing: 'Toasted sesame seeds, sumac, and fresh mint leaves.',
      accompaniments: 'Lemon tahini sauce, pickled pink turnips, Arabic salad, and warm pita bread.'
    }
  },

  // 9. SHAWARMA (Authentic Chicken Shawarma with Toum)
  {
    id: 'shawarma',
    name: 'Authentic Levantine Chicken Shawarma with Lebanese Toum',
    cuisine: 'Middle Eastern',
    region: 'Levant (Lebanon / Syria)',
    servings: 4,
    prepTime: 30,
    cookTime: 20,
    difficulty: 'Medium',
    overview: {
      summary: 'The reigning king of Levantine street food: boneless chicken thighs marinated overnight in whole milk yogurt, lemon juice, garlic, olive oil, and the legendary shawarma spice blend (cardamom, coriander, cumin, turmeric, cinnamon, smoked paprika, and allspice). Seared in a blistering cast-iron skillet to achieve deep rotisserie-style charring, shaved into succulent ribbons, and wrapped in thin Lebanese markouk or pita with whipped garlic Toum and pickles.',
      appearance: 'Tender spiced strips of mahogany-charred golden chicken tucked into toasted flatbread with white whipped garlic toum and red pickled turnips.',
      texture: 'Crispy caramelized browned chicken edges with juicy, meltingly tender meat enveloped in warm soft bread.',
      flavor: 'Warm aromatic spices (sweet cardamom, citrusy coriander, earthy cumin), tangy yogurt marinade, and sharp pungent garlic toum.',
      restingTimeMinutes: 5
    },
    equipment: [
      { name: 'Heavy cast-iron skillet or griddle', purpose: 'To get extreme searing heat and rotisserie-style dark crust without drying the chicken.' },
      { name: 'Chef knife & cutting board', purpose: 'To shave cooked chicken thighs into thin authentic shawarma ribbons.' }
    ],
    beforeYouStart: [
      { task: 'Marinate 700g boneless skinless chicken thighs in yogurt, lemon juice, olive oil, garlic, and shawarma spice blend for at least 4 hours (overnight preferred).', durationMinutes: 240 },
      { task: 'Bring marinated chicken out of the refrigerator 30 minutes before cooking to remove the chill.', durationMinutes: 30 },
      { task: 'Prepare or obtain authentic Lebanese Toum (whipped garlic dip made of raw garlic, oil, lemon juice, and salt).', durationMinutes: 10 }
    ],
    ingredientPrepGuide: [
      { item: 'Chicken Thighs vs. Breasts', technique: 'Always use boneless skinless chicken thighs! Chicken breasts dry out and turn stringy under high-heat searing, whereas thighs have intramuscular fat that bastes the meat into juicy ribbons.' },
      { item: 'Cardamom Shawarma Signature', technique: 'Freshly ground green cardamom pods are the essential aromatic signature of authentic Levantine shawarma. Never skip the cardamom!' }
    ],
    essentialIngredients: [
      { name: 'Boneless skinless chicken thighs', prep: 'trimmed of excess gristle', amount: '700g', metric: '700g', imperial: '1.5 lbs', common: '700g' },
      { name: 'Plain whole milk yogurt', prep: 'marinade base', amount: '1/2 cup', metric: '120g', imperial: '4.2 oz', common: '1/2 cup' },
      { name: 'Fresh lemon juice & Olive oil', prep: 'acid & fat', amount: '3 tbsp lemon + 3 tbsp olive oil', metric: '90ml', imperial: '3 fl oz', common: '6 tbsp total' },
      { name: 'Fresh garlic cloves', prep: 'grated to paste', amount: '6 cloves', metric: '18g', imperial: '0.6 oz', common: '6 cloves' },
      { name: 'Ground cumin & Ground coriander', prep: 'earthy spice blend', amount: '1 tbsp each', metric: '16g', imperial: '0.56 oz', common: '2 tbsp' },
      { name: 'Ground green cardamom', prep: 'essential aromatic signature', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Smoked paprika & Turmeric', prep: 'color & warmth', amount: '1 tsp paprika + 1/2 tsp turmeric', metric: '5g', imperial: '0.18 oz', common: '1.5 tsp' },
      { name: 'Ground cinnamon & Allspice', prep: 'warm sweet notes', amount: '1/2 tsp cinnamon + 1/2 tsp allspice', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Fine sea salt & Black pepper', prep: 'seasoning', amount: '1.5 tsp salt + 1 tsp pepper', metric: '10g', imperial: '0.35 oz', common: 'mixed' },
      { name: 'Lebanese Toum (Whipped garlic spread)', prep: 'fluffy white garlic emulsion', amount: '1/2 cup', metric: '120g', imperial: '4.2 oz', common: '1/2 cup' },
      { name: 'Lebanese flatbread or pita', prep: 'thin bread for rolling', amount: '4 flatbreads', metric: '4 pieces', imperial: '4 pieces', common: '4 breads' },
      { name: 'Middle Eastern wild pickled cucumbers & pickled turnips', prep: 'sliced', amount: '1 cup', metric: '100g', imperial: '3.5 oz', common: '1 cup' }
    ],
    optionalIngredients: [
      { name: 'French fries', prep: 'crisp hot fries (traditional inside Lebanese wrap)', amount: '1 cup', metric: '100g', imperial: '3.5 oz', common: '1 cup' }
    ],
    steps: [
      {
        step: 1,
        title: 'MARINATE CHICKEN IN SPICED YOGURT',
        whatYouNeed: ['Chicken thighs', 'Yogurt', 'Lemon juice', 'Olive oil', 'Garlic paste', 'All shawarma spices', 'Salt & Pepper'],
        description: 'In a large bowl, whisk together the yogurt, lemon juice, olive oil, grated garlic, cumin, coriander, cardamom, paprika, turmeric, cinnamon, allspice, salt, and black pepper. Add the chicken thighs and massage thoroughly with your hands until every piece is coated in the fragrant orange-gold marinade. Cover tightly and refrigerate for at least 4 hours (overnight yields extraordinary tenderness).',
        howToDoIt: 'Lactic acid in yogurt gently tenderizes chicken fibers without turning them mushy, while carrying fat-soluble spices deep into the meat.',
        heat: 'No Heat (Chilled)',
        duration: 10,
        visualCues: 'Vibrant golden-orange spiced marinade clinging heavily to chicken thighs.',
        smell: 'Intensely fragrant with cardamom, garlic, cinnamon, and cumin.',
        textureCheck: 'Well-coated, supple chicken thighs.',
        whatShouldThisLookLike: 'Marinated chicken resting in a rich spice paste.',
        tip: 'Wipe off thick excess yogurt before searing so the chicken browns rather than steams.',
        commonMistake: 'Marinating for only 15 minutes, which leaves the interior of the chicken bland.',
        moveOnWhen: 'Chicken is fully marinated and brought to room temperature.',
        quickInstructions: 'Whisk yogurt, lemon, garlic, olive oil, and all spices; coat chicken thighs thoroughly; chill 4-12 hours.'
      },
      {
        step: 2,
        title: 'SEAR IN SCREAMING HOT CAST-IRON SKILLET',
        whatYouNeed: ['Cast-iron skillet', '1 tbsp oil', 'Marinated chicken thighs'],
        description: 'Heat 1 tbsp oil in a heavy cast-iron skillet over high heat until wisps of smoke appear. Lay chicken thighs flat in a single layer (cook in two batches if necessary). Press down firmly with a spatula. Sear undisturbed for 5 to 6 minutes until the underside develops dark, crispy, blackened-charred edges. Flip and sear the second side for 4 to 5 minutes until fully cooked through to 75°C (165°F).',
        howToDoIt: 'The extreme contact heat of cast iron caramelizes the yogurt sugars and spices into a charred crust that replicates commercial rotating spits.',
        heat: 'Medium-High to High Heat',
        duration: 11,
        visualCues: 'Deep mahogany blackened char on edges, glistening rendered juices, and firm bouncy meat.',
        hear: 'Loud, vigorous, crackling sizzle.',
        smell: 'Intoxicating aroma of roasted spices, charred chicken, and garlic.',
        textureCheck: 'Springy and firm; clear juices run when pierced.',
        whatShouldThisLookLike: 'Darkly charred, golden spiced chicken thighs glistening with juices.',
        tip: 'Do not fear the dark char marks — in authentic shawarma, that blackened edge provides essential roasty flavor!',
        commonMistake: 'Crowding the skillet with too much chicken, which causes liquid to pool and boils the meat.',
        moveOnWhen: 'Internal temperature registers 75°C (165°F) with rich charring.',
        quickInstructions: 'Sear chicken thighs in screaming hot cast-iron 5-6 mins per side until deeply charred; do not crowd.'
      },
      {
        step: 3,
        title: 'REST & SHAVE INTO THIN RIBBONS',
        whatYouNeed: ['Cooked seared chicken', 'Cutting board', 'Sharp chef knife'],
        description: 'Transfer seared chicken to a wooden cutting board and let rest for 5 minutes so juices redistribute. Using a sharp chef knife, slice the chicken diagonally into razor-thin ribbons (3mm thick). Toss the shredded ribbons through the cutting board juices to glaze every bite.',
        howToDoIt: 'Resting prevents the moisture from gushing out upon slicing, keeping every ribbon juicy and succulent.',
        heat: 'No Heat',
        duration: 5,
        visualCues: 'Thin ribbons of juicy golden chicken with crispy charred edges.',
        smell: 'Cardamom and roasted garlic perfume.',
        textureCheck: 'Tender, juicy chicken shreds that melt in your mouth.',
        whatShouldThisLookLike: 'A warm pile of shaved shawarma chicken glistening in spiced juices.',
        tip: 'Collect all the board juices and pour them back over the shaved chicken before assembling.',
        commonMistake: 'Slicing immediately off the pan, resulting in dry chicken sitting in a puddle.',
        moveOnWhen: 'All chicken is shaved into thin strips.',
        quickInstructions: 'Rest chicken 5 minutes, then shave diagonally into thin ribbons and toss in cutting board juices.'
      },
      {
        step: 4,
        title: 'ASSEMBLE & TOAST THE LEBANESE WRAP',
        whatYouNeed: ['Flatbread', 'Lebanese Toum', 'Shaved chicken', 'Pickles & French fries', 'Cast-iron skillet'],
        description: 'Lay flatbread on a clean surface. Slather a generous 2 tablespoons of white garlic Toum down the center. Top with hot shaved chicken, sliced pickled cucumbers, pink pickled turnips, and a few hot french fries. Fold bottom up, then roll tightly into a snug cylinder. Place the rolled wrap seam-side down into the hot dry skillet for 90 seconds per side until crispy, toasted, and sealed.',
        howToDoIt: 'Toasting the finished wrap in the skillet crisps the bread and seals the seam so it can be eaten without unraveling.',
        heat: 'Medium Heat',
        duration: 4,
        visualCues: 'Crispy toasted golden grill marks on the flatbread wrapper.',
        hear: 'Gentle sizzle as bread toasts in residual chicken fat.',
        smell: 'Garlic toum, toasted bread, and warm chicken.',
        textureCheck: 'Crispy, crackling bread exterior wrapping around juicy chicken and crunchy pickles.',
        whatShouldThisLookLike: 'A tight, golden-toasted shawarma wrap ready to cut in half.',
        tip: 'In authentic Beirut shawarma, tahini is for beef; garlic toum is strictly for chicken!',
        commonMistake: 'Adding lettuce or tomatoes inside the wrap, which releases water and makes the wrap soggy.',
        moveOnWhen: 'Wrap is toasted on both sides, sliced diagonally in half, and served.',
        quickInstructions: 'Spread Toum on flatbread, add shaved chicken, pickles, and fries; roll tightly, toast in dry skillet 90 secs per side.'
      }
    ],
    commonMistakes: [
      { mistake: 'Using chicken breast', remedy: 'Chicken breast dries out severely during high heat searing. Use boneless skinless chicken thighs.' },
      { mistake: 'Omitting ground cardamom', remedy: 'Cardamom is the quintessential spice defining shawarma. Without it, the dish simply tastes like generic spiced chicken.' }
    ],
    troubleshooting: [
      {
        problem: 'Chicken released water and boiled instead of searing',
        whatHappened: 'Pan flooded with liquid; no browning occurred.',
        whyItHappened: 'The skillet was not hot enough or was overcrowded.',
        whatToDoNow: 'Remove chicken, wipe skillet, reheat until smoking with 1 tbsp oil, and return chicken in small batches to char.',
        howToPrevent: 'Use screaming hot cast iron and cook in batches with space between pieces.'
      }
    ],
    substitutions: [
      { original: 'Lebanese Toum', substitute: 'Garlic mayonnaise mixed with lemon juice and crushed garlic', notes: 'Quick home substitute for traditional whipped garlic.' },
      { original: 'Lebanese markouk bread', substitute: 'Thin lavash or soft flour tortillas', notes: 'Rolls easily and toasts crisp.' }
    ],
    safetyNotes: ['Chicken thighs must reach internal temperature of 75°C (165°F).', 'Raw garlic in toum is safe but intensely pungent.'],
    servingGuide: {
      restingTime: 'Rest 2 minutes after toasting before slicing.',
      temperature: 'Piping hot and toasted.',
      garnishing: 'Extra Toum and pickled turnips on the side.',
      accompaniments: 'Crisp french fries, pickled wild cucumbers, and cold mint lemonade.'
    }
  },

  // 10. FATTOUSH (Authentic Lebanese Fattoush Salad with Sumac & Pomegranate Molasses)
  {
    id: 'fattoush',
    name: 'Authentic Lebanese Fattoush Salad (Crisp Pita, Herb & Sumac Salad)',
    cuisine: 'Middle Eastern',
    region: 'Levant (Lebanon)',
    servings: 4,
    prepTime: 20,
    cookTime: 5,
    difficulty: 'Easy',
    overview: {
      summary: 'The jewel of Lebanese summer salads: crisp romaine lettuce, peppery wild purslane (or watercress), crunchy Persian cucumbers, ruby radishes, and sweet ripe tomatoes tossed with an abundance of fresh mint and flat-leaf parsley. Crowned with golden, crispy olive-oil-toasted pita chips and dressed in an intoxicating sweet-tart vinaigrette of dark pomegranate molasses, crushed sumac, garlic, lemon juice, and extra virgin olive oil.',
      appearance: 'A vibrant, colorful mountain of fresh garden greens, bright pink radishes, and red tomatoes tossed with shatteringly crisp golden-brown pita croutons dusted in purple sumac.',
      texture: 'Spectacular multi-layered crunch: crisp lettuce, crunchy radishes, snap of cucumbers, and the crackle of fried pita bread.',
      flavor: 'Bright, invigorating, and deeply tart-sweet from pomegranate molasses and citrusy sumac, balanced by fragrant fresh mint and fruity olive oil.',
      restingTimeMinutes: 0
    },
    equipment: [
      { name: 'Wide salad bowl', purpose: 'For tossing voluminous greens without bruising delicate herbs.' },
      { name: 'Small skillet or baking sheet', purpose: 'For crisping pita squares in olive oil.' }
    ],
    beforeYouStart: [
      { task: 'Cut 2 pita breads into bite-sized 2cm squares.', durationMinutes: 3 },
      { task: 'Wash all lettuce, herbs, and vegetables thoroughly in ice water, then spin completely dry in a salad spinner (wet greens dilute the vinaigrette).', durationMinutes: 10 },
      { task: 'Whisk the dressing: 3 tbsp olive oil, 2 tbsp pomegranate molasses, 2 tbsp lemon juice, 1 clove minced garlic, 1.5 tsp sumac, and 1/2 tsp salt.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'Purslane & Mint Essential', technique: 'Authentic Fattoush requires fresh mint leaves and wild purslane (Bakleh). If purslane is unavailable, baby watercress or arugula provides the necessary lemony, peppery bite.' },
      { item: 'Pita Crisping Technique', technique: 'Fry pita squares in 2 tbsp extra virgin olive oil with a pinch of sumac and salt until golden and blistered. Baked pita works, but olive-oil fried pita stays crisp far longer when tossed with dressing.' }
    ],
    essentialIngredients: [
      { name: 'Arabic pita bread (thin pocket)', prep: 'cut into 2cm squares', amount: '2 pitas', metric: '100g', imperial: '3.5 oz', common: '2 pitas' },
      { name: 'Romaine lettuce hearts', prep: 'chopped into bite-sized pieces', amount: '1 large head', metric: '250g', imperial: '8.8 oz', common: '1 head' },
      { name: 'Persian cucumbers', prep: 'sliced into half-moons', amount: '3 cucumbers', metric: '180g', imperial: '6.3 oz', common: '3 cucumbers' },
      { name: 'Ripe vine tomatoes', prep: 'chopped into 2cm chunks', amount: '3 medium', metric: '250g', imperial: '8.8 oz', common: '3 tomatoes' },
      { name: 'Red radishes', prep: 'thinly sliced into crisp rounds', amount: '5 radishes', metric: '80g', imperial: '2.8 oz', common: '5 radishes' },
      { name: 'Fresh purslane or baby watercress', prep: 'leaves picked from tough stems', amount: '1 cup packed', metric: '40g', imperial: '1.4 oz', common: '1 cup' },
      { name: 'Fresh flat-leaf parsley & Fresh mint', prep: 'roughly chopped', amount: '1 cup parsley + 1/2 cup mint', metric: '50g', imperial: '1.8 oz', common: 'mixed' },
      { name: 'Green onions (Scallions)', prep: 'thinly sliced', amount: '3 scallions', metric: '40g', imperial: '1.4 oz', common: '3 onions' },
      { name: 'Pomegranate molasses (Nar Ekşisi / Dibs Remman)', prep: 'tart-sweet dark syrup', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp' },
      { name: 'Extra virgin olive oil', prep: 'cold-pressed', amount: '4 tbsp', metric: '60ml', imperial: '2 fl oz', common: '1/4 cup' },
      { name: 'Fresh lemon juice', prep: 'strained', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp' },
      { name: 'Ground sumac', prep: 'wild tart berry powder', amount: '1.5 tbsp', metric: '10g', imperial: '0.35 oz', common: '1.5 tbsp' },
      { name: 'Garlic clove & Fine sea salt', prep: 'crushed & seasoned', amount: '1 clove garlic + 3/4 tsp salt', metric: '5g', imperial: '0.18 oz', common: 'mixed' }
    ],
    optionalIngredients: [
      { name: 'Fresh pomegranate arils (seeds)', prep: 'for jewel-like garnish', amount: '3 tbsp', metric: '30g', imperial: '1 oz', common: '3 tbsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'TOAST PITA CHIPS IN OLIVE OIL WITH SUMAC',
        whatYouNeed: ['Pita squares', '2 tbsp olive oil', '1/2 tsp sumac', 'Pinch of salt', 'Skillet'],
        description: 'Heat 2 tbsp olive oil in a skillet over medium heat. Add the cut pita squares. Toss frequently for 3 to 4 minutes until golden-brown, puffed, and crisp. Remove from heat, immediately sprinkle with 1/2 tsp sumac and a pinch of salt, and transfer to a paper-towel-lined plate to cool.',
        howToDoIt: 'Frying pita in olive oil creates an impermeable golden crust that resists absorbing salad juices too quickly.',
        heat: 'Medium Heat',
        duration: 5,
        visualCues: 'Pita turns deep golden-amber and blisters with crisp, airy bubbles.',
        hear: 'Delicate crackle as bread crisps in warm oil.',
        smell: 'Toasted bread, fruity olive oil, and tart sumac.',
        textureCheck: 'Shatteringly crisp chip.',
        whatShouldThisLookLike: 'Golden pita croutons dusted with purple sumac.',
        tip: 'Ensure the pita chips are cooled to room temperature before tossing into the salad, or their heat will wilt the lettuce.',
        commonMistake: 'Using soft un-toasted pita bread, which turns into soggy paste immediately.',
        moveOnWhen: 'Pita chips are golden, seasoned, and cooled.',
        quickInstructions: 'Fry pita squares in 2 tbsp olive oil 3-4 mins until crisp and golden; toss with sumac and salt; cool.'
      },
      {
        step: 2,
        title: 'WHISK THE POMEGRANATE SUMAC DRESSING',
        whatYouNeed: ['Pomegranate molasses', '2 tbsp olive oil', 'Lemon juice', 'Minced garlic', '1 tbsp sumac', 'Salt', 'Small jar or bowl'],
        description: 'In a small bowl or jar, combine the pomegranate molasses, remaining extra virgin olive oil, fresh lemon juice, crushed garlic, 1 tablespoon of ground sumac, and salt. Whisk vigorously until the dressing emulsifies into a glossy, dark burgundy vinaigrette.',
        howToDoIt: 'Pomegranate molasses provides natural viscosity, binding the olive oil and lemon juice into an emulsified glaze without mustard.',
        heat: 'No Heat',
        duration: 3,
        visualCues: 'A shimmering, thick, dark garnet-red vinaigrette.',
        smell: 'Pungent garlic, sweet-sour pomegranate, and tart citrus.',
        textureCheck: 'Smooth, syrupy, emulsified dressing.',
        whatShouldThisLookLike: 'Glossy burgundy dressing.',
        tip: 'Taste the dressing on a lettuce leaf: it should make your palate tingle with tangy, fruity acidity.',
        commonMistake: 'Substituting standard balsamic vinegar — pomegranate molasses has a unique fruit astringency essential to Fattoush.',
        moveOnWhen: 'Dressing is emulsified and flavorful.',
        quickInstructions: 'Whisk pomegranate molasses, olive oil, lemon juice, garlic, sumac, and salt into a glossy vinaigrette.'
      },
      {
        step: 3,
        title: 'CHOP & COMBINE GARDEN GREENS & HERBS',
        whatYouNeed: ['Romaine lettuce', 'Cucumbers', 'Tomatoes', 'Radishes', 'Purslane/watercress', 'Parsley', 'Mint', 'Scallions'],
        description: 'In a large salad bowl, place chopped romaine lettuce, sliced cucumbers, chopped tomatoes, sliced radishes, purslane leaves, chopped parsley, fresh mint, and sliced green onions. Gently toss with your hands to distribute the colors and herbs evenly throughout the bowl.',
        howToDoIt: 'Tossing with your hands is far gentler than tongs, preventing delicate mint and parsley leaves from bruising and turning black.',
        heat: 'No Heat',
        duration: 6,
        visualCues: 'A rainbow bowl of vibrant emerald greens, ruby tomatoes, and bright pink radish crescents.',
        smell: 'Freshly torn mint, crisp cucumber, and garden greens.',
        textureCheck: 'Ice-cold, crisp, crunchy vegetables.',
        whatShouldThisLookLike: 'A fresh, bountiful Lebanese garden salad.',
        tip: 'Keep vegetables chilled until the very moment of assembly to maintain maximum snap.',
        commonMistake: 'Dressing the salad hours before serving, which wilts the greens into a limp soggy mess.',
        moveOnWhen: 'Greens and vegetables are combined in the bowl.',
        quickInstructions: 'Combine dry chopped lettuce, cucumber, tomato, radish, purslane, mint, parsley, and scallions in a bowl.'
      },
      {
        step: 4,
        title: 'DRESS, TOP WITH PITA & SERVE IMMEDIATELY',
        whatYouNeed: ['Prepared greens', 'Burgundy dressing', 'Crispy pita chips', 'Pomegranate seeds', 'Extra sumac'],
        description: 'Pour the dressing over the salad and toss gently until every leaf glistens. Add two-thirds of the crispy pita chips and toss once. Top the salad with the remaining crispy pita chips, fresh pomegranate seeds, and a generous final dusting of purple sumac. Serve immediately!',
        howToDoIt: 'Adding some pita chips inside absorbs dressing while reserving the rest on top guarantees a shatteringly crisp bite.',
        heat: 'No Heat',
        duration: 2,
        visualCues: 'Glistening dressed salad crowned with golden pita chips and jewel-like pomegranate arils.',
        smell: 'Tart sumac, sweet pomegranate, and fresh mint.',
        textureCheck: 'Explosive, refreshing crunch in every mouthful.',
        whatShouldThisLookLike: 'The ultimate Lebanese Fattoush bowl ready to enjoy.',
        tip: 'Fattoush must be eaten immediately after dressing — never let dressed Fattoush sit longer than 15 minutes.',
        commonMistake: 'Drowning the salad in dressing; add dressing gradually so greens remain crisp.',
        moveOnWhen: 'Salad is dressed, tossed, topped, and served.',
        quickInstructions: 'Toss salad with dressing and half the pita chips; top with remaining chips, pomegranate arils, and sumac; serve at once.'
      }
    ],
    commonMistakes: [
      { mistake: 'Using wet greens', remedy: 'Spin lettuce and herbs completely dry in a salad spinner. Water repels the oil dressing and turns the salad watery.' },
      { mistake: 'Omitting fresh mint', remedy: 'Fresh mint is the aromatic soul of Lebanese salads — dried mint cannot substitute here.' }
    ],
    troubleshooting: [
      {
        problem: 'Salad became watery in the bottom of the bowl',
        whatHappened: 'Tomatoes and cucumbers released their juices.',
        whyItHappened: 'Salad was dressed too far in advance or salted too early.',
        whatToDoNow: 'Drain off excess liquid from the bowl bottom and toss in extra crispy pita chips to absorb moisture.',
        howToPrevent: 'Only dress Fattoush immediately before placing on the dining table.'
      }
    ],
    substitutions: [
      { original: 'Purslane', substitute: 'Baby watercress or baby arugula', notes: 'Provides identical peppery, citrusy crunch.' },
      { original: 'Pomegranate molasses', substitute: '1 tbsp balsamic glaze mixed with 1 tbsp fresh lemon juice', notes: 'Mimics the tart-sweet balance.' }
    ],
    safetyNotes: ['Wash all raw produce thoroughly in cold water before chopping.'],
    servingGuide: {
      restingTime: '0 minutes — serve immediately upon dressing.',
      temperature: 'Chilled and crisp.',
      garnishing: 'Extra sumac powder, fresh pomegranate seeds, and crispy pita.',
      accompaniments: 'Grilled shish taouk, lamb shawarma, or fresh hummus with warm flatbread.'
    }
  },

  // 11. TABOULEH (Authentic Lebanese Parsley Tabbouleh)
  {
    id: 'tabouleh',
    name: 'Authentic Lebanese Tabbouleh (Flat-Leaf Parsley & Bulgur Salad)',
    cuisine: 'Middle Eastern',
    region: 'Levant (Lebanon)',
    servings: 4,
    prepTime: 25,
    cookTime: 0,
    difficulty: 'Easy',
    overview: {
      summary: 'The national pride of Lebanon: an authentic parsley salad (NOT a bulgur grain bowl!). Composed of finely hand-minced flat-leaf Italian parsley, fresh spearmint, tiny gems of firm red tomatoes, and scallions, bound together with just a whisper of fine bulgur wheat soaked in pure lemon juice and fruity extra virgin olive oil. Served traditionally with crisp romaine lettuce leaves used as edible scoops.',
      appearance: 'A vibrant, deep emerald-green herby salad flecked with ruby red tomato micro-cubes and pale bulgur grains, nestled inside crisp romaine lettuce hearts.',
      texture: 'Delicate, fluffy, and feather-light with a refreshing botanical chew, punctuated by the soft give of soaked bulgur and crisp tomato.',
      flavor: 'Bright, citrusy, and refreshing: intense peppery flat-leaf parsley, cool spearmint, tart fresh lemon juice, and rich grassy olive oil.',
      restingTimeMinutes: 10
    },
    equipment: [
      { name: 'Razor-sharp chef knife', purpose: 'Essential! A dull knife crushes parsley, bruising it and expelling green juice. A sharp knife slices cleanly without bruising.' },
      { name: 'Salad spinner & clean kitchen towels', purpose: 'Parsley must be bone-dry before chopping.' },
      { name: 'Mixing bowl', purpose: 'For dressing and resting salad.' }
    ],
    beforeYouStart: [
      { task: 'Wash 3 large bunches of flat-leaf Italian parsley, spin in salad spinner, and lay flat on dry towels for 1 hour until bone-dry.', durationMinutes: 60 },
      { task: 'Rinse 3 tablespoons of fine #1 bulgur wheat in cold water, drain, and soak in 4 tbsp fresh lemon juice for 15 minutes to soften.', durationMinutes: 15 },
      { task: 'Seed 3 firm plum tomatoes and dice into tiny 3mm cubes; drain in a sieve to discard watery juice.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'THE PARSLEY RULE: It is an Herb Salad!', technique: 'Western tabbouleh often makes the mistake of using 80% bulgur wheat with parsley garnish. Authentic Lebanese tabbouleh is 90% hand-chopped parsley with barely 2-3 tablespoons of bulgur wheat acting as an accent!' },
      { item: 'The Sharp Knife Single Cut', technique: 'Slice parsley leaves cleanly in one single pass. NEVER rock your knife back and forth across chopped parsley, which crushes cell walls, turning the herb into black soggy mush.' }
    ],
    essentialIngredients: [
      { name: 'Fresh flat-leaf Italian parsley', prep: 'stems removed, bone-dry, finely sliced', amount: '3 large bunches', metric: '300g', imperial: '10.5 oz', common: '4 cups chopped' },
      { name: 'Fresh spearmint leaves', prep: 'picked from stems, finely sliced', amount: '1 cup packed', metric: '40g', imperial: '1.4 oz', common: '1/2 cup chopped' },
      { name: 'Fine bulgur wheat (#1 grind)', prep: 'soaked in lemon juice (never boiled)', amount: '3 tbsp', metric: '35g', imperial: '1.2 oz', common: '3 tbsp' },
      { name: 'Firm red plum tomatoes', prep: 'seeded and diced into microscopic 3mm cubes', amount: '3 tomatoes', metric: '250g', imperial: '8.8 oz', common: '3 tomatoes' },
      { name: 'Green onions (Scallions)', prep: 'finely sliced white and green parts', amount: '4 scallions', metric: '50g', imperial: '1.8 oz', common: '4 scallions' },
      { name: 'Freshly squeezed lemon juice', prep: 'strained clear', amount: '80ml', metric: '80ml', imperial: '2.7 fl oz', common: '1/3 cup' },
      { name: 'Extra virgin olive oil (Cold-pressed)', prep: 'fruity Lebanese oil', amount: '80ml', metric: '80ml', imperial: '2.7 fl oz', common: '1/3 cup' },
      { name: 'Fine sea salt & Fresh black pepper', prep: 'seasoning', amount: '1 tsp salt + 1/4 tsp pepper', metric: '6g', imperial: '0.2 oz', common: 'mixed' },
      { name: 'Crisp Romaine lettuce hearts', prep: 'leaves washed and whole for scooping', amount: '2 hearts', metric: '200g', imperial: '7 oz', common: 'leaves' }
    ],
    optionalIngredients: [
      { name: 'Ground allspice or Lebanese seven spice', prep: 'tiny pinch for depth', amount: '1/4 tsp', metric: '0.5g', imperial: '0.02 oz', common: '1 pinch' }
    ],
    steps: [
      {
        step: 1,
        title: 'SOAK FINE BULGUR IN LEMON JUICE',
        whatYouNeed: ['3 tbsp fine #1 bulgur', '80ml fresh lemon juice', 'Small bowl'],
        description: 'Place the fine bulgur wheat into a small bowl. Pour the freshly squeezed lemon juice directly over the dry bulgur. Let it sit undisturbed for 15 minutes. The grains will absorb the tart lemon juice, swelling and softening into tender citrus pearls without requiring any boiling water.',
        howToDoIt: 'Soaking bulgur directly in lemon juice infuses tartness deep into the core of the grain while preserving its firm al dente texture.',
        heat: 'No Heat',
        duration: 15,
        visualCues: 'Bulgur grains swell to twice their size, absorbing nearly all the lemon juice.',
        smell: 'Sharp, clean citrus perfume.',
        textureCheck: 'Tender with a gentle al dente grain bite.',
        whatShouldThisLookLike: 'Plump, pale lemon-soaked bulgur.',
        tip: 'Make sure you buy Fine #1 Bulgur — coarse bulgur used for pilafs will remain hard and inedible when soaked in cold juice.',
        commonMistake: 'Boiling the bulgur in water, turning it into soggy porridge.',
        moveOnWhen: 'Bulgur is tender and plump.',
        quickInstructions: 'Soak 3 tbsp fine bulgur in 80ml fresh lemon juice for 15 mins until softened and plump.'
      },
      {
        step: 2,
        title: 'BONE-DRY PARSLEY & THE PRECISION CUT',
        whatYouNeed: ['Bone-dry parsley bunches', 'Fresh mint leaves', 'Sharp chef knife', 'Cutting board'],
        description: 'Ensure the parsley leaves are completely bone-dry. Gather a tight bundle of parsley in your non-dominant hand. Using a razor-sharp chef knife, slice through the parsley in ultra-thin, delicate ribbons (1mm wide) with a clean slicing motion. Do this once — do NOT chop back and forth! Finely slice the mint leaves in the same single-slice manner. Place herbs in a large bowl.',
        howToDoIt: 'If parsley is wet, chopping it turns it into a bruised green sludge. Bone-dry parsley sliced with a sharp knife fluffs up like airy green confetti.',
        heat: 'No Heat',
        duration: 8,
        visualCues: 'A massive, airy, fluffy mountain of dry, vibrant green parsley and mint confetti.',
        smell: 'Incredible burst of fresh grassy parsley and cool mint oils.',
        textureCheck: 'Dry, feather-light, completely unbruised herb ribbons.',
        whatShouldThisLookLike: 'Fluffy green cloud of sliced herbs in a bowl.',
        tip: 'Resting washed parsley on a clean dry bath towel with a fan blowing over it dries it quickly without wilting.',
        commonMistake: 'Using a dull knife or chopping wet parsley, causing green juice to bleed all over the cutting board.',
        moveOnWhen: 'All parsley and mint are cleanly sliced and fluffy.',
        quickInstructions: 'Ensure parsley is bone-dry; slice in ultra-thin 1mm ribbons with a sharp knife in a single pass; slice mint.'
      },
      {
        step: 3,
        title: 'COMBINE HERBS, TOMATOES, SCALLIONS & BULGUR',
        whatYouNeed: ['Chopped herbs', 'Diced drained tomatoes', 'Sliced scallions', 'Soaked bulgur', 'Allspice'],
        description: 'Add the drained tomato micro-cubes, sliced scallions, soaked bulgur (including any residual lemon juice in the bowl), and a pinch of allspice to the bowl of chopped herbs. Toss gently with your fingers or two salad spoons to distribute the ingredients evenly throughout the greens.',
        howToDoIt: 'Seeding and draining tomatoes before adding prevents their juices from waterlogging the light parsley leaves.',
        heat: 'No Heat',
        duration: 3,
        visualCues: 'Deep green parsley flecked with bright ruby tomato cubes and pale grains.',
        smell: 'Mint, green onion, and sweet tomatoes.',
        textureCheck: 'Light and airy herb mixture.',
        whatShouldThisLookLike: 'An authentic Lebanese emerald parsley salad.',
        tip: 'Hold off on adding the olive oil and salt until right before serving to keep the parsley bouncy and fresh.',
        commonMistake: 'Adding big chunks of tomato — the tomatoes should be diced tiny to match the size of the bulgur grains.',
        moveOnWhen: 'Herbs, tomatoes, onions, and bulgur are mixed.',
        quickInstructions: 'Gently combine sliced herbs with diced tomatoes, scallions, soaked bulgur, and a pinch of allspice.'
      },
      {
        step: 4,
        title: 'DRESS WITH OLIVE OIL, SALT & SERVE ON ROMAINE',
        whatYouNeed: ['Extra virgin olive oil', '1 tsp salt', '1/4 tsp pepper', 'Romaine lettuce leaves'],
        description: 'Pour the extra virgin olive oil over the salad, sprinkle with salt and black pepper, and toss gently until the parsley glistens. Taste and adjust with extra lemon or salt if needed. Arrange fresh crisp romaine lettuce leaves around the edge of a serving platter. Mound the tabbouleh in the center. Use the lettuce leaves as edible spoons to scoop up bites.',
        howToDoIt: 'In Lebanon, tabbouleh is eaten by hand using fresh romaine lettuce or tender grapevine leaves instead of a fork!',
        heat: 'No Heat',
        duration: 3,
        visualCues: 'A glistening emerald mound surrounded by vibrant green romaine lettuce boats.',
        smell: 'Intense fresh lemon, fruity olive oil, and herbs.',
        textureCheck: 'Crisp romaine holding fluffy, juicy, citrusy herb salad.',
        whatShouldThisLookLike: 'A stunning traditional Lebanese Mezze presentation.',
        tip: 'Tabbouleh is best enjoyed within 30 minutes of adding salt and oil, while the parsley leaves remain perky and crisp.',
        commonMistake: 'Eating with a metal fork instead of crisp romaine lettuce.',
        moveOnWhen: 'Plated on romaine and ready to serve.',
        quickInstructions: 'Drizzle with olive oil, salt, and pepper; toss gently, mound on platter, and serve with romaine leaves for scooping.'
      }
    ],
    commonMistakes: [
      { mistake: 'Too much bulgur wheat', remedy: 'Authentic tabbouleh is a parsley salad, not a grain salad. Keep bulgur to just 3 tablespoons.' },
      { mistake: 'Chopping wet parsley', remedy: 'Wet parsley bruises into dark mush. Ensure parsley is 100% dry to the touch before chopping.' }
    ],
    troubleshooting: [
      {
        problem: 'Parsley turned dark green and wilted into mush',
        whatHappened: 'The herb cells ruptured and bled.',
        whyItHappened: 'The knife was dull or the parsley was rock-chopped back and forth.',
        whatToDoNow: 'Dress with extra lemon and olive oil — flavor will still be delicious even if texture is compressed.',
        howToPrevent: 'Sharpen your knife before slicing and use single, clean cuts.'
      }
    ],
    substitutions: [
      { original: 'Fine bulgur wheat', substitute: 'Hemp hearts or finely ground quinoa (gluten-free)', notes: 'Provides an identical delicate nutty texture.' },
      { original: 'Romaine lettuce', substitute: 'Fresh tender cabbage leaves or fresh vine leaves', notes: 'Traditional Lebanese scooping leaves.' }
    ],
    safetyNotes: ['Wash parsley in multiple changes of cold water to remove any lingering soil or grit.'],
    servingGuide: {
      restingTime: 'Rest 5 minutes for flavors to marry.',
      temperature: 'Cool room temperature.',
      garnishing: 'Lemon wedges and fresh mint sprigs.',
      accompaniments: 'Crisp romaine lettuce hearts, fresh hummus, falafel, and grilled lamb skewers.'
    }
  },

  // 12. KEBABS (Levantine Shish Taouk / Spiced Kofta Skewers)
  {
    id: 'kebabs',
    name: 'Authentic Levantine Spiced Kofta & Shish Taouk Kebabs',
    cuisine: 'Middle Eastern',
    region: 'Levant (Lebanon / Syria / Jordan)',
    servings: 4,
    prepTime: 25,
    cookTime: 12,
    difficulty: 'Medium',
    overview: {
      summary: 'The quintessential Middle Eastern grill feast: featuring succulent Kofta Kebabs (minced lamb and beef kneaded with finely minced onion, fresh flat-leaf parsley, garlic, Lebanese seven spice, cumin, and sumac) and tender chicken Shish Taouk skewers marinated in garlic, lemon, and yogurt. Charcoal-grilled until charred and juicy, served over warm flatbread with grilled tomatoes and garlic sauce.',
      appearance: 'Sizzling mahogany-charred meat skewers resting over warm pita bread, garnished with charred red tomatoes, blistered green chiles, and sumac parsley onions.',
      texture: 'Juicy, springy, melt-in-the-mouth meat skewers with crispy caramelized charred exteriors.',
      flavor: 'Smoky charcoal char, fragrant allspice, cinnamon, and nutmeg (seven spice), fresh grassy parsley, and sweet caramelized onion.',
      restingTimeMinutes: 3
    },
    equipment: [
      { name: 'Metal skewers (flat blade for kofta, square for chicken)', purpose: 'For grilling over hot embers without meat rotating or falling.' },
      { name: 'Charcoal grill or heavy cast-iron grill pan', purpose: 'To achieve extreme heat and smoky charring.' }
    ],
    beforeYouStart: [
      { task: 'Finely grate 1 medium onion and squeeze through cheesecloth to extract and discard all watery liquid (wet onion breaks kofta).', durationMinutes: 5 },
      { task: 'Finely mince 1 cup of fresh flat-leaf parsley leaves.', durationMinutes: 5 },
      { task: 'Soak wooden skewers in water for 30 minutes if not using metal skewers.', durationMinutes: 30 }
    ],
    ingredientPrepGuide: [
      { item: 'Kneading the Kofta Paste', technique: 'Knead the cold minced meat with the squeezed onion, parsley, and spices for 5 to 7 minutes until sticky and tacky. This binds the fat and protein naturally so it holds securely onto skewers without falling.' },
      { item: 'The Seven Spice Harmony', technique: 'Lebanese Baharat (seven spice) combines black pepper, allspice, cinnamon, cloves, nutmeg, coriander, and cumin. It imparts warm, fragrant, non-spicy aromatic depth.' }
    ],
    essentialIngredients: [
      { name: 'Ground lamb (shoulder or neck, 20% fat)', prep: 'chilled and finely ground', amount: '350g', metric: '350g', imperial: '12 oz', common: '350g' },
      { name: 'Ground beef chuck (80/20)', prep: 'chilled ground beef', amount: '350g', metric: '350g', imperial: '12 oz', common: '350g' },
      { name: 'Yellow onion', prep: 'finely grated and squeezed dry of all water', amount: '1 medium', metric: '100g', imperial: '3.5 oz', common: '1 onion' },
      { name: 'Fresh flat-leaf parsley', prep: 'finely minced', amount: '1 cup packed', metric: '40g', imperial: '1.4 oz', common: '1 cup' },
      { name: 'Garlic cloves', prep: 'minced to paste', amount: '3 cloves', metric: '9g', imperial: '0.3 oz', common: '3 cloves' },
      { name: 'Lebanese Seven Spice (Baharat)', prep: 'warm aromatic spice blend', amount: '1.5 tbsp', metric: '12g', imperial: '0.4 oz', common: '1.5 tbsp' },
      { name: 'Ground cumin & Ground sumac', prep: 'spices', amount: '1 tsp cumin + 1 tsp sumac', metric: '6g', imperial: '0.2 oz', common: '2 tsp' },
      { name: 'Fine sea salt & Black pepper', prep: 'seasoning', amount: '1.5 tsp salt + 1 tsp pepper', metric: '10g', imperial: '0.35 oz', common: 'mixed' },
      { name: 'Warm pita bread or flatbread', prep: 'for serving underneath', amount: '4 flatbreads', metric: '4 pieces', imperial: '4 pieces', common: '4 breads' },
      { name: 'Plum tomatoes & Green hot peppers', prep: 'skewered for grilling', amount: '3 tomatoes + 4 peppers', metric: '250g', imperial: '8.8 oz', common: 'vegetables' }
    ],
    optionalIngredients: [
      { name: 'Pine nuts (Snobar)', prep: 'toasted and folded into kofta meat', amount: '3 tbsp', metric: '30g', imperial: '1 oz', common: '3 tbsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'KNEAD KOFTA MEAT WITH SQUEEZED ONIONS & SPICES',
        whatYouNeed: ['Ground lamb', 'Ground beef', 'Squeezed grated onion', 'Minced parsley', 'Garlic', 'Seven spice', 'Cumin', 'Sumac', 'Salt & Pepper'],
        description: 'In a large chilled mixing bowl, combine the ground lamb, beef, squeezed onion pulp, minced parsley, garlic, seven spice, cumin, sumac, salt, and black pepper. Knead vigorously with your hands and knuckles for 6 to 8 minutes until the meat becomes sticky, pale, and emulsified into a smooth meat dough.',
        howToDoIt: 'Vigorous kneading extracts myosin proteins, forming an interlocking sticky web that prevents the skewers from crumbling apart over the fire.',
        heat: 'No Heat',
        duration: 8,
        visualCues: 'The meat becomes smooth, uniform, and sticky, clinging to your hand without falling.',
        smell: 'Aromatic allspice, cinnamon, parsley, and savory lamb.',
        textureCheck: 'Tacky, cohesive meat paste with no loose grains.',
        whatShouldThisLookLike: 'A smooth, firm kofta mixture.',
        tip: 'Refrigerate the kneaded mixture for 30 minutes before skewering so the fat solidifies and holds shape.',
        commonMistake: 'Failing to squeeze water out of the grated onions — the excess juice turns the meat wet and causes it to drop off the skewer.',
        moveOnWhen: 'Meat is kneaded, sticky, and chilled.',
        quickInstructions: 'Knead lamb, beef, squeezed onion, parsley, garlic, seven spice, cumin, and salt for 6-8 mins until sticky; chill 30 mins.'
      },
      {
        step: 2,
        title: 'MOLD KOFTA ONTO SKEWERS',
        whatYouNeed: ['Chilled kofta mixture', 'Metal skewers', 'Small bowl of cold water'],
        description: 'Divide meat into 6 equal portions (about 110g each). Wet your hands with cold water. Thread one meat portion onto a skewer and press with your palm and fingers into a flat, 20cm-long cylinder. Press with your thumb and index finger along the meat to create characteristic rippled indentations. Crimp both the top and bottom ends tightly onto the metal.',
        howToDoIt: 'The ripples increase surface area for browning, while sealing the ends ensures the skewer cooks evenly.',
        heat: 'No Heat',
        duration: 8,
        visualCues: 'Neat, wavy, uniform meat skewers with firmly sealed tapered ends.',
        textureCheck: 'Securely molded meat adhering firmly to the skewer.',
        whatShouldThisLookLike: 'Classic Middle Eastern rippled kofta skewers.',
        tip: 'Ensure the thickness is uniform across the entire skewer so the ends do not burn before the center cooks.',
        commonMistake: 'Leaving the ends loose or open, which causes the meat to split during grilling.',
        moveOnWhen: 'All skewers are molded and ready to grill.',
        quickInstructions: 'Wet hands, press meat onto skewers into 20cm long cylinders with wave indentations, seal ends tightly.'
      },
      {
        step: 3,
        title: 'GRILL OVER HIGH CHARCOAL HEAT',
        whatYouNeed: ['Hot grill or ribbed grill pan', 'Skewers', 'Skewered tomatoes & peppers'],
        description: 'Place skewers onto a white-hot charcoal grill or smoking-hot grill pan. Sear for 90 seconds until the bottom turns opaque, then flip immediately to set the other side. Continue turning every 60-90 seconds for 7 to 9 minutes total, until beautifully charred on all sides and cooked through to 72°C (160°F). Grill tomatoes and peppers alongside until blistered and soft.',
        howToDoIt: 'Turning frequently cooks the interior gently while preventing fat from burning or dripping into flare-ups.',
        heat: 'High Heat',
        duration: 8,
        visualCues: 'Mahogany grill marks, sizzling surface fat, charred edges, and clear bubbling juices.',
        hear: 'Loud, crackling sizzle and dripping fat on embers.',
        smell: 'Incredible smoky woodfire, charred lamb, and roasted seven spice.',
        textureCheck: 'Springy and firm to touch.',
        whatShouldThisLookLike: 'Juicy, charred kebabs glistening with amber fat.',
        tip: 'Warm your flatbread directly on the grill for 30 seconds to soften before serving.',
        commonMistake: 'Walking away and leaving skewers unturned, burning one side and dropping meat into coals.',
        moveOnWhen: 'Koftas are charred, cooked through, and tomatoes are blistered.',
        quickInstructions: 'Grill skewers over high heat, turning every 60-90 secs for 7-9 mins until charred and springy; grill vegetables.'
      },
      {
        step: 4,
        title: 'REST ON BREAD & ASSEMBLE PLATTER',
        whatYouNeed: ['Warm flatbread', 'Cooked kebabs', 'Grilled vegetables', 'Sumac parsley onions'],
        description: 'Line a serving platter with warm flatbread. Place cooked skewers directly on top. Use a piece of bread to grip the meat and pull the skewers out. Rest for 2 minutes so the flatbread absorbs the hot aromatic meat juices. Garnish with blistered tomatoes, charred peppers, and thinly sliced red onions tossed with sumac and parsley.',
        howToDoIt: 'Resting the meat over flatbread captures every drop of rendered spiced fat, turning the bread into the most prized accompaniment.',
        heat: 'No Heat',
        duration: 3,
        visualCues: 'Glistening mahogany kebabs steaming over juice-soaked flatbread with vibrant red sumac onions.',
        smell: 'Charcoal smoke, warm allspice, and sumac.',
        textureCheck: 'Juicy, tender meat with crispy charred edges.',
        whatShouldThisLookLike: 'A feast-worthy Middle Eastern mixed grill board.',
        tip: 'Serve with cold garlic Toum or creamy Tahini sauce for dipping.',
        commonMistake: 'Discarding the juice-soaked bread under the meat — it is the tastiest part!',
        moveOnWhen: 'Assembled and served piping hot.',
        quickInstructions: 'Slide kebabs off skewers onto warm flatbread, garnish with grilled vegetables and sumac onions, serve warm.'
      }
    ],
    commonMistakes: [
      { mistake: 'Meat falls off skewer', remedy: 'Ensure meat is 20% fat, onions are squeezed completely dry, and the mixture is kneaded for 7 minutes.' },
      { mistake: 'Overcooking until dry', remedy: 'Do not grill past 9 minutes. Lamb and beef kofta should be juicy inside, not dry.' }
    ],
    troubleshooting: [
      {
        problem: 'Kofta meat split and fell into the fire',
        whatHappened: 'The meat structure broke apart over heat.',
        whyItHappened: 'Onions had too much water or meat was under-kneaded.',
        whatToDoNow: 'Remove remaining skewers and cook directly on a flat griddle or cast-iron pan.',
        howToPrevent: 'Squeeze onion through cheesecloth until bone-dry and knead vigorously to bind proteins.'
      }
    ],
    substitutions: [
      { original: 'Ground lamb', substitute: '100% ground beef chuck (80/20)', notes: 'Beef chuck makes excellent kofta; add 1 tbsp olive oil for richness.' },
      { original: 'Lebanese Seven Spice', substitute: 'Equal parts allspice, cinnamon, black pepper, and coriander', notes: 'Recreates the warm aromatic fragrance.' }
    ],
    safetyNotes: ['Ground meat must reach internal temperature of 72°C (160°F).', 'Beware of flare-ups from dripping fat over charcoal.'],
    servingGuide: {
      restingTime: 'Rest 2 minutes on warm flatbread.',
      temperature: 'Piping hot from the grill.',
      garnishing: 'Sumac-dusted onions, fresh parsley, and grilled hot peppers.',
      accompaniments: 'Hummus, garlic Toum, Fattoush salad, and warm pita bread.'
    }
  },

  // 13. MANAKISH (Authentic Lebanese Za'atar Man'ousheh)
  {
    id: 'manakish',
    name: 'Authentic Lebanese Manakish Za\'atar (Man\'ousheh Flatbread)',
    cuisine: 'Middle Eastern',
    region: 'Levant (Lebanon / Syria)',
    servings: 4,
    prepTime: 30,
    cookTime: 12,
    difficulty: 'Easy',
    overview: {
      summary: 'The iconic Lebanese breakfast ritual: freshly baked, pillowy-soft round flatbread dimpled with fingertips, generously spread with a fragrant paste of wild thyme, toasted sesame seeds, tart sumac, and rich extra virgin olive oil (Za\'atar). Baked at blistering heat until blistered, aromatic, and crispy on the bottom, then folded around fresh cucumbers, tomatoes, and fresh mint leaves.',
      appearance: 'A round, golden-baked flatbread crowned with an aromatic, deep olive-green za\'atar herb crust, dotted with golden toasted sesame seeds and bubbling with oil.',
      texture: 'Crispy bottom crust with an airy, chewy, cloud-soft interior, coated with the rustic herbaceous crunch of toasted sesame and wild thyme.',
      flavor: 'Herbaceous, earthy wild thyme, nutty toasted sesame, bright citrusy sumac tang, and rich peppery olive oil on warm yeasty bread.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Baking stone / Pizza steel or heavy baking sheet', purpose: 'For instant conductive heat to puff the flatbread in under 6 minutes.' },
      { name: 'Rolling pin', purpose: 'To roll dough into 22cm round disks.' }
    ],
    beforeYouStart: [
      { task: 'Preheat oven with baking stone to maximum temperature (250°C / 480°F) for 45 minutes.', durationMinutes: 45 },
      { task: 'Prepare yeast dough: 350g all-purpose flour, 210ml warm water, 1 tsp yeast, 1 tsp sugar, 1.5 tsp salt, 2 tbsp olive oil. Knead 8 mins, rest 1 hour.', durationMinutes: 60 },
      { task: 'Mix za\'atar topping: 1/2 cup authentic wild za\'atar blend with 1/2 cup extra virgin olive oil until a spreadable, liquid paste forms.', durationMinutes: 3 }
    ],
    ingredientPrepGuide: [
      { item: 'Za\'atar Quality', technique: 'Authentic Lebanese za\'atar is made with wild Mediterranean thyme (Origanum syriacum), roasted white sesame seeds, sumac, and sea salt. Avoid commercial blends loaded with wheat flour or sawdust filler.' },
      { item: 'Fingertip Dimpling', technique: 'Dimple the rolled dough thoroughly with your fingertips before applying the za\'atar paste. The dimples trap pools of fragrant olive oil and prevent the bread from puffing into an empty pita balloon.' }
    ],
    essentialIngredients: [
      { name: 'All-purpose flour', prep: 'unbleached', amount: '350g', metric: '350g', imperial: '12 oz', common: '2.5 cups' },
      { name: 'Warm water & Olive oil', prep: 'dough hydration', amount: '210ml water + 2 tbsp oil', metric: '240ml', imperial: '8.1 fl oz', common: '1 cup' },
      { name: 'Instant dry yeast & Sugar', prep: 'yeast activation', amount: '1 tsp yeast + 1 tsp sugar', metric: '8g', imperial: '0.3 oz', common: 'mixed' },
      { name: 'Authentic wild Lebanese Za\'atar blend', prep: 'thyme, sumac, sesame, salt', amount: '1/2 cup', metric: '60g', imperial: '2.1 oz', common: '1/2 cup' },
      { name: 'Extra virgin olive oil (Cold-pressed)', prep: 'mixed with za\'atar', amount: '1/2 cup', metric: '120ml', imperial: '4 fl oz', common: '1/2 cup' },
      { name: 'Fine sea salt', prep: 'in dough', amount: '1.5 tsp', metric: '9g', imperial: '0.3 oz', common: '1.5 tsp' }
    ],
    optionalIngredients: [
      { name: 'Akkawi or Halloumi cheese', prep: 'grated (for half-cheese half-za\'atar "Cocktail" Manousheh)', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '1 cup' },
      { name: 'Fresh Persian cucumber, tomatoes & mint', prep: 'sliced for wrapping inside', amount: '1 cucumber + 1 tomato + fresh mint', metric: '150g', imperial: '5.3 oz', common: 'garnish' }
    ],
    steps: [
      {
        step: 1,
        title: 'MIX THE ZA\'ATAR & OLIVE OIL PASTE',
        whatYouNeed: ['1/2 cup za\'atar blend', '1/2 cup extra virgin olive oil', 'Small bowl'],
        description: 'In a small bowl, combine the za\'atar herb blend and extra virgin olive oil. Stir thoroughly with a spoon until it forms a loose, glossy, easily spreadable dark green paste. Let it sit for 10 minutes so the dried wild thyme and sumac bloom in the oil.',
        howToDoIt: 'The ratio of za\'atar to olive oil should be roughly 1:1. It should be liquid enough to spread smoothly with the back of a spoon without clumping.',
        heat: 'No Heat',
        duration: 3,
        visualCues: 'A shimmering, deep forest-green oil paste loaded with suspended white sesame seeds.',
        smell: 'Intensely herbal wild thyme, tart sumac, and fruity olive oil.',
        textureCheck: 'Smooth, runny paste.',
        whatShouldThisLookLike: 'Glossy dark green za\'atar spread.',
        tip: 'Always use your best fruity extra virgin olive oil — the olive oil is cooked with the herbs and defines the flavor.',
        commonMistake: 'Making the mixture too dry and pasty, which will dry out and burn in the hot oven.',
        moveOnWhen: 'Za\'atar paste is mixed and glossy.',
        quickInstructions: 'Stir 1/2 cup za\'atar with 1/2 cup extra virgin olive oil until a smooth, runny, dark green paste forms.'
      },
      {
        step: 2,
        title: 'ROLL DOUGH & DIMPLE WITH FINGERTIPS',
        whatYouNeed: ['Rested dough balls (4 portions)', 'Rolling pin', 'Parchment paper'],
        description: 'Divide rested dough into 4 equal balls. On a lightly floured surface, roll each ball with a rolling pin into a round 22cm (8.5-inch) disk (about 4mm thick). Transfer onto a parchment sheet. Using the tips of your fingers, press firmly all over the surface of the dough to create dozens of small dimples and indentations.',
        howToDoIt: 'Dimpling breaks surface tension so the flatbread stays flat and captures flavorful pools of za\'atar oil in every crater.',
        heat: 'No Heat',
        duration: 8,
        visualCues: 'A round flatbread disk covered in dozens of crater dimples.',
        textureCheck: 'Soft, stretchy, indented yeast dough.',
        whatShouldThisLookLike: 'Dimpled flatbread rounds ready for topping.',
        tip: 'Leave a 1cm clean border around the outer rim to allow the crust to puff into a golden frame.',
        commonMistake: 'Skipping the dimpling, causing the dough to inflate like a balloon and dumping the za\'atar oil.',
        moveOnWhen: 'Dough rounds are rolled, placed on parchment, and dimpled.',
        quickInstructions: 'Roll dough into 22cm disks, place on parchment, and firmly dimple all over with fingertips.'
      },
      {
        step: 3,
        title: 'SPREAD ZA\'ATAR & BAKE ON PREHEATED STONE',
        whatYouNeed: ['Dimpled dough rounds', 'Za\'atar oil paste', 'Preheated oven & pizza stone (250°C / 480°F)'],
        description: 'Spoon 2 to 3 heaped tablespoons of the za\'atar paste onto the center of each dimpled dough round. Spread evenly with the back of a spoon to within 1cm of the edge. Slide the parchment with the manakish directly onto the blistering-hot pizza stone in the oven. Bake for 5 to 7 minutes until the dough puffs, the outer border turns golden-brown and crispy, and the za\'atar oil bubbles gently.',
        howToDoIt: 'High heat bakes the dough quickly so it stays soft and chewy inside while developing a crisp bottom.',
        heat: 'Oven at 250°C / 480°F',
        duration: 7,
        visualCues: 'Outer crust puffs and turns golden-brown; za\'atar bubbles with tiny aromatic green oil craters.',
        smell: 'Incredible bakery aroma of toasted sesame, wild thyme, and warm bread filling your kitchen.',
        textureCheck: 'Crisp bottom, pillowy airy edges, and glossy herbed center.',
        whatShouldThisLookLike: 'Puffed, blistered, gorgeous green-and-gold flatbread.',
        tip: 'Do not overbake — if left in too long, the za\'atar herbs will scorch and turn bitter.',
        commonMistake: 'Baking at low temperature (180°C), which dries the dough out into a tough hard cracker.',
        moveOnWhen: 'Crust is golden, puffed, and bottom is crispy.',
        quickInstructions: 'Spread za\'atar paste over dimpled dough, slide onto hot stone at 250°C for 5-7 mins until puffed and golden.'
      },
      {
        step: 4,
        title: 'FOLD WITH FRESH VEGETABLES & ENJOY',
        whatYouNeed: ['Hot baked Manakish', 'Sliced cucumbers & tomatoes', 'Fresh mint leaves', 'Black olives'],
        description: 'Remove hot manakish from the oven. Let cool for 1 minute. Enjoy flat, or do as the Lebanese do: lay crisp cucumber slices, tomato wedges, and fresh mint leaves down the center, fold the flatbread in half like a taco, and eat with your hands alongside hot tea.',
        howToDoIt: 'The hot, savory, herbaceous bread paired with cool, crunchy cucumbers and mint is the iconic Mediterranean contrast.',
        heat: 'No Heat',
        duration: 2,
        visualCues: 'A golden folded flatbread bursting with fresh green mint and red tomatoes.',
        smell: 'Toasted wild herbs and cool fresh mint.',
        textureCheck: 'Pliable, chewy warm bread with a crisp bottom and crunchy cold vegetables.',
        whatShouldThisLookLike: 'The ultimate Lebanese breakfast sandwich.',
        tip: 'Pair with fresh Labneh (strained yogurt cheese) on the side for dipping.',
        commonMistake: 'Letting it sit flat on a plate to get cold and hard.',
        moveOnWhen: 'Folded and enjoyed warm.',
        quickInstructions: 'Rest 1 min, add fresh cucumber, tomato, and mint down the center, fold in half, and enjoy warm.'
      }
    ],
    commonMistakes: [
      { mistake: 'Baking too long', remedy: 'Bake for only 5-7 minutes at high heat. Overbaking burns the delicate thyme and drys out the crumb.' },
      { mistake: 'Using low quality za\'atar', remedy: 'Ensure your za\'atar smells strongly of wild thyme and sumac with visible sesame seeds.' }
    ],
    troubleshooting: [
      {
        problem: 'Flatbread inflated into a giant balloon',
        whatHappened: 'Steam separated the top and bottom dough layers.',
        whyItHappened: 'The dough was not dimpled deeply enough with fingertips.',
        whatToDoNow: 'Carefully poke with a fork to deflate — it will still taste wonderful.',
        howToPrevent: 'Dimple firmly with your fingertips all the way to the counter surface before baking.'
      }
    ],
    substitutions: [
      { original: 'Za\'atar blend', substitute: 'Dried oregano, thyme, toasted sesame seeds, sumac, and salt', notes: 'Homemade quick za\'atar blend.' },
      { original: 'Pizza stone', substitute: 'Inverted heavy metal baking sheet preheated in oven', notes: 'Transfers good conductive heat.' }
    ],
    safetyNotes: ['Oven is at 250°C — use heavy heat-resistant silicone oven mitts.'],
    servingGuide: {
      restingTime: 'Rest 1-2 minutes before folding.',
      temperature: 'Warm from the oven.',
      garnishing: 'Extra virgin olive oil and fresh mint leaves.',
      accompaniments: 'Fresh Labneh, kalamata olives, sliced cucumbers, tomatoes, and hot black tea with mint.'
    }
  },

  // 14. MEZZE (Middle Eastern Feast: Smoky Mutabbal, Labneh & Muhammara)
  {
    id: 'mezze',
    name: 'Authentic Middle Eastern Mezze Feast (Smoky Mutabbal, Labneh & Muhammara)',
    cuisine: 'Middle Eastern',
    region: 'Levant (Syria / Lebanon)',
    servings: 6,
    prepTime: 30,
    cookTime: 25,
    difficulty: 'Medium',
    overview: {
      summary: 'The legendary grand feast of the Levant: three classic dip masterpieces served side by side. Featuring Smoky Mutabbal / Baba Ganoush (charcoal-blistered eggplants hand-chopped with tahini, garlic, and lemon), Silky Labneh (strained yogurt crowned with za\'atar and pooled olive oil), and vibrant Aleppo Muhammara (roasted red peppers pureed with toasted walnuts, pomegranate molasses, Aleppo pepper, and breadcrumbs).',
      appearance: 'A magnificent mosaic of three colors: creamy pale Mutabbal with pomegranate seeds, pristine snow-white Labneh with wild green za\'atar swirls, and glowing rust-orange Muhammara topped with crushed walnuts and dark syrup.',
      texture: 'Smoky silky eggplant dip, thick velvety strained cream cheese, and chunky crunchy sweet-spicy walnut pepper spread.',
      flavor: 'Deep woodsmoke and nutty sesame, cooling lactic tartness and olive oil, and sweet caramelized red peppers with tangy pomegranate heat.',
      restingTimeMinutes: 10
    },
    equipment: [
      { name: 'Open flame burner or charcoal grill', purpose: 'Essential to char eggplant skin completely black for authentic woodsmoke flavor.' },
      { name: 'Food processor', purpose: 'To blend walnuts and roasted peppers into thick textured Muhammara.' },
      { name: 'Fine mesh colander & cheesecloth', purpose: 'For straining eggplant juices.' }
    ],
    beforeYouStart: [
      { task: 'Char 2 large eggplants directly over gas flames or hot coals until skins are completely black and collapsed.', durationMinutes: 15 },
      { task: 'Toast 150g raw walnut halves in dry skillet for 4 minutes until fragrant, cool completely.', durationMinutes: 5 },
      { task: 'Obtain 250g thick Labneh (or strain Greek yogurt through cheesecloth for 8 hours).', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'The Eggplant Charring Secret', technique: 'The eggplant skin must be completely charred to black ash over an open flame! This scorches the flesh directly beneath, producing the signature woodsmoke flavor of authentic Mutabbal.' },
      { item: 'Draining Eggplant Flesh', technique: 'After peeling charred skin, drain the soft pulp in a colander for 15 minutes and press gently. Discard the bitter brown liquid so your Mutabbal stays pale, creamy, and smoke-sweet.' }
    ],
    essentialIngredients: [
      { name: 'Large globe eggplants', prep: 'charred black over flame and peeled', amount: '2 large', metric: '700g', imperial: '1.5 lbs', common: '2 eggplants' },
      { name: 'Roasted sweet red bell peppers', prep: 'charred, peeled, and seeded', amount: '2 large', metric: '300g', imperial: '10.5 oz', common: '2 peppers' },
      { name: 'Raw walnut halves', prep: 'toasted and chopped', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '1.5 cups' },
      { name: 'Thick Middle Eastern Labneh', prep: 'firm strained yogurt cheese', amount: '250g', metric: '250g', imperial: '8.8 oz', common: '1 cup' },
      { name: 'High-grade tahini paste', prep: 'stirred smooth', amount: '4 tbsp', metric: '60g', imperial: '2.1 oz', common: '1/4 cup' },
      { name: 'Pomegranate molasses (Dibs Remman)', prep: 'tart-sweet syrup for Muhammara', amount: '3 tbsp', metric: '45ml', imperial: '1.5 fl oz', common: '3 tbsp' },
      { name: 'Aleppo pepper flakes (Pul Biber)', prep: 'mild sun-dried flakes', amount: '1.5 tbsp', metric: '12g', imperial: '0.4 oz', common: '1.5 tbsp' },
      { name: 'Panko or fresh breadcrumbs', prep: 'thickener for Muhammara', amount: '1/2 cup', metric: '40g', imperial: '1.4 oz', common: '1/2 cup' },
      { name: 'Garlic cloves', prep: 'grated to paste', amount: '4 cloves total', metric: '12g', imperial: '0.4 oz', common: '4 cloves' },
      { name: 'Fresh lemon juice', prep: 'strained', amount: '4 tbsp', metric: '60ml', imperial: '2 fl oz', common: '1/4 cup' },
      { name: 'Extra virgin olive oil', prep: 'for drizzling and blending', amount: '8 tbsp', metric: '120ml', imperial: '4 fl oz', common: '1/2 cup' },
      { name: 'Wild Za\'atar herb blend', prep: 'for crowning Labneh', amount: '1 tbsp', metric: '8g', imperial: '0.3 oz', common: '1 tbsp' },
      { name: 'Fresh pomegranate arils & Salt', prep: 'garnish & seasoning', amount: '1/4 cup arils + 1.5 tsp salt', metric: '40g', imperial: '1.4 oz', common: 'mixed' },
      { name: 'Warm pita bread', prep: 'for scooping', amount: '4 pitas', metric: '4 pitas', imperial: '4 pitas', common: '4 breads' }
    ],
    optionalIngredients: [
      { name: 'Fresh flat-leaf parsley', prep: 'finely minced for garnish', amount: '2 tbsp', metric: '5g', imperial: '0.18 oz', common: '2 tbsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'CHAR EGGPLANTS & MAKE SMOKY MUTABBAL',
        whatYouNeed: ['2 eggplants', '4 tbsp tahini', '2 tbsp lemon juice', '1 clove minced garlic', '3/4 tsp salt', '2 tbsp olive oil'],
        description: 'Place whole eggplants directly onto the open gas burner grates over medium-high flames (or on a hot charcoal grill). Char for 12 to 15 minutes, turning with tongs, until the skins are completely black, flaky ash and the eggplants collapse completely soft. Transfer to a bowl, cover with foil for 10 minutes to steam. Peel off charred skins under cold water. Drain pulp in a colander for 15 minutes, pressing lightly. Mash drained pulp with a fork, then stir vigorously with tahini, lemon juice, minced garlic, olive oil, and salt until creamy yet textured.',
        howToDoIt: 'Mash with a fork rather than a blender! Authentic Mutabbal has luscious stringy eggplant strands; blending turns it into a gluey gray emulsion.',
        heat: 'Open Flame / Charcoal',
        duration: 25,
        visualCues: 'Eggplant skin blisters to black ash; pulp inside turns pale, smoky, and meltingly soft.',
        smell: 'Intense woodsmoke, roasted eggplant, and nutty sesame tahini.',
        textureCheck: 'Creamy, silky dip with tender shredded eggplant strands.',
        whatShouldThisLookLike: 'Pale ivory-gray smoky dip ready for the bowl.',
        tip: 'Discard any large bits of black burnt skin, but leave a few tiny specks for rustic smoky charm.',
        commonMistake: 'Under-charring the eggplants, leaving hard unroasted cores with no smoky flavor.',
        moveOnWhen: 'Mutabbal is mashed, seasoned, and set aside.',
        quickInstructions: 'Char eggplants black over open flame, steam, peel, drain 15 mins, mash with fork; stir in tahini, lemon, garlic, and salt.'
      },
      {
        step: 2,
        title: 'PULSE THE ALEPPO MUHAMMARA (PEPPER & WALNUT DIP)',
        whatYouNeed: ['Roasted red peppers', 'Toasted walnuts', 'Pomegranate molasses', 'Aleppo pepper', 'Breadcrumbs', '1 clove garlic', 'Olive oil', 'Salt'],
        description: 'In the food processor, combine 120g of the toasted walnuts, breadcrumbs, garlic, Aleppo pepper flakes, 1/2 tsp cumin, and salt. Pulse into a coarse meal. Add the roasted peeled red peppers, 3 tbsp pomegranate molasses, and 3 tbsp olive oil. Pulse in short 5-second bursts until it forms a thick, chunky, textured rust-red paste. Do not over-process — it should have a pleasing coarse nutty crunch.',
        howToDoIt: 'The combination of sweet roasted peppers, crunchy toasted walnuts, and acidic pomegranate molasses creates an explosive balance of sweet, tart, and spicy.',
        heat: 'No Heat',
        duration: 6,
        visualCues: 'A glowing, vibrant rust-orange-red spread flecked with coarse walnut bits.',
        smell: 'Sweet roasted peppers, toasted walnuts, and tart pomegranate molasses.',
        textureCheck: 'Chunky, textured, spreadable dip with crunchy walnut grains.',
        whatShouldThisLookLike: 'Vibrant Syrian walnut-pepper paste.',
        tip: 'Reserve a handful of whole toasted walnuts and pomegranate seeds to garnish the top.',
        commonMistake: 'Pureeing into baby food soup; Muhammara must be thick, textured, and chunky.',
        moveOnWhen: 'Muhammara is pulsed to coarse texture and tasted for sweet-tart balance.',
        quickInstructions: 'Pulse walnuts, breadcrumbs, and spices into coarse meal; add roasted peppers, molasses, and oil; pulse to chunky paste.'
      },
      {
        step: 3,
        title: 'SWOOSH THE SILKY LABNEH',
        whatYouNeed: ['Thick Labneh', 'Wild Za\'atar blend', 'Extra virgin olive oil', 'Pinch of sea salt', 'Serving bowl'],
        description: 'Spoon the thick Labneh into a shallow bowl. Using the back of a spoon, press firmly and circle outward to create wide, satiny ripples and a deep central pool. Sprinkle with a generous ribbon of wild za\'atar herb blend and a pinch of flaky sea salt. Pour 2 tablespoons of fruity extra virgin olive oil into the swirls.',
        howToDoIt: 'Room temperature Labneh swooshes effortlessly into velvety sculptural waves.',
        heat: 'No Heat',
        duration: 3,
        visualCues: 'Pristine, gleaming white yogurt waves holding pools of green olive oil and za\'atar.',
        smell: 'Tangy fresh dairy, thyme, and peppery olive oil.',
        textureCheck: 'Ultra-dense, velvety, and spreadable like cream cheese.',
        whatShouldThisLookLike: 'A stunning white-and-green mezze bowl.',
        tip: 'If your Greek yogurt is too thin, hang it in cheesecloth over a bowl in the fridge overnight to create real thick Labneh.',
        commonMistake: 'Serving ice-cold directly from the fridge, which dulls the delicate lactic creaminess.',
        moveOnWhen: 'Labneh is swooshed and dressed with oil and herbs.',
        quickInstructions: 'Spread Labneh into ripples in a bowl, drizzle with olive oil, sprinkle with za\'atar and flaky salt.'
      },
      {
        step: 4,
        title: 'THE GRAND MEZZE PRESENTATION',
        whatYouNeed: ['Mutabbal bowl', 'Muhammara bowl', 'Labneh bowl', 'Pomegranate seeds', 'Toasted walnuts', 'Warm pita bread'],
        description: 'Arrange the three colorful bowls in a triangle or line on a large serving tray. Garnish the Mutabbal with pomegranate seeds, olive oil, and mint. Crown the Muhammara with chopped toasted walnuts and a drizzle of pomegranate molasses. Serve alongside baskets of steaming-hot puffed pita bread and olives.',
        howToDoIt: 'The quintessential Middle Eastern dining experience revolves around communal dipping, tearing bread, and alternating between smoky, tart, and creamy flavors.',
        heat: 'No Heat',
        duration: 3,
        visualCues: 'A dazzling trio: ivory-gray Mutabbal with ruby arils, white Labneh with green za\'atar, and glowing rust-red Muhammara with walnuts.',
        smell: 'Smoky eggplant, toasted nuts, sweet peppers, and fresh baked pita.',
        textureCheck: 'Silky, chunky, and creamy contrasting dips.',
        whatShouldThisLookLike: 'An opulent Damascus or Beirut mezze spread.',
        tip: 'Warm pita bread in a hot oven for 2 minutes before serving so it puffs with hot steam.',
        commonMistake: 'Using dry store-bought tortilla chips instead of soft warm pita bread.',
        moveOnWhen: 'Mezze table is assembled and served.',
        quickInstructions: 'Arrange Mutabbal, Muhammara, and Labneh on platter, garnish with pomegranate seeds and walnuts, serve with hot pita.'
      }
    ],
    commonMistakes: [
      { mistake: 'Baking eggplants in oven instead of open flame', remedy: 'Oven baking gives zero woodsmoke. You must char the skin black over an open flame burner or coals.' },
      { mistake: 'Over-processing Muhammara', remedy: 'Pulse in short bursts so walnuts stay crunchy rather than turning into peanut butter.' }
    ],
    troubleshooting: [
      {
        problem: 'Mutabbal tastes bitter',
        whatHappened: 'Bitter seed juices remained in the pulp.',
        whyItHappened: 'The eggplant pulp was not drained sufficiently.',
        whatToDoNow: 'Whisk in 1 extra tablespoon of tahini and 1 tablespoon of olive oil to coat and balance bitterness.',
        howToPrevent: 'Always drain charred eggplant flesh in a colander for 15 minutes before mixing.'
      }
    ],
    substitutions: [
      { original: 'Aleppo pepper flakes', substitute: 'Sweet Hungarian paprika mixed with pinch of cayenne', notes: 'Recreates the fruity mild warmth.' },
      { original: 'Labneh', substitute: 'Strained whole-milk Greek yogurt (10% fat)', notes: 'Provides identical rich tartness.' }
    ],
    safetyNotes: ['Turn exhaust fan on high when charring eggplants over gas burners to vent smoke.'],
    servingGuide: {
      restingTime: 'Rest 10 minutes at room temperature before serving.',
      temperature: 'Cool room temperature.',
      garnishing: 'Extra virgin olive oil, toasted walnuts, pomegranate arils, and wild za\'atar.',
      accompaniments: 'Warm puffed pita bread, pickled turnips, green olives, and fresh mint.'
    }
  }
];
