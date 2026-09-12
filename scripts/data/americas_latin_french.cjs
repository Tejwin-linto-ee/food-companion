// Americas & Global Batch 1: Latin American / Mexican (12) + French (8) = 20 dishes
module.exports = [
  // 1. TACOS (Authentic Mexican Street Tacos al Pastor / Carne Asada)
  {
    id: 'tacos',
    name: 'Authentic Mexican Street Tacos (Tacos de Carne Asada & Al Pastor)',
    cuisine: 'Mexican',
    region: 'Mexico (Mexico City / Michoacán)',
    servings: 4,
    prepTime: 25,
    cookTime: 15,
    difficulty: 'Medium',
    overview: {
      summary: 'The quintessential soul of Mexican street food: tender flank or skirt steak marinated in fresh lime juice, orange juice, garlic, Mexican oregano, and ground cumin, seared over blistering heat until caramelized and juicy. Chopped into fine succulent morsels, piled high on double warm charred corn tortillas, and crowned with finely diced white onion, fresh cilantro, fiery salsa verde, and fresh lime.',
      appearance: 'Twin small golden-yellow corn tortillas charred with flecks of brown, brimming with juicy seared mahogany beef cubes, bright white diced onions, vivid green cilantro, and green salsa.',
      texture: 'Soft, pliable warm corn tortillas contrasting with juicy seared meat, crisp crunchy raw onion, and zesty citrus burst.',
      flavor: 'Smoky seared beef, vibrant lime and orange citrus marinade, earthy Mexican oregano, pungent onion, and herbal cilantro.',
      restingTimeMinutes: 5
    },
    equipment: [
      { name: 'Heavy cast-iron skillet or Comal', purpose: 'For extreme contact heat to sear meat quickly and warm tortillas without drying them.' },
      { name: 'Sharp chef knife & cutting board', purpose: 'To finely dice flank steak against the grain into street-taco morsels.' }
    ],
    beforeYouStart: [
      { task: 'Marinate 600g skirt or flank steak in 1/4 cup lime juice, 1/4 cup orange juice, 4 cloves minced garlic, 1 tbsp cumin, 1 tbsp Mexican oregano, 2 tbsp oil, and 1.5 tsp salt for 2 hours.', durationMinutes: 120 },
      { task: 'Finely dice 1 medium white onion and 1 cup fresh cilantro leaves (the taco taquero garnish).', durationMinutes: 5 },
      { task: 'Cut 3 limes into wedges.', durationMinutes: 2 }
    ],
    ingredientPrepGuide: [
      { item: 'Double Tortilla Rule (La Copia)', technique: 'Authentic street tacos always use two tortillas stacked together. The inner tortilla absorbs the savory meat juices while the outer dry tortilla provides structural integrity so the taco never breaks in your hand.' },
      { item: 'Comal Tortilla Warming', technique: 'Dip corn tortillas very lightly into the residual rendered meat fat on the hot pan for 15 seconds per side. This makes the tortillas pliable, soft, and fragrant rather than stiff and brittle.' }
    ],
    essentialIngredients: [
      { name: 'Flank steak or Skirt steak (Arrachera)', prep: 'trimmed and marinated', amount: '600g', metric: '600g', imperial: '1.3 lbs', common: '600g' },
      { name: 'Fresh lime juice & Orange juice', prep: 'citrus marinade', amount: '1/4 cup each', metric: '120ml', imperial: '4 fl oz', common: '1/2 cup total' },
      { name: 'Garlic cloves', prep: 'finely minced', amount: '4 cloves', metric: '12g', imperial: '0.4 oz', common: '4 cloves' },
      { name: 'Mexican oregano & Ground cumin', prep: 'earthy dried aromatics', amount: '1 tbsp oregano + 1 tsp cumin', metric: '8g', imperial: '0.3 oz', common: 'mixed' },
      { name: 'Small corn tortillas (10-12cm)', prep: 'traditional taquería size', amount: '16 tortillas', metric: '16 pieces', imperial: '16 pieces', common: '16 tortillas' },
      { name: 'White onion', prep: 'finely diced (never yellow onion for street tacos)', amount: '1 medium', metric: '120g', imperial: '4.2 oz', common: '1 onion' },
      { name: 'Fresh cilantro (Coriander leaves)', prep: 'finely chopped', amount: '1 cup packed', metric: '40g', imperial: '1.4 oz', common: '1 cup' },
      { name: 'Salsa verde (Tomatillo salsa) or Salsa roja', prep: 'fiery table salsa', amount: '1/2 cup', metric: '120ml', imperial: '4 fl oz', common: '1/2 cup' },
      { name: 'Limes', prep: 'cut into quarters', amount: '3 limes', metric: '150g', imperial: '5.3 oz', common: '3 limes' },
      { name: 'Fine sea salt & Black pepper', prep: 'seasoning', amount: '1.5 tsp salt + 1 tsp pepper', metric: '10g', imperial: '0.35 oz', common: 'mixed' }
    ],
    steps: [
      {
        step: 1,
        title: 'SEAR MARINATED STEAK OVER HIGH HEAT',
        whatYouNeed: ['Cast-iron skillet', 'Marinated steak', '1 tbsp high-smoke point oil'],
        description: 'Heat a heavy cast-iron skillet over high heat until smoking hot. Remove steak from marinade and pat dry with paper towels. Lay steak onto the scorching iron. Sear undisturbed for 3 to 4 minutes until a dark, mahogany, caramelized crust forms. Flip and sear for 3 minutes for medium doneness. Transfer steak to a cutting board and rest for 5 minutes.',
        howToDoIt: 'Patting the steak dry before searing ensures intense Maillard browning rather than boiling in moisture.',
        heat: 'High Heat',
        duration: 8,
        visualCues: 'Deep caramelized dark-brown crust; clear rendered juices bubbling on the surface.',
        hear: 'Loud, explosive searing crackle.',
        smell: 'Seared beef, roasted citrus, and toasted cumin.',
        textureCheck: 'Springy and firm yet tender.',
        whatShouldThisLookLike: 'Darkly charred seared steak resting on a cutting board.',
        tip: 'Never discard the pan dripping juices — you will use them to warm the tortillas!',
        commonMistake: 'Slicing steak immediately without resting, causing all delicious meat juices to run out onto the board.',
        moveOnWhen: 'Steak is seared on both sides and resting.',
        quickInstructions: 'Sear dried marinated steak in smoking hot skillet 3-4 mins per side until charred; rest 5 minutes.'
      },
      {
        step: 2,
        title: 'FINE CHOP AGAINST THE GRAIN (TAQUERO CUT)',
        whatYouNeed: ['Rested steak', 'Sharp chef knife', 'Cutting board'],
        description: 'Slice the rested steak across the grain into thin 5mm strips. Then cut crosswise into small 5mm bite-sized cubes. Toss the meat cubes in the accumulated juices on the board so every piece is glossy and seasoned.',
        howToDoIt: 'Cutting flank steak finely across the grain severs tough muscle fibers, ensuring every bite in the taco is melt-in-the-mouth tender.',
        heat: 'No Heat',
        duration: 5,
        visualCues: 'Glossy, tender pink-centered beef cubes glistening with citrus juices.',
        smell: 'Savory seared beef and lime.',
        textureCheck: 'Ultra-tender small morsels.',
        whatShouldThisLookLike: 'A bountiful mound of chopped carne asada.',
        tip: 'Keep the chopped meat warm in the warm skillet off the heat while heating tortillas.',
        commonMistake: 'Cutting large chewy chunks that pull out of the tortilla in one tough bite.',
        moveOnWhen: 'All meat is chopped into small uniform cubes.',
        quickInstructions: 'Slice steak across grain into thin strips, then dice into 5mm cubes and toss in board juices.'
      },
      {
        step: 3,
        title: 'HEAT & CHAR CORN TORTILLAS (DOUBLE STACK)',
        whatYouNeed: ['16 corn tortillas', 'Hot cast-iron pan or comal'],
        description: 'Place corn tortillas onto the hot dry skillet or comal in a single layer. Heat for 30 seconds until puffed slightly and spotted with brown freckles. Flip and heat 20 seconds on the other side. Stack two warm tortillas together on a plate for each taco. Keep wrapped in a clean cloth napkin to keep soft and steamy.',
        howToDoIt: 'Warming awakens the corn masa aroma and activates starches so tortillas become pliable without tearing.',
        heat: 'Medium-High Heat',
        duration: 5,
        visualCues: 'Tortillas puff slightly with air bubbles and show light golden-brown toasted spots.',
        smell: 'Fragrant toasted corn masa.',
        textureCheck: 'Soft, pliable, and flexible.',
        whatShouldThisLookLike: 'Steaming pairs of warm corn tortillas.',
        tip: 'Never microwave tortillas cold in plastic — heating on hot dry iron is essential for flavor and structure.',
        commonMistake: 'Serving cold or underheated corn tortillas, which crack and disintegrate.',
        moveOnWhen: 'All tortillas are heated, paired in twos, and warm.',
        quickInstructions: 'Heat corn tortillas on hot skillet 30 secs per side until toasted and pliable; stack in pairs of two.'
      },
      {
        step: 4,
        title: 'ASSEMBLE STREET TACOS & CROWN WITH GARNISH',
        whatYouNeed: ['Warmed double tortillas', 'Chopped meat', 'Diced white onion', 'Chopped cilantro', 'Salsa verde', 'Limes'],
        description: 'Spoon a generous mound (about 2 tablespoons) of chopped steak down the center of each double tortilla. Scatter finely diced raw white onion and fresh cilantro over the meat. Spoon a ribbon of spicy salsa verde over top. Squeeze fresh lime juice generously over each taco and serve immediately.',
        howToDoIt: 'Hold the taco with your thumb, index, and middle finger forming a cradle, tilting your head at a 45-degree angle to eat like a true Mexican chilango.',
        heat: 'No Heat',
        duration: 3,
        visualCues: 'Vibrant street tacos loaded with juicy meat, crisp white onions, green herbs, and zesty salsa.',
        smell: 'Pungent onion, zesty lime, cilantro, and warm corn masa.',
        textureCheck: 'Soft tortilla cradle holding tender meat and crisp crunchy toppings.',
        whatShouldThisLookLike: 'Authentic Mexican street tacos ready to devour.',
        tip: 'Authentic Mexican street tacos never contain yellow cheddar cheese, sour cream, or shredded lettuce!',
        commonMistake: 'Overfilling the tacos so they cannot be folded comfortably in hand.',
        moveOnWhen: 'Tacos are assembled and served hot.',
        quickInstructions: 'Mound steak on double tortillas, top with white onion, cilantro, salsa verde, and fresh lime juice.'
      }
    ],
    commonMistakes: [
      { mistake: 'Using a single tortilla', remedy: 'Always double up tortillas (la copia). One tortilla breaks from the meat juices; two keep it sturdy.' },
      { mistake: 'Using flour tortillas for street tacos', remedy: 'Authentic street tacos require small white or yellow corn tortillas.' }
    ],
    troubleshooting: [
      {
        problem: 'Tortillas broke and tore when folded',
        whatHappened: 'The corn tortillas cracked and split.',
        whyItHappened: 'They were cold, dry, or underheated.',
        whatToDoNow: 'Dip remaining tortillas in a splash of water and reheat on the hot skillet for 30 seconds per side until pliable.',
        howToPrevent: 'Always toast until steamy and keep wrapped in a cloth towel.'
      }
    ],
    substitutions: [
      { original: 'Flank steak', substitute: 'Boneless chicken thighs (Pollo Asado) or pork shoulder (Al Pastor)', notes: 'Works with identical marinade and seasoning.' },
      { original: 'Mexican oregano', substitute: 'Greek dried oregano', notes: 'Adds similar herbal warmth.' }
    ],
    safetyNotes: ['Sear beef to internal temperature of 63°C (145°F) for medium.', 'Wash cutting board thoroughly after trimming raw beef.'],
    servingGuide: {
      restingTime: 'Serve immediately while tortillas are warm.',
      temperature: 'Hot meat in warm tortillas.',
      garnishing: 'Radish slices, pickled jalapeños, and fresh lime wedges.',
      accompaniments: 'Charro beans, grilled cambray onions, and ice-cold Mexican beer or Horchata.'
    }
  },

  // 2. BURRITOS (Mission-Style Spiced Beef & Bean Burrito)
  {
    id: 'burritos',
    name: 'Authentic Mission-Style Beef, Bean & Cilantro-Lime Rice Burrito',
    cuisine: 'Mexican',
    region: 'Northern Mexico / California (Baja)',
    servings: 4,
    prepTime: 25,
    cookTime: 20,
    difficulty: 'Medium',
    overview: {
      summary: 'The legendary Mission-style stuffed burrito: a colossal 12-inch flour tortilla steamed until ultra-pliable, layered systematically with warm cilantro-lime rice, creamy refried pinto beans, seasoned shredded beef (machaca/carne asada), melting Jack cheese, fresh pico de gallo, and guacamole. Tightly swaddled into a foil-wrapped cylinder and pan-toasted for a crisp golden exterior.',
      appearance: 'A plump, tightly wrapped golden-toasted cylinder wrapped in foil, sliced diagonally to reveal vibrant colorful layers of green avocado, white rice, ruby salsa, and melted cheese around seasoned beef.',
      texture: 'Crisp toasted tortilla wrapper giving way to creamy beans, fluffy rice, tender juicy meat, and gooey melted cheese.',
      flavor: 'Rich spiced beef, creamy buttery pinto beans, bright cilantro and lime, with cool avocado and savory cheese.',
      restingTimeMinutes: 3
    },
    equipment: [
      { name: 'Large 12-inch skillet or Comal', purpose: 'To steam large flour tortillas until pliable and toast the rolled burrito.' },
      { name: 'Aluminum foil sheets', purpose: 'To roll and wrap burritos tightly so they hold structural shape.' }
    ],
    beforeYouStart: [
      { task: 'Warm 2 cups of cooked white rice and toss with 2 tbsp lime juice, 1/4 cup chopped cilantro, and 1/2 tsp salt.', durationMinutes: 5 },
      { task: 'Warm 1.5 cups refried pinto beans or seasoned black beans.', durationMinutes: 5 },
      { task: 'Dice 2 tomatoes, 1/4 onion, 1 jalapeño, and 2 tbsp cilantro for fresh Pico de Gallo.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'Tortilla Steaming Secret', technique: 'Large flour tortillas must be warmed and steamed for 20 seconds before rolling! Cold flour tortillas have rigid gluten and will tear wide open when folded.' },
      { item: 'The Mission Tuck-and-Roll', technique: 'Fold the left and right sides in over the filling, then pull the bottom flap up and tuck it firmly under the filling with your fingers, rolling tightly forward like a sleeping bag.' }
    ],
    essentialIngredients: [
      { name: 'Large flour tortillas (12-inch / 30cm)', prep: 'burrito-size flour tortillas', amount: '4 large', metric: '4 pieces', imperial: '4 pieces', common: '4 tortillas' },
      { name: 'Seasoned cooked beef (Carne Asada or Picadillo)', prep: 'warm and spiced', amount: '400g', metric: '400g', imperial: '14 oz', common: '400g' },
      { name: 'Warm refried pinto beans', prep: 'mashed with cumin and garlic', amount: '1.5 cups', metric: '360g', imperial: '12.7 oz', common: '1.5 cups' },
      { name: 'Cilantro-lime white rice', prep: 'warm, seasoned with fresh lime', amount: '2 cups', metric: '300g', imperial: '10.5 oz', common: '2 cups' },
      { name: 'Monterey Jack or Oaxaca cheese', prep: 'shredded', amount: '1.5 cups', metric: '150g', imperial: '5.3 oz', common: '1.5 cups' },
      { name: 'Fresh Pico de Gallo', prep: 'diced tomatoes, onion, jalapeño, lime, cilantro', amount: '1 cup', metric: '180g', imperial: '6.3 oz', common: '1 cup' },
      { name: 'Fresh Guacamole', prep: 'mashed avocado, lime, salt', amount: '1 cup', metric: '200g', imperial: '7 oz', common: '1 cup' },
      { name: 'Mexican Crema or sour cream', prep: 'tangy cream', amount: '1/2 cup', metric: '120g', imperial: '4.2 oz', common: '1/2 cup' }
    ],
    steps: [
      {
        step: 1,
        title: 'STEAM FLOUR TORTILLA UNTIL ULTRA-PLIABLE',
        whatYouNeed: ['12-inch flour tortilla', 'Hot skillet or comal', 'Clean damp towel'],
        description: 'Place a large flour tortilla on a medium-hot dry skillet for 15 seconds per side until warm, supple, and soft. Alternatively, sprinkle with a drop of water and microwave between damp paper towels for 20 seconds. Lay flat immediately on a sheet of aluminum foil.',
        howToDoIt: 'Heating gelatinizes the starches in the flour tortilla, rendering it stretchy and tear-proof during rolling.',
        heat: 'Medium Heat',
        duration: 2,
        visualCues: 'Tortilla turns floppy, warm, and slightly translucent with zero stiffness.',
        textureCheck: 'Extremely soft, pliable, and stretchy.',
        whatShouldThisLookLike: 'A warm, supple round flatbread resting on foil.',
        tip: 'Work quickly while the tortilla is steaming warm to prevent it from cooling and stiffening.',
        commonMistake: 'Attempting to roll a room-temperature tortilla, resulting in a ripped, leaking mess.',
        moveOnWhen: 'Tortilla is warm and pliable.',
        quickInstructions: 'Warm large flour tortilla on skillet 15 secs per side until soft and stretchy; place on foil.'
      },
      {
        step: 2,
        title: 'LAYER INGREDIENTS IN STRICT ORDER',
        whatYouNeed: ['Refried beans', 'Rice', 'Seasoned beef', 'Shredded cheese', 'Guacamole', 'Pico de gallo', 'Crema'],
        description: 'In the lower-center third of the tortilla, lay down 3 tablespoons of shredded cheese first (so the hot beans melt it). Spoon 1/3 cup warm refried beans over the cheese. Layer 1/2 cup warm cilantro-lime rice, followed by 100g warm seasoned beef. Top with 2 tablespoons guacamole, 2 tablespoons pico de gallo, and a drizzle of crema. Leave 5cm (2 inches) of clean tortilla border on both sides.',
        howToDoIt: 'Layering cheese beneath the hot beans and meat guarantees complete melting without needing an oven.',
        heat: 'No Heat',
        duration: 3,
        visualCues: 'A neat horizontal mound of colorful layered fillings across the lower center.',
        smell: 'Spiced beef, warm beans, and fresh cilantro.',
        textureCheck: 'Balanced ratio of hot fillings to cool toppings.',
        whatShouldThisLookLike: 'A compact filling log in the center of the tortilla.',
        tip: 'Do not overfill! An overstuffed burrito cannot be closed tightly and will explode when rolled.',
        commonMistake: 'Spreading the filling all over the surface like a pizza instead of keeping it in a compact horizontal band.',
        moveOnWhen: 'Fillings are layered in neat order.',
        quickInstructions: 'Layer cheese, warm beans, rice, beef, guacamole, pico de gallo, and crema in lower center; leave borders clean.'
      },
      {
        step: 3,
        title: 'TUCK, ROLL & WRAP IN FOIL',
        whatYouNeed: ['Loaded tortilla', 'Aluminum foil'],
        description: 'Fold the left and right outer sides of the tortilla inward over the filling edges. Pull the bottom edge up over the filling, use your fingers to pull the ingredients backward to compress into a dense log, then roll tightly forward into a firm cylinder. Wrap tightly in aluminum foil and twist the ends.',
        howToDoIt: 'Foil wrapping acts as an external skeleton, holding the ingredients compressed while redistributing internal steam.',
        heat: 'No Heat',
        duration: 3,
        visualCues: 'A neat, compact, taut foil-wrapped cylinder.',
        textureCheck: 'Solid, firm roll with no sagging pockets.',
        whatShouldThisLookLike: 'A professional taquería foil-wrapped burrito.',
        tip: 'Rest the wrapped burrito in foil for 2 minutes — internal steam seals the seams shut.',
        commonMistake: 'Rolling loosely, causing ingredients to slide around and spill out into your lap.',
        moveOnWhen: 'Burrito is rolled tightly in foil.',
        quickInstructions: 'Fold sides in, tuck bottom flap over filling, roll tightly forward into a cylinder, wrap snugly in foil.'
      },
      {
        step: 4,
        title: 'PAN-TOAST & SLICE DIAGONALLY',
        whatYouNeed: ['Dry skillet', 'Wrapped burrito', 'Chef knife'],
        description: 'Place the unwrapped (or foil-wrapped for softer shell) burrito seam-side down into a dry medium-hot skillet for 90 seconds until the bottom seam is sealed and crispy golden-brown. Turn and toast the top for 60 seconds. Transfer to a cutting board, slice diagonally in half with a sharp knife, and peel back the foil to eat.',
        howToDoIt: 'Toasting the seam creates a crisp seal that prevents the burrito from unraveling as you eat.',
        heat: 'Medium Heat',
        duration: 4,
        visualCues: 'Deep golden-brown toasted spots on the crisp exterior tortilla.',
        hear: 'Gentle sizzling and toasting crackle.',
        smell: 'Toasted flour tortilla and melted cheese.',
        textureCheck: 'Crunchy outer crust with molten, tender, juicy interior.',
        whatShouldThisLookLike: 'A gorgeous halved burrito revealing multi-colored concentric layers.',
        tip: 'Peel the foil down as you eat like a banana — it keeps your hands clean and holds the burrito together.',
        commonMistake: 'Slicing with a dull knife, squishing the burrito flat.',
        moveOnWhen: 'Toasted, sliced, and served warm.',
        quickInstructions: 'Toast seam-side down on dry skillet 90 secs until crisp and golden; slice diagonally in half and serve.'
      }
    ],
    commonMistakes: [
      { mistake: 'Cold tortilla', remedy: 'Always steam or warm the flour tortilla before rolling to prevent cracking.' },
      { mistake: 'Too much liquid', remedy: 'Drain watery juices from salsa and beans so the burrito does not become soggy inside.' }
    ],
    troubleshooting: [
      {
        problem: 'Tortilla tore open during rolling',
        whatHappened: 'A rip formed along the fold.',
        whyItHappened: 'Tortilla was cold or overstuffed.',
        whatToDoNow: 'Wrap immediately in aluminum foil and press tightly — the foil will hold it intact as it warms and seals.',
        howToPrevent: 'Warm tortilla until hot and supple, and keep filling to 1.5 cups total.'
      }
    ],
    substitutions: [
      { original: 'Seasoned beef', substitute: 'Carnitas (shredded pork) or grilled chicken', notes: 'Classic burrito protein alternatives.' },
      { original: 'Monterey Jack cheese', substitute: 'Cheddar or Pepper Jack', notes: 'Provides excellent melt and flavor.' }
    ],
    safetyNotes: ['Ensure cooked meat and beans are heated above 74°C (165°F) before assembling.'],
    servingGuide: {
      restingTime: 'Rest 2 minutes in foil before slicing.',
      temperature: 'Piping hot.',
      garnishing: 'Extra guacamole, salsa roja, and Mexican crema on the side.',
      accompaniments: 'Tortilla chips, salsa verde, and pickled jalapeños.'
    }
  },

  // 3. ENCHILADAS (Authentic Enchiladas Rojas con Queso y Pollo)
  {
    id: 'enchiladas',
    name: 'Authentic Mexican Enchiladas Rojas (Corn Tortillas in Guajillo Chili Sauce)',
    cuisine: 'Mexican',
    region: 'Central Mexico (Puebla / Oaxaca)',
    servings: 4,
    prepTime: 30,
    cookTime: 25,
    difficulty: 'Medium',
    overview: {
      summary: 'True traditional Mexican enchiladas (not baked American casseroles!): dried Guajillo and Ancho chiles toasted and blended with charred tomatoes, garlic, and Mexican oregano into a silky, brick-red sauce. Corn tortillas are flash-fried in hot oil, dipped into the bubbling chili sauce, rolled around seasoned shredded chicken and queso fresco, and crowned with Mexican crema, sliced onions, and cilantro.',
      appearance: 'Vibrant brick-red glistening rolled tortillas bathed in deep crimson chili sauce, decorated with streaks of white Mexican crema, crumbled snow-white queso fresco, and thin onion rings.',
      texture: 'Silky, tender corn tortillas that hold their shape without turning to mush, enveloping juicy shredded chicken with salty crumbly cheese.',
      flavor: 'Rich, earthy dried chiles (sweet raisin Ancho and bright tangy Guajillo) with gentle warmth, savory chicken, and cooling creamy dairy.',
      restingTimeMinutes: 5
    },
    equipment: [
      { name: 'High-speed blender', purpose: 'To puree rehydrated dried chiles and charred tomatoes into a mirror-smooth red sauce.' },
      { name: 'Wide skillet or frying pan', purpose: 'To flash-fry corn tortillas and simmer the chili sauce.' },
      { name: 'Fine mesh sieve', purpose: 'To strain chile skins for an ultra-silky sauce.' }
    ],
    beforeYouStart: [
      { task: 'Stem, seed, and rinse 4 dried Guajillo chiles and 2 dried Ancho chiles.', durationMinutes: 5 },
      { task: 'Soak chiles in boiling hot water for 15 minutes until soft and pliable.', durationMinutes: 15 },
      { task: 'Shred 350g cooked chicken breast or thigh meat and season with 1/2 tsp salt and pinch of cumin.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'Flash-Frying Tortillas (Pasar por Aceite)', technique: 'You MUST fry corn tortillas in hot oil for 5-8 seconds per side! This coats the corn starches in fat, creating a waterproof barrier so the tortillas absorb rich chili sauce without disintegrating into soggy porridge.' },
      { item: 'Straining the Chile Sauce', technique: 'Always pass blended dried chile sauce through a fine wire sieve. This removes tough papery chile skins, yielding a velvety restaurant-quality sauce.' }
    ],
    essentialIngredients: [
      { name: 'Dried Guajillo chiles', prep: 'stemmed, seeded, rehydrated', amount: '4 chiles', metric: '25g', imperial: '0.9 oz', common: '4 chiles' },
      { name: 'Dried Ancho chiles', prep: 'stemmed, seeded, rehydrated', amount: '2 chiles', metric: '30g', imperial: '1 oz', common: '2 chiles' },
      { name: 'Ripe plum tomatoes', prep: 'charred in a dry skillet', amount: '3 medium', metric: '250g', imperial: '8.8 oz', common: '3 tomatoes' },
      { name: 'White onion & Garlic cloves', prep: 'charred', amount: '1/2 onion + 3 cloves garlic', metric: '80g', imperial: '2.8 oz', common: 'mixed' },
      { name: 'Chicken stock', prep: 'hot broth for blending', amount: '1.5 cups', metric: '360ml', imperial: '12 fl oz', common: '1.5 cups' },
      { name: 'Mexican oregano & Ground cumin', prep: 'seasoning', amount: '1 tsp oregano + 1/2 tsp cumin', metric: '4g', imperial: '0.14 oz', common: 'mixed' },
      { name: 'Corn tortillas (12cm)', prep: 'fresh yellow or white corn', amount: '12 tortillas', metric: '12 pieces', imperial: '12 pieces', common: '12 tortillas' },
      { name: 'Shredded cooked chicken', prep: 'poached or roasted chicken', amount: '350g', metric: '350g', imperial: '12 oz', common: '350g' },
      { name: 'Mexican Queso Fresco or Cotija', prep: 'crumbled fine', amount: '1 cup', metric: '120g', imperial: '4.2 oz', common: '1 cup' },
      { name: 'Mexican Crema or sour cream', prep: 'for drizzling', amount: '1/2 cup', metric: '120ml', imperial: '4 fl oz', common: '1/2 cup' },
      { name: 'Neutral oil', prep: 'for flash-frying tortillas', amount: '1/2 cup', metric: '120ml', imperial: '4 fl oz', common: '1/2 cup' },
      { name: 'Fine sea salt', prep: 'seasoning', amount: '1.5 tsp', metric: '9g', imperial: '0.3 oz', common: '1.5 tsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'BLEND & SIMMER THE GUAJILLO-ANCHO SAUCE',
        whatYouNeed: ['Soaked chiles', 'Charred tomatoes', 'Charred onion & garlic', 'Chicken stock', 'Oregano & Cumin', '1 tbsp oil'],
        description: 'In a blender, combine the rehydrated chiles, charred tomatoes, charred onion, garlic, chicken stock, oregano, cumin, and 1.5 tsp salt. Blend on high speed for 2 minutes until smooth. Pour through a fine mesh strainer into a saucepan with 1 tbsp hot oil. Simmer over medium-low heat for 10 minutes until thickened into a glossy, velvety brick-red sauce that coats the back of a spoon.',
        howToDoIt: 'Frying the pureed sauce in hot oil ("searing the salsa") deepens the chile flavors and rounds out raw acidity.',
        heat: 'Medium-Low Heat',
        duration: 15,
        visualCues: 'Deep crimson, glistening sauce bubbling gently with a satiny sheen.',
        smell: 'Rich dried chiles, sweet roasted tomatoes, and roasted garlic.',
        textureCheck: 'Velvety sauce with no bitter chile flakes.',
        whatShouldThisLookLike: 'A smooth, glossy Mexican red chile sauce.',
        tip: 'Keep the sauce warm over low heat so dipped tortillas absorb flavor instantly.',
        commonMistake: 'Skipping straining, leaving fibrous chile skins in the sauce that stick to teeth.',
        moveOnWhen: 'Sauce is simmered and smooth.',
        quickInstructions: 'Blend soaked chiles, tomatoes, onion, garlic, and stock; strain through sieve and simmer in 1 tbsp oil 10 mins.'
      },
      {
        step: 2,
        title: 'FLASH-FRY TORTILLAS IN HOT OIL',
        whatYouNeed: ['Skillet with 1/2 cup hot oil (175°C / 350°F)', '12 corn tortillas', 'Tongs', 'Paper towels'],
        description: 'Heat 1/2 cup oil in a skillet over medium-high heat. Using metal tongs, slide one corn tortilla into the hot oil. Fry for strictly 5 to 7 seconds, flip, and fry for 5 seconds more. The tortilla should soften and become pliable, but MUST NOT turn crispy! Remove immediately and drain on paper towels. Repeat with all 12 tortillas.',
        howToDoIt: 'A 5-second oil dip seals the masa starches with a micro-thin fat coating, preventing the tortilla from dissolving into mush when bathed in sauce.',
        heat: 'Medium-High Heat',
        duration: 6,
        visualCues: 'Tortilla softens instantly, bubbles lightly in oil, and becomes limp and pliable.',
        hear: 'Quick, lively sizzle upon hitting oil.',
        smell: 'Toasted corn masa.',
        textureCheck: 'Pliable, limp, and soft — not crunchy.',
        whatShouldThisLookLike: 'Limp, oil-softened corn tortillas stacked on paper towels.',
        tip: 'Do not fry longer than 7 seconds per side or you will end up with crisp tostadas that cannot be rolled.',
        commonMistake: 'Skipping the oil frying, which guarantees tortillas will disintegrate into baby food in the sauce.',
        moveOnWhen: 'All 12 tortillas are softened in oil.',
        quickInstructions: 'Fry each corn tortilla in hot oil for 5-7 seconds per side until soft and limp; drain on paper towels.'
      },
      {
        step: 3,
        title: 'DIP IN CHILI SAUCE & ROLL WITH CHICKEN',
        whatYouNeed: ['Warm chili sauce', 'Softened tortillas', 'Shredded chicken', 'Crumbled cheese', 'Baking dish or platter'],
        description: 'Using tongs, dip a softened tortilla directly into the warm red chili sauce for 3 seconds until completely coated on both sides. Lay flat on a plate. Place 2 tablespoons of shredded chicken and 1 tablespoon of crumbled queso fresco down the center. Roll the tortilla tightly into a cylinder and place seam-side down on a serving platter. Repeat with remaining tortillas.',
        howToDoIt: 'Dipping the tortilla into the sauce before filling guarantees flavor on the inside and outside of every roll.',
        heat: 'Low Heat (sauce)',
        duration: 8,
        visualCues: 'Deep red, glossy rolled tortillas arranged side-by-side in neat rows.',
        smell: 'Warm chiles, roasted chicken, and salty cheese.',
        textureCheck: 'Soft, tender, intact rolls.',
        whatShouldThisLookLike: 'Neat rows of red-sauced enchiladas.',
        tip: 'In authentic Mexican style, enchiladas are served freshly rolled on plates, not baked dry in a casserole dish for an hour.',
        commonMistake: 'Leaving tortillas sitting in the sauce for minutes, which causes them to break apart.',
        moveOnWhen: 'All 12 enchiladas are rolled and arranged on platters.',
        quickInstructions: 'Dip tortilla in warm sauce, fill with shredded chicken and cheese, roll tightly, place seam-side down.'
      },
      {
        step: 4,
        title: 'LADLE SAUCE & CROWN WITH CREMA & ONIONS',
        whatYouNeed: ['Remaining warm sauce', 'Mexican Crema', 'Crumbled Queso Fresco', 'Thin white onion rings', 'Fresh cilantro'],
        description: 'Ladle extra hot red sauce generously over the rolled enchiladas. Drizzle with ribbons of cool Mexican Crema. Shower with crumbled white Queso Fresco, paper-thin white onion rings, and fresh cilantro leaves. Serve immediately while warm.',
        howToDoIt: 'The contrast between the warm, mildly spicy red chile sauce and the cold, tangy white crema and salty queso fresco is the ultimate hallmark of Mexican cuisine.',
        heat: 'No Heat',
        duration: 3,
        visualCues: 'Vivid red enchiladas striped with creamy white lines and crumbled snow-white cheese.',
        smell: 'Earthy chiles, sweet cream, and sharp onion.',
        textureCheck: 'Melt-in-the-mouth soft corn tortilla with tender chicken and cool creamy finish.',
        whatShouldThisLookLike: 'Masterpiece Mexican enchiladas rojas.',
        tip: 'If you want melted cheese on top, slide the platter under a hot broiler for 2 minutes before garnishing with crema.',
        commonMistake: 'Drowning in yellow cheddar cheese — authentic enchiladas use crumbly, salty Queso Fresco.',
        moveOnWhen: 'Garnished and served hot.',
        quickInstructions: 'Ladle warm sauce over rolled enchiladas, drizzle with crema, sprinkle with queso fresco, onion rings, and cilantro.'
      }
    ],
    commonMistakes: [
      { mistake: 'Not frying tortillas in oil', remedy: 'Tortillas MUST be dipped in hot oil for 5 seconds to prevent them from dissolving into mush.' },
      { mistake: 'Baking until dried out', remedy: 'Traditional Mexican enchiladas are rolled and sauced fresh on the plate, not baked to death.' }
    ],
    troubleshooting: [
      {
        problem: 'Tortillas ripped and fell apart when rolled',
        whatHappened: 'The corn dough disintegrated.',
        whyItHappened: 'They were either not fried in oil, or were soaked too long in the sauce.',
        whatToDoNow: 'Layer them flat like a lasagna (Enmoladas/Pastel Azteca style) with chicken and sauce — flavor is identical!',
        howToPrevent: 'Fry for 5 seconds in hot oil to seal, and roll immediately after dipping.'
      }
    ],
    substitutions: [
      { original: 'Queso Fresco', substitute: 'Crumbled Greek Feta or Farmer\'s cheese', notes: 'Provides identical salty, crumbly bite.' },
      { original: 'Mexican Crema', substitute: 'Sour cream whisked with 1 tbsp heavy cream and pinch of salt', notes: 'Recreates the pourable drizzle consistency.' }
    ],
    safetyNotes: ['Wash hands thoroughly after handling dried chiles to prevent eye irritation.'],
    servingGuide: {
      restingTime: 'Serve immediately.',
      temperature: 'Warm.',
      garnishing: 'Crumbled Queso Fresco, Mexican Crema, thin white onion slices, and fresh cilantro.',
      accompaniments: 'Refried black beans, Mexican red rice (Arroz Rojo), and fresh avocado slices.'
    }
  },

  // 4. QUESADILLAS (Authentic Mexican Street Quesadillas with Oaxaca Cheese)
  {
    id: 'quesadillas',
    name: 'Authentic Mexican Quesadillas (Crisp Comal-Toasted with Queso Oaxaca & Epazote)',
    cuisine: 'Mexican',
    region: 'Central Mexico (Mexico City / Oaxaca)',
    servings: 4,
    prepTime: 15,
    cookTime: 12,
    difficulty: 'Easy',
    overview: {
      summary: 'Authentic Mexican street-style quesadillas: fresh masa or soft corn/flour tortillas filled with stringy, melting Queso Oaxaca (quesillo), fresh sprigs of fragrant epazote, and optional sautéed squash blossoms (flor de calabaza) or shredded chicken. Toasted on a hot dry comal until blistered and crisp on the exterior while the cheese melts into molten stretchy ribbons.',
      appearance: 'Half-moon folded golden flatbreads blistered with brown toasted spots, with molten strands of white cheese stretching out from the edges.',
      texture: 'Crispy crackling exterior giving way to chewy, pillowy dough and ultra-stretchy, gooey, melted cheese.',
      flavor: 'Toasted corn/flour aroma, rich buttery dairy, distinct herbal epazote earthiness, and a kick from salsa verde.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Heavy cast-iron skillet or Comal', purpose: 'For dry contact heat to crisp tortillas and melt cheese evenly.' }
    ],
    beforeYouStart: [
      { task: 'Shred 300g Queso Oaxaca into thin stringy ribbons (do not cube).', durationMinutes: 5 },
      { task: 'Pick leaves from 4 sprigs of fresh epazote (or Mexican oregano).', durationMinutes: 2 }
    ],
    ingredientPrepGuide: [
      { item: 'Queso Oaxaca (Quesillo) Pulling', technique: 'Queso Oaxaca is a stretched-curd cheese (pasta filata). Always pull it apart into thin strings with your fingers like string cheese rather than grating it. Thin strings melt instantly and create legendary cheese pulls.' },
      { item: 'Dry Comal Toasting', technique: 'Authentic comal quesadillas use no oil or butter! The tortilla toasts dry against the scorching cast iron, creating an earthy, smoky toasted flavor and light crispness.' }
    ],
    essentialIngredients: [
      { name: 'Fresh corn tortillas (or flour tortillas)', prep: 'room temperature', amount: '8 tortillas', metric: '8 pieces', imperial: '8 pieces', common: '8 tortillas' },
      { name: 'Queso Oaxaca (Quesillo) or Chihuahua cheese', prep: 'shredded into thin strings', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '3 cups shredded' },
      { name: 'Fresh epazote leaves (or Mexican oregano)', prep: 'fresh leaves', amount: '8-10 leaves', metric: '4g', imperial: '0.14 oz', common: '10 leaves' },
      { name: 'Salsa verde & Salsa roja', prep: 'for serving', amount: '1/2 cup each', metric: '120ml', imperial: '4 fl oz', common: '1/2 cup' },
      { name: 'Fine sea salt', prep: 'light pinch', amount: '1/4 tsp', metric: '1g', imperial: '0.04 oz', common: '1 pinch' }
    ],
    optionalIngredients: [
      { name: 'Sautéed mushrooms or shredded chicken', prep: 'cooked filling', amount: '1 cup', metric: '150g', imperial: '5.3 oz', common: '1 cup' },
      { name: 'Pickled jalapeño slices', prep: 'for spice lovers', amount: '2 tbsp', metric: '20g', imperial: '0.7 oz', common: '2 tbsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'WARM TORTILLA ON DRY COMAL',
        whatYouNeed: ['Cast-iron comal or skillet', 'Tortillas'],
        description: 'Heat a dry cast-iron skillet or comal over medium heat until hot. Lay one tortilla onto the dry iron. Heat for 20 seconds until warm and pliable.',
        howToDoIt: 'Warming before filling ensures the tortilla bends cleanly in half without cracking along the spine.',
        heat: 'Medium Heat',
        duration: 1,
        visualCues: 'Tortilla softens and releases a warm toasted aroma.',
        textureCheck: 'Soft and flexible.',
        whatShouldThisLookLike: 'A warm, pliable tortilla resting on the hot skillet.',
        tip: 'Do not add butter or oil to the skillet — authentic quesadillas toast dry on the iron.',
        commonMistake: 'Adding cheese to a cold stiff tortilla, which tears when folded in half.',
        moveOnWhen: 'Tortilla is warm and flexible.',
        quickInstructions: 'Warm tortilla on dry hot skillet for 20 seconds until pliable.'
      },
      {
        step: 2,
        title: 'ADD OAXACA CHEESE & EPAZOTE & FOLD',
        whatYouNeed: ['Pulled Queso Oaxaca strings', 'Fresh epazote leaves', 'Optional filling'],
        description: 'Scatter 40g of pulled Queso Oaxaca strings across one half of the warmed tortilla. Lay 1-2 fresh epazote leaves over the cheese. Fold the empty half over the cheese to form a neat half-moon shape. Press down gently with a spatula.',
        howToDoIt: 'Spreading cheese only on one half allows for a clean fold and seals the cheese inside during melting.',
        heat: 'Medium Heat',
        duration: 2,
        visualCues: 'A half-moon folded tortilla with visible strands of cheese tucked inside.',
        smell: 'Sweet melting dairy and herbal epazote perfume.',
        textureCheck: 'Fluffy folded tortilla.',
        whatShouldThisLookLike: 'A neat half-moon parcel on the comal.',
        tip: 'Fresh epazote is the aromatic soul of Mexico City quesadillas — it provides a rustic, tea-like herbal depth.',
        commonMistake: 'Overfilling with cheese so it oozes out and burns black on the pan before the tortilla toasts.',
        moveOnWhen: 'Folded in half and pressed with spatula.',
        quickInstructions: 'Place pulled Oaxaca cheese and epazote on one half; fold over into half-moon and press gently.'
      },
      {
        step: 3,
        title: 'TOAST UNTIL BLISTERED & CHEESE IS MOLTEN',
        whatYouNeed: ['Hot skillet', 'Spatula', 'Folded quesadillas'],
        description: 'Cook on medium heat for 2 minutes until the underside develops golden-brown blistered toasted spots. Flip carefully with a spatula. Toast the second side for 2 minutes until crispy and the cheese inside is completely melted, bubbling, and gooey.',
        howToDoIt: 'Gentle medium heat allows the cheese to melt fully before the outer tortilla burns.',
        heat: 'Medium Heat',
        duration: 4,
        visualCues: 'Tortilla has crisp, mottled golden-brown toasted spots; melted cheese bubbles at the edges.',
        hear: 'Delicate sizzling as cheese touches the hot iron.',
        smell: 'Toasted corn and rich melted cheese.',
        textureCheck: 'Crisp exterior with molten, gooey center.',
        whatShouldThisLookLike: 'Golden blistered quesadilla with melted cheese peeking out.',
        tip: 'If cheese isn\'t melted yet, cover the pan with a lid for 30 seconds to trap steam.',
        commonMistake: 'Cooking over high heat, scorching the tortilla black while the cheese inside remains cold and solid.',
        moveOnWhen: 'Both sides are crispy and cheese is molten.',
        quickInstructions: 'Toast 2 mins per side on medium heat until golden-blistered and cheese is fully melted.'
      },
      {
        step: 4,
        title: 'SERVE PIPING HOT WITH SALSAS',
        whatYouNeed: ['Hot quesadillas', 'Salsa verde', 'Salsa roja', 'Mexican crema'],
        description: 'Transfer hot quesadillas to a plate. Pull gently apart with your fingers to admire the dramatic stretchy cheese pull. Spoon spicy salsa verde and salsa roja directly into the open edge or serve on the side. Eat piping hot while the cheese is molten.',
        howToDoIt: 'Quesadillas must be eaten immediately off the comal before the molten cheese cools and solidifies.',
        heat: 'No Heat',
        duration: 1,
        visualCues: 'Impressive 30cm stretchy cheese pull linking the folded halves.',
        smell: 'Toasted corn, pungent cheese, and spicy salsa.',
        textureCheck: 'Crisp crunch followed by stretchy, gooey, creamy chew.',
        whatShouldThisLookLike: 'Crispy golden quesadillas ready to dip in salsa.',
        tip: 'Serve with guacamole and Mexican crema for a full feast.',
        commonMistake: 'Letting them sit for 15 minutes, where cheese turns firm and rubbery.',
        moveOnWhen: 'Served piping hot.',
        quickInstructions: 'Transfer to plate, pull open to see cheese stretch, serve with salsa verde and salsa roja.'
      }
    ],
    commonMistakes: [
      { mistake: 'Using cheddar cheese', remedy: 'Cheddar separates into orange grease. Use Queso Oaxaca, Mozzarella, or Chihuahua for silky stretch.' },
      { mistake: 'Too much oil', remedy: 'Toast on a dry comal or skillet for authentic blistered crispness.' }
    ],
    troubleshooting: [
      {
        problem: 'Tortilla is burnt but cheese is still cold',
        whatHappened: 'Heat was too high.',
        whyItHappened: 'High surface heat charred the outside before heat could penetrate the interior.',
        whatToDoNow: 'Turn heat down to low, cover skillet with a lid for 60 seconds to trap ambient heat and melt cheese.',
        howToPrevent: 'Always cook quesadillas over medium to medium-low heat.'
      }
    ],
    substitutions: [
      { original: 'Queso Oaxaca', substitute: 'Low-moisture whole-milk Mozzarella or Muenster', notes: 'Provides identical stringy melt and dairy flavor.' },
      { original: 'Epazote', substitute: 'Fresh cilantro or pinch of dried Mexican oregano', notes: 'Adds fresh herbal aroma.' }
    ],
    safetyNotes: ['Beware of molten cheese burns when taking the first bite.'],
    servingGuide: {
      restingTime: '0 minutes — eat immediately off the comal.',
      temperature: 'Piping hot and molten.',
      garnishing: 'Fresh cilantro sprigs and salsa verde.',
      accompaniments: 'Guacamole, Mexican crema, and refried beans.'
    }
  },

  // 5. NACHOS (Authentic Sheet-Pan Loaded Cantina Nachos)
  {
    id: 'nachos',
    name: 'Authentic Cantina Sheet-Pan Loaded Nachos (Totopos con Queso y Frijoles)',
    cuisine: 'Mexican',
    region: 'Northern Mexico (Piedras Negras / Coahuila)',
    servings: 4,
    prepTime: 20,
    cookTime: 12,
    difficulty: 'Easy',
    overview: {
      summary: 'Invented in 1940 by Ignacio "Nacho" Anaya in Piedras Negras, Mexico: thick, sturdy fried corn tortilla chips (totopos) arranged in a single layered sheet pan, individually blanketed with warm refried beans, shredded Colby Jack and Queso Oaxaca, pickled jalapeño rings, seasoned beef, and baked until the cheese is bubbling and melted. Crowned with guacamole, pico de gallo, and Mexican crema.',
      appearance: 'A colorful, golden sheet pan overflowing with crisp chips blanketed in bubbly melted cheese, red salsa, green guacamole, and bright green pickled jalapeños.',
      texture: 'Maximum crunch from sturdy corn chips with gooey melted cheese, creamy beans, and crisp fresh toppings.',
      flavor: 'Toasted corn, rich melted cheese, savory seasoned beef, fiery pickled jalapeño vinegary kick, and cool creamy avocado.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Rimmed metal sheet pan (Baking sheet)', purpose: 'Essential for wide single-layer spreading so every chip gets cheese (no naked chips!).' },
      { name: 'Oven at 200°C (400°F)', purpose: 'To melt cheese rapidly without baking chips into dry cardboard.' }
    ],
    beforeYouStart: [
      { task: 'Preheat oven to 200°C (400°F).', durationMinutes: 15 },
      { task: 'Grate 200g Monterey Jack / Cheddar and 100g Queso Oaxaca.', durationMinutes: 5 },
      { task: 'Warm 1 cup refried black or pinto beans.', durationMinutes: 3 }
    ],
    ingredientPrepGuide: [
      { item: 'The Wide Layer Rule (No Soggy Mounds!)', technique: 'Never pile nachos into a tall pyramid! A pyramid leaves a mountain of dry naked chips at the bottom and a soggy mess on top. Spread chips in a wide, shallow, overlapping layer across the entire sheet pan so every single chip receives cheese and toppings.' },
      { item: 'Sturdy Corn Totopos', technique: 'Use thick restaurant-style corn tortilla chips (totopos). Thin delicate store-bought chips will snap under the weight of beans and melted cheese.' }
    ],
    essentialIngredients: [
      { name: 'Thick restaurant-style corn tortilla chips (Totopos)', prep: 'sturdy salted chips', amount: '350g', metric: '350g', imperial: '12 oz', common: '1 large bag' },
      { name: 'Monterey Jack & Sharp Cheddar cheese', prep: 'freshly shredded', amount: '2 cups', metric: '200g', imperial: '7 oz', common: '2 cups' },
      { name: 'Queso Oaxaca or Mozzarella', prep: 'pulled strings', amount: '1 cup', metric: '100g', imperial: '3.5 oz', common: '1 cup' },
      { name: 'Refried black or pinto beans', prep: 'warm and spoonable', amount: '1 cup', metric: '240g', imperial: '8.5 oz', common: '1 cup' },
      { name: 'Seasoned ground beef or shredded chicken', prep: 'cooked warm with taco spices', amount: '250g', metric: '250g', imperial: '8.8 oz', common: '250g' },
      { name: 'Pickled jalapeño slices (Escabeche)', prep: 'drained', amount: '1/3 cup', metric: '50g', imperial: '1.8 oz', common: '1/3 cup' },
      { name: 'Fresh Pico de Gallo', prep: 'drained of watery juice', amount: '1 cup', metric: '180g', imperial: '6.3 oz', common: '1 cup' },
      { name: 'Fresh Guacamole', prep: 'chunky avocado', amount: '1 cup', metric: '200g', imperial: '7 oz', common: '1 cup' },
      { name: 'Mexican Crema or sour cream', prep: 'in a squeeze bottle or spooned', amount: '1/2 cup', metric: '120ml', imperial: '4 fl oz', common: '1/2 cup' }
    ],
    steps: [
      {
        step: 1,
        title: 'BUILD THE TWO-TIER SHEET PAN BASE',
        whatYouNeed: ['Sheet pan', 'Tortilla chips', 'Half the cheese', 'Warm refried beans', 'Warm meat'],
        description: 'Spread half of the tortilla chips across the rimmed sheet pan in an even, overlapping layer. Scatter small dollops of warm refried beans and seasoned meat over the chips. Shower with half of the shredded cheese blend. Layer the remaining chips over top, followed by remaining beans, meat, and the rest of the cheese. Scatter pickled jalapeño slices over the top.',
        howToDoIt: 'Building two thin tiers ensures that middle chips get covered in melted cheese and toppings rather than staying bare.',
        heat: 'No Heat',
        duration: 5,
        visualCues: 'A wide, vibrant sheet pan with visible chips, beans, spiced meat, and a heavy blanket of shredded cheese.',
        textureCheck: 'Crisp sturdy chips ready for the oven.',
        whatShouldThisLookLike: 'A fully loaded sheet pan ready for melting.',
        tip: 'Warm the refried beans before dolloping — cold beans won\'t heat through during a quick cheese melt.',
        commonMistake: 'Mounding all chips in a tall pile, leaving bottom chips completely bare.',
        moveOnWhen: 'Sheet pan is evenly layered and covered in cheese.',
        quickInstructions: 'Layer half chips, beans, meat, and cheese; repeat with second layer of chips, meat, cheese, and jalapeños.'
      },
      {
        step: 2,
        title: 'BAKE AT 200°C UNTIL BUBBLING & MOLTEN',
        whatYouNeed: ['Preheated oven (200°C / 400°F)', 'Loaded sheet pan'],
        description: 'Slide the sheet pan into the upper-middle rack of the preheated oven. Bake for 8 to 10 minutes until the cheese is completely melted, bubbling furiously, and lightly golden around the edges, while the chips warm and toast.',
        howToDoIt: 'High heat melts the cheese rapidly in under 10 minutes, keeping the chips crisp and preventing them from getting soggy.',
        heat: 'Oven at 200°C / 400°F',
        duration: 10,
        visualCues: 'Molten, bubbling cheese cloaking the chips with glistening golden edges; sizzling jalapeños.',
        hear: 'Brisk bubbling and gentle sizzling.',
        smell: 'Toasted corn, bubbling cheddar, and spicy jalapeño vinegar.',
        textureCheck: 'Piping hot, gooey cheese binding crisp chips together.',
        whatShouldThisLookLike: 'A sizzling, glorious sheet pan of melted cantina nachos.',
        tip: 'Switch oven to broil for the final 60 seconds if you want browned toasted cheese spots.',
        commonMistake: 'Leaving in the oven too long at low heat, which turns the chips stale and dry.',
        moveOnWhen: 'Cheese is fully melted and bubbling.',
        quickInstructions: 'Bake at 200°C for 8-10 minutes until cheese is molten and bubbling.'
      },
      {
        step: 3,
        title: 'CROWN WITH FRESH COLD TOPPINGS',
        whatYouNeed: ['Hot baked nachos', 'Pico de Gallo', 'Guacamole', 'Mexican Crema', 'Fresh cilantro'],
        description: 'Remove hot sheet pan from the oven and set onto a heatproof trivet. Immediately dollop generous spoonfuls of cool guacamole and drained Pico de Gallo over the melted cheese. Drizzle ribbons of Mexican crema across the pan and scatter fresh cilantro leaves.',
        howToDoIt: 'Adding the cold, fresh toppings after baking creates the legendary hot-and-cold contrast essential to great nachos.',
        heat: 'No Heat',
        duration: 2,
        visualCues: 'Vivid green guacamole, ruby red pico de gallo, and white crema drizzled over golden bubbling cheese.',
        smell: 'Hot melted cheese, zesty lime, cilantro, and roasted corn.',
        textureCheck: 'Molten crunchy hot base contrasted with cool, creamy, refreshing toppings.',
        whatShouldThisLookLike: 'A stunning, colorful loaded nacho platter ready to share.',
        tip: 'Drain your Pico de Gallo in a sieve before spooning onto the nachos so excess tomato juice does not soften the chips.',
        commonMistake: 'Baking the guacamole and sour cream in the oven, which turns them warm and separated.',
        moveOnWhen: 'Topped and served immediately.',
        quickInstructions: 'Dollop cool guacamole and pico de gallo over hot melted nachos; drizzle with crema and cilantro.'
      }
    ],
    commonMistakes: [
      { mistake: 'Pyramid layering', remedy: 'Spread wide in a single sheet pan so every chip has melted cheese and toppings.' },
      { mistake: 'Using canned cheese sauce alone', remedy: 'Canned liquid cheese makes chips soggy within 2 minutes. Use real shredded cheese baked in the oven.' }
    ],
    troubleshooting: [
      {
        problem: 'Chips became soggy under the toppings',
        whatHappened: 'Chips lost their crisp crunch.',
        whyItHappened: 'The salsa was too wet or nachos sat too long before eating.',
        whatToDoNow: 'Scoop into bowls and eat with a fork, or pop back under broiler for 2 minutes.',
        howToPrevent: 'Always drain Pico de Gallo and eat immediately after baking.'
      }
    ],
    substitutions: [
      { original: 'Ground beef', substitute: 'Black beans and roasted corn (Vegetarian)', notes: 'Rich, hearty plant-based topping.' },
      { original: 'Queso Oaxaca', substitute: 'Provolone or Low-moisture Mozzarella', notes: 'Delivers great gooey cheese pull.' }
    ],
    safetyNotes: ['Sheet pan is piping hot — warn diners not to touch the metal edges.'],
    servingGuide: {
      restingTime: 'Serve immediately off the hot sheet pan.',
      temperature: 'Piping hot base with cool fresh toppings.',
      garnishing: 'Fresh cilantro sprigs, lime wedges, and extra pickled jalapeños.',
      accompaniments: 'Ice-cold Mexican lager, Margaritas, and extra hot salsa on the side.'
    }
  },

  // 6. TAMALES (Authentic Mexican Tamales Rojos de Cerdo)
  {
    id: 'tamales',
    name: 'Authentic Mexican Tamales Rojos (Pork in Red Chile Wrapped in Corn Husks)',
    cuisine: 'Mexican',
    region: 'Central Mexico (Michoacán / Oaxaca)',
    servings: 6,
    prepTime: 45,
    cookTime: 75,
    difficulty: 'Hard',
    overview: {
      summary: 'The ancient ceremonial heart of Mexican culinary heritage: dried corn husks (hojas de maíz) soaked until pliable, spread with an ultra-airy whipped corn masa dough infused with pork lard and rich broth, filled with succulent braised pork shoulder simmered in a velvet Ancho and Guajillo chile sauce. Folded into neat packets and steam-cooked in a Tamalera for over an hour until the masa effortlessly pulls away from the husk, light as a cloud.',
      appearance: 'Warm corn-husk packets tied with husk ribbons, peeled open to reveal a steaming, golden-pale masa cake wrapped around a ruby-red core of tender shredded pork.',
      texture: 'Feather-light, tender, and moist masa that melts on the tongue with zero heaviness, complemented by juicy, tender shredded pork.',
      flavor: 'Rich earthy corn masa, savory whipped lard, mild sweet dried chiles (Guajillo and Ancho), garlic, and tender pork.',
      restingTimeMinutes: 10
    },
    equipment: [
      { name: 'Large steamer pot (Tamalera) with steam rack', purpose: 'To vertically steam tamales above boiling water for 60-75 minutes.' },
      { name: 'Stand mixer or large bowl', purpose: 'To whip pork lard until white, fluffy, and airy like buttercream.' }
    ],
    beforeYouStart: [
      { task: 'Soak 20 dried corn husks in a sink or large bowl of hot water for at least 1 hour until soft, flexible, and pliable.', durationMinutes: 60 },
      { task: 'Braise 600g pork shoulder with onion and garlic for 2 hours; shred meat and simmer in Guajillo-Ancho sauce (see Enchiladas recipe).', durationMinutes: 120 },
      { task: 'Chill 150g pure pork lard until cold.', durationMinutes: 10 }
    ],
    ingredientPrepGuide: [
      { item: 'Whipping the Lard (The Secret to Light Tamales)', technique: 'Whip cold lard with salt and baking powder using a mixer for 8-10 minutes until it turns snowy white, light, and fluffy like cake frosting. This incorporates microscopic air bubbles into the fat.' },
      { item: 'The Float Test (Prueba de la Flotación)', technique: 'Drop a 1/2-teaspoon ball of mixed masa dough into a glass of cold water. If it floats to the surface like a cork, your masa has enough whipped air and will steam into feather-light tamales. If it sinks, whip for 3 more minutes.' }
    ],
    essentialIngredients: [
      { name: 'Dried corn husks (Hojas de maíz)', prep: 'soaked in hot water until soft', amount: '20 husks', metric: '20 pieces', imperial: '20 pieces', common: '20 husks' },
      { name: 'Masa Harina for Tamales (Maseca Tamal)', prep: 'coarser stone-ground corn flour', amount: '450g', metric: '450g', imperial: '1 lb', common: '3.5 cups' },
      { name: 'Pure pork lard (Manteca de cerdo)', prep: 'chilled and whipped', amount: '180g', metric: '180g', imperial: '6.3 oz', common: '3/4 cup' },
      { name: 'Rich pork broth (from braising pork)', prep: 'warm', amount: '2.5 to 3 cups', metric: '650ml', imperial: '22 fl oz', common: '2.75 cups' },
      { name: 'Baking powder', prep: 'for leavening', amount: '1.5 tsp', metric: '7g', imperial: '0.25 oz', common: '1.5 tsp' },
      { name: 'Fine sea salt', prep: 'seasoning', amount: '1.5 tsp', metric: '9g', imperial: '0.3 oz', common: '1.5 tsp' },
      { name: 'Braised pork shoulder in red chile sauce', prep: 'shredded and cooled', amount: '400g', metric: '400g', imperial: '14 oz', common: '400g' }
    ],
    steps: [
      {
        step: 1,
        title: 'WHIP THE LARD UNTIL SNOWY & AIRY',
        whatYouNeed: ['180g chilled pork lard', '1.5 tsp salt', '1.5 tsp baking powder', 'Stand mixer with paddle'],
        description: 'In the bowl of a stand mixer, combine the chilled pork lard, salt, and baking powder. Beat on medium-high speed for 8 minutes, scraping the bowl once or twice, until the lard expands, turns snowy white, and resembles fluffy cake frosting.',
        howToDoIt: 'Whipping lard creates a suspension of air pockets that expand during steaming, transforming dense cornmeal into an airy cloud.',
        heat: 'No Heat',
        duration: 10,
        visualCues: 'Lard transforms from yellow-gray and dense to pristine snowy white, fluffy, and light.',
        smell: 'Clean, savory aroma.',
        textureCheck: 'Airy and spreadable like buttercream frosting.',
        whatShouldThisLookLike: 'Fluffy white whipped fat in the mixer bowl.',
        tip: 'Authentic tamales require pork lard for authentic flavor and tender texture — vegetable shortening works as a substitute but lacks flavor.',
        commonMistake: 'Barely stirring the lard, leaving it dense and heavy.',
        moveOnWhen: 'Lard is white, light, and fluffy.',
        quickInstructions: 'Whip chilled pork lard, salt, and baking powder on medium-high for 8 mins until snowy white and fluffy.'
      },
      {
        step: 2,
        title: 'INCORPORATE MASA HARINA & WARM BROTH',
        whatYouNeed: ['Whipped lard', 'Masa Harina (450g)', 'Warm pork broth (2.5 - 3 cups)'],
        description: 'With the mixer running on low speed, alternate adding the Masa Harina and warm pork broth in 3 additions. Once combined, increase speed to medium and beat for 5 minutes. The masa should have the consistency of soft, spreadable peanut butter. Perform the Float Test: drop 1/2 tsp masa into a glass of cold water; it must float buoyant on top.',
        howToDoIt: 'If the dough sinks, beat for another 3 minutes on medium speed to incorporate more air.',
        heat: 'No Heat',
        duration: 8,
        visualCues: 'A pale golden, glossy, soft, spreadable dough that floats effortlessly on water.',
        smell: 'Warm corn masa and savory rich broth.',
        textureCheck: 'Soft, light, and spreadable like thick cake batter.',
        whatShouldThisLookLike: 'Pliable, fluffy corn dough.',
        tip: 'Rest the mixed masa for 15 minutes before assembling so corn starches fully hydrate.',
        commonMistake: 'Making the dough too stiff and dry, resulting in rock-hard tamales.',
        moveOnWhen: 'Masa passes the float test with flying colors.',
        quickInstructions: 'Alternate adding masa harina and warm broth to whipped lard; beat 5 mins until it floats in cold water.'
      },
      {
        step: 3,
        title: 'SPREAD MASA, FILL & FOLD THE CORN HUSK',
        whatYouNeed: ['Soaked corn husks', 'Prepared masa', 'Red chile pork filling'],
        description: 'Pat a soaked corn husk dry with a towel. Lay it smooth-side up with the wide end at the top and tapered end at the bottom. Spread 3 tablespoons of masa across the top two-thirds of the husk in an even 5mm layer, leaving a 2cm border on the sides and leaving the bottom tapered third completely bare. Spoon 2 tablespoons of red pork filling down the center of the masa. Fold the two long sides of the husk together so the masa meets and encases the pork. Fold the tapered bottom end up over the seam.',
        howToDoIt: 'Always spread on the smooth side of the husk (not the rough ridged side) so the cooked tamal releases cleanly without sticking.',
        heat: 'No Heat',
        duration: 15,
        visualCues: 'A neat, rectangular packet with the bottom folded up and top open.',
        textureCheck: 'Uniform, securely wrapped packets.',
        whatShouldThisLookLike: 'Neat, identical corn husk packets ready for the steamer.',
        tip: 'Tear thin strips from an extra husk and use them to tie the packets around the waist to keep them secure.',
        commonMistake: 'Spreading masa all the way to the bottom, leaving no husk to fold upward.',
        moveOnWhen: 'All tamales are assembled and folded.',
        quickInstructions: 'Spread 3 tbsp masa on wide top of husk, add 2 tbsp pork filling down center, fold sides together, fold bottom up.'
      },
      {
        step: 4,
        title: 'STEAM VERTICALLY IN TAMALERA FOR 75 MINUTES',
        whatYouNeed: ['Steamer pot with water & coin at the bottom', 'Assembled tamales', 'Clean towel'],
        description: 'Fill bottom of steamer pot with water below the rack. Drop a clean metal coin into the water. Stand the tamales upright on the rack, open-end facing UP, leaning gently against one another (do not pack too tight). Cover with leftover corn husks and a clean damp kitchen towel, then close with a tight lid. Bring to a boil, reduce to medium-low, and steam for 65 to 75 minutes.',
        howToDoIt: 'The coin at the bottom will rattle continuously as long as water is boiling; if the rattling stops, water has evaporated and you must immediately add boiling water!',
        heat: 'Medium-Low Steam',
        duration: 75,
        visualCues: 'Puffy packets emitting fragrant corn steam; coin rattling rhythmically.',
        hear: 'Steady, rhythmic clinking of the coin in the pot.',
        smell: 'Incredible aroma of sweet steamed corn and roasted pork.',
        textureCheck: 'Firm yet tender to gentle touch.',
        whatShouldThisLookLike: 'Steaming upright tamales in the pot.',
        tip: 'To test doneness: remove one tamal and let rest 5 minutes; peel the husk. If the husk pulls away cleanly with zero masa sticking to it, they are done!',
        commonMistake: 'Unwrapping while boiling hot — tamales MUST rest 10 minutes to set before peeling.',
        moveOnWhen: 'Husk peels cleanly away from firm, tender masa.',
        quickInstructions: 'Stand tamales upright in steamer open-end UP; cover with towel and lid; steam 65-75 mins until husk peels clean.'
      },
      {
        step: 5,
        title: 'REST & PEEL OPEN THE TAMAL',
        whatYouNeed: ['Cooked tamales', 'Platter'],
        description: 'Turn off the heat, remove the lid, and let the tamales rest in the pot uncovered for 10 minutes. Transfer to a serving platter. Peel open the warm husk to reveal the pristine, golden-pale steamed corn cake. Serve with salsa verde or Mexican crema.',
        howToDoIt: 'Resting allows the starches to firm up so the tamal holds its shape cleanly on the plate.',
        heat: 'No Heat',
        duration: 10,
        visualCues: 'A glistening, perfect rectangular corn cake peeling away from the husk cleanly.',
        smell: 'Pure sweet corn and savory pork chile.',
        textureCheck: 'Tender, moist, cake-like texture that melts in the mouth.',
        whatShouldThisLookLike: 'An authentic homemade Mexican tamal ready to enjoy.',
        tip: 'Leftover tamales freeze magnificently for up to 3 months — re-steam them directly from frozen for 20 minutes.',
        commonMistake: 'Eating the outer corn husk — the husk is for cooking and holding only!',
        moveOnWhen: 'Peeled and enjoyed warm.',
        quickInstructions: 'Rest tamales 10 mins uncovered; peel open husk to reveal fluffy corn cake with red pork filling.'
      }
    ],
    commonMistakes: [
      { mistake: 'Masa too dense', remedy: 'Always whip lard until white and perform the float test before assembling.' },
      { mistake: 'Unwrapping immediately out of the pot', remedy: 'Hot tamales are soft and fragile. You must let them rest 10 minutes to firm up.' }
    ],
    troubleshooting: [
      {
        problem: 'Masa sticks stubbornly to the husk when unwrapped',
        whatHappened: 'The tamal feels wet and gummy.',
        whyItHappened: 'The tamales are undercooked, or were not allowed to rest after steaming.',
        whatToDoNow: 'Cover pot and steam for 15 more minutes, then let rest uncovered for 10 minutes.',
        howToPrevent: 'Steam for full 70 minutes and let rest 10 minutes before opening.'
      }
    ],
    substitutions: [
      { original: 'Pork lard', substitute: 'Vegetable shortening or unsalted butter', notes: 'Shortening whips well, though lard provides traditional flavor.' },
      { original: 'Pork filling', substitute: 'Rajas con Queso (roasted poblano chiles with melting cheese)', notes: 'Classic vegetarian tamale filling.' }
    ],
    safetyNotes: ['Never allow the steamer pot to boil dry — keep an ear on the coin rattle.'],
    servingGuide: {
      restingTime: 'Rest 10 minutes before peeling.',
      temperature: 'Steaming warm.',
      garnishing: 'Mexican Crema and fresh salsa roja.',
      accompaniments: 'Atole (warm masa drink), Mexican hot chocolate, or refried beans.'
    }
  },

  // 7. GUACAMOLE (Authentic Mexican Molcajete Guacamole)
  {
    id: 'guacamole',
    name: 'Authentic Mexican Molcajete Guacamole (Fresh Hass Avocado, Lime & Serrano)',
    cuisine: 'Mexican',
    region: 'Central Mexico (Michoacán)',
    servings: 4,
    prepTime: 12,
    cookTime: 0,
    difficulty: 'Very Easy',
    overview: {
      summary: 'The gold standard of Mexican culinary simplicity: ripe, buttery Hass avocados mashed in a volcanic stone molcajete with a freshly ground aromatic paste (chiltamal) of serrano chiles, diced white onion, fresh cilantro, and coarse sea salt, finished with freshly squeezed lime juice and diced tomatoes. Served chunky and rustic alongside crisp warm corn tortilla totopos.',
      appearance: 'A chunky, vibrant emerald-green avocado mash nestled in a black volcanic stone molcajete, flecked with bright ruby tomatoes, white onions, and dark green herbs.',
      texture: 'Luxuriously creamy and buttery with satisfying soft avocado chunks, punctuated by the crisp crunch of raw white onion and fresh chile.',
      flavor: 'Rich, buttery avocado, sharp fiery serrano heat, clean pungent white onion, citrusy lime tang, and herbal fresh cilantro.',
      restingTimeMinutes: 0
    },
    equipment: [
      { name: 'Molcajete (Volcanic stone mortar and pestle) or large bowl & fork', purpose: 'To crush chiles, onions, and salt into an aromatic juice paste before mashing avocados.' }
    ],
    beforeYouStart: [
      { task: 'Select 3 perfectly ripe Hass avocados (should yield gently to soft thumb pressure without feeling squishy).', durationMinutes: 2 },
      { task: 'Finely mince 1 serrano chile (with seeds for authentic heat).', durationMinutes: 2 },
      { task: 'Finely dice 1/2 white onion and 1/2 cup fresh cilantro leaves.', durationMinutes: 3 }
    ],
    ingredientPrepGuide: [
      { item: 'The Molcajete Base Paste Secret', technique: 'Never just mash avocados with whole diced vegetables! First, pound the minced serrano chile, white onion, cilantro stems, and coarse salt in the mortar into a fragrant green paste. This releases all the volatile essential oils and aromatics so they coat every single avocado molecule.' },
      { item: 'Chunky Fork Mash', technique: 'Avocado should never be pureed smooth in a blender! Authentic guacamole is mashed coarsely with a fork or pestle, leaving 1cm chunks for texture.' }
    ],
    essentialIngredients: [
      { name: 'Ripe Hass avocados', prep: 'halved, pitted, and scooped', amount: '3 large', metric: '450g', imperial: '1 lb', common: '3 avocados' },
      { name: 'Serrano chile or Jalapeño', prep: 'finely minced with seeds', amount: '1 to 2 chiles', metric: '20g', imperial: '0.7 oz', common: '1-2 chiles' },
      { name: 'White onion', prep: 'finely diced', amount: '1/2 medium', metric: '60g', imperial: '2.1 oz', common: '1/2 onion' },
      { name: 'Fresh cilantro (Coriander)', prep: 'stems and leaves finely chopped', amount: '1/2 cup packed', metric: '20g', imperial: '0.7 oz', common: '1/2 cup' },
      { name: 'Fresh lime juice', prep: 'freshly squeezed (never bottled!)', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '1 lime' },
      { name: 'Coarse sea salt', prep: 'essential for grinding', amount: '1 tsp', metric: '6g', imperial: '0.2 oz', common: '1 tsp' },
      { name: 'Ripe Roma tomato', prep: 'seeded and finely diced', amount: '1 tomato', metric: '80g', imperial: '2.8 oz', common: '1 tomato' },
      { name: 'Warm corn tortilla chips (Totopos)', prep: 'for dipping', amount: '1 bowl', metric: '200g', imperial: '7 oz', common: 'chips' }
    ],
    steps: [
      {
        step: 1,
        title: 'MASH CHILE, ONION & SALT INTO FLAVOR PASTE',
        whatYouNeed: ['Molcajete or sturdy bowl', 'Minced serrano', '2 tbsp diced white onion', '2 tbsp cilantro stems', '1 tsp coarse sea salt'],
        description: 'In the base of the molcajete or bowl, place the minced serrano chile, 2 tablespoons of the diced white onion, chopped cilantro stems, and 1 tsp coarse salt. Using the pestle, grind with firm twisting pressure for 2 minutes until the vegetables break down into a fragrant, juicy, green aromatic paste.',
        howToDoIt: 'Grinding with abrasive coarse salt crushes plant cell walls, releasing natural juices and creating an aromatic base that transforms plain avocado.',
        heat: 'No Heat',
        duration: 2,
        visualCues: 'A moist, textured, aromatic green-and-white paste in the bottom of the mortar.',
        smell: 'Intense burst of crushed onion, spicy serrano, and fresh cilantro.',
        textureCheck: 'Juicy coarse paste.',
        whatShouldThisLookLike: 'Fragrant flavor paste ready for the avocado.',
        tip: 'Remove seeds and white veins from the serrano if you prefer milder guacamole.',
        commonMistake: 'Skipping the paste step, which leaves the onion raw and disconnected from the avocado.',
        moveOnWhen: 'Paste is aromatic and juicy.',
        quickInstructions: 'Grind minced serrano, 2 tbsp onion, cilantro stems, and salt in mortar for 2 mins into fragrant paste.'
      },
      {
        step: 2,
        title: 'COARSELY MASH RIPE AVOCADOS',
        whatYouNeed: ['3 scooped avocados', 'Pestle or fork'],
        description: 'Slice ripe avocados in half, remove pits, and score the flesh into 1cm cubes inside the skin. Scoop the flesh directly into the molcajete over the crushed paste. Mash gently with the pestle or a fork in a pressing motion, leaving plenty of visible 1cm buttery avocado chunks throughout.',
        howToDoIt: 'Press downward rather than stirring violently to preserve texture and avoid creating a baby-food puree.',
        heat: 'No Heat',
        duration: 2,
        visualCues: 'Chunky, textured, vibrant emerald mash with visible velvety cubes.',
        smell: 'Buttery, rich fresh avocado.',
        textureCheck: 'Creamy yet distinctively chunky.',
        whatShouldThisLookLike: 'Chunky rustic avocado in the mortar.',
        tip: 'If your avocados are rock-hard, place them in a brown paper bag with an apple or banana for 24 hours to ripen naturally.',
        commonMistake: 'Pureeing in a food processor, creating a runny, slimy emulsion.',
        moveOnWhen: 'Avocados are mashed to chunky consistency.',
        quickInstructions: 'Add diced avocado to paste and mash coarsely with pestle or fork, leaving 1cm chunks.'
      },
      {
        step: 3,
        title: 'FOLD IN LIME, TOMATOES & FRESH CILANTRO',
        whatYouNeed: ['Fresh lime juice', 'Diced tomato', 'Remaining onion & cilantro'],
        description: 'Squeeze 2 tablespoons of fresh lime juice over the avocado. Add the seeded diced tomato, remaining diced white onion, and chopped cilantro leaves. Using a spoon or spatula, fold gently 3 to 4 times just until evenly combined. Taste and adjust with extra salt or lime if needed.',
        howToDoIt: 'Adding the tomatoes at the very end and folding gently keeps them intact and prevents pink juice from tinting the green avocado.',
        heat: 'No Heat',
        duration: 2,
        visualCues: 'A dazzling emerald guacamole flecked with red tomato jewels and white onion.',
        smell: 'Zesty lime, fresh cilantro, and creamy avocado.',
        textureCheck: 'Lush and creamy with fresh juicy pops of tomato and crunchy onion.',
        whatShouldThisLookLike: 'The definitive authentic Mexican guacamole.',
        tip: 'Do not add garlic powder, cumin, sour cream, or mayonnaise — real Mexican guacamole lets pure avocado shine!',
        commonMistake: 'Using bottled lime juice, which tastes artificial and chemical.',
        moveOnWhen: 'Combined, tasted, and seasoned.',
        quickInstructions: 'Fold in fresh lime juice, diced tomatoes, remaining onion, and cilantro gently; taste for salt.'
      },
      {
        step: 4,
        title: 'SERVE IMMEDIATELY IN THE MOLCAJETE',
        whatYouNeed: ['Warm corn totopos', 'Molcajete'],
        description: 'Serve the guacamole directly inside the volcanic stone molcajete alongside a bowl of warm, salted corn tortilla chips. Eat immediately while fresh and bright green.',
        howToDoIt: 'Volcanic stone retains cool temperatures and provides authentic cantina presentation.',
        heat: 'No Heat',
        duration: 1,
        visualCues: 'Vivid green guacamole in a rustic black stone mortar surrounded by golden chips.',
        smell: 'Toasted corn and fresh lime.',
        textureCheck: 'Buttery dip scooped onto crispy chip.',
        whatShouldThisLookLike: 'An irresistible bowl of fresh guacamole.',
        tip: 'To store leftovers without browning: press plastic wrap directly against the surface of the guacamole with zero air pockets and refrigerate.',
        commonMistake: 'Leaving exposed to air for an hour, which turns the surface brown via polyphenol oxidation.',
        moveOnWhen: 'Served immediately.',
        quickInstructions: 'Serve directly in molcajete with warm, salted corn chips.'
      }
    ],
    commonMistakes: [
      { mistake: 'Adding garlic powder or cumin', remedy: 'Traditional Mexican guacamole has no garlic or cumin; the flavor relies on fresh chiles, onion, lime, and cilantro.' },
      { mistake: 'Blending smooth', remedy: 'Guacamole must have chunky texture. Always mash with a fork or pestle.' }
    ],
    troubleshooting: [
      {
        problem: 'Guacamole tastes flat and dull',
        whatHappened: 'Lacks brightness and savory punch.',
        whyItHappened: 'Needs more salt or acid to cut through the rich avocado fat.',
        whatToDoNow: 'Add another 1/2 tsp coarse salt and a squeeze of fresh lime juice; mix gently.',
        howToPrevent: 'Avocados are very rich in fat and require generous salting to taste their best.'
      }
    ],
    substitutions: [
      { original: 'Serrano chile', substitute: 'Jalapeño chile (milder)', notes: 'Serranos are traditional for clean bright heat, but jalapeños work great.' },
      { original: 'White onion', substitute: 'Red onion', notes: 'Adds mild sweetness and purple color.' }
    ],
    safetyNotes: ['Wash hands thoroughly after mincing hot serrano chiles; do not touch eyes.'],
    servingGuide: {
      restingTime: '0 minutes — eat immediately.',
      temperature: 'Cool room temperature.',
      garnishing: 'Sprigs of fresh cilantro and a light sprinkle of sea salt.',
      accompaniments: 'Warm crisp totopos, tacos, carnitas, or grilled carne asada.'
    }
  },

  // 8. CHURROS (Authentic Mexican Street Churros con Canela y Chocolate)
  {
    id: 'churros',
    name: 'Authentic Mexican Street Churros with Cinnamon Sugar & Mexican Hot Chocolate',
    cuisine: 'Mexican',
    region: 'Central Mexico (Mexico City / Coyoacán)',
    servings: 4,
    prepTime: 20,
    cookTime: 15,
    difficulty: 'Medium',
    overview: {
      summary: 'The beloved street sweet of Mexico City\'s churrerías: a simple choux-style dough made of boiling water, butter, flour, and salt, piped through a closed-star nozzle into hot oil to form deep ridges. Deep-fried until golden, crispy, and hollow, immediately rolled in fragrant Mexican canela (cinnamon) and sugar, and served with a cup of thick, spiced Mexican drinking chocolate.',
      appearance: 'Straight golden-amber ridged pastry batons heavily dusted in sparkling cinnamon sugar crystals, steaming with sweet fragrance.',
      texture: 'Shatteringly crisp, crunchy exterior with deep ridges, revealing an airy, steamy, soft, tender custard-like interior.',
      flavor: 'Sweet caramelized cinnamon, warm vanilla, rich butter, and pure fried pastry contrasted with bitter spiced dark chocolate.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Heavy piping bag with large closed-star tip (Wilton 1M or 2D)', purpose: 'Essential! The deep ridges created by the star tip increase surface area for maximum crunch and prevent the churro from exploding in hot oil.' },
      { name: 'Deep heavy pot & frying thermometer', purpose: 'To maintain oil at steady 185°C (365°F).' },
      { name: 'Kitchen shears / scissors', purpose: 'To snip piped dough cleanly into the hot oil.' }
    ],
    beforeYouStart: [
      { task: 'Whisk 1/2 cup granulated sugar with 1.5 tbsp Mexican Canela (Ceylon cinnamon) on a wide rimmed platter.', durationMinutes: 2 },
      { task: 'Fit piping bag with a large closed-star tip.', durationMinutes: 2 },
      { task: 'Heat 3 inches of neutral frying oil in a deep pot to 185°C (365°F).', durationMinutes: 15 }
    ],
    ingredientPrepGuide: [
      { item: 'THE STAR TIP RULE: Why Ridges Matter!', technique: 'NEVER pipe churro dough with a round smooth nozzle! As the moist dough hits hot oil, internal steam expands rapidly. A smooth cylinder will trap steam until the shell violently explodes, splattering scalding oil. A deep star tip creates ridges that allow steam to escape safely while maximizing crispy edges.' },
      { item: 'The Hot Cinnamon Sugar Toss', technique: 'Churros must be transferred directly from the oil (after 15 seconds on a paper towel) into the cinnamon sugar while still piping hot. The residual hot surface fat melts the sugar crystals, gluing them to the ridges.' }
    ],
    essentialIngredients: [
      { name: 'Water', prep: 'liquid base', amount: '1 cup', metric: '240ml', imperial: '8 fl oz', common: '1 cup' },
      { name: 'Unsalted butter', prep: 'cubed', amount: '4 tbsp', metric: '60g', imperial: '2.1 oz', common: '4 tbsp' },
      { name: 'Granulated white sugar', prep: 'in dough & coating', amount: '2 tbsp (dough) + 1/2 cup (coating)', metric: '130g', imperial: '4.6 oz', common: 'mixed' },
      { name: 'Fine sea salt', prep: 'in dough', amount: '1/2 tsp', metric: '3g', imperial: '0.1 oz', common: '1/2 tsp' },
      { name: 'All-purpose flour', prep: 'sifted', amount: '1 cup', metric: '140g', imperial: '5 oz', common: '1 cup' },
      { name: 'Vanilla extract', prep: 'pure Mexican vanilla', amount: '1 tsp', metric: '5ml', imperial: '0.17 fl oz', common: '1 tsp' },
      { name: 'Mexican Canela (Ground cinnamon)', prep: 'sweet fragrant Ceylon cinnamon', amount: '1.5 tbsp', metric: '12g', imperial: '0.4 oz', common: '1.5 tbsp' },
      { name: 'High smoke-point oil (Canola or Vegetable)', prep: 'for deep frying', amount: '1 liter', metric: '1000ml', imperial: '34 fl oz', common: '4 cups' }
    ],
    optionalIngredients: [
      { name: 'Mexican dark chocolate sauce (with cinnamon and pinch of chili)', prep: 'for dipping', amount: '1 cup', metric: '240ml', imperial: '8 fl oz', common: '1 cup' },
      { name: 'Dulce de leche or Cajeta (goat milk caramel)', prep: 'for dipping', amount: '1/2 cup', metric: '150g', imperial: '5.3 oz', common: '1/2 cup' }
    ],
    steps: [
      {
        step: 1,
        title: 'BOIL LIQUIDS & COOK THE FLOUR DOUGH',
        whatYouNeed: ['Saucepan', '1 cup water', '4 tbsp butter', '2 tbsp sugar', '1/2 tsp salt', '1 cup flour', 'Wooden spoon'],
        description: 'In a saucepan, combine water, butter, 2 tbsp sugar, and salt over medium heat. Bring to a rolling boil so butter melts completely. Remove from heat immediately, dump in all the flour at once, and stir vigorously with a wooden spoon. Return pan to low heat and stir constantly for 1 minute until the dough pulls away from the sides into a smooth, glossy ball, leaving a thin flour film on the pan bottom. Stir in vanilla extract, remove from heat, and let cool 5 minutes.',
        howToDoIt: 'Cooking the flour in boiling liquid pre-gelatinizes the starches, allowing the dough to absorb steam and puff lightly when fried.',
        heat: 'Medium Heat to Low',
        duration: 5,
        visualCues: 'A smooth, shiny, cohesive dough ball that leaves the sides of the pot clean.',
        smell: 'Sweet buttery cooked pastry.',
        textureCheck: 'Thick, pliable, soft dough.',
        whatShouldThisLookLike: 'A smooth ball of dough in the pan.',
        tip: 'Mexican street churro dough is traditionally egg-free, creating a crisper, crunchier shell than egg-rich Spanish choux churros.',
        commonMistake: 'Not stirring vigorously when adding flour, resulting in dry lumps of unmixed flour.',
        moveOnWhen: 'Dough is smooth, cohesive, and cooled 5 minutes.',
        quickInstructions: 'Boil water, butter, 2 tbsp sugar, and salt; stir in flour all at once, cook 1 min into smooth ball, stir in vanilla.'
      },
      {
        step: 2,
        title: 'LOAD PIPING BAG WITH CLOSED-STAR TIP',
        whatYouNeed: ['Cooled dough', 'Piping bag fitted with Wilton 1M or 2D closed-star tip'],
        description: 'Transfer the warm dough into the heavy-duty piping bag. Squeeze the dough down toward the tip to eliminate any air pockets. Twist the top of the bag tightly.',
        howToDoIt: 'Churro dough is dense and stiff! Use a durable canvas or heavy plastic piping bag — thin disposable bags will burst under pressure.',
        heat: 'No Heat',
        duration: 3,
        visualCues: 'A taut, compact piping bag ready for extrusion.',
        textureCheck: 'Firm, dense dough inside the bag.',
        whatShouldThisLookLike: 'A loaded pastry bag fitted with a deep star nozzle.',
        tip: 'Rest the piping bag inside a tall drinking glass while filling to make loading mess-free.',
        commonMistake: 'Leaving large trapped air bubbles in the bag, which spit dough unpredictably into the oil.',
        moveOnWhen: 'Bag is loaded and air pockets removed.',
        quickInstructions: 'Pack warm dough firmly into piping bag fitted with a large closed-star tip, twisting the top taut.'
      },
      {
        step: 3,
        title: 'PIPE DIRECTLY INTO 185°C OIL & FRY UNTIL GOLDEN',
        whatYouNeed: ['Hot oil at 185°C (365°F)', 'Kitchen shears', 'Spider skimmer'],
        description: 'Hold the piping bag over the hot oil. Squeeze firmly to extrude a 15cm (6-inch) strip of dough directly into the oil, snipping the end off cleanly with kitchen shears close to the oil surface. Pipe 3 to 4 churros per batch. Fry for 2.5 to 3 minutes, turning occasionally with tongs, until the churros puff, float, and turn deep, uniform golden-amber with deeply defined crisp ridges.',
        howToDoIt: 'Snip close to the oil surface to prevent splashing hot oil onto your arms.',
        heat: 'Medium Heat (185°C / 365°F oil)',
        duration: 6,
        visualCues: 'Churros puff, sizzle vigorously, float, and turn dark golden-amber with razor-sharp ridges.',
        hear: 'Brisk, steady frying crackle.',
        smell: 'Intoxicating fairground aroma of sweet fried pastry and vanilla.',
        textureCheck: 'Rigid, shatteringly crisp shell when tapped with metal tongs.',
        whatShouldThisLookLike: 'Crispy golden ridged batons floating in hot oil.',
        tip: 'Maintain oil between 180°C and 190°C. If oil is too cold, churros absorb grease; if too hot, the exterior burns while the center remains raw paste.',
        commonMistake: 'Overcrowding the pot, which plunges the oil temperature and produces soggy, greasy churros.',
        moveOnWhen: 'Churros are deep golden-amber and crispy.',
        quickInstructions: 'Pipe 15cm dough strips into 185°C oil, snip with shears; fry 3-4 at a time for 2.5-3 mins until deep golden.'
      },
      {
        step: 4,
        title: 'ROLL IN CANELA SUGAR WHILE PIPING HOT',
        whatYouNeed: ['Fried churros', 'Platter of cinnamon sugar', 'Tongs', 'Paper towels'],
        description: 'Remove churros with a spider skimmer, drain on paper towels for just 15 seconds, and immediately transfer into the cinnamon sugar platter. Roll thoroughly until every ridge and groove is completely encrusted in glittering cinnamon sugar crystals. Transfer to a serving basket.',
        howToDoIt: 'The 15-second window is crucial: too wet with oil and the sugar clumps; too dry and the sugar won\'t stick at all!',
        heat: 'No Heat',
        duration: 2,
        visualCues: 'Glistening golden churros densely coated in sparkling brown-sugar-cinnamon crystals.',
        smell: 'Warm sweet cinnamon and fresh baked pastry.',
        textureCheck: 'Crunchy sugar coating over shatteringly crisp pastry.',
        whatShouldThisLookLike: 'Perfect street-vendor churros ready to eat.',
        tip: 'Serve immediately alongside thick Mexican hot chocolate flavored with cinnamon and Mexican vanilla.',
        commonMistake: 'Letting churros cool before rolling in sugar, causing the sugar to slide right off.',
        moveOnWhen: 'All churros are coated and piled high.',
        quickInstructions: 'Drain 15 secs on paper towel, immediately roll in cinnamon sugar to coat all ridges; serve hot.'
      }
    ],
    commonMistakes: [
      { mistake: 'Using a round piping tip', remedy: 'NEVER use a smooth tip — smooth churros can explode violently in oil. Always use a deep closed-star tip.' },
      { mistake: 'Oil temperature too low', remedy: 'Frying below 175°C makes churros soak up oil like a sponge. Keep oil at 185°C.' }
    ],
    troubleshooting: [
      {
        problem: 'Churros are doughy and raw inside',
        whatHappened: 'The interior didn\'t cook through.',
        whyItHappened: 'The oil was too hot (over 200°C), browning the exterior before the center cooked.',
        whatToDoNow: 'Pop the cooked churros in a 175°C (350°F) oven for 5 minutes to finish baking the interior.',
        howToPrevent: 'Use a thermometer to strictly maintain oil at 185°C.'
      }
    ],
    substitutions: [
      { original: 'Mexican Canela', substitute: 'Ceylon cinnamon or standard Cassia cinnamon', notes: 'Canela is softer and sweeter, but standard cinnamon works wonderfully.' }
    ],
    safetyNotes: ['Hot oil can splatter; keep hands clear and use kitchen shears to cut dough.', 'Always use a star tip to prevent steam explosions.'],
    servingGuide: {
      restingTime: 'Rest 1 minute before eating.',
      temperature: 'Piping hot.',
      garnishing: 'Heavy dusting of cinnamon sugar.',
      accompaniments: 'Thick Mexican hot chocolate, Cajeta (goat milk caramel), or Dulce de leche for dipping.'
    }
  }
];
