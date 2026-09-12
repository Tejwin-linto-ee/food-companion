// American Comfort Classics (5 dishes: Fried Chicken, Steak, Pancakes, Waffles, Mac and Cheese)
module.exports = [
  // 7. FRIED CHICKEN (Southern Buttermilk Crispy Fried Chicken)
  {
    id: 'fried-chicken',
    name: 'Authentic Southern Buttermilk Fried Chicken (Double-Dredged 11-Spice Crispy Crust)',
    cuisine: 'American',
    region: 'United States (American South)',
    servings: 4,
    prepTime: 30,
    cookTime: 25,
    difficulty: 'Medium',
    overview: {
      summary: 'The undisputed royalty of Southern hospitality: bone-in chicken pieces brined overnight in seasoned whole buttermilk, garlic, and hot pepper sauce to tenderize the meat to the bone. Dredged twice in an 11-spice seasoned flour with drops of buttermilk to create jagged craggy flakes, then deep-fried in hot peanut oil in a heavy cast-iron skillet until deep golden-mahogany with an ear-shattering crispy crust and exploding juiciness.',
      appearance: 'Deep golden-amber chicken pieces covered in a thick, jagged, craggy landscape of crackling crispy flakes, revealing steaming, juicy white and dark meat when pulled apart.',
      texture: 'An ear-shattering, loud crunch from the craggy spiced crust, followed by meltingly tender, succulent, juice-dripping chicken.',
      flavor: 'Rich, savory, peppery, with garlic, onion, smoked paprika, subtle buttermilk tang, and pure fried poultry goodness.',
      restingTimeMinutes: 10
    },
    equipment: [
      { name: '12-inch heavy cast-iron skillet or Dutch oven', purpose: 'Cast iron maintains steady oil temperature when cold chicken is dropped in.' },
      { name: 'Deep-fry / candy thermometer', purpose: 'To strictly regulate frying oil between 165°C and 175°C (325-350°F).' },
      { name: 'Wire cooling rack set over baking sheet', purpose: 'Essential! Paper towels trap steam and turn the bottom crust soggy; a wire rack keeps it 360-degree crispy.' }
    ],
    beforeYouStart: [
      { task: 'Whisk buttermilk brine: 3 cups whole buttermilk, 2 tbsp hot sauce (Louisiana/Crystal), 1 tbsp salt, 1 tsp black pepper, 1 tsp garlic powder.', durationMinutes: 5 },
      { task: 'Submerge 1.2kg bone-in chicken pieces (drumsticks, thighs, breasts halved) in buttermilk brine; refrigerate for at least 4 hours (overnight preferred).', durationMinutes: 240 },
      { task: 'Whisk seasoned flour: 3 cups flour, 1/2 cup cornstarch, 1 tbsp paprika, 1 tbsp garlic powder, 1 tbsp onion powder, 1 tbsp black pepper, 1 tbsp kosher salt, 1 tsp cayenne, 1 tsp dried oregano, 1 tsp dried thyme.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'THE CRAGGY FLAKE TRICK (Buttermilk Drops in Flour)', technique: 'Before dredging chicken, drizzle 3-4 tablespoons of the buttermilk brine directly into the dry seasoned flour. Rub with your fingertips to create dozens of pea-sized shaggy flour flakes. When the wet chicken is pressed into these flakes, they adhere and fry into shatteringly crisp, jagged ripples!' },
      { item: 'Cornstarch for Crispness', technique: 'Replacing 1/2 cup of flour with cornstarch lowers the gluten content, preventing the crust from turning tough or leathery and guaranteeing a light, glass-like crunch.' }
    ],
    essentialIngredients: [
      { name: 'Bone-in chicken pieces (thighs, drumsticks, breasts)', prep: 'trimmed and brined', amount: '1.2 kg', metric: '1200g', imperial: '2.6 lbs', common: '8 pieces' },
      { name: 'Whole buttermilk', prep: 'full fat for tenderizing brine', amount: '3 cups', metric: '720ml', imperial: '24 fl oz', common: '3 cups' },
      { name: 'Louisiana hot pepper sauce', prep: 'vinegar-based hot sauce in brine', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp' },
      { name: 'All-purpose flour', prep: 'dredge base', amount: '3 cups', metric: '420g', imperial: '15 oz', common: '3 cups' },
      { name: 'Cornstarch', prep: 'for glass-like shatter', amount: '1/2 cup', metric: '60g', imperial: '2.1 oz', common: '1/2 cup' },
      { name: '11-Spice blend: Paprika, garlic powder, onion powder, cayenne, oregano, thyme, black pepper, white pepper, salt', prep: 'heavily seasoned', amount: '4 tbsp total', metric: '40g', imperial: '1.4 oz', common: 'mixed' },
      { name: 'Peanut oil or vegetable oil', prep: 'high smoke point for frying', amount: '1.5 liters', metric: '1500ml', imperial: '50 fl oz', common: '6 cups' }
    ],
    steps: [
      {
        step: 1,
        title: 'THE CRAGGY DOUBLE DREDGE',
        whatYouNeed: ['Buttermilk-brined chicken', 'Seasoned flour bowl', 'Wire rack'],
        description: 'Drizzle 3 tbsp buttermilk brine into the seasoned flour and rub with fingertips to create pea-sized clumps. Lift one chicken piece from brine, let excess drip for 2 seconds, then bury in seasoned flour. Press down firmly with your palms so flour and flakes pack onto every crevice. Dip back into buttermilk for 1 second, then bury in seasoned flour a second time, packing firmly. Shake off loose flour and transfer to a wire rack. Let rest for 15 minutes before frying.',
        howToDoIt: 'Resting the dredged chicken for 15 minutes allows the flour starches to hydrate and glue firmly to the chicken skin, preventing the crust from sliding off in the hot oil.',
        heat: 'No Heat',
        duration: 15,
        visualCues: 'Chicken is completely encrusted in a thick, jagged, bumpy armor of flaked spiced flour.',
        textureCheck: 'Tacky, well-adhered crust coating.',
        whatShouldThisLookLike: 'Craggy, flour-coated chicken pieces resting on a rack.',
        tip: 'Keep one hand strictly for "wet" and one hand for "dry" to avoid flouring your fingers into thick clubs!',
        commonMistake: 'Frying immediately without resting, which causes the crust to separate and float off the chicken in oil.',
        moveOnWhen: 'All pieces are double-dredged and rested 15 minutes.',
        quickInstructions: 'Dredge chicken in seasoned flour, dip in buttermilk, dredge second time pressing flakes; rest on wire rack 15 mins.'
      },
      {
        step: 2,
        title: 'FRY IN CAST IRON AT 165°C (325°F)',
        whatYouNeed: ['Cast-iron skillet with 2 inches peanut oil', 'Thermometer', 'Tongs', 'Resting chicken'],
        description: 'Heat peanut oil in cast-iron skillet to 175°C (350°F). Carefully lower 3 to 4 pieces of chicken into the hot oil skin-side down (oil temperature will drop to 160-165°C). Do not overcrowd. Fry undisturbed for 8 to 10 minutes until the bottom crust is deep golden-brown. Flip carefully with metal tongs and fry the second side for 6 to 8 minutes until the internal temperature reaches 75°C (165°F) for breasts and 80°C (175°F) for thighs and drumsticks.',
        howToDoIt: 'Maintain oil temperature strictly between 160°C and 170°C (325-340°F). Too hot will burn the crust before meat cooks; too cold will soak grease.',
        heat: 'Medium Heat (165°C / 325°F oil)',
        duration: 18,
        visualCues: 'Crust turns deep, resonant golden-mahogany with prominent jagged ridges; vigorous, steady bubbling.',
        hear: 'Loud, rhythmic frying sizzle that softens as chicken approaches doneness.',
        smell: 'Heavenly Southern aroma of toasted spices, garlic, and frying chicken.',
        textureCheck: 'Rock-hard, crisp shell when tapped with tongs; internal temp 75-80°C.',
        whatShouldThisLookLike: 'Deep golden craggy fried chicken bubbling in oil.',
        tip: 'Fry dark meat and white meat in separate batches because drumsticks and thighs take 4 minutes longer to cook through.',
        commonMistake: 'Frying in shallow oil on high heat, burning the exterior black while the bone remains bloody raw.',
        moveOnWhen: 'Internal temperature reaches 75°C with deep golden crust.',
        quickInstructions: 'Fry 3-4 pieces in 165°C oil for 8-10 mins, flip, fry 6-8 mins until internal temp reaches 75°C and crust is deep golden.'
      },
      {
        step: 3,
        title: 'DRAIN ON WIRE RACK & SEASON WHILE HOT',
        whatYouNeed: ['Fried chicken', 'Wire rack over baking sheet', 'Flaky sea salt'],
        description: 'Transfer hot fried chicken immediately onto a wire cooling rack set over a baking sheet. NEVER drain on paper towels! Immediately sprinkle with a light shower of flaky sea salt while hot oil is sizzling on the crust. Let rest for 10 minutes before eating.',
        howToDoIt: 'A wire rack allows air to circulate underneath the chicken, preventing trapped steam from softening the bottom crust.',
        heat: 'No Heat',
        duration: 10,
        visualCues: 'Glistening, deep mahogany craggy crust with sparkling salt crystals; excess oil drips cleanly onto sheet below.',
        hear: 'Faint crackling as the crisp crust settles.',
        smell: 'Smoky paprika, pepper, and fried chicken.',
        textureCheck: 'Shatteringly crisp 360-degree shell.',
        whatShouldThisLookLike: 'Golden fried chicken resting majestically on a wire rack.',
        tip: 'Resting 10 minutes allows hot internal juices to redistribute so they don\'t squirt out and burn your mouth on the first bite.',
        commonMistake: 'Covering with foil, which steams the chicken into soggy skin in under 2 minutes.',
        moveOnWhen: 'Rested 10 minutes and ready to serve.',
        quickInstructions: 'Drain on wire rack (never paper towels!), sprinkle with flaky salt immediately, rest 10 minutes.'
      }
    ],
    commonMistakes: [
      { mistake: 'Draining on paper towels', remedy: 'Paper towels trap steam and turn the bottom crust soggy. Always use an elevated wire rack.' },
      { mistake: 'Oil too hot', remedy: 'Frying above 180°C burns the crust while leaving the meat raw at the bone. Maintain 165°C.' }
    ],
    troubleshooting: [
      {
        problem: 'Crust fell off the chicken during frying',
        whatHappened: 'The flour dredge did not adhere.',
        whyItHappened: 'Chicken was not dried before brine, or was not rested after dredging.',
        whatToDoNow: 'Enjoy the crispy fried flakes and chicken — it still tastes wonderful!',
        howToPrevent: 'Always rest dredged chicken for 15 minutes before dropping into hot oil so starches hydrate and glue.'
      }
    ],
    substitutions: [
      { original: 'Peanut oil', substitute: 'Canola oil or Vegetable oil', notes: 'Peanut oil offers highest smoke point, but canola works well.' },
      { original: 'Buttermilk', substitute: 'Whole milk mixed with 2 tbsp lemon juice or vinegar, rested 10 mins', notes: 'Quick homemade buttermilk.' }
    ],
    safetyNotes: ['Verify chicken reaches internal temperature of 75°C (165°F) with a digital probe.'],
    servingGuide: {
      restingTime: 'Rest 10 minutes before serving.',
      temperature: 'Warm and crispy.',
      garnishing: 'A drizzle of hot honey (honey infused with chili flakes).',
      accompaniments: 'Fluffy Southern buttermilk biscuits, creamy coleslaw, mac and cheese, and sweet iced tea.'
    }
  },

  // 8. STEAK (Classic Cast-Iron Seared Ribeye Steak with Herb Butter Baste)
  {
    id: 'steak',
    name: 'Classic American Cast-Iron Seared Ribeye Steak (Butter-Basted with Garlic & Rosemary)',
    cuisine: 'American',
    region: 'United States (Classic Steakhouse)',
    servings: 2,
    prepTime: 15,
    cookTime: 10,
    difficulty: 'Medium',
    overview: {
      summary: 'The holy grail of steakhouse cooking: a thick-cut, well-marbled prime bone-in Ribeye steak brought to room temperature, salted aggressively with coarse kosher salt, and seared in a smoking-hot cast-iron skillet to form a dark, savory, caramelized Maillard crust. Basted continuously (arrosé) with foaming browned butter, crushed garlic cloves, fresh rosemary, and thyme until cooked to a juicy medium-rare with a warm pink center.',
      appearance: 'A thick, dark mahogany, glistening crusted ribeye steak pooled in foaming golden herb butter with crispy rendered fat edges, sliced to reveal an edge-to-edge warm ruby-pink center.',
      texture: 'Crisp, salty, caramelized outer crust contrasting with buttery-soft, juice-exploding, tender beef that cuts effortlessly.',
      flavor: 'Intense roasted beef savory depth, nutty browned butter, pungent sweet garlic, earthy rosemary, and sharp black pepper.',
      restingTimeMinutes: 8
    },
    equipment: [
      { name: '12-inch heavy cast-iron skillet', purpose: 'Essential for massive heat retention that sears without cooling down when cold meat enters.' },
      { name: 'Digital instant-read meat thermometer', purpose: 'To hit medium-rare (52°C / 125°F) with absolute precision.' },
      { name: 'Large metal spoon', purpose: 'For continuous butter-basting (arrosage) over the steak.' }
    ],
    beforeYouStart: [
      { task: 'Remove a thick 450g (1-pound) Ribeye steak (at least 3.5cm / 1.5 inches thick) from refrigerator 45 minutes before cooking to remove chill.', durationMinutes: 45 },
      { task: 'Pat steak completely bone-dry on all sides with paper towels.', durationMinutes: 2 },
      { task: 'Season heavily with 1.5 tsp coarse kosher salt and 1 tsp freshly cracked coarse black pepper on all sides and edges.', durationMinutes: 2 }
    ],
    ingredientPrepGuide: [
      { item: 'THE THICKNESS RULE (At Least 1.5 Inches Thick!)', technique: 'Never try this technique with a thin supermarket steak! Thin 1/2-inch steaks will overcook to well-done before you can even develop a brown crust. A thick 1.5 to 2-inch ribeye gives you enough time to sear a deep mahogany crust while keeping the interior a juicy ruby-pink medium-rare.' },
      { item: 'The French Arrosé (Continuous Butter Basting)', technique: 'During the final 2 minutes, tilt the skillet toward you so hot foaming butter pools at the bottom. Use a large spoon to rapidly and continuously ladle the hot herb-infused foaming butter over the top of the steak. This cooks the steak evenly from both sides while perfuming the crust with garlic and rosemary.' }
    ],
    essentialIngredients: [
      { name: 'Prime bone-in or boneless Ribeye steak', prep: '3.5cm (1.5-inch) thick, well-marbled, bone-dry', amount: '1 large (450g - 500g)', metric: '500g', imperial: '1.1 lbs', common: '1 steak' },
      { name: 'Coarse kosher salt & Fresh cracked black pepper', prep: 'aggressive seasoning', amount: '1.5 tsp salt + 1 tsp pepper', metric: '10g', imperial: '0.35 oz', common: 'mixed' },
      { name: 'High-smoke point neutral oil (Avocado or Grapeseed)', prep: 'for initial searing', amount: '1.5 tbsp', metric: '22ml', imperial: '0.75 fl oz', common: '1.5 tbsp' },
      { name: 'Unsalted butter', prep: 'cold, cubed for basting', amount: '4 tbsp', metric: '60g', imperial: '2.1 oz', common: '4 tbsp' },
      { name: 'Fresh garlic cloves', prep: 'lightly smashed with skins on', amount: '4 cloves', metric: '15g', imperial: '0.5 oz', common: '4 cloves' },
      { name: 'Fresh rosemary sprigs', prep: 'whole sprigs', amount: '2 sprigs', metric: '4g', imperial: '0.14 oz', common: '2 sprigs' },
      { name: 'Fresh thyme sprigs', prep: 'whole sprigs', amount: '4 sprigs', metric: '4g', imperial: '0.14 oz', common: '4 sprigs' },
      { name: 'Flaky Maldon sea salt', prep: 'for finishing sliced steak', amount: '1/2 tsp', metric: '2g', imperial: '0.07 oz', common: 'pinch' }
    ],
    steps: [
      {
        step: 1,
        title: 'SEAR IN SMOKING CAST IRON FOR MAHOGANY CRUST',
        whatYouNeed: ['Screaming-hot cast-iron skillet', '1.5 tbsp avocado oil', 'Dry seasoned steak', 'Tongs'],
        description: 'Heat cast-iron skillet over high heat until wisps of white smoke rise from the surface. Swirl in 1.5 tbsp high-smoke point oil. Carefully lay the steak away from you into the hot pan. Press down gently with tongs to ensure full surface contact. Sear undisturbed for 2 to 2.5 minutes until a deep, dark mahogany-brown caramelized crust forms. Flip and sear the second side for 2 minutes.',
        howToDoIt: 'Screaming-hot iron initiates intense Maillard browning in under 120 seconds before heat can penetrate to the center.',
        heat: 'High Heat (Smoking Hot)',
        duration: 5,
        visualCues: 'Deep, dark mahogany crust covering every millimeter of the seared face; sizzling rendered fat.',
        hear: 'Loud, violent, crackling sear upon contact.',
        smell: 'Intense aroma of seared prime beef caramelizing against cast iron.',
        textureCheck: 'Rigid, caramelized crust.',
        whatShouldThisLookLike: 'A dark mahogany crusted steak sizzling on the iron.',
        tip: 'Using tongs, hold the steak upright on its side for 60 seconds to render and crisp the thick white fat cap!',
        commonMistake: 'Flipping every 30 seconds before a crust has formed, leaving the steak gray and boiled.',
        moveOnWhen: 'Both sides have a dark mahogany crust.',
        quickInstructions: 'Sear steak in smoking hot skillet with oil for 2-2.5 mins per side until deep mahogany crust forms; render fat cap.'
      },
      {
        step: 2,
        title: 'LOWER HEAT & THE CONTINUOUS BUTTER BASTE (ARROSÉ)',
        whatYouNeed: ['4 tbsp butter', '4 smashed garlic cloves', 'Rosemary & thyme sprigs', 'Large spoon'],
        description: 'Reduce burner heat to medium-low. Drop 4 tbsp cold butter, smashed garlic cloves, rosemary, and thyme into the pan. As the butter melts and foams vigorously, tilt the skillet slightly toward you. Use a large metal spoon to rapidly and continuously ladle the foaming hot herb butter over the top of the steak for 2 to 3 minutes. Insert an instant-read thermometer into the thickest part: remove steak when it reaches 49-51°C (120-124°F) for medium-rare (carryover heat will bring it to 54°C / 130°F).',
        howToDoIt: 'Basting with foaming butter cooks the top of the steak with 140°C butterfat while basting aromatics directly into the crust.',
        heat: 'Medium-Low Heat',
        duration: 3,
        visualCues: 'Butter foams with golden micro-bubbles; rosemary crackles; garlic turns golden-brown; steak glistens with butter.',
        hear: 'Soft, frothy sizzling of bubbling butter and herbs.',
        smell: 'Heavenly steakhouse perfume of browned butter, roasted garlic, and woodsy rosemary.',
        textureCheck: 'Springy to gentle thumb touch (like the base of your thumb when thumb and middle finger touch).',
        whatShouldThisLookLike: 'A glistening steak bathed in foaming golden herb butter.',
        tip: 'Do not let the butter turn black — if it browns too fast, slide the pan partially off the heat.',
        commonMistake: 'Adding butter at the start over high heat, which burns the milk solids into bitter black ash.',
        moveOnWhen: 'Internal temperature reaches 50°C (122°F).',
        quickInstructions: 'Reduce heat, add butter, garlic, herbs; tilt pan and rapidly spoon foaming butter over steak for 2 mins to 50°C internal.'
      },
      {
        step: 3,
        title: 'THE MANDATORY 8-MINUTE REST & SLICE',
        whatYouNeed: ['Cooked steak', 'Cutting board with juice groove', 'Pan butter', 'Sharp carving knife', 'Flaky Maldon salt'],
        description: 'Transfer steak to a warm wooden cutting board. Pour the warm pan butter, garlic, and herbs over the top. Let rest undisturbed for strictly 8 to 10 minutes. Using a razor-sharp carving knife held at a 45-degree angle, slice the steak against the grain into thick 1cm (1/2-inch) slices. Fan out on a platter, spoon board juices over top, and shower with flaky Maldon sea salt.',
        howToDoIt: 'Resting allows constricted muscle fibers to relax and re-absorb internal meat juices. Slicing immediately causes all the juice to pour out onto the board!',
        heat: 'No Heat',
        duration: 8,
        visualCues: 'Edge-to-edge uniform ruby-pink center with zero gray overcooked band beneath the dark mahogany crust.',
        smell: 'Roasted butter and savory beef juices.',
        textureCheck: 'Buttery-soft, tender meat that melts on the tongue with juicy explosions.',
        whatShouldThisLookLike: 'Fanned-out ruby-pink steak slices glistening with herb butter.',
        tip: 'Sprinkle flaky sea salt only after slicing so the crunchy salt crystals hit your tongue on the first bite.',
        commonMistake: 'Cutting into the steak immediately off the pan, emptying all the juices.',
        moveOnWhen: 'Rested 8 minutes, sliced, and seasoned with flaky salt.',
        quickInstructions: 'Rest steak 8 mins with pan butter on top; slice against grain into 1cm slices, top with flaky Maldon salt.'
      }
    ],
    commonMistakes: [
      { mistake: 'Steak straight from fridge', remedy: 'Let steak sit at room temperature for 45 minutes before searing so the center cooks evenly.' },
      { mistake: 'Thin supermarket cut', remedy: 'Use a steak at least 1.5 inches (3.5cm) thick for proper crust without overcooking.' }
    ],
    troubleshooting: [
      {
        problem: 'Steak is overcooked inside (gray throughout)',
        whatHappened: 'Steak was cooked too long or was too thin.',
        whyItHappened: 'Pan was not hot enough, extending cooking time, or meat was under 1 inch thick.',
        whatToDoNow: 'Slice thin, drizzle heavily with the herb butter and flake salt — it will still be delicious.',
        howToPrevent: 'Use a 1.5-inch thick cut and remove from heat at 50°C (122°F) for medium-rare.'
      }
    ],
    substitutions: [
      { original: 'Ribeye steak', substitute: 'New York Strip, Porterhouse, or Filet Mignon', notes: 'Technique is identical for all prime cuts.' }
    ],
    safetyNotes: ['High-heat searing causes smoke — ensure range hood is on high.'],
    servingGuide: {
      restingTime: 'Rest 8 minutes before slicing.',
      temperature: 'Warm pink center with hot crust.',
      garnishing: 'Roasted garlic cloves, rosemary sprigs, and flaky sea salt.',
      accompaniments: 'Loaded baked potato, creamed spinach, Caesar salad, and a bold Cabernet Sauvignon.'
    }
  },

  // 9. PANCAKES (Classic American Fluffy Buttermilk Pancakes)
  {
    id: 'pancakes',
    name: 'Classic All-American Fluffy Buttermilk Pancakes (Thick, Golden-Puffed Diner-Style Pancakes)',
    cuisine: 'American',
    region: 'United States (American Diner)',
    servings: 4,
    prepTime: 15,
    cookTime: 12,
    difficulty: 'Easy',
    overview: {
      summary: 'The beloved American diner breakfast icon: colossal, thick, golden-puffed buttermilk pancakes crafted from a rich batter leavened with both baking powder and baking soda reacting against acidic cultured buttermilk. Mixed gently with visible flour lumps to preserve delicate air pockets, griddled on a buttered flat top until golden and aerated, stacked into towering stacks crowned with salted butter and drowning in warm pure maple syrup.',
      appearance: 'A tall, majestic stack of three thick, golden-brown pancakes with perfectly rounded edges and a fluffy pale yellow interior, dripping with melting butter and amber maple syrup.',
      texture: 'Cloud-soft, airy, tender, and pillow-like with a delicate melt-in-the-mouth crumb that drinks in maple syrup like a sponge.',
      flavor: 'Sweet vanilla, rich melted butter, toasty caramelized flour, balanced by the subtle pleasant tang of cultured buttermilk.',
      restingTimeMinutes: 5
    },
    equipment: [
      { name: '12-inch non-stick griddle or cast-iron flat top', purpose: 'For even heat distribution across flat cooking surfaces.' },
      { name: 'Wide flat spatula', purpose: 'To flip puffy pancakes smoothly without deflating.' }
    ],
    beforeYouStart: [
      { task: 'Melt 4 tbsp unsalted butter and let cool slightly.', durationMinutes: 3 },
      { task: 'Whisk dry ingredients: 2 cups all-purpose flour, 3 tbsp sugar, 2 tsp baking powder, 1/2 tsp baking soda, 1/2 tsp salt.', durationMinutes: 3 },
      { task: 'Whisk wet ingredients: 2 cups whole buttermilk, 2 large eggs, 1 tsp vanilla extract, and melted butter.', durationMinutes: 3 }
    ],
    ingredientPrepGuide: [
      { item: 'THE LUMPY BATTER RULE (Never Over-Mix!)', technique: 'Combine wet and dry ingredients and stir with a fork or spatula strictly 10 to 12 times just until flour is moistened! The batter MUST be thick and full of lumps (some the size of marbles). Over-mixing develops gluten and turns pancakes into tough, rubbery, flat pucks. Lumps hydrate naturally during resting.' },
      { item: 'The 5-Minute Batter Rest', technique: 'Let the mixed batter rest on the counter for 5 minutes. The baking soda immediately reacts with the lactic acid in the buttermilk, filling the batter with millions of microscopic bubbles that expand into extraordinary fluffy height on the griddle.' }
    ],
    essentialIngredients: [
      { name: 'All-purpose flour', prep: 'unbleached, spooned and leveled', amount: '2 cups', metric: '280g', imperial: '10 oz', common: '2 cups' },
      { name: 'Whole cultured buttermilk', prep: 'room temperature', amount: '2 cups', metric: '480ml', imperial: '16 fl oz', common: '2 cups' },
      { name: 'Large eggs', prep: 'room temperature', amount: '2 eggs', metric: '100g', imperial: '3.5 oz', common: '2 eggs' },
      { name: 'Granulated white sugar', prep: 'for tender crumb and browning', amount: '3 tbsp', metric: '40g', imperial: '1.4 oz', common: '3 tbsp' },
      { name: 'Unsalted butter', prep: 'melted for batter + extra for griddle', amount: '4 tbsp + 2 tbsp for pan', metric: '90g', imperial: '3.2 oz', common: '6 tbsp total' },
      { name: 'Baking powder', prep: 'double-acting leavener', amount: '2 tsp', metric: '10g', imperial: '0.35 oz', common: '2 tsp' },
      { name: 'Baking soda (Sodium bicarbonate)', prep: 'reacts with buttermilk acid', amount: '1/2 tsp', metric: '3g', imperial: '0.1 oz', common: '1/2 tsp' },
      { name: 'Pure vanilla extract & Fine sea salt', prep: 'aromatic & seasoning', amount: '1 tsp vanilla + 1/2 tsp salt', metric: '8g', imperial: '0.28 oz', common: 'mixed' },
      { name: 'Pure Grade A Vermont Maple Syrup', prep: 'warmed for serving', amount: '1 cup', metric: '240ml', imperial: '8 fl oz', common: '1 cup' }
    ],
    steps: [
      {
        step: 1,
        title: 'GENTLE FOLDING (EMBRACE THE LUMPS!) & 5-MIN REST',
        whatYouNeed: ['Dry ingredients bowl', 'Wet ingredients bowl', 'Spatula'],
        description: 'Pour the wet ingredients into the dry ingredients. Stir gently with a rubber spatula just until flour streaks disappear (about 10 to 12 strokes). DO NOT WHISK SMOOTH! The batter should be thick, billowy, and filled with flour lumps. Let the batter sit undisturbed on the counter for strictly 5 minutes. It will visibly puff up with tiny carbon dioxide bubbles.',
        howToDoIt: 'Gentle folding prevents gluten development, guaranteeing a delicate cake-like crumb, while the rest activates the leaveners.',
        heat: 'No Heat',
        duration: 7,
        visualCues: 'A thick, puffy, aerated batter with visible flour lumps, actively expanding with tiny surface bubbles.',
        smell: 'Sweet vanilla, buttermilk tang, and fresh batter.',
        textureCheck: 'Thick and scoopable — not runny like crêpe batter.',
        whatShouldThisLookLike: 'Puffy, lumpy, airy pancake batter.',
        tip: 'Never use an electric mixer or whisk for pancake batter — a wooden spoon or spatula is all you need.',
        commonMistake: 'Beating until smooth, destroying the air bubbles and making tough, flat rubber pancakes.',
        moveOnWhen: 'Batter has rested 5 minutes and expanded.',
        quickInstructions: 'Stir wet into dry ingredients 10-12 times leaving lumps; rest 5 mins until bubbly and puffy.'
      },
      {
        step: 2,
        title: 'LADLE ONTO MEDIUM-LOW GRIDDLE',
        whatYouNeed: ['Griddle or skillet on medium-low (175°C / 350°F)', '1/2 tsp butter on paper towel', '1/3 cup measuring cup'],
        description: 'Heat griddle over medium-low heat. Wipe lightly with butter on a paper towel (excess butter fries the edges into dark spots; a thin film creates uniform golden diner browning). Scoop 1/3 cup of batter per pancake onto the griddle, spacing them 5cm apart. Gently nudge the top with the cup to spread into a 10cm circle (about 1.5cm thick).',
        howToDoIt: 'A thin, invisible film of butter creates a uniform golden-brown face; too much fat causes mottled fried patterns.',
        heat: 'Medium-Low Heat',
        duration: 1,
        visualCues: 'Batter sits high on the griddle in thick, plump circles.',
        smell: 'Sweet batter and melted butter.',
        textureCheck: 'Thick batter rising on the griddle.',
        whatShouldThisLookLike: 'Plump round batter cakes on the griddle.',
        tip: 'Medium-low heat is crucial: pancakes are thick and need time to puff without burning the underside.',
        commonMistake: 'Cooking on high heat, burning the bottom before the interior can puff.',
        moveOnWhen: 'Pancakes are ladled onto the griddle.',
        quickInstructions: 'Wipe griddle lightly with butter, pour 1/3 cup batter per pancake, cook on medium-low.'
      },
      {
        step: 3,
        title: 'THE POPPING BUBBLE TEST & FLIP',
        whatYouNeed: ['Pancakes on griddle', 'Wide flat spatula'],
        description: 'Cook undisturbed for 2.5 to 3 minutes. Watch for the universal pancake signal: bubbles rise to the surface and POP, remaining open like little craters, and the wet glossy batter around the edges turns matte and dry. Slide spatula underneath in one confident motion and flip! Cook the second side for 1.5 to 2 minutes until golden-brown and puffed.',
        howToDoIt: 'Flip only when bubbles burst and stay open! If you flip while bubbles are still popping and closing, the center is too wet and will splatter.',
        heat: 'Medium-Low Heat',
        duration: 5,
        visualCues: 'Surface erupts with popped bubble craters; edges look set and matte; underside is a gorgeous uniform golden-brown.',
        smell: 'Incredible aroma of caramelized sweet diner pancakes.',
        textureCheck: 'Puffs up to 2cm (3/4 inch) thick after flipping.',
        whatShouldThisLookLike: 'Puffed, golden-brown diner-style pancakes.',
        tip: 'Never press down on pancakes with the spatula after flipping — you are squashing out the precious steam pockets!',
        commonMistake: 'Flipping multiple times; flip strictly once for maximum height and fluffiness.',
        moveOnWhen: 'Both sides are golden and center springs back when lightly touched.',
        quickInstructions: 'Cook 2.5-3 mins until bubbles burst and edges look dry; flip once, cook 1.5-2 mins until puffed.'
      },
      {
        step: 4,
        title: 'STACK HIGH, BUTTER & DRIZZLE WARM MAPLE SYRUP',
        whatYouNeed: ['Hot cooked pancakes', 'Salted butter slab', 'Warm pure maple syrup'],
        description: 'Transfer hot pancakes onto a warm plate, stacking 3 to 4 high. Crown the summit with a generous pat of cold salted butter. Pour warm pure maple syrup generously over the stack, watching the golden cascade soak into the edges. Serve immediately while piping hot.',
        howToDoIt: 'Warming the maple syrup prevents it from chilling the hot pancakes when poured.',
        heat: 'No Heat',
        duration: 1,
        visualCues: 'A towering golden stack with melting butter cascading down the sides in amber maple syrup.',
        smell: 'Toasty pancakes, melting butter, and rich maple syrup.',
        textureCheck: 'Cloud-soft, pillow-like fluffiness that cuts with the edge of a fork.',
        whatShouldThisLookLike: 'The classic American diner pancake stack.',
        tip: 'Fold fresh blueberries or chocolate chips into the pancakes by dropping them onto the wet batter right after pouring on the griddle.',
        commonMistake: 'Using cold artificial pancake syrup loaded with corn syrup instead of 100% pure maple syrup.',
        moveOnWhen: 'Stacked, buttered, sauced, and served.',
        quickInstructions: 'Stack pancakes, top with a pat of salted butter, pour warm pure maple syrup over top; enjoy immediately.'
      }
    ],
    commonMistakes: [
      { mistake: 'Over-mixing batter', remedy: 'Leave batter lumpy! Over-mixing creates tough rubber pancakes.' },
      { mistake: 'Pressing down with spatula', remedy: 'Never press down on cooking pancakes — it squeezes out the fluffiness.' }
    ],
    troubleshooting: [
      {
        problem: 'Pancakes are flat and heavy',
        whatHappened: 'Leaveners failed or batter was over-mixed.',
        whyItHappened: 'Baking powder was expired or batter was beaten smooth.',
        whatToDoNow: 'Enjoy with butter and syrup; verify fresh baking powder for next batch.',
        howToPrevent: 'Check that baking powder is fresh and stir batter fewer than 12 times.'
      }
    ],
    substitutions: [
      { original: 'Buttermilk', substitute: '2 cups whole milk + 2 tbsp lemon juice, rested 10 mins', notes: 'Perfect emergency buttermilk.' },
      { original: 'Blueberries / Chocolate chips', substitute: 'Scatter 1 tbsp over raw batter after pouring on griddle', notes: 'Classic additions.' }
    ],
    safetyNotes: ['Griddle is hot; use a wide spatula to flip safely.'],
    servingGuide: {
      restingTime: 'Serve immediately off the griddle.',
      temperature: 'Piping hot.',
      garnishing: 'Pat of salted butter and warm maple syrup.',
      accompaniments: 'Crisp applewood smoked bacon, breakfast sausage links, scrambled eggs, and hot black coffee.'
    }
  },

  // 10. WAFFLES (Authentic Belgian / American Golden Crisp Waffles)
  {
    id: 'waffles',
    name: 'Authentic American-Belgian Golden Crisp Waffles (Deep-Pocket Fluffy Buttermilk Waffles)',
    cuisine: 'American',
    region: 'United States / Belgium',
    servings: 4,
    prepTime: 20,
    cookTime: 15,
    difficulty: 'Medium',
    overview: {
      summary: 'The ultimate golden-iron breakfast: deep-pocket Belgian-style waffles made with whipped egg whites folded into a rich buttermilk-butter batter. Baked in a preheated Belgian waffle maker until the exterior turns shatteringly crisp, caramelized, and deep golden-brown, while the interior remains cloud-light, airy, and fluffy. Crowned with melted butter, warm maple syrup, fresh berries, and whipped cream.',
      appearance: 'A thick, geometric, deep-pocket golden-amber waffle with crisp ridges and pale golden wells, topped with melting butter and glistening syrup.',
      texture: 'Crisp, crackling, shatteringly crunchy exterior with a feather-light, cloud-soft, steamy interior that never turns soggy.',
      flavor: 'Toasted sweet malt, rich butter, vanilla, and buttermilk tang with caramelized sugar notes.',
      restingTimeMinutes: 1
    },
    equipment: [
      { name: 'Belgian waffle iron (with deep 1-inch grids)', purpose: 'Essential to bake deep pockets and crisp exterior ridges.' },
      { name: 'Hand mixer or whisk', purpose: 'To whip egg whites to stiff peaks for cloud-like lightness.' }
    ],
    beforeYouStart: [
      { task: 'Preheat Belgian waffle maker on medium-high until green indicator light shines.', durationMinutes: 10 },
      { task: 'Separate 2 large eggs into yolks and whites.', durationMinutes: 2 },
      { task: 'Whisk dry ingredients: 2 cups flour, 1/4 cup cornstarch, 2 tbsp sugar, 1 tbsp baking powder, 1/2 tsp salt.', durationMinutes: 3 }
    ],
    ingredientPrepGuide: [
      { item: 'THE WHIPPED EGG WHITE SECRET', technique: 'Whipping the egg whites separately to stiff peaks and gently folding them into the batter at the very end is the professional secret to waffles that are shatteringly crisp outside and cloud-light inside.' },
      { item: 'Cornstarch for Permanent Crunch', technique: 'Adding 1/4 cup cornstarch prevents the waffle exterior from softening into a limp sponge when warm syrup is poured on it.' }
    ],
    essentialIngredients: [
      { name: 'All-purpose flour', prep: 'unbleached', amount: '2 cups', metric: '280g', imperial: '10 oz', common: '2 cups' },
      { name: 'Cornstarch', prep: 'guarantees crispy crunch', amount: '1/4 cup', metric: '30g', imperial: '1 oz', common: '1/4 cup' },
      { name: 'Whole buttermilk or whole milk', prep: 'room temperature', amount: '1.75 cups', metric: '420ml', imperial: '14 fl oz', common: '1.75 cups' },
      { name: 'Large eggs', prep: 'separated into whites and yolks', amount: '2 eggs', metric: '100g', imperial: '3.5 oz', common: '2 eggs' },
      { name: 'Unsalted butter', prep: 'melted and cooled', amount: '6 tbsp', metric: '85g', imperial: '3 oz', common: '6 tbsp' },
      { name: 'Granulated white sugar', prep: 'sweetness', amount: '2 tbsp', metric: '25g', imperial: '0.9 oz', common: '2 tbsp' },
      { name: 'Baking powder', prep: 'leavener', amount: '1 tbsp', metric: '15g', imperial: '0.5 oz', common: '1 tbsp' },
      { name: 'Pure vanilla extract & Fine sea salt', prep: 'aromatic & seasoning', amount: '1 tsp vanilla + 1/2 tsp salt', metric: '8g', imperial: '0.28 oz', common: 'mixed' },
      { name: 'Pure Maple Syrup & Butter', prep: 'for serving', amount: '1 cup syrup + 4 tbsp butter', metric: '300g', imperial: '10.5 oz', common: 'to taste' }
    ],
    steps: [
      {
        step: 1,
        title: 'WHIP EGG WHITES & COMBINE BATTER',
        whatYouNeed: ['Egg whites', 'Dry ingredients', 'Yolks whisked with milk, melted butter, and vanilla', 'Mixer'],
        description: 'In a clean bowl, whip egg whites with a hand mixer for 3 minutes until stiff, glossy peaks form. In a large bowl, whisk the dry ingredients together. In a separate bowl, whisk egg yolks, buttermilk, melted butter, and vanilla. Pour wet ingredients into dry and whisk just until combined. Gently fold the whipped egg whites into the batter with a rubber spatula in 2 additions until no white streaks remain.',
        howToDoIt: 'Folding the stiff egg whites gently incorporates millions of micro-bubbles that expand into an airy waffle honeycomb.',
        heat: 'No Heat',
        duration: 8,
        visualCues: 'A thick, fluffy, billowy batter that resembles airy mousse.',
        smell: 'Sweet vanilla, rich butter, and buttermilk.',
        textureCheck: 'Light, foamy, and airy.',
        whatShouldThisLookLike: 'A billowy, foamy waffle batter.',
        tip: 'Do not over-fold — treat the whipped egg whites gently so they don\'t deflate.',
        commonMistake: 'Stirring the whole eggs into the batter without whipping the whites, resulting in dense, heavy waffles.',
        moveOnWhen: 'Egg whites are gently folded in.',
        quickInstructions: 'Whip egg whites to stiff peaks, whisk dry ingredients with yolks, milk, and butter; gently fold in egg whites.'
      },
      {
        step: 2,
        title: 'POUR INTO HOT WAFFLE IRON & BAKE UNTIL STEAM STOPS',
        whatYouNeed: ['Preheated waffle iron', 'Batter (about 3/4 cup)', 'Oil spray'],
        description: 'Lightly spray preheated waffle iron with oil. Pour about 3/4 cup of batter into the center of the iron, spreading gently toward the edges. Close the lid (and rotate 180 degrees if using a rotating iron). Bake for 4 to 5 minutes. DO NOT OPEN while steam is vigorously billowing out! When the steam slows to a faint wisp and the indicator light beeps, the waffle is cooked to crisp perfection.',
        howToDoIt: 'Steam escaping is moisture leaving the batter. As long as heavy steam billows, the interior is still wet. When steam stops, the exterior has caramelized into crunch.',
        heat: 'Waffle Iron Heat (Medium-High)',
        duration: 5,
        visualCues: 'Vigorous steam billows from the iron; waffle emerges deep golden-amber with crisp, rigid edges.',
        hear: 'Hissing steam that gradually softens.',
        smell: 'Incredible aroma of caramelized sweet waffle batter and toasted butter.',
        textureCheck: 'Shatteringly crisp exterior ridges that do not bend.',
        whatShouldThisLookLike: 'Deep-pocket golden-brown Belgian waffle.',
        tip: 'Never open the waffle iron during the first 3 minutes or you will tear the waffle in half!',
        commonMistake: 'Opening too early while steam is heavy, ripping the top from the bottom.',
        moveOnWhen: 'Steam slows to a wisp and waffle is deep golden.',
        quickInstructions: 'Pour 3/4 cup batter on hot iron, close, bake 4-5 mins until steam slows to a wisp and crust is deep golden.'
      },
      {
        step: 3,
        title: 'SERVE PIPING HOT WITH BUTTER & SYRUP',
        whatYouNeed: ['Hot crispy waffle', 'Butter', 'Warm maple syrup', 'Fresh strawberries or berries'],
        description: 'Lift the waffle out using a fork or silicone tongs. Place onto a plate (or on a wire rack in a 100°C oven to keep crisp while cooking more). Place a pat of butter in the center pockets, pour warm maple syrup over the grids, and top with fresh berries or whipped cream. Serve immediately while crunch is at its absolute peak.',
        howToDoIt: 'Deep pockets hold pools of melted butter and syrup without overflowing.',
        heat: 'No Heat',
        duration: 1,
        visualCues: 'Deep golden geometric grid filled with amber maple syrup and melting butter.',
        smell: 'Toasted waffle and warm maple syrup.',
        textureCheck: 'Loud crisp crunch on the bite followed by cloud-soft interior.',
        whatShouldThisLookLike: 'A bakery-worthy Belgian waffle breakfast.',
        tip: 'If cooking for a crowd, keep baked waffles directly on the oven rack at 100°C (200°F) — they will stay shatteringly crisp for 30 minutes!',
        commonMistake: 'Stacking hot waffles on top of each other, which steams the crispy crust into a soggy sponge.',
        moveOnWhen: 'Served piping hot.',
        quickInstructions: 'Remove with tongs, top with butter, warm maple syrup, and berries; serve immediately.'
      }
    ],
    commonMistakes: [
      { mistake: 'Opening iron too early', remedy: 'Wait until steam slows to a faint wisp before opening the iron.' },
      { mistake: 'Stacking hot waffles', remedy: 'Stacking traps steam. Keep them on an open wire rack to maintain crispness.' }
    ],
    troubleshooting: [
      {
        problem: 'Waffle is soft and floppy instead of crispy',
        whatHappened: 'Moisture remained trapped in the crust.',
        whyItHappened: 'Waffle was underbaked or iron was not hot enough.',
        whatToDoNow: 'Pop the waffle into a standard bread toaster for 60 seconds to instantly crisp the exterior.',
        howToPrevent: 'Bake for full 5 minutes until steam stops completely.'
      }
    ],
    substitutions: [
      { original: 'Buttermilk', substitute: 'Whole milk with 1 tbsp lemon juice', notes: 'Provides identical tang.' },
      { original: 'Cornstarch', substitute: 'Rice flour or tapioca starch', notes: 'Maintains crispy crunch.' }
    ],
    safetyNotes: ['Waffle iron surfaces and steam are extremely hot; keep hands clear of steam vents.'],
    servingGuide: {
      restingTime: 'Serve immediately or keep crisp in a 100°C oven.',
      temperature: 'Piping hot.',
      garnishing: 'Salted butter pat, warm maple syrup, and fresh berries.',
      accompaniments: 'Crisp bacon, breakfast sausage, and freshly whipped cream.'
    }
  },

  // 11. MAC AND CHEESE (Gourmet Baked Three-Cheese Macaroni and Cheese)
  {
    id: 'mac-and-cheese',
    name: 'Gourmet Baked Three-Cheese Macaroni and Cheese (Sharp Cheddar, Gruyère & Crispy Panko Crust)',
    cuisine: 'American',
    region: 'United States (Soul Food / Classic American)',
    servings: 6,
    prepTime: 25,
    cookTime: 30,
    difficulty: 'Medium',
    overview: {
      summary: 'The ultimate American comfort masterpiece: elbow macaroni boiled al dente, folded into a luxurious velvet Mornay cheese sauce made from a butter-flour roux, whole milk, heavy cream, Dijon mustard, nutmeg, sharp aged Vermont cheddar, nutty Swiss Gruyère, and melting Monterey Jack. Layered in a baking dish, blanketed in extra cheese, topped with garlic-herb buttered panko breadcrumbs, and baked until bubbling furiously with a crackling golden crust.',
      appearance: 'A bubbling, golden-amber casserole dish with a craggy, crispy, toasted buttered breadcrumb crust, revealing molten, gooey, cheese-cloaked macaroni when scooped.',
      texture: 'Crisp, crunchy toasted breadcrumbs giving way to an impossibly creamy, velvety, gooey cheese sauce and perfectly tender al dente pasta.',
      flavor: 'Rich, sharp aged cheddar bite, nutty savory Gruyère, creamy buttery dairy, subtle warm nutmeg, and garlic herb crunch.',
      restingTimeMinutes: 10
    },
    equipment: [
      { name: '9x13-inch baking dish (Ceramic or Pyrex)', purpose: 'For baking mac and cheese with optimal surface area for crispy crust.' },
      { name: 'Large heavy saucepan or Dutch oven', purpose: 'To build the roux and whisk the velvety Mornay cheese sauce.' },
      { name: 'Box grater', purpose: 'To freshly grate cheese blocks (pre-shredded cheese is coated in cellulose that ruins melt!).' }
    ],
    beforeYouStart: [
      { task: 'Preheat oven to 190°C (375°F).', durationMinutes: 15 },
      { task: 'FRESHLY GRATE CHEESE BLOCKS: 250g Sharp Cheddar, 150g Gruyère, and 100g Monterey Jack (do NOT buy bagged pre-shredded cheese!).', durationMinutes: 10 },
      { task: 'Boil 400g elbow macaroni in salted water for strictly 6 minutes (2 minutes shy of al dente — it finishes in the oven!); drain and toss with 1 tbsp butter.', durationMinutes: 8 }
    ],
    ingredientPrepGuide: [
      { item: 'THE FRESH CHEESE RULE: Never Bagged Cheese!', technique: 'Bagged pre-shredded cheese is coated in cellulose powder and potato starch to prevent clumping. This coating prevents the cheese from melting smoothly, resulting in a gritty, grainy, separated sauce. Always grate blocks of real cheese yourself!' },
      { item: 'Under-Boiling the Pasta', technique: 'Boil elbow macaroni for strictly 6 minutes. The pasta will bake in the hot cheese sauce for 25 minutes; if fully cooked before baking, it will absorb sauce and turn into mush.' }
    ],
    essentialIngredients: [
      { name: 'Elbow macaroni pasta', prep: 'boiled for 6 minutes (under-cooked)', amount: '400g', metric: '400g', imperial: '14 oz', common: '1 box' },
      { name: 'Sharp aged White or Yellow Cheddar', prep: 'freshly grated from block', amount: '250g', metric: '250g', imperial: '8.8 oz', common: '2.5 cups' },
      { name: 'Swiss Gruyère cheese', prep: 'freshly grated from block', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '1.5 cups' },
      { name: 'Monterey Jack or Fontina cheese', prep: 'freshly grated (for creamy melt)', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '1 cup' },
      { name: 'Unsalted butter', prep: 'divided (4 tbsp for roux + 2 tbsp for panko)', amount: '6 tbsp', metric: '90g', imperial: '3.2 oz', common: '6 tbsp' },
      { name: 'All-purpose flour', prep: 'roux thickener', amount: '4 tbsp', metric: '35g', imperial: '1.2 oz', common: '1/4 cup' },
      { name: 'Whole milk & Heavy cream', prep: 'warmed together', amount: '3 cups milk + 1 cup cream', metric: '960ml', imperial: '32 fl oz', common: '4 cups total' },
      { name: 'Dijon mustard', prep: 'amplifies cheese sharpness', amount: '1 tsp', metric: '5g', imperial: '0.18 oz', common: '1 tsp' },
      { name: 'Ground nutmeg, Garlic powder, Paprika', prep: 'warm spices', amount: '1/4 tsp nutmeg + 1/2 tsp garlic + 1/2 tsp paprika', metric: '4g', imperial: '0.14 oz', common: 'mixed' },
      { name: 'Panko Japanese breadcrumbs', prep: 'tossed with melted butter', amount: '1 cup', metric: '60g', imperial: '2.1 oz', common: '1 cup' },
      { name: 'Fine sea salt & Fresh black pepper', prep: 'seasoning', amount: '1.5 tsp salt + 1 tsp pepper', metric: '10g', imperial: '0.35 oz', common: 'mixed' }
    ],
    steps: [
      {
        step: 1,
        title: 'BUILD ROUX & WHISK VELVET BÉCHAMEL',
        whatYouNeed: ['Saucepan', '4 tbsp butter', '4 tbsp flour', '4 cups warm milk & cream', 'Spices & Dijon'],
        description: 'Melt 4 tbsp butter in a large saucepan over medium heat. Whisk in 4 tbsp flour. Cook, whisking constantly, for 2 minutes until bubbling, fragrant, and pale golden (do not brown). Gradually stream in the warm milk and cream in a steady pour while whisking vigorously to prevent lumps. Bring to a gentle simmer, whisking constantly along the corners of the pot, for 5 to 6 minutes until thickened into a silky, smooth sauce that coats the back of a spoon. Whisk in Dijon mustard, nutmeg, garlic powder, paprika, salt, and pepper.',
        howToDoIt: 'Adding warm milk gradually to hot roux allows starches to swell evenly without forming flour clumps.',
        heat: 'Medium Heat',
        duration: 10,
        visualCues: 'A thick, glossy, ivory-white béchamel sauce that coats a spoon with a heavy velvet film.',
        smell: 'Toasted butter, warm milk, and subtle nutmeg.',
        textureCheck: 'Silk-smooth with zero lumps.',
        whatShouldThisLookLike: 'Smooth, steaming white sauce in the saucepan.',
        tip: 'Warm your milk in the microwave for 2 minutes before pouring into the roux — cold milk causes the butter to seize into lumps.',
        commonMistake: 'Rushing and dumping cold milk all at once, creating lumpy sauce.',
        moveOnWhen: 'Béchamel is thick, smooth, and simmering.',
        quickInstructions: 'Cook butter and flour 2 mins, whisk in warm milk and cream, simmer 5 mins until thick; stir in Dijon and spices.'
      },
      {
        step: 2,
        title: 'MELT CHEESE OFF THE HEAT (MORNAY SAUCE)',
        whatYouNeed: ['Hot béchamel', 'Grated cheeses (reserve 1 cup for top)', 'Whisk'],
        description: 'TURN OFF THE HEAT and remove the saucepan from the stove. Reserve 1 cup of the mixed grated cheeses for the topping. Add the remaining grated Cheddar, Gruyère, and Monterey Jack by handfuls into the hot béchamel, stirring gently with a whisk until completely melted, silky, and smooth.',
        howToDoIt: 'NEVER melt cheese over direct high heat! High heat causes the milk proteins in cheese to curdle and separate from fat, turning your sauce oily and grainy. The residual heat of the béchamel melts the cheese into a velvet cream.',
        heat: 'Off the Heat',
        duration: 3,
        visualCues: 'Sauce transforms into a rich, golden, velvety, bubbling cheese fondue.',
        smell: 'Intense aroma of sharp aged cheddar and nutty melted Gruyère.',
        textureCheck: 'Ultra-creamy, glossy, and smooth with incredible cheese ribbons.',
        whatShouldThisLookLike: 'A luscious, golden Mornay cheese sauce.',
        tip: 'Taste the cheese sauce: it should taste decadent, rich, and sharp. Add extra salt or pepper if needed.',
        commonMistake: 'Boiling the cheese sauce, causing the oils to separate into a greasy layer.',
        moveOnWhen: 'Cheese is fully melted into velvet sauce.',
        quickInstructions: 'Remove saucepan from heat, stir in cheeses by handfuls (save 1 cup for top) until velvety smooth.'
      },
      {
        step: 3,
        title: 'COMBINE PASTA & ASSEMBLE WITH BUTTERED PANKO',
        whatYouNeed: ['Under-cooked macaroni', 'Cheese sauce', '9x13 baking dish', 'Reserved cheese', '1 cup panko tossed with 2 tbsp melted butter'],
        description: 'Pour the under-cooked macaroni into the warm cheese sauce. Fold thoroughly with a spatula so every pasta tube is coated and filled with sauce. Pour half of the mac and cheese into the buttered 9x13-inch baking dish. Sprinkle with half of the reserved grated cheese. Pour remaining macaroni on top. Sprinkle with the rest of the reserved cheese. Scatter the buttered panko breadcrumbs evenly over the entire surface.',
        howToDoIt: 'Layering cheese in the middle creates an extra molten gooey cheese pull beneath the crunchy crust.',
        heat: 'No Heat',
        duration: 5,
        visualCues: 'A loaded baking dish covered in shredded golden cheese and a blanket of pale buttered panko.',
        textureCheck: 'Saucy macaroni with crisp breadcrumbs on top.',
        whatShouldThisLookLike: 'Assembled mac and cheese ready for the oven.',
        tip: 'Tossing panko with melted butter ensures the breadcrumbs turn golden and crisp instead of dry and pale.',
        commonMistake: 'Leaving pasta dry — it should look slightly soupy before baking because pasta absorbs sauce in the oven.',
        moveOnWhen: 'Assembled in dish with buttered panko topping.',
        quickInstructions: 'Fold macaroni into cheese sauce, layer in baking dish with extra cheese in middle and top; scatter buttered panko.'
      },
      {
        step: 4,
        title: 'BAKE AT 190°C TO BUBBLING GOLDEN CRUST',
        whatYouNeed: ['Assembled dish', 'Preheated oven (190°C / 375°F)'],
        description: 'Slide the baking dish into the preheated oven. Bake for 22 to 25 minutes until the cheese sauce is bubbling furiously around the edges and the panko breadcrumbs turn deep, toasted golden-brown. If the top needs extra browning, turn on the broiler for 60 seconds. Remove from oven and let rest for 10 minutes before scooping.',
        howToDoIt: 'Resting for 10 minutes allows the bubbling sauce to settle and thicken slightly so it clings to the pasta rather than pooling like soup.',
        heat: 'Oven at 190°C / 375°F',
        duration: 25,
        visualCues: 'Lava-like bubbling cheese around the dish perimeter; golden-amber crackling panko crust.',
        hear: 'Audible, enthusiastic bubbling of molten cheese.',
        smell: 'Incredible aroma of baked sharp cheddar, toasted buttered crumbs, and rich cream.',
        textureCheck: 'Crunchy crackling crust giving way to molten, velvety, gooey mac and cheese.',
        whatShouldThisLookLike: 'The ultimate golden baked macaroni and cheese.',
        tip: 'Scoop with a large spoon to get a generous portion of both the crunchy top crust and creamy center.',
        commonMistake: 'Scooping straight out of the oven, causing the hot cheese sauce to run all over the plate.',
        moveOnWhen: 'Bubbling, golden-brown, and rested 10 minutes.',
        quickInstructions: 'Bake at 190°C for 22-25 mins until bubbling with golden toasted crust; rest 10 mins before serving.'
      }
    ],
    commonMistakes: [
      { mistake: 'Using bagged pre-shredded cheese', remedy: 'Bagged cheese contains anti-caking starches that make sauce grainy. Grate cheese blocks fresh.' },
      { mistake: 'Fully boiling pasta before baking', remedy: 'Boil pasta for only 6 minutes. It finishes cooking inside the hot cheese sauce in the oven.' }
    ],
    troubleshooting: [
      {
        problem: 'Cheese sauce became grainy and oily',
        whatHappened: 'Proteins curdled and separated.',
        whyItHappened: 'The cheese was melted over high heat on the stove.',
        whatToDoNow: 'Whisk in 2 tablespoons of warm heavy cream vigorously to help re-emulsify before baking.',
        howToPrevent: 'Always take the béchamel completely off the heat before adding shredded cheese.'
      }
    ],
    substitutions: [
      { original: 'Gruyère cheese', substitute: 'Fontina, Gouda, or Extra Sharp Cheddar', notes: 'Gouda adds rich nutty sweetness.' },
      { original: 'Panko breadcrumbs', substitute: 'Crushed buttery Ritz crackers', notes: 'Legendary Southern diner topping variation.' }
    ],
    safetyNotes: ['Baking dish is bubbling hot — use heavy oven mitts.'],
    servingGuide: {
      restingTime: 'Rest 10 minutes before scooping.',
      temperature: 'Piping hot and gooey.',
      garnishing: 'A dusting of fresh chopped chives or parsley.',
      accompaniments: 'Southern fried chicken, BBQ pulled pork, smoked brisket, or crisp green salad.'
    }
  }
];
