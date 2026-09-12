// Global Heritage Dishes Part 2 (4 dishes: Portuguese, German, British, Scandinavian)
module.exports = [
  // 21. PORTUGUESE DISHES (Authentic Pastéis de Nata - Lisbon Custard Tarts)
  {
    id: 'portuguese-dishes',
    name: 'Authentic Portuguese Pastéis de Nata (Blistered Lisbon Egg Custard Tarts in Spiral Puff Pastry)',
    cuisine: 'Global',
    region: 'Europe (Portugal / Lisbon / Belém)',
    servings: 12,
    prepTime: 40,
    cookTime: 12,
    difficulty: 'Hard',
    overview: {
      summary: 'The iconic treasure of Lisbon from the Jerónimos Monastery of Belém: an ultra-crispy, laminated spiral puff pastry crust rolled with softened butter and thumb-pressed into fluted metal tins, filled with a velvety egg yolk custard infused with lemon peel and cinnamon syrup. Baked at volcanic oven temperatures (280°C / 550°F) until the puff pastry turns shatteringly crisp and flaky while the custard blisters with caramelized dark mahogany leopard spots, served warm dusted with powdered sugar and cinnamon.',
      appearance: 'Golden-amber, fluted circular tartlets with blistered, caramelized dark brown and black leopard spots across a glossy yellow custard dome, surrounded by dozens of micro-thin spiraled pastry layers.',
      texture: 'Audibly loud, shatteringly crisp crunch from the spiral puff pastry crust, yielding instantly to a warm, velvety, molten, silken egg custard.',
      flavor: 'Rich egg yolk and cream sweetness, subtle citrus tang from lemon peel, warm aromatic cinnamon, and caramelized browned sugar notes.',
      restingTimeMinutes: 10
    },
    equipment: [
      { name: 'Traditional metal Pastel de Nata tart molds (or heavy muffin tin)', purpose: 'Thin metal conducts intense heat to fry and blister the spiral bottom crust.' },
      { name: 'Oven at maximum temperature (260-280°C / 500-550°F)', purpose: 'Essential to blister the custard top and crisp the pastry in under 12 minutes.' },
      { name: 'Small saucepan & candy thermometer', purpose: 'To boil sugar syrup with cinnamon stick and lemon peel.' }
    ],
    beforeYouStart: [
      { task: 'Preheat oven to its absolute maximum temperature (260°C to 280°C / 500-550°F) with baking sheet on the bottom rack for 45 minutes.', durationMinutes: 45 },
      { task: 'Boil sugar syrup: 250g sugar, 150ml water, 1 cinnamon stick, 2 wide strips of lemon peel boiled to 105°C (220°F) for 4 minutes; remove aromatics.', durationMinutes: 8 },
      { task: 'Whisk custard base: 50g flour dissolved in 100ml milk; whisk into 250ml hot milk until thickened, then whisk in hot sugar syrup; cool 10 mins and whisk in 6 egg yolks.', durationMinutes: 15 }
    ],
    ingredientPrepGuide: [
      { item: 'THE SPIRAL PASTRY CYLINDER (The Spiral Rim Technique)', technique: 'Roll puff pastry sheet into a tight, dense cylinder (like a jelly roll). Slice into 2cm disks. Place each disk cut-side down into a metal tart mold. Using wet thumbs, press firmly in the center and spiral outward, pushing the dough up the sides of the tin so it extends 2mm above the rim. This exposes the spiral laminations directly to the heat, creating the iconic concentric crackling crust!' },
      { item: 'Volcanic Heat Blistering', technique: 'Pastéis de Nata MUST be baked at the highest possible heat (260-280°C)! Intense radiant heat caramelizes the custard surface into dark leopard spots in under 12 minutes while frying the butter in the spiral crust.' }
    ],
    essentialIngredients: [
      { name: 'All-butter puff pastry sheet (or laminated nata dough)', prep: 'chilled, rolled into tight 2.5cm cylinder, sliced into 12 disks', amount: '1 sheet (300g)', metric: '300g', imperial: '10.5 oz', common: '1 sheet' },
      { name: 'Large egg yolks', prep: 'whisked smooth', amount: '6 yolks', metric: '110g', imperial: '3.9 oz', common: '6 yolks' },
      { name: 'Whole milk', prep: 'divided (100ml cold + 250ml hot)', amount: '350ml total', metric: '350ml', imperial: '12 fl oz', common: '1.5 cups' },
      { name: 'Granulated white sugar', prep: 'for syrup', amount: '250g', metric: '250g', imperial: '8.8 oz', common: '1.25 cups' },
      { name: 'Water', prep: 'for syrup', amount: '150ml', metric: '150ml', imperial: '5 fl oz', common: '2/3 cup' },
      { name: 'All-purpose flour', prep: 'whisked into cold milk as thickener', amount: '50g', metric: '50g', imperial: '1.8 oz', common: '1/3 cup' },
      { name: 'Cinnamon stick & Lemon peel', prep: 'infused in sugar syrup', amount: '1 stick + 2 strips peel', metric: '5g', imperial: '0.18 oz', common: 'aromatics' },
      { name: 'Ground cinnamon & Powdered sugar', prep: 'for dusting hot tarts', amount: '1 tbsp each', metric: '15g', imperial: '0.5 oz', common: 'for serving' }
    ],
    steps: [
      {
        step: 1,
        title: 'THUMB-PRESS SPIRAL PASTRY INTO TART MOLDS',
        whatYouNeed: ['Chilled puff pastry cylinder sliced into 12 disks', '12 metal tart molds', 'Bowl of cold water'],
        description: 'Dip your thumbs in cold water. Place one 2cm pastry disk cut-side down in the center of a tart mold. Press firmly into the center with both thumbs, rotating the tin as you push the dough up the sides toward the rim. The bottom should be paper-thin and the dough should rise 2mm above the rim of the mold. Repeat with all 12 molds and chill in refrigerator for 20 minutes.',
        howToDoIt: 'The cut spiral face reveals hundreds of butter laminations against the metal, frying into crackling rings as it bakes.',
        heat: 'No Heat',
        duration: 12,
        visualCues: 'Neat pastry-lined cups with visible concentric spiral patterns in the bottom and edges rising above the rim.',
        textureCheck: 'Cold, firm pastry cups.',
        whatShouldThisLookLike: 'Twelve lined tart molds ready for custard.',
        tip: 'Keeping the bottom paper-thin ensures it crisps rapidly without turning gummy.',
        commonMistake: 'Using a rolling pin to flatten pastry into flat circles — you MUST use the cut spiral disk technique!',
        moveOnWhen: 'All 12 molds are shaped and chilled.',
        quickInstructions: 'Place pastry disk cut-side down in mold, press with wet thumbs to push dough up sides 2mm above rim; chill 20 mins.'
      },
      {
        step: 2,
        title: 'WHISK CUSTARD & FILL MOLDS THREE-QUARTERS FULL',
        whatYouNeed: ['Thickened milk-flour base', 'Warm sugar syrup', '6 egg yolks', 'Liquid measuring pitcher'],
        description: 'Whisk the warm sugar syrup (infused with lemon and cinnamon) in a steady stream into the warm thickened milk-flour base. Let cool for 10 minutes until warm (under 50°C / 120°F). Whisk in the 6 egg yolks until a smooth, glossy, liquid golden custard forms. Strain through a fine sieve into a pitcher. Pour custard into the chilled pastry cups, filling strictly three-quarters full (about 1cm below the rim).',
        howToDoIt: 'Filling three-quarters full allows the custard to puff and bubble without spilling over the sides.',
        heat: 'No Heat',
        duration: 8,
        visualCues: 'Smooth, golden-yellow liquid custard resting inside the spiral pastry cups.',
        smell: 'Sweet vanilla, lemon zest, cinnamon, and rich egg yolk custard.',
        textureCheck: 'Liquid, silky custard.',
        whatShouldThisLookLike: 'Filled tart cups ready for extreme oven heat.',
        tip: 'Strain the custard twice to ensure it is completely velvety with zero egg chalazae or lumps.',
        commonMistake: 'Overfilling the molds to the brim, causing the boiling custard to boil over and scorch the pan.',
        moveOnWhen: 'Molds are filled three-quarters full.',
        quickInstructions: 'Whisk warm syrup into milk base, cool slightly, whisk in 6 egg yolks, strain through sieve, fill cups 3/4 full.'
      },
      {
        step: 3,
        title: 'BAKE AT VOLCANIC HEAT (275°C) FOR BLISTERED LEOPARD SPOTS',
        whatYouNeed: ['Preheated oven (275°C / 525°F)', 'Filled molds on preheated baking sheet'],
        description: 'Carefully slide the molds directly onto the scorching-hot preheated baking sheet on the bottom rack of the 275°C oven. Bake for 10 to 12 minutes. Around minute 7, watch through the door: the custard will puff dramatically into giant domes, and the natural sugars will caramelize into dark brown and black leopard spots while the pastry rims turn deep golden-brown and shatteringly crisp.',
        howToDoIt: 'Extreme conductive heat from the bottom sheet crisps the bottom spiral, while intense radiant top heat blisters the custard dome.',
        heat: 'Maximum Oven Heat (275°C / 525°F)',
        duration: 12,
        visualCues: 'Custard puffs into high domes with dark caramelized blistered spots; pastry edges turn deep golden and crackle.',
        smell: 'Incredible aroma of caramelized sugar, toasted puff pastry, and baked cinnamon custard.',
        textureCheck: 'Rigid, flaky pastry shell with puffed blistered custard dome.',
        whatShouldThisLookLike: 'Authentic Belém-style blistered pastéis de nata.',
        tip: 'If your oven doesn\'t blister the tops after 10 minutes, turn on the broiler for 60 seconds to blister the surface.',
        commonMistake: 'Baking at 180°C (350°F), resulting in pale yellow custard with a soggy bottom pastry.',
        moveOnWhen: 'Custard is blistered with dark spots and pastry is deep golden.',
        quickInstructions: 'Bake at 275°C on bottom rack for 10-12 mins until custard puffs with dark blistered spots and crust is crisp.'
      },
      {
        step: 4,
        title: 'COOL 10 MINUTES & DUST WITH CANELA',
        whatYouNeed: ['Baked tarts', 'Ground cinnamon & powdered sugar shaker', 'Wire rack'],
        description: 'Remove from oven. The puffed custard domes will gently settle flat within 2 minutes. Let cool in the molds for 5 minutes, then pop the tarts out onto a wire rack. Serve warm, accompanied by small shakers of ground cinnamon and powdered sugar so guests can dust their own tarts.',
        howToDoIt: 'Pastéis de Nata are designed to be eaten warm within 30 minutes of baking while the contrast between crackling pastry and warm custard is at its peak.',
        heat: 'No Heat',
        duration: 10,
        visualCues: 'Deep amber fluted tarts with black-blistered tops, dusted in fine cinnamon and snow-white sugar.',
        smell: 'Warm cinnamon and sweet caramelized custard.',
        textureCheck: 'Audibly loud crunch on the bite followed by silky, warm, melting custard.',
        whatShouldThisLookLike: 'The world-famous Lisbon Pastel de Nata.',
        tip: 'Take your first bite: listen for the unmistakable "CRUNCH" of the bottom pastry spiral!',
        commonMistake: 'Refrigerating pastéis de nata, which turns the delicate crispy pastry soft and limp.',
        moveOnWhen: 'Cooled 10 minutes, dusted with cinnamon, and served warm.',
        quickInstructions: 'Cool 5 mins in molds, transfer to wire rack; dust with cinnamon and powdered sugar, serve warm.'
      }
    ],
    commonMistakes: [
      { mistake: 'Baking at low temperature', remedy: 'Oven MUST be at maximum heat (260-280°C) to blister the top and crisp the crust.' },
      { mistake: 'Rolling pastry flat instead of spiral disks', remedy: 'Always thumb-press cut spiral disks to expose the butter laminations.' }
    ],
    troubleshooting: [
      {
        problem: 'Bottom crust is soggy and pale',
        whatHappened: 'Bottom of pan didn\'t get enough heat.',
        whyItHappened: 'Baking sheet wasn\'t preheated on bottom rack.',
        whatToDoNow: 'Pop the unmolded tarts directly onto a hot dry skillet on low heat for 2 minutes to crisp the bottom.',
        howToPrevent: 'Bake directly on a preheated heavy baking sheet on the lowest oven rack.'
      }
    ],
    substitutions: [
      { original: 'Metal pastel molds', substitute: 'Heavy metal 12-cup muffin tin', notes: 'Grease well and press disks into each well.' }
    ],
    safetyNotes: ['Tins are blistering hot out of the 275°C oven — handle with heatproof mitts.'],
    servingGuide: {
      restingTime: 'Rest 10 minutes before serving.',
      temperature: 'Warm from the oven.',
      garnishing: 'Ground cinnamon and powdered sugar.',
      accompaniments: 'Portuguese Bica (espresso) or a glass of Port wine.'
    }
  },

  // 22. GERMAN DISHES (Authentic Wiener Schnitzel)
  {
    id: 'german-dishes',
    name: 'Authentic German & Austrian Wiener Schnitzel (Ultra-Crispy Breaded Cutlet with Wavy Soufflé Crust)',
    cuisine: 'Global',
    region: 'Central Europe (Austria / Germany / Vienna)',
    servings: 4,
    prepTime: 20,
    cookTime: 8,
    difficulty: 'Medium',
    overview: {
      summary: 'The gold standard of Central European gastronomy: tender veal or pork loin cutlets pounded paper-thin (3mm), dredged in fine flour, lightly beaten whole egg, and non-compacted bakery breadcrumbs. Pan-fried in generous bubbling clarified butter with a continuous pan-swirling motion (soufflieren), allowing steam to balloon the golden breading away from the meat into delicate, undulating, crispy, golden-amber waves. Served with fresh lemon wedges, parsley potatoes, and lingonberry jam.',
      appearance: 'A giant golden-amber breaded cutlet that covers the entire plate, rippled with elegant, undulating wavy blisters, garnished with a crowned lemon wheel.',
      texture: 'Shatteringly crisp, light, airy crust that floats detached from the meat, giving way to an ultra-tender, juicy cutlet that cuts with a fork.',
      flavor: 'Rich, nutty clarified butter, delicate tender veal/pork, toasted breadcrumbs, brightened by a squeeze of fresh lemon juice.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: '12-inch wide heavy skillet', purpose: 'For shallow frying cutlets with plenty of room to swirl continuously.' },
      { name: 'Meat mallet (flat face) or heavy rolling pin', purpose: 'To pound cutlets evenly to 3mm (1/8 inch) thickness without tearing.' },
      { name: 'Plastic wrap', purpose: 'To protect meat while pounding.' }
    ],
    beforeYouStart: [
      { task: 'Place 4 veal cutlets or pork loin cutlets (150g each) between sheets of plastic wrap and pound evenly to strictly 3mm (1/8 inch) thickness.', durationMinutes: 10 },
      { task: 'Set up 3 shallow wide dredging bowls: Bowl 1 with flour; Bowl 2 with 3 eggs beaten lightly with 1 tbsp oil; Bowl 3 with fine bakery breadcrumbs.', durationMinutes: 5 },
      { task: 'Melt 200g clarified butter (or lard) in skillet over medium heat.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'THE SOUFFLÉ BREADING SECRET (Never Press Breadcrumbs!)', technique: 'When dredging in breadcrumbs, gently toss the egg-coated cutlet in the crumbs without pressing down with your hands! Patting or pressing forces crumbs into the meat, preventing steam from escaping. Loose crumbs allow trapped steam to expand and inflate the breading away from the meat into the famous wavy soufflé ripples (soufflieren).' },
      { item: 'Continuous Pan Swirling', technique: 'As the cutlet fries in bubbling butter, continuously swirl the skillet back and forth on the burner so hot butter washes in waves across the top surface. This cooks the top breading with butterfat before flipping.' }
    ],
    essentialIngredients: [
      { name: 'Veal cutlets (Wiener Schnitzel) or Pork loin cutlets (Schnitzel Wiener Art)', prep: 'pounded paper-thin to 3mm (1/8 inch)', amount: '4 cutlets (150g each)', metric: '600g', imperial: '1.3 lbs', common: '4 cutlets' },
      { name: 'All-purpose flour', prep: 'in shallow dish', amount: '1 cup', metric: '140g', imperial: '5 oz', common: '1 cup' },
      { name: 'Large eggs', prep: 'lightly beaten with 1 tbsp oil (oil adds elasticity)', amount: '3 eggs', metric: '150g', imperial: '5.3 oz', common: '3 eggs' },
      { name: 'Fine dry bakery breadcrumbs (Semmelbrösel)', prep: 'fine dried white breadcrumbs (never panko!)', amount: '2 cups', metric: '200g', imperial: '7 oz', common: '2 cups' },
      { name: 'Clarified butter (Butterschmalz) or pure lard', prep: 'essential for authentic nutty flavor', amount: '200g', metric: '200g', imperial: '7 oz', common: '1 cup' },
      { name: 'Fine sea salt & White pepper', prep: 'for seasoning meat before dredge', amount: '1.5 tsp salt + 1/2 tsp pepper', metric: '10g', imperial: '0.35 oz', common: 'mixed' },
      { name: 'Fresh lemons', prep: 'cut into wedges or crowned wheels', amount: '2 lemons', metric: '150g', imperial: '5.3 oz', common: '2 lemons' }
    ],
    steps: [
      {
        step: 1,
        title: 'POUND CUTLETS UNIFORMLY TO 3MM (1/8 INCH)',
        whatYouNeed: ['Veal or pork cutlets', 'Plastic wrap', 'Flat meat mallet or rolling pin'],
        description: 'Place one cutlet between two large sheets of plastic wrap. Using the smooth, flat side of a meat mallet (never the spiked side, which tears meat fibers!), pound gently with outward strokes from the center toward the edges until the cutlet expands to double its surface area and measures an even 3mm (1/8 inch) thickness throughout. Season both sides with salt and white pepper.',
        howToDoIt: 'Uniform 3mm thickness ensures the cutlet cooks through in under 2 minutes per side before the breadcrumbs scorch.',
        heat: 'No Heat',
        duration: 8,
        visualCues: 'A massive, paper-thin, tender cutlet with uniform thickness from center to edge.',
        textureCheck: 'Tender, pliable, ultra-thin meat sheet.',
        whatShouldThisLookLike: 'A wide, paper-thin seasoned cutlet.',
        tip: 'Be gentle around the edges — do not pound so hard that holes tear in the meat.',
        commonMistake: 'Leaving the cutlet thick, resulting in a tough, chewy schnitzel with burnt breadcrumbs.',
        moveOnWhen: 'All 4 cutlets are pounded paper-thin and seasoned.',
        quickInstructions: 'Pound cutlets between plastic wrap with flat mallet to 3mm thickness, season with salt and white pepper.'
      },
      {
        step: 2,
        title: 'THE THREE-STEP AIRY DREDGE (DO NOT PRESS!)',
        whatYouNeed: ['Flour bowl', 'Beaten eggs bowl', 'Breadcrumbs bowl', 'Pounded cutlet'],
        description: 'Dredge cutlet in flour; shake off all excess flour thoroughly. Dip into beaten egg, letting excess drip for 2 seconds. Lay cutlet gently into the breadcrumbs. Toss breadcrumbs over the top to bury the meat. DO NOT PRESS DOWN WITH YOUR HANDS! Gently lift the cutlet, shake off loose crumbs, and lay on a plate. Fry immediately!',
        howToDoIt: 'Never press the breadcrumbs into the meat! Loose crumbs allow steam to expand and inflate the breading into undulating golden waves.',
        heat: 'No Heat',
        duration: 4,
        visualCues: 'A delicate, velvety, uniform coating of fine breadcrumbs clinging lightly to the egg layer.',
        textureCheck: 'Lightly coated, delicate cutlet.',
        whatShouldThisLookLike: 'A wide, lightly breaded cutlet ready for the pan.',
        tip: 'Never let breaded cutlets sit on a plate — bread crumbs will absorb moisture and turn gummy. Bread right before frying!',
        commonMistake: 'Pressing breadcrumbs down firmly, gluing the crust to the meat and preventing the wavy soufflé effect.',
        moveOnWhen: 'Breaded and ready for hot butter.',
        quickInstructions: 'Dredge in flour, dip in egg, toss in breadcrumbs without pressing; fry immediately.'
      },
      {
        step: 3,
        title: 'FRY IN CLARIFIED BUTTER WITH CONTINUOUS PAN SWIRL',
        whatYouNeed: ['Skillet with 200g hot clarified butter (170°C / 340°F)', 'Breaded cutlet', 'Tongs'],
        description: 'Carefully slide the cutlet into the hot clarified butter (cutlet must float freely in at least 1cm of butter). Immediately begin gently swirling the skillet back and forth in a continuous circular motion so hot butter washes in waves over the top of the cutlet. Fry for strictly 90 seconds until the bottom is deep golden and the top breading puffs with wavy ripples. Flip carefully and fry the second side for 60 to 90 seconds while swirling.',
        howToDoIt: 'Continuous swirling (soufflieren) forces hot butter over the top, cooking both sides simultaneously and trapping steam that balloons the crust.',
        heat: 'Medium Heat (170°C / 340°F butter)',
        duration: 4,
        visualCues: 'Breading inflates into gorgeous wavy ripples like a golden quilt; turns deep uniform golden-amber.',
        hear: 'Brisk, frothy frying sizzle as butter bubbles across the cutlet.',
        smell: 'Incredible aroma of nutty browned butter and toasted breadcrumbs.',
        textureCheck: 'Shatteringly crisp, light, airy wavy crust.',
        whatShouldThisLookLike: 'A golden-amber rippled Wiener Schnitzel floating in butter.',
        tip: 'Clarified butter (Butterschmalz) is non-negotiable for authentic Austrian flavor — vegetable oil lacks the rich nutty aroma.',
        commonMistake: 'Frying in shallow oil without swirling, producing a flat, greasy, stuck-down crust.',
        moveOnWhen: 'Both sides are deep golden-amber with wavy ripples.',
        quickInstructions: 'Fry in 170°C clarified butter for 90 secs while continuously swirling pan, flip, fry 60-90 secs until golden.'
      },
      {
        step: 4,
        title: 'DRAIN & SERVE IMMEDIATELY WITH LEMON',
        whatYouNeed: ['Hot fried schnitzel', 'Paper towels', 'Lemon wedges', 'Parsley potatoes'],
        description: 'Lift schnitzel with tongs, let butter drain for 5 seconds, and transfer to a paper-towel-lined platter for 30 seconds. Place on a warm plate. Garnish with a fresh lemon wedge or crowned lemon wheel. Serve immediately with warm buttered parsley potatoes and tart lingonberry jam.',
        howToDoIt: 'Squeezing fresh lemon juice over the hot wavy crust cuts through the rich butter and elevates the tender meat.',
        heat: 'No Heat',
        duration: 1,
        visualCues: 'A massive golden-amber cutlet rippling across the plate with lemon garnish.',
        smell: 'Nutty clarified butter, toasty breading, and fresh zesty lemon.',
        textureCheck: 'Shatteringly crisp airy crust floating over ultra-tender juicy meat.',
        whatShouldThisLookLike: 'A classic Viennese restaurant Wiener Schnitzel.',
        tip: 'Squeeze the lemon over the schnitzel immediately before cutting each bite to keep the crust crunchy.',
        commonMistake: 'Drenching in brown gravy — authentic Wiener Schnitzel is NEVER served with gravy, which destroys the crisp crust!',
        moveOnWhen: 'Served immediately.',
        quickInstructions: 'Drain 30 secs, place on warm plate, garnish with lemon wedge, serve with parsley potatoes and lingonberries.'
      }
    ],
    commonMistakes: [
      { mistake: 'Pressing breadcrumbs onto meat', remedy: 'Toss breadcrumbs loosely! Pressing prevents the crust from puffing into wavy ripples.' },
      { mistake: 'Serving with gravy', remedy: 'Authentic schnitzel is never served with gravy. Serve with lemon and lingonberry jam.' }
    ],
    troubleshooting: [
      {
        problem: 'Crust did not puff or wave (flat and stuck)',
        whatHappened: 'Steam could not escape from the meat.',
        whyItHappened: 'Breadcrumbs were pressed down firmly, or pan was not swirled.',
        whatToDoNow: 'Enjoy with lemon — it will still be crisp and delicious!',
        howToPrevent: 'Dredge loosely without pressing and swirl the skillet continuously during frying.'
      }
    ],
    substitutions: [
      { original: 'Veal cutlets', substitute: 'Boneless pork loin (Schnitzel Wiener Art) or chicken breast cutlets', notes: 'Pork loin is world-famous and delicious.' },
      { original: 'Clarified butter', substitute: 'Ghee or neutral oil mixed with 3 tbsp butter', notes: 'Ghee provides identical high smoke point and nutty flavor.' }
    ],
    safetyNotes: ['Hot clarified butter can splatter during swirling; maintain steady, gentle circular motions.'],
    servingGuide: {
      restingTime: '0 minutes — eat immediately while crust is at peak crunch.',
      temperature: 'Piping hot and crispy.',
      garnishing: 'Fresh lemon wedges or crowned lemon wheel and flat-leaf parsley.',
      accompaniments: 'Austrian potato salad (Erdäpfelsalat), buttered parsley potatoes, Preiselbeeren (lingonberry jam), and Austrian Grüner Veltliner wine or beer.'
    }
  },

  // 23. BRITISH DISHES (Traditional British Beer-Battered Fish and Chips)
  {
    id: 'british-dishes',
    name: 'Traditional British Fish and Chips (Crispy Carbonated Beer-Battered Cod with Triple-Cooked Chips)',
    cuisine: 'Global',
    region: 'United Kingdom (Northern England / London)',
    servings: 4,
    prepTime: 30,
    cookTime: 25,
    difficulty: 'Medium',
    overview: {
      summary: 'The national treasure of Britain: thick fillets of fresh North Atlantic cod or haddock dredged in seasoned flour, dipped in an icy, bubbly beer batter made from cold English pale ale, flour, and baking powder, and flash-fried in hot beef dripping (or oil) until the batter balloons into a golden, glass-like, shatteringly crisp shell protecting flaky, steaming white fish. Served with thick-cut triple-cooked British chips, mushy peas, tart tartar sauce, and malt vinegar.',
      appearance: 'A giant golden-amber battered fish fillet with a blistered, rippled, crackling crust, nestled over thick golden chips, accompanied by bright green mushy peas and lemon wedges.',
      texture: 'An ear-shattering, glass-like crackle from the thin, airy batter, revealing steaming-hot, juicy, pearlescent white fish flakes that melt on the tongue, paired with fluffy, crisp-edged chips.',
      flavor: 'Sweet delicate ocean cod, rich toasted malt from beer batter, savory beef dripping, bright malt vinegar tang, and sweet herbaceous mushy peas.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Deep heavy Dutch oven or deep fryer & thermometer', purpose: 'To maintain steady oil temperature between 180°C and 190°C (350-375°F).' },
      { name: 'Whisk & mixing bowl', purpose: 'To whisk icy beer batter right before dipping.' }
    ],
    beforeYouStart: [
      { task: 'Chill 1 bottle (330ml) of English ale or lager in the freezer for 20 minutes (beer MUST be ice-cold!).', durationMinutes: 20 },
      { task: 'Cut 1kg Maris Piper or Russet potatoes into thick 1.5cm chips; rinse, parboil for 8 mins, and dry thoroughly.', durationMinutes: 20 },
      { task: 'Pat 4 thick fresh cod or haddock fillets (180g each) completely bone-dry with paper towels; season with salt and pepper.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'THE ICE-COLD BEER BATTER SCIENCE', technique: 'The beer MUST be ice-cold and bubbly! The carbon dioxide bubbles and alcohol create a light, porous foam. When the cold batter hits 190°C hot oil, the alcohol and carbonation vaporize instantly, puffing the batter into a delicate, glass-like, crispy lattice without absorbing grease.' },
      { item: 'The Swimming Motion Dip', technique: 'Hold the battered fish by the tail tip. Lower the thicker end into the hot oil and gently swish it back and forth for 3 seconds before letting go. This "swims" the fish on the oil surface, instantly setting the batter into a buoyant crust so it doesn\'t sink and stick to the bottom of the pot.' }
    ],
    essentialIngredients: [
      { name: 'Fresh thick Atlantic cod or haddock fillets', prep: 'skinned, boned, patted bone-dry', amount: '4 fillets (180g each)', metric: '720g', imperial: '1.6 lbs', common: '4 fillets' },
      { name: 'All-purpose flour', prep: 'divided (1.5 cups for batter + 1/2 cup for dusting)', amount: '2 cups total', metric: '280g', imperial: '10 oz', common: '2 cups' },
      { name: 'Rice flour or cornstarch', prep: 'for extra glass-like shatter', amount: '1/4 cup', metric: '35g', imperial: '1.2 oz', common: '1/4 cup' },
      { name: 'Ice-cold British pale ale or lager', prep: 'cold and bubbly', amount: '1 bottle (330ml)', metric: '330ml', imperial: '11.2 fl oz', common: '1 bottle' },
      { name: 'Baking powder', prep: 'creates micro-fizz', amount: '1 tsp', metric: '5g', imperial: '0.18 oz', common: '1 tsp' },
      { name: 'Maris Piper or Russet potatoes', prep: 'cut into 1.5cm thick chips, parboiled and dried', amount: '1 kg', metric: '1000g', imperial: '2.2 lbs', common: '4 large potatoes' },
      { name: 'Beef dripping (traditional) or peanut/canola oil', prep: 'for deep frying', amount: '2 liters', metric: '2000ml', imperial: '68 fl oz', common: '8 cups' },
      { name: 'Fine sea salt & Black pepper', prep: 'seasoning', amount: '1.5 tsp salt + 1 tsp pepper', metric: '10g', imperial: '0.35 oz', common: 'mixed' },
      { name: 'British malt vinegar & Tartar sauce', prep: 'for serving', amount: 'for drizzling', metric: '50ml', imperial: '1.7 fl oz', common: 'condiments' },
      { name: 'Mushy peas', prep: 'warmed', amount: '1 cup', metric: '200g', imperial: '7 oz', common: '1 cup' }
    ],
    steps: [
      {
        step: 1,
        title: 'FRY TRIPLE-COOKED CHIPS (FIRST PAR-FRY)',
        whatYouNeed: ['Parboiled dry potato chips', 'Hot oil at 130°C (265°F)', 'Spider skimmer'],
        description: 'Heat oil in Dutch oven to 130°C (265°F). Add the dry potato chips. Fry gently for 6 to 8 minutes until cooked through and tender to a knife tip, but pale with zero browning. Remove with spider skimmer and spread on a wire rack to cool completely.',
        howToDoIt: 'The low-temperature first fry cooks the potato interior into fluffy mashed potato; the second high-heat fry creates the crispy golden shell.',
        heat: 'Low Frying Heat (130°C / 265°F)',
        duration: 8,
        visualCues: 'Chips are tender, soft, and completely pale cream with no browning.',
        textureCheck: 'Soft and cooked through.',
        whatShouldThisLookLike: 'Pale, soft par-cooked chips cooling on a rack.',
        tip: 'Ensure the parboiled chips are completely dry before dropping into oil to prevent oil splatter.',
        commonMistake: 'Frying chips only once, resulting in either limp soggy fries or hard raw centers.',
        moveOnWhen: 'Chips are par-fried and cooled.',
        quickInstructions: 'Par-fry dry chips in 130°C oil for 6-8 mins until tender but completely pale; cool on wire rack.'
      },
      {
        step: 2,
        title: 'WHISK ICY BEER BATTER RIGHT BEFORE FRYING',
        whatYouNeed: ['Flour, rice flour, baking powder, 1 tsp salt', 'Ice-cold beer (330ml)', 'Whisk'],
        description: 'Increase oil temperature to 190°C (375°F). In a wide bowl, whisk 1.5 cups flour, 1/4 cup rice flour, baking powder, and 1 tsp salt. Pour in the ice-cold beer all at once. Whisk gently for 15 seconds just until combined — DO NOT OVER-MIX! A few small flour lumps are fine.',
        howToDoIt: 'Whisking the batter at the very last second preserves the carbonation bubbles that make the crust puff light as air.',
        heat: 'No Heat',
        duration: 2,
        visualCues: 'A foamy, bubbly, aerated batter with the consistency of heavy pancake batter.',
        smell: 'Yeasty, malty beer and sweet flour.',
        textureCheck: 'Bubbly, thick, pourable batter.',
        whatShouldThisLookLike: 'Fizzy, cold beer batter ready for dipping.',
        tip: 'Never make beer batter in advance — the carbon dioxide bubbles go flat within 10 minutes!',
        commonMistake: 'Whisking the batter smooth, knocking out all the carbonation bubbles.',
        moveOnWhen: 'Batter is bubbly and oil is at 190°C.',
        quickInstructions: 'Whisk dry ingredients with ice-cold beer for 15 secs just until combined; use immediately.'
      },
      {
        step: 3,
        title: 'DUST, DIP & THE SWIMMING FISH FRY AT 190°C',
        whatYouNeed: ['Dry cod fillets', '1/2 cup flour for dusting', 'Beer batter', 'Hot oil at 190°C (375°F)'],
        description: 'Dust dry cod fillets lightly in flour and shake off all excess. Dip one fillet into the bubbly beer batter, coating completely. Lift by the tail and let excess batter drip for 2 seconds. Hold the tail and gently lower the thick end into the 190°C oil, swishing it back and forth for 3 seconds before letting go. Fry 2 fillets at a time for 6 to 7 minutes, turning once, until the batter balloons into a deep golden-amber, blistered, rigid crust. Drain on a wire rack.',
        howToDoIt: 'The 3-second swish sets the batter on the surface so the fish floats freely without sinking to the bottom wire.',
        heat: 'High Frying Heat (190°C / 375°F)',
        duration: 8,
        visualCues: 'Batter inflates dramatically, bubbles furiously, and turns into a blistered, deep golden-amber crunchy armor.',
        hear: 'Loud, crackling frying sizzle that gradually softens.',
        smell: 'Toasted beer malt, rich beef dripping, and savory fried fish.',
        textureCheck: 'Shatteringly crisp, rigid shell that sounds hollow when tapped with metal tongs.',
        whatShouldThisLookLike: 'Two massive, golden-amber battered fish fillets draining on a rack.',
        tip: 'Drizzle a spoonful of extra batter over the floating fish in the first 30 seconds to create delicious crispy "scraps" (bits)!',
        commonMistake: 'Dropping fish straight to the bottom, sticking to the pot.',
        moveOnWhen: 'Fish is deep golden, crunchy, and internal temp reaches 63°C (145°F).',
        quickInstructions: 'Dust fish in flour, dip in batter, swish 3 secs in 190°C oil, fry 6-7 mins until puffed and deep golden.'
      },
      {
        step: 4,
        title: 'FLASH-FRY CHIPS TO CRISP GOLDEN & SERVE',
        whatYouNeed: ['Par-fried chips', 'Hot oil at 190°C (375°F)', 'Flaky salt & malt vinegar', 'Battered fish', 'Mushy peas & tartar sauce'],
        description: 'Drop the cooled chips back into the 190°C oil for 3 to 4 minutes until deep golden-brown and crispy. Drain on wire rack, toss immediately with flaky sea salt. Plate the piping-hot fish alongside a heap of golden chips. Drizzle liberally with malt vinegar. Serve immediately with warm mushy peas, tart tartar sauce, and lemon wedges.',
        howToDoIt: 'The high-heat second fry creates a crunchy golden exterior while keeping the interior as soft as baked potato.',
        heat: 'High Heat',
        duration: 4,
        visualCues: 'Deep golden crispy chips piled beside a massive golden battered fish with green mushy peas.',
        smell: 'Tangy malt vinegar, savory fried batter, and hot salty chips.',
        textureCheck: 'Glass-like shatter of the fish crust revealing steaming, tender flakes; crispy chips.',
        whatShouldThisLookLike: 'The authentic British seaside Fish and Chips feast.',
        tip: 'Splash malt vinegar directly onto the hot fish and chips while steam is rising — the vinegar aroma is legendary!',
        commonMistake: 'Wrapping in paper for 15 minutes, which steams the crispy batter into soft mush.',
        moveOnWhen: 'Chips are crispy, salted, and served hot.',
        quickInstructions: 'Flash-fry chips at 190°C for 3-4 mins until golden and crispy; salt, serve with fish, malt vinegar, and mushy peas.'
      }
    ],
    commonMistakes: [
      { mistake: 'Flat or warm beer', remedy: 'Beer must be ice-cold and freshly opened for bubbly carbonation.' },
      { mistake: 'Dredging without dusting in flour', remedy: 'Always dust fish with dry flour first so the wet batter adheres properly.' }
    ],
    troubleshooting: [
      {
        problem: 'Batter is heavy, thick, and doughy',
        whatHappened: 'Batter was over-mixed or too thick.',
        whyItHappened: 'Gluten developed from excess whisking.',
        whatToDoNow: 'Thin with 2 tablespoons of cold seltzer or beer and whisk for strictly 5 seconds.',
        howToPrevent: 'Whisk beer into flour for only 15 seconds, leaving lumps.'
      }
    ],
    substitutions: [
      { original: 'English ale', substitute: 'Cold lager, club soda, or seltzer water', notes: 'Seltzer makes a remarkably light, crispy, non-alcoholic batter.' },
      { original: 'Beef dripping', substitute: 'Peanut oil, sunflower oil, or lard', notes: 'Beef dripping provides traditional Northern chippy flavor.' }
    ],
    safetyNotes: ['Lower fish gently into oil away from you to prevent splashing hot oil.'],
    servingGuide: {
      restingTime: 'Rest 2 minutes on wire rack before serving.',
      temperature: 'Piping hot.',
      garnishing: 'Lemon wedges and plenty of malt vinegar.',
      accompaniments: 'Mushy peas, chip shop curry sauce, tartar sauce, and bread and butter (for a chip butty!).'
    }
  },

  // 24. SCANDINAVIAN DISHES (Authentic Swedish Meatballs - Köttbullar)
  {
    id: 'scandinavian-dishes',
    name: 'Authentic Swedish Meatballs (Köttbullar with Velvety Cream Gravy, Lingonberries & Pressed Cucumbers)',
    cuisine: 'Global',
    region: 'Northern Europe (Sweden / Stockholm)',
    servings: 4,
    prepTime: 30,
    cookTime: 25,
    difficulty: 'Medium',
    overview: {
      summary: 'The beloved culinary icon of Sweden: tender, bite-sized meatballs made from a delicate 50/50 blend of finely ground pork and beef, soaked fresh white breadcrumbs in heavy cream and milk, finely grated caramelized onions, allspice, and white pepper. Browned in foaming butter until golden and caramelized, bathed in a velvety pan cream gravy (Gräddsås) enriched with rich beef stock, served with tart wild lingonberry jam, sweet pickled pressed cucumbers (Pressgurka), and silky potato purée.',
      appearance: 'Neat, golden-brown spherical meatballs glistening in a velvety, pale tan cream gravy, served alongside bright red lingonberry jam and buttery mashed potatoes.',
      texture: 'Incredibly tender, springy, and melt-in-the-mouth soft — never dense, rubbery, or dry — enveloped in a luscious velvet cream sauce.',
      flavor: 'Rich savory beef and sweet pork, fragrant warm allspice and white pepper, nutty browned butter, rich beef cream gravy, and tart sweet lingonberries.',
      restingTimeMinutes: 5
    },
    equipment: [
      { name: '12-inch heavy cast-iron skillet', purpose: 'For searing meatballs evenly in butter and building pan gravy from the fond.' },
      { name: 'Small cookie scoop or tablespoon', purpose: 'To portion meatballs into uniform bite-sized 2.5cm spheres.' }
    ],
    beforeYouStart: [
      { task: 'Soak 3/4 cup fresh white breadcrumbs in 1/2 cup heavy cream and 1/4 cup whole milk for 10 minutes (the panade).', durationMinutes: 10 },
      { task: 'Finely grate 1 medium yellow onion and sauté in 1 tbsp butter for 6 minutes until soft and golden; cool completely.', durationMinutes: 8 },
      { task: 'Prepare pressed cucumbers: slice 1 English cucumber paper-thin, toss with 1/2 cup water, 3 tbsp vinegar, 2 tbsp sugar, salt, and press under a weight.', durationMinutes: 15 }
    ],
    ingredientPrepGuide: [
      { item: 'THE CREAM PANADE (The Secret to Melt-in-the-Mouth Softness)', technique: 'Soaking fresh breadcrumbs in heavy cream and milk (a panade) is the non-negotiable secret to Swedish meatballs. The saturated bread starches form a protective gel matrix that traps melting pork fat, guaranteeing meatballs that dissolve like velvet in your mouth.' },
      { item: 'Ground Allspice & White Pepper', technique: 'Swedish meatballs are defined by ground allspice (kryddpeppar) and white pepper. Never use garlic, Italian herbs, or oregano! Allspice provides the gentle, warm, aromatic holiday aroma unique to Scandinavian cooking.' }
    ],
    essentialIngredients: [
      { name: 'Ground beef chuck (80/20)', prep: 'finely ground, chilled', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '300g' },
      { name: 'Ground pork loin/shoulder', prep: 'finely ground, chilled', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '300g' },
      { name: 'Fresh white breadcrumbs', prep: 'crustless white bread pulsed into crumbs', amount: '3/4 cup', metric: '60g', imperial: '2.1 oz', common: '3/4 cup' },
      { name: 'Heavy cream & Whole milk (for panade)', prep: 'mixed', amount: '1/2 cup cream + 1/4 cup milk', metric: '180ml', imperial: '6 fl oz', common: '3/4 cup total' },
      { name: 'Yellow onion', prep: 'finely grated and sautéed in butter', amount: '1 medium', metric: '120g', imperial: '4.2 oz', common: '1 onion' },
      { name: 'Large egg', prep: 'lightly beaten', amount: '1 egg', metric: '50g', imperial: '1.8 oz', common: '1 egg' },
      { name: 'Ground allspice (Kryddpeppar)', prep: 'essential Swedish spice', amount: '1/2 tsp', metric: '1.5g', imperial: '0.05 oz', common: '1/2 tsp' },
      { name: 'Ground white pepper & Fine sea salt', prep: 'seasoning', amount: '1/2 tsp white pepper + 1.25 tsp salt', metric: '8g', imperial: '0.28 oz', common: 'mixed' },
      { name: 'Unsalted butter', prep: 'divided (3 tbsp for frying + 2 tbsp for gravy)', amount: '5 tbsp', metric: '75g', imperial: '2.6 oz', common: '5 tbsp' },
      { name: 'All-purpose flour', prep: 'for gravy roux', amount: '2 tbsp', metric: '20g', imperial: '0.7 oz', common: '2 tbsp' },
      { name: 'Rich beef stock', prep: 'hot, flavorful', amount: '1.75 cups', metric: '420ml', imperial: '14 fl oz', common: '1.75 cups' },
      { name: 'Heavy cream (for gravy)', prep: 'poured into sauce', amount: '1/2 cup', metric: '120ml', imperial: '4 fl oz', common: '1/2 cup' },
      { name: 'Soy sauce or Worcestershire sauce', prep: 'umami depth in gravy', amount: '1 tsp', metric: '5ml', imperial: '0.17 fl oz', common: '1 tsp' },
      { name: 'Wild Swedish lingonberry jam (Lingonsylt)', prep: 'for serving', amount: '1/2 cup', metric: '150g', imperial: '5.3 oz', common: '1/2 cup' }
    ],
    steps: [
      {
        step: 1,
        title: 'COMBINE MEATS WITH CREAM PANADE & SPICES',
        whatYouNeed: ['Ground beef & pork', 'Cream-soaked breadcrumbs (panade)', 'Cooled sautéed onions', 'Beaten egg', 'Allspice, white pepper, salt', 'Bowl'],
        description: 'In a large bowl, combine the ground beef, ground pork, cream-soaked breadcrumb panade, cooled sautéed onions, beaten egg, allspice, white pepper, and salt. Mix gently with your hands or a wooden spoon for strictly 2 minutes just until combined into a soft, cohesive, sticky mixture. DO NOT OVER-MIX or knead aggressively!',
        howToDoIt: 'Gentle mixing keeps the meat proteins relaxed so the meatballs remain delicate and springy rather than dense rubber balls.',
        heat: 'No Heat',
        duration: 5,
        visualCues: 'A pale pink, uniform, soft, sticky meat mixture with visible specks of golden onion and pepper.',
        smell: 'Aromatic allspice, sweet sautéed onions, and fresh cream.',
        textureCheck: 'Very soft, sticky, and moist.',
        whatShouldThisLookLike: 'Soft Swedish meatball mixture.',
        tip: 'Wet your hands with cold water before shaping so the sticky meat doesn\'t adhere to your palms.',
        commonMistake: 'Over-kneading the meat, resulting in tough, bouncy, rubbery meatballs.',
        moveOnWhen: 'Mixture is evenly combined and sticky.',
        quickInstructions: 'Gently mix beef, pork, cream-soaked breadcrumbs, cooled onions, egg, allspice, and salt just until combined.'
      },
      {
        step: 2,
        title: 'SHAPE UNIFORM BITE-SIZED SPHERES',
        whatYouNeed: ['Meat mixture', 'Small bowl of water', 'Baking sheet lined with parchment'],
        description: 'Dip your hands in cold water. Using a small cookie scoop or tablespoon, portion the mixture into small 2.5cm (1-inch) balls (about 25g each). Roll gently between wet palms into smooth, round spheres. Place on the parchment sheet. Repeat to make approximately 24 to 28 small meatballs. Chill in refrigerator for 15 minutes to firm up.',
        howToDoIt: 'Swedish meatballs are traditionally small and bite-sized (about half the size of Italian meatballs), allowing them to brown quickly.',
        heat: 'No Heat',
        duration: 10,
        visualCues: 'A tray of 24 to 28 identical, neat, bite-sized round meatballs.',
        textureCheck: 'Smooth, firming up in the fridge.',
        whatShouldThisLookLike: 'A tray of uniform round meatballs ready for the skillet.',
        tip: 'Chilling for 15 minutes firms the butter and fat so the meatballs hold their spherical shape when hit with hot butter.',
        commonMistake: 'Making giant meatballs — Swedish meatballs must be bite-sized!',
        moveOnWhen: 'All meatballs are rolled and chilled 15 minutes.',
        quickInstructions: 'Roll into small 2.5cm (1-inch) balls with wet hands, place on parchment, chill 15 mins.'
      },
      {
        step: 3,
        title: 'BROWN IN SIZZLING BUTTER WITH SKILLET SHAKE',
        whatYouNeed: ['Cast-iron skillet', '3 tbsp butter', 'Chilled meatballs (fry in 2 batches)'],
        description: 'Melt 3 tbsp butter in the cast-iron skillet over medium heat until foaming. Add half the meatballs in a single layer with space between them. Fry for 7 to 8 minutes, shaking the skillet back and forth frequently so the meatballs roll around and brown evenly into golden-brown spheres. Transfer cooked meatballs to a plate and repeat with the second batch.',
        howToDoIt: 'Shaking the skillet makes the round meatballs roll on the hot iron, browning all sides while keeping them spherical instead of flattening.',
        heat: 'Medium Heat',
        duration: 15,
        visualCues: 'Meatballs turn deep golden-brown on all sides with caramelized crust; foaming butter bubbles around them.',
        hear: 'Lively, sizzling butter frying.',
        smell: 'Nutty browned butter, sweet pork, and allspice.',
        textureCheck: 'Firm yet springy, fully cooked through.',
        whatShouldThisLookLike: 'Golden-brown meatballs resting on a plate.',
        tip: 'Do not crowd the skillet — frying in two batches guarantees browning rather than steaming.',
        commonMistake: 'Leaving meatballs unturned, flattening them into square patties.',
        moveOnWhen: 'All meatballs are browned and transferred to plate.',
        quickInstructions: 'Brown meatballs in foaming butter for 7-8 mins in two batches, shaking skillet so they roll into golden spheres.'
      },
      {
        step: 4,
        title: 'BUILD VELVET CREAM GRAVY (GRÄDDSÅS) & ASSEMBLE',
        whatYouNeed: ['Pan drippings fond', '2 tbsp flour', '1.75 cups hot beef stock', '1/2 cup heavy cream', '1 tsp soy sauce', 'Browned meatballs'],
        description: 'In the remaining pan drippings over medium heat, whisk in 2 tbsp flour. Cook the roux for 2 minutes until golden-brown, scraping up all flavorful browned bits (fond). Gradually whisk in the hot beef stock in a steady stream. Simmer for 4 minutes until thickened and glossy. Whisk in 1/2 cup heavy cream and 1 tsp soy sauce. Season with salt and white pepper. Return meatballs to the velvety gravy and simmer on low for 5 minutes to warm through.',
        howToDoIt: 'The pan drippings and caramelized fond dissolve into the stock and cream, giving the gravy its legendary rich savory depth.',
        heat: 'Medium to Low Heat',
        duration: 10,
        visualCues: 'A rich, creamy, light-tan velvet gravy bubbling gently around glossy golden meatballs.',
        smell: 'Savory beef broth, sweet heavy cream, and allspice.',
        textureCheck: 'Velvet-smooth gravy that coats the back of a spoon; tender, springy meatballs.',
        whatShouldThisLookLike: 'Glistening Swedish meatballs nestled in rich cream gravy.',
        tip: 'A splash of soy sauce is the secret chef trick that adds deep umami and gorgeous pale caramel color to the cream gravy!',
        commonMistake: 'Boiling the cream sauce aggressively, which can separate the cream fat.',
        moveOnWhen: 'Gravy is velvety and meatballs are warmed through.',
        quickInstructions: 'Whisk flour into pan drippings 2 mins, whisk in beef stock and simmer 4 mins; add cream, soy sauce, and meatballs; simmer 5 mins.'
      },
      {
        step: 5,
        title: 'THE CLASSIC SWEDISH SERVICE',
        whatYouNeed: ['Meatballs in cream gravy', 'Silky potato purée', 'Lingonberry jam', 'Pressed pickled cucumbers', 'Fresh dill'],
        description: 'Ladle hot meatballs and generous spoonfuls of velvet cream gravy over fluffy, buttery mashed potatoes. Place a bright crimson dollop of wild lingonberry jam and sweet pressed cucumbers alongside. Garnish with fresh dill sprigs and serve piping hot.',
        howToDoIt: 'The magic of Swedish meatballs lies in the trio: rich savory meat with cream gravy, tart fruity lingonberries, and crisp sweet pickled cucumber.',
        heat: 'No Heat',
        duration: 3,
        visualCues: 'A stunning Scandinavian plate: golden meatballs in cream gravy, fluffy white potatoes, ruby lingonberries, and green cucumbers.',
        smell: 'Cream gravy, roasted allspice, tart berries, and fresh dill.',
        textureCheck: 'Melt-in-the-mouth soft meatballs, velvety gravy, creamy potatoes, and sweet-tart berry bursts.',
        whatShouldThisLookLike: 'The ultimate Stockholm Swedish meatball feast.',
        tip: 'Mix a little lingonberry jam into your gravy on the fork for the quintessential Swedish flavor harmony!',
        commonMistake: 'Serving without lingonberry jam or pickled cucumbers, which are essential to cut through the rich cream.',
        moveOnWhen: 'Plated and served immediately.',
        quickInstructions: 'Serve meatballs and gravy over mashed potatoes with wild lingonberry jam, pressed cucumbers, and fresh dill.'
      }
    ],
    commonMistakes: [
      { mistake: 'Over-mixing the meat', remedy: 'Mix gently with hands just until combined. Over-mixing creates dense rubbery meatballs.' },
      { mistake: 'Omitting the panade', remedy: 'Always soak breadcrumbs in cream and milk. This guarantees melt-in-the-mouth tenderness.' }
    ],
    troubleshooting: [
      {
        problem: 'Gravy is too thin and pale',
        whatHappened: 'Flour roux was undercooked or liquid was too high.',
        whyItHappened: 'Roux didn\'t cook long enough.',
        whatToDoNow: 'Simmer briskly for 3-4 more minutes until it coats the back of a spoon.',
        howToPrevent: 'Cook flour in drippings for 2 full minutes before whisking in stock.'
      }
    ],
    substitutions: [
      { original: 'Lingonberry jam', substitute: 'Whole-berry cranberry sauce or red currant jelly', notes: 'Provides identical sweet-tart balance.' },
      { original: '50/50 beef and pork', substitute: 'All ground beef chuck (80/20)', notes: 'Beef alone works, though pork adds traditional tenderness.' }
    ],
    safetyNotes: ['Ground pork and beef must be cooked through to 74°C (165°F).'],
    servingGuide: {
      restingTime: 'Rest 5 minutes before serving.',
      temperature: 'Piping hot.',
      garnishing: 'Fresh chopped dill or flat-leaf parsley.',
      accompaniments: 'Silky potato purée (mashed potatoes), wild lingonberry jam (Lingonsylt), and pressed pickled cucumbers (Pressgurka).'
    }
  }
];
