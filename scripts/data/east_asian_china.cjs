// Chinese culinary recipes (11 dishes)
module.exports = [
  // 1. DIM SUM (Cantonese Har Gow & Siu Mai)
  {
    id: 'dim-sum',
    name: 'Artisan Cantonese Dim Sum (Har Gow & Siu Mai)',
    cuisine: 'Chinese',
    region: 'China (Guangdong / Hong Kong)',
    servings: 4,
    prepTime: 45,
    cookTime: 15,
    difficulty: 'Hard',
    overview: {
      summary: 'The twin crowns of Cantonese Yum Cha teahouse culture: crystal shrimp dumplings (Har Gow) wrapped in translucent pleated wheat-and-tapioca starch skins with sweet bamboo-flaked shrimp, alongside open-topped pork and shrimp dumplings (Siu Mai) wrapped in yellow egg skins, crowned with flying fish roe and steamed in fragrant bamboo baskets.',
      appearance: 'A steaming bamboo basket presenting glistening translucent Har Gow showing coral shrimp within, nestled alongside pleated golden-yellow Siu Mai cups dotted with orange tobiko.',
      texture: 'Har Gow wrapper has a delicate chew with snap and pop from whole fresh prawns; Siu Mai is juicy, bouncy, and succulent with rich pork fat.',
      flavor: 'Pure clean sea sweetness from fresh prawns, savory pork richness, fragrant toasted sesame oil, white pepper, and ginger notes.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Traditional 10-inch bamboo steamer baskets with lid', purpose: 'Circulates moist convective steam without condensation dripping onto delicate dumpling skins.' },
      { name: 'Perforated parchment steamer liners (or cabbage leaves)', purpose: 'Prevents delicate starch wrappers from sticking to the bamboo slats.' },
      { name: 'Chinese cleaver (caidao) with oiled flat blade', purpose: 'For pressing starch dough balls into paper-thin translucent circular skins in one rocking stroke.' },
      { name: 'Large wok with water ring', purpose: 'Holds boiling water beneath the bamboo steamer stack.' }
    ],
    beforeYouStart: [
      { task: 'Peel, devein, and pat 400g raw tiger prawns bone-dry with paper towels (moisture kills bounce).', durationMinutes: 10 },
      { task: 'Finely mince 100g pork fatback into 2mm bits (essential for authentic succulent juicy Siu Mai texture).', durationMinutes: 5 },
      { task: 'Measure 100g wheat starch (tung min fun) and 40g tapioca starch for Har Gow crystal dough.', durationMinutes: 3 }
    ],
    ingredientPrepGuide: [
      { item: 'Prawn "Tan-Xing" (Bounce) Technique', technique: 'Pound half the prawns with the flat of a cleaver, then whip and throw the prawn paste repeatedly against the sides of the bowl for 30 cycles until myosin develops into a sticky, elastic paste that "bounces" against the teeth when bitten.' },
      { item: 'Crystal Dough (Tan-Mian)', technique: 'Must use 100% boiling water (100°C) straight off the boil to scald the wheat and tapioca starch instantly, pre-gelatinizing the starches to form a translucent, workable dough.' }
    ],
    essentialIngredients: [
      { name: 'Raw tiger prawns (divided)', prep: 'peeled, deveined, patted bone-dry', amount: '400g', metric: '400g', imperial: '14 oz', common: '400g' },
      { name: 'Ground pork shoulder (80/20 lean to fat)', prep: 'chilled for Siu Mai', amount: '200g', metric: '200g', imperial: '7 oz', common: '200g' },
      { name: 'Pork fatback', prep: 'diced into 2mm tiny pearls', amount: '50g', metric: '50g', imperial: '1.8 oz', common: '1/4 cup' },
      { name: 'Bamboo shoots (canned)', prep: 'rinsed, boiled 3 mins, finely diced', amount: '50g', metric: '50g', imperial: '1.8 oz', common: '1/3 cup' },
      { name: 'Wheat starch (Tung Min Fun)', prep: 'for Har Gow crystal skin', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '3/4 cup' },
      { name: 'Tapioca starch', prep: 'adds stretch & elasticity', amount: '40g', metric: '40g', imperial: '1.4 oz', common: '1/4 cup' },
      { name: 'Boiling water (rolling boil)', prep: 'must be 100°C to scald starch', amount: '180ml', metric: '180ml', imperial: '6 fl oz', common: '3/4 cup' },
      { name: 'Yellow round Siu Mai wrappers (egg wanton skins)', prep: 'trimmed into 8cm circles', amount: '16 wrappers', metric: '16 wrappers', imperial: '16 wrappers', common: '16 wrappers' },
      { name: 'Toasted sesame oil', prep: 'pure dark sesame', amount: '1.5 tbsp', metric: '22ml', imperial: '0.75 fl oz', common: '1.5 tbsp' },
      { name: 'Shaoxing rice wine', prep: 'for seasoning filling', amount: '1 tbsp', metric: '15ml', imperial: '0.5 fl oz', common: '1 tbsp' },
      { name: 'Ground white pepper', prep: 'finely ground', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Tobiko (orange flying fish roe) or finely minced carrot', prep: 'for garnishing Siu Mai tops', amount: '2 tbsp', metric: '25g', imperial: '0.9 oz', common: '2 tbsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'WHIP PRAWN & PORK FILLINGS FOR MAXIMUM BOUNCE',
        whatYouNeed: ['Prawns', 'Ground pork', 'Pork fat', 'Bamboo shoots', 'Shaoxing wine', 'Sesame oil', 'White pepper', 'Salt, sugar'],
        description: 'For Har Gow: Chop 200g prawns into small chunks, mash remaining 100g with cleaver into paste; mix with bamboo shoots, 1/2 tsp salt, 1/2 tsp sugar, 1/2 tsp white pepper, and 1 tsp sesame oil. Whip vigorously in circles for 2 minutes. For Siu Mai: Mix pork, 100g chopped prawns, pork fat, 1 tbsp Shaoxing wine, 1 tsp sesame oil, 1 tsp cornstarch; slap against bowl 20 times until tacky. Chill both fillings 30 minutes.',
        howToDoIt: 'Whipping and slapping aligns meat proteins into a bouncy elastic matrix ("tan-xing") rather than crumbly meat.',
        heat: 'No Heat',
        duration: 10,
        visualCues: 'Fillings become intensely sticky, pale, and glossy.',
        smell: 'Aromatic white pepper, sweet seafood, and nutty sesame.',
        textureCheck: 'Dense, springy, and adhesive.',
        whatShouldThisLookLike: 'Two bowls of chilled, bouncy dim sum fillings.',
        tip: 'Always keep dumpling fillings chilled; warm fat melts and causes greasy, leaking dumplings.',
        commonMistake: 'Using wet prawns — trapped water turns filling watery and dissolves delicate wrappers.',
        moveOnWhen: 'Fillings are cohesive, bouncy, and chilled.',
        quickInstructions: 'Whip prawn and pork fillings separately until sticky and bouncy; chill 30 mins.'
      },
      {
        step: 2,
        title: 'SCALD & KNEAD HAR GOW CRYSTAL DOUGH',
        whatYouNeed: ['100g wheat starch', '40g tapioca starch', '180ml boiling water (100°C)', '1 tsp lard or oil'],
        description: 'In a heatproof bowl, combine wheat starch and tapioca starch. Pour 180ml rolling boiling water all at once over the starches. Stir rapidly with chopsticks for 30 seconds until a translucent shaggy dough forms. Cover bowl with a plate and rest 5 minutes to trap steam. Add 1 tsp oil/lard and knead on clean board for 3 minutes until satin-smooth. Roll into a cylinder and wrap in clingfilm.',
        howToDoIt: 'Rolling boiling water pre-gelatinizes the starch granules. If water is lukewarm (even 80°C), dough will crumble and refuse to stretch.',
        heat: 'Rolling Boil for water',
        duration: 8,
        visualCues: 'Chalky powder transforms into a soft, snow-white, pliable, translucent putty.',
        textureCheck: 'Soft as an earlobe, smooth, non-sticky.',
        whatShouldThisLookLike: 'A smooth white ball of elastic crystal dough.',
        tip: 'Always keep unused crystal dough covered in plastic wrap; it dries out in minutes under air.',
        commonMistake: 'Using warm tap water — the starch won’t gelatinize, creating a puddle of unusable paste.',
        moveOnWhen: 'Dough is smooth, supple, and wrapped.',
        quickInstructions: 'Pour 180ml boiling water over starches, stir, rest 5 mins, knead with oil until smooth, wrap tightly.'
      },
      {
        step: 3,
        title: 'CLEAVER-PRESS SKINS & PLEAT HAR GOW',
        whatYouNeed: ['Dough cylinder', 'Chinese cleaver', 'Drop of oil', 'Prawn filling'],
        description: 'Cut dough into 12 equal discs (12g each). Rub blade of cleaver with a drop of oil. Press flat blade firmly down on one dough ball and pivot sideways in a smooth arc to smear it into a paper-thin, 8cm translucent round circle. Lift with blade. Place 1 tbsp filling in center. Pleat 7 to 9 delicate folds along front edge only, pressing against flat back to form a translucent pleated bonnet shape.',
        howToDoIt: 'The cleaver smear technique achieves restaurant-thin skins that rolling pins cannot replicate without sticking.',
        heat: 'No Heat',
        duration: 15,
        visualCues: 'Paper-thin translucent skin with 7–9 tiny uniform pleats holding a pink prawn core.',
        textureCheck: 'Supple skin with firmly pinched seams.',
        whatShouldThisLookLike: 'Classic pleated translucent shrimp bonnets.',
        tip: 'Don\'t overfill — crystal skin has limited stretch compared to wheat flour dough.',
        commonMistake: 'Rolling with a floured rolling pin, which dries the skin and causes it to crack during pleating.',
        moveOnWhen: '12 Har Gow are pleated and arranged on parchment.',
        quickInstructions: 'Smear dough ball flat with oiled cleaver blade, add filling, pleat 7-9 folds into bonnet.'
      },
      {
        step: 4,
        title: 'WRAP OPEN-TOPPED SIU MAI CUPS',
        whatYouNeed: ['16 yellow Siu Mai wrappers', 'Pork & prawn filling', 'Butter knife or spoon', 'Tobiko'],
        description: 'Hold a wrapper in your left hand, curling fingers into a loose "O" ring. Place 1.5 tbsp filling in center. Push filling downward into the finger cylinder with a butter knife while squeezing your fingers to pleat the wrapper upward into a cylindrical open-topped cup. Flatten bottom on board so it stands upright. Smooth top with wet knife. Crown center with 1/4 tsp orange tobiko.',
        howToDoIt: 'Cradling in your hand naturally forms the signature pleated cup with meat filling exposed on top.',
        heat: 'No Heat',
        duration: 10,
        visualCues: 'Upright yellow pleated cylinders with glistening exposed meat crowns dotted with orange tobiko.',
        textureCheck: 'Firm, packed cylinders that stand tall on their own.',
        whatShouldThisLookLike: 'Iconic open-topped yellow dim sum cups.',
        tip: 'Ensure the top surface of the meat is packed flat and even so tobiko stays centered.',
        commonMistake: 'Leaving loose air gaps inside the cup, causing Siu Mai to slump during steaming.',
        moveOnWhen: '16 Siu Mai are wrapped, standing tall, and crowned with roe.',
        quickInstructions: 'Form wrapper into pleated cup around filling, flatten bottom, top with tobiko.'
      },
      {
        step: 5,
        title: 'STEAM TO TRANSLUCENT GLORY IN BAMBOO BASKETS',
        whatYouNeed: ['Wok with boiling water', 'Bamboo steamer baskets', 'Parchment liners', 'Dumplings'],
        description: 'Line bamboo steamer baskets with perforated parchment. Arrange Har Gow and Siu Mai leaving 2cm space between them. Stack baskets over a wok of furiously boiling water. Cover with bamboo lid. Steam over high heat: 6 minutes for Har Gow (skins will turn glassy and translucent showing pink shrimp); 8 minutes for Siu Mai.',
        howToDoIt: 'High heat steam cooks the prawns in minutes to preserve maximum crisp snap without toughening.',
        heat: 'High Heat (Vigorous Steam)',
        duration: 8,
        visualCues: 'Har Gow wrappers turn crystal-clear; coral shrimp glows through; Siu Mai wrappers cling tightly to juicy meat.',
        hear: 'Roaring steam and bubbling water.',
        smell: 'Sweet ocean shrimp, bamboo wood, and sesame.',
        textureCheck: 'Bouncy snap from prawns, juicy succulent pork.',
        whatShouldThisLookLike: 'Glistening, pristine, teahouse-quality dim sum basket.',
        tip: 'Serve directly inside the bamboo basket to retain heat and authentic teahouse aroma.',
        commonMistake: 'Over-steaming past 8 minutes — Har Gow skins will absorb excess moisture and dissolve into paste.',
        moveOnWhen: 'Har Gow is crystal translucent and Siu Mai is piping hot (74°C).',
        quickInstructions: 'Steam Har Gow 6 mins and Siu Mai 8 mins over high heat in bamboo baskets.'
      }
    ],
    commonMistakes: [
      { mistake: 'Har Gow skin tore and stuck to the basket.', remedy: 'No parchment liner was used or water was under-boiling. Always use oiled parchment and steam over rolling high heat.' },
      { mistake: 'Har Gow dough was brittle and broke when folded.', remedy: 'Water was not at a 100°C rolling boil when poured onto starch. The starch must be completely scalded.' }
    ],
    troubleshooting: [
      {
        problem: 'Har Gow skin feels thick, gummy, and rubbery',
        whatHappened: 'Skin was rolled too thick or dough had too much tapioca starch.',
        whyItHappened: 'Inadequate cleaver-smearing technique.',
        whatToDoNow: 'Enjoy with chili oil and soy sauce.',
        howToPrevent: 'Press dough ball with the cleaver blade until you can faintly see the blade surface through the dough.'
      }
    ],
    substitutions: [
      { original: 'Wheat starch (Tung Min Fun)', substitute: 'Cornstarch + Tapioca starch (equal parts)', notes: 'Acceptable emergency alternative, though wheat starch yields the unmatched crystal clarity.' },
      { original: 'Tobiko roe', substitute: 'Finely minced red carrot or green pea', notes: 'Traditional classic teahouse garnish.' }
    ],
    safetyNotes: [
      'Beware of escaping steam when unlidding bamboo baskets.'
    ],
    servingGuide: {
      restingTime: '1 minute.',
      garnishing: 'Tobiko roe, served with small saucers of Chiu Chow chili oil and sweet soy sauce.',
      plating: 'Serve directly in steaming bamboo baskets on tabletop.',
      temperature: 'Piping hot.',
      accompaniments: 'Hot pot of Jasmine, Pu-erh, or Tieguanyin tea.'
    }
  },

  // 2. DUMPLINGS (Northern Chinese Jiaozi - Pork & Cabbage / Chive)
  {
    id: 'dumplings',
    name: 'Northern Chinese Pork & Chive Dumplings (Jiaozi)',
    cuisine: 'Chinese',
    region: 'Northern China (Beijing / Shandong)',
    servings: 4,
    prepTime: 40,
    cookTime: 15,
    difficulty: 'Medium',
    overview: {
      summary: 'The soulful cornerstone of Chinese Lunar New Year feasts: handmade rolled dumpling skins stuffed with savory minced pork, garlic chives (jiucai), ginger, and aromatic ginger-scallion water, boiled to plump tender perfection (Shui Jiao) and served with aged Chinkiang black vinegar, garlic, and chili oil.',
      appearance: 'Plump, glossy white ingots with crescent pleats arranged on a platter, releasing steam and paired with dark aromatic dipping vinegar.',
      texture: 'Tender, satisfyingly chewy wrapper with elastic bite ("dao-jin") yielding to an explosion of fragrant savory meat juice.',
      flavor: 'Rich pork savoriness, pungent garlicky chives, warming ginger, and tart complex black vinegar.',
      restingTimeMinutes: 3
    },
    equipment: [
      { name: 'Small tapered Chinese dumpling rolling pin (Ganzhang)', purpose: 'Allows rapid rolling while rotating dough circle to create thin edges and thick centers.' },
      { name: 'Large 6-quart stockpot', purpose: 'Provides plenty of boiling water so dumplings don\'t crowd and stick.' },
      { name: 'Spider strainer or slotted ladle', purpose: 'Lifts delicate boiled dumplings safely without tearing skins.' }
    ],
    beforeYouStart: [
      { task: 'Knead 300g all-purpose flour and 160ml room-temperature water into a smooth dough; rest covered for 30 minutes to relax gluten.', durationMinutes: 35 },
      { task: 'Steep 2 smashed scallions and 15g smashed ginger in 100ml warm water for 15 minutes (ginger-scallion water).', durationMinutes: 15 },
      { task: 'Wash, dry completely, and finely chop 150g Chinese garlic chives (jiucai).', durationMinutes: 10 }
    ],
    ingredientPrepGuide: [
      { item: 'Beating In Ginger-Scallion Water (Da-Shui)', technique: 'Add ginger-scallion water to ground pork in 3 separate additions, vigorously stirring clockwise in one direction only. The meat will absorb the water completely, turning from dense grind into a soft, juicy emulsion that creates internal soup dumplings.' },
      { item: 'Rolling Technique (Thick Center, Thin Edges)', technique: 'Hold edge of dough round with left hand. Roll the small pin forward halfway toward the center with right hand, pull back, rotate dough 45 degrees, and roll again. This keeps the center thick to support the filling while edges are thin for delicate pleats.' }
    ],
    essentialIngredients: [
      { name: 'All-purpose flour', prep: 'unbleached, medium protein', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '2.5 cups' },
      { name: 'Room-temperature water', prep: 'for dough', amount: '160ml', metric: '160ml', imperial: '5.4 fl oz', common: '2/3 cup' },
      { name: 'Ground pork (70% lean / 30% fat)', prep: 'chilled', amount: '350g', metric: '350g', imperial: '12 oz', common: '350g' },
      { name: 'Chinese garlic chives (Jiucai)', prep: 'washed, dried bone-dry, finely chopped', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '2 cups chopped' },
      { name: 'Ginger-scallion steeped water', prep: 'infused aromatic water', amount: '80ml', metric: '80ml', imperial: '2.7 fl oz', common: '1/3 cup' },
      { name: 'Light soy sauce', prep: 'for savory seasoning', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp' },
      { name: 'Shaoxing rice wine', prep: 'aromatic cooking wine', amount: '1 tbsp', metric: '15ml', imperial: '0.5 fl oz', common: '1 tbsp' },
      { name: 'Toasted sesame oil', prep: 'for coating chives and filling', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp' },
      { name: 'Chinkiang black vinegar (Zhenjiang)', prep: 'for dipping sauce', amount: '60ml', metric: '60ml', imperial: '2 fl oz', common: '1/4 cup' },
      { name: 'Sichuan chili oil with sediment (Hongyou)', prep: 'for dipping', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp' },
      { name: 'Fresh garlic', prep: 'finely minced into paste for sauce', amount: '3 cloves', metric: '15g', imperial: '0.5 oz', common: '3 cloves' }
    ],
    steps: [
      {
        step: 1,
        title: 'EMULSIFY PORK & GINGER-SCALLION WATER',
        whatYouNeed: ['Ground pork', 'Ginger-scallion water', 'Soy sauce', 'Shaoxing wine', 'Salt, white pepper', 'Sesame oil'],
        description: 'Place ground pork in a large bowl with soy sauce, Shaoxing wine, 1 tsp salt, and 1/2 tsp white pepper. Pour in 1/3 of the ginger-scallion water. Stir vigorously in one clockwise direction with chopsticks until the liquid is fully absorbed. Repeat with remaining water in two more additions until the pork is pale, fluffy, and sticky. Stir in 1 tbsp sesame oil to seal.',
        howToDoIt: 'Unidirectional stirring develops protein fibrils that trap liquid droplets. When boiled, these droplets melt into hot, savory broth inside the dumpling.',
        heat: 'No Heat',
        duration: 8,
        visualCues: 'Pork turns from dense granular meat to a pale, fluffy, velvety paste that clings to the bowl.',
        smell: 'Ginger, scallion, and savory soy aroma.',
        textureCheck: 'Sticky, creamy, and gelatinous.',
        whatShouldThisLookLike: 'Juicy, seasoned, whipped meat paste.',
        tip: 'Always stir in only one direction; reversing directions tears the protein strands and releases trapped water.',
        commonMistake: 'Pouring all water in at once, causing meat to separate into unmixable chunks.',
        moveOnWhen: 'Meat has absorbed all liquid and is fluffy.',
        quickInstructions: 'Stir pork clockwise while adding ginger-scallion water in 3 additions until fluffy and sticky.'
      },
      {
        step: 2,
        title: 'TOSS CHIVES IN OIL & COMBINE FILLING',
        whatYouNeed: ['Chopped chives', '1 tbsp sesame oil', 'Seasoned pork paste'],
        description: 'Place dry chopped chives in a separate small bowl. Drizzle 1 tbsp sesame oil over the chives and toss gently to coat every piece in oil. Gently fold the oiled chives into the seasoned pork paste right before wrapping.',
        howToDoIt: 'Coating chives with oil creates a hydrophobic lipid barrier that prevents salt from drawing out moisture, keeping chives crisp and preventing watery filling.',
        heat: 'No Heat',
        duration: 3,
        visualCues: 'Glistening emerald chive specks evenly suspended throughout the pink pork paste.',
        smell: 'Fresh pungent garlic chive fragrance.',
        textureCheck: 'Evenly combined and moist.',
        whatShouldThisLookLike: 'Vibrant green-flecked pork dumpling filling.',
        tip: 'Never mix chives into salted pork hours in advance — fold them in right as you start rolling skins.',
        commonMistake: 'Salting chives directly, which causes them to weep cups of water into the filling.',
        moveOnWhen: 'Chives are folded in evenly.',
        quickInstructions: 'Toss chives in sesame oil, then fold into pork filling right before wrapping.'
      },
      {
        step: 3,
        title: 'ROLL DOUGH ROUNDS WITH THICK CENTERS',
        whatYouNeed: ['Rested dough', 'Rolling pin', 'Flour for dusting'],
        description: 'Roll rested dough into two long 2.5cm ropes. Cut into small 10g nuggets (approx 36 pieces). Dust with flour and press each nugget into a flat disc with your palm. Hold the edge of a disc with your left fingers. Roll the pin halfway to the center, pull back, rotate disc 45 degrees, and repeat 6–8 times to create an 8cm circle with a thick center (belly) and thin edges (lips).',
        howToDoIt: 'The thick belly prevents the heavy wet filling from tearing through the base, while thin edges fold into delicate, tender pleats.',
        heat: 'No Heat',
        duration: 15,
        visualCues: 'Concentric disc: opaque thicker center tapering to delicate, thin translucent perimeter.',
        textureCheck: 'Silky, elastic, and non-sticky.',
        whatShouldThisLookLike: 'Stack of circular handmade dumpling skins.',
        tip: 'Keep unwrapped dough balls covered under a damp towel so they don\'t develop a dry crust.',
        commonMistake: 'Rolling skins completely flat like tortillas — the bottoms will burst during boiling.',
        moveOnWhen: 'Dumpling skins are rolled.',
        quickInstructions: 'Cut dough into 10g nuggets; roll with pin rotating 45° to keep center thick and edges thin.'
      },
      {
        step: 4,
        title: 'PLEAT & PINCH THE JIAOZI SHUT',
        whatYouNeed: ['Dumpling skin', '1 tbsp filling', 'Floured tray'],
        description: 'Place 1 generous tablespoon of filling on center of skin. Fold in half. Pinch the top center together. Using your thumbs and index fingers, press both sides inwards toward the center in a firm, sweeping squeeze (the traditional two-thumb squeeze) or fold 3 pleats on each side toward the middle. Press seams firmly to create an airtight seal. Place on floured tray.',
        howToDoIt: 'Airtight pinching traps steam and expanding juices inside without letting boiling water enter.',
        heat: 'No Heat',
        duration: 15,
        visualCues: 'Plump crescent-shaped ingots with a proud bulging belly that sit upright on a flat base.',
        textureCheck: 'Airtight seal with no meat poking through seams.',
        whatShouldThisLookLike: 'Army of plump, handmade Chinese jiaozi.',
        tip: 'Fresh handmade skins need no water to seal — just press the fresh dough together.',
        commonMistake: 'Trapping air bubbles inside with the meat, which expand in boiling water and pop the dumpling open.',
        moveOnWhen: 'All 36 dumplings are pleated and resting.',
        quickInstructions: 'Place filling in center, fold, pinch center, pleat sides tightly shut into plump ingots.'
      },
      {
        step: 5,
        title: 'THE THREE-BOIL METHOD (SAN-GUO SHUI)',
        whatYouNeed: ['6-quart pot of boiling water', '1 tsp salt', '1 bowl of cold water (250ml)', 'Dumplings'],
        description: 'Bring a large pot of salted water to a rolling boil over high heat. Drop 18 dumplings into boiling water one by one. Stir gently with the back of a ladle along the pot bottom so they don\'t stick. Cover with lid. When water boils vigorously to a rolling boil again, pour in 80ml cold water (1st boil). Cover. When it boils a second time, add another 80ml cold water (2nd boil). When it boils a third time, add final 80ml cold water. When it returns to a boil, dumplings will float, puffed and translucent.',
        howToDoIt: 'The traditional "three-boil" technique lowers surface temperature to prevent wrappers from disintegrating while heat penetrates and cooks the dense raw pork core through.',
        heat: 'High Heat with cold water drops',
        duration: 7,
        visualCues: 'Dumplings float buoyantly on the surface, puffed like little pillows with wrinkled, translucent wrappers.',
        hear: 'Roaring rolling boil tempered by cold water splashes.',
        smell: 'Rich fragrant garlic chive and sweet dough aroma.',
        textureCheck: 'Tender chewy wrapper with plump firm interior.',
        whatShouldThisLookLike: 'Puffed, floating white dumplings glistening on the water surface.',
        tip: 'Never let dumplings boil aggressively without cold water additions or wrappers will turn mushy before meat is cooked.',
        commonMistake: 'Dumping 36 dumplings into a small pot — drops water temperature drastically and turns dumplings into a giant glued ball.',
        moveOnWhen: 'Dumplings float puffed and wrinkled after three water additions.',
        quickInstructions: 'Boil dumplings; add 80ml cold water every time it boils (3 times total) until dumplings float puffed.'
      },
      {
        step: 6,
        title: 'LIFT, DRESS & SERVE WITH BLACK VINEGAR',
        whatYouNeed: ['Spider strainer', 'Serving platter', 'Dipping bowls with Chinkiang vinegar, garlic, and chili oil'],
        description: 'Scoop floating dumplings out using a spider strainer, draining water thoroughly. Arrange on a wide platter. Serve immediately alongside individual dipping bowls filled with 2 tbsp Chinkiang black vinegar, 1 tsp minced fresh garlic, and 1 tsp fragrant chili oil.',
        howToDoIt: 'Tart black vinegar cuts through rich pork fat while raw garlic accentuates the fragrant chives.',
        heat: 'Off Heat',
        duration: 2,
        visualCues: 'Glistening white dumplings releasing fragrant steam next to deep dark mahogany dipping sauce.',
        smell: 'Tart woody vinegar, pungent garlic, and savory pork.',
        textureCheck: 'Chewy bite releasing hot savory broth.',
        whatShouldThisLookLike: 'Abundant festive platter of Northern Chinese boiled dumplings.',
        tip: 'Dip dumpling in vinegar, take a small bite to release steam, sip internal broth, then eat!',
        commonMistake: 'Letting drained dumplings sit piled in a colander, causing them to stick into one giant clump.',
        moveOnWhen: 'Served piping hot.',
        quickInstructions: 'Lift dumplings with spider strainer, plate immediately, serve with black vinegar and chili oil.'
      }
    ],
    commonMistakes: [
      { mistake: 'Dumplings burst open in the boiling water.', remedy: 'Seams were improperly pinched or air was trapped inside. Always press seams firmly with dry fingers.' },
      { mistake: 'Filling was dry, hard, and grainy.', remedy: 'No ginger-scallion water was beaten into the pork. Incorporating liquid is mandatory for juicy dumplings.' }
    ],
    troubleshooting: [
      {
        problem: 'Cooked dumplings stick together on the serving plate',
        whatHappened: 'Surface starch dried and bonded neighboring dumplings.',
        whyItHappened: 'Sitting stagnant without moisture or oil.',
        whatToDoNow: 'Drizzle 1/2 tsp toasted sesame oil over the platter and gently shake to coat.',
        howToPrevent: 'Drain thoroughly and serve immediately; or toss lightly with a few drops of sesame oil.'
      }
    ],
    substitutions: [
      { original: 'Chinese garlic chives (Jiucai)', substitute: 'Finely minced green cabbage (salted and squeezed dry) + 2 extra cloves garlic', notes: 'Pork and cabbage (Zhurou Baicai) is the other major classic Northern Chinese dumpling filling.' },
      { original: 'Chinkiang black vinegar', substitute: 'Balsamic vinegar mixed 50/50 with rice vinegar', notes: 'Provides rich malty acidity with gentle sweetness.' }
    ],
    safetyNotes: [
      'Pork filling must reach safe internal temperature of 74°C (165°F).'
    ],
    servingGuide: {
      restingTime: '1 minute.',
      garnishing: 'Serve alongside fresh crushed garlic cloves and chili oil.',
      plating: 'Large shallow ceramic platter with dumplings in concentric circles.',
      temperature: 'Piping hot.',
      accompaniments: 'Bowl of dumpling cooking water (Yuan Tang) — tradition says "Yuan Tang Hua Yuan Shi" (original soup digests original food).'
    }
  },

  // 3. FRIED RICE (Yangzhou Egg Fried Rice / Wok Hei)
  {
    id: 'fried-rice',
    name: 'Classic Yangzhou Fried Rice (Yangzhou Chaofan)',
    cuisine: 'Chinese',
    region: 'China (Jiangsu / Yangzhou)',
    servings: 4,
    prepTime: 20,
    cookTime: 10,
    difficulty: 'Medium',
    overview: {
      summary: 'The gold standard of Chinese wok mastery: day-old jasmine rice grains coated in beaten egg yolks ("Gold wrapped in Silver"), stir-fried over roaring wok heat with Chinese BBQ pork (Char Siu), plump prawns, sweet green peas, and scallions, achieving distinct individual grains infused with breath of the wok (Wok Hei).',
      appearance: 'Fluffy mound of vibrant golden rice with glistening coral shrimp, ruby-edged char siu cubes, emerald peas, and jade scallion rings.',
      texture: 'Dry, light, separate grains with tender chew, paired with snappy succulent prawns and tender sweet pork.',
      flavor: 'Smoky wok hei, savory pork, sweet seafood umami, nutty toasted egg, and fresh scallion sweetness.',
      restingTimeMinutes: 1
    },
    equipment: [
      { name: '14-inch round-bottom carbon steel wok (well-seasoned)', purpose: 'Heats instantly and imparts authentic smoky Wok Hei aroma.' },
      { name: 'Chinese wok spatula (Chaan)', purpose: 'Flips and tosses rice grains against the hot wok walls without crushing them.' },
      { name: 'High-BTU gas burner (or max power stove)', purpose: 'Delivers intense heat necessary to vaporize surface moisture instantly.' }
    ],
    beforeYouStart: [
      { task: 'Fluff and separate 600g chilled day-old cooked jasmine rice with damp hands so there are zero clumps.', durationMinutes: 5 },
      { task: 'Dice 100g Char Siu (BBQ pork) and 150g peeled raw prawns into uniform 1cm cubes.', durationMinutes: 5 },
      { task: 'Whisk 3 large eggs with 1/2 tsp salt and 1/2 tsp white pepper.', durationMinutes: 2 }
    ],
    ingredientPrepGuide: [
      { item: 'Rice Conditioning', technique: 'Rice must be cooked with slightly less water (1:1 ratio) and refrigerated uncovered overnight. The cold air dehydrates the surface starch, ensuring grains bounce and fry in hot oil rather than steaming into mush.' },
      { item: 'Wok Hei (Breath of the Wok)', technique: 'Achieved by tossing the rice high into the hot air above the wok edge where aerosolized oil droplets combust briefly, infusing the rice with a signature smoky, caramelized aroma.' }
    ],
    essentialIngredients: [
      { name: 'Day-old cooked jasmine rice', prep: 'chilled, broken into separate grains', amount: '600g', metric: '600g', imperial: '21 oz', common: '4 cups cooked' },
      { name: 'Char Siu (Chinese roast BBQ pork)', prep: 'cut into 1cm cubes', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '3/4 cup' },
      { name: 'Raw tiger prawns', prep: 'peeled, deveined, cut into 1cm cubes', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '1 cup' },
      { name: 'Large eggs', prep: 'whisked with pinch of salt', amount: '3 eggs', metric: '150g', imperial: '5.3 oz', common: '3 eggs' },
      { name: 'Frozen sweet green peas', prep: 'thawed', amount: '80g', metric: '80g', imperial: '2.8 oz', common: '1/2 cup' },
      { name: 'Scallions / Green onions', prep: 'sliced; whites and greens separated', amount: '4 stalks', metric: '50g', imperial: '1.8 oz', common: '1/2 cup' },
      { name: 'Neutral cooking oil (peanut or lard)', prep: 'high smoke point', amount: '3 tbsp', metric: '45ml', imperial: '1.5 fl oz', common: '3 tbsp' },
      { name: 'Shaoxing rice wine', prep: 'splashed around wok edge', amount: '1 tbsp', metric: '15ml', imperial: '0.5 fl oz', common: '1 tbsp' },
      { name: 'Light soy sauce', prep: 'sparingly, drizzled along hot wok wall', amount: '1 tbsp', metric: '15ml', imperial: '0.5 fl oz', common: '1 tbsp' },
      { name: 'Ground white pepper', prep: 'fine powder', amount: '1/2 tsp', metric: '1.5g', imperial: '0.05 oz', common: '1/2 tsp' },
      { name: 'Fine sea salt', prep: 'primary seasoning', amount: '1 tsp', metric: '5g', imperial: '0.18 oz', common: '1 tsp' },
      { name: 'Toasted sesame oil', prep: 'finishing aroma', amount: '1 tsp', metric: '5ml', imperial: '0.17 fl oz', common: '1 tsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'SEAR PRAWNS & CHAR SIU IN SMOKING WOK',
        whatYouNeed: ['Carbon steel wok', '1 tbsp oil', 'Cubed prawns', 'Cubed char siu', 'Splash of Shaoxing wine'],
        description: 'Heat wok over high heat until wisps of blue smoke curl from the surface (Longyau). Swirl in 1 tbsp oil. Add prawns and char siu cubes. Stir-fry aggressively for 60 seconds until prawns curl pink and pork caramelizes. Splash 1 tbsp Shaoxing wine around the hot wok rim. Transfer meat to a bowl.',
        howToDoIt: 'High heat sears meat instantaneously without losing natural juices into the wok.',
        heat: 'High Heat (Smoking hot)',
        duration: 2,
        visualCues: 'Prawns curl into tight coral C-shapes; pork fat sizzles and browns.',
        hear: 'Explosive, violent crackling sizzle.',
        smell: 'Caramelized pork, sweet wine steam, and searing seafood.',
        textureCheck: 'Snappy prawns, tender pork.',
        whatShouldThisLookLike: 'Glistening, seared prawn and pork cubes.',
        tip: 'Remove meat while prawns are 90% cooked so they don\'t turn rubbery during the final toss.',
        commonMistake: 'Crowding raw prawns with cold rice — creates steam that ruins the fry.',
        moveOnWhen: 'Prawns are pink and transferred to bowl.',
        quickInstructions: 'Sear prawns and char siu in smoking oil 60s, splash wine, transfer to bowl.'
      },
      {
        step: 2,
        title: 'SCRAMBLE EGGS & ADD RICE (THE GOLDEN WRAP)',
        whatYouNeed: ['Wok', '2 tbsp oil', 'Whisked eggs', 'Chilled separated rice', 'Scallion whites'],
        description: 'Add remaining 2 tbsp oil to the blazing wok. Toss in scallion whites for 5 seconds. Pour in whisked eggs. As soon as the bottom edges set (after just 5 seconds, while top is still completely liquid), dump the rice directly on top of the soft eggs. Immediately use your wok spatula to press, break, and toss the rice into the soft curds.',
        howToDoIt: 'Dumping cold rice onto half-cooked liquid eggs coats each cold rice grain in a micro-film of egg custard that cooks onto the grain ("Golden Wrapped Silver").',
        heat: 'High Heat',
        duration: 3,
        visualCues: 'Bright yellow eggs blend seamlessly around individual rice grains; no large solid egg pancakes form.',
        hear: 'Frenzied bubbling sizzle as cold rice hits hot egg.',
        smell: 'Toasted egg, sweet scallion, and nutty rice.',
        textureCheck: 'Every rice grain separates and glistens yellow.',
        whatShouldThisLookLike: 'Fluffy golden-flecked rice grains tumbling freely.',
        tip: 'Use the back of the spatula to press down gently on any remaining rice clumps against the hot metal.',
        commonMistake: 'Cooking eggs solid into a dry omelette before adding rice, which results in dull white rice with chunks of rubbery egg.',
        moveOnWhen: 'Rice is separated, golden, and tumbling.',
        quickInstructions: 'Pour eggs, add rice immediately while egg is runny, toss vigorously to coat grains.'
      },
      {
        step: 3,
        title: 'THE WOK HEI TOSS & DANCING GRAINS',
        whatYouNeed: ['Wok spatula', 'Salt', 'White pepper'],
        description: 'Keep burner at maximum heat. Toss the rice continuously using an undulating wrist motion, scooping from the bottom, pushing forward, and flipping rice up against the far curved lip of the wok. Season with 1 tsp salt and 1/2 tsp white pepper. Continue tossing vigorously for 3 minutes until rice grains begin to visibly pop and jump ("dance") off the wok bottom.',
        howToDoIt: 'Dancing grains are the physical indicator that all surface moisture has vanished and grains are toasting individually.',
        heat: 'Maximum High Heat',
        duration: 3,
        visualCues: 'Rice grains separate completely and bounce off the hot metal; wisps of fragrant smoke billow.',
        hear: 'Rhythmic popping sound like miniature popcorn popping.',
        smell: 'Intensely smoky, toasted wok hei aroma.',
        textureCheck: 'Dry, light, and springy.',
        whatShouldThisLookLike: 'Light, airy rice grains flying through the air without clumping.',
        tip: 'Keep the wok moving constantly so grains don\'t scorch black on the bottom.',
        commonMistake: 'Turning heat down to medium out of fear — results in greasy, heavy steamed rice.',
        moveOnWhen: 'Rice grains are popping and infused with smoke.',
        quickInstructions: 'Toss vigorously over max heat for 3 mins with salt and pepper until grains pop.'
      },
      {
        step: 4,
        title: 'RECOMBINE PROTEINS & WOK-EDGE SOY SAUCE',
        whatYouNeed: ['Seared prawns & pork', 'Thawed green peas', '1 tbsp light soy sauce'],
        description: 'Dump the cooked prawns, char siu, and green peas into the rice. Toss for 1 minute to heat through. Drizzle 1 tbsp light soy sauce strictly along the highest exposed metal rim of the wok (NOT directly onto the rice). The sauce will instantly sizzle, caramelize, and atomize into vapor as it trickles down into the rice. Toss furiously to distribute.',
        howToDoIt: 'Drizzling sauce on the red-hot metal rim atomizes the soy sugars into smoky caramel vapor without wetting the rice grains.',
        heat: 'Maximum High Heat',
        duration: 2,
        visualCues: 'Vapor explodes from the wok rim; rice takes on a faint golden amber tan.',
        hear: 'Fierce hiss as soy sauce contacts 250°C iron.',
        smell: 'Intoxicating caramelized soy sauce aroma.',
        textureCheck: 'Uniformly dry, fluffy, and light.',
        whatShouldThisLookLike: 'Colorful mosaic of golden rice, green peas, pink shrimp, and red pork.',
        tip: 'Never pour liquid soy directly onto the center of fried rice or it will turn soggy and brown.',
        commonMistake: 'Dousing rice in dark soy sauce until it turns into a wet brown sludge.',
        moveOnWhen: 'Soy sauce is fully vaporized and absorbed.',
        quickInstructions: 'Add meat and peas; drizzle soy sauce around hot wok rim, toss 1 min.'
      },
      {
        step: 5,
        title: 'FINISH WITH SCALLION GREENS & SERVE',
        whatYouNeed: ['Scallion greens', '1 tsp sesame oil', 'Serving bowl'],
        description: 'Toss in scallion greens and drizzle 1 tsp sesame oil. Give two final tosses. Turn off heat. Spoon fried rice into a rounded rice bowl, pack gently, and invert onto a flat platter to form a pristine golden dome.',
        howToDoIt: 'Residual heat wilts scallion greens in 5 seconds while preserving their brilliant jade-green crunch.',
        heat: 'Off Heat',
        duration: 1,
        visualCues: 'Gleaming, domed presentation dotted with vibrant green scallions.',
        smell: 'Toasted sesame, sweet scallion, and smoky wok hei.',
        textureCheck: 'Every single grain of rice is separate, light, and chewy.',
        whatShouldThisLookLike: 'Flawless restaurant-style dome of Yangzhou fried rice.',
        tip: 'Inverting a packed bowl creates that classic Chinese banqueting presentation.',
        commonMistake: 'Overcooking scallions on heat until they turn yellow and slimy.',
        moveOnWhen: 'Domed and served immediately.',
        quickInstructions: 'Toss in scallion greens and sesame oil off heat; pack into bowl and invert onto plate.'
      }
    ],
    commonMistakes: [
      { mistake: 'Rice was wet, mushy, and sticky.', remedy: 'Freshly cooked warm rice was used. Always use cold day-old rice that has rested in the fridge uncovered.' },
      { mistake: 'Rice stuck like cement to the wok.', remedy: 'Wok was not hot enough or unseasoned. Heat wok until smoking hot before adding oil.' }
    ],
    troubleshooting: [
      {
        problem: 'Rice feels greasy in the mouth',
        whatHappened: 'Too much oil was used or heat was too low.',
        whyItHappened: 'Cold grains absorbed oil instead of flash-frying.',
        whatToDoNow: 'Turn heat to absolute maximum and toss continuously for 2 minutes to cook off oil.',
        howToPrevent: 'Measure oil accurately (3 tbsp total for 4 cups rice) and keep heat blazing.'
      }
    ],
    substitutions: [
      { original: 'Char Siu pork', substitute: 'Chinese lap cheong sausage, diced ham, or smoked bacon', notes: 'Lap cheong sweet sausage is a beloved classic home-style variation.' },
      { original: 'Tiger prawns', substitute: 'Diced chicken breast or diced firm baked tofu', notes: 'Chicken fried rice is universally popular.' }
    ],
    safetyNotes: [
      'Day-old rice must be cooled quickly and kept refrigerated below 4°C to prevent Bacillus cereus bacteria.'
    ],
    servingGuide: {
      restingTime: 'Serve immediately.',
      garnishing: 'Finely sliced scallion greens and white pepper.',
      plating: 'Inverted round dome on a wide porcelain plate.',
      temperature: 'Piping hot.',
      accompaniments: 'Clear chicken broth with wontons, chili garlic oil, and Chinese pickled cucumbers.'
    }
  },

  // 4. CHOW MEIN (Cantonese Crispy Pan-Fried Noodles / Liangmian Huang)
  {
    id: 'chow-mein',
    name: 'Cantonese Crispy Pan-Fried Chow Mein',
    cuisine: 'Chinese',
    region: 'China (Guangdong / Hong Kong)',
    servings: 4,
    prepTime: 20,
    cookTime: 15,
    difficulty: 'Medium',
    overview: {
      summary: 'Hong Kong\'s premier noodle masterwork: fresh thin wonton egg noodles boiled and pan-fried in a hot wok into a golden, crackling two-sided crispy nest (Liangmian Huang), topped with a savory, glossy velvet stir-fry of sliced chicken, bok choy, shiitake mushrooms, and bean sprouts in a rich oyster-soy gravy that slowly softens the center while leaving the perimeter shatteringly crisp.',
      appearance: 'A golden, crispy disc of intertwined pan-fried noodles blanketed by a lustrous stir-fry of sliced velvet chicken, green baby bok choy, brown shiitake, and bean sprouts.',
      texture: 'The ultimate textural contrast: shatteringly crisp noodles around the edge, chewy savory noodles in the sauce-soaked center, tender velvety chicken, and crunchy vegetables.',
      flavor: 'Deep umami oyster sauce, savory soy, nutty sesame, toasted egg noodles, and sweet bok choy.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: '14-inch seasoned carbon steel wok or heavy non-stick skillet', purpose: 'For shallow-frying the noodle cake to uniform golden crispness.' },
      { name: 'Colander and clean tea towel', purpose: 'Drains and dries boiled noodles thoroughly before frying.' },
      { name: 'Wok spatula and tongs', purpose: 'Flips the round noodle nest intact.' }
    ],
    beforeYouStart: [
      { task: 'Boil 300g fresh thin wonton noodles for 60 seconds; drain, rinse in cold water, and toss with 1 tsp sesame oil; spread on a towel to air-dry 15 minutes.', durationMinutes: 20 },
      { task: 'Thinly slice 250g chicken breast into 3mm bite-sized pieces; velvet with 1 tbsp soy sauce, 1 tbsp Shaoxing wine, 1 tsp cornstarch, and 1 tsp oil.', durationMinutes: 10 },
      { task: 'Slice 4 rehydrated shiitake mushrooms, cut 2 heads baby bok choy into quarters, and clean 100g bean sprouts.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'Drying Boiled Noodles', technique: 'Noodles must be completely dry on the surface before pan-frying. If wet noodles hit hot oil, they will steam into a rubbery cake instead of frying into a crackling golden crust.' },
      { item: 'Chicken Velveting (Shang-Jiang)', technique: 'Marinating sliced chicken with cornstarch, wine, and a splash of oil seals in natural juices, ensuring lean chicken breast stays silky and meltingly tender when stir-fried.' }
    ],
    essentialIngredients: [
      { name: 'Fresh thin wonton egg noodles (Chow Mein noodles)', prep: 'boiled 1 min, drained & dried', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '300g' },
      { name: 'Boneless skinless chicken breast', prep: 'thinly sliced against grain', amount: '250g', metric: '250g', imperial: '9 oz', common: '1/2 lb' },
      { name: 'Baby bok choy', prep: 'quartered lengthwise', amount: '2 heads', metric: '150g', imperial: '5.3 oz', common: '2 heads' },
      { name: 'Dried shiitake mushrooms', prep: 'rehydrated in hot water & sliced', amount: '4 mushrooms', metric: '40g', imperial: '1.4 oz', common: '4 caps' },
      { name: 'Fresh bean sprouts', prep: 'tails pinched off', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '1 cup' },
      { name: 'Fresh ginger & garlic', prep: 'sliced thinly', amount: '2 tbsp', metric: '20g', imperial: '0.7 oz', common: '2 tbsp' },
      { name: 'Premium oyster sauce (Lee Kum Kee)', prep: 'sauce backbone', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp' },
      { name: 'Light soy sauce', prep: 'savory depth', amount: '1 tbsp', metric: '15ml', imperial: '0.5 fl oz', common: '1 tbsp' },
      { name: 'Dark soy sauce', prep: 'adds rich amber color', amount: '1 tsp', metric: '5ml', imperial: '0.17 fl oz', common: '1 tsp' },
      { name: 'Rich chicken broth', prep: 'gravy base', amount: '250ml', metric: '250ml', imperial: '8.5 fl oz', common: '1 cup' },
      { name: 'Cornstarch slurry', prep: '1.5 tbsp cornstarch + 2 tbsp cold water', amount: '3.5 tbsp', metric: '50ml', imperial: '1.7 fl oz', common: 'mixed' },
      { name: 'Neutral cooking oil', prep: 'divided for noodles & stir-fry', amount: '4 tbsp', metric: '60ml', imperial: '2 fl oz', common: '4 tbsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'PAN-FRY THE CRISPY NOODLE NEST (LIANGMIAN HUANG)',
        whatYouNeed: ['Dry boiled noodles', '2 tbsp oil', 'Wok or wide skillet'],
        description: 'Heat 2 tbsp oil in wok over medium heat. Swirl to coat bottom and sides. Spread noodles across the pan in an even circular nest about 2cm thick. Cook undisturbed for 5 minutes over medium-low heat. Nudge pan gently until the noodle cake rotates freely as one solid disc. Check underside — when deep golden and crisp, invert onto a plate, add 1 tbsp oil to pan, slide noodle cake back in, and fry second side for 4 minutes.',
        howToDoIt: 'Gentle, even medium-low shallow-frying dehydrates the noodle exterior into a rigid, crackling golden mesh while preserving a soft chewy interior.',
        heat: 'Medium-Low Heat',
        duration: 9,
        visualCues: 'Noodle cake turns deep golden-amber on both sides; edges are brittle and crackling.',
        hear: 'Steady, crackling shallow-fry sizzle.',
        smell: 'Rich toasted egg noodle aroma.',
        textureCheck: 'Rigid, golden, shatteringly crisp cake.',
        whatShouldThisLookLike: 'A giant golden woven bird\'s nest of crispy noodles.',
        tip: 'Don\'t press down hard or poke at it; let the noodles interlock naturally as they fry.',
        commonMistake: 'Flipping too early before the bottom noodles lock into a rigid crust, causing the cake to crumble.',
        moveOnWhen: 'Both sides are golden, crisp, and transferred to a serving platter.',
        quickInstructions: 'Shallow-fry noodles into a round cake for 5 mins per side until golden and crispy; plate.'
      },
      {
        step: 2,
        title: 'VELVET SEAR THE CHICKEN',
        whatYouNeed: ['Wok', '1 tbsp oil', 'Marinated chicken slices'],
        description: 'Heat 1 tbsp oil in the wok over high heat. Add marinated chicken slices in a single layer. Sear for 90 seconds without moving to develop a light golden crust. Toss and stir-fry for 1 more minute until 90% cooked. Transfer to a bowl.',
        howToDoIt: 'The cornstarch coating traps juices inside the meat fibers, ensuring tender, velvety poultry.',
        heat: 'High Heat',
        duration: 3,
        visualCues: 'Chicken turns opaque white with light golden edges.',
        smell: 'Ginger, garlic, and seared poultry.',
        textureCheck: 'Extremely tender and succulent.',
        whatShouldThisLookLike: 'Velvety, tender chicken strips.',
        tip: 'Spread chicken out so it sears rather than steaming in a clump.',
        commonMistake: 'Overcooking chicken breast on high heat until it turns chalky and dry.',
        moveOnWhen: 'Chicken is opaque and transferred to bowl.',
        quickInstructions: 'Stir-fry marinated chicken over high heat for 2 mins; transfer to bowl.'
      },
      {
        step: 3,
        title: 'STIR-FRY AROMATICS & VEGETABLES',
        whatYouNeed: ['Sliced ginger and garlic', 'Shiitake mushrooms', 'Bok choy quarters', '1 tsp oil'],
        description: 'Add 1 tsp oil to wok over high heat. Add ginger and garlic slices; stir-fry for 15 seconds until fragrant. Toss in sliced shiitake mushrooms and quartered bok choy. Stir-fry for 1 minute, tossing vigorously until bok choy turns brilliant emerald green.',
        howToDoIt: 'Stir-frying mushrooms first releases their earthy umami guanylate compounds into the oil.',
        heat: 'High Heat',
        duration: 2,
        visualCues: 'Bok choy leaves turn bright glossy green while stems remain crisp.',
        smell: 'Pungent garlic, sweet ginger, and earthy shiitake.',
        textureCheck: 'Crisp-tender vegetables.',
        whatShouldThisLookLike: 'Vibrant green bok choy and brown mushrooms sizzling in the wok.',
        tip: 'Do not overcook bok choy here; it will finish cooking in the simmering gravy.',
        commonMistake: 'Adding bean sprouts now — bean sprouts must be added in the final 30 seconds or they turn limp and watery.',
        moveOnWhen: 'Bok choy is bright green and crisp.',
        quickInstructions: 'Stir-fry ginger, garlic, mushrooms, and bok choy for 1 min over high heat.'
      },
      {
        step: 4,
        title: 'SIMMER SAUCE & THICKEN TO GLOSS',
        whatYouNeed: ['250ml chicken broth', '2 tbsp oyster sauce', '1 tbsp light soy', '1 tsp dark soy', 'Cornstarch slurry', 'Bean sprouts', 'Cooked chicken'],
        description: 'Pour in chicken broth, oyster sauce, light soy sauce, dark soy sauce, and 1/2 tsp sugar. Bring to a rapid boil. Return chicken to the wok. Add bean sprouts. Stir cornstarch slurry to recombine, then drizzle into the bubbling sauce in a steady stream, stirring constantly. Simmer for 30 seconds until sauce transforms into a clear, glossy, luxurious gravy.',
        howToDoIt: 'Boiling activates cornstarch molecules, thickening the liquid into a mirror-like velvet glaze.',
        heat: 'High Heat',
        duration: 2,
        visualCues: 'Sauce thickens instantly, bubbling into a rich mahogany glaze that coats the vegetables.',
        hear: 'Rapid bubbling and boiling.',
        smell: 'Rich savory oyster sauce and chicken broth.',
        textureCheck: 'Sauce coats the back of a spoon smoothly.',
        whatShouldThisLookLike: 'Glossy, savory stir-fry in rich amber gravy.',
        tip: 'Always stir cornstarch slurry right before pouring — starch settles like cement at the bottom.',
        commonMistake: 'Dumping raw starch powder directly into hot broth, creating gummy white lumps.',
        moveOnWhen: 'Gravy is thick, glossy, and clear.',
        quickInstructions: 'Add broth, oyster and soy sauces; add chicken and sprouts; stir in slurry until gravy thickens.'
      },
      {
        step: 5,
        title: 'POUR OVER CRISPY NOODLES & SERVE',
        whatYouNeed: ['Crispy noodle nest on platter', 'Hot savory stir-fry and gravy', 'Drizzle of sesame oil'],
        description: 'Drizzle 1 tsp sesame oil over the hot stir-fry. Immediately ladle the hot chicken, vegetables, and lustrous gravy over the CENTER of the crispy noodle nest, leaving the outer 3cm perimeter of golden crispy noodles exposed.',
        howToDoIt: 'Leaving the outer rim bare preserves maximum crunch while the hot gravy softens the center noodles for eating.',
        heat: 'Off Heat',
        duration: 1,
        visualCues: 'Sizzling hot, glossy stir-fry cascading over a golden crown of crackling noodles.',
        hear: 'Crackling and hissing as hot gravy touches the hot crispy noodles.',
        smell: 'Incredible aroma of oyster sauce, toasted sesame, and fried noodles.',
        textureCheck: 'Crisp exterior, tender saucy center.',
        whatShouldThisLookLike: 'Showstopping Hong Kong banquet-style crispy chow mein platter.',
        tip: 'Eat immediately to experience the contrast before the noodles soften completely.',
        commonMistake: 'Smothering the entire platter in sauce, destroying all crispy texture.',
        moveOnWhen: 'Plated and served immediately.',
        quickInstructions: 'Ladle hot stir-fry over center of crispy noodle cake, keeping edges crisp.'
      }
    ],
    commonMistakes: [
      { mistake: 'Noodles were soggy instead of crispy.', remedy: 'Noodles were pan-fried while still wet from boiling. Always let boiled noodles dry completely on a towel.' },
      { mistake: 'Sauce was watery and ran off the noodles.', remedy: 'Not enough cornstarch slurry was used. Gravy must be thick enough to cling to noodles.' }
    ],
    troubleshooting: [
      {
        problem: 'Noodle cake broke into pieces during flipping',
        whatHappened: 'Flipped before the bottom formed a solid cohesive crust.',
        whyItHappened: 'Noodles need 4–5 minutes on medium-low for starches to interlock.',
        whatToDoNow: 'Press pieces back together into a disc; pour sauce over the top — no one will notice.',
        howToPrevent: 'Invert onto a flat plate first, then slide back into pan rather than flipping in mid-air.'
      }
    ],
    substitutions: [
      { original: 'Chicken breast', substitute: 'Thinly sliced beef flank, peeled prawns, or fried firm tofu', notes: 'Seafood Chow Mein and Beef Chow Mein are classic Cantonese variations.' },
      { original: 'Fresh wonton noodles', substitute: 'Dry ramen noodles (boiled 2 mins and dried)', notes: 'Works well as an accessible pantry substitute.' }
    ],
    safetyNotes: [
      'Chicken must reach 74°C internal temperature before serving.'
    ],
    servingGuide: {
      restingTime: 'Serve immediately.',
      garnishing: 'White pepper and red chili slices.',
      plating: 'Wide oval banqueting platter.',
      temperature: 'Piping hot and crackling.',
      accompaniments: 'Chiu Chow chili oil, red Chinese vinegar, and hot Jasmine tea.'
    }
  },

  // 5. PEKING DUCK (Crispy Beijing Roast Duck)
  {
    id: 'peking-duck',
    name: 'Authentic Crispy Peking Roast Duck (Beijing Kaoya)',
    cuisine: 'Chinese',
    region: 'Northern China (Beijing)',
    servings: 4,
    prepTime: 40,
    cookTime: 75,
    difficulty: 'Hard',
    overview: {
      summary: 'The imperial jewel of Chinese gastronomy: whole duck air-dried, scalded with boiling water, glazed with a maltose-vinegar syrup, and roasted to render all subterranean fat, yielding paper-thin, mahogany-lacquered, shatteringly crisp skin, carved tableside and wrapped in paper-thin Mandarin pancakes (Chunbing) with scallion brushes, cucumber matchsticks, and sweet bean sauce (Tianmianjiang).',
      appearance: 'A glistening, whole mahogany-lacquered duck with mirror-sheen crackling skin, carved into thin slices of crispy skin and succulent breast meat alongside translucent steamed pancakes.',
      texture: 'Skin that shatters like glass under the teeth, melting fat, succulent tender duck meat, soft chewy steamed pancake, and crunchy fresh cucumber.',
      flavor: 'Deeply rich roasted poultry umami, sweet maltose glaze, earthy fermented sweet bean sauce, and sharp fresh scallions.',
      restingTimeMinutes: 10
    },
    equipment: [
      { name: 'Vertical roasting rack (or beer can stand) in a roasting pan', purpose: 'Allows hot convective air to circulate 360° while rendered duck fat drains away.' },
      { name: 'Small fan or well-ventilated refrigerator', purpose: 'For overnight air-drying of the skin (the #1 secret to crispy duck skin).' },
      { name: 'Large ladle and saucepan', purpose: 'For ladling boiling water and maltose glaze over the whole duck.' },
      { name: 'Bamboo steamer', purpose: 'For steaming Mandarin pancakes.' }
    ],
    beforeYouStart: [
      { task: 'Clean and pat a 2.2kg whole Pekin/Long Island duck bone-dry; trim excess neck skin and wing tips.', durationMinutes: 10 },
      { task: 'Prepare maltose glaze: dissolve 3 tbsp maltose (or honey), 2 tbsp red rice vinegar, and 1 tbsp Shaoxing wine in 200ml warm water.', durationMinutes: 5 },
      { task: 'Air-dry the scalded, glazed duck uncovered on a wire rack in the refrigerator for 24 hours until skin feels like dry parchment paper.', durationMinutes: 1440 }
    ],
    ingredientPrepGuide: [
      { item: 'Skin Scalding & Tightening (Tang-Pi)', technique: 'Ladle 2 liters of rolling boiling water all over the raw duck skin. The heat instantly contracts collagen fibers, pulling the skin taut and opening pores so subterranean fat renders effortlessly during roasting.' },
      { item: 'Maltose Glazing (Gua-Tang)', technique: 'Brush hot maltose-vinegar syrup across the taut skin. Maltose is a complex sugar that caramelizes slowly at high roasting heat without burning bitter, producing the legendary mahogany glass lacquer.' }
    ],
    essentialIngredients: [
      { name: 'Whole Pekin duck', prep: 'approx 2.2kg, cleaned & air-dried', amount: '1 duck', metric: '2200g', imperial: '5 lbs', common: '1 whole duck' },
      { name: 'Maltose (or pure honey)', prep: 'dissolved in warm water for glaze', amount: '3 tbsp', metric: '60g', imperial: '2.1 oz', common: '3 tbsp' },
      { name: 'Chinese red rice vinegar or white vinegar', prep: 'breaks down surface fat', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp' },
      { name: 'Shaoxing rice wine', prep: 'for glaze and cavity rub', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp' },
      { name: 'Chinese five-spice powder', prep: 'rubbed inside the cavity only', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Coarse sea salt', prep: 'divided (cavity rub)', amount: '1 tbsp', metric: '15g', imperial: '0.5 oz', common: '1 tbsp' },
      { name: 'Mandarin pancakes (Chunbing)', prep: 'thin steamed flour pancakes', amount: '16 pancakes', metric: '16 pieces', imperial: '16 pieces', common: '16 pieces' },
      { name: 'Tianmianjiang (Sweet Bean Sauce) or Hoisin', prep: 'for spreading', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '1/2 cup' },
      { name: 'Scallions / Green onions', prep: 'cut into 6cm lengths, ends frayed into brushes', amount: '6 stalks', metric: '80g', imperial: '2.8 oz', common: '1 cup strips' },
      { name: 'English cucumber', prep: 'seeded and cut into 6cm matchsticks', amount: '1 cucumber', metric: '150g', imperial: '5.3 oz', common: '1 cup matchsticks' }
    ],
    steps: [
      {
        step: 1,
        title: 'SCALD & GLAZE DUCK (24H ADVANCE)',
        whatYouNeed: ['Whole duck', '2L boiling water', 'Maltose-vinegar glaze', 'Large roasting pan with wire rack'],
        description: 'Rub interior cavity with 1 tbsp salt, five-spice powder, and 1 tbsp Shaoxing wine (leave exterior skin completely unseasoned). Suspend duck over a sink. Ladle 2 liters of boiling water repeatedly over the skin. The skin will visibly contract and turn taut like a drum. Pat dry. Brush two generous coats of warm maltose-vinegar glaze over the entire exterior.',
        howToDoIt: 'Boiling water tightens skin; vinegar lowers surface pH to ensure crispness; maltose caramelizes into an amber glass shell.',
        heat: 'Boiling water',
        duration: 10,
        visualCues: 'Skin shrinks tight against the flesh and takes on a glistening golden sheen.',
        smell: 'Sweet maltose and vinegar aroma.',
        textureCheck: 'Skin feels smooth and taut.',
        whatShouldThisLookLike: 'Taut, glazed duck drying on a vertical stand.',
        tip: 'Never rub salt on the exterior skin! Salt draws out moisture and prevents skin from crisping.',
        commonMistake: 'Skipping the scalding step, which leaves skin loose, flabby, and rubbery.',
        moveOnWhen: 'Duck is glazed completely.',
        quickInstructions: 'Season cavity, scald exterior with 2L boiling water, brush with maltose glaze.'
      },
      {
        step: 2,
        title: 'THE 24-HOUR AIR-DRYING STAGE',
        whatYouNeed: ['Wired roasting rack', 'Refrigerator or cold fan'],
        description: 'Place glazed duck upright or on a wire rack in the refrigerator completely uncovered for 24 hours. Cold circulating air evaporates all surface moisture until the skin feels like dry, stiff parchment paper.',
        howToDoIt: 'Water is the enemy of crispness. Roasting a wet duck steams the skin; roasting a bone-dry skin fries it in its own rendering fat.',
        heat: 'Cold refrigeration (4°C / 39°F)',
        duration: 1440,
        visualCues: 'Skin turns dark translucent amber and feels stiff, dry, and leathery like parchment paper.',
        textureCheck: 'Completely dry and stiff to the touch.',
        whatShouldThisLookLike: 'A dried, parchment-like glazed duck.',
        tip: 'If pressed for time, use a cold hair dryer fan for 3 hours to accelerate drying.',
        commonMistake: 'Roasting while skin is still damp — skin will come out soft and chewy.',
        moveOnWhen: 'Skin feels like dry paper.',
        quickInstructions: 'Refrigerate uncovered for 24 hours until skin feels like dry parchment.'
      },
      {
        step: 3,
        title: 'ROAST & RENDER FAT TO CRACKLING PERFECTION',
        whatYouNeed: ['Preheated oven (180°C / 350°F)', 'Roasting pan with water in bottom', 'Roasting rack'],
        description: 'Pour 2 cups of water into the bottom of the roasting pan (catches dripping fat and prevents smoking). Place duck breast-side up on the roasting rack. Roast at 180°C (350°F) for 45 minutes. Rotate pan 180 degrees. Increase temperature to 200°C (400°F) and roast for another 25–30 minutes until skin is mahogany-lacquered and blistered crisp.',
        howToDoIt: 'Initial heat renders the thick layer of fat beneath the skin; high heat finish crisps the dehydrated skin into a fragile, crackling shell.',
        heat: '180°C (350°F) for 45 mins, then 200°C (400°F) for 30 mins',
        duration: 75,
        visualCues: 'Skin turns deep mahogany-bronze, puffed with microscopic crisp blisters; fat renders freely into pan.',
        hear: 'Steady, crackling sizzling of rendering duck fat.',
        smell: 'Heavenly aroma of rich roasted duck and sweet maltose.',
        textureCheck: 'Tapping breast skin with knife yields a hard hollow snap.',
        whatShouldThisLookLike: 'A gorgeous, gleaming mahogany-roasted Peking duck.',
        tip: 'Cover wingtips with foil if they brown too quickly during roasting.',
        commonMistake: 'Not putting water in the drip pan — rendered duck fat will burn and fill your kitchen with smoke.',
        moveOnWhen: 'Skin is blistered crisp and duck reaches 75°C (167°F) internal temperature.',
        quickInstructions: 'Roast breast-up at 180°C for 45 mins, then 200°C for 25-30 mins until crackling mahogany.'
      },
      {
        step: 4,
        title: 'REST & THE IMPERIAL TABLESIDE CARVE',
        whatYouNeed: ['Sharp slicing knife', 'Carving board with juice groove'],
        description: 'Rest duck undisturbed for 10 minutes so juices redistribute. Using a razor-sharp knife held at a 30-degree angle, carve thin oval slices of pure crispy skin from the breast (the prized crispy skin course). Next, carve slices combining crispy skin with a thin layer of juicy breast meat.',
        howToDoIt: 'Resting allows meat to reabsorb juices while keeping the exterior skin dry and shatteringly crisp.',
        heat: 'Off Heat',
        duration: 10,
        visualCues: 'Crispy skin shatters cleanly under knife without tearing; meat underneath is steaming and succulent.',
        textureCheck: 'Skin is glass-brittle; meat is ultra-tender.',
        whatShouldThisLookLike: 'Shingles of gleaming mahogany skin and succulent sliced duck meat.',
        tip: 'Traditionally, the first slices of pure crispy skin are dipped directly into white granulated sugar to savor on the tongue.',
        commonMistake: 'Using a dull knife that crushes the crispy skin and tears the delicate breast meat.',
        moveOnWhen: 'Duck is sliced into elegant shingles.',
        quickInstructions: 'Rest 10 mins, slice pure crispy skin from breast, then slice meat with skin.'
      },
      {
        step: 5,
        title: 'STEAM PANCAKES & ASSEMBLE ROLLS',
        whatYouNeed: ['16 Mandarin pancakes', 'Bamboo steamer', 'Tianmianjiang sauce', 'Scallion brushes', 'Cucumber matchsticks'],
        description: 'Steam Mandarin pancakes in bamboo steamer for 4 minutes until warm and supple. To eat: Lay a warm pancake flat on a plate. Dip a scallion brush into sweet bean sauce and brush across the center of the pancake. Lay 2 slices of crispy duck, 2 cucumber matchsticks, and the scallion on top. Fold bottom edge up, then fold left and right sides over like an open envelope. Eat with hands!',
        howToDoIt: 'The warm, chewy pancake cradles the contrast between shatteringly crisp duck skin, sweet sauce, and cool refreshing cucumber.',
        heat: 'Medium Steam 4 mins',
        duration: 5,
        visualCues: 'Translucent steamed pancake wrapped around mahogany duck and jade-green vegetables.',
        smell: 'Sweet bean sauce, scallion, and roast duck.',
        textureCheck: 'Soft chewy wrapper, shatteringly crisp skin, and crunchy cucumber.',
        whatShouldThisLookLike: 'Exquisite, hand-held imperial Peking duck roll.',
        tip: 'Eat in one or two bites so the skin stays crispy inside the warm pancake.',
        commonMistake: 'Overfilling the delicate pancake, causing it to tear open.',
        moveOnWhen: 'Rolled and enjoyed.',
        quickInstructions: 'Steam pancakes 4 mins; spread sweet sauce, add duck, cucumber, and scallion; fold into roll.'
      }
    ],
    commonMistakes: [
      { mistake: 'Duck skin was rubbery and chewy.', remedy: 'Skin was not air-dried long enough. 24 hours of uncovered refrigerator drying is mandatory for restaurant crispness.' },
      { mistake: 'Skin burned black before meat cooked.', remedy: 'Oven was too hot early on. Start at 180°C and only raise heat in the final 25 minutes.' }
    ],
    troubleshooting: [
      {
        problem: 'Skin lost its crunch while resting',
        whatHappened: 'Moisture from hot meat migrated to the surface.',
        whyItHappened: 'Duck was covered with foil while resting.',
        whatToDoNow: 'Never tent roasted duck with foil! Blast under broiler for 2 minutes to restore crispness.',
        howToPrevent: 'Always rest duck completely uncovered in a warm, dry room.'
      }
    ],
    substitutions: [
      { original: 'Tianmianjiang (sweet bean sauce)', substitute: 'Hoisin sauce mixed with 1 tsp soy sauce', notes: 'Hoisin provides similar sweet, savory fermented depth.' },
      { original: 'Mandarin pancakes (Chunbing)', substitute: 'Thin flour tortillas steamed for 2 minutes', notes: 'Very good everyday pantry substitute.' }
    ],
    safetyNotes: [
      'Duck must reach 74°C (165°F) internal temperature at the thickest part of the thigh.'
    ],
    servingGuide: {
      restingTime: 'Rest 10 minutes uncovered.',
      garnishing: 'Scallion brushes and cucumber matchsticks.',
      plating: 'Carved duck arranged on warm platters alongside steaming bamboo basket of pancakes.',
      temperature: 'Hot and crackling.',
      accompaniments: 'Rich duck bone soup (simmered from the roasted carcass with tofu and Napa cabbage).'
    }
  },

  // 6. KUNG PAO CHICKEN (Sichuan Gongbao Jiding)
  {
    id: 'kung-pao-chicken',
    name: 'Authentic Sichuan Kung Pao Chicken (Gongbao Jiding)',
    cuisine: 'Chinese',
    region: 'China (Sichuan)',
    servings: 4,
    prepTime: 20,
    cookTime: 10,
    difficulty: 'Medium',
    overview: {
      summary: 'The benchmark of Sichuan wok cookery: tender velvety cubes of chicken thigh flash-fried in a roaring wok with fragrant Sichuan peppercorns, smoky charred Facing Heaven dried chilies (Chao Tian Jiao), crisp fried peanuts, and scallion white rounds in an electrifying sweet-sour-savory "lychee-flavored" (Li Zhi Wei) glaze.',
      appearance: 'Glistening, mahogany-glazed chicken cubes intermingled with blackened whole dried chilies, red peppercorns, white scallion rounds, and golden peanuts.',
      texture: 'Juicy, velvety tender chicken thigh, crunchy fried peanuts, and crisp scallions bathed in a clinging, silky glaze.',
      flavor: 'The quintessential Sichuan "Lychee Flavor" (Li Zhi Wei): initial sweet-tangy rush followed by savory umami, smoky toasted chili warmth, and buzzing citrusy málà tingle.',
      restingTimeMinutes: 1
    },
    equipment: [
      { name: '14-inch carbon steel wok', purpose: 'Essential for high-heat rapid searing without losing wok temperature.' },
      { name: 'Wok spatula', purpose: 'Keeps ingredients tumbling rapidly through the hot zone.' },
      { name: 'Small prep bowl for sauce (Hula bowl)', purpose: 'All sauce ingredients must be pre-mixed before cooking starts.' }
    ],
    beforeYouStart: [
      { task: 'Cut 450g boneless skinless chicken thighs into uniform 1.5cm cubes.', durationMinutes: 5 },
      { task: 'Marinate chicken: toss with 1 tbsp soy sauce, 1 tbsp Shaoxing wine, 1 tsp cornstarch, 1/2 tsp salt, and 1 tsp oil for 15 minutes.', durationMinutes: 15 },
      { task: 'Snip 15 dried red Sichuan chilies in half; shake out and discard loose seeds.', durationMinutes: 3 },
      { task: 'Mix the "Lychee Flavor" sauce: 1.5 tbsp sugar, 1.5 tbsp Chinkiang black vinegar, 1 tbsp light soy sauce, 1 tsp dark soy, 1 tsp cornstarch, and 2 tbsp chicken stock.', durationMinutes: 2 }
    ],
    ingredientPrepGuide: [
      { item: 'Lychee Flavor Profile (Li Zhi Wei)', technique: 'Authentic Kung Pao is not a burning spicy dish! It is built on "Li Zhi Wei" — a delicate balance of sweet sugar and sour Chinkiang vinegar that mimics the sweet-tart flavor of fresh lychee fruit, accented by toasted chilies and Sichuan pepper.' },
      { item: 'Scallion Cutting (Cong Dui)', technique: 'Cut thick scallion whites into 1.5cm cylindrical batons (Cong Dui). They should match the exact size of the chicken cubes and become sweet and juicy when wok-seared.' }
    ],
    essentialIngredients: [
      { name: 'Boneless skinless chicken thighs', prep: 'cut into 1.5cm uniform cubes', amount: '450g', metric: '450g', imperial: '1 lb', common: '450g' },
      { name: 'Roasted unsalted peanuts (skinless)', prep: 'golden and crunchy', amount: '80g', metric: '80g', imperial: '2.8 oz', common: '1/2 cup' },
      { name: 'Whole dried red Sichuan chilies (Facing Heaven)', prep: 'snipped in half, seeds shaken out', amount: '15 chilies', metric: '15 pieces', imperial: '15 pieces', common: '1/2 cup' },
      { name: 'Whole red Sichuan peppercorns (Huajiao)', prep: 'cleaned of black seeds', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Scallion whites', prep: 'cut into 1.5cm cylindrical chunks', amount: '4 stalks', metric: '50g', imperial: '1.8 oz', common: '1/2 cup' },
      { name: 'Fresh garlic & ginger', prep: 'thinly sliced into small squares', amount: '2 tbsp', metric: '20g', imperial: '0.7 oz', common: '2 tbsp' },
      { name: 'Chinkiang black vinegar', prep: 'for sweet-sour balance', amount: '1.5 tbsp', metric: '22ml', imperial: '0.75 fl oz', common: '1.5 tbsp' },
      { name: 'Granulated sugar', prep: 'for sweet-sour balance', amount: '1.5 tbsp', metric: '20g', imperial: '0.7 oz', common: '1.5 tbsp' },
      { name: 'Light soy sauce', prep: 'savory umami', amount: '1.5 tbsp', metric: '22ml', imperial: '0.75 fl oz', common: '1.5 tbsp' },
      { name: 'Dark soy sauce', prep: 'for rich mahogany color', amount: '1 tsp', metric: '5ml', imperial: '0.17 fl oz', common: '1 tsp' },
      { name: 'Cornstarch', prep: 'divided (marinade & sauce)', amount: '2 tsp', metric: '6g', imperial: '0.2 oz', common: '2 tsp' },
      { name: 'Neutral cooking oil (peanut or canola)', prep: 'for high heat stir-fry', amount: '3 tbsp', metric: '45ml', imperial: '1.5 fl oz', common: '3 tbsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'BLOOM CHILIES & SICHUAN PEPPERCORNS (HULA AROMA)',
        whatYouNeed: ['Wok', '3 tbsp oil', 'Snipped dried chilies', 'Sichuan peppercorns'],
        description: 'Heat 3 tbsp oil in wok over medium-low heat. Add dried chilies and Sichuan peppercorns. Fry gently for 30–45 seconds, stirring constantly. The chilies will puff up and turn from bright scarlet to a deep, dark purplish-brown (do not let them burn black!).',
        howToDoIt: 'Infusing low-heat oil with dried chilies and peppercorns extracts their capsaicin and sanshool oils, creating the foundational "Hula" (toasted chili) flavor.',
        heat: 'Medium-Low Heat',
        duration: 1,
        visualCues: 'Chilies puff with air and darken to mahogany/purplish-red; fragrant wisps of smoke rise.',
        smell: 'Pungent, smoky toasted chili and citrusy floral Sichuan pepper.',
        textureCheck: 'Chilies become crisp and brittle.',
        whatShouldThisLookLike: 'Darkened, puffed chilies floating in fragrant red oil.',
        tip: 'Keep heat low during this step; dried chilies burn into bitter black ash in 10 seconds if heat is too high.',
        commonMistake: 'Throwing chilies into a smoking hot wok — they will scorch black immediately.',
        moveOnWhen: 'Chilies turn dark purple-red.',
        quickInstructions: 'Fry chilies and peppercorns on medium-low 40s until fragrant and dark mahogany.'
      },
      {
        step: 2,
        title: 'CRANK HEAT & SEAR VELVET CHICKEN CUBES',
        whatYouNeed: ['Marinated chicken cubes'],
        description: 'Crank burner to maximum high heat. Immediately dump the marinated chicken cubes into the wok. Spread quickly across the hot metal. Stir-fry furiously for 2 minutes, breaking up any chicken pieces clinging together, until the meat changes color from pink to white and is 80% cooked.',
        howToDoIt: 'High heat flash-cooks the chicken cubes while the cornstarch marinade locks in internal moisture.',
        heat: 'Maximum High Heat',
        duration: 2,
        visualCues: 'Chicken turns opaque white and edges pick up amber color from the chili oil.',
        hear: 'Intense, roaring sizzle.',
        smell: 'Searing chicken and toasted chili fragrance.',
        textureCheck: 'Plump and springy chicken cubes.',
        whatShouldThisLookLike: 'Opaque chicken cubes tumbling in fragrant red oil.',
        tip: 'Use your spatula to slice between chicken pieces to keep every cube distinct.',
        commonMistake: 'Using chicken breast — breast dries out rapidly; authentic Gongbao demands juicy chicken thigh.',
        moveOnWhen: 'Chicken is opaque and firm.',
        quickInstructions: 'Turn heat to maximum, add chicken, stir-fry 2 mins until opaque.'
      },
      {
        step: 3,
        title: 'TOSS IN AROMATICS & SCALLION ROUNDS',
        whatYouNeed: ['Sliced ginger and garlic', 'Scallion white rounds (Cong Dui)'],
        description: 'Push chicken slightly to the sides. Add sliced ginger, garlic, and the scallion white chunks directly into the center of the wok. Stir-fry for 30 seconds until the garlic is fragrant and scallion whites begin to soften slightly.',
        howToDoIt: 'Adding aromatics after the chicken prevents garlic and ginger from scorching during the initial searing phase.',
        heat: 'High Heat',
        duration: 1,
        visualCues: 'Scallion whites glisten with oil; garlic turns fragrant and translucent.',
        smell: 'Intense burst of garlic, ginger, and sweet allium aromatics.',
        textureCheck: 'Scallions remain crisp-tender.',
        whatShouldThisLookLike: 'Chicken tossed with scallion rounds, garlic, and ginger.',
        tip: 'Keep the wok moving continuously to distribute heat evenly.',
        commonMistake: 'Overcooking scallions until mushy — they should retain an audible crunch.',
        moveOnWhen: 'Garlic and ginger are aromatic.',
        quickInstructions: 'Add ginger, garlic, and scallion rounds; toss 30s over high heat.'
      },
      {
        step: 4,
        title: 'POUR LYCHEE-FLAVOR GLAZE & REDUCE TO GLOSS',
        whatYouNeed: ['Pre-mixed sauce bowl (vinegar, sugar, soy, stock, cornstarch)'],
        description: 'Give the pre-mixed sauce a quick stir to lift any settled cornstarch. Pour the sauce directly into the center of the roaring hot wok. Stir-fry vigorously for 30 seconds. The sauce will bubble furiously and reduce into a lustrous, clear, mahogany glaze that clings tightly to every piece of chicken.',
        howToDoIt: 'Rapid boiling activates the cornstarch instantly, emulsifying with the chili oil into a clinging lacquer without any soupy puddles.',
        heat: 'High Heat',
        duration: 1,
        visualCues: 'Sauce thickens into a glistening, mirror-like mahogany coating; no watery liquid pools in the pan.',
        hear: 'Brisk, bubbling boil.',
        smell: 'Intoxicating sweet-and-sour vinegar aroma tempered by toasted chilies.',
        textureCheck: 'Silky, clingy glaze.',
        whatShouldThisLookLike: 'Glistening mahogany chicken cubes coated in sticky sauce.',
        tip: 'Stir vigorously so the glaze coats all ingredients uniformly before it sets.',
        commonMistake: 'Adding too much liquid — authentic Kung Pao should have a dry, clinging glaze, not a soupy curry.',
        moveOnWhen: 'Glaze is thick, glossy, and clinging.',
        quickInstructions: 'Pour in stirred sauce; toss 30s until thickened into a glossy glaze.'
      },
      {
        step: 5,
        title: 'FOLD IN PEANUTS & SERVE IMMEDIATELY',
        whatYouNeed: ['80g roasted peanuts', 'Serving plate'],
        description: 'Toss in the roasted peanuts. Give two or three final tosses to distribute peanuts through the chicken. TURN OFF HEAT IMMEDIATELY. Transfer to a warm serving dish and serve piping hot.',
        howToDoIt: 'Peanuts must be added in the final 5 seconds off heat so they remain shatteringly crisp and nutty without softening in the sauce.',
        heat: 'Off Heat',
        duration: 1,
        visualCues: 'Vibrant mosaic of golden peanuts, mahogany chicken, dark red chilies, and white scallions.',
        smell: 'Nutty roasted peanuts, sweet-tart glaze, and málà spice.',
        textureCheck: 'Crunchy peanuts against velvety succulent chicken.',
        whatShouldThisLookLike: 'Authentic Sichuan restaurant Kung Pao chicken.',
        tip: 'Warn guests: the whole dried chilies and peppercorns are there for aroma and flavor, not necessarily to be eaten whole!',
        commonMistake: 'Simmering peanuts in the sauce for minutes, turning them soggy and rubbery.',
        moveOnWhen: 'Peanuts folded in and plated immediately.',
        quickInstructions: 'Add peanuts, give 2 tosses off heat, and plate immediately.'
      }
    ],
    commonMistakes: [
      { mistake: 'Peanuts turned soft and soggy.', remedy: 'Peanuts were added too early. Always fold peanuts in at the very end off heat.' },
      { mistake: 'Dish tasted overwhelmingly sour or overly sweet.', remedy: 'Improper balance of Chinkiang vinegar and sugar. Follow the 1:1 ratio for the authentic Li Zhi Wei profile.' }
    ],
    troubleshooting: [
      {
        problem: 'Chicken turned out dry and stringy',
        whatHappened: 'Chicken breast was used or cooked too long.',
        whyItHappened: 'Lean breast dries out quickly in a wok.',
        whatToDoNow: 'Serve with extra sauce over steamed rice.',
        howToPrevent: 'Always use skinless boneless chicken thighs and marinate with cornstarch.'
      }
    ],
    substitutions: [
      { original: 'Dried Sichuan chilies', substitute: 'Dried Arbol chilies or crushed red pepper flakes', notes: 'Arbol chilies provide good heat and browning.' },
      { original: 'Roasted peanuts', substitute: 'Toasted whole cashews (Cashew Chicken variation)', notes: 'Cashews add buttery sweetness.' }
    ],
    safetyNotes: [
      'Take care when frying chilies — airborne capsaicin steam can irritate eyes and lungs.'
    ],
    servingGuide: {
      restingTime: 'Serve immediately.',
      garnishing: 'Sprinkle of toasted crushed Sichuan peppercorns.',
      plating: 'Serve on a wide porcelain plate or shallow bowl.',
      temperature: 'Piping hot.',
      accompaniments: 'Steamed white jasmine rice and cold cucumber salad with sesame oil.'
    }
  },

  // 7. MAPO TOFU (Authentic Sichuan Mapo Doufu)
  {
    id: 'mapo-tofu',
    name: 'Authentic Sichuan Mapo Tofu (Mapo Doufu)',
    cuisine: 'Chinese',
    region: 'China (Sichuan / Chengdu)',
    servings: 4,
    prepTime: 15,
    cookTime: 15,
    difficulty: 'Medium',
    overview: {
      summary: 'The undisputed masterwork of Sichuan cuisine: silken tofu cubes simmered in a crimson, mouth-numbing sauce made with fermented Pixian chili bean paste (Pixian Doubanjiang), douchi (fermented black beans), and crispy browned beef mince, thickened in three gradual cornstarch stages to a glossy coat, and finished with a blizzard of freshly ground Sichuan peppercorn powder, embodying the 7 sacred characters of authentic Mapo (Spicy, Numbing, Aromatic, Hot, Fresh, Tender, Crisp).',
      appearance: 'A vibrant crimson-red bowl of shimmering silken tofu cubes suspended in dark chili oil, flecked with crispy dark beef bits and dusted with fragrant brown peppercorn powder.',
      texture: 'Unbelievable mouthfeel contrast: trembling, custardy, silky tofu that slides across the tongue paired with crispy, crunchy fried minced beef.',
      flavor: 'Intense fermented umami, fiery chili heat (là), electric tongue-buzzing tingle (má), rich savory beef, and sweet garlic greens.',
      restingTimeMinutes: 1
    },
    equipment: [
      { name: '14-inch carbon steel wok or heavy skillet', purpose: 'Distributes high heat to fry bean paste into crimson chili oil.' },
      { name: 'Saucepan with salted simmering water', purpose: 'For poaching tofu cubes before cooking (essential to prevent breaking).' },
      { name: 'Wok spatula or silicone spoon', purpose: 'For gently pushing tofu with the back of the spatula without smashing cubes.' }
    ],
    beforeYouStart: [
      { task: 'Cut 500g medium-firm or silken tofu into uniform 2cm cubes.', durationMinutes: 5 },
      { task: 'Finely mince 2.5 tbsp Pixian Doubanjiang (chili bean paste) on cutting board so large chili skins break down.', durationMinutes: 3 },
      { task: 'Finely mince 1.5 tbsp fermented black beans (douchi), 3 garlic cloves, and 15g fresh ginger.', durationMinutes: 5 },
      { task: 'Toast 1 tbsp red Sichuan peppercorns in a dry skillet for 2 mins, then grind into fine powder.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'Tofu Poaching (Chuan-Shui)', technique: 'Submerge cut tofu cubes in gentle simmering salted water (1 tsp salt in 1 liter water) for 3 minutes before adding to the wok. The hot salt water draws out excess moisture, firms up the exterior proteins, and heats the core so the cubes stay silky yet completely intact without crumbling during stir-frying.' },
      { item: 'Spatula Pushing Technique', technique: 'Never stir tofu in circles! Use the rounded back of the wok spatula to gently push the sauce and tofu from the edge toward the center in slow waves.' }
    ],
    essentialIngredients: [
      { name: 'Medium-firm or firm silken tofu', prep: 'cut into 2cm cubes & salted-water poached', amount: '500g', metric: '500g', imperial: '1.1 lbs', common: '1 block' },
      { name: 'Ground beef chuck (or ground pork)', prep: 'for crispy "su" meat topping', amount: '120g', metric: '120g', imperial: '4.2 oz', common: '1/2 cup' },
      { name: 'Pixian Doubanjiang (Sichuan fermented chili bean paste)', prep: 'finely minced', amount: '2.5 tbsp', metric: '40g', imperial: '1.4 oz', common: '2.5 tbsp' },
      { name: 'Douchi (fermented Chinese black beans)', prep: 'finely chopped', amount: '1.5 tbsp', metric: '20g', imperial: '0.7 oz', common: '1.5 tbsp' },
      { name: 'Sichuan chili powder (or coarse flakes)', prep: 'for bright red color', amount: '1 tbsp', metric: '8g', imperial: '0.3 oz', common: '1 tbsp' },
      { name: 'Garlic cloves & Fresh ginger', prep: 'finely minced', amount: '2 tbsp', metric: '20g', imperial: '0.7 oz', common: '2 tbsp' },
      { name: 'Garlic scapes or scallion greens', prep: 'cut into 1.5cm batons', amount: '3 stalks', metric: '40g', imperial: '1.4 oz', common: '1/2 cup' },
      { name: 'Rich chicken or beef broth', prep: 'unsalted', amount: '300ml', metric: '300ml', imperial: '10 fl oz', common: '1.25 cups' },
      { name: 'Light soy sauce', prep: 'for seasoning', amount: '1 tbsp', metric: '15ml', imperial: '0.5 fl oz', common: '1 tbsp' },
      { name: 'Cornstarch slurry', prep: 'divided in 3 additions (2 tbsp cornstarch + 3 tbsp water)', amount: '5 tbsp', metric: '75ml', imperial: '2.5 fl oz', common: 'mixed' },
      { name: 'Freshly toasted & ground Sichuan peppercorn powder', prep: 'for final blizzard dusting', amount: '1.5 tsp', metric: '4g', imperial: '0.15 oz', common: '1.5 tsp' },
      { name: 'Neutral cooking oil', prep: 'for frying paste into red oil', amount: '3 tbsp', metric: '45ml', imperial: '1.5 fl oz', common: '3 tbsp' }
    ],
    steps: [
      {
        step: 1,
        title: 'POACH TOFU CUBES IN SALTED WATER',
        whatYouNeed: ['Saucepan with 1L water', '1 tsp salt', '500g cubed tofu', 'Slotted spoon'],
        description: 'Bring 1 liter of water and 1 tsp salt to a gentle simmer (not a rolling boil). Slide tofu cubes into the water. Simmer gently for 3 minutes over low heat. Turn off heat and leave tofu resting in the warm water until needed.',
        howToDoIt: 'Salt tightens the protein network of the tofu, preventing the delicate cubes from shattering or weeping water into the sauce.',
        heat: 'Low Simmer',
        duration: 4,
        visualCues: 'Tofu cubes plump slightly and become springy and resilient.',
        textureCheck: 'Soft yet firm enough to handle with a slotted spoon.',
        whatShouldThisLookLike: 'Clean white tofu cubes submerged in warm water.',
        tip: 'Never boil violently or the bubbling water will shatter the corners of the cubes.',
        commonMistake: 'Skipping poaching — raw cold tofu will disintegrate into baby food in the wok.',
        moveOnWhen: 'Tofu has poached 3 mins and is resting in warm water.',
        quickInstructions: 'Simmer tofu cubes in salted water for 3 mins; keep warm until needed.'
      },
      {
        step: 2,
        title: 'FRY MINCED BEEF UNTIL CRISP (SU)',
        whatYouNeed: ['Wok', '1 tbsp oil', '120g ground beef'],
        description: 'Heat 1 tbsp oil in wok over medium heat. Add ground beef. Stir-fry vigorously, breaking meat into tiny granules, for 4 minutes until all moisture evaporates and the beef fries in its own rendered fat until dark brown, crispy, and dry (the "Su" stage).',
        howToDoIt: 'Frying beef until completely crisp removes moisture and concentrates intense savory flavor, providing crunchy texture against the silky tofu.',
        heat: 'Medium Heat',
        duration: 4,
        visualCues: 'Beef transforms from soft pink meat to dark golden, crunchy, micro-pebbles.',
        hear: 'Crackling shallow-fry sizzle.',
        smell: 'Rich roasted beef aroma.',
        textureCheck: 'Crisp and crunchy.',
        whatShouldThisLookLike: 'Crispy browned beef granules.',
        tip: 'Authentic Chengdu Mapo Tofu traditionally uses beef, not pork, for its deeper savory depth.',
        commonMistake: 'Leaving the beef soft and wet — it will turn soggy in the sauce.',
        moveOnWhen: 'Beef is dark brown and crispy.',
        quickInstructions: 'Stir-fry ground beef over medium heat 4 mins until dry and crispy.'
      },
      {
        step: 3,
        title: 'FRY BEAN PASTE INTO CRIMSON CHILI OIL',
        whatYouNeed: ['Crispy beef in wok', '2 tbsp oil', 'Minced Pixian doubanjiang', 'Chopped douchi', 'Chili powder', 'Garlic & ginger'],
        description: 'Reduce heat to medium-low. Push beef to the side. Add 2 tbsp oil, minced Pixian doubanjiang, and douchi black beans to the oil. Sauté slowly for 2 minutes until the oil turns a brilliant, deep ruby-red. Add minced garlic, ginger, and chili powder; sauté for 30 seconds until intensely aromatic.',
        howToDoIt: 'Gently frying doubanjiang dissolves the red pigments into the oil, releasing its fermented umami foundation.',
        heat: 'Medium-Low Heat',
        duration: 3,
        visualCues: 'Oil turns brilliant glowing crimson-red; fragrance fills the entire room.',
        smell: 'Fermented chili, sweet garlic, and earthy black beans.',
        textureCheck: 'Smooth, aromatic red oil paste.',
        whatShouldThisLookLike: 'Gleaming crimson chili oil sizzling around crispy beef and aromatics.',
        tip: 'Keep heat moderate so the bean paste doesn\'t scorch.',
        commonMistake: 'Rushing this step on high heat, which burns the bean paste bitter.',
        moveOnWhen: 'Oil is glowing crimson and aromatic.',
        quickInstructions: 'Sauté doubanjiang and black beans on medium-low 2 mins until oil turns ruby red; add garlic, ginger, chili powder.'
      },
      {
        step: 4,
        title: 'ADD BROTH, GENTLY SLIDE TOFU & SIMMER',
        whatYouNeed: ['300ml chicken broth', 'Warm poached tofu cubes (drained)', '1 tbsp light soy sauce', '1/2 tsp sugar'],
        description: 'Pour 300ml chicken broth into the wok. Add soy sauce and sugar. Bring to a boil over medium-high heat. Using a slotted spoon, lift warm tofu cubes from their water and slide gently into the bubbling crimson sauce. Simmer gently for 4 minutes over medium heat, using the back of the spatula to gently nudge the cubes so they absorb the savory broth.',
        howToDoIt: 'Simmering infuses the bland tofu with the fiery fermented broth through osmosis.',
        heat: 'Medium Heat',
        duration: 4,
        visualCues: 'Sauce bubbles lazily around pristine white cubes; tofu absorbs red color on edges.',
        smell: 'Rich savory broth and spicy chili paste.',
        textureCheck: 'Tofu is piping hot and custardy.',
        whatShouldThisLookLike: 'White tofu cubes simmering in a bubbling crimson sea.',
        tip: 'Never scrape back and forth with spatula edges; push gently with the rounded convex back.',
        commonMistake: 'Stirring like a soup, mashing the tofu into scrambled mess.',
        moveOnWhen: 'Tofu has simmered 4 mins and is fully infused.',
        quickInstructions: 'Add broth, slide in warm tofu cubes, simmer gently for 4 mins over medium heat.'
      },
      {
        step: 5,
        title: 'THE THREE-STAGE STARCH THICKENING & OIL SEPARATION',
        whatYouNeed: ['Cornstarch slurry', 'Garlic greens or scallions'],
        description: 'Add garlic greens. Now execute the 3-stage thickening: Drizzle 1/3 of the slurry around the wok, gently push with back of spatula, and wait 30 seconds. Drizzle 2nd third; sauce thickens and clings. Drizzle final third; simmer for 40 seconds. Suddenly, the thickened sauce will "release" the red chili oil, which floats to the top in a brilliant glossy red sheen.',
        howToDoIt: 'Three gradual additions allow starch to bind the water molecules gradually, preventing the tofu from weeping water later.',
        heat: 'Medium Heat',
        duration: 3,
        visualCues: 'Sauce thickens into a glossy glaze; brilliant red chili oil separates and floats on top.',
        smell: 'Sweet garlic greens and rich chili oil.',
        textureCheck: 'Sauce coats every cube in a velvety red blanket.',
        whatShouldThisLookLike: 'Crimson-glazed tofu crowned with floating red oil.',
        tip: 'The oil separation ("liang-you") is the ultimate hallmark of authentic Sichuan chef technique.',
        commonMistake: 'Dumping all slurry in at once, creating a clumpy gelatinous paste that weeps water within 5 minutes.',
        moveOnWhen: 'Sauce is glossy and red oil floats on surface.',
        quickInstructions: 'Add slurry in 3 gradual additions, simmering between, until sauce is glossy and red oil separates.'
      },
      {
        step: 6,
        title: 'PLATE & DUST WITH SICHUAN PEPPER BLIZZARD',
        whatYouNeed: ['Serving bowl', '1.5 tsp freshly ground Sichuan peppercorn powder'],
        description: 'Gently slide the Mapo Tofu into a deep, warm ceramic bowl. Immediately dust the entire surface with a heavy "blizzard" of freshly ground Sichuan peppercorn powder. Serve piping hot with plenty of steamed rice.',
        howToDoIt: 'The rising heat from the freshly cooked dish vaporizes the aromatic citrusy volatile oils of the raw peppercorn powder, filling the diner\'s nose with electrifying aroma.',
        heat: 'Off Heat',
        duration: 1,
        visualCues: 'A fragrant dusting of brown peppercorn powder sitting atop glistening red chili oil and white tofu.',
        smell: 'Electrifying, citrusy, floral, tingling aroma.',
        textureCheck: 'Velvety smooth tofu, crunchy beef, tingling mouthfeel.',
        whatShouldThisLookLike: 'Masterpiece Sichuan Mapo Doufu.',
        tip: 'Always grind whole peppercorns fresh; pre-ground powder from jars loses its numbing punch in days.',
        commonMistake: 'Cooking the peppercorn powder into the sauce early, which turns it muddy and destroys the fragrant aroma.',
        moveOnWhen: 'Dusted and served immediately.',
        quickInstructions: 'Slide into warm bowl, dust heavily with fresh Sichuan peppercorn powder, serve hot.'
      }
    ],
    commonMistakes: [
      { mistake: 'Tofu shattered into tiny unappealing crumbs.', remedy: 'Tofu was stirred vigorously with a sharp spatula or was not poached in salted water first.' },
      { mistake: 'Sauce turned watery and separated into soup 5 minutes after plating.', remedy: 'Slurry was dumped in all at once rather than in 3 distinct cooking stages.' }
    ],
    troubleshooting: [
      {
        problem: 'Dish lacks that authentic tongue-numbing buzz',
        whatHappened: 'Old, stale Sichuan peppercorn powder was used.',
        whyItHappened: 'Volatile sanshool oils oxidize quickly.',
        whatToDoNow: 'Toast 1 tsp whole peppercorns in a dry pan for 90 seconds, crush in a mortar, and dust generously over the top.',
        howToPrevent: 'Always toast whole red Sichuan peppercorns fresh right before serving.'
      }
    ],
    substitutions: [
      { original: 'Ground beef', substitute: 'Ground pork or finely minced king oyster mushrooms with soaked shiitake', notes: 'Mushroom Mapo Tofu is an exceptionally popular and authentic vegetarian variation.' },
      { original: 'Garlic scapes', substitute: 'Scallion greens or Chinese chives', notes: 'Provide the requisite fresh allium sweetness.' }
    ],
    safetyNotes: [
      'The dish stays scorching hot under its insulating layer of chili oil; take care not to burn your tongue.'
    ],
    servingGuide: {
      restingTime: 'Serve immediately.',
      garnishing: 'Heavy dusting of freshly ground Sichuan peppercorn powder and scallion greens.',
      plating: 'Deep wide ceramic or earthenware bowl.',
      temperature: 'Piping hot.',
      accompaniments: 'Steamed white jasmine rice (indispensable for soaking up the sauce) and cold iced tea.'
    }
  },

  // 8. HOT POT (Sichuan Mala & Clear Broth Dual Hot Pot)
  {
    id: 'hot-pot',
    name: 'Chongqing Dual-Flavor Hot Pot (Yuanyang Huoguo)',
    cuisine: 'Chinese',
    region: 'China (Sichuan / Chongqing)',
    servings: 6,
    prepTime: 30,
    cookTime: 20,
    difficulty: 'Medium',
    overview: {
      summary: 'The ultimate communal Chinese feast: a yin-yang partitioned pot with roaring spicy, numbing Chongqing tallow broth on one side and comforting, collagen-rich chicken-bone and herbal broth on the other, surrounded by paper-thin rolls of marbled beef, prawns, quail eggs, mushrooms, lotus root, and fresh greens, dipped into DIY sesame oil and garlic dipping bowls.',
      appearance: 'A bubbling divided metal cauldron with scarlet red oil bubbling on one side and ivory-white herbal broth on the other, surrounded by an abundant banqueting spread of thinly sliced meats and vegetables.',
      texture: 'Vast array of textures cooked in seconds: melt-in-the-mouth marbled beef ribbons, snappy prawns, crunchy lotus roots, and silky glass noodles.',
      flavor: 'Duality of intense fiery málà spice, beef tallow richness, and gentle herbal chicken sweetness, rounded by fragrant sesame-garlic dipping oil.',
      restingTimeMinutes: 1
    },
    equipment: [
      { name: 'Partitioned Hot Pot (Yuanyang pot) with portable induction burner', purpose: 'Holds two distinct broths simultaneously at the center of the dining table.' },
      { name: 'Wire hot pot strainers (skimmers)', purpose: 'Allows diners to submerge and retrieve delicate ingredients from the boiling broth.' },
      { name: 'Long wooden cooking chopsticks (30cm)', purpose: 'Keeps hands safely away from rising boiling steam while swishing ingredients.' }
    ],
    beforeYouStart: [
      { task: 'Arrange 400g thinly shaved beef ribeye rolls and 300g sliced lamb shoulder on platters.', durationMinutes: 10 },
      { task: 'Clean and arrange vegetables: sliced lotus root, enoki mushrooms, baby bok choy, and fried tofu puffs.', durationMinutes: 10 },
      { task: 'Prepare DIY dipping sauce station: toasted sesame oil, minced garlic, scallions, cilantro, oyster sauce, and crushed peanuts.', durationMinutes: 10 }
    ],
    ingredientPrepGuide: [
      { item: 'Beef Shaving', technique: 'Meats must be shaved paper-thin (1-2mm) across the grain while partially frozen. Paper-thin meats cook to succulent doneness in 8–10 seconds of swishing, staying meltingly tender.' },
      { item: 'Sesame Oil Dipping Bowl (You-Die)', technique: 'Fill dipping bowl with 3 tbsp pure toasted sesame oil and 1 tbsp minced garlic. The cold sesame oil coats the hot food, cooling it down instantly to protect the esophagus while neutralizing harsh chili burn.' }
    ],
    essentialIngredients: [
      { name: 'Thinly shaved hot pot beef ribeye', prep: 'shaved 1.5mm thin rolls', amount: '400g', metric: '400g', imperial: '14 oz', common: '400g' },
      { name: 'Thinly shaved lamb shoulder', prep: 'shaved 1.5mm thin rolls', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '300g' },
      { name: 'Raw tiger prawns', prep: 'whole, heads on, deveined', amount: '12 prawns', metric: '300g', imperial: '10.5 oz', common: '12 pieces' },
      { name: 'Sichuan hot pot soup base block (tallow & chili)', prep: 'authentic Mala block', amount: '200g', metric: '200g', imperial: '7 oz', common: '1 block' },
      { name: 'Rich chicken bone broth', prep: 'simmered with ginger, jujubes & goji berries', amount: '2 liters', metric: '2000ml', imperial: '68 fl oz', common: '8 cups' },
      { name: 'Fresh Enoki mushrooms & King Oyster mushrooms', prep: 'trimmed & sliced', amount: '250g', metric: '250g', imperial: '9 oz', common: '2 packs' },
      { name: 'Lotus root', prep: 'peeled and sliced into 4mm discs', amount: '200g', metric: '200g', imperial: '7 oz', common: '1 root' },
      { name: 'Baby bok choy & Napa cabbage', prep: 'washed & separated', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '4 cups' },
      { name: 'Fried tofu puffs & sweet potato glass noodles', prep: 'noodles soaked in warm water', amount: '200g', metric: '200g', imperial: '7 oz', common: '1 bowl' },
      { name: 'Pure toasted sesame oil', prep: 'for dipping bowls', amount: '200ml', metric: '200ml', imperial: '7 fl oz', common: '1 cup' },
      { name: 'Fresh garlic & cilantro', prep: 'minced for dipping sauce station', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '1 cup' }
    ],
    steps: [
      {
        step: 1,
        title: 'BUILD THE DUAL-BROTH PARTITIONED POT',
        whatYouNeed: ['Divided pot', 'Hot pot base block', '2L chicken broth', 'Aromatics (ginger, scallions, jujubes, goji berries)'],
        description: 'Place partitioned pot on tabletop induction burner. On the SPICY side: place the Sichuan tallow chili block, 4 dried red chilies, 1 tbsp Sichuan peppercorns, and 1 liter chicken broth. On the CLEAR side: add 1 liter chicken broth, 4 slices ginger, 2 scallions tied in a knot, 4 dried red jujubes, and 1 tbsp goji berries.',
        howToDoIt: 'The dual pot accommodates all heat tolerances and allows different ingredients to be cooked in their ideal broth.',
        heat: 'High Heat to boil',
        duration: 8,
        visualCues: 'Spicy block melts into a bubbling, aromatic scarlet tallow cauldron; clear broth turns into a fragrant, bubbling ivory pool.',
        hear: 'Enthusiastic dual boiling bubbling.',
        smell: 'Intense aroma of beef tallow, roasted chilies, and herbal chicken broth.',
        textureCheck: 'Both broths boiling vigorously.',
        whatShouldThisLookLike: 'Iconic yin-yang partitioned bubbling cauldron.',
        tip: 'Keep extra warm broth on hand to replenish the pot as liquid evaporates during the meal.',
        commonMistake: 'Letting spicy broth boil over the center divider into the clear broth.',
        moveOnWhen: 'Both broths are at a full rolling boil.',
        quickInstructions: 'Melt spicy tallow block in 1L broth on one side; simmer clear herbal broth on the other.'
      },
      {
        step: 2,
        title: 'MIX PERSONAL DIPPING BOWLS (YOU-DIE)',
        whatYouNeed: ['Individual small bowls', 'Sesame oil', 'Minced garlic', 'Scallions', 'Cilantro', 'Oyster sauce'],
        description: 'Each diner personalizes their dipping bowl: standard Chongqing ratio is 3 tbsp toasted sesame oil, 1 heaping tsp minced fresh garlic, 1 tsp chopped scallions, and 1 tsp chopped cilantro, with an optional splash of oyster sauce or black vinegar.',
        howToDoIt: 'Sesame oil coats the food, extinguishing excess fire, soothing the stomach lining, and enhancing flavor.',
        heat: 'No Heat',
        duration: 2,
        visualCues: 'Golden sesame oil flecked with green cilantro, scallions, and white garlic.',
        smell: 'Pungent garlic and nutty sesame oil.',
        textureCheck: 'Aromatic dipping oil.',
        whatShouldThisLookLike: 'Customized dipping sauce bowls for each guest.',
        tip: 'Avoid thick peanut sauces for Sichuan tallow hot pot; pure sesame oil is authentic and functional.',
        commonMistake: 'Skipping the dipping sauce — eating food straight out of 100°C chili oil burns tastebuds.',
        moveOnWhen: 'All diners have prepared their bowls.',
        quickInstructions: 'Mix sesame oil, minced garlic, scallions, and cilantro in small dipping bowls.'
      },
      {
        step: 3,
        title: 'THE "SEVEN-UP-EIGHT-DOWN" MEAT SWISH (QI SHANG BA XIA)',
        whatYouNeed: ['Paper-thin beef/lamb slices', 'Long chopsticks', 'Boiling spicy or clear broth'],
        description: 'Pick up a single slice of beef with your chopsticks. Submerge it into the boiling broth. Execute the traditional technique: swish down for 1 second, lift up out of liquid for 1 second, repeat 7 or 8 times (takes about 10–12 seconds total). The meat will turn from crimson red to cooked pinkish-grey.',
        howToDoIt: 'Swishing in and out cooks the meat gently without boiling out its natural moisture, yielding maximum tenderness.',
        heat: 'High Rolling Boil',
        duration: 1,
        visualCues: 'Meat curls and transitions from raw red to juicy cooked brown.',
        textureCheck: 'Melts on the tongue with delicate chew.',
        whatShouldThisLookLike: 'Succulent, freshly cooked beef curl.',
        tip: 'Never let go of your meat slice in the pot or it will overcook into leathery rubber.',
        commonMistake: 'Dumping an entire plate of cold raw meat into the pot, which kills the boil.',
        moveOnWhen: 'Meat is cooked and dipped in sauce.',
        quickInstructions: 'Swish meat in boiling broth for 10-12 seconds ("seven up, eight down") until just cooked.'
      },
      {
        step: 4,
        title: 'SIMMER ROOT VEGETABLES, MUSHROOMS & TOFU',
        whatYouNeed: ['Lotus root', 'Mushrooms', 'Tofu puffs', 'Wire strainers'],
        description: 'Drop dense items that take longer to cook into the boiling broth: lotus roots (3 mins), mushrooms (4 mins), and tofu puffs (2 mins). Use wire strainers to keep track of them. Tofu puffs will soak up the broth like sponges.',
        howToDoIt: 'Root vegetables and mushrooms sweeten and flavor the broth as they simmer.',
        heat: 'Medium-High Boil',
        duration: 4,
        visualCues: 'Tofu puffs swell with hot broth; mushrooms soften and glisten; lotus root turns translucent.',
        textureCheck: 'Crunchy lotus, chewy mushrooms, juicy tofu puffs.',
        whatShouldThisLookLike: 'Ingredients simmering peacefully beneath the surface.',
        tip: 'Cook delicate greens (bok choy, spinach) for 30 seconds only so they stay crisp and green.',
        commonMistake: 'Forgetting mushrooms in the pot for 30 minutes until they dissolve.',
        moveOnWhen: 'Vegetables and mushrooms are tender.',
        quickInstructions: 'Simmer lotus roots, mushrooms, and tofu puffs for 3-4 mins; retrieve with wire strainer.'
      },
      {
        step: 5,
        title: 'COOK GLASS NOODLES & SAVOR COMMUNAL FEAST',
        whatYouNeed: ['Sweet potato glass noodles', 'Wire strainer'],
        description: 'Towards the end of the feast when the broths are intensely concentrated and flavorful, drop soaked glass noodles into the wire basket and submerge for 2 minutes until glassy, chewy, and elastic. Lift, drain, and drop into dipping bowl.',
        howToDoIt: 'Sweet potato noodles absorb the rich concentrated broth, providing a deeply satisfying finish to the meal.',
        heat: 'Medium-High Boil',
        duration: 3,
        visualCues: 'Noodles turn crystal-clear, bouncy, and glassy.',
        smell: 'Rich concentrated broth aroma.',
        textureCheck: 'Super chewy and springy ("Q-elastic").',
        whatShouldThisLookLike: 'Glassy noodles dripping with savory broth.',
        tip: 'Keep conversation flowing — hot pot is designed as a leisurely 2-hour communal social experience!',
        commonMistake: 'Drinking the spicy tallow broth directly from the pot (it is meant for cooking, not drinking!).',
        moveOnWhen: 'Feast is complete.',
        quickInstructions: 'Cook glass noodles for 2 mins in strainer; enjoy communal dining with friends.'
      }
    ],
    commonMistakes: [
      { mistake: 'Meat was tough and chewy.', remedy: 'Meat was dumped in bulk and boiled too long. Swish individual slices for 10-12 seconds only.' },
      { mistake: 'Broth boiled away and burned.', remedy: 'Hot pot needs periodic replenishment. Keep a kettle of boiling broth on hand to top up both sides.' }
    ],
    troubleshooting: [
      {
        problem: 'Spicy broth is overwhelmingly hot for some diners',
        whatHappened: 'Chili and peppercorns concentrated as water boiled off.',
        whyItHappened: 'Evaporation intensifies spice.',
        whatToDoNow: 'Add more clear chicken broth to dilute the spicy side; add extra sesame oil to dipping bowl.',
        howToPrevent: 'Top up with unsalted broth regularly.'
      }
    ],
    substitutions: [
      { original: 'Sichuan tallow base block', substitute: 'Vegetable oil hot pot paste or Tom Yum paste', notes: 'Vegetarian hot pot bases are lighter and equally delicious.' },
      { original: 'Lamb shoulder', substitute: 'Pork belly slices or firm fish fillets (snakehead/cod)', notes: 'Fish slices cooked in hot pot are magnificent.' }
    ],
    safetyNotes: [
      'Always use dedicated cooking chopsticks for raw meats and separate eating chopsticks for cooked food.'
    ],
    servingGuide: {
      restingTime: 'Eat continuously as food is cooked.',
      garnishing: 'Fresh cilantro, scallions, crushed peanuts, and sesame oil.',
      plating: 'Communal partitioned hot pot in center of table with ingredient platters surrounding.',
      temperature: 'Piping hot.',
      accompaniments: 'Ice-cold beer, sweetened herbal tea (Wanglaoji), or sour plum juice (Suanmeitang).'
    }
  },

  // 9. BAO (Steamed BBQ Pork Buns / Char Siu Bao)
  {
    id: 'bao',
    name: 'Steamed Cantonese BBQ Pork Buns (Char Siu Bao)',
    cuisine: 'Chinese',
    region: 'China (Guangdong / Hong Kong)',
    servings: 6,
    prepTime: 45,
    cookTime: 15,
    difficulty: 'Hard',
    overview: {
      summary: 'The holy grail of Cantonese Dim Sum: snow-white, pillowy soft, cloud-like steamed yeast buns that naturally split open at the top ("laughing mouth") to reveal a glistening, savory-sweet filling of tender diced honey-roast pork (Char Siu) in a rich caramelized oyster-shallot gravy.',
      appearance: 'Pristine, snow-white, cotton-soft steamed domes naturally cracked into three smiling petals at the crown, revealing mahogany BBQ pork filling within.',
      texture: 'Impossibly light, tender, fluffy, melt-in-the-mouth bun crumb enclosing succulent, juicy pork chunks and silky glaze.',
      flavor: 'Delicate gentle sweetness from the steamed dough contrasting with deeply savory, sweet, smoky honey-roast pork and aromatic shallot gravy.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Bamboo steamer baskets with woven lid', purpose: 'Essential: bamboo lid absorbs condensation so water droplets never drip onto delicate white buns.' },
      { name: 'Square parchment paper liners (7cm x 7cm)', purpose: 'Prevents raw buns from sticking to the steamer slats.' },
      { name: 'Small rolling pin', purpose: 'For rolling bun skins with thick centers and thin edges.' }
    ],
    beforeYouStart: [
      { task: 'Finely dice 250g Char Siu (Chinese roast BBQ pork) into 6mm neat cubes.', durationMinutes: 5 },
      { task: 'Prepare the Char Siu gravy: simmer 2 minced shallots in 1 tbsp oil, add 2 tbsp oyster sauce, 1 tbsp soy sauce, 2 tbsp sugar, 1/2 cup chicken stock, and thicken with 1.5 tbsp cornstarch slurry until glossy; fold in diced pork and chill completely.', durationMinutes: 15 },
      { task: 'Measure 250g low-protein Hong Kong flour (Bao flour or cake flour) and 1 tsp instant yeast.', durationMinutes: 3 }
    ],
    ingredientPrepGuide: [
      { item: 'Bao Flour Selection', technique: 'Must use low-protein bleached wheat flour (known as "Hong Kong Bao Flour" or cake flour). Standard high-protein bread flour produces yellow, chewy, bread-like buns rather than the signature snow-white, cottony, pillowy texture.' },
      { item: 'Chilling the Filling', technique: 'The Char Siu filling MUST be chilled cold in the refrigerator until the gravy solidifies into a firm gel. If warm or runny filling is wrapped in raw yeast dough, the moisture dissolves the seam and prevents the bun from rising.' }
    ],
    essentialIngredients: [
      { name: 'Hong Kong Bao flour or cake flour (low protein)', prep: 'sifted for airy texture', amount: '250g', metric: '250g', imperial: '9 oz', common: '2 cups' },
      { name: 'Instant dry yeast', prep: 'active', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Baking powder (double acting)', prep: 'provides the violent top split ("laugh")', amount: '1.5 tsp', metric: '6g', imperial: '0.2 oz', common: '1.5 tsp' },
      { name: 'Granulated sugar', prep: 'feeds yeast & tenderizes crumb', amount: '40g', metric: '40g', imperial: '1.4 oz', common: '3 tbsp' },
      { name: 'Warm water or whole milk (35°C / 95°F)', prep: 'for kneading', amount: '130ml', metric: '130ml', imperial: '4.4 fl oz', common: '1/2 cup + 1 tbsp' },
      { name: 'Lard or neutral cooking oil', prep: 'whitens and tenderizes dough crumb', amount: '1 tbsp', metric: '15g', imperial: '0.5 oz', common: '1 tbsp' },
      { name: 'Char Siu (Chinese roast pork)', prep: 'diced into 6mm cubes', amount: '250g', metric: '250g', imperial: '9 oz', common: '1.5 cups' },
      { name: 'Oyster sauce & Light soy sauce', prep: 'for gravy', amount: '3 tbsp', metric: '45ml', imperial: '1.5 fl oz', common: '3 tbsp' },
      { name: 'Shaoxing wine & Toasted sesame oil', prep: 'for gravy aromatics', amount: '1 tbsp each', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp total' },
      { name: 'Cornstarch slurry', prep: 'for thick glaze', amount: '3 tbsp', metric: '45ml', imperial: '1.5 fl oz', common: 'mixed' }
    ],
    steps: [
      {
        step: 1,
        title: 'KNEAD & PROOF THE SNOW-WHITE BAO DOUGH',
        whatYouNeed: ['250g bao flour', '1 tsp yeast', '1.5 tsp baking powder', '40g sugar', '130ml warm water/milk', '1 tbsp lard/oil'],
        description: 'Whisk flour, sugar, yeast, and baking powder in a bowl. Pour in warm water. Mix with chopsticks into shaggy dough. Add lard/oil and knead on a clean board for 8 minutes until satin-smooth, supple, and non-sticky. Place in a lightly oiled bowl, cover with a damp cloth, and proof in a warm place for 45 minutes until doubled in size.',
        howToDoIt: 'Thorough kneading develops a fine, uniform gluten mesh, while lard whitens the dough and produces a tender, melt-in-the-mouth texture.',
        heat: 'Warm ambient (30°C / 86°F)',
        duration: 50,
        visualCues: 'Dough expands to double volume; pressing a floured finger leaves a clean indentation that does not spring back.',
        textureCheck: 'Soft as a marshmallow, smooth and supple.',
        whatShouldThisLookLike: 'Pristine, smooth white ball of proofed dough.',
        tip: 'Using warm milk instead of water makes the buns even softer and creamier in appearance.',
        commonMistake: 'Using all-purpose or bread flour, which turns the buns creamy yellow and dense like sandwich bread.',
        moveOnWhen: 'Dough has doubled in volume.',
        quickInstructions: 'Knead flour, yeast, baking powder, sugar, water, and lard for 8 mins; proof 45 mins.'
      },
      {
        step: 2,
        title: 'DIVIDE, FLATTEN & ROLL WRAPPERS',
        whatYouNeed: ['Proofed dough', 'Rolling pin', 'Parchment paper squares'],
        description: 'Punch down dough to expel large air pockets. Knead for 1 minute on a lightly floured surface to eliminate all bubbles. Roll into an even log and divide into 8 equal pieces (approx 50g each). Shape each into a smooth ball. Using a small rolling pin, roll from edges toward center to create a 10cm disc with a thick domed center and thin edges.',
        howToDoIt: 'Expelling air bubbles creates a silky, fine-textured bun interior without unsightly air holes.',
        heat: 'No Heat',
        duration: 10,
        visualCues: 'Smooth circular dough discs with thick raised centers and thin perimeters.',
        textureCheck: 'Silky, supple, and elastic.',
        whatShouldThisLookLike: 'Stack of circular bun wrappers.',
        tip: 'Keep unused dough balls covered with plastic wrap so they don\'t dry out.',
        commonMistake: 'Rolling the center thin — the heavy filling will tear through the bottom.',
        moveOnWhen: '8 wrappers are rolled.',
        quickInstructions: 'Punch down dough, divide into 8 pieces, roll into discs with thick center and thin edges.'
      },
      {
        step: 3,
        title: 'FILL & PLEAT THE "LAUGHING" FLOWER CROWN',
        whatYouNeed: ['Dough discs', 'Chilled solid Char Siu filling', '8 parchment squares'],
        description: 'Hold a wrapper in your palm. Place 2 generous tablespoons (approx 40g) of chilled firm filling in the center. Use your thumb to press filling down while your other hand pleats the edges clockwise around the filling (approx 12–14 pleats). Gather pleats at the top and give a firm pinch, leaving the very tip slightly twisted and pointed upwards. Place bun on a parchment square.',
        howToDoIt: 'Leaving the top gather pinched with upward tension allows steam to pop the crown open during rapid steaming.',
        heat: 'No Heat',
        duration: 12,
        visualCues: 'Neat, pleated round white buns resting upright on parchment squares.',
        textureCheck: 'Tightly sealed with no sauce leaking through pleats.',
        whatShouldThisLookLike: 'Pristine pleated buns ready for the steamer.',
        tip: 'Wipe hands with a damp towel if sauce gets on your fingers; sauce on the dough edges prevents seams from sealing.',
        commonMistake: 'Using warm runny filling — the dough turns soggy and cannot hold pleats.',
        moveOnWhen: 'All 8 buns are pleated and resting on parchment.',
        quickInstructions: 'Place 2 tbsp chilled filling in center, pleat edges around, pinch top upward, place on parchment.'
      },
      {
        step: 4,
        title: 'FINAL PROOF (15 MINUTES)',
        whatYouNeed: ['Buns on parchment', 'Bamboo steamer'],
        description: 'Arrange buns in bamboo steamer baskets, leaving at least 5cm (2 inches) of space between each bun and the basket walls. Cover with the bamboo lid and let proof for 15 minutes at warm room temperature.',
        howToDoIt: 'A short second proof relaxes the gluten and restarts yeast fermentation, guaranteeing a light, airy rise in the steamer.',
        heat: 'Room Temperature',
        duration: 15,
        visualCues: 'Buns swell by about 30%, looking soft, plump, and puffy.',
        textureCheck: 'Light and pillowy; indents spring back slowly.',
        whatShouldThisLookLike: 'Plump, puffy white raw buns.',
        tip: 'Don\'t over-proof or the buns will collapse into flat wrinkled discs when steamed.',
        commonMistake: 'Crowding buns too close together — they will expand and fuse into one giant blob.',
        moveOnWhen: 'Buns are plump and puffy after 15 minutes.',
        quickInstructions: 'Rest buns in covered bamboo steamer for 15 mins until puffy.'
      },
      {
        step: 5,
        title: 'HIGH-HEAT STEAM & THE 3-MINUTE REST',
        whatYouNeed: ['Wok with boiling water', 'Bamboo steamer with buns and lid', 'Kitchen timer'],
        description: 'Bring water in wok to a roaring boil over maximum high heat. Set bamboo steamer on top. Cover tightly with bamboo lid. Steam over furious high heat for 12 minutes without opening. TURN OFF HEAT. LEAVE THE LID ON UNDISTURBED FOR 3 MINUTES. (Crucial step!). Remove lid to reveal glorious, snow-white, smiling buns.',
        howToDoIt: 'Violent high steam causes baking powder and yeast to expand simultaneously, popping the crown open into a "laughing mouth". Resting 3 minutes off-heat prevents sudden cold air shock from collapsing the fluffy crumb.',
        heat: 'Maximum High Steam 12 mins, then OFF 3 mins',
        duration: 15,
        visualCues: 'Pristine snow-white buns cracked into three blooming petals at the top, showing glistening mahogany BBQ pork inside.',
        hear: 'Roaring steam bubbling beneath the steamer.',
        smell: 'Sweet steamed dough, honey, and rich BBQ pork.',
        textureCheck: 'Impossibly light, cottony, pillowy soft crumb.',
        whatShouldThisLookLike: 'Classic dim sum teahouse "laughing" Char Siu Bao.',
        tip: 'Never lift the lid during steaming or immediately after shutting off heat — sudden temperature drops cause buns to deflate and wrinkle like prunes.',
        commonMistake: 'Using a metal lid — condensation drops from metal onto the dough, leaving yellow water pockmarks.',
        moveOnWhen: 'Resting complete; lid removed to reveal fluffy buns.',
        quickInstructions: 'Steam on high heat for 12 mins, turn off heat and rest covered for 3 mins, then unlid.'
      }
    ],
    commonMistakes: [
      { mistake: 'Buns collapsed, shrank, and turned wrinkled after steaming.', remedy: 'Steamer lid was pulled off immediately when heat was turned off. Always let buns rest covered for 3 minutes off heat.' },
      { mistake: 'Buns were yellow and dense instead of snow-white and fluffy.', remedy: 'Regular high-protein bread flour was used. Always use low-protein Hong Kong Bao flour or cake flour.' }
    ],
    troubleshooting: [
      {
        problem: 'Buns didn\'t split open ("laugh") at the top',
        whatHappened: 'Baking powder was stale or steam heat was too low.',
        whyItHappened: 'Violent expansion from fresh double-acting baking powder and high heat is required to pop the seams.',
        whatToDoNow: 'They still taste extraordinary! Enjoy as classic sealed baozi.',
        howToPrevent: 'Use fresh baking powder and ensure water is at a roaring boil before placing steamer on top.'
      }
    ],
    substitutions: [
      { original: 'Char Siu pork', substitute: 'Stir-fried minced chicken or seasoned braised mushrooms with tofu', notes: 'Vegetarian mushroom baozi is a classic dim sum staple.' },
      { original: 'Hong Kong Bao flour', substitute: 'Cake flour (80%) mixed with cornstarch (20%)', notes: 'Produces an exceptionally tender, white crumb.' }
    ],
    safetyNotes: [
      'Take care when removing the bamboo lid to avoid direct steam burns.'
    ],
    servingGuide: {
      restingTime: '1 minute.',
      garnishing: 'Serve directly in the steaming bamboo baskets.',
      plating: 'Bamboo steamer basket set on a serving plate.',
      temperature: 'Piping hot and steaming.',
      accompaniments: 'Hot pot of Chrysanthemum or Pu-erh tea.'
    }
  },

  // 10. WONTONS (Hong Kong Shrimp & Pork Wonton Soup)
  {
    id: 'wontons',
    name: 'Hong Kong Shrimp & Pork Wonton Soup (Hun Tun)',
    cuisine: 'Chinese',
    region: 'China (Hong Kong / Guangdong)',
    servings: 4,
    prepTime: 35,
    cookTime: 10,
    difficulty: 'Medium',
    overview: {
      summary: 'The pride of Hong Kong noodle houses: plump "goldfish-tailed" wontons packed with crunchy tiger prawns, minced pork, toasted flounder powder, and white pepper, wrapped in gossamer-thin yellow egg wrappers, boiled until floating, and served in an intensely aromatic supreme broth made from dried flounder, shrimp shells, and yellow chives.',
      appearance: 'Delicate translucent wontons with billowing silk-like skirts floating like miniature goldfish in a sparkling golden broth, showered with bright yellow chives.',
      texture: 'Paper-thin wrapper that slips down the throat like silk, giving way to an explosive, snappy crunch from fresh prawns and juicy pork.',
      flavor: 'Deep ocean seafood sweetness, smoky dried flounder umami, nutty toasted sesame oil, and fragrant herbal yellow chives.',
      restingTimeMinutes: 1
    },
    equipment: [
      { name: 'Large 6-quart stockpot for boiling wontons', purpose: 'Abundant boiling water prevents delicate wonton wrappers from breaking or clumping.' },
      { name: 'Fine-mesh noodle spider or strainer', purpose: 'Gently cradles and lifts delicate wontons without tearing gossamer skirts.' },
      { name: 'Soup pot for supreme broth', purpose: 'Keeps broth piping hot for ladling.' }
    ],
    beforeYouStart: [
      { task: 'Peel, devein, and pat 300g tiger prawns bone-dry; cut into 1cm chunks.', durationMinutes: 10 },
      { task: 'Toast 1 tbsp dried flounder fish powder (Zuo Yu Fen) in a dry pan until intensely fragrant (the secret authentic Hong Kong aroma).', durationMinutes: 3 },
      { task: 'Slice 1 bunch of Chinese yellow chives (Jiu Huang) into 2cm batons.', durationMinutes: 3 }
    ],
    ingredientPrepGuide: [
      { item: 'Goldfish Tail Folding (Jin-Yu Wonton)', technique: 'Place 1 heaping teaspoon of filling in the center of the square wrapper. Fold edges loosely together in your fist and give a gentle, decisive pinch right above the filling. Do NOT roll or press pleats — leave the loose wrapper corners flared out like the billowing tail fins of a swimming goldfish.' },
      { item: 'Separate Boiling Water', technique: 'ALWAYS boil wontons in plain water in a separate pot, never in the serving soup broth! Boiling starch from wrappers would turn the clear broth cloudy and starchy.' }
    ],
    essentialIngredients: [
      { name: 'Thin Hong Kong square wonton wrappers (egg & flour)', prep: 'room temperature', amount: '24 wrappers', metric: '24 wrappers', imperial: '24 wrappers', common: '1 pack' },
      { name: 'Raw tiger prawns', prep: 'peeled, deveined, dried & cut into 1cm chunks', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '300g' },
      { name: 'Ground pork shoulder (70/30 meat to fat)', prep: 'chilled', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '150g' },
      { name: 'Dried flounder powder (Zuo Yu Fen) or ground dried shrimp', prep: 'toasted fragrant', amount: '1 tbsp', metric: '10g', imperial: '0.35 oz', common: '1 tbsp' },
      { name: 'Light soy sauce', prep: 'seasoning', amount: '1 tbsp', metric: '15ml', imperial: '0.5 fl oz', common: '1 tbsp' },
      { name: 'Shaoxing rice wine', prep: 'marinade', amount: '1 tbsp', metric: '15ml', imperial: '0.5 fl oz', common: '1 tbsp' },
      { name: 'Toasted sesame oil', prep: 'divided (filling & soup)', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp' },
      { name: 'Ground white pepper', prep: 'essential for authentic heat', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Rich chicken & dried shrimp stock', prep: 'piping hot supreme broth', amount: '1.2 liters', metric: '1200ml', imperial: '40 fl oz', common: '5 cups' },
      { name: 'Chinese yellow chives (Jiu Huang) or scallions', prep: 'cut into 2cm lengths', amount: '1 bunch', metric: '60g', imperial: '2.1 oz', common: '1/2 cup' }
    ],
    steps: [
      {
        step: 1,
        title: 'WHIP THE CRUNCHY PRAWN & PORK FILLING',
        whatYouNeed: ['Prawn chunks', 'Ground pork', 'Toasted flounder powder', 'Soy sauce', 'Shaoxing wine', '1 tsp sesame oil', 'White pepper', 'Salt & sugar'],
        description: 'Combine ground pork, 1/2 tsp salt, 1/2 tsp sugar, and white pepper in a bowl. Stir vigorously in one direction for 1 minute until sticky. Add prawn chunks, toasted flounder powder, soy sauce, Shaoxing wine, and 1 tsp sesame oil. Mix gently with hands until evenly distributed. Chill in refrigerator for 20 minutes.',
        howToDoIt: 'Whipping the pork first creates a bouncy binding paste, while folding in whole prawn chunks preserves their signature crunchy pop.',
        heat: 'No Heat',
        duration: 5,
        visualCues: 'Glossy, cohesive filling specked with pink prawn chunks and golden flounder powder.',
        smell: 'Toasted dried seafood, sesame oil, and white pepper.',
        textureCheck: 'Sticky meat binding crunchy whole prawn pieces.',
        whatShouldThisLookLike: 'Chilled, glistening wonton filling.',
        tip: 'Ensure prawns are bone-dry before mixing so filling doesn\'t turn watery.',
        commonMistake: 'Pureeing prawns in a food processor into paste — turns wontons mushy without texture.',
        moveOnWhen: 'Filling is chilled and cohesive.',
        quickInstructions: 'Whip pork with seasonings until sticky; fold in prawn chunks and flounder powder; chill 20 mins.'
      },
      {
        step: 2,
        title: 'FOLD GOSSAMER GOLDFISH-TAIL WONTONS',
        whatYouNeed: ['24 wonton wrappers', 'Chilled filling', 'Small bowl of water'],
        description: 'Lay a square wrapper flat in your palm. Place 1 heaping teaspoon (approx 15g) of filling in the center. Lightly dab a drop of water on two edges. Curl your hand loosely into an "O" shape, allowing the wrapper to drop into the opening. Gather the wrapper together above the filling and give one decisive, firm pinch to seal the neck. Leave the flared wrapper corners loose and billowing like goldfish fins.',
        howToDoIt: 'The quick pinch seal leaves the loose wrapper corners free to float like silk in the boiling broth.',
        heat: 'No Heat',
        duration: 15,
        visualCues: 'Plump round filling nugget crowned with a loose, billowing yellow silk tail fin.',
        textureCheck: 'Firmly sealed neck with airy, loose wrapper tails.',
        whatShouldThisLookLike: 'A flock of delicate yellow goldfish wontons.',
        tip: 'Don\'t over-press the skirt pleats flat; keep them loose and ruffled.',
        commonMistake: 'Folding into tight dense triangles like tortellini, which destroys the silky mouthfeel.',
        moveOnWhen: 'All 24 wontons are folded and resting on a tray.',
        quickInstructions: 'Place filling on wrapper, cup in hand, pinch firmly above filling leaving loose skirt tails.'
      },
      {
        step: 3,
        title: 'HEAT SUPREME BROTH & PREPARE BOWLS',
        whatYouNeed: ['Soup pot', '1.2L chicken & shrimp broth', '4 soup bowls', 'Yellow chives', 'White pepper', 'Sesame oil'],
        description: 'Bring 1.2 liters of chicken and shrimp broth to a rolling simmer in a saucepan. Into each of the 4 warm soup bowls, add 1/4 tsp toasted sesame oil, a pinch of ground white pepper, and 2 tablespoons of sliced yellow chives.',
        howToDoIt: 'Placing the aromatics in the raw bowls first blooms their flavors instantly when piping hot broth is ladled over them.',
        heat: 'Medium Heat',
        duration: 4,
        visualCues: 'Clear, glistening golden broth simmering gently.',
        smell: 'Sweet ocean shrimp and rich chicken broth.',
        textureCheck: 'Steaming hot broth.',
        whatShouldThisLookLike: 'Prepared bowls waiting for dumplings and broth.',
        tip: 'Yellow chives are milder, sweeter, and more fragrant than green scallions, providing that quintessential Hong Kong teahouse aroma.',
        commonMistake: 'Boiling the yellow chives in the pot — they turn mushy and lose their crisp sweetness.',
        moveOnWhen: 'Broth is simmering and bowls are dressed.',
        quickInstructions: 'Simmer broth; dress bowls with sesame oil, white pepper, and yellow chives.'
      },
      {
        step: 4,
        title: 'BOIL WONTONS TO TRANSLUCENT FLOAT',
        whatYouNeed: ['6-quart pot of boiling water', '24 wontons', 'Spider strainer'],
        description: 'Bring a large pot of unsalted water to a rolling boil over high heat. Drop wontons into the water. Stir gently once with the back of a ladle to prevent sticking. Cook over medium-high heat for 3 to 4 minutes. The wontons will float to the surface with translucent wrappers revealing pink shrimp within.',
        howToDoIt: 'Gentle boiling cooks the delicate wrapper and prawn core simultaneously without tearing the delicate skirts.',
        heat: 'Medium-High Boil',
        duration: 4,
        visualCues: 'Wontons float buoyantly; yellow wrappers turn glassy and translucent; pink shrimp shows through.',
        smell: 'Delicate egg wrapper and sweet seafood aroma.',
        textureCheck: 'Wrapper feels silky and tender; core is firm and springy.',
        whatShouldThisLookLike: 'Floating, billowy wontons swimming in the pot.',
        tip: 'Check one wonton: slice open to ensure prawns have turned opaque coral throughout.',
        commonMistake: 'Boiling on a violent rolling boil, which tears the delicate wrapper tails off.',
        moveOnWhen: 'All wontons float and are cooked through (3-4 mins).',
        quickInstructions: 'Boil wontons for 3-4 mins in abundant water until they float and skins turn translucent.'
      },
      {
        step: 5,
        title: 'LIFT, DRAIN & ASSEMBLE WITH BROTH',
        whatYouNeed: ['Spider strainer', 'Ladle', 'Prepared bowls'],
        description: 'Ladle piping hot supreme broth into each prepared bowl (about 300ml per bowl). Scoop 6 wontons out of the boiling water with the spider strainer, shake off excess water thoroughly, and slide gently into the hot broth. Yellow chives will float to the surface around the swimming wontons.',
        howToDoIt: 'Draining cooking water thoroughly ensures the supreme broth remains crystal-clear and undiluted.',
        heat: 'Off Heat',
        duration: 1,
        visualCues: 'Translucent wontons floating in clear golden broth with yellow chives and floating drops of sesame oil.',
        smell: 'Incredible dried flounder, shrimp, and sesame aroma.',
        textureCheck: 'Silky wrapper slip with an audible, juicy prawn crunch.',
        whatShouldThisLookLike: 'Authentic Hong Kong wonton soup bowl.',
        tip: 'Serve with a saucer of red vinegar or Chiu Chow chili oil on the side.',
        commonMistake: 'Letting cooked wontons sit in the strainer while making broth — wrappers will fuse into a sticky lump.',
        moveOnWhen: 'Assembled and served immediately.',
        quickInstructions: 'Ladle hot broth into dressed bowls; lift wontons, drain water, slide 6 wontons per bowl, serve hot.'
      }
    ],
    commonMistakes: [
      { mistake: 'Wonton skins tore and filling spilled into the pot.', remedy: 'Water was boiling too violently or wrappers were overfilled. Keep water at a gentle boil and use 1 tsp filling per wrapper.' },
      { mistake: 'Soup tasted bland and starchy.', remedy: 'Wontons were boiled directly in the soup broth. Always boil wontons in a separate pot of plain water.' }
    ],
    troubleshooting: [
      {
        problem: 'Wonton wrappers dried out and cracked while wrapping',
        whatHappened: 'Wrappers were exposed to dry kitchen air.',
        whyItHappened: 'Flour wrappers lose moisture in minutes.',
        whatToDoNow: 'Cover remaining wrappers with a slightly damp paper towel immediately.',
        howToPrevent: 'Keep wrapper stack covered under a damp towel while folding.'
      }
    ],
    substitutions: [
      { original: 'Dried flounder powder (Zuo Yu Fen)', substitute: '1 tsp ground dried baby shrimp (Xia Mi) or dashi powder', notes: 'Provides that irreplaceable seafood umami depth in the filling.' },
      { original: 'Chinese yellow chives', substitute: 'Finely sliced scallion greens', notes: 'Good fresh alternative.' }
    ],
    safetyNotes: [
      'Prawn and pork filling must reach internal temperature of 74°C (165°F).'
    ],
    servingGuide: {
      restingTime: 'Serve immediately.',
      garnishing: 'Yellow chives, white pepper, and sesame oil.',
      plating: 'Deep ceramic Chinese soup bowls with a porcelain soup spoon.',
      temperature: 'Piping hot.',
      accompaniments: 'Hong Kong red vinegar (for dipping wontons) and steamed Chinese broccoli (Gai Lan) with oyster sauce.'
    }
  },

  // 11. CHINESE SPRING ROLLS (Cantonese Chun Juan)
  {
    id: 'chinese-spring-rolls',
    name: 'Cantonese Crispy Golden Spring Rolls (Chun Juan)',
    cuisine: 'Chinese',
    region: 'China (Guangdong / Hong Kong)',
    servings: 4,
    prepTime: 30,
    cookTime: 15,
    difficulty: 'Medium',
    overview: {
      summary: 'The golden symbols of wealth and renewal: feather-light, glass-shattering crispy pastry rolls stuffed with shredded roast pork, crunchy bamboo shoots, wood ear mushrooms, carrots, and sweet cabbage in a savory oyster-sesame glaze, wrapped tightly in thin spring roll wrappers and deep-fried to an iridescent, blistered amber crispness.',
      appearance: 'Sleek, golden-amber cylindrical rolls with paper-thin blistered skins, sliced diagonally on a platter to reveal colorful vegetable and pork filling, paired with Worcestershire sauce.',
      texture: 'Shatteringly crisp, delicate, non-greasy pastry crunch giving way to juicy, tender, crunchy stir-fried vegetable filling.',
      flavor: 'Savory oyster sauce umami, sweet cabbage, earthy wood ear mushrooms, and fragrant toasted sesame.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: '14-inch carbon steel wok or Dutch oven for deep frying', purpose: 'Maintains steady oil temperature for uniform golden browning.' },
      { name: 'Deep-fry / candy thermometer', purpose: 'Monitors exact oil temperature (175°C / 350°F).' },
      { name: 'Wire skimmer (spider) and wire cooling rack', purpose: 'Lifts rolls and drains excess surface oil so skins stay crispy.' }
    ],
    beforeYouStart: [
      { task: 'Finely julienne 200g cabbage, 1 carrot, 3 rehydrated wood ear mushrooms, and 50g bamboo shoots into 4cm matchsticks.', durationMinutes: 10 },
      { task: 'Stir-fry filling: cook 150g shredded pork with aromatics and vegetables for 3 mins; thicken with 1 tbsp cornstarch slurry until bone-dry; cool completely.', durationMinutes: 15 },
      { task: 'Whisk 1 tbsp all-purpose flour with 2 tbsp cold water into a smooth paste for sealing wrappers (flour glue).', durationMinutes: 2 }
    ],
    ingredientPrepGuide: [
      { item: 'Dry Filling Technique', technique: 'The stir-fried filling MUST be cooked until all vegetable liquid has evaporated and thickened with cornstarch, then cooled 100% cold before wrapping. Warm or wet filling releases steam inside the roll that dissolves the wrapper, causing exploding rolls in hot oil.' },
      { item: 'Tight Wrapping', technique: 'Roll the wrapper snugly around the filling without trapping loose air pockets. Trapped air expands in hot oil and ruptures the wrapper.' }
    ],
    essentialIngredients: [
      { name: 'Square spring roll pastry wrappers (TYJ or Spring Home brand)', prep: 'thawed, covered under damp cloth', amount: '16 wrappers', metric: '16 sheets', imperial: '16 sheets', common: '16 sheets' },
      { name: 'Pork loin or Char Siu', prep: 'julienned into thin matchsticks', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '1 cup' },
      { name: 'Green cabbage', prep: 'finely shredded', amount: '200g', metric: '200g', imperial: '7 oz', common: '2 cups' },
      { name: 'Carrot', prep: 'peeled and julienned into thin matchsticks', amount: '1 medium', metric: '100g', imperial: '3.5 oz', common: '1 cup' },
      { name: 'Dried wood ear mushrooms (Mu Er)', prep: 'soaked in hot water & finely shredded', amount: '3 pieces', metric: '30g', imperial: '1 oz', common: '1/3 cup' },
      { name: 'Bamboo shoots (canned)', prep: 'julienned into thin matchsticks', amount: '50g', metric: '50g', imperial: '1.8 oz', common: '1/3 cup' },
      { name: 'Oyster sauce', prep: 'savory filling seasoning', amount: '1.5 tbsp', metric: '22ml', imperial: '0.75 fl oz', common: '1.5 tbsp' },
      { name: 'Light soy sauce & Shaoxing wine', prep: 'for stir-frying', amount: '1 tbsp each', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp total' },
      { name: 'Toasted sesame oil', prep: 'aromatic finish', amount: '1 tsp', metric: '5ml', imperial: '0.17 fl oz', common: '1 tsp' },
      { name: 'Flour-water sealing paste', prep: '1 tbsp flour + 2 tbsp water', amount: '3 tbsp', metric: '45ml', imperial: '1.5 fl oz', common: 'mixed' },
      { name: 'Neutral cooking oil (peanut or canola)', prep: 'for deep-frying', amount: '1 liter', metric: '1000ml', imperial: '34 fl oz', common: '4 cups' },
      { name: 'Worcestershire sauce or sweet chili sauce', prep: 'for authentic Cantonese dipping', amount: '60ml', metric: '60ml', imperial: '2 fl oz', common: '1/4 cup' }
    ],
    steps: [
      {
        step: 1,
        title: 'STIR-FRY, THICKEN & CHILL THE FILLING',
        whatYouNeed: ['Wok', '1 tbsp oil', 'Pork', 'Cabbage', 'Carrot', 'Wood ear', 'Bamboo shoots', 'Oyster sauce', 'Slurry'],
        description: 'Heat 1 tbsp oil in wok over high heat. Add shredded pork; stir-fry 1 minute. Add cabbage, carrot, wood ear mushrooms, and bamboo shoots. Stir-fry for 2 minutes. Stir in oyster sauce, soy sauce, Shaoxing wine, and white pepper. Drizzle in cornstarch slurry. Stir-fry for 1 minute until sauce thickens and no liquid pools at the bottom. Spread on a baking sheet and refrigerate until completely cold.',
        howToDoIt: 'Cooking and cooling the vegetables extracts excess water before wrapping, guaranteeing a crackling crispy roll that won\'t get soggy.',
        heat: 'High Heat',
        duration: 8,
        visualCues: 'Vegetables are tender-crisp; filling is glistening with a thick glaze without loose watery liquid.',
        smell: 'Savory oyster sauce, sweet cabbage, and toasted sesame.',
        textureCheck: 'Thick, cohesive, and completely cold.',
        whatShouldThisLookLike: 'Chilled, glistening shredded vegetable and pork filling.',
        tip: 'Never wrap warm filling! Warm filling turns the delicate wheat wrapper into mush within 60 seconds.',
        commonMistake: 'Using wet un-thickened filling, which explodes in hot oil and burns the cook.',
        moveOnWhen: 'Filling is chilled cold to the touch.',
        quickInstructions: 'Stir-fry pork and vegetables, thicken with slurry until bone-dry, spread on sheet, cool completely.'
      },
      {
        step: 2,
        title: 'WRAP, TUCK & SEAL WITH FLOUR GLUE',
        whatYouNeed: ['16 wrappers', 'Chilled filling', 'Flour sealing paste', 'Baking sheet'],
        description: 'Lay one wrapper on work surface like a diamond (one corner pointing toward you). Place 2 tablespoons of chilled filling horizontally across the lower third of the diamond. Fold the bottom corner tightly over the filling and tuck the tip under. Roll forward tightly halfway. Fold the left and right corners in snugly, forming a neat envelope. Brush flour paste onto the top exposed triangular corner. Roll forward tightly to seal.',
        howToDoIt: 'Tightly folding the envelope eliminates trapped air pockets while the flour paste creates a waterproof seal.',
        heat: 'No Heat',
        duration: 15,
        visualCues: 'Uniform, tight, neat 10cm cylinders with securely glued seams.',
        textureCheck: 'Firm, taut roll with no loose sagging dough.',
        whatShouldThisLookLike: 'Row of uniform, unblemished raw spring rolls.',
        tip: 'Cover finished rolls with plastic wrap while working so the wrappers don\'t dry out and crack.',
        commonMistake: 'Rolling too loosely — loose rolls trap oil inside and become greasy sponges.',
        moveOnWhen: 'All 16 rolls are wrapped and sealed.',
        quickInstructions: 'Place filling on diamond wrapper, fold bottom, fold sides in like envelope, brush tip with glue, roll tight.'
      },
      {
        step: 3,
        title: 'PREHEAT OIL TO 175°C (350°F)',
        whatYouNeed: ['Wok or Dutch oven', '1L cooking oil', 'Thermometer'],
        description: 'Pour 1 liter of oil into wok or Dutch oven to a depth of at least 5cm. Heat over medium-high heat until thermometer registers exactly 175°C (350°F). If you don\'t have a thermometer, dip a wooden chopstick into the oil: steady, eager bubbles should immediately stream from the wood tip.',
        howToDoIt: '175°C is the sweet spot: hot enough to instantly crisp the wrapper without absorbing oil, yet moderate enough to cook the layers through.',
        heat: 'Medium-High Heat',
        duration: 8,
        visualCues: 'Oil is shimmering, clear, and steady at 175°C.',
        smell: 'Hot clean oil.',
        textureCheck: 'Light, thin hot oil.',
        whatShouldThisLookLike: 'Clear, shimmering oil ready for frying.',
        tip: 'Fry in batches of 4 or 5 rolls maximum so the oil temperature doesn\'t plummet.',
        commonMistake: 'Dropping rolls into cold oil (under 160°C) — rolls will absorb oil like sponges and turn greasy.',
        moveOnWhen: 'Oil reaches 175°C.',
        quickInstructions: 'Heat oil to 175°C (350°F); verify with thermometer or bubbling chopstick.'
      },
      {
        step: 4,
        title: 'DEEP FRY IN BATCHES TO SHATTERING CRISPNESS',
        whatYouNeed: ['Spring rolls', 'Spider skimmer', 'Wire cooling rack with paper towels beneath'],
        description: 'Gently slide 4 to 5 spring rolls into the hot oil seam-side down. Fry for 4 to 5 minutes, gently rolling them with tongs or spider so they brown evenly on all sides. As they cook, microscopic blisters will form on the paper-thin wrapper and the color will turn deep golden-amber.',
        howToDoIt: 'Gentle rotation ensures all sides fry into an even, shatteringly crisp, blistered shell.',
        heat: 'Medium-High Heat (maintain 175°C)',
        duration: 5,
        visualCues: 'Rolls turn brilliant golden-amber with thousands of tiny, crisp blisters covering the surface; they float buoyantly.',
        hear: 'Steady, crackling frying sizzle.',
        smell: 'Incredible aroma of crisp toasted pastry and savory sesame.',
        textureCheck: 'Tapping skin with tongs produces a hard, brittle, hollow crunch.',
        whatShouldThisLookLike: 'Pristine, blistered golden-amber spring rolls.',
        tip: 'Transfer cooked rolls directly to a wire rack, NEVER directly onto paper towels! Paper towels trap steam under the hot rolls, turning the bottom crust soggy.',
        commonMistake: 'Frying at too high heat (200°C), which burns the outside brown in 60 seconds while the inner pastry layers stay raw and chewy.',
        moveOnWhen: 'Rolls are deep golden-amber and blistered crisp.',
        quickInstructions: 'Fry 4-5 rolls in 175°C oil for 4-5 mins until blistered golden; drain on wire rack.'
      },
      {
        step: 5,
        title: 'REST, SLICE DIAGONALLY & SERVE',
        whatYouNeed: ['Serrated or sharp chef\'s knife', 'Serving platter', 'Worcestershire sauce'],
        description: 'Rest cooked rolls on the wire rack for 2 minutes to let residual oil drain and interior steam settle. Slice each roll diagonally in half at a 45-degree angle with a swift downward cut. Arrange upright on a platter to show off the vibrant vegetable and pork interior.',
        howToDoIt: 'A diagonal cut showcases the colorful interior and makes the rolls easy to dip.',
        heat: 'Off Heat',
        duration: 2,
        visualCues: 'Shatteringly crisp golden cylinders revealing vibrant green cabbage, orange carrot, and dark wood ear mushroom filling.',
        hear: 'Loud, audible crunch as knife cuts through the crispy pastry.',
        smell: 'Hot fried pastry, savory pork, and sweet vinegar.',
        textureCheck: 'Light, shatteringly crisp crust with juicy filling.',
        whatShouldThisLookLike: 'Banquet-style platter of halved golden Cantonese spring rolls.',
        tip: 'In Hong Kong dim sum restaurants, authentic spring rolls are traditionally served with Lea & Perrins Worcestershire sauce ("Gip-Jap") rather than sweet duck sauce.',
        commonMistake: 'Sawing back and forth with a dull knife, crushing the delicate crispy shell.',
        moveOnWhen: 'Sliced and served immediately.',
        quickInstructions: 'Rest 2 mins, cut diagonally in half, serve with Worcestershire sauce.'
      }
    ],
    commonMistakes: [
      { mistake: 'Spring rolls exploded open in the oil.', remedy: 'Rolls were wrapped with air pockets or seams weren\'t glued with flour paste. Roll tightly and seal corners securely.' },
      { mistake: 'Rolls were greasy and oily.', remedy: 'Oil was too cool or rolls were placed flat on paper towels. Keep oil at 175°C and drain on an elevated wire rack.' }
    ],
    troubleshooting: [
      {
        problem: 'Inner pastry layers are doughy while exterior is browned',
        whatHappened: 'Oil was too hot (above 190°C).',
        whyItHappened: 'Exterior browned before heat penetrated the multiple pastry layers.',
        whatToDoNow: 'Lower heat to 160°C and fry batch slightly longer; or crisp in an oven at 180°C for 5 minutes.',
        howToPrevent: 'Monitor oil temperature with a thermometer throughout frying.'
      }
    ],
    substitutions: [
      { original: 'Shredded pork', substitute: 'Shredded chicken breast, shrimp, or pressed firm tofu', notes: 'Vegetarian spring rolls with extra shiitake mushrooms and cabbage are immensely popular.' },
      { original: 'Spring roll pastry', substitute: 'Lumpia wrappers (Filipino thin wheat wrappers)', notes: 'Identical thin wheat structure that fries blistered and crisp.' }
    ],
    safetyNotes: [
      'Take extreme care with 1 liter of hot 175°C oil; never leave unattended.'
    ],
    servingGuide: {
      restingTime: 'Rest 2 minutes on wire rack before serving.',
      garnishing: 'Fresh coriander sprigs and lemon wedges.',
      plating: 'Stacked diagonally on a rectangular ceramic platter.',
      temperature: 'Piping hot and shatteringly crisp.',
      accompaniments: 'Hong Kong Worcestershire sauce (Gip-Jap), sweet chili sauce, and hot Jasmine tea.'
    }
  }
];
