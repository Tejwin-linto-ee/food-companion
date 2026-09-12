// American Classics Part 2 (5 dishes: BBQ, Hot Dogs, Sandwiches, Cheesecake, Apple Pie)
module.exports = [
  // 12. BBQ (Low-and-Slow Texas Smoked Beef Brisket / Ribs)
  {
    id: 'bbq',
    name: 'Authentic Central Texas Smoked Beef Brisket (Low-and-Slow Dalmatian Rub & Texas Crutch)',
    cuisine: 'American',
    region: 'United States (Texas / Hill Country)',
    servings: 8,
    prepTime: 30,
    cookTime: 720,
    difficulty: 'Expert',
    overview: {
      summary: 'The holy grail of American barbecue: a whole packer beef brisket trimmed of hard fat, coated in coarse 16-mesh black pepper and kosher salt ("Dalmatian Rub"), and smoked low and slow at 107°C (225°F) over post oak hardwood smoke for 12 hours. Pushed through the moisture stall using butcher paper (the Texas Crutch), smoked until probe-tender like warm butter, revealing a deep pitch-black aerodynamic bark, a vibrant pink smoke ring, and rendered, wobbling, melt-in-the-mouth brisket.',
      appearance: 'A pitch-black, aerodynamic, pepper-crusted brisket bark that jiggles like gelatin when tapped, slicing to reveal a deep magenta-pink smoke ring and glistening, juice-oozing beef.',
      texture: 'Impossibly tender and gelatinous: a single pencil-thick slice pulls apart under its own weight with gentle tug, with zero chewiness.',
      flavor: 'Pure beefy majesty: intense clean post oak woodsmoke, sharp coarse black pepper bite, deep umami, and rendered sweet beef tallow.',
      restingTimeMinutes: 60
    },
    equipment: [
      { name: 'Offset barrel smoker or pellet grill with water pan', purpose: 'For continuous 12-hour clean blue smoke at 107-120°C (225-250°F).' },
      { name: 'Peach butcher paper (or heavy aluminum foil)', purpose: 'For wrapping during the stall (Texas Crutch) to preserve bark while retaining moisture.' },
      { name: '12-inch scalloped slicing knife', purpose: 'To slice brisket in clean continuous strokes without tearing the bark.' }
    ],
    beforeYouStart: [
      { task: 'Trim 5kg whole packer brisket: trim top fat cap to a uniform 6mm (1/4 inch) thickness, remove hard deckle fat.', durationMinutes: 20 },
      { task: 'Mix Dalmatian Rub: 1/2 cup coarse 16-mesh black pepper, 1/2 cup coarse kosher salt, 1 tbsp garlic powder.', durationMinutes: 3 },
      { task: 'Stabilize smoker at 107°C (225°F) with post oak or hickory wood chunks.', durationMinutes: 30 }
    ],
    ingredientPrepGuide: [
      { item: 'Coarse 16-Mesh Black Pepper (The Bark Foundation)', technique: 'Never use fine table pepper! Authentic Texas bark requires coarse 16-mesh butcher-grind black pepper. Coarse pepper particles create a microscopic porous grid on the meat surface that absorbs smoke and fat, polymerizing into the famous crunchy black "bark".' },
      { item: 'The Butcher Paper Wrap (The Texas Crutch)', technique: 'Around hour 6, when internal temperature reaches 74°C (165°F), moisture evaporation causes the temperature to freeze ("the stall"). Wrap tightly in unwaxed pink peach butcher paper. Butcher paper breathes, holding in moisture while allowing smoke to circulate without softening the crunchy bark into mush.' }
    ],
    essentialIngredients: [
      { name: 'Whole packer beef brisket (Point & Flat)', prep: 'USDA Prime, trimmed to 6mm fat cap', amount: '5 kg', metric: '5000g', imperial: '11 lbs', common: '1 whole brisket' },
      { name: 'Coarse 16-mesh black pepper', prep: 'butcher grind', amount: '1/2 cup', metric: '60g', imperial: '2.1 oz', common: '1/2 cup' },
      { name: 'Coarse kosher salt', prep: 'Morton or Diamond Crystal', amount: '1/2 cup', metric: '70g', imperial: '2.5 oz', common: '1/2 cup' },
      { name: 'Granulated garlic powder', prep: 'subtle savory note', amount: '1 tbsp', metric: '10g', imperial: '0.35 oz', common: '1 tbsp' },
      { name: 'Yellow mustard or pickle juice', prep: 'binder (flavor cooks away completely)', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp' },
      { name: 'Apple cider vinegar & water (50/50 spritz)', prep: 'in a spray bottle for spritzing', amount: '1 cup', metric: '240ml', imperial: '8 fl oz', common: '1 cup' }
    ],
    steps: [
      {
        step: 1,
        title: 'TRIM & APPLY THE DALMATIAN RUB',
        whatYouNeed: ['Trimmed brisket', '2 tbsp yellow mustard binder', 'Salt, pepper, garlic rub'],
        description: 'Rub a micro-thin film of yellow mustard over the entire brisket (the binder). Heavily coat all surfaces and edges with the Dalmatian Rub (equal parts coarse 16-mesh black pepper and kosher salt). Press firmly so the pepper adheres in a solid, uniform gravel layer. Let rest at room temperature for 30 minutes until the salt begins to weep and liquefy on the meat.',
        howToDoIt: 'The mustard binder dissolves completely during smoking — it exists purely to glue the coarse pepper to the meat.',
        heat: 'No Heat',
        duration: 20,
        visualCues: 'A black-and-white marbled, gravel-coated brisket with no bare spots.',
        textureCheck: 'Tacky, coarse pepper crust.',
        whatShouldThisLookLike: 'A majestic pepper-crusted brisket ready for the pit.',
        tip: 'Apply the rub from 30cm (12 inches) above the meat for an even, non-clumping distribution.',
        commonMistake: 'Using fine powdered black pepper, which creates a muddy, bitter paste rather than crunchy bark.',
        moveOnWhen: 'Rub is applied and meat is sweating.',
        quickInstructions: 'Apply thin mustard binder, heavily coat with coarse salt and 16-mesh black pepper, rest 30 mins.'
      },
      {
        step: 2,
        title: 'THE SMOKE & BARK FORMATION (FIRST 6 HOURS)',
        whatYouNeed: ['Preheated smoker at 107-120°C (225-250°F)', 'Post oak or hickory wood', 'Water pan in smoker', '50/50 vinegar spritz'],
        description: 'Place brisket fat-cap UP on the smoker grate, pointing the thicker point end toward the firebox. Maintain clean blue smoke at 110°C (230°F). Smoke undisturbed for the first 3 hours. From hour 3 onward, spritz any dry edges with apple cider vinegar every 45 minutes. Smoke until the bark darkens to a pitch-black, mahogany, lacquered crust and internal temperature hits 74°C (165°F).',
        howToDoIt: 'Fat-cap up allows melting beef tallow to continuously baste down the sides of the flat, keeping it moist.',
        heat: 'Smoker at 110°C / 230°F',
        duration: 360,
        visualCues: 'Deep pitch-black mahogany bark forms; fat renders and turns golden-amber; meat contracts around the edges.',
        smell: 'Incredible post oak woodsmoke, roasted black pepper, and rendering beef tallow.',
        textureCheck: 'Bark is firm and dry — scratching it with a fingernail does not remove it.',
        whatShouldThisLookLike: 'A pitch-black meteorite with glistening amber fat.',
        tip: 'Never wrap before the bark is fully set! If you wrap soft bark, it will wash away into mush.',
        commonMistake: 'Using white billowing dirty smoke, which imparts a bitter creosote taste to the meat.',
        moveOnWhen: 'Bark is set rock-firm and internal temperature is 74°C (165°F).',
        quickInstructions: 'Smoke fat-cap UP at 110°C for 6 hours, spritzing with vinegar after hour 3, until bark is set pitch-black.'
      },
      {
        step: 3,
        title: 'THE TEXAS CRUTCH: WRAP IN BUTCHER PAPER',
        whatYouNeed: ['Wide sheets of pink peach butcher paper', 'Rendered beef tallow (optional)', 'Brisket'],
        description: 'Lay two overlapping sheets of peach butcher paper on a table. Transfer hot brisket onto the paper. Drizzle with 2 tbsp warm rendered beef tallow. Wrap the paper tightly around the brisket like a package, folding the edges underneath. Return to the smoker at 120°C (250°F). Continue cooking for 4 to 5 more hours until an instant-read probe slides into the flat with ZERO resistance, exactly like warm butter (typically around 95-98°C / 203-208°F).',
        howToDoIt: 'The probe test is the only true measure of doneness: collagen dissolves completely at 95°C, turning meat probe-soft.',
        heat: 'Smoker at 120°C / 250°F',
        duration: 270,
        visualCues: 'Paper is soaked with dark amber beef tallow; the wrapped package jiggles like a water balloon.',
        textureCheck: 'A digital thermometer probe slides through the meat with zero resistance — like pushing into warm butter.',
        whatShouldThisLookLike: 'Tallow-soaked butcher paper package containing jiggly brisket.',
        tip: 'Never rely on temperature alone! Some briskets are tender at 93°C, others need 98°C. Feel the probe slide!',
        commonMistake: 'Pulling the brisket off the pit while the probe still catches or feels tight.',
        moveOnWhen: 'Probe slides through like warm butter throughout the flat and point.',
        quickInstructions: 'Wrap tightly in peach butcher paper, return to 120°C smoker for 4-5 hours until probe slides in like warm butter (95-98°C).'
      },
      {
        step: 4,
        title: 'THE MANDATORY 1-HOUR COOLER REST & SLICE',
        whatYouNeed: ['Wrapped brisket', 'Clean towel', 'Insulated dry cooler', '12-inch slicing knife'],
        description: 'Remove wrapped brisket from the smoker. Wrap the package in a clean bath towel and place inside an insulated dry cooler (cambro/cooler) with the lid closed. Rest for at least 1 to 2 hours (up to 4 hours). Unwrap on a cutting board. Separate the flat from the point. Slice the flat against the grain into pencil-thick (6mm) slices. Slice the fatty point into thick cubes for Burnt Ends. Serve immediately.',
        howToDoIt: 'Resting in an insulated cooler allows melted gelatin to re-absorb into the muscle fibers, turning dry fibers into juicy silk.',
        heat: 'No Heat (Resting in Cooler)',
        duration: 90,
        visualCues: 'A vivid 1cm magenta-pink smoke ring around the outer rim; glistening juice bubbling from every slice.',
        smell: 'Deep, rich, unforgettable Texas oak smoke and savory beef.',
        textureCheck: 'A pencil-thick slice drapes gracefully over your finger without breaking, but pulls apart with gentle tug.',
        whatShouldThisLookLike: 'The legendary Texas Hill Country sliced brisket board.',
        tip: 'Always slice against the grain! The grain of the flat runs in one direction; the grain of the point runs perpendicular.',
        commonMistake: 'Slicing with the grain, making the meat chewy and stringy.',
        moveOnWhen: 'Rested, sliced against grain, and served.',
        quickInstructions: 'Rest in cooler 1-2 hours; unwrap, slice flat against the grain into pencil-thick slices, serve immediately.'
      }
    ],
    commonMistakes: [
      { mistake: 'Rushing the rest', remedy: 'Brisket MUST rest for at least 1 hour in an insulated cooler to allow gelatin to set.' },
      { mistake: 'Slicing with the grain', remedy: 'Always locate grain direction and slice strictly perpendicular.' }
    ],
    troubleshooting: [
      {
        problem: 'Brisket is tough and chewy',
        whatHappened: 'Collagen did not finish rendering.',
        whyItHappened: 'The meat was pulled off the smoker too early before reaching probe-tenderness.',
        whatToDoNow: 'Re-wrap tightly in foil with 1/2 cup beef broth and bake in a 135°C (275°F) oven for 90 minutes until soft.',
        howToPrevent: 'Do not remove from smoker until probe slides in like warm butter.'
      }
    ],
    substitutions: [
      { original: 'Peach butcher paper', substitute: 'Heavy-duty aluminum foil', notes: 'Foil creates softer bark but tenderizes faster.' },
      { original: 'Post oak wood', substitute: 'Hickory, Pecan, or Mesquite', notes: 'Hickory delivers classic robust smoke.' }
    ],
    safetyNotes: ['Brisket stays hot inside a cooler for up to 4 hours; handle with heat-resistant gloves.'],
    servingGuide: {
      restingTime: 'Rest 1-2 hours in insulated cooler before slicing.',
      temperature: 'Warm and glistening.',
      garnishing: 'None — black pepper bark and pink smoke ring.',
      accompaniments: 'Pickled jalapeños, dill pickle slices, raw white onion, white sandwich bread, and Texas pinto beans.'
    }
  },

  // 13. HOT DOGS (Classic Chicago-Style Hot Dog)
  {
    id: 'hot-dogs',
    name: 'Classic Chicago-Style All-Beef Hot Dog (Poppy Seed Bun "Dragged Through the Garden")',
    cuisine: 'American',
    region: 'United States (Chicago / Illinois)',
    servings: 4,
    prepTime: 15,
    cookTime: 10,
    difficulty: 'Very Easy',
    overview: {
      summary: 'The iconic street food of the Windy City: an all-beef natural casing frankfurter simmered gently in seasoned water until snappy, nestled into a warm steamed S. Rosen poppy seed bun, and meticulously "dragged through the garden" in the strict traditional 7-ingredient order: yellow mustard, neon green sweet pickle relish, chopped white onions, ripe tomato wedges, a crisp kosher dill pickle spear, pickled sport peppers, and a heavy dash of celery salt. (RULE: Ketchup is strictly forbidden!).',
      appearance: 'A vibrant, colorful hot dog bursting with toppings: yellow mustard ribbon, neon green relish, red tomato wedges, whole green sport peppers, and a green pickle spear dusted in celery salt.',
      texture: 'Audible "snap" on the first bite from the natural sheep casing, contrasting with a cloud-soft steamed bun, crunchy pickles, and juicy tomatoes.',
      flavor: 'Salty, garlicky, smoky all-beef frank, pungent yellow mustard, sweet relish, sharp raw onion, spicy vinegary sport peppers, and savory celery salt.',
      restingTimeMinutes: 0
    },
    equipment: [
      { name: 'Steamer pot or double boiler', purpose: 'To steam the poppy seed buns until cloud-soft without turning them soggy.' },
      { name: 'Tongs', purpose: 'To handle hot franks and arrange ingredients.' }
    ],
    beforeYouStart: [
      { task: 'Obtain 4 Vienna Beef natural-casing all-beef frankfurters and 4 S. Rosen poppy seed hot dog buns.', durationMinutes: 2 },
      { task: 'Dice 1/2 white onion fine, cut 1 Roma tomato into 8 wedges, and cut 1 large dill pickle into 4 long spears.', durationMinutes: 5 },
      { task: 'Drain 8 whole green sport peppers.', durationMinutes: 2 }
    ],
    ingredientPrepGuide: [
      { item: 'THE NATURAL CASING SNAP', technique: 'Authentic Chicago dogs must use natural casing all-beef franks (like Vienna Beef). The sheep casing provides the iconic audible "SNAP" when you bite through it.' },
      { item: 'THE SACRED 7-STEP ORDER (Dragged Through the Garden)', technique: 'Order matters: 1. Yellow mustard on the frank; 2. Bright neon green relish; 3. Chopped white onion; 4. Two tomato wedges tucked along one side; 5. Pickle spear tucked along the other side; 6. Two sport peppers on top; 7. Generous dash of celery salt across everything.' },
      { item: 'THE CARDINAL RULE: NO KETCHUP!', technique: 'In Chicago, putting ketchup on a hot dog is considered a culinary crime. The sweet tomatoes provide all the sweet acidity needed!' }
    ],
    essentialIngredients: [
      { name: 'All-beef natural casing frankfurters (Vienna Beef)', prep: 'simmered hot', amount: '4 franks', metric: '300g', imperial: '10.5 oz', common: '4 franks' },
      { name: 'Poppy seed hot dog buns (S. Rosen)', prep: 'steamed soft', amount: '4 buns', metric: '4 buns', imperial: '4 buns', common: '4 buns' },
      { name: 'Classic yellow mustard', prep: 'in a squeeze bottle', amount: '2 tbsp', metric: '30g', imperial: '1 oz', common: '2 tbsp' },
      { name: 'Chicago-style neon green sweet relish', prep: 'bright green relish', amount: '4 tbsp', metric: '60g', imperial: '2.1 oz', common: '4 tbsp' },
      { name: 'White onion', prep: 'finely chopped', amount: '1/2 medium', metric: '60g', imperial: '2.1 oz', common: '1/2 onion' },
      { name: 'Ripe Roma tomatoes', prep: 'cut into wedges', amount: '1 large (8 wedges)', metric: '100g', imperial: '3.5 oz', common: '8 wedges' },
      { name: 'Kosher dill pickle spears', prep: 'crisp whole spears', amount: '4 spears', metric: '100g', imperial: '3.5 oz', common: '4 spears' },
      { name: 'Pickled sport peppers', prep: 'whole green spicy peppers', amount: '8 peppers', metric: '30g', imperial: '1 oz', common: '8 peppers' },
      { name: 'Celery salt', prep: 'essential finishing spice', amount: '1/2 tsp', metric: '3g', imperial: '0.1 oz', common: '1/2 tsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'SIMMER FRANKS & STEAM POPPY SEED BUNS',
        whatYouNeed: ['Pot of water at 80°C (180°F)', '4 all-beef franks', 'Steamer basket with 4 poppy seed buns'],
        description: 'Bring a pot of water to a gentle simmer (around 80°C / 180°F — do not boil vigorously, which bursts the casing). Drop the natural-casing franks into the hot water for 6 to 8 minutes until hot and plump. Set poppy seed buns in a steamer basket over the water for the final 2 minutes until warm, cloud-soft, and fragrant.',
        howToDoIt: 'Gentle simmering heats the natural casing to maximum tautness for that legendary snap without rupturing.',
        heat: 'Medium-Low Heat',
        duration: 8,
        visualCues: 'Franks plump up with taut, shiny skins; buns turn cloud-soft and steamy.',
        smell: 'Garlic, smoke, paprika from the franks, and sweet toasted poppy seed bread.',
        textureCheck: 'Taut, snappy casing; pillowy soft bun.',
        whatShouldThisLookLike: 'Plump hot dogs and steamy soft poppy seed buns.',
        tip: 'Never microwave the buns — gentle steam is essential for authentic diner texture.',
        commonMistake: 'Boiling franks rapidly in bubbling water, causing the natural casing to split wide open.',
        moveOnWhen: 'Franks are hot and buns are steamed.',
        quickInstructions: 'Simmer franks at 80°C for 6-8 mins, steam buns 2 mins until cloud-soft; do not boil rapidly.'
      },
      {
        step: 2,
        title: 'DRAG THROUGH THE GARDEN IN STRICT ORDER',
        whatYouNeed: ['Steamed bun & frank', 'Mustard', 'Neon relish', 'Chopped onion', 'Tomato wedges', 'Pickle spear', 'Sport peppers', 'Celery salt'],
        description: 'Nestle hot frank into the steamed poppy seed bun. Zig-zag yellow mustard down the frank. Spoon bright neon green relish over the mustard. Scatter chopped white onions on top. Wedge two tomato slices along one side of the bun. Nest a crisp dill pickle spear along the other side. Place two sport peppers on top. Finish with a generous dash of celery salt across everything.',
        howToDoIt: 'Following the 7-step order ensures every bite delivers the perfect balance of hot, cold, crisp, snappy, tangy, and salty.',
        heat: 'No Heat',
        duration: 3,
        visualCues: 'A glorious mosaic of yellow, neon green, bright red, and dark green flecked with black celery salt.',
        smell: 'Pungent mustard, celery salt, sweet relish, and smoky beef.',
        textureCheck: 'Snappy frank, crunchy pickle, juicy tomato, and soft bun.',
        whatShouldThisLookLike: 'An authentic Chicago-style hot dog loaded to the brim.',
        tip: 'Bite carefully from one end so you get a piece of the pickle spear and sport pepper in the same mouthful.',
        commonMistake: 'Adding ketchup — strictly forbidden by Chicago tradition!',
        moveOnWhen: 'Fully loaded and served immediately.',
        quickInstructions: 'Place frank in bun, add mustard, neon relish, onion, 2 tomato wedges, pickle spear, 2 sport peppers, celery salt.'
      }
    ],
    commonMistakes: [
      { mistake: 'Adding ketchup', remedy: 'Do NOT use ketchup! The tomato wedges provide sweet acidity; ketchup ruins the flavor balance.' },
      { mistake: 'Skinless hot dogs', remedy: 'Use natural-casing all-beef franks to achieve the signature snap.' }
    ],
    troubleshooting: [
      {
        problem: 'Bun turned soggy and tore apart',
        whatHappened: 'Too much water on the frank or vegetables.',
        whyItHappened: 'The frank was not drained or pickle was dripping wet.',
        whatToDoNow: 'Wrap in deli paper to hold it together as you eat.',
        howToPrevent: 'Lift frank with tongs and let water drip off for 3 seconds before nestling in the bun.'
      }
    ],
    substitutions: [
      { original: 'Neon green relish', substitute: 'Standard sweet pickle relish with a drop of green food dye', notes: 'Recreates the iconic vivid green.' },
      { original: 'Sport peppers', substitute: 'Pickled pepperoncini or pickled serrano slices', notes: 'Provides similar vinegary heat.' }
    ],
    safetyNotes: ['Sport peppers can be surprisingly spicy — warn diners who are sensitive to heat.'],
    servingGuide: {
      restingTime: '0 minutes — eat immediately while bun is soft and frank is hot.',
      temperature: 'Hot frank in warm steamed bun with cool crisp toppings.',
      garnishing: 'Extra dash of celery salt.',
      accompaniments: 'Crinkle-cut french fries and an ice-cold root beer or cream soda.'
    }
  },

  // 14. SANDWICHES (Classic New York Pastrami on Rye Deli Sandwich)
  {
    id: 'sandwiches',
    name: 'Classic New York Pastrami on Rye (Steamed Pepper-Crusted Pastrami on Caraway Seed Rye)',
    cuisine: 'American',
    region: 'United States (New York / Lower East Side)',
    servings: 2,
    prepTime: 10,
    cookTime: 15,
    difficulty: 'Easy',
    overview: {
      summary: 'The undisputed monument of the New York Jewish deli: cured beef brisket rubbed in coarse crushed black peppercorns and coriander, smoked, and steamed until succulent and meltingly tender. Piled a mile high (at least 300g per sandwich) between two slices of fresh seeded caraway rye bread, slathered generously with spicy brown deli mustard, served with half-sour dill pickles.',
      appearance: 'A towering, colossal 8cm-tall sandwich of steaming-hot, paper-thin, mahogany-edged spiced pastrami ribbons stacked between two slices of seeded rye bread with brown mustard peeking out.',
      texture: 'Buttery-soft, tender, juicy beef ribbons that dissolve on the tongue with zero chewiness, contrasting with the soft, sturdy caraway bread.',
      flavor: 'Rich, savory cured beef, pungent black pepper and citrusy coriander crust, smoky wood, tangy spicy brown mustard, and earthy caraway seeds.',
      restingTimeMinutes: 0
    },
    equipment: [
      { name: 'Stovetop steamer or Dutch oven with steamer basket', purpose: 'Essential! Pastrami must be steamed over boiling water to render collagen and heat without drying.' }
    ],
    beforeYouStart: [
      { task: 'Obtain 600g sliced cured, smoked beef pastrami (traditional navel/plate or brisket cut).', durationMinutes: 2 },
      { task: 'Slice fresh Jewish caraway rye bread into thick 1.5cm slices.', durationMinutes: 2 },
      { task: 'Prepare a steamer pot with 1 inch of water and bring to a rolling boil.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'THE STEAMING SECRET (Never Microwave or Fry!)', technique: 'New York delis keep their pastrami in steam drawers for hours. To recreate this at home, place the sliced pastrami in a steamer basket over boiling water for 10-12 minutes until hot, glistening, and translucent. The steam melts the intramuscular fat into gelatin, turning it into melting silk.' },
      { item: 'Spicy Brown Mustard Only', technique: 'Never use sweet yellow mustard or mayonnaise! Authentic pastrami demands spicy brown deli mustard (like Gulden\'s or Ba-Tampte) with coarse mustard seeds to cut through the rich beef fat.' }
    ],
    essentialIngredients: [
      { name: 'Sliced beef pastrami (brisket or navel)', prep: 'thinly sliced, peppercorn-crusted', amount: '600g', metric: '600g', imperial: '1.3 lbs', common: '600g' },
      { name: 'Jewish seeded rye bread (with caraway seeds)', prep: 'fresh slices (never toasted)', amount: '4 thick slices', metric: '4 slices', imperial: '4 slices', common: '4 slices' },
      { name: 'Spicy brown deli mustard (Dusseldorf style)', prep: 'generous spread', amount: '4 tbsp', metric: '60g', imperial: '2.1 oz', common: '4 tbsp' },
      { name: 'New York half-sour dill pickles', prep: 'quartered into spears', amount: '2 pickles', metric: '150g', imperial: '5.3 oz', common: '2 pickles' }
    ],
    steps: [
      {
        step: 1,
        title: 'STEAM PASTRAMI UNTIL TRANSLUCENT & GELATINOUS',
        whatYouNeed: ['Steamer basket over boiling water', '600g sliced pastrami', 'Tongs', 'Lid'],
        description: 'Loosely separate the pastrami slices and pile into the steamer basket over vigorously boiling water. Cover tightly with a lid. Steam for 10 to 12 minutes. The meat will transform from firm and opaque to dark, glistening, limp, and meltingly tender as the fat and collagen liquefy.',
        howToDoIt: 'Steam provides 100°C moist heat that relaxes muscle fibers and liquefies fat without drying out the meat.',
        heat: 'Medium-High Steam',
        duration: 12,
        visualCues: 'Meat ribbons turn dark ruby-mahogany and glisten with hot rendered juices; fat turns translucent and soft.',
        smell: 'Intoxicating aroma of coriander, coarse black pepper, cured beef, and woodsmoke.',
        textureCheck: 'Meltingly soft — a single ribbon pulls apart with zero effort.',
        whatShouldThisLookLike: 'Piles of steaming-hot, glistening pastrami ribbons.',
        tip: 'Do not rush the steaming — under-steamed pastrami will feel chewy and rubbery.',
        commonMistake: 'Microwaving pastrami, which dries it into stiff beef jerky.',
        moveOnWhen: 'Pastrami is piping hot and glistening.',
        quickInstructions: 'Steam sliced pastrami in steamer basket over boiling water for 10-12 mins until hot and glistening.'
      },
      {
        step: 2,
        title: 'SLATHER MUSTARD & PILE A MILE HIGH',
        whatYouNeed: ['Fresh caraway rye bread', 'Spicy brown mustard', 'Steamed hot pastrami', 'Tongs', 'Half-sour pickles'],
        description: 'Lay two slices of fresh caraway rye bread on a board (do NOT toast the bread!). Slather both interior faces generously with spicy brown mustard. Using tongs, lift 300g of the piping-hot steamed pastrami, letting excess liquid drip for 1 second, and stack in dense, folded, layered ribbons onto the bottom slice to a height of 6-8cm. Close with the top slice of bread. Slice diagonally in half with a serrated knife. Serve immediately with a crunchy half-sour dill pickle.',
        howToDoIt: 'Folding the ribbons creates air pockets that make the towering sandwich easy to bite through.',
        heat: 'No Heat',
        duration: 3,
        visualCues: 'A towering, majestic sandwich stacked high with dark ruby spiced meat between caraway rye.',
        smell: 'Hot cured pastrami, pungent brown mustard, and caraway seeds.',
        textureCheck: 'Soft, tender bread holding meltingly succulent, juicy spiced beef.',
        whatShouldThisLookLike: 'An iconic Katz\'s Deli pastrami on rye sandwich.',
        tip: 'Never toast the bread! Authentic Jewish deli rye is served fresh and soft so it molds gently around the hot meat.',
        commonMistake: 'Squeezing the sandwich flat, which forces all the delicious meat juices out onto the cutting board.',
        moveOnWhen: 'Sliced diagonally and served with half-sour pickles.',
        quickInstructions: 'Spread brown mustard on fresh rye, pile 300g hot steamed pastrami 8cm high, slice diagonally, serve with pickles.'
      }
    ],
    commonMistakes: [
      { mistake: 'Toasting the rye bread', remedy: 'Real deli pastrami uses soft, fresh seeded rye bread — not toasted.' },
      { mistake: 'Using yellow mustard', remedy: 'Always use spicy brown deli mustard with real mustard seeds.' }
    ],
    troubleshooting: [
      {
        problem: 'Pastrami feels chewy',
        whatHappened: 'The fat didn\'t render fully.',
        whyItHappened: 'Meat was under-steamed.',
        whatToDoNow: 'Return meat to the steamer basket for 5 more minutes until completely limp and hot.',
        howToPrevent: 'Steam for full 10-12 minutes over rolling steam.'
      }
    ],
    substitutions: [
      { original: 'Pastrami', substitute: 'Corned beef (to make a Reuben)', notes: 'Add Swiss cheese, sauerkraut, and Russian dressing for a Reuben.' }
    ],
    safetyNotes: ['Pastrami must be steamed to at least 74°C (165°F) for food safety and optimal tenderness.'],
    servingGuide: {
      restingTime: '0 minutes — eat immediately while hot.',
      temperature: 'Piping hot meat in fresh soft bread.',
      garnishing: 'Extra spicy brown mustard on the side.',
      accompaniments: 'Crisp half-sour dill pickles, potato salad, coleslaw, and Dr. Brown\'s Black Cherry or Cel-Ray soda.'
    }
  },

  // 15. CHEESECAKE (Classic New York Baked Cheesecake)
  {
    id: 'cheesecake',
    name: 'Classic New York Baked Cheesecake (Dense, Velvety Cream Cheese Cake with Graham Crust)',
    cuisine: 'American',
    region: 'United States (New York)',
    servings: 12,
    prepTime: 30,
    cookTime: 75,
    difficulty: 'Hard',
    overview: {
      summary: 'The gold standard of American baking: an ultra-dense, velvety, satiny New York-style cheesecake made from Philadelphia cream cheese, sour cream, sugar, eggs, vanilla, and lemon zest on a buttery graham cracker crust. Baked in a water bath (bain-marie) at low heat and cooled gradually inside the turned-off oven with the door cracked, guaranteeing a flat, crack-free, golden-ivory crown with zero sinkholes and an impossibly luxurious melt.',
      appearance: 'A tall, majestic, crack-free ivory cheesecake with a pale golden surface and clean vertical edges, resting on a thin, toasted golden graham cracker crust.',
      texture: 'Ultra-dense, rich, velvety, and satiny-smooth on the tongue — neither airy like chiffon nor heavy like putty.',
      flavor: 'Rich cultured cream cheese, pleasant lemon zest brightness, sweet vanilla, and buttery toasted graham crackers.',
      restingTimeMinutes: 360
    },
    equipment: [
      { name: '9-inch leakproof springform pan', purpose: 'Essential for releasing tall cheesecake with straight vertical edges.' },
      { name: 'Large roasting pan (for water bath / bain-marie)', purpose: 'Surrounds the springform pan with hot water to regulate baking temperature.' },
      { name: 'Heavy-duty aluminum foil (or silicone pan protector)', purpose: 'To wrap the outside of the springform pan so zero water leaks in.' }
    ],
    beforeYouStart: [
      { task: 'BRING ALL INGREDIENTS TO ROOM TEMPERATURE: 900g cream cheese, 1 cup sour cream, and 4 eggs must sit on counter for 2 hours (cold cream cheese creates permanent lumps!).', durationMinutes: 120 },
      { task: 'Preheat oven to 160°C (325°F).', durationMinutes: 15 },
      { task: 'Crush 150g graham crackers into fine crumbs, mix with 4 tbsp melted butter and 2 tbsp sugar, press firmly into bottom of 9-inch springform pan; bake 10 mins, cool.', durationMinutes: 15 }
    ],
    ingredientPrepGuide: [
      { item: 'THE ROOM-TEMPERATURE RULE: No Cold Cheese!', technique: 'Cream cheese MUST be completely room temperature and soft before mixing! If you attempt to beat cold, chilled cream cheese, it will shatter into millions of tiny white lumps that no amount of beating can fix.' },
      { item: 'Low-Speed Mixing (No Air Bubbles!)', technique: 'Mix on LOW speed only! Unlike cakes, you do NOT want to incorporate air into cheesecake batter. Trapped air bubbles will expand in the oven and cause the cheesecake to crack and deflate into a crater.' },
      { item: 'The 1-Hour Oven Door Crack Cooling', technique: 'When baking is finished, TURN OFF THE OVEN, crack the oven door open 2 inches, and let the cheesecake sit inside for 1 hour. Gradual cooling prevents the rapid contraction that causes ugly cracks down the center.' }
    ],
    essentialIngredients: [
      { name: 'Philadelphia cream cheese (Full-fat brick style)', prep: 'completely room temperature (never tub spread!)', amount: '900g (four 8-oz blocks)', metric: '900g', imperial: '2 lbs', common: '4 blocks' },
      { name: 'Granulated white sugar', prep: 'fine sugar', amount: '1 cup', metric: '200g', imperial: '7 oz', common: '1 cup' },
      { name: 'Sour cream (Full fat)', prep: 'room temperature', amount: '1 cup', metric: '240g', imperial: '8.5 oz', common: '1 cup' },
      { name: 'Large eggs', prep: 'room temperature', amount: '4 eggs', metric: '200g', imperial: '7 oz', common: '4 eggs' },
      { name: 'Pure vanilla extract', prep: 'aromatic', amount: '1 tbsp', metric: '15ml', imperial: '0.5 fl oz', common: '1 tbsp' },
      { name: 'Fresh lemon juice & grated lemon zest', prep: 'cuts rich dairy', amount: '1 tbsp juice + 1 tsp zest', metric: '15g', imperial: '0.5 oz', common: 'mixed' },
      { name: 'All-purpose flour or cornstarch', prep: 'stabilizer against cracking', amount: '2 tbsp', metric: '20g', imperial: '0.7 oz', common: '2 tbsp' },
      { name: 'Graham cracker crust', prep: 'crumbs, butter, sugar, pre-baked', amount: '1 crust', metric: '200g', imperial: '7 oz', common: '1 base' }
    ],
    steps: [
      {
        step: 1,
        title: 'BEAT ROOM-TEMP CREAM CHEESE ON LOW SPEED',
        whatYouNeed: ['Softened cream cheese (900g)', '1 cup sugar', '2 tbsp flour', 'Stand mixer with paddle attachment'],
        description: 'In the bowl of a stand mixer fitted with the paddle attachment (never the whisk!), beat the softened cream cheese, sugar, and flour on LOW speed for 3 to 4 minutes until completely smooth, creamy, and lump-free. Scrape down the sides and bottom of the bowl with a rubber spatula several times.',
        howToDoIt: 'Using low speed with the paddle incorporates zero air while shearing the cream cheese into a mirror-smooth cream.',
        heat: 'No Heat',
        duration: 5,
        visualCues: 'A silky, lump-free, glossy ivory cream that coats the paddle smoothly.',
        smell: 'Sweet, rich vanilla and cultured cream cheese.',
        textureCheck: 'Completely smooth with zero white lumps.',
        whatShouldThisLookLike: 'Smooth cream cheese paste in mixer bowl.',
        tip: 'Scrape the paddle and bottom of the bowl thoroughly — unmixed cream cheese at the bottom will float up and ruin the texture later.',
        commonMistake: 'Beating on high speed, whipping excess air into the batter which guarantees a cracked cheesecake.',
        moveOnWhen: 'Mixture is completely smooth and lump-free.',
        quickInstructions: 'Beat softened cream cheese, sugar, and flour on low speed for 3-4 mins until silky and lump-free; scrape bowl.'
      },
      {
        step: 2,
        title: 'ADD SOUR CREAM & EGGS ONE AT A TIME ON LOW',
        whatYouNeed: ['Cream cheese base', '1 cup sour cream', 'Vanilla & lemon zest/juice', '4 eggs'],
        description: 'With the mixer on low speed, mix in the sour cream, vanilla extract, lemon juice, and lemon zest until combined. Add the eggs one at a time, mixing on low speed just until each egg is incorporated before adding the next. Stop mixing the second the last egg disappears! Do not over-beat.',
        howToDoIt: 'Adding eggs one by one on low speed emulsifies the liquids smoothly without whipping foam.',
        heat: 'No Heat',
        duration: 5,
        visualCues: 'A satiny, pale ivory, pourable batter with a glossy mirror sheen and zero foam.',
        smell: 'Sweet cream cheese with bright lemon and vanilla notes.',
        textureCheck: 'Smooth, heavy, velvet batter.',
        whatShouldThisLookLike: 'Liquid velvet cheesecake batter.',
        tip: 'Tap the bowl gently on the counter to bring any trapped air bubbles to the surface and pop them with a toothpick.',
        commonMistake: 'Over-mixing after adding eggs, which weakens the custard structure.',
        moveOnWhen: 'Batter is velvety and eggs are incorporated.',
        quickInstructions: 'Mix in sour cream, vanilla, and lemon; add eggs one at a time on low speed just until combined.'
      },
      {
        step: 3,
        title: 'WATER BATH (BAIN-MARIE) & BAKE AT 160°C',
        whatYouNeed: ['Prepared springform pan wrapped in foil', 'Batter', 'Large roasting pan', 'Boiling water', 'Oven at 160°C (325°F)'],
        description: 'Wrap the outside bottom and sides of the springform pan with two layers of heavy-duty foil to make it 100% waterproof. Pour batter over the cooled graham crust. Place the wrapped pan inside the large roasting pan. Pour boiling water into the roasting pan until it reaches halfway up the side of the springform pan. Bake at 160°C (325°F) for 65 to 75 minutes.',
        howToDoIt: 'The water bath cannot exceed 100°C (212°F), shielding the delicate egg custard from the harsh heat of the oven and preventing cracks.',
        heat: 'Oven at 160°C / 325°F',
        duration: 75,
        visualCues: 'The outer 5cm ring is puffed and set, while the central 5cm circle wobbles gently like Jell-O when the pan is nudged.',
        smell: 'Incredible aroma of baked cheesecake, vanilla, and toasted graham crust.',
        textureCheck: 'Edges set, center has a gentle wobble (it will set completely as it cools).',
        whatShouldThisLookLike: 'A flat, pale ivory cheesecake with set edges and a gentle center wobble.',
        tip: 'Do not bake until the center is firm! If the center is firm in the oven, the cheesecake is overcooked and will dry out.',
        commonMistake: 'Baking without a water bath, causing the sides to puff up and the center to split into a canyon crack.',
        moveOnWhen: 'Edges are set and center has a gentle 5cm wobble.',
        quickInstructions: 'Wrap pan in foil, pour in batter, place in roasting pan with hot water bath; bake at 160°C for 65-75 mins until center wobbles.'
      },
      {
        step: 4,
        title: 'GRADUAL COOLING & 6-HOUR REFRIGERATION',
        whatYouNeed: ['Baked cheesecake in oven', 'Paring knife', 'Refrigerator'],
        description: 'TURN OFF THE OVEN. Crack the oven door open 2 inches (use a wooden spoon to hold it ajar). Leave the cheesecake inside the turned-off oven for strictly 1 hour. Remove from oven, take out of water bath, and remove foil. Run a thin paring knife gently around the inside rim of the pan to loosen the edges. Let cool completely to room temperature on the counter (1 hour), then refrigerate for at least 6 hours (overnight is best) before releasing the springform ring.',
        howToDoIt: 'Running a knife around the rim frees the cake so that as it shrinks during chilling, it pulls inward without cracking.',
        heat: 'Gradual Cooling to Chill',
        duration: 420,
        visualCues: 'A flawless, flat, crack-free, velvety ivory surface that has settled into a firm, dense cake.',
        smell: 'Rich vanilla cream cheese.',
        textureCheck: 'Ultra-dense, satiny, and firm to the touch.',
        whatShouldThisLookLike: 'A world-class, professional New York cheesecake.',
        tip: 'To slice cleanly: run a sharp chef knife under hot tap water, wipe dry, make one clean cut, and wipe the knife clean before every single slice!',
        commonMistake: 'Unmolding or slicing while warm, turning the cake into a messy collapse.',
        moveOnWhen: 'Chilled for 6+ hours and sliced with a hot knife.',
        quickInstructions: 'Turn oven off, crack door 1 hour; loosen edges with knife, cool to room temp, chill in fridge 6+ hours before slicing.'
      }
    ],
    commonMistakes: [
      { mistake: 'Cold cream cheese', remedy: 'Cream cheese MUST be room temperature to avoid permanent lumpy batter.' },
      { mistake: 'Skipping the water bath', remedy: 'The water bath keeps heat gentle and prevents surface cracking.' }
    ],
    troubleshooting: [
      {
        problem: 'Cheesecake developed a crack down the center',
        whatHappened: 'The cake contracted too rapidly.',
        whyItHappened: 'Overbaked, or cooled down too fast.',
        whatToDoNow: 'Cover the top with fresh strawberry sauce, sour cream glaze, or whipped cream — no one will ever know!',
        howToPrevent: 'Turn off oven when center still wobbles, crack door for 1 hour, and loosen rim with a paring knife.'
      }
    ],
    substitutions: [
      { original: 'Graham crackers', substitute: 'Digestive biscuits or crushed Biscoff cookies', notes: 'Biscoff crust adds heavenly caramelized cinnamon flavor.' }
    ],
    safetyNotes: ['Roasting pan has boiling water — remove springform pan carefully before handling water.'],
    servingGuide: {
      restingTime: 'Refrigerate for at least 6 hours (overnight preferred).',
      temperature: 'Chilled cold.',
      garnishing: 'Fresh macerated strawberries or raspberries, or a rosette of whipped cream.',
      accompaniments: 'Hot espresso, dark roast coffee, or dessert wine.'
    }
  },

  // 16. APPLE PIE (Classic All-American Double-Crust Flaky Apple Pie)
  {
    id: 'apple-pie',
    name: 'All-American Double-Crust Flaky Apple Pie (Spiced Granny Smith & Honeycrisp with Lattice Crust)',
    cuisine: 'American',
    region: 'United States (Classic American)',
    servings: 8,
    prepTime: 45,
    cookTime: 55,
    difficulty: 'Hard',
    overview: {
      summary: 'The ultimate symbol of American baking tradition: a shatteringly flaky, all-butter double crust (pâte brisée) woven into an elegant lattice, cradling a mountain of sliced tart Granny Smith and sweet Honeycrisp apples tossed with brown sugar, pure butter, Mexican cinnamon, nutmeg, allspice, and lemon juice. Baked until the crust is deep golden-brown and the apple filling bubbles with thick, syrupy caramel juices, served warm à la mode with vanilla ice cream.',
      appearance: 'A towering golden-amber pie with an intricately woven lattice crust glistening with sparkling turbinado sugar crystals, with thick caramel apple juices bubbling through the vents.',
      texture: 'Shatteringly crisp, flaky, buttery crust that flakes into shards on the fork, encasing tender, juicy, perfectly softened apple slices that retain a gentle toothsome bite.',
      flavor: 'Warm aromatic cinnamon, nutmeg, and allspice, rich caramelized butter, balanced by the sweet-tart brightness of fresh apples and lemon.',
      restingTimeMinutes: 120
    },
    equipment: [
      { name: '9-inch deep-dish glass or ceramic pie plate', purpose: 'Glass allows you to inspect the bottom crust to ensure it is golden and crisp (no soggy bottoms!).' },
      { name: 'Pastry cutter or food processor', purpose: 'To cut cold butter into flour into pea-sized flakes without melting.' },
      { name: 'Baking sheet lined with foil', purpose: 'Placed under pie to catch bubbling juices.' }
    ],
    beforeYouStart: [
      { task: 'Cut 250g unsalted butter into 1cm cubes and freeze for 15 minutes (butter MUST be ice-cold!).', durationMinutes: 15 },
      { task: 'Prepare all-butter crust: 350g flour, 1 tsp salt, 1 tbsp sugar, 250g cold butter, 100ml ice water. Chill dough discs for 1 hour.', durationMinutes: 60 },
      { task: 'Peel, core, and slice 1.2kg mixed apples (half Granny Smith for tartness, half Honeycrisp for sweet structure) into 6mm (1/4-inch) slices.', durationMinutes: 15 }
    ],
    ingredientPrepGuide: [
      { item: 'THE TWO-APPLE RULE: Tart + Sweet Hybrid', technique: 'Never use just one apple variety! Granny Smith provides firm pectin structure and sharp tartness that prevents the pie from tasting cloying. Honeycrisp or Braeburn provides sweet floral juiciness. Combining both creates the perfect balance of flavor and texture.' },
      { item: 'Macerating Apples & Reducing Juices (No Soupy Pie!)', technique: 'Toss apple slices with sugar, spices, and lemon juice; let sit in a colander over a bowl for 20 minutes to release 1/2 cup liquid. Boil this liquid in a small pan with 2 tbsp butter for 3 minutes until a thick caramel syrup forms, then toss back with the apples. This prevents the apples from shrinking inside the crust, eliminating the dreaded empty gap under the top crust!' }
    ],
    essentialIngredients: [
      { name: 'Mixed firm apples (Granny Smith + Honeycrisp)', prep: 'peeled, cored, sliced to 6mm (1/4 inch)', amount: '1.2 kg (approx. 6-7 apples)', metric: '1200g', imperial: '2.6 lbs', common: '6-7 apples' },
      { name: 'Unbleached all-purpose flour (for crust + thickener)', prep: '350g (crust) + 2 tbsp (thickener)', amount: '370g total', metric: '370g', imperial: '13 oz', common: '2.75 cups' },
      { name: 'Unsalted butter (ice-cold)', prep: 'cubed and chilled', amount: '250g (crust) + 2 tbsp (filling)', metric: '280g', imperial: '10 oz', common: '1.25 cups' },
      { name: 'Light brown sugar & Granulated white sugar', prep: 'filling sweetness', amount: '1/3 cup brown + 1/3 cup white', metric: '140g', imperial: '5 oz', common: '2/3 cup total' },
      { name: 'Ground cinnamon', prep: 'sweet warmth', amount: '1.5 tsp', metric: '4g', imperial: '0.14 oz', common: '1.5 tsp' },
      { name: 'Ground nutmeg & Ground allspice', prep: 'warm spices', amount: '1/4 tsp nutmeg + 1/4 tsp allspice', metric: '1g', imperial: '0.04 oz', common: 'mixed' },
      { name: 'Fresh lemon juice', prep: 'prevents browning and balances sweetness', amount: '1.5 tbsp', metric: '22ml', imperial: '0.75 fl oz', common: '1.5 tbsp' },
      { name: 'Ice-cold water', prep: 'for crust binding', amount: '1/3 cup to 1/2 cup', metric: '100ml', imperial: '3.4 fl oz', common: '1/2 cup' },
      { name: 'Egg beaten with 1 tbsp milk', prep: 'egg wash for golden shine', amount: '1 egg', metric: '50g', imperial: '1.8 oz', common: '1 egg' },
      { name: 'Turbinado or coarse sugar', prep: 'for crunchy sparkling crust', amount: '1 tbsp', metric: '15g', imperial: '0.5 oz', common: '1 tbsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'ROLL FLAKY BOTTOM CRUST & MOUND APPLES',
        whatYouNeed: ['Chilled dough disc', 'Rolling pin', '9-inch pie plate', 'Spiced caramel-coated apple slices'],
        description: 'Roll one chilled dough disc on a floured surface into a 30cm (12-inch) circle (about 3mm thick). Gently transfer into the 9-inch pie plate, pressing into the corners without stretching. Mound the spiced, caramel-coated apple slices tightly into the crust, layering them horizontally with your hands to eliminate large air gaps and building a high, rounded dome in the center.',
        howToDoIt: 'Arranging apple slices flat by hand creates a solid foundation that prevents the top crust from collapsing as the apples soften.',
        heat: 'No Heat',
        duration: 10,
        visualCues: 'A high, tightly packed dome of golden spiced apple slices filling the bottom crust.',
        smell: 'Incredible aroma of sweet cinnamon, nutmeg, lemon, and apples.',
        textureCheck: 'Cold, firm pastry holding packed apple slices.',
        whatShouldThisLookLike: 'A towering mound of spiced apples in raw pie shell.',
        tip: 'Dot the top of the apples with 2 tbsp of butter cubes for extra richness.',
        commonMistake: 'Dumping apples loosely with big air pockets, resulting in a hollow collapsed crust.',
        moveOnWhen: 'Bottom crust is filled with compact apple dome.',
        quickInstructions: 'Roll bottom crust to 3mm, fit in pie plate, pack spiced apples tightly into a high dome.'
      },
      {
        step: 2,
        title: 'WEAVE LATTICE CRUST & CRIMP FLUTED EDGES',
        whatYouNeed: ['Second dough disc', 'Pizza cutter or knife', 'Pastry brush & egg wash', 'Turbinado sugar'],
        description: 'Roll second dough disc into a 30cm circle. Cut into ten 2.5cm-wide strips with a pizza wheel. Lay 5 parallel strips across the apples. Fold back alternating strips, lay a perpendicular strip across the center, and unfold. Repeat, weaving over and under to create a tight lattice pattern. Trim excess dough to 2cm overhang, fold bottom crust up over the lattice strips, and pinch with thumb and index finger to form a decorative fluted edge. Brush with egg wash and sprinkle coarse turbinado sugar.',
        howToDoIt: 'A lattice top allows steam to vent freely through the gaps while baking, ensuring the filling thickens into caramel.',
        heat: 'No Heat',
        duration: 15,
        visualCues: 'An intricate woven lattice crust with fluted scalloped rims, glistening with egg wash and sugar crystals.',
        textureCheck: 'Cold, firm, intricately woven pastry.',
        whatShouldThisLookLike: 'A picture-perfect bakery lattice apple pie.',
        tip: 'Chill the assembled pie in the freezer for 15 minutes before baking — cold butter in the crust guarantees maximum flaky layers!',
        commonMistake: 'Baking without steam vents (if doing a solid top crust), trapping steam and turning the crust gummy.',
        moveOnWhen: 'Lattice is woven, fluted, egg-washed, and chilled 15 minutes.',
        quickInstructions: 'Cut dough into strips, weave lattice over apples, crimp edges, brush with egg wash, sprinkle turbinado sugar; chill 15 mins.'
      },
      {
        step: 3,
        title: 'BAKE AT 200°C TO BUBBLING CARAMEL THICKNESS',
        whatYouNeed: ['Chilled pie on foil-lined baking sheet', 'Preheated oven (200°C / 400°F)'],
        description: 'Place the pie on a foil-lined baking sheet on the lowest oven rack. Bake at 200°C (400°F) for 20 minutes to set the crust structure. Reduce oven temperature to 180°C (350°F) and bake for 35 to 40 more minutes. The pie is done ONLY when the crust is deep golden-amber and the apple juices in the center are visibly boiling with thick, slow-bursting, glossy caramel bubbles.',
        howToDoIt: 'Baking on the lowest rack sends intense heat directly into the bottom of the pie plate, eliminating soggy bottoms!',
        heat: '200°C for 20 mins, then 180°C for 40 mins',
        duration: 60,
        visualCues: 'Deep chestnut-golden blistered lattice; thick caramel juices bubbling vigorously through the lattice gaps.',
        hear: 'Lively, sticky bubbling of boiling apple caramel.',
        smell: 'Incredible, heavenly holiday aroma of toasted butter pastry, cinnamon, and baked apples.',
        textureCheck: 'Apples yield when pierced with a thin knife; bottom crust is crisp and golden.',
        whatShouldThisLookLike: 'A bubbling, golden-brown artisanal lattice apple pie.',
        tip: 'If the outer fluted crust edges brown too quickly, shield them with strips of aluminum foil halfway through baking.',
        commonMistake: 'Pulling the pie out while juices are thin and watery — the filling must boil to activate the starch thickener.',
        moveOnWhen: 'Juices are bubbling thick and crust is deep golden throughout.',
        quickInstructions: 'Bake at 200°C for 20 mins, reduce to 180°C for 40 mins until crust is deep golden and caramel juices boil thick.'
      },
      {
        step: 4,
        title: 'THE CRITICAL 2-HOUR REST & SERVE À LA MODE',
        whatYouNeed: ['Baked apple pie', 'Wire cooling rack', 'Vanilla bean ice cream'],
        description: 'Transfer pie to a wire cooling rack. LET REST FOR STRICTLY 2 HOURS AT ROOM TEMPERATURE. Slicing into a hot apple pie will cause the molten juices to spill out in a watery river. As it rests, the starches and natural apple pectins cool and set into a firm, sliceable caramel filling. Slice with a sharp serrated knife and serve warm with a generous scoop of vanilla bean ice cream.',
        howToDoIt: 'Patience is rewarded: resting allows the bubbling caramel to set into a slice that stands proudly on the plate without collapsing.',
        heat: 'No Heat',
        duration: 120,
        visualCues: 'A clean, upright pie slice showing distinct layers of tender apples bathed in amber caramel, encased in flaky golden pastry.',
        smell: 'Sweet cinnamon apples and cold vanilla cream.',
        textureCheck: 'Shatteringly crisp, flaky crust with meltingly tender, saucy apples and cold melting ice cream.',
        whatShouldThisLookLike: 'A slice of heaven on a plate.',
        tip: 'To reheat leftover slices: pop in a 175°C (350°F) oven for 8 minutes to re-crisp the crust.',
        commonMistake: 'Cutting into the pie 20 minutes out of the oven, emptying all the juices.',
        moveOnWhen: 'Rested 2 hours, sliced cleanly, and served with ice cream.',
        quickInstructions: 'Cool on wire rack for strictly 2 hours to let caramel juices set; slice and serve warm with vanilla ice cream.'
      }
    ],
    commonMistakes: [
      { mistake: 'Slicing while hot', remedy: 'You MUST rest the pie for 2 hours. Hot pie spills juices everywhere; rested pie slices cleanly.' },
      { mistake: 'Soggy bottom crust', remedy: 'Bake on the lowest oven rack on a preheated baking sheet to crisp the bottom crust.' }
    ],
    troubleshooting: [
      {
        problem: 'Top crust browned too quickly before filling cooked',
        whatHappened: 'Oven heat was intense on top.',
        whyItHappened: 'Baking without a foil shield.',
        whatToDoNow: 'Cover the entire top loosely with a sheet of aluminum foil and continue baking until filling bubbles.',
        howToPrevent: 'Shield edges with foil if they brown before the 40-minute mark.'
      }
    ],
    substitutions: [
      { original: 'Honeycrisp apples', substitute: 'Braeburn, Pink Lady, or Jonagold', notes: 'Maintain firm structure when baked.' }
    ],
    safetyNotes: ['Bubbling caramel juices are boiling hot — handle with care.'],
    servingGuide: {
      restingTime: 'Rest for strictly 2 hours before slicing.',
      temperature: 'Warm room temperature.',
      garnishing: 'A scoop of vanilla bean ice cream (à la mode) or a slice of sharp cheddar cheese.',
      accompaniments: 'Hot apple cider, black coffee, or cold milk.'
    }
  }
];
