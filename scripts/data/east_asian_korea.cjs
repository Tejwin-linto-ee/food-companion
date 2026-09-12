// Korean culinary recipes (12 dishes)
module.exports = [
  // 1. KOREAN BBQ (Samgyeopsal-gui)
  {
    id: 'korean-bbq',
    name: 'Authentic Korean Pork Belly BBQ (Samgyeopsal-gui)',
    cuisine: 'Korean',
    region: 'South Korea (Seoul / National)',
    servings: 4,
    prepTime: 20,
    cookTime: 15,
    difficulty: 'Easy',
    overview: {
      summary: 'The reigning crown jewel of Korean social dining: thick-cut, unmarinated pork belly strips (Samgyeopsal) grilled sizzling hot tableside with whole garlic cloves, aged kimchi, and king oyster mushrooms, snipped with kitchen shears into golden crispy bites, dipped in toasted sesame oil with roasted salt, and wrapped in fresh perilla leaves (Kkaennip) with savory fermented ssamjang paste and scallion salad (Pa-muchim).',
      appearance: 'A sizzling tabletop cast-iron grill laden with golden-crisped pork belly slices, caramelized garlic cloves, charred kimchi ribbons, and mushrooms, surrounded by vibrant banchan side dishes and a basket of fresh green leaves.',
      texture: 'Contrasting textures: shatteringly crisp golden pork skin and fat yielding to juicy succulent meat, wrapped in crunchy fresh lettuce and velvety perilla leaves.',
      flavor: 'Rich, savory rendered pork richness balanced by nutty toasted sesame oil, pungent garlic, spicy-tangy fermented kimchi, and savory fermented soybean paste.',
      restingTimeMinutes: 1
    },
    equipment: [
      { name: 'Slanted Korean BBQ tabletop grill pan (or cast-iron griddle)', purpose: 'Slanted design channels excess rendered pork fat away into a drip cup while searing meat.' },
      { name: 'Korean kitchen cooking shears and metal tongs', purpose: 'For snipping sizzling strips into bite-sized morsels directly on the grill.' },
      { name: 'Portable butane or induction burner', purpose: 'Powers the grill at the center of the dining table.' }
    ],
    beforeYouStart: [
      { task: 'Slice 600g fresh pork belly into 1cm (0.4 inch) thick strips; pat dry with paper towels.', durationMinutes: 5 },
      { task: 'Whisk Ssamjang dipping sauce: 3 tbsp doenjang (fermented soybean paste), 1 tbsp gochujang (chili paste), 1 tbsp minced garlic, 1 tbsp honey, and 1 tbsp sesame oil.', durationMinutes: 3 },
      { task: 'Prepare Pa-muchim (scallion salad): shred 6 scallions into thin curly threads; toss with 1 tbsp soy sauce, 1 tsp gochugaru, 1 tsp sesame oil, and 1 tsp sugar.', durationMinutes: 7 },
      { task: 'Wash and shake dry a basket of red leaf lettuce and fresh perilla leaves (kkaennip).', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'Pork Belly Selection', technique: 'Choose fresh pork belly with clear alternating layers of meat and fat (Samgyeopsal translates literally to "three-layered flesh"). Pat the meat completely dry before grilling to ensure rapid Maillard browning instead of steaming.' },
      { item: 'Kimchi Grilling', technique: 'Always place aged cabbage kimchi on the lower downhill slope of the slanted grill. As the pork belly renders at the top, the pork fat washes down over the kimchi, caramelizing it into an intensely savory, sweet delicacy.' }
    ],
    essentialIngredients: [
      { name: 'Fresh pork belly (unmarinated)', prep: 'sliced 1cm thick, patted dry', amount: '600g', metric: '600g', imperial: '1.3 lbs', common: '600g' },
      { name: 'Aged Napa cabbage kimchi (Sin-kimchi)', prep: 'thick strips for grilling', amount: '200g', metric: '200g', imperial: '7 oz', common: '1 cup' },
      { name: 'Fresh garlic cloves', prep: 'peeled and whole (for grilling in pork fat)', amount: '15 cloves', metric: '60g', imperial: '2.1 oz', common: '1 head' },
      { name: 'Green Korean chili peppers (Cheongyang or mild)', prep: 'sliced diagonally', amount: '4 peppers', metric: '40g', imperial: '1.4 oz', common: '4 peppers' },
      { name: 'King oyster mushrooms', prep: 'sliced lengthwise into thick planks', amount: '2 mushrooms', metric: '150g', imperial: '5.3 oz', common: '2 mushrooms' },
      { name: 'Korean red leaf lettuce & Perilla leaves (Kkaennip)', prep: 'washed & dried for wraps', amount: '20 leaves', metric: '200g', imperial: '7 oz', common: '1 basket' },
      { name: 'Doenjang (Korean fermented soybean paste)', prep: 'for ssamjang', amount: '3 tbsp', metric: '50g', imperial: '1.8 oz', common: '3 tbsp' },
      { name: 'Gochujang (Korean red chili paste)', prep: 'for ssamjang', amount: '1 tbsp', metric: '20g', imperial: '0.7 oz', common: '1 tbsp' },
      { name: 'Toasted sesame oil (Chir-gireum)', prep: 'divided for dipping oil & salad', amount: '4 tbsp', metric: '60ml', imperial: '2 fl oz', common: '4 tbsp' },
      { name: 'Coarse sea salt & black pepper (Gireumjang)', prep: 'mixed into sesame oil for dipping', amount: '1 tsp', metric: '5g', imperial: '0.18 oz', common: '1 tsp' },
      { name: 'Scallions (for Pa-muchim salad)', prep: 'shredded into thin ribbons', amount: '6 stalks', metric: '80g', imperial: '2.8 oz', common: '1 bunch' },
      { name: 'Steamed short-grain Korean white rice (Bap)', prep: 'piping hot in individual bowls', amount: '4 bowls', metric: '600g', imperial: '21 oz', common: '4 bowls' }
    ],
    steps: [
      {
        step: 1,
        title: 'PREHEAT THE TABLETOP GRILL TO ROARING HEAT',
        whatYouNeed: ['Tabletop grill pan', 'Butane burner', 'Drip cup underneath fat spout'],
        description: 'Set the slanted grill over the burner at medium-high heat for 4 minutes until scorching hot (at least 200°C / 400°F). Ensure the fat drainage spout is aligned over the drip cup. Test heat: flick a drop of water onto the iron — it should vaporize with an instant pop.',
        howToDoIt: 'High initial heat sears the surface instantly, preventing meat juices from escaping while starting fat rendering.',
        heat: 'Medium-High Heat (200°C / 400°F)',
        duration: 4,
        visualCues: 'Faint heat shimmers rise from the cast iron surface; pan is bone-dry and smoking lightly.',
        smell: 'Clean hot cast iron.',
        textureCheck: 'Smoking hot.',
        whatShouldThisLookLike: 'Clean, scorching hot slanted grill ready for meat.',
        tip: 'Rub a small piece of pork fat across the surface before adding meat to season the metal.',
        commonMistake: 'Laying pork on a lukewarm pan, which boils the pork in released water instead of searing a crust.',
        moveOnWhen: 'Pan is smoking hot.',
        quickInstructions: 'Preheat slanted tabletop grill over medium-high heat for 4 mins until scorching hot.'
      },
      {
        step: 2,
        title: 'SEAR PORK STRIPS & ARRANGE ACCOMPANIMENTS',
        whatYouNeed: ['Pork belly strips', 'Whole garlic cloves', 'Sliced mushrooms', 'Kimchi strips'],
        description: 'Lay pork belly strips across the top half of the grill in a single layer. Lay whole garlic cloves and sliced mushrooms around the edges. Lay strips of kimchi on the lower downhill slope. Sear pork belly undisturbed for 3 to 4 minutes until the bottom surface turns deep golden-brown.',
        howToDoIt: 'Placing kimchi at the bottom allows rendered pork fat to bathe and fry the kimchi as it trickles downhill.',
        heat: 'Medium-High Heat',
        duration: 4,
        visualCues: 'Pork sizzles violently; bottom edge turns deep golden-amber; rendered fat flows down the ridges over the kimchi.',
        hear: 'Intense, rhythmic crackling sizzle.',
        smell: 'Incredible aroma of rendering pork fat, browning garlic, and sizzling kimchi.',
        textureCheck: 'Bottom crust is firm and caramelized.',
        whatShouldThisLookLike: 'Pork sizzling at the top, fat flowing down to caramelize garlic and kimchi below.',
        tip: 'Flip the pork only ONCE before cutting — resist the urge to constantly flip back and forth.',
        commonMistake: 'Crowding kimchi at the top of the grill, which blocks fat from draining and burns the chili paste.',
        moveOnWhen: 'Underside of pork is deep golden-brown.',
        quickInstructions: 'Lay pork at top, garlic and mushrooms on sides, kimchi at bottom; sear 3-4 mins.'
      },
      {
        step: 3,
        title: 'THE FLIP & SNIP WITH KITCHEN SHEARS',
        whatYouNeed: ['Tongs', 'Kitchen shears'],
        description: 'Using tongs, flip the pork belly strips. Sear second side for 2 minutes. Now take your kitchen shears in one hand and tongs in the other. Snip each strip crosswise into bite-sized 2cm (0.8 inch) pieces directly on the grill. Turn garlic cloves and flip kimchi.',
        howToDoIt: 'Kitchen shears cut hot meats cleanly and quickly without dulling against hot metal grill surfaces.',
        heat: 'Medium Heat',
        duration: 3,
        visualCues: 'Bite-sized pieces sizzle independently; garlic cloves turn golden and soft; kimchi caramelizes with darkened edges.',
        hear: 'Frenzied bubbling sizzle of individual pieces.',
        smell: 'Toasted garlic, sweet pork, and roasted cabbage.',
        textureCheck: 'Exterior of each piece develops a crisp crust while center stays juicy.',
        whatShouldThisLookLike: 'Grill covered in golden, bite-sized pork morsels and roasted aromatics.',
        tip: 'Snip into uniform bite-sized pieces so they fit comfortably inside lettuce wraps.',
        commonMistake: 'Cutting pieces too tiny, causing them to dry out into hard bacon bits.',
        moveOnWhen: 'Pork is snipped and all cut sides are browned.',
        quickInstructions: 'Flip pork strips, sear 2 mins, snip with kitchen shears into 2cm pieces, flip garlic and kimchi.'
      },
      {
        step: 4,
        title: 'FINAL CRISP & REST ON GRILL EDGE',
        whatYouNeed: ['Tongs'],
        description: 'Toss the pork pieces over medium heat for 2 more minutes, rolling them so all cut sides develop a crackling golden crust. Push fully cooked pork pieces, roasted garlic, and caramelized kimchi to the cooler outer edges of the grill pan to stay warm without burning.',
        howToDoIt: 'Moving meat to the outer perimeter keeps it sizzling and hot throughout the communal meal without overcooking.',
        heat: 'Low Heat (Holding temperature)',
        duration: 2,
        visualCues: 'Deep golden-brown, glistening crispy pork pieces with translucent rendered fat.',
        textureCheck: 'Shatteringly crisp exterior, tender and juicy interior.',
        whatShouldThisLookLike: 'Crispy pork morsels resting warm on the perimeter of the grill.',
        tip: 'Roasted whole garlic cloves should feel soft as butter when gently squeezed with tongs.',
        commonMistake: 'Leaving meat in the center high-heat zone until it incinerates into dry jerky.',
        moveOnWhen: 'Meat is crispy, golden, and moved to perimeter.',
        quickInstructions: 'Crisp all cut sides for 2 mins, push meat, garlic, and kimchi to grill edges.'
      },
      {
        step: 5,
        title: 'BUILD THE PERFECT SSAM (LETTUCE WRAP)',
        whatYouNeed: ['Red leaf lettuce', 'Perilla leaf', 'Crispy pork morsel', 'Gireumjang (sesame oil salt dip)', 'Ssamjang paste', 'Roasted garlic', 'Kimchi', 'Pa-muchim'],
        description: 'Hold a lettuce leaf flat in your palm. Lay a perilla leaf on top. Dip a piece of hot pork into the sesame oil and salt (Gireumjang), then place it in the center. Add a dab of savory Ssamjang paste, 1 clove of roasted garlic, a slice of grilled kimchi, and a pinch of scallion salad (Pa-muchim). Fold the leaf tightly into a neat parcel and pop the entire wrap into your mouth in one bite!',
        howToDoIt: 'Eating the wrap in one bite (the traditional Korean way) allows all contrasting temperatures, textures, and flavors to burst together on the palate.',
        heat: 'Off Heat (Eating stage)',
        duration: 1,
        visualCues: 'Tightly packed, emerald-green parcel packed with vibrant multi-colored fillings.',
        smell: 'Herbal anise notes from perilla, nutty sesame, and roasted pork.',
        textureCheck: 'Crisp lettuce snap, juicy hot pork crunch, soft garlic, and refreshing scallions.',
        whatShouldThisLookLike: 'The ultimate Korean Ssam wrap.',
        tip: 'Never bite a Ssam in half! Biting in half causes juices to spill down your chin; make wraps small enough to eat whole.',
        commonMistake: 'Overfilling the wrap so it bursts open and cannot fit into the mouth.',
        moveOnWhen: 'Savoring the bite!',
        quickInstructions: 'Layer lettuce and perilla, add dipped pork, ssamjang, roasted garlic, kimchi, and scallion; eat in one bite.'
      }
    ],
    commonMistakes: [
      { mistake: 'Pork was pale, limp, and rubbery.', remedy: 'Grill was not hot enough or was overcrowded with wet meat. Preheat pan until smoking hot and pat pork dry.' },
      { mistake: 'Kimchi burned black into bitter ash.', remedy: 'Kimchi was placed on the hottest central zone. Keep kimchi on the lower downhill edge where rendered fat keeps it moist.' }
    ],
    troubleshooting: [
      {
        problem: 'Heavy smoke filling the dining room',
        whatHappened: 'Rendered fat is pooling on the grill instead of draining.',
        whyItHappened: 'Grill pan is not tilted or drainage hole is clogged.',
        whatToDoNow: 'Use a chopstick to clear the drainage hole and prop a folded towel under the back leg of the burner to increase the slant.',
        howToPrevent: 'Ensure grill is properly angled toward the drip cup before starting.'
      }
    ],
    substitutions: [
      { original: 'Pork belly (Samgyeopsal)', substitute: 'Pork neck/collar (Moksal) or thinly shaved beef brisket (Chadolbaegi)', notes: 'Moksal has richer marbling and less fat; Chadolbaegi cooks in 5 seconds.' },
      { original: 'Perilla leaves (Kkaennip)', substitute: 'Fresh mint leaves mixed with sweet basil', notes: 'Mimics the herbal, slightly licorice-anise brightness of perilla.' }
    ],
    safetyNotes: [
      'Pork must reach safe internal temperature of 71°C (160°F).'
    ],
    servingGuide: {
      restingTime: 'Eat continuously hot off the grill.',
      garnishing: 'Toasted sesame seeds on the ssamjang and scallion salad.',
      plating: 'Communal tabletop grill with banchan dishes, leafy greens, and dipping bowls surrounding.',
      temperature: 'Piping hot off the fire.',
      accompaniments: 'Chilled Korean soju, ice-cold lager (Cass or Terra), and bubbling Doenjang-jjigae (soybean paste stew).'
    }
  },

  // 2. BIBIMBAP (Dolsot Bibimbap - Sizzling Stone Bowl Rice)
  {
    id: 'bibimbap',
    name: 'Sizzling Stone Bowl Bibimbap (Dolsot Bibimbap)',
    cuisine: 'Korean',
    region: 'South Korea (Jeonju)',
    servings: 4,
    prepTime: 35,
    cookTime: 15,
    difficulty: 'Medium',
    overview: {
      summary: 'Jeonju\'s globally celebrated culinary mosaic: warm steamed short-grain rice served in a scorching hot granite stone bowl (Dolsot) coated in toasted sesame oil, topped with an artful rainbow wheel of individually seasoned namul vegetables (spinach, bean sprouts, carrots, shiitake mushrooms, zucchini), marinated beef bulgogi, and a raw egg yolk, mixed tableside with sweet-spicy gochujang sauce while the bottom rice crisps into a golden, crackling crust (Nurungji).',
      appearance: 'A sizzling, black stone bowl presenting an exquisite radial wheel of five colors (green spinach, orange carrot, brown shiitake, yellow soybean sprouts, white radish), crowned with marinated beef and a gleaming golden raw egg yolk.',
      texture: 'The ultimate textural symphony: shatteringly crisp toasted rice crust (nurungji) mingled with tender fluffy rice, crunchy vegetables, tender beef, and velvety molten egg.',
      flavor: 'Harmonious balance of nutty toasted sesame, sweet-spicy fermented chili paste, savory garlic-soy vegetables, and rich umami beef.',
      restingTimeMinutes: 1
    },
    equipment: [
      { name: 'Dolsot (Korean granite or earthenware stone bowl)', purpose: 'Retains scorching heat to roast the bottom rice into a crackling golden crust at the table.' },
      { name: 'Wooden trivet or base', purpose: 'Protects the dining table from the 200°C scorching stone bowl.' },
      { name: 'Heavy tongs or heatproof oven mitts', purpose: 'For transferring sizzling stone bowls safely from stove to table.' }
    ],
    beforeYouStart: [
      { task: 'Marinate 200g thinly sliced ribeye beef in 1 tbsp soy sauce, 1 tsp sugar, 1 tsp sesame oil, and 1 minced garlic clove for 15 minutes.', durationMinutes: 15 },
      { task: 'Blanch 200g soybean sprouts (3 mins) and 200g spinach (30s) separately; shock in cold water, squeeze bone-dry, and season each with sesame oil, garlic, and salt (Sukju-namul & Sigeumchi-namul).', durationMinutes: 15 },
      { task: 'Julienne 1 carrot, 1 zucchini, and slice 4 shiitake mushrooms; stir-fry each separately for 1-2 mins.', durationMinutes: 10 },
      { task: 'Whisk Bibimbap sauce: 3 tbsp gochujang, 1 tbsp honey, 1 tbsp sesame oil, 1 tbsp water, and 1 tsp vinegar.', durationMinutes: 3 }
    ],
    ingredientPrepGuide: [
      { item: 'Separate Vegetable Preparation (Namul)', technique: 'Each vegetable MUST be cooked and seasoned individually. Cooking them together turns everything into a muddy brown stir-fry; preparing them separately preserves their distinct colors, textures, and subtle natural flavors, creating the iconic 5-color aesthetic.' },
      { item: 'Nurungji Formation', technique: 'Coat the interior of the hot stone bowl with 1 tbsp sesame oil before pressing the warm rice firmly against the bottom. Keep bowl over medium flame for 5 minutes until you hear frantic, crackling pops, indicating the golden crust is forming.' }
    ],
    essentialIngredients: [
      { name: 'Steamed short-grain Korean rice', prep: 'warm and fluffy', amount: '600g', metric: '600g', imperial: '21 oz', common: '4 cups cooked' },
      { name: 'Thinly sliced beef ribeye or sirloin', prep: 'marinated in soy, sesame & garlic', amount: '200g', metric: '200g', imperial: '7 oz', common: '200g' },
      { name: 'Kongnamul (Korean soybean sprouts)', prep: 'blanched and seasoned with sesame & salt', amount: '200g', metric: '200g', imperial: '7 oz', common: '2 cups' },
      { name: 'Fresh baby spinach', prep: 'blanched, squeezed dry, seasoned with garlic & sesame', amount: '200g', metric: '200g', imperial: '7 oz', common: '1 bunch' },
      { name: 'Carrot', prep: 'peeled, julienned and lightly sautéed with salt', amount: '1 medium', metric: '100g', imperial: '3.5 oz', common: '1 piece' },
      { name: 'Zucchini', prep: 'julienned, salted 5 mins, sautéed with garlic', amount: '1 medium', metric: '150g', imperial: '5.3 oz', common: '1 piece' },
      { name: 'Fresh shiitake mushrooms', prep: 'sliced thinly and sautéed with soy sauce', amount: '4 caps', metric: '80g', imperial: '2.8 oz', common: '4 caps' },
      { name: 'Fresh pasteurized egg yolks or whole eggs', prep: 'raw for topping', amount: '4 eggs', metric: '80g', imperial: '2.8 oz', common: '4 yolks' },
      { name: 'Pure toasted sesame oil', prep: 'for coating bowl & finishing', amount: '4 tbsp', metric: '60ml', imperial: '2 fl oz', common: '4 tbsp' },
      { name: 'Gochujang chili paste', prep: 'for bibimbap sauce', amount: '3 tbsp', metric: '60g', imperial: '2.1 oz', common: '3 tbsp' },
      { name: 'Toasted sesame seeds', prep: 'for final garnish', amount: '1 tbsp', metric: '10g', imperial: '0.35 oz', common: '1 tbsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'PREHEAT STONE BOWL & COAT IN SESAME OIL',
        whatYouNeed: ['Dolsot stone bowl', 'Stove burner', '1 tbsp toasted sesame oil', 'Pastry brush'],
        description: 'Place the clean stone bowl directly over medium heat on your stove burner. Pour 1 tablespoon of toasted sesame oil into the bowl and use a brush to coat the entire bottom and up the inner sides. Heat for 3 minutes until the oil begins to smoke lightly.',
        howToDoIt: 'Toasted sesame oil seasons the porous stone and fries the rice grains into an amber, crackling crust without sticking.',
        heat: 'Medium Heat',
        duration: 3,
        visualCues: 'Oil glazes the dark stone surface; faint wisps of fragrant nutty smoke appear.',
        smell: 'Intense toasted sesame oil aroma.',
        textureCheck: 'Slick, smoking hot surface.',
        whatShouldThisLookLike: 'Glossy, heated stone bowl smoking lightly on the burner.',
        tip: 'If you don\'t own a dolsot, a heavy cast-iron skillet creates an equally spectacular crispy crust!',
        commonMistake: 'Using a dry stone bowl with no oil — rice will weld to the stone and burn into bitter black carbon.',
        moveOnWhen: 'Oil is smoking lightly.',
        quickInstructions: 'Brush stone bowl with 1 tbsp sesame oil; heat on medium for 3 mins until smoking lightly.'
      },
      {
        step: 2,
        title: 'PACK RICE & ARRANGE THE 5-COLOR NAMUL WHEEL',
        whatYouNeed: ['1.5 cups warm rice', 'Prepared namul (spinach, bean sprouts, carrots, zucchini, mushrooms)', 'Sautéed beef'],
        description: 'Pack 1.5 cups of warm steamed rice firmly into the bottom of the smoking bowl, smoothing it flat. While the bowl stays over medium-low heat, rapidly arrange the seasoned vegetables and beef in neat triangular wedges around the perimeter like spokes of a bicycle wheel, alternating colors.',
        howToDoIt: 'Arranging the toppings while the bowl is over the burner allows the bottom rice to begin crisping while keeping toppings piping hot.',
        heat: 'Medium-Low Heat',
        duration: 3,
        visualCues: 'Vibrant kaleidoscope of green, orange, brown, and yellow vegetables framing the center.',
        hear: 'Audible, eager sizzling from the bottom of the bowl.',
        smell: 'Toasted rice, garlic, and savory beef.',
        textureCheck: 'Bottom rice begins to firm into a shell.',
        whatShouldThisLookLike: 'Stunning mosaic wheel of colorful Korean namul toppings.',
        tip: 'Work swiftly so the bottom rice doesn\'t burn while you arrange the vegetables.',
        commonMistake: 'Dumping all vegetables together in a heap, ruining the iconic visual presentation.',
        moveOnWhen: 'Vegetables are arranged in an alternating color wheel.',
        quickInstructions: 'Pack warm rice into bowl, arrange vegetables and beef in radial color wedges on top.'
      },
      {
        step: 3,
        title: 'CROWN WITH EGG YOLK & LISTEN FOR CRUST CRACKLE',
        whatYouNeed: ['1 raw egg yolk (or sunny-side-up fried egg)', '1 tbsp toasted sesame seeds'],
        description: 'Make a small indentation in the center of the beef. Gently drop 1 raw egg yolk into the center. Sprinkle sesame seeds over the top. Keep the bowl over medium-low heat for 3 to 4 minutes. Listen intently: the sizzle will change from gentle to loud, sharp, rhythmic crackling ("chhhhh").',
        howToDoIt: 'The sharp crackle indicates all moisture has evaporated from the bottom rice layer and the starches are frying into golden nurungji.',
        heat: 'Medium-Low Heat',
        duration: 4,
        visualCues: 'Steam puffs up from between the vegetables; egg yolk gleams in the center.',
        hear: 'Loud, eager, crackling popping sounds like frying chips.',
        smell: 'Intensely toasted nutty rice aroma.',
        textureCheck: 'Tapping bottom rice with a spoon reveals a hard, crisp shell.',
        whatShouldThisLookLike: 'A sizzling, magnificent work of Korean culinary art.',
        tip: 'If you prefer cooked eggs, use a sunny-side-up fried egg with a runny yolk instead of raw yolk.',
        commonMistake: 'Taking the bowl off heat too early before the loud crackling sound — no crispy crust will form.',
        moveOnWhen: 'Loud crackling has continued for 2 full minutes.',
        quickInstructions: 'Place egg yolk in center, cook over medium-low 3-4 mins until loud crackling sounds are heard.'
      },
      {
        step: 4,
        title: 'TRANSFER SAFELY TO WOODEN TRIVET',
        whatYouNeed: ['Heavy heatproof oven mitts or dolsot tongs', 'Wooden trivet'],
        description: 'Using heavy heatproof mitts or specialized dolsot tongs, lift the scorching hot stone bowl off the burner and place it securely into its wooden trivet. Carry it immediately to the dining table while it continues to roar and crackle.',
        howToDoIt: 'The stone bowl holds heat for over 20 minutes, keeping the meal steaming hot until the final bite.',
        heat: 'Off Heat (Internal retained heat)',
        duration: 1,
        visualCues: 'Violently sizzling bowl releasing clouds of savory steam at the table.',
        hear: 'Roaring, crackling sizzle that commands the entire room.',
        smell: 'Sweet gochujang, toasted rice, and sesame.',
        textureCheck: 'Scorching hot.',
        whatShouldThisLookLike: 'Sizzling stone bowl resting on wooden trivet at table.',
        tip: 'Warn guests not to touch the exterior of the stone bowl — it is over 180°C!',
        commonMistake: 'Placing the scorching stone bowl directly onto a laminate or wooden table, scorching the tabletop.',
        moveOnWhen: 'Safely placed on table.',
        quickInstructions: 'Transfer scorching stone bowl with oven mitts to wooden trivet on dining table.'
      },
      {
        step: 5,
        title: 'THE TABLESIDE MIX (BIBIM)',
        whatYouNeed: ['Long metal Korean spoon (Sujeo)', '2 tbsp Bibimbap sauce'],
        description: 'Drizzle 2 tablespoons of sweet-spicy Bibimbap sauce over the toppings. Using your long metal spoon, plunge into the center to break the egg yolk. Vigorously mix all ingredients together in circular, lifting motions until every grain of rice is coated in red sauce, glistening yolk, and vegetables. Dig to the bottom and invert the prized golden-brown crispy rice crust (nurungji) into the mix.',
        howToDoIt: 'The scorching stone cooks the raw egg yolk instantly as it is mixed through the rice, coating every grain in a rich, creamy custard.',
        heat: 'Retained Stone Heat',
        duration: 2,
        visualCues: 'Vibrant red-tinted rice studded with vegetables and chunks of shatteringly crisp golden crust.',
        smell: 'Spicy, sweet, pungent, and deeply comforting.',
        textureCheck: 'Piping hot, creamy, crunchy, chewy, and crispy.',
        whatShouldThisLookLike: 'Thoroughly mixed, steaming hot Korean bibimbap.',
        tip: 'Scrape the crunchy nurungji off the bottom in large sheets to savor its nutty crunch.',
        commonMistake: 'Eating toppings separately without mixing — "Bibim" means "mixed", and the magic lies in the combined harmony!',
        moveOnWhen: 'Completely mixed and enjoyed with spoon.',
        quickInstructions: 'Add sauce, break yolk, mix furiously with spoon, flip crispy bottom crust into rice, and devour.'
      }
    ],
    commonMistakes: [
      { mistake: 'No crispy rice crust (nurungji) formed.', remedy: 'Bowl was not heated long enough or no sesame oil was used on the stone. Heat over burner until you hear loud crackling for 2 full minutes.' },
      { mistake: 'Bibimbap was soggy and watery.', remedy: 'Vegetables weren\'t squeezed dry after blanching. Always squeeze spinach and bean sprouts completely dry.' }
    ],
    troubleshooting: [
      {
        problem: 'Rice crust burned black instead of golden',
        whatHappened: 'Burner flame was too high or cooked too long.',
        whyItHappened: 'Stone bowls absorb massive heat; high flame scorches starch.',
        whatToDoNow: 'Mix immediately and avoid the blackened center; add extra sesame oil to soften.',
        howToPrevent: 'Keep flame on medium-low once rice is packed into the bowl.'
      }
    ],
    substitutions: [
      { original: 'Beef bulgogi', substitute: 'Sautéed pressed tofu, diced chicken, or mixed mushrooms', notes: 'Vegetarian Bibimbap is a sacred temple food classic.' },
      { original: 'Dolsot stone bowl', substitute: 'Heavy 8-inch cast-iron skillet', notes: 'Creates an equally sensational, crackling nurungji crust.' }
    ],
    safetyNotes: [
      'The stone bowl retains scorching heat (200°C) for up to 30 minutes; do not touch with bare hands.'
    ],
    servingGuide: {
      restingTime: 'Mix immediately at the table.',
      garnishing: 'Toasted sesame seeds and a drizzle of extra sesame oil.',
      plating: 'Heavy granite stone bowl (Dolsot) on wooden base with long metal Korean spoon and chopsticks.',
      temperature: 'Scorching hot.',
      accompaniments: 'Cold bean sprout soup (Kongnamul-guk) to soothe the palate and kimchi.'
    }
  },

  // 3. KIMCHI (Traditional Baechu Kimchi)
  {
    id: 'kimchi',
    name: 'Traditional Napa Cabbage Kimchi (Tongbaechu-kimchi)',
    cuisine: 'Korean',
    region: 'South Korea (National / Jeolla)',
    servings: 12,
    prepTime: 90,
    cookTime: 15,
    difficulty: 'Hard',
    overview: {
      summary: 'The beating soul of Korean gastronomy: whole heads of Korean Napa cabbage split, brine-salted until flexible, rinsed and drained, then meticulously hand-rubbed leaf by leaf with a vibrant seasoning paste made from sweet rice porridge, Gochugaru (sun-dried Korean chili flakes), fermented salted shrimp (Saeu-jeot), fish sauce, Asian pear, garlic, and ginger, fermented to fizzy, tangy, probiotic perfection.',
      appearance: 'Ruby-red, glossy quarters of whole Napa cabbage bound with paste, packed with julienned radish and scallions, glistening with lactic fermentation juices.',
      texture: 'Crisp, refreshing, crunchy cabbage rib giving way to a sparkling, carbonated, juicy burst of fermented brine.',
      flavor: 'Complex symphony of deep lactic tanginess, moderate fruity chili warmth, savory seafood umami, sweet pear undertones, and pungent garlic-ginger aromatics.',
      restingTimeMinutes: 2880
    },
    equipment: [
      { name: 'Large 12-quart plastic or stainless steel brining tub', purpose: 'Holds whole cabbage halves submerged in salt brine.' },
      { name: 'Colander and large wire rack', purpose: 'Drains brined cabbage bone-dry for 2 hours (critical to prevent watery kimchi).' },
      { name: 'Airtight fermentation container (Onggi crock or E-Jen kimchi container with inner seal)', purpose: 'Excludes oxygen to foster beneficial anaerobic lactic acid bacteria.' },
      { name: 'Food-safe silicone gloves', purpose: 'Protects hands from chili burn during the leaf-by-leaf rubbing process.' }
    ],
    beforeYouStart: [
      { task: 'Quarter 2 large heads (approx 4kg) Napa cabbage by slicing halfway through the core and pulling halves apart with hands.', durationMinutes: 10 },
      { task: 'Dissolve 1 cup coarse Korean solar salt (Cheon-il-yeom) in 3 liters of cold water; sprinkle an extra 1/2 cup salt directly between thick white leaf ribs.', durationMinutes: 15 },
      { task: 'Brine cabbage for 6 to 8 hours, turning halves every 2 hours, until thickest stems bend into a "U" without snapping.', durationMinutes: 480 },
      { task: 'Rinse brined cabbage in cold running water 3 times; invert on wire rack to drain for a full 2 hours.', durationMinutes: 120 }
    ],
    ingredientPrepGuide: [
      { item: 'Cabbage Halving Technique', technique: 'Never cut cabbage all the way through with a knife! Cut only 5cm into the stem core, then insert fingers and gently pry the two halves apart with your hands. Hand-prying keeps the delicate tender leaf blades intact without shedding millions of tiny shreds.' },
      { item: 'Glutinous Rice Porridge (Chapsal-puk)', technique: 'Simmer 2 tbsp sweet rice flour in 1.5 cups water until translucent paste forms; whisk in 2 tbsp sugar. The porridge provides starches that feed lactic acid bacteria, kicks off fermentation, and gives the chili paste adhesive body to cling to cabbage leaves.' }
    ],
    essentialIngredients: [
      { name: 'Korean Napa cabbages (Baechu)', prep: 'quartered, brined & drained 2 hours', amount: '2 large heads', metric: '4000g', imperial: '8.8 lbs', common: '2 large heads' },
      { name: 'Korean coarse solar sea salt (Cheon-il-yeom)', prep: 'for brining', amount: '1.5 cups', metric: '300g', imperial: '10.5 oz', common: '1.5 cups' },
      { name: 'Gochugaru (coarse Korean red chili flakes)', prep: 'sun-dried, vibrant red', amount: '2 cups', metric: '200g', imperial: '7 oz', common: '2 cups' },
      { name: 'Sweet rice flour (Chapsal-garu)', prep: 'simmered with 350ml water into porridge', amount: '2 tbsp', metric: '25g', imperial: '0.9 oz', common: '2 tbsp' },
      { name: 'Korean radish (Mu) or Daikon', prep: 'julienned into 2mm matchsticks', amount: '500g', metric: '500g', imperial: '1.1 lbs', common: '1/2 large radish' },
      { name: 'Fresh garlic cloves', prep: 'peeled and pureed', amount: '20 cloves', metric: '100g', imperial: '3.5 oz', common: '1 cup' },
      { name: 'Fresh ginger', prep: 'peeled and pureed', amount: '30g', metric: '30g', imperial: '1 oz', common: '2 tbsp' },
      { name: 'Asian pear (Bae) or sweet apple', prep: 'peeled, cored, and pureed into pulp', amount: '1 pear', metric: '250g', imperial: '9 oz', common: '1 pear' },
      { name: 'Korean fish sauce (Myeolchi-aekjeot or Kkanari)', prep: 'anchovy or sand lance fish sauce', amount: '1/2 cup', metric: '120ml', imperial: '4 fl oz', common: '1/2 cup' },
      { name: 'Saeu-jeot (fermented salted baby shrimp)', prep: 'finely minced with brine', amount: '3 tbsp', metric: '50g', imperial: '1.8 oz', common: '3 tbsp' },
      { name: 'Scallions / Green onions', prep: 'cut into 4cm lengths', amount: '8 stalks', metric: '100g', imperial: '3.5 oz', common: '1 bunch' },
      { name: 'Korean garlic chives (Buchu)', prep: 'cut into 4cm lengths', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '1 cup' }
    ],
    steps: [
      {
        step: 1,
        title: 'VERIFY BEND TEST & DRAIN CABBAGE 2 HOURS',
        whatYouNeed: ['Brined cabbage halves', 'Wire rack or colander'],
        description: 'Take the thickest white stem of a brined cabbage half and bend it into a tight "U" shape. It should bend smoothly and feel flexible like soft leather with zero snapping. If it snaps, brine 1 more hour. Rinse 3 times in clean water. Invert halves cut-side down on wire racks and drain for a FULL 2 HOURS.',
        howToDoIt: 'Proper salting extracts water from cells so the finished kimchi stays crisp. Draining for 2 hours is mandatory; wet cabbage dilutes the seasoning and turns kimchi soggy and sour.',
        heat: 'No Heat',
        duration: 120,
        visualCues: 'Leaves are wilted and pliable; stems bend into complete loops without cracking.',
        textureCheck: 'Flexible and supple like soft leather.',
        whatShouldThisLookLike: 'Clean, drained, pliable cabbage quarters resting on racks.',
        tip: 'Gently squeeze the thick stems with your hands at the end of draining to expel final water droplets.',
        commonMistake: 'Rushing the draining step — excess water ruins the fermentation environment.',
        moveOnWhen: 'Cabbage stems bend into a U and have drained 2 full hours.',
        quickInstructions: 'Verify stems bend without snapping; rinse 3 times, drain cut-side down for 2 hours.'
      },
      {
        step: 2,
        title: 'COOK SWEET RICE PORRIDGE & COOL',
        whatYouNeed: ['Saucepan', '2 tbsp sweet rice flour', '350ml cold water', '2 tbsp sugar'],
        description: 'Whisk sweet rice flour and water in a saucepan over medium heat. Bring to a gentle simmer, whisking continuously for 5 minutes until it thickens into a translucent, glossy porridge. Whisk in 2 tbsp sugar. Turn off heat and let cool COMPLETELY to room temperature.',
        howToDoIt: 'The porridge provides food for the lactic acid bacteria and gives the paste a luscious body that glues seasoning to cabbage leaves.',
        heat: 'Medium Heat',
        duration: 7,
        visualCues: 'White watery liquid thickens into a glossy, semi-translucent porridge.',
        textureCheck: 'Smooth, pudding-like consistency.',
        whatShouldThisLookLike: 'Cool, translucent sweet rice paste.',
        tip: 'Never add hot porridge to raw garlic and chili — heat cooks the garlic and kills fresh flavor.',
        commonMistake: 'Using regular wheat flour, which produces a sour bread dough flavor.',
        moveOnWhen: 'Porridge is completely cold to the touch.',
        quickInstructions: 'Simmer sweet rice flour and water for 5 mins until thick; whisk in sugar; cool completely.'
      },
      {
        step: 3,
        title: 'BLEND & MIX THE KIMCHI SEASONING PASTE (SOK)',
        whatYouNeed: ['Large mixing bowl', 'Cooled porridge', 'Gochugaru flakes', 'Pureed garlic, ginger, pear', 'Fish sauce', 'Saeu-jeot', 'Radish matchsticks', 'Scallions & chives'],
        description: 'In a large basin, combine cooled rice porridge, 2 cups Gochugaru, pureed pear, garlic, ginger, fish sauce, and minced salted shrimp (Saeu-jeot). Mix thoroughly and rest 10 minutes for chili flakes to hydrate into a thick, glowing crimson paste. Fold in julienned Korean radish matchsticks, scallions, and garlic chives. Mix gently until evenly coated.',
        howToDoIt: 'Resting allows dry chili flakes to absorb liquid, deepening into a rich scarlet paste.',
        heat: 'No Heat',
        duration: 15,
        visualCues: 'Intensely vibrant, glowing crimson paste packed with crisp radish ribbons and green herbs.',
        smell: 'Pungent, savory seafood, garlic, sweet pear, and fruity sun-dried chili.',
        textureCheck: 'Thick, moist paste that holds together.',
        whatShouldThisLookLike: 'A glistening, red, aromatic kimchi filling (Sok).',
        tip: 'Taste the paste! It should taste boldly salty, sweet, pungent, and savory. It must taste slightly saltier than food you would eat plain.',
        commonMistake: 'Skimping on salt/fish sauce — under-salted kimchi rots rather than fermenting.',
        moveOnWhen: 'Paste is uniform, glowing crimson, and hydrated.',
        quickInstructions: 'Mix porridge, gochugaru, garlic, ginger, pear, fish sauce, and shrimp; fold in radish and herbs.'
      },
      {
        step: 4,
        title: 'RUB PASTE LEAF BY LEAF & WRAP THE PARCEL',
        whatYouNeed: ['Rubber gloves', 'Drained cabbage quarters', 'Seasoning paste', 'Large work surface'],
        description: 'Wear clean rubber gloves. Take one cabbage quarter. Starting from the outermost largest leaf and working toward the inner core, lift each leaf and rub a handful of seasoning paste across both sides, tucking shreds of radish and scallion between the layers. When all leaves are coated, gather the leaves together. Fold the outer long leaf snugly around the entire quarter like a tight swaddle. Repeat for all quarters.',
        howToDoIt: 'Swaddling the cabbage tightly keeps leaves compressed and minimizes trapped air pockets inside the crock.',
        heat: 'No Heat',
        duration: 25,
        visualCues: 'Every leaf is lacquered in glowing red paste; cabbage is swaddled into a tight, neat parcel.',
        textureCheck: 'Firmly packed, glistening, red parcel.',
        whatShouldThisLookLike: 'Tightly wrapped, ruby-red Kimchi parcels.',
        tip: 'Focus the paste at the thick white stems; the thin green leafy tips need only a light brush.',
        commonMistake: 'Applying paste only to the outside of the cabbage head without coating inner leaves.',
        moveOnWhen: 'All cabbage quarters are rubbed and wrapped.',
        quickInstructions: 'Rub paste between every single leaf, tucking radish shreds; wrap outer leaf tightly around parcel.'
      },
      {
        step: 5,
        title: 'PACK TIGHTLY & THE TWO-STAGE FERMENTATION',
        whatYouNeed: ['Fermentation container (E-Jen or Onggi crock)', 'Plastic wrap or inner press plate'],
        description: 'Pack kimchi quarters cut-side up into the container, pressing down forcefully with fists to expel all trapped air bubbles. Leave at least 5cm (2 inches) of headspace at the top (kimchi expands and bubbles during fermentation). Pour remaining bowl juices over the top. Press inner lid or plastic wrap tight against the surface. Seal tightly. Ferment at room temperature (18–20°C / 65–68°F) for 24 to 48 hours until tiny bubbles appear and brine tastes tangy. Transfer to refrigerator to age slowly for 2 to 4 weeks.',
        howToDoIt: 'Lactic acid bacteria thrive strictly in anaerobic (oxygen-free) environments. Pressing out air prevents mold growth and allows Leuconostoc bacteria to produce effervescent natural carbonation.',
        heat: 'Room Temp 24-48h, then Fridge (4°C / 39°F)',
        duration: 2880,
        visualCues: 'Tiny bubbles of carbon dioxide fizz when pressed; cabbage turns from bright opaque red to deep translucent ruby; liquid levels rise.',
        smell: 'Tangy, mouth-watering sour aroma with garlic notes.',
        textureCheck: 'Crisp, sparkling crunch.',
        whatShouldThisLookLike: 'Bubbling, fermented, ruby-red kimchi submerged in tangy brine.',
        tip: 'Open the container once a day during room temperature fermentation to press down and burp built-up gas.',
        commonMistake: 'Filling the container to the brim — rising fermentation juices will overflow and leak everywhere.',
        moveOnWhen: 'Fermentation begins and kimchi is safely refrigerated.',
        quickInstructions: 'Pack tightly into container, press air out, ferment at room temp 24-48h until bubbling, then refrigerate.'
      }
    ],
    commonMistakes: [
      { mistake: 'Kimchi turned mushy, soft, and slimy.', remedy: 'Table salt with iodine was used, or cabbage was under-salted. Always use Korean coarse solar salt (Cheon-il-yeom).' },
      { mistake: 'White mold formed on top of the kimchi.', remedy: 'Cabbage was exposed to air. Always keep cabbage submerged under brine and pressed with an airtight inner plate.' }
    ],
    troubleshooting: [
      {
        problem: 'Kimchi is fermenting too quickly and turning overly sour',
        whatHappened: 'Room temperature was too warm (above 23°C / 73°F).',
        whyItHappened: 'High heat accelerates lactic acid bacteria.',
        whatToDoNow: 'Move container to the coldest back shelf of the refrigerator immediately.',
        howToPrevent: 'Limit room-temperature fermentation to 24 hours in warm climates.'
      }
    ],
    substitutions: [
      { original: 'Saeu-jeot (salted shrimp)', substitute: 'Additional fish sauce + 1 tsp kelp powder (for vegan: soy sauce + mushroom broth)', notes: 'Vegan kimchi using kombu dashi and kelp powder is exceptional.' },
      { original: 'Gochugaru', substitute: 'No direct substitute! Standard chili powder or paprika lacks the sweet fruity warmth and will ruin the kimchi.', notes: 'Must purchase authentic Korean Gochugaru.' }
    ],
    safetyNotes: [
      'Always use clean utensils when retrieving kimchi from the jar to prevent introducing rogue molds.'
    ],
    servingGuide: {
      restingTime: 'Ferment at least 1 week in fridge for optimal flavor.',
      garnishing: 'Toasted sesame seeds.',
      plating: 'Cut crosswise into 4cm bite-sized segments and stack neatly on a small ceramic banchan dish.',
      temperature: 'Chilled or room temperature.',
      accompaniments: 'Piping hot steamed rice, grilled pork belly, or boiled dumplings.'
    }
  },

  // 4. TTEOKBOKKI (Spicy Korean Rice Cakes)
  {
    id: 'tteokbokki',
    name: 'Street-Style Spicy Korean Rice Cakes (Tteokbokki)',
    cuisine: 'Korean',
    region: 'South Korea (Seoul / Sindang-dong)',
    servings: 4,
    prepTime: 15,
    cookTime: 15,
    difficulty: 'Easy',
    overview: {
      summary: 'Korea\'s quintessential street-cart comfort food: chewy cylindrical rice cakes (Garae-tteok) and triangular fried fish cakes (Eomuk) simmered in a bubbling, sweet, fiery crimson broth of rich anchovy-kelp dashi, Gochujang, Gochugaru, and corn syrup, reduced into a thick, glossy lacquer, served with halved hard-boiled eggs and scallions.',
      appearance: 'A shallow dish of gleaming, scarlet-glazed cylindrical rice cakes intermingled with folded fish cake strips, crowned with halved yellow egg yolks and green scallions.',
      texture: 'Addictively chewy, soft, bouncy rice cakes ("Jjondeuk-jjondeuk") enveloped in a thick, velvety, clinging chili glaze with tender savory fish cakes.',
      flavor: 'Irresistible sweet-and-spicy rush: warming chili heat, sweet corn syrup, deep seafood umami from anchovy dashi and fish cakes, and savory fermented soybean notes.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Wide, shallow sauté pan or Dutch oven (10–12 inch)', purpose: 'Allows sauce to reduce quickly while rice cakes simmer in a single layer.' },
      { name: 'Wooden cooking spoon', purpose: 'Gently stirs rice cakes so they don\'t stick to the bottom of the pan.' }
    ],
    beforeYouStart: [
      { task: 'Soak 500g cylindrical Korean rice cakes (Garae-tteok) in warm water for 15 minutes to soften.', durationMinutes: 15 },
      { task: 'Slice 3 rectangular Korean fish cake sheets (Eomuk) into triangular bite-sized pieces.', durationMinutes: 3 },
      { task: 'Boil 2 large eggs for 8 minutes; peel and cut in half.', durationMinutes: 10 },
      { task: 'Prepare anchovy-kelp dashi broth: simmer 6 dried anchovies and 1 piece kombu in 600ml water for 15 minutes; discard solids.', durationMinutes: 15 }
    ],
    ingredientPrepGuide: [
      { item: 'Rice Cake Selection & Hydration', technique: 'Fresh rice cakes can be added directly. Refrigerated or frozen rice cakes MUST soak in warm water for 15 minutes prior to cooking; throwing cold, hard rice cakes directly into boiling sauce causes them to crack and split open.' },
      { item: 'Glaze Thickening (Corn Syrup Secret)', technique: 'Korean street cart vendors universally use Korean corn syrup (Mulyeot) or rice syrup. Corn syrup gives the sauce its signature mirror-like gloss and clinging, sticky viscosity that clings to smooth rice cakes.' }
    ],
    essentialIngredients: [
      { name: 'Korean cylinder rice cakes (Garae-tteok)', prep: 'soaked in warm water 15 mins', amount: '500g', metric: '500g', imperial: '1.1 lbs', common: '1 pack' },
      { name: 'Korean flat fish cake sheets (Eomuk / Odeng)', prep: 'cut into triangles', amount: '3 sheets', metric: '150g', imperial: '5.3 oz', common: '3 sheets' },
      { name: 'Anchovy-kelp dashi broth (or water)', prep: 'simmered seafood stock', amount: '600ml', metric: '600ml', imperial: '20 fl oz', common: '2.5 cups' },
      { name: 'Gochujang (Korean red chili paste)', prep: 'for thick body & flavor', amount: '3 tbsp', metric: '60g', imperial: '2.1 oz', common: '3 tbsp' },
      { name: 'Gochugaru (Korean chili flakes)', prep: 'fine powder for bright red color & heat', amount: '1.5 tbsp', metric: '15g', imperial: '0.5 oz', common: '1.5 tbsp' },
      { name: 'Korean corn syrup (Mulyeot) or rice syrup', prep: 'for glossy clinging glaze', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp' },
      { name: 'Granulated sugar', prep: 'for street-food sweetness', amount: '1.5 tbsp', metric: '20g', imperial: '0.7 oz', common: '1.5 tbsp' },
      { name: 'Korean soy sauce (Jinganjang)', prep: 'for savory seasoning', amount: '1 tbsp', metric: '15ml', imperial: '0.5 fl oz', common: '1 tbsp' },
      { name: 'Fresh garlic cloves', prep: 'finely minced', amount: '1 tbsp', metric: '15g', imperial: '0.5 oz', common: '3 cloves' },
      { name: 'Scallions / Green onions', prep: 'cut into 5cm long batons', amount: '3 stalks', metric: '50g', imperial: '1.8 oz', common: '1/2 cup' },
      { name: 'Hard-boiled eggs', prep: 'peeled and halved lengthwise', amount: '2 eggs', metric: '100g', imperial: '3.5 oz', common: '2 eggs' },
      { name: 'Toasted sesame seeds', prep: 'for garnish', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'DISSOLVE SEASONINGS IN ANCHOVY DASHI BROTH',
        whatYouNeed: ['Wide pan', '600ml anchovy broth', '3 tbsp gochujang', '1.5 tbsp gochugaru', '1.5 tbsp sugar', '1 tbsp soy sauce', 'Minced garlic'],
        description: 'Pour 600ml anchovy-kelp broth into the wide pan over medium-high heat. Add gochujang, gochugaru, sugar, soy sauce, and minced garlic. Stir with a wooden spoon until the chili paste dissolves completely into a smooth, crimson broth. Bring to a rolling boil.',
        howToDoIt: 'Dissolving the seasonings in cold broth ensures a velvety, lump-free sauce base before starches are added.',
        heat: 'Medium-High Heat',
        duration: 3,
        visualCues: 'Vibrant scarlet broth bubbling vigorously across the pan.',
        smell: 'Pungent, sweet-spicy chili, garlic, and ocean anchovy broth.',
        textureCheck: 'Smooth, thin simmering sauce.',
        whatShouldThisLookLike: 'Bubbling red broth covering the base of the wide pan.',
        tip: 'Use fine gochugaru powder if available for a smoother, silkier street-cart sauce appearance.',
        commonMistake: 'Using plain tap water with no broth — the sauce will taste flat and one-dimensional.',
        moveOnWhen: 'Broth is boiling vigorously with seasonings dissolved.',
        quickInstructions: 'Whisk broth, gochujang, gochugaru, sugar, soy, and garlic in pan; bring to a boil.'
      },
      {
        step: 2,
        title: 'ADD RICE CAKES & SIMMER TILL PILLOWY',
        whatYouNeed: ['500g drained rice cakes (garae-tteok)'],
        description: 'Drain the soaked rice cakes and slide them into the boiling red broth. Reduce heat to medium. Simmer for 5 to 6 minutes, stirring frequently along the bottom of the pan to prevent the sticky rice cakes from sticking.',
        howToDoIt: 'Simmering allows the rice cakes to absorb the spicy broth while their surface starches gelatinize and thicken the sauce.',
        heat: 'Medium Heat',
        duration: 6,
        visualCues: 'Rice cakes plump up, turning soft and yielding; sauce begins to thicken slightly.',
        hear: 'Steady, bubbling simmer.',
        smell: 'Sweet chili and savory rice starch.',
        textureCheck: 'A wooden spoon presses easily into the rice cake; pillowy and soft.',
        whatShouldThisLookLike: 'Rice cakes simmering in bubbling crimson sauce.',
        tip: 'Stir regularly in figure-8 motions along the pan bottom — rice starch is notoriously prone to sticking.',
        commonMistake: 'Boiling on max heat without stirring, which scorches the bottom layer of rice cakes.',
        moveOnWhen: 'Rice cakes are completely soft and chewy.',
        quickInstructions: 'Add soaked rice cakes; simmer on medium for 5-6 mins, stirring frequently until soft.'
      },
      {
        step: 3,
        title: 'ADD FISH CAKES, SCALLIONS & REDUCE TO GLOSS',
        whatYouNeed: ['Sliced fish cakes', 'Scallion batons', '2 tbsp corn syrup (Mulyeot)'],
        description: 'Add sliced fish cakes and scallion batons to the pan. Drizzle in 2 tbsp Korean corn syrup. Simmer vigorously over medium heat for 4 to 5 minutes, stirring continuously, until the sauce reduces by half into a thick, glossy, clingy crimson glaze that coats the rice cakes completely.',
        howToDoIt: 'Corn syrup provides the mirror-sheen and viscosity, while fish cakes impart savory umami oils into the sauce as it reduces.',
        heat: 'Medium Heat',
        duration: 5,
        visualCues: 'Sauce transforms from soupy liquid into a thick, syrupy, mirror-gloss crimson lacquer that coats the back of a spoon.',
        hear: 'Thick, heavy, slow bubbling ("bloop-bloop").',
        smell: 'Sweet, sticky, savory Korean street food aroma.',
        textureCheck: 'Thick, velvety sauce clinging to every surface.',
        whatShouldThisLookLike: 'Glossy, vibrant scarlet tteokbokki in thick sticky glaze.',
        tip: 'Add corn syrup in this final stage to preserve maximum shine and elasticity.',
        commonMistake: 'Pulling off heat while sauce is still watery — authentic tteokbokki sauce must be thick and clinging.',
        moveOnWhen: 'Sauce is reduced to a thick, glossy glaze.',
        quickInstructions: 'Add fish cakes, scallions, and corn syrup; simmer 4-5 mins until sauce is thick and glossy.'
      },
      {
        step: 4,
        title: 'ADD BOILED EGGS & REST OFF HEAT',
        whatYouNeed: ['Halved hard-boiled eggs'],
        description: 'Nestle the halved hard-boiled eggs into the hot sauce, cut-side up. TURN OFF HEAT. Let rest undisturbed for 2 minutes. The residual heat allows the rice cakes to absorb the final juices while the egg yolks soak in the sweet chili glaze.',
        howToDoIt: 'Resting allows starches to settle into their peak chewy ("jjondeuk") texture.',
        heat: 'Off Heat',
        duration: 2,
        visualCues: 'Glistening sauce thickens further into a deep, clinging lacquer.',
        textureCheck: 'Peak chewiness.',
        whatShouldThisLookLike: 'Finished street-style tteokbokki pan with eggs nestled in sauce.',
        tip: 'Crushing the hard-boiled egg yolk into the spicy sauce with your spoon creates an insanely rich, creamy bite!',
        commonMistake: 'Eating instantly while scorching hot — the rice cakes are too soft; resting brings out peak chew.',
        moveOnWhen: '2-minute rest is complete.',
        quickInstructions: 'Add halved boiled eggs, turn off heat, rest 2 mins to settle glaze.'
      },
      {
        step: 5,
        title: 'PLATE & GARNISH WITH SESAME SEEDS',
        whatYouNeed: ['Serving platter or shallow bowl', 'Toasted sesame seeds'],
        description: 'Transfer tteokbokki, fish cakes, and sauce to a wide shallow bowl. Arrange halved eggs on top. Scatter toasted sesame seeds over the dish. Serve piping hot with toothpicks or forks.',
        howToDoIt: 'Serving in a shallow bowl keeps the sauce pooled around the rice cakes so every bite can be dredged through the glaze.',
        heat: 'Off Heat',
        duration: 1,
        visualCues: 'Vibrant scarlet red dish accented by yellow egg yolks, green scallions, and golden sesame seeds.',
        smell: 'Irresistible sweet-spicy chili, sesame, and seafood fragrance.',
        textureCheck: 'Bouncy, chewy, and saucy.',
        whatShouldThisLookLike: 'Classic Seoul street-cart tteokbokki plate.',
        tip: 'Dip fried seaweed rolls (Gimmari) or mandu directly into the leftover tteokbokki sauce!',
        commonMistake: 'Letting leftovers sit uncovered — rice cakes dry out and turn hard as plastic.',
        moveOnWhen: 'Plated and served.',
        quickInstructions: 'Transfer to shallow bowl, arrange eggs on top, dust with sesame seeds, serve hot.'
      }
    ],
    commonMistakes: [
      { mistake: 'Rice cakes split open and cracked during cooking.', remedy: 'Cold refrigerated rice cakes were dropped directly into boiling liquid. Always soak in warm water for 15 minutes first.' },
      { mistake: 'Sauce was too thin and watery.', remedy: 'Sauce wasn\'t reduced long enough. Simmer until sauce reduces into a thick, glossy syrupy coat.' }
    ],
    troubleshooting: [
      {
        problem: 'Sauce reduced too much and turned pasty/dry',
        whatHappened: 'Boiled too long on high heat.',
        whyItHappened: 'Excess water evaporation.',
        whatToDoNow: 'Stir in 3 to 4 tablespoons of warm water or dashi broth over low heat until sauce returns to a glossy glaze.',
        howToPrevent: 'Turn down heat once sauce begins to coat the spoon.'
      }
    ],
    substitutions: [
      { original: 'Fish cake sheets (Eomuk)', substitute: 'Fried tofu puffs or Vienna cocktail sausages', notes: 'Sausage-tteokbokki (Sotteok) is a wildly popular modern Korean highway rest-stop snack.' },
      { original: 'Corn syrup (Mulyeot)', substitute: 'Honey, maple syrup, or extra granulated sugar', notes: 'Honey provides floral sweetness and good shine.' }
    ],
    safetyNotes: [
      'Chew rice cakes thoroughly before swallowing due to their dense, chewy texture.'
    ],
    servingGuide: {
      restingTime: '2 minutes off heat.',
      garnishing: 'Toasted sesame seeds and sliced scallions.',
      plating: 'Shallow oval ceramic dish or retro green-and-white melamine snack plate.',
      temperature: 'Piping hot and saucy.',
      accompaniments: 'Hot fish cake broth (Eomuk-tang), crispy seaweed rolls (Gimmari), and yellow pickled radish (Danmuji).'
    }
  },

  // 5. JAPCHAE (Stir-Fried Glass Noodles with Beef & Vegetables)
  {
    id: 'japchae',
    name: 'Royal Korean Stir-Fried Glass Noodles (Japchae)',
    cuisine: 'Korean',
    region: 'South Korea (National / Joseon Royal Court)',
    servings: 4,
    prepTime: 30,
    cookTime: 15,
    difficulty: 'Medium',
    overview: {
      summary: 'The celebratory jewel of Korean banquets: chewy, translucent sweet potato starch glass noodles (Dangmyeon) tossed with seasoned beef ribeye, wood ear mushrooms, spinach, carrots, and sweet onions, individually stir-fried to preserve their distinct colors and crunches, dressed in a luscious sauce of rich soy, toasted sesame oil, and garlic.',
      appearance: 'Glistening mound of translucent, golden-brown glass noodles entwined with ribbons of jade spinach, orange carrots, black wood ear mushrooms, and savory beef strips, dusted with sesame seeds.',
      texture: 'Addictively bouncy, chewy, slippery glass noodles ("Dang-myeon") contrasted with tender beef, crunchy vegetables, and delicate leafy spinach.',
      flavor: 'Deeply aromatic sweet-savory harmony: rich soy sauce, nutty toasted sesame oil, sweet caramelized onions, and subtle garlic warmth.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Large 14-inch wok or wide skillet', purpose: 'For individually stir-frying vegetables and tossing the large batch of noodles.' },
      { name: 'Large 6-quart stockpot', purpose: 'Boils glass noodles with plenty of room so they don\'t clump.' },
      { name: 'Large mixing bowl', purpose: 'For hand-tossing (Muchim) the hot noodles and vegetables together.' }
    ],
    beforeYouStart: [
      { task: 'Soak 250g Korean dangmyeon (sweet potato noodles) in warm water for 30 minutes to reduce boiling time.', durationMinutes: 30 },
      { task: 'Slice 150g beef ribeye into thin 5cm matchsticks; marinate with 1 tbsp soy sauce, 1 tsp sugar, 1 tsp sesame oil, and 1 minced garlic clove.', durationMinutes: 10 },
      { task: 'Blanch 200g baby spinach for 30 seconds; shock in cold water, squeeze bone-dry, and season with 1/2 tsp sesame oil and pinch of salt.', durationMinutes: 5 },
      { task: 'Julienne 1 yellow onion, 1 carrot, and 4 rehydrated shiitake / wood ear mushrooms into thin 5cm matchsticks.', durationMinutes: 8 }
    ],
    ingredientPrepGuide: [
      { item: 'Noodle Selection (Dangmyeon)', technique: 'Must use 100% sweet potato starch noodles (Dangmyeon). Rice vermicelli or bean thread noodles will turn to mush when tossed; sweet potato starch noodles possess an extraordinary chewy, elastic springiness that holds up to tossing.' },
      { item: 'Individual Sautéing (Bokkeum)', technique: 'Each vegetable must be sautéed separately in a hot wok with a drop of oil and a pinch of salt. Sautéing them separately prevents color bleeding (carrots won\'t turn onions orange) and guarantees every vegetable retains its unique crisp-tender texture.' }
    ],
    essentialIngredients: [
      { name: 'Korean sweet potato glass noodles (Dangmyeon)', prep: 'soaked 30 mins, boiled 6 mins', amount: '250g', metric: '250g', imperial: '9 oz', common: '250g' },
      { name: 'Beef ribeye or sirloin', prep: 'sliced into 5cm thin strips & marinated', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '150g' },
      { name: 'Baby spinach', prep: 'blanched, squeezed bone-dry & seasoned', amount: '200g', metric: '200g', imperial: '7 oz', common: '1 bunch' },
      { name: 'Yellow onion', prep: 'thinly sliced into ribbons', amount: '1 medium', metric: '150g', imperial: '5.3 oz', common: '1 onion' },
      { name: 'Carrot', prep: 'peeled and julienned into 5cm matchsticks', amount: '1 medium', metric: '100g', imperial: '3.5 oz', common: '1 carrot' },
      { name: 'Dried wood ear or shiitake mushrooms', prep: 'rehydrated in hot water and sliced', amount: '4 mushrooms', metric: '50g', imperial: '1.8 oz', common: '1/2 cup' },
      { name: 'Korean soy sauce (Jinganjang)', prep: 'divided (marinade, noodles & dressing)', amount: '4 tbsp', metric: '60ml', imperial: '2 fl oz', common: '1/4 cup' },
      { name: 'Pure toasted sesame oil', prep: 'divided (the soul of japchae)', amount: '4 tbsp', metric: '60ml', imperial: '2 fl oz', common: '1/4 cup' },
      { name: 'Granulated sugar or honey', prep: 'for sweet-savory balance', amount: '2.5 tbsp', metric: '30g', imperial: '1 oz', common: '2.5 tbsp' },
      { name: 'Fresh garlic cloves', prep: 'finely minced', amount: '2 tbsp', metric: '20g', imperial: '0.7 oz', common: '4 cloves' },
      { name: 'Toasted white sesame seeds', prep: 'for garnish', amount: '1.5 tbsp', metric: '15g', imperial: '0.5 oz', common: '1.5 tbsp' },
      { name: 'Ground black pepper', prep: 'freshly cracked', amount: '1/2 tsp', metric: '1.5g', imperial: '0.05 oz', common: '1/2 tsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'BOIL & SEASON DANGMYEON GLASS NOODLES',
        whatYouNeed: ['Stockpot of boiling water', '250g soaked glass noodles', '1 tbsp soy sauce', '1 tbsp sesame oil'],
        description: 'Bring a large pot of water to a rolling boil. Add soaked dangmyeon noodles. Boil for 6 to 7 minutes until translucent, tender, and bouncy with no hard white core. Drain thoroughly in a colander (do NOT rinse with water!). Transfer warm noodles to the large mixing bowl. Immediately toss with 1 tbsp soy sauce and 1 tbsp sesame oil. Cut noodles with kitchen shears 2–3 times into manageable lengths.',
        howToDoIt: 'Tossing hot drained noodles in oil immediately coats the starches, preventing them from clumping while infusing them with savory color.',
        heat: 'High Boil',
        duration: 8,
        visualCues: 'Noodles turn crystal translucent, glossy, and light golden-amber from soy sauce.',
        smell: 'Toasted sesame and sweet potato starch.',
        textureCheck: 'Elastic, springy, and tender.',
        whatShouldThisLookLike: 'Glistening, separate golden glass noodles in mixing bowl.',
        tip: 'Cutting the noodles with kitchen shears makes them much easier to toss and eat with chopsticks.',
        commonMistake: 'Rinsing cooked noodles in cold water — washes away surface starches that help the dressing cling.',
        moveOnWhen: 'Noodles are boiled, drained, seasoned, and snipped.',
        quickInstructions: 'Boil noodles 6-7 mins, drain, toss immediately with 1 tbsp soy and 1 tbsp sesame oil, snip with shears.'
      },
      {
        step: 2,
        title: 'STIR-FRY VEGETABLES INDIVIDUALLY',
        whatYouNeed: ['Wok', 'Cooking oil', 'Sliced onions', 'Julienned carrots', 'Sliced mushrooms'],
        description: 'Heat 1 tsp oil in wok over medium-high heat. Add sliced onions with a pinch of salt; stir-fry 2 minutes until translucent but still crisp. Transfer to the noodle bowl. Add 1 tsp oil to wok; stir-fry carrots with a pinch of salt for 2 minutes until tender-crisp. Transfer to bowl. Add 1 tsp oil; stir-fry sliced mushrooms with 1/2 tsp soy sauce for 2 minutes. Transfer to bowl.',
        howToDoIt: 'Cooking vegetables individually preserves their distinct colors and crunches without turning them into a soggy mixed stew.',
        heat: 'Medium-High Heat',
        duration: 7,
        visualCues: 'Onions are glassy, carrots are bright vibrant orange, mushrooms are juicy and brown.',
        smell: 'Sautéed onions and earthy mushrooms.',
        textureCheck: 'Tender-crisp with an audible snap.',
        whatShouldThisLookLike: 'Vibrant mounds of cooked vegetables resting on top of the noodles.',
        tip: 'Never overcook carrots until limp — they provide essential crunchy texture in the soft noodles.',
        commonMistake: 'Dumping all vegetables into the wok together — moisture creates steam that dulls colors and makes onions mushy.',
        moveOnWhen: 'All vegetables are individually stir-fried and added to the bowl.',
        quickInstructions: 'Stir-fry onions, carrots, and mushrooms separately for 2 mins each; transfer to noodle bowl.'
      },
      {
        step: 3,
        title: 'STIR-FRY MARINATED BEEF',
        whatYouNeed: ['Wok', '1 tsp oil', 'Marinated beef strips'],
        description: 'Heat 1 tsp oil in the wok over high heat. Add marinated beef strips in a single layer. Stir-fry aggressively for 2 minutes until the beef is fully browned, caramelized, and fragrant. Scrape beef and all pan juices directly into the noodle bowl.',
        howToDoIt: 'High heat sears the beef instantly, while the pan fond provides savory richness to the noodle dressing.',
        heat: 'High Heat',
        duration: 2,
        visualCues: 'Beef caramelizes with glistening brown edges; savory juices pool slightly.',
        hear: 'Brisk, snapping sizzle.',
        smell: 'Sweet marinated bulgogi beef and garlic.',
        textureCheck: 'Tender and juicy beef strips.',
        whatShouldThisLookLike: 'Sautéed brown beef strips added to the colorful bowl.',
        tip: 'Include every drop of the beef cooking juices — it acts as part of the sauce!',
        commonMistake: 'Overcooking beef until dry and chewy.',
        moveOnWhen: 'Beef is cooked and added to bowl.',
        quickInstructions: 'Stir-fry marinated beef over high heat for 2 mins; transfer to noodle bowl with juices.'
      },
      {
        step: 4,
        title: 'THE HAND-TOSSING STAGE (SON-MAT MUCHIM)',
        whatYouNeed: ['Noodle bowl with all toppings', 'Blanched seasoned spinach', '3 tbsp soy sauce', '2 tbsp sugar', '2 tbsp sesame oil', 'Black pepper', 'Food-safe glove'],
        description: 'Add blanched spinach to the bowl. Drizzle remaining 3 tbsp soy sauce, 2 tbsp sugar, 2 tbsp sesame oil, and black pepper across the ingredients. Put on a clean glove. Use your hands to gently lift, toss, and separate the noodles and toppings together until every strand of glass noodle is uniformly coated in sauce and toppings are evenly distributed.',
        howToDoIt: 'Hand-tossing ("Son-mat" or "taste of the hands") distributes the delicate vegetables evenly without crushing them, while massaging the dressing into the warm noodles.',
        heat: 'No Heat',
        duration: 3,
        visualCues: 'Noodles glisten with a uniform mahogany sheen, specked evenly with green spinach, orange carrot, and dark beef.',
        smell: 'Intoxicating aroma of sweet soy and toasted sesame oil.',
        textureCheck: 'Silky, slippery, and cohesive.',
        whatShouldThisLookLike: 'A glorious, evenly distributed bowl of glossy Korean Japchae.',
        tip: 'Taste a noodle: adjust with extra soy sauce for saltiness or extra sugar for sweetness.',
        commonMistake: 'Tossing with metal tongs, which shreds the delicate noodles and tears spinach leaves.',
        moveOnWhen: 'Noodles are evenly coated and harmoniously mixed.',
        quickInstructions: 'Add spinach, soy, sugar, sesame oil, and pepper; toss gently with gloved hands until glossy.'
      },
      {
        step: 5,
        title: 'PLATE & SHOWER WITH TOASTED SESAME',
        whatYouNeed: ['Serving platter', '1.5 tbsp toasted white sesame seeds'],
        description: 'Mound the Japchae high onto a wide porcelain serving platter. Sprinkle a generous shower of toasted white sesame seeds over the top. Serve warm or at room temperature.',
        howToDoIt: 'Mounding high showcases the vibrant colors and prevents the noodles from drying out on the edges.',
        heat: 'Off Heat',
        duration: 1,
        visualCues: 'Towering, glistening noodle presentation with contrasting ruby, green, and orange jewel-like accents.',
        smell: 'Nutty sesame and savory sweet sauce.',
        textureCheck: 'Bouncy, chewy, and succulent.',
        whatShouldThisLookLike: 'Royal banquet-style platter of Korean Japchae.',
        tip: 'Japchae is one of the rare noodle dishes that tastes sensational at room temperature, making it the ultimate party food!',
        commonMistake: 'Serving ice-cold straight from the fridge — sesame oil hardens and noodles turn stiff. Reheat gently.',
        moveOnWhen: 'Plated and garnished.',
        quickInstructions: 'Mound noodles on platter, shower with toasted sesame seeds, serve warm.'
      }
    ],
    commonMistakes: [
      { mistake: 'Noodles were mushy and broke into tiny fragments.', remedy: 'Noodles were overcooked or low-quality vermicelli was used. Cook 100% sweet potato dangmyeon for 6-7 minutes only.' },
      { mistake: 'Noodles clumped together into an unmanageable block.', remedy: 'Hot boiled noodles were left in the colander without seasoning. Always toss immediately with sesame oil and soy sauce while piping hot.' }
    ],
    troubleshooting: [
      {
        problem: 'Leftover Japchae in fridge turned hard and opaque',
        whatHappened: 'Sweet potato starch retrogrades when cold.',
        whyItHappened: 'Normal physical starch reaction.',
        whatToDoNow: 'Warm gently in a hot skillet with 1 tbsp water and 1 tsp sesame oil for 2 minutes — noodles will turn crystal-clear and chewy again instantly!',
        howToPrevent: 'Always reheat cold Japchae before eating.'
      }
    ],
    substitutions: [
      { original: 'Beef ribeye', substitute: 'Thinly sliced pork loin, chicken breast, or sautéed king oyster mushrooms', notes: 'Mushroom Japchae (Beoseot-japchae) is an exquisite and traditional Buddhist temple variation.' },
      { original: 'Wood ear mushrooms', substitute: 'Fresh shiitake or brown cremini mushrooms', notes: 'Provide similar earthy depth.' }
    ],
    safetyNotes: [
      'Beef must reach internal temperature of 71°C (160°F).'
    ],
    servingGuide: {
      restingTime: '2 minutes before serving.',
      garnishing: 'Toasted white sesame seeds and a drizzle of finishing sesame oil.',
      plating: 'Mounded high on a large ceramic serving platter.',
      temperature: 'Warm or room temperature.',
      accompaniments: 'Kimchi, Galbi (short ribs), and cold barley tea.'
    }
  },

  // 6. BULGOGI (Marinated Korean BBQ Beef)
  {
    id: 'bulgogi',
    name: 'Classic Korean Marinated Beef BBQ (Bulgogi)',
    cuisine: 'Korean',
    region: 'South Korea (National)',
    servings: 4,
    prepTime: 25,
    cookTime: 10,
    difficulty: 'Easy',
    overview: {
      summary: 'Korea\'s world-renowned "fire meat": wafer-thin slices of prime beef ribeye tenderized naturally with grated Asian pear and onion, marinated in sweet soy sauce, garlic, ginger, and toasted sesame oil, flash-charred over screaming wok or grill heat with sweet onions and scallions to create caramelized, melt-in-the-mouth beef ribbons swimming in savory-sweet juices.',
      appearance: 'Glistening, mahogany-seared beef ribbons flecked with charred caramelized edges, tossed with sweet translucent onions and bright green scallions.',
      texture: 'Incredibly tender, meltingly soft beef with delicate charred edges that can be effortlessly sliced with a spoon.',
      flavor: 'Irresistible sweet-savory harmony: rich umami soy sauce, fruity honey-pear sweetness, pungent garlic, and nutty toasted sesame.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: '14-inch carbon steel wok, cast-iron skillet, or tabletop grill', purpose: 'Delivers intense searing heat to caramelize the sugary marinade without boiling the meat.' },
      { name: 'Box grater or food processor', purpose: 'Grates Asian pear and onion into a fine enzymatic tenderizing puree.' },
      { name: 'Large mixing bowl', purpose: 'For marinating beef slices.' }
    ],
    beforeYouStart: [
      { task: 'Freeze 600g beef ribeye or top sirloin for 45 minutes until firm; slice paper-thin (2mm) across the grain.', durationMinutes: 10 },
      { task: 'Grate 1/2 Asian pear (Bae) and 1/2 yellow onion into a fine wet pulp.', durationMinutes: 5 },
      { task: 'Mix marinade: 5 tbsp soy sauce, 2.5 tbsp brown sugar, 2 tbsp mirin, 2 tbsp sesame oil, 2 tbsp minced garlic, 1 tsp grated ginger, and black pepper.', durationMinutes: 5 },
      { task: 'Marinate beef in pear-onion puree and marinade for at least 30 minutes (or up to 4 hours in fridge).', durationMinutes: 30 }
    ],
    ingredientPrepGuide: [
      { item: 'Asian Pear Tenderization (Calpain Enzyme)', technique: 'Korean Asian pear (Bae) contains calpain, a natural proteolytic enzyme that gently breaks down tough meat muscle fibers into melting tenderness within 30 minutes without turning meat mushy. Never use kiwi or pineapple — their enzymes are too aggressive and dissolve beef into slurry.' },
      { item: 'Paper-Thin Slicing', technique: 'Partially freezing the beef hardens the fat and muscle, allowing your sharpest knife to slice clean, paper-thin 2mm ribbons that cook in seconds.' }
    ],
    essentialIngredients: [
      { name: 'Beef ribeye, top sirloin, or tenderloin', prep: 'sliced paper-thin (2mm) across the grain', amount: '600g', metric: '600g', imperial: '1.3 lbs', common: '600g' },
      { name: 'Korean Asian pear (Bae)', prep: 'peeled and finely grated with juice', amount: '1/2 pear', metric: '150g', imperial: '5.3 oz', common: '1/2 pear' },
      { name: 'Yellow onion (divided)', prep: 'half grated for marinade, half sliced into ribbons for cooking', amount: '1 large', metric: '200g', imperial: '7 oz', common: '1 onion' },
      { name: 'Korean soy sauce (Jinganjang)', prep: 'marinade backbone', amount: '5 tbsp', metric: '75ml', imperial: '2.5 fl oz', common: '1/3 cup' },
      { name: 'Brown sugar', prep: 'adds rich molasses caramelization', amount: '2.5 tbsp', metric: '35g', imperial: '1.2 oz', common: '2.5 tbsp' },
      { name: 'Mirin (sweet rice cooking wine)', prep: 'for luster & tenderizing', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp' },
      { name: 'Toasted sesame oil', prep: 'for nutty aroma', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp' },
      { name: 'Fresh garlic cloves', prep: 'finely minced', amount: '2 tbsp', metric: '20g', imperial: '0.7 oz', common: '5 cloves' },
      { name: 'Fresh ginger', prep: 'finely grated', amount: '1 tsp', metric: '5g', imperial: '0.17 oz', common: '1 tsp' },
      { name: 'Scallions / Green onions', prep: 'cut into 5cm batons', amount: '4 stalks', metric: '60g', imperial: '2.1 oz', common: '1/2 cup' },
      { name: 'Toasted sesame seeds', prep: 'for garnish', amount: '1 tbsp', metric: '10g', imperial: '0.35 oz', common: '1 tbsp' },
      { name: 'Neutral cooking oil', prep: 'for high heat searing', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'MARINATE BEEF WITH NATURAL PEAR ENZYMES',
        whatYouNeed: ['Sliced beef', 'Grated pear & onion', 'Soy sauce', 'Brown sugar', 'Mirin', 'Sesame oil', 'Garlic', 'Ginger', 'Black pepper'],
        description: 'In a large bowl, whisk grated pear, grated onion, soy sauce, brown sugar, mirin, sesame oil, minced garlic, ginger, and 1/2 tsp black pepper until sugar dissolves. Add paper-thin beef slices one by one, separating any stuck pieces with your fingers so every ribbon is coated. Cover and marinate for 30 minutes at room temperature (or up to 4 hours in fridge).',
        howToDoIt: 'Adding slices individually ensures the natural pear enzymes penetrate every single surface for uniform tenderness.',
        heat: 'No Heat',
        duration: 30,
        visualCues: 'Beef ribbons relax, turning dark amber as they absorb the fragrant marinade.',
        smell: 'Sweet pear, fragrant garlic, and nutty sesame oil.',
        textureCheck: 'Soft, velvety ribbons.',
        whatShouldThisLookLike: 'Tender beef slices soaking in rich aromatic marinade.',
        tip: 'Do not marinate longer than 8 hours — pear enzymes will eventually break down meat structure too far.',
        commonMistake: 'Throwing a frozen clump of beef into the marinade, leaving inner pieces raw and unseasoned.',
        moveOnWhen: 'Beef has marinated for 30 minutes.',
        quickInstructions: 'Whisk marinade ingredients; coat individual beef slices, marinate 30 mins.'
      },
      {
        step: 2,
        title: 'HEAT PAN TO SMOKING & COOK IN BATCHES',
        whatYouNeed: ['Heavy cast-iron skillet or wok', '1 tbsp oil', 'Half of marinated beef', 'Half of sliced onions'],
        description: 'Heat 1 tbsp oil in skillet over screaming high heat until smoking hot. Add half the sliced onions. Immediately lay half the marinated beef across the pan in a single loose layer (shake off dripping excess marinade so the pan stays hot). Cook undisturbed for 90 seconds to sear.',
        howToDoIt: 'Cooking in two separate batches prevents the pan temperature from dropping. Overcrowding releases water and boils the beef gray instead of searing caramelized brown edges.',
        heat: 'Maximum High Heat',
        duration: 2,
        visualCues: 'Intense sizzle; bottom edges of beef caramelize into dark mahogany brown crusts.',
        hear: 'Violent, crackling roar as sugary marinade hits hot iron.',
        smell: 'Intoxicating caramelized soy sauce, charred sugar, and roasting beef.',
        textureCheck: 'Seared on bottom, pink on top.',
        whatShouldThisLookLike: 'Sizzling beef ribbons caramelizing in hot skillet.',
        tip: 'Listen to the sizzle: if it turns into a wet watery bubble, your heat is too low or pan is crowded.',
        commonMistake: 'Dumping all 600g of meat and wet marinade into the pan at once, creating a gray boiled stew.',
        moveOnWhen: 'Bottom of beef is caramelized.',
        quickInstructions: 'Sear half the beef and onions over screaming high heat for 90s undisturbed.'
      },
      {
        step: 3,
        title: 'TOSS, CHAR & ADD SCALLIONS',
        whatYouNeed: ['Wok spatula or tongs', 'Half of scallion batons'],
        description: 'Flip and toss the beef and onions for 90 seconds. Add scallion batons. Stir-fry for 30 seconds until beef is cooked through and onions are tender-crisp. Transfer the first batch to a warm platter. Repeat process with remaining oil, beef, onions, and scallions.',
        howToDoIt: 'Flash-cooking for less than 3 minutes total preserves the melting tenderness of the thin beef ribbons.',
        heat: 'High Heat',
        duration: 2,
        visualCues: 'Beef is fully cooked with charred edges; onions are tender-crisp and glistening with glaze.',
        smell: 'Sweet caramelized alliums and savory beef.',
        textureCheck: 'Meltingly tender beef.',
        whatShouldThisLookLike: 'Glistening, mahogany-glazed beef and onions.',
        tip: 'Scrape the delicious caramelized glaze from the bottom of the pan over the meat.',
        commonMistake: 'Cooking past 3 minutes — thin beef will turn dry and tough.',
        moveOnWhen: 'Beef is cooked through and transferred to platter.',
        quickInstructions: 'Toss beef 90s, add scallions, cook 30s, plate; repeat with second batch.'
      },
      {
        step: 4,
        title: 'GARNISH WITH SESAME SEEDS & SERVE',
        whatYouNeed: ['Platter of hot bulgogi', '1 tbsp toasted sesame seeds', 'Lettuce leaves & ssamjang (optional)'],
        description: 'Mound the caramelized bulgogi on a warm platter. Sprinkle generously with toasted white sesame seeds. Serve immediately with piping hot steamed rice and lettuce leaves for wrapping.',
        howToDoIt: 'Bulgogi juices soak deliciously into hot rice or can be wrapped with rice and ssamjang in lettuce leaves.',
        heat: 'Off Heat',
        duration: 1,
        visualCues: 'Glossy, caramelized beef ribbons surrounded by sweet onions and sesame seeds.',
        smell: 'Rich savory-sweet Korean BBQ aroma.',
        textureCheck: 'Melt-in-the-mouth tenderness.',
        whatShouldThisLookLike: 'Restaurant-quality platter of sizzling Korean Bulgogi.',
        tip: 'Spoon the remaining savory pan juices over your bowl of white rice — it\'s heaven!',
        commonMistake: 'Letting cooked bulgogi sit cold in the pan where it reabsorbs grease.',
        moveOnWhen: 'Plated and ready to devour.',
        quickInstructions: 'Mound bulgogi on platter, sprinkle with toasted sesame seeds, serve hot with rice.'
      }
    ],
    commonMistakes: [
      { mistake: 'Beef was tough and chewy.', remedy: 'Meat was cut too thick or along the grain. Always slice against the grain paper-thin (2mm) and use Asian pear to tenderize.' },
      { mistake: 'Beef boiled in watery gray liquid instead of searing.', remedy: 'Pan was overcrowded. Always cook in batches over maximum high heat.' }
    ],
    troubleshooting: [
      {
        problem: 'Marinade is burning black before meat is cooked',
        whatHappened: 'High sugar content in marinade caramelized too fast on an un-oiled dry spot.',
        whyItHappened: 'Heat too intense without pan movement.',
        whatToDoNow: 'Add 1 tablespoon of water to deglaze the pan and keep meat moving rapidly.',
        howToPrevent: 'Swirl 1 tbsp oil in pan and keep meat moving after the initial 90-second sear.'
      }
    ],
    substitutions: [
      { original: 'Korean Asian pear (Bae)', substitute: '1/2 peeled sweet Fuji or Gala apple + 1 tbsp extra mirin', notes: 'Grated apple provides gentle acidity and natural sweetness.' },
      { original: 'Beef ribeye', substitute: 'Thinly sliced pork shoulder (Dwaeji-bulgogi) or boneless chicken thighs', notes: 'Pork bulgogi is often prepared with gochujang for spicy pork BBQ.' }
    ],
    safetyNotes: [
      'Beef should reach minimum safe internal temperature of 63°C (145°F).'
    ],
    servingGuide: {
      restingTime: 'Rest 2 minutes before serving.',
      garnishing: 'Toasted sesame seeds and sliced scallions.',
      plating: 'Serve on a heated iron platter or wide ceramic plate.',
      temperature: 'Piping hot.',
      accompaniments: 'Steamed white rice, red leaf lettuce, ssamjang paste, and sliced garlic.'
    }
  },

  // 7. GALBI (LA Galbi - Marinated BBQ Beef Short Ribs)
  {
    id: 'galbi',
    name: 'Korean BBQ Flanken Short Ribs (LA Galbi)',
    cuisine: 'Korean',
    region: 'South Korea / Korean-American (Los Angeles)',
    servings: 4,
    prepTime: 25,
    cookTime: 12,
    difficulty: 'Medium',
    overview: {
      summary: 'The undisputed showstopper of Korean barbecue: flanken-cut beef short ribs sliced crosswise across three oval bones, marinated in a sweet savory glaze of soy sauce, grated Korean pear, mirin, garlic, and toasted sesame oil, grilled over high heat until caramelized, lacquered, and deeply charred at the edges, offering luscious, tender meat that chews cleanly off the bone.',
      appearance: 'Sizzling, mahogany-lacquered strips of beef short ribs with three cross-cut oval bone segments embedded along the edge, glistening with caramelized glaze and blistered grill marks.',
      texture: 'Juicy, rich, succulent beef with caramelized charred edges and tender chew around the flavorful bone marrow cartilage.',
      flavor: 'Deeply satisfying balance of rich beefy short rib fat, sweet caramelized fruit sugars, savory umami soy sauce, and aromatic toasted sesame.',
      restingTimeMinutes: 3
    },
    equipment: [
      { name: 'Outdoor charcoal grill or heavy ridged cast-iron grill pan', purpose: 'Achieves authentic smoky charring and renders rich short rib fat.' },
      { name: 'Kitchen cooking shears and metal tongs', purpose: 'For snipping rib strips into individual bone segments at the table.' },
      { name: 'Large shallow baking dish', purpose: 'Allows ribs to lay flat in marinade for even absorption.' }
    ],
    beforeYouStart: [
      { task: 'Rinse 1kg flanken-cut short ribs under cold running water to wash away bone dust from the butcher\'s saw; pat bone-dry with paper towels.', durationMinutes: 10 },
      { task: 'Grate 1/2 Asian pear, 1/2 yellow onion, and puree with 6 garlic cloves and 15g ginger.', durationMinutes: 5 },
      { task: 'Whisk marinade: 120ml soy sauce, 3 tbsp brown sugar, 2 tbsp honey, 3 tbsp mirin, 2 tbsp sesame oil, and black pepper.', durationMinutes: 5 },
      { task: 'Submerge ribs in marinade; refrigerate covered for at least 4 hours (or overnight for optimal tenderness).', durationMinutes: 240 }
    ],
    ingredientPrepGuide: [
      { item: 'Rinsing Bone Dust', technique: 'Flanken-cut ribs are sliced through bone on an electric bandsaw, leaving microscopic bone fragments on the meat surface. Rinsing thoroughly in cold water and patting bone-dry eliminates gritty bone fragments completely.' },
      { item: 'Fat Rendering on High Heat', technique: 'Short ribs have rich intramuscular fat. Cooking over high heat renders the fat quickly, creating smoky flares on the grill that coat the meat in irresistible barbecue flavor.' }
    ],
    essentialIngredients: [
      { name: 'Flanken-cut beef short ribs (LA Galbi cut)', prep: 'sliced 1cm thick across 3 bones, bone dust rinsed & dried', amount: '1000g', metric: '1000g', imperial: '2.2 lbs', common: '1kg' },
      { name: 'Korean Asian pear (Bae)', prep: 'peeled and finely grated', amount: '1/2 pear', metric: '150g', imperial: '5.3 oz', common: '1/2 pear' },
      { name: 'Yellow onion', prep: 'finely grated', amount: '1/2 onion', metric: '100g', imperial: '3.5 oz', common: '1/2 onion' },
      { name: 'Korean soy sauce (Jinganjang)', prep: 'savory foundation', amount: '120ml', metric: '120ml', imperial: '4 fl oz', common: '1/2 cup' },
      { name: 'Brown sugar & Honey', prep: 'for deep caramelization & shine', amount: '3 tbsp sugar + 2 tbsp honey', metric: '75g', imperial: '2.6 oz', common: '5 tbsp total' },
      { name: 'Mirin (sweet rice wine)', prep: 'tenderizer', amount: '3 tbsp', metric: '45ml', imperial: '1.5 fl oz', common: '3 tbsp' },
      { name: 'Toasted sesame oil', prep: 'pure dark sesame', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp' },
      { name: 'Fresh garlic cloves', prep: 'finely minced', amount: '6 cloves', metric: '25g', imperial: '0.9 oz', common: '2 tbsp' },
      { name: 'Fresh ginger', prep: 'finely grated', amount: '1 tbsp', metric: '15g', imperial: '0.5 oz', common: '1 tbsp' },
      { name: 'Scallions / Green onions', prep: 'finely sliced into rings for garnish', amount: '3 stalks', metric: '40g', imperial: '1.4 oz', common: '1/3 cup' },
      { name: 'Toasted white sesame seeds', prep: 'for garnish', amount: '1 tbsp', metric: '10g', imperial: '0.35 oz', common: '1 tbsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'MARINATE RIBS (4 TO 12 HOURS)',
        whatYouNeed: ['Rinsed dry ribs', 'Marinade mixture', 'Shallow container'],
        description: 'Pour marinade over the cleaned, dried short ribs in the shallow baking dish. Rub the marinade into both sides of each strip. Lay ribs flat so they are fully submerged. Cover tightly and refrigerate for at least 4 hours (ideally overnight).',
        howToDoIt: 'Flanken cut ribs are thin enough that pear enzymes and seasonings penetrate the meat fibers thoroughly in 4 hours.',
        heat: 'Cold Refrigeration',
        duration: 240,
        visualCues: 'Ribs darken to rich mahogany brown; meat absorbs marinade and plumps slightly.',
        smell: 'Sweet pear, garlic, and savory soy.',
        textureCheck: 'Supple and well-coated.',
        whatShouldThisLookLike: 'Rib strips submerged in aromatic mahogany marinade.',
        tip: 'Bring ribs to room temperature for 20 minutes before grilling so they cook evenly.',
        commonMistake: 'Marinating for only 15 minutes — short ribs need time for the pear enzymes to tenderize.',
        moveOnWhen: 'Ribs have marinated for at least 4 hours.',
        quickInstructions: 'Submerge cleaned ribs in marinade; refrigerate covered for 4-12 hours.'
      },
      {
        step: 2,
        title: 'PREHEAT GRILL OR CAST-IRON TO HIGH HEAT',
        whatYouNeed: ['Grill or heavy cast-iron grill pan', 'Tongs', 'Oil brush'],
        description: 'Preheat your grill or cast-iron grill pan over high heat until smoking hot (220°C / 425°F). Lightly oil the grill grates with a rolled paper towel dipped in oil. The pan must be searing hot to caramelize the sugary glaze before the thin meat overcooks.',
        howToDoIt: 'High heat creates instant Maillard browning and charring while rendering the rich short rib fat.',
        heat: 'High Heat (220°C / 425°F)',
        duration: 5,
        visualCues: 'Grill grates are smoking lightly; oil burns off instantly.',
        smell: 'Hot clean grill grates.',
        textureCheck: 'Smoking hot.',
        whatShouldThisLookLike: 'Blazing hot grill ready for meat.',
        tip: 'Shake off excess dripping marinade before laying meat on the grill to prevent excessive flare-ups.',
        commonMistake: 'Grilling on medium heat — ribs will simmer in their own juices and turn gray and tough.',
        moveOnWhen: 'Grill is smoking hot.',
        quickInstructions: 'Preheat grill or cast-iron pan over high heat until smoking hot; oil grates.'
      },
      {
        step: 3,
        title: 'SEAR FIRST SIDE UNTIL CHARRED (3 MINUTES)',
        whatYouNeed: ['Marinated ribs', 'Tongs'],
        description: 'Lay rib strips on the hot grill in a single layer without overlapping. Sear undisturbed for 3 minutes. Rendered fat will drip and cause small licking flames that kiss the meat with authentic barbecue smoke. Look for edges curling and deep caramelized charring around the bones.',
        howToDoIt: 'Sugars in the pear and honey caramelize rapidly into a lacquered, dark brown crust.',
        heat: 'High Heat',
        duration: 3,
        visualCues: 'Deep amber-mahogany crust with dark charred grill marks on the underside; meat juices bubble to top surface.',
        hear: 'Loud, crackling, energetic sizzling.',
        smell: 'Incredible aroma of caramelized sweet soy sauce and smoky roasted beef fat.',
        textureCheck: 'Bottom crust is crisp and lacquered.',
        whatShouldThisLookLike: 'Ribs sizzling vigorously with caramelized charred grill marks.',
        tip: 'If flames flare up excessively, nudge the ribs slightly to a secondary zone so they don\'t turn into black soot.',
        commonMistake: 'Flipping every 30 seconds — let the meat sit undisturbed for 3 minutes to build a crust.',
        moveOnWhen: 'Underside is deeply caramelized with charred grill marks.',
        quickInstructions: 'Sear ribs over high heat undisturbed for 3 mins until charred and caramelized.'
      },
      {
        step: 4,
        title: 'FLIP & SEAR SECOND SIDE (2 TO 3 MINUTES)',
        whatYouNeed: ['Tongs'],
        description: 'Flip ribs using tongs. Sear the second side for 2 to 3 minutes until equally browned, caramelized, and cooked through to medium doneness (approx 65°C / 150°F). Transfer to a cutting board.',
        howToDoIt: 'Thin short ribs cook rapidly; 5 to 6 minutes total cooking time yields succulent, juicy meat with melting fat.',
        heat: 'High Heat',
        duration: 3,
        visualCues: 'Both sides are lacquered in glistening mahogany glaze with blistered charred edges.',
        textureCheck: 'Meat is springy and succulent; bone marrow sizzles.',
        whatShouldThisLookLike: 'Gloriously charred, glistening LA Galbi ribs.',
        tip: 'Do not overcook beyond medium — short ribs will begin to dry out.',
        commonMistake: 'Leaving them on the grill for 10 minutes — thin ribs will turn into leathery jerky.',
        moveOnWhen: 'Both sides are charred and cooked through.',
        quickInstructions: 'Flip ribs, sear 2-3 mins until second side is caramelized; transfer to cutting board.'
      },
      {
        step: 5,
        title: 'REST, SNIP INTO BONE SEGMENTS & SERVE',
        whatYouNeed: ['Kitchen shears', 'Serving platter', 'Scallion rings', 'Toasted sesame seeds'],
        description: 'Rest ribs for 3 minutes so juices settle. Using kitchen shears, snip each long strip between the bones into individual pieces containing one oval bone each. Mound the hot ribs on a platter, shower with sliced scallions and toasted sesame seeds, and serve hot.',
        howToDoIt: 'Cutting into individual single-bone segments makes them easy to pick up with fingers or chopsticks to nibble the delicious meat cleanly off the bone.',
        heat: 'Off Heat',
        duration: 3,
        visualCues: 'Steaming, glistening single-bone rib nuggets crowned with green scallions and sesame seeds.',
        smell: 'Intense sweet smoky barbecue aroma.',
        textureCheck: 'Tender meat that pulls easily from the bone with toothsome chew.',
        whatShouldThisLookLike: 'Festive platter of Korean BBQ LA Galbi.',
        tip: 'The meat directly clinging to the bone cartilage ("Gol-mak") is the sweetest, most flavorful bite!',
        commonMistake: 'Serving long uncut strips without shears, making them clumsy to eat at the table.',
        moveOnWhen: 'Snipped, garnished, and served.',
        quickInstructions: 'Rest 3 mins, snip between bones into individual pieces, garnish with scallions and sesame.'
      }
    ],
    commonMistakes: [
      { mistake: 'Ribs were gritty with bone dust.', remedy: 'Ribs weren\'t rinsed after butchering. Always wash bone dust off under cold running water before marinating.' },
      { mistake: 'Meat was tough and chewy.', remedy: 'Under-marinated or overcooked. Marinate for at least 4 hours with grated pear and cook over high heat for only 5-6 mins total.' }
    ],
    troubleshooting: [
      {
        problem: 'Marinade burned black before meat cooked through',
        whatHappened: 'Sugars burned on an excessively hot flare-up.',
        whyItHappened: 'Dripping marinade caught fire.',
        whatToDoNow: 'Move ribs to a slightly cooler indirect zone of the grill to finish cooking.',
        howToPrevent: 'Shake off excess wet marinade before laying ribs on the grates.'
      }
    ],
    substitutions: [
      { original: 'Flanken-cut short ribs', substitute: 'Traditional English-cut short ribs butterflied into long ribbons (Wang-galbi) or pork spare ribs', notes: 'Wang-galbi is the traditional royal court diamond-scored whole rib cut.' }
    ],
    safetyNotes: [
      'Beef short ribs should reach minimum 65°C (150°F) internal temperature.'
    ],
    servingGuide: {
      restingTime: 'Rest 3 minutes before snipping.',
      garnishing: 'Sliced scallion rings and toasted white sesame seeds.',
      plating: 'Heaped on a warm ceramic or sizzler platter.',
      temperature: 'Piping hot and juicy.',
      accompaniments: 'Steamed white rice, spicy scallion salad (Pa-muchim), red leaf lettuce, and cold lager.'
    }
  },

  // 8. KOREAN FRIED CHICKEN (Yangnyeom Chikin)
  {
    id: 'korean-fried-chicken',
    name: 'Extra-Crispy Korean Fried Chicken (Yangnyeom Chikin)',
    cuisine: 'Korean',
    region: 'South Korea (Seoul / Daegu)',
    servings: 4,
    prepTime: 25,
    cookTime: 20,
    difficulty: 'Medium',
    overview: {
      summary: 'The undisputed gold standard of fried poultry: chicken wings and drumettes seasoned with ginger and garlic, dredged in pure potato starch, and double-fried in hot oil to create an impossibly thin, glass-brittle, shatteringly crisp crust that stays crunchy for hours, tossed in a sticky, sweet, fiery garlic-gochujang glaze (Yangnyeom sauce) and showered with crushed roasted peanuts.',
      appearance: 'Glistening, ruby-glazed chicken pieces with an iridescent sticky sheen, studded with crushed golden peanuts and green scallion rings.',
      texture: 'The miracle of Korean double-frying: an ultra-thin, shatteringly crisp, paper-like crunch ("Kkasak") that never turns soggy under sauce, enclosing steaming, succulent juicy chicken.',
      flavor: 'Explosive sweet-and-spicy rush: rich savory umami, sweet honey and brown sugar, punchy garlic, and warming gochujang heat.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Heavy Dutch oven or deep wok for deep frying', purpose: 'Holds steady oil temperature for two distinct frying stages.' },
      { name: 'Deep-fry / candy thermometer', purpose: 'Critical for monitoring 175°C (first fry) and 190°C (second fry).' },
      { name: 'Wire spider skimmer and large wire cooling rack', purpose: 'Allows chicken to drain and aerate between frying stages.' }
    ],
    beforeYouStart: [
      { task: 'Cut 1kg chicken wings into drumettes and flats; pat 100% bone-dry with paper towels.', durationMinutes: 5 },
      { task: 'Toss chicken with 1 tbsp Shaoxing wine, 1 tbsp grated ginger, 1 tsp salt, and 1/2 tsp black pepper; rest 15 minutes.', durationMinutes: 15 },
      { task: 'Simmer Yangnyeom glaze: 3 tbsp gochujang, 3 tbsp ketchup, 3 tbsp honey, 2 tbsp brown sugar, 1 tbsp soy sauce, 1 tbsp minced garlic, and 1 tsp sesame oil for 3 minutes until glossy.', durationMinutes: 5 },
      { task: 'Measure 150g potato starch (or cornstarch) in a wide shallow bowl.', durationMinutes: 2 }
    ],
    ingredientPrepGuide: [
      { item: 'Potato Starch Dredging (Gamja-jeonbun)', technique: 'Do NOT use wheat flour! Korean fried chicken achieves its legendary paper-thin, glass-brittle crust by using 100% potato starch. Potato starch forms a delicate crystalline matrix that repels oil and stays shatteringly crisp even when tossed in sticky sauce.' },
      { item: 'The Double-Fry Secret (Du-beon-twi-gim)', technique: 'Fry 1 (175°C for 8 mins) cooks the chicken through and sets the starch crust. Rest 5 minutes on wire rack so internal steam migrates to the skin. Fry 2 (190°C for 2 mins) flash-fries that migrated surface moisture, rendering the skin glass-brittle and golden.' }
    ],
    essentialIngredients: [
      { name: 'Chicken wings (drumettes and flats)', prep: 'patted bone-dry', amount: '1000g', metric: '1000g', imperial: '2.2 lbs', common: '1kg' },
      { name: 'Potato starch (Gamja-jeonbun) or cornstarch', prep: 'pure starch for dredging', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '1.25 cups' },
      { name: 'Fresh ginger', prep: 'finely grated for chicken seasoning', amount: '1 tbsp', metric: '15g', imperial: '0.5 oz', common: '1 tbsp' },
      { name: 'Rice wine or dry sake', prep: 'eliminates gamey poultry odors', amount: '1 tbsp', metric: '15ml', imperial: '0.5 fl oz', common: '1 tbsp' },
      { name: 'Gochujang (Korean chili paste)', prep: 'sauce backbone', amount: '3 tbsp', metric: '60g', imperial: '2.1 oz', common: '3 tbsp' },
      { name: 'Tomato ketchup', prep: 'provides authentic street-cart tanginess', amount: '3 tbsp', metric: '45g', imperial: '1.6 oz', common: '3 tbsp' },
      { name: 'Honey or Korean corn syrup (Mulyeot)', prep: 'for mirror-like glaze', amount: '3 tbsp', metric: '60ml', imperial: '2 fl oz', common: '3 tbsp' },
      { name: 'Brown sugar', prep: 'deep sweetness', amount: '2 tbsp', metric: '30g', imperial: '1 oz', common: '2 tbsp' },
      { name: 'Korean soy sauce (Jinganjang)', prep: 'savory balance', amount: '1 tbsp', metric: '15ml', imperial: '0.5 fl oz', common: '1 tbsp' },
      { name: 'Fresh garlic cloves', prep: 'finely minced for glaze', amount: '2 tbsp', metric: '20g', imperial: '0.7 oz', common: '5 cloves' },
      { name: 'Roasted unsalted peanuts', prep: 'roughly crushed for topping', amount: '40g', metric: '40g', imperial: '1.4 oz', common: '1/3 cup' },
      { name: 'Neutral frying oil (canola or peanut)', prep: 'for deep-frying', amount: '1.2 liters', metric: '1200ml', imperial: '40 fl oz', common: '5 cups' }
    ],
    steps: [
      {
        step: 1,
        title: 'DREDGE CHICKEN IN POTATO STARCH',
        whatYouNeed: ['Seasoned dry chicken wings', '150g potato starch', 'Wide shallow bowl'],
        description: 'Dredge each piece of seasoned chicken in potato starch, pressing the starch firmly into all crevices and skin folds. Shake off excess loose starch so only a thin, chalky, even veil coats the meat. Lay on a wire rack and rest 5 minutes.',
        howToDoIt: 'Resting allows the natural poultry moisture to hydrate the starch slightly, ensuring the coating bonds tightly to the skin and won\'t flake off in hot oil.',
        heat: 'No Heat',
        duration: 8,
        visualCues: 'Chicken is evenly coated in a thin chalky white powder with no bare spots or heavy clumps.',
        textureCheck: 'Dry, powdery coating.',
        whatShouldThisLookLike: 'Evenly dusted chicken wings resting on a wire rack.',
        tip: 'Never make a thick wet batter — pure dry potato starch is the secret to paper-thin crunch.',
        commonMistake: 'Leaving thick wet clumps of starch, which fry into gummy, chalky rocks.',
        moveOnWhen: 'All chicken pieces are dredged and rested.',
        quickInstructions: 'Dredge chicken wings in potato starch, shake excess, rest 5 mins.'
      },
      {
        step: 2,
        title: 'FIRST FRY: COOK CHICKEN THROUGH (175°C / 350°F)',
        whatYouNeed: ['Dutch oven with 1.2L oil', 'Thermometer', 'Chicken wings', 'Spider skimmer'],
        description: 'Heat oil to 175°C (350°F). Slide half the chicken pieces into the hot oil. Fry for 8 to 9 minutes, turning occasionally with the spider skimmer, until the chicken is cooked through and the coating is pale blond and crisp. Remove with spider and drain on a wire rack for 5 minutes. Repeat with second batch.',
        howToDoIt: 'The first fry cooks the meat to 75°C internally and sets the starch into a crisp shell. The 5-minute rest allows internal steam to migrate out to the crust.',
        heat: 'Medium-High Heat (maintain 175°C / 350°F)',
        duration: 10,
        visualCues: 'Coating turns pale golden-blond; bubbling slows down as moisture leaves the chicken.',
        hear: 'Steady, energetic frying sizzle.',
        smell: 'Clean fried chicken aroma.',
        textureCheck: 'Crisp but pale crust; meat is fully cooked.',
        whatShouldThisLookLike: 'Pale golden, par-fried chicken wings resting on wire rack.',
        tip: 'Check oil temperature before adding the second batch to make sure it has returned to 175°C.',
        commonMistake: 'Frying everything in one giant batch — drops oil temperature to 140°C, causing greasy chicken.',
        moveOnWhen: 'All chicken is par-fried and rested on wire rack for 5 minutes.',
        quickInstructions: 'Fry chicken in batches at 175°C for 8-9 mins until pale blond; rest on wire rack 5 mins.'
      },
      {
        step: 3,
        title: 'SECOND FRY: FLASH-CRISP TO GLASS BRITTLE (190°C / 375°F)',
        whatYouNeed: ['Oil brought to 190°C (375°F)', 'Rested par-fried chicken', 'Spider skimmer'],
        description: 'Crank heat to bring oil up to 190°C (375°F). Drop half the rested chicken back into the scorching oil. Fry for just 2 to 3 minutes, stirring constantly. The crust will instantly blister, darken to deep golden-amber, and turn glass-brittle. Lift with spider, shake vigorously over the pot, and transfer to wire rack. Repeat with second batch.',
        howToDoIt: 'High heat (190°C) flash-vaporizes the moisture that migrated to the skin during the rest, rendering the potato starch crust permanently rigid and shatteringly crisp.',
        heat: 'High Heat (190°C / 375°F)',
        duration: 4,
        visualCues: 'Color darkens to deep golden-amber; tiny crisp blisters cover the crust; chicken feels light and hollow.',
        hear: 'Crackling, loud, sharp frying sounds.',
        textureCheck: 'Tapping chicken with metal tongs sounds like tapping hard glass.',
        whatShouldThisLookLike: 'Golden-amber, shatteringly crisp, blistered fried chicken.',
        tip: 'Shake the spider skimmer vigorously when lifting chicken to cast off all clinging surface oil.',
        commonMistake: 'Skipping the second fry — single-fried chicken turns soggy within 5 minutes under sauce.',
        moveOnWhen: 'All chicken is double-fried, golden-amber, and crackling crisp.',
        quickInstructions: 'Flash-fry rested chicken at 190°C for 2-3 mins until deep golden-amber and glass-crisp.'
      },
      {
        step: 4,
        title: 'WARM YANGNYEOM GLAZE IN WIDE PAN',
        whatYouNeed: ['Wide skillet or wok', 'Pre-mixed sauce (gochujang, ketchup, honey, sugar, soy, garlic)'],
        description: 'While the second batch fries, pour the Yangnyeom sauce into a wide skillet over medium heat. Bring to a rapid bubble for 60 seconds until it turns into a glossy, sticky, bubbling red lacquer. TURN OFF HEAT.',
        howToDoIt: 'Warming the glaze liquefies the honey and sugars so it coats the chicken in an ultra-thin veil without clumping.',
        heat: 'Medium Heat for 1 min, then OFF',
        duration: 1,
        visualCues: 'Sauce bubbles rapidly and transforms into a glistening, mirror-like red glaze.',
        smell: 'Intoxicating sweet-spicy chili, garlic, and honey aroma.',
        textureCheck: 'Sticky, syrupy glaze.',
        whatShouldThisLookLike: 'Bubbling red Yangnyeom glaze coating the bottom of the pan.',
        tip: 'Always turn off heat before adding chicken — boiling the chicken in sauce will soften the crispy crust.',
        commonMistake: 'Pouring cold sauce over hot chicken, which shocks the crust soggy.',
        moveOnWhen: 'Sauce is bubbling, glossy, and off heat.',
        quickInstructions: 'Bubble sauce in wide pan 60s until glossy; turn off heat.'
      },
      {
        step: 5,
        title: 'THE QUICK TOSS, PEANUTS & SERVE (CHIMAEC)',
        whatYouNeed: ['Double-fried hot chicken', 'Warm glaze in pan', 'Crushed peanuts', 'Tongs'],
        description: 'Immediately dump the piping hot, double-fried chicken wings into the warm glaze. Toss and roll vigorously with tongs for 30 seconds until every wing is coated in a thin, translucent, sticky red sheen. Scatter crushed peanuts over the top. Transfer immediately to a serving platter.',
        howToDoIt: 'A 30-second rapid toss coats the chicken in a micro-thin glaze while keeping the potato starch crust 100% shatteringly crisp.',
        heat: 'Off Heat',
        duration: 1,
        visualCues: 'Ruby-red glistening chicken wings studded with golden crushed peanuts and sesame seeds.',
        smell: 'Sweet-spicy chili, roasted peanuts, and garlic.',
        textureCheck: 'Loud, audible glass-shattering crunch when bitten, followed by juicy chicken.',
        whatShouldThisLookLike: 'Authentic Seoul-style Yangnyeom Chikin.',
        tip: 'Serve with cold pickled Korean radish (Chikin-mu) — the sweet-sour cubes cleanse the palate between fiery bites!',
        commonMistake: 'Letting chicken sit submerged in sauce for minutes — toss quickly and plate immediately.',
        moveOnWhen: 'Coated, garnished, and plated.',
        quickInstructions: 'Toss hot chicken in warm glaze for 30s off heat, shower with peanuts, serve immediately.'
      }
    ],
    commonMistakes: [
      { mistake: 'Chicken turned soggy after adding sauce.', remedy: 'Chicken was only fried once, or wheat flour was used. Always double-fry with 100% potato starch.' },
      { mistake: 'Crust fell off in the oil.', remedy: 'Chicken was wet before starching, or wasn\'t rested. Pat chicken dry and rest 5 minutes after starching.' }
    ],
    troubleshooting: [
      {
        problem: 'Chicken burned dark before interior cooked',
        whatHappened: 'Oil temperature was too high (above 190°C during the first fry).',
        whyItHappened: 'Starch browned before heat reached the bone.',
        whatToDoNow: 'Lower heat to 160°C and finish cooking in the oven at 180°C for 5 minutes.',
        howToPrevent: 'Use a thermometer and keep first fry strictly at 175°C (350°F).'
      }
    ],
    substitutions: [
      { original: 'Potato starch (Gamja-jeonbun)', substitute: 'Cornstarch (100%)', notes: 'Cornstarch produces an exceptionally crispy, glassy crust nearly identical to potato starch.' },
      { original: 'Yangnyeom sweet-spicy glaze', substitute: 'Garlic soy glaze (soy sauce, brown sugar, garlic, ginger simmered with butter)', notes: 'Soy-Garlic (Ganjang) is Korea\'s other globally iconic fried chicken style.' }
    ],
    safetyNotes: [
      'Chicken must reach an internal temperature of 74°C (165°F).'
    ],
    servingGuide: {
      restingTime: 'Serve immediately.',
      garnishing: 'Crushed roasted peanuts and sliced scallion greens.',
      plating: 'Piled high on a paper-lined wire basket or ceramic platter.',
      temperature: 'Piping hot and crackling.',
      accompaniments: 'Pickled sweet-sour radish cubes (Chikin-mu) and ice-cold draft beer ("Chimaek").'
    }
  },

  // 9. KIMCHI JJIGAE (Aged Kimchi Stew)
  {
    id: 'kimchi-jjigae',
    name: 'Homestyle Aged Kimchi Stew (Kimchi-jjigae)',
    cuisine: 'Korean',
    region: 'South Korea (National)',
    servings: 4,
    prepTime: 15,
    cookTime: 30,
    difficulty: 'Easy',
    overview: {
      summary: 'The soulful cornerstone of Korean home cooking: sour, well-fermented aged Napa cabbage kimchi (Sin-kimchi) stir-fried in sesame oil with pork belly chunks until sweet and caramelized, then simmered in rich anchovy-kelp stock with gochugaru, garlic, and scallions, finished with thick slabs of silken tofu that soak up the deep crimson, intensely savory broth.',
      appearance: 'A bubbling, earthenware pot (Ttukbaegi) filled with rich crimson broth, translucent tender kimchi cabbage, pork chunks, and pure white rectangular slabs of tofu.',
      texture: 'Meltingly tender, velvety stewed cabbage, rich succulent pork belly, custardy soft tofu, and deeply comforting broth.',
      flavor: 'Deep, mouthwatering lactic tanginess from aged kimchi balanced by sweet pork fat, spicy chili warmth, and savory anchovy umami.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Ttukbaegi (Korean earthenware pot) or heavy Dutch oven (3–4 qt)', purpose: 'Holds heat and simmers the thick stew with gentle, even convection.' },
      { name: 'Wooden spoon', purpose: 'For stir-frying kimchi and pork before adding broth.' }
    ],
    beforeYouStart: [
      { task: 'Cut 350g well-aged, sour kimchi into 4cm bite-sized pieces; measure 1/2 cup of the fermented kimchi brine.', durationMinutes: 5 },
      { task: 'Cut 200g pork belly (or pork shoulder) into 2.5cm bite-sized chunks.', durationMinutes: 3 },
      { task: 'Cut 300g medium-firm tofu into 1cm thick rectangular slabs.', durationMinutes: 2 },
      { task: 'Simmer 6 dried anchovies and 1 piece kombu in 700ml water for 15 minutes; strain broth.', durationMinutes: 15 }
    ],
    ingredientPrepGuide: [
      { item: 'Kimchi Selection (Sin-Kimchi)', technique: 'Must use fully fermented, sour, aged kimchi (Sin-kimchi) that has fermented for at least 3 to 4 weeks. Freshly made kimchi lacks the deep lactic acidity and complex umami needed to flavor the broth; fresh kimchi will produce a bland, watery soup.' },
      { item: 'Stir-Frying Before Simmering (Bokkeum)', technique: 'Always stir-fry the chopped kimchi and pork belly in sesame oil for 5 minutes before adding broth. Sautéing caramelizes the sugars in the kimchi and renders pork fat, eliminating harsh raw sourness and creating a rich, velvety stew.' }
    ],
    essentialIngredients: [
      { name: 'Aged, sour Napa cabbage kimchi (Sin-kimchi)', prep: 'cut into 4cm pieces', amount: '350g', metric: '350g', imperial: '12 oz', common: '2.5 cups' },
      { name: 'Aged kimchi juice (brine from jar)', prep: 'strained', amount: '120ml', metric: '120ml', imperial: '4 fl oz', common: '1/2 cup' },
      { name: 'Pork belly or pork shoulder', prep: 'cut into 2.5cm bite-sized chunks', amount: '200g', metric: '200g', imperial: '7 oz', common: '200g' },
      { name: 'Medium-firm or firm silken tofu', prep: 'cut into 1cm thick rectangles', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '1/2 block' },
      { name: 'Anchovy-kelp broth (or beef bone broth)', prep: 'rich stock', amount: '600ml', metric: '600ml', imperial: '20 fl oz', common: '2.5 cups' },
      { name: 'Gochugaru (Korean chili flakes)', prep: 'for bright red color & heat', amount: '1.5 tbsp', metric: '15g', imperial: '0.5 oz', common: '1.5 tbsp' },
      { name: 'Doenjang (fermented soybean paste)', prep: 'secret umami depth', amount: '1 tsp', metric: '6g', imperial: '0.2 oz', common: '1 tsp' },
      { name: 'Korean soup soy sauce (Guk-ganjang)', prep: 'for seasoning', amount: '1 tbsp', metric: '15ml', imperial: '0.5 fl oz', common: '1 tbsp' },
      { name: 'Fresh garlic cloves', prep: 'finely minced', amount: '1.5 tbsp', metric: '15g', imperial: '0.5 oz', common: '4 cloves' },
      { name: 'Granulated sugar', prep: 'rounds out harsh lactic acid', amount: '1 tsp', metric: '4g', imperial: '0.15 oz', common: '1 tsp' },
      { name: 'Toasted sesame oil', prep: 'for sautéing', amount: '1 tbsp', metric: '15ml', imperial: '0.5 fl oz', common: '1 tbsp' },
      { name: 'Scallions / Green onions', prep: 'thickly sliced diagonally', amount: '2 stalks', metric: '40g', imperial: '1.4 oz', common: '1/2 cup' }
    ],
    steps: [
      {
        step: 1,
        title: 'STIR-FRY KIMCHI & PORK IN SESAME OIL',
        whatYouNeed: ['Earthenware pot or Dutch oven', '1 tbsp sesame oil', 'Chopped aged kimchi', 'Pork belly chunks', 'Minced garlic'],
        description: 'Heat 1 tbsp sesame oil in the pot over medium heat. Add pork belly chunks and stir-fry for 3 minutes until pork turns opaque and begins rendering fat. Add chopped aged kimchi and minced garlic. Sauté for 5 minutes, stirring frequently, until the kimchi turns translucent and soft.',
        howToDoIt: 'Cooking kimchi in rendered pork fat mellows its sharp raw sourness and infuses the cabbage with rich pork savoriness.',
        heat: 'Medium Heat',
        duration: 8,
        visualCues: 'Pork fat renders clear; cabbage turns glassy, translucent, and glossy amber-red.',
        hear: 'Steady, bubbling sizzle.',
        smell: 'Deep, mouthwatering aroma of caramelized kimchi and roasting pork.',
        textureCheck: 'Cabbage softens noticeably.',
        whatShouldThisLookLike: 'Translucent, glossy kimchi cooked with pork in the pot.',
        tip: 'If kimchi is extremely sour, add 1 tsp sugar during this sautéing step to balance the acid.',
        commonMistake: 'Dumping raw kimchi, pork, and broth in all at once — the stew will taste thin and sour rather than rich and savory.',
        moveOnWhen: 'Kimchi is translucent and pork is lightly browned.',
        quickInstructions: 'Sauté pork belly in sesame oil 3 mins; add kimchi and garlic, sauté 5 mins until translucent.'
      },
      {
        step: 2,
        title: 'ADD BROTH, KIMCHI JUICE & AROMATICS',
        whatYouNeed: ['600ml anchovy broth', '120ml kimchi juice', '1.5 tbsp gochugaru', '1 tsp doenjang', '1 tbsp soup soy sauce', '1 tsp sugar'],
        description: 'Pour in 600ml anchovy broth and 120ml strained kimchi juice. Stir in gochugaru, doenjang, soup soy sauce, and sugar. Bring to a rolling boil over medium-high heat. Skim any excess gray froth from the surface with a small spoon.',
        howToDoIt: 'Adding doenjang (fermented bean paste) is the classic grandma secret: it deepens the broth with rich earthy umami that rounds out the sharp chili.',
        heat: 'Medium-High Heat to boil',
        duration: 4,
        visualCues: 'Broth turns a rich, opaque, fiery crimson red and bubbles vigorously.',
        smell: 'Intensely savory, spicy, and tangy stew aroma.',
        textureCheck: 'Rich bubbling broth.',
        whatShouldThisLookLike: 'Crimson stew boiling vigorously in the earthenware pot.',
        tip: 'Always include the strained kimchi juice — it contains concentrated lactic acid and seasoning.',
        commonMistake: 'Discarding the kimchi juice from the jar — that is the liquid gold of kimchi-jjigae!',
        moveOnWhen: 'Stew is boiling and skimmed of foam.',
        quickInstructions: 'Add broth, kimchi juice, gochugaru, doenjang, soy sauce, and sugar; bring to a boil and skim foam.'
      },
      {
        step: 3,
        title: 'LOW SIMMER TO MELT CABBAGE (20 MINUTES)',
        whatYouNeed: ['Pot lid'],
        description: 'Reduce heat to low. Cover pot with lid slightly ajar. Simmer gently for 20 minutes. As it simmers, the pork belly tenderizes and the kimchi fibers soften into a melting, velvet texture.',
        howToDoIt: 'Slow simmering allows the pork fat and collagen to emulsify with the acidic broth, transforming watery soup into a rich, full-bodied stew.',
        heat: 'Low Simmer',
        duration: 20,
        visualCues: 'Broth deepens to dark brick red; oil droplets form a glistening sheen on the surface; cabbage is completely limp and tender.',
        hear: 'Gentle, muffled bubbling beneath the lid.',
        smell: 'Warm, deeply comforting homestyle Korean stew aroma.',
        textureCheck: 'Cabbage melts in the mouth with zero fibrous crunch.',
        whatShouldThisLookLike: 'A rich, deeply simmered, velvety stew.',
        tip: 'The longer it simmers, the richer it tastes — Kimchi Jjigae always tastes even better the second day!',
        commonMistake: 'Rushing with a 5-minute boil — cabbage will stay tough and crunchy like raw salad.',
        moveOnWhen: 'Cabbage is meltingly soft after 20 minutes of simmering.',
        quickInstructions: 'Cover lid ajar, simmer on low for 20 mins until cabbage is meltingly tender.'
      },
      {
        step: 4,
        title: 'ADD TOFU & SCALLIONS (FINAL 5 MINUTES)',
        whatYouNeed: ['Tofu slabs', 'Sliced scallions'],
        description: 'Arrange tofu slabs across the surface of the stew. Scatter sliced scallions on top. Spoon hot broth over the tofu. Simmer uncovered for 5 more minutes over medium-low heat until tofu is heated through and absorbs the crimson broth.',
        howToDoIt: 'Adding tofu at the end prevents the delicate slabs from breaking apart during the long simmer.',
        heat: 'Medium-Low Heat',
        duration: 5,
        visualCues: 'White tofu slabs nestled in crimson broth; green scallions wilted slightly.',
        textureCheck: 'Tofu is piping hot, custardy, and soft.',
        whatShouldThisLookLike: 'A bubbling, picture-perfect pot of Korean Kimchi Jjigae.',
        tip: 'Press tofu lightly with spoon so it submerges into the bubbling red broth.',
        commonMistake: 'Stirring aggressively with a spoon after adding tofu, which smashes the slabs into mush.',
        moveOnWhen: 'Tofu is piping hot and infused.',
        quickInstructions: 'Lay tofu slabs and scallions on top; simmer uncovered 5 mins until tofu is hot.'
      },
      {
        step: 5,
        title: 'SERVE BUBBLING AT THE TABLE',
        whatYouNeed: ['Wooden base or trivet for pot', 'Individual rice bowls'],
        description: 'Carefully carry the bubbling earthenware pot directly to the table on its wooden base. Serve piping hot with bowls of steamed white rice and side dishes (banchan).',
        howToDoIt: 'The earthenware pot retains heat so the stew continues bubbling at the dining table.',
        heat: 'Off Heat (Earthenware retains heat)',
        duration: 1,
        visualCues: 'Stew bubbles actively at the table, releasing fragrant plumes of steam.',
        smell: 'Hearty, comforting, spicy, and tangy.',
        textureCheck: 'Custardy tofu, tender pork, melt-in-mouth kimchi.',
        whatShouldThisLookLike: 'Classic bubbling Korean comfort stew.',
        tip: 'Spoon a big ladle of stew, pork, and tofu directly over your bowl of white rice, mix lightly, and eat with a spoon.',
        commonMistake: 'Serving in cold porcelain bowls, which cools down the rich pork fat.',
        moveOnWhen: 'Served bubbling at the table.',
        quickInstructions: 'Place bubbling pot on trivet at table; serve hot over steamed white rice.'
      }
    ],
    commonMistakes: [
      { mistake: 'Stew tasted flat, watery, and bland.', remedy: 'Fresh kimchi was used. Always use well-aged, sour kimchi that has fermented for at least 3 weeks.' },
      { mistake: 'Stew tasted overwhelmingly sour.', remedy: 'Kimchi was extremely aged. Add 1 to 2 tsp sugar and a touch more doenjang to neutralize the excess acid.' }
    ],
    troubleshooting: [
      {
        problem: 'Broth reduced too much and became overly salty',
        whatHappened: 'Simmered too aggressively uncovered.',
        whyItHappened: 'Excess evaporation.',
        whatToDoNow: 'Stir in 1/2 cup of unsalted anchovy broth or water; simmer 2 minutes.',
        howToPrevent: 'Keep lid on and flame low during the 20-minute simmer.'
      }
    ],
    substitutions: [
      { original: 'Pork belly', substitute: 'Canned tuna (Chamchi-kimchi-jjigae) or canned mackerel', notes: 'Tuna Kimchi Jjigae is Korea\'s second most popular variation, loved for its clean, rich seafood flavor.' },
      { original: 'Anchovy broth', substitute: 'Dashi broth or light chicken broth', notes: 'Chicken broth provides a hearty, savory base.' }
    ],
    safetyNotes: [
      'Pork must be cooked thoroughly; take care with the scorching earthenware pot.'
    ],
    servingGuide: {
      restingTime: 'Serve immediately bubbling hot.',
      garnishing: 'Sliced scallions and a pinch of gochugaru.',
      plating: 'Serve directly in the bubbling black earthenware pot (Ttukbaegi) on table.',
      temperature: 'Scorching hot.',
      accompaniments: 'Steamed white rice, roasted seasoned seaweed sheets (Gim), and rolled omelette (Gyeran-mari).'
    }
  },

  // 10. SUNDUBU JJIGAE (Spicy Soft Tofu Stew)
  {
    id: 'sundubu-jjigae',
    name: 'Spicy Korean Soft Tofu Stew (Sundubu-jjigae)',
    cuisine: 'Korean',
    region: 'South Korea (Gangneung / Seoul)',
    servings: 4,
    prepTime: 15,
    cookTime: 15,
    difficulty: 'Easy',
    overview: {
      summary: 'The ultimate comforting Korean stew: pillow-soft, cloud-like unpressed curd tofu (Sundubu) and fresh clams simmered in an explosive, fiery, crimson broth infused with a quick-made chili-garlic-pork paste (Sundubu Dadeegi), topped with fresh scallions and a raw egg cracked directly into the bubbling cauldron tableside, which poached into silky, velvety richness.',
      appearance: 'A violently bubbling black earthenware cauldron with brilliant orange-red chili oil floating on top, revealing white clouds of soft silken tofu, open clamshells, and a glistening golden raw egg yolk.',
      texture: 'Pillowy, custardy soft tofu that melts instantly on the tongue like savory pudding, paired with sweet chewy clams and velvety egg yolk.',
      flavor: 'Bracing chili heat, fragrant garlicky sesame oil, sweet ocean brine from fresh clams, and rich soothing tofu curd.',
      restingTimeMinutes: 1
    },
    equipment: [
      { name: 'Ttukbaegi (Korean earthenware pot) or small heavy Dutch oven (2 qt)', purpose: 'Essential for retaining ferocious heat to poach the raw egg tableside.' },
      { name: 'Wooden spoon', purpose: 'For making the chili seasoning paste directly in the pot.' }
    ],
    beforeYouStart: [
      { task: 'Soak 250g fresh Manila clams in salted cold water for 30 minutes in the dark to purge any sand; rinse clean.', durationMinutes: 30 },
      { task: 'Finely mince 100g pork belly or pork shoulder into 5mm tiny bits.', durationMinutes: 5 },
      { task: 'Cut 1 tube (350g) extra-soft silken curd tofu (Sundubu) in half.', durationMinutes: 1 },
      { task: 'Prepare 400ml rich anchovy-kelp dashi stock.', durationMinutes: 15 }
    ],
    ingredientPrepGuide: [
      { item: 'Sundubu Tofu Selection', technique: 'Must use extra-soft, unpressed curd tofu sold in plastic cylindrical tubes (labeled "Soon Tofu" or "Sundubu"). Regular firm or medium tofu has too much pressed structure; sundubu is pure silky curd with a delicate pudding-like texture.' },
      { item: 'Chili Oil Base (Dadeegi)', technique: 'Fry minced pork, garlic, scallion whites, and gochugaru in sesame oil over low heat for 2 minutes to create a fresh, concentrated chili paste ("Dadeegi") directly in the bottom of the pot. Frying extracts the red carotenoids into the oil before adding broth.' }
    ],
    essentialIngredients: [
      { name: 'Korean extra-soft silken curd tofu (Sundubu)', prep: 'in plastic tube, sliced into large curds', amount: '1 tube (350g)', metric: '350g', imperial: '12 oz', common: '1 tube' },
      { name: 'Fresh Manila clams or peeled shrimp', prep: 'purged of sand & scrubbed', amount: '250g', metric: '250g', imperial: '9 oz', common: '12 clams' },
      { name: 'Ground pork or finely minced pork belly', prep: 'for savory base', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '1/2 cup' },
      { name: 'Rich anchovy-kelp stock (or beef broth)', prep: 'hot liquid base', amount: '400ml', metric: '400ml', imperial: '13.5 fl oz', common: '1.75 cups' },
      { name: 'Gochugaru (Korean chili flakes)', prep: 'fine/coarse blend', amount: '2 tbsp', metric: '20g', imperial: '0.7 oz', common: '2 tbsp' },
      { name: 'Toasted sesame oil', prep: 'for frying chili base', amount: '1.5 tbsp', metric: '22ml', imperial: '0.75 fl oz', common: '1.5 tbsp' },
      { name: 'Korean soup soy sauce (Guk-ganjang) or fish sauce', prep: 'for seasoning', amount: '1 tbsp', metric: '15ml', imperial: '0.5 fl oz', common: '1 tbsp' },
      { name: 'Fresh garlic cloves', prep: 'finely minced', amount: '1 tbsp', metric: '15g', imperial: '0.5 oz', common: '3 cloves' },
      { name: 'Scallions / Green onions', prep: 'sliced; whites and greens separated', amount: '2 stalks', metric: '30g', imperial: '1 oz', common: '1/2 cup' },
      { name: 'Fresh large egg', prep: 'raw, cracked in at the table', amount: '1 egg', metric: '50g', imperial: '1.8 oz', common: '1 egg' }
    ],
    steps: [
      {
        step: 1,
        title: 'BUILD THE RED CHILI BASE (DADEEGI) IN THE POT',
        whatYouNeed: ['Ttukbaegi earthenware pot', '1.5 tbsp sesame oil', 'Minced pork', 'Scallion whites', 'Minced garlic', '2 tbsp gochugaru'],
        description: 'Heat 1.5 tbsp sesame oil in the earthenware pot over medium-low heat. Add minced pork, scallion whites, and minced garlic. Sauté for 2 minutes until pork is cooked. Turn heat to dead-low. Add 2 tbsp gochugaru and 1 tbsp soup soy sauce. Stir gently for 1 minute until the oil turns a glowing, deep scarlet-red.',
        howToDoIt: 'Cooking gochugaru over low heat in oil extracts the red chili pigment and creates fragrant chili oil without scorching the dry flakes.',
        heat: 'Medium-Low, then Dead-Low',
        duration: 4,
        visualCues: 'Oil turns brilliant glowing crimson; paste is intensely fragrant.',
        smell: 'Rich toasted chili oil, sweet garlic, and sesame.',
        textureCheck: 'Aromatic, sizzling red paste.',
        whatShouldThisLookLike: 'Crimson chili paste sizzling in bottom of earthenware pot.',
        tip: 'Never turn heat to high while frying gochugaru — chili flakes will scorch black and bitter in 15 seconds.',
        commonMistake: 'Adding gochugaru directly to water without frying in oil first — results in a muddy, dull soup without red chili oil.',
        moveOnWhen: 'Oil is glowing crimson and aromatic.',
        quickInstructions: 'Sauté pork, garlic, and scallion whites in sesame oil 2 mins; add gochugaru on low heat for 1 min.'
      },
      {
        step: 2,
        title: 'ADD BROTH, BRING TO BOIL & DROP CLAMS',
        whatYouNeed: ['400ml anchovy broth', 'Purged fresh clams'],
        description: 'Pour in 400ml hot anchovy broth. Bring to a rapid rolling boil over medium-high heat. Add the cleaned clams. Cook for 3 minutes until the clams pop open and release their sweet, briny ocean nectar into the fiery red broth.',
        howToDoIt: 'Clams open quickly in boiling broth, imparting rich natural sodium and seafood sweetness that balances the chili.',
        heat: 'Medium-High Heat',
        duration: 4,
        visualCues: 'Broth boils furiously in fiery orange-red rolling bubbles; clams pop open.',
        hear: 'Roaring, energetic boiling.',
        smell: 'Briny sweet ocean clams and spicy chili steam.',
        textureCheck: 'Clam shells fully opened.',
        whatShouldThisLookLike: 'Fiery crimson broth with open clams.',
        tip: 'Discard any clams that refuse to open after 4 minutes of boiling.',
        commonMistake: 'Using unpurged clams — sand will ruin the delicate silky tofu.',
        moveOnWhen: 'Clams are wide open.',
        quickInstructions: 'Add broth, bring to boil, add clams, cook 3 mins until shells pop open.'
      },
      {
        step: 3,
        title: 'SPOON IN SILKEN TOFU CURDS & SIMMER',
        whatYouNeed: ['1 tube silken curd tofu (Sundubu)', 'Large spoon'],
        description: 'Cut the tube of sundubu in half. Using a large spoon, scoop large, pillowy clouds of soft tofu curd directly into the bubbling broth (about 5–6 large spoonfuls). Do NOT mash or stir! Simmer gently for 4 minutes over medium heat, spooning hot red broth over the white tofu curds.',
        howToDoIt: 'Leaving the tofu in large, rustic billowy curds allows diners to scoop out warm custardy clouds that contrast with the spicy broth.',
        heat: 'Medium Heat',
        duration: 4,
        visualCues: 'Pristine white clouds of tofu bobbing in the fiery red broth; steam rises furiously.',
        smell: 'Delicate fresh soy milk aroma mingling with chili and seafood.',
        textureCheck: 'Tofu is piping hot, custardy, and delicate.',
        whatShouldThisLookLike: 'White clouds of soft curd tofu floating in bubbling crimson stew.',
        tip: 'Tofu releases water as it cooks, naturally seasoning and balancing the concentrated broth.',
        commonMistake: 'Whisking or stirring vigorously, turning the tofu into a broken scrambled soup.',
        moveOnWhen: 'Tofu is heated through (4 mins).',
        quickInstructions: 'Scoop large clouds of soft tofu into pot; simmer gently 4 mins without stirring.'
      },
      {
        step: 4,
        title: 'ADD SCALLION GREENS & THE RAW EGG FINISH',
        whatYouNeed: ['Scallion greens', '1 raw fresh egg', 'Wooden base'],
        description: 'Scatter sliced scallion greens across the top. TURN OFF HEAT. The pot will continue bubbling violently from the heat of the stone. Crack 1 fresh raw egg right into the center of the boiling stew. Immediately carry the pot on its wooden base to the dining table.',
        howToDoIt: 'The retained heat of the 200°C earthenware pot continues boiling at the table, softly poaching the raw egg white while keeping the yolk rich and runny.',
        heat: 'Off Heat (Earthenware continues violent boiling)',
        duration: 1,
        visualCues: 'Egg sits in center; egg white turns opaque white against the bubbling crimson oil; golden yolk quivers.',
        hear: 'Violent, commanding bubbling that continues for minutes.',
        smell: 'Pungent chili oil, fresh scallions, and rich egg.',
        textureCheck: 'Soft poached egg white, molten yolk.',
        whatShouldThisLookLike: 'The iconic bubbling Sundubu Jjigae with raw egg crowned in the center.',
        tip: 'Diners can choose to leave the yolk whole to poach soft, or pierce and stir it into the broth for a creamy, milder stew!',
        commonMistake: 'Cooking the egg on the stove until hard-boiled — half the joy is the tableside raw egg ritual.',
        moveOnWhen: 'Egg is cracked into bubbling pot and delivered to table.',
        quickInstructions: 'Scatter scallions, turn off heat, crack raw egg into center, serve bubbling immediately.'
      }
    ],
    commonMistakes: [
      { mistake: 'Tofu turned into mushy grains.', remedy: 'Firm tofu was used, or the stew was stirred violently. Use soft tube curd tofu and spoon gently in large rustic clouds.' },
      { mistake: 'Broth tasted gritty with sand.', remedy: 'Clams were not purged properly in salted water prior to cooking.' }
    ],
    troubleshooting: [
      {
        problem: 'Stew is boiling over the edges of the pot',
        whatHappened: 'Too much broth for the size of the earthenware pot.',
        whyItHappened: 'Tofu expands and releases liquid.',
        whatToDoNow: 'Ladle out 3 tablespoons of liquid into a bowl and lower flame.',
        howToPrevent: 'Fill pot no more than 75% full before adding tofu.'
      }
    ],
    substitutions: [
      { original: 'Manila clams', substitute: 'Peeled tiger prawns, bay scallops, or sliced beef brisket', notes: 'Beef Sundubu (Gogi-sundubu) is equally famous and deeply rich.' },
      { original: 'Tube Sundubu', substitute: 'Extra-soft silken tofu in a carton (gently scooped in chunks)', notes: 'Carton silken tofu provides a very good custardy texture.' }
    ],
    safetyNotes: [
      'The earthenware pot stays boiling hot; beware of bubbling oil splatters when placing egg.'
    ],
    servingGuide: {
      restingTime: 'Serve immediately while boiling.',
      garnishing: 'Raw egg yolk, sliced scallion greens, and toasted sesame oil.',
      plating: 'Serve directly in the black earthenware pot (Ttukbaegi) on wooden base.',
      temperature: 'Violently hot and bubbling.',
      accompaniments: 'Bowl of hot steamed rice (spoon rice directly into stew or vice-versa) and yellow pickled radish.'
    }
  },

  // 11. KIMBAP (Gimbap - Korean Seaweed Rice Rolls)
  {
    id: 'korean-bbq-rice-roll', // Let's check mockFood ID for kimbap
    id: 'kimbap',
    name: 'Traditional Korean Seaweed Rice Rolls (Kimbap)',
    cuisine: 'Korean',
    region: 'South Korea (National)',
    servings: 4,
    prepTime: 35,
    cookTime: 15,
    difficulty: 'Medium',
    overview: {
      summary: 'Korea\'s beloved picnic and lunchbox treasure: fluffy short-grain rice seasoned with fragrant toasted sesame oil and salt, rolled tightly in crisp roasted nori seaweed (Kim) with a vibrant mosaic of seasoned beef bulgogi, bright yellow pickled radish (Danmuji), sweet braised burdock root (Ueong), blanched sesame spinach, carrots, and golden egg strips, brushed with sesame oil and sliced into gleaming jewel-like rounds.',
      appearance: 'Sleek, black nori cylinders brushed with glistening sesame oil and toasted sesame seeds; when sliced, reveals a dazzling multi-colored kaleidoscope mosaic cross-section.',
      texture: 'Pleasing combination: soft seasoned rice, crunchy sweet pickled radish, toothsome burdock, tender beef, silky egg ribbons, and crisp chew from nori.',
      flavor: 'Intensely nutty toasted sesame aroma, savory sweet beef, bright sweet-tart tang from pickled radish, and clean mineral sea saltiness.',
      restingTimeMinutes: 3
    },
    equipment: [
      { name: 'Gimbal (bamboo rolling mat)', purpose: 'Applies even, firm pressure to roll tight, compact cylinders that don\'t crumble when sliced.' },
      { name: 'Razor-sharp chef\'s knife', purpose: 'Essential for slicing through taut nori without crushing the round cylinder.' },
      { name: 'Damp kitchen towel', purpose: 'For wiping the knife blade between slices to ensure clean, smudge-free cuts.' }
    ],
    beforeYouStart: [
      { task: 'Cook 500g Korean short-grain rice; season warm rice with 1.5 tbsp toasted sesame oil and 1 tsp fine salt; let cool to room temperature.', durationMinutes: 20 },
      { task: 'Stir-fry 150g ground beef or sliced bulgogi with 1 tbsp soy sauce, 1 tsp sugar, and 1 tsp garlic until dry.', durationMinutes: 5 },
      { task: 'Whisk 3 eggs with pinch of salt; cook into a flat omelette in a skillet; cool and slice into 1cm wide strips.', durationMinutes: 5 },
      { task: 'Julienne 1 carrot into matchsticks and sauté 1 min; blanch and season spinach; slice yellow danmuji radish into 1cm rods.', durationMinutes: 10 }
    ],
    ingredientPrepGuide: [
      { item: 'Rice Seasoning (Kimbap vs Sushi)', technique: 'Kimbap rice is NEVER seasoned with vinegar and sugar like Japanese sushi! Kimbap rice is seasoned purely with toasted sesame oil and fine sea salt while warm. The sesame oil keeps the grains moist, aromatic, and distinctly Korean.' },
      { item: 'Blade Wiping for Clean Cuts', technique: 'Wipe your knife blade with a damp paper towel coated in a few drops of sesame oil between every single slice. The sesame oil lubricates the blade, gliding through the nori without sticking to rice starches.' }
    ],
    essentialIngredients: [
      { name: 'Roasted Gim sheets (Korean seaweed / nori)', prep: 'crisp, unperforated sheets', amount: '5 sheets', metric: '5 sheets', imperial: '5 sheets', common: '5 sheets' },
      { name: 'Cooked short-grain Korean rice', prep: 'seasoned with 1.5 tbsp sesame oil & salt, cooled', amount: '500g', metric: '500g', imperial: '18 oz', common: '3.5 cups cooked' },
      { name: 'Yellow pickled radish (Danmuji)', prep: 'cut into 1cm thick long rods', amount: '5 strips', metric: '100g', imperial: '3.5 oz', common: '5 rods' },
      { name: 'Braised burdock root (Ueong-jorim)', prep: 'seasoned soy strips', amount: '5 strips', metric: '60g', imperial: '2.1 oz', common: '5 strips' },
      { name: 'Cooked bulgogi beef or imitation crab sticks', prep: 'seasoned strips', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '1 cup' },
      { name: 'Eggs (Gyeran-jidan)', prep: 'cooked into flat omelette & sliced into strips', amount: '3 eggs', metric: '150g', imperial: '5.3 oz', common: '3 eggs' },
      { name: 'Blanched seasoned spinach (Sigeumchi-namul)', prep: 'squeezed bone-dry', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '1/2 bunch' },
      { name: 'Carrot', prep: 'julienned and sautéed with salt', amount: '1 medium', metric: '100g', imperial: '3.5 oz', common: '1 piece' },
      { name: 'Pure toasted sesame oil', prep: 'for seasoning rice & brushing rolls', amount: '3 tbsp', metric: '45ml', imperial: '1.5 fl oz', common: '3 tbsp' },
      { name: 'Toasted white sesame seeds', prep: 'for sprinkling on top', amount: '1 tbsp', metric: '10g', imperial: '0.35 oz', common: '1 tbsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'SPREAD SESAME RICE ACROSS GIM SHEET',
        whatYouNeed: ['Bamboo mat (gimbal)', '1 sheet roasted gim', '3/4 cup seasoned rice'],
        description: 'Place bamboo mat on board. Lay 1 sheet of gim rough-side UP on the mat (shiny side down). Scoop 3/4 cup of room-temperature seasoned rice onto the seaweed. Using damp fingers, spread the rice evenly across the lower two-thirds of the sheet, leaving the top 3cm of seaweed completely bare.',
        howToDoIt: 'Spreading a thin, uniform layer ensures the kimbap roll is light and proportional, leaving room for an abundant filling mosaic.',
        heat: 'No Heat',
        duration: 2,
        visualCues: 'Even, thin carpet of rice covering bottom 2/3 of seaweed; top 3cm bare.',
        textureCheck: 'Uniform thickness with no giant mounds or bare holes.',
        whatShouldThisLookLike: 'Thin layer of seasoned rice spread across dark nori.',
        tip: 'Wet your fingers with water to prevent rice from sticking like glue to your hands.',
        commonMistake: 'Spreading rice all the way to the very top edge — rice will squeeze out of the seam when rolled.',
        moveOnWhen: 'Rice is evenly spread across lower 2/3 of seaweed.',
        quickInstructions: 'Lay gim rough-side up, spread 3/4 cup seasoned rice over lower 2/3, leaving top 3cm bare.'
      },
      {
        step: 2,
        title: 'LAYER THE 6-COLOR FILLINGS',
        whatYouNeed: ['Danmuji strip', 'Burdock strip', 'Egg strip', 'Bulgogi beef', 'Sautéed carrots', 'Seasoned spinach'],
        description: 'Across the center of the rice bed, layer your fillings horizontally: lay 1 strip of yellow danmuji, 1 strip of braised burdock, 1 strip of egg, a line of bulgogi beef, a bundle of sautéed carrots, and seasoned spinach. Pack the ingredients closely side-by-side.',
        howToDoIt: 'Grouping ingredients tightly together ensures the colorful mosaic stays centered inside the rice when rolled.',
        heat: 'No Heat',
        duration: 2,
        visualCues: 'A colorful ridge of yellow, brown, orange, green, and beef resting across the rice.',
        textureCheck: 'Neatly organized fillings.',
        whatShouldThisLookLike: 'Tightly stacked ingredients resting across the center.',
        tip: 'Use the firm danmuji radish strip as a physical barrier to anchor the softer spinach and beef behind it.',
        commonMistake: 'Scattering ingredients haphazardly all over the rice — makes tight rolling impossible.',
        moveOnWhen: 'Fillings are stacked across center.',
        quickInstructions: 'Stack radish, burdock, egg, beef, carrots, and spinach tightly in center of rice.'
      },
      {
        step: 3,
        title: 'ROLL TIGHTLY WITH BAMBOO MAT',
        whatYouNeed: ['Bamboo mat', 'Both hands', 'Water dabber'],
        description: 'Lift the bottom edge of the bamboo mat with your thumbs while using your fingers to hold the fillings firmly in place. Roll the bottom edge up and over the fillings, tucking the edge firmly down to meet the top border of the rice. Press firmly along the entire length of the roll through the bamboo mat. Lift the mat slightly, roll forward to seal against the bare seaweed flap. Squeeze firmly through the mat to lock the cylinder.',
        howToDoIt: 'Applying firm, even pressure compacts the rice and ingredients so the roll stays rigid and round when sliced.',
        heat: 'No Heat',
        duration: 2,
        visualCues: 'A tight, smooth, compact black cylinder with sealed seam.',
        textureCheck: 'Firm and taut like a solid rolling pin.',
        whatShouldThisLookLike: 'Perfect cylindrical Korean kimbap roll.',
        tip: 'Dab a drop of water along the bare top seaweed flap to glue the seam shut if needed.',
        commonMistake: 'Rolling too loosely — loose kimbap will shatter and fall apart the instant a knife touches it.',
        moveOnWhen: 'Roll is tight, sealed, and compact.',
        quickInstructions: 'Roll bottom edge over fillings with mat, press firmly, roll forward to seal bare edge, squeeze taut.'
      },
      {
        step: 4,
        title: 'BRUSH WITH SESAME OIL & TOASTED SEEDS',
        whatYouNeed: ['1 tsp sesame oil', 'Pastry brush', 'Toasted sesame seeds'],
        description: 'Place the finished kimbap roll seam-side DOWN on the cutting board. Brush the entire exterior of the dark nori skin with a glistening coat of toasted sesame oil. Sprinkle toasted sesame seeds generously along the top.',
        howToDoIt: 'Brushing with sesame oil softens the crisp nori slightly so it cuts cleanly without tearing, while imparting signature aroma and shine.',
        heat: 'No Heat',
        duration: 1,
        visualCues: 'Lacquered, gleaming black roll glistening with sesame oil and dotted with white sesame seeds.',
        smell: 'Intense nutty toasted sesame oil.',
        textureCheck: 'Supple, glossy nori skin.',
        whatShouldThisLookLike: 'Glossy, sesame-glazed kimbap roll.',
        tip: 'Rest the roll for 2 minutes before slicing so the nori absorbs the oil and softens slightly.',
        commonMistake: 'Slicing immediately while dry nori is brittle, causing the skin to crack and tear.',
        moveOnWhen: 'Roll is brushed and resting.',
        quickInstructions: 'Brush roll with sesame oil, sprinkle with sesame seeds, rest 2 mins.'
      },
      {
        step: 5,
        title: 'THE CLEAN SLICE WITH OILED BLADE',
        whatYouNeed: ['Razor-sharp chef\'s knife', 'Damp oiled towel', 'Serving platter'],
        description: 'Wipe your sharp knife with a damp, sesame-oiled paper towel. Slice the roll into 1.5cm (0.6 inch) thick rounds using a gentle, single pulling stroke (do NOT saw back and forth aggressively!). Wipe the knife blade clean after every 2 or 3 cuts. Arrange rounds on a platter to display the stunning rainbow mosaic.',
        howToDoIt: 'A lubricated, razor-sharp blade slides through the nori and sticky rice without squashing the round cylinder.',
        heat: 'No Heat',
        duration: 3,
        visualCues: 'Gorgeous jewel-like circular rounds with vibrant yellow, orange, green, brown, and white centers.',
        textureCheck: 'Clean, surgical slice with no fillings smashed out.',
        whatShouldThisLookLike: 'A stunning banqueting platter of sliced Korean Kimbap rounds.',
        tip: 'The two end pieces ("Kkottugi") have the most abundant overflowing fillings and are considered the prize chef\'s treat!',
        commonMistake: 'Pushing straight down with a dull knife, squishing the round cylinder into a flat crushed oval.',
        moveOnWhen: 'All rolls are sliced and plated.',
        quickInstructions: 'Wipe sharp knife with oiled towel; slice into 1.5cm rounds with single pulling strokes; plate.'
      }
    ],
    commonMistakes: [
      { mistake: 'Kimbap fell apart into loose rice when sliced.', remedy: 'Roll was rolled too loosely or rice was under-compressed. Squeeze firmly through the bamboo mat during rolling.' },
      { mistake: 'Seaweed tore open along the seam.', remedy: 'Too much rice was used or overstuffed with fillings. Use 3/4 cup rice and keep fillings centered.' }
    ],
    troubleshooting: [
      {
        problem: 'Knife is smashing the rolls flat during slicing',
        whatHappened: 'Knife is dull or covered in sticky rice starch.',
        whyItHappened: 'Starch creates friction against the blade.',
        whatToDoNow: 'Wash knife thoroughly, wipe dry, rub blade with sesame oil, and use a gentle sawing motion.',
        howToPrevent: 'Wipe blade with damp oiled cloth every 2 cuts.'
      }
    ],
    substitutions: [
      { original: 'Bulgogi beef', substitute: 'Canned tuna mixed with 2 tbsp Kewpie mayo (Chamchi-kimbap) or spicy kimchi', notes: 'Tuna-mayo kimbap (Chamchi Kimbap) is the #1 most popular convenience store style in Korea.' },
      { original: 'Burdock root (Ueong)', substitute: 'Thinly sliced sautéed bell peppers or cucumber matchsticks', notes: 'Adds refreshing crisp sweetness.' }
    ],
    safetyNotes: [
      'Eat freshly made kimbap on the day it is made; do not refrigerate long-term as rice turns hard.'
    ],
    servingGuide: {
      restingTime: 'Rest 2 minutes before slicing.',
      garnishing: 'Toasted white sesame seeds and a light brushing of sesame oil.',
      plating: 'Arranged in overlapping shingled rows on a long rectangular platter.',
      temperature: 'Room temperature.',
      accompaniments: 'Yellow pickled radish (Danmuji), hot fish cake broth, or tteokbokki sauce for dipping.'
    }
  },

  // 12. MANDU (Korean Pork & Kimchi Dumplings)
  {
    id: 'mandu',
    name: 'Handmade Korean Pork & Kimchi Dumplings (Mandu)',
    cuisine: 'Korean',
    region: 'South Korea (Gaeseong / Seoul)',
    servings: 4,
    prepTime: 40,
    cookTime: 15,
    difficulty: 'Medium',
    overview: {
      summary: 'The pride of Korean holiday feasts: delicate, thin round wrappers stuffed with a succulent, juicy filling of minced pork, finely squeezed aged kimchi, mashed firm tofu, dangmyeon glass noodles, and garlic chives, shaped into regal royal crowns (Pyeonsu) or crescents, pan-fried to a golden crispy bottom or steamed in bamboo baskets, served with a tangy soy-vinegar-chili dipping sauce.',
      appearance: 'Plump, round crown-shaped dumplings (with ends pinched together into an ingot) glistening with steam or pan-seared with a crackling golden-amber bottom.',
      texture: 'Contrasting textures: tender, chewy wrapper enclosing a fluffy, juicy, incredibly textured filling with crunchy kimchi, silky tofu, and chewy glass noodles.',
      flavor: 'Deep savory pork richness, tangy spicy kick from fermented kimchi, nutty toasted sesame oil, and subtle garlic-chive aromatics.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Bamboo steamer basket with perforated parchment (or heavy skillet for pan-frying)', purpose: 'For steaming dumplings to translucent softness or pan-frying to a crispy crust.' },
      { name: 'Cheesecloth or clean tea towel', purpose: 'Essential for squeezing water out of minced kimchi and tofu.' },
      { name: 'Baking sheet dusted with cornstarch', purpose: 'Prevents raw assembled mandu from sticking.' }
    ],
    beforeYouStart: [
      { task: 'Finely mince 200g aged kimchi; squeeze bone-dry in cheesecloth to extract excess liquid.', durationMinutes: 10 },
      { task: 'Mash 200g firm tofu in a towel and squeeze firmly until completely crumbly and dry.', durationMinutes: 5 },
      { task: 'Boil 50g dangmyeon glass noodles for 6 mins; drain and finely chop into 1cm bits.', durationMinutes: 8 },
      { task: 'Finely chop 50g garlic chives (buchu) or scallions.', durationMinutes: 3 }
    ],
    ingredientPrepGuide: [
      { item: 'Squeezing Kimchi & Tofu Bone-Dry', technique: 'Both kimchi and tofu contain massive amounts of water. You MUST squeeze both inside a clean dish towel until no liquid drips. If wet tofu and kimchi are added to raw pork, the filling will turn into a wet mush that tears delicate wrappers.' },
      { item: 'Crown Shaping (Wang-Mandu)', technique: 'Fold wrapper in half over filling to create a half-moon, pleating edges tightly. Then bring the two sharp outer crescent tips together in front, overlap them, and pinch firmly with water to create a round royal crown shape.' }
    ],
    essentialIngredients: [
      { name: 'Round mandu wrappers (Korean dumpling skins)', prep: 'room temperature', amount: '30 wrappers', metric: '30 wrappers', imperial: '30 wrappers', common: '1 pack' },
      { name: 'Ground pork (70/30 meat to fat)', prep: 'chilled', amount: '250g', metric: '250g', imperial: '9 oz', common: '1/2 lb' },
      { name: 'Aged kimchi', prep: 'finely minced and squeezed bone-dry', amount: '200g', metric: '200g', imperial: '7 oz', common: '1.5 cups' },
      { name: 'Firm tofu', prep: 'mashed and squeezed completely dry in towel', amount: '200g', metric: '200g', imperial: '7 oz', common: '1/2 block' },
      { name: 'Korean glass noodles (Dangmyeon)', prep: 'boiled 6 mins, drained & finely chopped', amount: '50g dry', metric: '100g cooked', imperial: '3.5 oz', common: '1/2 cup chopped' },
      { name: 'Garlic chives (Buchu) or scallions', prep: 'finely chopped', amount: '50g', metric: '50g', imperial: '1.8 oz', common: '1/2 cup' },
      { name: 'Fresh garlic & ginger', prep: 'finely minced', amount: '1.5 tbsp garlic + 1 tsp ginger', metric: '20g', imperial: '0.7 oz', common: 'mixed' },
      { name: 'Korean soy sauce & Sesame oil', prep: 'for seasoning filling', amount: '1.5 tbsp each', metric: '45ml', imperial: '1.5 fl oz', common: '3 tbsp total' },
      { name: 'Ground black pepper & fine salt', prep: 'seasoning', amount: '1/2 tsp each', metric: '3g', imperial: '0.1 oz', common: '1/2 tsp each' },
      { name: 'Soy-vinegar dipping sauce', prep: '2 tbsp soy + 1 tbsp vinegar + 1 tsp gochugaru', amount: '3 tbsp', metric: '45ml', imperial: '1.5 fl oz', common: 'mixed' }
    ],
    steps: [
      {
        step: 1,
        title: 'KNEAD THE MULTI-TEXTURED MANDU FILLING',
        whatYouNeed: ['Ground pork', 'Squeezed dry kimchi', 'Squeezed dry tofu', 'Chopped glass noodles', 'Chives', 'Garlic, ginger', 'Soy sauce', 'Sesame oil', 'Salt, pepper'],
        description: 'In a large bowl, place ground pork, soy sauce, sesame oil, garlic, ginger, salt, and black pepper. Knead vigorously with your hand for 2 minutes until meat becomes tacky and sticky. Add the squeezed kimchi, dry crumbled tofu, chopped glass noodles, and garlic chives. Mix gently with hands until evenly blended. Chill for 15 minutes.',
        howToDoIt: 'Whipping the pork first binds the meat proteins, which then wrap around the fluffy tofu, crunchy kimchi, and chewy noodles.',
        heat: 'No Heat',
        duration: 8,
        visualCues: 'Vibrant, cohesive filling specked with red kimchi, white tofu curds, and green chives.',
        smell: 'Tangy kimchi, sesame oil, and garlic.',
        textureCheck: 'Tacky, cohesive, and moist without weeping liquid.',
        whatShouldThisLookLike: 'Colorful, well-mixed Korean mandu filling.',
        tip: 'Fry a tiny teaspoon of filling in a pan to taste for seasoning before wrapping all 30 dumplings!',
        commonMistake: 'Skipping the tofu-squeezing step — wet tofu turns the filling into watery slop.',
        moveOnWhen: 'Filling is cohesive, chilled, and tested.',
        quickInstructions: 'Knead pork with seasonings until sticky; fold in squeezed kimchi, tofu, noodles, and chives.'
      },
      {
        step: 2,
        title: 'PLEAT & FORM THE ROYAL CROWN SHAPE',
        whatYouNeed: ['30 wrappers', 'Chilled filling', 'Small bowl of water', 'Cornstarch-dusted baking sheet'],
        description: 'Hold a wrapper flat in your palm. Place 1 generous tablespoon (approx 20g) of filling in the center. Wet the outer edge with water. Fold in half over the filling and pinch the edges together into a sealed half-moon (crescent), making 3–4 pleats along the top seam. Now take the two outer corner tips of the crescent, bring them together in front, overlap them, dab a drop of water, and pinch firmly to form a round crown shape.',
        howToDoIt: 'Joining the tips creates the regal "Wang-Mandu" (King Dumpling) crown shape that holds generous filling and stands upright.',
        heat: 'No Heat',
        duration: 20,
        visualCues: 'Round, plump, crown-shaped dumplings resembling royal ingots with pinched seams.',
        textureCheck: 'Firmly sealed seams with zero air pockets.',
        whatShouldThisLookLike: 'Plump, circular Korean crown dumplings.',
        tip: 'Pinch the joined tips firmly with damp fingers so they do not pop open during steaming.',
        commonMistake: 'Overfilling, which forces raw meat into the seams and breaks the dumplings open.',
        moveOnWhen: 'All 30 mandu are shaped and resting on baking sheet.',
        quickInstructions: 'Fold wrapper over filling into pleated half-moon, then bring the two outer corners together and pinch into crown.'
      },
      {
        step: 3,
        title: 'STEAM IN BAMBOO BASKETS (OPTION A)',
        whatYouNeed: ['Bamboo steamer with parchment', 'Wok with boiling water', 'Mandu'],
        description: 'Line bamboo steamer baskets with parchment. Arrange mandu leaving 2cm space between them. Place over a wok of boiling water. Cover tightly with bamboo lid. Steam over high heat for 10 to 12 minutes until wrappers turn glossy and translucent and pork filling is piping hot (74°C / 165°F).',
        howToDoIt: 'Bamboo steam cooks the dumplings gently, keeping the wrappers soft, tender, and translucent.',
        heat: 'High Steam',
        duration: 12,
        visualCues: 'Wrappers become glassy and translucent, showing the pink pork, red kimchi, and green chives within.',
        smell: 'Aromatic steamed dough, savory pork, and tangy kimchi.',
        textureCheck: 'Tender chewy wrapper enclosing a succulent, juicy filling.',
        whatShouldThisLookLike: 'Steaming, translucent royal crown mandu.',
        tip: 'If you prefer crispy pan-fried Gun-mandu: sear flat bottoms in 1 tbsp oil for 3 mins, add 60ml water, cover and steam 5 mins, uncover and crisp 2 mins!',
        commonMistake: 'Leaving dumplings in the steamer after turning off heat — condensation drips onto wrappers.',
        moveOnWhen: 'Dumplings are translucent and cooked through.',
        quickInstructions: 'Steam mandu in bamboo baskets for 10-12 mins over boiling water until translucent.'
      },
      {
        step: 4,
        title: 'SERVE WITH TANGY SOY-VINEGAR DIPPING SAUCE',
        whatYouNeed: ['Steamed mandu', 'Dipping sauce (soy sauce, rice vinegar, gochugaru, sesame seeds)'],
        description: 'Carefully transfer the hot mandu to a wide platter or serve directly in the bamboo basket. Pair with individual dipping bowls of soy sauce, rice vinegar, a pinch of gochugaru chili flakes, and sesame seeds.',
        howToDoIt: 'The tart vinegar cuts through the rich pork fat while the gochugaru enhances the kimchi warmth.',
        heat: 'Off Heat',
        duration: 1,
        visualCues: 'Glistening, plump crown dumplings releasing hot steam next to dark tangy dipping sauce.',
        smell: 'Tangy vinegar, savory pork, and spicy kimchi.',
        textureCheck: 'Silky bite with a burst of crunchy, juicy filling.',
        whatShouldThisLookLike: 'Traditional Korean mandu platter.',
        tip: 'Mandu can also be dropped directly into boiling beef broth to make legendary Mandu-guk (dumpling soup)!',
        commonMistake: 'Eating in one giant bite without letting steam escape — hot pork juices can burn the tongue.',
        moveOnWhen: 'Served piping hot.',
        quickInstructions: 'Plate hot mandu immediately; serve with soy-vinegar-chili dipping sauce.'
      }
    ],
    commonMistakes: [
      { mistake: 'Mandu wrappers burst open during steaming.', remedy: 'Too much water remained in the filling. Squeeze kimchi and tofu bone-dry before mixing.' },
      { mistake: 'Filling tasted bland and dry.', remedy: 'Not enough seasoning or pork was too lean. Use 70/30 pork and season well with sesame oil and soy sauce.' }
    ],
    troubleshooting: [
      {
        problem: 'Mandu wrappers are tearing while folding',
        whatHappened: 'Wrappers dried out from exposure to kitchen air.',
        whyItHappened: 'Flour wrappers lose moisture rapidly.',
        whatToDoNow: 'Cover wrapper stack with a damp cloth; brush edges with extra water to restore elasticity.',
        howToPrevent: 'Keep unused wrappers covered under a damp paper towel while working.'
      }
    ],
    substitutions: [
      { original: 'Ground pork', substitute: 'Ground chicken, beef, or extra tofu and shiitake mushrooms', notes: 'Vegetarian tofu-kimchi mandu is exceptionally popular in Korea.' },
      { original: 'Mandu wrappers', substitute: 'Round gyoza or wonton wrappers', notes: 'Gyoza wrappers work wonderfully as an accessible alternative.' }
    ],
    safetyNotes: [
      'Pork filling must reach safe internal temperature of 74°C (165°F).'
    ],
    servingGuide: {
      restingTime: 'Rest 1 minute before eating.',
      garnishing: 'Toasted sesame seeds and sliced scallions.',
      plating: 'Serve in steaming bamboo basket or arranged in concentric circles on a ceramic platter.',
      temperature: 'Piping hot.',
      accompaniments: 'Soy-vinegar dipping sauce, aged cabbage kimchi, and pickled radish.'
    }
  }
];
