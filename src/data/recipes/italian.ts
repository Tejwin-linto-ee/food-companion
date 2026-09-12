import type { DetailedRecipe } from './types';
import { UNIVERSAL_COOKING_GLOSSARY } from './glossary';

export const ITALIAN_RECIPES: Record<string, DetailedRecipe> = {
  'carbonara': {
    id: 'carbonara',
    name: 'Spaghetti alla Carbonara',
    cuisine: 'Italian',
    region: 'Lazio (Rome)',
    servings: 2,
    prepTime: 12,
    cookTime: 15,
    difficulty: 'Medium',
    overview: {
      summary: 'Authentic Roman Spaghetti alla Carbonara — bronze-cut pasta tossed with crispy rendered guanciale, coarsely cracked black pepper, and a velvety emulsion of fresh egg yolks and Pecorino Romano cheese. Made with zero cream.',
      appearance: 'Glossy, golden, lustrous nests of spaghetti thoroughly coated in a rich, creamy sauce with no visible liquid pooling, studded with crisp browned guanciale batons and black pepper specks.',
      texture: 'Silky, velvety, and luxurious with a firm toothsome al dente pasta bite and crisp-chewy pork morsels.',
      flavor: 'Deeply savory, salty, rich, and pungent with toasted black pepper warmth and sheep-milk cheese tang.',
      restingTimeMinutes: 1
    },
    equipment: [
      { name: 'Large pasta boiling pot (at least 4 liters)', purpose: 'Allows pasta plenty of room to cook without lowering water temperature or sticking.' },
      { name: 'Heavy stainless or carbon steel skillet (10–12 inch)', purpose: 'Even heat conduction to gently render pork fat without scorching.' },
      { name: 'Microplane / fine cheese grater', purpose: 'Produces a powdery, cloud-like cheese texture that dissolves instantly into the sauce without clumping.' },
      { name: 'Tongs', purpose: 'Essential for twirling, agitating, and emulsifying pasta with the sauce.' },
      { name: 'Heatproof mixing bowl', purpose: 'Pre-mixing the egg and cheese paste allows gradual tempering without scrambling.' }
    ],
    beforeYouStart: [
      { task: 'Finely grate 60g Pecorino Romano cheese with a microplane until light and fluffy.', durationMinutes: 5 },
      { task: 'Whisk 3 egg yolks, 1 whole egg, grated cheese, and coarse black pepper in a bowl into a thick paste.', durationMinutes: 4 },
      { task: 'Cut guanciale into 1cm thick by 2cm long batons.', durationMinutes: 4 },
      { task: 'Bring 4 liters of water to a rolling boil on the back burner with 1 tbsp coarse salt.', durationMinutes: 8 }
    ],
    ingredientPrepGuide: [
      { item: 'Guanciale (or Pancetta)', technique: 'Slice into 1cm (0.4 inch) thick slabs, then cut into 2cm (0.8 inch) batons. Avoid tiny cubes which dry out.' },
      { item: 'Pecorino Romano DOP', technique: 'Microplane into powdery snow so it dissolves into starchy water without stringiness.' },
      { item: 'Eggs', technique: 'Use fresh room-temperature eggs. Whisk yolks and whole egg with cheese into a thick golden paste.' }
    ],
    essentialIngredients: [
      { name: 'Spaghetti (bronze-die extruded)', prep: 'dried pasta, high protein', amount: '250g', metric: '250g', imperial: '8.8 oz', common: '0.55 lb' },
      { name: 'Guanciale (cured pork jowl)', prep: 'rind trimmed, cut into 1cm batons', amount: '120g', metric: '120g', imperial: '4.2 oz', common: '4.2 oz' },
      { name: 'Fresh egg yolks (room temp)', prep: 'separated from whites', amount: '3 yolks', metric: '3 yolks', imperial: '3 yolks', common: '3 yolks' },
      { name: 'Fresh whole egg (room temp)', prep: 'whisked into yolks', amount: '1 egg', metric: '1 egg', imperial: '1 egg', common: '1 egg' },
      { name: 'Pecorino Romano DOP', prep: 'microplane-grated into fluffy snow', amount: '60g', metric: '60g', imperial: '2.1 oz', common: '3/4 cup' },
      { name: 'Whole black peppercorns', prep: 'coarsely cracked in mortar', amount: '1.5 tsp', metric: '5g', imperial: '0.2 oz', common: '1.5 tsp' },
      { name: 'Coarse sea salt', prep: 'for boiling water (lightly salted)', amount: '1 tbsp', metric: '15g', imperial: '0.5 oz', common: '1 tbsp' }
    ],
    optionalIngredients: [
      { name: 'Parmigiano Reggiano', prep: 'to blend with Pecorino for milder saltiness', amount: '20g', metric: '20g', imperial: '0.7 oz', common: '1/4 cup', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'RENDER GUANCIALE IN A COLD SKILLET',
        whatYouNeed: ['120g guanciale batons', 'Heavy skillet', 'Wooden spatula'],
        description: 'Place sliced guanciale directly into a cold skillet with NO added oil or butter. Place pan over medium-low heat. Cook for 8 to 10 minutes, stirring occasionally as fat slowly liquefies and pools.',
        howToDoIt: 'Cold pan start melts hard pork fat into liquid before meat browns. Continue until pork batons are deep golden-amber and crisp outside while remaining chewy inside. Remove pan from heat. Transfer half the crispy pork to a plate for garnish, keeping rendered fat in the pan.',
        heat: 'Medium-Low Heat',
        heatDescription: 'Quiet, gentle sizzling in clear golden rendered fat with zero smoke.',
        duration: 10,
        donenessCue: 'Guanciale is deeply golden and crisp on the outside; generous clear liquid fat pools across skillet.',
        see: 'Fat turns from solid white to clear golden liquid; meat turns deep golden amber.',
        hear: 'Steady, quiet crackle.',
        smell: 'Intense cured pork aroma with herbal notes.',
        feel: 'Pork batons offer crisp resistance when tapped with tongs.',
        tip: 'Reserve half the crispy guanciale on a plate to retain its crunch for the final topping.',
        warning: 'Do not let the fat smoke or the pork burn into hard pebbles.',
        moveOnWhen: 'Pork is crisp, pan has generous rendered fat, and pan is taken off heat.',
        quickInstructions: 'Cook guanciale in a cold skillet over medium-low for 8–10 min until golden and crisp; reserve half for topping.'
      },
      {
        step: 2,
        title: 'BOIL SPAGHETTI TO FIRM AL DENTE',
        whatYouNeed: ['250g spaghetti', '4 liters boiling water with 1 tbsp salt', 'Tongs', 'Ladle & measuring cup'],
        description: 'Drop spaghetti into rolling boiling water. Fan out and stir with tongs for 60 seconds to prevent sticking. Cook 1 to 2 minutes less than package directions (approx 8–9 min).',
        howToDoIt: 'Stir every few minutes. Water will turn cloudy with released pasta starch. CRITICAL: Before draining, use a ladle to scoop 1 full cup (240ml) of hot starchy water into a mug and set aside.',
        heat: 'High Heat',
        heatDescription: 'Rolling boil with tumbling bubbles.',
        duration: 9,
        donenessCue: 'Bite a strand in half. It should offer firm, toothsome chew with a tiny white pin-dot in the exact center core.',
        see: 'Pasta softens and drapes flexibly; water turns cloudy white.',
        hear: 'Roaring boil.',
        smell: 'Clean, wheaty pasta aroma.',
        lookFor: 'Never discard all pasta water! It is the emulsifier that creates creaminess without cream.',
        tip: 'Bronze-cut pasta has a chalky, rough texture that holds emulsion far better than shiny, slippery pasta.',
        warning: 'Always scoop out pasta water before touching the colander!',
        moveOnWhen: 'Spaghetti is al dente and 1 full cup of starchy pasta water is safely reserved.',
        checkpoint: 'CHECKPOINT: Did you ladle out 1 cup of pasta cooking water? If not, do it right now before draining!',
        quickInstructions: 'Boil spaghetti in salted water 8–9 min until firm al dente. Reserve 1 cup of starchy water before draining.'
      },
      {
        step: 3,
        title: 'COAT PASTA IN RENDERED FAT (OFF HEAT)',
        whatYouNeed: ['Drained hot spaghetti', 'Skillet with rendered fat', 'Tongs'],
        description: 'Transfer hot, drained spaghetti directly into the skillet with rendered pork fat. Toss vigorously with tongs for 30–45 seconds so every strand is glistening with savory fat. REMOVE SKILLET FROM STOVE COMPLETELY.',
        howToDoIt: 'Let the skillet sit off the burner on the counter for 45 to 60 seconds to cool down slightly. The pan must be warm (approx 140°F / 60°C), but NOT scorching hot.',
        heat: 'No Heat (Pan Off Stove)',
        heatDescription: 'Pan resting on countertop away from burner.',
        duration: 1,
        donenessCue: 'Every pasta strand is glossy with pork fat, and the pan has stopped sizzling.',
        see: 'Shiny noodles coated in pork gloss; no smoke or sizzle.',
        feel: 'Slippery, fluid movement of pasta strands.',
        tip: 'CRITICAL: If you add eggs to a sizzling pan, the eggs will scramble into sweet omelet curds! Patience saves the sauce.',
        warning: 'Do not pour eggs into a sizzling pan.',
        moveOnWhen: 'Skillet is warm to the touch with no active sizzle.',
        quickInstructions: 'Toss hot pasta in rendered fat off the heat for 45 sec until coated and pan cools slightly.'
      },
      {
        step: 4,
        title: 'CREATE THE VELVETY EGG-CHEESE EMULSION',
        whatYouNeed: ['Egg-Pecorino paste', 'Warm pasta in skillet', 'Reserved hot pasta water', 'Tongs'],
        description: 'Pour the egg, Pecorino, and pepper paste directly over the pasta. Immediately ladle in 4 tablespoons (60ml) of hot starchy pasta water. Toss, stir, and twirl the pasta rapidly and continuously with tongs.',
        howToDoIt: 'The combination of starch from the pasta water, residual warmth from the pasta, and rendered pork fat emulsifies with the egg yolks, transforming into a thick, glossy, velvety sauce that hugs every strand.',
        heat: 'No Heat (Residual Warmth Only)',
        heatDescription: 'No burner flame. Residual heat gently cooks eggs into a creamy custard.',
        duration: 2,
        donenessCue: 'The sauce turns creamy, opaque golden, and coats the noodles like melted silk with zero pooling of watery liquid in the bottom of the pan.',
        see: 'A miraculous transformation: thick paste melts into a glossy, lustrous, smooth golden coat.',
        hear: 'Squishy, rich, wet emulsification sound as tongs twirl the pasta.',
        smell: 'Sharp sheep cheese, toasted black pepper, and rich custardy egg aroma.',
        feel: 'Silky, creamy drag as tongs turn the noodles.',
        lookFor: 'Smooth emulsion with zero egg curds or lumps.',
        tip: 'If the sauce looks too thick or dry, splash in 1 more tablespoon of hot pasta water. If too thin, keep tossing; residual heat thickens it quickly.',
        whatShouldThisLookLike: 'A shiny, creamy golden sauce clinging tightly to every single strand of spaghetti without a drop of heavy cream.',
        moveOnWhen: 'Sauce is velvety, glossy, and evenly distributed across all pasta strands.',
        quickInstructions: 'Pour egg-cheese paste over pasta with 4 tbsp hot pasta water. Toss rapidly off heat until velvety and creamy.'
      },
      {
        step: 5,
        title: 'TWIRL, GARNISH, AND SERVE IMMEDIATELY',
        whatYouNeed: ['Reserved crispy guanciale', 'Extra grated Pecorino', 'Freshly cracked black pepper', 'Warm bowls', 'Tongs & ladle'],
        description: 'Twirl the spaghetti inside a ladle using tongs to create a tight, elegant nest. Slide into pre-warmed pasta bowls. Spoon any remaining silky sauce from the skillet over the nests. Crown with the reserved crispy guanciale, an extra snowfall of grated Pecorino, and a final burst of freshly cracked black pepper.',
        howToDoIt: 'Serve immediately! Real carbonara waits for no one — the sauce is at its peak silkiness during the first 3 minutes.',
        heat: 'None',
        duration: 1,
        donenessCue: 'Bowls are plated, glistening with sauce, crowned with crispy pork.',
        see: 'Lustrous golden spaghetti nests topped with crunchy bronze pork cubes and dark pepper dust.',
        smell: 'The intoxicating fragrance of historic Rome.',
        tip: 'Warm your bowls with hot water beforehand so the delicate egg emulsion stays creamy until the last bite.',
        whatShouldThisLookLike: 'Restaurant-quality Italian carbonara with shiny noodles, crispy pork jewels, and no dry or clumpy spots.',
        moveOnWhen: 'Served immediately and ready to eat.',
        quickInstructions: 'Twirl into warm bowls, top with reserved crispy guanciale, extra Pecorino, and black pepper. Eat immediately.'
      }
    ],
    commonMistakes: [
      { mistake: 'Adding heavy cream, milk, or peas.', remedy: 'Traditional Roman carbonara strictly forbids cream. The silkiness comes entirely from egg yolks, starchy water, fat, and cheese.' },
      { mistake: 'Adding eggs while the skillet is over active heat.', remedy: 'Always remove the pan from heat and let it cool for 45 seconds before adding the eggs.' },
      { mistake: 'Throwing away all pasta water.', remedy: 'Always scoop out 1 cup of hot starchy cooking water before draining pasta.' }
    ],
    troubleshooting: [
      {
        problem: 'Sauce scrambled into tiny curds',
        whatHappened: 'The egg proteins coagulated into lumps instead of forming a creamy emulsion.',
        whyItHappened: 'The skillet was kept on the heat burner or wasn’t allowed to cool down before eggs were added.',
        whatToDoNow: 'Quickly remove from all heat, splash in 2 tbsp cold pasta water, and whisk rapidly. It will still taste delicious even if slightly curdled.',
        howToPrevent: 'Always take the skillet off the burner and wait 45 seconds before adding the egg mixture.'
      },
      {
        problem: 'Sauce is sticky, thick, or dry',
        whatHappened: 'The cheese absorbed all moisture without enough liquid to form a flowing emulsion.',
        whyItHappened: 'Not enough starchy pasta water was added during the tossing stage.',
        whatToDoNow: 'Add 2–3 tablespoons of hot reserved pasta water and toss vigorously with tongs.',
        howToPrevent: 'Keep 1 cup of hot pasta water beside the skillet and splash in gradually while tossing.'
      },
      {
        problem: 'Dish tastes overwhelmingly salty',
        whatHappened: 'Pecorino Romano and guanciale are both intensely cured with salt.',
        whyItHappened: 'Too much salt was added to the pasta cooking water.',
        whatToDoNow: 'Grate fresh unsalted black pepper and mix in a splash of unsalted warm water.',
        howToPrevent: 'Only lightly salt the pasta water (1 tbsp for 4 liters) when making carbonara.'
      }
    ],
    substitutions: [
      { original: 'Guanciale (cured pork jowl)', substitute: 'Thick-cut unsmoked Pancetta or quality slab bacon', impact: 'Pancetta is very close; bacon adds mild smokiness which changes the Roman profile but remains delicious.' },
      { original: 'Pecorino Romano', substitute: 'Parmigiano Reggiano DOP', impact: 'Yields a milder, nuttier, less sharply salty sauce.' }
    ],
    safetyNotes: [
      'Residual heat from the pasta (approx 145°F / 63°C) gently cooks egg yolks into a safe custard while keeping them silky.',
      'Take care when draining hot pasta water.'
    ],
    servingGuide: {
      restingTime: 'Zero — eat immediately while silky and warm.',
      garnishing: 'Reserved crispy guanciale, extra grated Pecorino, freshly cracked black pepper.',
      plating: 'Twirl into warm shallow bowls using a ladle and tongs for a tight nest.',
      temperature: 'Serve steaming hot immediately.'
    },
    cookingGlossary: UNIVERSAL_COOKING_GLOSSARY
  },

  'pizza': {
    id: 'pizza',
    name: 'Artisan Neapolitan Pizza',
    cuisine: 'Italian',
    region: 'Campania (Naples)',
    servings: 2,
    prepTime: 25,
    cookTime: 10,
    difficulty: 'Medium',
    overview: {
      summary: 'Classic Italian pizza with a bubbly, blistered, leopard-spotted crust (cornicione), San Marzano tomato sauce, melted fresh mozzarella, and aromatic fresh basil leaves.',
      appearance: 'A circular rustic pie with puffed, charred blister spots along the raised rim, melted pools of fresh white mozzarella, and deep red tomato sauce.',
      texture: 'Crisp on the outer rim with an airy, pillowy, open crumb interior and a tender, foldable center.',
      flavor: 'Sweet-acidic tomato brightness, creamy milky cheese, fragrant sweet basil, and charred wood-fired wheat aroma.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Pizza stone or baking steel', purpose: 'Stores intense thermal energy to flash-bake the crust bottom in minutes.' },
      { name: 'Pizza peel or rimless baking sheet', purpose: 'Launches the shaped pizza safely onto the scorching stone.' },
      { name: 'Parchment paper or coarse semolina', purpose: 'Prevents dough from sticking to the peel during transfer.' }
    ],
    beforeYouStart: [
      { task: 'Place pizza stone on the top rack of your oven and preheat to maximum temperature (500°F–550°F / 260°C–285°C) for at least 45 minutes.', durationMinutes: 45 },
      { task: 'Tear fresh mozzarella into bite-sized pieces and drain on paper towels for 20 minutes to prevent a watery pizza.', durationMinutes: 20 },
      { task: 'Crush canned San Marzano whole tomatoes by hand with 1 tsp salt and 1 tbsp olive oil into a rustic sauce.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'Pizza Dough', technique: 'Allow proofed dough ball to come to room temperature for 1 hour so gluten relaxes and stretches without snapping back.' },
      { item: 'Fresh Mozzarella', technique: 'Tear by hand and drain thoroughly; excess moisture makes the crust soggy in a home oven.' },
      { item: 'Tomato Sauce', technique: 'Do NOT cook the sauce! Raw San Marzano tomatoes cook during baking, preserving fresh bright flavor.' }
    ],
    essentialIngredients: [
      { name: 'Pizza dough ball (fermented)', prep: 'room temp, approx 250g per pie', amount: '2 balls (500g)', metric: '500g', imperial: '17.6 oz', common: '2 dough balls' },
      { name: 'San Marzano whole peeled tomatoes', prep: 'crushed by hand with sea salt', amount: '1 can (400g)', metric: '400g', imperial: '14 oz', common: '1 can' },
      { name: 'Fresh mozzarella (Fior di Latte)', prep: 'torn into chunks, drained dry', amount: '200g', metric: '200g', imperial: '7 oz', common: '1 cup torn' },
      { name: 'Fresh basil leaves', prep: 'rinsed and patted dry', amount: '10–12 leaves', metric: '10g', imperial: '0.35 oz', common: '10 leaves' },
      { name: 'Extra virgin olive oil', prep: 'for drizzling', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp' },
      { name: 'Semolina flour or coarse polenta', prep: 'for dusting the peel', amount: '2 tbsp', metric: '20g', imperial: '0.7 oz', common: '2 tbsp' }
    ],
    optionalIngredients: [
      { name: 'Parmigiano Reggiano', prep: 'finely grated for post-bake dusting', amount: '2 tbsp', metric: '15g', imperial: '0.5 oz', common: '2 tbsp', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'STRETCH THE DOUGH BY HAND (NO ROLLING PIN)',
        whatYouNeed: ['Dough ball', 'Semolina flour', 'Work surface'],
        description: 'Dust work surface with semolina. Place dough ball in flour. Using your fingertips, press gently from the center outward, leaving a 1-inch puffed border untouched around the perimeter. Pick up the dough and gently drape over your knuckles, rotating so gravity stretches it into a 10–12 inch circle.',
        howToDoIt: 'NEVER use a rolling pin! Rolling pins crush the delicate fermented gas bubbles that create an airy, puffed crust.',
        heat: 'Oven at 500°F–550°F (260°C–285°C)',
        heatDescription: 'Maximum heat with preheated pizza stone on upper rack.',
        duration: 5,
        donenessCue: 'Dough is an even 10-12 inch circle with an intact, puffed, pillowy outer rim.',
        see: 'Air bubbles visible in the raised border; thin translucent center.',
        feel: 'Soft, pliable, elastic dough.',
        tip: 'If dough keeps snapping back, let it rest for 5 minutes to relax the gluten, then continue stretching.',
        moveOnWhen: 'Dough is stretched and transferred onto a dusted pizza peel or parchment sheet.',
        quickInstructions: 'Stretch dough with fingertips from center outward, leaving 1-inch puffed rim. Do not use rolling pin.'
      },
      {
        step: 2,
        title: 'SAUCE, CHEESE, AND OIL TOPPING',
        whatYouNeed: ['Crushed tomato sauce', 'Drained mozzarella', 'Olive oil'],
        description: 'Spoon 3 to 4 tablespoons of crushed tomato sauce into the center and swirl outward with the back of the spoon, stopping at the crust rim. Distribute torn mozzarella chunks evenly across the sauce. Drizzle 1 tablespoon of extra virgin olive oil over the top.',
        howToDoIt: 'Do NOT overload with sauce or cheese! Heavy toppings weigh down the center and turn the crust soggy.',
        heat: 'Oven at 500°F (260°C)',
        duration: 2,
        donenessCue: 'Balanced distribution with exposed red sauce between white cheese pockets.',
        see: 'Red sauce base with islands of white mozzarella and a glossy oil sheen.',
        tip: 'Give the peel a gentle shake back and forth to ensure the dough slides freely before launching into the oven.',
        moveOnWhen: 'Pizza is lightly topped and slides freely on the peel.',
        quickInstructions: 'Spread 3–4 tbsp sauce, scatter drained mozzarella chunks, and drizzle olive oil. Do not overload.'
      },
      {
        step: 3,
        title: 'FLASH BAKE ON SCORCHING STONE',
        whatYouNeed: ['Pizza peel', 'Preheated pizza stone in 500°F+ oven', 'Tongs'],
        description: 'Slide the pizza directly onto the preheated stone. Bake for 7 to 9 minutes until the crust puffs dramatically and develops dark charred blister spots, and the cheese is melted and bubbling.',
        howToDoIt: 'Leave the oven door closed for the first 5 minutes to trap maximum convection heat. If top needs more color, switch to broil for the final 60 seconds.',
        heat: 'High Oven Heat / Broil',
        heatDescription: 'Scorching stone contact bottom, intense radiant heat top.',
        duration: 8,
        donenessCue: 'Crust has dark charred leopard spots; cheese is melted with golden brown speckles.',
        see: 'Puffy, blistered cornicione rim; molten, bubbling cheese pockets.',
        hear: 'Crackling, sizzling cheese fats.',
        smell: 'Incredible pizzeria aroma of toasted dough and sweet roasted tomato.',
        tip: 'A quick 60-second blast under the broiler at the end creates authentic wood-fired style leopard char.',
        moveOnWhen: 'Crust is charred and crisp, and cheese is bubbling hot.',
        quickInstructions: 'Bake on hot pizza stone at 500°F for 7–9 min until crust puffs with charred spots and cheese bubbles.'
      },
      {
        step: 4,
        title: 'GARNISH WITH FRESH BASIL AND SLICE',
        whatYouNeed: ['Fresh basil leaves', 'Pizza cutter / chef knife', 'Cutting board'],
        description: 'Carefully slide the baked pizza onto a wooden board using your peel. Immediately scatter fresh basil leaves over the molten cheese (the residual heat wilts them slightly, releasing sweet perfume). Let rest for 2 minutes, then slice into triangles.',
        howToDoIt: 'Cut with a firm rocking motion of a chef knife or a sharp pizza wheel so cheese doesn’t drag.',
        heat: 'None',
        duration: 2,
        donenessCue: 'Crust holds its shape when folded lengthwise with no soggy flop.',
        see: 'Vibrant green basil leaves gleaming against molten cheese and red sauce.',
        smell: 'Sweet, peppery basil mingling with hot charred bread and melted cheese.',
        tip: 'Adding basil AFTER baking prevents the delicate herb from scorching into bitter black ash.',
        moveOnWhen: 'Sliced and ready to eat while hot.',
        quickInstructions: 'Transfer to board, scatter fresh basil over hot cheese, rest 2 min, slice, and enjoy.'
      }
    ],
    commonMistakes: [
      { mistake: 'Using a rolling pin.', remedy: 'A rolling pin flattens air pockets. Stretch only with fingertips and knuckles.' },
      { mistake: 'Overloading with too much sauce and cheese.', remedy: 'Keep toppings light: 3–4 tbsp sauce and 100g mozzarella per pie.' },
      { mistake: 'Not draining fresh mozzarella.', remedy: 'Tear cheese and let it drain on paper towels for 20 minutes before topping.' }
    ],
    troubleshooting: [
      {
        problem: 'Crust center is soggy and wet',
        whatHappened: 'Moisture trapped on top prevented the crust from baking through.',
        whyItHappened: 'Mozzarella was too wet, or too much tomato sauce was applied.',
        whatToDoNow: 'Slide the pizza directly back onto the stone without the peel for 2 minutes to crisp the bottom.',
        howToPrevent: 'Thoroughly drain cheese and use only 3–4 tablespoons of sauce.'
      },
      {
        problem: 'Pizza stuck to the peel and wouldn’t slide into the oven',
        whatHappened: 'Dough absorbed moisture and glued itself to the peel.',
        whyItHappened: 'Not enough dusting flour on the peel, or pizza sat too long before launching.',
        whatToDoNow: 'Lift one edge, blow air underneath, and throw a pinch of semolina under the sticky spot.',
        howToPrevent: 'Dust peel generously with semolina and assemble pizza immediately before launching.'
      }
    ],
    substitutions: [
      { original: 'Pizza Stone', substitute: 'Inverted heavy baking sheet preheated on highest rack', impact: 'Works well, though stone retains more heat.' },
      { original: 'Fresh Mozzarella', substitute: 'Low-moisture whole milk mozzarella', impact: 'Melts with more browning and less water; classic NY style.' }
    ],
    safetyNotes: [
      'The pizza stone will be extremely hot (500°F+). Never touch it with bare hands.',
      'Allow the stone to cool completely inside the oven before removing it.'
    ],
    servingGuide: {
      restingTime: '2 minutes on a wooden cutting board before slicing.',
      garnishing: 'Fresh basil leaves, drizzle of extra virgin olive oil, optional grating of Parmigiano Reggiano.',
      temperature: 'Serve piping hot right out of the oven.'
    },
    cookingGlossary: UNIVERSAL_COOKING_GLOSSARY
  },

  'pizza-margherita': {
    id: 'pizza-margherita',
    name: 'Pizza Margherita Classica',
    cuisine: 'Italian',
    region: 'Campania (Naples)',
    servings: 2,
    prepTime: 20,
    cookTime: 10,
    difficulty: 'Medium',
    overview: {
      summary: 'The iconic tribute to Queen Margherita of Savoy representing the Italian flag: sweet red San Marzano tomatoes, pure white fresh mozzarella, and aromatic green basil on high-heat charred crust.',
      appearance: 'Puffed golden crust with dark blistered spots, crimson tomato sauce, pools of melted ivory cheese, and fresh green basil.',
      texture: 'Crisp outer crust with airy, open honeycomb crumb and a tender, foldable center.',
      flavor: 'Pure, clean, balanced tomato acidity, creamy milk fat, herbal basil perfume, and toasted wheat.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Pizza stone or baking steel', purpose: 'Stores intense thermal energy for instant bottom blister.' },
      { name: 'Pizza peel', purpose: 'Allows safe launch and retrieval from hot oven.' }
    ],
    beforeYouStart: [
      { task: 'Preheat oven with pizza stone at 500°F–550°F (260°C–285°C) for 45 minutes.', durationMinutes: 45 },
      { task: 'Tear and drain fresh mozzarella on paper towels.', durationMinutes: 15 }
    ],
    ingredientPrepGuide: [
      { item: 'Dough', technique: 'Bring to room temperature for 1 hour before stretching.' }
    ],
    essentialIngredients: [
      { name: 'Neapolitan pizza dough ball', prep: 'room temp, fermented', amount: '2 balls (500g)', metric: '500g', imperial: '17.6 oz', common: '2 balls' },
      { name: 'San Marzano tomatoes', prep: 'hand crushed with salt', amount: '1 can (400g)', metric: '400g', imperial: '14 oz', common: '1 can' },
      { name: 'Fresh mozzarella (Fior di Latte)', prep: 'torn and drained', amount: '200g', metric: '200g', imperial: '7 oz', common: '1 cup' },
      { name: 'Fresh sweet basil', prep: 'whole leaves', amount: '12 leaves', metric: '10g', imperial: '0.35 oz', common: '12 leaves' },
      { name: 'Extra virgin olive oil', prep: 'finishing drizzle', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp' }
    ],
    optionalIngredients: [],
    steps: [
      {
        step: 1,
        title: 'HAND STRETCH AND TOP WITH THREE COLORS',
        whatYouNeed: ['Dough ball', 'Sauce', 'Mozzarella', 'Peel'],
        description: 'Stretch dough with fingertips from center outward into an 11-inch round. Spoon 3 tablespoons of crushed tomatoes, scatter drained mozzarella, and transfer to hot stone.',
        howToDoIt: 'Keep toppings light to honor the classic Italian proportion.',
        heat: 'High Oven Heat (500°F+)',
        duration: 5,
        donenessCue: 'Lightly sauced with scattered cheese.',
        quickInstructions: 'Stretch dough, top with tomato and mozzarella, launch into hot 500°F oven.'
      },
      {
        step: 2,
        title: 'FLASH BAKE AND BASIL CROWN',
        whatYouNeed: ['Pizza peel', 'Fresh basil', 'Olive oil'],
        description: 'Bake for 7 to 8 minutes until crust is charred in spots and cheese is bubbly. Remove and immediately top with fresh basil and a spiral of olive oil.',
        howToDoIt: 'Tear basil leaves over hot cheese so essential oils perfume the slice.',
        heat: 'None (Resting)',
        duration: 3,
        donenessCue: 'Crust is charred and crisp; basil is fragrant and glossy.',
        quickInstructions: 'Bake 7–8 min on stone, remove, top with fresh basil and olive oil, slice.'
      }
    ],
    commonMistakes: [
      { mistake: 'Baking basil from the start.', remedy: 'Add fresh basil right after baking so it stays green and fragrant instead of burning black.' }
    ],
    troubleshooting: [
      { problem: 'Soggy center', whatToDoNow: 'Return to stone for 2 min without peel.', howToPrevent: 'Drain mozzarella thoroughly and use less sauce.' }
    ],
    substitutions: [
      { original: 'San Marzano tomatoes', substitute: 'Quality canned whole plum tomatoes with a pinch of sugar', impact: 'Very close acidity and sweetness.' }
    ],
    safetyNotes: ['Stone is extremely hot; use long peels and oven mitts.'],
    servingGuide: { restingTime: '2 minutes before cutting.' },
    cookingGlossary: UNIVERSAL_COOKING_GLOSSARY
  },

  'bolognese': {
    id: 'bolognese',
    name: 'Ragù alla Bolognese',
    cuisine: 'Italian',
    region: 'Emilia-Romagna (Bologna)',
    servings: 4,
    prepTime: 20,
    cookTime: 120,
    difficulty: 'Medium',
    overview: {
      summary: 'Traditional slow-simmered Bolognese meat sauce — ground beef and pork gently cooked with finely minced soffritto (onion, celery, carrot), dry white wine, whole milk, and a touch of tomato, simmered for 2 hours into a rich, unctuous sauce.',
      appearance: 'A thick, mahogany-hued, chunky meat sauce with glistening fat and no watery separation.',
      texture: 'Melt-in-your-mouth tender ground meat coated in a silky, rich reduction.',
      flavor: 'Deeply savory, rounded, sweet, and comforting with wine acidity balanced by mellow milk sweetness.',
      restingTimeMinutes: 5
    },
    equipment: [
      { name: 'Heavy Dutch oven or enamelled cast-iron pot', purpose: 'Retains low, steady heat for hours without scorching.' },
      { name: "Chef's knife & board", purpose: 'For finely mincing the soffritto vegetables.' },
      { name: 'Wooden spoon', purpose: 'Breaks up ground meat and scrapes the bottom.' }
    ],
    beforeYouStart: [
      { task: 'Finely mince onion, celery, and carrot into uniform 2mm dice (soffritto).', durationMinutes: 10 },
      { task: 'Measure 1 cup dry white wine, 1 cup whole milk, and 2 tbsp tomato paste.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'Soffritto Vegetables', technique: 'Cut into tiny, uniform dice so they melt into the meat sauce rather than appearing as large chunks.' },
      { item: 'Meat Blend', technique: 'Use equal parts ground beef (80/20) and ground pork for the ideal balance of gelatin and flavor.' }
    ],
    essentialIngredients: [
      { name: 'Ground beef chuck (80/20)', prep: 'fresh ground', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '0.66 lb' },
      { name: 'Ground pork', prep: 'fresh ground', amount: '200g', metric: '200g', imperial: '7 oz', common: '0.44 lb' },
      { name: 'Yellow onion', prep: 'finely minced', amount: '1 medium', metric: '120g', imperial: '4.2 oz', common: '1 onion' },
      { name: 'Celery stalk', prep: 'finely minced', amount: '1 stalk', metric: '60g', imperial: '2.1 oz', common: '1 stalk' },
      { name: 'Carrot', prep: 'peeled and finely minced', amount: '1 medium', metric: '80g', imperial: '2.8 oz', common: '1 carrot' },
      { name: 'Dry white wine', prep: 'Pinot Grigio or Sauvignon Blanc', amount: '1 cup (240ml)', metric: '240ml', imperial: '8 fl oz', common: '1 cup' },
      { name: 'Whole milk', prep: 'added to tenderize meat', amount: '1 cup (240ml)', metric: '240ml', imperial: '8 fl oz', common: '1 cup' },
      { name: 'Tomato paste (double concentrated)', prep: 'for deep umami base', amount: '3 tbsp (45g)', metric: '45g', imperial: '1.6 oz', common: '3 tbsp' },
      { name: 'Canned crushed tomatoes', prep: 'San Marzano', amount: '1 cup (240g)', metric: '240g', imperial: '8.5 oz', common: '1 cup' },
      { name: 'Extra virgin olive oil & butter', prep: 'for soffritto', amount: '2 tbsp each', metric: '30g', imperial: '1 oz', common: '2 tbsp each' },
      { name: 'Sea salt & black pepper', prep: 'to taste', amount: '1.5 tsp', metric: '8g', imperial: '0.3 oz', common: '1.5 tsp' }
    ],
    optionalIngredients: [
      { name: 'Freshly grated nutmeg', prep: 'pinch in milk step', amount: '1 pinch', metric: '1 pinch', imperial: '1 pinch', common: '1 pinch', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'SWEAT THE SOFFRITTO SLOWLY',
        whatYouNeed: ['Minced onion, celery, carrot', 'Olive oil and butter', 'Dutch oven'],
        description: 'Heat butter and olive oil in Dutch oven over medium-low heat. Add minced vegetables. Sweat for 10–12 minutes, stirring often, until vegetables are soft, sweet, and translucent without browning.',
        howToDoIt: 'Low heat allows vegetables to release natural sugars without burning.',
        heat: 'Medium-Low Heat',
        heatDescription: 'Gentle sizzle with no browning.',
        duration: 12,
        donenessCue: 'Vegetables are completely soft, glossy, and translucent.',
        quickInstructions: 'Sweat soffritto in butter and oil over medium-low for 10–12 min until soft.'
      },
      {
        step: 2,
        title: 'BROWN THE GROUND MEAT GENTLY',
        whatYouNeed: ['Ground beef and pork', 'Wooden spoon'],
        description: 'Increase heat to medium. Add ground beef and pork. Cook for 8–10 minutes, breaking up clumps with a wooden spoon until meat changes from pink to brown.',
        howToDoIt: 'Break into small fine morsels so texture is uniform.',
        heat: 'Medium Heat',
        duration: 10,
        donenessCue: 'No raw pink meat remains; meat juices begin to sizzle.',
        quickInstructions: 'Add meat, break into fine bits, cook 8–10 min until no pink remains.'
      },
      {
        step: 3,
        title: 'DEGLAZE WITH WINE, THEN SIMMER WITH MILK',
        whatYouNeed: ['1 cup white wine', '1 cup whole milk', 'Pinch nutmeg'],
        description: 'Pour in white wine. Cook over medium heat for 5 minutes until wine has completely evaporated. Pour in whole milk and a pinch of nutmeg. Simmer gently until milk has reduced by 90% (approx 10 min).',
        howToDoIt: 'The lactic acid in milk tenderizes the meat fibers, creating the signature velvety texture of true Bolognese.',
        heat: 'Medium to Low Heat',
        duration: 15,
        donenessCue: 'Liquid evaporates leaving glossy meat coated in rich milk fat.',
        quickInstructions: 'Add wine, reduce completely (5 min); add milk, simmer until almost evaporated (10 min).'
      },
      {
        step: 4,
        title: 'ADD TOMATOES AND SLOW SIMMER 2 HOURS',
        whatYouNeed: ['Tomato paste', 'Crushed tomatoes', '1 cup water or broth'],
        description: 'Stir in tomato paste and crushed tomatoes. Add 1 cup of water or broth. Bring to a boil, then reduce heat to the lowest setting, cover partially, and let simmer for 2 to 2.5 hours, stirring every 20 minutes.',
        howToDoIt: 'If sauce gets too thick, add 1/4 cup warm water. The fat should separate and rise to the surface in tiny orange bubbles when done.',
        heat: 'Lowest Heat Setting',
        heatDescription: 'Very gentle, lazy bubbles breaking every few seconds.',
        duration: 120,
        donenessCue: 'Sauce is thick, deep mahogany red, with rich fat glistening on top and no thin water.',
        see: 'Thick, glossy meat ragù coating the spoon.',
        smell: 'Intensely rich, savory Italian Sunday dinner aroma.',
        tip: 'Real ragù is a meat sauce lightly flavored with tomato — NOT a tomato sauce with ground meat.',
        moveOnWhen: 'Sauce is thick, deeply flavorful, and meat melts in the mouth.',
        quickInstructions: 'Add tomato paste, crushed tomatoes, water. Simmer on lowest heat partially covered for 2 hours.'
      }
    ],
    commonMistakes: [
      { mistake: 'Adding too much tomato sauce.', remedy: 'True Bolognese is meat-forward with just enough tomato for color and depth.' },
      { mistake: 'Boiling on high heat.', remedy: 'Gentle, low simmering over 2 hours is essential for gelatin breakdown.' }
    ],
    troubleshooting: [
      { problem: 'Sauce is too thick or sticking', whatToDoNow: 'Stir in 1/2 cup warm water or beef broth.', howToPrevent: 'Keep heat on lowest setting and keep lid partially ajar.' }
    ],
    substitutions: [
      { original: 'White wine', substitute: 'Dry red wine or beef broth with 1 tsp red wine vinegar', impact: 'Red wine gives a darker color and bolder flavor.' }
    ],
    safetyNotes: ['Cool completely before refrigerating; Bolognese tastes even better the next day.'],
    servingGuide: {
      restingTime: '5 minutes off heat.',
      accompaniments: 'Serve tossed with fresh Tagliatelle or layered in Lasagna with plenty of Parmigiano Reggiano.'
    },
    cookingGlossary: UNIVERSAL_COOKING_GLOSSARY
  },

  'lasagna': {
    id: 'lasagna',
    name: 'Lasagna alla Bolognese',
    cuisine: 'Italian',
    region: 'Emilia-Romagna',
    servings: 6,
    prepTime: 40,
    cookTime: 45,
    difficulty: 'Hard',
    overview: {
      summary: 'Authentic Lasagna alla Bolognese — layered sheets of fresh egg pasta, rich slow-simmered Bolognese meat ragù, silky velvety béchamel sauce, and freshly grated Parmigiano Reggiano, baked until bubbling with a golden-crusted top.',
      appearance: 'A golden-brown baked casserole showing distinct visible layers of pasta, rich red ragù, and creamy white béchamel, topped with blistered cheese crust.',
      texture: 'Tender pasta layers that cut cleanly with a fork without collapsing into a watery puddle, creamy and luxurious.',
      flavor: 'Rich, savory, nutty, comforting, and deeply satisfying.',
      restingTimeMinutes: 15
    },
    equipment: [
      { name: '9x13 inch deep baking dish (ceramic or glass)', purpose: 'Holds 4–5 generous layers without overflowing.' },
      { name: 'Whisk & medium saucepan', purpose: 'For making lump-free béchamel sauce.' }
    ],
    beforeYouStart: [
      { task: 'Prepare 4 cups of Bolognese meat ragù in advance.', durationMinutes: 10 },
      { task: 'Make silky béchamel: melt 50g butter, whisk in 50g flour, cook 2 min, gradually whisk in 750ml warm milk until thick.', durationMinutes: 15 },
      { task: 'Preheat oven to 375°F (190°C).', durationMinutes: 10 }
    ],
    ingredientPrepGuide: [
      { item: 'Pasta Sheets', technique: 'If using fresh lasagna sheets, no pre-boiling is needed. If using dried, parboil for 3 min in salted water and drain on towels.' }
    ],
    essentialIngredients: [
      { name: 'Lasagna pasta sheets (fresh or parboiled)', prep: 'cut to fit dish', amount: '12 sheets (350g)', metric: '350g', imperial: '12 oz', common: '12 sheets' },
      { name: 'Ragù alla Bolognese', prep: 'warm and thick', amount: '4 cups (1 liter)', metric: '1000ml', imperial: '34 fl oz', common: '4 cups' },
      { name: 'Béchamel sauce (Besciamella)', prep: 'butter, flour, milk, nutmeg', amount: '3 cups (750ml)', metric: '750ml', imperial: '25 fl oz', common: '3 cups' },
      { name: 'Parmigiano Reggiano', prep: 'freshly grated', amount: '1.5 cups (150g)', metric: '150g', imperial: '5.3 oz', common: '1.5 cups' },
      { name: 'Butter', prep: 'for greasing dish and top dots', amount: '2 tbsp', metric: '30g', imperial: '1 oz', common: '2 tbsp' }
    ],
    optionalIngredients: [],
    steps: [
      {
        step: 1,
        title: 'LAYER THE LASAGNA METHODICALLY',
        whatYouNeed: ['Baking dish', 'Béchamel', 'Ragù', 'Pasta sheets', 'Parmigiano'],
        description: 'Grease baking dish with butter. Spread 3 tablespoons of béchamel and ragù on bottom. Place a layer of pasta sheets. Top with an even layer of ragù, a drizzle of béchamel, and a generous dusting of Parmigiano. Repeat for 4 to 5 layers. Finish the top layer with béchamel, a touch of ragù, and plenty of Parmigiano.',
        howToDoIt: 'Spread sauces to the very edges of the pasta sheets to keep corners from drying out during baking.',
        heat: 'Oven at 375°F (190°C)',
        duration: 15,
        donenessCue: 'Dish is filled evenly to 1/2 inch below the rim.',
        quickInstructions: 'Layer pasta, ragù, béchamel, Parmigiano 4–5 times. Finish with béchamel and Parmigiano on top.'
      },
      {
        step: 2,
        title: 'BAKE UNTIL BUBBLY AND GOLDEN CRUSTED',
        whatYouNeed: ['Foil (for first 20 min)'],
        description: 'Cover loosely with foil and bake at 375°F (190°C) for 20 minutes. Remove foil and bake uncovered for another 20–25 minutes until top is deeply golden and edges are bubbling vigorously.',
        howToDoIt: 'Foil traps steam to soften pasta; baking uncovered creates the crispy cheese crust.',
        heat: 'Oven at 375°F (190°C)',
        duration: 45,
        donenessCue: 'Top has a blistered golden-brown crust; sides are bubbling actively.',
        see: 'Molten cheese browning into crunchy edges; bubbling red and white layers.',
        tip: 'CRITICAL: Let lasagna rest for at least 15 minutes before cutting. Slicing too early causes layers to slide apart!',
        moveOnWhen: 'Baked through with golden crust and rested 15 minutes.',
        quickInstructions: 'Bake covered with foil 20 min, uncover and bake 20–25 min until golden and bubbly. Rest 15 min.'
      }
    ],
    commonMistakes: [
      { mistake: 'Slicing immediately out of the oven.', remedy: 'Always rest for 15–20 minutes so sauces set and clean slices can be lifted.' },
      { mistake: 'Using ricotta in traditional Bolognese lasagna.', remedy: 'Authentic Bolognese lasagna uses béchamel, not ricotta.' }
    ],
    troubleshooting: [
      { problem: 'Lasagna is watery on the plate', whatToDoNow: 'Let the remaining dish sit for 10 more minutes to set.', howToPrevent: 'Cook ragù until thick and drain parboiled sheets thoroughly.' }
    ],
    substitutions: [
      { original: 'Ragù Bolognese', substitute: 'Sautéed mushrooms and spinach with béchamel', impact: 'Creates a wonderful vegetarian Lasagna Bianca.' }
    ],
    safetyNotes: ['Baking dish is heavy and extremely hot; use two-handed oven mitts.'],
    servingGuide: {
      restingTime: '15 to 20 minutes before slicing.',
      plating: 'Cut into neat squares with a sharp knife and lift with a wide spatula.'
    },
    cookingGlossary: UNIVERSAL_COOKING_GLOSSARY
  },

  'risotto': {
    id: 'risotto',
    name: 'Risotto alla Milanese',
    cuisine: 'Italian',
    region: 'Lombardy (Milan)',
    servings: 3,
    prepTime: 15,
    cookTime: 25,
    difficulty: 'Medium',
    overview: {
      summary: 'Luxurious Northern Italian saffron risotto — Carnaroli or Arborio rice toasted in butter and bone marrow/shallots, deglazed with white wine, and slowly ladled with simmering saffron broth into a creamy, wave-like (all’onda) consistency, finished with cold butter and Parmigiano.',
      appearance: 'A radiant golden-yellow plate of glistening rice that slowly flows like a gentle wave when the plate is tilted.',
      texture: 'Creamy and fluid on the outside while each rice grain maintains a firm, toothsome al dente core.',
      flavor: 'Rich, savory, buttery, and earthy with floral saffron perfume and sharp parmesan depth.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Wide, heavy sauté pan or saucier (10–12 inch)', purpose: 'Allows even evaporation and steady agitation of rice grains.' },
      { name: 'Ladle', purpose: 'For adding hot broth one ladle at a time.' },
      { name: 'Wooden spoon with a hole in the center', purpose: 'Incorporates air and starch without breaking rice grains.' }
    ],
    beforeYouStart: [
      { task: 'Infuse saffron threads in 1/2 cup warm chicken broth for 15 minutes.', durationMinutes: 15 },
      { task: 'Bring 1.2 liters of chicken or beef broth to a steady low simmer in a separate pot.', durationMinutes: 10 },
      { task: 'Finely mince 1 small yellow onion or shallot.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'Carnaroli / Arborio Rice', technique: 'DO NOT WASH the rice! Washing removes the surface starch required to create the natural creamy sauce.' },
      { item: 'Butter for Mantecatura', technique: 'Keep butter refrigerator-cold until the very final step; cold butter creates a glossy emulsion.' }
    ],
    essentialIngredients: [
      { name: 'Carnaroli or Arborio rice', prep: 'unwashed', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '1.5 cups' },
      { name: 'Rich chicken or beef broth', prep: 'kept at a steady simmer', amount: '1.2 liters', metric: '1200ml', imperial: '40 fl oz', common: '5 cups' },
      { name: 'Saffron threads', prep: 'steeped in 1/2 cup warm broth', amount: '1 pinch (0.25g)', metric: '0.25g', imperial: '1 pinch', common: '1 pinch' },
      { name: 'Dry white wine', prep: 'room temp', amount: '1/2 cup (120ml)', metric: '120ml', imperial: '4 fl oz', common: '1/2 cup' },
      { name: 'Shallot or small onion', prep: 'finely minced', amount: '1 small (60g)', metric: '60g', imperial: '2.1 oz', common: '1 shallot' },
      { name: 'Unsalted butter', prep: 'divided (2 tbsp for cooking, 3 tbsp chilled for finish)', amount: '5 tbsp (75g)', metric: '75g', imperial: '2.6 oz', common: '5 tbsp' },
      { name: 'Parmigiano Reggiano', prep: 'freshly grated', amount: '3/4 cup (70g)', metric: '70g', imperial: '2.5 oz', common: '3/4 cup' },
      { name: 'Sea salt & white pepper', prep: 'to taste', amount: '1 tsp', metric: '5g', imperial: '0.2 oz', common: '1 tsp' }
    ],
    optionalIngredients: [],
    steps: [
      {
        step: 1,
        title: 'TOAST THE RICE (TOSTATURA)',
        whatYouNeed: ['Carnaroli rice', 'Mince shallot', '2 tbsp butter', 'Sauté pan'],
        description: 'Melt 2 tbsp butter over medium heat. Sauté minced shallot for 2 minutes until soft. Add dry rice. Stir continuously for 2 to 3 minutes until grains are hot, coated in fat, and translucent around edges with a pearl-white center.',
        howToDoIt: 'Touch the rice with your fingers: when grains are too hot to comfortably hold, they are toasted. Toasting hardens the outer starch so grains do not explode into mush.',
        heat: 'Medium Heat',
        duration: 4,
        donenessCue: 'Grains crackle faintly and smell nutty with translucent edges.',
        quickInstructions: 'Sauté shallot in butter 2 min; add rice and toast 2–3 min until translucent at edges.'
      },
      {
        step: 2,
        title: 'DEGLAZE AND SLOWLY LADLE SIMMERING BROTH',
        whatYouNeed: ['1/2 cup white wine', 'Simmering broth', 'Ladle', 'Wooden spoon'],
        description: 'Pour in white wine. It will hiss vigorously. Stir until wine is completely absorbed. Add 1 ladle (approx 120ml) of simmering broth. Cook, stirring gently and frequently, until the liquid is almost absorbed, then add another ladle. Continue this rhythm for 15 to 17 minutes.',
        howToDoIt: 'Broth MUST be simmering in its own pot. Adding cold broth drops the pan temperature and ruins the texture. Stir regularly to rub grains together, sloughing off starch into cream.',
        heat: 'Medium Heat',
        duration: 17,
        donenessCue: 'At minute 12, stir in the saffron infusion. Rice turns brilliant golden yellow. Test a grain: it should be tender outside with a tiny firm bite in center.',
        see: 'Liquid turns into a creamy golden sauce bubbling around plump grains.',
        quickInstructions: 'Deglaze with wine. Add simmering broth 1 ladle at a time, stirring as absorbed, for 15–17 min. Add saffron at min 12.'
      },
      {
        step: 3,
        title: 'MANTECATURA (THE CREAMING FINISH)',
        whatYouNeed: ['3 tbsp ice-cold butter', '3/4 cup Parmigiano Reggiano', 'Wooden spoon'],
        description: 'Turn off heat completely! Add the remaining 3 tablespoons of ICE-COLD butter and grated Parmigiano Reggiano. Cover with lid and let rest 1 minute. Uncover and beat vigorously with a wooden spoon in circular motions to incorporate air and emulsify cold butter into a creamy wave (all’onda).',
        howToDoIt: 'Tilt the pan: the risotto should flow in a soft, wavy ribbon. If it sits stiff, stir in 2 tablespoons of hot broth.',
        heat: 'No Heat (Off Stove)',
        duration: 3,
        donenessCue: 'Risotto is ultra-creamy, lustrous golden, and flows softly across the plate.',
        see: 'Brilliant yellow risotto with a shiny, velvety, luxurious glaze.',
        smell: 'Rich saffron, melted butter, and aged parmesan.',
        tip: 'Mantecatura MUST happen off the heat. Cold fat plus hot starch equals silk.',
        moveOnWhen: 'Emulsified and flowing like a gentle wave.',
        quickInstructions: 'Remove from heat. Add cold butter and Parmigiano. Beat vigorously until glossy and flowing (all’onda).'
      }
    ],
    commonMistakes: [
      { mistake: 'Washing the rice before cooking.', remedy: 'Never rinse risotto rice. The surface starch is what creates the creamy sauce.' },
      { mistake: 'Adding cold or room-temperature broth.', remedy: 'Keep broth on a low simmer in a pot beside the risotto at all times.' }
    ],
    troubleshooting: [
      { problem: 'Risotto is stiff and clumpy on the plate', whatToDoNow: 'Vigorously beat in 2–3 tablespoons of hot broth off heat.', howToPrevent: 'A true Italian risotto must be all’onda (fluid like a wave).' }
    ],
    substitutions: [
      { original: 'Carnaroli Rice', substitute: 'Arborio or Vialone Nano', impact: 'Arborio is softer; Carnaroli is the king of risotto.' }
    ],
    safetyNotes: ['Broth is simmering hot; ladle carefully.'],
    servingGuide: {
      restingTime: '1 minute before plating.',
      plating: 'Spoon into flat plates and tap the bottom of the plate with your palm so the risotto spreads into an even disc.',
      temperature: 'Serve warm immediately.'
    },
    cookingGlossary: UNIVERSAL_COOKING_GLOSSARY
  },

  'ravioli': {
    id: 'ravioli',
    name: 'Homemade Ricotta & Spinach Ravioli',
    cuisine: 'Italian',
    region: 'Northern Italy',
    servings: 3,
    prepTime: 35,
    cookTime: 10,
    difficulty: 'Hard',
    overview: {
      summary: 'Handcrafted egg pasta pillows stuffed with creamy whole-milk ricotta, wilted spinach, and nutmeg, finished in a nutty sage brown butter sauce.',
      appearance: 'Delicate fluted pasta squares glossy with golden brown butter, garnished with crisp whole sage leaves.',
      texture: 'Silky, tender pasta that yields into a pillow-soft, creamy filling with crunchy sage leaves.',
      flavor: 'Nutty browned butter, sweet milk ricotta, earthy spinach, and fresh sage.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Pasta roller or rolling pin', purpose: 'Rolls dough paper-thin (setting 6 or 7).' },
      { name: 'Fluted pasta cutter wheel or ravioli stamp', purpose: 'Seals and trims pasta pillows cleanly.' },
      { name: 'Large pasta pot & spider skimmer', purpose: 'Gently boils and lifts delicate ravioli without tearing.' }
    ],
    beforeYouStart: [
      { task: 'Drain 250g ricotta in a cheesecloth for 30 minutes to remove excess whey.', durationMinutes: 30 },
      { task: 'Sauté 200g spinach, squeeze completely dry in a towel, and finely chop.', durationMinutes: 10 },
      { task: 'Mix drained ricotta, chopped spinach, 1 egg yolk, 1/2 cup parmesan, pinch nutmeg, and salt.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'Spinach', technique: 'Squeeze with all your strength inside a clean tea towel. Any remaining water makes the ravioli filling soggy and bursts the seams.' }
    ],
    essentialIngredients: [
      { name: 'Fresh egg pasta dough', prep: 'rested 30 min', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '300g dough' },
      { name: 'Whole milk ricotta', prep: 'drained dry', amount: '250g', metric: '250g', imperial: '8.8 oz', common: '1 cup' },
      { name: 'Fresh baby spinach', prep: 'wilted, squeezed completely dry, chopped', amount: '200g', metric: '200g', imperial: '7 oz', common: '4 cups fresh' },
      { name: 'Parmigiano Reggiano', prep: 'finely grated', amount: '1/2 cup (50g)', metric: '50g', imperial: '1.8 oz', common: '1/2 cup' },
      { name: 'Fresh sage leaves', prep: 'whole leaves', amount: '12 leaves', metric: '10g', imperial: '0.35 oz', common: '12 leaves' },
      { name: 'Unsalted butter', prep: 'for sage sauce', amount: '6 tbsp (90g)', metric: '90g', imperial: '3.2 oz', common: '6 tbsp' },
      { name: 'Nutmeg, salt & pepper', prep: 'to taste', amount: '1 pinch', metric: '1 pinch', imperial: '1 pinch', common: '1 pinch' }
    ],
    optionalIngredients: [],
    steps: [
      {
        step: 1,
        title: 'ROLL, PORTION, AND PRESS OUT AIR',
        whatYouNeed: ['Rolled pasta sheets', 'Filling', 'Pastry brush with water', 'Ravioli cutter'],
        description: 'Roll pasta sheets until thin enough to see your hand through (approx 1mm). Place 1-tablespoon mounds of filling 2 inches apart. Brush lightly with water around filling. Drape top sheet over. Press firmly around each mound from the inside out to push out ALL trapped air bubbles. Cut with fluted wheel.',
        howToDoIt: 'Trapped air expands in boiling water and bursts the ravioli! Press out all air before sealing edges.',
        heat: 'No Heat',
        duration: 20,
        donenessCue: 'Neat, sealed ravioli squares with no air pockets.',
        quickInstructions: 'Roll dough thin, place filling mounds, press out all air, seal, and cut with fluted wheel.'
      },
      {
        step: 2,
        title: 'GENTLE BOIL AND BROWN BUTTER SAGE TOSS',
        whatYouNeed: ['Pot of gentle boiling water', 'Butter and sage in skillet', 'Spider skimmer'],
        description: 'Melt butter in skillet over medium heat with sage leaves for 3–4 min until butter foams, turns nut-brown, and sage turns crisp. Simultaneously, drop ravioli into gently boiling salted water. Cook for 3 to 4 minutes until they float. Lift with spider skimmer directly into brown butter. Toss gently.',
        howToDoIt: 'A rolling aggressive boil will break delicate fresh ravioli. Keep water at a gentle, steady simmer.',
        heat: 'Medium Heat for butter; Gentle Simmer for water',
        duration: 6,
        donenessCue: 'Ravioli float, butter is hazelnut brown, sage is crisp.',
        see: 'Floating tender ravioli glazed in foaming amber butter with crisp sage.',
        quickInstructions: 'Brown butter with sage until nutty. Boil ravioli 3–4 min until floating. Toss in brown butter.'
      }
    ],
    commonMistakes: [
      { mistake: 'Leaving air bubbles inside the ravioli.', remedy: 'Press firmly around filling mounds from inside out to expel air before cutting.' }
    ],
    troubleshooting: [
      { problem: 'Ravioli burst during boiling', whatToDoNow: 'Lower heat to a very gentle simmer immediately.', howToPrevent: 'Expel all air bubbles and don’t boil water aggressively.' }
    ],
    substitutions: [
      { original: 'Fresh sage', substitute: 'Light tomato basil sauce', impact: 'Delicious alternative to brown butter.' }
    ],
    safetyNotes: ['Handle delicate fresh pasta with care.'],
    servingGuide: { plating: 'Arrange 4–5 ravioli on warm plates, spoon brown butter and crisp sage leaves over top.' },
    cookingGlossary: UNIVERSAL_COOKING_GLOSSARY
  },

  'gnocchi': {
    id: 'gnocchi',
    name: 'Potato Gnocchi al Pomodoro',
    cuisine: 'Italian',
    region: 'Northern & Central Italy',
    servings: 3,
    prepTime: 40,
    cookTime: 15,
    difficulty: 'Hard',
    overview: {
      summary: 'Light, cloud-like Italian potato dumplings made from baked starchy russet potatoes, minimal flour, and egg yolk, ridged on a gnocchi board, boiled until they float, and coated in sweet tomato basil sauce.',
      appearance: 'Pillowy, ridged dumplings glistening in bright red tomato sauce with melted mozzarella or fresh basil.',
      texture: 'Delicate, pillow-soft, and melt-in-the-mouth with zero dense gumminess.',
      flavor: 'Sweet earthy potato, tangy tomato, fragrant basil, and nutty parmesan.',
      restingTimeMinutes: 0
    },
    equipment: [
      { name: 'Potato ricer', purpose: 'Crucial for light, fluffy, lump-free potato mash without activating gluey starch.' },
      { name: 'Gnocchi board or fork', purpose: 'Rolls characteristic ridges that catch sauce.' },
      { name: 'Bench scraper', purpose: 'Cuts dough cleanly into bite-sized pillows.' }
    ],
    beforeYouStart: [
      { task: 'Bake 1kg russet potatoes on coarse salt at 400°F (200°C) for 1 hour until tender inside.', durationMinutes: 60 },
      { task: 'Rice potatoes while steaming hot onto work surface and let cool 10 minutes so moisture evaporates.', durationMinutes: 10 }
    ],
    ingredientPrepGuide: [
      { item: 'Potatoes', technique: 'BAKE, DO NOT BOIL! Boiling introduces water that demands too much flour, turning gnocchi into rubbery bullets.' }
    ],
    essentialIngredients: [
      { name: 'Russet potatoes (starchy)', prep: 'baked dry and riced hot', amount: '1kg (2.2 lbs)', metric: '1000g', imperial: '35 oz', common: '1kg' },
      { name: 'Tipo 00 or all-purpose flour', prep: 'use only as much as needed to bind', amount: '150g–200g', metric: '180g', imperial: '6.3 oz', common: '1.25 cups' },
      { name: 'Egg yolk', prep: 'lightly beaten', amount: '1 yolk', metric: '1 yolk', imperial: '1 yolk', common: '1 yolk' },
      { name: 'Fine sea salt', prep: 'for dough and water', amount: '1 tsp', metric: '5g', imperial: '0.2 oz', common: '1 tsp' },
      { name: 'Tomato basil sauce', prep: 'warm in wide skillet', amount: '2 cups (500ml)', metric: '500ml', imperial: '17 fl oz', common: '2 cups' }
    ],
    optionalIngredients: [],
    steps: [
      {
        step: 1,
        title: 'SHAPE THE DOUGH WITH A LIGHT TOUCH',
        whatYouNeed: ['Riced potato', 'Flour', 'Egg yolk', 'Bench scraper'],
        description: 'Dust flour and salt over cool riced potatoes. Add egg yolk. Gently fold and knead with bench scraper for 60 seconds just until a soft, smooth dough forms. DO NOT OVER-KNEAD! Cut into 4 pieces. Roll into 3/4-inch ropes. Cut into 1-inch pillows. Roll each pillow off a gnocchi board or fork to create ridges.',
        howToDoIt: 'Treat the dough like delicate pastry. The less you handle it, the lighter your gnocchi will be.',
        heat: 'No Heat',
        duration: 15,
        donenessCue: 'Pillowy, ridged dumplings holding their shape on floured tray.',
        quickInstructions: 'Gently combine riced potato, flour, yolk into dough. Roll ropes, cut pillows, roll ridges on fork.'
      },
      {
        step: 2,
        title: 'BOIL TO THE FLOAT AND TOSS IN SAUCE',
        whatYouNeed: ['Pot of boiling salted water', 'Skillet with warm sauce', 'Spider skimmer'],
        description: 'Drop gnocchi into boiling water in batches. They will sink to the bottom. In about 90 to 120 seconds, they will float to the surface. Once they float, cook for 30 more seconds, then scoop directly with a spider skimmer into your warm tomato sauce. Toss gently.',
        howToDoIt: 'Never dump gnocchi into a colander! They are too fragile and will crush.',
        heat: 'High Heat',
        duration: 5,
        donenessCue: 'Gnocchi bob at the surface like little buoyant corks.',
        see: 'Floating golden-ivory pillows.',
        feel: 'Cloud-like soft texture.',
        tip: 'Float test is foolproof: when they float, give them 30 seconds, then lift immediately into sauce.',
        moveOnWhen: 'All gnocchi are gently tossed in sauce and plated.',
        quickInstructions: 'Drop in boiling water; when they float to surface (90 sec), cook 30 sec more, lift into sauce.'
      }
    ],
    commonMistakes: [
      { mistake: 'Boiling potatoes in water.', remedy: 'Always bake on salt. Wet potatoes require double the flour, turning gnocchi into rubber.' },
      { mistake: 'Over-kneading the dough.', remedy: 'Knead for only 60 seconds. Stop as soon as the flour incorporates.' }
    ],
    troubleshooting: [
      { problem: 'Gnocchi dissolved in the water', whatToDoNow: 'Dough had too little flour. Knead 2 tbsp more flour into remaining dough.', howToPrevent: 'Use a test gnocchi first to check firmness.' }
    ],
    substitutions: [
      { original: 'Pomodoro Sauce', substitute: 'Gorgonzola cream sauce or pesto', impact: 'Rich, indulgent alternatives.' }
    ],
    safetyNotes: ['Rice potatoes while hot with oven mitts.'],
    servingGuide: { plating: 'Serve immediately topped with freshly grated Parmigiano and basil.' },
    cookingGlossary: UNIVERSAL_COOKING_GLOSSARY
  },

  'tagliatelle': {
    id: 'tagliatelle',
    name: 'Fresh Egg Tagliatelle Pasta',
    cuisine: 'Italian',
    region: 'Emilia-Romagna',
    servings: 3,
    prepTime: 40,
    cookTime: 5,
    difficulty: 'Medium',
    overview: {
      summary: 'Golden, ribbon-like fresh egg pasta handmade with 00 flour and whole fresh eggs, rolled paper-thin and sliced into classic 7mm wide ribbons, the ideal vehicle for rich Bolognese ragù.',
      appearance: 'Silky, tender, golden ribbons of fresh pasta with a porous texture that grips sauce.',
      texture: 'Tender with a delicate chew and slight springiness.',
      flavor: 'Rich egg flavor and wheaty sweetness.',
      restingTimeMinutes: 30
    },
    equipment: [
      { name: 'Wood cutting board & rolling pin (mattarello) or pasta machine', purpose: 'Rolls dough paper-thin with a porous texture.' },
      { name: "Chef's knife", purpose: 'For cutting folded pasta sheets into 7mm ribbons.' }
    ],
    beforeYouStart: [
      { task: 'Make a mound with 300g 00 flour on wood board, create a well, add 3 large eggs, and whisk eggs with fork gradually drawing in flour.', durationMinutes: 10 },
      { task: 'Knead dough for 10 minutes until smooth and springy; wrap in plastic wrap and rest for 30 minutes.', durationMinutes: 40 }
    ],
    ingredientPrepGuide: [
      { item: 'Flour and Eggs', technique: 'Classic Bolognese formula is 100g 00 flour per 1 large egg.' }
    ],
    essentialIngredients: [
      { name: 'Tipo 00 Italian flour', prep: 'sifted onto wooden board', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '2.5 cups' },
      { name: 'Fresh whole eggs (large, room temp)', prep: 'farm fresh for golden color', amount: '3 eggs', metric: '3 eggs', imperial: '3 eggs', common: '3 eggs' },
      { name: 'Semolina flour for dusting', prep: 'prevents ribbons from sticking', amount: '3 tbsp', metric: '30g', imperial: '1 oz', common: '3 tbsp' },
      { name: 'Coarse sea salt', prep: 'for boiling water', amount: '2 tbsp', metric: '30g', imperial: '1 oz', common: '2 tbsp' }
    ],
    optionalIngredients: [],
    steps: [
      {
        step: 1,
        title: 'ROLL THIN, ROLL INTO A CYLINDER, AND CUT RIBBONS',
        whatYouNeed: ['Rested dough', 'Rolling pin or machine', 'Flour for dusting', 'Chef knife'],
        description: 'Roll dough out into a paper-thin translucent circle (approx 1mm). Dust surface generously with semolina. Loosely roll the sheet from both ends toward the middle (like a scroll). Slice with a sharp chef knife into 7mm (1/4 inch) wide ribbons. Unfurl into loose nests.',
        howToDoIt: 'According to the Bologna Chamber of Commerce, real tagliatelle must measure exactly 7mm wide when raw and 8mm cooked.',
        heat: 'No Heat',
        duration: 15,
        donenessCue: 'Loose, flour-dusted golden nests of ribbon pasta.',
        quickInstructions: 'Roll dough to 1mm thin, dust with semolina, roll into scroll, slice 7mm ribbons, shake out nests.'
      },
      {
        step: 2,
        title: 'BOIL FOR ONLY 2 TO 3 MINUTES',
        whatYouNeed: ['Pot of rolling boiling salted water', 'Tongs', 'Warm sauce in pan'],
        description: 'Drop fresh tagliatelle nests into rolling boiling water. Fresh pasta cooks in seconds! Boil for only 2 to 3 minutes. Test a strand: it should be tender and springy. Lift directly into warm sauce with tongs and toss.',
        howToDoIt: 'Fresh pasta absorbs sauce rapidly. Toss with a splash of pasta water for peak silkiness.',
        heat: 'High Heat',
        duration: 3,
        donenessCue: 'Pasta floats and turns pale golden; tender chew with springiness.',
        quickInstructions: 'Boil fresh ribbons in salted water for 2–3 min until floating and tender; toss in sauce immediately.'
      }
    ],
    commonMistakes: [
      { mistake: 'Overcooking fresh pasta.', remedy: 'Fresh pasta cooks in 2–3 minutes, unlike dried pasta which takes 9–11 minutes.' }
    ],
    troubleshooting: [
      { problem: 'Ribbons stuck together', whatToDoNow: 'Gently shake in boiling water with tongs.', howToPrevent: 'Dust generously with semolina before rolling and slicing.' }
    ],
    substitutions: [
      { original: 'Tipo 00 flour', substitute: 'All-purpose unbleached flour', impact: 'Slightly less delicate but works very well.' }
    ],
    safetyNotes: ['Boiling water is intense; drop pasta gently to avoid splashing.'],
    servingGuide: { plating: 'Toss immediately with warm Ragù alla Bolognese and Parmigiano.' },
    cookingGlossary: UNIVERSAL_COOKING_GLOSSARY
  },

  'focaccia': {
    id: 'focaccia',
    name: 'Focaccia Genovese',
    cuisine: 'Italian',
    region: 'Liguria (Genoa)',
    servings: 6,
    prepTime: 30,
    cookTime: 25,
    difficulty: 'Medium',
    overview: {
      summary: 'Authentic Ligurian Focaccia — high-hydration yeast dough proofed in an olive-oil-drenched baking pan, dimpled deeply with fingertips to create olive oil brine pools, topped with flaky sea salt and fresh rosemary.',
      appearance: 'A golden baked flatbread studded with deep dimples filled with golden olive oil, blistered crust, and flaky salt crystals.',
      texture: 'Crisp and crunchy on the bottom and top crust, with an airy, pillowy, custardy crumb inside.',
      flavor: 'Fruity olive oil richness, salty crunch, toasted yeast, and resinous rosemary.',
      restingTimeMinutes: 10
    },
    equipment: [
      { name: 'Heavy metal baking sheet (9x13 or 10x15 inch)', purpose: 'Conducts intense heat to fry the bottom crust crisp in olive oil.' },
      { name: 'Mixing bowl & dough scraper', purpose: 'For mixing high-hydration wet dough.' }
    ],
    beforeYouStart: [
      { task: 'Mix 500g flour, 400ml warm water, 7g yeast, 10g salt, and 20ml olive oil into a sticky wet dough; ferment for 2 hours.', durationMinutes: 120 },
      { task: 'Coat baking sheet generously with 3 tablespoons of extra virgin olive oil.', durationMinutes: 2 },
      { task: 'Preheat oven to 450°F (230°C).', durationMinutes: 20 }
    ],
    ingredientPrepGuide: [
      { item: 'Dough', technique: 'Focaccia dough is very wet and sticky (80% hydration). Do not add extra flour; wet dough creates big open air pockets.' }
    ],
    essentialIngredients: [
      { name: 'Strong bread flour or 00 flour', prep: 'high protein', amount: '500g', metric: '500g', imperial: '17.6 oz', common: '4 cups' },
      { name: 'Lukewarm water (85°F / 30°C)', prep: 'for 80% hydration', amount: '400ml', metric: '400ml', imperial: '13.5 fl oz', common: '1.75 cups' },
      { name: 'Instant yeast', prep: 'stirred into water', amount: '7g (1 packet)', metric: '7g', imperial: '0.25 oz', common: '2.25 tsp' },
      { name: 'Extra virgin olive oil', prep: 'divided (for dough, pan, and brine)', amount: '1/2 cup (120ml)', metric: '120ml', imperial: '4 fl oz', common: '1/2 cup' },
      { name: 'Flaky Maldon sea salt', prep: 'for crunchy top', amount: '1.5 tsp', metric: '8g', imperial: '0.3 oz', common: '1.5 tsp' },
      { name: 'Fresh rosemary leaves', prep: 'lightly bruised', amount: '2 sprigs', metric: '5g', imperial: '0.2 oz', common: '2 sprigs' }
    ],
    optionalIngredients: [
      { name: 'Kalamata or Castelvetrano olives', prep: 'pitted and pressed into dimples', amount: '1/2 cup', metric: '80g', imperial: '2.8 oz', common: '1/2 cup', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'STRETCH AND DEEP DIMPLING (SALAMOIA BRINE)',
        whatYouNeed: ['Proofed dough in oiled pan', 'Extra olive oil', '3 tbsp warm water with 1/2 tsp salt (brine)'],
        description: 'Tip proofed dough into the oiled pan. Gently stretch toward corners. Pour 3 tbsp olive oil and 3 tbsp salted water over the top. Press all 10 fingers straight down into the dough until you feel the bottom of the metal pan, creating deep dimples throughout.',
        howToDoIt: 'Keep fingers spread and push down confidently. The oil and water brine pools inside the dimples, keeping the crumb moist while the ridges fry crisp.',
        heat: 'Oven at 450°F (230°C)',
        duration: 5,
        donenessCue: 'Dough is covered in deep craters holding glistening pools of oil-water emulsion.',
        quickInstructions: 'Stretch dough in oiled pan. Pour oil-water brine, press fingers straight down to dimple, top with rosemary and flaky salt.'
      },
      {
        step: 2,
        title: 'BAKE TO GOLDEN CRUNCH',
        whatYouNeed: ['Flaky sea salt', 'Rosemary', 'Hot oven'],
        description: 'Scatter fresh rosemary and flaky salt across the dimpled dough. Bake on the bottom-middle rack at 450°F (230°C) for 22 to 25 minutes until top is deep golden brown and the bottom is fried crisp in the oil.',
        howToDoIt: 'Listen when it comes out: you should hear the olive oil gently sizzling along the edges of the pan.',
        heat: 'Oven at 450°F (230°C)',
        duration: 25,
        donenessCue: 'Deep golden top, sizzling crisp bottom crust, hollow sound when tapped.',
        tip: 'Transfer to a wire cooling rack immediately so steam doesn’t make the bottom crust soggy.',
        moveOnWhen: 'Cooled for 10 minutes on wire rack, sliced into slabs.',
        quickInstructions: 'Bake at 450°F for 22–25 min until deep golden and sizzling. Cool on wire rack 10 min.'
      }
    ],
    commonMistakes: [
      { mistake: 'Adding too much flour because dough is sticky.', remedy: 'Embrace the sticky wet dough. Oil your hands instead of adding flour.' }
    ],
    troubleshooting: [
      { problem: 'Bottom crust is pale or soft', whatToDoNow: 'Place pan on lowest oven rack for 4 more minutes.', howToPrevent: 'Use a dark metal baking sheet and plenty of olive oil.' }
    ],
    substitutions: [
      { original: 'Rosemary', substitute: 'Cherry tomatoes halved and pressed into dimples', impact: 'Focaccia Barese style.' }
    ],
    safetyNotes: ['Baking sheet has hot sizzling oil; handle with steady two-handed mitts.'],
    servingGuide: { restingTime: '10 minutes on a wire rack before slicing.' },
    cookingGlossary: UNIVERSAL_COOKING_GLOSSARY
  },

  'bruschetta': {
    id: 'bruschetta',
    name: 'Bruschetta al Pomodoro',
    cuisine: 'Italian',
    region: 'Central Italy',
    servings: 4,
    prepTime: 15,
    cookTime: 5,
    difficulty: 'Very Easy',
    overview: {
      summary: 'Classic Italian antipasto — thick slices of crusty rustic sourdough grilled over open flame, rubbed vigorously with a raw garlic clove, drizzled with peppery olive oil, and crowned with ripe marinated tomatoes and basil.',
      appearance: 'Charred, golden grilled bread slices topped with vibrant red tomato dice, emerald basil ribbons, and a glistening oil sheen.',
      texture: 'Crunchy, crusty bread exterior that gives way to a soft warm interior and juicy, refreshing tomato topping.',
      flavor: 'Pungent garlic sting, ripe sweet tomato acidity, fragrant basil, and fruity olive oil.',
      restingTimeMinutes: 0
    },
    equipment: [
      { name: 'Cast-iron grill pan or outdoor grill', purpose: 'Creates charred grill marks and smoky crunch.' }
    ],
    beforeYouStart: [
      { task: 'Dice 4 ripe plum tomatoes, toss with 2 tbsp olive oil, 1/2 tsp salt, and torn basil; marinate 15 min.', durationMinutes: 15 },
      { task: 'Cut 1 clove of raw garlic in half for rubbing.', durationMinutes: 2 }
    ],
    ingredientPrepGuide: [
      { item: 'Bread', technique: 'Slice rustic country bread into 3/4-inch thick slabs so it supports the juicy tomatoes without collapsing.' }
    ],
    essentialIngredients: [
      { name: 'Rustic country bread (sourdough or ciabatta)', prep: 'cut into 3/4-inch thick slices', amount: '8 slices', metric: '300g', imperial: '10.5 oz', common: '8 slices' },
      { name: 'Ripe plum tomatoes (Roma or heirloom)', prep: 'seeded and diced', amount: '4 medium (400g)', metric: '400g', imperial: '14 oz', common: '4 tomatoes' },
      { name: 'Fresh garlic clove', prep: 'cut in half horizontally', amount: '1 large clove', metric: '5g', imperial: '0.2 oz', common: '1 clove' },
      { name: 'Extra virgin olive oil', prep: 'peppery quality', amount: '3 tbsp', metric: '45ml', imperial: '1.5 fl oz', common: '3 tbsp' },
      { name: 'Fresh basil leaves', prep: 'torn by hand', amount: '8 leaves', metric: '8 leaves', imperial: '8 leaves', common: '8 leaves' },
      { name: 'Flaky sea salt & pepper', prep: 'to taste', amount: '1 tsp', metric: '5g', imperial: '0.2 oz', common: '1 tsp' }
    ],
    optionalIngredients: [],
    steps: [
      {
        step: 1,
        title: 'CHAR BREAD AND RUB WITH RAW GARLIC',
        whatYouNeed: ['Bread slices', 'Grill pan', 'Halved garlic clove', 'Olive oil'],
        description: 'Grill bread slices on a hot dry grill pan for 2 minutes per side until charred grill marks appear. Remove while hot. Immediately rub the cut face of the raw garlic clove across the rough, crunchy surface of the hot bread like sandpaper.',
        howToDoIt: 'The crusty surface acts like a grater, melting tiny amounts of raw garlic directly into the pores of the warm bread.',
        heat: 'Medium-High Heat',
        duration: 5,
        donenessCue: 'Crisp charred bread with an intoxicating garlic aroma.',
        quickInstructions: 'Grill bread 2 min per side until charred. Rub hot rough surface with cut garlic clove. Drizzle olive oil.'
      },
      {
        step: 2,
        title: 'TOP WITH MARINATED TOMATOES',
        whatYouNeed: ['Marinated tomatoes', 'Flaky salt'],
        description: 'Drizzle extra virgin olive oil over the garlic-rubbed bread. Spoon the marinated diced tomatoes generously on top. Finish with a pinch of flaky salt and serve immediately.',
        howToDoIt: 'Do not assemble until ready to serve; bread should be crunchy, not soggy.',
        heat: 'None',
        duration: 2,
        donenessCue: 'Vibrant, colorful, glistening antipasto ready to eat.',
        quickInstructions: 'Spoon marinated tomatoes over garlic bread, finish with flaky salt, eat immediately.'
      }
    ],
    commonMistakes: [
      { mistake: 'Mincing raw garlic directly into the tomato mixture.', remedy: 'Raw minced garlic in tomatoes is harsh. Rubbing the hot bread with cut garlic gives the true subtle Roman flavor.' }
    ],
    troubleshooting: [
      { problem: 'Bread turned soggy', whatToDoNow: 'Eat immediately next time; do not let assembled bruschetta sit.' }
    ],
    substitutions: [
      { original: 'Tomatoes', substitute: 'Warm sautéed wild mushrooms or white bean purée', impact: 'Autumn variation.' }
    ],
    safetyNotes: ['Grill pan is very hot; use tongs to flip bread.'],
    servingGuide: { plating: 'Serve immediately on a wooden board as an antipasto.' },
    cookingGlossary: UNIVERSAL_COOKING_GLOSSARY
  },

  'tiramisu': {
    id: 'tiramisu',
    name: 'Authentic Venetian Tiramisù',
    cuisine: 'Italian',
    region: 'Veneto (Treviso)',
    servings: 6,
    prepTime: 25,
    cookTime: 0,
    difficulty: 'Easy',
    overview: {
      summary: 'Traditional Italian no-bake dessert — crisp ladyfingers (savoiardi) dipped in strong espresso and dark rum, layered with a rich, silky cream of mascarpone cheese, egg yolks, and whipped egg whites, dusted heavily with bitter Dutch cocoa powder.',
      appearance: 'A clean layered chilled dessert showing dark espresso-soaked ladyfingers beneath velvety ivory mascarpone cream, crowned in dark chocolate cocoa velvet.',
      texture: 'Cloud-like, airy, and luscious, melting effortlessly on the tongue with soft, cake-like soaked ladyfingers.',
      flavor: 'Bittersweet cocoa, robust espresso, creamy sweet mascarpone, and subtle warmth of dark rum.',
      restingTimeMinutes: 240
    },
    equipment: [
      { name: '8x8 inch square glass dish', purpose: 'For layering and chilling.' },
      { name: 'Electric hand mixer or stand mixer', purpose: 'Whips egg whites and yolks to voluminous peaks.' },
      { name: 'Fine mesh sieve', purpose: 'For dusting cocoa powder in an even velvet layer.' }
    ],
    beforeYouStart: [
      { task: 'Brew 1.5 cups (350ml) strong espresso or dark coffee; let cool completely to room temperature.', durationMinutes: 20 },
      { task: 'Separate 3 fresh eggs into yolks and whites in two clean mixing bowls.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'Savoiardi (Ladyfingers)', technique: 'DIP QUICKLY! Dunk for literally 1 second per side. If you let them soak, they turn into a soggy mush.' }
    ],
    essentialIngredients: [
      { name: 'Italian Savoiardi (Ladyfingers)', prep: 'crisp crisp biscuits', amount: '24 biscuits (200g)', metric: '200g', imperial: '7 oz', common: '24 biscuits' },
      { name: 'Mascarpone cheese (cold)', prep: 'fresh Italian cream cheese', amount: '500g', metric: '500g', imperial: '17.6 oz', common: '2 cups' },
      { name: 'Fresh eggs (pasteurized)', prep: 'separated into yolks and whites', amount: '3 large eggs', metric: '3 eggs', imperial: '3 eggs', common: '3 eggs' },
      { name: 'Granulated sugar', prep: 'divided (1/3 cup for yolks, 2 tbsp for whites)', amount: '1/2 cup (100g)', metric: '100g', imperial: '3.5 oz', common: '1/2 cup' },
      { name: 'Brewed strong espresso', prep: 'cooled to room temperature', amount: '1.5 cups (350ml)', metric: '350ml', imperial: '12 fl oz', common: '1.5 cups' },
      { name: 'Dutch-processed cocoa powder', prep: 'unsweetened for dusting', amount: '3 tbsp', metric: '20g', imperial: '0.7 oz', common: '3 tbsp' }
    ],
    optionalIngredients: [
      { name: 'Dark rum or Marsala wine', prep: 'stirred into espresso', amount: '2 tbsp (30ml)', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'WHIP YOLKS, MASCARPONE, AND EGG WHITES',
        whatYouNeed: ['Egg yolks + sugar', 'Mascarpone', 'Egg whites', 'Mixer'],
        description: 'Beat egg yolks and 1/3 cup sugar for 4 minutes until pale, thick, and ribbon-like. Beat in cold mascarpone gently until smooth and lump-free. In a separate bowl, whip egg whites with 2 tbsp sugar to stiff, glossy peaks. Gently fold whipped whites into the mascarpone cream with a spatula.',
        howToDoIt: 'Fold gently in figure-eight motions to keep the cream light, airy, and voluminous.',
        heat: 'No Heat',
        duration: 10,
        donenessCue: 'Luscious, cloud-like, silky cream that holds soft peaks.',
        quickInstructions: 'Whip yolks + sugar pale; blend in mascarpone. Whip whites to stiff peaks; fold into mascarpone cream.'
      },
      {
        step: 2,
        title: 'DIP LADYFINGERS AND ASSEMBLE LAYERS',
        whatYouNeed: ['Savoiardi', 'Cold espresso + rum', 'Glass dish', 'Spatula'],
        description: 'Combine cooled espresso and rum in a shallow bowl. Quickly dip each ladyfinger for exactly 1 second per side. Arrange in a snug single layer across bottom of dish. Spread half the mascarpone cream evenly over top. Repeat with a second dipped ladyfinger layer. Top with remaining cream. Smooth with a spatula.',
        howToDoIt: 'A quick in-and-out dip is all it takes; the ladyfinger absorbs moisture as it chills in the fridge.',
        heat: 'No Heat',
        duration: 10,
        donenessCue: 'Two neat layers of soaked biscuits covered in silky smooth cream.',
        quickInstructions: 'Quickly dip ladyfingers in coffee (1 sec per side); layer dish with biscuits, cream, biscuits, cream.'
      },
      {
        step: 3,
        title: 'CHILL AT LEAST 4 HOURS AND DUST WITH COCOA',
        whatYouNeed: ['Cocoa powder', 'Fine mesh sieve', 'Refrigerator'],
        description: 'Cover dish with plastic wrap and refrigerate for AT LEAST 4 to 6 hours (preferably overnight). Right before serving, place cocoa powder in a fine mesh sieve and dust heavily across the entire surface into a dark velvet coat.',
        howToDoIt: 'Chilling firms the mascarpone cream and softens ladyfingers into a delicate cake.',
        heat: 'Chilling in Refrigerator',
        duration: 240,
        donenessCue: 'Cream is set firm; knife cuts clean, layered squares.',
        see: 'A velvet mantle of deep brown cocoa over snowy ivory cream.',
        smell: 'Espresso, dark cocoa, sweet cream, and rum.',
        tip: 'Dust cocoa right before serving so it stays dry and velvety rather than absorbing moisture.',
        moveOnWhen: 'Chilled, dusted with cocoa, and sliced into squares.',
        quickInstructions: 'Chill in fridge 4+ hours (or overnight). Dust heavily with cocoa powder before slicing.'
      }
    ],
    commonMistakes: [
      { mistake: 'Soaking ladyfingers for too long.', remedy: 'Dip for 1 second per side only. Over-soaked biscuits turn tiramisu into watery soup.' }
    ],
    troubleshooting: [
      { problem: 'Cream is runny and liquid', whatToDoNow: 'Chill in freezer for 30 minutes before serving.', howToPrevent: 'Whip egg whites to truly stiff peaks and fold gently.' }
    ],
    substitutions: [
      { original: 'Raw eggs', substitute: 'Whip 1 cup heavy whipping cream with 1/3 cup powdered sugar instead of egg whites', impact: 'Safe no-egg version.' }
    ],
    safetyNotes: ['Use fresh pasteurized eggs or make the whipped cream version.'],
    servingGuide: {
      restingTime: 'Chill 4–6 hours minimum.',
      plating: 'Cut into neat squares and lift with a dessert spatula.'
    },
    cookingGlossary: UNIVERSAL_COOKING_GLOSSARY
  },

  'cannoli': {
    id: 'cannoli',
    name: 'Sicilian Cannoli Tradizionali',
    cuisine: 'Italian',
    region: 'Sicily',
    servings: 6,
    prepTime: 30,
    cookTime: 15,
    difficulty: 'Hard',
    overview: {
      summary: 'Iconic Sicilian dessert — blistered, crisp, fried pastry tubes filled with sweet drained sheep-milk ricotta, dark chocolate chips, candied orange peel, and crushed pistachios.',
      appearance: 'Golden, blistered crispy pastry cylinders filled to the brim with fluffy white ricotta cream and pistachio-studded ends.',
      texture: 'Shatteringly crisp, bubbly fried shell contrasting smooth, rich, sweet ricotta cream.',
      flavor: 'Sweet milk ricotta, citrus orange zest, bittersweet chocolate, and cinnamon-scented fried pastry.',
      restingTimeMinutes: 0
    },
    equipment: [
      { name: 'Metal cannoli tubes / cylinders', purpose: 'Molds pastry into hollow tubes during deep-frying.' },
      { name: 'Deep heavy pot & candy thermometer', purpose: 'Maintains frying oil at steady 360°F (180°C).' },
      { name: 'Pastry piping bag with wide star tip', purpose: 'For piping filling neatly from both ends.' }
    ],
    beforeYouStart: [
      { task: 'Drain 500g ricotta in cheesecloth overnight in fridge to remove all liquid.', durationMinutes: 480 },
      { task: 'Whisk drained ricotta with 150g powdered sugar, pinch cinnamon, and 1 tsp vanilla until silky; fold in chocolate chips.', durationMinutes: 10 }
    ],
    ingredientPrepGuide: [
      { item: 'Ricotta', technique: 'MUST BE COMPLETELY DRY! Wet ricotta makes the crisp shells soggy in seconds.' }
    ],
    essentialIngredients: [
      { name: 'Cannoli pastry shells (or homemade dough)', prep: 'fried crisp with Marsala wine', amount: '12 shells', metric: '12 shells', imperial: '12 shells', common: '12 shells' },
      { name: 'Whole milk sheep or cow ricotta', prep: 'drained bone-dry overnight', amount: '500g', metric: '500g', imperial: '17.6 oz', common: '2 cups' },
      { name: 'Powdered confectioners sugar', prep: 'sifted', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '1.25 cups' },
      { name: 'Mini dark chocolate chips', prep: 'bittersweet', amount: '1/3 cup (60g)', metric: '60g', imperial: '2.1 oz', common: '1/3 cup' },
      { name: 'Ground cinnamon', prep: 'traditional Sicilian pinch', amount: '1/4 tsp', metric: '1g', imperial: '0.04 oz', common: '1/4 tsp' },
      { name: 'Sicilian pistachios', prep: 'finely chopped for ends', amount: '1/4 cup (40g)', metric: '40g', imperial: '1.4 oz', common: '1/4 cup' }
    ],
    optionalIngredients: [
      { name: 'Candied orange peel', prep: 'finely diced', amount: '2 tbsp', metric: '30g', imperial: '1 oz', common: '2 tbsp', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'PIPE FILLING JUST BEFORE SERVING',
        whatYouNeed: ['Pastry bag with ricotta cream', 'Cannoli shells', 'Pistachios'],
        description: 'Fill piping bag with chilled ricotta cream. Insert the tip halfway into one side of a shell and squeeze gently while pulling out. Turn shell and pipe the other side until full. Dip ends in chopped pistachios or mini chocolate chips. Dust lightly with powdered sugar.',
        howToDoIt: 'NEVER fill cannoli in advance! Fill them within 15 minutes of serving so the shell stays blistered and shatteringly crisp.',
        heat: 'No Heat',
        duration: 5,
        donenessCue: 'Shells are plumply filled to both ends with zero overflow, dusted in powdered sugar.',
        quickInstructions: 'Pipe chilled ricotta cream into both ends of crisp shells right before serving. Dip ends in pistachios.'
      }
    ],
    commonMistakes: [
      { mistake: 'Filling cannoli hours in advance.', remedy: 'The moisture in the ricotta will soften the shell. Pipe filling right before serving.' }
    ],
    troubleshooting: [
      { problem: 'Shells are soft', whatToDoNow: 'Warm empty shells in a 300°F oven for 4 min to re-crisp before filling.' }
    ],
    substitutions: [
      { original: 'Sheep ricotta', substitute: 'Cow milk ricotta + 2 tbsp mascarpone', impact: 'Rich and creamy.' }
    ],
    safetyNotes: ['If frying homemade shells, handle hot oil with extreme caution.'],
    servingGuide: { plating: 'Serve immediately on a decorative plate dusted with powdered sugar.' },
    cookingGlossary: UNIVERSAL_COOKING_GLOSSARY
  },

  'panna-cotta': {
    id: 'panna-cotta',
    name: 'Panna Cotta ai Frutti di Bosco',
    cuisine: 'Italian',
    region: 'Piedmont',
    servings: 4,
    prepTime: 15,
    cookTime: 10,
    difficulty: 'Easy',
    overview: {
      summary: 'Silky Piedmontese cooked cream dessert — rich heavy cream infused with vanilla bean and sugar, gently set with gelatin to a delicate, trembling consistency, topped with a tart wild berry coulis.',
      appearance: 'An elegant molded ivory cylinder with a gentle, hypnotic wobble, draped in glossy ruby berry sauce.',
      texture: 'Melt-in-your-mouth creamy, smooth, and trembling — never rubbery or stiff.',
      flavor: 'Rich sweet cream, fragrant floral vanilla, and tart berry contrast.',
      restingTimeMinutes: 240
    },
    equipment: [
      { name: 'Small saucepan', purpose: 'To warm cream gently without boiling.' },
      { name: '4 ramekins or dessert molds', purpose: 'For setting and inverting.' }
    ],
    beforeYouStart: [
      { task: 'Bloom 2.5 sheets (or 2 tsp powder) gelatin in 3 tbsp cold water for 5 minutes.', durationMinutes: 5 }
    ],
    ingredientPrepGuide: [
      { item: 'Gelatin', technique: 'Use the bare minimum gelatin needed. A great panna cotta must wobble and melt instantly on the tongue.' }
    ],
    essentialIngredients: [
      { name: 'Heavy whipping cream', prep: 'high quality (36%+ fat)', amount: '400ml', metric: '400ml', imperial: '13.5 fl oz', common: '1.75 cups' },
      { name: 'Whole milk', prep: 'lightens the richness', amount: '100ml', metric: '100ml', imperial: '3.4 fl oz', common: '1/2 cup' },
      { name: 'Granulated sugar', prep: 'dissolved in cream', amount: '1/3 cup (70g)', metric: '70g', imperial: '2.5 oz', common: '1/3 cup' },
      { name: 'Gelatin sheets or powder', prep: 'bloomed in cold water', amount: '2.5 sheets (5g)', metric: '5g', imperial: '0.18 oz', common: '2 tsp' },
      { name: 'Vanilla bean or pure vanilla paste', prep: 'split and seeds scraped', amount: '1 pod', metric: '1 pod', imperial: '1 pod', common: '1 pod' },
      { name: 'Mixed fresh berries & lemon juice', prep: 'simmered 5 min into coulis', amount: '1.5 cups (200g)', metric: '200g', imperial: '7 oz', common: '1.5 cups' }
    ],
    optionalIngredients: [],
    steps: [
      {
        step: 1,
        title: 'INFUSE CREAM AND DISSOLVE GELATIN',
        whatYouNeed: ['Cream, milk, sugar, vanilla', 'Bloomed gelatin', 'Saucepan'],
        description: 'Heat cream, milk, sugar, and scraped vanilla in saucepan over medium heat until steaming (do NOT boil). Remove from heat. Whisk in bloomed gelatin until completely dissolved. Strain through fine sieve into ramekins.',
        howToDoIt: 'Straining removes vanilla fibers and undissolved gelatin specks, ensuring pure velvet texture.',
        heat: 'Medium Heat to steaming, then Off Heat',
        duration: 8,
        donenessCue: 'Gelatin is fully dissolved; liquid is smooth with black vanilla specks.',
        quickInstructions: 'Heat cream, milk, sugar, vanilla until steaming. Dissolve bloomed gelatin off heat. Pour into molds.'
      },
      {
        step: 2,
        title: 'CHILL UNTIL DELICATELY SET AND UNMOLD',
        whatYouNeed: ['Refrigerator', 'Warm water bowl for unmolding', 'Berry coulis'],
        description: 'Refrigerate ramekins for at least 4 hours until gently set. To unmold, dip ramekin in warm water for 5 seconds, run a thin knife along the rim, and invert onto plate. Spoon berry coulis over top.',
        howToDoIt: 'A perfect panna cotta will wobble gently when you tap the plate.',
        heat: 'Chilling in Fridge',
        duration: 240,
        donenessCue: 'Holds its shape with a gentle, hypnotic wobble.',
        quickInstructions: 'Chill 4 hours. Invert onto plate, top with berry sauce, and enjoy the delicate wobble.'
      }
    ],
    commonMistakes: [
      { mistake: 'Using too much gelatin.', remedy: 'Excess gelatin makes panna cotta rubbery. It should barely hold together.' }
    ],
    troubleshooting: [
      { problem: 'Won’t release from mold', whatToDoNow: 'Dip in warm water for 5 more seconds.', howToPrevent: 'Lightly oil the ramekin with neutral oil before pouring.' }
    ],
    substitutions: [
      { original: 'Berry coulis', substitute: 'Warm espresso syrup or caramel sauce', impact: 'Delicious winter topping.' }
    ],
    safetyNotes: ['Gelatin needs cold water to bloom properly.'],
    servingGuide: { plating: 'Serve chilled on small dessert plates.' },
    cookingGlossary: UNIVERSAL_COOKING_GLOSSARY
  },

  'gelato': {
    id: 'gelato',
    name: 'Artisan Stracciatella Gelato',
    cuisine: 'Italian',
    region: 'Lombardy (Bergamo)',
    servings: 4,
    prepTime: 25,
    cookTime: 10,
    difficulty: 'Medium',
    overview: {
      summary: 'Authentic Italian Stracciatella Gelato — dense, slow-churned whole-milk custard infused with vanilla, drizzled at the final churn with warm melted dark chocolate that shatters into crunchy ribbon-flakes.',
      appearance: 'Creamy, pale ivory gelato flecked with fine shards and crisp ribbons of dark chocolate.',
      texture: 'Dense, elastic, and smooth with crunchy chocolate shards — churned with less air and less butterfat than American ice cream.',
      flavor: 'Pure sweet cream, vanilla bean, and bittersweet dark chocolate snap.',
      restingTimeMinutes: 120
    },
    equipment: [
      { name: 'Gelato / ice cream machine', purpose: 'Churns slowly to incorporate minimal air (approx 20% overrun).' },
      { name: 'Saucepan & whisk', purpose: 'For cooking the custard base.' }
    ],
    beforeYouStart: [
      { task: 'Freeze gelato bowl 24 hours in advance if using canister machine.', durationMinutes: 1440 },
      { task: 'Chill cooked custard base in refrigerator for at least 4 hours before churning.', durationMinutes: 240 }
    ],
    ingredientPrepGuide: [
      { item: 'Chocolate', technique: 'Melt dark chocolate with 1 tsp coconut or vegetable oil so it shatters into delicate crispy flakes when drizzled into freezing gelato.' }
    ],
    essentialIngredients: [
      { name: 'Whole milk', prep: 'fresh whole milk', amount: '2 cups (500ml)', metric: '500ml', imperial: '17 fl oz', common: '2 cups' },
      { name: 'Heavy whipping cream', prep: 'lower ratio than American ice cream', amount: '3/4 cup (180ml)', metric: '180ml', imperial: '6 fl oz', common: '3/4 cup' },
      { name: 'Granulated sugar', prep: 'dissolved in milk', amount: '2/3 cup (130g)', metric: '130g', imperial: '4.6 oz', common: '2/3 cup' },
      { name: 'Cornstarch or 3 egg yolks', prep: 'for gentle thickening', amount: '2 tbsp (15g)', metric: '15g', imperial: '0.5 oz', common: '2 tbsp' },
      { name: 'Pure vanilla extract or bean', prep: 'scraped seeds', amount: '1.5 tsp', metric: '7ml', imperial: '0.25 fl oz', common: '1.5 tsp' },
      { name: 'Dark chocolate (70% cocoa)', prep: 'melted for drizzling', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '100g' }
    ],
    optionalIngredients: [],
    steps: [
      {
        step: 1,
        title: 'COOK CUSTARD AND CHILL',
        whatYouNeed: ['Milk, cream, sugar, cornstarch', 'Saucepan', 'Whisk'],
        description: 'Whisk sugar and cornstarch in saucepan. Whisk in milk and cream. Heat over medium-low, stirring constantly, until custard thickens enough to coat a spoon (approx 6–8 min). Do not boil. Stir in vanilla. Chill in fridge for 4 hours.',
        howToDoIt: 'Gelato uses more milk than cream for a clean, pure dairy flavor that doesn’t coat the mouth in heavy butterfat.',
        heat: 'Medium-Low Heat',
        duration: 10,
        donenessCue: 'Custard coats the back of a spoon and leaves a clear line when swiped with your finger.',
        quickInstructions: 'Cook milk, cream, sugar, cornstarch over medium-low until thickened (8 min). Stir in vanilla, chill 4 hours.'
      },
      {
        step: 2,
        title: 'CHURN AND DRIZZLE MELTED CHOCOLATE (STRACCIATA)',
        whatYouNeed: ['Chilled base', 'Gelato maker', 'Warm melted chocolate'],
        description: 'Pour chilled base into gelato maker. Churn for 20 to 25 minutes until thick and soft-serve consistency. In the final 60 seconds, slowly drizzle warm melted chocolate in a thin stream. The chocolate freezes on contact and the paddle shatters it into crisp shards (stracciatella). Transfer to freezer for 1 hour to firm.',
        howToDoIt: 'Pour chocolate in a pencil-thin stream so it breaks into delicate flakes rather than large hard lumps.',
        heat: 'Freezing',
        duration: 25,
        donenessCue: 'Gelato is studded with fine chocolate flakes and has an elastic, dense scoop.',
        see: 'Fine dark chocolate ribbons fractured throughout ivory gelato.',
        tip: 'Serve gelato slightly warmer than ice cream (around 15°F / -9°C) for peak silky texture.',
        moveOnWhen: 'Transferred to a chilled container and scooped.',
        quickInstructions: 'Churn chilled base in machine (20 min). Drizzle warm melted chocolate in final minute to shatter into flakes.'
      }
    ],
    commonMistakes: [
      { mistake: 'Pouring chocolate in a thick stream.', remedy: 'Drizzle in a thin thread so the chocolate shatters into delicate crispy flakes.' }
    ],
    troubleshooting: [
      { problem: 'Gelato is icy', whatToDoNow: 'Let sit on counter 10 min before scooping.', howToPrevent: 'Ensure base is chilled thoroughly before churning.' }
    ],
    substitutions: [
      { original: 'Dark chocolate', substitute: 'Pistachio paste or Amarena cherry swirl', impact: 'Classic Italian gelato variations.' }
    ],
    safetyNotes: ['Keep canister frozen solid before use.'],
    servingGuide: { plating: 'Serve in small glasses or waffle cones with a paddle scoop.' },
    cookingGlossary: UNIVERSAL_COOKING_GLOSSARY
  }
};
