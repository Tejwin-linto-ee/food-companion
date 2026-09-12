// Americas & Global: African (5) + American Part 1 (6) = 11 dishes
module.exports = [
  // 1. INJERA (Authentic Ethiopian Teff Injera)
  {
    id: 'injera',
    name: 'Authentic Ethiopian Injera (100% Fermented Teff Sourdough Flatbread)',
    cuisine: 'African',
    region: 'East Africa (Ethiopia / Eritrea)',
    servings: 6,
    prepTime: 30,
    cookTime: 20,
    difficulty: 'Hard',
    overview: {
      summary: 'The ancient culinary foundation of Ethiopian culture: an airy, spongy, sour flatbread fermented over 3 to 4 days using 100% ancient whole-grain teff flour and wild yeast, cooked with a cooked-batter pre-gelatinization technique (ersho and absit). Poured in concentric spirals onto a blistering-hot electric mitad (or non-stick flat pan) and covered until thousands of tiny bubble craters ("eyes" / ayen) burst open across the top, yielding an ultra-pliable, tangy, spongy bread that acts as plate, spoon, and meal.',
      appearance: 'A giant circular, pale silver-brown or ivory spongy flatbread covered with thousands of uniform honeycomb bubble craters ("eyes" / ayen), smooth on the bottom.',
      texture: 'Spongy, springy, light, and elastic — completely flexible without tearing, perfect for pinching hot spicy stews.',
      flavor: 'Pleasantly sour, tangy, complex lactic fermentation with an earthy, nutty, mineral teff grain finish.',
      restingTimeMinutes: 5
    },
    equipment: [
      { name: '14-inch non-stick electric crêpe griddle or flat flatbread pan with domed lid', purpose: 'To bake injera without flipping and trap steam for rising eyes.' },
      { name: 'Small saucepan', purpose: 'To boil a portion of the fermented batter (the Absit) to gelatinize starches.' }
    ],
    beforeYouStart: [
      { task: 'Day 1: Mix 400g brown or ivory teff flour with 500ml water into a smooth paste; cover and let ferment at room temperature for 3 days until bubbly and sour.', durationMinutes: 4320 },
      { task: 'Day 3: Pour off the dark fermented liquid on top and prepare the Absit (cooked starter).', durationMinutes: 15 }
    ],
    ingredientPrepGuide: [
      { item: 'THE ABSIT TECHNIQUE (Gelatinizing the Batter)', technique: 'Teff is 100% gluten-free. To give the batter elasticity without gluten, take 1/2 cup of the fermented batter, whisk with 1 cup boiling water in a saucepan over medium heat for 2-3 minutes until it turns into a thick, glossy pudding (absit). Cool and stir back into the main batter. This pre-gelatinizes teff starches so the injera holds together and springs with eyes!' },
      { item: 'The Concentric Spiral Pour', technique: 'Pour the thin batter starting from the outer rim of the hot pan, moving in a continuous spiral toward the center, swirling gently to fill gaps.' }
    ],
    essentialIngredients: [
      { name: '100% pure brown or ivory Teff flour (Maskal Teff)', prep: 'stone-ground teff', amount: '400g', metric: '400g', imperial: '14 oz', common: '3 cups' },
      { name: 'Lukewarm water', prep: 'divided for fermentation, absit, and thinning', amount: '800ml total', metric: '800ml', imperial: '27 fl oz', common: '3.5 cups' },
      { name: 'Ersho (fermented sourdough starter) or pinch of active yeast', prep: 'starter culture', amount: '1/4 cup starter or 1/4 tsp yeast', metric: '60ml', imperial: '2 fl oz', common: 'starter' },
      { name: 'Boiling water (for Absit)', prep: 'for cooking batter portion', amount: '1 cup', metric: '240ml', imperial: '8 fl oz', common: '1 cup' },
      { name: 'Cold water (for final thinning)', prep: 'to achieve heavy cream consistency', amount: '1/2 cup', metric: '120ml', imperial: '4 fl oz', common: '1/2 cup' }
    ],
    steps: [
      {
        step: 1,
        title: 'THE 3-DAY FERMENTATION & THE ABSIT COOK',
        whatYouNeed: ['Teff flour', 'Water', 'Starter/yeast', 'Saucepan', 'Whisk'],
        description: 'On Day 1, mix teff flour, starter, and water into a smooth paste. Cover with a breathable cloth and let ferment at room temperature for 3 days. Tiny bubbles and a sour aroma will develop. On Day 3, pour off any dark liquid on top. Scoop out 1/2 cup of the batter into a saucepan, whisk with 1 cup boiling water, and cook over medium heat for 3 minutes into a thick glossy pudding (Absit). Let cool for 15 minutes, then whisk back into the main batter with 1/2 cup cold water until it resembles thin heavy cream.',
        howToDoIt: 'The absit provides the sticky starch glue that binds gluten-free teff into flexible bread.',
        heat: 'Medium Heat (for Absit only)',
        duration: 20,
        visualCues: 'Bubbly, frothy, sour batter with the consistency of runny crêpe batter.',
        smell: 'Pleasantly sour, tangy sourdough and earthy fermented grain.',
        textureCheck: 'Thin, fluid, lump-free batter with micro-bubbles.',
        whatShouldThisLookLike: 'Active, bubbly fermented teff batter.',
        tip: 'Let the batter rest 1 hour after adding the absit — it will bubble vigorously with fresh fermentation!',
        commonMistake: 'Using thick batter, which makes injera heavy, dense, and gummy with no eyes.',
        moveOnWhen: 'Batter is bubbly, fluid, and rested.',
        quickInstructions: 'Ferment teff flour 3 days, cook 1/2 cup batter with water into thick absit, cool, whisk back in with water; rest 1 hr.'
      },
      {
        step: 2,
        title: 'POUR IN CONCENTRIC SPIRALS ON HOT MITAD',
        whatYouNeed: ['Flat electric griddle or non-stick pan', '1 cup thin batter', 'Lid'],
        description: 'Heat griddle to 200°C (400°F) or medium-high heat on stove until water droplets dance. Wipe lightly with dry cloth (do not oil!). Pour 1 cup of batter in a continuous spiral motion starting from the outer circumference, working inward to the center. Tilt the pan gently to fill any gaps in an even 4mm layer. DO NOT COVER YET!',
        howToDoIt: 'Leave uncovered for the first 30-40 seconds so steam bubbles can rise freely from the bottom.',
        heat: 'Medium-High (200°C / 400°F)',
        duration: 1,
        visualCues: 'Batter hits hot surface and instantly begins sizzling; hundreds of tiny bubbles erupt across the surface.',
        hear: 'Lively, soft bubbling sizzle.',
        smell: 'Toasty, earthy, tangy fermented teff aroma.',
        textureCheck: 'Wet batter rapidly forming bubble craters.',
        whatShouldThisLookLike: 'A wide circle of batter actively erupting with tiny volcano craters.',
        tip: 'Never grease the pan with heavy oil — oil causes the batter to slide around and prevents eyes from forming.',
        commonMistake: 'Covering the pan immediately upon pouring, which traps steam and drowns the eyes.',
        moveOnWhen: 'Bubbles cover 80% of the surface.',
        quickInstructions: 'Pour 1 cup batter in spiral from rim to center on dry hot griddle; leave uncovered 30-40 secs until eyes pop.'
      },
      {
        step: 3,
        title: 'COVER & STEAM UNTIL "EYES" SET',
        whatYouNeed: ['Domed lid'],
        description: 'When the entire surface is covered in tiny open craters ("eyes" / ayen) and the wet batter has set into a matte surface, place the domed lid over the pan. Lower heat to medium and steam-bake for 2 to 2.5 minutes. NEVER FLIP INJERA! The steam trapped inside the dome cooks the top completely.',
        howToDoIt: 'Injera is cooked entirely from the bottom and steamed from the top; flipping destroys the delicate craters.',
        heat: 'Medium Heat',
        duration: 3,
        visualCues: 'Edges curl up slightly from the pan; surface is dry, matte, and covered in thousands of distinct craters.',
        smell: 'Sour, nutty steamed bread.',
        textureCheck: 'Springy, soft, and completely set without wet spots.',
        whatShouldThisLookLike: 'A magnificent cratered Ethiopian flatbread.',
        tip: 'If water condensation drips from the lid onto the injera, wipe the lid interior dry with a towel before baking the next piece.',
        commonMistake: 'Flipping the injera like a pancake — injera is cooked strictly on one side!',
        moveOnWhen: 'Edges curl up and center is dry and springy.',
        quickInstructions: 'Cover with lid, steam-bake for 2-2.5 minutes until edges peel up and top is dry; do not flip!'
      },
      {
        step: 4,
        title: 'COOL ON STRAW MAT & SERVE WITH WAT',
        whatYouNeed: ['Clean straw mat (Mesob) or clean kitchen towel', 'Spatula'],
        description: 'Slide a thin spatula around the edges, then lift and transfer the injera onto a clean straw mat or cotton towel to cool for 5 minutes. DO NOT STACK WARM INJERA, or they will stick together into a gummy brick! Once cooled to room temperature, stack neatly or line a large serving platter and top with hot Doro Wat.',
        howToDoIt: 'Cooling individually allows residual moisture to escape, ensuring the bread remains spongy, flexible, and non-sticky.',
        heat: 'No Heat',
        duration: 5,
        visualCues: 'A flexible, spongy, soft flatbread with thousands of eyes, cooling flat.',
        smell: 'Refreshing sour fermentation and toasty grain.',
        textureCheck: 'Ultra-pliable and springy — rolls up easily without cracking.',
        whatShouldThisLookLike: 'Authentic Ethiopian injera ready for the feast.',
        tip: 'Tear off pieces with your right hand and use the spongy cratered side to pinch up bites of spicy stew.',
        commonMistake: 'Stacking while steaming hot, ruining the texture.',
        moveOnWhen: 'Injera is cooled and ready for serving.',
        quickInstructions: 'Transfer onto straw mat or towel, cool 5 mins individually before stacking; use to scoop up stews.'
      }
    ],
    commonMistakes: [
      { mistake: 'Skipping the Absit step', remedy: 'Without cooking a small portion of batter into absit, 100% teff batter will crack and have no elasticity.' },
      { mistake: 'Flipping the injera', remedy: 'Never flip injera! Cook from the bottom and let trapped steam bake the top.' }
    ],
    troubleshooting: [
      {
        problem: 'Injera has no eyes (smooth and gummy)',
        whatHappened: 'Bubbles failed to form.',
        whyItHappened: 'Batter was not fermented enough, was too thick, or pan was covered too quickly.',
        whatToDoNow: 'Thin the batter with 1/4 cup lukewarm water and let sit 30 minutes in a warm spot.',
        howToPrevent: 'Ensure 3 full days of active fermentation and leave uncovered for first 35 seconds of baking.'
      }
    ],
    substitutions: [
      { original: '100% Teff flour', substitute: '70% teff flour + 30% all-purpose flour', notes: 'Very common home adaptation that ferments faster and is easier to handle.' }
    ],
    safetyNotes: ['Steam under the lid is hot; lift away from face when removing.'],
    servingGuide: {
      restingTime: 'Cool 5 minutes before stacking.',
      temperature: 'Room temperature.',
      garnishing: 'None — used as edible platter.',
      accompaniments: 'Doro Wat, Misir Wat (spicy red lentils), Gomen (collards), and Ayib (fresh cheese).'
    }
  },

  // 2. DORO WAT (Authentic Ethiopian Spicy Chicken Stew)
  {
    id: 'doro-wat',
    name: 'Authentic Ethiopian Doro Wat (Slow-Simmered Berbere Chicken & Hard-Boiled Egg Stew)',
    cuisine: 'African',
    region: 'East Africa (Ethiopia)',
    servings: 4,
    prepTime: 40,
    cookTime: 75,
    difficulty: 'Hard',
    overview: {
      summary: 'The celebratory national dish of Ethiopia: bone-in chicken thighs and drumsticks slow-simmered in a colossal reduction of red onions caramelized dry without oil for 45 minutes, infused with pure spiced clarified butter (Niter Kibbeh), fiery aromatic Berbere spice blend, garlic, ginger, and Korarima (Ethiopian cardamom). Finished with hard-boiled eggs pierced to absorb the deep crimson sauce, served piping hot atop spongy Injera.',
      appearance: 'A deep mahogany-crimson, thick, glossy stew blanketing tender chicken drumsticks and crimson-stained whole peeled eggs, glistening with golden spiced butter.',
      texture: 'Chicken is succulent and falling off the bone; the onion base melts into a thick, velvety gravy without any loose water, paired with firm hard-boiled eggs.',
      flavor: 'Intensely complex, layered, and warming: sweet caramelized onions, fiery complex Berbere heat, aromatic ginger, garlic, and herbal fenugreek-infused Niter Kibbeh.',
      restingTimeMinutes: 10
    },
    equipment: [
      { name: 'Heavy Dutch oven or enamelled cast-iron pot', purpose: 'Essential for dry-caramelizing onions for 45 minutes without scorching.' },
      { name: 'Food processor', purpose: 'To finely puree 1 kilogram of red onions.' }
    ],
    beforeYouStart: [
      { task: 'Finely puree or mince 1kg (4 large) red onions in a food processor into a fine pulp.', durationMinutes: 10 },
      { task: 'Clean and score 8 chicken pieces (thighs and drumsticks); soak in cold water with 2 tbsp lemon juice and 1 tsp salt for 20 minutes, then drain.', durationMinutes: 20 },
      { task: 'Hard-boil 4 eggs, peel, and pierce with a toothpick in 6 places so sauce penetrates the whites.', durationMinutes: 15 }
    ],
    ingredientPrepGuide: [
      { item: 'DRY ONION REDUCTION (The Ethiopian Master Secret)', technique: 'You MUST cook the pureed red onions in a dry Dutch oven with NO OIL or butter for the first 35-40 minutes, stirring constantly! This slowly drives off onion water and caramelizes natural sugars into a sweet, dark purple paste that creates the entire foundation of Doro Wat.' },
      { item: 'Niter Kibbeh (Spiced Clarified Butter)', technique: 'Authentic Doro Wat demands Niter Kibbeh — butter clarified with garlic, ginger, fenugreek, korarima, and nigella seeds. Regular butter lacks the iconic herbal perfume.' }
    ],
    essentialIngredients: [
      { name: 'Red onions', prep: 'peeled and finely pureed into pulp (no chunks)', amount: '1 kg', metric: '1000g', imperial: '2.2 lbs', common: '4 large onions' },
      { name: 'Bone-in chicken drumsticks & thighs', prep: 'skinned, soaked in lemon, scored', amount: '8 pieces (1 kg)', metric: '1000g', imperial: '2.2 lbs', common: '8 pieces' },
      { name: 'Niter Kibbeh (Ethiopian spiced clarified butter)', prep: 'melted', amount: '1/2 cup', metric: '120g', imperial: '4.2 oz', common: '1/2 cup' },
      { name: 'Authentic Ethiopian Berbere spice blend', prep: 'fresh, fragrant red blend', amount: '1/3 cup', metric: '45g', imperial: '1.6 oz', common: '1/3 cup' },
      { name: 'Fresh garlic & Ginger', prep: 'grated to fine paste', amount: '2 tbsp garlic + 2 tbsp ginger', metric: '40g', imperial: '1.4 oz', common: 'mixed' },
      { name: 'Korarima (Ethiopian black cardamom) & Fenugreek', prep: 'finely ground', amount: '1 tsp korarima + 1/2 tsp fenugreek', metric: '4g', imperial: '0.14 oz', common: 'mixed' },
      { name: 'Hard-boiled eggs', prep: 'peeled and pierced with toothpick', amount: '4 whole eggs', metric: '200g', imperial: '7 oz', common: '4 eggs' },
      { name: 'Chicken broth or water', prep: 'hot', amount: '1.5 cups', metric: '360ml', imperial: '12 fl oz', common: '1.5 cups' },
      { name: 'Fresh lemon juice', prep: 'finishing brightness', amount: '1 tbsp', metric: '15ml', imperial: '0.5 fl oz', common: '1 tbsp' },
      { name: 'Fine sea salt', prep: 'seasoning', amount: '1.5 tsp', metric: '9g', imperial: '0.3 oz', common: '1.5 tsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'DRY-SWEAT & CARAMELIZE ONION PULP (NO OIL!)',
        whatYouNeed: ['Dutch oven', '1kg pureed red onions', 'Wooden spoon'],
        description: 'Place pureed red onions into the completely dry Dutch oven over medium heat with ZERO oil or water. Stir frequently for 35 to 40 minutes. The onions will first release a massive puddle of purple liquid, then reduce, darken, and caramelize into a thick, jammy, dark reddish-purple paste that clings to the spoon.',
        howToDoIt: 'Dry-cooking evaporates the pungent sulfur water from the onions, concentrating natural fructose into a velvety sweet base.',
        heat: 'Medium-Low Heat',
        duration: 40,
        visualCues: 'Onion liquid evaporates completely; onion pulp shrinks by 70% and turns into a dark purple, jammy paste.',
        smell: 'Transitions from sharp pungent raw onion to intensely sweet caramelized onion.',
        textureCheck: 'Thick, jam-like paste with no free liquid.',
        whatShouldThisLookLike: 'Dark purple, caramelized onion paste coating the pot bottom.',
        tip: 'If onions begin to stick before fully caramelized, splash in 1 tablespoon of water to deglaze.',
        commonMistake: 'Adding butter at the start, which fries the onions into crisp chips instead of melting into jam.',
        moveOnWhen: 'Onions are dark purple, sweet, and jammy.',
        quickInstructions: 'Cook pureed onions in dry pot with no oil for 35-40 mins, stirring often until thick, sweet, dark purple jam.'
      },
      {
        step: 2,
        title: 'ADD NITER KIBBEH & BLOOM THE BERBERE',
        whatYouNeed: ['Caramelized onions', '1/2 cup Niter Kibbeh', '1/3 cup Berbere spice', 'Garlic-ginger paste', 'Korarima & Fenugreek'],
        description: 'Pour 1/2 cup Niter Kibbeh into the dark onion paste. Stir for 3 minutes until sizzling and fragrant. Add 1/3 cup Berbere spice blend, grated garlic, ginger paste, ground korarima, fenugreek, and 1.5 tsp salt. Cook over low heat, stirring constantly, for 10 to 12 minutes until the spices bloom, the color turns deep mahogany-crimson, and aromatic spiced butter separates at the edges.',
        howToDoIt: 'Frying Berbere in spiced butter for 10 minutes cooks out the raw bitterness of the dried chiles while extracting fat-soluble flavors.',
        heat: 'Low Heat',
        duration: 12,
        visualCues: 'Deep crimson-ruby, glistening sauce bubbling slowly with pools of golden spiced butter around the perimeter.',
        smell: 'Incredible, exotic perfume of Ethiopian cardamom, ginger, fenugreek, and toasted chiles.',
        textureCheck: 'Rich, glossy, aromatic paste.',
        whatShouldThisLookLike: 'A dark crimson, bubbling, spiced onion paste.',
        tip: 'Keep heat low so the delicate chiles and garlic in the Berbere do not scorch.',
        commonMistake: 'Rushing the Berbere blooming, leaving the sauce tasting powdery and raw.',
        moveOnWhen: 'Sauce is deep crimson and butter separates at the edges.',
        quickInstructions: 'Add Niter Kibbeh to onions, cook 3 mins; add Berbere, garlic, ginger, and spices; cook gently 10-12 mins.'
      },
      {
        step: 3,
        title: 'ADD CHICKEN & SLOW-SIMMER FOR 45 MINUTES',
        whatYouNeed: ['Scored chicken pieces', '1.5 cups hot broth or water', 'Sauce in Dutch oven'],
        description: 'Add the cleaned chicken pieces to the bubbling crimson sauce, tossing to coat each piece thoroughly. Pour in 1.5 cups hot chicken broth or water. Bring to a gentle simmer, cover with a tight-fitting lid, and simmer over low heat for 40 to 45 minutes, stirring occasionally, until the chicken is meltingly tender and cooked through to 75°C (165°F).',
        howToDoIt: 'Scoring the chicken flesh allows the deep crimson Berbere sauce and spiced butter to penetrate directly to the bone.',
        heat: 'Low Gentle Simmer',
        duration: 45,
        visualCues: 'Chicken turns deep mahogany-red as it absorbs the sauce; sauce thickens into a velvet gravy.',
        hear: 'Gentle, rhythmic bubbling.',
        smell: 'Rich roasted poultry and warm Berbere spices.',
        textureCheck: 'Chicken is succulent and fork-tender.',
        whatShouldThisLookLike: 'Tender chicken pieces submerged in thick crimson sauce.',
        tip: 'Stir along the bottom occasionally to make sure the thick onion sauce does not catch.',
        commonMistake: 'Adding too much water, turning the rich Wat into thin soup.',
        moveOnWhen: 'Chicken is fully cooked and fork-tender.',
        quickInstructions: 'Add chicken pieces and 1.5 cups hot broth, cover, simmer gently on low for 40-45 mins until tender.'
      },
      {
        step: 4,
        title: 'ADD HARD-BOILED EGGS & REST',
        whatYouNeed: ['Pierced hard-boiled eggs', '1 tbsp fresh lemon juice', 'Finished stew'],
        description: 'Gently nestle the 4 pierced hard-boiled eggs into the simmering sauce alongside the chicken. Spoon hot sauce over the eggs. Simmer uncovered for 10 minutes so the egg whites absorb the crimson color and spicy flavor. Stir in 1 tbsp fresh lemon juice. Remove from heat and let rest 10 minutes before serving.',
        howToDoIt: 'Piercing the eggs allows the savory spiced butter and Berbere sauce to infuse the whites all the way to the yolk.',
        heat: 'Low Heat to Rest',
        duration: 12,
        visualCues: 'Whole eggs turn deep reddish-amber, coated in glossy velvet sauce.',
        smell: 'Tangy lemon brightness cutting through rich spiced butter.',
        textureCheck: 'Tender chicken, firm eggs, and thick, luxurious gravy.',
        whatShouldThisLookLike: 'The authentic Ethiopian Doro Wat ready for the platter.',
        tip: 'In Ethiopian tradition, the eggs and chicken drumsticks are served to the most honored guests at the table.',
        commonMistake: 'Skipping the resting period, which prevents the flavors from settling.',
        moveOnWhen: 'Eggs are stained crimson and dish has rested 10 minutes.',
        quickInstructions: 'Nestle pierced hard-boiled eggs in sauce, simmer 10 mins, stir in lemon juice, rest 10 mins; serve on Injera.'
      }
    ],
    commonMistakes: [
      { mistake: 'Cooking onions with oil early', remedy: 'Always dry-cook onions without oil for 40 minutes to create authentic velvety sweetness.' },
      { mistake: 'Using generic chili powder', remedy: 'You must use authentic Ethiopian Berbere containing korarima, fenugreek, and ajwain.' }
    ],
    troubleshooting: [
      {
        problem: 'Sauce is too fiery hot',
        whatHappened: 'Berbere blend was very spicy.',
        whyItHappened: 'Chile heat overwhelmed the onion sweetness.',
        whatToDoNow: 'Whisk in 2 extra tablespoons of Niter Kibbeh or unsalted butter and serve with extra cool Ayib (fresh cheese) or yogurt.',
        howToPrevent: 'Use mild Berbere or reduce Berbere to 1/4 cup and supplement with sweet paprika.'
      }
    ],
    substitutions: [
      { original: 'Niter Kibbeh', substitute: 'Ghee infused with garlic, ginger, and pinch of fenugreek', notes: 'Excellent quick homemade substitute.' },
      { original: 'Korarima', substitute: 'Seeds of green cardamom pods crushed fine', notes: 'Provides similar herbal floral warmth.' }
    ],
    safetyNotes: ['Chicken must reach internal temperature of 75°C (165°F).'],
    servingGuide: {
      restingTime: 'Rest 10 minutes before serving.',
      temperature: 'Piping hot.',
      garnishing: 'Crimson-stained whole eggs and a drizzle of melted Niter Kibbeh.',
      accompaniments: 'Fresh teff Injera, Ayib (Ethiopian fresh cheese), and spiced lentil stews.'
    }
  },

  // 3. TAGINE (Authentic Moroccan Lamb Tagine with Prunes & Almonds)
  {
    id: 'tagine',
    name: 'Authentic Moroccan Lamb Tagine (Tajine Mrouzia with Prunes, Honey & Almonds)',
    cuisine: 'African',
    region: 'North Africa (Morocco / Fez)',
    servings: 4,
    prepTime: 25,
    cookTime: 90,
    difficulty: 'Medium',
    overview: {
      summary: 'The pinnacle of Moroccan culinary artistry: tender bone-in lamb shank or shoulder slow-braised in a traditional conical clay Tagine with grated onions, saffron threads, ground ginger, turmeric, sweet cinnamon, and Ras el Hanout. Simmered until the meat is meltingly tender, combined with sweet black prunes poached in orange blossom water and honey, and topped with golden fried almonds and toasted sesame seeds.',
      appearance: 'A magnificent conical clay vessel opened at the table to reveal steaming, tender mahogany lamb shanks enveloped in a rich golden-amber sauce, surrounded by glossy plump black prunes and toasted golden almonds.',
      texture: 'Fork-tender, gelatinous lamb that pulls effortlessly from the bone, paired with meltingly soft sweet prunes and crunchy crisp almonds.',
      flavor: 'An enchanting sweet-and-savory balance: warm ginger and saffron earthiness, savory rich lamb, sweet floral honey, and orange blossom perfume.',
      restingTimeMinutes: 10
    },
    equipment: [
      { name: 'Traditional earthenware/ceramic Tagine or heavy Dutch oven', purpose: 'The conical lid condenses steam and continuously self-bastes the meat into succulent tenderness.' },
      { name: 'Heat diffuser', purpose: 'Essential if using clay tagine over gas stove burners to prevent thermal cracking.' }
    ],
    beforeYouStart: [
      { task: 'Bloom a large pinch of saffron threads in 1/2 cup warm water for 15 minutes.', durationMinutes: 15 },
      { task: 'Trim 1kg bone-in lamb shank or shoulder into large portions.', durationMinutes: 5 },
      { task: 'Fry 1/2 cup blanched raw almonds in 2 tbsp oil until golden-brown; drain.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'The Conical Tagine Steam Circulation', technique: 'The conical lid of the tagine traps evaporating juices, condenses them at the cool top tip, and channels them down the sloped sides back into the meat. Very little added liquid is needed because the meat braises in its own recirculated juices.' },
      { item: 'Poaching Prunes Separately', technique: 'Poach prunes in 1 cup of the savory tagine broth with 2 tbsp honey, 1 tsp cinnamon, and 1 tsp orange blossom water in a small pan until plump and syrupy, then arrange around the meat at the end.' }
    ],
    essentialIngredients: [
      { name: 'Bone-in lamb shank or shoulder pieces', prep: 'large cuts on the bone', amount: '1 kg', metric: '1000g', imperial: '2.2 lbs', common: '1 kg' },
      { name: 'Yellow onions', prep: 'finely grated (not chopped, creates velvety sauce)', amount: '2 large', metric: '300g', imperial: '10.5 oz', common: '2 onions' },
      { name: 'Garlic cloves', prep: 'grated to paste', amount: '4 cloves', metric: '12g', imperial: '0.4 oz', common: '4 cloves' },
      { name: 'Saffron threads', prep: 'crushed and bloomed in warm water', amount: '1/2 tsp', metric: '1g', imperial: '0.04 oz', common: '1 generous pinch' },
      { name: 'Ground ginger & Ground turmeric', prep: 'spices', amount: '1 tbsp ginger + 1 tsp turmeric', metric: '10g', imperial: '0.35 oz', common: 'mixed' },
      { name: 'Ceylon cinnamon stick & Ground cinnamon', prep: 'sweet warmth', amount: '1 stick + 1 tsp ground', metric: '5g', imperial: '0.18 oz', common: 'mixed' },
      { name: 'Ras el Hanout spice blend', prep: 'fragrant Moroccan blend', amount: '1 tbsp', metric: '8g', imperial: '0.3 oz', common: '1 tbsp' },
      { name: 'Extra virgin olive oil & Clarified butter (Smen)', prep: 'cooking fat', amount: '3 tbsp olive oil + 1 tbsp smen/butter', metric: '60ml', imperial: '2 fl oz', common: '1/4 cup' },
      { name: 'Dried black prunes', prep: 'pitted and plump', amount: '1.5 cups', metric: '200g', imperial: '7 oz', common: '1.5 cups' },
      { name: 'Pure honey', prep: 'for sweet glaze', amount: '2 tbsp', metric: '40g', imperial: '1.4 oz', common: '2 tbsp' },
      { name: 'Orange blossom water', prep: 'floral aromatic', amount: '1 tsp', metric: '5ml', imperial: '0.17 fl oz', common: '1 tsp' },
      { name: 'Fried blanched almonds & Toasted sesame seeds', prep: 'for garnish', amount: '1/2 cup almonds + 1 tbsp sesame', metric: '70g', imperial: '2.5 oz', common: 'garnish' },
      { name: 'Fine sea salt & Black pepper', prep: 'seasoning', amount: '1.5 tsp salt + 1 tsp pepper', metric: '10g', imperial: '0.35 oz', common: 'mixed' }
    ],
    steps: [
      {
        step: 1,
        title: 'MARINATE LAMB IN SAFFRON, GINGER & SPICES',
        whatYouNeed: ['Lamb pieces', 'Grated onions', 'Garlic paste', 'Bloomed saffron & liquid', 'Ginger, Turmeric, Ras el Hanout, Cinnamon', 'Olive oil', 'Salt & Pepper'],
        description: 'In the base of the tagine (or a large bowl), combine grated onions, garlic, bloomed saffron with its water, ginger, turmeric, Ras el Hanout, ground cinnamon, olive oil, smen (butter), salt, and black pepper. Rub this fragrant golden marinade all over the lamb pieces. Let marinate for at least 30 minutes.',
        howToDoIt: 'Grated onions dissolve completely during slow cooking, forming a thick, luxurious sauce (la degla) without requiring flour or cornstarch.',
        heat: 'No Heat',
        duration: 30,
        visualCues: 'Vibrant golden-orange spiced marinade coating every crevice of the meat.',
        smell: 'Floral saffron, warm ginger, sweet cinnamon, and garlic.',
        textureCheck: 'Well-coated, aromatic lamb pieces.',
        whatShouldThisLookLike: 'Golden spiced lamb resting in grated onion marinade.',
        tip: 'Always marinate at room temperature for 30 minutes so the cold meat doesn\'t shock hot cookware.',
        commonMistake: 'Chotting onions in large pieces — authentic Moroccan tagine sauce requires finely grated onions to melt into gravy.',
        moveOnWhen: 'Lamb is marinated.',
        quickInstructions: 'Toss lamb with grated onions, garlic, bloomed saffron, ginger, turmeric, Ras el Hanout, oil, and salt; rest 30 mins.'
      },
      {
        step: 2,
        title: 'SEAR GENTLY & SLOW-BRAISE WITH CONICAL LID',
        whatYouNeed: ['Marinated lamb in tagine', 'Cinnamon stick', '1 cup warm water', 'Conical lid'],
        description: 'Place tagine base over a heat diffuser on medium-low heat. Cook the lamb and onions gently for 10 minutes, turning once or twice, until the meat is lightly seared and onions are translucent. Add the cinnamon stick and pour 1 cup warm water around the edges. Cover with the conical lid. Reduce heat to low and simmer gently for 75 to 90 minutes until the lamb is fork-tender.',
        howToDoIt: 'Keep heat low and gentle! Thermal shock will crack clay tagines, and rapid boiling toughens lamb fibers.',
        heat: 'Low Gentle Heat',
        duration: 90,
        visualCues: 'Liquid bubbles gently; meat shrinks slightly along the bone; sauce turns golden-amber.',
        hear: 'Gentle, muffled bubbling inside the cone.',
        smell: 'Enchanting aromas of saffron, ginger, cinnamon, and roasting lamb.',
        textureCheck: 'Meat pulls away from the bone with gentle fork pressure.',
        whatShouldThisLookLike: 'Tender lamb surrounded by golden bubbling juices.',
        tip: 'Check liquid level at 45 minutes: if dry, add 1/2 cup warm water around the rim.',
        commonMistake: 'Cooking over high heat without a diffuser, cracking clay tagines.',
        moveOnWhen: 'Lamb is completely tender.',
        quickInstructions: 'Sear lamb gently in tagine 10 mins, add cinnamon stick and 1 cup water, cover with conical lid, simmer on low 75-90 mins.'
      },
      {
        step: 3,
        title: 'POACH PRUNES IN HONEY, CINNAMON & BLOSSOM WATER',
        whatYouNeed: ['Pitted black prunes', '1 cup broth from tagine', '2 tbsp honey', '1 tsp cinnamon', '1 tsp orange blossom water', 'Small saucepan'],
        description: 'While the lamb finishes, ladle 1 cup of the golden savory broth from the tagine into a small saucepan. Add the pitted prunes, honey, 1 tsp cinnamon, and orange blossom water. Simmer over medium-low heat for 12 to 15 minutes until the prunes puff, become plump and glossy, and the liquid reduces into a thick, sweet syrup.',
        howToDoIt: 'Cooking the prunes separately preserves their glossy black jewel appearance and prevents the entire tagine sauce from turning overly sweet.',
        heat: 'Medium-Low Heat',
        duration: 15,
        visualCues: 'Prunes swell and turn shiny, lacquered black; syrup becomes thick and coats a spoon.',
        smell: 'Intense perfume of orange blossom water, caramelized honey, and cinnamon.',
        textureCheck: 'Plump, meltingly soft prunes in thick syrup.',
        whatShouldThisLookLike: 'Glossy, plump black prunes in sweet syrup.',
        tip: 'Orange blossom water (Eau de fleur d\'oranger) is the quintessential Moroccan floral note — do not skip it!',
        commonMistake: 'Boiling prunes until they burst into mush.',
        moveOnWhen: 'Prunes are plump and glazed.',
        quickInstructions: 'Simmer prunes with 1 cup tagine broth, honey, cinnamon, and orange blossom water 12-15 mins into glossy syrup.'
      },
      {
        step: 4,
        title: 'ASSEMBLE, GARNISH WITH ALMONDS & PRESENT',
        whatYouNeed: ['Tender lamb in tagine', 'Glazed prunes & syrup', 'Fried golden almonds', 'Toasted sesame seeds'],
        description: 'Uncover the tagine. Arrange the glazed plump prunes around the tender lamb pieces. Pour the sweet prune syrup over the meat and prunes. Scatter crunchy fried almonds and toasted sesame seeds across the top. Bring the closed tagine directly to the dining table and lift the conical lid dramatically in front of your guests.',
        howToDoIt: 'Presenting the closed tagine at the table releases a billowing cloud of fragrant steam that captivates all senses.',
        heat: 'No Heat',
        duration: 3,
        visualCues: 'A majestic dish: golden saffron lamb crowned with glossy black prunes, golden almonds, and white sesame seeds.',
        smell: 'Heady steam of saffron, cinnamon, roasted nuts, and tender lamb.',
        textureCheck: 'Fall-off-the-bone lamb, soft sweet prunes, and crunchy toasted almonds.',
        whatShouldThisLookLike: 'The ultimate royal Moroccan feast.',
        tip: 'Eat communally with your hands, using warm Moroccan flatbread (Khobz) to pinch the tender meat and sweet prunes.',
        commonMistake: 'Letting the dish sit uncovered to cool before guests arrive.',
        moveOnWhen: 'Served piping hot at the table.',
        quickInstructions: 'Arrange prunes and syrup over lamb, scatter fried almonds and sesame seeds; present tagine at table.'
      }
    ],
    commonMistakes: [
      { mistake: 'High heat on clay tagines', remedy: 'Always use a metal heat diffuser over low stove burners to prevent cracking.' },
      { mistake: 'Chotting onions instead of grating', remedy: 'Grate onions fine so they melt into a silky, thick sauce without flour.' }
    ],
    troubleshooting: [
      {
        problem: 'Sauce is too watery and thin',
        whatHappened: 'Condensation prevented liquid reduction.',
        whyItHappened: 'The conical lid trapped all moisture.',
        whatToDoNow: 'Remove lid, turn heat to medium, and simmer briskly for 8 minutes until sauce reduces into a thick golden glaze.',
        howToPrevent: 'Simmer uncovered for the final 10 minutes.'
      }
    ],
    substitutions: [
      { original: 'Bone-in lamb shank', substitute: 'Bone-in beef short ribs or chicken thighs', notes: 'Tagine cooking works gorgeously with beef or chicken.' },
      { original: 'Smen (Moroccan butter)', substitute: 'Cultured ghee or unsalted butter with pinch of salt', notes: 'Provides rich dairy finish.' }
    ],
    safetyNotes: ['Clay tagines retain extreme heat; use trivets and handle lid with a towel.'],
    servingGuide: {
      restingTime: 'Rest 10 minutes before serving.',
      temperature: 'Piping hot.',
      garnishing: 'Fried almonds and toasted white sesame seeds.',
      accompaniments: 'Warm Moroccan crusty bread (Khobz), steamed couscous, and fresh mint tea.'
    }
  },

  // 4. COUSCOUS (Authentic North African Steamed Semolina Couscous)
  {
    id: 'couscous',
    name: 'Authentic North African Steamed Couscous (Triple-Steamed over Vegetable & Lamb Broth)',
    cuisine: 'African',
    region: 'North Africa (Morocco / Algeria / Tunisia)',
    servings: 6,
    prepTime: 25,
    cookTime: 50,
    difficulty: 'Hard',
    overview: {
      summary: 'The UNESCO-inscribed jewel of North Africa: semolina grain cooked using the authentic triple-steaming method in a traditional Couscoussier. The dry grains are gently rubbed with oil and salted water to form loose pearls, steamed twice above a simmering pot of seven-vegetable lamb broth (seven vegetables symbolize luck), aerated by hand between steamings with butter (smen), and crowned with tender vegetables, chickpeas, and rich golden broth.',
      appearance: 'A magnificent pyramid of fluffy, pale-golden semolina pearls crowned with tender whole carrots, zucchini, turnips, butternut squash, cabbage, and chickpeas, glistening with golden broth.',
      texture: 'Feather-light, fluffy, tender grains that separate effortlessly like clouds — never mushy, gummy, or dry.',
      flavor: 'Nutty semolina wheat, rich savory lamb-vegetable broth, sweet carrots and squash, aromatic ginger, saffron, and salted butter.',
      restingTimeMinutes: 5
    },
    equipment: [
      { name: 'Couscoussier (Two-tiered steamer pot: bottom Marmite and perforated top Keskas)', purpose: 'Essential for steaming semolina pearls directly in the rising aromatic vegetable broth vapors.' },
      { name: 'Wide shallow wooden bowl (Gsaa / Gsa\'a)', purpose: 'For rubbing and aerating the hot steamed grains by hand between steamings.' }
    ],
    beforeYouStart: [
      { task: 'Fill bottom pot of Couscoussier with 2 liters of water, lamb pieces, 1 diced onion, 1 tsp ginger, turmeric, saffron, salt, and bring to a simmer.', durationMinutes: 15 },
      { task: 'Peel and halve lengthwise: 4 carrots, 2 zucchini, 2 turnips, and cut 200g butternut squash into large wedges.', durationMinutes: 10 },
      { task: 'Place 500g medium dry semolina couscous into a wide shallow bowl.', durationMinutes: 2 }
    ],
    ingredientPrepGuide: [
      { item: 'THE TRIPLE-STEAMING RITUAL (Never Pour Boiling Water!)', technique: 'Box couscous tells you to pour boiling water over grains and let sit. In North Africa, this is considered a tragedy! Authentic couscous must be steamed above simmering broth 2 to 3 times for 15-20 minutes, rubbed and aerated with water and butter by hand between each steaming. This swells the grains into fluffy, cloud-like pearls with four times the volume.' },
      { item: 'Rubbing the Grains (Roulage)', technique: 'Drizzle 3 tbsp oil and 1/2 cup cold water over dry semolina. Rub the grains between your palms in circular motions. The grains absorb the moisture and separate into individual non-clumping pearls.' }
    ],
    essentialIngredients: [
      { name: 'Medium semolina couscous grains', prep: 'dry durum wheat semolina (never instant!)', amount: '500g', metric: '500g', imperial: '1.1 lbs', common: '2.5 cups' },
      { name: 'Cold water', prep: 'divided for aerating between steamings', amount: '2 cups total', metric: '480ml', imperial: '16 fl oz', common: '2 cups' },
      { name: 'Extra virgin olive oil', prep: 'for initial grain coating', amount: '3 tbsp', metric: '45ml', imperial: '1.5 fl oz', common: '3 tbsp' },
      { name: 'Unsalted butter or Smen (Moroccan preserved butter)', prep: 'for final grain aeration', amount: '4 tbsp', metric: '60g', imperial: '2.1 oz', common: '4 tbsp' },
      { name: 'Fine sea salt', prep: 'dissolved in aerating water', amount: '1.5 tsp', metric: '9g', imperial: '0.3 oz', common: '1.5 tsp' },
      { name: 'Lamb stew meat or chicken pieces', prep: 'for bottom broth', amount: '600g', metric: '600g', imperial: '1.3 lbs', common: '600g' },
      { name: 'Cooked chickpeas (Garbanzo beans)', prep: 'added to broth', amount: '1 cup', metric: '200g', imperial: '7 oz', common: '1 cup' },
      { name: 'Vegetables (Seven Vegetables)', prep: 'carrots, zucchini, turnips, squash, cabbage wedges', amount: '800g total', metric: '800g', imperial: '1.8 lbs', common: 'assorted' },
      { name: 'Broth seasonings: Saffron, Ginger, Turmeric, Black pepper', prep: 'aromatic blend', amount: '1 tbsp mixed', metric: '10g', imperial: '0.35 oz', common: '1 tbsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'RUB SEMOLINA WITH OIL & FIRST STEAMING (15 MINS)',
        whatYouNeed: ['500g dry couscous in wide bowl', '3 tbsp olive oil', '1/2 cup cold water', 'Perforated top steamer (Keskas)'],
        description: 'Drizzle 3 tbsp olive oil over dry couscous grains in a wide shallow bowl. Rub grains gently between your open palms for 2 minutes until every grain is coated in oil. Sprinkle 1/2 cup water over the grains and toss with your fingers to separate clumps. Transfer grains into the top perforated steamer basket. Set basket over the boiling broth pot. When steam begins rising through the grains, steam undisturbed for strictly 15 minutes.',
        howToDoIt: 'Coating with oil before water prevents grains from swelling together into sticky dough balls.',
        heat: 'Medium-High Steam',
        duration: 18,
        visualCues: 'White steam billows freely through the grains; grains begin to expand and turn pale cream.',
        smell: 'Toasty semolina and rich aromatic simmering lamb broth.',
        textureCheck: 'Partially softened grains, still slightly firm.',
        whatShouldThisLookLike: 'Grains steaming gently in the basket.',
        tip: 'Seal the seam between the bottom pot and top steamer with a damp strip of cloth (qfala) so no steam escapes around the edges.',
        commonMistake: 'Pressing or packing the grains down in the basket — they must remain loose and fluffy so steam can rise.',
        moveOnWhen: 'Steam has flowed through grains for 15 minutes.',
        quickInstructions: 'Rub couscous with oil, sprinkle 1/2 cup water, transfer to steamer, steam over broth for 15 mins.'
      },
      {
        step: 2,
        title: 'FIRST AERATION: SALT WATER & PALM RUBBING',
        whatYouNeed: ['Hot steamed couscous', 'Wide shallow bowl', '1.5 tsp salt dissolved in 1 cup cold water', 'Fork & palms'],
        description: 'Tip the hot steamed grains back into the wide shallow bowl. Break up clumps gently with a fork. Dissolve 1.5 tsp salt in 1 cup cold water. Gradually sprinkle the salted water over the hot grains, tossing with a wooden paddle (or your hands once cool enough) in broad circular motions, separating every single grain. Let the grains rest for 10 minutes to absorb the water completely.',
        howToDoIt: 'Adding salted water while grains are hot causes the semolina to drink in moisture rapidly, doubling in volume.',
        heat: 'No Heat',
        duration: 12,
        visualCues: 'Grains swell dramatically, lighten in color, and separate into fluffy individual pearls.',
        smell: 'Warm sweet wheat and sea salt.',
        textureCheck: 'Plump, soft, non-sticky grains.',
        whatShouldThisLookLike: 'A mound of fluffy, swollen semolina grains.',
        tip: 'Fan the grains with your hands to cool them slightly as you work — the grains should feel separate and silky.',
        commonMistake: 'Pouring all water in one spot, creating a clump of soggy semolina dough.',
        moveOnWhen: 'Water is absorbed and grains are separated and fluffy.',
        quickInstructions: 'Dump grains in bowl, break clumps, sprinkle 1 cup salted water, rub between palms, rest 10 mins.'
      },
      {
        step: 3,
        title: 'SECOND STEAMING & BUTTER AERATION (SMEN)',
        whatYouNeed: ['Aerated grains', 'Vegetables added to bottom broth', '4 tbsp butter or Smen', 'Steamer'],
        description: 'Add hard vegetables (carrots, turnips, cabbage) to the bottom broth pot. Transfer the aerated couscous grains back into the steamer basket. Steam over the broth for 20 minutes. Tip back into the shallow bowl. Drop 4 tbsp softened butter or Smen (Moroccan fermented butter) into the steaming grains. Toss with a fork and rub between palms until the butter melts completely and coats every individual pearl in rich golden fat.',
        howToDoIt: 'Butter coats each grain, locking in the absorbed moisture and preventing grains from ever sticking together.',
        heat: 'Medium-High Steam',
        duration: 25,
        visualCues: 'Grains turn golden, expand to four times original volume, and shimmer with a velvety butter glaze.',
        smell: 'Decadent butter, saffron, and sweet steamed semolina.',
        textureCheck: 'Impossibly light, airy, and melting on the tongue like a cloud.',
        whatShouldThisLookLike: 'Feather-light, glistening golden couscous pearls.',
        tip: 'Add soft vegetables (zucchini, squash, chickpeas) to the broth for the final 15 minutes so they do not overcook.',
        commonMistake: 'Using instant microwave couscous — real steamed couscous is four times lighter and fluffier.',
        moveOnWhen: 'Butter is fully melted and grains are aerated and fluffy.',
        quickInstructions: 'Steam grains 20 mins, tip into bowl, melt butter/smen into hot grains, rub between palms until glistening.'
      },
      {
        step: 4,
        title: 'THE PYRAMID PRESENTATION & BROTH SERVICE',
        whatYouNeed: ['Fluffy steamed couscous', 'Large serving platter (Gsa\'a)', 'Cooked vegetables & lamb', 'Ladle & golden broth'],
        description: 'Mound the buttery couscous in the center of a wide shallow platter, shaping into a grand dome or pyramid. Create a shallow hollow at the summit. Place the tender braised lamb in the center. Arrange the tender carrots, zucchini, turnips, butternut squash, and cabbage wedges artistically radiating down the slopes like the spokes of a wheel. Scatter chickpeas over top. Ladle two cups of rich golden broth over the mound, serving the remaining broth in bowls on the side.',
        howToDoIt: 'Ladle broth right before serving so grains drink up the aromatic liquid while remaining distinct and fluffy.',
        heat: 'No Heat',
        duration: 5,
        visualCues: 'A majestic golden pyramid adorned with colorful orange, green, and yellow vegetables and succulent meat, glistening with broth.',
        smell: 'Saffron, ginger, sweet vegetables, and savory lamb.',
        textureCheck: 'Cloud-soft grains, tender vegetables, and fall-apart meat.',
        whatShouldThisLookLike: 'A masterpiece North African Friday feast platter.',
        tip: 'Provide small bowls of fiery red Harissa mixed with broth for guests who love spicy heat.',
        commonMistake: 'Drowning the couscous in broth before serving, turning it into soup.',
        moveOnWhen: 'Plated, garnished, and served.',
        quickInstructions: 'Mound couscous in pyramid, place lamb at center, arrange vegetables radiating downward, ladle broth over top.'
      }
    ],
    commonMistakes: [
      { mistake: 'Boiling in water like rice', remedy: 'Never boil couscous in liquid! It must be steamed above broth in a Couscoussier.' },
      { mistake: 'Skipping the palm-rubbing aeration', remedy: 'Rubbing grains with salted water and butter creates individual fluffy pearls.' }
    ],
    troubleshooting: [
      {
        problem: 'Couscous formed large gummy clumps',
        whatHappened: 'Too much water was added too fast.',
        whyItHappened: 'Water was poured in one pool rather than sprinkled.',
        whatToDoNow: 'Rub clumps firmly between your palms or pass through a coarse colander to separate grains.',
        howToPrevent: 'Sprinkle water gradually with one hand while tossing with the other.'
      }
    ],
    substitutions: [
      { original: 'Smen', substitute: 'Unsalted European butter or Ghee', notes: 'Ghee mimics the rich clarified depth of authentic Smen.' },
      { original: 'Lamb', substitute: 'Chicken or Beef shank, or all-vegetable (Couscous aux Sept Légumes)', notes: 'Classic Moroccan variations.' }
    ],
    safetyNotes: ['Grains are very hot when dumped from steamer — use a wooden paddle or let cool slightly before palm rubbing.'],
    servingGuide: {
      restingTime: 'Serve immediately while hot.',
      temperature: 'Piping hot.',
      garnishing: 'Cooked chickpeas and golden saffron broth.',
      accompaniments: 'Extra broth in soup bowls, Harissa chili paste, and sweet raisins/caramelized onions (Tfaya).'
    }
  },

  // 5. JOLLOF RICE (Authentic West African Smoky Party Jollof Rice)
  {
    id: 'jollof-rice',
    name: 'Authentic West African Jollof Rice (Smoky Party Jollof with Pepper Sauce Reduction)',
    cuisine: 'African',
    region: 'West Africa (Nigeria / Ghana)',
    servings: 6,
    prepTime: 30,
    cookTime: 45,
    difficulty: 'Medium',
    overview: {
      summary: 'The iconic pride of West Africa and centerpiece of every celebration: long-grain parboiled rice cooked in a rich, deeply concentrated reduction (obe ata) of roasted plum tomatoes, red bell peppers (tatashe), onions, and fiery Scotch bonnet peppers (atarodo). Braised under a tightly sealed foil tent over gentle heat, allowing the rice to absorb the rich red stew until tender, finished with high-heat scorch to develop the legendary, irresistible, woodsmoke-infused "party-style" bottom char.',
      appearance: 'A vibrant, deep orange-red rice where every grain is distinct, separate, and glistening with red pepper oil, flecked with charred smoky grains from the bottom.',
      texture: 'Firm, separate, al dente grains infused to the core with savory sauce — never mushy, soggy, or clumpy.',
      flavor: 'Smoky woodfire char, sweet caramelized red bell peppers, fiery Scotch bonnet warmth, savory tomato depth, aromatic curry powder, thyme, and rich chicken stock.',
      restingTimeMinutes: 10
    },
    equipment: [
      { name: 'Heavy-bottom stainless steel or cast-iron Dutch oven', purpose: 'Essential to distribute heat evenly and achieve the prized party-style smoky bottom scorch without burning.' },
      { name: 'High-speed blender', purpose: 'To puree tomatoes, bell peppers, Scotch bonnets, and onions into a smooth pepper base.' },
      { name: 'Aluminum foil', purpose: 'To seal the pot tightly under the lid, trapping steam so parboiled rice cooks in concentrated sauce without adding excess water.' }
    ],
    beforeYouStart: [
      { task: 'Blend the pepper base: 4 large red bell peppers, 5 Roma tomatoes, 2 red onions, and 2 Scotch bonnet peppers until smooth.', durationMinutes: 10 },
      { task: 'Boil blended pepper puree in a saucepan for 15 minutes to evaporate excess water into a thick concentrated red paste.', durationMinutes: 15 },
      { task: 'Rinse 600g parboiled long-grain rice (golden sella basmati or converted rice) in warm water until water runs clear; drain.', durationMinutes: 10 }
    ],
    ingredientPrepGuide: [
      { item: 'THE PARBOILED RICE RULE: Grain Integrity', technique: 'Authentic Nigerian party jollof rice requires long-grain parboiled rice (such as Golden Sella Basmati or Converted Rice). Regular raw white basmati or jasmine rice has soft amylopectin starches that break down in acidic tomato sauce, turning into mush. Parboiled rice grains stay separate, firm, and al dente!' },
      { item: 'The Aluminum Foil Steam Tent', technique: 'Jollof rice is cooked by steam, NOT by drowning in liquid! Cover the top of the Dutch oven with aluminum foil, then press the heavy lid down tightly over it. This traps every molecule of steam, forcing the concentrated tomato essence into the rice grains.' },
      { item: 'The Party Bottom Scorch (The Smokiness)', technique: 'During the final 8 minutes, turn the heat up to medium-high. You must intentionally allow the bottom layer of rice to scorch and char slightly against the pot. The smoke generated rises through the foil tent, perfuming the entire pot with the legendary firewood party flavor.' }
    ],
    essentialIngredients: [
      { name: 'Long-grain parboiled rice (Golden Sella Basmati or Uncle Ben\'s)', prep: 'washed until water runs clear', amount: '600g', metric: '600g', imperial: '1.3 lbs', common: '3 cups' },
      { name: 'Red bell peppers (Tatashe)', prep: 'stemmed, seeded, blended', amount: '4 large', metric: '600g', imperial: '1.3 lbs', common: '4 peppers' },
      { name: 'Roma plum tomatoes', prep: 'blended with peppers', amount: '5 medium', metric: '400g', imperial: '14 oz', common: '5 tomatoes' },
      { name: 'Red onions', prep: 'divided (1 blended + 1 finely sliced for frying)', amount: '2 medium', metric: '250g', imperial: '8.8 oz', common: '2 onions' },
      { name: 'Scotch bonnet peppers (Atarodo / Habanero)', prep: 'blended (adjust for heat)', amount: '2 peppers', metric: '20g', imperial: '0.7 oz', common: '2 chiles' },
      { name: 'Tomato paste (Tin tomato)', prep: 'concentrated', amount: '1/2 cup', metric: '140g', imperial: '5 oz', common: '1/2 cup' },
      { name: 'Vegetable oil or neutral oil', prep: 'for frying tomato base', amount: '1/2 cup', metric: '120ml', imperial: '4 fl oz', common: '1/2 cup' },
      { name: 'Rich seasoned chicken stock', prep: 'piping hot, flavorful', amount: '3 cups', metric: '720ml', imperial: '24 fl oz', common: '3 cups' },
      { name: 'Nigerian / Jamaican curry powder', prep: 'yellow curry blend', amount: '1 tbsp', metric: '8g', imperial: '0.3 oz', common: '1 tbsp' },
      { name: 'Dried thyme', prep: 'aromatic herb', amount: '1 tbsp', metric: '5g', imperial: '0.18 oz', common: '1 tbsp' },
      { name: 'Dried bay leaves', prep: 'essential aromatic', amount: '3 leaves', metric: '1g', imperial: '0.04 oz', common: '3 leaves' },
      { name: 'Chicken bouillon cubes (Maggi / Knorr)', prep: 'crumbled', amount: '3 cubes', metric: '12g', imperial: '0.4 oz', common: '3 cubes' },
      { name: 'Unsalted butter', prep: 'stirred in at the end for gloss', amount: '2 tbsp', metric: '30g', imperial: '1 oz', common: '2 tbsp' },
      { name: 'Fine sea salt & White pepper', prep: 'seasoning', amount: '1 tsp salt + 1/2 tsp white pepper', metric: '7g', imperial: '0.25 oz', common: 'mixed' }
    ],
    steps: [
      {
        step: 1,
        title: 'FRY ONIONS, TOMATO PASTE & BOILED PEPPER BASE',
        whatYouNeed: ['Dutch oven', '1/2 cup oil', 'Sliced red onion', '1/2 cup tomato paste', 'Boiled pepper puree', 'Curry powder, Thyme, Bay leaves'],
        description: 'Heat 1/2 cup vegetable oil in the Dutch oven over medium heat. Add sliced red onion and fry for 5 minutes until soft and translucent. Stir in 1/2 cup tomato paste and fry for 5 to 7 minutes, stirring constantly, until the paste darkens from bright red to deep brick-red and separates into tiny oil-curd granules. Pour in the reduced pepper puree, curry powder, dried thyme, bay leaves, crumbled bouillon cubes, and salt. Fry over medium heat for 15 minutes, stirring frequently, until the sauce darkens, reduces, and oil floats to the top.',
        howToDoIt: 'Frying the tomato paste and pepper sauce thoroughly ("cooking out the raw taste") eliminates sour acidity and caramelizes sugars into a deep, savory, sweet stew.',
        heat: 'Medium Heat',
        duration: 25,
        visualCues: 'Deep crimson-red sauce thickens into a glistening, bubbling stew; bright orange-red oil floats to the surface.',
        hear: 'Steady, sputtering frying sound as moisture evaporates.',
        smell: 'Sweet fried peppers, curry powder, thyme, and spicy Scotch bonnets.',
        textureCheck: 'Thick, jammy red stew with visible oil separation.',
        whatShouldThisLookLike: 'A rich, dark red fried pepper stew.',
        tip: 'Taste the sauce before adding rice! It should taste slightly over-salted and intensely flavorful, because the rice grains will absorb much of the seasoning.',
        commonMistake: 'Under-frying the tomato paste, resulting in sour, acidic jollof rice.',
        moveOnWhen: 'Sauce is dark brick-red and oil floats on top.',
        quickInstructions: 'Fry sliced onion 5 mins, fry tomato paste 5 mins until dark, add pepper puree and spices; fry 15 mins until oil separates.'
      },
      {
        step: 2,
        title: 'TOAST RICE IN STEW & ADD HOT CHICKEN STOCK',
        whatYouNeed: ['Washed drained parboiled rice', 'Fried pepper stew in pot', '3 cups hot chicken stock'],
        description: 'Pour the washed, well-drained parboiled rice directly into the fried stew. Stir thoroughly with a wooden paddle for 2 to 3 minutes over medium heat until every single rice grain is coated in the red oil and lightly toasted. Pour in 3 cups of boiling-hot chicken stock. Stir once to distribute evenly. The liquid should be just level with the top of the rice (about 1cm above the rice). Bring to a vigorous boil.',
        howToDoIt: 'Toasting the grains in the hot pepper oil coats them in fat, preventing starch from leaking out and ensuring grains stay separate.',
        heat: 'Medium-High to Boil',
        duration: 5,
        visualCues: 'Bright orange-red boiling broth with grains of rice visible just beneath the bubbling surface.',
        smell: 'Rich chicken broth and savory spiced pepper stew.',
        textureCheck: 'Evenly distributed rice grains in bubbling liquid.',
        whatShouldThisLookLike: 'Boiling red rice broth in the pot.',
        tip: 'Do not drown the rice in broth! Jollof rice must steam in a small amount of liquid. Too much liquid creates soggy porridge.',
        commonMistake: 'Adding cold stock, which drops the pot temperature and causes grains to absorb water without cooking.',
        moveOnWhen: 'Liquid is boiling vigorously.',
        quickInstructions: 'Toast rice in stew 2 mins, pour in 3 cups boiling stock (liquid level with rice), bring to rapid boil.'
      },
      {
        step: 3,
        title: 'SEAL WITH FOIL TENT & STEAM ON LOW FOR 30 MINUTES',
        whatYouNeed: ['Aluminum foil sheet', 'Heavy tight-fitting lid'],
        description: 'Immediately cover the top of the pot with a large sheet of aluminum foil, crimping the edges tightly over the rim. Press the heavy lid firmly on top of the foil to create an airtight seal. Reduce burner heat to its lowest setting (Low Heat). Let cook completely undisturbed for 25 to 30 minutes. DO NOT OPEN THE LID!',
        howToDoIt: 'The airtight foil seal traps high-pressure steam, forcing the concentrated pepper reduction directly into the core of the parboiled rice grains.',
        heat: 'Low Heat',
        duration: 30,
        visualCues: 'Steam puffs gently from the edges of the sealed foil; no boil-over.',
        smell: 'Steaming jollof rice, thyme, and sweet peppers.',
        textureCheck: 'Grains are absorbing liquid and swelling inside the sealed pot.',
        whatShouldThisLookLike: 'Tightly sealed pot steaming on low heat.',
        tip: 'Resist the urge to open the lid! Peeking releases the trapped steam and extends cooking time significantly.',
        commonMistake: 'Cooking on medium heat without a seal, boiling away the liquid and scorching the bottom before the rice is cooked.',
        moveOnWhen: 'Timer reaches 30 minutes.',
        quickInstructions: 'Cover pot tightly with aluminum foil, press lid on firmly, cook on lowest heat for 30 minutes without opening.'
      },
      {
        step: 4,
        title: 'THE "PARTY SMOKE" SCORCH & BUTTER FLUFF',
        whatYouNeed: ['Cooked jollof rice', '2 tbsp butter', 'Fork or wooden paddle'],
        description: 'Remove the lid and foil. The rice grains should be plump, tender, separate, and bright orange-red with all liquid absorbed. Scatter 2 tbsp butter on top. Now, replace the foil and lid, turn heat up to MEDIUM-HIGH for strictly 5 to 7 minutes. Listen for a loud, crackling sizzle and smell a distinct woodsmoke aroma as the bottom layer of rice scorches against the pot. Turn off heat, let rest 10 minutes, then fluff with a fork, folding the smoky aroma through all the grains.',
        howToDoIt: 'The intentional bottom burn produces the authentic woodfire party smokiness that elevates ordinary jollof rice into legendary party jollof!',
        heat: 'Medium-High for 5 mins, then Off',
        duration: 15,
        visualCues: 'Glistening, vibrant orange-red grains that stand separate; charred dark bottom crust (the prize!).',
        hear: 'Crackling, popping sizzle as bottom grains scorch.',
        smell: 'Incredible, authentic West African party woodsmoke and sweet spiced rice.',
        textureCheck: 'Al dente, firm, tender grains with zero mushiness, mixed with crispy crunchy burnt bits.',
        whatShouldThisLookLike: 'Glorious, smoking, vibrant West African party jollof rice.',
        tip: 'The scorched bottom layer is known as "the bottom of the pot" — diners in Lagos and Accra fight over these crispy smoky grains!',
        commonMistake: 'Burning the rice for 15 minutes instead of 5, turning smoky aroma into acrid bitter ash.',
        moveOnWhen: 'Fluffed, butter melted, and rested 10 minutes.',
        quickInstructions: 'Add butter, scorch bottom on medium-high for 5 mins until crackling and smoky, turn off heat, rest 10 mins, fluff with fork.'
      }
    ],
    commonMistakes: [
      { mistake: 'Using raw white basmati', remedy: 'Use long-grain parboiled rice (Golden Sella). Parboiled rice holds its shape in tomato sauce.' },
      { mistake: 'Too much liquid', remedy: 'Liquid should only be level with the rice. Trapped steam does the cooking.' }
    ],
    troubleshooting: [
      {
        problem: 'Rice is still slightly hard in the center but liquid is gone',
        whatHappened: 'Moisture evaporated too quickly.',
        whyItHappened: 'The pot was not sealed tightly enough.',
        whatToDoNow: 'Sprinkle 1/4 cup boiling water or stock over the top, re-seal tightly with foil and lid, and steam on low for 8 more minutes.',
        howToPrevent: 'Always use heavy aluminum foil to create a complete airtight seal.'
      }
    ],
    substitutions: [
      { original: 'Scotch bonnet pepper', substitute: 'Habanero pepper', notes: 'Identical fruity heat profile.' },
      { original: 'Golden Sella Basmati', substitute: 'Converted long-grain parboiled rice (Uncle Ben\'s)', notes: 'Classic reliable texture.' }
    ],
    safetyNotes: ['Wear gloves when mincing Scotch bonnet peppers; avoid touching face.'],
    servingGuide: {
      restingTime: 'Rest 10 minutes before serving.',
      temperature: 'Steaming hot.',
      garnishing: 'Sliced sweet red onions and fresh tomato wheels.',
      accompaniments: 'Fried sweet plantains (Dodo), crispy fried chicken, grilled suya beef, and coleslaw.'
    }
  },

  // 6. BURGERS (Classic All-American Smashed Cheeseburger)
  {
    id: 'burgers',
    name: 'Classic All-American Smashed Cheeseburger (Crispy Lacy-Edged Double Smash Burger)',
    cuisine: 'American',
    region: 'United States (Midwest / Oklahoma)',
    servings: 4,
    prepTime: 15,
    cookTime: 10,
    difficulty: 'Easy',
    overview: {
      summary: 'The ultimate pinnacle of burger science: freshly ground 80/20 beef chuck loosely portioned into chilled spheres, smashed wafer-thin with immense pressure onto a screaming-hot dry cast-iron griddle. Searing creates an extraordinary, deeply caramelized, crispy, lacy-edged crust (the Maillard miracle), flipped and blanketed with real American cheese until gooey and molten, stacked double in a toasted buttered potato bun with secret special sauce, pickles, and crisp iceberg lettuce.',
      appearance: 'Twin paper-thin beef patties with jagged, dark mahogany, crispy lacy edges draped in glistening, molten yellow American cheese, stacked inside a glossy toasted potato bun.',
      texture: 'Explosive textural contrast: shatteringly crispy caramelized meat edges giving way to juicy beef, gooey melted cheese, and a pillowy soft warm bun.',
      flavor: 'Deeply savory caramelized beef, salty sharp melted cheese, sweet tangy special sauce, and sour pickle crunch.',
      restingTimeMinutes: 1
    },
    equipment: [
      { name: 'Heavy cast-iron skillet or flat steel plancha/griddle', purpose: 'Essential for massive heat retention to sear wafer-thin patties in under 90 seconds.' },
      { name: 'Heavy flat metal burger press or heavy flat-edged steel spatula', purpose: 'To exert extreme downward smashing force without flexing.' },
      { name: 'Parchment paper squares', purpose: 'Placed between press and raw meat so beef does not stick to the smasher.' }
    ],
    beforeYouStart: [
      { task: 'Portion 600g cold 80/20 ground beef chuck loosely into eight 75g (2.6 oz) balls (DO NOT COMPACT!).', durationMinutes: 5 },
      { task: 'Butter and toast 4 Martin\'s potato buns on a griddle until golden-brown.', durationMinutes: 3 },
      { task: 'Whisk special burger sauce: 1/4 cup mayo, 1 tbsp ketchup, 1 tbsp sweet pickle relish, 1 tsp yellow mustard, 1/2 tsp vinegar, and pinch of garlic powder.', durationMinutes: 3 }
    ],
    ingredientPrepGuide: [
      { item: 'THE 80/20 CHUCK RULE: Loose Balls Only!', technique: 'Never pre-shape smash burgers into flat hamburger patties! Gently cup the meat into loose, cold spheres without packing or squeezing. Packing warms the fat and aligns proteins into a tough, rubbery hockey puck. Loose spheres allow the meat to shear outward into jagged lacy edges when smashed.' },
      { item: 'The 10-Second High-Pressure Smash', technique: 'Place a parchment square over the meat ball on the screaming-hot dry cast iron. Press straight down with your entire body weight for 10 seconds, flaring out the edges until wafer-thin (under 5mm). Smash only during the first 10 seconds while the meat is raw — NEVER press down after the meat has begun cooking or all juices will escape!' }
    ],
    essentialIngredients: [
      { name: 'Ground beef chuck (80% lean / 20% fat)', prep: 'freshly ground, kept very cold, loosely rolled into balls', amount: '600g (eight 75g balls)', metric: '600g', imperial: '1.3 lbs', common: '8 balls' },
      { name: 'American cheese slices (Deli-style Kraft Deluxe)', prep: 'essential for emulsified melt', amount: '8 slices', metric: '160g', imperial: '5.6 oz', common: '8 slices' },
      { name: 'Martin\'s potato sandwich rolls / buns', prep: 'soft potato buns, buttered and toasted', amount: '4 buns', metric: '4 buns', imperial: '4 buns', common: '4 buns' },
      { name: 'Coarse kosher salt & Freshly cracked black pepper', prep: 'aggressive seasoning', amount: '1 tbsp salt + 1 tsp pepper', metric: '15g', imperial: '0.5 oz', common: 'mixed' },
      { name: 'Dill pickle chips (Krinkle-cut)', prep: 'sour crunchy pickles', amount: '16 slices', metric: '60g', imperial: '2.1 oz', common: '16 slices' },
      { name: 'Iceberg lettuce', prep: 'finely shredded', amount: '1 cup', metric: '50g', imperial: '1.8 oz', common: '1 cup' },
      { name: 'Special burger sauce', prep: 'mayo, ketchup, relish, mustard', amount: '1/2 cup', metric: '120ml', imperial: '4 fl oz', common: '1/2 cup' },
      { name: 'Butter', prep: 'for toasting buns', amount: '2 tbsp', metric: '30g', imperial: '1 oz', common: '2 tbsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'TOAST POTATO BUNS IN BUTTER',
        whatYouNeed: ['Cast-iron skillet', '2 tbsp butter', '4 split potato buns'],
        description: 'Melt 1 tbsp butter in the cast-iron skillet over medium heat. Place split potato buns cut-side down. Toast for 60 to 90 seconds until deep golden-brown with a crisp buttery rim. Transfer buns to a board. Slather special sauce across both top and bottom buns. Layer 4 dill pickle slices on each bottom bun.',
        howToDoIt: 'A butter-toasted bun creates a crispy barrier that prevents burger juices and sauce from turning the bread soggy.',
        heat: 'Medium Heat',
        duration: 3,
        visualCues: 'Deep golden-amber toasted face with soft, pillowy yellow crown.',
        smell: 'Toasted sweet bread and melted butter.',
        textureCheck: 'Crisp toasted face, cloud-soft bun.',
        whatShouldThisLookLike: 'Four golden-toasted buns dressed with sauce and pickles.',
        tip: 'Always prepare your buns completely before cooking the patties — smash patties cook in under 2 minutes!',
        commonMistake: 'Using dry untoasted buns, which dissolve into mush under the juicy beef.',
        moveOnWhen: 'Buns are toasted and dressed.',
        quickInstructions: 'Toast buns in butter 90 secs until golden, slather with special sauce, add pickles to bottom bun.'
      },
      {
        step: 2,
        title: 'THE SMASH: HIGH PRESSURE ON DRY CAST IRON',
        whatYouNeed: ['Screaming-hot cast-iron skillet (230°C / 450°F)', 'Chilled beef balls (2 at a time)', 'Parchment square', 'Heavy burger press', 'Salt & Pepper'],
        description: 'Heat cast-iron skillet over high heat until smoking hot (dry — no oil!). Place 2 cold beef balls on the iron, spaced 10cm apart. Lay a piece of parchment paper over one ball. Press down with your burger press using extreme downward body weight for strictly 10 seconds, flaring out the edges until the patty is wafer-thin (under 5mm) with ragged, lacy edges. Repeat with second ball. Immediately season generously with kosher salt and black pepper.',
        howToDoIt: 'The extreme smash against dry scorching iron forces the ground meat into microscopic contact with the metal, triggering the fastest Maillard browning possible.',
        heat: 'High Heat (Smoking Hot)',
        duration: 2,
        visualCues: 'A wafer-thin patty with jagged, ultra-thin lacy edges sizzling vigorously against the dark iron.',
        hear: 'Deafening, explosive, crackling sizzle upon contact.',
        smell: 'Intense aroma of seared beef caramelizing against cast iron.',
        textureCheck: 'Thin patty cooking rapidly.',
        whatShouldThisLookLike: 'Wafer-thin, sizzling patties with ragged edges.',
        tip: 'Smash immediately upon touching the iron — once the fat melts, you can no longer smash without expelling juice!',
        commonMistake: 'Oiling the pan — dry iron allows the meat to stick firmly, building the prized dark crust.',
        moveOnWhen: 'Patties are smashed wafer-thin and seasoned.',
        quickInstructions: 'Place cold meat balls on dry smoking skillet, cover with parchment, smash with heavy press 10 secs until wafer-thin; season.'
      },
      {
        step: 3,
        title: 'SCRAPE CRUST, FLIP & MELT AMERICAN CHEESE',
        whatYouNeed: ['Sharp, stiff metal spatula', 'American cheese slices (2 slices)'],
        description: 'Cook undisturbed for 90 seconds until the edges are dark mahogany and crispy, and gray bubbling juices appear through the top. Using a sharp, stiff metal spatula held at a 30-degree angle, scrape firmly beneath the patty to release the entire caramelized brown crust from the iron without leaving it behind. Flip in one motion. Immediately place a slice of American cheese on each patty. Cook for 45 seconds until cheese is completely melted and gooey.',
        howToDoIt: 'You must scrape aggressively against the steel with your spatula blade to harvest the dark brown crust — that crust holds 90% of the burger\'s flavor!',
        heat: 'High Heat',
        duration: 2,
        visualCues: 'A solid, glistening, mahogany-brown caramelized crust covers the entire flipped side; cheese melts into glossy yellow curtains.',
        hear: 'Brisk, frying sizzle.',
        smell: 'Rich roasted caramelized beef and melted cheese.',
        textureCheck: 'Crunchy lacy edges with gooey, molten cheese.',
        whatShouldThisLookLike: 'Crispy-crusted patties draped in molten cheese.',
        tip: 'Stack one cheesy patty directly on top of the other cheesy patty on the griddle to make a double smash stack!',
        commonMistake: 'Flipping gently with a plastic spatula, leaving the caramelized crust stuck to the bottom of the pan.',
        moveOnWhen: 'Crust is scraped, patties flipped, cheese melted.',
        quickInstructions: 'Cook 90 secs, scrape crust firmly with stiff metal spatula, flip, top with American cheese, cook 45 secs until melted.'
      },
      {
        step: 4,
        title: 'STACK IN BUN & SERVE IMMEDIATELY',
        whatYouNeed: ['Double cheesy smash patty stack', 'Dressed potato bun', 'Shredded lettuce'],
        description: 'Using your spatula, lift the double cheesy patty stack and place directly onto the pickle-lined bottom bun. Top with shredded iceberg lettuce and close with the sauced top bun. Press down gently with your palm to marry the bun and hot cheese. Serve immediately with hot fries.',
        howToDoIt: 'American cheese contains sodium citrate, which melts into a silky liquid emulsion that glues the two patties and bun together.',
        heat: 'No Heat',
        duration: 1,
        visualCues: 'A towering double cheeseburger with glossy bun, melting yellow cheese ribbons, and crispy lacy brown edges.',
        smell: 'Hot seared beef, melted cheese, tangy sauce, and toasted potato bun.',
        textureCheck: 'Crisp crunch on every bite followed by juicy beef, gooey cheese, and cloud-soft bun.',
        whatShouldThisLookLike: 'The holy grail American double smash burger.',
        tip: 'Eat immediately while the lacy edges are shatteringly crisp and the cheese is molten.',
        commonMistake: 'Letting the burger sit for 10 minutes, where steam softens the crispy edges.',
        moveOnWhen: 'Assembled and served immediately.',
        quickInstructions: 'Stack double cheesy patties onto dressed bottom bun, add lettuce, top with bun, press gently and enjoy hot.'
      }
    ],
    commonMistakes: [
      { mistake: 'Pre-forming burger patties', remedy: 'Keep meat in loose cold balls. Smash firmly on the hot iron to create lacy edges.' },
      { mistake: 'Using a non-stick pan', remedy: 'Non-stick pans cannot take the extreme heat needed for smashing and won\'t build a hard crust.' }
    ],
    troubleshooting: [
      {
        problem: 'The delicious brown crust stuck to the pan when flipping',
        whatHappened: 'Crust tore away from the meat.',
        whyItHappened: 'The spatula was too flexible or dull.',
        whatToDoNow: 'Scrape the crust off the pan with a metal scraper and lay it on top of the cheese.',
        howToPrevent: 'Use a rigid, sharp, flat-edged metal spatula and scrape with firm pressure.'
      }
    ],
    substitutions: [
      { original: 'American cheese', substitute: 'Mild Cheddar, Monterey Jack, or Cooper Sharp', notes: 'Cooper Sharp melts beautifully like American with real aged cheddar bite.' },
      { original: 'Potato rolls', substitute: 'Brioche bun or soft sesame seed bun', notes: 'Toasts well in butter.' }
    ],
    safetyNotes: ['Screaming-hot cast iron produces smoke; turn range hood exhaust to high.'],
    servingGuide: {
      restingTime: '0 minutes — eat within 60 seconds.',
      temperature: 'Piping hot.',
      garnishing: 'Extra dill pickles and special sauce.',
      accompaniments: 'Crisp shoestring french fries, onion rings, and an ice-cold chocolate milkshake or soda.'
    }
  }
];
