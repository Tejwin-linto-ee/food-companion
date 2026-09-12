import type { DetailedRecipe } from './types';

export const EAST_ASIAN_RECIPES: Record<string, DetailedRecipe> = {
  "sushi": {
    "id": "sushi",
    "name": "Authentic Edomae Nigiri & Maki Sushi",
    "cuisine": "Japanese",
    "region": "Japan (Tokyo / Kanto)",
    "servings": 4,
    "prepTime": 45,
    "cookTime": 30,
    "difficulty": "Hard",
    "overview": {
      "summary": "The pinnacle of Japanese culinary artistry: seasoned sushi rice (shari) prepared from premium short-grain Japonica rice seasoned with warm awase-zu (rice vinegar, sugar, salt) and cooled in a wooden hangiri, paired with fresh sashimi-grade fish, hand-molded into delicate nigiri and rolled in crisp toasted nori seaweed.",
      "appearance": "Pristine, gleaming arrangement of salmon and tuna nigiri alongside vibrant avocado and cucumber maki rolls, served with pickled gari (ginger) and freshly grated wasabi.",
      "texture": "Fluffy, individual grains of seasoned rice that hold together when picked up with fingers, yet crumble effortlessly upon the tongue, paired with buttery, velvety raw fish.",
      "flavor": "Delicate balance of sweet-tart vinegar acidity, clean savory rice, rich umami fish, and pungent nasal warmth from wasabi.",
      "restingTimeMinutes": 5
    },
    "equipment": [
      {
        "name": "Hangiri (wooden sushi rice tub) or wide wooden/ceramic bowl",
        "purpose": "Absorbs excess surface moisture from rice while vinegar seasoning is sliced in."
      },
      {
        "name": "Shamoji (flat rice paddle)",
        "purpose": "For cutting and folding vinegar into rice with slicing motions without mashing grains."
      },
      {
        "name": "Uchiwa (hand fan)",
        "purpose": "Rapidly cools seasoned rice to room temperature, giving grains a brilliant glossy lacquer."
      },
      {
        "name": "Makisu (bamboo rolling mat)",
        "purpose": "For rolling tight, even cylindrical nori maki rolls."
      },
      {
        "name": "Yanagiba (Japanese slicing knife)",
        "purpose": "Single-bevel blade that slices sashimi-grade fish in one clean pulling motion without bruising flesh."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Rinse 400g short-grain sushi rice gently in cold water 4–5 times until water runs clear; drain in colander for 20 minutes.",
        "durationMinutes": 25
      },
      {
        "task": "Whisk 60ml rice vinegar, 2 tbsp sugar, and 1.5 tsp fine sea salt until completely dissolved (awase-zu seasoning).",
        "durationMinutes": 5
      },
      {
        "task": "Prepare Tezu (vinegar water): mix 200ml cold water with 2 tbsp rice vinegar in a bowl for wetting hands during molding.",
        "durationMinutes": 2
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Shari Rice Cutting (Kiri-Kata)",
        "technique": "Pour warm cooked rice into hangiri. Drizzle awase-zu over paddle. Cut through the rice horizontally and vertically in slicing motions with the paddle edge at a 45-degree angle while fanning vigorously with an uchiwa fan. Never mash or stir in circles! Slicing separates individual grains, while fanning rapidly evaporates moisture and sets a mirror-like gloss."
      },
      {
        "item": "Fish Slicing (Sogi-Zukuri)",
        "technique": "Slice sashimi-grade fish with the yanagiba knife tilted at a 45-degree angle. Pull the blade backward from heel to tip in one single, continuous, fluid pulling stroke without sawing back and forth."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Short-grain Japanese sushi rice (Koshihikari)",
        "prep": "rinsed & drained",
        "amount": "400g",
        "metric": "400g",
        "imperial": "14 oz",
        "common": "2 cups dry"
      },
      {
        "name": "Cold water for cooking rice",
        "prep": "1:1.1 ratio for firm shari",
        "amount": "440ml",
        "metric": "440ml",
        "imperial": "15 fl oz",
        "common": "1.85 cups"
      },
      {
        "name": "Rice vinegar (Komezu)",
        "prep": "unseasoned brewed rice vinegar",
        "amount": "60ml",
        "metric": "60ml",
        "imperial": "2 fl oz",
        "common": "1/4 cup"
      },
      {
        "name": "Granulated sugar",
        "prep": "dissolved in vinegar",
        "amount": "2 tbsp",
        "metric": "25g",
        "imperial": "0.9 oz",
        "common": "2 tbsp"
      },
      {
        "name": "Fine sea salt",
        "prep": "dissolved in vinegar",
        "amount": "1.5 tsp",
        "metric": "9g",
        "imperial": "0.3 oz",
        "common": "1.5 tsp"
      },
      {
        "name": "Sashimi-grade salmon & bluefin tuna fillets",
        "prep": "sliced at 45° angle into 15g neta slices",
        "amount": "300g",
        "metric": "300g",
        "imperial": "10.5 oz",
        "common": "300g"
      },
      {
        "name": "Toasted Nori seaweed sheets",
        "prep": "crisp, halved for maki",
        "amount": "4 sheets",
        "metric": "4 sheets",
        "imperial": "4 sheets",
        "common": "4 sheets"
      },
      {
        "name": "Japanese cucumber (Kyuri)",
        "prep": "seeded & cut into thin matchsticks",
        "amount": "1 cucumber",
        "metric": "100g",
        "imperial": "3.5 oz",
        "common": "1 piece"
      },
      {
        "name": "Ripe Avocado",
        "prep": "peeled & cut into thin 5mm strips",
        "amount": "1 avocado",
        "metric": "150g",
        "imperial": "5.3 oz",
        "common": "1 piece"
      },
      {
        "name": "Real Wasabi paste (Hon-wasabi)",
        "prep": "grated fresh or quality paste",
        "amount": "2 tbsp",
        "metric": "30g",
        "imperial": "1 oz",
        "common": "2 tbsp"
      },
      {
        "name": "Pickled sushi ginger (Gari)",
        "prep": "thin sweet pink slices",
        "amount": "50g",
        "metric": "50g",
        "imperial": "1.8 oz",
        "common": "1/3 cup"
      },
      {
        "name": "Japanese Soy Sauce (Shoyu)",
        "prep": "for dipping",
        "amount": "60ml",
        "metric": "60ml",
        "imperial": "2 fl oz",
        "common": "1/4 cup"
      }
    ],
    "optionalIngredients": [
      {
        "name": "Toasted white sesame seeds",
        "prep": "for inside-out California maki",
        "amount": "1 tbsp",
        "metric": "10g",
        "imperial": "0.35 oz",
        "common": "1 tbsp",
        "optional": true
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "COOK SUSHI RICE TO AL DENTE PERFECTION",
        "whatYouNeed": [
          "400g rinsed sushi rice",
          "440ml cold water",
          "Heavy rice pot with tight lid or rice cooker"
        ],
        "description": "Combine rinsed, drained rice and 440ml water in a heavy pot. Let soak for 20 minutes before cooking. Bring to a boil over medium-high heat. As soon as steam puffs vigorously from the lid, reduce heat to the lowest possible setting. Cook undisturbed for 12 minutes. Turn off heat and let steam for 10 minutes without lifting the lid.",
        "howToDoIt": "Pre-soaking hydrates the grain cores. Steaming undisturbed after cooking allows moisture to equalize throughout every single grain without breaking the starches.",
        "heat": "Medium-High to boil, then Lowest Heat 12 mins, then Off 10 mins",
        "heatDescription": "Controlled absorption.",
        "duration": 25,
        "visualCues": "Rice swells into plump, pearlescent grains; no pooling water; steam holes appear across surface.",
        "hear": "Soft whisper of steam under the lid.",
        "smell": "Fragrant, clean, sweet steamed rice aroma.",
        "textureCheck": "Tender with a firm, toothsome center core.",
        "whatShouldThisLookLike": "Pristine, gleaming white short-grain rice.",
        "tip": "Never lift the lid during the 10-minute resting stage!",
        "commonMistake": "Using long-grain or jasmine rice — sushi requires short-grain Japonica rice for proper stickiness and chew.",
        "moveOnWhen": "Rice is cooked and has rested 10 minutes off heat.",
        "quickInstructions": "Cook rice and water on lowest heat 12 mins after boiling; rest covered 10 mins off heat."
      },
      {
        "step": 2,
        "title": "SEASON WITH AWASE-ZU & RAPID FAN COOLING",
        "whatYouNeed": [
          "Hot steamed rice",
          "60ml prepared awase-zu vinegar",
          "Hangiri tub or wide bowl",
          "Rice paddle (shamoji)",
          "Uchiwa fan"
        ],
        "description": "Immediately tip the piping-hot rice into the wooden hangiri tub. Drizzle the awase-zu vinegar evenly over the paddle all across the rice. With the paddle edge held at a 45-degree angle, make gentle cutting and slicing motions (like slicing bread) horizontally and vertically across the rice while fanning vigorously with the uchiwa fan in your other hand. Continue for 3–4 minutes until all vinegar is absorbed and rice cools to body temperature (36°C / 97°F). Cover with a damp cloth.",
        "howToDoIt": "Slicing separates the grains so every grain is coated in vinegar without crushing them. Rapid fanning drives off excess steam, sealing the outside into a brilliant, glossy lacquer.",
        "heat": "Off",
        "heatDescription": "Cooling station.",
        "duration": 5,
        "visualCues": "Rice transforms from matte white to a brilliant, shiny, glistening lacquer; grains remain separate and unbroken.",
        "hear": "Rhythmic slicing through rice and whoosh of the fan.",
        "smell": "Bright, sweet, tangy rice vinegar aroma.",
        "textureCheck": "Separate, slightly sticky grains with distinct chew; body temperature.",
        "whatShouldThisLookLike": "Glistening, glossy, individual grains of seasoned sushi rice (shari).",
        "tip": "Never refrigerate sushi rice! Cold temperatures recrystallize the amylose starches into hard, dry, chalky grains.",
        "commonMistake": "Stirring the rice in circles like porridge — this crushes the grains into a pasty glob.",
        "moveOnWhen": "Rice is cooled to body temperature, glossy, and covered with damp cloth.",
        "quickInstructions": "Slice awase-zu into hot rice with paddle while fanning rapidly 3-4 mins until glossy and body-warm."
      },
      {
        "step": 3,
        "title": "FORM NIGIRI (HAND-MOLDED SUSHI)",
        "whatYouNeed": [
          "Seasoned shari rice",
          "Sashimi fish slices (neta)",
          "Wasabi paste",
          "Tezu (vinegar water bowl)"
        ],
        "description": "Dip your fingers lightly in tezu (vinegar water) and clap hands to shed excess moisture. Pick up a 20g portion of warm shari rice in your right hand and gently shape into a compact oval cylinder using your palm and fingers. With your left hand, pick up a slice of salmon or tuna. Dab a tiny smear of wasabi across the center of the fish with your right index finger. Place the rice cylinder onto the fish. Gently press with your right thumb and forefinger while cradling with your left palm to weld fish to rice. Flip over and press top lightly to curve. Set on serving board.",
        "howToDoIt": "Use gentle pressure: nigiri should contain micro-pockets of air between the grains. It should hold its shape when picked up with fingers, but melt apart instantly on the tongue.",
        "heat": "Off",
        "heatDescription": "Assembly station.",
        "duration": 8,
        "visualCues": "A sleek, elegant oblong mound of fish draped gracefully over a pillow of rice, holding its shape cleanly.",
        "hear": "None",
        "smell": "Fresh sea fish, tangy vinegar rice, and wasabi.",
        "textureCheck": "Tender fish resting on light, airy rice cylinder.",
        "whatShouldThisLookLike": "Restaurant-quality Edomae Nigiri.",
        "tip": "Keep hands moist with tezu, but not soaking wet; dry hands cause rice to stick like glue.",
        "commonMistake": "Squeezing rice too hard — dense, compacted rice balls feel heavy and leaden to eat.",
        "moveOnWhen": "All nigiri pieces are hand-molded.",
        "quickInstructions": "Shape 20g rice into oval with wet hands; dab wasabi on fish slice, press rice onto fish, shape gently."
      },
      {
        "step": 4,
        "title": "ROLL CYLINDRICAL NORI MAKI WITH MAKISU",
        "whatYouNeed": [
          "Half nori sheet",
          "Makisu bamboo mat",
          "100g shari rice",
          "Cucumber matchsticks",
          "Avocado strips",
          "Tezu bowl",
          "Sharp chef knife"
        ],
        "description": "Place half a sheet of nori shiny-side down on the bamboo mat, aligned with the bottom edge. Moisten hands in tezu. Spread 100g of rice evenly across the nori, leaving an uncovered 1.5cm border at the top edge. Place cucumber and avocado strips horizontally across the center of the rice. Lift the bottom edge of the bamboo mat over the fillings, tucking the edge firmly to enclose the ingredients. Roll forward with firm, even pressure to form a tight, round cylinder. Wipe knife blade with damp cloth, and slice into 6 or 8 equal rounds in single pulling strokes.",
        "howToDoIt": "Even pressure across the bamboo mat produces a tight cylinder that slices cleanly without squishing the avocado or tearing the nori.",
        "heat": "Off",
        "heatDescription": "Rolling station.",
        "duration": 8,
        "visualCues": "Tightly rolled cylindrical maki; clean circular cross-sections displaying colorful concentric centers.",
        "hear": "Crisp snap of the toasted nori as rolled.",
        "smell": "Toasted sea nori, fresh cucumber, and avocado.",
        "textureCheck": "Crisp outer nori, fluffy rice, crunchy cucumber, creamy avocado.",
        "whatShouldThisLookLike": "Neat circular maki sushi pieces with centered fillings.",
        "tip": "Wipe your knife blade on a wet cloth between every slice to ensure clean, razor-sharp cuts.",
        "commonMistake": "Sawing back and forth with a dull knife — this crushes the roll flat.",
        "moveOnWhen": "Maki rolls are sliced into neat rounds.",
        "quickInstructions": "Spread rice on nori leaving top border; lay cucumber & avocado, roll tight with bamboo mat; slice with wet knife."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Rice was hard and dry.",
        "remedy": "You refrigerated the sushi rice. Sushi rice must be prepared fresh and kept at room/body temperature covered with a damp towel."
      },
      {
        "mistake": "Rice fell apart in soy sauce.",
        "remedy": "Dipped the rice side into the soy sauce. In authentic Japanese etiquette, always turn the nigiri upside down and dip ONLY the fish slice into the soy sauce."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Rice is sticking all over fingers while molding",
        "whatHappened": "Hands are too dry or starch is building up.",
        "whyItHappened": "Forgot to dip in tezu.",
        "whatToDoNow": "Wash hands thoroughly, dip fingers in tezu (vinegar water), and clap hands to shed excess drops before touching rice.",
        "howToPrevent": "Re-dip fingertips in tezu before picking up each portion of rice."
      }
    ],
    "substitutions": [
      {
        "original": "Sashimi-grade raw fish",
        "substitute": "Cooked prawns, smoked salmon, or seasoned firm tofu / tamagoyaki",
        "notes": "Tamagoyaki (sweet egg omelet) and avocado make wonderful beginner sushi."
      }
    ],
    "safetyNotes": [
      "Raw fish MUST be certified \"sashimi-grade\" / flash-frozen at -20°C for 7 days to eliminate any parasite risk.",
      "Prepare and consume sushi within 2 hours at room temperature."
    ],
    "servingGuide": {
      "restingTime": "Serve immediately.",
      "garnishing": "Serve with neat rosettes of pickled ginger (gari) and freshly grated wasabi.",
      "plating": "Present on a black slate, wooden sushi geta board, or ceramic platter.",
      "temperature": "Rice at body temperature (36°C); fish chilled (10–12°C).",
      "accompaniments": "Japanese soy sauce (shoyu) for dipping fish, warm green tea (agari), and hot miso soup."
    }
  },
  "sashimi": {
    "id": "sashimi",
    "name": "Artisan Sashimi Moriawase (Fresh Sliced Fish Platter)",
    "cuisine": "Japanese",
    "region": "Japan",
    "servings": 4,
    "prepTime": 25,
    "cookTime": 0,
    "difficulty": "Hard",
    "overview": {
      "summary": "The purest expression of Japanese gastronomy: pristine, premium sashimi-grade fish (salmon, tuna, yellowtail) sliced into precise artistic cuts (Hira-zukuri straight cuts and Sogi-zukuri angled bias cuts) using a razor-sharp single-bevel Yanagiba knife, presented on a bed of fresh ice with daikon tsuma, green shiso leaves, wasabi, and premium shoyu.",
      "appearance": "A visual masterpiece: translucent, jewel-like slices of ruby-red tuna, marbled orange salmon, and pearlescent sea bass arranged artfully over a nest of snow-white daikon radish shreds and green shiso leaves, resting on crushed ice.",
      "texture": "Buttery, melt-in-the-mouth, velvety tenderness; completely firm and succulent with zero mushiness or stringy resistance.",
      "flavor": "Pure, clean, ocean-fresh sweetness with delicate maritime umami, contrasted by sharp nasal wasabi and savory soy sauce.",
      "restingTimeMinutes": 2
    },
    "equipment": [
      {
        "name": "Yanagiba (Japanese sashimi knife)",
        "purpose": "Single-bevel blade designed to slice through raw fish in one pulling stroke without compressing muscle cells."
      },
      {
        "name": "Benriner Japanese mandoline or sharp chef knife",
        "purpose": "For shaving daikon radish into paper-thin threadlike angel-hair nests (tsuma)."
      },
      {
        "name": "Bowl with crushed ice",
        "purpose": "Keeps fish chilled at optimum 4–6°C during plating and service."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Keep sashimi-grade fish loins in the coldest part of the refrigerator (0–2°C) wrapped in paper towels until the moment of slicing.",
        "durationMinutes": 30
      },
      {
        "task": "Shave 200g daikon radish into threadlike strands (tsuma); soak in ice water for 10 minutes to curl and crisp, then drain completely.",
        "durationMinutes": 15
      },
      {
        "task": "Grind fresh wasabi root on a sharkskin grater (oroshi) in circular motions into a fine paste.",
        "durationMinutes": 3
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "The Single-Stroke Pull (Hiki-Kiri)",
        "technique": "Place the heel of the Yanagiba knife on the top edge of the fish loin. Pull the knife backward toward you in one continuous, sweeping stroke from heel to the pointed tip, using the entire length of the blade. NEVER saw back and forth! A sawing motion crushes the delicate cellular structure and tears the fish surface, releasing water and turning it mushy."
      },
      {
        "item": "Cut Thickness Rules",
        "technique": "Hira-zukuri (straight rectangular slices): cut salmon and tuna perpendicular to grain into 1cm (0.4 inch) thick slabs. Usu-zukuri (paper-thin slices): cut firm white fish (sea bass/flounder) on an extreme 30-degree bias into translucent 2mm sheets."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Sashimi-grade Atlantic Salmon loin (Sake)",
        "prep": "skinless, pin bones removed, cold (0°C)",
        "amount": "200g",
        "metric": "200g",
        "imperial": "7 oz",
        "common": "200g loin"
      },
      {
        "name": "Sashimi-grade Bluefin/Yellowfin Tuna loin (Maguro)",
        "prep": "deep red akami cut, skinless",
        "amount": "200g",
        "metric": "200g",
        "imperial": "7 oz",
        "common": "200g loin"
      },
      {
        "name": "Sashimi-grade Yellowtail / Kingfish (Hamachi)",
        "prep": "trimmed, cold",
        "amount": "150g",
        "metric": "150g",
        "imperial": "5.3 oz",
        "common": "150g"
      },
      {
        "name": "Daikon radish (for Tsuma angel-hair nests)",
        "prep": "shaved paper-thin into ice water",
        "amount": "200g",
        "metric": "200g",
        "imperial": "7 oz",
        "common": "1 cup shredded"
      },
      {
        "name": "Fresh Shiso leaves (Perilla)",
        "prep": "washed & dried",
        "amount": "8 leaves",
        "metric": "10g",
        "imperial": "0.35 oz",
        "common": "8 leaves"
      },
      {
        "name": "Freshly grated Wasabi paste",
        "prep": "grated on fine grater",
        "amount": "2 tbsp",
        "metric": "30g",
        "imperial": "1 oz",
        "common": "2 tbsp"
      },
      {
        "name": "Pickled ginger (Gari)",
        "prep": "sweet sliced ginger",
        "amount": "40g",
        "metric": "40g",
        "imperial": "1.4 oz",
        "common": "1/4 cup"
      },
      {
        "name": "Authentic Japanese Soy Sauce (Koikuchi Shoyu)",
        "prep": "for dipping",
        "amount": "60ml",
        "metric": "60ml",
        "imperial": "2 fl oz",
        "common": "1/4 cup"
      }
    ],
    "optionalIngredients": [
      {
        "name": "Edible micro-flowers / Hanaho shiso blossoms",
        "prep": "for decorative Michelin garnish",
        "amount": "pinch",
        "metric": "2g",
        "imperial": "0.07 oz",
        "common": "pinch",
        "optional": true
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "PREPARE CRISP DAIKON TSUMA NEST",
        "whatYouNeed": [
          "200g daikon radish",
          "Mandoline or chef knife",
          "Bowl of ice water",
          "Colander"
        ],
        "description": "Peel the daikon. Using a Japanese mandoline or sharp knife, slice the daikon into hair-thin julienne threads (tsuma). Submerge immediately in a bowl of ice-cold water for 10 minutes. The threads will curl, turn translucent, and become crisp. Drain thoroughly in a colander and gently pat dry with paper towels.",
        "howToDoIt": "Ice water tightens the daikon plant cells into crisp, curly threads that support the fish slices without leaking water onto the fish.",
        "heat": "Off",
        "heatDescription": "Prep station.",
        "duration": 12,
        "visualCues": "Pristine, snow-white, curly, glistening angel-hair radish threads.",
        "hear": "None",
        "smell": "Clean, peppery radish freshness.",
        "textureCheck": "Crisp, firm, and thoroughly dried.",
        "whatShouldThisLookLike": "Fluffy white nest of shredded daikon.",
        "tip": "Ensure the daikon is thoroughly dried before plating; water will wash away the delicate fish oils.",
        "commonMistake": "Plating wet, soggy daikon — soggy radish ruins the pristine fish slices.",
        "moveOnWhen": "Daikon tsuma is crisp, drained, and dried.",
        "quickInstructions": "Shred daikon into thin hair threads, soak in ice water 10 mins until crisp; drain and dry thoroughly."
      },
      {
        "step": 2,
        "title": "THE HIRA-ZUKURI SLICE (SALMON & TUNA SLABS)",
        "whatYouNeed": [
          "Cold salmon & tuna loins",
          "Razor-sharp Yanagiba or long slicing knife",
          "Clean cutting board"
        ],
        "description": "Place the cold salmon loin on your cutting board with the grain running horizontally. Set the heel of your knife on the top edge at a 90-degree perpendicular angle to the board. In one smooth, continuous, pulling motion, draw the knife backward toward your chest, using the entire length of the blade to slice through the fish in a single stroke into a clean 1cm (0.4 inch) thick rectangular slab. Repeat for 8 slices of salmon and 8 slices of tuna.",
        "howToDoIt": "A single pulling stroke shears through muscle fibers with zero lateral friction, preserving the natural moisture and lipid sheen of the fish without tearing.",
        "heat": "Off",
        "heatDescription": "Slicing station.",
        "duration": 6,
        "visualCues": "Mirror-smooth, lustrous, razor-sharp cut faces on each slice; zero ragged edges or crushed meat.",
        "hear": "Soft whisper of the blade through cold fish.",
        "smell": "Clean, ocean-fresh seafood aroma.",
        "textureCheck": "Buttery, firm, smooth cut faces.",
        "whatShouldThisLookLike": "Identical, rectangular, jewel-like slices of salmon and tuna.",
        "tip": "Wipe the knife blade with a damp cloth between every single cut to prevent fish fat buildup.",
        "commonMistake": "Sawing back and forth — sawing shreds the delicate muscle fibers and turns the fish surface dull.",
        "moveOnWhen": "All salmon and tuna pieces are sliced with mirror-smooth faces.",
        "quickInstructions": "Slice fish in single pulling strokes from heel to tip into 1cm rectangular slabs (no sawing!)."
      },
      {
        "step": 3,
        "title": "THE SOGI-ZUKURI SLICE (ANGLED BIAS CUTS)",
        "whatYouNeed": [
          "Yellowtail / Hamachi loin",
          "Yanagiba knife"
        ],
        "description": "Position the yellowtail loin. Tilt the knife blade at a 45-degree angle to the cutting board. Pull the blade from heel to tip in a single smooth diagonal stroke to create wide, thin, diamond-shaped slices approx 5mm thick. Repeat for 6 slices.",
        "howToDoIt": "Angled bias cutting creates wider surface area on firmer fish, making it feel silky and tender across the palate.",
        "heat": "Off",
        "heatDescription": "Slicing station.",
        "duration": 4,
        "visualCues": "Translucent, wide diamond-shaped yellowtail slices with visible pearlescent grain.",
        "hear": "None",
        "smell": "Ocean sweetness.",
        "textureCheck": "Silky, delicate, thin slices.",
        "whatShouldThisLookLike": "Diamond-shaped translucent yellowtail slices.",
        "tip": "Keep the fish very cold (0–2°C); warm fish is soft and impossible to slice cleanly.",
        "commonMistake": "Slicing with a dull knife — dull knives crush the fish cells and expel liquid.",
        "moveOnWhen": "Yellowtail is sliced on the bias.",
        "quickInstructions": "Slice yellowtail on 45-degree angle into 5mm diamond slices in single pulling strokes."
      },
      {
        "step": 4,
        "title": "ARTISTIC PLATING ON BED OF ICE",
        "whatYouNeed": [
          "Sliced fish",
          "Daikon tsuma nests",
          "Fresh shiso leaves",
          "Crushed ice in shallow bowl",
          "Wasabi paste",
          "Pickled ginger (gari)"
        ],
        "description": "Fill a wide, shallow ceramic platter with crushed ice. Arrange two fluffy mounds of daikon tsuma on the ice. Lean fresh green shiso leaves against the daikon mounds. Fan the salmon slices in an overlapping cascade of 3–4 slices over one leaf. Fan the ruby-red tuna slices over the second leaf. Arrange the yellowtail diamond slices in a delicate rose swirl in the center. Form a small teardrop quenelle of wasabi and place alongside pickled ginger. Serve immediately.",
        "howToDoIt": "Resting the arrangement over ice maintains an optimal temperature (4°C), preserving the firm texture and preventing the delicate fish fats from melting into grease.",
        "heat": "Off (Ice Cold)",
        "heatDescription": "Plating.",
        "duration": 5,
        "visualCues": "Breathtaking visual arrangement: vibrant orange, deep ruby-red, and pearlescent white fish contrasting with emerald shiso and snow-white radish.",
        "hear": "None",
        "smell": "Fresh herbal shiso, sharp wasabi, and clean ocean seafood.",
        "textureCheck": "Ice-cold, firm, velvety fish slices.",
        "whatShouldThisLookLike": "Masterpiece Japanese Sashimi Moriawase platter.",
        "tip": "Eat in progression from lightest white fish (yellowtail) to richer orange salmon to deepest rich red tuna.",
        "commonMistake": "Dissolving wasabi into the soy sauce dish like soup — authentic etiquette is to place a tiny dab of wasabi directly onto the fish, then dip into soy sauce.",
        "moveOnWhen": "Platter is artfully arranged and served ice-cold.",
        "quickInstructions": "Arrange daikon nests and shiso over crushed ice; fan salmon, tuna, yellowtail; add wasabi and gari."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Fish was mushy and leaked water.",
        "remedy": "The fish was not sashimi-grade, was sliced warm, or the knife was dull. Keep fish at 0°C and use a razor-sharp blade."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Fish surface looks dull instead of shiny",
        "whatHappened": "Knife was pushed down rather than pulled.",
        "whyItHappened": "Compressive force crushed the cells.",
        "whatToDoNow": "Serve on ice; the flavor will still be delicious.",
        "howToPrevent": "Always use a single backward pulling stroke with zero downward pressure."
      }
    ],
    "substitutions": [
      {
        "original": "Shiso leaves",
        "substitute": "Thin cucumber ribbons or shiso microgreens",
        "notes": "Provides fresh herbal aroma."
      }
    ],
    "safetyNotes": [
      "Use ONLY certified sashimi-grade raw fish that has been commercially flash-frozen to eliminate parasites."
    ],
    "servingGuide": {
      "restingTime": "Serve immediately on ice.",
      "garnishing": "Shiso leaves, daikon tsuma, and wasabi quenelle.",
      "plating": "Serve on a wide stone or ceramic platter over a bed of crushed ice.",
      "temperature": "Ice-cold (4°C).",
      "accompaniments": "Authentic Japanese dark soy sauce (shoyu), pickled gari ginger, and chilled Junmai Daiginjo sake."
    }
  },
  "ramen": {
    "id": "ramen",
    "name": "Traditional Tokyo Shoyu Ramen",
    "cuisine": "Japanese",
    "region": "Japan (Tokyo / Kanto)",
    "servings": 4,
    "prepTime": 40,
    "cookTime": 120,
    "difficulty": "Hard",
    "overview": {
      "summary": "The benchmark of Japanese noodle craft: springy, chewy, alkalized wheat noodles (kansui noodles) submerged in a steaming, crystal-clear golden-amber chicken-dashi broth seasoned with a deeply savory shoyu tare, topped with rolled melt-in-the-mouth braised pork belly (chashu), a soft-boiled jammy marinated ramen egg (ajitsuke tamago), seasoned bamboo shoots (menma), nori, and scallions.",
      "appearance": "A steaming, deep ceramic ramen bowl filled with glistening golden-amber broth, neatly folded yellow noodles, crowned with two circular charred chashu rounds, a halved jammy orange ramen egg, menma, and a sheet of nori standing upright.",
      "texture": "Chewy, springy, toothsome noodles (kata-me chew) swimming in hot, savory broth; pork belly melts instantly without chewing; egg yolk is jammy custard.",
      "flavor": "Deep, multi-layered savory umami from kombu, katsuobushi, roasted chicken bones, and aged soy sauce, balanced by aromatic scallion oil.",
      "restingTimeMinutes": 2
    },
    "equipment": [
      {
        "name": "Stockpot (6–8 qt)",
        "purpose": "For simmering clear chicken dashi broth without boiling violently."
      },
      {
        "name": "Noodle strainer basket (Tebo)",
        "purpose": "Allows vigorous shaking to expel 100% of boiling water from noodles before dropping into broth."
      },
      {
        "name": "Deep ceramic Ramen bowls (Donburi)",
        "purpose": "Retains scalding broth temperature throughout eating."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Simmer 1kg chicken carcasses with ginger, scallions, and water on gentle heat for 2 hours; strain clear stock.",
        "durationMinutes": 120
      },
      {
        "task": "Roll 600g pork belly into a tight cylinder tied with butcher twine; braise in soy sauce, mirin, sake, and sugar for 90 mins (chashu).",
        "durationMinutes": 90
      },
      {
        "task": "Boil 4 eggs for exactly 6 minutes and 30 seconds; plunge into ice water, peel, and marinate in chashu braising liquid for 4 hours (ajitsuke tamago).",
        "durationMinutes": 240
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Clear Broth (Chintan) Rule",
        "technique": "The chicken broth MUST simmer gently at 90°C with lazy bubbles. NEVER boil vigorously! Violent boiling emulsifies fat and calcium into a cloudy broth (paitan). Shoyu ramen requires a crystal-clear, transparent amber broth (chintan)."
      },
      {
        "item": "The Noodle Water Shake (Yukiri)",
        "technique": "Boil fresh kansui ramen noodles for exactly 90 seconds. Lift in the tebo strainer and vigorously snap downward 4–5 times to expel all cooking water. Excess noodle water clings to noodles and dilutes the concentrated soup broth."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Fresh alkalized ramen noodles (Kansui noodles)",
        "prep": "medium-thick wavy noodles",
        "amount": "4 portions (500g)",
        "metric": "500g",
        "imperial": "1.1 lbs",
        "common": "4 packs"
      },
      {
        "name": "Chicken bones / carcasses",
        "prep": "blanched & washed for clear stock",
        "amount": "1kg",
        "metric": "1000g",
        "imperial": "2.2 lbs",
        "common": "2 carcasses"
      },
      {
        "name": "Water for stock",
        "prep": "clean cold water",
        "amount": "2.5 liters",
        "metric": "2500ml",
        "imperial": "85 fl oz",
        "common": "10 cups"
      },
      {
        "name": "Kombu (dried kelp)",
        "prep": "steeped in cold stock",
        "amount": "15g",
        "metric": "15g",
        "imperial": "0.5 oz",
        "common": "1 sheet (10x10cm)"
      },
      {
        "name": "Katsuobushi (bonito flakes)",
        "prep": "for dashi depth",
        "amount": "20g",
        "metric": "20g",
        "imperial": "0.7 oz",
        "common": "1 cup packed"
      },
      {
        "name": "Shoyu Tare (concentrated soy seasoning)",
        "prep": "reduced soy, mirin, sake, kombu",
        "amount": "120ml",
        "metric": "120ml",
        "imperial": "4 fl oz",
        "common": "1/2 cup"
      },
      {
        "name": "Braised Pork Belly Chashu",
        "prep": "sliced 6mm thick & torched",
        "amount": "8 slices",
        "metric": "200g",
        "imperial": "7 oz",
        "common": "8 slices"
      },
      {
        "name": "Ajitsuke Tamago (ramen eggs)",
        "prep": "soft-boiled & marinated, halved",
        "amount": "4 eggs",
        "metric": "4 eggs",
        "imperial": "4 eggs",
        "common": "4 eggs"
      },
      {
        "name": "Menma (seasoned fermented bamboo shoots)",
        "prep": "drained",
        "amount": "80g",
        "metric": "80g",
        "imperial": "2.8 oz",
        "common": "1/2 cup"
      },
      {
        "name": "Aroma oil (scallion chicken fat / chiyu)",
        "prep": "rendered chicken fat with green scallions",
        "amount": "4 tbsp",
        "metric": "60ml",
        "imperial": "2 fl oz",
        "common": "4 tbsp"
      },
      {
        "name": "Scallions (negi)",
        "prep": "thinly sliced into fine rings",
        "amount": "4 stalks",
        "metric": "60g",
        "imperial": "2.1 oz",
        "common": "1/2 cup"
      },
      {
        "name": "Nori seaweed squares",
        "prep": "toasted crisp",
        "amount": "4 sheets (small)",
        "metric": "4 sheets",
        "imperial": "4 sheets",
        "common": "4 sheets"
      }
    ],
    "optionalIngredients": [
      {
        "name": "Narutomaki (fish cake with pink spiral)",
        "prep": "thinly sliced",
        "amount": "8 slices",
        "metric": "30g",
        "imperial": "1 oz",
        "common": "8 slices",
        "optional": true
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "SIMMER CLEAR CHICKEN-DASHI BROTH (CHINTAN)",
        "whatYouNeed": [
          "1kg cleaned chicken bones",
          "2.5 liters water",
          "15g kombu",
          "20g katsuobushi",
          "Ginger slices",
          "Scallion tops",
          "Stockpot"
        ],
        "description": "Place cleaned chicken bones and water in stockpot. Bring to a simmer over medium heat. Skim off all grey scum for 10 minutes until surface is clear. Add ginger slices, scallion greens, and kombu. Reduce heat to low-medium (90°C) so water produces gentle occasional bubbles. Simmer uncovered for 2 hours. Remove kombu after 45 minutes. At the 2-hour mark, turn off heat, add katsuobushi, steep for 10 minutes, and strain through a fine sieve into a clean pot. Keep at a bare simmer.",
        "howToDoIt": "Gentle simmering below boiling point extracts gelatin and umami from bones and bonito without emulsifying the fat, yielding a crystal-clear, golden broth with deep savory depth.",
        "heat": "Low-Medium Heat (90°C / 195°F)",
        "heatDescription": "Gentle occasional bubble; never a violent boil.",
        "duration": 130,
        "visualCues": "Crystal-clear, glowing golden-amber broth with tiny yellow globules of chicken fat floating on top.",
        "hear": "Soft, gentle murmur.",
        "smell": "Intense umami aroma of roasted poultry, oceanic kombu, and smoky bonito.",
        "textureCheck": "Clear, light-bodied broth rich with dissolved collagen.",
        "whatShouldThisLookLike": "Crystal-clear golden-amber chicken dashi broth.",
        "tip": "Never let the broth boil vigorously, or it will turn cloudy.",
        "commonMistake": "Leaving kombu in boiling stock for 2 hours — boiled kombu releases bitter slimy alginates.",
        "moveOnWhen": "Broth is strained, clear, and steaming hot.",
        "quickInstructions": "Simmer chicken bones with water 2 hours gently; steep kombu and katsuobushi; strain clear broth."
      },
      {
        "step": 2,
        "title": "WARM BOWLS & COMBINE TARE + AROMA OIL",
        "whatYouNeed": [
          "4 deep ramen bowls (pre-warmed with hot water)",
          "120ml Shoyu Tare",
          "4 tbsp scallion aroma oil (chiyu)",
          "Steaming hot broth"
        ],
        "description": "Warm the empty ramen bowls by filling with hot tap water for 2 minutes; pour out and wipe dry. Into the base of each dry, hot bowl, add 30ml Shoyu Tare and 1 tablespoon of fragrant scallion aroma oil (chiyu). Ladle 350ml of scalding-hot chicken dashi broth into each bowl. Whisk gently with chopsticks to combine.",
        "howToDoIt": "Pre-warming bowls prevents the scalding soup from dropping temperature. The aroma oil floats on top of the broth, acting as a thermal blanket that seals in heat and hits the nose with every slurp.",
        "heat": "Off",
        "heatDescription": "Bowl prep.",
        "duration": 3,
        "visualCues": "A shimmering golden-amber soup with droplets of aromatic chicken fat pooling across the surface.",
        "hear": "None",
        "smell": "Rich roasted soy sauce, sweet mirin, and scallion chicken oil.",
        "textureCheck": "Piping-hot, savory broth.",
        "whatShouldThisLookLike": "Steaming amber broth with glistening fat beads in deep bowls.",
        "tip": "Assemble bowls right before dropping noodles into boiling water.",
        "commonMistake": "Pouring broth into cold bowls — the soup temperature will drop 15°C within 1 minute.",
        "moveOnWhen": "All 4 bowls are filled with hot broth and aroma oil.",
        "quickInstructions": "Add 30ml tare and 1 tbsp aroma oil to hot bowls; ladle 350ml scalding broth, whisk lightly."
      },
      {
        "step": 3,
        "title": "BOIL KANSUI NOODLES & THE YUKIRI SHAKE",
        "whatYouNeed": [
          "4 portions fresh ramen noodles",
          "Large pot of vigorously boiling unsalted water",
          "Tebo strainer basket"
        ],
        "description": "Bring a large pot of water to a violent, rolling boil. Drop fresh ramen noodles into the water, stirring vigorously with chopsticks to separate strands. Boil for exactly 90 seconds (for firm kata-me chew). Lift the noodles out using the tebo strainer basket. Vigorously snap and flick the strainer downward 4 to 5 times (the yukiri shake) to expel every single drop of water.",
        "howToDoIt": "Alkalized kansui gives noodles their springy chew. Expelling all cooking water via yukiri ensures that excess starchy water does not cling to the noodles and dilute the concentrated tare soup.",
        "heat": "High Rolling Boil",
        "heatDescription": "Violent roaring boil.",
        "duration": 2,
        "visualCues": "Noodles turn translucent yellow and springy; tebo basket expels water cleanly.",
        "hear": "Roaring boil followed by rhythmic snaps of the strainer.",
        "smell": "Toasty, alkalized wheat aroma.",
        "textureCheck": "Springy, toothsome, firm al dente chew.",
        "whatShouldThisLookLike": "Tightly drained, steaming yellow noodles.",
        "tip": "Have bowls ready before boiling noodles — noodles must enter broth within 5 seconds of draining.",
        "commonMistake": "Gentle draining without shaking — wet noodles dilute the carefully calibrated broth.",
        "moveOnWhen": "Noodles are boiled 90 seconds and drained bone-dry.",
        "quickInstructions": "Boil noodles 90s in rolling water; snap strainer downward 4-5 times (yukiri) to expel all water."
      },
      {
        "step": 4,
        "title": "FOLD NOODLES & ASSEMBLE TOPPINGS",
        "whatYouNeed": [
          "Bowls with broth",
          "Drained noodles",
          "8 slices torched chashu",
          "4 halved ramen eggs",
          "Menma",
          "Nori sheets",
          "Sliced scallions"
        ],
        "description": "Gently lower the drained noodles into the soup bowl. Using chopsticks, lift and fold the noodles neatly into a uniform bed across the center of the bowl. Crown with 2 slices of torched pork chashu, 2 halves of marinated ramen egg with jammy yolk facing up, a bundle of menma bamboo shoots, and a mound of fresh sliced scallions. Tuck a square of nori upright against the back rim. Serve immediately.",
        "howToDoIt": "Folding the noodles creates an elegant presentation that allows the diner to pull individual strands smoothly with chopsticks without tangling.",
        "heat": "Off",
        "heatDescription": "Plating.",
        "duration": 2,
        "visualCues": "A masterpiece: glistening amber soup with folded noodles, torched caramel pork, glowing orange egg yolks, and crisp green scallions.",
        "hear": "Soft steam hissing.",
        "smell": "The intoxicating, legendary Tokyo ramen shop aroma.",
        "textureCheck": "Piping hot, springy noodles, melt-in-mouth pork, jammy egg.",
        "whatShouldThisLookLike": "Authentic Tokyo Shoyu Ramen.",
        "tip": "Slurp vigorously! Slurping draws in air, cooling the scalding noodles while aerating the broth across the palate.",
        "commonMistake": "Letting ramen sit for 5 minutes — kansui noodles absorb broth rapidly and become soggy.",
        "moveOnWhen": "Bowls are assembled and served steaming hot.",
        "quickInstructions": "Fold noodles neatly in broth; arrange chashu, halved jammy egg, menma, scallions, nori. Serve instantly."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Broth was cloudy and greasy.",
        "remedy": "The chicken stock was boiled vigorously. Maintain a gentle simmer below 90°C for clear broth."
      },
      {
        "mistake": "Noodles were soggy and broth tasted watery.",
        "remedy": "You didn't expel noodle water with the yukiri shake or over-boiled noodles. Boil for only 90 seconds and shake vigorously."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Broth tastes slightly too salty or too mild",
        "whatHappened": "Tare to broth ratio was slightly off.",
        "whyItHappened": "Ladle volume variance.",
        "whatToDoNow": "Add 2 tablespoons hot dashi broth to dilute saltiness, or add 1 teaspoon tare to intensify.",
        "howToPrevent": "Use exact 30ml tare to 350ml broth per bowl."
      }
    ],
    "substitutions": [
      {
        "original": "Chicken carcasses",
        "substitute": "Whole chicken wings + pork neck bones",
        "notes": "Wings provide rich gelatin."
      }
    ],
    "safetyNotes": [
      "Ramen bowls are scalding hot; carry with two hands holding the bottom rim."
    ],
    "servingGuide": {
      "restingTime": "Zero — eat within 10 minutes.",
      "garnishing": "Torched chashu, jammy ajitama egg, menma, negi scallions, nori.",
      "plating": "Serve in deep, oversized Japanese ceramic donburi bowls with chopsticks and a porcelain soup spoon (renge).",
      "temperature": "Scalding hot (85°C+).",
      "accompaniments": "Pan-fried pork gyoza, pickled ginger, and chilled Asahi beer."
    }
  },
  "tonkatsu-ramen": {
    "id": "tonkatsu-ramen",
    "name": "Hakata Tonkotsu Ramen (Rich Pork Bone Broth)",
    "cuisine": "Japanese",
    "region": "Japan (Fukuoka / Kyushu)",
    "servings": 4,
    "prepTime": 40,
    "cookTime": 360,
    "difficulty": "Expert",
    "overview": {
      "summary": "The holy grail of Kyushu ramen: pork femur (genkotsu) and neck bones boiled vigorously for 8–10 hours until bone marrow, collagen, and fat completely emulsify into a milky-white, opaque, rich, creamy broth. Served with ultra-thin, firm Hakata noodles, chashu pork, black garlic oil (mayu), wood-ear mushrooms (kikurage), and scallions.",
      "appearance": "Creamy, opaque ivory-white broth bubbling with micro-emulsified fat droplets, contrasting with thin yellow noodles, black kikurage strips, pink chashu, and a dark swirl of black garlic oil.",
      "texture": "Rich, velvety, lip-coating creamy broth packed with dissolved collagen; noodles are ultra-thin with a crisp, toothsome snap (katame/barikata).",
      "flavor": "Deeply savory, intense, porky umami richness balanced by garlic, ginger, and aromatic toasted sesame.",
      "restingTimeMinutes": 2
    },
    "equipment": [
      {
        "name": "Heavy tall stockpot (8–10 qt)",
        "purpose": "Holds rolling, violent boil for hours without boiling dry."
      },
      {
        "name": "Fine mesh sieve",
        "purpose": "For straining bone fragments and marrow solids to achieve velvety texture."
      },
      {
        "name": "Immersion blender (optional)",
        "purpose": "For rapidly re-emulsifying fat and broth into an opaque ivory cream before serving."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Soak 1.5kg pork femur bones (genkotsu) and 500g pork neck bones in cold water for 2 hours to draw out blood.",
        "durationMinutes": 120
      },
      {
        "task": "Blanch bones in boiling water for 10 minutes; drain and scrub under running water to remove all black coagulated marrow.",
        "durationMinutes": 20
      },
      {
        "task": "Rehydrate 20g dried wood-ear mushrooms (kikurage) in warm water for 20 minutes, then slice into thin matchsticks.",
        "durationMinutes": 20
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "The Violent Rolling Boil (Emulsification)",
        "technique": "Unlike clear chintan broth, Tonkotsu MUST be boiled violently at a rolling boil for 6–8 hours. The physical agitation violently breaks melted pork fat and gelatin into microscopic droplets suspended in water, forming a permanent creamy white emulsion (just like mayonnaise)."
      },
      {
        "item": "Black Garlic Oil (Mayu)",
        "technique": "Slowly fry grated garlic in sesame oil and lard across three stages until dark charcoal-brown. Blend into a jet-black aromatic oil; a single teaspoon drizzled over white tonkotsu cuts through the rich pork fat with complex roasted smokiness."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Pork femur / marrow bones (Genkotsu)",
        "prep": "cracked in half to expose marrow",
        "amount": "1.5kg",
        "metric": "1500g",
        "imperial": "3.3 lbs",
        "common": "4-5 bones"
      },
      {
        "name": "Pork neck bones / trotters",
        "prep": "blanched & cleaned for high gelatin",
        "amount": "500g",
        "metric": "500g",
        "imperial": "1.1 lbs",
        "common": "500g"
      },
      {
        "name": "Water for boiling",
        "prep": "replenished continuously",
        "amount": "4 liters",
        "metric": "4000ml",
        "imperial": "135 fl oz",
        "common": "16 cups"
      },
      {
        "name": "Yellow onion",
        "prep": "halved, skins left on",
        "amount": "1 large",
        "metric": "200g",
        "imperial": "7 oz",
        "common": "1 onion"
      },
      {
        "name": "Fresh ginger",
        "prep": "sliced thick",
        "amount": "50g",
        "metric": "50g",
        "imperial": "1.8 oz",
        "common": "2 inches"
      },
      {
        "name": "Garlic head",
        "prep": "halved crosswise",
        "amount": "1 head",
        "metric": "50g",
        "imperial": "1.8 oz",
        "common": "1 head"
      },
      {
        "name": "Thin straight Hakata-style ramen noodles",
        "prep": "firm, thin wheat noodles",
        "amount": "4 portions (450g)",
        "metric": "450g",
        "imperial": "1 lb",
        "common": "4 packs"
      },
      {
        "name": "Shio / Shoyu Tare (ramen seasoning base)",
        "prep": "concentrated sea salt & soy",
        "amount": "120ml",
        "metric": "120ml",
        "imperial": "4 fl oz",
        "common": "1/2 cup"
      },
      {
        "name": "Chashu pork belly slices",
        "prep": "tender braised slices",
        "amount": "8 slices",
        "metric": "200g",
        "imperial": "7 oz",
        "common": "8 slices"
      },
      {
        "name": "Kikurage (wood-ear mushrooms)",
        "prep": "rehydrated & thinly sliced",
        "amount": "40g",
        "metric": "40g",
        "imperial": "1.4 oz",
        "common": "1/2 cup"
      },
      {
        "name": "Black garlic oil (Mayu)",
        "prep": "for smoky drizzle",
        "amount": "4 tsp",
        "metric": "20ml",
        "imperial": "0.7 fl oz",
        "common": "4 tsp"
      },
      {
        "name": "Scallions (negi)",
        "prep": "finely sliced rings",
        "amount": "4 stalks",
        "metric": "60g",
        "imperial": "2.1 oz",
        "common": "1/2 cup"
      },
      {
        "name": "Toasted white sesame seeds",
        "prep": "lightly crushed in mortar",
        "amount": "2 tbsp",
        "metric": "20g",
        "imperial": "0.7 oz",
        "common": "2 tbsp"
      }
    ],
    "optionalIngredients": [
      {
        "name": "Beni shoga (red pickled shredded ginger)",
        "prep": "for sharp acidic bite",
        "amount": "2 tbsp",
        "metric": "30g",
        "imperial": "1 oz",
        "common": "2 tbsp",
        "optional": true
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "BLANCH & SCRUB PORK BONES CLEAN",
        "whatYouNeed": [
          "2kg pork bones",
          "Stockpot filled with water",
          "Tongs",
          "Scrub brush"
        ],
        "description": "Place all pork bones in a large pot and cover with cold water. Bring to a rapid rolling boil over high heat. Boil vigorously for 10 minutes. A thick layer of dark brown/black scum and coagulated blood will rise to the surface. Drain the entire pot into the sink. Take each bone under cold running water and thoroughly scrub away any dark clotted blood inside the crevices with a brush. Rinse the pot clean.",
        "howToDoIt": "Blanching and scrubbing away dark marrow clots is the absolute non-negotiable secret to a pure, milky-white, odor-free broth; skipping this will turn the broth dark grey, muddy, and barnyard-smelling.",
        "heat": "High Boil",
        "heatDescription": "Rolling boil for blanching.",
        "duration": 20,
        "visualCues": "Dark scum boils off; scrubbed bones turn clean, pale, and ivory-white with pink meat.",
        "hear": "Vigorous boiling.",
        "smell": "Pungent animal scum boiling off.",
        "textureCheck": "Clean, scrubbed hard bones.",
        "whatShouldThisLookLike": "Pristine, clean scrubbed bones in a sparkling pot.",
        "tip": "Inspect the cavity of the marrow bones and push out any dark clotted blood with a chopstick.",
        "commonMistake": "Skipping the scrub — dirty bones produce an unpalatable muddy grey broth.",
        "moveOnWhen": "All bones are scrubbed clean and pot is washed.",
        "quickInstructions": "Boil bones 10 mins, discard dirty water; scrub all bones thoroughly clean under cold running water."
      },
      {
        "step": 2,
        "title": "THE 6-HOUR ROLLING BOIL (MILKY EMULSIFICATION)",
        "whatYouNeed": [
          "Scrubbed clean bones",
          "4 liters water",
          "Halved onion",
          "Ginger",
          "Garlic head",
          "Heavy stockpot with lid"
        ],
        "description": "Return cleaned bones to the pot with 4 liters of fresh water, onion, ginger, and garlic. Bring to a rolling boil over high heat. Keep the pot at a steady, vigorous rolling boil uncovered or partially lidded for 6 to 8 hours. As water evaporates, replenish with boiling water to keep bones submerged. Stir every 30 minutes, using a wooden spoon to scrape the bottom and smash the softening marrow out of the bones.",
        "howToDoIt": "The continuous violent tumbling of the rolling boil physically shears the melted fat and dissolving collagen into microscopic droplets, permanently suspending them in water to create an opaque, milky-white emulsion.",
        "heat": "High to Medium-High Heat",
        "heatDescription": "Continuous, violent, rolling, tumbling boil.",
        "duration": 360,
        "visualCues": "Broth transforms from clear water into an opaque, creamy, milky-white liquid resembling melted vanilla ice cream; bones crumble.",
        "hear": "Continuous, energetic boiling and tumbling bones.",
        "smell": "Deep, rich, savory pork aroma filling the kitchen.",
        "textureCheck": "Thick, creamy, lip-coating liquid packed with gelatin.",
        "whatShouldThisLookLike": "Milky-white, opaque, rich boiling Tonkotsu broth.",
        "tip": "Keep the boil active! If you lower the heat to a gentle simmer, the emulsion breaks and fat floats to the top as a clear yellow oil layer.",
        "commonMistake": "Boiling on low heat — low heat makes clear pork broth, not milky tonkotsu.",
        "moveOnWhen": "Broth is milky-white, rich, and reduced to approx 1.5 liters.",
        "quickInstructions": "Boil bones vigorously for 6-8 hours with aromatics, replenishing water as needed, until opaque and milky-white."
      },
      {
        "step": 3,
        "title": "STRAIN & BLEND TO VELVET CREME",
        "whatYouNeed": [
          "Boiled tonkotsu broth",
          "Fine-mesh sieve",
          "Clean pot",
          "Immersion blender (optional)"
        ],
        "description": "Pour the hot broth through a fine-mesh sieve into a clean pot, pressing firmly on the soft bone fragments and aromatics to extract every bit of marrow and collagen. Discard solids. If the fat has separated slightly, insert an immersion blender into the hot broth and blend on high for 60 seconds. The broth will instantly froth into a velvety, creamy, opaque white foam.",
        "howToDoIt": "Straining removes sharp bone splinters. High-speed mechanical blending ensures 100% micro-emulsification, creating that luxurious, silky, lip-sticking mouthfeel.",
        "heat": "Off, then Low Simmer",
        "heatDescription": "Straining and holding warm.",
        "duration": 8,
        "visualCues": "Silky, creamy, pure ivory broth with a frothy surface; zero gritty particles.",
        "hear": "Whir of immersion blender.",
        "smell": "Rich, comforting, savory tonkotsu fragrance.",
        "textureCheck": "Velvety, rich, and coats the back of a spoon with a creamy film.",
        "whatShouldThisLookLike": "Liquid ivory velvet broth.",
        "tip": "Dip your fingers into a drop of cooled broth; your fingers should stick together from the dense collagen.",
        "commonMistake": "Skipping fine straining — tiny bone shards can ruin the eating experience.",
        "moveOnWhen": "Broth is strained smooth, velvety, and kept piping hot.",
        "quickInstructions": "Strain broth through fine sieve; blend 60s with immersion blender to micro-emulsify into creamy white froth."
      },
      {
        "step": 4,
        "title": "FLASH-BOIL THIN HAKATA NOODLES & ASSEMBLE",
        "whatYouNeed": [
          "4 pre-warmed deep ramen bowls",
          "120ml Tare",
          "Hot tonkotsu broth",
          "Thin Hakata noodles (boiled 45–60s only!)",
          "Chashu",
          "Kikurage",
          "Mayu (black garlic oil)",
          "Scallions",
          "Crushed sesame"
        ],
        "description": "Add 30ml tare to each pre-warmed hot bowl. Ladle 350ml scalding milky tonkotsu broth; whisk lightly. Boil thin Hakata noodles in rolling water for ONLY 45 to 60 seconds (Hakata style is eaten firm/katame!). Shake out water vigorously with tebo. Place noodles in broth. Top with 2 slices chashu pork, shredded black kikurage mushrooms, sliced scallions, and crushed sesame seeds. Drizzle 1 teaspoon of jet-black garlic oil (mayu) in a swirl across the white broth. Serve instantly.",
        "howToDoIt": "Thin Hakata noodles cook in under 60 seconds; cooking longer makes them mushy in the rich, heavy broth. The black garlic oil cuts through the pork fat with deep roasted complexity.",
        "heat": "Off",
        "heatDescription": "Assembly.",
        "duration": 3,
        "visualCues": "Stunning visual contrast: jet-black garlic oil swirling across milky-white broth, topped with pink chashu and black mushrooms.",
        "hear": "Soft hiss of steam.",
        "smell": "Rich pork, roasted black garlic, and toasted sesame.",
        "textureCheck": "Velvety, lip-sticking broth; snappy, firm noodles; crunchy wood-ear mushrooms.",
        "whatShouldThisLookLike": "World-class Hakata Tonkotsu Ramen bowl.",
        "tip": "Eat immediately! Hakata noodles are thin and absorb broth very rapidly.",
        "commonMistake": "Boiling Hakata noodles for 2–3 minutes — they turn into soggy paste.",
        "moveOnWhen": "Bowls are assembled and served steaming hot.",
        "quickInstructions": "Add tare and broth to bowls; boil thin noodles 45-60s, drain dry, add to broth. Top with chashu, kikurage, negi, mayu."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Broth was grey and tasted sour/funky.",
        "remedy": "You didn't blanch and scrub the bones clean under cold running water before the long boil."
      },
      {
        "mistake": "Broth was thin and watery, not creamy white.",
        "remedy": "The heat was too low. Tonkotsu requires a continuous rolling boil for 6+ hours to physically emulsify the fat."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Broth has a thick layer of clear yellow oil on top instead of being white",
        "whatHappened": "The rolling boil stopped and the emulsion broke.",
        "whyItHappened": "Heat was reduced.",
        "whatToDoNow": "Use an immersion blender on high speed for 90 seconds directly in the hot pot to force the fat back into micro-emulsion.",
        "howToPrevent": "Keep heat high enough for continuous rolling boil."
      }
    ],
    "substitutions": [
      {
        "original": "Pork femur bones",
        "substitute": "Pork trotters + chicken feet",
        "notes": "Adds immense gelatin to help emulsify the broth."
      }
    ],
    "safetyNotes": [
      "Violent boiling pots can bubble over; leave adequate headspace in the pot."
    ],
    "servingGuide": {
      "restingTime": "Zero — eat immediately.",
      "garnishing": "Swirl of black garlic oil (mayu), kikurage, scallions, crushed sesame, red beni shoga.",
      "plating": "Serve in deep ceramic Hakata-style ramen bowls.",
      "temperature": "Scalding hot.",
      "accompaniments": "Extra noodle refill (Kaedama), pan-fried gyoza, and cold draft beer."
    }
  },
  "udon": {
    "id": "udon",
    "name": "Sanuki Kake Udon (Thick Chewy Wheat Noodles in Dashi)",
    "cuisine": "Japanese",
    "region": "Japan (Kagawa / Shikoku)",
    "servings": 4,
    "prepTime": 20,
    "cookTime": 15,
    "difficulty": "Easy",
    "overview": {
      "summary": "Sanuki-style comfort: thick, square-cut, delightfully chewy wheat noodles (Sanuki udon) steeped in a crystal-clear, delicate, piping-hot golden dashi broth (kakejiru) seasoned with usukuchi (light soy sauce) and mirin, crowned with crispy tempura flakes (tenkasu), sliced scallions, and kamaboko fish cake.",
      "appearance": "A clean, elegant Japanese bowl: thick ivory noodles coiled in a glowing golden broth, scattered with golden tenkasu crunch, fine green scallions, and pink-rimmed kamaboko.",
      "texture": "Superlatively chewy, springy, and slippery noodles (koshi bite) swimming in hot, soothing, clean broth with crisp tempura bits.",
      "flavor": "Deeply comforting, clean, oceanic dashi umami from kombu and katsuobushi with delicate sweet mirin notes.",
      "restingTimeMinutes": 1
    },
    "equipment": [
      {
        "name": "Large pasta pot",
        "purpose": "For boiling thick udon noodles in ample rolling water so they don't stick."
      },
      {
        "name": "Noodle strainer (Tebo)",
        "purpose": "For boiling and rinsing noodles."
      },
      {
        "name": "Medium saucepan",
        "purpose": "For simmering delicate kakejiru dashi broth."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Steep 15g kombu in 1.2 liters cold water for 30 minutes; heat to bare simmer, remove kombu, add 25g katsuobushi for 5 mins, strain clear dashi.",
        "durationMinutes": 40
      },
      {
        "task": "Slice kamaboko (Japanese pink-and-white fish cake) into 5mm half-moons.",
        "durationMinutes": 3
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Cold Water Shock & Re-Heating (Numeri-Tori)",
        "technique": "Boil udon noodles until tender. Drain and immediately plunge into a bowl of cold water, rubbing the noodles vigorously between your hands to wash away surface starch (numeri-tori). This locks in the firm, chewy, resilient \"koshi\" texture. Right before serving, dunk the cold noodles in boiling water for 15 seconds to re-warm, then drain and slide into the hot soup bowl."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Fresh or frozen Sanuki Udon noodles",
        "prep": "thick square-cut noodles",
        "amount": "4 portions (800g)",
        "metric": "800g",
        "imperial": "1.75 lbs",
        "common": "4 packs"
      },
      {
        "name": "Primary Dashi broth (Ichiban Dashi)",
        "prep": "fresh kombu & bonito stock",
        "amount": "1.2 liters",
        "metric": "1200ml",
        "imperial": "40 fl oz",
        "common": "5 cups"
      },
      {
        "name": "Usukuchi Shoyu (Japanese light soy sauce)",
        "prep": "preserves golden broth color",
        "amount": "3 tbsp",
        "metric": "45ml",
        "imperial": "1.5 fl oz",
        "common": "3 tbsp"
      },
      {
        "name": "Mirin (sweet rice wine)",
        "prep": "authentic brewed",
        "amount": "3 tbsp",
        "metric": "45ml",
        "imperial": "1.5 fl oz",
        "common": "3 tbsp"
      },
      {
        "name": "Granulated sugar",
        "prep": "subtle balance",
        "amount": "1 tsp",
        "metric": "4g",
        "imperial": "0.14 oz",
        "common": "1 tsp"
      },
      {
        "name": "Fine sea salt",
        "prep": "for broth seasoning",
        "amount": "1 tsp",
        "metric": "6g",
        "imperial": "0.2 oz",
        "common": "1 tsp"
      },
      {
        "name": "Kamaboko (steamed fish cake)",
        "prep": "pink-and-white slices",
        "amount": "8 slices",
        "metric": "40g",
        "imperial": "1.4 oz",
        "common": "8 slices"
      },
      {
        "name": "Tenkasu (crunchy fried tempura flakes)",
        "prep": "golden crisp bits",
        "amount": "4 tbsp",
        "metric": "30g",
        "imperial": "1 oz",
        "common": "1/4 cup"
      },
      {
        "name": "Scallions (negi)",
        "prep": "finely sliced rings",
        "amount": "3 stalks",
        "metric": "45g",
        "imperial": "1.6 oz",
        "common": "1/3 cup"
      },
      {
        "name": "Shichimi Togarashi (Japanese 7-spice)",
        "prep": "for table sprinkle",
        "amount": "1 tsp",
        "metric": "3g",
        "imperial": "0.1 oz",
        "common": "1 tsp"
      }
    ],
    "optionalIngredients": [
      {
        "name": "Ebi Tempura (crispy tempura prawns)",
        "prep": "for Tempura Udon variation",
        "amount": "4 pieces",
        "metric": "120g",
        "imperial": "4.2 oz",
        "common": "4 prawns",
        "optional": true
      },
      {
        "name": "Onsen Tamago (soft-poached hot spring egg)",
        "prep": "custardy egg",
        "amount": "4 eggs",
        "metric": "4 eggs",
        "imperial": "4 eggs",
        "common": "4 eggs",
        "optional": true
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "SIMMER GOLDEN KAKEJIRU DASHI BROTH",
        "whatYouNeed": [
          "1.2 liters fresh dashi",
          "3 tbsp light soy sauce (usukuchi)",
          "3 tbsp mirin",
          "1 tsp sugar",
          "1 tsp salt",
          "Saucepan"
        ],
        "description": "In a saucepan, combine dashi broth, usukuchi light soy sauce, mirin, sugar, and salt. Bring to a gentle simmer over medium heat. Let simmer for 2 minutes to cook off raw alcohol from mirin. Keep at a bare simmer on lowest heat.",
        "howToDoIt": "Using usukuchi (light-colored) soy sauce seasons the broth with proper salinity and umami while keeping the soup crystal-clear and pale golden.",
        "heat": "Medium then Lowest Heat",
        "heatDescription": "Gentle warmth.",
        "duration": 5,
        "visualCues": "Crystal-clear, luminous pale golden broth with zero cloudiness.",
        "hear": "Gentle simmer.",
        "smell": "Smoky bonito, sweet mirin, and oceanic kombu.",
        "textureCheck": "Light, clear, savory sipping broth.",
        "whatShouldThisLookLike": "Glistening golden kakejiru broth.",
        "tip": "Do not use dark soy sauce (koikuchi) — it will turn the delicate udon broth dark brown.",
        "commonMistake": "Boiling dashi violently — boiling makes bonito broth bitter.",
        "moveOnWhen": "Broth is seasoned, golden, and held hot.",
        "quickInstructions": "Simmer dashi with light soy, mirin, sugar, and salt for 2 mins; hold on low heat."
      },
      {
        "step": 2,
        "title": "BOIL UDON & COLD STARCH WASH (NUMERI-TORI)",
        "whatYouNeed": [
          "4 portions Sanuki udon noodles",
          "Large pot of boiling water",
          "Colander",
          "Bowl of cold water"
        ],
        "description": "Drop udon noodles into a large pot of rapidly boiling water. Boil for 8–10 minutes (or 2–3 minutes for frozen udon) until tender with a chewy, firm core. Drain into a colander and immediately plunge into cold running water. Vigorously rub and wash the noodles with both hands to wash away surface starch (numeri-tori). Drain thoroughly.",
        "howToDoIt": "Rubbing in cold water strips away surface slime and shocks the wheat gluten, giving Sanuki udon its world-famous firm, chewy, slippery bite (koshi).",
        "heat": "High Boil",
        "heatDescription": "Rolling boil.",
        "duration": 10,
        "visualCues": "Noodles turn translucent ivory; cold water wash leaves them silky, slippery, and separate.",
        "hear": "Boiling water.",
        "smell": "Clean wheat aroma.",
        "textureCheck": "Extremely chewy, springy, firm, and slippery.",
        "whatShouldThisLookLike": "Pristine, thick, shiny white udon noodles.",
        "tip": "Never skip the cold water wash; unwashed udon makes the broth thick and muddy.",
        "commonMistake": "Serving straight from boiling water without cold shock — noodles become limp and soggy.",
        "moveOnWhen": "Noodles are cold-washed and drained.",
        "quickInstructions": "Boil udon noodles until tender; plunge in cold water and wash away starch with hands; drain."
      },
      {
        "step": 3,
        "title": "FLASH RE-WARM & ASSEMBLE",
        "whatYouNeed": [
          "Washed cold noodles",
          "Pot of hot water",
          "Strainer",
          "4 warmed deep bowls",
          "Hot kakejiru broth",
          "Kamaboko slices",
          "Tenkasu",
          "Scallions",
          "Shichimi togarashi"
        ],
        "description": "Dip the cold udon noodles into a pot of boiling water for 15 seconds to re-warm. Drain firmly and divide into 4 warmed deep soup bowls. Pour 300ml of scalding golden kakejiru broth over the noodles in each bowl. Top with 2 slices of pink kamaboko, a generous spoonful of crunchy tenkasu (tempura flakes), and sliced scallions. Dust with shichimi togarashi and serve immediately.",
        "howToDoIt": "Brief re-warming preserves the internal chewiness while ensuring the noodles are piping hot when submerged in the dashi broth.",
        "heat": "Off",
        "heatDescription": "Assembly.",
        "duration": 3,
        "visualCues": "Steaming golden broth cradling thick white noodles, topped with pink fish cake, green scallions, and golden crunchy flakes.",
        "hear": "Crisp crackle as tenkasu hits hot broth.",
        "smell": "Incredible soothing dashi aroma with toasted tempura crunch.",
        "textureCheck": "Chewy, springy noodles; hot soothing broth; crispy tempura flakes.",
        "whatShouldThisLookLike": "Classic Japanese Sanuki Kake Udon.",
        "tip": "Add tempura flakes right at the table so they retain their crisp crunch.",
        "commonMistake": "Leaving cooked udon sitting on the counter — assemble and eat immediately.",
        "moveOnWhen": "Bowls are assembled and served hot.",
        "quickInstructions": "Re-warm noodles in boiling water 15s; drain into bowls, pour hot dashi broth, top with kamaboko, tenkasu, negi."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Noodles were slimy and broth turned cloudy.",
        "remedy": "You skipped the cold water wash (numeri-tori). Always rub cooked noodles in cold water to strip surface starch."
      },
      {
        "mistake": "Broth was dark and tasted harsh.",
        "remedy": "You used dark soy sauce. Always use Japanese light soy sauce (usukuchi shoyu)."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Noodles feel too soft",
        "whatHappened": "Boiled for too long.",
        "whyItHappened": "Overcooking.",
        "whatToDoNow": "Shock immediately in ice water for 2 minutes to firm up gluten.",
        "howToPrevent": "Check noodles 2 minutes before package instructions; Sanuki udon should be firm."
      }
    ],
    "substitutions": [
      {
        "original": "Tenkasu (tempura flakes)",
        "substitute": "Crushed potato chips or panko lightly toasted in sesame oil",
        "notes": "Adds similar crunchy texture."
      }
    ],
    "safetyNotes": [
      "Serve in sturdy bowls; hot dashi broth is scalding."
    ],
    "servingGuide": {
      "restingTime": "Zero — eat immediately.",
      "garnishing": "Kamaboko slices, tenkasu tempura flakes, scallions, shichimi 7-spice.",
      "plating": "Serve in deep ceramic donburi bowls with chopsticks and wooden broth ladle.",
      "temperature": "Piping hot.",
      "accompaniments": "Crispy prawn tempura (Ebi Tempura), inari sushi (sweet tofu rice pockets), and cold green tea."
    }
  },
  "soba": {
    "id": "soba",
    "name": "Traditional Zaru Soba (Chilled Buckwheat Noodles with Dipping Sauce)",
    "cuisine": "Japanese",
    "region": "Japan (Nagano / Shinshu)",
    "servings": 4,
    "prepTime": 15,
    "cookTime": 10,
    "difficulty": "Easy",
    "overview": {
      "summary": "The refined summer soul of Japanese dining: earthy buckwheat noodles (Nihachi 80/20 soba) boiled al dente, plunged into an ice water bath to snap the starches tight, and served chilled over a slotted bamboo tray (zaru) with crisp shredded nori. Dipped into a concentrated chilled dashi-soy sauce (tsuyu) spiked with wasabi and scallions, finished with hot cloudy noodle water (sobayu).",
      "appearance": "Neat nests of taupe-grey buckwheat noodles resting on a slatted bamboo mat, crowned with fine threads of black nori, alongside a dipping cup of dark amber tsuyu, wasabi, and scallions.",
      "texture": "Firm, toothsome, slippery, and delightfully al dente with a clean snap; completely refreshing and non-sticky.",
      "flavor": "Nutty, earthy buckwheat grain flavor contrasted by savory, sweet, smoky dashi dipping sauce and pungent wasabi.",
      "restingTimeMinutes": 1
    },
    "equipment": [
      {
        "name": "Zaru (slotted bamboo serving tray)",
        "purpose": "Allows water to drain freely beneath noodles so they remain firm and cold without becoming waterlogged."
      },
      {
        "name": "Soba choko (ceramic dipping cups)",
        "purpose": "For holding the concentrated dipping sauce."
      },
      {
        "name": "Large bowl with ice cubes",
        "purpose": "For temperature shocking noodles."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Simmer 100ml dashi, 50ml mirin, and 50ml soy sauce for 3 minutes; chill completely in refrigerator (soba tsuyu).",
        "durationMinutes": 20
      },
      {
        "task": "Prepare a large bowl with water and 20 ice cubes.",
        "durationMinutes": 2
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Cold Water Starch Rub (Wash Shock)",
        "technique": "Boil soba for 4–5 minutes. Drain and plunge immediately into ice-cold water. Vigorously swish and rub noodles between both hands to remove excess surface starch until the water runs clear and noodles feel taut, firm, and slippery."
      },
      {
        "item": "Sobayu Tradition",
        "technique": "DO NOT dump out the hot noodle boiling water! Save 1 cup in a small teapot. At the end of the meal, pour hot noodle water into your leftover dipping tsuyu cup to create a soothing, savory hot tea to sip."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Buckwheat Soba noodles (Nihachi 80% buckwheat)",
        "prep": "dried or fresh",
        "amount": "4 portions (350g)",
        "metric": "350g",
        "imperial": "12.3 oz",
        "common": "4 bundles"
      },
      {
        "name": "Soba Tsuyu (concentrated dipping sauce)",
        "prep": "chilled dashi-soy reduction",
        "amount": "200ml",
        "metric": "200ml",
        "imperial": "6.8 fl oz",
        "common": "1 cup"
      },
      {
        "name": "Kizami Nori (shredded toasted seaweed)",
        "prep": "fine matchsticks",
        "amount": "2 tbsp",
        "metric": "6g",
        "imperial": "0.2 oz",
        "common": "2 tbsp"
      },
      {
        "name": "Scallions (negi)",
        "prep": "very finely sliced rings",
        "amount": "3 stalks",
        "metric": "45g",
        "imperial": "1.6 oz",
        "common": "1/3 cup"
      },
      {
        "name": "Wasabi paste",
        "prep": "fresh or paste",
        "amount": "1.5 tbsp",
        "metric": "22g",
        "imperial": "0.8 oz",
        "common": "1.5 tbsp"
      },
      {
        "name": "Water for boiling soba",
        "prep": "large pot",
        "amount": "3 liters",
        "metric": "3000ml",
        "imperial": "100 fl oz",
        "common": "12 cups"
      }
    ],
    "optionalIngredients": [
      {
        "name": "Grated Nagaimo mountain yam (Tororo Soba)",
        "prep": "for slippery texture",
        "amount": "1/2 cup",
        "metric": "100g",
        "imperial": "3.5 oz",
        "common": "1/2 cup",
        "optional": true
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "BOIL SOBA NOODLES AL DENTE",
        "whatYouNeed": [
          "350g soba noodles",
          "3 liters rapidly boiling water in large pot",
          "Timer"
        ],
        "description": "Drop soba noodles into rapidly boiling water in a fan shape. Stir gently with chopsticks to submerge and separate strands. Boil over medium-high heat for 4 to 5 minutes (follow package time closely) until tender with a firm al dente core. (Keep a cup of hot noodle water before draining!).",
        "howToDoIt": "Buckwheat contains delicate starches; boiling in massive water volume without salt prevents noodles from becoming gummy.",
        "heat": "High Rolling Boil",
        "heatDescription": "Active boiling.",
        "duration": 5,
        "visualCues": "Noodles turn supple and grey-brown; water turns cloudy and pale tan from dissolved buckwheat starches.",
        "hear": "Lively bubbling.",
        "smell": "Nutty, earthy buckwheat grain aroma.",
        "textureCheck": "Al dente with a firm toothsome snap.",
        "whatShouldThisLookLike": "Tender grey-brown buckwheat noodles in boiling cloudy water.",
        "tip": "Reserve 1 cup of the cloudy boiling water (sobayu) in a small teapot before draining.",
        "commonMistake": "Over-boiling past 5 minutes — soba breaks into mush if overcooked.",
        "moveOnWhen": "Noodles are al dente (approx 4-5 mins).",
        "quickInstructions": "Boil soba noodles in rolling water 4-5 mins until al dente; reserve 1 cup boiling water for sobayu."
      },
      {
        "step": 2,
        "title": "THE ICE SHOCK & STARCH WASH",
        "whatYouNeed": [
          "Cooked soba noodles",
          "Colander",
          "Large bowl of ice water"
        ],
        "description": "Drain noodles in a colander. Immediately plunge into the bowl of ice water. Swish and gently rub the noodles between your palms under the cold water for 60 seconds to wash off all slippery surface starch. Lift and drain thoroughly, tossing in the colander to shake off every drop of water.",
        "howToDoIt": "The ice bath immediately stops cooking, tightening the buckwheat starches into a firm, snappy texture, while washing removes surface starch so the noodles never clump.",
        "heat": "Off (Ice Cold)",
        "heatDescription": "Ice shock.",
        "duration": 3,
        "visualCues": "Noodles turn cold, glossy, taut, and separate cleanly without sticking to fingers.",
        "hear": "Swishing in ice water.",
        "smell": "Clean, fresh buckwheat.",
        "textureCheck": "Firm, toothsome, cold, and slippery.",
        "whatShouldThisLookLike": "Cold, taut, glistening buckwheat noodles.",
        "tip": "Shake vigorously in the colander — water left on noodles will dilute the dipping sauce.",
        "commonMistake": "Skipping the ice wash — unwashed soba turns into a sticky, clumped mess within 2 minutes.",
        "moveOnWhen": "Noodles are ice-cold, washed free of starch, and drained dry.",
        "quickInstructions": "Plunge cooked noodles into ice water, rub gently to wash off starch, drain completely dry."
      },
      {
        "step": 3,
        "title": "PLATE ON BAMBOO ZARU & ASSEMBLE",
        "whatYouNeed": [
          "Chilled dry noodles",
          "Slatted bamboo zaru trays",
          "Kizami nori shreds",
          "Chilled soba tsuyu dipping cups",
          "Wasabi",
          "Sliced scallions"
        ],
        "description": "Form the noodles into loose, elegant coils and arrange across the slatted bamboo zaru tray. Crown with fine shreds of black nori. Pour chilled soba tsuyu into small ceramic dipping cups (soba choko). Place small dishes of sliced scallions and wasabi on the side.",
        "howToDoIt": "The slatted bamboo zaru lets any residual water drain beneath, keeping the noodles dry and taut. Dipping sauce is kept concentrated so each quick dip packs intense flavor.",
        "heat": "Off",
        "heatDescription": "Plating.",
        "duration": 2,
        "visualCues": "Taupe-grey noodle nests crowned with black seaweed shreds over a natural bamboo mat, beside dark dipping sauce and green wasabi.",
        "hear": "None",
        "smell": "Earthy buckwheat, toasted nori, and savory dashi.",
        "textureCheck": "Ice-cold, firm noodles with clean snap.",
        "whatShouldThisLookLike": "Classic Japanese Zaru Soba service.",
        "tip": "Add a pinch of scallions and a dab of wasabi to the dipping sauce; pick up a bite of noodles, dip bottom third into sauce, and slurp vigorously.",
        "commonMistake": "Submerging the entire noodle portion in sauce for 30 seconds — soba should be dipped only halfway so you taste the pure buckwheat grain.",
        "moveOnWhen": "Plated on bamboo tray with dipping cup and condiments.",
        "quickInstructions": "Arrange noodles on bamboo zaru, top with nori shreds; serve with chilled tsuyu cup, wasabi, and scallions."
      },
      {
        "step": 4,
        "title": "THE SOBAYU FINALE",
        "whatYouNeed": [
          "Leftover dipping sauce in cup",
          "Reserved hot soba water (sobayu) in teapot"
        ],
        "description": "After finishing all the noodles, pour the hot, cloudy, nutritious buckwheat boiling water (sobayu) from your teapot into the remaining dipping sauce in your cup. Stir and sip as a soothing hot tea.",
        "howToDoIt": "Sobayu contains water-soluble vitamins (B1, B2, rutin antioxidants) extracted from the buckwheat during boiling. Diluting the concentrated salty sauce with hot buckwheat water creates a delicious, restorative, healthy broth.",
        "heat": "Off",
        "heatDescription": "Table ritual.",
        "duration": 2,
        "visualCues": "Dark sauce turns into a warm, comforting, pale-amber cloudy broth.",
        "hear": "Pouring sound.",
        "smell": "Toasty buckwheat tea and warm dashi.",
        "textureCheck": "Comforting, warm, drinkable tea.",
        "whatShouldThisLookLike": "Hot cup of seasoned Sobayu.",
        "tip": "This is the traditional conclusion to every authentic soba meal in Japan.",
        "commonMistake": "Throwing away the noodle water down the drain.",
        "moveOnWhen": "Sobayu is poured and enjoyed.",
        "quickInstructions": "Pour hot buckwheat cooking water (sobayu) into remaining dipping sauce; sip as warm tea."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Soba became gummy and clumped.",
        "remedy": "You didn't rinse in cold water or let it sit too long. Rinse vigorously under cold water and serve immediately."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Dipping sauce is too salty",
        "whatHappened": "Tsuyu was not diluted.",
        "whyItHappened": "Concentrate used without water.",
        "whatToDoNow": "Add 2 tablespoons of cold water or ice to dilute to desired dipping strength.",
        "howToPrevent": "Follow 1:1 dashi to soy-mirin ratio for dipping tsuyu."
      }
    ],
    "substitutions": [
      {
        "original": "Buckwheat Soba",
        "substitute": "Chilled Somen or Cha-soba (green tea soba)",
        "notes": "Green tea soba offers delicate matcha fragrance."
      }
    ],
    "safetyNotes": [
      "Buckwheat is a common allergen; verify diners have no buckwheat allergy."
    ],
    "servingGuide": {
      "restingTime": "Serve immediately on ice-cold tray.",
      "garnishing": "Kizami nori matchsticks, sliced scallions, and fresh wasabi.",
      "plating": "Serve on slatted bamboo zaru mat with a ceramic dipping cup.",
      "temperature": "Ice-cold noodles; hot sobayu finale.",
      "accompaniments": "Crispy vegetable and prawn tempura (Tenzaru Soba) and hot sobayu."
    }
  },
  "tempura": {
    "id": "tempura",
    "name": "Authentic Tokyo Edo-Style Tempura (Crispy Prawns & Vegetables)",
    "cuisine": "Japanese",
    "region": "Japan (Tokyo)",
    "servings": 4,
    "prepTime": 30,
    "cookTime": 20,
    "difficulty": "Hard",
    "overview": {
      "summary": "The pinnacle of Japanese frying craft: succulent prawns, sweet potatoes, lotus root, and shiso leaves dipped in an ice-cold, barely-mixed, lumpy batter, fried in a sesame-blend oil at precise temperature with the \"blooming flower\" flicking technique (hana o sakaseru) into a gossamer-thin, lace-crisp, non-greasy golden jacket, served with warm tentsuyu dipping sauce and grated daikon.",
      "appearance": "Pristine, delicate, pale-golden tempura pieces crowned with airy, feathery lace frills (koromo), completely greaseless and dry, served alongside a warm amber dipping broth and white daikon mound.",
      "texture": "Impossibly light, airy, shatteringly crisp, and glass-like outer crust yielding to steaming, tender, juicy prawns and sweet vegetables.",
      "flavor": "Pure, clean sweetness of fresh seafood and vegetables accented by toasted sesame aroma and savory dashi-mirin dip.",
      "restingTimeMinutes": 1
    },
    "equipment": [
      {
        "name": "Heavy deep Dutch oven or cast iron tempura pot",
        "purpose": "Holds stable deep-frying temperature with rapid heat recovery."
      },
      {
        "name": "Deep-fry thermometer",
        "purpose": "Accurately regulates frying oil at 175°C (350°F) for vegetables and 180°C (360°F) for prawns."
      },
      {
        "name": "Long wooden cooking chopsticks (Saibashi)",
        "purpose": "For barely mixing batter and flicking batter drops onto frying prawns."
      },
      {
        "name": "Wire tempura rack (Ami)",
        "purpose": "Allows excess oil to drain freely without steaming the crisp crust."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Chill 250ml water with ice cubes; chill flour in the freezer for 20 minutes.",
        "durationMinutes": 20
      },
      {
        "task": "Peel and devein 8 large prawns, leave tail on; make 3 small diagonal incisions along the belly and gently snap the back tendon so prawns stay straight when fried.",
        "durationMinutes": 15
      },
      {
        "task": "Slice sweet potato (5mm rounds), lotus root (5mm rounds), and shiitake mushrooms; pat 100% dry.",
        "durationMinutes": 10
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Prawn Tendon Snapping",
        "technique": "Prawns curl naturally when heated. Make 3 diagonal cuts across the belly muscle and press the prawn flat on a board until you hear/feel the tendons snap. A straightened prawn stays long and dramatic during frying."
      },
      {
        "item": "The Ice-Cold Lumpy Batter Rule",
        "technique": "Whisk 1 egg yolk and ice water together. Add cold flour and mix with chopsticks in 8 to 10 stabbing motions ONLY. DO NOT whisk smooth! The batter MUST have visible flour lumps and dry flour pockets. Smooth batter develops gluten, creating a tough, greasy, rubbery pancake shell; lumpy cold batter creates a shatteringly crisp, lace-thin glass crust."
      },
      {
        "item": "Hana o Sakaseru (Making the Flower Bloom)",
        "technique": "Dip your chopsticks into wet batter and flick droplets directly onto the frying prawn in the oil. The droplets weld onto the crust, creating dramatic, airy, feathery tempura lace."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Large prawns (Black Tiger or King prawns)",
        "prep": "peeled, deveined, tails on, tendons snapped straight",
        "amount": "8 prawns",
        "metric": "250g",
        "imperial": "8.8 oz",
        "common": "8 prawns"
      },
      {
        "name": "Japanese sweet potato (Satsumaimo)",
        "prep": "cut into 5mm rounds",
        "amount": "1 small",
        "metric": "150g",
        "imperial": "5.3 oz",
        "common": "8 rounds"
      },
      {
        "name": "Lotus root (Renkon)",
        "prep": "peeled & sliced into 5mm wheels",
        "amount": "100g",
        "metric": "100g",
        "imperial": "3.5 oz",
        "common": "8 wheels"
      },
      {
        "name": "Shiitake mushrooms",
        "prep": "stems removed, cap scored with X",
        "amount": "4 mushrooms",
        "metric": "80g",
        "imperial": "2.8 oz",
        "common": "4 pieces"
      },
      {
        "name": "Fresh Shiso leaves",
        "prep": "washed & dried completely",
        "amount": "4 leaves",
        "metric": "5g",
        "imperial": "0.18 oz",
        "common": "4 leaves"
      },
      {
        "name": "Cake flour (low protein / Hakurikiko)",
        "prep": "chilled in freezer",
        "amount": "150g",
        "metric": "150g",
        "imperial": "5.3 oz",
        "common": "1.25 cups"
      },
      {
        "name": "Cornstarch or potato starch (Katakuriko)",
        "prep": "for pre-dusting ingredients",
        "amount": "3 tbsp",
        "metric": "30g",
        "imperial": "1 oz",
        "common": "3 tbsp"
      },
      {
        "name": "Egg yolk (cold)",
        "prep": "separated from white",
        "amount": "1 yolk",
        "metric": "20g",
        "imperial": "0.7 oz",
        "common": "1 yolk"
      },
      {
        "name": "Ice water (ice cubes removed)",
        "prep": "ice-cold",
        "amount": "250ml",
        "metric": "250ml",
        "imperial": "8.5 fl oz",
        "common": "1 cup"
      },
      {
        "name": "Frying oil",
        "prep": "neutral oil (canola/peanut) + 20% toasted sesame oil",
        "amount": "1 liter",
        "metric": "1000ml",
        "imperial": "34 fl oz",
        "common": "4 cups"
      },
      {
        "name": "Tentsuyu dipping sauce",
        "prep": "dashi (150ml) + mirin (3 tbsp) + soy (3 tbsp) simmered",
        "amount": "200ml",
        "metric": "200ml",
        "imperial": "6.8 fl oz",
        "common": "1 cup"
      },
      {
        "name": "Daikon radish",
        "prep": "finely grated into snow (oroshi)",
        "amount": "100g",
        "metric": "100g",
        "imperial": "3.5 oz",
        "common": "1/2 cup"
      },
      {
        "name": "Fresh ginger",
        "prep": "finely grated",
        "amount": "1 tbsp",
        "metric": "15g",
        "imperial": "0.5 oz",
        "common": "1 tbsp"
      }
    ],
    "optionalIngredients": [
      {
        "name": "Matcha sea salt (Matcha-jio)",
        "prep": "fine salt mixed with green tea powder for dipping",
        "amount": "1 tsp",
        "metric": "5g",
        "imperial": "0.18 oz",
        "common": "1 tsp",
        "optional": true
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "PRE-DUST INGREDIENTS & REGULATE OIL",
        "whatYouNeed": [
          "Prawns",
          "Vegetable slices",
          "3 tbsp cornstarch",
          "Frying oil in heavy pot",
          "Thermometer (175°C / 350°F)"
        ],
        "description": "Heat frying oil with 2 tbsp toasted sesame oil to 175°C (350°F). Lightly dust all prawns and vegetable slices in cornstarch, tapping off all excess powder so only a translucent dusting remains.",
        "howToDoIt": "Cornstarch acts as an adhesive primer; without a dry dusting, cold wet batter will slip off the smooth raw prawns in the hot oil.",
        "heat": "Medium Heat",
        "heatDescription": "Steady oil temperature.",
        "duration": 8,
        "visualCues": "Prawns and vegetables have a whisper of white powder; oil is hot and clear.",
        "hear": "None.",
        "smell": "Faint nutty aroma of toasted sesame oil.",
        "textureCheck": "Dry, lightly dusted surfaces.",
        "whatShouldThisLookLike": "Lightly dusted prawns and vegetables ready for dipping.",
        "tip": "Leave the prawn tails un-dusted; fry tails clean for bright red contrast.",
        "commonMistake": "Heavy coating of starch — tap off excess so it doesn't turn gummy.",
        "moveOnWhen": "Oil is steady at 175°C and ingredients are dusted.",
        "quickInstructions": "Heat oil to 175°C; lightly dust prawns and vegetables with cornstarch, tapping off excess."
      },
      {
        "step": 2,
        "title": "MIX ICE-COLD LUMPY BATTER (10 STABS ONLY!)",
        "whatYouNeed": [
          "1 cold egg yolk",
          "250ml ice-cold water",
          "150g chilled cake flour",
          "Chopsticks",
          "Mixing bowl"
        ],
        "description": "Prepare batter ONLY when oil is hot and ready. In a bowl, whisk cold egg yolk and ice water until frothy. Dump the chilled flour into the liquid all at once. Using chopsticks, stab and poke into the flour 8 to 10 times only in a figure-eight pattern. DO NOT whisk! Leave large dry flour clumps and lumps floating on top. Keep bowl resting in ice.",
        "howToDoIt": "Low-protein cake flour + ice water + zero whisking completely prevents gluten network formation. When dropped in hot oil, the water in the lumps instantly vaporizes into steam, creating a feather-light, shattering, airy lace crust.",
        "heat": "Off",
        "heatDescription": "Ice-cold station.",
        "duration": 2,
        "visualCues": "A watery, lumpy batter with visible dry flour pockets and floating lumps.",
        "hear": "None.",
        "smell": "Clean flour.",
        "textureCheck": "Watery, lumpy, cold liquid.",
        "whatShouldThisLookLike": "A very lumpy, barely mixed cold batter.",
        "tip": "Never whisk smooth! A smooth batter is a ruined tempura batter.",
        "commonMistake": "Whisking batter smooth like pancake batter — creates a heavy, greasy, doughy shell.",
        "moveOnWhen": "Batter is stabbed 10 times and still lumpy.",
        "quickInstructions": "Mix cold egg yolk and ice water; add chilled flour, stab with chopsticks 10 times only (leave lumpy!)."
      },
      {
        "step": 3,
        "title": "FRY VEGETABLES & FLICK FLOWER LACE",
        "whatYouNeed": [
          "Dusted sweet potato, lotus root, shiitake",
          "Lumpy batter",
          "Hot oil at 175°C",
          "Tempura rack"
        ],
        "description": "Dip vegetable slices into lumpy batter, let excess drip for 1 second, and slide gently into 175°C oil (fry shiso leaves by dipping ONLY the back side so the green front shines). Fry for 2.5–3 minutes, flipping once, until crisp and pale golden. Lift with chopsticks, drain over pot for 5 seconds, and transfer to wire rack.",
        "howToDoIt": "Vegetables cook at 175°C so the internal starches caramelize sweet and tender while the thin crust sets glass-crisp.",
        "heat": "Medium Heat (175°C / 350°F)",
        "heatDescription": "Steady gentle frying sizzle.",
        "duration": 6,
        "visualCues": "Batter sets instantly into crisp, pale-cream bubbles; vegetables become fork-tender.",
        "hear": "Steady, crisp sizzling that softens as moisture evaporates.",
        "smell": "Sweet roasted sweet potato and sesame oil.",
        "textureCheck": "Shatteringly crisp, brittle shell.",
        "whatShouldThisLookLike": "Delicate pale-golden crisp tempura vegetables on a wire rack.",
        "tip": "Skim out any floating fried batter bits (tenkasu) between batches to keep oil clean.",
        "commonMistake": "Crowding the pot — fry only 3–4 pieces at a time.",
        "moveOnWhen": "Vegetables are crisp, pale golden, and drained.",
        "quickInstructions": "Dip vegetables in batter; fry at 175°C for 2.5-3 mins until crisp and pale golden. Drain on wire rack."
      },
      {
        "step": 4,
        "title": "FRY PRAWNS & THE BLOOMING FLOWER TRICK",
        "whatYouNeed": [
          "Dusted prawns",
          "Lumpy batter",
          "Hot oil at 180°C",
          "Chopsticks"
        ],
        "description": "Increase heat slightly to 180°C (360°F). Holding a prawn by its dry tail, dip the body into batter. Slide into hot oil. Immediately dip chopsticks into the batter and flick 2 droplets over the frying prawn. The droplets will weld onto the crust, blooming into airy lace petals (hana o sakaseru). Fry for exactly 90 seconds to 2 minutes until straight, pale golden, and crisp. Lift out and drain on wire rack.",
        "howToDoIt": "Prawns cook rapidly; 90 seconds at 180°C leaves the interior translucent and sweet while the blooming batter frills crisp into delicate lace.",
        "heat": "Medium-High Heat (180°C / 360°F)",
        "heatDescription": "Lively, crisp sizzling.",
        "duration": 4,
        "visualCues": "Prawn tail turns bright scarlet; body is enveloped in a feathery, airy golden-white lace coat; prawn stays straight.",
        "hear": "Energetic crackling in oil.",
        "smell": "Incredible aroma of fried prawns and toasted sesame.",
        "textureCheck": "Crisp, glass-like lace shell; juicy, springy prawn.",
        "whatShouldThisLookLike": "Pristine Edo-style prawn tempura with blooming lace frills.",
        "tip": "Do not overcook prawns — 90 seconds preserves sweet succulence.",
        "commonMistake": "Draining on paper towels — paper traps steam and makes tempura soggy. Always drain on an elevated wire rack.",
        "moveOnWhen": "Prawns are crisp, straight, and drained.",
        "quickInstructions": "Dip prawn body in batter, slide into 180°C oil; flick batter drops to bloom lace; fry 90s, drain on rack."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Tempura was heavy, oily, and soggy.",
        "remedy": "The batter was whisked smooth or not ice-cold. Keep batter lumpy, ice-cold, and oil at 175–180°C."
      },
      {
        "mistake": "Prawns curled into a C-shape.",
        "remedy": "You didn't snap the belly tendons before frying. Make 3 cuts on the belly and press flat until tendons snap."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Batter is warming up during frying",
        "whatHappened": "Ambient kitchen heat is warming the liquid.",
        "whyItHappened": "Dough resting too long.",
        "whatToDoNow": "Place the batter bowl inside a larger bowl filled with ice cubes, or drop 1 small ice cube directly into the batter.",
        "howToPrevent": "Keep the batter bowl resting over an ice bath throughout the cooking process."
      }
    ],
    "substitutions": [
      {
        "original": "Cake flour",
        "substitute": "All-purpose flour mixed with 25% cornstarch",
        "notes": "Reduces protein content to mimic Japanese low-protein flour."
      }
    ],
    "safetyNotes": [
      "Hot oil at 180°C splatters if water enters; ensure all ingredients are dried thoroughly before dipping."
    ],
    "servingGuide": {
      "restingTime": "1 minute on wire rack.",
      "garnishing": "Serve with mounds of grated white daikon radish and grated ginger.",
      "plating": "Stack artfully on washi paper over a bamboo basket or plate.",
      "temperature": "Piping hot and shatteringly crisp.",
      "accompaniments": "Warm tentsuyu dipping sauce with grated daikon stirred in, matcha sea salt, and steamed rice."
    }
  },
  "tonkatsu": {
    "id": "tonkatsu",
    "name": "Authentic Japanese Tonkatsu (Crispy Panko Pork Cutlet)",
    "cuisine": "Japanese",
    "region": "Japan (Tokyo)",
    "servings": 4,
    "prepTime": 20,
    "cookTime": 15,
    "difficulty": "Medium",
    "overview": {
      "summary": "Iconic Tokyo Yoshoku comfort: thick, juicy, tender center-cut pork loin chops (rosu) lightly scored, seasoned, dredged in flour, egg, and coarse, airy, flaky Japanese panko breadcrumbs, two-stage deep-fried until shatteringly crisp and deep golden-amber, sliced into thick juicy batons, served with sweet-tangy tonkatsu sauce, shredded cabbage, and spicy karashi mustard.",
      "appearance": "A thick, golden-amber breaded cutlet sliced into even 2cm batons, displaying a glistening white juicy pork interior and an airy panko crust, served over a mountain of finely shaved green cabbage with dark sauce.",
      "texture": "Superlatively crunchy panko crust that crackles loudly with every bite, contrasting with extraordinarily juicy, succulent pork tenderloin.",
      "flavor": "Rich, savory pork flavor paired with sweet-tart fruity tonkatsu sauce, toasted sesame, and nasal kick from karashi mustard.",
      "restingTimeMinutes": 4
    },
    "equipment": [
      {
        "name": "Heavy Dutch oven or deep skillet",
        "purpose": "Holds stable deep-frying temperature without dropping heat."
      },
      {
        "name": "Meat mallet / tenderizer",
        "purpose": "Gently tenderizes pork fibers to ensure melt-in-the-mouth chew."
      },
      {
        "name": "Wire draining rack",
        "purpose": "Allows steam to escape beneath cutlet so the bottom crust stays crisp."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Trim excess fat from 4 center-cut pork loin chops (2.5cm thick); make small vertical cuts through the fat cap to prevent curling.",
        "durationMinutes": 8
      },
      {
        "task": "Shave 300g green cabbage into hair-thin threads; soak in ice water for 10 minutes to crisp, then spin dry in salad spinner.",
        "durationMinutes": 12
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Fat Cap Slitting (Sujikiri)",
        "technique": "Pork loin has a strip of fat and connective tissue along the outer rim. Cut 4–5 small vertical slits through this membrane with the tip of your knife. Connective tissue shrinks faster than meat when fried; slitting prevents the cutlet from curling into a bowl shape."
      },
      {
        "item": "Coarse Fresh Panko (Nama Panko)",
        "technique": "Use coarse, flaky Japanese panko breadcrumbs (spritz dried panko with a tiny mist of water 5 minutes ahead to make it fluffy). Flaky panko flakes stand upright like needles, frying into an airy, crunchy crust that does not absorb excess grease."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Pork loin chops (center-cut, bone-out)",
        "prep": "2.5cm thick, fat cap slit, patted dry",
        "amount": "4 chops (700g)",
        "metric": "700g",
        "imperial": "1.5 lbs",
        "common": "4 chops"
      },
      {
        "name": "All-purpose flour",
        "prep": "for dusting",
        "amount": "60g",
        "metric": "60g",
        "imperial": "2.1 oz",
        "common": "1/2 cup"
      },
      {
        "name": "Eggs",
        "prep": "beaten with 1 tbsp water & 1 tsp oil",
        "amount": "2 eggs",
        "metric": "100g",
        "imperial": "3.5 oz",
        "common": "2 large"
      },
      {
        "name": "Coarse Japanese Panko breadcrumbs",
        "prep": "airy & flaky",
        "amount": "150g",
        "metric": "150g",
        "imperial": "5.3 oz",
        "common": "2 cups"
      },
      {
        "name": "Fine sea salt & freshly cracked black pepper",
        "prep": "for seasoning meat",
        "amount": "1 tsp each",
        "metric": "6g",
        "imperial": "0.2 oz",
        "common": "1 tsp each"
      },
      {
        "name": "Frying oil",
        "prep": "neutral oil (canola/peanut)",
        "amount": "800ml",
        "metric": "800ml",
        "imperial": "27 fl oz",
        "common": "3.5 cups"
      },
      {
        "name": "Green cabbage",
        "prep": "shaved paper-thin, ice-soaked & spun dry",
        "amount": "300g",
        "metric": "300g",
        "imperial": "10.5 oz",
        "common": "3 cups shredded"
      },
      {
        "name": "Japanese Tonkatsu sauce (Bull-Dog brand)",
        "prep": "sweet-tangy fruit-vegetable sauce",
        "amount": "80ml",
        "metric": "80ml",
        "imperial": "2.7 fl oz",
        "common": "1/3 cup"
      },
      {
        "name": "Japanese hot mustard (Karashi)",
        "prep": "spicy yellow mustard",
        "amount": "2 tsp",
        "metric": "10g",
        "imperial": "0.35 oz",
        "common": "2 tsp"
      },
      {
        "name": "Toasted white sesame seeds",
        "prep": "crushed in mortar (suribachi)",
        "amount": "2 tbsp",
        "metric": "20g",
        "imperial": "0.7 oz",
        "common": "2 tbsp"
      }
    ],
    "optionalIngredients": [
      {
        "name": "Lemon wedges",
        "prep": "for squeezing over cutlet",
        "amount": "4 wedges",
        "metric": "4 wedges",
        "imperial": "4 wedges",
        "common": "4 wedges",
        "optional": true
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "TENDERIZE, SEASON & DREDGE IN TRIPLE COAT",
        "whatYouNeed": [
          "4 pork chops",
          "1 tsp salt & pepper",
          "60g flour",
          "2 beaten eggs with 1 tsp oil",
          "150g panko",
          "3 shallow trays"
        ],
        "description": "Lightly pound the pork chops with a meat mallet to an even 2cm thickness. Cut small vertical slits along the fat edge. Season both sides with salt and pepper. Set up 3 trays: flour, beaten egg, and panko. Dredge pork in flour, shaking off excess. Dip into beaten egg, coating completely. Transfer to panko tray; heap panko over the pork and press firmly with your palms so breadcrumbs adhere generously. Shake off loose crumbs.",
        "howToDoIt": "Adding a teaspoon of oil into the beaten egg creates a stronger bond between the flour and panko, preventing the crust from separating from the meat during slicing.",
        "heat": "Off",
        "heatDescription": "Dredging station.",
        "duration": 8,
        "visualCues": "Cutlets are blanketed in a thick, even coat of flaky white panko breadcrumbs with no bald patches.",
        "hear": "None",
        "smell": "Seasoned pork and fresh breadcrumbs.",
        "textureCheck": "Fluffy, thick crumb coating adhering to meat.",
        "whatShouldThisLookLike": "Four evenly breaded pork cutlets resting on a tray.",
        "tip": "Let breaded cutlets rest for 5 minutes before frying; resting allows the egg to hydrate the inner panko, cementing the crust.",
        "commonMistake": "Using fine western breadcrumbs — fine breadcrumbs absorb grease and turn soggy; use coarse Japanese panko.",
        "moveOnWhen": "All 4 cutlets are breaded and rested 5 minutes.",
        "quickInstructions": "Pound pork chops, slit fat edge, season; dredge in flour, egg, and press firmly into panko."
      },
      {
        "step": 2,
        "title": "TWO-STAGE DEEP FRYING (CRISP & JUICY)",
        "whatYouNeed": [
          "Breaded cutlets",
          "Frying oil heated to 170°C (340°F)",
          "Spider skimmer",
          "Wire draining rack"
        ],
        "description": "Heat oil to 170°C (340°F). Slide 2 cutlets gently into hot oil. Fry for 5 to 6 minutes on medium heat, flipping at the 3-minute mark, until pale golden. Lift out onto wire rack and rest for 3 minutes (residual heat continues cooking the interior meat gently). Increase oil heat to 180°C (360°F). Return cutlets to the hot oil for 60 to 90 seconds until the crust turns a deep, uniform golden-amber and the internal temperature reaches 63°C (145°F). Lift out and drain on wire rack.",
        "howToDoIt": "Two-stage frying is the restaurant secret: the first stage cooks the thick pork through gently without scorching the crumbs; the rest period lets internal juices settle; the second flash-fry creates an impervious, glass-crisp outer crust.",
        "heat": "Medium (170°C) then High (180°C)",
        "heatDescription": "Controlled frying.",
        "duration": 10,
        "visualCues": "Panko bubbles vigorously; crust deepens to a rich, uniform golden-amber; bubbles subside as meat cooks through.",
        "hear": "Lively, rhythmic sizzling that gradually quiets down.",
        "smell": "Incredible aroma of toasted breadcrumbs and savory fried pork.",
        "textureCheck": "Rigid, shatteringly crunchy crust when tapped with tongs.",
        "whatShouldThisLookLike": "Deep golden-amber, crispy, crackling Tonkotsu cutlet.",
        "tip": "Resting on an elevated wire rack is mandatory — draining on paper towels traps escaping steam, turning the bottom crust soggy.",
        "commonMistake": "Frying in one single hot blast — panko burns black before the thick pork cooks through.",
        "moveOnWhen": "Cutlet registers 63°C (145°F) internally with deep golden-amber crust.",
        "quickInstructions": "Fry at 170°C for 5-6 mins, rest 3 mins on wire rack; flash-fry at 180°C for 90s until deep golden-crisp."
      },
      {
        "step": 3,
        "title": "REST, SLICE & SERVE",
        "whatYouNeed": [
          "Hot fried cutlets",
          "Wire rack",
          "Chef knife",
          "Cutting board"
        ],
        "description": "Let cutlets rest on the wire rack for exactly 4 minutes. Transfer to cutting board. Using a sharp chef knife, slice straight down through the cutlet into 2cm wide batons with firm, confident single downward cuts. Listen to the loud crunch! Keep the sliced batons together in their original cutlet shape.",
        "howToDoIt": "Resting for 4 minutes allows the boiling meat juices to redistribute throughout the muscle fibers instead of gushing out onto the cutting board.",
        "heat": "Off",
        "heatDescription": "Resting and slicing.",
        "duration": 4,
        "visualCues": "Loud crackle as knife cuts through; white juicy pork interior with a fine pink blush and shimmering moisture; panko crust remains intact.",
        "hear": "Loud, satisfying crunch of knife cutting through crisp panko.",
        "smell": "Juicy roasted pork and crunchy panko.",
        "textureCheck": "Shatteringly crisp crust; extraordinarily juicy, tender meat.",
        "whatShouldThisLookLike": "Sliced, juicy, golden Tonkatsu cutlet.",
        "tip": "Press the knife firmly straight down in one cut; do not saw back and forth or you will knock the breading off.",
        "commonMistake": "Slicing the second it leaves the hot oil — all the flavorful juices will pour out.",
        "moveOnWhen": "Cutlets are rested 4 mins and sliced into batons.",
        "quickInstructions": "Rest 4 mins on rack; slice into 2cm batons with firm downward cuts keeping shape."
      },
      {
        "step": 4,
        "title": "ASSEMBLE WITH SHREDDED CABBAGE & SAUCE",
        "whatYouNeed": [
          "Sliced cutlet",
          "Crisp shredded cabbage",
          "Tonkatsu sauce",
          "Karashi mustard",
          "Crushed sesame seeds",
          "Lemon wedge"
        ],
        "description": "Place a large, airy mound of crisp shredded cabbage on the plate. Slide the sliced tonkatsu cutlet onto the plate, leaning against the cabbage. Drizzle dark tonkatsu sauce in zigzags across the meat. Place a dollop of spicy karashi mustard on the rim, sprinkle with crushed sesame seeds, and add a lemon wedge. Serve immediately.",
        "howToDoIt": "The sweet, crisp, digestive raw cabbage cuts through the rich pork fat, while the acidic tonkatsu sauce balances the crunchy savory meat.",
        "heat": "Off",
        "heatDescription": "Plating.",
        "duration": 2,
        "visualCues": "Stunning contrast: golden-amber crunchy cutlet against a fluffy mountain of green cabbage, dark brown sauce, and yellow mustard.",
        "hear": "None",
        "smell": "Fruity tonkatsu sauce, spicy mustard, and hot pork cutlet.",
        "textureCheck": "Crunchy cutlet, refreshing crisp cabbage, tender pork.",
        "whatShouldThisLookLike": "Iconic Tokyo Tonkatsu Teishoku plate.",
        "tip": "Dip a piece of tonkatsu into crushed sesame and a dab of karashi mustard for the ultimate flavor bite.",
        "commonMistake": "Drowning the entire cutlet in sauce minutes ahead — drizzle right before eating to preserve crunch.",
        "moveOnWhen": "Plate is assembled and served.",
        "quickInstructions": "Plate cutlet alongside mountain of shredded cabbage; drizzle tonkatsu sauce, add karashi mustard and sesame."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Breading separated and fell off meat while slicing.",
        "remedy": "You didn't tap off excess flour or didn't press panko firmly. Add 1 tsp oil to egg and press panko with palms."
      },
      {
        "mistake": "Pork was dry and tough.",
        "remedy": "Over-cooked beyond 65°C or used lean loin without resting. Rest 4 minutes to retain internal juices."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Pork cutlet curled into a bowl in the oil",
        "whatHappened": "Connective tissue around the fat cap contracted.",
        "whyItHappened": "Forgot to slit the fat cap.",
        "whatToDoNow": "Press down gently with tongs in the oil to flatten as much as possible.",
        "howToPrevent": "Always make 4–5 vertical knife cuts through the fat rim before breading."
      }
    ],
    "substitutions": [
      {
        "original": "Pork loin (Rosu)",
        "substitute": "Pork tenderloin (Hire Katsu) or Chicken breast (Chicken Katsu)",
        "notes": "Hire katsu is leaner, melt-in-the-mouth tender, and very popular."
      }
    ],
    "safetyNotes": [
      "Pork must reach an internal temperature of 63°C (145°F) with a 3-minute rest."
    ],
    "servingGuide": {
      "restingTime": "4 minutes on wire rack.",
      "garnishing": "Tonkatsu sauce drizzle, karashi mustard, crushed sesame, lemon wedge.",
      "plating": "Serve on a wide ceramic platter with a metal wire insert under the cutlet.",
      "temperature": "Hot and crunchy.",
      "accompaniments": "Mountain of ice-cold shredded cabbage, steamed white rice, tonjiru (pork miso soup), and Japanese pickles."
    }
  },
  "yakitori": {
    "id": "yakitori",
    "name": "Authentic Tokyo Yakitori Negima (Skewered Chicken & Scallions)",
    "cuisine": "Japanese",
    "region": "Japan (Tokyo)",
    "servings": 4,
    "prepTime": 25,
    "cookTime": 15,
    "difficulty": "Medium",
    "overview": {
      "summary": "The soul of Japanese izakaya dining: succulent bite-sized cubes of chicken thigh and sweet Tokyo scallion batons threaded alternately onto bamboo skewers, grilled over intense radiant heat, dipped repeatedly into a sweet, savory, glossy tare glaze (reduced soy sauce, mirin, sake, and chicken juices), and caramelized to blistered, smoky perfection.",
      "appearance": "Glossy, caramel-glazed skewers with charred blister marks on juicy chicken chunks, alternating with sweet, blackened scallion batons, served hot over a ceramic platter with shichimi pepper.",
      "texture": "Crispy, caramelized, smoky exterior giving way to extraordinarily juicy, tender chicken and sweet, melting scallion centers.",
      "flavor": "Irresistible balance of savory umami soy, sweet mirin glaze, smoky charcoal char, and allium sweetness.",
      "restingTimeMinutes": 2
    },
    "equipment": [
      {
        "name": "Cast iron grill pan or charcoal konro grill / oven broiler",
        "purpose": "Achieves intense radiant heat to caramelize tare glaze rapidly without drying meat."
      },
      {
        "name": "Flat bamboo skewers (Teppo gushi / gun skewers)",
        "purpose": "Flat shape prevents chicken cubes from spinning when turned over the grill."
      },
      {
        "name": "Basting brush or tall dipping jar for tare",
        "purpose": "For submerging skewers in tare glaze during grilling."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Soak bamboo skewers in cold water for 30 minutes to prevent burning.",
        "durationMinutes": 30
      },
      {
        "task": "Simmer 100ml soy sauce, 100ml mirin, 50ml sake, and 2 tbsp sugar for 12 minutes until reduced by half into a glossy tare glaze.",
        "durationMinutes": 15
      },
      {
        "task": "Cut 500g chicken thighs into uniform 2.5cm cubes; cut Tokyo negi/scallions into 3cm batons.",
        "durationMinutes": 8
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Threading Negima Style",
        "technique": "Thread chicken cubes and scallion batons in alternating pattern: chicken, scallion, chicken, scallion, chicken (5 pieces per skewer). Thread through the center so the skewer is balanced."
      },
      {
        "item": "The 3-Stage Tare Dip",
        "technique": "Grill skewers dry first until 70% cooked and lightly charred. Dip into the tare glaze, return to grill for 1 minute; dip a second time and grill for 1 minute; finish with a final third dip right before taking off the heat to create a lustrous, lacquered caramel shell."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Boneless skinless chicken thighs",
        "prep": "cut into 2.5cm cubes",
        "amount": "500g",
        "metric": "500g",
        "imperial": "1.1 lbs",
        "common": "4 large thighs"
      },
      {
        "name": "Tokyo Negi or thick scallions",
        "prep": "cut into 3cm batons",
        "amount": "4 stalks",
        "metric": "150g",
        "imperial": "5.3 oz",
        "common": "2 cups batons"
      },
      {
        "name": "Japanese Soy Sauce (Shoyu)",
        "prep": "for tare glaze",
        "amount": "100ml",
        "metric": "100ml",
        "imperial": "3.4 fl oz",
        "common": "1/2 cup"
      },
      {
        "name": "Mirin (sweet rice wine)",
        "prep": "for tare glaze",
        "amount": "100ml",
        "metric": "100ml",
        "imperial": "3.4 fl oz",
        "common": "1/2 cup"
      },
      {
        "name": "Sake (Japanese rice wine)",
        "prep": "for tare glaze",
        "amount": "50ml",
        "metric": "50ml",
        "imperial": "1.7 fl oz",
        "common": "1/4 cup"
      },
      {
        "name": "Granulated sugar",
        "prep": "for tare glaze",
        "amount": "2 tbsp",
        "metric": "25g",
        "imperial": "0.9 oz",
        "common": "2 tbsp"
      },
      {
        "name": "Vegetable oil",
        "prep": "lightly greased on grill pan",
        "amount": "1 tbsp",
        "metric": "15ml",
        "imperial": "0.5 fl oz",
        "common": "1 tbsp"
      },
      {
        "name": "Shichimi Togarashi (7-spice powder)",
        "prep": "for table dusting",
        "amount": "1 tsp",
        "metric": "3g",
        "imperial": "0.1 oz",
        "common": "1 tsp"
      },
      {
        "name": "Sansho pepper (Japanese mountain pepper)",
        "prep": "optional citrusy tongue-tingling spice",
        "amount": "1/2 tsp",
        "metric": "1.5g",
        "imperial": "0.05 oz",
        "common": "1/2 tsp"
      }
    ],
    "optionalIngredients": [
      {
        "name": "Chicken skin or liver skewers",
        "prep": "for authentic izakaya assortment",
        "amount": "100g",
        "metric": "100g",
        "imperial": "3.5 oz",
        "common": "optional",
        "optional": true
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "REDUCE SWEET SAVORY TARE GLAZE",
        "whatYouNeed": [
          "100ml soy sauce",
          "100ml mirin",
          "50ml sake",
          "2 tbsp sugar",
          "Small saucepan"
        ],
        "description": "In a small saucepan, combine soy sauce, mirin, sake, and sugar. Bring to a boil over medium heat, stirring to dissolve sugar. Lower heat to medium-low and simmer uncovered for 10–12 minutes until the liquid reduces by half, turns glossy, and coats the back of a spoon in a light syrup. Pour into a tall, narrow heatproof jar or dipping container.",
        "howToDoIt": "Simmering evaporates alcohol and water while caramelizing sugars and soy amino acids, producing a rich, sticky glaze (tare) that clings to grilled meat.",
        "heat": "Medium-Low Heat",
        "heatDescription": "Gentle bubbling reduction.",
        "duration": 12,
        "visualCues": "Liquid darkens into a glossy, dark amber-black syrup that clings to a dipped spoon.",
        "hear": "Soft, gentle bubbling.",
        "smell": "Intense sweet soy sauce, toasted caramel, and sake florals.",
        "textureCheck": "Syrupy, glossy glaze.",
        "whatShouldThisLookLike": "Rich, dark, glossy Yakitori Tare glaze.",
        "tip": "Do not reduce too far into candy syrup; it will thicken further as it cools.",
        "commonMistake": "Using un-reduced soy sauce — watery sauce runs off the skewers into the fire without glazing.",
        "moveOnWhen": "Tare is reduced by half, glossy, and poured into a dipping jar.",
        "quickInstructions": "Simmer soy sauce, mirin, sake, and sugar for 10-12 mins until reduced by half into glossy glaze."
      },
      {
        "step": 2,
        "title": "THREAD SKEWERS (NEGIMA PATTERN)",
        "whatYouNeed": [
          "Chicken thigh cubes",
          "Scallion batons",
          "Soaked flat bamboo skewers"
        ],
        "description": "Thread skewers tightly in alternating sequence: chicken cube, scallion baton, chicken cube, scallion baton, chicken cube (3 pieces of chicken and 2 pieces of scallion per skewer). Press ingredients snugly together so no bare wood is exposed between pieces. Repeat for 8 skewers.",
        "howToDoIt": "Snug threading protects the bamboo skewer from direct heat and ensures chicken pieces cook evenly without drying out individual edges.",
        "heat": "Off",
        "heatDescription": "Threading station.",
        "duration": 8,
        "visualCues": "Uniform, tightly packed skewers with alternating pink chicken cubes and green/white scallions.",
        "hear": "None.",
        "smell": "Fresh scallions and chicken.",
        "textureCheck": "Firm, balanced, snugly threaded skewers.",
        "whatShouldThisLookLike": "Eight neat, identical Yakitori Negima skewers.",
        "tip": "Wipe bamboo handles clean so they don't scorch on the grill.",
        "commonMistake": "Leaving large gaps between chicken and scallions — the wood skewer will catch fire.",
        "moveOnWhen": "All 8 skewers are threaded.",
        "quickInstructions": "Thread soaked skewers in alternating pattern: chicken, scallion, chicken, scallion, chicken (tightly packed)."
      },
      {
        "step": 3,
        "title": "SEAR DRY ON HIGH GRILL TO 70% COOKED",
        "whatYouNeed": [
          "Threaded skewers",
          "Cast iron grill pan on High heat or preheated broiler",
          "1 tbsp oil"
        ],
        "description": "Lightly grease your grill pan and heat over high heat until smoking hot. Place skewers across the grill without crowding. Cook dry for 3 minutes until deep charred grill marks form on the bottom. Flip over and cook for 2.5 minutes on the second side. The chicken should be about 70% cooked through before applying glaze.",
        "howToDoIt": "Grilling dry first develops deep Maillard charring and renders excess poultry fat before sugary glaze is introduced.",
        "heat": "High Heat",
        "heatDescription": "Sizzling aggressively; visible grill smoke.",
        "duration": 6,
        "visualCues": "Chicken turns opaque with distinct black-brown char marks; scallions blister and soften.",
        "hear": "Loud, vigorous crackling and sizzling.",
        "smell": "Smoky grilled chicken and roasted scallion aroma.",
        "textureCheck": "Chicken is firming up on surface.",
        "whatShouldThisLookLike": "Lightly charred, unglazed chicken skewers.",
        "tip": "Do not glaze with tare yet! Glaze applied too early will burn black before the chicken cooks inside.",
        "commonMistake": "Brushing tare on raw chicken — the sugar burns in 60 seconds, leaving raw meat inside.",
        "moveOnWhen": "Chicken is charred on both sides and 70% cooked.",
        "quickInstructions": "Sear dry on high-heat grill 3 mins per side until charred marks develop (no tare yet!)."
      },
      {
        "step": 4,
        "title": "THE 3-STAGE TARE GLAZE DUNK & BLISTER",
        "whatYouNeed": [
          "Partially cooked skewers",
          "Jar of warm tare glaze",
          "Tongs",
          "Shichimi togarashi"
        ],
        "description": "Dip each skewer completely into the tall jar of tare glaze (or brush liberally on all sides). Return to the grill for 60 seconds. Dip a second time into the tare and grill for another 60 seconds until the glaze caramelizes and bubbles with dark blistered spots. Dip a final third time for 5 seconds right before removing to create a lustrous, sticky lacquer coat. Transfer to a platter, dust with shichimi togarashi, and rest 2 minutes.",
        "howToDoIt": "Multi-stage dipping layers caramelized sugar and savory soy reduction onto the hot chicken, building a rich, lacquered, smoky crust that locks in juiciness.",
        "heat": "Medium-High Heat",
        "heatDescription": "Lively bubbling glaze.",
        "duration": 3,
        "visualCues": "Deep mahogany-amber glossy lacquer coating; tare bubbles and caramelizes into charred blister spots; chicken is 75°C internally.",
        "hear": "Hissing and spitting as sugary tare caramelizes on hot iron.",
        "smell": "Irresistible izakaya fragrance: sweet caramelized soy, smoky chicken, and roasted scallions.",
        "textureCheck": "Sticky, caramelized exterior with extraordinarily tender, juicy chicken.",
        "whatShouldThisLookLike": "Glistening, mahogany-glazed, blistered Yakitori skewers.",
        "tip": "Keep the skewers moving during the tare stage so the sugar caramelizes without burning black.",
        "commonMistake": "Leaving skewers glazed on high heat for 3+ minutes — sugar will turn into bitter burnt carbon.",
        "moveOnWhen": "Skewers are glazed, blistered, and cooked through (75°C internally).",
        "quickInstructions": "Dip skewer in tare, grill 60s; dip second time, grill 60s until blistered; dip third time and serve hot."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Chicken was dry and burnt.",
        "remedy": "You used chicken breast instead of thighs or glazed too early. Always use chicken thighs and glaze only in the final 2 minutes."
      },
      {
        "mistake": "Glaze was watery and washed off.",
        "remedy": "Tare was under-reduced. Simmer tare until reduced by half into a glossy syrup that coats a spoon."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Bamboo skewers are catching fire on the grill",
        "whatHappened": "Skewers were not soaked in water or exposed ends caught flame.",
        "whyItHappened": "Dry wood under high heat.",
        "whatToDoNow": "Cover exposed wooden handles with a folded strip of aluminum foil on the grill.",
        "howToPrevent": "Always soak bamboo skewers in cold water for at least 30 minutes."
      }
    ],
    "substitutions": [
      {
        "original": "Chicken thighs",
        "substitute": "Chicken meatballs (Tsukune) or King Oyster mushrooms",
        "notes": "Mushroom yakitori glazed in tare is an incredible vegan alternative."
      }
    ],
    "safetyNotes": [
      "Chicken must reach an internal temperature of 75°C (167°F)."
    ],
    "servingGuide": {
      "restingTime": "2 minutes.",
      "garnishing": "Sprinkle with shichimi togarashi (7-spice) and sansho pepper.",
      "plating": "Arrange parallel on an elongated ceramic yakitori platter.",
      "temperature": "Piping hot off the grill.",
      "accompaniments": "Steamed edamame with sea salt, chilled draft beer, and cold sake."
    }
  },
  "okonomiyaki": {
    "id": "okonomiyaki",
    "name": "Osaka-Style Okonomiyaki",
    "cuisine": "Japanese",
    "region": "Japan (Kansai / Osaka)",
    "servings": 4,
    "prepTime": 25,
    "cookTime": 20,
    "difficulty": "Medium",
    "overview": {
      "summary": "Iconic Osaka savory cabbage pancake featuring shredded green cabbage folded into a light dashi-nagaimo batter, topped with pork belly strips, griddled golden and crisp on the outside and custardy within, finished with sweet okonomi sauce, kewpie mayo zigzags, aonori, and dancing katsuobushi flakes.",
      "appearance": "Thick, golden-brown disc decorated with lacquered dark sauce, crisscrossed white mayonnaise lines, emerald seaweed flakes, and waving bonito ribbons.",
      "texture": "Crispy pan-seared exterior with a fluffy, molten, steamed cabbage interior and crunchy pork bacon.",
      "flavor": "Rich umami, savory pork, sweet-tangy fruit barbecue sauce, creamy egg-mayo richness, and smoky sea saltiness.",
      "restingTimeMinutes": 2
    },
    "equipment": [
      {
        "name": "Wide cast-iron griddle or heavy 12-inch non-stick skillet with lid",
        "purpose": "Holds even heat and allows pancake to steam under lid without scorching."
      },
      {
        "name": "Two wide metal or heat-safe spatulas (Okonomiyaki kote)",
        "purpose": "Essential for flipping the heavy, delicate pancake cleanly without it crumbling."
      },
      {
        "name": "Fine Japanese box grater (or microplane)",
        "purpose": "Grates sticky mountain yam (nagaimo) into a gelatinous slurry that aerates the batter."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Core and finely chop 450g green cabbage into 4mm square pieces (avoid large strips which trap excess air).",
        "durationMinutes": 10
      },
      {
        "task": "Peel and finely grate 60g peeled fresh nagaimo (or mountain yam) into a slimy paste.",
        "durationMinutes": 5
      },
      {
        "task": "Whisk 100g all-purpose flour, 1/4 tsp baking powder, 1/4 tsp salt, and 120ml cold dashi stock together; whisk in grated nagaimo.",
        "durationMinutes": 5
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Cabbage Chopping (Sainome-giri)",
        "technique": "Chop cabbage into small dice (approx 4-5mm) rather than long slaw strands. Small squares release moisture evenly and allow the pancake to bind without requiring excess heavy flour."
      },
      {
        "item": "Nagaimo Handling",
        "technique": "Wear gloves if your skin is sensitive, as raw nagaimo can cause mild temporary skin tingling. Grate directly on a ceramic microplane."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Green cabbage",
        "prep": "cored and finely chopped into 4mm dice",
        "amount": "450g",
        "metric": "450g",
        "imperial": "1 lb",
        "common": "1/2 medium head"
      },
      {
        "name": "Thinly sliced pork belly (butabara)",
        "prep": "cut into 10cm strips",
        "amount": "200g",
        "metric": "200g",
        "imperial": "7 oz",
        "common": "8 strips"
      },
      {
        "name": "All-purpose flour",
        "prep": "sifted",
        "amount": "100g",
        "metric": "100g",
        "imperial": "3.5 oz",
        "common": "3/4 cup"
      },
      {
        "name": "Grated Nagaimo (Japanese mountain yam)",
        "prep": "finely grated into slimy slurry",
        "amount": "60g",
        "metric": "60g",
        "imperial": "2.1 oz",
        "common": "1/4 cup"
      },
      {
        "name": "Cold dashi stock",
        "prep": "kombu and bonito broth",
        "amount": "120ml",
        "metric": "120ml",
        "imperial": "4 fl oz",
        "common": "1/2 cup"
      },
      {
        "name": "Large eggs",
        "prep": "whisked lightly into batter right before cooking",
        "amount": "3 eggs",
        "metric": "150g",
        "imperial": "5.3 oz",
        "common": "3 large"
      },
      {
        "name": "Tenkasu (crispy tempura flakes)",
        "prep": "adds lightness and airy pockets",
        "amount": "30g",
        "metric": "30g",
        "imperial": "1 oz",
        "common": "1/3 cup"
      },
      {
        "name": "Beni shoga (red pickled ginger)",
        "prep": "finely minced",
        "amount": "2 tbsp",
        "metric": "25g",
        "imperial": "0.9 oz",
        "common": "2 tbsp"
      },
      {
        "name": "Okonomiyaki sauce (Otafuku or Worcestershire-ketchup blend)",
        "prep": "for brushing glaze",
        "amount": "60ml",
        "metric": "60ml",
        "imperial": "2 fl oz",
        "common": "1/4 cup"
      },
      {
        "name": "Kewpie Japanese mayonnaise",
        "prep": "in squeeze bottle for fine lines",
        "amount": "40ml",
        "metric": "40ml",
        "imperial": "1.4 fl oz",
        "common": "3 tbsp"
      },
      {
        "name": "Aonori (dried green laver seaweed)",
        "prep": "finely flaked",
        "amount": "1 tbsp",
        "metric": "5g",
        "imperial": "0.2 oz",
        "common": "1 tbsp"
      },
      {
        "name": "Katsuobushi (bonito flakes)",
        "prep": "thin paper ribbons that dance on hot food",
        "amount": "10g",
        "metric": "10g",
        "imperial": "0.35 oz",
        "common": "1 generous handful"
      }
    ],
    "optionalIngredients": [
      {
        "name": "Small peeled raw shrimp or squid rings",
        "prep": "patted dry and folded into batter",
        "amount": "100g",
        "metric": "100g",
        "imperial": "3.5 oz",
        "common": "1/2 cup",
        "optional": true
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "FOLD BATTER AND CABBAGE WITH AIR",
        "whatYouNeed": [
          "Flour-dashi-nagaimo base",
          "Chopped cabbage",
          "Eggs",
          "Tenkasu",
          "Beni shoga"
        ],
        "description": "Divide ingredients into two bowls for two large pancakes. Into each bowl, add half the cabbage, 1.5 whisked eggs, half the tempura flakes, pickled ginger, and half the dashi batter. Using a spoon or small spatula, scoop from bottom to top in gentle lifting motions for 15-20 seconds only. Stop when coated. Do not overmix or compress!",
        "howToDoIt": "Gentle folding incorporates pockets of air between cabbage leaves. Vigorous mixing crushes the cabbage, releases unwanted moisture, and turns the pancake into a dense rubbery disc.",
        "heat": "No Heat (Prep stage)",
        "duration": 2,
        "visualCues": "A light, loose mountain of cabbage leaves glistening with a thin veil of batter, not a runny soup.",
        "smell": "Aromatic dashi and tangy pickled ginger.",
        "textureCheck": "Fluffy and loose with ample air pockets.",
        "whatShouldThisLookLike": "A loose, airy cabbage mixture suspended in light batter.",
        "tip": "Always mix each pancake individually right before pouring it onto the hot griddle.",
        "commonMistake": "Letting mixed batter sit for 15 minutes before cooking — cabbage will weep water and turn watery.",
        "moveOnWhen": "Cabbage is lightly coated and airy.",
        "quickInstructions": "Fold cabbage, egg, tempura flakes, and batter in lifting strokes for 20 seconds."
      },
      {
        "step": 2,
        "title": "GRIDDLE FIRST SIDE & LAYER PORK BELLY",
        "whatYouNeed": [
          "Preheated skillet or griddle (180°C / 350°F)",
          "1 tbsp neutral cooking oil",
          "Fluffy cabbage mixture",
          "4 strips pork belly"
        ],
        "description": "Heat 1 tbsp oil in a wide skillet over medium-low heat. Mound the cabbage mixture onto the pan, forming a neat round disc about 18cm (7 inches) wide and 2.5cm (1 inch) thick. Do NOT press down with your spatula. Lay pork belly strips side-by-side across the top surface. Cover with a lid and griddle undisturbed for 5 minutes.",
        "howToDoIt": "Covering creates steam that cooks the thick interior through while the bottom develops a crisp golden shell.",
        "heat": "Medium-Low Heat (180°C / 350°F)",
        "duration": 5,
        "visualCues": "Steam rising from beneath lid; bottom edge turns pale golden and holds its shape.",
        "hear": "Steady, gentle sizzling without crackling oil spitting wildly.",
        "smell": "Sweet toasted cabbage and rich dashi aroma.",
        "textureCheck": "Bottom crust is firm enough that the entire disc shifts when pan is gently shaken.",
        "whatShouldThisLookLike": "Tall 1-inch disc with raw pork strips on top and golden bottom.",
        "tip": "Resist pressing down! Pressing squeezes out steam and compacts the pancake into lead.",
        "commonMistake": "Flipping before bottom crust is fully set — the entire pancake will shatter.",
        "moveOnWhen": "Bottom is golden-brown and disc slides freely when pan is shaken.",
        "quickInstructions": "Mound cabbage 2.5cm thick, top with pork strips, cover, cook 5 mins over medium-low."
      },
      {
        "step": 3,
        "title": "THE TWO-SPATULA FLIP & LID STEAM",
        "whatYouNeed": [
          "Two spatulas",
          "Skillet lid"
        ],
        "description": "Remove lid. Slide one spatula deep under the center of the pancake and place the second spatula firmly on top of the pork strips. In one swift, decisive rolling motion, invert the pancake so the pork belly lands directly on the hot skillet surface. Cover with lid and cook for another 5 minutes on medium-low.",
        "howToDoIt": "Using two spatulas supports the weight from both sides, eliminating pancake breakage.",
        "heat": "Medium-Low Heat",
        "duration": 5,
        "visualCues": "Pork belly renders fat directly into the pan, sizzling vigorously; meat shrinks and browns.",
        "hear": "Audible sizzle as pork fat renders into the hot pan.",
        "smell": "Browning bacon and caramelized pork fat.",
        "textureCheck": "Pork is sizzling and adhering to the pancake.",
        "whatShouldThisLookLike": "Inverted pancake with pork rendering against the skillet base.",
        "tip": "Do not press down even after flipping; keep the internal steam pockets fluffy.",
        "commonMistake": "Smashing the pancake flat with a spatula like a burger patty.",
        "moveOnWhen": "5 minutes of covered steaming on the pork side are complete.",
        "quickInstructions": "Flip pancake pork-side down using two spatulas, cover, cook 5 mins."
      },
      {
        "step": 4,
        "title": "UNCOVER, CRISP PORK & FINAL FLIP",
        "whatYouNeed": [
          "Spatulas"
        ],
        "description": "Remove lid to let remaining steam evaporate. Cook uncovered for 2 minutes over medium heat until pork belly is deeply golden, rendered, and ultra-crispy. Flip one final time so pork is on top, cooking for 1 minute to ensure total exterior crispness.",
        "howToDoIt": "Uncovering dries surface moisture, letting rendered pork fat fry the surface to crunchy perfection.",
        "heat": "Medium Heat",
        "duration": 3,
        "visualCues": "Pork belly is lacquered amber and crispy; edges are browned.",
        "hear": "Sharper, crisper frying sounds as moisture vanishes.",
        "smell": "Savory fried bacon aroma.",
        "textureCheck": "Tapping pork surface with spatula yields a firm, crisp crunch.",
        "whatShouldThisLookLike": "Golden brown pancake with crispy crackling pork slices on top.",
        "tip": "If pork fat pools excessively, mop lightly with paper towel before final flip.",
        "commonMistake": "Serving directly from covered state without the uncovered crisping stage (will taste soggy).",
        "moveOnWhen": "Pork is shatteringly crisp and golden.",
        "quickInstructions": "Uncover, cook 2 mins to crisp pork, flip pork-up, cook 1 min."
      },
      {
        "step": 5,
        "title": "SAUCE, MAYO ZIGZAGS & DANCING TOPPINGS",
        "whatYouNeed": [
          "Okonomiyaki sauce",
          "Kewpie mayo",
          "Pastry brush or spoon",
          "Aonori",
          "Katsuobushi"
        ],
        "description": "Transfer pancake pork-side up to a warm serving plate. Generously brush 2 tablespoons of okonomiyaki sauce across the entire surface. Drizzle Kewpie mayo in thin, parallel diagonal zigzags. Dust generously with aonori seaweed powder. Pile a cloud of katsuobushi flakes in the center and watch them flutter and dance in the rising heat.",
        "howToDoIt": "Heat waves from the fresh pancake cause ultra-thin bonito flakes to contract and bend, creating their signature living dance.",
        "heat": "Off Heat",
        "duration": 2,
        "visualCues": "Contrasting dark brown sauce and creamy white mayo lattices topped with dancing bonito ribbons.",
        "smell": "Smoky bonito, pungent nori, and sweet tangy sauce.",
        "textureCheck": "Crisp exterior gives way to a piping-hot, creamy interior.",
        "whatShouldThisLookLike": "Masterpiece street-food pancake covered in sauce, mayo, seaweed, and dancing flakes.",
        "tip": "Use a toothpick pulled through the mayo lines perpendicularly to create feather patterns.",
        "commonMistake": "Drizzling mayo before dark sauce — sauce will smear the clean lines.",
        "moveOnWhen": "Garnished and ready to serve immediately.",
        "quickInstructions": "Brush with brown sauce, drizzle mayo lines, sprinkle aonori and katsuobushi."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Pancake collapsed and broke during flip.",
        "remedy": "Batter was too wet or you used one flimsy fork/spatula. Always use two wide spatulas and ensure bottom crust is fully set before inverting."
      },
      {
        "mistake": "Inside is raw, pasty dough while outside is burnt.",
        "remedy": "Heat was too high. Okonomiyaki must cook on medium-low covered with a lid to steam the dense cabbage through."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Pancake feels heavy and dense like a hockey puck",
        "whatHappened": "Cabbage was over-stirred or pressed down with a spatula during cooking.",
        "whyItHappened": "Gluten developed from excess agitation and air was crushed out.",
        "whatToDoNow": "Enjoy with extra sauce and mayo; slice into smaller bite-sized wedges.",
        "howToPrevent": "Fold cabbage with lifting motions for 20 seconds maximum; never press pancake with spatula."
      }
    ],
    "substitutions": [
      {
        "original": "Nagaimo mountain yam",
        "substitute": "1 tsp baking powder + 1 tbsp extra grated potato or cold water",
        "notes": "Provides lifting aeration, though authentic nagaimo gives the unique silky melt-in-the-mouth texture."
      },
      {
        "original": "Pork belly slices",
        "substitute": "Thin bacon strips or sliced king oyster mushrooms",
        "notes": "Standard unsmoked bacon works wonderfully."
      }
    ],
    "safetyNotes": [
      "Raw pork belly must reach safe internal temperature of 71°C (160°F)."
    ],
    "servingGuide": {
      "restingTime": "1 minute.",
      "garnishing": "Okonomi sauce, Kewpie mayo, aonori, katsuobushi, beni shoga.",
      "plating": "Serve on a heated iron teppan plate or wooden board, sliced into 6 wedges.",
      "temperature": "Piping hot off the griddle.",
      "accompaniments": "Ice-cold draft beer or chilled oolong tea."
    }
  },
  "takoyaki": {
    "id": "takoyaki",
    "name": "Osaka Crispy-Creamy Takoyaki",
    "cuisine": "Japanese",
    "region": "Japan (Kansai / Osaka)",
    "servings": 4,
    "prepTime": 25,
    "cookTime": 20,
    "difficulty": "Hard",
    "overview": {
      "summary": "Beloved Osaka street food spheres: molten, dashi-rich batter enveloping tender chunks of boiled octopus (tako), red pickled ginger, and crunchy tempura scraps, turned and molded in a specialized cast-iron indented pan until spherical and golden-crisp outside, molten within.",
      "appearance": "Golden-brown spherical orbs glistened with dark takoyaki glaze, zigzagged with Kewpie mayo, sprinkled with emerald aonori and swaying katsuobushi.",
      "texture": "Paper-thin, crispy outer shell giving way to a velvety, molten dashi cream surrounding a tender, chewy nugget of octopus.",
      "flavor": "Savory seafood umami, briny sweet octopus, tangy ginger, and sweet-savory glaze.",
      "restingTimeMinutes": 3
    },
    "equipment": [
      {
        "name": "Takoyaki pan (cast iron or electric multi-cavity pan)",
        "purpose": "Hemispherical cavities essential for shaping spherical balls."
      },
      {
        "name": "Takoyaki picks or wooden skewers (2 per hand)",
        "purpose": "Allows rapid rotation and tucking of excess batter into the spheres."
      },
      {
        "name": "Oil brush (Aburatsugi)",
        "purpose": "Applies oil liberally into every crevice to fry a crispy shell."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Cut 180g boiled octopus tentacles into 1.5cm bite-sized cubes.",
        "durationMinutes": 5
      },
      {
        "task": "Whisk 150g takoyaki flour (or all-purpose flour), 500ml cold dashi, 2 eggs, 1 tsp soy sauce, and 1/2 tsp salt into a very thin, watery batter.",
        "durationMinutes": 5
      },
      {
        "task": "Finely mince 3 scallions, 2 tbsp pickled red ginger (beni shoga), and measure 40g tenkasu.",
        "durationMinutes": 5
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Batter Consistency",
        "technique": "Takoyaki batter must be watery and thin (almost like crêpe batter) with a 3.5:1 liquid-to-flour ratio. A thick pancake batter produces rubbery dough balls instead of authentic molten custard centers."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Boiled octopus tentacle (Madako)",
        "prep": "cut into 1.5cm cubes",
        "amount": "180g",
        "metric": "180g",
        "imperial": "6.3 oz",
        "common": "1 cup cubes"
      },
      {
        "name": "Takoyaki flour or all-purpose flour",
        "prep": "sifted",
        "amount": "150g",
        "metric": "150g",
        "imperial": "5.3 oz",
        "common": "1 cup"
      },
      {
        "name": "Cold dashi stock",
        "prep": "rich bonito-kombu broth",
        "amount": "500ml",
        "metric": "500ml",
        "imperial": "17 fl oz",
        "common": "2 cups"
      },
      {
        "name": "Large eggs",
        "prep": "whisked into batter",
        "amount": "2 eggs",
        "metric": "100g",
        "imperial": "3.5 oz",
        "common": "2 large"
      },
      {
        "name": "Soy sauce (shoyu)",
        "prep": "seasoning for batter",
        "amount": "1 tsp",
        "metric": "5ml",
        "imperial": "0.17 fl oz",
        "common": "1 tsp"
      },
      {
        "name": "Tenkasu (crisp tempura pearls)",
        "prep": "essential for crispy structure",
        "amount": "40g",
        "metric": "40g",
        "imperial": "1.4 oz",
        "common": "1/2 cup"
      },
      {
        "name": "Beni shoga (red pickled ginger)",
        "prep": "finely minced",
        "amount": "2 tbsp",
        "metric": "25g",
        "imperial": "0.9 oz",
        "common": "2 tbsp"
      },
      {
        "name": "Scallions / Green onions",
        "prep": "finely sliced into rings",
        "amount": "3 stalks",
        "metric": "40g",
        "imperial": "1.4 oz",
        "common": "1/2 cup"
      },
      {
        "name": "Neutral cooking oil",
        "prep": "for generous greasing",
        "amount": "4 tbsp",
        "metric": "60ml",
        "imperial": "2 fl oz",
        "common": "4 tbsp"
      },
      {
        "name": "Takoyaki sauce or Otafuku sauce",
        "prep": "sweet savory glaze",
        "amount": "60ml",
        "metric": "60ml",
        "imperial": "2 fl oz",
        "common": "1/4 cup"
      },
      {
        "name": "Kewpie mayonnaise",
        "prep": "for drizzling",
        "amount": "40ml",
        "metric": "40ml",
        "imperial": "1.4 fl oz",
        "common": "3 tbsp"
      },
      {
        "name": "Aonori & Katsuobushi",
        "prep": "for topping",
        "amount": "10g",
        "metric": "10g",
        "imperial": "0.35 oz",
        "common": "to garnish"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "PREHEAT & OIL THE CAVITIES LIBERALLY",
        "whatYouNeed": [
          "Takoyaki pan",
          "Cooking oil",
          "Oil brush"
        ],
        "description": "Heat takoyaki pan over medium heat until smoking hot (200°C / 400°F). Dip oil brush generously in oil and coat every single hemispherical cavity and the flat rims between them. Oil should visibly puddle slightly (1-2mm) in each cup.",
        "howToDoIt": "Abundant hot oil shallow-fries the exterior batter into a crispy crust that easily spins without tearing.",
        "heat": "Medium-High Heat",
        "duration": 3,
        "visualCues": "Oil shimmers and faint wisps of smoke appear; oil covers all surfaces.",
        "smell": "Hot clean oil.",
        "textureCheck": "Slick non-stick surface.",
        "whatShouldThisLookLike": "Glossy, well-oiled hot iron cavities.",
        "tip": "Never skimp on oil — dry cavities mean torn, mangled balls.",
        "commonMistake": "Pouring batter into a cool pan, which absorbs oil and sticks permanently.",
        "moveOnWhen": "Pan is smoking hot and glistening.",
        "quickInstructions": "Preheat pan, oil every cavity and flat top generously until smoking hot."
      },
      {
        "step": 2,
        "title": "POUR BATTER TO OVERFLOW & INSERT OCTOPUS",
        "whatYouNeed": [
          "Whisked batter",
          "Octopus cubes",
          "Tenkasu",
          "Pickled ginger",
          "Scallions"
        ],
        "description": "Whisk batter to lift settled flour. Pour batter aggressively across the entire pan, filling every cup to the brim and allowing batter to flood over the flat plate between cups. Immediately drop 1 cube of octopus into each hole. Scatter tenkasu, ginger, and scallions evenly across the entire surface.",
        "howToDoIt": "The overflow sheet provides the extra batter needed to tuck inside the spheres as they are rotated.",
        "heat": "Medium Heat",
        "duration": 3,
        "visualCues": "Batter bubbles gently around cup rims; overflow sheet begins to turn opaque.",
        "hear": "Brisk, eager sizzle as batter contacts hot metal.",
        "smell": "Fragrant dashi and sweet seafood aroma.",
        "textureCheck": "Base inside the cup sets into a thin skin.",
        "whatShouldThisLookLike": "A unified sheet of bubbling batter with octopus and aromatics scattered on top.",
        "tip": "Always whisk batter before pouring because starch sinks rapidly to the bottom.",
        "commonMistake": "Filling only halfway up the cups, leaving no extra batter to form the top half of the sphere.",
        "moveOnWhen": "Edges in cups are set and opaque.",
        "quickInstructions": "Pour batter overflowing the pan, drop octopus in cups, scatter ginger, scallions, and tempura flakes."
      },
      {
        "step": 3,
        "title": "CUT GRID & 90-DEGREE ROTATION (THE TUCK)",
        "whatYouNeed": [
          "2 skewers or takoyaki picks"
        ],
        "description": "Using skewer tips, score straight lines through the cooked batter between cups to create a square grid around each hole. Insert a skewer under each ball and flip it 90 degrees onto its side. Push the surrounding square of cooked excess batter down into the cavity hole so raw batter flows out to form the second half.",
        "howToDoIt": "Tucking the overflow scraps inside creates the bulk and ensures a perfectly filled sphere.",
        "heat": "Medium Heat",
        "duration": 4,
        "visualCues": "Balls sit at 90° angles; raw liquid spills down to contact the bottom hot cup.",
        "hear": "Fresh sizzling as raw liquid touches iron.",
        "textureCheck": "Soft but holding hemispherical shape.",
        "whatShouldThisLookLike": "Half-spheres turned on their sides with scraps tucked neatly inside.",
        "tip": "Work quickly down each row with rhythmic wrist twitches.",
        "commonMistake": "Attempting a full 180° flip immediately — all the liquid will leak out and flatten.",
        "moveOnWhen": "All balls are rotated 90° with scraps tucked in.",
        "quickInstructions": "Score grid lines, turn balls 90 degrees, and tuck excess sheet inside cavity."
      },
      {
        "step": 4,
        "title": "CONTINUOUS ROTATION & CRISPING",
        "whatYouNeed": [
          "2 skewers",
          "1 tbsp oil for finishing"
        ],
        "description": "Rotate balls another 90 degrees so raw batter faces the bottom. Now continuously spin and rotate the balls every 15–20 seconds with your skewers. Drizzle 1 tbsp of oil over the balls during the final 3 minutes to shallow-fry the crust into a deep amber shell.",
        "howToDoIt": "Constant spinning rounds off sharp corners and ensures uniform golden browning on all sides.",
        "heat": "Medium to Medium-High Heat",
        "duration": 6,
        "visualCues": "Flawless golden-amber spherical balls that roll effortlessly in their cups.",
        "hear": "Crackling shallow-fry sizzle.",
        "textureCheck": "Shell is crisp and taut; ball feels firm when tapped with skewer.",
        "whatShouldThisLookLike": "Evenly browned, round, crispy takoyaki balls.",
        "tip": "The final oil drizzle is the street vendor secret to that signature exterior crunch.",
        "commonMistake": "Leaving them stationary in cups, which scorches flat spots.",
        "moveOnWhen": "Balls are spherical, golden-brown, and crisp on all sides.",
        "quickInstructions": "Keep spinning balls every 20 seconds, drizzle oil, cook until golden and crisp."
      },
      {
        "step": 5,
        "title": "GLAZE, TOP & SERVE PIPING HOT",
        "whatYouNeed": [
          "Takoyaki sauce",
          "Kewpie mayo",
          "Aonori",
          "Katsuobushi"
        ],
        "description": "Transfer 6–8 takoyaki to a wooden boat-shaped dish (kyogi). Brush generously with takoyaki glaze, zigzag with Kewpie mayo, sprinkle with aonori, and heap with dancing katsuobushi flakes.",
        "howToDoIt": "Serve immediately, but warn diners: the molten cream interior stays dangerously hot for several minutes!",
        "heat": "Off Heat",
        "duration": 2,
        "visualCues": "Gleaming sauce, mayonnaise ribbons, green seaweed, dancing bonito flakes.",
        "smell": "Rich savory street food aroma.",
        "textureCheck": "Crunchy bite revealing molten, velvety center.",
        "whatShouldThisLookLike": "Authentic street-style boat of takoyaki.",
        "tip": "Poke a small steam hole in the ball with a toothpick before popping it into your mouth.",
        "commonMistake": "Swallowing whole straight off the pan (known in Japan as \"takoyaki tongue burn\").",
        "moveOnWhen": "Plated and ready to devour.",
        "quickInstructions": "Brush with sauce, zigzag mayo, sprinkle aonori and bonito flakes."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Balls turned out hollow and deflated.",
        "remedy": "Not enough batter was used or you did not tuck the overflow scraps into the cavities."
      },
      {
        "mistake": "Batter stuck and tore into pieces.",
        "remedy": "Pan was insufficiently preheated or lacked oil. Cast iron needs high heat and generous oiling."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Takoyaki are misshapen and lumpy",
        "whatHappened": "Balls were rotated too late after batter was completely solid.",
        "whyItHappened": "Lack of liquid batter left inside to seal the sphere.",
        "whatToDoNow": "Add a small drop of raw batter into the cavity and spin immediately to fill the gap.",
        "howToPrevent": "Rotate the first 90 degrees while the interior is still completely liquid."
      }
    ],
    "substitutions": [
      {
        "original": "Boiled octopus (Tako)",
        "substitute": "Cooked peeled shrimp, diced sausage, or cubed cheddar cheese",
        "notes": "Cheese-takoyaki is a wildly popular modern Japanese izakaya variation."
      }
    ],
    "safetyNotes": [
      "Take extreme caution with the molten interior — steam can cause mouth burns if eaten immediately."
    ],
    "servingGuide": {
      "restingTime": "Rest 2–3 minutes before eating.",
      "garnishing": "Takoyaki glaze, Kewpie mayo, aonori seaweed, katsuobushi flakes.",
      "plating": "Serve 6 to 8 balls in traditional wooden boat trays or on ceramic plates with bamboo skewers.",
      "temperature": "Hot and molten.",
      "accompaniments": "Ramune soda, cold Japanese lager, or iced barley tea (mugicha)."
    }
  },
  "curry-rice": {
    "id": "curry-rice",
    "name": "Japanese Beef Curry Rice (Karē Raisu)",
    "cuisine": "Japanese",
    "region": "Japan (National)",
    "servings": 4,
    "prepTime": 20,
    "cookTime": 45,
    "difficulty": "Easy",
    "overview": {
      "summary": "Japan's premier home-style comfort food: a rich, deeply savory, mildly sweet curry stew laden with tender stewing beef, melting caramelized onions, carrots, and russet potatoes, thickened with a fragrant toasted roux and sweetened with grated apple and honey, poured generously over steamed Japanese short-grain rice alongside tart red fukujinzuke pickles.",
      "appearance": "Glossy, velvety mahogany curry gravy blanketing one half of the plate, contrasted with pristine white steamed rice and jewel-like ruby pickles.",
      "texture": "Thick, spoon-coating silky gravy with fork-tender beef and velvety, melt-in-the-mouth potato chunks.",
      "flavor": "Warm, mildly spiced, deeply savory with umami soy sauce, rich caramelized onions, and subtle honey-apple sweetness.",
      "restingTimeMinutes": 5
    },
    "equipment": [
      {
        "name": "Heavy Dutch oven or enamelled cast-iron pot (4–5 qt)",
        "purpose": "Caramelizes onions deeply and simmers stew without burning the thick starch."
      },
      {
        "name": "Wooden cooking spatula",
        "purpose": "Scrapes the fond from the bottom of the pot during sautéing."
      },
      {
        "name": "Box grater",
        "purpose": "Grates fresh apple into fine pulp for natural sweetness and pectin."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Cut 500g chuck beef into uniform 3cm cubes; season with 1/2 tsp salt and black pepper.",
        "durationMinutes": 5
      },
      {
        "task": "Slice 2 large yellow onions thinly into half-moons.",
        "durationMinutes": 5
      },
      {
        "task": "Peel and cut 2 carrots and 2 potatoes using the rangiri rolling cut (diagonal rolling cuts) for even cooking.",
        "durationMinutes": 8
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Rangiri Rolling Cut",
        "technique": "Cut vegetable diagonally at a 45-degree angle, rotate the carrot/potato 90 degrees towards you, and cut again. This creates triangular chunks with maximum surface area for absorbing curry flavor while maintaining structural integrity during simmering."
      },
      {
        "item": "Potato Soaking",
        "technique": "Submerge cut potatoes in cold water for 10 minutes to wash off excess exterior surface starch, preventing the curry from turning prematurely gummy."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Beef chuck roast or stewing beef",
        "prep": "cut into 3cm cubes",
        "amount": "500g",
        "metric": "500g",
        "imperial": "1.1 lbs",
        "common": "500g"
      },
      {
        "name": "Yellow onions",
        "prep": "thinly sliced for caramelization",
        "amount": "2 large",
        "metric": "400g",
        "imperial": "14 oz",
        "common": "2 large"
      },
      {
        "name": "Carrots",
        "prep": "peeled and cut rangiri style",
        "amount": "2 medium",
        "metric": "200g",
        "imperial": "7 oz",
        "common": "2 pieces"
      },
      {
        "name": "Russet or Yukon Gold potatoes",
        "prep": "peeled, cut rangiri & rinsed",
        "amount": "2 medium",
        "metric": "300g",
        "imperial": "10.5 oz",
        "common": "2 pieces"
      },
      {
        "name": "Japanese curry roux blocks (S&B Golden, Vermont, or Java)",
        "prep": "finely chopped with knife for instant dissolving",
        "amount": "100g",
        "metric": "100g",
        "imperial": "3.5 oz",
        "common": "1/2 pack (4 cubes)"
      },
      {
        "name": "Beef broth, dashi, or water",
        "prep": "liquid base",
        "amount": "800ml",
        "metric": "800ml",
        "imperial": "27 fl oz",
        "common": "3.4 cups"
      },
      {
        "name": "Gala or Fuji apple",
        "prep": "peeled and finely grated with juice",
        "amount": "1/2 apple",
        "metric": "75g",
        "imperial": "2.6 oz",
        "common": "1/2 apple"
      },
      {
        "name": "Honey",
        "prep": "pure clover or wildflower",
        "amount": "1 tbsp",
        "metric": "20g",
        "imperial": "0.7 oz",
        "common": "1 tbsp"
      },
      {
        "name": "Japanese soy sauce (Shoyu)",
        "prep": "for umami depth",
        "amount": "1 tbsp",
        "metric": "15ml",
        "imperial": "0.5 fl oz",
        "common": "1 tbsp"
      },
      {
        "name": "Tonkatsu sauce or Worcestershire sauce",
        "prep": "for tangy finish",
        "amount": "1 tbsp",
        "metric": "15ml",
        "imperial": "0.5 fl oz",
        "common": "1 tbsp"
      },
      {
        "name": "Neutral cooking oil",
        "prep": "divided",
        "amount": "2 tbsp",
        "metric": "30ml",
        "imperial": "1 fl oz",
        "common": "2 tbsp"
      },
      {
        "name": "Cooked Japanese short-grain rice",
        "prep": "steamed hot",
        "amount": "4 bowls",
        "metric": "600g",
        "imperial": "21 oz",
        "common": "4 cups"
      },
      {
        "name": "Fukujinzuke (Japanese red radish relish)",
        "prep": "for garnish",
        "amount": "4 tbsp",
        "metric": "40g",
        "imperial": "1.4 oz",
        "common": "4 tbsp"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "SEAR THE BEEF CUBES",
        "whatYouNeed": [
          "Dutch oven",
          "1 tbsp oil",
          "500g seasoned beef cubes"
        ],
        "description": "Heat 1 tbsp oil in a Dutch oven over high heat until shimmering. Add beef cubes in a single layer with space between pieces. Sear undisturbed for 3 minutes until deep golden-brown on bottom. Turn and sear 2 more minutes. Remove seared beef to a plate (center will still be raw).",
        "howToDoIt": "High heat creates rich browned fond on the pot bottom through the Maillard reaction, establishing deep beefy flavor.",
        "heat": "High Heat",
        "duration": 5,
        "visualCues": "Deep mahogany crust on beef edges; brown glaze sticks to bottom of pot.",
        "hear": "Vigorous, snapping sizzle.",
        "smell": "Rich roasted meat aroma.",
        "textureCheck": "Firm seared exterior.",
        "whatShouldThisLookLike": "Nicely browned beef cubes with glistening surfaces.",
        "tip": "Do not crowd the pot or beef will boil in its own juices instead of searing.",
        "commonMistake": "Fidgeting and constantly stirring beef before it can develop a brown crust.",
        "moveOnWhen": "Beef is well-browned on exterior and transferred to plate.",
        "quickInstructions": "Sear beef cubes in hot oil 5 mins until browned on all sides; remove to plate."
      },
      {
        "step": 2,
        "title": "CARAMELIZE ONIONS TO GOLDEN SWEETNESS",
        "whatYouNeed": [
          "Sliced onions",
          "1 tbsp oil",
          "Pinch of salt",
          "Splash of water"
        ],
        "description": "Reduce heat to medium-low. Add remaining 1 tbsp oil and sliced onions to the pot with a pinch of salt. Sauté slowly for 15 minutes, stirring frequently and scraping up the beef fond. If the bottom dries out or browns too fast, add 2 tablespoons of water to deglaze.",
        "howToDoIt": "Slow caramelization breaks down onion sugars into rich, jammy sweetness, which forms the quintessential foundation of Japanese curry.",
        "heat": "Medium-Low Heat",
        "duration": 15,
        "visualCues": "Onions reduce to 1/3 volume, turning soft, translucent, and amber-gold.",
        "smell": "Sweet, savory caramelized onion fragrance.",
        "textureCheck": "Melted and tender.",
        "whatShouldThisLookLike": "Soft, golden jammy onions coating the bottom of the pot.",
        "tip": "The deeper the amber color on the onions, the richer your finished curry will taste.",
        "commonMistake": "Blasting onions on high heat, which scorches the tips bitter while centers remain raw.",
        "moveOnWhen": "Onions are deeply golden and jam-like.",
        "quickInstructions": "Sauté sliced onions on medium-low for 15 mins with a pinch of salt until golden amber."
      },
      {
        "step": 3,
        "title": "ADD VEGETABLES, BROTH & SIMMER TILL TENDER",
        "whatYouNeed": [
          "Seared beef",
          "Carrots",
          "Potatoes",
          "800ml broth or water",
          "Grated apple",
          "Honey"
        ],
        "description": "Return seared beef and any juices to the pot. Add carrots, drained potatoes, 800ml broth, grated apple, and honey. Bring to a boil over medium-high heat. Skim off any gray scum and froth floating on top with a fine skimmer. Reduce heat to low, cover with lid slightly ajar, and simmer gently for 25 minutes.",
        "howToDoIt": "Skimming removes impurities for a clean, glossy stew. Simmering on low tenderizes beef and cooks root vegetables through without breaking them apart.",
        "heat": "Medium-High to boil, then Low Simmer",
        "duration": 25,
        "visualCues": "Slow lazy bubbles rising; carrots and potatoes become fork-tender.",
        "smell": "Sweet apple, beef, and earthy vegetable broth.",
        "textureCheck": "A skewer pierces through carrots and potatoes with zero resistance.",
        "whatShouldThisLookLike": "A vibrant stew with tender vegetables and beef in amber broth.",
        "tip": "Check that potatoes aren’t dissolving; if tender early, turn off heat.",
        "commonMistake": "Boiling violently on high heat, which shatters potatoes into mush.",
        "moveOnWhen": "Potatoes and carrots are completely fork-tender.",
        "quickInstructions": "Add beef, carrots, potatoes, broth, apple, and honey; boil, skim foam, cover and simmer 25 mins."
      },
      {
        "step": 4,
        "title": "MELT CURRY ROUX & SEASONINGS",
        "whatYouNeed": [
          "Chopped curry roux (100g)",
          "1 tbsp soy sauce",
          "1 tbsp tonkatsu sauce",
          "Ladle"
        ],
        "description": "TURN OFF THE HEAT COMPLETELY. (Crucial step!). Place chopped roux cubes into a soup ladle. Dip ladle halfway into the hot broth and stir with chopsticks or a fork until the roux cubes dissolve completely into a thick paste. Stir this back into the pot. Add soy sauce and tonkatsu sauce. Turn heat back on to lowest setting and simmer gently for 5 minutes, stirring continuously.",
        "howToDoIt": "Turning off the heat prevents roux starches from clumping upon contact. Dissolving in a ladle ensures a velvet, lump-free sauce.",
        "heat": "OFF during roux addition, then Lowest Heat 5 mins",
        "duration": 5,
        "visualCues": "Thin broth transforms into a thick, glossy, velvety mahogany-colored curry sauce.",
        "hear": "Heavy, slow \"plop-plop\" bubbling.",
        "smell": "Warm curry spices, toasted flour, and umami richness.",
        "textureCheck": "Sauce coats the back of a wooden spoon thickly; drawing a finger leaves a clear line.",
        "whatShouldThisLookLike": "Thick, glossy, restaurant-style curry gravy.",
        "tip": "Stir bottom continuously in figure-8 motions so starch does not stick and scorch.",
        "commonMistake": "Throwing whole cold roux blocks into rapidly boiling liquid — creates hard unblended lumps.",
        "moveOnWhen": "Curry is thick, glossy, and evenly blended.",
        "quickInstructions": "Turn off heat, dissolve roux in a ladle, stir in soy and tonkatsu sauce, simmer on low 5 mins."
      },
      {
        "step": 5,
        "title": "PLATE & SERVE OVER STEAMED RICE",
        "whatYouNeed": [
          "4 plates",
          "Hot steamed rice",
          "Curry stew",
          "Fukujinzuke pickles"
        ],
        "description": "Spoon a mound of fluffy steamed Japanese rice onto one half of an oval curry plate. Ladle the hot curry gravy, tender beef, and vegetables generously onto the other half, letting sauce lap against the rice. Place a bright spoonful of red fukujinzuke pickles alongside.",
        "howToDoIt": "The half-and-half plating allows diners to mix each spoonful of rice with curry to their preferred ratio.",
        "heat": "Off Heat",
        "duration": 2,
        "visualCues": "Vibrant contrast of pristine white rice, mahogany curry, and ruby-red pickles.",
        "smell": "Intensely comforting curry aroma.",
        "textureCheck": "Silky sauce with fluffy grains.",
        "whatShouldThisLookLike": "Classic Japanese diner-style curry plate.",
        "tip": "Curry tastes even richer the next day after resting overnight in the fridge!",
        "commonMistake": "Covering all the rice with curry so diners can’t control the rice-to-sauce ratio.",
        "moveOnWhen": "Plated and ready to enjoy with a spoon.",
        "quickInstructions": "Mound rice on half the plate, ladle curry on other half, add red pickles."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Curry scorched on the bottom of the pan.",
        "remedy": "Roux makes sauce very thick and prone to burning. Always keep heat low and stir frequently after adding roux."
      },
      {
        "mistake": "Potatoes turned into mashed potato soup.",
        "remedy": "Potatoes were boiled too vigorously or cut too small. Use large rangiri cuts and gentle simmering."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Curry sauce is too thin and watery",
        "whatHappened": "Too much water was added or vegetables released excess moisture.",
        "whyItHappened": "High liquid-to-roux ratio.",
        "whatToDoNow": "Simmer uncovered on low heat for 5–7 minutes, stirring constantly to reduce; or dissolve 1 extra roux square.",
        "howToPrevent": "Measure liquid accurately before simmering."
      }
    ],
    "substitutions": [
      {
        "original": "Beef chuck",
        "substitute": "Boneless chicken thighs or pork shoulder",
        "notes": "Chicken curry and pork curry (katsu-curry) are equally beloved staples across Japan."
      },
      {
        "original": "Japanese curry roux blocks",
        "substitute": "2 tbsp curry powder + 2 tbsp flour + 2 tbsp butter roux",
        "notes": "Commercial blocks contain spices, fruit paste, and thickening roux pre-balanced for authentic flavor."
      }
    ],
    "safetyNotes": [
      "Store leftover curry in the refrigerator within 2 hours; reheat thoroughly to a boil before eating."
    ],
    "servingGuide": {
      "restingTime": "Rest 5 minutes off heat before plating.",
      "garnishing": "Red fukujinzuke pickles and a drizzle of tonkatsu sauce.",
      "plating": "Serve on wide, shallow oval curry plates with a soup spoon.",
      "temperature": "Piping hot.",
      "accompaniments": "Crispy cabbage slaw with sesame dressing and warm green tea."
    }
  },
  "donburi": {
    "id": "donburi",
    "name": "Classic Katsudon (Crispy Pork Cutlet & Egg Rice Bowl)",
    "cuisine": "Japanese",
    "region": "Japan (Tokyo / Kanto)",
    "servings": 4,
    "prepTime": 20,
    "cookTime": 20,
    "difficulty": "Medium",
    "overview": {
      "summary": "The reigning king of Japanese rice bowls: crispy panko-breaded pork tonkatsu simmered briefly in a sweet-savory dashi, soy, and mirin broth with sweet onions, enveloped in half-cooked, velvety eggs, slid gently over a deep bowl of steaming Japanese rice.",
      "appearance": "Deep ceramic bowl filled with fluffy white rice crowned with golden sliced cutlet, ribbons of golden yolk and white egg custard, and sliced scallions.",
      "texture": "Contrasting textures: crunchy panko edges soaked with savory sweet broth, creamy soft egg custard, and tender juicy pork over chewy rice.",
      "flavor": "Deep umami dashi, sweet mirin, savory soy sauce, rich egg yolk, and savory fried pork.",
      "restingTimeMinutes": 1
    },
    "equipment": [
      {
        "name": "Oyakodon pan (Donburi pan) or small 7-inch individual skillet",
        "purpose": "Individual pan with steep sides designed to slide the egg and cutlet intact directly onto rice."
      },
      {
        "name": "Deep Donburi ceramic bowls",
        "purpose": "Retains heat and holds the generous portion of rice and toppings."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Prepare or reheat 4 cooked crispy pork tonkatsu cutlets; slice into 2cm crosswise strips.",
        "durationMinutes": 5
      },
      {
        "task": "Thinly slice 1 large yellow onion into half-moons.",
        "durationMinutes": 3
      },
      {
        "task": "Whisk dashi stock, soy sauce, mirin, and sugar together (the donburi tsuyu broth).",
        "durationMinutes": 2
      },
      {
        "task": "Lightly beat eggs in a small bowl with chopsticks just 4–5 times (whites and yolks should remain partially separated).",
        "durationMinutes": 1
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Egg Beating Technique",
        "technique": "Do NOT beat eggs smooth! Puncturing the yolks and stirring 4 or 5 times with chopsticks leaves distinct streaks of yellow yolk and clear albumen. This creates the signature dual texture of firm white clouds and custardy molten yellow ribbons."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Cooked Tonkatsu pork cutlets",
        "prep": "sliced crosswise into 2cm pieces",
        "amount": "4 cutlets",
        "metric": "600g",
        "imperial": "21 oz",
        "common": "4 cutlets"
      },
      {
        "name": "Large yellow onion",
        "prep": "thinly sliced into 4mm ribbons",
        "amount": "1 large",
        "metric": "200g",
        "imperial": "7 oz",
        "common": "1 large"
      },
      {
        "name": "Large eggs",
        "prep": "lightly broken, 2 per serving",
        "amount": "8 eggs",
        "metric": "400g",
        "imperial": "14 oz",
        "common": "8 eggs"
      },
      {
        "name": "Dashi stock",
        "prep": "kombu and bonito broth",
        "amount": "360ml",
        "metric": "360ml",
        "imperial": "12 fl oz",
        "common": "1.5 cups"
      },
      {
        "name": "Japanese soy sauce (Shoyu)",
        "prep": "for savory backbone",
        "amount": "60ml",
        "metric": "60ml",
        "imperial": "2 fl oz",
        "common": "1/4 cup"
      },
      {
        "name": "Mirin (sweet Japanese rice wine)",
        "prep": "adds luster and gentle sweetness",
        "amount": "60ml",
        "metric": "60ml",
        "imperial": "2 fl oz",
        "common": "1/4 cup"
      },
      {
        "name": "Granulated sugar",
        "prep": "balances sauce",
        "amount": "1.5 tbsp",
        "metric": "20g",
        "imperial": "0.7 oz",
        "common": "1.5 tbsp"
      },
      {
        "name": "Steamed Japanese short-grain rice",
        "prep": "warm in deep bowls",
        "amount": "4 bowls",
        "metric": "600g",
        "imperial": "21 oz",
        "common": "4 cups"
      },
      {
        "name": "Mitsuba (Japanese wild parsley) or scallions",
        "prep": "cut into 2cm lengths",
        "amount": "2 tbsp",
        "metric": "10g",
        "imperial": "0.35 oz",
        "common": "2 tbsp"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "SIMMER ONIONS IN DONTUYU BROTH (INDIVIDUAL PORTION)",
        "whatYouNeed": [
          "Small 7-inch pan",
          "90ml broth mixture",
          "1/4 of sliced onions"
        ],
        "description": "For each serving, pour 90ml of the dashi-soy-mirin-sugar broth into the small skillet over medium heat. Scatter a quarter of the sliced onions across the pan in an even layer. Cover and simmer for 3 minutes until onions are translucent and tender.",
        "howToDoIt": "Simmering infuses the onions with sweet dashi broth and softens their sharp sulfur into sweet aromatics.",
        "heat": "Medium Heat",
        "duration": 3,
        "visualCues": "Liquid bubbles steadily; onions turn glassy and soft.",
        "smell": "Sweet, fragrant dashi and mirin aroma.",
        "textureCheck": "Onions tender to the bite.",
        "whatShouldThisLookLike": "Tender onions simmering in bubbling amber broth.",
        "tip": "Cook one or two servings at a time for restaurant-quality perfection and easy sliding.",
        "commonMistake": "Using a giant 12-inch pan for one cutlet — the liquid spreads too thin and evaporates in seconds.",
        "moveOnWhen": "Onions are soft and broth is bubbling.",
        "quickInstructions": "Simmer 90ml broth and sliced onions in small skillet for 3 mins until soft."
      },
      {
        "step": 2,
        "title": "PLACE SLICED TONKATSU CUTLET IN BROTH",
        "whatYouNeed": [
          "1 sliced tonkatsu cutlet"
        ],
        "description": "Reassemble the sliced tonkatsu cutlet onto your spatula and lay it directly over the simmering bed of onions in the center of the pan. Cook uncovered for 1 minute so the bottom crust absorbs the savory broth while the top crust stays crisp.",
        "howToDoIt": "Keeping the cutlet intact maintains beautiful presentation when slid onto the rice bowl.",
        "heat": "Medium Heat",
        "duration": 1,
        "visualCues": "Broth bubbles up the sides of the golden cutlet.",
        "hear": "Brisk bubbling broth around the cutlet.",
        "textureCheck": "Bottom breading absorbs sauce, top remains crunchy.",
        "whatShouldThisLookLike": "Golden cutlet resting in the center of simmering onions and broth.",
        "tip": "Do not submerge the entire cutlet under liquid — you want textural contrast.",
        "commonMistake": "Flipping the cutlet over, which turns all the panko into soggy bread pudding.",
        "moveOnWhen": "Cutlet is warmed through in the bubbling broth.",
        "quickInstructions": "Lay sliced cutlet on the onions; simmer 1 minute."
      },
      {
        "step": 3,
        "title": "POUR FIRST EGG LAYER & COVER",
        "whatYouNeed": [
          "2 lightly beaten eggs (half of amount)",
          "Skillet lid"
        ],
        "description": "Pour about two-thirds of the beaten egg mixture in a circular motion around the cutlet and over the onions, with just a little drizzled over the cutlet itself. Cover immediately with a lid and cook for 45 seconds on medium heat.",
        "howToDoIt": "Two-stage egg addition is the pro secret: the first stage cooks into a firm foundation, while the second stage provides the creamy custard top.",
        "heat": "Medium Heat",
        "duration": 1,
        "visualCues": "Egg white puffs up and turns cloudy white around the edges.",
        "smell": "Rich egg and dashi aroma.",
        "textureCheck": "Base egg is softly set.",
        "whatShouldThisLookLike": "Puffed, set egg whites surrounding the cutlet.",
        "tip": "Always pour in a spiral starting from the outer ring toward the center.",
        "commonMistake": "Lifting the lid every 10 seconds, which lets heat escape and delays cooking.",
        "moveOnWhen": "First egg layer is 80% set.",
        "quickInstructions": "Pour 2/3 of beaten egg around cutlet, cover with lid, cook 45 seconds."
      },
      {
        "step": 4,
        "title": "ADD SECOND EGG LAYER & REST FOR JUKUJUKU CUSTARD",
        "whatYouNeed": [
          "Remaining 1/3 beaten egg",
          "Mitsuba leaves or scallions"
        ],
        "description": "Remove lid. Pour remaining egg right over the center of the cutlet. Scatter mitsuba or scallions on top. Cover with lid, TURN OFF THE HEAT IMMEDIATELY, and let sit undisturbed for 30 seconds. Residual steam will cook the top egg to glossy, silky \"jukujuku\" (half-cooked runny-soft) perfection.",
        "howToDoIt": "Off-heat steaming guarantees the egg stays velvety and prevents overcooking into rubbery hard eggs.",
        "heat": "OFF (Residual steam)",
        "duration": 1,
        "visualCues": "Lustrous, glossy golden egg ribbons that quiver when pan is shaken.",
        "textureCheck": "Velvety custard texture.",
        "whatShouldThisLookLike": "Pork cutlet enveloped in gleaming, half-runny egg.",
        "tip": "Japanese diners prize half-cooked eggs for their luxurious mouthfeel over hot rice.",
        "commonMistake": "Leaving the burner on high until the egg is completely dry and browned.",
        "moveOnWhen": "Egg is glossy and softly set.",
        "quickInstructions": "Pour remaining egg and herbs on top, turn off heat, cover 30 seconds."
      },
      {
        "step": 5,
        "title": "SLIDE GRACEFULLY ONTO RICE",
        "whatYouNeed": [
          "Bowl of hot steamed rice",
          "Spatula"
        ],
        "description": "Hold the skillet at a 45-degree angle right above the warm bowl of rice. Gently shake the pan forward and back until the egg-cutlet-onion ensemble slides smoothly off the pan and lands perfectly centered atop the rice. Drizzle any remaining pan broth over the bowl.",
        "howToDoIt": "The rounded slope of the donburi pan allows the entire topping to slide as one unified disk without collapsing.",
        "heat": "Off Heat",
        "duration": 1,
        "visualCues": "Glorious crown of golden panko, velvety egg, and sweet onion capping the rice.",
        "smell": "Irresistible fried pork, dashi, and steaming rice.",
        "textureCheck": "Hot, succulent, and comforting.",
        "whatShouldThisLookLike": "Picture-perfect restaurant katsudon bowl.",
        "tip": "Tilt the pan close to the bowl so the cutlet doesn’t drop and splash hot broth.",
        "commonMistake": "Scooping cutlet out with a fork, shattering the presentation.",
        "moveOnWhen": "Topping is seated gracefully on the rice.",
        "quickInstructions": "Tilt pan and slide the cutlet and egg directly over the bowl of rice."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Eggs became completely hard and dry.",
        "remedy": "Eggs cooked too long over high heat. Always shut off burner and let residual steam set the eggs."
      },
      {
        "mistake": "Rice turned into a soggy soup.",
        "remedy": "Too much broth was added to the pan or it wasn’t allowed to simmer down before adding the cutlet."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Egg stuck to the pan and won't slide out",
        "whatHappened": "Pan had dry spots or broth evaporated completely.",
        "whyItHappened": "Too little liquid or non-stick coating worn.",
        "whatToDoNow": "Use a flexible silicone spatula to gently run around the perimeter and ease it onto the rice.",
        "howToPrevent": "Ensure broth covers the entire bottom of the pan before adding eggs."
      }
    ],
    "substitutions": [
      {
        "original": "Tonkatsu pork cutlet",
        "substitute": "Chicken thigh cutlet (Chicken Katsudon) or diced raw chicken thighs (Oyakodon)",
        "notes": "Oyakodon (Parent & Child bowl) uses raw chicken thighs simmered in the broth before eggs."
      }
    ],
    "safetyNotes": [
      "Use pasteurized or fresh high-quality eggs if enjoying the authentic soft-cooked egg texture."
    ],
    "servingGuide": {
      "restingTime": "Serve immediately.",
      "garnishing": "Mitsuba, scallion rings, and a dusting of shichimi togarashi (7-spice chili).",
      "plating": "Deep ceramic donburi bowl.",
      "temperature": "Piping hot.",
      "accompaniments": "A bowl of hot miso soup and crunchy pickled daikon (takuan)."
    }
  },
  "gyoza": {
    "id": "gyoza",
    "name": "Crispy Pan-Fried Yaki Gyoza",
    "cuisine": "Japanese",
    "region": "Japan (Utsunomiya / Hamamatsu)",
    "servings": 4,
    "prepTime": 40,
    "cookTime": 15,
    "difficulty": "Medium",
    "overview": {
      "summary": "Japan's beloved pan-fried dumplings: delicate round wrappers stuffed with finely minced pork, shredded cabbage, garlic, ginger, and sesame oil, pleated neatly, pan-seared until the base is dark golden and crispy, then steam-fried under a lid with water (hanetsuki) to produce a tender, succulent top and a shatteringly crisp bottom.",
      "appearance": "Crescent-shaped pleated dumplings arranged in a circle or neat rows with a gleaming mahogany-crisped bottom and translucent steamed top.",
      "texture": "Contrast of shatteringly crisp, crackling base and tender, chewy steamed wrapper enclosing a juicy, savory meat filling.",
      "flavor": "Savory pork umami, punchy garlic-ginger aromatics, nutty toasted sesame oil, and bright rice vinegar-soy-chili dipping sauce.",
      "restingTimeMinutes": 2
    },
    "equipment": [
      {
        "name": "10 to 12-inch heavy flat-bottomed skillet with tight lid (cast iron or non-stick)",
        "purpose": "Essential for even heat distribution and trapping steam during the steaming phase."
      },
      {
        "name": "Small prep bowl with cold water",
        "purpose": "For wetting wrapper edges during pleating."
      },
      {
        "name": "Baking sheet dusted with cornstarch",
        "purpose": "Prevents assembled raw gyoza from sticking before cooking."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Finely mince 250g green cabbage; toss with 1/2 tsp salt and rest 10 minutes, then squeeze firmly in cheesecloth to extract excess water.",
        "durationMinutes": 15
      },
      {
        "task": "Finely mince 2 cloves garlic, 1 tbsp fresh ginger, and 3 stalks garlic chives (nira).",
        "durationMinutes": 5
      },
      {
        "task": "Combine 2 tbsp soy sauce, 2 tbsp rice vinegar, and 1 tsp rayu (Japanese chili oil) for the dipping sauce.",
        "durationMinutes": 2
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Squeezing Cabbage Moisture",
        "technique": "Cabbage is over 90% water. Squeezing out the liquid after salting is the #1 secret to preventing soggy, bursting gyoza. The squeezed cabbage stays crunchy while absorbing rich pork juices."
      },
      {
        "item": "Kneading Filling",
        "technique": "Vigorously knead minced pork with soy sauce, sake, sesame oil, and salt using your hand in circular motions until the meat turns pale, sticky, and forms fibrous strands. This protein emulsification traps juices inside."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Ground pork (70/30 meat to fat ratio)",
        "prep": "chilled",
        "amount": "250g",
        "metric": "250g",
        "imperial": "9 oz",
        "common": "1/2 lb"
      },
      {
        "name": "Green cabbage",
        "prep": "finely minced, salted and squeezed bone-dry",
        "amount": "250g",
        "metric": "250g",
        "imperial": "9 oz",
        "common": "2 cups"
      },
      {
        "name": "Nira (garlic chives) or scallions",
        "prep": "finely sliced",
        "amount": "3 stalks",
        "metric": "30g",
        "imperial": "1 oz",
        "common": "1/3 cup"
      },
      {
        "name": "Fresh ginger",
        "prep": "finely grated",
        "amount": "1 tbsp",
        "metric": "15g",
        "imperial": "0.5 oz",
        "common": "1 tbsp"
      },
      {
        "name": "Garlic cloves",
        "prep": "finely grated",
        "amount": "2 cloves",
        "metric": "10g",
        "imperial": "0.35 oz",
        "common": "2 cloves"
      },
      {
        "name": "Soy sauce (Shoyu)",
        "prep": "seasoning for meat",
        "amount": "1 tbsp",
        "metric": "15ml",
        "imperial": "0.5 fl oz",
        "common": "1 tbsp"
      },
      {
        "name": "Toasted sesame oil",
        "prep": "divided (filling & finishing)",
        "amount": "2 tbsp",
        "metric": "30ml",
        "imperial": "1 fl oz",
        "common": "2 tbsp"
      },
      {
        "name": "Japanese cooking sake",
        "prep": "for tenderizing meat",
        "amount": "1 tbsp",
        "metric": "15ml",
        "imperial": "0.5 fl oz",
        "common": "1 tbsp"
      },
      {
        "name": "Round gyoza wrappers (thin Japanese style)",
        "prep": "at room temperature",
        "amount": "30 wrappers",
        "metric": "30 wrappers",
        "imperial": "30 wrappers",
        "common": "1 pack"
      },
      {
        "name": "Neutral cooking oil",
        "prep": "for pan-frying",
        "amount": "1.5 tbsp",
        "metric": "22ml",
        "imperial": "0.75 fl oz",
        "common": "1.5 tbsp"
      },
      {
        "name": "Water for steaming",
        "prep": "warm water",
        "amount": "80ml",
        "metric": "80ml",
        "imperial": "2.7 fl oz",
        "common": "1/3 cup"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "KNEAD & MIX THE JUICY FILLING",
        "whatYouNeed": [
          "Ground pork",
          "Squeezed cabbage",
          "Nira chives",
          "Ginger",
          "Garlic",
          "Soy sauce",
          "Sake",
          "1 tbsp sesame oil"
        ],
        "description": "Place ground pork, soy sauce, sake, salt, and 1 tbsp sesame oil in a bowl. Knead vigorously with your hand in circular strokes for 2 minutes until the meat becomes pale, sticky, and tacky. Add squeezed cabbage, nira, garlic, and ginger. Fold gently until evenly distributed. Cover and chill 15 minutes.",
        "howToDoIt": "Kneading develops myosin proteins that bind the fat and liquids, preventing the meat filling from shrinking into a hard dry ball during cooking.",
        "heat": "No Heat",
        "duration": 5,
        "visualCues": "Pork turns from red to pale pink and sticky; vegetables are evenly specked.",
        "smell": "Aromatic garlic, ginger, and toasted sesame.",
        "textureCheck": "Tacky, paste-like consistency that holds together.",
        "whatShouldThisLookLike": "Cohesive, sticky dumpling filling.",
        "tip": "Keep the filling cold until ready to wrap so the pork fat stays firm.",
        "commonMistake": "Skipping the kneading stage, which results in crumbly, dry filling.",
        "moveOnWhen": "Filling is sticky and chilled.",
        "quickInstructions": "Knead pork with seasonings for 2 mins until sticky; fold in cabbage and aromatics."
      },
      {
        "step": 2,
        "title": "PLEAT AND ASSEMBLE THE GYOZA",
        "whatYouNeed": [
          "Gyoza wrappers",
          "Chilled filling",
          "Small bowl of water",
          "Cornstarch-dusted baking sheet"
        ],
        "description": "Hold a wrapper flat on your non-dominant palm. Place 1 tablespoon (15g) of filling in the center. Dip your index finger in water and trace the outer half-circle edge. Fold wrapper in half over the filling without letting edges touch. Using your dominant thumb and index finger, create 4 to 6 small pleats along the front edge from right to left, pressing each pleat firmly against the flat back wrapper. Press base flat against the cutting board.",
        "howToDoIt": "Pleating only the front edge curves the dumpling into a natural crescent and creates a wide, flat bottom that sears perfectly against the pan.",
        "heat": "No Heat",
        "duration": 20,
        "visualCues": "Neat crescent dumplings with 4–6 crisp pleats along the front curve and a wide flat base.",
        "textureCheck": "Seams are tightly glued with no air pockets.",
        "whatShouldThisLookLike": "Row of uniform, upright crescent dumplings.",
        "tip": "Flatten the bottom of each dumpling firmly against the board so it stands upright on its own.",
        "commonMistake": "Overfilling, which forces raw meat into the seams and causes dumplings to burst open in the pan.",
        "moveOnWhen": "All 30 dumplings are pleated and resting upright on baking sheet.",
        "quickInstructions": "Place 1 tbsp filling on wrapper, wet top edge, make 4-6 pleats on front, press base flat."
      },
      {
        "step": 3,
        "title": "SEAR THE CRISPY BASES",
        "whatYouNeed": [
          "Skillet",
          "1 tbsp neutral oil",
          "15 gyoza (for one batch)"
        ],
        "description": "Heat 1 tbsp oil in the skillet over medium heat until shimmering. Arrange gyoza in two neat rows or in a circular pinwheel, bases flat against the pan. Sear undisturbed for 2 to 3 minutes without moving them.",
        "howToDoIt": "Direct contact with hot oil fries the wrapper base into a rigid, golden crust before any moisture is introduced.",
        "heat": "Medium Heat",
        "duration": 3,
        "visualCues": "Bottom edges of the wrappers turn pale golden-amber.",
        "hear": "Brisk, even sizzling.",
        "smell": "Toasted dumpling wrapper aroma.",
        "textureCheck": "Bottom is crisp and firm.",
        "whatShouldThisLookLike": "Upright dumplings with lightly browned bottoms.",
        "tip": "Lift one dumpling gently with a spatula to inspect the color before adding water.",
        "commonMistake": "Shaking the pan during the initial sear, which breaks delicate wrappers.",
        "moveOnWhen": "Bottoms are uniform golden brown.",
        "quickInstructions": "Arrange gyoza flat in hot oil; sear 2-3 mins until bottoms are golden."
      },
      {
        "step": 4,
        "title": "STEAM UNDER LID (THE STEAM-FRY)",
        "whatYouNeed": [
          "80ml warm water",
          "Skillet lid"
        ],
        "description": "Pour 80ml of warm water directly into the pan (it will sizzle violently). Cover IMMEDIATELY with the lid. Reduce heat to medium-low and steam for 5 minutes. Trapped steam cooks the meat filling and gelatinizes the wrapper dough.",
        "howToDoIt": "The steam-fry method (pan-fry then steam) cooks the raw pork through while preserving the crisp bottom.",
        "heat": "Medium-Low Heat",
        "duration": 5,
        "visualCues": "Lid fogs up with vigorous white steam; wrappers become translucent and glossy.",
        "hear": "Muffled, roaring boil beneath the lid.",
        "smell": "Savory pork and garlic chive steam.",
        "textureCheck": "Wrappers look translucent and plump.",
        "whatShouldThisLookLike": "Steaming dumplings with translucent skins.",
        "tip": "Have the lid in your other hand ready to cover the instant water hits the pan to prevent hot oil splatters.",
        "commonMistake": "Pouring too much water, which boils the dumplings soggy instead of steaming them.",
        "moveOnWhen": "5 minutes have elapsed and water is almost completely absorbed.",
        "quickInstructions": "Pour in 80ml water, cover immediately with lid, steam on medium-low for 5 mins."
      },
      {
        "step": 5,
        "title": "UNCOVER, CRISP WITH SESAME OIL & SERVE",
        "whatYouNeed": [
          "1 tbsp toasted sesame oil",
          "Spatula",
          "Serving plate"
        ],
        "description": "Remove lid. There should only be a thin glaze of water remaining. Drizzle 1 tbsp of sesame oil around the perimeter of the pan so it flows under the dumplings. Cook uncovered on medium heat for 2 minutes until all water evaporates and the bottoms sizzle into a crackling, mahogany-crisp crust. Slide spatula under dumplings and flip onto a plate, crisp side up.",
        "howToDoIt": "Sesame oil fries the bottom crust in the final seconds, imparting nutty fragrance and an ultra-crisp crunch.",
        "heat": "Medium Heat",
        "duration": 2,
        "visualCues": "Water evaporates; sizzling turns loud and crisp; bottoms are deep mahogany.",
        "hear": "Crackling shallow-fry sound.",
        "smell": "Intense nutty sesame oil aroma.",
        "textureCheck": "Shatteringly crisp base when tapped with spatula.",
        "whatShouldThisLookLike": "Glistening dumplings with a dark golden, crackling bottom.",
        "tip": "Invert a plate over the skillet and flip the entire pan upside down to reveal the gorgeous golden circle.",
        "commonMistake": "Removing from pan while water is still pooled at the bottom — crust will turn soggy immediately.",
        "moveOnWhen": "Bottoms are dark golden, dry, and crackling crisp.",
        "quickInstructions": "Uncover, drizzle sesame oil, fry 2 mins until water vanishes and bottoms crackle; invert onto plate."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Dumpling wrappers tore open during steaming.",
        "remedy": "Wrappers were overfilled or edges weren't sealed with water. Leave a 5mm border free of filling and press pleats firmly."
      },
      {
        "mistake": "Bottom was soggy instead of crisp.",
        "remedy": "Dumplings were removed before water fully evaporated. Always uncover and fry with sesame oil until all liquid is gone."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Gyoza are stuck stubbornly to the pan bottom",
        "whatHappened": "Starch adhered to pan before crust formed or non-stick coating failed.",
        "whyItHappened": "Insufficient oil during initial sear or rushed flip.",
        "whatToDoNow": "Turn off heat, cover with lid for 1 minute to let steam soften the grip, then nudge gently with a thin metal spatula.",
        "howToPrevent": "Use a seasoned cast-iron or good non-stick skillet and ensure oil coats the pan completely."
      }
    ],
    "substitutions": [
      {
        "original": "Ground pork",
        "substitute": "Ground chicken thighs or finely minced king oyster mushrooms with firm tofu",
        "notes": "Chicken gyoza are lighter and delicious with a pinch of yuzu kosho."
      },
      {
        "original": "Nira (garlic chives)",
        "substitute": "Scallions mixed with 1 extra minced garlic clove",
        "notes": "Provides the exact pungent aromatic balance."
      }
    ],
    "safetyNotes": [
      "Raw pork must reach an internal temperature of 71°C (160°F)."
    ],
    "servingGuide": {
      "restingTime": "1 minute.",
      "garnishing": "Serve crisp side facing up, paired with small dipping bowls.",
      "plating": "Arrange in a tight circular pinwheel or parallel rows on an elongated ceramic platter.",
      "temperature": "Piping hot and crackling.",
      "accompaniments": "Dipping sauce (equal parts soy sauce and rice vinegar with a dash of rayu chili oil) and cold lager."
    }
  },
  "onigiri": {
    "id": "onigiri",
    "name": "Traditional Japanese Onigiri (Rice Balls)",
    "cuisine": "Japanese",
    "region": "Japan (National)",
    "servings": 4,
    "prepTime": 15,
    "cookTime": 20,
    "difficulty": "Easy",
    "overview": {
      "summary": "The iconic Japanese comfort food staple: freshly steamed short-grain rice molded by hand into classic triangles, seasoned with fine sea salt, stuffed with savory fillings like flaked salted salmon (sake), seasoned tuna-mayo, or tart pickled plum (umeboshi), wrapped in crisp roasted nori seaweed.",
      "appearance": "Neat triangular white rice parcels wrapped with a crisp black nori jacket, dotted with a morsel of filling on top for identification.",
      "texture": "Firm, fluffy individual rice grains that hold together comfortably in hand yet crumble tenderly upon the bite, with a crisp crunch from nori.",
      "flavor": "Pure savory rice enhanced by clean mineral sea salt, rich umami fillings, and toasted oceanic nori.",
      "restingTimeMinutes": 5
    },
    "equipment": [
      {
        "name": "Onigiri rice mold (optional for beginners)",
        "purpose": "Helps shape uniform triangular rice balls easily without burning hands."
      },
      {
        "name": "Small bowl of water and fine sea salt",
        "purpose": "Keeps rice from sticking to hands and seasons the exterior surface."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Cook 350g short-grain Japanese rice (unseasoned, plain steamed rice); let cool slightly to warm handling temperature (approx 50°C / 120°F).",
        "durationMinutes": 20
      },
      {
        "task": "Flake 1 grilled salted salmon fillet into small chunks; or mix 1 can drained tuna with 2 tbsp Kewpie mayo and 1/2 tsp soy sauce.",
        "durationMinutes": 5
      },
      {
        "task": "Cut nori seaweed sheets into 4cm wide strips.",
        "durationMinutes": 2
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Rice Selection & Temperature",
        "technique": "Only use Japanese short-grain rice (Koshihikari or similar). Medium or long grain rices lack the amylopectin starch required for the grains to cling together naturally. Mold while rice is warm; cold rice will not bind."
      },
      {
        "item": "Hand Salting (Shio-Te)",
        "technique": "Wet both hands in water, shake off excess droplets, then rub 1/2 tsp fine sea salt across both palms. Salting your hands seasons the entire exterior surface while naturally inhibiting bacterial growth."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Cooked short-grain Japanese rice",
        "prep": "steamed warm",
        "amount": "600g",
        "metric": "600g",
        "imperial": "21 oz",
        "common": "4 cups cooked"
      },
      {
        "name": "Fine sea salt",
        "prep": "for coating hands",
        "amount": "2 tsp",
        "metric": "10g",
        "imperial": "0.35 oz",
        "common": "2 tsp"
      },
      {
        "name": "Grilled salted salmon fillet (Sake)",
        "prep": "flaked into small bites",
        "amount": "100g",
        "metric": "100g",
        "imperial": "3.5 oz",
        "common": "1 fillet"
      },
      {
        "name": "Canned tuna in oil",
        "prep": "drained and mixed with 2 tbsp Kewpie mayo & 1/2 tsp soy sauce",
        "amount": "100g",
        "metric": "100g",
        "imperial": "3.5 oz",
        "common": "1 can"
      },
      {
        "name": "Toasted Nori seaweed sheets",
        "prep": "cut into 4cm x 15cm strips",
        "amount": "4 sheets",
        "metric": "4 sheets",
        "imperial": "4 sheets",
        "common": "4 sheets"
      },
      {
        "name": "Toasted white & black sesame seeds",
        "prep": "for dusting tops",
        "amount": "1 tbsp",
        "metric": "10g",
        "imperial": "0.35 oz",
        "common": "1 tbsp"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "PREPARE SALTED HANDS (SHIO-TE)",
        "whatYouNeed": [
          "Bowl of cold water",
          "Fine sea salt"
        ],
        "description": "Dip both hands into the bowl of clean water and shake off excess droplets so palms are evenly damp. Dab your index and middle finger into fine sea salt (about 1/4 to 1/2 tsp) and rub your palms together evenly.",
        "howToDoIt": "Water creates a barrier preventing rice starch from sticking to skin, while salt seasons the exterior and preserves the rice.",
        "heat": "No Heat",
        "duration": 1,
        "visualCues": "Glistening, evenly damp, salted palms.",
        "textureCheck": "Slick and salted.",
        "whatShouldThisLookLike": "Moist palms lightly coated with fine salt grains.",
        "tip": "If hands are too wet, the rice ball will turn mushy; if too dry, rice will stick like glue.",
        "commonMistake": "Trying to mold onigiri with dry hands — rice will cling to fingers in huge sticky clumps.",
        "moveOnWhen": "Hands are salted and damp.",
        "quickInstructions": "Wet hands in water, shake excess, rub 1/2 tsp salt evenly across palms."
      },
      {
        "step": 2,
        "title": "CREATE POCKET & INSERT FILLING",
        "whatYouNeed": [
          "100g warm rice",
          "1 tbsp salmon or tuna-mayo filling"
        ],
        "description": "Scoop about 100g (a generous handful) of warm rice into one hand. Make an indentation in the center with your thumb. Place 1 tablespoon of your chosen filling (salted salmon or tuna-mayo) into the pocket. Gently fold the surrounding rice over the pocket to completely conceal the filling inside.",
        "howToDoIt": "Enclosing the filling inside the core keeps it fresh and ensures every bite contains seasoned rice and savory center.",
        "heat": "No Heat",
        "duration": 1,
        "visualCues": "A round ball of rice with filling hidden inside.",
        "textureCheck": "Warm and cohesive.",
        "whatShouldThisLookLike": "A smooth mound of rice hiding the filling.",
        "tip": "Reserve a tiny flake of filling to place on top later so you know what is inside each ball.",
        "commonMistake": "Overstuffing with filling, causing the rice ball to rupture and burst during shaping.",
        "moveOnWhen": "Filling is completely encased in rice.",
        "quickInstructions": "Make a dent in 100g warm rice, insert 1 tbsp filling, fold rice over to conceal."
      },
      {
        "step": 3,
        "title": "MOLD THE TRIANGLE (SANKAKU-KEI)",
        "whatYouNeed": [
          "Both hands"
        ],
        "description": "Cup your non-dominant hand into an L-shaped cradle to hold the bottom of the rice ball. Bend your top dominant hand into a V-shaped roof over the top. Press gently with a firm, rhythmic squeeze. Rotate the rice ball 120 degrees and squeeze again. Repeat 4–5 times until you form a neat, compact equilateral triangle with rounded edges.",
        "howToDoIt": "Use gentle, firm pressure — just enough for the grains to lock together. Squeezing too hard smashes the grains into a dense brick.",
        "heat": "No Heat",
        "duration": 2,
        "visualCues": "A sharp, clean triangular prism about 3cm (1.2 inches) thick with flat sides.",
        "textureCheck": "Firm enough to hold its shape when lifted, yet fluffy inside.",
        "whatShouldThisLookLike": "Classic Japanese triangular onigiri.",
        "tip": "Apply pressure from the top \"roof\" hand while the bottom hand merely rotates and holds shape.",
        "commonMistake": "Squeezing with brutal force like playdough, mashing individual grains into paste.",
        "moveOnWhen": "Rice forms a stable, neat triangle.",
        "quickInstructions": "Form a V-shape with top hand and L-cradle with bottom; rotate and press 4-5 times into triangle."
      },
      {
        "step": 4,
        "title": "WRAP IN CRISP NORI SEAWEED",
        "whatYouNeed": [
          "Nori strip",
          "Formed rice ball",
          "Tiny flake of filling for garnish"
        ],
        "description": "Take a strip of nori. Wrap it around the bottom base of the triangular rice ball, bringing both ends up the sides so your fingers can hold the nori without touching sticky rice. Place a tiny morsel of filling right on the apex of the triangle.",
        "howToDoIt": "The nori acts as both a flavor enhancer and an edible wrapper, keeping fingers clean while eating on the go.",
        "heat": "No Heat",
        "duration": 1,
        "visualCues": "Crisp black nori jacket hugging the gleaming white rice triangle with topping marker.",
        "smell": "Toasted ocean seaweed and warm rice.",
        "textureCheck": "Crisp nori against soft rice.",
        "whatShouldThisLookLike": "Convenience-store style authentic onigiri.",
        "tip": "Wrap nori immediately before eating if you love maximum crunch; wrap earlier if you prefer soft nori.",
        "commonMistake": "Wrapping wet nori that has been exposed to kitchen steam, causing it to turn rubbery.",
        "moveOnWhen": "Wrapped and decorated.",
        "quickInstructions": "Wrap nori strip around the base; dab a tiny flake of filling on top."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Onigiri crumbled apart when picked up.",
        "remedy": "Rice was too dry, cold, or you used long-grain rice. Use warm Japanese short-grain rice and press firmly enough to bind grains."
      },
      {
        "mistake": "Rice was bland and tasteless.",
        "remedy": "You forgot the salt step. Shio-te (salting hands) is essential for seasoning plain rice."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Rice is sticking all over your palms and fingers",
        "whatHappened": "Hands dried out between molding balls.",
        "whyItHappened": "Starches adhere to dry skin instantly.",
        "whatToDoNow": "Wash hands clean with cold water, rewets palms, and apply fresh salt.",
        "howToPrevent": "Dip fingers in water before molding every single rice ball."
      }
    ],
    "substitutions": [
      {
        "original": "Salted salmon",
        "substitute": "Umeboshi (salted pickled plum), spicy cod roe (mentaiko), or seasoned kombu seaweed",
        "notes": "Umeboshi is the timeless traditional filling known for keeping rice fresh on long journeys."
      }
    ],
    "safetyNotes": [
      "Eat freshly made onigiri within 6 hours at room temperature, or wrap tightly in plastic wrap and refrigerate."
    ],
    "servingGuide": {
      "restingTime": "Ready immediately.",
      "garnishing": "Toasted black and white sesame seeds on the rice shoulders.",
      "plating": "Serve on a bamboo tray or pack in a traditional bento box.",
      "temperature": "Warm or room temperature (never cold straight out of fridge).",
      "accompaniments": "Hot green tea (sencha), pickled radish (takuan), and miso soup."
    }
  },
  "bento": {
    "id": "bento",
    "name": "Artisan Japanese Shokado Bento Box",
    "cuisine": "Japanese",
    "region": "Japan (Kyoto / Tokyo)",
    "servings": 4,
    "prepTime": 35,
    "cookTime": 25,
    "difficulty": "Medium",
    "overview": {
      "summary": "The epitome of Japanese culinary harmony and visual balance: a compartmentalized meal featuring seasoned rice sprinkled with black sesame, sweet rolled omelette (tamagoyaki), teriyaki glazed chicken bites, blanched sesame spinach (goma-ae), and crisp pickled vegetables, balancing the 5 colors (white, black, red, yellow, green) and 5 flavors.",
      "appearance": "A vibrant lacquered bento box with distinct quadrants showcasing brilliant yellow omelette, emerald spinach, mahogany teriyaki, ruby cherry tomatoes, and white rice.",
      "texture": "Exciting array of textures: fluffy rice, custardy sweet egg, succulent glazed chicken, tender greens, and crunchy pickles.",
      "flavor": "Complete balance of sweet, savory, umami, tangy, and salty flavors that taste exceptional at room temperature.",
      "restingTimeMinutes": 5
    },
    "equipment": [
      {
        "name": "4-compartment Bento Box (lacquered or multi-compartment lunch box)",
        "purpose": "Holds different food components separately without sauces mingling."
      },
      {
        "name": "Makiyakinabe (rectangular tamagoyaki omelette pan)",
        "purpose": "For rolling sweet layered Japanese rolled omelette."
      },
      {
        "name": "Silicon silicone baking cups or green shiso leaves",
        "purpose": "Partitions juicy dishes and prevents flavor transfer."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Cook 400g Japanese short-grain rice and let cool to room temperature.",
        "durationMinutes": 20
      },
      {
        "task": "Cut 400g boneless chicken thighs into 3cm bite-sized nuggets.",
        "durationMinutes": 5
      },
      {
        "task": "Whisk 4 eggs with 1.5 tbsp dashi, 1 tbsp sugar, 1 tsp mirin, and 1/2 tsp soy sauce for tamagoyaki.",
        "durationMinutes": 3
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Tamagoyaki Rolling Technique",
        "technique": "Pour a thin layer of egg into the rectangular pan over medium-low heat. When 80% set, roll from far edge toward you into a cylinder. Push roll back to the far edge, oil the pan, pour another thin layer (lifting the cooked roll so raw egg flows underneath), and roll again. Repeat 3 times to build tender golden layers."
      },
      {
        "item": "Cooling Before Packing",
        "technique": "All hot foods MUST cool to room temperature before packing and closing the bento lid. Closing warm food traps steam, creating condensation that makes fried foods soggy and accelerates bacterial growth."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Boneless chicken thighs",
        "prep": "cut into 3cm bites for teriyaki",
        "amount": "400g",
        "metric": "400g",
        "imperial": "14 oz",
        "common": "400g"
      },
      {
        "name": "Teriyaki glaze (soy sauce, mirin, sake, sugar)",
        "prep": "equal parts (2 tbsp each)",
        "amount": "8 tbsp",
        "metric": "120ml",
        "imperial": "4 fl oz",
        "common": "1/2 cup"
      },
      {
        "name": "Large eggs",
        "prep": "whisked for tamagoyaki",
        "amount": "4 eggs",
        "metric": "200g",
        "imperial": "7 oz",
        "common": "4 eggs"
      },
      {
        "name": "Fresh baby spinach",
        "prep": "blanched, squeezed dry and tossed with sesame dressing",
        "amount": "200g",
        "metric": "200g",
        "imperial": "7 oz",
        "common": "1 bunch"
      },
      {
        "name": "Toasted ground sesame seeds (Surigoma)",
        "prep": "for spinach goma-ae",
        "amount": "2 tbsp",
        "metric": "20g",
        "imperial": "0.7 oz",
        "common": "2 tbsp"
      },
      {
        "name": "Cooked short-grain rice",
        "prep": "cooled to room temperature",
        "amount": "600g",
        "metric": "600g",
        "imperial": "21 oz",
        "common": "4 cups"
      },
      {
        "name": "Umeboshi (pickled red plum)",
        "prep": "centered on white rice (Hinomaru flag motif)",
        "amount": "4 plums",
        "metric": "4 pieces",
        "imperial": "4 pieces",
        "common": "4 plums"
      },
      {
        "name": "Black sesame seeds",
        "prep": "for sprinkling on rice",
        "amount": "1 tbsp",
        "metric": "10g",
        "imperial": "0.35 oz",
        "common": "1 tbsp"
      },
      {
        "name": "Cherry tomatoes & Edamame pods",
        "prep": "for color balance & gap fillers",
        "amount": "8 pieces",
        "metric": "100g",
        "imperial": "3.5 oz",
        "common": "8 pieces"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "PREPARE SWEET ROLLED TAMAGOYAKI",
        "whatYouNeed": [
          "Rectangular pan",
          "Whisked egg mixture",
          "Oil dabber"
        ],
        "description": "Heat rectangular pan over medium-low heat with a thin film of oil. Pour 1/3 of the egg mixture. When softly set, roll tightly toward you. Push roll to far edge. Oil the empty pan surface, pour second layer (lifting roll so egg flows beneath). When set, roll forward. Repeat with final third. Transfer to bamboo mat to set square shape for 3 minutes; slice into 2cm thick rounds.",
        "howToDoIt": "Layering creates dozens of micro-folds that trap sweet savory custard within a firm, packable slice.",
        "heat": "Medium-Low Heat",
        "duration": 8,
        "visualCues": "Golden spiral cross-section with no browned burn marks.",
        "smell": "Sweet, delicate dashi and egg aroma.",
        "textureCheck": "Tender, juicy, and springy like a sponge cake.",
        "whatShouldThisLookLike": "Yellow oval slices with spiral layers.",
        "tip": "Use a paper towel dipped in oil to re-grease the pan between every layer.",
        "commonMistake": "Cooking over high heat, which puffs the egg with air bubbles and browns the exterior dark.",
        "moveOnWhen": "Tamagoyaki is sliced into neat yellow spirals.",
        "quickInstructions": "Cook egg in 3 successive thin rolled layers in rectangular pan; cool and slice into 2cm rounds."
      },
      {
        "step": 2,
        "title": "SEAR & GLAZE TERIYAKI CHICKEN",
        "whatYouNeed": [
          "Skillet",
          "Chicken thigh cubes",
          "Teriyaki glaze (soy, mirin, sake, sugar)"
        ],
        "description": "Heat 1 tsp oil in a skillet over medium heat. Sear chicken thigh pieces skin-side down for 4 minutes until golden and crisp. Turn and cook 3 minutes. Pour in teriyaki glaze. Simmer rapidly for 2 minutes, rolling chicken pieces in the bubbling sauce until lacquered and glazed. Remove and cool on a plate.",
        "howToDoIt": "Reducing the sauce in the pan caramelizes the sugars into a clinging syrup that won't leak across the bento box.",
        "heat": "Medium to Medium-High Heat",
        "duration": 9,
        "visualCues": "Chicken is coated in a sticky, mirror-gloss mahogany syrup.",
        "smell": "Rich caramelized soy sauce and sweet mirin.",
        "textureCheck": "Crispy skin, juicy interior, sticky glaze.",
        "whatShouldThisLookLike": "Glossy, mahogany glazed chicken bites.",
        "tip": "Cool chicken completely before packing so the glaze solidifies and stays put.",
        "commonMistake": "Packing hot watery chicken with runny un-reduced sauce, which soaks the entire bento.",
        "moveOnWhen": "Glaze is thick, glossy, and chicken is cooked to 75°C.",
        "quickInstructions": "Sear chicken 7 mins, add teriyaki glaze, reduce until sticky and lacquered; cool completely."
      },
      {
        "step": 3,
        "title": "BLANCH & DRESS SESAME SPINACH (GOMA-AE)",
        "whatYouNeed": [
          "Pot of boiling salted water",
          "Ice water bath",
          "Spinach",
          "Ground sesame, sugar, soy sauce"
        ],
        "description": "Plunge spinach into boiling water for 30 seconds. Transfer immediately to ice water to lock in the vibrant green color. Squeeze spinach firmly with hands to expel all moisture. Cut into 4cm lengths. Toss with ground toasted sesame seeds, 1 tsp sugar, and 1 tsp soy sauce.",
        "howToDoIt": "Shocking in ice water deactivates chlorophyll enzymes, keeping the spinach brilliantly emerald green.",
        "heat": "High Heat (Boiling)",
        "duration": 5,
        "visualCues": "Vibrant emerald green spinach leaves coated in nutty sesame seed paste.",
        "smell": "Toasted nutty sesame aroma.",
        "textureCheck": "Tender with a clean, slight leafy crunch.",
        "whatShouldThisLookLike": "Tightly packed bundles of green sesame spinach.",
        "tip": "Squeeze out every drop of water before seasoning so the dressing stays concentrated.",
        "commonMistake": "Leaving spinach wet and soggy, which dilutes the nutty sesame flavor.",
        "moveOnWhen": "Spinach is squeezed, chopped, and seasoned.",
        "quickInstructions": "Blanch spinach 30s, shock in ice water, squeeze dry, toss with sesame, sugar, and soy."
      },
      {
        "step": 4,
        "title": "THE 5-COLOR BENTO ASSEMBLY",
        "whatYouNeed": [
          "Bento box",
          "Cooled rice",
          "Umeboshi",
          "Tamagoyaki slices",
          "Teriyaki chicken",
          "Sesame spinach",
          "Dividers",
          "Edamame",
          "Tomatoes"
        ],
        "description": "Pack rice into the largest compartment (half the box). Press an umeboshi plum into the center (representing the Hinomaru flag) and sprinkle black sesame on the rice. Place a silicone cup or shiso leaf in the main compartment; fill with teriyaki chicken. In the next quadrants, arrange 2 slices of yellow tamagoyaki, green sesame spinach, red cherry tomatoes, and edamame pods to fill all gaps.",
        "howToDoIt": "Tight packing without gaps prevents items from shifting when the bento is carried.",
        "heat": "No Heat",
        "duration": 8,
        "visualCues": "Stunning tapestry of 5 colors: White (rice), Black (sesame/nori), Red (plum/tomatoes), Yellow (omelette), Green (spinach/edamame).",
        "smell": "Harmonious aromas of sweet tamagoyaki, savory teriyaki, and nutty sesame.",
        "textureCheck": "Tightly packed, stable, and visually balanced.",
        "whatShouldThisLookLike": "A vibrant, exquisite, balanced Japanese bento box.",
        "tip": "Use edamame pods and cherry tomatoes as edible wedges to secure loose items tightly.",
        "commonMistake": "Leaving open empty spaces, which causes all components to slide into a messy jumble during transport.",
        "moveOnWhen": "Bento box is fully packed, vibrant, and securely arranged.",
        "quickInstructions": "Pack rice with umeboshi on one side; pack chicken, tamagoyaki, spinach, tomatoes, and edamame tightly on the other."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Bento developed condensation and turned soggy inside.",
        "remedy": "Food was packed while still hot. Always cool every item completely to room temperature before packing and lidding."
      },
      {
        "mistake": "Flavors mingled into an unappealing blend.",
        "remedy": "Wet items touched dry items. Use silicone cups, shiso leaves, or dividers between dishes."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Bento looks dull, flat, and unappetizing",
        "whatHappened": "Missing color contrast (all brown foods).",
        "whyItHappened": "Only meat and rice were packed.",
        "whatToDoNow": "Add a pop of bright green (edamame, parsley), red (cherry tomato), or yellow (corn, egg).",
        "howToPrevent": "Follow the traditional Japanese 5-color rule (Goshiki): White, Black, Red, Yellow, Green."
      }
    ],
    "substitutions": [
      {
        "original": "Teriyaki chicken",
        "substitute": "Pan-seared salmon with teriyaki or crispy karaage fried chicken",
        "notes": "Karaage remains crisp and flavorful at room temperature, making it a bento classic."
      }
    ],
    "safetyNotes": [
      "If not consuming within 4 hours, pack an ice pack on top of the bento box."
    ],
    "servingGuide": {
      "restingTime": "Ready immediately or packed for lunch.",
      "garnishing": "Umeboshi plum and toasted black sesame seeds.",
      "plating": "Lacquered wooden or modern multi-compartment bento box.",
      "temperature": "Room temperature (the traditional way to savor bento flavors).",
      "accompaniments": "Thermos of hot dashi broth or green tea."
    }
  },
  "mochi": {
    "id": "mochi",
    "name": "Artisan Strawberry Daifuku Mochi (Ichigo Daifuku)",
    "cuisine": "Japanese",
    "region": "Japan (Kansai / Kyoto)",
    "servings": 6,
    "prepTime": 30,
    "cookTime": 10,
    "difficulty": "Medium",
    "overview": {
      "summary": "Kyoto's beloved springtime confectionery: sweet, tart whole fresh strawberries enveloped in silky sweet red bean paste (anko), wrapped in a pillowy, stretchy, translucent skin of freshly steamed mochiko sweet rice dough dusted with silky potato starch (katakuriko).",
      "appearance": "Pristine, powdery snow-white orbs with soft curves; when sliced in half, reveals a striking cross-section of vibrant ruby-red strawberry framed by dark mahogany anko and white mochi.",
      "texture": "Chewy, elastic, pillowy soft mochi skin giving way to smooth sweet red bean paste and a burst of crisp, juicy fresh strawberry.",
      "flavor": "Delicate balance of sweet glutinous rice, rich earthy bean paste, and bright refreshing strawberry acidity.",
      "restingTimeMinutes": 10
    },
    "equipment": [
      {
        "name": "Microwave-safe glass bowl & plastic wrap (or stovetop bamboo steamer)",
        "purpose": "For steaming glutinous rice flour into translucent mochi dough."
      },
      {
        "name": "Silicone spatula",
        "purpose": "Handles hot, intensely sticky mochi dough without clinging."
      },
      {
        "name": "Baking sheet dusted with potato starch (katakuriko)",
        "purpose": "Provides a non-stick surface for rolling and shaping mochi."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Wash and hull 6 fresh medium strawberries; dry thoroughly with paper towels (moisture will break down anko).",
        "durationMinutes": 5
      },
      {
        "task": "Divide 150g smooth sweet red bean paste (koshian) into 6 equal portions (25g each).",
        "durationMinutes": 5
      },
      {
        "task": "Dust a clean work surface and rolling pin generously with 60g potato starch (katakuriko).",
        "durationMinutes": 2
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Strawberry Preparation",
        "technique": "Strawberries must be 100% bone-dry before wrapping. Any residual water droplets will cause the sweet bean paste to slip off and create wet pockets that dissolve the delicate mochi skin."
      },
      {
        "item": "Flour Selection (Mochiko vs Shiratamako)",
        "technique": "Must use glutinous sweet rice flour (Mochiko or Shiratamako). Regular white rice flour (Joshinko) produces a stiff, dense cake with zero elasticity that hardens instantly."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Shiratamako or Mochiko (glutinous sweet rice flour)",
        "prep": "fine powder",
        "amount": "100g",
        "metric": "100g",
        "imperial": "3.5 oz",
        "common": "3/4 cup"
      },
      {
        "name": "Granulated sugar",
        "prep": "keeps mochi tender & soft",
        "amount": "50g",
        "metric": "50g",
        "imperial": "1.8 oz",
        "common": "1/4 cup"
      },
      {
        "name": "Cold water",
        "prep": "for dissolving flour",
        "amount": "150ml",
        "metric": "150ml",
        "imperial": "5 fl oz",
        "common": "2/3 cup"
      },
      {
        "name": "Fresh ripe strawberries",
        "prep": "hulled, washed, and dried completely",
        "amount": "6 medium",
        "metric": "150g",
        "imperial": "5.3 oz",
        "common": "6 berries"
      },
      {
        "name": "Koshian (smooth sweetened red bean paste)",
        "prep": "divided into 6 balls (25g each)",
        "amount": "150g",
        "metric": "150g",
        "imperial": "5.3 oz",
        "common": "1/2 cup"
      },
      {
        "name": "Katakuriko (potato starch) or cornstarch",
        "prep": "for dusting work surface & hands",
        "amount": "60g",
        "metric": "60g",
        "imperial": "2.1 oz",
        "common": "1/2 cup"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "WRAP STRAWBERRIES IN RED BEAN PASTE (ANKO)",
        "whatYouNeed": [
          "6 dry strawberries",
          "6 balls of koshian (25g each)"
        ],
        "description": "Flatten one ball of red bean paste in your palm into a 5cm disk. Place a strawberry in the center, tip pointing up. Mold the paste upward around the strawberry, covering the sides and leaving just the very tip of the berry exposed. Smooth into a neat cone. Repeat for all 6 berries and set aside.",
        "howToDoIt": "Leaving the pointed tip slightly exposed prevents an overly thick layer of bean paste at the apex, allowing the mochi skin to drape elegantly.",
        "heat": "No Heat",
        "duration": 6,
        "visualCues": "Six smooth red bean cones with red strawberry tips peeking out.",
        "textureCheck": "Smooth, firm paste holding its shape around the fruit.",
        "whatShouldThisLookLike": "Chocolate-like coated strawberry cones.",
        "tip": "Chilling the anko-wrapped strawberries in the fridge for 10 minutes makes wrapping them in hot mochi much easier.",
        "commonMistake": "Wrapping wet strawberries, which makes the bean paste slide off in gooey clumps.",
        "moveOnWhen": "All 6 strawberries are wrapped in anko.",
        "quickInstructions": "Wrap 25g of bean paste around each dry strawberry, leaving the tip peeking out."
      },
      {
        "step": 2,
        "title": "STEAM THE MOCHI DOUGH TILL TRANSLUCENT",
        "whatYouNeed": [
          "100g mochiko flour",
          "50g sugar",
          "150ml water",
          "Microwave-safe glass bowl",
          "Plastic wrap"
        ],
        "description": "In the glass bowl, whisk mochiko flour, sugar, and water until completely smooth and lump-free. Cover loosely with plastic wrap. Microwave on HIGH (800W) for 1 minute. Remove and stir vigorously with a wet silicone spatula. Cover and microwave again for 1 minute. Stir. Microwave for a final 30 seconds until dough turns glossy, stretchy, and translucent.",
        "howToDoIt": "Heat gelatinizes the rice starches. The dough transitions from opaque white liquid to a thick, translucent, elastic mass.",
        "heat": "Microwave High (approx 2.5 minutes total)",
        "duration": 3,
        "visualCues": "Dough turns from chalky white to shiny, slightly translucent, intensely sticky putty.",
        "smell": "Sweet, steamed sweet rice fragrance.",
        "textureCheck": "Extremely stretchy, glossy, and elastic.",
        "whatShouldThisLookLike": "A shiny, translucent ball of hot elastic mochi dough.",
        "tip": "Stirring between microwave bursts ensures even heat distribution and prevents rubbery scorched spots.",
        "commonMistake": "Under-cooking the dough, leaving chalky raw flour starches in the center.",
        "moveOnWhen": "Dough is translucent, glossy, and stretches without snapping.",
        "quickInstructions": "Whisk flour, sugar, water; microwave covered in 3 intervals (1 min, 1 min, 30s) stirring between, until translucent."
      },
      {
        "step": 3,
        "title": "DUST, ROLL & DIVIDE INTO 6 PORTIONS",
        "whatYouNeed": [
          "Hot mochi dough",
          "Potato starch dusted surface",
          "Rolling pin dusted with starch",
          "Bench scraper"
        ],
        "description": "Scrape the hot mochi dough onto the heavily starch-dusted surface. Dust the top of the dough with more starch. Using your hands and a dusted rolling pin, gently pat and roll the dough into a flat rectangle about 6mm thick. Let cool for 2 minutes until comfortably warm. Use a bench scraper or cookie cutter to divide into 6 equal circular rounds.",
        "howToDoIt": "Potato starch neutralizes the intense surface tackiness of the mochi, allowing you to touch and roll it without sticking.",
        "heat": "No Heat",
        "duration": 4,
        "visualCues": "Pillowy white dusted dough cut into 6 round disks.",
        "textureCheck": "Soft, powdery outside, ultra-elastic inside.",
        "whatShouldThisLookLike": "Six powdery, round, stretchy mochi wrappers.",
        "tip": "Brush off excess potato starch with a soft pastry brush so the mochi seams can stick to themselves when pinched.",
        "commonMistake": "Touching naked hot mochi with bare un-starched fingers — it will weld to your skin.",
        "moveOnWhen": "Six flat mochi rounds are cut and dusted.",
        "quickInstructions": "Roll hot dough onto starched surface 6mm thick; divide into 6 round wrappers."
      },
      {
        "step": 4,
        "title": "ENCASE AND PINCH THE DAIFUKU SHUT",
        "whatYouNeed": [
          "Mochi round",
          "Anko strawberry",
          "Dusting brush"
        ],
        "description": "Take one mochi wrapper in your dusted palm. Brush excess starch off the top. Place an anko-covered strawberry in the center, tip pointing DOWN against the palm. Gently stretch the edges of the mochi wrapper up and over the flat bottom of the strawberry. Gather the edges together and pinch firmly to seal the seam completely. Invert so the smooth rounded dome faces up. Dust lightly with starch.",
        "howToDoIt": "Pinching the seam on the flat bottom hides the closure and showcases the smooth, flawless dome on top.",
        "heat": "No Heat",
        "duration": 6,
        "visualCues": "Pristine, powdery white dome with a smooth surface and no cracks.",
        "textureCheck": "Pillowy soft and yielding like a baby's cheek.",
        "whatShouldThisLookLike": "Exquisite, rounded snow-white daifuku mochi.",
        "tip": "If the seam won't stick, dab a tiny drop of water on your fingertip to dissolve the starch and glue the dough shut.",
        "commonMistake": "Stretching the mochi too thin over the strawberry tip, causing the fruit to puncture through.",
        "moveOnWhen": "All 6 daifuku are sealed, rounded, and resting on paper liners.",
        "quickInstructions": "Place berry tip-down in mochi wrapper, stretch dough up over the base, pinch shut, and invert."
      },
      {
        "step": 5,
        "title": "REST, SLICE & SERVE",
        "whatYouNeed": [
          "Sharp knife or clean dental floss",
          "Serving plates"
        ],
        "description": "Let daifuku rest for 10 minutes at room temperature for the dough to set. To serve, wrap a piece of unflavored thread or dental floss around the vertical center of one daifuku, cross the ends, and pull through to slice cleanly in half, revealing the breathtaking ruby-red and white cross-section.",
        "howToDoIt": "Cutting with dental floss creates a surgical, smudge-free cross-section without squashing the delicate mochi.",
        "heat": "No Heat",
        "duration": 2,
        "visualCues": "Stunning cross-section of red strawberry, dark anko halo, and pure white mochi boundary.",
        "smell": "Sweet fresh strawberry and delicate rice.",
        "textureCheck": "Chewy elastic skin, silky bean paste, crisp burst of strawberry juice.",
        "whatShouldThisLookLike": "Masterpiece Japanese wagashi confectionery.",
        "tip": "Never refrigerate mochi long-term — the rice starch retrogrades and turns hard and chalky.",
        "commonMistake": "Using a dull serrated knife to saw through the mochi, crushing the berry and smudging red juice across the white dough.",
        "moveOnWhen": "Sliced and displayed.",
        "quickInstructions": "Rest 10 mins; slice cleanly in half with dental floss to reveal the strawberry interior."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Mochi became hard and tough the next day.",
        "remedy": "Not enough sugar was used in the dough, or mochi was stored in the fridge. Sugar retains moisture and keeps mochi soft at room temperature."
      },
      {
        "mistake": "Dough was impossible to shape and stuck to everything.",
        "remedy": "Under-dusted work surface. Use plenty of potato starch on hands, rolling pin, and board."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Mochi dough tore while stretching over strawberry",
        "whatHappened": "Wrapper was rolled too thin or dough cooled down too much.",
        "whyItHappened": "Cold mochi loses its elasticity and tears.",
        "whatToDoNow": "Pinch a tiny piece of warm dough over the tear and smooth with a starched finger.",
        "howToPrevent": "Work quickly while dough is still warm and keep wrappers at least 5-6mm thick."
      }
    ],
    "substitutions": [
      {
        "original": "Strawberries (Ichigo)",
        "substitute": "Fresh green muscat grapes, ripe kiwi slices, or mango chunks",
        "notes": "Shine Muscat grape daifuku is an insanely popular luxury variation in Japan."
      },
      {
        "original": "Koshian (red bean paste)",
        "substitute": "Shiroan (white bean paste) or chocolate hazelnut paste",
        "notes": "White bean paste gives an ultra-clean, elegant pastel appearance."
      }
    ],
    "safetyNotes": [
      "Mochi is very sticky and chewy; take small bites and chew thoroughly before swallowing."
    ],
    "servingGuide": {
      "restingTime": "10 minutes at room temperature.",
      "garnishing": "Light dusting of potato starch.",
      "plating": "Serve on small dark ceramic or cedar wagashi plates with a small wooden pick (kuromoji).",
      "temperature": "Room temperature.",
      "accompaniments": "A bowl of freshly whisked ceremonial matcha green tea."
    }
  },
  "dim-sum": {
    "id": "dim-sum",
    "name": "Artisan Cantonese Dim Sum (Har Gow & Siu Mai)",
    "cuisine": "Chinese",
    "region": "China (Guangdong / Hong Kong)",
    "servings": 4,
    "prepTime": 45,
    "cookTime": 15,
    "difficulty": "Hard",
    "overview": {
      "summary": "The twin crowns of Cantonese Yum Cha teahouse culture: crystal shrimp dumplings (Har Gow) wrapped in translucent pleated wheat-and-tapioca starch skins with sweet bamboo-flaked shrimp, alongside open-topped pork and shrimp dumplings (Siu Mai) wrapped in yellow egg skins, crowned with flying fish roe and steamed in fragrant bamboo baskets.",
      "appearance": "A steaming bamboo basket presenting glistening translucent Har Gow showing coral shrimp within, nestled alongside pleated golden-yellow Siu Mai cups dotted with orange tobiko.",
      "texture": "Har Gow wrapper has a delicate chew with snap and pop from whole fresh prawns; Siu Mai is juicy, bouncy, and succulent with rich pork fat.",
      "flavor": "Pure clean sea sweetness from fresh prawns, savory pork richness, fragrant toasted sesame oil, white pepper, and ginger notes.",
      "restingTimeMinutes": 2
    },
    "equipment": [
      {
        "name": "Traditional 10-inch bamboo steamer baskets with lid",
        "purpose": "Circulates moist convective steam without condensation dripping onto delicate dumpling skins."
      },
      {
        "name": "Perforated parchment steamer liners (or cabbage leaves)",
        "purpose": "Prevents delicate starch wrappers from sticking to the bamboo slats."
      },
      {
        "name": "Chinese cleaver (caidao) with oiled flat blade",
        "purpose": "For pressing starch dough balls into paper-thin translucent circular skins in one rocking stroke."
      },
      {
        "name": "Large wok with water ring",
        "purpose": "Holds boiling water beneath the bamboo steamer stack."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Peel, devein, and pat 400g raw tiger prawns bone-dry with paper towels (moisture kills bounce).",
        "durationMinutes": 10
      },
      {
        "task": "Finely mince 100g pork fatback into 2mm bits (essential for authentic succulent juicy Siu Mai texture).",
        "durationMinutes": 5
      },
      {
        "task": "Measure 100g wheat starch (tung min fun) and 40g tapioca starch for Har Gow crystal dough.",
        "durationMinutes": 3
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Prawn \"Tan-Xing\" (Bounce) Technique",
        "technique": "Pound half the prawns with the flat of a cleaver, then whip and throw the prawn paste repeatedly against the sides of the bowl for 30 cycles until myosin develops into a sticky, elastic paste that \"bounces\" against the teeth when bitten."
      },
      {
        "item": "Crystal Dough (Tan-Mian)",
        "technique": "Must use 100% boiling water (100°C) straight off the boil to scald the wheat and tapioca starch instantly, pre-gelatinizing the starches to form a translucent, workable dough."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Raw tiger prawns (divided)",
        "prep": "peeled, deveined, patted bone-dry",
        "amount": "400g",
        "metric": "400g",
        "imperial": "14 oz",
        "common": "400g"
      },
      {
        "name": "Ground pork shoulder (80/20 lean to fat)",
        "prep": "chilled for Siu Mai",
        "amount": "200g",
        "metric": "200g",
        "imperial": "7 oz",
        "common": "200g"
      },
      {
        "name": "Pork fatback",
        "prep": "diced into 2mm tiny pearls",
        "amount": "50g",
        "metric": "50g",
        "imperial": "1.8 oz",
        "common": "1/4 cup"
      },
      {
        "name": "Bamboo shoots (canned)",
        "prep": "rinsed, boiled 3 mins, finely diced",
        "amount": "50g",
        "metric": "50g",
        "imperial": "1.8 oz",
        "common": "1/3 cup"
      },
      {
        "name": "Wheat starch (Tung Min Fun)",
        "prep": "for Har Gow crystal skin",
        "amount": "100g",
        "metric": "100g",
        "imperial": "3.5 oz",
        "common": "3/4 cup"
      },
      {
        "name": "Tapioca starch",
        "prep": "adds stretch & elasticity",
        "amount": "40g",
        "metric": "40g",
        "imperial": "1.4 oz",
        "common": "1/4 cup"
      },
      {
        "name": "Boiling water (rolling boil)",
        "prep": "must be 100°C to scald starch",
        "amount": "180ml",
        "metric": "180ml",
        "imperial": "6 fl oz",
        "common": "3/4 cup"
      },
      {
        "name": "Yellow round Siu Mai wrappers (egg wanton skins)",
        "prep": "trimmed into 8cm circles",
        "amount": "16 wrappers",
        "metric": "16 wrappers",
        "imperial": "16 wrappers",
        "common": "16 wrappers"
      },
      {
        "name": "Toasted sesame oil",
        "prep": "pure dark sesame",
        "amount": "1.5 tbsp",
        "metric": "22ml",
        "imperial": "0.75 fl oz",
        "common": "1.5 tbsp"
      },
      {
        "name": "Shaoxing rice wine",
        "prep": "for seasoning filling",
        "amount": "1 tbsp",
        "metric": "15ml",
        "imperial": "0.5 fl oz",
        "common": "1 tbsp"
      },
      {
        "name": "Ground white pepper",
        "prep": "finely ground",
        "amount": "1 tsp",
        "metric": "3g",
        "imperial": "0.1 oz",
        "common": "1 tsp"
      },
      {
        "name": "Tobiko (orange flying fish roe) or finely minced carrot",
        "prep": "for garnishing Siu Mai tops",
        "amount": "2 tbsp",
        "metric": "25g",
        "imperial": "0.9 oz",
        "common": "2 tbsp"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "WHIP PRAWN & PORK FILLINGS FOR MAXIMUM BOUNCE",
        "whatYouNeed": [
          "Prawns",
          "Ground pork",
          "Pork fat",
          "Bamboo shoots",
          "Shaoxing wine",
          "Sesame oil",
          "White pepper",
          "Salt, sugar"
        ],
        "description": "For Har Gow: Chop 200g prawns into small chunks, mash remaining 100g with cleaver into paste; mix with bamboo shoots, 1/2 tsp salt, 1/2 tsp sugar, 1/2 tsp white pepper, and 1 tsp sesame oil. Whip vigorously in circles for 2 minutes. For Siu Mai: Mix pork, 100g chopped prawns, pork fat, 1 tbsp Shaoxing wine, 1 tsp sesame oil, 1 tsp cornstarch; slap against bowl 20 times until tacky. Chill both fillings 30 minutes.",
        "howToDoIt": "Whipping and slapping aligns meat proteins into a bouncy elastic matrix (\"tan-xing\") rather than crumbly meat.",
        "heat": "No Heat",
        "duration": 10,
        "visualCues": "Fillings become intensely sticky, pale, and glossy.",
        "smell": "Aromatic white pepper, sweet seafood, and nutty sesame.",
        "textureCheck": "Dense, springy, and adhesive.",
        "whatShouldThisLookLike": "Two bowls of chilled, bouncy dim sum fillings.",
        "tip": "Always keep dumpling fillings chilled; warm fat melts and causes greasy, leaking dumplings.",
        "commonMistake": "Using wet prawns — trapped water turns filling watery and dissolves delicate wrappers.",
        "moveOnWhen": "Fillings are cohesive, bouncy, and chilled.",
        "quickInstructions": "Whip prawn and pork fillings separately until sticky and bouncy; chill 30 mins."
      },
      {
        "step": 2,
        "title": "SCALD & KNEAD HAR GOW CRYSTAL DOUGH",
        "whatYouNeed": [
          "100g wheat starch",
          "40g tapioca starch",
          "180ml boiling water (100°C)",
          "1 tsp lard or oil"
        ],
        "description": "In a heatproof bowl, combine wheat starch and tapioca starch. Pour 180ml rolling boiling water all at once over the starches. Stir rapidly with chopsticks for 30 seconds until a translucent shaggy dough forms. Cover bowl with a plate and rest 5 minutes to trap steam. Add 1 tsp oil/lard and knead on clean board for 3 minutes until satin-smooth. Roll into a cylinder and wrap in clingfilm.",
        "howToDoIt": "Rolling boiling water pre-gelatinizes the starch granules. If water is lukewarm (even 80°C), dough will crumble and refuse to stretch.",
        "heat": "Rolling Boil for water",
        "duration": 8,
        "visualCues": "Chalky powder transforms into a soft, snow-white, pliable, translucent putty.",
        "textureCheck": "Soft as an earlobe, smooth, non-sticky.",
        "whatShouldThisLookLike": "A smooth white ball of elastic crystal dough.",
        "tip": "Always keep unused crystal dough covered in plastic wrap; it dries out in minutes under air.",
        "commonMistake": "Using warm tap water — the starch won’t gelatinize, creating a puddle of unusable paste.",
        "moveOnWhen": "Dough is smooth, supple, and wrapped.",
        "quickInstructions": "Pour 180ml boiling water over starches, stir, rest 5 mins, knead with oil until smooth, wrap tightly."
      },
      {
        "step": 3,
        "title": "CLEAVER-PRESS SKINS & PLEAT HAR GOW",
        "whatYouNeed": [
          "Dough cylinder",
          "Chinese cleaver",
          "Drop of oil",
          "Prawn filling"
        ],
        "description": "Cut dough into 12 equal discs (12g each). Rub blade of cleaver with a drop of oil. Press flat blade firmly down on one dough ball and pivot sideways in a smooth arc to smear it into a paper-thin, 8cm translucent round circle. Lift with blade. Place 1 tbsp filling in center. Pleat 7 to 9 delicate folds along front edge only, pressing against flat back to form a translucent pleated bonnet shape.",
        "howToDoIt": "The cleaver smear technique achieves restaurant-thin skins that rolling pins cannot replicate without sticking.",
        "heat": "No Heat",
        "duration": 15,
        "visualCues": "Paper-thin translucent skin with 7–9 tiny uniform pleats holding a pink prawn core.",
        "textureCheck": "Supple skin with firmly pinched seams.",
        "whatShouldThisLookLike": "Classic pleated translucent shrimp bonnets.",
        "tip": "Don't overfill — crystal skin has limited stretch compared to wheat flour dough.",
        "commonMistake": "Rolling with a floured rolling pin, which dries the skin and causes it to crack during pleating.",
        "moveOnWhen": "12 Har Gow are pleated and arranged on parchment.",
        "quickInstructions": "Smear dough ball flat with oiled cleaver blade, add filling, pleat 7-9 folds into bonnet."
      },
      {
        "step": 4,
        "title": "WRAP OPEN-TOPPED SIU MAI CUPS",
        "whatYouNeed": [
          "16 yellow Siu Mai wrappers",
          "Pork & prawn filling",
          "Butter knife or spoon",
          "Tobiko"
        ],
        "description": "Hold a wrapper in your left hand, curling fingers into a loose \"O\" ring. Place 1.5 tbsp filling in center. Push filling downward into the finger cylinder with a butter knife while squeezing your fingers to pleat the wrapper upward into a cylindrical open-topped cup. Flatten bottom on board so it stands upright. Smooth top with wet knife. Crown center with 1/4 tsp orange tobiko.",
        "howToDoIt": "Cradling in your hand naturally forms the signature pleated cup with meat filling exposed on top.",
        "heat": "No Heat",
        "duration": 10,
        "visualCues": "Upright yellow pleated cylinders with glistening exposed meat crowns dotted with orange tobiko.",
        "textureCheck": "Firm, packed cylinders that stand tall on their own.",
        "whatShouldThisLookLike": "Iconic open-topped yellow dim sum cups.",
        "tip": "Ensure the top surface of the meat is packed flat and even so tobiko stays centered.",
        "commonMistake": "Leaving loose air gaps inside the cup, causing Siu Mai to slump during steaming.",
        "moveOnWhen": "16 Siu Mai are wrapped, standing tall, and crowned with roe.",
        "quickInstructions": "Form wrapper into pleated cup around filling, flatten bottom, top with tobiko."
      },
      {
        "step": 5,
        "title": "STEAM TO TRANSLUCENT GLORY IN BAMBOO BASKETS",
        "whatYouNeed": [
          "Wok with boiling water",
          "Bamboo steamer baskets",
          "Parchment liners",
          "Dumplings"
        ],
        "description": "Line bamboo steamer baskets with perforated parchment. Arrange Har Gow and Siu Mai leaving 2cm space between them. Stack baskets over a wok of furiously boiling water. Cover with bamboo lid. Steam over high heat: 6 minutes for Har Gow (skins will turn glassy and translucent showing pink shrimp); 8 minutes for Siu Mai.",
        "howToDoIt": "High heat steam cooks the prawns in minutes to preserve maximum crisp snap without toughening.",
        "heat": "High Heat (Vigorous Steam)",
        "duration": 8,
        "visualCues": "Har Gow wrappers turn crystal-clear; coral shrimp glows through; Siu Mai wrappers cling tightly to juicy meat.",
        "hear": "Roaring steam and bubbling water.",
        "smell": "Sweet ocean shrimp, bamboo wood, and sesame.",
        "textureCheck": "Bouncy snap from prawns, juicy succulent pork.",
        "whatShouldThisLookLike": "Glistening, pristine, teahouse-quality dim sum basket.",
        "tip": "Serve directly inside the bamboo basket to retain heat and authentic teahouse aroma.",
        "commonMistake": "Over-steaming past 8 minutes — Har Gow skins will absorb excess moisture and dissolve into paste.",
        "moveOnWhen": "Har Gow is crystal translucent and Siu Mai is piping hot (74°C).",
        "quickInstructions": "Steam Har Gow 6 mins and Siu Mai 8 mins over high heat in bamboo baskets."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Har Gow skin tore and stuck to the basket.",
        "remedy": "No parchment liner was used or water was under-boiling. Always use oiled parchment and steam over rolling high heat."
      },
      {
        "mistake": "Har Gow dough was brittle and broke when folded.",
        "remedy": "Water was not at a 100°C rolling boil when poured onto starch. The starch must be completely scalded."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Har Gow skin feels thick, gummy, and rubbery",
        "whatHappened": "Skin was rolled too thick or dough had too much tapioca starch.",
        "whyItHappened": "Inadequate cleaver-smearing technique.",
        "whatToDoNow": "Enjoy with chili oil and soy sauce.",
        "howToPrevent": "Press dough ball with the cleaver blade until you can faintly see the blade surface through the dough."
      }
    ],
    "substitutions": [
      {
        "original": "Wheat starch (Tung Min Fun)",
        "substitute": "Cornstarch + Tapioca starch (equal parts)",
        "notes": "Acceptable emergency alternative, though wheat starch yields the unmatched crystal clarity."
      },
      {
        "original": "Tobiko roe",
        "substitute": "Finely minced red carrot or green pea",
        "notes": "Traditional classic teahouse garnish."
      }
    ],
    "safetyNotes": [
      "Beware of escaping steam when unlidding bamboo baskets."
    ],
    "servingGuide": {
      "restingTime": "1 minute.",
      "garnishing": "Tobiko roe, served with small saucers of Chiu Chow chili oil and sweet soy sauce.",
      "plating": "Serve directly in steaming bamboo baskets on tabletop.",
      "temperature": "Piping hot.",
      "accompaniments": "Hot pot of Jasmine, Pu-erh, or Tieguanyin tea."
    }
  },
  "dumplings": {
    "id": "dumplings",
    "name": "Northern Chinese Pork & Chive Dumplings (Jiaozi)",
    "cuisine": "Chinese",
    "region": "Northern China (Beijing / Shandong)",
    "servings": 4,
    "prepTime": 40,
    "cookTime": 15,
    "difficulty": "Medium",
    "overview": {
      "summary": "The soulful cornerstone of Chinese Lunar New Year feasts: handmade rolled dumpling skins stuffed with savory minced pork, garlic chives (jiucai), ginger, and aromatic ginger-scallion water, boiled to plump tender perfection (Shui Jiao) and served with aged Chinkiang black vinegar, garlic, and chili oil.",
      "appearance": "Plump, glossy white ingots with crescent pleats arranged on a platter, releasing steam and paired with dark aromatic dipping vinegar.",
      "texture": "Tender, satisfyingly chewy wrapper with elastic bite (\"dao-jin\") yielding to an explosion of fragrant savory meat juice.",
      "flavor": "Rich pork savoriness, pungent garlicky chives, warming ginger, and tart complex black vinegar.",
      "restingTimeMinutes": 3
    },
    "equipment": [
      {
        "name": "Small tapered Chinese dumpling rolling pin (Ganzhang)",
        "purpose": "Allows rapid rolling while rotating dough circle to create thin edges and thick centers."
      },
      {
        "name": "Large 6-quart stockpot",
        "purpose": "Provides plenty of boiling water so dumplings don't crowd and stick."
      },
      {
        "name": "Spider strainer or slotted ladle",
        "purpose": "Lifts delicate boiled dumplings safely without tearing skins."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Knead 300g all-purpose flour and 160ml room-temperature water into a smooth dough; rest covered for 30 minutes to relax gluten.",
        "durationMinutes": 35
      },
      {
        "task": "Steep 2 smashed scallions and 15g smashed ginger in 100ml warm water for 15 minutes (ginger-scallion water).",
        "durationMinutes": 15
      },
      {
        "task": "Wash, dry completely, and finely chop 150g Chinese garlic chives (jiucai).",
        "durationMinutes": 10
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Beating In Ginger-Scallion Water (Da-Shui)",
        "technique": "Add ginger-scallion water to ground pork in 3 separate additions, vigorously stirring clockwise in one direction only. The meat will absorb the water completely, turning from dense grind into a soft, juicy emulsion that creates internal soup dumplings."
      },
      {
        "item": "Rolling Technique (Thick Center, Thin Edges)",
        "technique": "Hold edge of dough round with left hand. Roll the small pin forward halfway toward the center with right hand, pull back, rotate dough 45 degrees, and roll again. This keeps the center thick to support the filling while edges are thin for delicate pleats."
      }
    ],
    "essentialIngredients": [
      {
        "name": "All-purpose flour",
        "prep": "unbleached, medium protein",
        "amount": "300g",
        "metric": "300g",
        "imperial": "10.5 oz",
        "common": "2.5 cups"
      },
      {
        "name": "Room-temperature water",
        "prep": "for dough",
        "amount": "160ml",
        "metric": "160ml",
        "imperial": "5.4 fl oz",
        "common": "2/3 cup"
      },
      {
        "name": "Ground pork (70% lean / 30% fat)",
        "prep": "chilled",
        "amount": "350g",
        "metric": "350g",
        "imperial": "12 oz",
        "common": "350g"
      },
      {
        "name": "Chinese garlic chives (Jiucai)",
        "prep": "washed, dried bone-dry, finely chopped",
        "amount": "150g",
        "metric": "150g",
        "imperial": "5.3 oz",
        "common": "2 cups chopped"
      },
      {
        "name": "Ginger-scallion steeped water",
        "prep": "infused aromatic water",
        "amount": "80ml",
        "metric": "80ml",
        "imperial": "2.7 fl oz",
        "common": "1/3 cup"
      },
      {
        "name": "Light soy sauce",
        "prep": "for savory seasoning",
        "amount": "2 tbsp",
        "metric": "30ml",
        "imperial": "1 fl oz",
        "common": "2 tbsp"
      },
      {
        "name": "Shaoxing rice wine",
        "prep": "aromatic cooking wine",
        "amount": "1 tbsp",
        "metric": "15ml",
        "imperial": "0.5 fl oz",
        "common": "1 tbsp"
      },
      {
        "name": "Toasted sesame oil",
        "prep": "for coating chives and filling",
        "amount": "2 tbsp",
        "metric": "30ml",
        "imperial": "1 fl oz",
        "common": "2 tbsp"
      },
      {
        "name": "Chinkiang black vinegar (Zhenjiang)",
        "prep": "for dipping sauce",
        "amount": "60ml",
        "metric": "60ml",
        "imperial": "2 fl oz",
        "common": "1/4 cup"
      },
      {
        "name": "Sichuan chili oil with sediment (Hongyou)",
        "prep": "for dipping",
        "amount": "2 tbsp",
        "metric": "30ml",
        "imperial": "1 fl oz",
        "common": "2 tbsp"
      },
      {
        "name": "Fresh garlic",
        "prep": "finely minced into paste for sauce",
        "amount": "3 cloves",
        "metric": "15g",
        "imperial": "0.5 oz",
        "common": "3 cloves"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "EMULSIFY PORK & GINGER-SCALLION WATER",
        "whatYouNeed": [
          "Ground pork",
          "Ginger-scallion water",
          "Soy sauce",
          "Shaoxing wine",
          "Salt, white pepper",
          "Sesame oil"
        ],
        "description": "Place ground pork in a large bowl with soy sauce, Shaoxing wine, 1 tsp salt, and 1/2 tsp white pepper. Pour in 1/3 of the ginger-scallion water. Stir vigorously in one clockwise direction with chopsticks until the liquid is fully absorbed. Repeat with remaining water in two more additions until the pork is pale, fluffy, and sticky. Stir in 1 tbsp sesame oil to seal.",
        "howToDoIt": "Unidirectional stirring develops protein fibrils that trap liquid droplets. When boiled, these droplets melt into hot, savory broth inside the dumpling.",
        "heat": "No Heat",
        "duration": 8,
        "visualCues": "Pork turns from dense granular meat to a pale, fluffy, velvety paste that clings to the bowl.",
        "smell": "Ginger, scallion, and savory soy aroma.",
        "textureCheck": "Sticky, creamy, and gelatinous.",
        "whatShouldThisLookLike": "Juicy, seasoned, whipped meat paste.",
        "tip": "Always stir in only one direction; reversing directions tears the protein strands and releases trapped water.",
        "commonMistake": "Pouring all water in at once, causing meat to separate into unmixable chunks.",
        "moveOnWhen": "Meat has absorbed all liquid and is fluffy.",
        "quickInstructions": "Stir pork clockwise while adding ginger-scallion water in 3 additions until fluffy and sticky."
      },
      {
        "step": 2,
        "title": "TOSS CHIVES IN OIL & COMBINE FILLING",
        "whatYouNeed": [
          "Chopped chives",
          "1 tbsp sesame oil",
          "Seasoned pork paste"
        ],
        "description": "Place dry chopped chives in a separate small bowl. Drizzle 1 tbsp sesame oil over the chives and toss gently to coat every piece in oil. Gently fold the oiled chives into the seasoned pork paste right before wrapping.",
        "howToDoIt": "Coating chives with oil creates a hydrophobic lipid barrier that prevents salt from drawing out moisture, keeping chives crisp and preventing watery filling.",
        "heat": "No Heat",
        "duration": 3,
        "visualCues": "Glistening emerald chive specks evenly suspended throughout the pink pork paste.",
        "smell": "Fresh pungent garlic chive fragrance.",
        "textureCheck": "Evenly combined and moist.",
        "whatShouldThisLookLike": "Vibrant green-flecked pork dumpling filling.",
        "tip": "Never mix chives into salted pork hours in advance — fold them in right as you start rolling skins.",
        "commonMistake": "Salting chives directly, which causes them to weep cups of water into the filling.",
        "moveOnWhen": "Chives are folded in evenly.",
        "quickInstructions": "Toss chives in sesame oil, then fold into pork filling right before wrapping."
      },
      {
        "step": 3,
        "title": "ROLL DOUGH ROUNDS WITH THICK CENTERS",
        "whatYouNeed": [
          "Rested dough",
          "Rolling pin",
          "Flour for dusting"
        ],
        "description": "Roll rested dough into two long 2.5cm ropes. Cut into small 10g nuggets (approx 36 pieces). Dust with flour and press each nugget into a flat disc with your palm. Hold the edge of a disc with your left fingers. Roll the pin halfway to the center, pull back, rotate disc 45 degrees, and repeat 6–8 times to create an 8cm circle with a thick center (belly) and thin edges (lips).",
        "howToDoIt": "The thick belly prevents the heavy wet filling from tearing through the base, while thin edges fold into delicate, tender pleats.",
        "heat": "No Heat",
        "duration": 15,
        "visualCues": "Concentric disc: opaque thicker center tapering to delicate, thin translucent perimeter.",
        "textureCheck": "Silky, elastic, and non-sticky.",
        "whatShouldThisLookLike": "Stack of circular handmade dumpling skins.",
        "tip": "Keep unwrapped dough balls covered under a damp towel so they don't develop a dry crust.",
        "commonMistake": "Rolling skins completely flat like tortillas — the bottoms will burst during boiling.",
        "moveOnWhen": "Dumpling skins are rolled.",
        "quickInstructions": "Cut dough into 10g nuggets; roll with pin rotating 45° to keep center thick and edges thin."
      },
      {
        "step": 4,
        "title": "PLEAT & PINCH THE JIAOZI SHUT",
        "whatYouNeed": [
          "Dumpling skin",
          "1 tbsp filling",
          "Floured tray"
        ],
        "description": "Place 1 generous tablespoon of filling on center of skin. Fold in half. Pinch the top center together. Using your thumbs and index fingers, press both sides inwards toward the center in a firm, sweeping squeeze (the traditional two-thumb squeeze) or fold 3 pleats on each side toward the middle. Press seams firmly to create an airtight seal. Place on floured tray.",
        "howToDoIt": "Airtight pinching traps steam and expanding juices inside without letting boiling water enter.",
        "heat": "No Heat",
        "duration": 15,
        "visualCues": "Plump crescent-shaped ingots with a proud bulging belly that sit upright on a flat base.",
        "textureCheck": "Airtight seal with no meat poking through seams.",
        "whatShouldThisLookLike": "Army of plump, handmade Chinese jiaozi.",
        "tip": "Fresh handmade skins need no water to seal — just press the fresh dough together.",
        "commonMistake": "Trapping air bubbles inside with the meat, which expand in boiling water and pop the dumpling open.",
        "moveOnWhen": "All 36 dumplings are pleated and resting.",
        "quickInstructions": "Place filling in center, fold, pinch center, pleat sides tightly shut into plump ingots."
      },
      {
        "step": 5,
        "title": "THE THREE-BOIL METHOD (SAN-GUO SHUI)",
        "whatYouNeed": [
          "6-quart pot of boiling water",
          "1 tsp salt",
          "1 bowl of cold water (250ml)",
          "Dumplings"
        ],
        "description": "Bring a large pot of salted water to a rolling boil over high heat. Drop 18 dumplings into boiling water one by one. Stir gently with the back of a ladle along the pot bottom so they don't stick. Cover with lid. When water boils vigorously to a rolling boil again, pour in 80ml cold water (1st boil). Cover. When it boils a second time, add another 80ml cold water (2nd boil). When it boils a third time, add final 80ml cold water. When it returns to a boil, dumplings will float, puffed and translucent.",
        "howToDoIt": "The traditional \"three-boil\" technique lowers surface temperature to prevent wrappers from disintegrating while heat penetrates and cooks the dense raw pork core through.",
        "heat": "High Heat with cold water drops",
        "duration": 7,
        "visualCues": "Dumplings float buoyantly on the surface, puffed like little pillows with wrinkled, translucent wrappers.",
        "hear": "Roaring rolling boil tempered by cold water splashes.",
        "smell": "Rich fragrant garlic chive and sweet dough aroma.",
        "textureCheck": "Tender chewy wrapper with plump firm interior.",
        "whatShouldThisLookLike": "Puffed, floating white dumplings glistening on the water surface.",
        "tip": "Never let dumplings boil aggressively without cold water additions or wrappers will turn mushy before meat is cooked.",
        "commonMistake": "Dumping 36 dumplings into a small pot — drops water temperature drastically and turns dumplings into a giant glued ball.",
        "moveOnWhen": "Dumplings float puffed and wrinkled after three water additions.",
        "quickInstructions": "Boil dumplings; add 80ml cold water every time it boils (3 times total) until dumplings float puffed."
      },
      {
        "step": 6,
        "title": "LIFT, DRESS & SERVE WITH BLACK VINEGAR",
        "whatYouNeed": [
          "Spider strainer",
          "Serving platter",
          "Dipping bowls with Chinkiang vinegar, garlic, and chili oil"
        ],
        "description": "Scoop floating dumplings out using a spider strainer, draining water thoroughly. Arrange on a wide platter. Serve immediately alongside individual dipping bowls filled with 2 tbsp Chinkiang black vinegar, 1 tsp minced fresh garlic, and 1 tsp fragrant chili oil.",
        "howToDoIt": "Tart black vinegar cuts through rich pork fat while raw garlic accentuates the fragrant chives.",
        "heat": "Off Heat",
        "duration": 2,
        "visualCues": "Glistening white dumplings releasing fragrant steam next to deep dark mahogany dipping sauce.",
        "smell": "Tart woody vinegar, pungent garlic, and savory pork.",
        "textureCheck": "Chewy bite releasing hot savory broth.",
        "whatShouldThisLookLike": "Abundant festive platter of Northern Chinese boiled dumplings.",
        "tip": "Dip dumpling in vinegar, take a small bite to release steam, sip internal broth, then eat!",
        "commonMistake": "Letting drained dumplings sit piled in a colander, causing them to stick into one giant clump.",
        "moveOnWhen": "Served piping hot.",
        "quickInstructions": "Lift dumplings with spider strainer, plate immediately, serve with black vinegar and chili oil."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Dumplings burst open in the boiling water.",
        "remedy": "Seams were improperly pinched or air was trapped inside. Always press seams firmly with dry fingers."
      },
      {
        "mistake": "Filling was dry, hard, and grainy.",
        "remedy": "No ginger-scallion water was beaten into the pork. Incorporating liquid is mandatory for juicy dumplings."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Cooked dumplings stick together on the serving plate",
        "whatHappened": "Surface starch dried and bonded neighboring dumplings.",
        "whyItHappened": "Sitting stagnant without moisture or oil.",
        "whatToDoNow": "Drizzle 1/2 tsp toasted sesame oil over the platter and gently shake to coat.",
        "howToPrevent": "Drain thoroughly and serve immediately; or toss lightly with a few drops of sesame oil."
      }
    ],
    "substitutions": [
      {
        "original": "Chinese garlic chives (Jiucai)",
        "substitute": "Finely minced green cabbage (salted and squeezed dry) + 2 extra cloves garlic",
        "notes": "Pork and cabbage (Zhurou Baicai) is the other major classic Northern Chinese dumpling filling."
      },
      {
        "original": "Chinkiang black vinegar",
        "substitute": "Balsamic vinegar mixed 50/50 with rice vinegar",
        "notes": "Provides rich malty acidity with gentle sweetness."
      }
    ],
    "safetyNotes": [
      "Pork filling must reach safe internal temperature of 74°C (165°F)."
    ],
    "servingGuide": {
      "restingTime": "1 minute.",
      "garnishing": "Serve alongside fresh crushed garlic cloves and chili oil.",
      "plating": "Large shallow ceramic platter with dumplings in concentric circles.",
      "temperature": "Piping hot.",
      "accompaniments": "Bowl of dumpling cooking water (Yuan Tang) — tradition says \"Yuan Tang Hua Yuan Shi\" (original soup digests original food)."
    }
  },
  "fried-rice": {
    "id": "fried-rice",
    "name": "Classic Yangzhou Fried Rice (Yangzhou Chaofan)",
    "cuisine": "Chinese",
    "region": "China (Jiangsu / Yangzhou)",
    "servings": 4,
    "prepTime": 20,
    "cookTime": 10,
    "difficulty": "Medium",
    "overview": {
      "summary": "The gold standard of Chinese wok mastery: day-old jasmine rice grains coated in beaten egg yolks (\"Gold wrapped in Silver\"), stir-fried over roaring wok heat with Chinese BBQ pork (Char Siu), plump prawns, sweet green peas, and scallions, achieving distinct individual grains infused with breath of the wok (Wok Hei).",
      "appearance": "Fluffy mound of vibrant golden rice with glistening coral shrimp, ruby-edged char siu cubes, emerald peas, and jade scallion rings.",
      "texture": "Dry, light, separate grains with tender chew, paired with snappy succulent prawns and tender sweet pork.",
      "flavor": "Smoky wok hei, savory pork, sweet seafood umami, nutty toasted egg, and fresh scallion sweetness.",
      "restingTimeMinutes": 1
    },
    "equipment": [
      {
        "name": "14-inch round-bottom carbon steel wok (well-seasoned)",
        "purpose": "Heats instantly and imparts authentic smoky Wok Hei aroma."
      },
      {
        "name": "Chinese wok spatula (Chaan)",
        "purpose": "Flips and tosses rice grains against the hot wok walls without crushing them."
      },
      {
        "name": "High-BTU gas burner (or max power stove)",
        "purpose": "Delivers intense heat necessary to vaporize surface moisture instantly."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Fluff and separate 600g chilled day-old cooked jasmine rice with damp hands so there are zero clumps.",
        "durationMinutes": 5
      },
      {
        "task": "Dice 100g Char Siu (BBQ pork) and 150g peeled raw prawns into uniform 1cm cubes.",
        "durationMinutes": 5
      },
      {
        "task": "Whisk 3 large eggs with 1/2 tsp salt and 1/2 tsp white pepper.",
        "durationMinutes": 2
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Rice Conditioning",
        "technique": "Rice must be cooked with slightly less water (1:1 ratio) and refrigerated uncovered overnight. The cold air dehydrates the surface starch, ensuring grains bounce and fry in hot oil rather than steaming into mush."
      },
      {
        "item": "Wok Hei (Breath of the Wok)",
        "technique": "Achieved by tossing the rice high into the hot air above the wok edge where aerosolized oil droplets combust briefly, infusing the rice with a signature smoky, caramelized aroma."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Day-old cooked jasmine rice",
        "prep": "chilled, broken into separate grains",
        "amount": "600g",
        "metric": "600g",
        "imperial": "21 oz",
        "common": "4 cups cooked"
      },
      {
        "name": "Char Siu (Chinese roast BBQ pork)",
        "prep": "cut into 1cm cubes",
        "amount": "100g",
        "metric": "100g",
        "imperial": "3.5 oz",
        "common": "3/4 cup"
      },
      {
        "name": "Raw tiger prawns",
        "prep": "peeled, deveined, cut into 1cm cubes",
        "amount": "150g",
        "metric": "150g",
        "imperial": "5.3 oz",
        "common": "1 cup"
      },
      {
        "name": "Large eggs",
        "prep": "whisked with pinch of salt",
        "amount": "3 eggs",
        "metric": "150g",
        "imperial": "5.3 oz",
        "common": "3 eggs"
      },
      {
        "name": "Frozen sweet green peas",
        "prep": "thawed",
        "amount": "80g",
        "metric": "80g",
        "imperial": "2.8 oz",
        "common": "1/2 cup"
      },
      {
        "name": "Scallions / Green onions",
        "prep": "sliced; whites and greens separated",
        "amount": "4 stalks",
        "metric": "50g",
        "imperial": "1.8 oz",
        "common": "1/2 cup"
      },
      {
        "name": "Neutral cooking oil (peanut or lard)",
        "prep": "high smoke point",
        "amount": "3 tbsp",
        "metric": "45ml",
        "imperial": "1.5 fl oz",
        "common": "3 tbsp"
      },
      {
        "name": "Shaoxing rice wine",
        "prep": "splashed around wok edge",
        "amount": "1 tbsp",
        "metric": "15ml",
        "imperial": "0.5 fl oz",
        "common": "1 tbsp"
      },
      {
        "name": "Light soy sauce",
        "prep": "sparingly, drizzled along hot wok wall",
        "amount": "1 tbsp",
        "metric": "15ml",
        "imperial": "0.5 fl oz",
        "common": "1 tbsp"
      },
      {
        "name": "Ground white pepper",
        "prep": "fine powder",
        "amount": "1/2 tsp",
        "metric": "1.5g",
        "imperial": "0.05 oz",
        "common": "1/2 tsp"
      },
      {
        "name": "Fine sea salt",
        "prep": "primary seasoning",
        "amount": "1 tsp",
        "metric": "5g",
        "imperial": "0.18 oz",
        "common": "1 tsp"
      },
      {
        "name": "Toasted sesame oil",
        "prep": "finishing aroma",
        "amount": "1 tsp",
        "metric": "5ml",
        "imperial": "0.17 fl oz",
        "common": "1 tsp"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "SEAR PRAWNS & CHAR SIU IN SMOKING WOK",
        "whatYouNeed": [
          "Carbon steel wok",
          "1 tbsp oil",
          "Cubed prawns",
          "Cubed char siu",
          "Splash of Shaoxing wine"
        ],
        "description": "Heat wok over high heat until wisps of blue smoke curl from the surface (Longyau). Swirl in 1 tbsp oil. Add prawns and char siu cubes. Stir-fry aggressively for 60 seconds until prawns curl pink and pork caramelizes. Splash 1 tbsp Shaoxing wine around the hot wok rim. Transfer meat to a bowl.",
        "howToDoIt": "High heat sears meat instantaneously without losing natural juices into the wok.",
        "heat": "High Heat (Smoking hot)",
        "duration": 2,
        "visualCues": "Prawns curl into tight coral C-shapes; pork fat sizzles and browns.",
        "hear": "Explosive, violent crackling sizzle.",
        "smell": "Caramelized pork, sweet wine steam, and searing seafood.",
        "textureCheck": "Snappy prawns, tender pork.",
        "whatShouldThisLookLike": "Glistening, seared prawn and pork cubes.",
        "tip": "Remove meat while prawns are 90% cooked so they don't turn rubbery during the final toss.",
        "commonMistake": "Crowding raw prawns with cold rice — creates steam that ruins the fry.",
        "moveOnWhen": "Prawns are pink and transferred to bowl.",
        "quickInstructions": "Sear prawns and char siu in smoking oil 60s, splash wine, transfer to bowl."
      },
      {
        "step": 2,
        "title": "SCRAMBLE EGGS & ADD RICE (THE GOLDEN WRAP)",
        "whatYouNeed": [
          "Wok",
          "2 tbsp oil",
          "Whisked eggs",
          "Chilled separated rice",
          "Scallion whites"
        ],
        "description": "Add remaining 2 tbsp oil to the blazing wok. Toss in scallion whites for 5 seconds. Pour in whisked eggs. As soon as the bottom edges set (after just 5 seconds, while top is still completely liquid), dump the rice directly on top of the soft eggs. Immediately use your wok spatula to press, break, and toss the rice into the soft curds.",
        "howToDoIt": "Dumping cold rice onto half-cooked liquid eggs coats each cold rice grain in a micro-film of egg custard that cooks onto the grain (\"Golden Wrapped Silver\").",
        "heat": "High Heat",
        "duration": 3,
        "visualCues": "Bright yellow eggs blend seamlessly around individual rice grains; no large solid egg pancakes form.",
        "hear": "Frenzied bubbling sizzle as cold rice hits hot egg.",
        "smell": "Toasted egg, sweet scallion, and nutty rice.",
        "textureCheck": "Every rice grain separates and glistens yellow.",
        "whatShouldThisLookLike": "Fluffy golden-flecked rice grains tumbling freely.",
        "tip": "Use the back of the spatula to press down gently on any remaining rice clumps against the hot metal.",
        "commonMistake": "Cooking eggs solid into a dry omelette before adding rice, which results in dull white rice with chunks of rubbery egg.",
        "moveOnWhen": "Rice is separated, golden, and tumbling.",
        "quickInstructions": "Pour eggs, add rice immediately while egg is runny, toss vigorously to coat grains."
      },
      {
        "step": 3,
        "title": "THE WOK HEI TOSS & DANCING GRAINS",
        "whatYouNeed": [
          "Wok spatula",
          "Salt",
          "White pepper"
        ],
        "description": "Keep burner at maximum heat. Toss the rice continuously using an undulating wrist motion, scooping from the bottom, pushing forward, and flipping rice up against the far curved lip of the wok. Season with 1 tsp salt and 1/2 tsp white pepper. Continue tossing vigorously for 3 minutes until rice grains begin to visibly pop and jump (\"dance\") off the wok bottom.",
        "howToDoIt": "Dancing grains are the physical indicator that all surface moisture has vanished and grains are toasting individually.",
        "heat": "Maximum High Heat",
        "duration": 3,
        "visualCues": "Rice grains separate completely and bounce off the hot metal; wisps of fragrant smoke billow.",
        "hear": "Rhythmic popping sound like miniature popcorn popping.",
        "smell": "Intensely smoky, toasted wok hei aroma.",
        "textureCheck": "Dry, light, and springy.",
        "whatShouldThisLookLike": "Light, airy rice grains flying through the air without clumping.",
        "tip": "Keep the wok moving constantly so grains don't scorch black on the bottom.",
        "commonMistake": "Turning heat down to medium out of fear — results in greasy, heavy steamed rice.",
        "moveOnWhen": "Rice grains are popping and infused with smoke.",
        "quickInstructions": "Toss vigorously over max heat for 3 mins with salt and pepper until grains pop."
      },
      {
        "step": 4,
        "title": "RECOMBINE PROTEINS & WOK-EDGE SOY SAUCE",
        "whatYouNeed": [
          "Seared prawns & pork",
          "Thawed green peas",
          "1 tbsp light soy sauce"
        ],
        "description": "Dump the cooked prawns, char siu, and green peas into the rice. Toss for 1 minute to heat through. Drizzle 1 tbsp light soy sauce strictly along the highest exposed metal rim of the wok (NOT directly onto the rice). The sauce will instantly sizzle, caramelize, and atomize into vapor as it trickles down into the rice. Toss furiously to distribute.",
        "howToDoIt": "Drizzling sauce on the red-hot metal rim atomizes the soy sugars into smoky caramel vapor without wetting the rice grains.",
        "heat": "Maximum High Heat",
        "duration": 2,
        "visualCues": "Vapor explodes from the wok rim; rice takes on a faint golden amber tan.",
        "hear": "Fierce hiss as soy sauce contacts 250°C iron.",
        "smell": "Intoxicating caramelized soy sauce aroma.",
        "textureCheck": "Uniformly dry, fluffy, and light.",
        "whatShouldThisLookLike": "Colorful mosaic of golden rice, green peas, pink shrimp, and red pork.",
        "tip": "Never pour liquid soy directly onto the center of fried rice or it will turn soggy and brown.",
        "commonMistake": "Dousing rice in dark soy sauce until it turns into a wet brown sludge.",
        "moveOnWhen": "Soy sauce is fully vaporized and absorbed.",
        "quickInstructions": "Add meat and peas; drizzle soy sauce around hot wok rim, toss 1 min."
      },
      {
        "step": 5,
        "title": "FINISH WITH SCALLION GREENS & SERVE",
        "whatYouNeed": [
          "Scallion greens",
          "1 tsp sesame oil",
          "Serving bowl"
        ],
        "description": "Toss in scallion greens and drizzle 1 tsp sesame oil. Give two final tosses. Turn off heat. Spoon fried rice into a rounded rice bowl, pack gently, and invert onto a flat platter to form a pristine golden dome.",
        "howToDoIt": "Residual heat wilts scallion greens in 5 seconds while preserving their brilliant jade-green crunch.",
        "heat": "Off Heat",
        "duration": 1,
        "visualCues": "Gleaming, domed presentation dotted with vibrant green scallions.",
        "smell": "Toasted sesame, sweet scallion, and smoky wok hei.",
        "textureCheck": "Every single grain of rice is separate, light, and chewy.",
        "whatShouldThisLookLike": "Flawless restaurant-style dome of Yangzhou fried rice.",
        "tip": "Inverting a packed bowl creates that classic Chinese banqueting presentation.",
        "commonMistake": "Overcooking scallions on heat until they turn yellow and slimy.",
        "moveOnWhen": "Domed and served immediately.",
        "quickInstructions": "Toss in scallion greens and sesame oil off heat; pack into bowl and invert onto plate."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Rice was wet, mushy, and sticky.",
        "remedy": "Freshly cooked warm rice was used. Always use cold day-old rice that has rested in the fridge uncovered."
      },
      {
        "mistake": "Rice stuck like cement to the wok.",
        "remedy": "Wok was not hot enough or unseasoned. Heat wok until smoking hot before adding oil."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Rice feels greasy in the mouth",
        "whatHappened": "Too much oil was used or heat was too low.",
        "whyItHappened": "Cold grains absorbed oil instead of flash-frying.",
        "whatToDoNow": "Turn heat to absolute maximum and toss continuously for 2 minutes to cook off oil.",
        "howToPrevent": "Measure oil accurately (3 tbsp total for 4 cups rice) and keep heat blazing."
      }
    ],
    "substitutions": [
      {
        "original": "Char Siu pork",
        "substitute": "Chinese lap cheong sausage, diced ham, or smoked bacon",
        "notes": "Lap cheong sweet sausage is a beloved classic home-style variation."
      },
      {
        "original": "Tiger prawns",
        "substitute": "Diced chicken breast or diced firm baked tofu",
        "notes": "Chicken fried rice is universally popular."
      }
    ],
    "safetyNotes": [
      "Day-old rice must be cooled quickly and kept refrigerated below 4°C to prevent Bacillus cereus bacteria."
    ],
    "servingGuide": {
      "restingTime": "Serve immediately.",
      "garnishing": "Finely sliced scallion greens and white pepper.",
      "plating": "Inverted round dome on a wide porcelain plate.",
      "temperature": "Piping hot.",
      "accompaniments": "Clear chicken broth with wontons, chili garlic oil, and Chinese pickled cucumbers."
    }
  },
  "chow-mein": {
    "id": "chow-mein",
    "name": "Cantonese Crispy Pan-Fried Chow Mein",
    "cuisine": "Chinese",
    "region": "China (Guangdong / Hong Kong)",
    "servings": 4,
    "prepTime": 20,
    "cookTime": 15,
    "difficulty": "Medium",
    "overview": {
      "summary": "Hong Kong's premier noodle masterwork: fresh thin wonton egg noodles boiled and pan-fried in a hot wok into a golden, crackling two-sided crispy nest (Liangmian Huang), topped with a savory, glossy velvet stir-fry of sliced chicken, bok choy, shiitake mushrooms, and bean sprouts in a rich oyster-soy gravy that slowly softens the center while leaving the perimeter shatteringly crisp.",
      "appearance": "A golden, crispy disc of intertwined pan-fried noodles blanketed by a lustrous stir-fry of sliced velvet chicken, green baby bok choy, brown shiitake, and bean sprouts.",
      "texture": "The ultimate textural contrast: shatteringly crisp noodles around the edge, chewy savory noodles in the sauce-soaked center, tender velvety chicken, and crunchy vegetables.",
      "flavor": "Deep umami oyster sauce, savory soy, nutty sesame, toasted egg noodles, and sweet bok choy.",
      "restingTimeMinutes": 2
    },
    "equipment": [
      {
        "name": "14-inch seasoned carbon steel wok or heavy non-stick skillet",
        "purpose": "For shallow-frying the noodle cake to uniform golden crispness."
      },
      {
        "name": "Colander and clean tea towel",
        "purpose": "Drains and dries boiled noodles thoroughly before frying."
      },
      {
        "name": "Wok spatula and tongs",
        "purpose": "Flips the round noodle nest intact."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Boil 300g fresh thin wonton noodles for 60 seconds; drain, rinse in cold water, and toss with 1 tsp sesame oil; spread on a towel to air-dry 15 minutes.",
        "durationMinutes": 20
      },
      {
        "task": "Thinly slice 250g chicken breast into 3mm bite-sized pieces; velvet with 1 tbsp soy sauce, 1 tbsp Shaoxing wine, 1 tsp cornstarch, and 1 tsp oil.",
        "durationMinutes": 10
      },
      {
        "task": "Slice 4 rehydrated shiitake mushrooms, cut 2 heads baby bok choy into quarters, and clean 100g bean sprouts.",
        "durationMinutes": 5
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Drying Boiled Noodles",
        "technique": "Noodles must be completely dry on the surface before pan-frying. If wet noodles hit hot oil, they will steam into a rubbery cake instead of frying into a crackling golden crust."
      },
      {
        "item": "Chicken Velveting (Shang-Jiang)",
        "technique": "Marinating sliced chicken with cornstarch, wine, and a splash of oil seals in natural juices, ensuring lean chicken breast stays silky and meltingly tender when stir-fried."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Fresh thin wonton egg noodles (Chow Mein noodles)",
        "prep": "boiled 1 min, drained & dried",
        "amount": "300g",
        "metric": "300g",
        "imperial": "10.5 oz",
        "common": "300g"
      },
      {
        "name": "Boneless skinless chicken breast",
        "prep": "thinly sliced against grain",
        "amount": "250g",
        "metric": "250g",
        "imperial": "9 oz",
        "common": "1/2 lb"
      },
      {
        "name": "Baby bok choy",
        "prep": "quartered lengthwise",
        "amount": "2 heads",
        "metric": "150g",
        "imperial": "5.3 oz",
        "common": "2 heads"
      },
      {
        "name": "Dried shiitake mushrooms",
        "prep": "rehydrated in hot water & sliced",
        "amount": "4 mushrooms",
        "metric": "40g",
        "imperial": "1.4 oz",
        "common": "4 caps"
      },
      {
        "name": "Fresh bean sprouts",
        "prep": "tails pinched off",
        "amount": "100g",
        "metric": "100g",
        "imperial": "3.5 oz",
        "common": "1 cup"
      },
      {
        "name": "Fresh ginger & garlic",
        "prep": "sliced thinly",
        "amount": "2 tbsp",
        "metric": "20g",
        "imperial": "0.7 oz",
        "common": "2 tbsp"
      },
      {
        "name": "Premium oyster sauce (Lee Kum Kee)",
        "prep": "sauce backbone",
        "amount": "2 tbsp",
        "metric": "30ml",
        "imperial": "1 fl oz",
        "common": "2 tbsp"
      },
      {
        "name": "Light soy sauce",
        "prep": "savory depth",
        "amount": "1 tbsp",
        "metric": "15ml",
        "imperial": "0.5 fl oz",
        "common": "1 tbsp"
      },
      {
        "name": "Dark soy sauce",
        "prep": "adds rich amber color",
        "amount": "1 tsp",
        "metric": "5ml",
        "imperial": "0.17 fl oz",
        "common": "1 tsp"
      },
      {
        "name": "Rich chicken broth",
        "prep": "gravy base",
        "amount": "250ml",
        "metric": "250ml",
        "imperial": "8.5 fl oz",
        "common": "1 cup"
      },
      {
        "name": "Cornstarch slurry",
        "prep": "1.5 tbsp cornstarch + 2 tbsp cold water",
        "amount": "3.5 tbsp",
        "metric": "50ml",
        "imperial": "1.7 fl oz",
        "common": "mixed"
      },
      {
        "name": "Neutral cooking oil",
        "prep": "divided for noodles & stir-fry",
        "amount": "4 tbsp",
        "metric": "60ml",
        "imperial": "2 fl oz",
        "common": "4 tbsp"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "PAN-FRY THE CRISPY NOODLE NEST (LIANGMIAN HUANG)",
        "whatYouNeed": [
          "Dry boiled noodles",
          "2 tbsp oil",
          "Wok or wide skillet"
        ],
        "description": "Heat 2 tbsp oil in wok over medium heat. Swirl to coat bottom and sides. Spread noodles across the pan in an even circular nest about 2cm thick. Cook undisturbed for 5 minutes over medium-low heat. Nudge pan gently until the noodle cake rotates freely as one solid disc. Check underside — when deep golden and crisp, invert onto a plate, add 1 tbsp oil to pan, slide noodle cake back in, and fry second side for 4 minutes.",
        "howToDoIt": "Gentle, even medium-low shallow-frying dehydrates the noodle exterior into a rigid, crackling golden mesh while preserving a soft chewy interior.",
        "heat": "Medium-Low Heat",
        "duration": 9,
        "visualCues": "Noodle cake turns deep golden-amber on both sides; edges are brittle and crackling.",
        "hear": "Steady, crackling shallow-fry sizzle.",
        "smell": "Rich toasted egg noodle aroma.",
        "textureCheck": "Rigid, golden, shatteringly crisp cake.",
        "whatShouldThisLookLike": "A giant golden woven bird's nest of crispy noodles.",
        "tip": "Don't press down hard or poke at it; let the noodles interlock naturally as they fry.",
        "commonMistake": "Flipping too early before the bottom noodles lock into a rigid crust, causing the cake to crumble.",
        "moveOnWhen": "Both sides are golden, crisp, and transferred to a serving platter.",
        "quickInstructions": "Shallow-fry noodles into a round cake for 5 mins per side until golden and crispy; plate."
      },
      {
        "step": 2,
        "title": "VELVET SEAR THE CHICKEN",
        "whatYouNeed": [
          "Wok",
          "1 tbsp oil",
          "Marinated chicken slices"
        ],
        "description": "Heat 1 tbsp oil in the wok over high heat. Add marinated chicken slices in a single layer. Sear for 90 seconds without moving to develop a light golden crust. Toss and stir-fry for 1 more minute until 90% cooked. Transfer to a bowl.",
        "howToDoIt": "The cornstarch coating traps juices inside the meat fibers, ensuring tender, velvety poultry.",
        "heat": "High Heat",
        "duration": 3,
        "visualCues": "Chicken turns opaque white with light golden edges.",
        "smell": "Ginger, garlic, and seared poultry.",
        "textureCheck": "Extremely tender and succulent.",
        "whatShouldThisLookLike": "Velvety, tender chicken strips.",
        "tip": "Spread chicken out so it sears rather than steaming in a clump.",
        "commonMistake": "Overcooking chicken breast on high heat until it turns chalky and dry.",
        "moveOnWhen": "Chicken is opaque and transferred to bowl.",
        "quickInstructions": "Stir-fry marinated chicken over high heat for 2 mins; transfer to bowl."
      },
      {
        "step": 3,
        "title": "STIR-FRY AROMATICS & VEGETABLES",
        "whatYouNeed": [
          "Sliced ginger and garlic",
          "Shiitake mushrooms",
          "Bok choy quarters",
          "1 tsp oil"
        ],
        "description": "Add 1 tsp oil to wok over high heat. Add ginger and garlic slices; stir-fry for 15 seconds until fragrant. Toss in sliced shiitake mushrooms and quartered bok choy. Stir-fry for 1 minute, tossing vigorously until bok choy turns brilliant emerald green.",
        "howToDoIt": "Stir-frying mushrooms first releases their earthy umami guanylate compounds into the oil.",
        "heat": "High Heat",
        "duration": 2,
        "visualCues": "Bok choy leaves turn bright glossy green while stems remain crisp.",
        "smell": "Pungent garlic, sweet ginger, and earthy shiitake.",
        "textureCheck": "Crisp-tender vegetables.",
        "whatShouldThisLookLike": "Vibrant green bok choy and brown mushrooms sizzling in the wok.",
        "tip": "Do not overcook bok choy here; it will finish cooking in the simmering gravy.",
        "commonMistake": "Adding bean sprouts now — bean sprouts must be added in the final 30 seconds or they turn limp and watery.",
        "moveOnWhen": "Bok choy is bright green and crisp.",
        "quickInstructions": "Stir-fry ginger, garlic, mushrooms, and bok choy for 1 min over high heat."
      },
      {
        "step": 4,
        "title": "SIMMER SAUCE & THICKEN TO GLOSS",
        "whatYouNeed": [
          "250ml chicken broth",
          "2 tbsp oyster sauce",
          "1 tbsp light soy",
          "1 tsp dark soy",
          "Cornstarch slurry",
          "Bean sprouts",
          "Cooked chicken"
        ],
        "description": "Pour in chicken broth, oyster sauce, light soy sauce, dark soy sauce, and 1/2 tsp sugar. Bring to a rapid boil. Return chicken to the wok. Add bean sprouts. Stir cornstarch slurry to recombine, then drizzle into the bubbling sauce in a steady stream, stirring constantly. Simmer for 30 seconds until sauce transforms into a clear, glossy, luxurious gravy.",
        "howToDoIt": "Boiling activates cornstarch molecules, thickening the liquid into a mirror-like velvet glaze.",
        "heat": "High Heat",
        "duration": 2,
        "visualCues": "Sauce thickens instantly, bubbling into a rich mahogany glaze that coats the vegetables.",
        "hear": "Rapid bubbling and boiling.",
        "smell": "Rich savory oyster sauce and chicken broth.",
        "textureCheck": "Sauce coats the back of a spoon smoothly.",
        "whatShouldThisLookLike": "Glossy, savory stir-fry in rich amber gravy.",
        "tip": "Always stir cornstarch slurry right before pouring — starch settles like cement at the bottom.",
        "commonMistake": "Dumping raw starch powder directly into hot broth, creating gummy white lumps.",
        "moveOnWhen": "Gravy is thick, glossy, and clear.",
        "quickInstructions": "Add broth, oyster and soy sauces; add chicken and sprouts; stir in slurry until gravy thickens."
      },
      {
        "step": 5,
        "title": "POUR OVER CRISPY NOODLES & SERVE",
        "whatYouNeed": [
          "Crispy noodle nest on platter",
          "Hot savory stir-fry and gravy",
          "Drizzle of sesame oil"
        ],
        "description": "Drizzle 1 tsp sesame oil over the hot stir-fry. Immediately ladle the hot chicken, vegetables, and lustrous gravy over the CENTER of the crispy noodle nest, leaving the outer 3cm perimeter of golden crispy noodles exposed.",
        "howToDoIt": "Leaving the outer rim bare preserves maximum crunch while the hot gravy softens the center noodles for eating.",
        "heat": "Off Heat",
        "duration": 1,
        "visualCues": "Sizzling hot, glossy stir-fry cascading over a golden crown of crackling noodles.",
        "hear": "Crackling and hissing as hot gravy touches the hot crispy noodles.",
        "smell": "Incredible aroma of oyster sauce, toasted sesame, and fried noodles.",
        "textureCheck": "Crisp exterior, tender saucy center.",
        "whatShouldThisLookLike": "Showstopping Hong Kong banquet-style crispy chow mein platter.",
        "tip": "Eat immediately to experience the contrast before the noodles soften completely.",
        "commonMistake": "Smothering the entire platter in sauce, destroying all crispy texture.",
        "moveOnWhen": "Plated and served immediately.",
        "quickInstructions": "Ladle hot stir-fry over center of crispy noodle cake, keeping edges crisp."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Noodles were soggy instead of crispy.",
        "remedy": "Noodles were pan-fried while still wet from boiling. Always let boiled noodles dry completely on a towel."
      },
      {
        "mistake": "Sauce was watery and ran off the noodles.",
        "remedy": "Not enough cornstarch slurry was used. Gravy must be thick enough to cling to noodles."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Noodle cake broke into pieces during flipping",
        "whatHappened": "Flipped before the bottom formed a solid cohesive crust.",
        "whyItHappened": "Noodles need 4–5 minutes on medium-low for starches to interlock.",
        "whatToDoNow": "Press pieces back together into a disc; pour sauce over the top — no one will notice.",
        "howToPrevent": "Invert onto a flat plate first, then slide back into pan rather than flipping in mid-air."
      }
    ],
    "substitutions": [
      {
        "original": "Chicken breast",
        "substitute": "Thinly sliced beef flank, peeled prawns, or fried firm tofu",
        "notes": "Seafood Chow Mein and Beef Chow Mein are classic Cantonese variations."
      },
      {
        "original": "Fresh wonton noodles",
        "substitute": "Dry ramen noodles (boiled 2 mins and dried)",
        "notes": "Works well as an accessible pantry substitute."
      }
    ],
    "safetyNotes": [
      "Chicken must reach 74°C internal temperature before serving."
    ],
    "servingGuide": {
      "restingTime": "Serve immediately.",
      "garnishing": "White pepper and red chili slices.",
      "plating": "Wide oval banqueting platter.",
      "temperature": "Piping hot and crackling.",
      "accompaniments": "Chiu Chow chili oil, red Chinese vinegar, and hot Jasmine tea."
    }
  },
  "peking-duck": {
    "id": "peking-duck",
    "name": "Authentic Crispy Peking Roast Duck (Beijing Kaoya)",
    "cuisine": "Chinese",
    "region": "Northern China (Beijing)",
    "servings": 4,
    "prepTime": 40,
    "cookTime": 75,
    "difficulty": "Hard",
    "overview": {
      "summary": "The imperial jewel of Chinese gastronomy: whole duck air-dried, scalded with boiling water, glazed with a maltose-vinegar syrup, and roasted to render all subterranean fat, yielding paper-thin, mahogany-lacquered, shatteringly crisp skin, carved tableside and wrapped in paper-thin Mandarin pancakes (Chunbing) with scallion brushes, cucumber matchsticks, and sweet bean sauce (Tianmianjiang).",
      "appearance": "A glistening, whole mahogany-lacquered duck with mirror-sheen crackling skin, carved into thin slices of crispy skin and succulent breast meat alongside translucent steamed pancakes.",
      "texture": "Skin that shatters like glass under the teeth, melting fat, succulent tender duck meat, soft chewy steamed pancake, and crunchy fresh cucumber.",
      "flavor": "Deeply rich roasted poultry umami, sweet maltose glaze, earthy fermented sweet bean sauce, and sharp fresh scallions.",
      "restingTimeMinutes": 10
    },
    "equipment": [
      {
        "name": "Vertical roasting rack (or beer can stand) in a roasting pan",
        "purpose": "Allows hot convective air to circulate 360° while rendered duck fat drains away."
      },
      {
        "name": "Small fan or well-ventilated refrigerator",
        "purpose": "For overnight air-drying of the skin (the #1 secret to crispy duck skin)."
      },
      {
        "name": "Large ladle and saucepan",
        "purpose": "For ladling boiling water and maltose glaze over the whole duck."
      },
      {
        "name": "Bamboo steamer",
        "purpose": "For steaming Mandarin pancakes."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Clean and pat a 2.2kg whole Pekin/Long Island duck bone-dry; trim excess neck skin and wing tips.",
        "durationMinutes": 10
      },
      {
        "task": "Prepare maltose glaze: dissolve 3 tbsp maltose (or honey), 2 tbsp red rice vinegar, and 1 tbsp Shaoxing wine in 200ml warm water.",
        "durationMinutes": 5
      },
      {
        "task": "Air-dry the scalded, glazed duck uncovered on a wire rack in the refrigerator for 24 hours until skin feels like dry parchment paper.",
        "durationMinutes": 1440
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Skin Scalding & Tightening (Tang-Pi)",
        "technique": "Ladle 2 liters of rolling boiling water all over the raw duck skin. The heat instantly contracts collagen fibers, pulling the skin taut and opening pores so subterranean fat renders effortlessly during roasting."
      },
      {
        "item": "Maltose Glazing (Gua-Tang)",
        "technique": "Brush hot maltose-vinegar syrup across the taut skin. Maltose is a complex sugar that caramelizes slowly at high roasting heat without burning bitter, producing the legendary mahogany glass lacquer."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Whole Pekin duck",
        "prep": "approx 2.2kg, cleaned & air-dried",
        "amount": "1 duck",
        "metric": "2200g",
        "imperial": "5 lbs",
        "common": "1 whole duck"
      },
      {
        "name": "Maltose (or pure honey)",
        "prep": "dissolved in warm water for glaze",
        "amount": "3 tbsp",
        "metric": "60g",
        "imperial": "2.1 oz",
        "common": "3 tbsp"
      },
      {
        "name": "Chinese red rice vinegar or white vinegar",
        "prep": "breaks down surface fat",
        "amount": "2 tbsp",
        "metric": "30ml",
        "imperial": "1 fl oz",
        "common": "2 tbsp"
      },
      {
        "name": "Shaoxing rice wine",
        "prep": "for glaze and cavity rub",
        "amount": "2 tbsp",
        "metric": "30ml",
        "imperial": "1 fl oz",
        "common": "2 tbsp"
      },
      {
        "name": "Chinese five-spice powder",
        "prep": "rubbed inside the cavity only",
        "amount": "1 tsp",
        "metric": "3g",
        "imperial": "0.1 oz",
        "common": "1 tsp"
      },
      {
        "name": "Coarse sea salt",
        "prep": "divided (cavity rub)",
        "amount": "1 tbsp",
        "metric": "15g",
        "imperial": "0.5 oz",
        "common": "1 tbsp"
      },
      {
        "name": "Mandarin pancakes (Chunbing)",
        "prep": "thin steamed flour pancakes",
        "amount": "16 pancakes",
        "metric": "16 pieces",
        "imperial": "16 pieces",
        "common": "16 pieces"
      },
      {
        "name": "Tianmianjiang (Sweet Bean Sauce) or Hoisin",
        "prep": "for spreading",
        "amount": "100g",
        "metric": "100g",
        "imperial": "3.5 oz",
        "common": "1/2 cup"
      },
      {
        "name": "Scallions / Green onions",
        "prep": "cut into 6cm lengths, ends frayed into brushes",
        "amount": "6 stalks",
        "metric": "80g",
        "imperial": "2.8 oz",
        "common": "1 cup strips"
      },
      {
        "name": "English cucumber",
        "prep": "seeded and cut into 6cm matchsticks",
        "amount": "1 cucumber",
        "metric": "150g",
        "imperial": "5.3 oz",
        "common": "1 cup matchsticks"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "SCALD & GLAZE DUCK (24H ADVANCE)",
        "whatYouNeed": [
          "Whole duck",
          "2L boiling water",
          "Maltose-vinegar glaze",
          "Large roasting pan with wire rack"
        ],
        "description": "Rub interior cavity with 1 tbsp salt, five-spice powder, and 1 tbsp Shaoxing wine (leave exterior skin completely unseasoned). Suspend duck over a sink. Ladle 2 liters of boiling water repeatedly over the skin. The skin will visibly contract and turn taut like a drum. Pat dry. Brush two generous coats of warm maltose-vinegar glaze over the entire exterior.",
        "howToDoIt": "Boiling water tightens skin; vinegar lowers surface pH to ensure crispness; maltose caramelizes into an amber glass shell.",
        "heat": "Boiling water",
        "duration": 10,
        "visualCues": "Skin shrinks tight against the flesh and takes on a glistening golden sheen.",
        "smell": "Sweet maltose and vinegar aroma.",
        "textureCheck": "Skin feels smooth and taut.",
        "whatShouldThisLookLike": "Taut, glazed duck drying on a vertical stand.",
        "tip": "Never rub salt on the exterior skin! Salt draws out moisture and prevents skin from crisping.",
        "commonMistake": "Skipping the scalding step, which leaves skin loose, flabby, and rubbery.",
        "moveOnWhen": "Duck is glazed completely.",
        "quickInstructions": "Season cavity, scald exterior with 2L boiling water, brush with maltose glaze."
      },
      {
        "step": 2,
        "title": "THE 24-HOUR AIR-DRYING STAGE",
        "whatYouNeed": [
          "Wired roasting rack",
          "Refrigerator or cold fan"
        ],
        "description": "Place glazed duck upright or on a wire rack in the refrigerator completely uncovered for 24 hours. Cold circulating air evaporates all surface moisture until the skin feels like dry, stiff parchment paper.",
        "howToDoIt": "Water is the enemy of crispness. Roasting a wet duck steams the skin; roasting a bone-dry skin fries it in its own rendering fat.",
        "heat": "Cold refrigeration (4°C / 39°F)",
        "duration": 1440,
        "visualCues": "Skin turns dark translucent amber and feels stiff, dry, and leathery like parchment paper.",
        "textureCheck": "Completely dry and stiff to the touch.",
        "whatShouldThisLookLike": "A dried, parchment-like glazed duck.",
        "tip": "If pressed for time, use a cold hair dryer fan for 3 hours to accelerate drying.",
        "commonMistake": "Roasting while skin is still damp — skin will come out soft and chewy.",
        "moveOnWhen": "Skin feels like dry paper.",
        "quickInstructions": "Refrigerate uncovered for 24 hours until skin feels like dry parchment."
      },
      {
        "step": 3,
        "title": "ROAST & RENDER FAT TO CRACKLING PERFECTION",
        "whatYouNeed": [
          "Preheated oven (180°C / 350°F)",
          "Roasting pan with water in bottom",
          "Roasting rack"
        ],
        "description": "Pour 2 cups of water into the bottom of the roasting pan (catches dripping fat and prevents smoking). Place duck breast-side up on the roasting rack. Roast at 180°C (350°F) for 45 minutes. Rotate pan 180 degrees. Increase temperature to 200°C (400°F) and roast for another 25–30 minutes until skin is mahogany-lacquered and blistered crisp.",
        "howToDoIt": "Initial heat renders the thick layer of fat beneath the skin; high heat finish crisps the dehydrated skin into a fragile, crackling shell.",
        "heat": "180°C (350°F) for 45 mins, then 200°C (400°F) for 30 mins",
        "duration": 75,
        "visualCues": "Skin turns deep mahogany-bronze, puffed with microscopic crisp blisters; fat renders freely into pan.",
        "hear": "Steady, crackling sizzling of rendering duck fat.",
        "smell": "Heavenly aroma of rich roasted duck and sweet maltose.",
        "textureCheck": "Tapping breast skin with knife yields a hard hollow snap.",
        "whatShouldThisLookLike": "A gorgeous, gleaming mahogany-roasted Peking duck.",
        "tip": "Cover wingtips with foil if they brown too quickly during roasting.",
        "commonMistake": "Not putting water in the drip pan — rendered duck fat will burn and fill your kitchen with smoke.",
        "moveOnWhen": "Skin is blistered crisp and duck reaches 75°C (167°F) internal temperature.",
        "quickInstructions": "Roast breast-up at 180°C for 45 mins, then 200°C for 25-30 mins until crackling mahogany."
      },
      {
        "step": 4,
        "title": "REST & THE IMPERIAL TABLESIDE CARVE",
        "whatYouNeed": [
          "Sharp slicing knife",
          "Carving board with juice groove"
        ],
        "description": "Rest duck undisturbed for 10 minutes so juices redistribute. Using a razor-sharp knife held at a 30-degree angle, carve thin oval slices of pure crispy skin from the breast (the prized crispy skin course). Next, carve slices combining crispy skin with a thin layer of juicy breast meat.",
        "howToDoIt": "Resting allows meat to reabsorb juices while keeping the exterior skin dry and shatteringly crisp.",
        "heat": "Off Heat",
        "duration": 10,
        "visualCues": "Crispy skin shatters cleanly under knife without tearing; meat underneath is steaming and succulent.",
        "textureCheck": "Skin is glass-brittle; meat is ultra-tender.",
        "whatShouldThisLookLike": "Shingles of gleaming mahogany skin and succulent sliced duck meat.",
        "tip": "Traditionally, the first slices of pure crispy skin are dipped directly into white granulated sugar to savor on the tongue.",
        "commonMistake": "Using a dull knife that crushes the crispy skin and tears the delicate breast meat.",
        "moveOnWhen": "Duck is sliced into elegant shingles.",
        "quickInstructions": "Rest 10 mins, slice pure crispy skin from breast, then slice meat with skin."
      },
      {
        "step": 5,
        "title": "STEAM PANCAKES & ASSEMBLE ROLLS",
        "whatYouNeed": [
          "16 Mandarin pancakes",
          "Bamboo steamer",
          "Tianmianjiang sauce",
          "Scallion brushes",
          "Cucumber matchsticks"
        ],
        "description": "Steam Mandarin pancakes in bamboo steamer for 4 minutes until warm and supple. To eat: Lay a warm pancake flat on a plate. Dip a scallion brush into sweet bean sauce and brush across the center of the pancake. Lay 2 slices of crispy duck, 2 cucumber matchsticks, and the scallion on top. Fold bottom edge up, then fold left and right sides over like an open envelope. Eat with hands!",
        "howToDoIt": "The warm, chewy pancake cradles the contrast between shatteringly crisp duck skin, sweet sauce, and cool refreshing cucumber.",
        "heat": "Medium Steam 4 mins",
        "duration": 5,
        "visualCues": "Translucent steamed pancake wrapped around mahogany duck and jade-green vegetables.",
        "smell": "Sweet bean sauce, scallion, and roast duck.",
        "textureCheck": "Soft chewy wrapper, shatteringly crisp skin, and crunchy cucumber.",
        "whatShouldThisLookLike": "Exquisite, hand-held imperial Peking duck roll.",
        "tip": "Eat in one or two bites so the skin stays crispy inside the warm pancake.",
        "commonMistake": "Overfilling the delicate pancake, causing it to tear open.",
        "moveOnWhen": "Rolled and enjoyed.",
        "quickInstructions": "Steam pancakes 4 mins; spread sweet sauce, add duck, cucumber, and scallion; fold into roll."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Duck skin was rubbery and chewy.",
        "remedy": "Skin was not air-dried long enough. 24 hours of uncovered refrigerator drying is mandatory for restaurant crispness."
      },
      {
        "mistake": "Skin burned black before meat cooked.",
        "remedy": "Oven was too hot early on. Start at 180°C and only raise heat in the final 25 minutes."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Skin lost its crunch while resting",
        "whatHappened": "Moisture from hot meat migrated to the surface.",
        "whyItHappened": "Duck was covered with foil while resting.",
        "whatToDoNow": "Never tent roasted duck with foil! Blast under broiler for 2 minutes to restore crispness.",
        "howToPrevent": "Always rest duck completely uncovered in a warm, dry room."
      }
    ],
    "substitutions": [
      {
        "original": "Tianmianjiang (sweet bean sauce)",
        "substitute": "Hoisin sauce mixed with 1 tsp soy sauce",
        "notes": "Hoisin provides similar sweet, savory fermented depth."
      },
      {
        "original": "Mandarin pancakes (Chunbing)",
        "substitute": "Thin flour tortillas steamed for 2 minutes",
        "notes": "Very good everyday pantry substitute."
      }
    ],
    "safetyNotes": [
      "Duck must reach 74°C (165°F) internal temperature at the thickest part of the thigh."
    ],
    "servingGuide": {
      "restingTime": "Rest 10 minutes uncovered.",
      "garnishing": "Scallion brushes and cucumber matchsticks.",
      "plating": "Carved duck arranged on warm platters alongside steaming bamboo basket of pancakes.",
      "temperature": "Hot and crackling.",
      "accompaniments": "Rich duck bone soup (simmered from the roasted carcass with tofu and Napa cabbage)."
    }
  },
  "kung-pao-chicken": {
    "id": "kung-pao-chicken",
    "name": "Authentic Sichuan Kung Pao Chicken (Gongbao Jiding)",
    "cuisine": "Chinese",
    "region": "China (Sichuan)",
    "servings": 4,
    "prepTime": 20,
    "cookTime": 10,
    "difficulty": "Medium",
    "overview": {
      "summary": "The benchmark of Sichuan wok cookery: tender velvety cubes of chicken thigh flash-fried in a roaring wok with fragrant Sichuan peppercorns, smoky charred Facing Heaven dried chilies (Chao Tian Jiao), crisp fried peanuts, and scallion white rounds in an electrifying sweet-sour-savory \"lychee-flavored\" (Li Zhi Wei) glaze.",
      "appearance": "Glistening, mahogany-glazed chicken cubes intermingled with blackened whole dried chilies, red peppercorns, white scallion rounds, and golden peanuts.",
      "texture": "Juicy, velvety tender chicken thigh, crunchy fried peanuts, and crisp scallions bathed in a clinging, silky glaze.",
      "flavor": "The quintessential Sichuan \"Lychee Flavor\" (Li Zhi Wei): initial sweet-tangy rush followed by savory umami, smoky toasted chili warmth, and buzzing citrusy málà tingle.",
      "restingTimeMinutes": 1
    },
    "equipment": [
      {
        "name": "14-inch carbon steel wok",
        "purpose": "Essential for high-heat rapid searing without losing wok temperature."
      },
      {
        "name": "Wok spatula",
        "purpose": "Keeps ingredients tumbling rapidly through the hot zone."
      },
      {
        "name": "Small prep bowl for sauce (Hula bowl)",
        "purpose": "All sauce ingredients must be pre-mixed before cooking starts."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Cut 450g boneless skinless chicken thighs into uniform 1.5cm cubes.",
        "durationMinutes": 5
      },
      {
        "task": "Marinate chicken: toss with 1 tbsp soy sauce, 1 tbsp Shaoxing wine, 1 tsp cornstarch, 1/2 tsp salt, and 1 tsp oil for 15 minutes.",
        "durationMinutes": 15
      },
      {
        "task": "Snip 15 dried red Sichuan chilies in half; shake out and discard loose seeds.",
        "durationMinutes": 3
      },
      {
        "task": "Mix the \"Lychee Flavor\" sauce: 1.5 tbsp sugar, 1.5 tbsp Chinkiang black vinegar, 1 tbsp light soy sauce, 1 tsp dark soy, 1 tsp cornstarch, and 2 tbsp chicken stock.",
        "durationMinutes": 2
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Lychee Flavor Profile (Li Zhi Wei)",
        "technique": "Authentic Kung Pao is not a burning spicy dish! It is built on \"Li Zhi Wei\" — a delicate balance of sweet sugar and sour Chinkiang vinegar that mimics the sweet-tart flavor of fresh lychee fruit, accented by toasted chilies and Sichuan pepper."
      },
      {
        "item": "Scallion Cutting (Cong Dui)",
        "technique": "Cut thick scallion whites into 1.5cm cylindrical batons (Cong Dui). They should match the exact size of the chicken cubes and become sweet and juicy when wok-seared."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Boneless skinless chicken thighs",
        "prep": "cut into 1.5cm uniform cubes",
        "amount": "450g",
        "metric": "450g",
        "imperial": "1 lb",
        "common": "450g"
      },
      {
        "name": "Roasted unsalted peanuts (skinless)",
        "prep": "golden and crunchy",
        "amount": "80g",
        "metric": "80g",
        "imperial": "2.8 oz",
        "common": "1/2 cup"
      },
      {
        "name": "Whole dried red Sichuan chilies (Facing Heaven)",
        "prep": "snipped in half, seeds shaken out",
        "amount": "15 chilies",
        "metric": "15 pieces",
        "imperial": "15 pieces",
        "common": "1/2 cup"
      },
      {
        "name": "Whole red Sichuan peppercorns (Huajiao)",
        "prep": "cleaned of black seeds",
        "amount": "1 tsp",
        "metric": "3g",
        "imperial": "0.1 oz",
        "common": "1 tsp"
      },
      {
        "name": "Scallion whites",
        "prep": "cut into 1.5cm cylindrical chunks",
        "amount": "4 stalks",
        "metric": "50g",
        "imperial": "1.8 oz",
        "common": "1/2 cup"
      },
      {
        "name": "Fresh garlic & ginger",
        "prep": "thinly sliced into small squares",
        "amount": "2 tbsp",
        "metric": "20g",
        "imperial": "0.7 oz",
        "common": "2 tbsp"
      },
      {
        "name": "Chinkiang black vinegar",
        "prep": "for sweet-sour balance",
        "amount": "1.5 tbsp",
        "metric": "22ml",
        "imperial": "0.75 fl oz",
        "common": "1.5 tbsp"
      },
      {
        "name": "Granulated sugar",
        "prep": "for sweet-sour balance",
        "amount": "1.5 tbsp",
        "metric": "20g",
        "imperial": "0.7 oz",
        "common": "1.5 tbsp"
      },
      {
        "name": "Light soy sauce",
        "prep": "savory umami",
        "amount": "1.5 tbsp",
        "metric": "22ml",
        "imperial": "0.75 fl oz",
        "common": "1.5 tbsp"
      },
      {
        "name": "Dark soy sauce",
        "prep": "for rich mahogany color",
        "amount": "1 tsp",
        "metric": "5ml",
        "imperial": "0.17 fl oz",
        "common": "1 tsp"
      },
      {
        "name": "Cornstarch",
        "prep": "divided (marinade & sauce)",
        "amount": "2 tsp",
        "metric": "6g",
        "imperial": "0.2 oz",
        "common": "2 tsp"
      },
      {
        "name": "Neutral cooking oil (peanut or canola)",
        "prep": "for high heat stir-fry",
        "amount": "3 tbsp",
        "metric": "45ml",
        "imperial": "1.5 fl oz",
        "common": "3 tbsp"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "BLOOM CHILIES & SICHUAN PEPPERCORNS (HULA AROMA)",
        "whatYouNeed": [
          "Wok",
          "3 tbsp oil",
          "Snipped dried chilies",
          "Sichuan peppercorns"
        ],
        "description": "Heat 3 tbsp oil in wok over medium-low heat. Add dried chilies and Sichuan peppercorns. Fry gently for 30–45 seconds, stirring constantly. The chilies will puff up and turn from bright scarlet to a deep, dark purplish-brown (do not let them burn black!).",
        "howToDoIt": "Infusing low-heat oil with dried chilies and peppercorns extracts their capsaicin and sanshool oils, creating the foundational \"Hula\" (toasted chili) flavor.",
        "heat": "Medium-Low Heat",
        "duration": 1,
        "visualCues": "Chilies puff with air and darken to mahogany/purplish-red; fragrant wisps of smoke rise.",
        "smell": "Pungent, smoky toasted chili and citrusy floral Sichuan pepper.",
        "textureCheck": "Chilies become crisp and brittle.",
        "whatShouldThisLookLike": "Darkened, puffed chilies floating in fragrant red oil.",
        "tip": "Keep heat low during this step; dried chilies burn into bitter black ash in 10 seconds if heat is too high.",
        "commonMistake": "Throwing chilies into a smoking hot wok — they will scorch black immediately.",
        "moveOnWhen": "Chilies turn dark purple-red.",
        "quickInstructions": "Fry chilies and peppercorns on medium-low 40s until fragrant and dark mahogany."
      },
      {
        "step": 2,
        "title": "CRANK HEAT & SEAR VELVET CHICKEN CUBES",
        "whatYouNeed": [
          "Marinated chicken cubes"
        ],
        "description": "Crank burner to maximum high heat. Immediately dump the marinated chicken cubes into the wok. Spread quickly across the hot metal. Stir-fry furiously for 2 minutes, breaking up any chicken pieces clinging together, until the meat changes color from pink to white and is 80% cooked.",
        "howToDoIt": "High heat flash-cooks the chicken cubes while the cornstarch marinade locks in internal moisture.",
        "heat": "Maximum High Heat",
        "duration": 2,
        "visualCues": "Chicken turns opaque white and edges pick up amber color from the chili oil.",
        "hear": "Intense, roaring sizzle.",
        "smell": "Searing chicken and toasted chili fragrance.",
        "textureCheck": "Plump and springy chicken cubes.",
        "whatShouldThisLookLike": "Opaque chicken cubes tumbling in fragrant red oil.",
        "tip": "Use your spatula to slice between chicken pieces to keep every cube distinct.",
        "commonMistake": "Using chicken breast — breast dries out rapidly; authentic Gongbao demands juicy chicken thigh.",
        "moveOnWhen": "Chicken is opaque and firm.",
        "quickInstructions": "Turn heat to maximum, add chicken, stir-fry 2 mins until opaque."
      },
      {
        "step": 3,
        "title": "TOSS IN AROMATICS & SCALLION ROUNDS",
        "whatYouNeed": [
          "Sliced ginger and garlic",
          "Scallion white rounds (Cong Dui)"
        ],
        "description": "Push chicken slightly to the sides. Add sliced ginger, garlic, and the scallion white chunks directly into the center of the wok. Stir-fry for 30 seconds until the garlic is fragrant and scallion whites begin to soften slightly.",
        "howToDoIt": "Adding aromatics after the chicken prevents garlic and ginger from scorching during the initial searing phase.",
        "heat": "High Heat",
        "duration": 1,
        "visualCues": "Scallion whites glisten with oil; garlic turns fragrant and translucent.",
        "smell": "Intense burst of garlic, ginger, and sweet allium aromatics.",
        "textureCheck": "Scallions remain crisp-tender.",
        "whatShouldThisLookLike": "Chicken tossed with scallion rounds, garlic, and ginger.",
        "tip": "Keep the wok moving continuously to distribute heat evenly.",
        "commonMistake": "Overcooking scallions until mushy — they should retain an audible crunch.",
        "moveOnWhen": "Garlic and ginger are aromatic.",
        "quickInstructions": "Add ginger, garlic, and scallion rounds; toss 30s over high heat."
      },
      {
        "step": 4,
        "title": "POUR LYCHEE-FLAVOR GLAZE & REDUCE TO GLOSS",
        "whatYouNeed": [
          "Pre-mixed sauce bowl (vinegar, sugar, soy, stock, cornstarch)"
        ],
        "description": "Give the pre-mixed sauce a quick stir to lift any settled cornstarch. Pour the sauce directly into the center of the roaring hot wok. Stir-fry vigorously for 30 seconds. The sauce will bubble furiously and reduce into a lustrous, clear, mahogany glaze that clings tightly to every piece of chicken.",
        "howToDoIt": "Rapid boiling activates the cornstarch instantly, emulsifying with the chili oil into a clinging lacquer without any soupy puddles.",
        "heat": "High Heat",
        "duration": 1,
        "visualCues": "Sauce thickens into a glistening, mirror-like mahogany coating; no watery liquid pools in the pan.",
        "hear": "Brisk, bubbling boil.",
        "smell": "Intoxicating sweet-and-sour vinegar aroma tempered by toasted chilies.",
        "textureCheck": "Silky, clingy glaze.",
        "whatShouldThisLookLike": "Glistening mahogany chicken cubes coated in sticky sauce.",
        "tip": "Stir vigorously so the glaze coats all ingredients uniformly before it sets.",
        "commonMistake": "Adding too much liquid — authentic Kung Pao should have a dry, clinging glaze, not a soupy curry.",
        "moveOnWhen": "Glaze is thick, glossy, and clinging.",
        "quickInstructions": "Pour in stirred sauce; toss 30s until thickened into a glossy glaze."
      },
      {
        "step": 5,
        "title": "FOLD IN PEANUTS & SERVE IMMEDIATELY",
        "whatYouNeed": [
          "80g roasted peanuts",
          "Serving plate"
        ],
        "description": "Toss in the roasted peanuts. Give two or three final tosses to distribute peanuts through the chicken. TURN OFF HEAT IMMEDIATELY. Transfer to a warm serving dish and serve piping hot.",
        "howToDoIt": "Peanuts must be added in the final 5 seconds off heat so they remain shatteringly crisp and nutty without softening in the sauce.",
        "heat": "Off Heat",
        "duration": 1,
        "visualCues": "Vibrant mosaic of golden peanuts, mahogany chicken, dark red chilies, and white scallions.",
        "smell": "Nutty roasted peanuts, sweet-tart glaze, and málà spice.",
        "textureCheck": "Crunchy peanuts against velvety succulent chicken.",
        "whatShouldThisLookLike": "Authentic Sichuan restaurant Kung Pao chicken.",
        "tip": "Warn guests: the whole dried chilies and peppercorns are there for aroma and flavor, not necessarily to be eaten whole!",
        "commonMistake": "Simmering peanuts in the sauce for minutes, turning them soggy and rubbery.",
        "moveOnWhen": "Peanuts folded in and plated immediately.",
        "quickInstructions": "Add peanuts, give 2 tosses off heat, and plate immediately."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Peanuts turned soft and soggy.",
        "remedy": "Peanuts were added too early. Always fold peanuts in at the very end off heat."
      },
      {
        "mistake": "Dish tasted overwhelmingly sour or overly sweet.",
        "remedy": "Improper balance of Chinkiang vinegar and sugar. Follow the 1:1 ratio for the authentic Li Zhi Wei profile."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Chicken turned out dry and stringy",
        "whatHappened": "Chicken breast was used or cooked too long.",
        "whyItHappened": "Lean breast dries out quickly in a wok.",
        "whatToDoNow": "Serve with extra sauce over steamed rice.",
        "howToPrevent": "Always use skinless boneless chicken thighs and marinate with cornstarch."
      }
    ],
    "substitutions": [
      {
        "original": "Dried Sichuan chilies",
        "substitute": "Dried Arbol chilies or crushed red pepper flakes",
        "notes": "Arbol chilies provide good heat and browning."
      },
      {
        "original": "Roasted peanuts",
        "substitute": "Toasted whole cashews (Cashew Chicken variation)",
        "notes": "Cashews add buttery sweetness."
      }
    ],
    "safetyNotes": [
      "Take care when frying chilies — airborne capsaicin steam can irritate eyes and lungs."
    ],
    "servingGuide": {
      "restingTime": "Serve immediately.",
      "garnishing": "Sprinkle of toasted crushed Sichuan peppercorns.",
      "plating": "Serve on a wide porcelain plate or shallow bowl.",
      "temperature": "Piping hot.",
      "accompaniments": "Steamed white jasmine rice and cold cucumber salad with sesame oil."
    }
  },
  "mapo-tofu": {
    "id": "mapo-tofu",
    "name": "Authentic Sichuan Mapo Tofu (Mapo Doufu)",
    "cuisine": "Chinese",
    "region": "China (Sichuan / Chengdu)",
    "servings": 4,
    "prepTime": 15,
    "cookTime": 15,
    "difficulty": "Medium",
    "overview": {
      "summary": "The undisputed masterwork of Sichuan cuisine: silken tofu cubes simmered in a crimson, mouth-numbing sauce made with fermented Pixian chili bean paste (Pixian Doubanjiang), douchi (fermented black beans), and crispy browned beef mince, thickened in three gradual cornstarch stages to a glossy coat, and finished with a blizzard of freshly ground Sichuan peppercorn powder, embodying the 7 sacred characters of authentic Mapo (Spicy, Numbing, Aromatic, Hot, Fresh, Tender, Crisp).",
      "appearance": "A vibrant crimson-red bowl of shimmering silken tofu cubes suspended in dark chili oil, flecked with crispy dark beef bits and dusted with fragrant brown peppercorn powder.",
      "texture": "Unbelievable mouthfeel contrast: trembling, custardy, silky tofu that slides across the tongue paired with crispy, crunchy fried minced beef.",
      "flavor": "Intense fermented umami, fiery chili heat (là), electric tongue-buzzing tingle (má), rich savory beef, and sweet garlic greens.",
      "restingTimeMinutes": 1
    },
    "equipment": [
      {
        "name": "14-inch carbon steel wok or heavy skillet",
        "purpose": "Distributes high heat to fry bean paste into crimson chili oil."
      },
      {
        "name": "Saucepan with salted simmering water",
        "purpose": "For poaching tofu cubes before cooking (essential to prevent breaking)."
      },
      {
        "name": "Wok spatula or silicone spoon",
        "purpose": "For gently pushing tofu with the back of the spatula without smashing cubes."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Cut 500g medium-firm or silken tofu into uniform 2cm cubes.",
        "durationMinutes": 5
      },
      {
        "task": "Finely mince 2.5 tbsp Pixian Doubanjiang (chili bean paste) on cutting board so large chili skins break down.",
        "durationMinutes": 3
      },
      {
        "task": "Finely mince 1.5 tbsp fermented black beans (douchi), 3 garlic cloves, and 15g fresh ginger.",
        "durationMinutes": 5
      },
      {
        "task": "Toast 1 tbsp red Sichuan peppercorns in a dry skillet for 2 mins, then grind into fine powder.",
        "durationMinutes": 5
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Tofu Poaching (Chuan-Shui)",
        "technique": "Submerge cut tofu cubes in gentle simmering salted water (1 tsp salt in 1 liter water) for 3 minutes before adding to the wok. The hot salt water draws out excess moisture, firms up the exterior proteins, and heats the core so the cubes stay silky yet completely intact without crumbling during stir-frying."
      },
      {
        "item": "Spatula Pushing Technique",
        "technique": "Never stir tofu in circles! Use the rounded back of the wok spatula to gently push the sauce and tofu from the edge toward the center in slow waves."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Medium-firm or firm silken tofu",
        "prep": "cut into 2cm cubes & salted-water poached",
        "amount": "500g",
        "metric": "500g",
        "imperial": "1.1 lbs",
        "common": "1 block"
      },
      {
        "name": "Ground beef chuck (or ground pork)",
        "prep": "for crispy \"su\" meat topping",
        "amount": "120g",
        "metric": "120g",
        "imperial": "4.2 oz",
        "common": "1/2 cup"
      },
      {
        "name": "Pixian Doubanjiang (Sichuan fermented chili bean paste)",
        "prep": "finely minced",
        "amount": "2.5 tbsp",
        "metric": "40g",
        "imperial": "1.4 oz",
        "common": "2.5 tbsp"
      },
      {
        "name": "Douchi (fermented Chinese black beans)",
        "prep": "finely chopped",
        "amount": "1.5 tbsp",
        "metric": "20g",
        "imperial": "0.7 oz",
        "common": "1.5 tbsp"
      },
      {
        "name": "Sichuan chili powder (or coarse flakes)",
        "prep": "for bright red color",
        "amount": "1 tbsp",
        "metric": "8g",
        "imperial": "0.3 oz",
        "common": "1 tbsp"
      },
      {
        "name": "Garlic cloves & Fresh ginger",
        "prep": "finely minced",
        "amount": "2 tbsp",
        "metric": "20g",
        "imperial": "0.7 oz",
        "common": "2 tbsp"
      },
      {
        "name": "Garlic scapes or scallion greens",
        "prep": "cut into 1.5cm batons",
        "amount": "3 stalks",
        "metric": "40g",
        "imperial": "1.4 oz",
        "common": "1/2 cup"
      },
      {
        "name": "Rich chicken or beef broth",
        "prep": "unsalted",
        "amount": "300ml",
        "metric": "300ml",
        "imperial": "10 fl oz",
        "common": "1.25 cups"
      },
      {
        "name": "Light soy sauce",
        "prep": "for seasoning",
        "amount": "1 tbsp",
        "metric": "15ml",
        "imperial": "0.5 fl oz",
        "common": "1 tbsp"
      },
      {
        "name": "Cornstarch slurry",
        "prep": "divided in 3 additions (2 tbsp cornstarch + 3 tbsp water)",
        "amount": "5 tbsp",
        "metric": "75ml",
        "imperial": "2.5 fl oz",
        "common": "mixed"
      },
      {
        "name": "Freshly toasted & ground Sichuan peppercorn powder",
        "prep": "for final blizzard dusting",
        "amount": "1.5 tsp",
        "metric": "4g",
        "imperial": "0.15 oz",
        "common": "1.5 tsp"
      },
      {
        "name": "Neutral cooking oil",
        "prep": "for frying paste into red oil",
        "amount": "3 tbsp",
        "metric": "45ml",
        "imperial": "1.5 fl oz",
        "common": "3 tbsp"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "POACH TOFU CUBES IN SALTED WATER",
        "whatYouNeed": [
          "Saucepan with 1L water",
          "1 tsp salt",
          "500g cubed tofu",
          "Slotted spoon"
        ],
        "description": "Bring 1 liter of water and 1 tsp salt to a gentle simmer (not a rolling boil). Slide tofu cubes into the water. Simmer gently for 3 minutes over low heat. Turn off heat and leave tofu resting in the warm water until needed.",
        "howToDoIt": "Salt tightens the protein network of the tofu, preventing the delicate cubes from shattering or weeping water into the sauce.",
        "heat": "Low Simmer",
        "duration": 4,
        "visualCues": "Tofu cubes plump slightly and become springy and resilient.",
        "textureCheck": "Soft yet firm enough to handle with a slotted spoon.",
        "whatShouldThisLookLike": "Clean white tofu cubes submerged in warm water.",
        "tip": "Never boil violently or the bubbling water will shatter the corners of the cubes.",
        "commonMistake": "Skipping poaching — raw cold tofu will disintegrate into baby food in the wok.",
        "moveOnWhen": "Tofu has poached 3 mins and is resting in warm water.",
        "quickInstructions": "Simmer tofu cubes in salted water for 3 mins; keep warm until needed."
      },
      {
        "step": 2,
        "title": "FRY MINCED BEEF UNTIL CRISP (SU)",
        "whatYouNeed": [
          "Wok",
          "1 tbsp oil",
          "120g ground beef"
        ],
        "description": "Heat 1 tbsp oil in wok over medium heat. Add ground beef. Stir-fry vigorously, breaking meat into tiny granules, for 4 minutes until all moisture evaporates and the beef fries in its own rendered fat until dark brown, crispy, and dry (the \"Su\" stage).",
        "howToDoIt": "Frying beef until completely crisp removes moisture and concentrates intense savory flavor, providing crunchy texture against the silky tofu.",
        "heat": "Medium Heat",
        "duration": 4,
        "visualCues": "Beef transforms from soft pink meat to dark golden, crunchy, micro-pebbles.",
        "hear": "Crackling shallow-fry sizzle.",
        "smell": "Rich roasted beef aroma.",
        "textureCheck": "Crisp and crunchy.",
        "whatShouldThisLookLike": "Crispy browned beef granules.",
        "tip": "Authentic Chengdu Mapo Tofu traditionally uses beef, not pork, for its deeper savory depth.",
        "commonMistake": "Leaving the beef soft and wet — it will turn soggy in the sauce.",
        "moveOnWhen": "Beef is dark brown and crispy.",
        "quickInstructions": "Stir-fry ground beef over medium heat 4 mins until dry and crispy."
      },
      {
        "step": 3,
        "title": "FRY BEAN PASTE INTO CRIMSON CHILI OIL",
        "whatYouNeed": [
          "Crispy beef in wok",
          "2 tbsp oil",
          "Minced Pixian doubanjiang",
          "Chopped douchi",
          "Chili powder",
          "Garlic & ginger"
        ],
        "description": "Reduce heat to medium-low. Push beef to the side. Add 2 tbsp oil, minced Pixian doubanjiang, and douchi black beans to the oil. Sauté slowly for 2 minutes until the oil turns a brilliant, deep ruby-red. Add minced garlic, ginger, and chili powder; sauté for 30 seconds until intensely aromatic.",
        "howToDoIt": "Gently frying doubanjiang dissolves the red pigments into the oil, releasing its fermented umami foundation.",
        "heat": "Medium-Low Heat",
        "duration": 3,
        "visualCues": "Oil turns brilliant glowing crimson-red; fragrance fills the entire room.",
        "smell": "Fermented chili, sweet garlic, and earthy black beans.",
        "textureCheck": "Smooth, aromatic red oil paste.",
        "whatShouldThisLookLike": "Gleaming crimson chili oil sizzling around crispy beef and aromatics.",
        "tip": "Keep heat moderate so the bean paste doesn't scorch.",
        "commonMistake": "Rushing this step on high heat, which burns the bean paste bitter.",
        "moveOnWhen": "Oil is glowing crimson and aromatic.",
        "quickInstructions": "Sauté doubanjiang and black beans on medium-low 2 mins until oil turns ruby red; add garlic, ginger, chili powder."
      },
      {
        "step": 4,
        "title": "ADD BROTH, GENTLY SLIDE TOFU & SIMMER",
        "whatYouNeed": [
          "300ml chicken broth",
          "Warm poached tofu cubes (drained)",
          "1 tbsp light soy sauce",
          "1/2 tsp sugar"
        ],
        "description": "Pour 300ml chicken broth into the wok. Add soy sauce and sugar. Bring to a boil over medium-high heat. Using a slotted spoon, lift warm tofu cubes from their water and slide gently into the bubbling crimson sauce. Simmer gently for 4 minutes over medium heat, using the back of the spatula to gently nudge the cubes so they absorb the savory broth.",
        "howToDoIt": "Simmering infuses the bland tofu with the fiery fermented broth through osmosis.",
        "heat": "Medium Heat",
        "duration": 4,
        "visualCues": "Sauce bubbles lazily around pristine white cubes; tofu absorbs red color on edges.",
        "smell": "Rich savory broth and spicy chili paste.",
        "textureCheck": "Tofu is piping hot and custardy.",
        "whatShouldThisLookLike": "White tofu cubes simmering in a bubbling crimson sea.",
        "tip": "Never scrape back and forth with spatula edges; push gently with the rounded convex back.",
        "commonMistake": "Stirring like a soup, mashing the tofu into scrambled mess.",
        "moveOnWhen": "Tofu has simmered 4 mins and is fully infused.",
        "quickInstructions": "Add broth, slide in warm tofu cubes, simmer gently for 4 mins over medium heat."
      },
      {
        "step": 5,
        "title": "THE THREE-STAGE STARCH THICKENING & OIL SEPARATION",
        "whatYouNeed": [
          "Cornstarch slurry",
          "Garlic greens or scallions"
        ],
        "description": "Add garlic greens. Now execute the 3-stage thickening: Drizzle 1/3 of the slurry around the wok, gently push with back of spatula, and wait 30 seconds. Drizzle 2nd third; sauce thickens and clings. Drizzle final third; simmer for 40 seconds. Suddenly, the thickened sauce will \"release\" the red chili oil, which floats to the top in a brilliant glossy red sheen.",
        "howToDoIt": "Three gradual additions allow starch to bind the water molecules gradually, preventing the tofu from weeping water later.",
        "heat": "Medium Heat",
        "duration": 3,
        "visualCues": "Sauce thickens into a glossy glaze; brilliant red chili oil separates and floats on top.",
        "smell": "Sweet garlic greens and rich chili oil.",
        "textureCheck": "Sauce coats every cube in a velvety red blanket.",
        "whatShouldThisLookLike": "Crimson-glazed tofu crowned with floating red oil.",
        "tip": "The oil separation (\"liang-you\") is the ultimate hallmark of authentic Sichuan chef technique.",
        "commonMistake": "Dumping all slurry in at once, creating a clumpy gelatinous paste that weeps water within 5 minutes.",
        "moveOnWhen": "Sauce is glossy and red oil floats on surface.",
        "quickInstructions": "Add slurry in 3 gradual additions, simmering between, until sauce is glossy and red oil separates."
      },
      {
        "step": 6,
        "title": "PLATE & DUST WITH SICHUAN PEPPER BLIZZARD",
        "whatYouNeed": [
          "Serving bowl",
          "1.5 tsp freshly ground Sichuan peppercorn powder"
        ],
        "description": "Gently slide the Mapo Tofu into a deep, warm ceramic bowl. Immediately dust the entire surface with a heavy \"blizzard\" of freshly ground Sichuan peppercorn powder. Serve piping hot with plenty of steamed rice.",
        "howToDoIt": "The rising heat from the freshly cooked dish vaporizes the aromatic citrusy volatile oils of the raw peppercorn powder, filling the diner's nose with electrifying aroma.",
        "heat": "Off Heat",
        "duration": 1,
        "visualCues": "A fragrant dusting of brown peppercorn powder sitting atop glistening red chili oil and white tofu.",
        "smell": "Electrifying, citrusy, floral, tingling aroma.",
        "textureCheck": "Velvety smooth tofu, crunchy beef, tingling mouthfeel.",
        "whatShouldThisLookLike": "Masterpiece Sichuan Mapo Doufu.",
        "tip": "Always grind whole peppercorns fresh; pre-ground powder from jars loses its numbing punch in days.",
        "commonMistake": "Cooking the peppercorn powder into the sauce early, which turns it muddy and destroys the fragrant aroma.",
        "moveOnWhen": "Dusted and served immediately.",
        "quickInstructions": "Slide into warm bowl, dust heavily with fresh Sichuan peppercorn powder, serve hot."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Tofu shattered into tiny unappealing crumbs.",
        "remedy": "Tofu was stirred vigorously with a sharp spatula or was not poached in salted water first."
      },
      {
        "mistake": "Sauce turned watery and separated into soup 5 minutes after plating.",
        "remedy": "Slurry was dumped in all at once rather than in 3 distinct cooking stages."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Dish lacks that authentic tongue-numbing buzz",
        "whatHappened": "Old, stale Sichuan peppercorn powder was used.",
        "whyItHappened": "Volatile sanshool oils oxidize quickly.",
        "whatToDoNow": "Toast 1 tsp whole peppercorns in a dry pan for 90 seconds, crush in a mortar, and dust generously over the top.",
        "howToPrevent": "Always toast whole red Sichuan peppercorns fresh right before serving."
      }
    ],
    "substitutions": [
      {
        "original": "Ground beef",
        "substitute": "Ground pork or finely minced king oyster mushrooms with soaked shiitake",
        "notes": "Mushroom Mapo Tofu is an exceptionally popular and authentic vegetarian variation."
      },
      {
        "original": "Garlic scapes",
        "substitute": "Scallion greens or Chinese chives",
        "notes": "Provide the requisite fresh allium sweetness."
      }
    ],
    "safetyNotes": [
      "The dish stays scorching hot under its insulating layer of chili oil; take care not to burn your tongue."
    ],
    "servingGuide": {
      "restingTime": "Serve immediately.",
      "garnishing": "Heavy dusting of freshly ground Sichuan peppercorn powder and scallion greens.",
      "plating": "Deep wide ceramic or earthenware bowl.",
      "temperature": "Piping hot.",
      "accompaniments": "Steamed white jasmine rice (indispensable for soaking up the sauce) and cold iced tea."
    }
  },
  "hot-pot": {
    "id": "hot-pot",
    "name": "Chongqing Dual-Flavor Hot Pot (Yuanyang Huoguo)",
    "cuisine": "Chinese",
    "region": "China (Sichuan / Chongqing)",
    "servings": 6,
    "prepTime": 30,
    "cookTime": 20,
    "difficulty": "Medium",
    "overview": {
      "summary": "The ultimate communal Chinese feast: a yin-yang partitioned pot with roaring spicy, numbing Chongqing tallow broth on one side and comforting, collagen-rich chicken-bone and herbal broth on the other, surrounded by paper-thin rolls of marbled beef, prawns, quail eggs, mushrooms, lotus root, and fresh greens, dipped into DIY sesame oil and garlic dipping bowls.",
      "appearance": "A bubbling divided metal cauldron with scarlet red oil bubbling on one side and ivory-white herbal broth on the other, surrounded by an abundant banqueting spread of thinly sliced meats and vegetables.",
      "texture": "Vast array of textures cooked in seconds: melt-in-the-mouth marbled beef ribbons, snappy prawns, crunchy lotus roots, and silky glass noodles.",
      "flavor": "Duality of intense fiery málà spice, beef tallow richness, and gentle herbal chicken sweetness, rounded by fragrant sesame-garlic dipping oil.",
      "restingTimeMinutes": 1
    },
    "equipment": [
      {
        "name": "Partitioned Hot Pot (Yuanyang pot) with portable induction burner",
        "purpose": "Holds two distinct broths simultaneously at the center of the dining table."
      },
      {
        "name": "Wire hot pot strainers (skimmers)",
        "purpose": "Allows diners to submerge and retrieve delicate ingredients from the boiling broth."
      },
      {
        "name": "Long wooden cooking chopsticks (30cm)",
        "purpose": "Keeps hands safely away from rising boiling steam while swishing ingredients."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Arrange 400g thinly shaved beef ribeye rolls and 300g sliced lamb shoulder on platters.",
        "durationMinutes": 10
      },
      {
        "task": "Clean and arrange vegetables: sliced lotus root, enoki mushrooms, baby bok choy, and fried tofu puffs.",
        "durationMinutes": 10
      },
      {
        "task": "Prepare DIY dipping sauce station: toasted sesame oil, minced garlic, scallions, cilantro, oyster sauce, and crushed peanuts.",
        "durationMinutes": 10
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Beef Shaving",
        "technique": "Meats must be shaved paper-thin (1-2mm) across the grain while partially frozen. Paper-thin meats cook to succulent doneness in 8–10 seconds of swishing, staying meltingly tender."
      },
      {
        "item": "Sesame Oil Dipping Bowl (You-Die)",
        "technique": "Fill dipping bowl with 3 tbsp pure toasted sesame oil and 1 tbsp minced garlic. The cold sesame oil coats the hot food, cooling it down instantly to protect the esophagus while neutralizing harsh chili burn."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Thinly shaved hot pot beef ribeye",
        "prep": "shaved 1.5mm thin rolls",
        "amount": "400g",
        "metric": "400g",
        "imperial": "14 oz",
        "common": "400g"
      },
      {
        "name": "Thinly shaved lamb shoulder",
        "prep": "shaved 1.5mm thin rolls",
        "amount": "300g",
        "metric": "300g",
        "imperial": "10.5 oz",
        "common": "300g"
      },
      {
        "name": "Raw tiger prawns",
        "prep": "whole, heads on, deveined",
        "amount": "12 prawns",
        "metric": "300g",
        "imperial": "10.5 oz",
        "common": "12 pieces"
      },
      {
        "name": "Sichuan hot pot soup base block (tallow & chili)",
        "prep": "authentic Mala block",
        "amount": "200g",
        "metric": "200g",
        "imperial": "7 oz",
        "common": "1 block"
      },
      {
        "name": "Rich chicken bone broth",
        "prep": "simmered with ginger, jujubes & goji berries",
        "amount": "2 liters",
        "metric": "2000ml",
        "imperial": "68 fl oz",
        "common": "8 cups"
      },
      {
        "name": "Fresh Enoki mushrooms & King Oyster mushrooms",
        "prep": "trimmed & sliced",
        "amount": "250g",
        "metric": "250g",
        "imperial": "9 oz",
        "common": "2 packs"
      },
      {
        "name": "Lotus root",
        "prep": "peeled and sliced into 4mm discs",
        "amount": "200g",
        "metric": "200g",
        "imperial": "7 oz",
        "common": "1 root"
      },
      {
        "name": "Baby bok choy & Napa cabbage",
        "prep": "washed & separated",
        "amount": "300g",
        "metric": "300g",
        "imperial": "10.5 oz",
        "common": "4 cups"
      },
      {
        "name": "Fried tofu puffs & sweet potato glass noodles",
        "prep": "noodles soaked in warm water",
        "amount": "200g",
        "metric": "200g",
        "imperial": "7 oz",
        "common": "1 bowl"
      },
      {
        "name": "Pure toasted sesame oil",
        "prep": "for dipping bowls",
        "amount": "200ml",
        "metric": "200ml",
        "imperial": "7 fl oz",
        "common": "1 cup"
      },
      {
        "name": "Fresh garlic & cilantro",
        "prep": "minced for dipping sauce station",
        "amount": "100g",
        "metric": "100g",
        "imperial": "3.5 oz",
        "common": "1 cup"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "BUILD THE DUAL-BROTH PARTITIONED POT",
        "whatYouNeed": [
          "Divided pot",
          "Hot pot base block",
          "2L chicken broth",
          "Aromatics (ginger, scallions, jujubes, goji berries)"
        ],
        "description": "Place partitioned pot on tabletop induction burner. On the SPICY side: place the Sichuan tallow chili block, 4 dried red chilies, 1 tbsp Sichuan peppercorns, and 1 liter chicken broth. On the CLEAR side: add 1 liter chicken broth, 4 slices ginger, 2 scallions tied in a knot, 4 dried red jujubes, and 1 tbsp goji berries.",
        "howToDoIt": "The dual pot accommodates all heat tolerances and allows different ingredients to be cooked in their ideal broth.",
        "heat": "High Heat to boil",
        "duration": 8,
        "visualCues": "Spicy block melts into a bubbling, aromatic scarlet tallow cauldron; clear broth turns into a fragrant, bubbling ivory pool.",
        "hear": "Enthusiastic dual boiling bubbling.",
        "smell": "Intense aroma of beef tallow, roasted chilies, and herbal chicken broth.",
        "textureCheck": "Both broths boiling vigorously.",
        "whatShouldThisLookLike": "Iconic yin-yang partitioned bubbling cauldron.",
        "tip": "Keep extra warm broth on hand to replenish the pot as liquid evaporates during the meal.",
        "commonMistake": "Letting spicy broth boil over the center divider into the clear broth.",
        "moveOnWhen": "Both broths are at a full rolling boil.",
        "quickInstructions": "Melt spicy tallow block in 1L broth on one side; simmer clear herbal broth on the other."
      },
      {
        "step": 2,
        "title": "MIX PERSONAL DIPPING BOWLS (YOU-DIE)",
        "whatYouNeed": [
          "Individual small bowls",
          "Sesame oil",
          "Minced garlic",
          "Scallions",
          "Cilantro",
          "Oyster sauce"
        ],
        "description": "Each diner personalizes their dipping bowl: standard Chongqing ratio is 3 tbsp toasted sesame oil, 1 heaping tsp minced fresh garlic, 1 tsp chopped scallions, and 1 tsp chopped cilantro, with an optional splash of oyster sauce or black vinegar.",
        "howToDoIt": "Sesame oil coats the food, extinguishing excess fire, soothing the stomach lining, and enhancing flavor.",
        "heat": "No Heat",
        "duration": 2,
        "visualCues": "Golden sesame oil flecked with green cilantro, scallions, and white garlic.",
        "smell": "Pungent garlic and nutty sesame oil.",
        "textureCheck": "Aromatic dipping oil.",
        "whatShouldThisLookLike": "Customized dipping sauce bowls for each guest.",
        "tip": "Avoid thick peanut sauces for Sichuan tallow hot pot; pure sesame oil is authentic and functional.",
        "commonMistake": "Skipping the dipping sauce — eating food straight out of 100°C chili oil burns tastebuds.",
        "moveOnWhen": "All diners have prepared their bowls.",
        "quickInstructions": "Mix sesame oil, minced garlic, scallions, and cilantro in small dipping bowls."
      },
      {
        "step": 3,
        "title": "THE \"SEVEN-UP-EIGHT-DOWN\" MEAT SWISH (QI SHANG BA XIA)",
        "whatYouNeed": [
          "Paper-thin beef/lamb slices",
          "Long chopsticks",
          "Boiling spicy or clear broth"
        ],
        "description": "Pick up a single slice of beef with your chopsticks. Submerge it into the boiling broth. Execute the traditional technique: swish down for 1 second, lift up out of liquid for 1 second, repeat 7 or 8 times (takes about 10–12 seconds total). The meat will turn from crimson red to cooked pinkish-grey.",
        "howToDoIt": "Swishing in and out cooks the meat gently without boiling out its natural moisture, yielding maximum tenderness.",
        "heat": "High Rolling Boil",
        "duration": 1,
        "visualCues": "Meat curls and transitions from raw red to juicy cooked brown.",
        "textureCheck": "Melts on the tongue with delicate chew.",
        "whatShouldThisLookLike": "Succulent, freshly cooked beef curl.",
        "tip": "Never let go of your meat slice in the pot or it will overcook into leathery rubber.",
        "commonMistake": "Dumping an entire plate of cold raw meat into the pot, which kills the boil.",
        "moveOnWhen": "Meat is cooked and dipped in sauce.",
        "quickInstructions": "Swish meat in boiling broth for 10-12 seconds (\"seven up, eight down\") until just cooked."
      },
      {
        "step": 4,
        "title": "SIMMER ROOT VEGETABLES, MUSHROOMS & TOFU",
        "whatYouNeed": [
          "Lotus root",
          "Mushrooms",
          "Tofu puffs",
          "Wire strainers"
        ],
        "description": "Drop dense items that take longer to cook into the boiling broth: lotus roots (3 mins), mushrooms (4 mins), and tofu puffs (2 mins). Use wire strainers to keep track of them. Tofu puffs will soak up the broth like sponges.",
        "howToDoIt": "Root vegetables and mushrooms sweeten and flavor the broth as they simmer.",
        "heat": "Medium-High Boil",
        "duration": 4,
        "visualCues": "Tofu puffs swell with hot broth; mushrooms soften and glisten; lotus root turns translucent.",
        "textureCheck": "Crunchy lotus, chewy mushrooms, juicy tofu puffs.",
        "whatShouldThisLookLike": "Ingredients simmering peacefully beneath the surface.",
        "tip": "Cook delicate greens (bok choy, spinach) for 30 seconds only so they stay crisp and green.",
        "commonMistake": "Forgetting mushrooms in the pot for 30 minutes until they dissolve.",
        "moveOnWhen": "Vegetables and mushrooms are tender.",
        "quickInstructions": "Simmer lotus roots, mushrooms, and tofu puffs for 3-4 mins; retrieve with wire strainer."
      },
      {
        "step": 5,
        "title": "COOK GLASS NOODLES & SAVOR COMMUNAL FEAST",
        "whatYouNeed": [
          "Sweet potato glass noodles",
          "Wire strainer"
        ],
        "description": "Towards the end of the feast when the broths are intensely concentrated and flavorful, drop soaked glass noodles into the wire basket and submerge for 2 minutes until glassy, chewy, and elastic. Lift, drain, and drop into dipping bowl.",
        "howToDoIt": "Sweet potato noodles absorb the rich concentrated broth, providing a deeply satisfying finish to the meal.",
        "heat": "Medium-High Boil",
        "duration": 3,
        "visualCues": "Noodles turn crystal-clear, bouncy, and glassy.",
        "smell": "Rich concentrated broth aroma.",
        "textureCheck": "Super chewy and springy (\"Q-elastic\").",
        "whatShouldThisLookLike": "Glassy noodles dripping with savory broth.",
        "tip": "Keep conversation flowing — hot pot is designed as a leisurely 2-hour communal social experience!",
        "commonMistake": "Drinking the spicy tallow broth directly from the pot (it is meant for cooking, not drinking!).",
        "moveOnWhen": "Feast is complete.",
        "quickInstructions": "Cook glass noodles for 2 mins in strainer; enjoy communal dining with friends."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Meat was tough and chewy.",
        "remedy": "Meat was dumped in bulk and boiled too long. Swish individual slices for 10-12 seconds only."
      },
      {
        "mistake": "Broth boiled away and burned.",
        "remedy": "Hot pot needs periodic replenishment. Keep a kettle of boiling broth on hand to top up both sides."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Spicy broth is overwhelmingly hot for some diners",
        "whatHappened": "Chili and peppercorns concentrated as water boiled off.",
        "whyItHappened": "Evaporation intensifies spice.",
        "whatToDoNow": "Add more clear chicken broth to dilute the spicy side; add extra sesame oil to dipping bowl.",
        "howToPrevent": "Top up with unsalted broth regularly."
      }
    ],
    "substitutions": [
      {
        "original": "Sichuan tallow base block",
        "substitute": "Vegetable oil hot pot paste or Tom Yum paste",
        "notes": "Vegetarian hot pot bases are lighter and equally delicious."
      },
      {
        "original": "Lamb shoulder",
        "substitute": "Pork belly slices or firm fish fillets (snakehead/cod)",
        "notes": "Fish slices cooked in hot pot are magnificent."
      }
    ],
    "safetyNotes": [
      "Always use dedicated cooking chopsticks for raw meats and separate eating chopsticks for cooked food."
    ],
    "servingGuide": {
      "restingTime": "Eat continuously as food is cooked.",
      "garnishing": "Fresh cilantro, scallions, crushed peanuts, and sesame oil.",
      "plating": "Communal partitioned hot pot in center of table with ingredient platters surrounding.",
      "temperature": "Piping hot.",
      "accompaniments": "Ice-cold beer, sweetened herbal tea (Wanglaoji), or sour plum juice (Suanmeitang)."
    }
  },
  "bao": {
    "id": "bao",
    "name": "Steamed Cantonese BBQ Pork Buns (Char Siu Bao)",
    "cuisine": "Chinese",
    "region": "China (Guangdong / Hong Kong)",
    "servings": 6,
    "prepTime": 45,
    "cookTime": 15,
    "difficulty": "Hard",
    "overview": {
      "summary": "The holy grail of Cantonese Dim Sum: snow-white, pillowy soft, cloud-like steamed yeast buns that naturally split open at the top (\"laughing mouth\") to reveal a glistening, savory-sweet filling of tender diced honey-roast pork (Char Siu) in a rich caramelized oyster-shallot gravy.",
      "appearance": "Pristine, snow-white, cotton-soft steamed domes naturally cracked into three smiling petals at the crown, revealing mahogany BBQ pork filling within.",
      "texture": "Impossibly light, tender, fluffy, melt-in-the-mouth bun crumb enclosing succulent, juicy pork chunks and silky glaze.",
      "flavor": "Delicate gentle sweetness from the steamed dough contrasting with deeply savory, sweet, smoky honey-roast pork and aromatic shallot gravy.",
      "restingTimeMinutes": 2
    },
    "equipment": [
      {
        "name": "Bamboo steamer baskets with woven lid",
        "purpose": "Essential: bamboo lid absorbs condensation so water droplets never drip onto delicate white buns."
      },
      {
        "name": "Square parchment paper liners (7cm x 7cm)",
        "purpose": "Prevents raw buns from sticking to the steamer slats."
      },
      {
        "name": "Small rolling pin",
        "purpose": "For rolling bun skins with thick centers and thin edges."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Finely dice 250g Char Siu (Chinese roast BBQ pork) into 6mm neat cubes.",
        "durationMinutes": 5
      },
      {
        "task": "Prepare the Char Siu gravy: simmer 2 minced shallots in 1 tbsp oil, add 2 tbsp oyster sauce, 1 tbsp soy sauce, 2 tbsp sugar, 1/2 cup chicken stock, and thicken with 1.5 tbsp cornstarch slurry until glossy; fold in diced pork and chill completely.",
        "durationMinutes": 15
      },
      {
        "task": "Measure 250g low-protein Hong Kong flour (Bao flour or cake flour) and 1 tsp instant yeast.",
        "durationMinutes": 3
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Bao Flour Selection",
        "technique": "Must use low-protein bleached wheat flour (known as \"Hong Kong Bao Flour\" or cake flour). Standard high-protein bread flour produces yellow, chewy, bread-like buns rather than the signature snow-white, cottony, pillowy texture."
      },
      {
        "item": "Chilling the Filling",
        "technique": "The Char Siu filling MUST be chilled cold in the refrigerator until the gravy solidifies into a firm gel. If warm or runny filling is wrapped in raw yeast dough, the moisture dissolves the seam and prevents the bun from rising."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Hong Kong Bao flour or cake flour (low protein)",
        "prep": "sifted for airy texture",
        "amount": "250g",
        "metric": "250g",
        "imperial": "9 oz",
        "common": "2 cups"
      },
      {
        "name": "Instant dry yeast",
        "prep": "active",
        "amount": "1 tsp",
        "metric": "3g",
        "imperial": "0.1 oz",
        "common": "1 tsp"
      },
      {
        "name": "Baking powder (double acting)",
        "prep": "provides the violent top split (\"laugh\")",
        "amount": "1.5 tsp",
        "metric": "6g",
        "imperial": "0.2 oz",
        "common": "1.5 tsp"
      },
      {
        "name": "Granulated sugar",
        "prep": "feeds yeast & tenderizes crumb",
        "amount": "40g",
        "metric": "40g",
        "imperial": "1.4 oz",
        "common": "3 tbsp"
      },
      {
        "name": "Warm water or whole milk (35°C / 95°F)",
        "prep": "for kneading",
        "amount": "130ml",
        "metric": "130ml",
        "imperial": "4.4 fl oz",
        "common": "1/2 cup + 1 tbsp"
      },
      {
        "name": "Lard or neutral cooking oil",
        "prep": "whitens and tenderizes dough crumb",
        "amount": "1 tbsp",
        "metric": "15g",
        "imperial": "0.5 oz",
        "common": "1 tbsp"
      },
      {
        "name": "Char Siu (Chinese roast pork)",
        "prep": "diced into 6mm cubes",
        "amount": "250g",
        "metric": "250g",
        "imperial": "9 oz",
        "common": "1.5 cups"
      },
      {
        "name": "Oyster sauce & Light soy sauce",
        "prep": "for gravy",
        "amount": "3 tbsp",
        "metric": "45ml",
        "imperial": "1.5 fl oz",
        "common": "3 tbsp"
      },
      {
        "name": "Shaoxing wine & Toasted sesame oil",
        "prep": "for gravy aromatics",
        "amount": "1 tbsp each",
        "metric": "30ml",
        "imperial": "1 fl oz",
        "common": "2 tbsp total"
      },
      {
        "name": "Cornstarch slurry",
        "prep": "for thick glaze",
        "amount": "3 tbsp",
        "metric": "45ml",
        "imperial": "1.5 fl oz",
        "common": "mixed"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "KNEAD & PROOF THE SNOW-WHITE BAO DOUGH",
        "whatYouNeed": [
          "250g bao flour",
          "1 tsp yeast",
          "1.5 tsp baking powder",
          "40g sugar",
          "130ml warm water/milk",
          "1 tbsp lard/oil"
        ],
        "description": "Whisk flour, sugar, yeast, and baking powder in a bowl. Pour in warm water. Mix with chopsticks into shaggy dough. Add lard/oil and knead on a clean board for 8 minutes until satin-smooth, supple, and non-sticky. Place in a lightly oiled bowl, cover with a damp cloth, and proof in a warm place for 45 minutes until doubled in size.",
        "howToDoIt": "Thorough kneading develops a fine, uniform gluten mesh, while lard whitens the dough and produces a tender, melt-in-the-mouth texture.",
        "heat": "Warm ambient (30°C / 86°F)",
        "duration": 50,
        "visualCues": "Dough expands to double volume; pressing a floured finger leaves a clean indentation that does not spring back.",
        "textureCheck": "Soft as a marshmallow, smooth and supple.",
        "whatShouldThisLookLike": "Pristine, smooth white ball of proofed dough.",
        "tip": "Using warm milk instead of water makes the buns even softer and creamier in appearance.",
        "commonMistake": "Using all-purpose or bread flour, which turns the buns creamy yellow and dense like sandwich bread.",
        "moveOnWhen": "Dough has doubled in volume.",
        "quickInstructions": "Knead flour, yeast, baking powder, sugar, water, and lard for 8 mins; proof 45 mins."
      },
      {
        "step": 2,
        "title": "DIVIDE, FLATTEN & ROLL WRAPPERS",
        "whatYouNeed": [
          "Proofed dough",
          "Rolling pin",
          "Parchment paper squares"
        ],
        "description": "Punch down dough to expel large air pockets. Knead for 1 minute on a lightly floured surface to eliminate all bubbles. Roll into an even log and divide into 8 equal pieces (approx 50g each). Shape each into a smooth ball. Using a small rolling pin, roll from edges toward center to create a 10cm disc with a thick domed center and thin edges.",
        "howToDoIt": "Expelling air bubbles creates a silky, fine-textured bun interior without unsightly air holes.",
        "heat": "No Heat",
        "duration": 10,
        "visualCues": "Smooth circular dough discs with thick raised centers and thin perimeters.",
        "textureCheck": "Silky, supple, and elastic.",
        "whatShouldThisLookLike": "Stack of circular bun wrappers.",
        "tip": "Keep unused dough balls covered with plastic wrap so they don't dry out.",
        "commonMistake": "Rolling the center thin — the heavy filling will tear through the bottom.",
        "moveOnWhen": "8 wrappers are rolled.",
        "quickInstructions": "Punch down dough, divide into 8 pieces, roll into discs with thick center and thin edges."
      },
      {
        "step": 3,
        "title": "FILL & PLEAT THE \"LAUGHING\" FLOWER CROWN",
        "whatYouNeed": [
          "Dough discs",
          "Chilled solid Char Siu filling",
          "8 parchment squares"
        ],
        "description": "Hold a wrapper in your palm. Place 2 generous tablespoons (approx 40g) of chilled firm filling in the center. Use your thumb to press filling down while your other hand pleats the edges clockwise around the filling (approx 12–14 pleats). Gather pleats at the top and give a firm pinch, leaving the very tip slightly twisted and pointed upwards. Place bun on a parchment square.",
        "howToDoIt": "Leaving the top gather pinched with upward tension allows steam to pop the crown open during rapid steaming.",
        "heat": "No Heat",
        "duration": 12,
        "visualCues": "Neat, pleated round white buns resting upright on parchment squares.",
        "textureCheck": "Tightly sealed with no sauce leaking through pleats.",
        "whatShouldThisLookLike": "Pristine pleated buns ready for the steamer.",
        "tip": "Wipe hands with a damp towel if sauce gets on your fingers; sauce on the dough edges prevents seams from sealing.",
        "commonMistake": "Using warm runny filling — the dough turns soggy and cannot hold pleats.",
        "moveOnWhen": "All 8 buns are pleated and resting on parchment.",
        "quickInstructions": "Place 2 tbsp chilled filling in center, pleat edges around, pinch top upward, place on parchment."
      },
      {
        "step": 4,
        "title": "FINAL PROOF (15 MINUTES)",
        "whatYouNeed": [
          "Buns on parchment",
          "Bamboo steamer"
        ],
        "description": "Arrange buns in bamboo steamer baskets, leaving at least 5cm (2 inches) of space between each bun and the basket walls. Cover with the bamboo lid and let proof for 15 minutes at warm room temperature.",
        "howToDoIt": "A short second proof relaxes the gluten and restarts yeast fermentation, guaranteeing a light, airy rise in the steamer.",
        "heat": "Room Temperature",
        "duration": 15,
        "visualCues": "Buns swell by about 30%, looking soft, plump, and puffy.",
        "textureCheck": "Light and pillowy; indents spring back slowly.",
        "whatShouldThisLookLike": "Plump, puffy white raw buns.",
        "tip": "Don't over-proof or the buns will collapse into flat wrinkled discs when steamed.",
        "commonMistake": "Crowding buns too close together — they will expand and fuse into one giant blob.",
        "moveOnWhen": "Buns are plump and puffy after 15 minutes.",
        "quickInstructions": "Rest buns in covered bamboo steamer for 15 mins until puffy."
      },
      {
        "step": 5,
        "title": "HIGH-HEAT STEAM & THE 3-MINUTE REST",
        "whatYouNeed": [
          "Wok with boiling water",
          "Bamboo steamer with buns and lid",
          "Kitchen timer"
        ],
        "description": "Bring water in wok to a roaring boil over maximum high heat. Set bamboo steamer on top. Cover tightly with bamboo lid. Steam over furious high heat for 12 minutes without opening. TURN OFF HEAT. LEAVE THE LID ON UNDISTURBED FOR 3 MINUTES. (Crucial step!). Remove lid to reveal glorious, snow-white, smiling buns.",
        "howToDoIt": "Violent high steam causes baking powder and yeast to expand simultaneously, popping the crown open into a \"laughing mouth\". Resting 3 minutes off-heat prevents sudden cold air shock from collapsing the fluffy crumb.",
        "heat": "Maximum High Steam 12 mins, then OFF 3 mins",
        "duration": 15,
        "visualCues": "Pristine snow-white buns cracked into three blooming petals at the top, showing glistening mahogany BBQ pork inside.",
        "hear": "Roaring steam bubbling beneath the steamer.",
        "smell": "Sweet steamed dough, honey, and rich BBQ pork.",
        "textureCheck": "Impossibly light, cottony, pillowy soft crumb.",
        "whatShouldThisLookLike": "Classic dim sum teahouse \"laughing\" Char Siu Bao.",
        "tip": "Never lift the lid during steaming or immediately after shutting off heat — sudden temperature drops cause buns to deflate and wrinkle like prunes.",
        "commonMistake": "Using a metal lid — condensation drops from metal onto the dough, leaving yellow water pockmarks.",
        "moveOnWhen": "Resting complete; lid removed to reveal fluffy buns.",
        "quickInstructions": "Steam on high heat for 12 mins, turn off heat and rest covered for 3 mins, then unlid."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Buns collapsed, shrank, and turned wrinkled after steaming.",
        "remedy": "Steamer lid was pulled off immediately when heat was turned off. Always let buns rest covered for 3 minutes off heat."
      },
      {
        "mistake": "Buns were yellow and dense instead of snow-white and fluffy.",
        "remedy": "Regular high-protein bread flour was used. Always use low-protein Hong Kong Bao flour or cake flour."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Buns didn't split open (\"laugh\") at the top",
        "whatHappened": "Baking powder was stale or steam heat was too low.",
        "whyItHappened": "Violent expansion from fresh double-acting baking powder and high heat is required to pop the seams.",
        "whatToDoNow": "They still taste extraordinary! Enjoy as classic sealed baozi.",
        "howToPrevent": "Use fresh baking powder and ensure water is at a roaring boil before placing steamer on top."
      }
    ],
    "substitutions": [
      {
        "original": "Char Siu pork",
        "substitute": "Stir-fried minced chicken or seasoned braised mushrooms with tofu",
        "notes": "Vegetarian mushroom baozi is a classic dim sum staple."
      },
      {
        "original": "Hong Kong Bao flour",
        "substitute": "Cake flour (80%) mixed with cornstarch (20%)",
        "notes": "Produces an exceptionally tender, white crumb."
      }
    ],
    "safetyNotes": [
      "Take care when removing the bamboo lid to avoid direct steam burns."
    ],
    "servingGuide": {
      "restingTime": "1 minute.",
      "garnishing": "Serve directly in the steaming bamboo baskets.",
      "plating": "Bamboo steamer basket set on a serving plate.",
      "temperature": "Piping hot and steaming.",
      "accompaniments": "Hot pot of Chrysanthemum or Pu-erh tea."
    }
  },
  "wontons": {
    "id": "wontons",
    "name": "Hong Kong Shrimp & Pork Wonton Soup (Hun Tun)",
    "cuisine": "Chinese",
    "region": "China (Hong Kong / Guangdong)",
    "servings": 4,
    "prepTime": 35,
    "cookTime": 10,
    "difficulty": "Medium",
    "overview": {
      "summary": "The pride of Hong Kong noodle houses: plump \"goldfish-tailed\" wontons packed with crunchy tiger prawns, minced pork, toasted flounder powder, and white pepper, wrapped in gossamer-thin yellow egg wrappers, boiled until floating, and served in an intensely aromatic supreme broth made from dried flounder, shrimp shells, and yellow chives.",
      "appearance": "Delicate translucent wontons with billowing silk-like skirts floating like miniature goldfish in a sparkling golden broth, showered with bright yellow chives.",
      "texture": "Paper-thin wrapper that slips down the throat like silk, giving way to an explosive, snappy crunch from fresh prawns and juicy pork.",
      "flavor": "Deep ocean seafood sweetness, smoky dried flounder umami, nutty toasted sesame oil, and fragrant herbal yellow chives.",
      "restingTimeMinutes": 1
    },
    "equipment": [
      {
        "name": "Large 6-quart stockpot for boiling wontons",
        "purpose": "Abundant boiling water prevents delicate wonton wrappers from breaking or clumping."
      },
      {
        "name": "Fine-mesh noodle spider or strainer",
        "purpose": "Gently cradles and lifts delicate wontons without tearing gossamer skirts."
      },
      {
        "name": "Soup pot for supreme broth",
        "purpose": "Keeps broth piping hot for ladling."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Peel, devein, and pat 300g tiger prawns bone-dry; cut into 1cm chunks.",
        "durationMinutes": 10
      },
      {
        "task": "Toast 1 tbsp dried flounder fish powder (Zuo Yu Fen) in a dry pan until intensely fragrant (the secret authentic Hong Kong aroma).",
        "durationMinutes": 3
      },
      {
        "task": "Slice 1 bunch of Chinese yellow chives (Jiu Huang) into 2cm batons.",
        "durationMinutes": 3
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Goldfish Tail Folding (Jin-Yu Wonton)",
        "technique": "Place 1 heaping teaspoon of filling in the center of the square wrapper. Fold edges loosely together in your fist and give a gentle, decisive pinch right above the filling. Do NOT roll or press pleats — leave the loose wrapper corners flared out like the billowing tail fins of a swimming goldfish."
      },
      {
        "item": "Separate Boiling Water",
        "technique": "ALWAYS boil wontons in plain water in a separate pot, never in the serving soup broth! Boiling starch from wrappers would turn the clear broth cloudy and starchy."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Thin Hong Kong square wonton wrappers (egg & flour)",
        "prep": "room temperature",
        "amount": "24 wrappers",
        "metric": "24 wrappers",
        "imperial": "24 wrappers",
        "common": "1 pack"
      },
      {
        "name": "Raw tiger prawns",
        "prep": "peeled, deveined, dried & cut into 1cm chunks",
        "amount": "300g",
        "metric": "300g",
        "imperial": "10.5 oz",
        "common": "300g"
      },
      {
        "name": "Ground pork shoulder (70/30 meat to fat)",
        "prep": "chilled",
        "amount": "150g",
        "metric": "150g",
        "imperial": "5.3 oz",
        "common": "150g"
      },
      {
        "name": "Dried flounder powder (Zuo Yu Fen) or ground dried shrimp",
        "prep": "toasted fragrant",
        "amount": "1 tbsp",
        "metric": "10g",
        "imperial": "0.35 oz",
        "common": "1 tbsp"
      },
      {
        "name": "Light soy sauce",
        "prep": "seasoning",
        "amount": "1 tbsp",
        "metric": "15ml",
        "imperial": "0.5 fl oz",
        "common": "1 tbsp"
      },
      {
        "name": "Shaoxing rice wine",
        "prep": "marinade",
        "amount": "1 tbsp",
        "metric": "15ml",
        "imperial": "0.5 fl oz",
        "common": "1 tbsp"
      },
      {
        "name": "Toasted sesame oil",
        "prep": "divided (filling & soup)",
        "amount": "2 tbsp",
        "metric": "30ml",
        "imperial": "1 fl oz",
        "common": "2 tbsp"
      },
      {
        "name": "Ground white pepper",
        "prep": "essential for authentic heat",
        "amount": "1 tsp",
        "metric": "3g",
        "imperial": "0.1 oz",
        "common": "1 tsp"
      },
      {
        "name": "Rich chicken & dried shrimp stock",
        "prep": "piping hot supreme broth",
        "amount": "1.2 liters",
        "metric": "1200ml",
        "imperial": "40 fl oz",
        "common": "5 cups"
      },
      {
        "name": "Chinese yellow chives (Jiu Huang) or scallions",
        "prep": "cut into 2cm lengths",
        "amount": "1 bunch",
        "metric": "60g",
        "imperial": "2.1 oz",
        "common": "1/2 cup"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "WHIP THE CRUNCHY PRAWN & PORK FILLING",
        "whatYouNeed": [
          "Prawn chunks",
          "Ground pork",
          "Toasted flounder powder",
          "Soy sauce",
          "Shaoxing wine",
          "1 tsp sesame oil",
          "White pepper",
          "Salt & sugar"
        ],
        "description": "Combine ground pork, 1/2 tsp salt, 1/2 tsp sugar, and white pepper in a bowl. Stir vigorously in one direction for 1 minute until sticky. Add prawn chunks, toasted flounder powder, soy sauce, Shaoxing wine, and 1 tsp sesame oil. Mix gently with hands until evenly distributed. Chill in refrigerator for 20 minutes.",
        "howToDoIt": "Whipping the pork first creates a bouncy binding paste, while folding in whole prawn chunks preserves their signature crunchy pop.",
        "heat": "No Heat",
        "duration": 5,
        "visualCues": "Glossy, cohesive filling specked with pink prawn chunks and golden flounder powder.",
        "smell": "Toasted dried seafood, sesame oil, and white pepper.",
        "textureCheck": "Sticky meat binding crunchy whole prawn pieces.",
        "whatShouldThisLookLike": "Chilled, glistening wonton filling.",
        "tip": "Ensure prawns are bone-dry before mixing so filling doesn't turn watery.",
        "commonMistake": "Pureeing prawns in a food processor into paste — turns wontons mushy without texture.",
        "moveOnWhen": "Filling is chilled and cohesive.",
        "quickInstructions": "Whip pork with seasonings until sticky; fold in prawn chunks and flounder powder; chill 20 mins."
      },
      {
        "step": 2,
        "title": "FOLD GOSSAMER GOLDFISH-TAIL WONTONS",
        "whatYouNeed": [
          "24 wonton wrappers",
          "Chilled filling",
          "Small bowl of water"
        ],
        "description": "Lay a square wrapper flat in your palm. Place 1 heaping teaspoon (approx 15g) of filling in the center. Lightly dab a drop of water on two edges. Curl your hand loosely into an \"O\" shape, allowing the wrapper to drop into the opening. Gather the wrapper together above the filling and give one decisive, firm pinch to seal the neck. Leave the flared wrapper corners loose and billowing like goldfish fins.",
        "howToDoIt": "The quick pinch seal leaves the loose wrapper corners free to float like silk in the boiling broth.",
        "heat": "No Heat",
        "duration": 15,
        "visualCues": "Plump round filling nugget crowned with a loose, billowing yellow silk tail fin.",
        "textureCheck": "Firmly sealed neck with airy, loose wrapper tails.",
        "whatShouldThisLookLike": "A flock of delicate yellow goldfish wontons.",
        "tip": "Don't over-press the skirt pleats flat; keep them loose and ruffled.",
        "commonMistake": "Folding into tight dense triangles like tortellini, which destroys the silky mouthfeel.",
        "moveOnWhen": "All 24 wontons are folded and resting on a tray.",
        "quickInstructions": "Place filling on wrapper, cup in hand, pinch firmly above filling leaving loose skirt tails."
      },
      {
        "step": 3,
        "title": "HEAT SUPREME BROTH & PREPARE BOWLS",
        "whatYouNeed": [
          "Soup pot",
          "1.2L chicken & shrimp broth",
          "4 soup bowls",
          "Yellow chives",
          "White pepper",
          "Sesame oil"
        ],
        "description": "Bring 1.2 liters of chicken and shrimp broth to a rolling simmer in a saucepan. Into each of the 4 warm soup bowls, add 1/4 tsp toasted sesame oil, a pinch of ground white pepper, and 2 tablespoons of sliced yellow chives.",
        "howToDoIt": "Placing the aromatics in the raw bowls first blooms their flavors instantly when piping hot broth is ladled over them.",
        "heat": "Medium Heat",
        "duration": 4,
        "visualCues": "Clear, glistening golden broth simmering gently.",
        "smell": "Sweet ocean shrimp and rich chicken broth.",
        "textureCheck": "Steaming hot broth.",
        "whatShouldThisLookLike": "Prepared bowls waiting for dumplings and broth.",
        "tip": "Yellow chives are milder, sweeter, and more fragrant than green scallions, providing that quintessential Hong Kong teahouse aroma.",
        "commonMistake": "Boiling the yellow chives in the pot — they turn mushy and lose their crisp sweetness.",
        "moveOnWhen": "Broth is simmering and bowls are dressed.",
        "quickInstructions": "Simmer broth; dress bowls with sesame oil, white pepper, and yellow chives."
      },
      {
        "step": 4,
        "title": "BOIL WONTONS TO TRANSLUCENT FLOAT",
        "whatYouNeed": [
          "6-quart pot of boiling water",
          "24 wontons",
          "Spider strainer"
        ],
        "description": "Bring a large pot of unsalted water to a rolling boil over high heat. Drop wontons into the water. Stir gently once with the back of a ladle to prevent sticking. Cook over medium-high heat for 3 to 4 minutes. The wontons will float to the surface with translucent wrappers revealing pink shrimp within.",
        "howToDoIt": "Gentle boiling cooks the delicate wrapper and prawn core simultaneously without tearing the delicate skirts.",
        "heat": "Medium-High Boil",
        "duration": 4,
        "visualCues": "Wontons float buoyantly; yellow wrappers turn glassy and translucent; pink shrimp shows through.",
        "smell": "Delicate egg wrapper and sweet seafood aroma.",
        "textureCheck": "Wrapper feels silky and tender; core is firm and springy.",
        "whatShouldThisLookLike": "Floating, billowy wontons swimming in the pot.",
        "tip": "Check one wonton: slice open to ensure prawns have turned opaque coral throughout.",
        "commonMistake": "Boiling on a violent rolling boil, which tears the delicate wrapper tails off.",
        "moveOnWhen": "All wontons float and are cooked through (3-4 mins).",
        "quickInstructions": "Boil wontons for 3-4 mins in abundant water until they float and skins turn translucent."
      },
      {
        "step": 5,
        "title": "LIFT, DRAIN & ASSEMBLE WITH BROTH",
        "whatYouNeed": [
          "Spider strainer",
          "Ladle",
          "Prepared bowls"
        ],
        "description": "Ladle piping hot supreme broth into each prepared bowl (about 300ml per bowl). Scoop 6 wontons out of the boiling water with the spider strainer, shake off excess water thoroughly, and slide gently into the hot broth. Yellow chives will float to the surface around the swimming wontons.",
        "howToDoIt": "Draining cooking water thoroughly ensures the supreme broth remains crystal-clear and undiluted.",
        "heat": "Off Heat",
        "duration": 1,
        "visualCues": "Translucent wontons floating in clear golden broth with yellow chives and floating drops of sesame oil.",
        "smell": "Incredible dried flounder, shrimp, and sesame aroma.",
        "textureCheck": "Silky wrapper slip with an audible, juicy prawn crunch.",
        "whatShouldThisLookLike": "Authentic Hong Kong wonton soup bowl.",
        "tip": "Serve with a saucer of red vinegar or Chiu Chow chili oil on the side.",
        "commonMistake": "Letting cooked wontons sit in the strainer while making broth — wrappers will fuse into a sticky lump.",
        "moveOnWhen": "Assembled and served immediately.",
        "quickInstructions": "Ladle hot broth into dressed bowls; lift wontons, drain water, slide 6 wontons per bowl, serve hot."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Wonton skins tore and filling spilled into the pot.",
        "remedy": "Water was boiling too violently or wrappers were overfilled. Keep water at a gentle boil and use 1 tsp filling per wrapper."
      },
      {
        "mistake": "Soup tasted bland and starchy.",
        "remedy": "Wontons were boiled directly in the soup broth. Always boil wontons in a separate pot of plain water."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Wonton wrappers dried out and cracked while wrapping",
        "whatHappened": "Wrappers were exposed to dry kitchen air.",
        "whyItHappened": "Flour wrappers lose moisture in minutes.",
        "whatToDoNow": "Cover remaining wrappers with a slightly damp paper towel immediately.",
        "howToPrevent": "Keep wrapper stack covered under a damp towel while folding."
      }
    ],
    "substitutions": [
      {
        "original": "Dried flounder powder (Zuo Yu Fen)",
        "substitute": "1 tsp ground dried baby shrimp (Xia Mi) or dashi powder",
        "notes": "Provides that irreplaceable seafood umami depth in the filling."
      },
      {
        "original": "Chinese yellow chives",
        "substitute": "Finely sliced scallion greens",
        "notes": "Good fresh alternative."
      }
    ],
    "safetyNotes": [
      "Prawn and pork filling must reach internal temperature of 74°C (165°F)."
    ],
    "servingGuide": {
      "restingTime": "Serve immediately.",
      "garnishing": "Yellow chives, white pepper, and sesame oil.",
      "plating": "Deep ceramic Chinese soup bowls with a porcelain soup spoon.",
      "temperature": "Piping hot.",
      "accompaniments": "Hong Kong red vinegar (for dipping wontons) and steamed Chinese broccoli (Gai Lan) with oyster sauce."
    }
  },
  "chinese-spring-rolls": {
    "id": "chinese-spring-rolls",
    "name": "Cantonese Crispy Golden Spring Rolls (Chun Juan)",
    "cuisine": "Chinese",
    "region": "China (Guangdong / Hong Kong)",
    "servings": 4,
    "prepTime": 30,
    "cookTime": 15,
    "difficulty": "Medium",
    "overview": {
      "summary": "The golden symbols of wealth and renewal: feather-light, glass-shattering crispy pastry rolls stuffed with shredded roast pork, crunchy bamboo shoots, wood ear mushrooms, carrots, and sweet cabbage in a savory oyster-sesame glaze, wrapped tightly in thin spring roll wrappers and deep-fried to an iridescent, blistered amber crispness.",
      "appearance": "Sleek, golden-amber cylindrical rolls with paper-thin blistered skins, sliced diagonally on a platter to reveal colorful vegetable and pork filling, paired with Worcestershire sauce.",
      "texture": "Shatteringly crisp, delicate, non-greasy pastry crunch giving way to juicy, tender, crunchy stir-fried vegetable filling.",
      "flavor": "Savory oyster sauce umami, sweet cabbage, earthy wood ear mushrooms, and fragrant toasted sesame.",
      "restingTimeMinutes": 2
    },
    "equipment": [
      {
        "name": "14-inch carbon steel wok or Dutch oven for deep frying",
        "purpose": "Maintains steady oil temperature for uniform golden browning."
      },
      {
        "name": "Deep-fry / candy thermometer",
        "purpose": "Monitors exact oil temperature (175°C / 350°F)."
      },
      {
        "name": "Wire skimmer (spider) and wire cooling rack",
        "purpose": "Lifts rolls and drains excess surface oil so skins stay crispy."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Finely julienne 200g cabbage, 1 carrot, 3 rehydrated wood ear mushrooms, and 50g bamboo shoots into 4cm matchsticks.",
        "durationMinutes": 10
      },
      {
        "task": "Stir-fry filling: cook 150g shredded pork with aromatics and vegetables for 3 mins; thicken with 1 tbsp cornstarch slurry until bone-dry; cool completely.",
        "durationMinutes": 15
      },
      {
        "task": "Whisk 1 tbsp all-purpose flour with 2 tbsp cold water into a smooth paste for sealing wrappers (flour glue).",
        "durationMinutes": 2
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Dry Filling Technique",
        "technique": "The stir-fried filling MUST be cooked until all vegetable liquid has evaporated and thickened with cornstarch, then cooled 100% cold before wrapping. Warm or wet filling releases steam inside the roll that dissolves the wrapper, causing exploding rolls in hot oil."
      },
      {
        "item": "Tight Wrapping",
        "technique": "Roll the wrapper snugly around the filling without trapping loose air pockets. Trapped air expands in hot oil and ruptures the wrapper."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Square spring roll pastry wrappers (TYJ or Spring Home brand)",
        "prep": "thawed, covered under damp cloth",
        "amount": "16 wrappers",
        "metric": "16 sheets",
        "imperial": "16 sheets",
        "common": "16 sheets"
      },
      {
        "name": "Pork loin or Char Siu",
        "prep": "julienned into thin matchsticks",
        "amount": "150g",
        "metric": "150g",
        "imperial": "5.3 oz",
        "common": "1 cup"
      },
      {
        "name": "Green cabbage",
        "prep": "finely shredded",
        "amount": "200g",
        "metric": "200g",
        "imperial": "7 oz",
        "common": "2 cups"
      },
      {
        "name": "Carrot",
        "prep": "peeled and julienned into thin matchsticks",
        "amount": "1 medium",
        "metric": "100g",
        "imperial": "3.5 oz",
        "common": "1 cup"
      },
      {
        "name": "Dried wood ear mushrooms (Mu Er)",
        "prep": "soaked in hot water & finely shredded",
        "amount": "3 pieces",
        "metric": "30g",
        "imperial": "1 oz",
        "common": "1/3 cup"
      },
      {
        "name": "Bamboo shoots (canned)",
        "prep": "julienned into thin matchsticks",
        "amount": "50g",
        "metric": "50g",
        "imperial": "1.8 oz",
        "common": "1/3 cup"
      },
      {
        "name": "Oyster sauce",
        "prep": "savory filling seasoning",
        "amount": "1.5 tbsp",
        "metric": "22ml",
        "imperial": "0.75 fl oz",
        "common": "1.5 tbsp"
      },
      {
        "name": "Light soy sauce & Shaoxing wine",
        "prep": "for stir-frying",
        "amount": "1 tbsp each",
        "metric": "30ml",
        "imperial": "1 fl oz",
        "common": "2 tbsp total"
      },
      {
        "name": "Toasted sesame oil",
        "prep": "aromatic finish",
        "amount": "1 tsp",
        "metric": "5ml",
        "imperial": "0.17 fl oz",
        "common": "1 tsp"
      },
      {
        "name": "Flour-water sealing paste",
        "prep": "1 tbsp flour + 2 tbsp water",
        "amount": "3 tbsp",
        "metric": "45ml",
        "imperial": "1.5 fl oz",
        "common": "mixed"
      },
      {
        "name": "Neutral cooking oil (peanut or canola)",
        "prep": "for deep-frying",
        "amount": "1 liter",
        "metric": "1000ml",
        "imperial": "34 fl oz",
        "common": "4 cups"
      },
      {
        "name": "Worcestershire sauce or sweet chili sauce",
        "prep": "for authentic Cantonese dipping",
        "amount": "60ml",
        "metric": "60ml",
        "imperial": "2 fl oz",
        "common": "1/4 cup"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "STIR-FRY, THICKEN & CHILL THE FILLING",
        "whatYouNeed": [
          "Wok",
          "1 tbsp oil",
          "Pork",
          "Cabbage",
          "Carrot",
          "Wood ear",
          "Bamboo shoots",
          "Oyster sauce",
          "Slurry"
        ],
        "description": "Heat 1 tbsp oil in wok over high heat. Add shredded pork; stir-fry 1 minute. Add cabbage, carrot, wood ear mushrooms, and bamboo shoots. Stir-fry for 2 minutes. Stir in oyster sauce, soy sauce, Shaoxing wine, and white pepper. Drizzle in cornstarch slurry. Stir-fry for 1 minute until sauce thickens and no liquid pools at the bottom. Spread on a baking sheet and refrigerate until completely cold.",
        "howToDoIt": "Cooking and cooling the vegetables extracts excess water before wrapping, guaranteeing a crackling crispy roll that won't get soggy.",
        "heat": "High Heat",
        "duration": 8,
        "visualCues": "Vegetables are tender-crisp; filling is glistening with a thick glaze without loose watery liquid.",
        "smell": "Savory oyster sauce, sweet cabbage, and toasted sesame.",
        "textureCheck": "Thick, cohesive, and completely cold.",
        "whatShouldThisLookLike": "Chilled, glistening shredded vegetable and pork filling.",
        "tip": "Never wrap warm filling! Warm filling turns the delicate wheat wrapper into mush within 60 seconds.",
        "commonMistake": "Using wet un-thickened filling, which explodes in hot oil and burns the cook.",
        "moveOnWhen": "Filling is chilled cold to the touch.",
        "quickInstructions": "Stir-fry pork and vegetables, thicken with slurry until bone-dry, spread on sheet, cool completely."
      },
      {
        "step": 2,
        "title": "WRAP, TUCK & SEAL WITH FLOUR GLUE",
        "whatYouNeed": [
          "16 wrappers",
          "Chilled filling",
          "Flour sealing paste",
          "Baking sheet"
        ],
        "description": "Lay one wrapper on work surface like a diamond (one corner pointing toward you). Place 2 tablespoons of chilled filling horizontally across the lower third of the diamond. Fold the bottom corner tightly over the filling and tuck the tip under. Roll forward tightly halfway. Fold the left and right corners in snugly, forming a neat envelope. Brush flour paste onto the top exposed triangular corner. Roll forward tightly to seal.",
        "howToDoIt": "Tightly folding the envelope eliminates trapped air pockets while the flour paste creates a waterproof seal.",
        "heat": "No Heat",
        "duration": 15,
        "visualCues": "Uniform, tight, neat 10cm cylinders with securely glued seams.",
        "textureCheck": "Firm, taut roll with no loose sagging dough.",
        "whatShouldThisLookLike": "Row of uniform, unblemished raw spring rolls.",
        "tip": "Cover finished rolls with plastic wrap while working so the wrappers don't dry out and crack.",
        "commonMistake": "Rolling too loosely — loose rolls trap oil inside and become greasy sponges.",
        "moveOnWhen": "All 16 rolls are wrapped and sealed.",
        "quickInstructions": "Place filling on diamond wrapper, fold bottom, fold sides in like envelope, brush tip with glue, roll tight."
      },
      {
        "step": 3,
        "title": "PREHEAT OIL TO 175°C (350°F)",
        "whatYouNeed": [
          "Wok or Dutch oven",
          "1L cooking oil",
          "Thermometer"
        ],
        "description": "Pour 1 liter of oil into wok or Dutch oven to a depth of at least 5cm. Heat over medium-high heat until thermometer registers exactly 175°C (350°F). If you don't have a thermometer, dip a wooden chopstick into the oil: steady, eager bubbles should immediately stream from the wood tip.",
        "howToDoIt": "175°C is the sweet spot: hot enough to instantly crisp the wrapper without absorbing oil, yet moderate enough to cook the layers through.",
        "heat": "Medium-High Heat",
        "duration": 8,
        "visualCues": "Oil is shimmering, clear, and steady at 175°C.",
        "smell": "Hot clean oil.",
        "textureCheck": "Light, thin hot oil.",
        "whatShouldThisLookLike": "Clear, shimmering oil ready for frying.",
        "tip": "Fry in batches of 4 or 5 rolls maximum so the oil temperature doesn't plummet.",
        "commonMistake": "Dropping rolls into cold oil (under 160°C) — rolls will absorb oil like sponges and turn greasy.",
        "moveOnWhen": "Oil reaches 175°C.",
        "quickInstructions": "Heat oil to 175°C (350°F); verify with thermometer or bubbling chopstick."
      },
      {
        "step": 4,
        "title": "DEEP FRY IN BATCHES TO SHATTERING CRISPNESS",
        "whatYouNeed": [
          "Spring rolls",
          "Spider skimmer",
          "Wire cooling rack with paper towels beneath"
        ],
        "description": "Gently slide 4 to 5 spring rolls into the hot oil seam-side down. Fry for 4 to 5 minutes, gently rolling them with tongs or spider so they brown evenly on all sides. As they cook, microscopic blisters will form on the paper-thin wrapper and the color will turn deep golden-amber.",
        "howToDoIt": "Gentle rotation ensures all sides fry into an even, shatteringly crisp, blistered shell.",
        "heat": "Medium-High Heat (maintain 175°C)",
        "duration": 5,
        "visualCues": "Rolls turn brilliant golden-amber with thousands of tiny, crisp blisters covering the surface; they float buoyantly.",
        "hear": "Steady, crackling frying sizzle.",
        "smell": "Incredible aroma of crisp toasted pastry and savory sesame.",
        "textureCheck": "Tapping skin with tongs produces a hard, brittle, hollow crunch.",
        "whatShouldThisLookLike": "Pristine, blistered golden-amber spring rolls.",
        "tip": "Transfer cooked rolls directly to a wire rack, NEVER directly onto paper towels! Paper towels trap steam under the hot rolls, turning the bottom crust soggy.",
        "commonMistake": "Frying at too high heat (200°C), which burns the outside brown in 60 seconds while the inner pastry layers stay raw and chewy.",
        "moveOnWhen": "Rolls are deep golden-amber and blistered crisp.",
        "quickInstructions": "Fry 4-5 rolls in 175°C oil for 4-5 mins until blistered golden; drain on wire rack."
      },
      {
        "step": 5,
        "title": "REST, SLICE DIAGONALLY & SERVE",
        "whatYouNeed": [
          "Serrated or sharp chef's knife",
          "Serving platter",
          "Worcestershire sauce"
        ],
        "description": "Rest cooked rolls on the wire rack for 2 minutes to let residual oil drain and interior steam settle. Slice each roll diagonally in half at a 45-degree angle with a swift downward cut. Arrange upright on a platter to show off the vibrant vegetable and pork interior.",
        "howToDoIt": "A diagonal cut showcases the colorful interior and makes the rolls easy to dip.",
        "heat": "Off Heat",
        "duration": 2,
        "visualCues": "Shatteringly crisp golden cylinders revealing vibrant green cabbage, orange carrot, and dark wood ear mushroom filling.",
        "hear": "Loud, audible crunch as knife cuts through the crispy pastry.",
        "smell": "Hot fried pastry, savory pork, and sweet vinegar.",
        "textureCheck": "Light, shatteringly crisp crust with juicy filling.",
        "whatShouldThisLookLike": "Banquet-style platter of halved golden Cantonese spring rolls.",
        "tip": "In Hong Kong dim sum restaurants, authentic spring rolls are traditionally served with Lea & Perrins Worcestershire sauce (\"Gip-Jap\") rather than sweet duck sauce.",
        "commonMistake": "Sawing back and forth with a dull knife, crushing the delicate crispy shell.",
        "moveOnWhen": "Sliced and served immediately.",
        "quickInstructions": "Rest 2 mins, cut diagonally in half, serve with Worcestershire sauce."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Spring rolls exploded open in the oil.",
        "remedy": "Rolls were wrapped with air pockets or seams weren't glued with flour paste. Roll tightly and seal corners securely."
      },
      {
        "mistake": "Rolls were greasy and oily.",
        "remedy": "Oil was too cool or rolls were placed flat on paper towels. Keep oil at 175°C and drain on an elevated wire rack."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Inner pastry layers are doughy while exterior is browned",
        "whatHappened": "Oil was too hot (above 190°C).",
        "whyItHappened": "Exterior browned before heat penetrated the multiple pastry layers.",
        "whatToDoNow": "Lower heat to 160°C and fry batch slightly longer; or crisp in an oven at 180°C for 5 minutes.",
        "howToPrevent": "Monitor oil temperature with a thermometer throughout frying."
      }
    ],
    "substitutions": [
      {
        "original": "Shredded pork",
        "substitute": "Shredded chicken breast, shrimp, or pressed firm tofu",
        "notes": "Vegetarian spring rolls with extra shiitake mushrooms and cabbage are immensely popular."
      },
      {
        "original": "Spring roll pastry",
        "substitute": "Lumpia wrappers (Filipino thin wheat wrappers)",
        "notes": "Identical thin wheat structure that fries blistered and crisp."
      }
    ],
    "safetyNotes": [
      "Take extreme care with 1 liter of hot 175°C oil; never leave unattended."
    ],
    "servingGuide": {
      "restingTime": "Rest 2 minutes on wire rack before serving.",
      "garnishing": "Fresh coriander sprigs and lemon wedges.",
      "plating": "Stacked diagonally on a rectangular ceramic platter.",
      "temperature": "Piping hot and shatteringly crisp.",
      "accompaniments": "Hong Kong Worcestershire sauce (Gip-Jap), sweet chili sauce, and hot Jasmine tea."
    }
  },
  "korean-bbq": {
    "id": "korean-bbq",
    "name": "Authentic Korean Pork Belly BBQ (Samgyeopsal-gui)",
    "cuisine": "Korean",
    "region": "South Korea (Seoul / National)",
    "servings": 4,
    "prepTime": 20,
    "cookTime": 15,
    "difficulty": "Easy",
    "overview": {
      "summary": "The reigning crown jewel of Korean social dining: thick-cut, unmarinated pork belly strips (Samgyeopsal) grilled sizzling hot tableside with whole garlic cloves, aged kimchi, and king oyster mushrooms, snipped with kitchen shears into golden crispy bites, dipped in toasted sesame oil with roasted salt, and wrapped in fresh perilla leaves (Kkaennip) with savory fermented ssamjang paste and scallion salad (Pa-muchim).",
      "appearance": "A sizzling tabletop cast-iron grill laden with golden-crisped pork belly slices, caramelized garlic cloves, charred kimchi ribbons, and mushrooms, surrounded by vibrant banchan side dishes and a basket of fresh green leaves.",
      "texture": "Contrasting textures: shatteringly crisp golden pork skin and fat yielding to juicy succulent meat, wrapped in crunchy fresh lettuce and velvety perilla leaves.",
      "flavor": "Rich, savory rendered pork richness balanced by nutty toasted sesame oil, pungent garlic, spicy-tangy fermented kimchi, and savory fermented soybean paste.",
      "restingTimeMinutes": 1
    },
    "equipment": [
      {
        "name": "Slanted Korean BBQ tabletop grill pan (or cast-iron griddle)",
        "purpose": "Slanted design channels excess rendered pork fat away into a drip cup while searing meat."
      },
      {
        "name": "Korean kitchen cooking shears and metal tongs",
        "purpose": "For snipping sizzling strips into bite-sized morsels directly on the grill."
      },
      {
        "name": "Portable butane or induction burner",
        "purpose": "Powers the grill at the center of the dining table."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Slice 600g fresh pork belly into 1cm (0.4 inch) thick strips; pat dry with paper towels.",
        "durationMinutes": 5
      },
      {
        "task": "Whisk Ssamjang dipping sauce: 3 tbsp doenjang (fermented soybean paste), 1 tbsp gochujang (chili paste), 1 tbsp minced garlic, 1 tbsp honey, and 1 tbsp sesame oil.",
        "durationMinutes": 3
      },
      {
        "task": "Prepare Pa-muchim (scallion salad): shred 6 scallions into thin curly threads; toss with 1 tbsp soy sauce, 1 tsp gochugaru, 1 tsp sesame oil, and 1 tsp sugar.",
        "durationMinutes": 7
      },
      {
        "task": "Wash and shake dry a basket of red leaf lettuce and fresh perilla leaves (kkaennip).",
        "durationMinutes": 5
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Pork Belly Selection",
        "technique": "Choose fresh pork belly with clear alternating layers of meat and fat (Samgyeopsal translates literally to \"three-layered flesh\"). Pat the meat completely dry before grilling to ensure rapid Maillard browning instead of steaming."
      },
      {
        "item": "Kimchi Grilling",
        "technique": "Always place aged cabbage kimchi on the lower downhill slope of the slanted grill. As the pork belly renders at the top, the pork fat washes down over the kimchi, caramelizing it into an intensely savory, sweet delicacy."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Fresh pork belly (unmarinated)",
        "prep": "sliced 1cm thick, patted dry",
        "amount": "600g",
        "metric": "600g",
        "imperial": "1.3 lbs",
        "common": "600g"
      },
      {
        "name": "Aged Napa cabbage kimchi (Sin-kimchi)",
        "prep": "thick strips for grilling",
        "amount": "200g",
        "metric": "200g",
        "imperial": "7 oz",
        "common": "1 cup"
      },
      {
        "name": "Fresh garlic cloves",
        "prep": "peeled and whole (for grilling in pork fat)",
        "amount": "15 cloves",
        "metric": "60g",
        "imperial": "2.1 oz",
        "common": "1 head"
      },
      {
        "name": "Green Korean chili peppers (Cheongyang or mild)",
        "prep": "sliced diagonally",
        "amount": "4 peppers",
        "metric": "40g",
        "imperial": "1.4 oz",
        "common": "4 peppers"
      },
      {
        "name": "King oyster mushrooms",
        "prep": "sliced lengthwise into thick planks",
        "amount": "2 mushrooms",
        "metric": "150g",
        "imperial": "5.3 oz",
        "common": "2 mushrooms"
      },
      {
        "name": "Korean red leaf lettuce & Perilla leaves (Kkaennip)",
        "prep": "washed & dried for wraps",
        "amount": "20 leaves",
        "metric": "200g",
        "imperial": "7 oz",
        "common": "1 basket"
      },
      {
        "name": "Doenjang (Korean fermented soybean paste)",
        "prep": "for ssamjang",
        "amount": "3 tbsp",
        "metric": "50g",
        "imperial": "1.8 oz",
        "common": "3 tbsp"
      },
      {
        "name": "Gochujang (Korean red chili paste)",
        "prep": "for ssamjang",
        "amount": "1 tbsp",
        "metric": "20g",
        "imperial": "0.7 oz",
        "common": "1 tbsp"
      },
      {
        "name": "Toasted sesame oil (Chir-gireum)",
        "prep": "divided for dipping oil & salad",
        "amount": "4 tbsp",
        "metric": "60ml",
        "imperial": "2 fl oz",
        "common": "4 tbsp"
      },
      {
        "name": "Coarse sea salt & black pepper (Gireumjang)",
        "prep": "mixed into sesame oil for dipping",
        "amount": "1 tsp",
        "metric": "5g",
        "imperial": "0.18 oz",
        "common": "1 tsp"
      },
      {
        "name": "Scallions (for Pa-muchim salad)",
        "prep": "shredded into thin ribbons",
        "amount": "6 stalks",
        "metric": "80g",
        "imperial": "2.8 oz",
        "common": "1 bunch"
      },
      {
        "name": "Steamed short-grain Korean white rice (Bap)",
        "prep": "piping hot in individual bowls",
        "amount": "4 bowls",
        "metric": "600g",
        "imperial": "21 oz",
        "common": "4 bowls"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "PREHEAT THE TABLETOP GRILL TO ROARING HEAT",
        "whatYouNeed": [
          "Tabletop grill pan",
          "Butane burner",
          "Drip cup underneath fat spout"
        ],
        "description": "Set the slanted grill over the burner at medium-high heat for 4 minutes until scorching hot (at least 200°C / 400°F). Ensure the fat drainage spout is aligned over the drip cup. Test heat: flick a drop of water onto the iron — it should vaporize with an instant pop.",
        "howToDoIt": "High initial heat sears the surface instantly, preventing meat juices from escaping while starting fat rendering.",
        "heat": "Medium-High Heat (200°C / 400°F)",
        "duration": 4,
        "visualCues": "Faint heat shimmers rise from the cast iron surface; pan is bone-dry and smoking lightly.",
        "smell": "Clean hot cast iron.",
        "textureCheck": "Smoking hot.",
        "whatShouldThisLookLike": "Clean, scorching hot slanted grill ready for meat.",
        "tip": "Rub a small piece of pork fat across the surface before adding meat to season the metal.",
        "commonMistake": "Laying pork on a lukewarm pan, which boils the pork in released water instead of searing a crust.",
        "moveOnWhen": "Pan is smoking hot.",
        "quickInstructions": "Preheat slanted tabletop grill over medium-high heat for 4 mins until scorching hot."
      },
      {
        "step": 2,
        "title": "SEAR PORK STRIPS & ARRANGE ACCOMPANIMENTS",
        "whatYouNeed": [
          "Pork belly strips",
          "Whole garlic cloves",
          "Sliced mushrooms",
          "Kimchi strips"
        ],
        "description": "Lay pork belly strips across the top half of the grill in a single layer. Lay whole garlic cloves and sliced mushrooms around the edges. Lay strips of kimchi on the lower downhill slope. Sear pork belly undisturbed for 3 to 4 minutes until the bottom surface turns deep golden-brown.",
        "howToDoIt": "Placing kimchi at the bottom allows rendered pork fat to bathe and fry the kimchi as it trickles downhill.",
        "heat": "Medium-High Heat",
        "duration": 4,
        "visualCues": "Pork sizzles violently; bottom edge turns deep golden-amber; rendered fat flows down the ridges over the kimchi.",
        "hear": "Intense, rhythmic crackling sizzle.",
        "smell": "Incredible aroma of rendering pork fat, browning garlic, and sizzling kimchi.",
        "textureCheck": "Bottom crust is firm and caramelized.",
        "whatShouldThisLookLike": "Pork sizzling at the top, fat flowing down to caramelize garlic and kimchi below.",
        "tip": "Flip the pork only ONCE before cutting — resist the urge to constantly flip back and forth.",
        "commonMistake": "Crowding kimchi at the top of the grill, which blocks fat from draining and burns the chili paste.",
        "moveOnWhen": "Underside of pork is deep golden-brown.",
        "quickInstructions": "Lay pork at top, garlic and mushrooms on sides, kimchi at bottom; sear 3-4 mins."
      },
      {
        "step": 3,
        "title": "THE FLIP & SNIP WITH KITCHEN SHEARS",
        "whatYouNeed": [
          "Tongs",
          "Kitchen shears"
        ],
        "description": "Using tongs, flip the pork belly strips. Sear second side for 2 minutes. Now take your kitchen shears in one hand and tongs in the other. Snip each strip crosswise into bite-sized 2cm (0.8 inch) pieces directly on the grill. Turn garlic cloves and flip kimchi.",
        "howToDoIt": "Kitchen shears cut hot meats cleanly and quickly without dulling against hot metal grill surfaces.",
        "heat": "Medium Heat",
        "duration": 3,
        "visualCues": "Bite-sized pieces sizzle independently; garlic cloves turn golden and soft; kimchi caramelizes with darkened edges.",
        "hear": "Frenzied bubbling sizzle of individual pieces.",
        "smell": "Toasted garlic, sweet pork, and roasted cabbage.",
        "textureCheck": "Exterior of each piece develops a crisp crust while center stays juicy.",
        "whatShouldThisLookLike": "Grill covered in golden, bite-sized pork morsels and roasted aromatics.",
        "tip": "Snip into uniform bite-sized pieces so they fit comfortably inside lettuce wraps.",
        "commonMistake": "Cutting pieces too tiny, causing them to dry out into hard bacon bits.",
        "moveOnWhen": "Pork is snipped and all cut sides are browned.",
        "quickInstructions": "Flip pork strips, sear 2 mins, snip with kitchen shears into 2cm pieces, flip garlic and kimchi."
      },
      {
        "step": 4,
        "title": "FINAL CRISP & REST ON GRILL EDGE",
        "whatYouNeed": [
          "Tongs"
        ],
        "description": "Toss the pork pieces over medium heat for 2 more minutes, rolling them so all cut sides develop a crackling golden crust. Push fully cooked pork pieces, roasted garlic, and caramelized kimchi to the cooler outer edges of the grill pan to stay warm without burning.",
        "howToDoIt": "Moving meat to the outer perimeter keeps it sizzling and hot throughout the communal meal without overcooking.",
        "heat": "Low Heat (Holding temperature)",
        "duration": 2,
        "visualCues": "Deep golden-brown, glistening crispy pork pieces with translucent rendered fat.",
        "textureCheck": "Shatteringly crisp exterior, tender and juicy interior.",
        "whatShouldThisLookLike": "Crispy pork morsels resting warm on the perimeter of the grill.",
        "tip": "Roasted whole garlic cloves should feel soft as butter when gently squeezed with tongs.",
        "commonMistake": "Leaving meat in the center high-heat zone until it incinerates into dry jerky.",
        "moveOnWhen": "Meat is crispy, golden, and moved to perimeter.",
        "quickInstructions": "Crisp all cut sides for 2 mins, push meat, garlic, and kimchi to grill edges."
      },
      {
        "step": 5,
        "title": "BUILD THE PERFECT SSAM (LETTUCE WRAP)",
        "whatYouNeed": [
          "Red leaf lettuce",
          "Perilla leaf",
          "Crispy pork morsel",
          "Gireumjang (sesame oil salt dip)",
          "Ssamjang paste",
          "Roasted garlic",
          "Kimchi",
          "Pa-muchim"
        ],
        "description": "Hold a lettuce leaf flat in your palm. Lay a perilla leaf on top. Dip a piece of hot pork into the sesame oil and salt (Gireumjang), then place it in the center. Add a dab of savory Ssamjang paste, 1 clove of roasted garlic, a slice of grilled kimchi, and a pinch of scallion salad (Pa-muchim). Fold the leaf tightly into a neat parcel and pop the entire wrap into your mouth in one bite!",
        "howToDoIt": "Eating the wrap in one bite (the traditional Korean way) allows all contrasting temperatures, textures, and flavors to burst together on the palate.",
        "heat": "Off Heat (Eating stage)",
        "duration": 1,
        "visualCues": "Tightly packed, emerald-green parcel packed with vibrant multi-colored fillings.",
        "smell": "Herbal anise notes from perilla, nutty sesame, and roasted pork.",
        "textureCheck": "Crisp lettuce snap, juicy hot pork crunch, soft garlic, and refreshing scallions.",
        "whatShouldThisLookLike": "The ultimate Korean Ssam wrap.",
        "tip": "Never bite a Ssam in half! Biting in half causes juices to spill down your chin; make wraps small enough to eat whole.",
        "commonMistake": "Overfilling the wrap so it bursts open and cannot fit into the mouth.",
        "moveOnWhen": "Savoring the bite!",
        "quickInstructions": "Layer lettuce and perilla, add dipped pork, ssamjang, roasted garlic, kimchi, and scallion; eat in one bite."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Pork was pale, limp, and rubbery.",
        "remedy": "Grill was not hot enough or was overcrowded with wet meat. Preheat pan until smoking hot and pat pork dry."
      },
      {
        "mistake": "Kimchi burned black into bitter ash.",
        "remedy": "Kimchi was placed on the hottest central zone. Keep kimchi on the lower downhill edge where rendered fat keeps it moist."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Heavy smoke filling the dining room",
        "whatHappened": "Rendered fat is pooling on the grill instead of draining.",
        "whyItHappened": "Grill pan is not tilted or drainage hole is clogged.",
        "whatToDoNow": "Use a chopstick to clear the drainage hole and prop a folded towel under the back leg of the burner to increase the slant.",
        "howToPrevent": "Ensure grill is properly angled toward the drip cup before starting."
      }
    ],
    "substitutions": [
      {
        "original": "Pork belly (Samgyeopsal)",
        "substitute": "Pork neck/collar (Moksal) or thinly shaved beef brisket (Chadolbaegi)",
        "notes": "Moksal has richer marbling and less fat; Chadolbaegi cooks in 5 seconds."
      },
      {
        "original": "Perilla leaves (Kkaennip)",
        "substitute": "Fresh mint leaves mixed with sweet basil",
        "notes": "Mimics the herbal, slightly licorice-anise brightness of perilla."
      }
    ],
    "safetyNotes": [
      "Pork must reach safe internal temperature of 71°C (160°F)."
    ],
    "servingGuide": {
      "restingTime": "Eat continuously hot off the grill.",
      "garnishing": "Toasted sesame seeds on the ssamjang and scallion salad.",
      "plating": "Communal tabletop grill with banchan dishes, leafy greens, and dipping bowls surrounding.",
      "temperature": "Piping hot off the fire.",
      "accompaniments": "Chilled Korean soju, ice-cold lager (Cass or Terra), and bubbling Doenjang-jjigae (soybean paste stew)."
    }
  },
  "bibimbap": {
    "id": "bibimbap",
    "name": "Sizzling Stone Bowl Bibimbap (Dolsot Bibimbap)",
    "cuisine": "Korean",
    "region": "South Korea (Jeonju)",
    "servings": 4,
    "prepTime": 35,
    "cookTime": 15,
    "difficulty": "Medium",
    "overview": {
      "summary": "Jeonju's globally celebrated culinary mosaic: warm steamed short-grain rice served in a scorching hot granite stone bowl (Dolsot) coated in toasted sesame oil, topped with an artful rainbow wheel of individually seasoned namul vegetables (spinach, bean sprouts, carrots, shiitake mushrooms, zucchini), marinated beef bulgogi, and a raw egg yolk, mixed tableside with sweet-spicy gochujang sauce while the bottom rice crisps into a golden, crackling crust (Nurungji).",
      "appearance": "A sizzling, black stone bowl presenting an exquisite radial wheel of five colors (green spinach, orange carrot, brown shiitake, yellow soybean sprouts, white radish), crowned with marinated beef and a gleaming golden raw egg yolk.",
      "texture": "The ultimate textural symphony: shatteringly crisp toasted rice crust (nurungji) mingled with tender fluffy rice, crunchy vegetables, tender beef, and velvety molten egg.",
      "flavor": "Harmonious balance of nutty toasted sesame, sweet-spicy fermented chili paste, savory garlic-soy vegetables, and rich umami beef.",
      "restingTimeMinutes": 1
    },
    "equipment": [
      {
        "name": "Dolsot (Korean granite or earthenware stone bowl)",
        "purpose": "Retains scorching heat to roast the bottom rice into a crackling golden crust at the table."
      },
      {
        "name": "Wooden trivet or base",
        "purpose": "Protects the dining table from the 200°C scorching stone bowl."
      },
      {
        "name": "Heavy tongs or heatproof oven mitts",
        "purpose": "For transferring sizzling stone bowls safely from stove to table."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Marinate 200g thinly sliced ribeye beef in 1 tbsp soy sauce, 1 tsp sugar, 1 tsp sesame oil, and 1 minced garlic clove for 15 minutes.",
        "durationMinutes": 15
      },
      {
        "task": "Blanch 200g soybean sprouts (3 mins) and 200g spinach (30s) separately; shock in cold water, squeeze bone-dry, and season each with sesame oil, garlic, and salt (Sukju-namul & Sigeumchi-namul).",
        "durationMinutes": 15
      },
      {
        "task": "Julienne 1 carrot, 1 zucchini, and slice 4 shiitake mushrooms; stir-fry each separately for 1-2 mins.",
        "durationMinutes": 10
      },
      {
        "task": "Whisk Bibimbap sauce: 3 tbsp gochujang, 1 tbsp honey, 1 tbsp sesame oil, 1 tbsp water, and 1 tsp vinegar.",
        "durationMinutes": 3
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Separate Vegetable Preparation (Namul)",
        "technique": "Each vegetable MUST be cooked and seasoned individually. Cooking them together turns everything into a muddy brown stir-fry; preparing them separately preserves their distinct colors, textures, and subtle natural flavors, creating the iconic 5-color aesthetic."
      },
      {
        "item": "Nurungji Formation",
        "technique": "Coat the interior of the hot stone bowl with 1 tbsp sesame oil before pressing the warm rice firmly against the bottom. Keep bowl over medium flame for 5 minutes until you hear frantic, crackling pops, indicating the golden crust is forming."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Steamed short-grain Korean rice",
        "prep": "warm and fluffy",
        "amount": "600g",
        "metric": "600g",
        "imperial": "21 oz",
        "common": "4 cups cooked"
      },
      {
        "name": "Thinly sliced beef ribeye or sirloin",
        "prep": "marinated in soy, sesame & garlic",
        "amount": "200g",
        "metric": "200g",
        "imperial": "7 oz",
        "common": "200g"
      },
      {
        "name": "Kongnamul (Korean soybean sprouts)",
        "prep": "blanched and seasoned with sesame & salt",
        "amount": "200g",
        "metric": "200g",
        "imperial": "7 oz",
        "common": "2 cups"
      },
      {
        "name": "Fresh baby spinach",
        "prep": "blanched, squeezed dry, seasoned with garlic & sesame",
        "amount": "200g",
        "metric": "200g",
        "imperial": "7 oz",
        "common": "1 bunch"
      },
      {
        "name": "Carrot",
        "prep": "peeled, julienned and lightly sautéed with salt",
        "amount": "1 medium",
        "metric": "100g",
        "imperial": "3.5 oz",
        "common": "1 piece"
      },
      {
        "name": "Zucchini",
        "prep": "julienned, salted 5 mins, sautéed with garlic",
        "amount": "1 medium",
        "metric": "150g",
        "imperial": "5.3 oz",
        "common": "1 piece"
      },
      {
        "name": "Fresh shiitake mushrooms",
        "prep": "sliced thinly and sautéed with soy sauce",
        "amount": "4 caps",
        "metric": "80g",
        "imperial": "2.8 oz",
        "common": "4 caps"
      },
      {
        "name": "Fresh pasteurized egg yolks or whole eggs",
        "prep": "raw for topping",
        "amount": "4 eggs",
        "metric": "80g",
        "imperial": "2.8 oz",
        "common": "4 yolks"
      },
      {
        "name": "Pure toasted sesame oil",
        "prep": "for coating bowl & finishing",
        "amount": "4 tbsp",
        "metric": "60ml",
        "imperial": "2 fl oz",
        "common": "4 tbsp"
      },
      {
        "name": "Gochujang chili paste",
        "prep": "for bibimbap sauce",
        "amount": "3 tbsp",
        "metric": "60g",
        "imperial": "2.1 oz",
        "common": "3 tbsp"
      },
      {
        "name": "Toasted sesame seeds",
        "prep": "for final garnish",
        "amount": "1 tbsp",
        "metric": "10g",
        "imperial": "0.35 oz",
        "common": "1 tbsp"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "PREHEAT STONE BOWL & COAT IN SESAME OIL",
        "whatYouNeed": [
          "Dolsot stone bowl",
          "Stove burner",
          "1 tbsp toasted sesame oil",
          "Pastry brush"
        ],
        "description": "Place the clean stone bowl directly over medium heat on your stove burner. Pour 1 tablespoon of toasted sesame oil into the bowl and use a brush to coat the entire bottom and up the inner sides. Heat for 3 minutes until the oil begins to smoke lightly.",
        "howToDoIt": "Toasted sesame oil seasons the porous stone and fries the rice grains into an amber, crackling crust without sticking.",
        "heat": "Medium Heat",
        "duration": 3,
        "visualCues": "Oil glazes the dark stone surface; faint wisps of fragrant nutty smoke appear.",
        "smell": "Intense toasted sesame oil aroma.",
        "textureCheck": "Slick, smoking hot surface.",
        "whatShouldThisLookLike": "Glossy, heated stone bowl smoking lightly on the burner.",
        "tip": "If you don't own a dolsot, a heavy cast-iron skillet creates an equally spectacular crispy crust!",
        "commonMistake": "Using a dry stone bowl with no oil — rice will weld to the stone and burn into bitter black carbon.",
        "moveOnWhen": "Oil is smoking lightly.",
        "quickInstructions": "Brush stone bowl with 1 tbsp sesame oil; heat on medium for 3 mins until smoking lightly."
      },
      {
        "step": 2,
        "title": "PACK RICE & ARRANGE THE 5-COLOR NAMUL WHEEL",
        "whatYouNeed": [
          "1.5 cups warm rice",
          "Prepared namul (spinach, bean sprouts, carrots, zucchini, mushrooms)",
          "Sautéed beef"
        ],
        "description": "Pack 1.5 cups of warm steamed rice firmly into the bottom of the smoking bowl, smoothing it flat. While the bowl stays over medium-low heat, rapidly arrange the seasoned vegetables and beef in neat triangular wedges around the perimeter like spokes of a bicycle wheel, alternating colors.",
        "howToDoIt": "Arranging the toppings while the bowl is over the burner allows the bottom rice to begin crisping while keeping toppings piping hot.",
        "heat": "Medium-Low Heat",
        "duration": 3,
        "visualCues": "Vibrant kaleidoscope of green, orange, brown, and yellow vegetables framing the center.",
        "hear": "Audible, eager sizzling from the bottom of the bowl.",
        "smell": "Toasted rice, garlic, and savory beef.",
        "textureCheck": "Bottom rice begins to firm into a shell.",
        "whatShouldThisLookLike": "Stunning mosaic wheel of colorful Korean namul toppings.",
        "tip": "Work swiftly so the bottom rice doesn't burn while you arrange the vegetables.",
        "commonMistake": "Dumping all vegetables together in a heap, ruining the iconic visual presentation.",
        "moveOnWhen": "Vegetables are arranged in an alternating color wheel.",
        "quickInstructions": "Pack warm rice into bowl, arrange vegetables and beef in radial color wedges on top."
      },
      {
        "step": 3,
        "title": "CROWN WITH EGG YOLK & LISTEN FOR CRUST CRACKLE",
        "whatYouNeed": [
          "1 raw egg yolk (or sunny-side-up fried egg)",
          "1 tbsp toasted sesame seeds"
        ],
        "description": "Make a small indentation in the center of the beef. Gently drop 1 raw egg yolk into the center. Sprinkle sesame seeds over the top. Keep the bowl over medium-low heat for 3 to 4 minutes. Listen intently: the sizzle will change from gentle to loud, sharp, rhythmic crackling (\"chhhhh\").",
        "howToDoIt": "The sharp crackle indicates all moisture has evaporated from the bottom rice layer and the starches are frying into golden nurungji.",
        "heat": "Medium-Low Heat",
        "duration": 4,
        "visualCues": "Steam puffs up from between the vegetables; egg yolk gleams in the center.",
        "hear": "Loud, eager, crackling popping sounds like frying chips.",
        "smell": "Intensely toasted nutty rice aroma.",
        "textureCheck": "Tapping bottom rice with a spoon reveals a hard, crisp shell.",
        "whatShouldThisLookLike": "A sizzling, magnificent work of Korean culinary art.",
        "tip": "If you prefer cooked eggs, use a sunny-side-up fried egg with a runny yolk instead of raw yolk.",
        "commonMistake": "Taking the bowl off heat too early before the loud crackling sound — no crispy crust will form.",
        "moveOnWhen": "Loud crackling has continued for 2 full minutes.",
        "quickInstructions": "Place egg yolk in center, cook over medium-low 3-4 mins until loud crackling sounds are heard."
      },
      {
        "step": 4,
        "title": "TRANSFER SAFELY TO WOODEN TRIVET",
        "whatYouNeed": [
          "Heavy heatproof oven mitts or dolsot tongs",
          "Wooden trivet"
        ],
        "description": "Using heavy heatproof mitts or specialized dolsot tongs, lift the scorching hot stone bowl off the burner and place it securely into its wooden trivet. Carry it immediately to the dining table while it continues to roar and crackle.",
        "howToDoIt": "The stone bowl holds heat for over 20 minutes, keeping the meal steaming hot until the final bite.",
        "heat": "Off Heat (Internal retained heat)",
        "duration": 1,
        "visualCues": "Violently sizzling bowl releasing clouds of savory steam at the table.",
        "hear": "Roaring, crackling sizzle that commands the entire room.",
        "smell": "Sweet gochujang, toasted rice, and sesame.",
        "textureCheck": "Scorching hot.",
        "whatShouldThisLookLike": "Sizzling stone bowl resting on wooden trivet at table.",
        "tip": "Warn guests not to touch the exterior of the stone bowl — it is over 180°C!",
        "commonMistake": "Placing the scorching stone bowl directly onto a laminate or wooden table, scorching the tabletop.",
        "moveOnWhen": "Safely placed on table.",
        "quickInstructions": "Transfer scorching stone bowl with oven mitts to wooden trivet on dining table."
      },
      {
        "step": 5,
        "title": "THE TABLESIDE MIX (BIBIM)",
        "whatYouNeed": [
          "Long metal Korean spoon (Sujeo)",
          "2 tbsp Bibimbap sauce"
        ],
        "description": "Drizzle 2 tablespoons of sweet-spicy Bibimbap sauce over the toppings. Using your long metal spoon, plunge into the center to break the egg yolk. Vigorously mix all ingredients together in circular, lifting motions until every grain of rice is coated in red sauce, glistening yolk, and vegetables. Dig to the bottom and invert the prized golden-brown crispy rice crust (nurungji) into the mix.",
        "howToDoIt": "The scorching stone cooks the raw egg yolk instantly as it is mixed through the rice, coating every grain in a rich, creamy custard.",
        "heat": "Retained Stone Heat",
        "duration": 2,
        "visualCues": "Vibrant red-tinted rice studded with vegetables and chunks of shatteringly crisp golden crust.",
        "smell": "Spicy, sweet, pungent, and deeply comforting.",
        "textureCheck": "Piping hot, creamy, crunchy, chewy, and crispy.",
        "whatShouldThisLookLike": "Thoroughly mixed, steaming hot Korean bibimbap.",
        "tip": "Scrape the crunchy nurungji off the bottom in large sheets to savor its nutty crunch.",
        "commonMistake": "Eating toppings separately without mixing — \"Bibim\" means \"mixed\", and the magic lies in the combined harmony!",
        "moveOnWhen": "Completely mixed and enjoyed with spoon.",
        "quickInstructions": "Add sauce, break yolk, mix furiously with spoon, flip crispy bottom crust into rice, and devour."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "No crispy rice crust (nurungji) formed.",
        "remedy": "Bowl was not heated long enough or no sesame oil was used on the stone. Heat over burner until you hear loud crackling for 2 full minutes."
      },
      {
        "mistake": "Bibimbap was soggy and watery.",
        "remedy": "Vegetables weren't squeezed dry after blanching. Always squeeze spinach and bean sprouts completely dry."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Rice crust burned black instead of golden",
        "whatHappened": "Burner flame was too high or cooked too long.",
        "whyItHappened": "Stone bowls absorb massive heat; high flame scorches starch.",
        "whatToDoNow": "Mix immediately and avoid the blackened center; add extra sesame oil to soften.",
        "howToPrevent": "Keep flame on medium-low once rice is packed into the bowl."
      }
    ],
    "substitutions": [
      {
        "original": "Beef bulgogi",
        "substitute": "Sautéed pressed tofu, diced chicken, or mixed mushrooms",
        "notes": "Vegetarian Bibimbap is a sacred temple food classic."
      },
      {
        "original": "Dolsot stone bowl",
        "substitute": "Heavy 8-inch cast-iron skillet",
        "notes": "Creates an equally sensational, crackling nurungji crust."
      }
    ],
    "safetyNotes": [
      "The stone bowl retains scorching heat (200°C) for up to 30 minutes; do not touch with bare hands."
    ],
    "servingGuide": {
      "restingTime": "Mix immediately at the table.",
      "garnishing": "Toasted sesame seeds and a drizzle of extra sesame oil.",
      "plating": "Heavy granite stone bowl (Dolsot) on wooden base with long metal Korean spoon and chopsticks.",
      "temperature": "Scorching hot.",
      "accompaniments": "Cold bean sprout soup (Kongnamul-guk) to soothe the palate and kimchi."
    }
  },
  "kimchi": {
    "id": "kimchi",
    "name": "Traditional Napa Cabbage Kimchi (Tongbaechu-kimchi)",
    "cuisine": "Korean",
    "region": "South Korea (National / Jeolla)",
    "servings": 12,
    "prepTime": 90,
    "cookTime": 15,
    "difficulty": "Hard",
    "overview": {
      "summary": "The beating soul of Korean gastronomy: whole heads of Korean Napa cabbage split, brine-salted until flexible, rinsed and drained, then meticulously hand-rubbed leaf by leaf with a vibrant seasoning paste made from sweet rice porridge, Gochugaru (sun-dried Korean chili flakes), fermented salted shrimp (Saeu-jeot), fish sauce, Asian pear, garlic, and ginger, fermented to fizzy, tangy, probiotic perfection.",
      "appearance": "Ruby-red, glossy quarters of whole Napa cabbage bound with paste, packed with julienned radish and scallions, glistening with lactic fermentation juices.",
      "texture": "Crisp, refreshing, crunchy cabbage rib giving way to a sparkling, carbonated, juicy burst of fermented brine.",
      "flavor": "Complex symphony of deep lactic tanginess, moderate fruity chili warmth, savory seafood umami, sweet pear undertones, and pungent garlic-ginger aromatics.",
      "restingTimeMinutes": 2880
    },
    "equipment": [
      {
        "name": "Large 12-quart plastic or stainless steel brining tub",
        "purpose": "Holds whole cabbage halves submerged in salt brine."
      },
      {
        "name": "Colander and large wire rack",
        "purpose": "Drains brined cabbage bone-dry for 2 hours (critical to prevent watery kimchi)."
      },
      {
        "name": "Airtight fermentation container (Onggi crock or E-Jen kimchi container with inner seal)",
        "purpose": "Excludes oxygen to foster beneficial anaerobic lactic acid bacteria."
      },
      {
        "name": "Food-safe silicone gloves",
        "purpose": "Protects hands from chili burn during the leaf-by-leaf rubbing process."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Quarter 2 large heads (approx 4kg) Napa cabbage by slicing halfway through the core and pulling halves apart with hands.",
        "durationMinutes": 10
      },
      {
        "task": "Dissolve 1 cup coarse Korean solar salt (Cheon-il-yeom) in 3 liters of cold water; sprinkle an extra 1/2 cup salt directly between thick white leaf ribs.",
        "durationMinutes": 15
      },
      {
        "task": "Brine cabbage for 6 to 8 hours, turning halves every 2 hours, until thickest stems bend into a \"U\" without snapping.",
        "durationMinutes": 480
      },
      {
        "task": "Rinse brined cabbage in cold running water 3 times; invert on wire rack to drain for a full 2 hours.",
        "durationMinutes": 120
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Cabbage Halving Technique",
        "technique": "Never cut cabbage all the way through with a knife! Cut only 5cm into the stem core, then insert fingers and gently pry the two halves apart with your hands. Hand-prying keeps the delicate tender leaf blades intact without shedding millions of tiny shreds."
      },
      {
        "item": "Glutinous Rice Porridge (Chapsal-puk)",
        "technique": "Simmer 2 tbsp sweet rice flour in 1.5 cups water until translucent paste forms; whisk in 2 tbsp sugar. The porridge provides starches that feed lactic acid bacteria, kicks off fermentation, and gives the chili paste adhesive body to cling to cabbage leaves."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Korean Napa cabbages (Baechu)",
        "prep": "quartered, brined & drained 2 hours",
        "amount": "2 large heads",
        "metric": "4000g",
        "imperial": "8.8 lbs",
        "common": "2 large heads"
      },
      {
        "name": "Korean coarse solar sea salt (Cheon-il-yeom)",
        "prep": "for brining",
        "amount": "1.5 cups",
        "metric": "300g",
        "imperial": "10.5 oz",
        "common": "1.5 cups"
      },
      {
        "name": "Gochugaru (coarse Korean red chili flakes)",
        "prep": "sun-dried, vibrant red",
        "amount": "2 cups",
        "metric": "200g",
        "imperial": "7 oz",
        "common": "2 cups"
      },
      {
        "name": "Sweet rice flour (Chapsal-garu)",
        "prep": "simmered with 350ml water into porridge",
        "amount": "2 tbsp",
        "metric": "25g",
        "imperial": "0.9 oz",
        "common": "2 tbsp"
      },
      {
        "name": "Korean radish (Mu) or Daikon",
        "prep": "julienned into 2mm matchsticks",
        "amount": "500g",
        "metric": "500g",
        "imperial": "1.1 lbs",
        "common": "1/2 large radish"
      },
      {
        "name": "Fresh garlic cloves",
        "prep": "peeled and pureed",
        "amount": "20 cloves",
        "metric": "100g",
        "imperial": "3.5 oz",
        "common": "1 cup"
      },
      {
        "name": "Fresh ginger",
        "prep": "peeled and pureed",
        "amount": "30g",
        "metric": "30g",
        "imperial": "1 oz",
        "common": "2 tbsp"
      },
      {
        "name": "Asian pear (Bae) or sweet apple",
        "prep": "peeled, cored, and pureed into pulp",
        "amount": "1 pear",
        "metric": "250g",
        "imperial": "9 oz",
        "common": "1 pear"
      },
      {
        "name": "Korean fish sauce (Myeolchi-aekjeot or Kkanari)",
        "prep": "anchovy or sand lance fish sauce",
        "amount": "1/2 cup",
        "metric": "120ml",
        "imperial": "4 fl oz",
        "common": "1/2 cup"
      },
      {
        "name": "Saeu-jeot (fermented salted baby shrimp)",
        "prep": "finely minced with brine",
        "amount": "3 tbsp",
        "metric": "50g",
        "imperial": "1.8 oz",
        "common": "3 tbsp"
      },
      {
        "name": "Scallions / Green onions",
        "prep": "cut into 4cm lengths",
        "amount": "8 stalks",
        "metric": "100g",
        "imperial": "3.5 oz",
        "common": "1 bunch"
      },
      {
        "name": "Korean garlic chives (Buchu)",
        "prep": "cut into 4cm lengths",
        "amount": "100g",
        "metric": "100g",
        "imperial": "3.5 oz",
        "common": "1 cup"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "VERIFY BEND TEST & DRAIN CABBAGE 2 HOURS",
        "whatYouNeed": [
          "Brined cabbage halves",
          "Wire rack or colander"
        ],
        "description": "Take the thickest white stem of a brined cabbage half and bend it into a tight \"U\" shape. It should bend smoothly and feel flexible like soft leather with zero snapping. If it snaps, brine 1 more hour. Rinse 3 times in clean water. Invert halves cut-side down on wire racks and drain for a FULL 2 HOURS.",
        "howToDoIt": "Proper salting extracts water from cells so the finished kimchi stays crisp. Draining for 2 hours is mandatory; wet cabbage dilutes the seasoning and turns kimchi soggy and sour.",
        "heat": "No Heat",
        "duration": 120,
        "visualCues": "Leaves are wilted and pliable; stems bend into complete loops without cracking.",
        "textureCheck": "Flexible and supple like soft leather.",
        "whatShouldThisLookLike": "Clean, drained, pliable cabbage quarters resting on racks.",
        "tip": "Gently squeeze the thick stems with your hands at the end of draining to expel final water droplets.",
        "commonMistake": "Rushing the draining step — excess water ruins the fermentation environment.",
        "moveOnWhen": "Cabbage stems bend into a U and have drained 2 full hours.",
        "quickInstructions": "Verify stems bend without snapping; rinse 3 times, drain cut-side down for 2 hours."
      },
      {
        "step": 2,
        "title": "COOK SWEET RICE PORRIDGE & COOL",
        "whatYouNeed": [
          "Saucepan",
          "2 tbsp sweet rice flour",
          "350ml cold water",
          "2 tbsp sugar"
        ],
        "description": "Whisk sweet rice flour and water in a saucepan over medium heat. Bring to a gentle simmer, whisking continuously for 5 minutes until it thickens into a translucent, glossy porridge. Whisk in 2 tbsp sugar. Turn off heat and let cool COMPLETELY to room temperature.",
        "howToDoIt": "The porridge provides food for the lactic acid bacteria and gives the paste a luscious body that glues seasoning to cabbage leaves.",
        "heat": "Medium Heat",
        "duration": 7,
        "visualCues": "White watery liquid thickens into a glossy, semi-translucent porridge.",
        "textureCheck": "Smooth, pudding-like consistency.",
        "whatShouldThisLookLike": "Cool, translucent sweet rice paste.",
        "tip": "Never add hot porridge to raw garlic and chili — heat cooks the garlic and kills fresh flavor.",
        "commonMistake": "Using regular wheat flour, which produces a sour bread dough flavor.",
        "moveOnWhen": "Porridge is completely cold to the touch.",
        "quickInstructions": "Simmer sweet rice flour and water for 5 mins until thick; whisk in sugar; cool completely."
      },
      {
        "step": 3,
        "title": "BLEND & MIX THE KIMCHI SEASONING PASTE (SOK)",
        "whatYouNeed": [
          "Large mixing bowl",
          "Cooled porridge",
          "Gochugaru flakes",
          "Pureed garlic, ginger, pear",
          "Fish sauce",
          "Saeu-jeot",
          "Radish matchsticks",
          "Scallions & chives"
        ],
        "description": "In a large basin, combine cooled rice porridge, 2 cups Gochugaru, pureed pear, garlic, ginger, fish sauce, and minced salted shrimp (Saeu-jeot). Mix thoroughly and rest 10 minutes for chili flakes to hydrate into a thick, glowing crimson paste. Fold in julienned Korean radish matchsticks, scallions, and garlic chives. Mix gently until evenly coated.",
        "howToDoIt": "Resting allows dry chili flakes to absorb liquid, deepening into a rich scarlet paste.",
        "heat": "No Heat",
        "duration": 15,
        "visualCues": "Intensely vibrant, glowing crimson paste packed with crisp radish ribbons and green herbs.",
        "smell": "Pungent, savory seafood, garlic, sweet pear, and fruity sun-dried chili.",
        "textureCheck": "Thick, moist paste that holds together.",
        "whatShouldThisLookLike": "A glistening, red, aromatic kimchi filling (Sok).",
        "tip": "Taste the paste! It should taste boldly salty, sweet, pungent, and savory. It must taste slightly saltier than food you would eat plain.",
        "commonMistake": "Skimping on salt/fish sauce — under-salted kimchi rots rather than fermenting.",
        "moveOnWhen": "Paste is uniform, glowing crimson, and hydrated.",
        "quickInstructions": "Mix porridge, gochugaru, garlic, ginger, pear, fish sauce, and shrimp; fold in radish and herbs."
      },
      {
        "step": 4,
        "title": "RUB PASTE LEAF BY LEAF & WRAP THE PARCEL",
        "whatYouNeed": [
          "Rubber gloves",
          "Drained cabbage quarters",
          "Seasoning paste",
          "Large work surface"
        ],
        "description": "Wear clean rubber gloves. Take one cabbage quarter. Starting from the outermost largest leaf and working toward the inner core, lift each leaf and rub a handful of seasoning paste across both sides, tucking shreds of radish and scallion between the layers. When all leaves are coated, gather the leaves together. Fold the outer long leaf snugly around the entire quarter like a tight swaddle. Repeat for all quarters.",
        "howToDoIt": "Swaddling the cabbage tightly keeps leaves compressed and minimizes trapped air pockets inside the crock.",
        "heat": "No Heat",
        "duration": 25,
        "visualCues": "Every leaf is lacquered in glowing red paste; cabbage is swaddled into a tight, neat parcel.",
        "textureCheck": "Firmly packed, glistening, red parcel.",
        "whatShouldThisLookLike": "Tightly wrapped, ruby-red Kimchi parcels.",
        "tip": "Focus the paste at the thick white stems; the thin green leafy tips need only a light brush.",
        "commonMistake": "Applying paste only to the outside of the cabbage head without coating inner leaves.",
        "moveOnWhen": "All cabbage quarters are rubbed and wrapped.",
        "quickInstructions": "Rub paste between every single leaf, tucking radish shreds; wrap outer leaf tightly around parcel."
      },
      {
        "step": 5,
        "title": "PACK TIGHTLY & THE TWO-STAGE FERMENTATION",
        "whatYouNeed": [
          "Fermentation container (E-Jen or Onggi crock)",
          "Plastic wrap or inner press plate"
        ],
        "description": "Pack kimchi quarters cut-side up into the container, pressing down forcefully with fists to expel all trapped air bubbles. Leave at least 5cm (2 inches) of headspace at the top (kimchi expands and bubbles during fermentation). Pour remaining bowl juices over the top. Press inner lid or plastic wrap tight against the surface. Seal tightly. Ferment at room temperature (18–20°C / 65–68°F) for 24 to 48 hours until tiny bubbles appear and brine tastes tangy. Transfer to refrigerator to age slowly for 2 to 4 weeks.",
        "howToDoIt": "Lactic acid bacteria thrive strictly in anaerobic (oxygen-free) environments. Pressing out air prevents mold growth and allows Leuconostoc bacteria to produce effervescent natural carbonation.",
        "heat": "Room Temp 24-48h, then Fridge (4°C / 39°F)",
        "duration": 2880,
        "visualCues": "Tiny bubbles of carbon dioxide fizz when pressed; cabbage turns from bright opaque red to deep translucent ruby; liquid levels rise.",
        "smell": "Tangy, mouth-watering sour aroma with garlic notes.",
        "textureCheck": "Crisp, sparkling crunch.",
        "whatShouldThisLookLike": "Bubbling, fermented, ruby-red kimchi submerged in tangy brine.",
        "tip": "Open the container once a day during room temperature fermentation to press down and burp built-up gas.",
        "commonMistake": "Filling the container to the brim — rising fermentation juices will overflow and leak everywhere.",
        "moveOnWhen": "Fermentation begins and kimchi is safely refrigerated.",
        "quickInstructions": "Pack tightly into container, press air out, ferment at room temp 24-48h until bubbling, then refrigerate."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Kimchi turned mushy, soft, and slimy.",
        "remedy": "Table salt with iodine was used, or cabbage was under-salted. Always use Korean coarse solar salt (Cheon-il-yeom)."
      },
      {
        "mistake": "White mold formed on top of the kimchi.",
        "remedy": "Cabbage was exposed to air. Always keep cabbage submerged under brine and pressed with an airtight inner plate."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Kimchi is fermenting too quickly and turning overly sour",
        "whatHappened": "Room temperature was too warm (above 23°C / 73°F).",
        "whyItHappened": "High heat accelerates lactic acid bacteria.",
        "whatToDoNow": "Move container to the coldest back shelf of the refrigerator immediately.",
        "howToPrevent": "Limit room-temperature fermentation to 24 hours in warm climates."
      }
    ],
    "substitutions": [
      {
        "original": "Saeu-jeot (salted shrimp)",
        "substitute": "Additional fish sauce + 1 tsp kelp powder (for vegan: soy sauce + mushroom broth)",
        "notes": "Vegan kimchi using kombu dashi and kelp powder is exceptional."
      },
      {
        "original": "Gochugaru",
        "substitute": "No direct substitute! Standard chili powder or paprika lacks the sweet fruity warmth and will ruin the kimchi.",
        "notes": "Must purchase authentic Korean Gochugaru."
      }
    ],
    "safetyNotes": [
      "Always use clean utensils when retrieving kimchi from the jar to prevent introducing rogue molds."
    ],
    "servingGuide": {
      "restingTime": "Ferment at least 1 week in fridge for optimal flavor.",
      "garnishing": "Toasted sesame seeds.",
      "plating": "Cut crosswise into 4cm bite-sized segments and stack neatly on a small ceramic banchan dish.",
      "temperature": "Chilled or room temperature.",
      "accompaniments": "Piping hot steamed rice, grilled pork belly, or boiled dumplings."
    }
  },
  "tteokbokki": {
    "id": "tteokbokki",
    "name": "Street-Style Spicy Korean Rice Cakes (Tteokbokki)",
    "cuisine": "Korean",
    "region": "South Korea (Seoul / Sindang-dong)",
    "servings": 4,
    "prepTime": 15,
    "cookTime": 15,
    "difficulty": "Easy",
    "overview": {
      "summary": "Korea's quintessential street-cart comfort food: chewy cylindrical rice cakes (Garae-tteok) and triangular fried fish cakes (Eomuk) simmered in a bubbling, sweet, fiery crimson broth of rich anchovy-kelp dashi, Gochujang, Gochugaru, and corn syrup, reduced into a thick, glossy lacquer, served with halved hard-boiled eggs and scallions.",
      "appearance": "A shallow dish of gleaming, scarlet-glazed cylindrical rice cakes intermingled with folded fish cake strips, crowned with halved yellow egg yolks and green scallions.",
      "texture": "Addictively chewy, soft, bouncy rice cakes (\"Jjondeuk-jjondeuk\") enveloped in a thick, velvety, clinging chili glaze with tender savory fish cakes.",
      "flavor": "Irresistible sweet-and-spicy rush: warming chili heat, sweet corn syrup, deep seafood umami from anchovy dashi and fish cakes, and savory fermented soybean notes.",
      "restingTimeMinutes": 2
    },
    "equipment": [
      {
        "name": "Wide, shallow sauté pan or Dutch oven (10–12 inch)",
        "purpose": "Allows sauce to reduce quickly while rice cakes simmer in a single layer."
      },
      {
        "name": "Wooden cooking spoon",
        "purpose": "Gently stirs rice cakes so they don't stick to the bottom of the pan."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Soak 500g cylindrical Korean rice cakes (Garae-tteok) in warm water for 15 minutes to soften.",
        "durationMinutes": 15
      },
      {
        "task": "Slice 3 rectangular Korean fish cake sheets (Eomuk) into triangular bite-sized pieces.",
        "durationMinutes": 3
      },
      {
        "task": "Boil 2 large eggs for 8 minutes; peel and cut in half.",
        "durationMinutes": 10
      },
      {
        "task": "Prepare anchovy-kelp dashi broth: simmer 6 dried anchovies and 1 piece kombu in 600ml water for 15 minutes; discard solids.",
        "durationMinutes": 15
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Rice Cake Selection & Hydration",
        "technique": "Fresh rice cakes can be added directly. Refrigerated or frozen rice cakes MUST soak in warm water for 15 minutes prior to cooking; throwing cold, hard rice cakes directly into boiling sauce causes them to crack and split open."
      },
      {
        "item": "Glaze Thickening (Corn Syrup Secret)",
        "technique": "Korean street cart vendors universally use Korean corn syrup (Mulyeot) or rice syrup. Corn syrup gives the sauce its signature mirror-like gloss and clinging, sticky viscosity that clings to smooth rice cakes."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Korean cylinder rice cakes (Garae-tteok)",
        "prep": "soaked in warm water 15 mins",
        "amount": "500g",
        "metric": "500g",
        "imperial": "1.1 lbs",
        "common": "1 pack"
      },
      {
        "name": "Korean flat fish cake sheets (Eomuk / Odeng)",
        "prep": "cut into triangles",
        "amount": "3 sheets",
        "metric": "150g",
        "imperial": "5.3 oz",
        "common": "3 sheets"
      },
      {
        "name": "Anchovy-kelp dashi broth (or water)",
        "prep": "simmered seafood stock",
        "amount": "600ml",
        "metric": "600ml",
        "imperial": "20 fl oz",
        "common": "2.5 cups"
      },
      {
        "name": "Gochujang (Korean red chili paste)",
        "prep": "for thick body & flavor",
        "amount": "3 tbsp",
        "metric": "60g",
        "imperial": "2.1 oz",
        "common": "3 tbsp"
      },
      {
        "name": "Gochugaru (Korean chili flakes)",
        "prep": "fine powder for bright red color & heat",
        "amount": "1.5 tbsp",
        "metric": "15g",
        "imperial": "0.5 oz",
        "common": "1.5 tbsp"
      },
      {
        "name": "Korean corn syrup (Mulyeot) or rice syrup",
        "prep": "for glossy clinging glaze",
        "amount": "2 tbsp",
        "metric": "30ml",
        "imperial": "1 fl oz",
        "common": "2 tbsp"
      },
      {
        "name": "Granulated sugar",
        "prep": "for street-food sweetness",
        "amount": "1.5 tbsp",
        "metric": "20g",
        "imperial": "0.7 oz",
        "common": "1.5 tbsp"
      },
      {
        "name": "Korean soy sauce (Jinganjang)",
        "prep": "for savory seasoning",
        "amount": "1 tbsp",
        "metric": "15ml",
        "imperial": "0.5 fl oz",
        "common": "1 tbsp"
      },
      {
        "name": "Fresh garlic cloves",
        "prep": "finely minced",
        "amount": "1 tbsp",
        "metric": "15g",
        "imperial": "0.5 oz",
        "common": "3 cloves"
      },
      {
        "name": "Scallions / Green onions",
        "prep": "cut into 5cm long batons",
        "amount": "3 stalks",
        "metric": "50g",
        "imperial": "1.8 oz",
        "common": "1/2 cup"
      },
      {
        "name": "Hard-boiled eggs",
        "prep": "peeled and halved lengthwise",
        "amount": "2 eggs",
        "metric": "100g",
        "imperial": "3.5 oz",
        "common": "2 eggs"
      },
      {
        "name": "Toasted sesame seeds",
        "prep": "for garnish",
        "amount": "1 tsp",
        "metric": "3g",
        "imperial": "0.1 oz",
        "common": "1 tsp"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "DISSOLVE SEASONINGS IN ANCHOVY DASHI BROTH",
        "whatYouNeed": [
          "Wide pan",
          "600ml anchovy broth",
          "3 tbsp gochujang",
          "1.5 tbsp gochugaru",
          "1.5 tbsp sugar",
          "1 tbsp soy sauce",
          "Minced garlic"
        ],
        "description": "Pour 600ml anchovy-kelp broth into the wide pan over medium-high heat. Add gochujang, gochugaru, sugar, soy sauce, and minced garlic. Stir with a wooden spoon until the chili paste dissolves completely into a smooth, crimson broth. Bring to a rolling boil.",
        "howToDoIt": "Dissolving the seasonings in cold broth ensures a velvety, lump-free sauce base before starches are added.",
        "heat": "Medium-High Heat",
        "duration": 3,
        "visualCues": "Vibrant scarlet broth bubbling vigorously across the pan.",
        "smell": "Pungent, sweet-spicy chili, garlic, and ocean anchovy broth.",
        "textureCheck": "Smooth, thin simmering sauce.",
        "whatShouldThisLookLike": "Bubbling red broth covering the base of the wide pan.",
        "tip": "Use fine gochugaru powder if available for a smoother, silkier street-cart sauce appearance.",
        "commonMistake": "Using plain tap water with no broth — the sauce will taste flat and one-dimensional.",
        "moveOnWhen": "Broth is boiling vigorously with seasonings dissolved.",
        "quickInstructions": "Whisk broth, gochujang, gochugaru, sugar, soy, and garlic in pan; bring to a boil."
      },
      {
        "step": 2,
        "title": "ADD RICE CAKES & SIMMER TILL PILLOWY",
        "whatYouNeed": [
          "500g drained rice cakes (garae-tteok)"
        ],
        "description": "Drain the soaked rice cakes and slide them into the boiling red broth. Reduce heat to medium. Simmer for 5 to 6 minutes, stirring frequently along the bottom of the pan to prevent the sticky rice cakes from sticking.",
        "howToDoIt": "Simmering allows the rice cakes to absorb the spicy broth while their surface starches gelatinize and thicken the sauce.",
        "heat": "Medium Heat",
        "duration": 6,
        "visualCues": "Rice cakes plump up, turning soft and yielding; sauce begins to thicken slightly.",
        "hear": "Steady, bubbling simmer.",
        "smell": "Sweet chili and savory rice starch.",
        "textureCheck": "A wooden spoon presses easily into the rice cake; pillowy and soft.",
        "whatShouldThisLookLike": "Rice cakes simmering in bubbling crimson sauce.",
        "tip": "Stir regularly in figure-8 motions along the pan bottom — rice starch is notoriously prone to sticking.",
        "commonMistake": "Boiling on max heat without stirring, which scorches the bottom layer of rice cakes.",
        "moveOnWhen": "Rice cakes are completely soft and chewy.",
        "quickInstructions": "Add soaked rice cakes; simmer on medium for 5-6 mins, stirring frequently until soft."
      },
      {
        "step": 3,
        "title": "ADD FISH CAKES, SCALLIONS & REDUCE TO GLOSS",
        "whatYouNeed": [
          "Sliced fish cakes",
          "Scallion batons",
          "2 tbsp corn syrup (Mulyeot)"
        ],
        "description": "Add sliced fish cakes and scallion batons to the pan. Drizzle in 2 tbsp Korean corn syrup. Simmer vigorously over medium heat for 4 to 5 minutes, stirring continuously, until the sauce reduces by half into a thick, glossy, clingy crimson glaze that coats the rice cakes completely.",
        "howToDoIt": "Corn syrup provides the mirror-sheen and viscosity, while fish cakes impart savory umami oils into the sauce as it reduces.",
        "heat": "Medium Heat",
        "duration": 5,
        "visualCues": "Sauce transforms from soupy liquid into a thick, syrupy, mirror-gloss crimson lacquer that coats the back of a spoon.",
        "hear": "Thick, heavy, slow bubbling (\"bloop-bloop\").",
        "smell": "Sweet, sticky, savory Korean street food aroma.",
        "textureCheck": "Thick, velvety sauce clinging to every surface.",
        "whatShouldThisLookLike": "Glossy, vibrant scarlet tteokbokki in thick sticky glaze.",
        "tip": "Add corn syrup in this final stage to preserve maximum shine and elasticity.",
        "commonMistake": "Pulling off heat while sauce is still watery — authentic tteokbokki sauce must be thick and clinging.",
        "moveOnWhen": "Sauce is reduced to a thick, glossy glaze.",
        "quickInstructions": "Add fish cakes, scallions, and corn syrup; simmer 4-5 mins until sauce is thick and glossy."
      },
      {
        "step": 4,
        "title": "ADD BOILED EGGS & REST OFF HEAT",
        "whatYouNeed": [
          "Halved hard-boiled eggs"
        ],
        "description": "Nestle the halved hard-boiled eggs into the hot sauce, cut-side up. TURN OFF HEAT. Let rest undisturbed for 2 minutes. The residual heat allows the rice cakes to absorb the final juices while the egg yolks soak in the sweet chili glaze.",
        "howToDoIt": "Resting allows starches to settle into their peak chewy (\"jjondeuk\") texture.",
        "heat": "Off Heat",
        "duration": 2,
        "visualCues": "Glistening sauce thickens further into a deep, clinging lacquer.",
        "textureCheck": "Peak chewiness.",
        "whatShouldThisLookLike": "Finished street-style tteokbokki pan with eggs nestled in sauce.",
        "tip": "Crushing the hard-boiled egg yolk into the spicy sauce with your spoon creates an insanely rich, creamy bite!",
        "commonMistake": "Eating instantly while scorching hot — the rice cakes are too soft; resting brings out peak chew.",
        "moveOnWhen": "2-minute rest is complete.",
        "quickInstructions": "Add halved boiled eggs, turn off heat, rest 2 mins to settle glaze."
      },
      {
        "step": 5,
        "title": "PLATE & GARNISH WITH SESAME SEEDS",
        "whatYouNeed": [
          "Serving platter or shallow bowl",
          "Toasted sesame seeds"
        ],
        "description": "Transfer tteokbokki, fish cakes, and sauce to a wide shallow bowl. Arrange halved eggs on top. Scatter toasted sesame seeds over the dish. Serve piping hot with toothpicks or forks.",
        "howToDoIt": "Serving in a shallow bowl keeps the sauce pooled around the rice cakes so every bite can be dredged through the glaze.",
        "heat": "Off Heat",
        "duration": 1,
        "visualCues": "Vibrant scarlet red dish accented by yellow egg yolks, green scallions, and golden sesame seeds.",
        "smell": "Irresistible sweet-spicy chili, sesame, and seafood fragrance.",
        "textureCheck": "Bouncy, chewy, and saucy.",
        "whatShouldThisLookLike": "Classic Seoul street-cart tteokbokki plate.",
        "tip": "Dip fried seaweed rolls (Gimmari) or mandu directly into the leftover tteokbokki sauce!",
        "commonMistake": "Letting leftovers sit uncovered — rice cakes dry out and turn hard as plastic.",
        "moveOnWhen": "Plated and served.",
        "quickInstructions": "Transfer to shallow bowl, arrange eggs on top, dust with sesame seeds, serve hot."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Rice cakes split open and cracked during cooking.",
        "remedy": "Cold refrigerated rice cakes were dropped directly into boiling liquid. Always soak in warm water for 15 minutes first."
      },
      {
        "mistake": "Sauce was too thin and watery.",
        "remedy": "Sauce wasn't reduced long enough. Simmer until sauce reduces into a thick, glossy syrupy coat."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Sauce reduced too much and turned pasty/dry",
        "whatHappened": "Boiled too long on high heat.",
        "whyItHappened": "Excess water evaporation.",
        "whatToDoNow": "Stir in 3 to 4 tablespoons of warm water or dashi broth over low heat until sauce returns to a glossy glaze.",
        "howToPrevent": "Turn down heat once sauce begins to coat the spoon."
      }
    ],
    "substitutions": [
      {
        "original": "Fish cake sheets (Eomuk)",
        "substitute": "Fried tofu puffs or Vienna cocktail sausages",
        "notes": "Sausage-tteokbokki (Sotteok) is a wildly popular modern Korean highway rest-stop snack."
      },
      {
        "original": "Corn syrup (Mulyeot)",
        "substitute": "Honey, maple syrup, or extra granulated sugar",
        "notes": "Honey provides floral sweetness and good shine."
      }
    ],
    "safetyNotes": [
      "Chew rice cakes thoroughly before swallowing due to their dense, chewy texture."
    ],
    "servingGuide": {
      "restingTime": "2 minutes off heat.",
      "garnishing": "Toasted sesame seeds and sliced scallions.",
      "plating": "Shallow oval ceramic dish or retro green-and-white melamine snack plate.",
      "temperature": "Piping hot and saucy.",
      "accompaniments": "Hot fish cake broth (Eomuk-tang), crispy seaweed rolls (Gimmari), and yellow pickled radish (Danmuji)."
    }
  },
  "japchae": {
    "id": "japchae",
    "name": "Royal Korean Stir-Fried Glass Noodles (Japchae)",
    "cuisine": "Korean",
    "region": "South Korea (National / Joseon Royal Court)",
    "servings": 4,
    "prepTime": 30,
    "cookTime": 15,
    "difficulty": "Medium",
    "overview": {
      "summary": "The celebratory jewel of Korean banquets: chewy, translucent sweet potato starch glass noodles (Dangmyeon) tossed with seasoned beef ribeye, wood ear mushrooms, spinach, carrots, and sweet onions, individually stir-fried to preserve their distinct colors and crunches, dressed in a luscious sauce of rich soy, toasted sesame oil, and garlic.",
      "appearance": "Glistening mound of translucent, golden-brown glass noodles entwined with ribbons of jade spinach, orange carrots, black wood ear mushrooms, and savory beef strips, dusted with sesame seeds.",
      "texture": "Addictively bouncy, chewy, slippery glass noodles (\"Dang-myeon\") contrasted with tender beef, crunchy vegetables, and delicate leafy spinach.",
      "flavor": "Deeply aromatic sweet-savory harmony: rich soy sauce, nutty toasted sesame oil, sweet caramelized onions, and subtle garlic warmth.",
      "restingTimeMinutes": 2
    },
    "equipment": [
      {
        "name": "Large 14-inch wok or wide skillet",
        "purpose": "For individually stir-frying vegetables and tossing the large batch of noodles."
      },
      {
        "name": "Large 6-quart stockpot",
        "purpose": "Boils glass noodles with plenty of room so they don't clump."
      },
      {
        "name": "Large mixing bowl",
        "purpose": "For hand-tossing (Muchim) the hot noodles and vegetables together."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Soak 250g Korean dangmyeon (sweet potato noodles) in warm water for 30 minutes to reduce boiling time.",
        "durationMinutes": 30
      },
      {
        "task": "Slice 150g beef ribeye into thin 5cm matchsticks; marinate with 1 tbsp soy sauce, 1 tsp sugar, 1 tsp sesame oil, and 1 minced garlic clove.",
        "durationMinutes": 10
      },
      {
        "task": "Blanch 200g baby spinach for 30 seconds; shock in cold water, squeeze bone-dry, and season with 1/2 tsp sesame oil and pinch of salt.",
        "durationMinutes": 5
      },
      {
        "task": "Julienne 1 yellow onion, 1 carrot, and 4 rehydrated shiitake / wood ear mushrooms into thin 5cm matchsticks.",
        "durationMinutes": 8
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Noodle Selection (Dangmyeon)",
        "technique": "Must use 100% sweet potato starch noodles (Dangmyeon). Rice vermicelli or bean thread noodles will turn to mush when tossed; sweet potato starch noodles possess an extraordinary chewy, elastic springiness that holds up to tossing."
      },
      {
        "item": "Individual Sautéing (Bokkeum)",
        "technique": "Each vegetable must be sautéed separately in a hot wok with a drop of oil and a pinch of salt. Sautéing them separately prevents color bleeding (carrots won't turn onions orange) and guarantees every vegetable retains its unique crisp-tender texture."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Korean sweet potato glass noodles (Dangmyeon)",
        "prep": "soaked 30 mins, boiled 6 mins",
        "amount": "250g",
        "metric": "250g",
        "imperial": "9 oz",
        "common": "250g"
      },
      {
        "name": "Beef ribeye or sirloin",
        "prep": "sliced into 5cm thin strips & marinated",
        "amount": "150g",
        "metric": "150g",
        "imperial": "5.3 oz",
        "common": "150g"
      },
      {
        "name": "Baby spinach",
        "prep": "blanched, squeezed bone-dry & seasoned",
        "amount": "200g",
        "metric": "200g",
        "imperial": "7 oz",
        "common": "1 bunch"
      },
      {
        "name": "Yellow onion",
        "prep": "thinly sliced into ribbons",
        "amount": "1 medium",
        "metric": "150g",
        "imperial": "5.3 oz",
        "common": "1 onion"
      },
      {
        "name": "Carrot",
        "prep": "peeled and julienned into 5cm matchsticks",
        "amount": "1 medium",
        "metric": "100g",
        "imperial": "3.5 oz",
        "common": "1 carrot"
      },
      {
        "name": "Dried wood ear or shiitake mushrooms",
        "prep": "rehydrated in hot water and sliced",
        "amount": "4 mushrooms",
        "metric": "50g",
        "imperial": "1.8 oz",
        "common": "1/2 cup"
      },
      {
        "name": "Korean soy sauce (Jinganjang)",
        "prep": "divided (marinade, noodles & dressing)",
        "amount": "4 tbsp",
        "metric": "60ml",
        "imperial": "2 fl oz",
        "common": "1/4 cup"
      },
      {
        "name": "Pure toasted sesame oil",
        "prep": "divided (the soul of japchae)",
        "amount": "4 tbsp",
        "metric": "60ml",
        "imperial": "2 fl oz",
        "common": "1/4 cup"
      },
      {
        "name": "Granulated sugar or honey",
        "prep": "for sweet-savory balance",
        "amount": "2.5 tbsp",
        "metric": "30g",
        "imperial": "1 oz",
        "common": "2.5 tbsp"
      },
      {
        "name": "Fresh garlic cloves",
        "prep": "finely minced",
        "amount": "2 tbsp",
        "metric": "20g",
        "imperial": "0.7 oz",
        "common": "4 cloves"
      },
      {
        "name": "Toasted white sesame seeds",
        "prep": "for garnish",
        "amount": "1.5 tbsp",
        "metric": "15g",
        "imperial": "0.5 oz",
        "common": "1.5 tbsp"
      },
      {
        "name": "Ground black pepper",
        "prep": "freshly cracked",
        "amount": "1/2 tsp",
        "metric": "1.5g",
        "imperial": "0.05 oz",
        "common": "1/2 tsp"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "BOIL & SEASON DANGMYEON GLASS NOODLES",
        "whatYouNeed": [
          "Stockpot of boiling water",
          "250g soaked glass noodles",
          "1 tbsp soy sauce",
          "1 tbsp sesame oil"
        ],
        "description": "Bring a large pot of water to a rolling boil. Add soaked dangmyeon noodles. Boil for 6 to 7 minutes until translucent, tender, and bouncy with no hard white core. Drain thoroughly in a colander (do NOT rinse with water!). Transfer warm noodles to the large mixing bowl. Immediately toss with 1 tbsp soy sauce and 1 tbsp sesame oil. Cut noodles with kitchen shears 2–3 times into manageable lengths.",
        "howToDoIt": "Tossing hot drained noodles in oil immediately coats the starches, preventing them from clumping while infusing them with savory color.",
        "heat": "High Boil",
        "duration": 8,
        "visualCues": "Noodles turn crystal translucent, glossy, and light golden-amber from soy sauce.",
        "smell": "Toasted sesame and sweet potato starch.",
        "textureCheck": "Elastic, springy, and tender.",
        "whatShouldThisLookLike": "Glistening, separate golden glass noodles in mixing bowl.",
        "tip": "Cutting the noodles with kitchen shears makes them much easier to toss and eat with chopsticks.",
        "commonMistake": "Rinsing cooked noodles in cold water — washes away surface starches that help the dressing cling.",
        "moveOnWhen": "Noodles are boiled, drained, seasoned, and snipped.",
        "quickInstructions": "Boil noodles 6-7 mins, drain, toss immediately with 1 tbsp soy and 1 tbsp sesame oil, snip with shears."
      },
      {
        "step": 2,
        "title": "STIR-FRY VEGETABLES INDIVIDUALLY",
        "whatYouNeed": [
          "Wok",
          "Cooking oil",
          "Sliced onions",
          "Julienned carrots",
          "Sliced mushrooms"
        ],
        "description": "Heat 1 tsp oil in wok over medium-high heat. Add sliced onions with a pinch of salt; stir-fry 2 minutes until translucent but still crisp. Transfer to the noodle bowl. Add 1 tsp oil to wok; stir-fry carrots with a pinch of salt for 2 minutes until tender-crisp. Transfer to bowl. Add 1 tsp oil; stir-fry sliced mushrooms with 1/2 tsp soy sauce for 2 minutes. Transfer to bowl.",
        "howToDoIt": "Cooking vegetables individually preserves their distinct colors and crunches without turning them into a soggy mixed stew.",
        "heat": "Medium-High Heat",
        "duration": 7,
        "visualCues": "Onions are glassy, carrots are bright vibrant orange, mushrooms are juicy and brown.",
        "smell": "Sautéed onions and earthy mushrooms.",
        "textureCheck": "Tender-crisp with an audible snap.",
        "whatShouldThisLookLike": "Vibrant mounds of cooked vegetables resting on top of the noodles.",
        "tip": "Never overcook carrots until limp — they provide essential crunchy texture in the soft noodles.",
        "commonMistake": "Dumping all vegetables into the wok together — moisture creates steam that dulls colors and makes onions mushy.",
        "moveOnWhen": "All vegetables are individually stir-fried and added to the bowl.",
        "quickInstructions": "Stir-fry onions, carrots, and mushrooms separately for 2 mins each; transfer to noodle bowl."
      },
      {
        "step": 3,
        "title": "STIR-FRY MARINATED BEEF",
        "whatYouNeed": [
          "Wok",
          "1 tsp oil",
          "Marinated beef strips"
        ],
        "description": "Heat 1 tsp oil in the wok over high heat. Add marinated beef strips in a single layer. Stir-fry aggressively for 2 minutes until the beef is fully browned, caramelized, and fragrant. Scrape beef and all pan juices directly into the noodle bowl.",
        "howToDoIt": "High heat sears the beef instantly, while the pan fond provides savory richness to the noodle dressing.",
        "heat": "High Heat",
        "duration": 2,
        "visualCues": "Beef caramelizes with glistening brown edges; savory juices pool slightly.",
        "hear": "Brisk, snapping sizzle.",
        "smell": "Sweet marinated bulgogi beef and garlic.",
        "textureCheck": "Tender and juicy beef strips.",
        "whatShouldThisLookLike": "Sautéed brown beef strips added to the colorful bowl.",
        "tip": "Include every drop of the beef cooking juices — it acts as part of the sauce!",
        "commonMistake": "Overcooking beef until dry and chewy.",
        "moveOnWhen": "Beef is cooked and added to bowl.",
        "quickInstructions": "Stir-fry marinated beef over high heat for 2 mins; transfer to noodle bowl with juices."
      },
      {
        "step": 4,
        "title": "THE HAND-TOSSING STAGE (SON-MAT MUCHIM)",
        "whatYouNeed": [
          "Noodle bowl with all toppings",
          "Blanched seasoned spinach",
          "3 tbsp soy sauce",
          "2 tbsp sugar",
          "2 tbsp sesame oil",
          "Black pepper",
          "Food-safe glove"
        ],
        "description": "Add blanched spinach to the bowl. Drizzle remaining 3 tbsp soy sauce, 2 tbsp sugar, 2 tbsp sesame oil, and black pepper across the ingredients. Put on a clean glove. Use your hands to gently lift, toss, and separate the noodles and toppings together until every strand of glass noodle is uniformly coated in sauce and toppings are evenly distributed.",
        "howToDoIt": "Hand-tossing (\"Son-mat\" or \"taste of the hands\") distributes the delicate vegetables evenly without crushing them, while massaging the dressing into the warm noodles.",
        "heat": "No Heat",
        "duration": 3,
        "visualCues": "Noodles glisten with a uniform mahogany sheen, specked evenly with green spinach, orange carrot, and dark beef.",
        "smell": "Intoxicating aroma of sweet soy and toasted sesame oil.",
        "textureCheck": "Silky, slippery, and cohesive.",
        "whatShouldThisLookLike": "A glorious, evenly distributed bowl of glossy Korean Japchae.",
        "tip": "Taste a noodle: adjust with extra soy sauce for saltiness or extra sugar for sweetness.",
        "commonMistake": "Tossing with metal tongs, which shreds the delicate noodles and tears spinach leaves.",
        "moveOnWhen": "Noodles are evenly coated and harmoniously mixed.",
        "quickInstructions": "Add spinach, soy, sugar, sesame oil, and pepper; toss gently with gloved hands until glossy."
      },
      {
        "step": 5,
        "title": "PLATE & SHOWER WITH TOASTED SESAME",
        "whatYouNeed": [
          "Serving platter",
          "1.5 tbsp toasted white sesame seeds"
        ],
        "description": "Mound the Japchae high onto a wide porcelain serving platter. Sprinkle a generous shower of toasted white sesame seeds over the top. Serve warm or at room temperature.",
        "howToDoIt": "Mounding high showcases the vibrant colors and prevents the noodles from drying out on the edges.",
        "heat": "Off Heat",
        "duration": 1,
        "visualCues": "Towering, glistening noodle presentation with contrasting ruby, green, and orange jewel-like accents.",
        "smell": "Nutty sesame and savory sweet sauce.",
        "textureCheck": "Bouncy, chewy, and succulent.",
        "whatShouldThisLookLike": "Royal banquet-style platter of Korean Japchae.",
        "tip": "Japchae is one of the rare noodle dishes that tastes sensational at room temperature, making it the ultimate party food!",
        "commonMistake": "Serving ice-cold straight from the fridge — sesame oil hardens and noodles turn stiff. Reheat gently.",
        "moveOnWhen": "Plated and garnished.",
        "quickInstructions": "Mound noodles on platter, shower with toasted sesame seeds, serve warm."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Noodles were mushy and broke into tiny fragments.",
        "remedy": "Noodles were overcooked or low-quality vermicelli was used. Cook 100% sweet potato dangmyeon for 6-7 minutes only."
      },
      {
        "mistake": "Noodles clumped together into an unmanageable block.",
        "remedy": "Hot boiled noodles were left in the colander without seasoning. Always toss immediately with sesame oil and soy sauce while piping hot."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Leftover Japchae in fridge turned hard and opaque",
        "whatHappened": "Sweet potato starch retrogrades when cold.",
        "whyItHappened": "Normal physical starch reaction.",
        "whatToDoNow": "Warm gently in a hot skillet with 1 tbsp water and 1 tsp sesame oil for 2 minutes — noodles will turn crystal-clear and chewy again instantly!",
        "howToPrevent": "Always reheat cold Japchae before eating."
      }
    ],
    "substitutions": [
      {
        "original": "Beef ribeye",
        "substitute": "Thinly sliced pork loin, chicken breast, or sautéed king oyster mushrooms",
        "notes": "Mushroom Japchae (Beoseot-japchae) is an exquisite and traditional Buddhist temple variation."
      },
      {
        "original": "Wood ear mushrooms",
        "substitute": "Fresh shiitake or brown cremini mushrooms",
        "notes": "Provide similar earthy depth."
      }
    ],
    "safetyNotes": [
      "Beef must reach internal temperature of 71°C (160°F)."
    ],
    "servingGuide": {
      "restingTime": "2 minutes before serving.",
      "garnishing": "Toasted white sesame seeds and a drizzle of finishing sesame oil.",
      "plating": "Mounded high on a large ceramic serving platter.",
      "temperature": "Warm or room temperature.",
      "accompaniments": "Kimchi, Galbi (short ribs), and cold barley tea."
    }
  },
  "bulgogi": {
    "id": "bulgogi",
    "name": "Classic Korean Marinated Beef BBQ (Bulgogi)",
    "cuisine": "Korean",
    "region": "South Korea (National)",
    "servings": 4,
    "prepTime": 25,
    "cookTime": 10,
    "difficulty": "Easy",
    "overview": {
      "summary": "Korea's world-renowned \"fire meat\": wafer-thin slices of prime beef ribeye tenderized naturally with grated Asian pear and onion, marinated in sweet soy sauce, garlic, ginger, and toasted sesame oil, flash-charred over screaming wok or grill heat with sweet onions and scallions to create caramelized, melt-in-the-mouth beef ribbons swimming in savory-sweet juices.",
      "appearance": "Glistening, mahogany-seared beef ribbons flecked with charred caramelized edges, tossed with sweet translucent onions and bright green scallions.",
      "texture": "Incredibly tender, meltingly soft beef with delicate charred edges that can be effortlessly sliced with a spoon.",
      "flavor": "Irresistible sweet-savory harmony: rich umami soy sauce, fruity honey-pear sweetness, pungent garlic, and nutty toasted sesame.",
      "restingTimeMinutes": 2
    },
    "equipment": [
      {
        "name": "14-inch carbon steel wok, cast-iron skillet, or tabletop grill",
        "purpose": "Delivers intense searing heat to caramelize the sugary marinade without boiling the meat."
      },
      {
        "name": "Box grater or food processor",
        "purpose": "Grates Asian pear and onion into a fine enzymatic tenderizing puree."
      },
      {
        "name": "Large mixing bowl",
        "purpose": "For marinating beef slices."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Freeze 600g beef ribeye or top sirloin for 45 minutes until firm; slice paper-thin (2mm) across the grain.",
        "durationMinutes": 10
      },
      {
        "task": "Grate 1/2 Asian pear (Bae) and 1/2 yellow onion into a fine wet pulp.",
        "durationMinutes": 5
      },
      {
        "task": "Mix marinade: 5 tbsp soy sauce, 2.5 tbsp brown sugar, 2 tbsp mirin, 2 tbsp sesame oil, 2 tbsp minced garlic, 1 tsp grated ginger, and black pepper.",
        "durationMinutes": 5
      },
      {
        "task": "Marinate beef in pear-onion puree and marinade for at least 30 minutes (or up to 4 hours in fridge).",
        "durationMinutes": 30
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Asian Pear Tenderization (Calpain Enzyme)",
        "technique": "Korean Asian pear (Bae) contains calpain, a natural proteolytic enzyme that gently breaks down tough meat muscle fibers into melting tenderness within 30 minutes without turning meat mushy. Never use kiwi or pineapple — their enzymes are too aggressive and dissolve beef into slurry."
      },
      {
        "item": "Paper-Thin Slicing",
        "technique": "Partially freezing the beef hardens the fat and muscle, allowing your sharpest knife to slice clean, paper-thin 2mm ribbons that cook in seconds."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Beef ribeye, top sirloin, or tenderloin",
        "prep": "sliced paper-thin (2mm) across the grain",
        "amount": "600g",
        "metric": "600g",
        "imperial": "1.3 lbs",
        "common": "600g"
      },
      {
        "name": "Korean Asian pear (Bae)",
        "prep": "peeled and finely grated with juice",
        "amount": "1/2 pear",
        "metric": "150g",
        "imperial": "5.3 oz",
        "common": "1/2 pear"
      },
      {
        "name": "Yellow onion (divided)",
        "prep": "half grated for marinade, half sliced into ribbons for cooking",
        "amount": "1 large",
        "metric": "200g",
        "imperial": "7 oz",
        "common": "1 onion"
      },
      {
        "name": "Korean soy sauce (Jinganjang)",
        "prep": "marinade backbone",
        "amount": "5 tbsp",
        "metric": "75ml",
        "imperial": "2.5 fl oz",
        "common": "1/3 cup"
      },
      {
        "name": "Brown sugar",
        "prep": "adds rich molasses caramelization",
        "amount": "2.5 tbsp",
        "metric": "35g",
        "imperial": "1.2 oz",
        "common": "2.5 tbsp"
      },
      {
        "name": "Mirin (sweet rice cooking wine)",
        "prep": "for luster & tenderizing",
        "amount": "2 tbsp",
        "metric": "30ml",
        "imperial": "1 fl oz",
        "common": "2 tbsp"
      },
      {
        "name": "Toasted sesame oil",
        "prep": "for nutty aroma",
        "amount": "2 tbsp",
        "metric": "30ml",
        "imperial": "1 fl oz",
        "common": "2 tbsp"
      },
      {
        "name": "Fresh garlic cloves",
        "prep": "finely minced",
        "amount": "2 tbsp",
        "metric": "20g",
        "imperial": "0.7 oz",
        "common": "5 cloves"
      },
      {
        "name": "Fresh ginger",
        "prep": "finely grated",
        "amount": "1 tsp",
        "metric": "5g",
        "imperial": "0.17 oz",
        "common": "1 tsp"
      },
      {
        "name": "Scallions / Green onions",
        "prep": "cut into 5cm batons",
        "amount": "4 stalks",
        "metric": "60g",
        "imperial": "2.1 oz",
        "common": "1/2 cup"
      },
      {
        "name": "Toasted sesame seeds",
        "prep": "for garnish",
        "amount": "1 tbsp",
        "metric": "10g",
        "imperial": "0.35 oz",
        "common": "1 tbsp"
      },
      {
        "name": "Neutral cooking oil",
        "prep": "for high heat searing",
        "amount": "2 tbsp",
        "metric": "30ml",
        "imperial": "1 fl oz",
        "common": "2 tbsp"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "MARINATE BEEF WITH NATURAL PEAR ENZYMES",
        "whatYouNeed": [
          "Sliced beef",
          "Grated pear & onion",
          "Soy sauce",
          "Brown sugar",
          "Mirin",
          "Sesame oil",
          "Garlic",
          "Ginger",
          "Black pepper"
        ],
        "description": "In a large bowl, whisk grated pear, grated onion, soy sauce, brown sugar, mirin, sesame oil, minced garlic, ginger, and 1/2 tsp black pepper until sugar dissolves. Add paper-thin beef slices one by one, separating any stuck pieces with your fingers so every ribbon is coated. Cover and marinate for 30 minutes at room temperature (or up to 4 hours in fridge).",
        "howToDoIt": "Adding slices individually ensures the natural pear enzymes penetrate every single surface for uniform tenderness.",
        "heat": "No Heat",
        "duration": 30,
        "visualCues": "Beef ribbons relax, turning dark amber as they absorb the fragrant marinade.",
        "smell": "Sweet pear, fragrant garlic, and nutty sesame oil.",
        "textureCheck": "Soft, velvety ribbons.",
        "whatShouldThisLookLike": "Tender beef slices soaking in rich aromatic marinade.",
        "tip": "Do not marinate longer than 8 hours — pear enzymes will eventually break down meat structure too far.",
        "commonMistake": "Throwing a frozen clump of beef into the marinade, leaving inner pieces raw and unseasoned.",
        "moveOnWhen": "Beef has marinated for 30 minutes.",
        "quickInstructions": "Whisk marinade ingredients; coat individual beef slices, marinate 30 mins."
      },
      {
        "step": 2,
        "title": "HEAT PAN TO SMOKING & COOK IN BATCHES",
        "whatYouNeed": [
          "Heavy cast-iron skillet or wok",
          "1 tbsp oil",
          "Half of marinated beef",
          "Half of sliced onions"
        ],
        "description": "Heat 1 tbsp oil in skillet over screaming high heat until smoking hot. Add half the sliced onions. Immediately lay half the marinated beef across the pan in a single loose layer (shake off dripping excess marinade so the pan stays hot). Cook undisturbed for 90 seconds to sear.",
        "howToDoIt": "Cooking in two separate batches prevents the pan temperature from dropping. Overcrowding releases water and boils the beef gray instead of searing caramelized brown edges.",
        "heat": "Maximum High Heat",
        "duration": 2,
        "visualCues": "Intense sizzle; bottom edges of beef caramelize into dark mahogany brown crusts.",
        "hear": "Violent, crackling roar as sugary marinade hits hot iron.",
        "smell": "Intoxicating caramelized soy sauce, charred sugar, and roasting beef.",
        "textureCheck": "Seared on bottom, pink on top.",
        "whatShouldThisLookLike": "Sizzling beef ribbons caramelizing in hot skillet.",
        "tip": "Listen to the sizzle: if it turns into a wet watery bubble, your heat is too low or pan is crowded.",
        "commonMistake": "Dumping all 600g of meat and wet marinade into the pan at once, creating a gray boiled stew.",
        "moveOnWhen": "Bottom of beef is caramelized.",
        "quickInstructions": "Sear half the beef and onions over screaming high heat for 90s undisturbed."
      },
      {
        "step": 3,
        "title": "TOSS, CHAR & ADD SCALLIONS",
        "whatYouNeed": [
          "Wok spatula or tongs",
          "Half of scallion batons"
        ],
        "description": "Flip and toss the beef and onions for 90 seconds. Add scallion batons. Stir-fry for 30 seconds until beef is cooked through and onions are tender-crisp. Transfer the first batch to a warm platter. Repeat process with remaining oil, beef, onions, and scallions.",
        "howToDoIt": "Flash-cooking for less than 3 minutes total preserves the melting tenderness of the thin beef ribbons.",
        "heat": "High Heat",
        "duration": 2,
        "visualCues": "Beef is fully cooked with charred edges; onions are tender-crisp and glistening with glaze.",
        "smell": "Sweet caramelized alliums and savory beef.",
        "textureCheck": "Meltingly tender beef.",
        "whatShouldThisLookLike": "Glistening, mahogany-glazed beef and onions.",
        "tip": "Scrape the delicious caramelized glaze from the bottom of the pan over the meat.",
        "commonMistake": "Cooking past 3 minutes — thin beef will turn dry and tough.",
        "moveOnWhen": "Beef is cooked through and transferred to platter.",
        "quickInstructions": "Toss beef 90s, add scallions, cook 30s, plate; repeat with second batch."
      },
      {
        "step": 4,
        "title": "GARNISH WITH SESAME SEEDS & SERVE",
        "whatYouNeed": [
          "Platter of hot bulgogi",
          "1 tbsp toasted sesame seeds",
          "Lettuce leaves & ssamjang (optional)"
        ],
        "description": "Mound the caramelized bulgogi on a warm platter. Sprinkle generously with toasted white sesame seeds. Serve immediately with piping hot steamed rice and lettuce leaves for wrapping.",
        "howToDoIt": "Bulgogi juices soak deliciously into hot rice or can be wrapped with rice and ssamjang in lettuce leaves.",
        "heat": "Off Heat",
        "duration": 1,
        "visualCues": "Glossy, caramelized beef ribbons surrounded by sweet onions and sesame seeds.",
        "smell": "Rich savory-sweet Korean BBQ aroma.",
        "textureCheck": "Melt-in-the-mouth tenderness.",
        "whatShouldThisLookLike": "Restaurant-quality platter of sizzling Korean Bulgogi.",
        "tip": "Spoon the remaining savory pan juices over your bowl of white rice — it's heaven!",
        "commonMistake": "Letting cooked bulgogi sit cold in the pan where it reabsorbs grease.",
        "moveOnWhen": "Plated and ready to devour.",
        "quickInstructions": "Mound bulgogi on platter, sprinkle with toasted sesame seeds, serve hot with rice."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Beef was tough and chewy.",
        "remedy": "Meat was cut too thick or along the grain. Always slice against the grain paper-thin (2mm) and use Asian pear to tenderize."
      },
      {
        "mistake": "Beef boiled in watery gray liquid instead of searing.",
        "remedy": "Pan was overcrowded. Always cook in batches over maximum high heat."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Marinade is burning black before meat is cooked",
        "whatHappened": "High sugar content in marinade caramelized too fast on an un-oiled dry spot.",
        "whyItHappened": "Heat too intense without pan movement.",
        "whatToDoNow": "Add 1 tablespoon of water to deglaze the pan and keep meat moving rapidly.",
        "howToPrevent": "Swirl 1 tbsp oil in pan and keep meat moving after the initial 90-second sear."
      }
    ],
    "substitutions": [
      {
        "original": "Korean Asian pear (Bae)",
        "substitute": "1/2 peeled sweet Fuji or Gala apple + 1 tbsp extra mirin",
        "notes": "Grated apple provides gentle acidity and natural sweetness."
      },
      {
        "original": "Beef ribeye",
        "substitute": "Thinly sliced pork shoulder (Dwaeji-bulgogi) or boneless chicken thighs",
        "notes": "Pork bulgogi is often prepared with gochujang for spicy pork BBQ."
      }
    ],
    "safetyNotes": [
      "Beef should reach minimum safe internal temperature of 63°C (145°F)."
    ],
    "servingGuide": {
      "restingTime": "Rest 2 minutes before serving.",
      "garnishing": "Toasted sesame seeds and sliced scallions.",
      "plating": "Serve on a heated iron platter or wide ceramic plate.",
      "temperature": "Piping hot.",
      "accompaniments": "Steamed white rice, red leaf lettuce, ssamjang paste, and sliced garlic."
    }
  },
  "galbi": {
    "id": "galbi",
    "name": "Korean BBQ Flanken Short Ribs (LA Galbi)",
    "cuisine": "Korean",
    "region": "South Korea / Korean-American (Los Angeles)",
    "servings": 4,
    "prepTime": 25,
    "cookTime": 12,
    "difficulty": "Medium",
    "overview": {
      "summary": "The undisputed showstopper of Korean barbecue: flanken-cut beef short ribs sliced crosswise across three oval bones, marinated in a sweet savory glaze of soy sauce, grated Korean pear, mirin, garlic, and toasted sesame oil, grilled over high heat until caramelized, lacquered, and deeply charred at the edges, offering luscious, tender meat that chews cleanly off the bone.",
      "appearance": "Sizzling, mahogany-lacquered strips of beef short ribs with three cross-cut oval bone segments embedded along the edge, glistening with caramelized glaze and blistered grill marks.",
      "texture": "Juicy, rich, succulent beef with caramelized charred edges and tender chew around the flavorful bone marrow cartilage.",
      "flavor": "Deeply satisfying balance of rich beefy short rib fat, sweet caramelized fruit sugars, savory umami soy sauce, and aromatic toasted sesame.",
      "restingTimeMinutes": 3
    },
    "equipment": [
      {
        "name": "Outdoor charcoal grill or heavy ridged cast-iron grill pan",
        "purpose": "Achieves authentic smoky charring and renders rich short rib fat."
      },
      {
        "name": "Kitchen cooking shears and metal tongs",
        "purpose": "For snipping rib strips into individual bone segments at the table."
      },
      {
        "name": "Large shallow baking dish",
        "purpose": "Allows ribs to lay flat in marinade for even absorption."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Rinse 1kg flanken-cut short ribs under cold running water to wash away bone dust from the butcher's saw; pat bone-dry with paper towels.",
        "durationMinutes": 10
      },
      {
        "task": "Grate 1/2 Asian pear, 1/2 yellow onion, and puree with 6 garlic cloves and 15g ginger.",
        "durationMinutes": 5
      },
      {
        "task": "Whisk marinade: 120ml soy sauce, 3 tbsp brown sugar, 2 tbsp honey, 3 tbsp mirin, 2 tbsp sesame oil, and black pepper.",
        "durationMinutes": 5
      },
      {
        "task": "Submerge ribs in marinade; refrigerate covered for at least 4 hours (or overnight for optimal tenderness).",
        "durationMinutes": 240
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Rinsing Bone Dust",
        "technique": "Flanken-cut ribs are sliced through bone on an electric bandsaw, leaving microscopic bone fragments on the meat surface. Rinsing thoroughly in cold water and patting bone-dry eliminates gritty bone fragments completely."
      },
      {
        "item": "Fat Rendering on High Heat",
        "technique": "Short ribs have rich intramuscular fat. Cooking over high heat renders the fat quickly, creating smoky flares on the grill that coat the meat in irresistible barbecue flavor."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Flanken-cut beef short ribs (LA Galbi cut)",
        "prep": "sliced 1cm thick across 3 bones, bone dust rinsed & dried",
        "amount": "1000g",
        "metric": "1000g",
        "imperial": "2.2 lbs",
        "common": "1kg"
      },
      {
        "name": "Korean Asian pear (Bae)",
        "prep": "peeled and finely grated",
        "amount": "1/2 pear",
        "metric": "150g",
        "imperial": "5.3 oz",
        "common": "1/2 pear"
      },
      {
        "name": "Yellow onion",
        "prep": "finely grated",
        "amount": "1/2 onion",
        "metric": "100g",
        "imperial": "3.5 oz",
        "common": "1/2 onion"
      },
      {
        "name": "Korean soy sauce (Jinganjang)",
        "prep": "savory foundation",
        "amount": "120ml",
        "metric": "120ml",
        "imperial": "4 fl oz",
        "common": "1/2 cup"
      },
      {
        "name": "Brown sugar & Honey",
        "prep": "for deep caramelization & shine",
        "amount": "3 tbsp sugar + 2 tbsp honey",
        "metric": "75g",
        "imperial": "2.6 oz",
        "common": "5 tbsp total"
      },
      {
        "name": "Mirin (sweet rice wine)",
        "prep": "tenderizer",
        "amount": "3 tbsp",
        "metric": "45ml",
        "imperial": "1.5 fl oz",
        "common": "3 tbsp"
      },
      {
        "name": "Toasted sesame oil",
        "prep": "pure dark sesame",
        "amount": "2 tbsp",
        "metric": "30ml",
        "imperial": "1 fl oz",
        "common": "2 tbsp"
      },
      {
        "name": "Fresh garlic cloves",
        "prep": "finely minced",
        "amount": "6 cloves",
        "metric": "25g",
        "imperial": "0.9 oz",
        "common": "2 tbsp"
      },
      {
        "name": "Fresh ginger",
        "prep": "finely grated",
        "amount": "1 tbsp",
        "metric": "15g",
        "imperial": "0.5 oz",
        "common": "1 tbsp"
      },
      {
        "name": "Scallions / Green onions",
        "prep": "finely sliced into rings for garnish",
        "amount": "3 stalks",
        "metric": "40g",
        "imperial": "1.4 oz",
        "common": "1/3 cup"
      },
      {
        "name": "Toasted white sesame seeds",
        "prep": "for garnish",
        "amount": "1 tbsp",
        "metric": "10g",
        "imperial": "0.35 oz",
        "common": "1 tbsp"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "MARINATE RIBS (4 TO 12 HOURS)",
        "whatYouNeed": [
          "Rinsed dry ribs",
          "Marinade mixture",
          "Shallow container"
        ],
        "description": "Pour marinade over the cleaned, dried short ribs in the shallow baking dish. Rub the marinade into both sides of each strip. Lay ribs flat so they are fully submerged. Cover tightly and refrigerate for at least 4 hours (ideally overnight).",
        "howToDoIt": "Flanken cut ribs are thin enough that pear enzymes and seasonings penetrate the meat fibers thoroughly in 4 hours.",
        "heat": "Cold Refrigeration",
        "duration": 240,
        "visualCues": "Ribs darken to rich mahogany brown; meat absorbs marinade and plumps slightly.",
        "smell": "Sweet pear, garlic, and savory soy.",
        "textureCheck": "Supple and well-coated.",
        "whatShouldThisLookLike": "Rib strips submerged in aromatic mahogany marinade.",
        "tip": "Bring ribs to room temperature for 20 minutes before grilling so they cook evenly.",
        "commonMistake": "Marinating for only 15 minutes — short ribs need time for the pear enzymes to tenderize.",
        "moveOnWhen": "Ribs have marinated for at least 4 hours.",
        "quickInstructions": "Submerge cleaned ribs in marinade; refrigerate covered for 4-12 hours."
      },
      {
        "step": 2,
        "title": "PREHEAT GRILL OR CAST-IRON TO HIGH HEAT",
        "whatYouNeed": [
          "Grill or heavy cast-iron grill pan",
          "Tongs",
          "Oil brush"
        ],
        "description": "Preheat your grill or cast-iron grill pan over high heat until smoking hot (220°C / 425°F). Lightly oil the grill grates with a rolled paper towel dipped in oil. The pan must be searing hot to caramelize the sugary glaze before the thin meat overcooks.",
        "howToDoIt": "High heat creates instant Maillard browning and charring while rendering the rich short rib fat.",
        "heat": "High Heat (220°C / 425°F)",
        "duration": 5,
        "visualCues": "Grill grates are smoking lightly; oil burns off instantly.",
        "smell": "Hot clean grill grates.",
        "textureCheck": "Smoking hot.",
        "whatShouldThisLookLike": "Blazing hot grill ready for meat.",
        "tip": "Shake off excess dripping marinade before laying meat on the grill to prevent excessive flare-ups.",
        "commonMistake": "Grilling on medium heat — ribs will simmer in their own juices and turn gray and tough.",
        "moveOnWhen": "Grill is smoking hot.",
        "quickInstructions": "Preheat grill or cast-iron pan over high heat until smoking hot; oil grates."
      },
      {
        "step": 3,
        "title": "SEAR FIRST SIDE UNTIL CHARRED (3 MINUTES)",
        "whatYouNeed": [
          "Marinated ribs",
          "Tongs"
        ],
        "description": "Lay rib strips on the hot grill in a single layer without overlapping. Sear undisturbed for 3 minutes. Rendered fat will drip and cause small licking flames that kiss the meat with authentic barbecue smoke. Look for edges curling and deep caramelized charring around the bones.",
        "howToDoIt": "Sugars in the pear and honey caramelize rapidly into a lacquered, dark brown crust.",
        "heat": "High Heat",
        "duration": 3,
        "visualCues": "Deep amber-mahogany crust with dark charred grill marks on the underside; meat juices bubble to top surface.",
        "hear": "Loud, crackling, energetic sizzling.",
        "smell": "Incredible aroma of caramelized sweet soy sauce and smoky roasted beef fat.",
        "textureCheck": "Bottom crust is crisp and lacquered.",
        "whatShouldThisLookLike": "Ribs sizzling vigorously with caramelized charred grill marks.",
        "tip": "If flames flare up excessively, nudge the ribs slightly to a secondary zone so they don't turn into black soot.",
        "commonMistake": "Flipping every 30 seconds — let the meat sit undisturbed for 3 minutes to build a crust.",
        "moveOnWhen": "Underside is deeply caramelized with charred grill marks.",
        "quickInstructions": "Sear ribs over high heat undisturbed for 3 mins until charred and caramelized."
      },
      {
        "step": 4,
        "title": "FLIP & SEAR SECOND SIDE (2 TO 3 MINUTES)",
        "whatYouNeed": [
          "Tongs"
        ],
        "description": "Flip ribs using tongs. Sear the second side for 2 to 3 minutes until equally browned, caramelized, and cooked through to medium doneness (approx 65°C / 150°F). Transfer to a cutting board.",
        "howToDoIt": "Thin short ribs cook rapidly; 5 to 6 minutes total cooking time yields succulent, juicy meat with melting fat.",
        "heat": "High Heat",
        "duration": 3,
        "visualCues": "Both sides are lacquered in glistening mahogany glaze with blistered charred edges.",
        "textureCheck": "Meat is springy and succulent; bone marrow sizzles.",
        "whatShouldThisLookLike": "Gloriously charred, glistening LA Galbi ribs.",
        "tip": "Do not overcook beyond medium — short ribs will begin to dry out.",
        "commonMistake": "Leaving them on the grill for 10 minutes — thin ribs will turn into leathery jerky.",
        "moveOnWhen": "Both sides are charred and cooked through.",
        "quickInstructions": "Flip ribs, sear 2-3 mins until second side is caramelized; transfer to cutting board."
      },
      {
        "step": 5,
        "title": "REST, SNIP INTO BONE SEGMENTS & SERVE",
        "whatYouNeed": [
          "Kitchen shears",
          "Serving platter",
          "Scallion rings",
          "Toasted sesame seeds"
        ],
        "description": "Rest ribs for 3 minutes so juices settle. Using kitchen shears, snip each long strip between the bones into individual pieces containing one oval bone each. Mound the hot ribs on a platter, shower with sliced scallions and toasted sesame seeds, and serve hot.",
        "howToDoIt": "Cutting into individual single-bone segments makes them easy to pick up with fingers or chopsticks to nibble the delicious meat cleanly off the bone.",
        "heat": "Off Heat",
        "duration": 3,
        "visualCues": "Steaming, glistening single-bone rib nuggets crowned with green scallions and sesame seeds.",
        "smell": "Intense sweet smoky barbecue aroma.",
        "textureCheck": "Tender meat that pulls easily from the bone with toothsome chew.",
        "whatShouldThisLookLike": "Festive platter of Korean BBQ LA Galbi.",
        "tip": "The meat directly clinging to the bone cartilage (\"Gol-mak\") is the sweetest, most flavorful bite!",
        "commonMistake": "Serving long uncut strips without shears, making them clumsy to eat at the table.",
        "moveOnWhen": "Snipped, garnished, and served.",
        "quickInstructions": "Rest 3 mins, snip between bones into individual pieces, garnish with scallions and sesame."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Ribs were gritty with bone dust.",
        "remedy": "Ribs weren't rinsed after butchering. Always wash bone dust off under cold running water before marinating."
      },
      {
        "mistake": "Meat was tough and chewy.",
        "remedy": "Under-marinated or overcooked. Marinate for at least 4 hours with grated pear and cook over high heat for only 5-6 mins total."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Marinade burned black before meat cooked through",
        "whatHappened": "Sugars burned on an excessively hot flare-up.",
        "whyItHappened": "Dripping marinade caught fire.",
        "whatToDoNow": "Move ribs to a slightly cooler indirect zone of the grill to finish cooking.",
        "howToPrevent": "Shake off excess wet marinade before laying ribs on the grates."
      }
    ],
    "substitutions": [
      {
        "original": "Flanken-cut short ribs",
        "substitute": "Traditional English-cut short ribs butterflied into long ribbons (Wang-galbi) or pork spare ribs",
        "notes": "Wang-galbi is the traditional royal court diamond-scored whole rib cut."
      }
    ],
    "safetyNotes": [
      "Beef short ribs should reach minimum 65°C (150°F) internal temperature."
    ],
    "servingGuide": {
      "restingTime": "Rest 3 minutes before snipping.",
      "garnishing": "Sliced scallion rings and toasted white sesame seeds.",
      "plating": "Heaped on a warm ceramic or sizzler platter.",
      "temperature": "Piping hot and juicy.",
      "accompaniments": "Steamed white rice, spicy scallion salad (Pa-muchim), red leaf lettuce, and cold lager."
    }
  },
  "korean-fried-chicken": {
    "id": "korean-fried-chicken",
    "name": "Extra-Crispy Korean Fried Chicken (Yangnyeom Chikin)",
    "cuisine": "Korean",
    "region": "South Korea (Seoul / Daegu)",
    "servings": 4,
    "prepTime": 25,
    "cookTime": 20,
    "difficulty": "Medium",
    "overview": {
      "summary": "The undisputed gold standard of fried poultry: chicken wings and drumettes seasoned with ginger and garlic, dredged in pure potato starch, and double-fried in hot oil to create an impossibly thin, glass-brittle, shatteringly crisp crust that stays crunchy for hours, tossed in a sticky, sweet, fiery garlic-gochujang glaze (Yangnyeom sauce) and showered with crushed roasted peanuts.",
      "appearance": "Glistening, ruby-glazed chicken pieces with an iridescent sticky sheen, studded with crushed golden peanuts and green scallion rings.",
      "texture": "The miracle of Korean double-frying: an ultra-thin, shatteringly crisp, paper-like crunch (\"Kkasak\") that never turns soggy under sauce, enclosing steaming, succulent juicy chicken.",
      "flavor": "Explosive sweet-and-spicy rush: rich savory umami, sweet honey and brown sugar, punchy garlic, and warming gochujang heat.",
      "restingTimeMinutes": 2
    },
    "equipment": [
      {
        "name": "Heavy Dutch oven or deep wok for deep frying",
        "purpose": "Holds steady oil temperature for two distinct frying stages."
      },
      {
        "name": "Deep-fry / candy thermometer",
        "purpose": "Critical for monitoring 175°C (first fry) and 190°C (second fry)."
      },
      {
        "name": "Wire spider skimmer and large wire cooling rack",
        "purpose": "Allows chicken to drain and aerate between frying stages."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Cut 1kg chicken wings into drumettes and flats; pat 100% bone-dry with paper towels.",
        "durationMinutes": 5
      },
      {
        "task": "Toss chicken with 1 tbsp Shaoxing wine, 1 tbsp grated ginger, 1 tsp salt, and 1/2 tsp black pepper; rest 15 minutes.",
        "durationMinutes": 15
      },
      {
        "task": "Simmer Yangnyeom glaze: 3 tbsp gochujang, 3 tbsp ketchup, 3 tbsp honey, 2 tbsp brown sugar, 1 tbsp soy sauce, 1 tbsp minced garlic, and 1 tsp sesame oil for 3 minutes until glossy.",
        "durationMinutes": 5
      },
      {
        "task": "Measure 150g potato starch (or cornstarch) in a wide shallow bowl.",
        "durationMinutes": 2
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Potato Starch Dredging (Gamja-jeonbun)",
        "technique": "Do NOT use wheat flour! Korean fried chicken achieves its legendary paper-thin, glass-brittle crust by using 100% potato starch. Potato starch forms a delicate crystalline matrix that repels oil and stays shatteringly crisp even when tossed in sticky sauce."
      },
      {
        "item": "The Double-Fry Secret (Du-beon-twi-gim)",
        "technique": "Fry 1 (175°C for 8 mins) cooks the chicken through and sets the starch crust. Rest 5 minutes on wire rack so internal steam migrates to the skin. Fry 2 (190°C for 2 mins) flash-fries that migrated surface moisture, rendering the skin glass-brittle and golden."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Chicken wings (drumettes and flats)",
        "prep": "patted bone-dry",
        "amount": "1000g",
        "metric": "1000g",
        "imperial": "2.2 lbs",
        "common": "1kg"
      },
      {
        "name": "Potato starch (Gamja-jeonbun) or cornstarch",
        "prep": "pure starch for dredging",
        "amount": "150g",
        "metric": "150g",
        "imperial": "5.3 oz",
        "common": "1.25 cups"
      },
      {
        "name": "Fresh ginger",
        "prep": "finely grated for chicken seasoning",
        "amount": "1 tbsp",
        "metric": "15g",
        "imperial": "0.5 oz",
        "common": "1 tbsp"
      },
      {
        "name": "Rice wine or dry sake",
        "prep": "eliminates gamey poultry odors",
        "amount": "1 tbsp",
        "metric": "15ml",
        "imperial": "0.5 fl oz",
        "common": "1 tbsp"
      },
      {
        "name": "Gochujang (Korean chili paste)",
        "prep": "sauce backbone",
        "amount": "3 tbsp",
        "metric": "60g",
        "imperial": "2.1 oz",
        "common": "3 tbsp"
      },
      {
        "name": "Tomato ketchup",
        "prep": "provides authentic street-cart tanginess",
        "amount": "3 tbsp",
        "metric": "45g",
        "imperial": "1.6 oz",
        "common": "3 tbsp"
      },
      {
        "name": "Honey or Korean corn syrup (Mulyeot)",
        "prep": "for mirror-like glaze",
        "amount": "3 tbsp",
        "metric": "60ml",
        "imperial": "2 fl oz",
        "common": "3 tbsp"
      },
      {
        "name": "Brown sugar",
        "prep": "deep sweetness",
        "amount": "2 tbsp",
        "metric": "30g",
        "imperial": "1 oz",
        "common": "2 tbsp"
      },
      {
        "name": "Korean soy sauce (Jinganjang)",
        "prep": "savory balance",
        "amount": "1 tbsp",
        "metric": "15ml",
        "imperial": "0.5 fl oz",
        "common": "1 tbsp"
      },
      {
        "name": "Fresh garlic cloves",
        "prep": "finely minced for glaze",
        "amount": "2 tbsp",
        "metric": "20g",
        "imperial": "0.7 oz",
        "common": "5 cloves"
      },
      {
        "name": "Roasted unsalted peanuts",
        "prep": "roughly crushed for topping",
        "amount": "40g",
        "metric": "40g",
        "imperial": "1.4 oz",
        "common": "1/3 cup"
      },
      {
        "name": "Neutral frying oil (canola or peanut)",
        "prep": "for deep-frying",
        "amount": "1.2 liters",
        "metric": "1200ml",
        "imperial": "40 fl oz",
        "common": "5 cups"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "DREDGE CHICKEN IN POTATO STARCH",
        "whatYouNeed": [
          "Seasoned dry chicken wings",
          "150g potato starch",
          "Wide shallow bowl"
        ],
        "description": "Dredge each piece of seasoned chicken in potato starch, pressing the starch firmly into all crevices and skin folds. Shake off excess loose starch so only a thin, chalky, even veil coats the meat. Lay on a wire rack and rest 5 minutes.",
        "howToDoIt": "Resting allows the natural poultry moisture to hydrate the starch slightly, ensuring the coating bonds tightly to the skin and won't flake off in hot oil.",
        "heat": "No Heat",
        "duration": 8,
        "visualCues": "Chicken is evenly coated in a thin chalky white powder with no bare spots or heavy clumps.",
        "textureCheck": "Dry, powdery coating.",
        "whatShouldThisLookLike": "Evenly dusted chicken wings resting on a wire rack.",
        "tip": "Never make a thick wet batter — pure dry potato starch is the secret to paper-thin crunch.",
        "commonMistake": "Leaving thick wet clumps of starch, which fry into gummy, chalky rocks.",
        "moveOnWhen": "All chicken pieces are dredged and rested.",
        "quickInstructions": "Dredge chicken wings in potato starch, shake excess, rest 5 mins."
      },
      {
        "step": 2,
        "title": "FIRST FRY: COOK CHICKEN THROUGH (175°C / 350°F)",
        "whatYouNeed": [
          "Dutch oven with 1.2L oil",
          "Thermometer",
          "Chicken wings",
          "Spider skimmer"
        ],
        "description": "Heat oil to 175°C (350°F). Slide half the chicken pieces into the hot oil. Fry for 8 to 9 minutes, turning occasionally with the spider skimmer, until the chicken is cooked through and the coating is pale blond and crisp. Remove with spider and drain on a wire rack for 5 minutes. Repeat with second batch.",
        "howToDoIt": "The first fry cooks the meat to 75°C internally and sets the starch into a crisp shell. The 5-minute rest allows internal steam to migrate out to the crust.",
        "heat": "Medium-High Heat (maintain 175°C / 350°F)",
        "duration": 10,
        "visualCues": "Coating turns pale golden-blond; bubbling slows down as moisture leaves the chicken.",
        "hear": "Steady, energetic frying sizzle.",
        "smell": "Clean fried chicken aroma.",
        "textureCheck": "Crisp but pale crust; meat is fully cooked.",
        "whatShouldThisLookLike": "Pale golden, par-fried chicken wings resting on wire rack.",
        "tip": "Check oil temperature before adding the second batch to make sure it has returned to 175°C.",
        "commonMistake": "Frying everything in one giant batch — drops oil temperature to 140°C, causing greasy chicken.",
        "moveOnWhen": "All chicken is par-fried and rested on wire rack for 5 minutes.",
        "quickInstructions": "Fry chicken in batches at 175°C for 8-9 mins until pale blond; rest on wire rack 5 mins."
      },
      {
        "step": 3,
        "title": "SECOND FRY: FLASH-CRISP TO GLASS BRITTLE (190°C / 375°F)",
        "whatYouNeed": [
          "Oil brought to 190°C (375°F)",
          "Rested par-fried chicken",
          "Spider skimmer"
        ],
        "description": "Crank heat to bring oil up to 190°C (375°F). Drop half the rested chicken back into the scorching oil. Fry for just 2 to 3 minutes, stirring constantly. The crust will instantly blister, darken to deep golden-amber, and turn glass-brittle. Lift with spider, shake vigorously over the pot, and transfer to wire rack. Repeat with second batch.",
        "howToDoIt": "High heat (190°C) flash-vaporizes the moisture that migrated to the skin during the rest, rendering the potato starch crust permanently rigid and shatteringly crisp.",
        "heat": "High Heat (190°C / 375°F)",
        "duration": 4,
        "visualCues": "Color darkens to deep golden-amber; tiny crisp blisters cover the crust; chicken feels light and hollow.",
        "hear": "Crackling, loud, sharp frying sounds.",
        "textureCheck": "Tapping chicken with metal tongs sounds like tapping hard glass.",
        "whatShouldThisLookLike": "Golden-amber, shatteringly crisp, blistered fried chicken.",
        "tip": "Shake the spider skimmer vigorously when lifting chicken to cast off all clinging surface oil.",
        "commonMistake": "Skipping the second fry — single-fried chicken turns soggy within 5 minutes under sauce.",
        "moveOnWhen": "All chicken is double-fried, golden-amber, and crackling crisp.",
        "quickInstructions": "Flash-fry rested chicken at 190°C for 2-3 mins until deep golden-amber and glass-crisp."
      },
      {
        "step": 4,
        "title": "WARM YANGNYEOM GLAZE IN WIDE PAN",
        "whatYouNeed": [
          "Wide skillet or wok",
          "Pre-mixed sauce (gochujang, ketchup, honey, sugar, soy, garlic)"
        ],
        "description": "While the second batch fries, pour the Yangnyeom sauce into a wide skillet over medium heat. Bring to a rapid bubble for 60 seconds until it turns into a glossy, sticky, bubbling red lacquer. TURN OFF HEAT.",
        "howToDoIt": "Warming the glaze liquefies the honey and sugars so it coats the chicken in an ultra-thin veil without clumping.",
        "heat": "Medium Heat for 1 min, then OFF",
        "duration": 1,
        "visualCues": "Sauce bubbles rapidly and transforms into a glistening, mirror-like red glaze.",
        "smell": "Intoxicating sweet-spicy chili, garlic, and honey aroma.",
        "textureCheck": "Sticky, syrupy glaze.",
        "whatShouldThisLookLike": "Bubbling red Yangnyeom glaze coating the bottom of the pan.",
        "tip": "Always turn off heat before adding chicken — boiling the chicken in sauce will soften the crispy crust.",
        "commonMistake": "Pouring cold sauce over hot chicken, which shocks the crust soggy.",
        "moveOnWhen": "Sauce is bubbling, glossy, and off heat.",
        "quickInstructions": "Bubble sauce in wide pan 60s until glossy; turn off heat."
      },
      {
        "step": 5,
        "title": "THE QUICK TOSS, PEANUTS & SERVE (CHIMAEC)",
        "whatYouNeed": [
          "Double-fried hot chicken",
          "Warm glaze in pan",
          "Crushed peanuts",
          "Tongs"
        ],
        "description": "Immediately dump the piping hot, double-fried chicken wings into the warm glaze. Toss and roll vigorously with tongs for 30 seconds until every wing is coated in a thin, translucent, sticky red sheen. Scatter crushed peanuts over the top. Transfer immediately to a serving platter.",
        "howToDoIt": "A 30-second rapid toss coats the chicken in a micro-thin glaze while keeping the potato starch crust 100% shatteringly crisp.",
        "heat": "Off Heat",
        "duration": 1,
        "visualCues": "Ruby-red glistening chicken wings studded with golden crushed peanuts and sesame seeds.",
        "smell": "Sweet-spicy chili, roasted peanuts, and garlic.",
        "textureCheck": "Loud, audible glass-shattering crunch when bitten, followed by juicy chicken.",
        "whatShouldThisLookLike": "Authentic Seoul-style Yangnyeom Chikin.",
        "tip": "Serve with cold pickled Korean radish (Chikin-mu) — the sweet-sour cubes cleanse the palate between fiery bites!",
        "commonMistake": "Letting chicken sit submerged in sauce for minutes — toss quickly and plate immediately.",
        "moveOnWhen": "Coated, garnished, and plated.",
        "quickInstructions": "Toss hot chicken in warm glaze for 30s off heat, shower with peanuts, serve immediately."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Chicken turned soggy after adding sauce.",
        "remedy": "Chicken was only fried once, or wheat flour was used. Always double-fry with 100% potato starch."
      },
      {
        "mistake": "Crust fell off in the oil.",
        "remedy": "Chicken was wet before starching, or wasn't rested. Pat chicken dry and rest 5 minutes after starching."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Chicken burned dark before interior cooked",
        "whatHappened": "Oil temperature was too high (above 190°C during the first fry).",
        "whyItHappened": "Starch browned before heat reached the bone.",
        "whatToDoNow": "Lower heat to 160°C and finish cooking in the oven at 180°C for 5 minutes.",
        "howToPrevent": "Use a thermometer and keep first fry strictly at 175°C (350°F)."
      }
    ],
    "substitutions": [
      {
        "original": "Potato starch (Gamja-jeonbun)",
        "substitute": "Cornstarch (100%)",
        "notes": "Cornstarch produces an exceptionally crispy, glassy crust nearly identical to potato starch."
      },
      {
        "original": "Yangnyeom sweet-spicy glaze",
        "substitute": "Garlic soy glaze (soy sauce, brown sugar, garlic, ginger simmered with butter)",
        "notes": "Soy-Garlic (Ganjang) is Korea's other globally iconic fried chicken style."
      }
    ],
    "safetyNotes": [
      "Chicken must reach an internal temperature of 74°C (165°F)."
    ],
    "servingGuide": {
      "restingTime": "Serve immediately.",
      "garnishing": "Crushed roasted peanuts and sliced scallion greens.",
      "plating": "Piled high on a paper-lined wire basket or ceramic platter.",
      "temperature": "Piping hot and crackling.",
      "accompaniments": "Pickled sweet-sour radish cubes (Chikin-mu) and ice-cold draft beer (\"Chimaek\")."
    }
  },
  "kimchi-jjigae": {
    "id": "kimchi-jjigae",
    "name": "Homestyle Aged Kimchi Stew (Kimchi-jjigae)",
    "cuisine": "Korean",
    "region": "South Korea (National)",
    "servings": 4,
    "prepTime": 15,
    "cookTime": 30,
    "difficulty": "Easy",
    "overview": {
      "summary": "The soulful cornerstone of Korean home cooking: sour, well-fermented aged Napa cabbage kimchi (Sin-kimchi) stir-fried in sesame oil with pork belly chunks until sweet and caramelized, then simmered in rich anchovy-kelp stock with gochugaru, garlic, and scallions, finished with thick slabs of silken tofu that soak up the deep crimson, intensely savory broth.",
      "appearance": "A bubbling, earthenware pot (Ttukbaegi) filled with rich crimson broth, translucent tender kimchi cabbage, pork chunks, and pure white rectangular slabs of tofu.",
      "texture": "Meltingly tender, velvety stewed cabbage, rich succulent pork belly, custardy soft tofu, and deeply comforting broth.",
      "flavor": "Deep, mouthwatering lactic tanginess from aged kimchi balanced by sweet pork fat, spicy chili warmth, and savory anchovy umami.",
      "restingTimeMinutes": 2
    },
    "equipment": [
      {
        "name": "Ttukbaegi (Korean earthenware pot) or heavy Dutch oven (3–4 qt)",
        "purpose": "Holds heat and simmers the thick stew with gentle, even convection."
      },
      {
        "name": "Wooden spoon",
        "purpose": "For stir-frying kimchi and pork before adding broth."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Cut 350g well-aged, sour kimchi into 4cm bite-sized pieces; measure 1/2 cup of the fermented kimchi brine.",
        "durationMinutes": 5
      },
      {
        "task": "Cut 200g pork belly (or pork shoulder) into 2.5cm bite-sized chunks.",
        "durationMinutes": 3
      },
      {
        "task": "Cut 300g medium-firm tofu into 1cm thick rectangular slabs.",
        "durationMinutes": 2
      },
      {
        "task": "Simmer 6 dried anchovies and 1 piece kombu in 700ml water for 15 minutes; strain broth.",
        "durationMinutes": 15
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Kimchi Selection (Sin-Kimchi)",
        "technique": "Must use fully fermented, sour, aged kimchi (Sin-kimchi) that has fermented for at least 3 to 4 weeks. Freshly made kimchi lacks the deep lactic acidity and complex umami needed to flavor the broth; fresh kimchi will produce a bland, watery soup."
      },
      {
        "item": "Stir-Frying Before Simmering (Bokkeum)",
        "technique": "Always stir-fry the chopped kimchi and pork belly in sesame oil for 5 minutes before adding broth. Sautéing caramelizes the sugars in the kimchi and renders pork fat, eliminating harsh raw sourness and creating a rich, velvety stew."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Aged, sour Napa cabbage kimchi (Sin-kimchi)",
        "prep": "cut into 4cm pieces",
        "amount": "350g",
        "metric": "350g",
        "imperial": "12 oz",
        "common": "2.5 cups"
      },
      {
        "name": "Aged kimchi juice (brine from jar)",
        "prep": "strained",
        "amount": "120ml",
        "metric": "120ml",
        "imperial": "4 fl oz",
        "common": "1/2 cup"
      },
      {
        "name": "Pork belly or pork shoulder",
        "prep": "cut into 2.5cm bite-sized chunks",
        "amount": "200g",
        "metric": "200g",
        "imperial": "7 oz",
        "common": "200g"
      },
      {
        "name": "Medium-firm or firm silken tofu",
        "prep": "cut into 1cm thick rectangles",
        "amount": "300g",
        "metric": "300g",
        "imperial": "10.5 oz",
        "common": "1/2 block"
      },
      {
        "name": "Anchovy-kelp broth (or beef bone broth)",
        "prep": "rich stock",
        "amount": "600ml",
        "metric": "600ml",
        "imperial": "20 fl oz",
        "common": "2.5 cups"
      },
      {
        "name": "Gochugaru (Korean chili flakes)",
        "prep": "for bright red color & heat",
        "amount": "1.5 tbsp",
        "metric": "15g",
        "imperial": "0.5 oz",
        "common": "1.5 tbsp"
      },
      {
        "name": "Doenjang (fermented soybean paste)",
        "prep": "secret umami depth",
        "amount": "1 tsp",
        "metric": "6g",
        "imperial": "0.2 oz",
        "common": "1 tsp"
      },
      {
        "name": "Korean soup soy sauce (Guk-ganjang)",
        "prep": "for seasoning",
        "amount": "1 tbsp",
        "metric": "15ml",
        "imperial": "0.5 fl oz",
        "common": "1 tbsp"
      },
      {
        "name": "Fresh garlic cloves",
        "prep": "finely minced",
        "amount": "1.5 tbsp",
        "metric": "15g",
        "imperial": "0.5 oz",
        "common": "4 cloves"
      },
      {
        "name": "Granulated sugar",
        "prep": "rounds out harsh lactic acid",
        "amount": "1 tsp",
        "metric": "4g",
        "imperial": "0.15 oz",
        "common": "1 tsp"
      },
      {
        "name": "Toasted sesame oil",
        "prep": "for sautéing",
        "amount": "1 tbsp",
        "metric": "15ml",
        "imperial": "0.5 fl oz",
        "common": "1 tbsp"
      },
      {
        "name": "Scallions / Green onions",
        "prep": "thickly sliced diagonally",
        "amount": "2 stalks",
        "metric": "40g",
        "imperial": "1.4 oz",
        "common": "1/2 cup"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "STIR-FRY KIMCHI & PORK IN SESAME OIL",
        "whatYouNeed": [
          "Earthenware pot or Dutch oven",
          "1 tbsp sesame oil",
          "Chopped aged kimchi",
          "Pork belly chunks",
          "Minced garlic"
        ],
        "description": "Heat 1 tbsp sesame oil in the pot over medium heat. Add pork belly chunks and stir-fry for 3 minutes until pork turns opaque and begins rendering fat. Add chopped aged kimchi and minced garlic. Sauté for 5 minutes, stirring frequently, until the kimchi turns translucent and soft.",
        "howToDoIt": "Cooking kimchi in rendered pork fat mellows its sharp raw sourness and infuses the cabbage with rich pork savoriness.",
        "heat": "Medium Heat",
        "duration": 8,
        "visualCues": "Pork fat renders clear; cabbage turns glassy, translucent, and glossy amber-red.",
        "hear": "Steady, bubbling sizzle.",
        "smell": "Deep, mouthwatering aroma of caramelized kimchi and roasting pork.",
        "textureCheck": "Cabbage softens noticeably.",
        "whatShouldThisLookLike": "Translucent, glossy kimchi cooked with pork in the pot.",
        "tip": "If kimchi is extremely sour, add 1 tsp sugar during this sautéing step to balance the acid.",
        "commonMistake": "Dumping raw kimchi, pork, and broth in all at once — the stew will taste thin and sour rather than rich and savory.",
        "moveOnWhen": "Kimchi is translucent and pork is lightly browned.",
        "quickInstructions": "Sauté pork belly in sesame oil 3 mins; add kimchi and garlic, sauté 5 mins until translucent."
      },
      {
        "step": 2,
        "title": "ADD BROTH, KIMCHI JUICE & AROMATICS",
        "whatYouNeed": [
          "600ml anchovy broth",
          "120ml kimchi juice",
          "1.5 tbsp gochugaru",
          "1 tsp doenjang",
          "1 tbsp soup soy sauce",
          "1 tsp sugar"
        ],
        "description": "Pour in 600ml anchovy broth and 120ml strained kimchi juice. Stir in gochugaru, doenjang, soup soy sauce, and sugar. Bring to a rolling boil over medium-high heat. Skim any excess gray froth from the surface with a small spoon.",
        "howToDoIt": "Adding doenjang (fermented bean paste) is the classic grandma secret: it deepens the broth with rich earthy umami that rounds out the sharp chili.",
        "heat": "Medium-High Heat to boil",
        "duration": 4,
        "visualCues": "Broth turns a rich, opaque, fiery crimson red and bubbles vigorously.",
        "smell": "Intensely savory, spicy, and tangy stew aroma.",
        "textureCheck": "Rich bubbling broth.",
        "whatShouldThisLookLike": "Crimson stew boiling vigorously in the earthenware pot.",
        "tip": "Always include the strained kimchi juice — it contains concentrated lactic acid and seasoning.",
        "commonMistake": "Discarding the kimchi juice from the jar — that is the liquid gold of kimchi-jjigae!",
        "moveOnWhen": "Stew is boiling and skimmed of foam.",
        "quickInstructions": "Add broth, kimchi juice, gochugaru, doenjang, soy sauce, and sugar; bring to a boil and skim foam."
      },
      {
        "step": 3,
        "title": "LOW SIMMER TO MELT CABBAGE (20 MINUTES)",
        "whatYouNeed": [
          "Pot lid"
        ],
        "description": "Reduce heat to low. Cover pot with lid slightly ajar. Simmer gently for 20 minutes. As it simmers, the pork belly tenderizes and the kimchi fibers soften into a melting, velvet texture.",
        "howToDoIt": "Slow simmering allows the pork fat and collagen to emulsify with the acidic broth, transforming watery soup into a rich, full-bodied stew.",
        "heat": "Low Simmer",
        "duration": 20,
        "visualCues": "Broth deepens to dark brick red; oil droplets form a glistening sheen on the surface; cabbage is completely limp and tender.",
        "hear": "Gentle, muffled bubbling beneath the lid.",
        "smell": "Warm, deeply comforting homestyle Korean stew aroma.",
        "textureCheck": "Cabbage melts in the mouth with zero fibrous crunch.",
        "whatShouldThisLookLike": "A rich, deeply simmered, velvety stew.",
        "tip": "The longer it simmers, the richer it tastes — Kimchi Jjigae always tastes even better the second day!",
        "commonMistake": "Rushing with a 5-minute boil — cabbage will stay tough and crunchy like raw salad.",
        "moveOnWhen": "Cabbage is meltingly soft after 20 minutes of simmering.",
        "quickInstructions": "Cover lid ajar, simmer on low for 20 mins until cabbage is meltingly tender."
      },
      {
        "step": 4,
        "title": "ADD TOFU & SCALLIONS (FINAL 5 MINUTES)",
        "whatYouNeed": [
          "Tofu slabs",
          "Sliced scallions"
        ],
        "description": "Arrange tofu slabs across the surface of the stew. Scatter sliced scallions on top. Spoon hot broth over the tofu. Simmer uncovered for 5 more minutes over medium-low heat until tofu is heated through and absorbs the crimson broth.",
        "howToDoIt": "Adding tofu at the end prevents the delicate slabs from breaking apart during the long simmer.",
        "heat": "Medium-Low Heat",
        "duration": 5,
        "visualCues": "White tofu slabs nestled in crimson broth; green scallions wilted slightly.",
        "textureCheck": "Tofu is piping hot, custardy, and soft.",
        "whatShouldThisLookLike": "A bubbling, picture-perfect pot of Korean Kimchi Jjigae.",
        "tip": "Press tofu lightly with spoon so it submerges into the bubbling red broth.",
        "commonMistake": "Stirring aggressively with a spoon after adding tofu, which smashes the slabs into mush.",
        "moveOnWhen": "Tofu is piping hot and infused.",
        "quickInstructions": "Lay tofu slabs and scallions on top; simmer uncovered 5 mins until tofu is hot."
      },
      {
        "step": 5,
        "title": "SERVE BUBBLING AT THE TABLE",
        "whatYouNeed": [
          "Wooden base or trivet for pot",
          "Individual rice bowls"
        ],
        "description": "Carefully carry the bubbling earthenware pot directly to the table on its wooden base. Serve piping hot with bowls of steamed white rice and side dishes (banchan).",
        "howToDoIt": "The earthenware pot retains heat so the stew continues bubbling at the dining table.",
        "heat": "Off Heat (Earthenware retains heat)",
        "duration": 1,
        "visualCues": "Stew bubbles actively at the table, releasing fragrant plumes of steam.",
        "smell": "Hearty, comforting, spicy, and tangy.",
        "textureCheck": "Custardy tofu, tender pork, melt-in-mouth kimchi.",
        "whatShouldThisLookLike": "Classic bubbling Korean comfort stew.",
        "tip": "Spoon a big ladle of stew, pork, and tofu directly over your bowl of white rice, mix lightly, and eat with a spoon.",
        "commonMistake": "Serving in cold porcelain bowls, which cools down the rich pork fat.",
        "moveOnWhen": "Served bubbling at the table.",
        "quickInstructions": "Place bubbling pot on trivet at table; serve hot over steamed white rice."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Stew tasted flat, watery, and bland.",
        "remedy": "Fresh kimchi was used. Always use well-aged, sour kimchi that has fermented for at least 3 weeks."
      },
      {
        "mistake": "Stew tasted overwhelmingly sour.",
        "remedy": "Kimchi was extremely aged. Add 1 to 2 tsp sugar and a touch more doenjang to neutralize the excess acid."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Broth reduced too much and became overly salty",
        "whatHappened": "Simmered too aggressively uncovered.",
        "whyItHappened": "Excess evaporation.",
        "whatToDoNow": "Stir in 1/2 cup of unsalted anchovy broth or water; simmer 2 minutes.",
        "howToPrevent": "Keep lid on and flame low during the 20-minute simmer."
      }
    ],
    "substitutions": [
      {
        "original": "Pork belly",
        "substitute": "Canned tuna (Chamchi-kimchi-jjigae) or canned mackerel",
        "notes": "Tuna Kimchi Jjigae is Korea's second most popular variation, loved for its clean, rich seafood flavor."
      },
      {
        "original": "Anchovy broth",
        "substitute": "Dashi broth or light chicken broth",
        "notes": "Chicken broth provides a hearty, savory base."
      }
    ],
    "safetyNotes": [
      "Pork must be cooked thoroughly; take care with the scorching earthenware pot."
    ],
    "servingGuide": {
      "restingTime": "Serve immediately bubbling hot.",
      "garnishing": "Sliced scallions and a pinch of gochugaru.",
      "plating": "Serve directly in the bubbling black earthenware pot (Ttukbaegi) on table.",
      "temperature": "Scorching hot.",
      "accompaniments": "Steamed white rice, roasted seasoned seaweed sheets (Gim), and rolled omelette (Gyeran-mari)."
    }
  },
  "sundubu-jjigae": {
    "id": "sundubu-jjigae",
    "name": "Spicy Korean Soft Tofu Stew (Sundubu-jjigae)",
    "cuisine": "Korean",
    "region": "South Korea (Gangneung / Seoul)",
    "servings": 4,
    "prepTime": 15,
    "cookTime": 15,
    "difficulty": "Easy",
    "overview": {
      "summary": "The ultimate comforting Korean stew: pillow-soft, cloud-like unpressed curd tofu (Sundubu) and fresh clams simmered in an explosive, fiery, crimson broth infused with a quick-made chili-garlic-pork paste (Sundubu Dadeegi), topped with fresh scallions and a raw egg cracked directly into the bubbling cauldron tableside, which poached into silky, velvety richness.",
      "appearance": "A violently bubbling black earthenware cauldron with brilliant orange-red chili oil floating on top, revealing white clouds of soft silken tofu, open clamshells, and a glistening golden raw egg yolk.",
      "texture": "Pillowy, custardy soft tofu that melts instantly on the tongue like savory pudding, paired with sweet chewy clams and velvety egg yolk.",
      "flavor": "Bracing chili heat, fragrant garlicky sesame oil, sweet ocean brine from fresh clams, and rich soothing tofu curd.",
      "restingTimeMinutes": 1
    },
    "equipment": [
      {
        "name": "Ttukbaegi (Korean earthenware pot) or small heavy Dutch oven (2 qt)",
        "purpose": "Essential for retaining ferocious heat to poach the raw egg tableside."
      },
      {
        "name": "Wooden spoon",
        "purpose": "For making the chili seasoning paste directly in the pot."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Soak 250g fresh Manila clams in salted cold water for 30 minutes in the dark to purge any sand; rinse clean.",
        "durationMinutes": 30
      },
      {
        "task": "Finely mince 100g pork belly or pork shoulder into 5mm tiny bits.",
        "durationMinutes": 5
      },
      {
        "task": "Cut 1 tube (350g) extra-soft silken curd tofu (Sundubu) in half.",
        "durationMinutes": 1
      },
      {
        "task": "Prepare 400ml rich anchovy-kelp dashi stock.",
        "durationMinutes": 15
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Sundubu Tofu Selection",
        "technique": "Must use extra-soft, unpressed curd tofu sold in plastic cylindrical tubes (labeled \"Soon Tofu\" or \"Sundubu\"). Regular firm or medium tofu has too much pressed structure; sundubu is pure silky curd with a delicate pudding-like texture."
      },
      {
        "item": "Chili Oil Base (Dadeegi)",
        "technique": "Fry minced pork, garlic, scallion whites, and gochugaru in sesame oil over low heat for 2 minutes to create a fresh, concentrated chili paste (\"Dadeegi\") directly in the bottom of the pot. Frying extracts the red carotenoids into the oil before adding broth."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Korean extra-soft silken curd tofu (Sundubu)",
        "prep": "in plastic tube, sliced into large curds",
        "amount": "1 tube (350g)",
        "metric": "350g",
        "imperial": "12 oz",
        "common": "1 tube"
      },
      {
        "name": "Fresh Manila clams or peeled shrimp",
        "prep": "purged of sand & scrubbed",
        "amount": "250g",
        "metric": "250g",
        "imperial": "9 oz",
        "common": "12 clams"
      },
      {
        "name": "Ground pork or finely minced pork belly",
        "prep": "for savory base",
        "amount": "100g",
        "metric": "100g",
        "imperial": "3.5 oz",
        "common": "1/2 cup"
      },
      {
        "name": "Rich anchovy-kelp stock (or beef broth)",
        "prep": "hot liquid base",
        "amount": "400ml",
        "metric": "400ml",
        "imperial": "13.5 fl oz",
        "common": "1.75 cups"
      },
      {
        "name": "Gochugaru (Korean chili flakes)",
        "prep": "fine/coarse blend",
        "amount": "2 tbsp",
        "metric": "20g",
        "imperial": "0.7 oz",
        "common": "2 tbsp"
      },
      {
        "name": "Toasted sesame oil",
        "prep": "for frying chili base",
        "amount": "1.5 tbsp",
        "metric": "22ml",
        "imperial": "0.75 fl oz",
        "common": "1.5 tbsp"
      },
      {
        "name": "Korean soup soy sauce (Guk-ganjang) or fish sauce",
        "prep": "for seasoning",
        "amount": "1 tbsp",
        "metric": "15ml",
        "imperial": "0.5 fl oz",
        "common": "1 tbsp"
      },
      {
        "name": "Fresh garlic cloves",
        "prep": "finely minced",
        "amount": "1 tbsp",
        "metric": "15g",
        "imperial": "0.5 oz",
        "common": "3 cloves"
      },
      {
        "name": "Scallions / Green onions",
        "prep": "sliced; whites and greens separated",
        "amount": "2 stalks",
        "metric": "30g",
        "imperial": "1 oz",
        "common": "1/2 cup"
      },
      {
        "name": "Fresh large egg",
        "prep": "raw, cracked in at the table",
        "amount": "1 egg",
        "metric": "50g",
        "imperial": "1.8 oz",
        "common": "1 egg"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "BUILD THE RED CHILI BASE (DADEEGI) IN THE POT",
        "whatYouNeed": [
          "Ttukbaegi earthenware pot",
          "1.5 tbsp sesame oil",
          "Minced pork",
          "Scallion whites",
          "Minced garlic",
          "2 tbsp gochugaru"
        ],
        "description": "Heat 1.5 tbsp sesame oil in the earthenware pot over medium-low heat. Add minced pork, scallion whites, and minced garlic. Sauté for 2 minutes until pork is cooked. Turn heat to dead-low. Add 2 tbsp gochugaru and 1 tbsp soup soy sauce. Stir gently for 1 minute until the oil turns a glowing, deep scarlet-red.",
        "howToDoIt": "Cooking gochugaru over low heat in oil extracts the red chili pigment and creates fragrant chili oil without scorching the dry flakes.",
        "heat": "Medium-Low, then Dead-Low",
        "duration": 4,
        "visualCues": "Oil turns brilliant glowing crimson; paste is intensely fragrant.",
        "smell": "Rich toasted chili oil, sweet garlic, and sesame.",
        "textureCheck": "Aromatic, sizzling red paste.",
        "whatShouldThisLookLike": "Crimson chili paste sizzling in bottom of earthenware pot.",
        "tip": "Never turn heat to high while frying gochugaru — chili flakes will scorch black and bitter in 15 seconds.",
        "commonMistake": "Adding gochugaru directly to water without frying in oil first — results in a muddy, dull soup without red chili oil.",
        "moveOnWhen": "Oil is glowing crimson and aromatic.",
        "quickInstructions": "Sauté pork, garlic, and scallion whites in sesame oil 2 mins; add gochugaru on low heat for 1 min."
      },
      {
        "step": 2,
        "title": "ADD BROTH, BRING TO BOIL & DROP CLAMS",
        "whatYouNeed": [
          "400ml anchovy broth",
          "Purged fresh clams"
        ],
        "description": "Pour in 400ml hot anchovy broth. Bring to a rapid rolling boil over medium-high heat. Add the cleaned clams. Cook for 3 minutes until the clams pop open and release their sweet, briny ocean nectar into the fiery red broth.",
        "howToDoIt": "Clams open quickly in boiling broth, imparting rich natural sodium and seafood sweetness that balances the chili.",
        "heat": "Medium-High Heat",
        "duration": 4,
        "visualCues": "Broth boils furiously in fiery orange-red rolling bubbles; clams pop open.",
        "hear": "Roaring, energetic boiling.",
        "smell": "Briny sweet ocean clams and spicy chili steam.",
        "textureCheck": "Clam shells fully opened.",
        "whatShouldThisLookLike": "Fiery crimson broth with open clams.",
        "tip": "Discard any clams that refuse to open after 4 minutes of boiling.",
        "commonMistake": "Using unpurged clams — sand will ruin the delicate silky tofu.",
        "moveOnWhen": "Clams are wide open.",
        "quickInstructions": "Add broth, bring to boil, add clams, cook 3 mins until shells pop open."
      },
      {
        "step": 3,
        "title": "SPOON IN SILKEN TOFU CURDS & SIMMER",
        "whatYouNeed": [
          "1 tube silken curd tofu (Sundubu)",
          "Large spoon"
        ],
        "description": "Cut the tube of sundubu in half. Using a large spoon, scoop large, pillowy clouds of soft tofu curd directly into the bubbling broth (about 5–6 large spoonfuls). Do NOT mash or stir! Simmer gently for 4 minutes over medium heat, spooning hot red broth over the white tofu curds.",
        "howToDoIt": "Leaving the tofu in large, rustic billowy curds allows diners to scoop out warm custardy clouds that contrast with the spicy broth.",
        "heat": "Medium Heat",
        "duration": 4,
        "visualCues": "Pristine white clouds of tofu bobbing in the fiery red broth; steam rises furiously.",
        "smell": "Delicate fresh soy milk aroma mingling with chili and seafood.",
        "textureCheck": "Tofu is piping hot, custardy, and delicate.",
        "whatShouldThisLookLike": "White clouds of soft curd tofu floating in bubbling crimson stew.",
        "tip": "Tofu releases water as it cooks, naturally seasoning and balancing the concentrated broth.",
        "commonMistake": "Whisking or stirring vigorously, turning the tofu into a broken scrambled soup.",
        "moveOnWhen": "Tofu is heated through (4 mins).",
        "quickInstructions": "Scoop large clouds of soft tofu into pot; simmer gently 4 mins without stirring."
      },
      {
        "step": 4,
        "title": "ADD SCALLION GREENS & THE RAW EGG FINISH",
        "whatYouNeed": [
          "Scallion greens",
          "1 raw fresh egg",
          "Wooden base"
        ],
        "description": "Scatter sliced scallion greens across the top. TURN OFF HEAT. The pot will continue bubbling violently from the heat of the stone. Crack 1 fresh raw egg right into the center of the boiling stew. Immediately carry the pot on its wooden base to the dining table.",
        "howToDoIt": "The retained heat of the 200°C earthenware pot continues boiling at the table, softly poaching the raw egg white while keeping the yolk rich and runny.",
        "heat": "Off Heat (Earthenware continues violent boiling)",
        "duration": 1,
        "visualCues": "Egg sits in center; egg white turns opaque white against the bubbling crimson oil; golden yolk quivers.",
        "hear": "Violent, commanding bubbling that continues for minutes.",
        "smell": "Pungent chili oil, fresh scallions, and rich egg.",
        "textureCheck": "Soft poached egg white, molten yolk.",
        "whatShouldThisLookLike": "The iconic bubbling Sundubu Jjigae with raw egg crowned in the center.",
        "tip": "Diners can choose to leave the yolk whole to poach soft, or pierce and stir it into the broth for a creamy, milder stew!",
        "commonMistake": "Cooking the egg on the stove until hard-boiled — half the joy is the tableside raw egg ritual.",
        "moveOnWhen": "Egg is cracked into bubbling pot and delivered to table.",
        "quickInstructions": "Scatter scallions, turn off heat, crack raw egg into center, serve bubbling immediately."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Tofu turned into mushy grains.",
        "remedy": "Firm tofu was used, or the stew was stirred violently. Use soft tube curd tofu and spoon gently in large rustic clouds."
      },
      {
        "mistake": "Broth tasted gritty with sand.",
        "remedy": "Clams were not purged properly in salted water prior to cooking."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Stew is boiling over the edges of the pot",
        "whatHappened": "Too much broth for the size of the earthenware pot.",
        "whyItHappened": "Tofu expands and releases liquid.",
        "whatToDoNow": "Ladle out 3 tablespoons of liquid into a bowl and lower flame.",
        "howToPrevent": "Fill pot no more than 75% full before adding tofu."
      }
    ],
    "substitutions": [
      {
        "original": "Manila clams",
        "substitute": "Peeled tiger prawns, bay scallops, or sliced beef brisket",
        "notes": "Beef Sundubu (Gogi-sundubu) is equally famous and deeply rich."
      },
      {
        "original": "Tube Sundubu",
        "substitute": "Extra-soft silken tofu in a carton (gently scooped in chunks)",
        "notes": "Carton silken tofu provides a very good custardy texture."
      }
    ],
    "safetyNotes": [
      "The earthenware pot stays boiling hot; beware of bubbling oil splatters when placing egg."
    ],
    "servingGuide": {
      "restingTime": "Serve immediately while boiling.",
      "garnishing": "Raw egg yolk, sliced scallion greens, and toasted sesame oil.",
      "plating": "Serve directly in the black earthenware pot (Ttukbaegi) on wooden base.",
      "temperature": "Violently hot and bubbling.",
      "accompaniments": "Bowl of hot steamed rice (spoon rice directly into stew or vice-versa) and yellow pickled radish."
    }
  },
  "kimbap": {
    "id": "kimbap",
    "name": "Traditional Korean Seaweed Rice Rolls (Kimbap)",
    "cuisine": "Korean",
    "region": "South Korea (National)",
    "servings": 4,
    "prepTime": 35,
    "cookTime": 15,
    "difficulty": "Medium",
    "overview": {
      "summary": "Korea's beloved picnic and lunchbox treasure: fluffy short-grain rice seasoned with fragrant toasted sesame oil and salt, rolled tightly in crisp roasted nori seaweed (Kim) with a vibrant mosaic of seasoned beef bulgogi, bright yellow pickled radish (Danmuji), sweet braised burdock root (Ueong), blanched sesame spinach, carrots, and golden egg strips, brushed with sesame oil and sliced into gleaming jewel-like rounds.",
      "appearance": "Sleek, black nori cylinders brushed with glistening sesame oil and toasted sesame seeds; when sliced, reveals a dazzling multi-colored kaleidoscope mosaic cross-section.",
      "texture": "Pleasing combination: soft seasoned rice, crunchy sweet pickled radish, toothsome burdock, tender beef, silky egg ribbons, and crisp chew from nori.",
      "flavor": "Intensely nutty toasted sesame aroma, savory sweet beef, bright sweet-tart tang from pickled radish, and clean mineral sea saltiness.",
      "restingTimeMinutes": 3
    },
    "equipment": [
      {
        "name": "Gimbal (bamboo rolling mat)",
        "purpose": "Applies even, firm pressure to roll tight, compact cylinders that don't crumble when sliced."
      },
      {
        "name": "Razor-sharp chef's knife",
        "purpose": "Essential for slicing through taut nori without crushing the round cylinder."
      },
      {
        "name": "Damp kitchen towel",
        "purpose": "For wiping the knife blade between slices to ensure clean, smudge-free cuts."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Cook 500g Korean short-grain rice; season warm rice with 1.5 tbsp toasted sesame oil and 1 tsp fine salt; let cool to room temperature.",
        "durationMinutes": 20
      },
      {
        "task": "Stir-fry 150g ground beef or sliced bulgogi with 1 tbsp soy sauce, 1 tsp sugar, and 1 tsp garlic until dry.",
        "durationMinutes": 5
      },
      {
        "task": "Whisk 3 eggs with pinch of salt; cook into a flat omelette in a skillet; cool and slice into 1cm wide strips.",
        "durationMinutes": 5
      },
      {
        "task": "Julienne 1 carrot into matchsticks and sauté 1 min; blanch and season spinach; slice yellow danmuji radish into 1cm rods.",
        "durationMinutes": 10
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Rice Seasoning (Kimbap vs Sushi)",
        "technique": "Kimbap rice is NEVER seasoned with vinegar and sugar like Japanese sushi! Kimbap rice is seasoned purely with toasted sesame oil and fine sea salt while warm. The sesame oil keeps the grains moist, aromatic, and distinctly Korean."
      },
      {
        "item": "Blade Wiping for Clean Cuts",
        "technique": "Wipe your knife blade with a damp paper towel coated in a few drops of sesame oil between every single slice. The sesame oil lubricates the blade, gliding through the nori without sticking to rice starches."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Roasted Gim sheets (Korean seaweed / nori)",
        "prep": "crisp, unperforated sheets",
        "amount": "5 sheets",
        "metric": "5 sheets",
        "imperial": "5 sheets",
        "common": "5 sheets"
      },
      {
        "name": "Cooked short-grain Korean rice",
        "prep": "seasoned with 1.5 tbsp sesame oil & salt, cooled",
        "amount": "500g",
        "metric": "500g",
        "imperial": "18 oz",
        "common": "3.5 cups cooked"
      },
      {
        "name": "Yellow pickled radish (Danmuji)",
        "prep": "cut into 1cm thick long rods",
        "amount": "5 strips",
        "metric": "100g",
        "imperial": "3.5 oz",
        "common": "5 rods"
      },
      {
        "name": "Braised burdock root (Ueong-jorim)",
        "prep": "seasoned soy strips",
        "amount": "5 strips",
        "metric": "60g",
        "imperial": "2.1 oz",
        "common": "5 strips"
      },
      {
        "name": "Cooked bulgogi beef or imitation crab sticks",
        "prep": "seasoned strips",
        "amount": "150g",
        "metric": "150g",
        "imperial": "5.3 oz",
        "common": "1 cup"
      },
      {
        "name": "Eggs (Gyeran-jidan)",
        "prep": "cooked into flat omelette & sliced into strips",
        "amount": "3 eggs",
        "metric": "150g",
        "imperial": "5.3 oz",
        "common": "3 eggs"
      },
      {
        "name": "Blanched seasoned spinach (Sigeumchi-namul)",
        "prep": "squeezed bone-dry",
        "amount": "150g",
        "metric": "150g",
        "imperial": "5.3 oz",
        "common": "1/2 bunch"
      },
      {
        "name": "Carrot",
        "prep": "julienned and sautéed with salt",
        "amount": "1 medium",
        "metric": "100g",
        "imperial": "3.5 oz",
        "common": "1 piece"
      },
      {
        "name": "Pure toasted sesame oil",
        "prep": "for seasoning rice & brushing rolls",
        "amount": "3 tbsp",
        "metric": "45ml",
        "imperial": "1.5 fl oz",
        "common": "3 tbsp"
      },
      {
        "name": "Toasted white sesame seeds",
        "prep": "for sprinkling on top",
        "amount": "1 tbsp",
        "metric": "10g",
        "imperial": "0.35 oz",
        "common": "1 tbsp"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "SPREAD SESAME RICE ACROSS GIM SHEET",
        "whatYouNeed": [
          "Bamboo mat (gimbal)",
          "1 sheet roasted gim",
          "3/4 cup seasoned rice"
        ],
        "description": "Place bamboo mat on board. Lay 1 sheet of gim rough-side UP on the mat (shiny side down). Scoop 3/4 cup of room-temperature seasoned rice onto the seaweed. Using damp fingers, spread the rice evenly across the lower two-thirds of the sheet, leaving the top 3cm of seaweed completely bare.",
        "howToDoIt": "Spreading a thin, uniform layer ensures the kimbap roll is light and proportional, leaving room for an abundant filling mosaic.",
        "heat": "No Heat",
        "duration": 2,
        "visualCues": "Even, thin carpet of rice covering bottom 2/3 of seaweed; top 3cm bare.",
        "textureCheck": "Uniform thickness with no giant mounds or bare holes.",
        "whatShouldThisLookLike": "Thin layer of seasoned rice spread across dark nori.",
        "tip": "Wet your fingers with water to prevent rice from sticking like glue to your hands.",
        "commonMistake": "Spreading rice all the way to the very top edge — rice will squeeze out of the seam when rolled.",
        "moveOnWhen": "Rice is evenly spread across lower 2/3 of seaweed.",
        "quickInstructions": "Lay gim rough-side up, spread 3/4 cup seasoned rice over lower 2/3, leaving top 3cm bare."
      },
      {
        "step": 2,
        "title": "LAYER THE 6-COLOR FILLINGS",
        "whatYouNeed": [
          "Danmuji strip",
          "Burdock strip",
          "Egg strip",
          "Bulgogi beef",
          "Sautéed carrots",
          "Seasoned spinach"
        ],
        "description": "Across the center of the rice bed, layer your fillings horizontally: lay 1 strip of yellow danmuji, 1 strip of braised burdock, 1 strip of egg, a line of bulgogi beef, a bundle of sautéed carrots, and seasoned spinach. Pack the ingredients closely side-by-side.",
        "howToDoIt": "Grouping ingredients tightly together ensures the colorful mosaic stays centered inside the rice when rolled.",
        "heat": "No Heat",
        "duration": 2,
        "visualCues": "A colorful ridge of yellow, brown, orange, green, and beef resting across the rice.",
        "textureCheck": "Neatly organized fillings.",
        "whatShouldThisLookLike": "Tightly stacked ingredients resting across the center.",
        "tip": "Use the firm danmuji radish strip as a physical barrier to anchor the softer spinach and beef behind it.",
        "commonMistake": "Scattering ingredients haphazardly all over the rice — makes tight rolling impossible.",
        "moveOnWhen": "Fillings are stacked across center.",
        "quickInstructions": "Stack radish, burdock, egg, beef, carrots, and spinach tightly in center of rice."
      },
      {
        "step": 3,
        "title": "ROLL TIGHTLY WITH BAMBOO MAT",
        "whatYouNeed": [
          "Bamboo mat",
          "Both hands",
          "Water dabber"
        ],
        "description": "Lift the bottom edge of the bamboo mat with your thumbs while using your fingers to hold the fillings firmly in place. Roll the bottom edge up and over the fillings, tucking the edge firmly down to meet the top border of the rice. Press firmly along the entire length of the roll through the bamboo mat. Lift the mat slightly, roll forward to seal against the bare seaweed flap. Squeeze firmly through the mat to lock the cylinder.",
        "howToDoIt": "Applying firm, even pressure compacts the rice and ingredients so the roll stays rigid and round when sliced.",
        "heat": "No Heat",
        "duration": 2,
        "visualCues": "A tight, smooth, compact black cylinder with sealed seam.",
        "textureCheck": "Firm and taut like a solid rolling pin.",
        "whatShouldThisLookLike": "Perfect cylindrical Korean kimbap roll.",
        "tip": "Dab a drop of water along the bare top seaweed flap to glue the seam shut if needed.",
        "commonMistake": "Rolling too loosely — loose kimbap will shatter and fall apart the instant a knife touches it.",
        "moveOnWhen": "Roll is tight, sealed, and compact.",
        "quickInstructions": "Roll bottom edge over fillings with mat, press firmly, roll forward to seal bare edge, squeeze taut."
      },
      {
        "step": 4,
        "title": "BRUSH WITH SESAME OIL & TOASTED SEEDS",
        "whatYouNeed": [
          "1 tsp sesame oil",
          "Pastry brush",
          "Toasted sesame seeds"
        ],
        "description": "Place the finished kimbap roll seam-side DOWN on the cutting board. Brush the entire exterior of the dark nori skin with a glistening coat of toasted sesame oil. Sprinkle toasted sesame seeds generously along the top.",
        "howToDoIt": "Brushing with sesame oil softens the crisp nori slightly so it cuts cleanly without tearing, while imparting signature aroma and shine.",
        "heat": "No Heat",
        "duration": 1,
        "visualCues": "Lacquered, gleaming black roll glistening with sesame oil and dotted with white sesame seeds.",
        "smell": "Intense nutty toasted sesame oil.",
        "textureCheck": "Supple, glossy nori skin.",
        "whatShouldThisLookLike": "Glossy, sesame-glazed kimbap roll.",
        "tip": "Rest the roll for 2 minutes before slicing so the nori absorbs the oil and softens slightly.",
        "commonMistake": "Slicing immediately while dry nori is brittle, causing the skin to crack and tear.",
        "moveOnWhen": "Roll is brushed and resting.",
        "quickInstructions": "Brush roll with sesame oil, sprinkle with sesame seeds, rest 2 mins."
      },
      {
        "step": 5,
        "title": "THE CLEAN SLICE WITH OILED BLADE",
        "whatYouNeed": [
          "Razor-sharp chef's knife",
          "Damp oiled towel",
          "Serving platter"
        ],
        "description": "Wipe your sharp knife with a damp, sesame-oiled paper towel. Slice the roll into 1.5cm (0.6 inch) thick rounds using a gentle, single pulling stroke (do NOT saw back and forth aggressively!). Wipe the knife blade clean after every 2 or 3 cuts. Arrange rounds on a platter to display the stunning rainbow mosaic.",
        "howToDoIt": "A lubricated, razor-sharp blade slides through the nori and sticky rice without squashing the round cylinder.",
        "heat": "No Heat",
        "duration": 3,
        "visualCues": "Gorgeous jewel-like circular rounds with vibrant yellow, orange, green, brown, and white centers.",
        "textureCheck": "Clean, surgical slice with no fillings smashed out.",
        "whatShouldThisLookLike": "A stunning banqueting platter of sliced Korean Kimbap rounds.",
        "tip": "The two end pieces (\"Kkottugi\") have the most abundant overflowing fillings and are considered the prize chef's treat!",
        "commonMistake": "Pushing straight down with a dull knife, squishing the round cylinder into a flat crushed oval.",
        "moveOnWhen": "All rolls are sliced and plated.",
        "quickInstructions": "Wipe sharp knife with oiled towel; slice into 1.5cm rounds with single pulling strokes; plate."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Kimbap fell apart into loose rice when sliced.",
        "remedy": "Roll was rolled too loosely or rice was under-compressed. Squeeze firmly through the bamboo mat during rolling."
      },
      {
        "mistake": "Seaweed tore open along the seam.",
        "remedy": "Too much rice was used or overstuffed with fillings. Use 3/4 cup rice and keep fillings centered."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Knife is smashing the rolls flat during slicing",
        "whatHappened": "Knife is dull or covered in sticky rice starch.",
        "whyItHappened": "Starch creates friction against the blade.",
        "whatToDoNow": "Wash knife thoroughly, wipe dry, rub blade with sesame oil, and use a gentle sawing motion.",
        "howToPrevent": "Wipe blade with damp oiled cloth every 2 cuts."
      }
    ],
    "substitutions": [
      {
        "original": "Bulgogi beef",
        "substitute": "Canned tuna mixed with 2 tbsp Kewpie mayo (Chamchi-kimbap) or spicy kimchi",
        "notes": "Tuna-mayo kimbap (Chamchi Kimbap) is the #1 most popular convenience store style in Korea."
      },
      {
        "original": "Burdock root (Ueong)",
        "substitute": "Thinly sliced sautéed bell peppers or cucumber matchsticks",
        "notes": "Adds refreshing crisp sweetness."
      }
    ],
    "safetyNotes": [
      "Eat freshly made kimbap on the day it is made; do not refrigerate long-term as rice turns hard."
    ],
    "servingGuide": {
      "restingTime": "Rest 2 minutes before slicing.",
      "garnishing": "Toasted white sesame seeds and a light brushing of sesame oil.",
      "plating": "Arranged in overlapping shingled rows on a long rectangular platter.",
      "temperature": "Room temperature.",
      "accompaniments": "Yellow pickled radish (Danmuji), hot fish cake broth, or tteokbokki sauce for dipping."
    }
  },
  "mandu": {
    "id": "mandu",
    "name": "Handmade Korean Pork & Kimchi Dumplings (Mandu)",
    "cuisine": "Korean",
    "region": "South Korea (Gaeseong / Seoul)",
    "servings": 4,
    "prepTime": 40,
    "cookTime": 15,
    "difficulty": "Medium",
    "overview": {
      "summary": "The pride of Korean holiday feasts: delicate, thin round wrappers stuffed with a succulent, juicy filling of minced pork, finely squeezed aged kimchi, mashed firm tofu, dangmyeon glass noodles, and garlic chives, shaped into regal royal crowns (Pyeonsu) or crescents, pan-fried to a golden crispy bottom or steamed in bamboo baskets, served with a tangy soy-vinegar-chili dipping sauce.",
      "appearance": "Plump, round crown-shaped dumplings (with ends pinched together into an ingot) glistening with steam or pan-seared with a crackling golden-amber bottom.",
      "texture": "Contrasting textures: tender, chewy wrapper enclosing a fluffy, juicy, incredibly textured filling with crunchy kimchi, silky tofu, and chewy glass noodles.",
      "flavor": "Deep savory pork richness, tangy spicy kick from fermented kimchi, nutty toasted sesame oil, and subtle garlic-chive aromatics.",
      "restingTimeMinutes": 2
    },
    "equipment": [
      {
        "name": "Bamboo steamer basket with perforated parchment (or heavy skillet for pan-frying)",
        "purpose": "For steaming dumplings to translucent softness or pan-frying to a crispy crust."
      },
      {
        "name": "Cheesecloth or clean tea towel",
        "purpose": "Essential for squeezing water out of minced kimchi and tofu."
      },
      {
        "name": "Baking sheet dusted with cornstarch",
        "purpose": "Prevents raw assembled mandu from sticking."
      }
    ],
    "beforeYouStart": [
      {
        "task": "Finely mince 200g aged kimchi; squeeze bone-dry in cheesecloth to extract excess liquid.",
        "durationMinutes": 10
      },
      {
        "task": "Mash 200g firm tofu in a towel and squeeze firmly until completely crumbly and dry.",
        "durationMinutes": 5
      },
      {
        "task": "Boil 50g dangmyeon glass noodles for 6 mins; drain and finely chop into 1cm bits.",
        "durationMinutes": 8
      },
      {
        "task": "Finely chop 50g garlic chives (buchu) or scallions.",
        "durationMinutes": 3
      }
    ],
    "ingredientPrepGuide": [
      {
        "item": "Squeezing Kimchi & Tofu Bone-Dry",
        "technique": "Both kimchi and tofu contain massive amounts of water. You MUST squeeze both inside a clean dish towel until no liquid drips. If wet tofu and kimchi are added to raw pork, the filling will turn into a wet mush that tears delicate wrappers."
      },
      {
        "item": "Crown Shaping (Wang-Mandu)",
        "technique": "Fold wrapper in half over filling to create a half-moon, pleating edges tightly. Then bring the two sharp outer crescent tips together in front, overlap them, and pinch firmly with water to create a round royal crown shape."
      }
    ],
    "essentialIngredients": [
      {
        "name": "Round mandu wrappers (Korean dumpling skins)",
        "prep": "room temperature",
        "amount": "30 wrappers",
        "metric": "30 wrappers",
        "imperial": "30 wrappers",
        "common": "1 pack"
      },
      {
        "name": "Ground pork (70/30 meat to fat)",
        "prep": "chilled",
        "amount": "250g",
        "metric": "250g",
        "imperial": "9 oz",
        "common": "1/2 lb"
      },
      {
        "name": "Aged kimchi",
        "prep": "finely minced and squeezed bone-dry",
        "amount": "200g",
        "metric": "200g",
        "imperial": "7 oz",
        "common": "1.5 cups"
      },
      {
        "name": "Firm tofu",
        "prep": "mashed and squeezed completely dry in towel",
        "amount": "200g",
        "metric": "200g",
        "imperial": "7 oz",
        "common": "1/2 block"
      },
      {
        "name": "Korean glass noodles (Dangmyeon)",
        "prep": "boiled 6 mins, drained & finely chopped",
        "amount": "50g dry",
        "metric": "100g cooked",
        "imperial": "3.5 oz",
        "common": "1/2 cup chopped"
      },
      {
        "name": "Garlic chives (Buchu) or scallions",
        "prep": "finely chopped",
        "amount": "50g",
        "metric": "50g",
        "imperial": "1.8 oz",
        "common": "1/2 cup"
      },
      {
        "name": "Fresh garlic & ginger",
        "prep": "finely minced",
        "amount": "1.5 tbsp garlic + 1 tsp ginger",
        "metric": "20g",
        "imperial": "0.7 oz",
        "common": "mixed"
      },
      {
        "name": "Korean soy sauce & Sesame oil",
        "prep": "for seasoning filling",
        "amount": "1.5 tbsp each",
        "metric": "45ml",
        "imperial": "1.5 fl oz",
        "common": "3 tbsp total"
      },
      {
        "name": "Ground black pepper & fine salt",
        "prep": "seasoning",
        "amount": "1/2 tsp each",
        "metric": "3g",
        "imperial": "0.1 oz",
        "common": "1/2 tsp each"
      },
      {
        "name": "Soy-vinegar dipping sauce",
        "prep": "2 tbsp soy + 1 tbsp vinegar + 1 tsp gochugaru",
        "amount": "3 tbsp",
        "metric": "45ml",
        "imperial": "1.5 fl oz",
        "common": "mixed"
      }
    ],
    "steps": [
      {
        "step": 1,
        "title": "KNEAD THE MULTI-TEXTURED MANDU FILLING",
        "whatYouNeed": [
          "Ground pork",
          "Squeezed dry kimchi",
          "Squeezed dry tofu",
          "Chopped glass noodles",
          "Chives",
          "Garlic, ginger",
          "Soy sauce",
          "Sesame oil",
          "Salt, pepper"
        ],
        "description": "In a large bowl, place ground pork, soy sauce, sesame oil, garlic, ginger, salt, and black pepper. Knead vigorously with your hand for 2 minutes until meat becomes tacky and sticky. Add the squeezed kimchi, dry crumbled tofu, chopped glass noodles, and garlic chives. Mix gently with hands until evenly blended. Chill for 15 minutes.",
        "howToDoIt": "Whipping the pork first binds the meat proteins, which then wrap around the fluffy tofu, crunchy kimchi, and chewy noodles.",
        "heat": "No Heat",
        "duration": 8,
        "visualCues": "Vibrant, cohesive filling specked with red kimchi, white tofu curds, and green chives.",
        "smell": "Tangy kimchi, sesame oil, and garlic.",
        "textureCheck": "Tacky, cohesive, and moist without weeping liquid.",
        "whatShouldThisLookLike": "Colorful, well-mixed Korean mandu filling.",
        "tip": "Fry a tiny teaspoon of filling in a pan to taste for seasoning before wrapping all 30 dumplings!",
        "commonMistake": "Skipping the tofu-squeezing step — wet tofu turns the filling into watery slop.",
        "moveOnWhen": "Filling is cohesive, chilled, and tested.",
        "quickInstructions": "Knead pork with seasonings until sticky; fold in squeezed kimchi, tofu, noodles, and chives."
      },
      {
        "step": 2,
        "title": "PLEAT & FORM THE ROYAL CROWN SHAPE",
        "whatYouNeed": [
          "30 wrappers",
          "Chilled filling",
          "Small bowl of water",
          "Cornstarch-dusted baking sheet"
        ],
        "description": "Hold a wrapper flat in your palm. Place 1 generous tablespoon (approx 20g) of filling in the center. Wet the outer edge with water. Fold in half over the filling and pinch the edges together into a sealed half-moon (crescent), making 3–4 pleats along the top seam. Now take the two outer corner tips of the crescent, bring them together in front, overlap them, dab a drop of water, and pinch firmly to form a round crown shape.",
        "howToDoIt": "Joining the tips creates the regal \"Wang-Mandu\" (King Dumpling) crown shape that holds generous filling and stands upright.",
        "heat": "No Heat",
        "duration": 20,
        "visualCues": "Round, plump, crown-shaped dumplings resembling royal ingots with pinched seams.",
        "textureCheck": "Firmly sealed seams with zero air pockets.",
        "whatShouldThisLookLike": "Plump, circular Korean crown dumplings.",
        "tip": "Pinch the joined tips firmly with damp fingers so they do not pop open during steaming.",
        "commonMistake": "Overfilling, which forces raw meat into the seams and breaks the dumplings open.",
        "moveOnWhen": "All 30 mandu are shaped and resting on baking sheet.",
        "quickInstructions": "Fold wrapper over filling into pleated half-moon, then bring the two outer corners together and pinch into crown."
      },
      {
        "step": 3,
        "title": "STEAM IN BAMBOO BASKETS (OPTION A)",
        "whatYouNeed": [
          "Bamboo steamer with parchment",
          "Wok with boiling water",
          "Mandu"
        ],
        "description": "Line bamboo steamer baskets with parchment. Arrange mandu leaving 2cm space between them. Place over a wok of boiling water. Cover tightly with bamboo lid. Steam over high heat for 10 to 12 minutes until wrappers turn glossy and translucent and pork filling is piping hot (74°C / 165°F).",
        "howToDoIt": "Bamboo steam cooks the dumplings gently, keeping the wrappers soft, tender, and translucent.",
        "heat": "High Steam",
        "duration": 12,
        "visualCues": "Wrappers become glassy and translucent, showing the pink pork, red kimchi, and green chives within.",
        "smell": "Aromatic steamed dough, savory pork, and tangy kimchi.",
        "textureCheck": "Tender chewy wrapper enclosing a succulent, juicy filling.",
        "whatShouldThisLookLike": "Steaming, translucent royal crown mandu.",
        "tip": "If you prefer crispy pan-fried Gun-mandu: sear flat bottoms in 1 tbsp oil for 3 mins, add 60ml water, cover and steam 5 mins, uncover and crisp 2 mins!",
        "commonMistake": "Leaving dumplings in the steamer after turning off heat — condensation drips onto wrappers.",
        "moveOnWhen": "Dumplings are translucent and cooked through.",
        "quickInstructions": "Steam mandu in bamboo baskets for 10-12 mins over boiling water until translucent."
      },
      {
        "step": 4,
        "title": "SERVE WITH TANGY SOY-VINEGAR DIPPING SAUCE",
        "whatYouNeed": [
          "Steamed mandu",
          "Dipping sauce (soy sauce, rice vinegar, gochugaru, sesame seeds)"
        ],
        "description": "Carefully transfer the hot mandu to a wide platter or serve directly in the bamboo basket. Pair with individual dipping bowls of soy sauce, rice vinegar, a pinch of gochugaru chili flakes, and sesame seeds.",
        "howToDoIt": "The tart vinegar cuts through the rich pork fat while the gochugaru enhances the kimchi warmth.",
        "heat": "Off Heat",
        "duration": 1,
        "visualCues": "Glistening, plump crown dumplings releasing hot steam next to dark tangy dipping sauce.",
        "smell": "Tangy vinegar, savory pork, and spicy kimchi.",
        "textureCheck": "Silky bite with a burst of crunchy, juicy filling.",
        "whatShouldThisLookLike": "Traditional Korean mandu platter.",
        "tip": "Mandu can also be dropped directly into boiling beef broth to make legendary Mandu-guk (dumpling soup)!",
        "commonMistake": "Eating in one giant bite without letting steam escape — hot pork juices can burn the tongue.",
        "moveOnWhen": "Served piping hot.",
        "quickInstructions": "Plate hot mandu immediately; serve with soy-vinegar-chili dipping sauce."
      }
    ],
    "commonMistakes": [
      {
        "mistake": "Mandu wrappers burst open during steaming.",
        "remedy": "Too much water remained in the filling. Squeeze kimchi and tofu bone-dry before mixing."
      },
      {
        "mistake": "Filling tasted bland and dry.",
        "remedy": "Not enough seasoning or pork was too lean. Use 70/30 pork and season well with sesame oil and soy sauce."
      }
    ],
    "troubleshooting": [
      {
        "problem": "Mandu wrappers are tearing while folding",
        "whatHappened": "Wrappers dried out from exposure to kitchen air.",
        "whyItHappened": "Flour wrappers lose moisture rapidly.",
        "whatToDoNow": "Cover wrapper stack with a damp cloth; brush edges with extra water to restore elasticity.",
        "howToPrevent": "Keep unused wrappers covered under a damp paper towel while working."
      }
    ],
    "substitutions": [
      {
        "original": "Ground pork",
        "substitute": "Ground chicken, beef, or extra tofu and shiitake mushrooms",
        "notes": "Vegetarian tofu-kimchi mandu is exceptionally popular in Korea."
      },
      {
        "original": "Mandu wrappers",
        "substitute": "Round gyoza or wonton wrappers",
        "notes": "Gyoza wrappers work wonderfully as an accessible alternative."
      }
    ],
    "safetyNotes": [
      "Pork filling must reach safe internal temperature of 74°C (165°F)."
    ],
    "servingGuide": {
      "restingTime": "Rest 1 minute before eating.",
      "garnishing": "Toasted sesame seeds and sliced scallions.",
      "plating": "Serve in steaming bamboo basket or arranged in concentric circles on a ceramic platter.",
      "temperature": "Piping hot.",
      "accompaniments": "Soy-vinegar dipping sauce, aged cabbage kimchi, and pickled radish."
    }
  }
};
