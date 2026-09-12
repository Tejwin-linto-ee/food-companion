// North Indian culinary recipes
module.exports = [
  // 1. CHICKEN TIKKA
  {
    id: 'chicken-tikka',
    name: 'Murgh Tikka (Chicken Tikka)',
    cuisine: 'Indian',
    region: 'North Indian (Punjab)',
    servings: 4,
    prepTime: 25,
    cookTime: 20,
    difficulty: 'Medium',
    overview: {
      summary: 'Boneless chicken thighs steeped in a pungent mustard oil, ginger-garlic, and Kashmiri chili first marinade, followed by an ajwain-scented hung curd second marinade, then high-heat charred until smoky, tender, and blistered.',
      appearance: 'Vivid orange-scarlet chicken morsels with crisp blackened char edges, brushed with sizzling melted butter and garnished with onion rings and fresh coriander.',
      texture: 'Crisp, blistered exterior yielding to extraordinarily juicy, tender interior meat.',
      flavor: 'Smoky, tangy, spicy, and earthy with pungent undertones of carom seeds and mustard oil.',
      restingTimeMinutes: 4
    },
    equipment: [
      { name: 'Metal or soaked bamboo skewers (10–12 inch)', purpose: 'Holds chicken cubes securely and facilitates even turning over high heat.' },
      { name: 'Oven with high broiler setting or heavy cast iron skillet', purpose: 'Recreates intense 250°C+ dry radiant heat of an Indian clay tandoor.' },
      { name: 'Basting brush', purpose: 'For applying melted butter during the final blistering stage to prevent drying.' }
    ],
    beforeYouStart: [
      { task: 'Soak bamboo skewers in cold water for 30 minutes to prevent scorching in the oven.', durationMinutes: 30 },
      { task: 'Tie 250g plain yogurt in a muslin cloth and hang over a bowl for 45 minutes to yield 150g thick hung curd.', durationMinutes: 45 },
      { task: 'Cut chicken thighs into uniform 4cm (1.6 inch) cubes and pat completely dry with paper towels.', durationMinutes: 10 }
    ],
    ingredientPrepGuide: [
      { item: 'Chicken Thighs', technique: 'Trim silverskin and loose fat, cut into 4cm square chunks. Thighs stay succulent under broiler heat; breast meat tends to desiccate.' },
      { item: 'Mustard Oil', technique: 'Heat 1.5 tbsp mustard oil in a small pan until it reaches its smoking point, cool slightly, then whisk with Kashmiri chili powder to bloom color and tame raw pungency.' }
    ],
    essentialIngredients: [
      { name: 'Boneless chicken thighs', prep: 'cut into 4cm cubes, dried', amount: '700g', metric: '700g', imperial: '1.5 lbs', common: '1.5 lbs' },
      { name: 'Hung curd (thick strained yogurt)', prep: 'whisked smooth', amount: '150g', metric: '150g', imperial: '5.3 oz', common: '2/3 cup' },
      { name: 'Mustard oil', prep: 'smoked and cooled', amount: '1.5 tbsp', metric: '22ml', imperial: '0.75 fl oz', common: '1.5 tbsp' },
      { name: 'Ginger-garlic paste', prep: 'freshly pounded', amount: '2 tbsp', metric: '30g', imperial: '1 oz', common: '2 tbsp' },
      { name: 'Kashmiri chili powder', prep: 'fine powder for vibrant color', amount: '1.5 tbsp', metric: '12g', imperial: '0.4 oz', common: '1.5 tbsp' },
      { name: 'Ajwain (carom seeds)', prep: 'crushed between palms', amount: '1/2 tsp', metric: '1.5g', imperial: '0.05 oz', common: '1/2 tsp' },
      { name: 'Kasuri methi (fenugreek leaves)', prep: 'lightly roasted and powdered', amount: '1 tbsp', metric: '3g', imperial: '0.1 oz', common: '1 tbsp' },
      { name: 'Garam masala', prep: 'fragrant blend', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Chaat masala', prep: 'for finishing sprinkle', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Lemon juice', prep: 'freshly squeezed', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp' },
      { name: 'Melted butter or ghee', prep: 'for basting', amount: '3 tbsp', metric: '45g', imperial: '1.6 oz', common: '3 tbsp' },
      { name: 'Fine sea salt', prep: 'to taste', amount: '1.5 tsp', metric: '9g', imperial: '0.3 oz', common: '1.5 tsp' }
    ],
    optionalIngredients: [
      { name: 'Green bell pepper and red onion chunks', prep: 'cut into 4cm squares', amount: '1 each', metric: '150g', imperial: '5.3 oz', common: '1 cup', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'FIRST MARINADE (SALT, CITRUS & COLOR)',
        whatYouNeed: ['700g chicken cubes', '1.5 tbsp lemon juice', '1 tbsp ginger-garlic paste', '1 tsp salt', '1 tbsp Kashmiri chili powder', '1.5 tbsp warm mustard oil'],
        description: 'Whisk warm mustard oil with Kashmiri chili powder in a large bowl to unlock its brilliant crimson hue. Add lemon juice, salt, and ginger-garlic paste. Massage chicken cubes thoroughly in this mixture. Let rest at room temperature for 15 minutes.',
        howToDoIt: 'Mustard oil carries fat-soluble pigments from Kashmiri chili directly onto the chicken surface, while salt and acid begin protein tenderization.',
        heat: 'Off',
        heatDescription: 'Room temperature resting phase.',
        duration: 15,
        visualCues: 'Chicken turns an intense, glistening rubicund hue with no dry spice pockets.',
        hear: 'None',
        smell: 'Pungent mustard zest and sharp lemon aromatics.',
        textureCheck: 'Tenderized surface with light moisture release.',
        whatShouldThisLookLike: 'Vibrant crimson chicken chunks coated in slick, aromatic marinade.',
        tip: 'Do not skip smoking the mustard oil; raw mustard oil can leave an overpowering bitter bite.',
        commonMistake: 'Marinating in acid for over an hour — the surface fibers will turn mushy.',
        moveOnWhen: 'Chicken has rested 15 minutes in first marinade.',
        quickInstructions: 'Mix smoked mustard oil, chili, lemon, salt, ginger-garlic. Coat chicken for 15 min.'
      },
      {
        step: 2,
        title: 'SECOND MARINADE (HUNG CURD ENVELOPE)',
        whatYouNeed: ['First-marinated chicken', '150g hung curd', '1/2 tsp crushed ajwain', '1 tbsp powdered kasuri methi', '1 tsp garam masala'],
        description: 'Add thick hung curd, crushed ajwain, powdered kasuri methi, and garam masala to the chicken. Work the marinade gently until each chunk has a rich, velvety coating. Cover and chill in the refrigerator for at least 1 hour (up to 6 hours).',
        howToDoIt: 'Hung curd provides an insulating layer of milk proteins and fat that protects the meat from blistering heat, keeping it succulent.',
        heat: 'Chilled (Refrigerator)',
        heatDescription: 'Cold environment allowing lactic acid to tenderize without food-safety risk.',
        duration: 60,
        visualCues: 'Thick, creamy salmon-pink coating that adheres firmly to meat.',
        hear: 'None',
        smell: 'Herbal fenugreek and warm carom seed notes.',
        textureCheck: 'Dense paste consistency, not watery or loose.',
        whatShouldThisLookLike: 'Thickly coated chicken cubes with zero pooling liquid.',
        tip: 'If your curd is still watery, hang it in a fine cloth for an extra 20 minutes.',
        commonMistake: 'Using regular un-strained yogurt — it drips off into the pan and steams the chicken.',
        moveOnWhen: 'Chicken is thoroughly marinated and chilled for minimum 60 minutes.',
        quickInstructions: 'Fold in hung curd, ajwain, kasuri methi, garam masala. Chill 1 hour.'
      },
      {
        step: 3,
        title: 'THREADING ON SKEWERS',
        whatYouNeed: ['Marinated chicken cubes', 'Soaked skewers', 'Optional onion/bell pepper squares'],
        description: 'Thread chicken cubes tightly onto skewers, alternating with bell pepper and onion pieces if using. Leave 5mm between pieces so heat circulates freely. Place skewers across an oven roasting rack suspended over a baking sheet.',
        howToDoIt: 'Suspending skewers ensures hot air circulates underneath, preventing the underside from boiling in drippings.',
        heat: 'Off',
        heatDescription: 'Preparation on counter.',
        duration: 6,
        visualCues: 'Neatly aligned, evenly spaced skewers ready for intense heat.',
        hear: 'None',
        smell: 'Spiced aromatic marinade.',
        textureCheck: 'Firm, snugly threaded skewers.',
        whatShouldThisLookLike: 'Evenly threaded skewers suspended horizontally over a rimmed baking tray.',
        tip: 'Line the baking sheet with foil to catch drippings and make cleanup effortless.',
        commonMistake: 'Squeezing chicken pieces together too tightly, preventing heat from penetrating edges.',
        moveOnWhen: 'All chicken is securely threaded onto skewers.',
        quickInstructions: 'Thread chicken onto skewers with slight space between cubes; suspend over tray.'
      },
      {
        step: 4,
        title: 'HIGH-HEAT BROIL & CHAR',
        whatYouNeed: ['Threaded skewers', 'Preheated oven on Broil / 240°C (475°F)', 'Oven mitts', 'Tongs'],
        description: 'Position the oven rack 15cm (6 inches) below the broiler element. Slide the skewered chicken in. Broil for 10 minutes until chicken edges show light browning.',
        howToDoIt: 'Intense overhead radiant broiling caramelizes the exterior sugars and milk proteins, forming authentic tandoori charring.',
        heat: 'Broil / High (240°C / 475°F)',
        heatDescription: 'Maximum radiant heat causing active bubbling and scorching on top edges.',
        duration: 10,
        visualCues: 'Yogurt coating sets, loses gloss, and begins darkening into amber-brown blisters.',
        hear: 'Active, steady sizzling with dripping juices.',
        smell: 'Appetizing barbecue char and toasted spices.',
        textureCheck: 'Top surfaces become firm to the touch.',
        whatShouldThisLookLike: 'Lightly browned chicken surfaces with initial blister speckles.',
        tip: 'Keep oven door closed to maintain maximum ambient heat.',
        commonMistake: 'Placing rack too close to broiler (less than 10cm), which burns the spices before cooking the meat interior.',
        moveOnWhen: 'Top surfaces are firm and starting to char (approx 10 mins).',
        quickInstructions: 'Broil 15cm below heating element for 10 minutes until edges brown.'
      },
      {
        step: 5,
        title: 'BASTE WITH BUTTER & BLISTER',
        whatYouNeed: ['Partially cooked skewers', '3 tbsp melted butter/ghee', 'Basting brush', '1 tsp chaat masala', 'Lemon wedges'],
        description: 'Carefully remove the tray. Liberally brush melted butter across all chicken surfaces. Rotate skewers 180 degrees. Return to oven for 6–8 minutes until edges are authentically blackened and meat reaches 74°C (165°F). Remove, rest 4 minutes, sprinkle with chaat masala, and slide off skewers.',
        howToDoIt: 'Basting with melted butter creates instant surface frying under the broiler and locks in moisture, giving that glossy restaurant finish.',
        heat: 'Broil / High',
        heatDescription: 'Sizzling butter bubbling over blistered char marks.',
        duration: 8,
        visualCues: 'Crisp blackened blister patches on edges; butter bubbling vigorously; juices run clear.',
        hear: 'Excited crackling as butter hits the hot char.',
        smell: 'Intoxicating tandoori smokiness with buttery richness.',
        textureCheck: 'Skewers read 74°C+ internally; springy and succulent when gently pressed.',
        whatShouldThisLookLike: 'Glossy red-amber chicken chunks with distinct charred crusts.',
        tip: 'Resting for 4 minutes allows juices to redistribute into the core of the chicken.',
        commonMistake: 'Serving immediately without resting, causing all internal moisture to spill out.',
        moveOnWhen: 'Chicken registers 74°C (165°F) internally with authentic blistered charring.',
        quickInstructions: 'Baste with melted butter, rotate skewers, broil 6-8 mins. Rest 4 mins, dust with chaat masala.'
      }
    ],
    commonMistakes: [
      { mistake: 'Chicken turned watery and bland.', remedy: 'Yogurt was not hung long enough. Ensure curd is strained until thick and spreadable like cream cheese.' },
      { mistake: 'Meat was tough and dry.', remedy: 'You used chicken breast or overcooked past 75°C. Always use boneless chicken thighs for juicy tikkas.' }
    ],
    troubleshooting: [
      {
        problem: 'Chicken cooked but has zero char marks',
        whatHappened: 'Oven broiler was not hot enough or rack was too far from the heat source.',
        whyItHappened: 'Lower temperatures bake chicken rather than broiling it.',
        whatToDoNow: 'Place skewers directly on a smoking cast iron skillet for 90 seconds per side to rapidly develop blister marks.',
        howToPrevent: 'Ensure oven broiler is preheated for at least 15 minutes and rack is placed 15cm below the heating element.'
      }
    ],
    substitutions: [
      { original: 'Boneless chicken thighs', substitute: 'Paneer or firm pressed tofu', notes: 'Reduce cooking time to 8-10 minutes total to prevent paneer from turning rubbery.' },
      { original: 'Mustard oil', substitute: 'Vegetable oil with 1/4 tsp ground mustard seed', notes: 'Provides fat carrier with a gentler peppery aroma.' }
    ],
    safetyNotes: [
      'Poultry must reach an internal temperature of 74°C (165°F) checked with a probe thermometer.',
      'Discard remaining raw marinade; never use as a finishing sauce without boiling.'
    ],
    servingGuide: {
      restingTime: 'Rest 4 minutes off skewers.',
      garnishing: 'Sprinkle generously with chaat masala, fresh coriander leaves, and fine ginger juliennes.',
      plating: 'Serve on a sizzling platter or wide plate with red onion rings tossed in lemon and salt.',
      temperature: 'Piping hot (65°C / 150°F).',
      accompaniments: 'Mint-coriander yogurt chutney, tandoori naan, and crisp sliced cucumber salad.'
    }
  },

  // 2. TANDOORI CHICKEN
  {
    id: 'tandoori-chicken',
    name: 'Tandoori Chicken',
    cuisine: 'Indian',
    region: 'North Indian (Punjab)',
    servings: 4,
    prepTime: 30,
    cookTime: 35,
    difficulty: 'Medium',
    overview: {
      summary: 'Whole bone-in chicken leg quarters deeply scored and steeped in a dual-stage marinade: first with lemon, sea salt, and Kashmiri chili, then enveloped in spiced hung curd with roasted gram flour (besan). Roasted at peak temperature until smoky, blistered, and falling off the bone.',
      appearance: 'Dramatic crimson-charred whole chicken quarters with deep caramelized crusts along score marks, brushed with sizzling ghee.',
      texture: 'Crisp, blistered skin exterior with deeply juicy, bone-tender dark meat.',
      flavor: 'Smoky, tangy, robustly spiced with hints of roasted cumin, fenugreek, and mustard.',
      restingTimeMinutes: 5
    },
    equipment: [
      { name: 'Roasting pan with wire rack', purpose: 'Elevates chicken quarters so circulating air browns top and bottom evenly.' },
      { name: 'Sharp chef knife', purpose: 'To make 3–4 deep incisions right down to the bone on each piece.' },
      { name: 'Meat thermometer', purpose: 'Ensures bone-in dark meat reaches safe 75°C (167°F) internal doneness.' }
    ],
    beforeYouStart: [
      { task: 'Remove chicken skin and make 3 deep diagonal slashes across each drumstick and thigh down to the bone.', durationMinutes: 10 },
      { task: 'Dry-roast 1.5 tbsp besan (chickpea flour) in a pan for 2 minutes until fragrant to bind the marinade.', durationMinutes: 4 },
      { task: 'Strain 200g full-fat yogurt in cheesecloth for 40 minutes to make thick hung curd.', durationMinutes: 40 }
    ],
    ingredientPrepGuide: [
      { item: 'Chicken Leg Quarters', technique: 'Make 3 deep parallel slashes perpendicular to the bone on the thigh and 2 slashes on the drumstick. This allows marinade to penetrate deep into the core muscle.' },
      { item: 'Roasted Besan', technique: 'Lightly toast gram flour in a dry pan until nutty; it emulsifies oil and yogurt into an impermeable crust that stays on the meat during roasting.' }
    ],
    essentialIngredients: [
      { name: 'Bone-in skinless chicken leg quarters', prep: 'deeply scored to the bone', amount: '4 quarters (1.1kg)', metric: '1100g', imperial: '2.4 lbs', common: '4 pieces' },
      { name: 'Hung curd (Greek yogurt)', prep: 'thick & strained', amount: '180g', metric: '180g', imperial: '6.3 oz', common: '3/4 cup' },
      { name: 'Besan (chickpea flour)', prep: 'lightly dry-roasted', amount: '1.5 tbsp', metric: '15g', imperial: '0.5 oz', common: '1.5 tbsp' },
      { name: 'Kashmiri red chili powder', prep: 'divided', amount: '2 tbsp', metric: '16g', imperial: '0.6 oz', common: '2 tbsp' },
      { name: 'Lemon juice', prep: 'freshly squeezed', amount: '3 tbsp', metric: '45ml', imperial: '1.5 fl oz', common: '3 tbsp' },
      { name: 'Ginger-garlic paste', prep: 'fine paste', amount: '2.5 tbsp', metric: '38g', imperial: '1.3 oz', common: '2.5 tbsp' },
      { name: 'Mustard oil', prep: 'smoked and cooled', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp' },
      { name: 'Garam masala powder', prep: 'aromatic blend', amount: '1.5 tsp', metric: '4.5g', imperial: '0.15 oz', common: '1.5 tsp' },
      { name: 'Kasuri methi (fenugreek leaves)', prep: 'crushed to powder', amount: '1 tbsp', metric: '3g', imperial: '0.1 oz', common: '1 tbsp' },
      { name: 'Melted ghee or butter', prep: 'for basting', amount: '4 tbsp', metric: '60g', imperial: '2.1 oz', common: '4 tbsp' },
      { name: 'Fine sea salt', prep: 'divided', amount: '2 tsp', metric: '12g', imperial: '0.4 oz', common: '2 tsp' }
    ],
    optionalIngredients: [
      { name: 'Chaat masala', prep: 'for finishing', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'SCORING & 1ST MARINADE PENETRATION',
        whatYouNeed: ['4 chicken leg quarters', '2 tbsp lemon juice', '1 tbsp ginger-garlic paste', '1 tbsp Kashmiri chili', '1 tsp salt'],
        description: 'Using a sharp knife, make 3 deep cuts into the thickest part of each thigh and 2 cuts into each drumstick, slicing right down to the bone. Rub lemon juice, salt, ginger-garlic paste, and Kashmiri chili into the incisions and over all meat. Rest for 20 minutes.',
        howToDoIt: 'Direct seasoning inside bone incisions ensures the chicken is seasoned through to the center rather than tasting bland on the inside.',
        heat: 'Off',
        heatDescription: 'Countertop resting phase.',
        duration: 20,
        visualCues: 'Bright crimson chicken meat with marinade worked deeply into every slit.',
        hear: 'None',
        smell: 'Sharp lemon and garlic tang.',
        textureCheck: 'Softened muscle tissue.',
        whatShouldThisLookLike: 'Deeply scored red chicken quarters resting with light liquid pooling.',
        tip: 'Do not remove the bone; bone-in meat conducts heat through the marrow, enhancing flavor and juiciness.',
        commonMistake: 'Making shallow superficial cuts that do not reach the bone.',
        moveOnWhen: 'Chicken has rested 20 minutes with seasoning absorbed into cuts.',
        quickInstructions: 'Score chicken to the bone; massage lemon, salt, chili, ginger-garlic into cuts for 20 min.'
      },
      {
        step: 2,
        title: 'SECOND MARINADE (BESAN & YOGURT COAT)',
        whatYouNeed: ['First-marinated chicken', '180g hung curd', '1.5 tbsp roasted besan', '2 tbsp mustard oil', '1 tbsp Kashmiri chili', '1.5 tsp garam masala', '1 tbsp crushed kasuri methi', '1 tsp salt'],
        description: 'Whisk hung curd, roasted besan, mustard oil, remaining Kashmiri chili, garam masala, crushed kasuri methi, and salt into a luscious thick paste. Smear lavishly over every chicken quarter, filling all score marks. Cover and refrigerate for 2 to 6 hours.',
        howToDoIt: 'Roasted besan absorbs moisture and binds the spices to the chicken skinlessly so the marinade does not slide off under intense oven heat.',
        heat: 'Chilled (Refrigerator)',
        heatDescription: 'Cold marination.',
        duration: 120,
        visualCues: 'A thick, opaque terracotta paste blanketing the meat evenly.',
        hear: 'None',
        smell: 'Toasty chickpea flour, pungent mustard, and floral spices.',
        textureCheck: 'Velvety, spreadable paste.',
        whatShouldThisLookLike: 'Thickly coated chicken quarters with cuts stuffed with spiced yogurt paste.',
        tip: 'Toasting the besan for 2 minutes removes raw flour taste and enhances nutty aroma.',
        commonMistake: 'Rushing this step; bone-in chicken needs at least 2 hours of marination for deep flavor.',
        moveOnWhen: 'Chicken has chilled in marinade for at least 2 hours.',
        quickInstructions: 'Blend hung curd, toasted besan, mustard oil, spices; coat chicken thoroughly and chill 2+ hours.'
      },
      {
        step: 3,
        title: 'PREHEAT & OVEN ROAST',
        whatYouNeed: ['Marinated chicken quarters', 'Roasting pan with wire rack', 'Preheated oven at 220°C (430°F)'],
        description: 'Preheat oven to 220°C (430°F). Arrange chicken quarters on the wire rack over the baking pan without touching. Roast for 25 minutes.',
        howToDoIt: 'The elevated wire rack allows hot air to swirl underneath the meat, browning both top and bottom without stewing in drippings.',
        heat: 'High Roast (220°C / 430°F)',
        heatDescription: 'Steady high heat baking with sizzling drippings falling into the pan.',
        duration: 25,
        visualCues: 'Marinade sets firmly and edges begin turning golden-amber.',
        hear: 'Steady, rhythmic sizzling.',
        smell: 'Classic Punjabi tandoori aroma filling the kitchen.',
        textureCheck: 'Exterior surface feels set and slightly crusty.',
        whatShouldThisLookLike: 'Partially roasted chicken with firm, matte red crust.',
        tip: 'Pour 100ml water into the bottom baking tray to prevent drippings from burning and smoking excessively.',
        commonMistake: 'Roasting chicken flat on a baking sheet without a wire rack, resulting in soggy bottoms.',
        moveOnWhen: 'Chicken has roasted for 25 minutes and marinade is firm.',
        quickInstructions: 'Roast on wire rack at 220°C (430°F) for 25 minutes.'
      },
      {
        step: 4,
        title: 'BASTE & HIGH BROIL BLISTER',
        whatYouNeed: ['Partially roasted chicken', '4 tbsp melted ghee', 'Pastry brush', 'Oven Broiler setting'],
        description: 'Switch oven to Broil (High). Brush chicken quarters generously with melted ghee. Broil 15cm from element for 6–8 minutes until dark charred blister spots appear and the meat thermometer at the thickest part of the thigh registers 75°C (167°F). Remove and let rest 5 minutes.',
        howToDoIt: 'Broiler heat mimics the radiant coals of a clay tandoor, crisping the besan-yogurt crust into smoky blistered perfection.',
        heat: 'Broil / High',
        heatDescription: 'Intense blistering radiant heat.',
        duration: 8,
        visualCues: 'Appetizing black-brown charring along the edges and score lines; ghee bubbles vigorously.',
        hear: 'Loud crackling and spitting.',
        smell: 'Smoky, caramelized tandoor fragrance.',
        textureCheck: 'Juices run crystal clear when pricked at the thigh joint; 75°C+ on thermometer.',
        whatShouldThisLookLike: 'Blistered, charred, glistening red chicken quarters.',
        tip: 'Resting for 5 minutes allows hot muscle fibers to relax and retain moisture.',
        commonMistake: 'Cutting into the chicken immediately, which causes all the flavorful juices to pour out.',
        moveOnWhen: 'Chicken reaches 75°C internally with dark charred blisters.',
        quickInstructions: 'Brush with melted ghee, broil on high 6-8 mins until charred; rest 5 minutes.'
      }
    ],
    commonMistakes: [
      { mistake: 'Chicken meat was red near the bone.', remedy: 'Bone-in chicken requires deep score cuts down to the marrow and verification with a meat thermometer to 75°C.' },
      { mistake: 'Skin was soggy.', remedy: 'Ensure chicken skin is completely removed before marinating, as skin retains too much moisture under home ovens.' }
    ],
    troubleshooting: [
      {
        problem: 'Marinade slid off chicken and pooled in the pan',
        whatHappened: 'The yogurt was too watery or besan was omitted.',
        whyItHappened: 'Moisture boiled off and washed away the spices.',
        whatToDoNow: 'Baste the chicken with pan drippings mixed with melted ghee, and finish under high broiler for 5 minutes.',
        howToPrevent: 'Always strain yogurt for 40+ minutes and use 1.5 tbsp roasted besan to bind the coating.'
      }
    ],
    substitutions: [
      { original: 'Mustard oil', substitute: 'Ghee or neutral vegetable oil', notes: 'Ghee provides rich aroma, though mustard oil gives the authentic earthy punch.' }
    ],
    safetyNotes: [
      'Internal temperature must reach 75°C (167°F) at the thickest part of the thigh without touching bone.'
    ],
    servingGuide: {
      restingTime: '5 minutes resting on cutting board.',
      garnishing: 'Dust with tangy chaat masala, fresh coriander sprigs, and lemon wedges.',
      plating: 'Serve quarters whole on a bed of fresh sliced onion rings and mint leaves.',
      temperature: 'Hot (65°C / 150°F).',
      accompaniments: 'Mint-coriander yogurt chutney, roomali roti or butter naan, and pickled chilies.'
    }
  },

  // 3. NAAN
  {
    id: 'naan',
    name: 'Tandoori Garlic Butter Naan',
    cuisine: 'Indian',
    region: 'North Indian (Punjab / Delhi)',
    servings: 4,
    prepTime: 20,
    cookTime: 15,
    difficulty: 'Medium',
    overview: {
      summary: 'Soft, pillowy, blistered flatbread made from an enriched yeasted flour dough fermented with yogurt and milk. Stretched into classic teardrop shapes, slapped onto a searing cast-iron tawa, inverted directly over an open flame for smoky charring, and slathered with melted garlic butter.',
      appearance: 'Tender teardrop flatbread with dramatic golden-brown and blackened bubbles, glossy with melted butter, flecked with minced garlic and green cilantro.',
      texture: 'Crispy blistered crust on one side, soft, chewy, and airy in the middle.',
      flavor: 'Buttery, garlicky, slightly tangy from yogurt fermentation with a faint smoky char.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Heavy Cast Iron Skillet or concave iron tawa (NOT non-stick)', purpose: 'Critical! The wet dough must stick to the iron pan so it does not fall off when inverted over open flame.' },
      { name: 'Rolling pin', purpose: 'To roll dough into teardrop shapes.' },
      { name: 'Pastry brush', purpose: 'For water application on dough and butter wash.' }
    ],
    beforeYouStart: [
      { task: 'Melt 40g butter and mix with 4 cloves finely minced garlic and 2 tbsp chopped cilantro.', durationMinutes: 5 },
      { task: 'Warm 120ml whole milk to 40°C (105°F) for yeast activation.', durationMinutes: 3 }
    ],
    ingredientPrepGuide: [
      { item: 'Flour Dough', technique: 'Knead for 8 full minutes until smooth, elastic, and tacky. Rest in a warm, oiled bowl for 60–90 minutes until doubled in bulk.' },
      { item: 'Iron Tawa Inversion', technique: 'Use an uncoated iron skillet. Brush water generously on one side of the rolled dough before slapping onto the smoking pan. The water creates steam and welds the dough to the iron, allowing you to flip the pan upside down over the gas flame without the naan dropping.' }
    ],
    essentialIngredients: [
      { name: 'All-purpose flour (Maida)', prep: 'sifted', amount: '300g', metric: '300g', imperial: '10.5 oz', common: '2.5 cups' },
      { name: 'Instant dry yeast', prep: 'active', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp' },
      { name: 'Warm milk (40°C)', prep: 'whole milk', amount: '120ml', metric: '120ml', imperial: '4 fl oz', common: '1/2 cup' },
      { name: 'Plain full-fat yogurt', prep: 'room temperature', amount: '60g', metric: '60g', imperial: '2.1 oz', common: '1/4 cup' },
      { name: 'Granulated sugar', prep: 'to feed yeast', amount: '1 tsp', metric: '4g', imperial: '0.14 oz', common: '1 tsp' },
      { name: 'Fine sea salt', prep: 'for flavor', amount: '1 tsp', metric: '6g', imperial: '0.2 oz', common: '1 tsp' },
      { name: 'Baking powder', prep: 'for extra aeration', amount: '1/2 tsp', metric: '2g', imperial: '0.07 oz', common: '1/2 tsp' },
      { name: 'Vegetable oil', prep: 'for dough kneading', amount: '2 tbsp', metric: '30ml', imperial: '1 fl oz', common: '2 tbsp' },
      { name: 'Unsalted butter', prep: 'melted for finishing', amount: '50g', metric: '50g', imperial: '1.8 oz', common: '3.5 tbsp' },
      { name: 'Garlic cloves', prep: 'very finely minced', amount: '5 cloves', metric: '15g', imperial: '0.5 oz', common: '1.5 tbsp' },
      { name: 'Fresh cilantro (coriander)', prep: 'finely chopped', amount: '2 tbsp', metric: '10g', imperial: '0.35 oz', common: '2 tbsp' }
    ],
    optionalIngredients: [
      { name: 'Nigella seeds (kalonji)', prep: 'for pressing into dough', amount: '1 tsp', metric: '3g', imperial: '0.1 oz', common: '1 tsp', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'KNEAD & PROOF THE DOUGH',
        whatYouNeed: ['300g maida', '1 tsp yeast', '1 tsp sugar', '1 tsp salt', '1/2 tsp baking powder', '120ml warm milk', '60g yogurt', '2 tbsp oil'],
        description: 'Whisk warm milk, sugar, and yeast in a bowl; let stand 5 minutes until frothy. Sift flour, salt, and baking powder into a large bowl. Add yeast mixture, yogurt, and oil. Knead for 8 minutes until smooth and supple. Place in an oiled bowl, cover with a damp cloth, and let rise in a warm spot for 60–90 minutes until doubled.',
        howToDoIt: 'The combination of yeast fermentation and baking powder creates extensive carbon dioxide pockets that expand rapidly into tender bubbles when hit with intense pan heat.',
        heat: 'Off (Warm environment 28–32°C)',
        heatDescription: 'Proofing at gentle warmth.',
        duration: 75,
        visualCues: 'Dough expands to twice its original volume; when poked with a floured finger, the indentation rebounds very slowly.',
        hear: 'None',
        smell: 'Sweet, yeasty, yogurt-sour aroma.',
        textureCheck: 'Soft, elastic, pillowy dough that does not stick to dry fingers.',
        whatShouldThisLookLike: 'Airy, dome-shaped dough doubled in size.',
        tip: 'If your kitchen is cold, proof dough inside an off oven with the oven light turned on.',
        commonMistake: 'Using boiling hot milk which kills the yeast cells.',
        moveOnWhen: 'Dough has visibly doubled in size.',
        quickInstructions: 'Combine yeast, warm milk, yogurt, oil, dry ingredients. Knead 8 mins, proof until doubled (60-90 min).'
      },
      {
        step: 2,
        title: 'PORTION & ROLL INTO TEARDROP',
        whatYouNeed: ['Proofed dough', 'Rolling pin', 'Flour for dusting', '1 tsp nigella seeds', 'Water bowl + brush'],
        description: 'Punch down dough gently. Divide into 6 equal balls (approx 85g each). Cover and rest 10 minutes. Take one ball, dust lightly with flour, and roll into an elongated oval/teardrop shape about 4mm thick. Scatter a pinch of nigella seeds and press in gently with the rolling pin.',
        howToDoIt: 'Resting dough balls for 10 minutes relaxes the gluten network so the dough rolls smoothly without snapping back like a rubber band.',
        heat: 'Off',
        heatDescription: 'Rolling station.',
        duration: 10,
        visualCues: 'Smooth teardrop shaped sheets of dough with seeds embedded.',
        hear: 'None',
        smell: 'Mild fresh dough.',
        textureCheck: 'Supple, stretchy dough sheet.',
        whatShouldThisLookLike: 'Teardrop flatbread about 22cm long and 4mm thick.',
        tip: 'Do not roll too thin like a tortilla; naan needs 4mm thickness to maintain its pillowy chew.',
        commonMistake: 'Over-flouring the surface, which causes the dough to slip off the hot iron pan during inversion.',
        moveOnWhen: 'Naan pieces are rolled into teardrops with seeds embedded.',
        quickInstructions: 'Divide dough into 6 balls, rest 10 min. Roll each into a 4mm teardrop shape.'
      },
      {
        step: 3,
        title: 'WATER APPLICATION & TAWA SEARING',
        whatYouNeed: ['Rolled naan', 'Cast iron skillet on Medium-High heat', 'Water brush'],
        description: 'Heat cast iron skillet over medium-high heat until hot. Brush the underside of the rolled naan generously with water. Immediately lift and slap the wet side down onto the hot cast iron skillet. Cook for 60–75 seconds.',
        howToDoIt: 'The water turns to high-pressure steam, anchoring the dough firmly to the porous iron surface while blowing massive air bubbles through the top.',
        heat: 'Medium-High Heat',
        heatDescription: 'Very hot cast iron pan; drop of water dances and evaporates instantly.',
        duration: 2,
        visualCues: 'Huge blisters and bubbles swell across the top surface within 30 seconds.',
        hear: 'Hissing sound as water hits hot iron.',
        smell: 'Toasted flour aroma.',
        textureCheck: 'Top surface puffs up like a balloon with multiple pocket bubbles.',
        whatShouldThisLookLike: 'Bubbled top with large white and pale-tan domes.',
        tip: 'DO NOT use a non-stick Teflon pan! The dough will instantly fall off when you invert it over the flame.',
        commonMistake: 'Not brushing enough water — the naan must be evenly damp to adhere.',
        moveOnWhen: 'Top of naan is covered in large puffed bubbles.',
        quickInstructions: 'Brush underside with water, slap onto hot cast iron tawa; cook 60 secs until top puffs with bubbles.'
      },
      {
        step: 4,
        title: 'INVERSION FLAME CHAR & GARLIC BUTTER WASH',
        whatYouNeed: ['Puffed naan on tawa', 'Open gas burner', 'Tongs', '50g melted butter with minced garlic & cilantro'],
        description: 'Pick up the skillet by its handle, invert it completely upside down over the open gas flame about 8–10cm above the fire. Move pan in circular motion for 60–90 seconds so the flame directly chars the bubbles. Once blistered with dark brown spots, flip upright. Use a metal spatula to unstick the naan, transfer to a plate, and lavishly brush with garlic butter.',
        howToDoIt: 'Direct flame exposure replicates the fierce radiant heat of a 480°C tandoor dome, imparting signature charred blister spots.',
        heat: 'Medium-High Open Flame',
        heatDescription: 'Direct flame licking the inverted naan bubbles.',
        duration: 2,
        visualCues: 'Bubbles blister into deep golden-brown and charred black spots; butter melts into a shimmering sheen.',
        hear: 'Quiet flame hiss and occasional sizzle.',
        smell: 'Smoky tandoor char mingled with sweet melting garlic and butter.',
        textureCheck: 'Bottom is crisp and golden; top is blistered; interior is cloud-soft.',
        whatShouldThisLookLike: 'Classic restaurant tandoori garlic naan with dramatic charred bubbles.',
        tip: 'Keep the pan moving constantly over the flame to prevent scorching one spot black.',
        commonMistake: 'Holding the pan too close to the flame, which burns the raw garlic instead of toasting the dough.',
        moveOnWhen: 'Naan has attractive charred spots and is brushed with garlic butter.',
        quickInstructions: 'Invert pan over open flame 60-90 secs in circles until charred. Unstick, brush with garlic butter.'
      }
    ],
    commonMistakes: [
      { mistake: 'Naan fell off the pan into the fire.', remedy: 'You used a non-stick pan or did not apply enough water to the underside. Always use bare cast iron or carbon steel.' },
      { mistake: 'Naan is hard and biscuit-like.', remedy: 'The dough was rolled too thin or cooked too slowly over low heat. Use high heat and roll to 4mm.' }
    ],
    troubleshooting: [
      {
        problem: 'I have an electric/induction stove with no open flame',
        whatHappened: 'Inversion over flame is impossible without a gas burner.',
        whyItHappened: 'Cooktop lacks exposed fire.',
        whatToDoNow: 'Cook the wet side on the skillet for 1 minute, then flip the naan with tongs directly under a preheated oven broiler for 60 seconds to blister.',
        howToPrevent: 'Use the oven broiler method on electric cooktops.'
      }
    ],
    substitutions: [
      { original: 'All-purpose flour (Maida)', substitute: '50% Whole wheat flour (Atta) + 50% Maida', notes: 'Produces slightly denser naan with nuttier flavor.' },
      { original: 'Yogurt', substitute: 'Buttermilk or milk with 1/2 tsp vinegar', notes: 'Maintains required acidity for dough softness.' }
    ],
    safetyNotes: [
      'Use a sturdy oven mitt when handling a heavy cast-iron skillet over an open flame.',
      'Ensure grease is wiped from the outside of the skillet before inverting over open fire.'
    ],
    servingGuide: {
      restingTime: '1 minute wrapped in a clean cloth.',
      garnishing: 'Brush with garlic butter and scatter freshly chopped coriander.',
      plating: 'Stack inside a cloth-lined wicker bread basket to keep warm.',
      temperature: 'Serve hot off the tawa.',
      accompaniments: 'Butter Chicken, Dal Makhani, Rogan Josh, or Chole.'
    }
  },

  // 4. ROTI (PHULKA)
  {
    id: 'roti',
    name: 'Phulka (Whole Wheat Indian Roti)',
    cuisine: 'Indian',
    region: 'North Indian / Pan-Indian',
    servings: 4,
    prepTime: 15,
    cookTime: 15,
    difficulty: 'Easy',
    overview: {
      summary: 'Everyday Indian staple flatbread made exclusively from 100% stoneground whole wheat flour (chakki atta) and water. Kneaded soft, rolled paper-thin, seared lightly on a hot iron tawa, and placed directly over an open flame where steam expands inside, inflating it into a spherical balloon.',
      appearance: 'Pristine round flatbread speckled with delicate golden-tan spots, puffed completely hollow like a globe, brushed with a film of pure desi ghee.',
      texture: 'Extremely soft, light as air, pliable, and paper-thin.',
      flavor: 'Nutty, sweet toasted wheat flavor enhanced by rich ghee.',
      restingTimeMinutes: 1
    },
    equipment: [
      { name: 'Iron tawa or flat skillet', purpose: 'Conducts rapid heat for the preliminary sear.' },
      { name: 'Rolling pin (belan) and rolling board (chakla)', purpose: 'For rolling thin, even roundels.' },
      { name: 'Roti tongs (chimta)', purpose: 'Safely transfers roti from tawa to direct flame and turns it.' }
    ],
    beforeYouStart: [
      { task: 'Sift 250g chakki atta into a wide shallow mixing bowl (parat).', durationMinutes: 3 },
      { task: 'Warm 160ml water to lukewarm (approx 40°C) for kneading.', durationMinutes: 2 }
    ],
    ingredientPrepGuide: [
      { item: 'Chakki Atta', technique: 'Use Indian 100% whole wheat stoneground flour. Western whole wheat is milled differently and lacks the fine elasticity needed for phulkas.' },
      { item: 'Kneading', technique: 'Add lukewarm water gradually. Punch dough with wet knuckles for 5–7 minutes until exceptionally soft, supple, and non-sticky. Rest covered for 20 minutes to allow gluten relaxation.' }
    ],
    essentialIngredients: [
      { name: 'Chakki Atta (stoneground whole wheat flour)', prep: 'sifted', amount: '250g', metric: '250g', imperial: '8.8 oz', common: '2 cups' },
      { name: 'Lukewarm water', prep: 'divided', amount: '160ml', metric: '160ml', imperial: '5.4 fl oz', common: '2/3 cup' },
      { name: 'Fine sea salt', prep: 'optional', amount: '1/2 tsp', metric: '3g', imperial: '0.1 oz', common: '1/2 tsp' },
      { name: 'Desi Ghee', prep: 'warm melted for brushing', amount: '2 tbsp', metric: '30g', imperial: '1 oz', common: '2 tbsp' }
    ],
    optionalIngredients: [
      { name: 'Vegetable oil', prep: '1/2 tsp to coat dough while resting', amount: '1/2 tsp', metric: '2.5ml', imperial: '0.08 fl oz', common: '1/2 tsp', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'KNEAD SOFT DOUGH & REST',
        whatYouNeed: ['250g chakki atta', '160ml warm water', '1/2 tsp salt'],
        description: 'In a wide bowl, combine flour and salt. Gradually pour in warm water, bringing the flour together into a shaggy mass. Knead with the heel of your palms and punched knuckles for 5–7 minutes until soft, pliable, and smooth. Dab surface with a drop of water or oil, cover with a damp cloth, and rest for 20 minutes.',
        howToDoIt: 'Warm water hydrates the wheat starches rapidly. Resting relaxes the gluten mesh so the rolled roti expands freely without resistance.',
        heat: 'Off',
        heatDescription: 'Room temperature resting.',
        duration: 25,
        visualCues: 'Dough turns from rough and shaggy into a satin-smooth, soft ball.',
        hear: 'None',
        smell: 'Earthy, sweet whole wheat.',
        textureCheck: 'Soft as an earlobe; if you press with a finger, it leaves a soft indentation without sticking.',
        whatShouldThisLookLike: 'Smooth, supple ball of dough under a damp cloth.',
        tip: 'The secret to soft rotis is a soft, moist dough. If the dough is stiff, the rotis will turn out like dry cardboard.',
        commonMistake: 'Rushing the 20-minute rest — unstretched gluten will cause rotis to tear and fail to puff.',
        moveOnWhen: 'Dough has rested for 20 minutes.',
        quickInstructions: 'Knead flour and warm water for 6 mins until very soft. Rest covered 20 min.'
      },
      {
        step: 2,
        title: 'DIVIDE & ROLL UNIFORM ROUNDELS',
        whatYouNeed: ['Rested dough', 'Rolling pin (belan)', 'Extra atta for dusting'],
        description: 'Pinch off a small golf-ball sized portion of dough (approx 35g). Roll between palms into a crack-free sphere, then flatten into a small disc. Lightly dip in dry flour. Place on rolling board and roll with gentle, even pressure, turning the dough slightly with each roll to create a smooth, circular 15cm (6 inch) roundel of uniform thickness.',
        howToDoIt: 'Apply pressure evenly along edges rather than the center. Uniform thickness is essential; if one edge is thick, steam cannot push past it to inflate the roti.',
        heat: 'Off',
        heatDescription: 'Rolling surface.',
        duration: 5,
        visualCues: 'Circular, smooth flat disc with no thick edges or tears.',
        hear: 'None',
        smell: 'Fresh wheat.',
        textureCheck: 'Thin, supple, even sheet (approx 1.5mm thick).',
        whatShouldThisLookLike: 'A neat 15cm circle of even thickness.',
        tip: 'Shake off excess dry dusting flour before placing on the hot pan to avoid bitter burnt flour residue.',
        commonMistake: 'Rolling with heavy downward pressure in the center, causing the center to become paper-thin while edges stay thick.',
        moveOnWhen: 'Roti is rolled thin and round.',
        quickInstructions: 'Roll 35g dough ball into smooth 15cm roundel of even 1.5mm thickness.'
      },
      {
        step: 3,
        title: 'PRELIMINARY TAWA SEAR',
        whatYouNeed: ['Rolled roti', 'Iron tawa on Medium-High heat'],
        description: 'Heat iron tawa until hot. Gently lay the roti flat on the tawa. Cook for 20–25 seconds until tiny pale bubbles appear on the surface. Flip with tongs and cook the second side for 30–40 seconds until light brown freckles develop.',
        howToDoIt: 'The brief first side sear creates a thin seal. The longer second side sear cooks the wheat starches and traps internal steam between the two layers.',
        heat: 'Medium-High Heat',
        heatDescription: 'Dry hot tawa; no oil.',
        duration: 1,
        visualCues: 'Tiny bubbles rise on top within 20 seconds; second side shows small brown dots.',
        hear: 'Soft whisper of steam.',
        smell: 'Toasty wheat aroma.',
        textureCheck: 'Surfaces feel dry and lightly set.',
        whatShouldThisLookLike: 'Pale disc with small air pockets on one side and light freckles on the other.',
        tip: 'Never press hard with a spatula on the tawa; it squashes the nascent steam layer.',
        commonMistake: 'Over-cooking the first side — if it cooks too long, it loses flexibility and will not puff.',
        moveOnWhen: 'Second side shows distinct golden speckles.',
        quickInstructions: 'Cook side 1 for 20s until tiny bubbles appear; flip and cook side 2 for 35s.'
      },
      {
        step: 4,
        title: 'DIRECT FLAME PUFF & GHEE APPLICATION',
        whatYouNeed: ['Sear-marked roti', 'Chimta (tongs)', 'Direct open gas flame', 'Warm desi ghee'],
        description: 'Using tongs, immediately transfer the roti from the tawa directly onto the open gas flame with side 1 facing down. Within 2–3 seconds, trapped steam will violently expand, inflating the entire roti into a round sphere like a ball. Flip for 1 second on flame, remove immediately to a plate, and lightly smear the puffed top with 1/2 tsp desi ghee.',
        howToDoIt: 'Direct intense flame vaporizes the moisture between the two sealed cooked surfaces into steam, instantly ballooning the hollow interior.',
        heat: 'Medium-High Open Flame',
        heatDescription: 'Direct burner flame.',
        duration: 1,
        visualCues: 'Roti balloons into a complete, taut sphere in 3 seconds.',
        hear: 'Gentle hiss of steam escaping.',
        smell: 'Intense roasted wheat and nutty ghee.',
        textureCheck: 'Hollow, pillow-soft, feather-light.',
        whatShouldThisLookLike: 'Puffed spherical globe, deflating gently once smeared with golden ghee.',
        tip: 'If using an electric stove, press gently around the edges on the tawa with a folded clean cloth to encourage puffing without an open flame.',
        commonMistake: 'Leaving on flame for more than 4 seconds — it will scorch and turn crisp like a cracker.',
        moveOnWhen: 'Roti puffs completely into a sphere; transfer to plate and smear with ghee.',
        quickInstructions: 'Place directly on open flame for 3s until it inflates into a balloon; flip 1s, plate, and brush with ghee.'
      }
    ],
    commonMistakes: [
      { mistake: 'Roti came out hard like a papad.', remedy: 'The dough was kneaded too stiff or cooked too long on low heat. Knead very soft and cook quickly over high heat.' },
      { mistake: 'Roti did not puff.', remedy: 'There was a tiny tear on the surface where steam escaped, or the edges were rolled unevenly.' }
    ],
    troubleshooting: [
      {
        problem: 'Rotis turn stiff as they cool down',
        whatHappened: 'Moisture evaporated from the flatbread.',
        whyItHappened: 'Stored in the open air without insulation.',
        whatToDoNow: 'Wrap immediately inside a 100% cotton kitchen napkin and place inside a covered insulated casserole container.',
        howToPrevent: 'Always stack hot rotis inside a cloth-lined bread box or roti dabba.'
      }
    ],
    substitutions: [
      { original: 'Desi Ghee', substitute: 'Vegan butter or olive oil', notes: 'Keeps rotis soft for vegan diets.' }
    ],
    safetyNotes: [
      'Always use proper metal chimta (tongs) when moving flatbreads over an open gas flame to prevent finger burns.'
    ],
    servingGuide: {
      restingTime: 'Stack immediately inside a cloth-lined roti dabba.',
      garnishing: 'Brush with warm desi ghee.',
      plating: 'Serve hot directly to plates from the tawa.',
      temperature: 'Piping hot.',
      accompaniments: 'Any North Indian curry, dal, sabzi, or raita.'
    }
  },

  // 5. PARATHA (PLAIN LACCHA PARATHA)
  {
    id: 'paratha',
    name: 'Laccha Paratha (Layered Flaky Flatbread)',
    cuisine: 'Indian',
    region: 'North Indian (Punjab)',
    servings: 4,
    prepTime: 20,
    cookTime: 20,
    difficulty: 'Medium',
    overview: {
      summary: 'Multi-layered flaky, crispy Punjabi flatbread made by pleating ghee-laminated dough into tight spirals, rolling gently, and pan-roasting on an iron tawa with generous desi ghee until crispy, layered, and golden.',
      appearance: 'Circular golden-brown flatbread with concentric circular crispy rings and flaky layers visible throughout.',
      texture: 'Crispy and crunchy on the exterior, tender, flaky, and buttery inside.',
      flavor: 'Deeply toasted, nutty wheat richness with luxurious clarified butter flavor.',
      restingTimeMinutes: 2
    },
    equipment: [
      { name: 'Heavy iron tawa or cast iron skillet', purpose: 'Maintains even heat to crisp layers without scorching.' },
      { name: 'Rolling pin (belan)', purpose: 'To roll dough and flatten pleated spirals.' },
      { name: 'Flat metal spatula', purpose: 'For pressing edges onto the hot pan to ensure even browning.' }
    ],
    beforeYouStart: [
      { task: 'Melt 60g pure desi ghee for lamination and pan-roasting.', durationMinutes: 3 },
      { task: 'Mix 200g chakki atta with 100g all-purpose flour for optimal flaky texture.', durationMinutes: 2 }
    ],
    ingredientPrepGuide: [
      { item: 'Pleating Technique', technique: 'Roll dough thin into a 22cm circle. Brush with ghee and dust with dry flour. Fold like an accordion paper fan into a ribbon, stretch gently, and roll into a tight concentric spiral pinwheel. Tuck tail underneath and rest 5 minutes.' }
    ],
    essentialIngredients: [
      { name: 'Chakki Atta (whole wheat flour)', prep: 'sifted', amount: '200g', metric: '200g', imperial: '7 oz', common: '1.5 cups' },
      { name: 'All-purpose flour (Maida)', prep: 'for crispness', amount: '100g', metric: '100g', imperial: '3.5 oz', common: '3/4 cup' },
      { name: 'Lukewarm water', prep: 'for kneading', amount: '180ml', metric: '180ml', imperial: '6 fl oz', common: '3/4 cup' },
      { name: 'Desi Ghee', prep: 'melted (divided)', amount: '60g', metric: '60g', imperial: '2.1 oz', common: '4 tbsp' },
      { name: 'Fine sea salt', prep: 'for dough', amount: '1 tsp', metric: '6g', imperial: '0.2 oz', common: '1 tsp' },
      { name: 'Ajwain (carom seeds)', prep: 'crushed between palms', amount: '1/2 tsp', metric: '1.5g', imperial: '0.05 oz', common: '1/2 tsp' }
    ],
    optionalIngredients: [
      { name: 'Kasuri methi', prep: 'crushed over dough before rolling', amount: '1 tbsp', metric: '3g', imperial: '0.1 oz', common: '1 tbsp', optional: true }
    ],
    steps: [
      {
        step: 1,
        title: 'KNEAD & REST THE DOUGH',
        whatYouNeed: ['200g atta', '100g maida', '1 tsp salt', '1/2 tsp ajwain', '180ml warm water', '1 tbsp melted ghee'],
        description: 'Combine flours, salt, ajwain, and 1 tbsp ghee in a bowl. Slowly incorporate warm water and knead for 6–8 minutes into a smooth, semi-soft dough. Rest covered with a damp cloth for 20 minutes.',
        howToDoIt: 'Resting allows the starches to hydrate fully and relaxes gluten so layers can be stretched paper-thin without breaking.',
        heat: 'Off',
        heatDescription: 'Counter resting.',
        duration: 25,
        visualCues: 'Smooth, supple dough ball with no dryness.',
        hear: 'None',
        smell: 'Nutty wheat and herbal carom seed.',
        textureCheck: 'Soft, pliable, slightly firm dough.',
        whatShouldThisLookLike: 'Smooth dough ball resting under a damp towel.',
        tip: 'Adding 1 tbsp of warm ghee during kneading creates a tender crumb (moin).',
        commonMistake: 'Making the dough too wet, which makes the pleating process sticky and messy.',
        moveOnWhen: 'Dough has rested 20 minutes.',
        quickInstructions: 'Knead flours, ajwain, salt, ghee, and water for 7 mins; rest covered 20 min.'
      },
      {
        step: 2,
        title: 'LAMINATE & ACCORDION PLEAT',
        whatYouNeed: ['Rested dough', 'Melted ghee', 'Dry flour for dusting', 'Optional kasuri methi'],
        description: 'Divide dough into 4 equal balls. Roll one ball out into a thin 22cm circle. Brush 1 tsp melted ghee across the surface, sprinkle with a pinch of dry flour and crushed kasuri methi. Starting from one edge, fold the dough forward and backward like an accordion paper fan into a 1.5cm wide pleated strip. Stretch the strip gently lengthwise, then coil it into a tight spiral like a snail shell. Tuck the end underneath and rest 5 minutes.',
        howToDoIt: 'The dusting of dry flour between ghee layers creates micro-barriers that prevent the layers from fusing together during cooking.',
        heat: 'Off',
        heatDescription: 'Lamination station.',
        duration: 8,
        visualCues: 'A neat concentric spiral disc displaying dozens of visible layered ridges.',
        hear: 'None',
        smell: 'Rich ghee and fenugreek.',
        textureCheck: 'Layered spiral disc.',
        whatShouldThisLookLike: 'Tightly coiled dough spiral showing distinct concentric rings.',
        tip: 'Resting the spiral for 5 minutes prevents the layers from tearing when rolled.',
        commonMistake: 'Pressing down too aggressively when rolling, which squashes the delicate layers together into one solid sheet.',
        moveOnWhen: 'All 4 dough balls are pleated and coiled into spirals.',
        quickInstructions: 'Roll thin, brush ghee, dust flour; fold into accordion pleats, coil into a spiral, rest 5 mins.'
      },
      {
        step: 3,
        title: 'GENTLE ROLLING',
        whatYouNeed: ['Pleated spiral disc', 'Rolling pin', 'Light dusting flour'],
        description: 'Dust the coiled disc lightly with flour. Roll out gently with light, uniform pressure into an 18cm (7 inch) circle about 3.5mm thick. Do not roll too thin.',
        howToDoIt: 'Gentle pressure preserves the lamination boundaries so they puff into individual crisp layers on the pan.',
        heat: 'Off',
        heatDescription: 'Rolling board.',
        duration: 2,
        visualCues: 'Concentric rings visible on the rolled disc.',
        hear: 'None',
        smell: 'Fresh dough and ghee.',
        textureCheck: 'Semi-thick disc (3.5mm) with visible rings.',
        whatShouldThisLookLike: 'Even 18cm round flatbread with visible circular ring patterns.',
        tip: 'Keep the rolling pin floured to avoid catching and dragging the layers.',
        commonMistake: 'Rolling vigorously to paper-thinness like a roti, destroying the flaky crumb.',
        moveOnWhen: 'Paratha is gently rolled to 18cm diameter.',
        quickInstructions: 'Roll coiled disc gently into 18cm circle with 3.5mm thickness.'
      },
      {
        step: 4,
        title: 'PAN-ROASTING WITH DESI GHEE',
        whatYouNeed: ['Rolled paratha', 'Iron tawa over Medium heat', '2 tbsp melted ghee', 'Metal spatula'],
        description: 'Place the paratha on a preheated medium-hot tawa. Cook dry for 40 seconds until light bubbles appear. Flip over. Brush 1 tsp melted ghee over the cooked top. Flip again after 45 seconds and apply 1 tsp ghee to the second side. Press the edges gently with a spatula, rotating frequently, until both sides are deep golden-brown, blistered, and crispy.',
        howToDoIt: 'Frying in ghee on medium heat crisps the outer layers while steam inside separates the accordion pleats into hundreds of flaky leaves.',
        heat: 'Medium Heat',
        heatDescription: 'Steady sizzle without smoking ghee.',
        duration: 3,
        visualCues: 'Concentric rings puff and separate; golden-amber speckled crust develops.',
        hear: 'Lively, crisp sizzling as ghee fries the surface.',
        smell: 'Irresistible toasted ghee aroma.',
        textureCheck: 'Crispy and flaky on the surface with visible separated leaves.',
        whatShouldThisLookLike: 'Deep golden-brown flatbread with crisp concentric rings.',
        tip: 'Use moderate heat; high heat burns the surface before inner layers crisp up.',
        commonMistake: 'Using oil instead of ghee — ghee provides the authentic crispness and quintessential aroma.',
        moveOnWhen: 'Both sides are crispy, golden-brown, and edges are cooked through.',
        quickInstructions: 'Cook on medium tawa 40s per side; brush generously with ghee, press edges, and fry until golden-crisp.'
      },
      {
        step: 5,
        title: 'THE CHEF CLAP (RELEASING LAYERS)',
        whatYouNeed: ['Freshly cooked hot paratha', 'Clean kitchen cloth'],
        description: 'Transfer the hot paratha from the tawa to a cutting board. Immediately cup it between your two hands (using a clean folded kitchen cloth to protect your palms) and sharply clap the edges toward the center twice.',
        howToDoIt: 'The sudden impact shatters the brittle crust along the accordion folds, instantly revealing hundreds of separated, flaky, feathery layers.',
        heat: 'Off',
        heatDescription: 'Finishing technique.',
        duration: 1,
        visualCues: 'Paratha blooms open, revealing dozens of delicate, flaky concentric rings.',
        hear: 'Crunch of crisp layers cracking open.',
        smell: 'Intense roasted butter aroma.',
        textureCheck: 'Feathery, layered, and flaky.',
        whatShouldThisLookLike: 'Puffed, flaky paratha with visibly separated leaves and crisp edges.',
        tip: 'Do this while the paratha is piping hot off the pan; once it cools, it becomes pliable and will not shatter into layers.',
        commonMistake: 'Clapping with bare hands — paratha contains hot steam; always use a kitchen cloth.',
        moveOnWhen: 'Layers have bloomed open.',
        quickInstructions: 'Clap hot paratha between hands with a towel to release the flaky layers.'
      }
    ],
    commonMistakes: [
      { mistake: 'Paratha is dense and doughy inside.', remedy: 'The tawa heat was too high, burning the exterior before inner layers cooked through, or it was rolled too thick.' },
      { mistake: 'Layers fused together.', remedy: 'You forgot to dust dry flour over the ghee layer during pleating, causing the folds to melt into one another.' }
    ],
    troubleshooting: [
      {
        problem: 'Paratha turned hard and rubbery',
        whatHappened: 'Cooked on too low heat for too long, drying out all internal moisture.',
        whyItHappened: 'Low pan temperature baked out water instead of frying rapidly in ghee.',
        whatToDoNow: 'Brush with extra hot ghee and cover with a towel for 2 minutes to soften.',
        howToPrevent: 'Keep the pan at true medium heat so each side cooks and crisps within 60–90 seconds.'
      }
    ],
    substitutions: [
      { original: 'Desi Ghee', substitute: 'Neutral oil or vegan butter', notes: 'Oil creates a crispy exterior but lacks the rich aroma of ghee.' }
    ],
    safetyNotes: [
      'Use a kitchen towel when clapping hot parathas to prevent steam burns to the palms.'
    ],
    servingGuide: {
      restingTime: '1 minute.',
      garnishing: 'Top with a pat of white butter (makhan).',
      plating: 'Serve on a round plate alongside curries and pickle.',
      temperature: 'Piping hot off the tawa.',
      accompaniments: 'Dal Makhani, Butter Chicken, mixed mango pickle (achar), and thick creamy curd.'
    }
  }
];
