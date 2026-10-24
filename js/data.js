/**
 * SENJA Café & Kitchen — Central Data Store
 * Brand: SENJA Café & Kitchen
 * Tagline: "Good food. Good company. Every hour."
 * Note: Fictional all-day café concept created for freelance web design portfolio.
 */

const SITE_DATA = {
  config: {
    brandName: "SENJA",
    subBrand: "Café & Kitchen • Bandung",
    tagline: "Good food. Good company. Every hour.",
    description: "An all-day culinary sanctuary on Jalan Riau, Bandung. Single-origin Indonesian roasts, wood-fired wild yeast sourdough, and seasonal plates crafted in quiet warmth.",
    conceptNotice: "© 2025 SENJA Café & Kitchen. Fictional Concept Project created for web design portfolio demonstration in Bandung, West Java.",
    address: {
      street: "Jl. Riau (LLRE Martadinata) No. 84",
      subdistrict: "Citarum, Bandung Wetan",
      city: "Bandung",
      postal: "40115",
      province: "Jawa Barat",
      fullText: "Jl. Riau (LLRE Martadinata) No. 84, Citarum, Bandung 40115, West Java",
      landmark: "Next to Citarum historic shaded park, 5 minutes from Gedung Sate",
      mapsQuery: "Jl.+LLRE+Martadinata+No.84+Citarum+Bandung"
    },
    hours: {
      weekdays: "Monday – Thursday: 07:00 AM – 21:00 PM",
      weekends: "Friday – Sunday: 07:00 AM – 22:00 PM",
      hearthKitchen: "Wood-fired hearth closes nightly at 21:15 PM"
    },
    contact: {
      phone: "+62 (022) 423-9800",
      whatsapp: "+62 812-4239-8000",
      email: "hello@senjabandung.concept",
      instagram: "https://instagram.com",
      instagramHandle: "@senja.bandung"
    }
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Our Story", href: "/our-story" },
    { label: "What's On", href: "/whats-on" },
    { label: "Gallery", href: "/gallery" },
    { label: "Visit Us", href: "/visit" }
  ],

  menuCategories: [
    { id: "all", label: "All Items" },
    { id: "coffee-espresso", label: "Coffee & Espresso" },
    { id: "brunch-breakfast", label: "Brunch & Breakfast" },
    { id: "plates-sandwiches", label: "Plates & Sandwiches" },
    { id: "sweets-pastries", label: "Sweets & Pastries" },
    { id: "non-coffee", label: "Non-Coffee" }
  ],

  menuItems: [
    // Coffee & Espresso
    {
      id: "toraja-sapan",
      title: "Toraja Sapan Honey Filter",
      category: "coffee-espresso",
      tag: "Single Origin",
      tagType: "charcoal",
      price: 38000,
      description: "Notes of wild mountain honey, ripe peach blossom, and bright bergamot finish. Hand-poured using ceramic Kalita Wave with Indonesian single-origin beans roasted weekly in-house."
    },
    {
      id: "bandung-espresso",
      title: "Bandung Priangan Double Espresso",
      category: "coffee-espresso",
      tag: "House Roast",
      tagType: "charcoal",
      price: 28000,
      description: "Extracted on our custom lever machine. High-grown West Java Arabica presenting rich dark chocolate notes, toasted almond aroma, and velvety golden crema."
    },
    {
      id: "senja-flat-white",
      title: "Senja Ceramic Flat White",
      category: "coffee-espresso",
      tag: "Dairy / Oat Option",
      tagType: "charcoal",
      price: 36000,
      description: "Double ristretto poured with silky microfoam in a hand-thrown speckled terracotta cup. Clean, sweet finish."
    },
    {
      id: "cold-brew-nitro",
      title: "Nitro Cold Brew Float",
      category: "coffee-espresso",
      tag: "18h Steep",
      tagType: "charcoal",
      price: 44000,
      description: "18-hour cold-steeped Pangalengan beans charged with nitrogen for a creamy, stout-like texture, topped with fresh cold milk foam."
    },
    {
      id: "gayo-anaerobic",
      title: "Gayo Anaerobic Natural Filter",
      category: "coffee-espresso",
      tag: "Micro-Lot",
      tagType: "charcoal",
      price: 42000,
      description: "Fermented whole-cherry in sealed tanks. Explosive wild strawberry, cacao nibs, and winey acidity. V60 slow extraction."
    },

    // Brunch & Breakfast
    {
      id: "avocado-tartine",
      title: "Avocado Dukkah Tartine & Poached Egg",
      category: "brunch-breakfast",
      tag: "Vegetarian",
      tagType: "terracotta",
      price: 62000,
      description: "Stoneground 36-hour wild sourdough toast, crushed ripe Lembang avocado, soft-poached pasture egg, house toasted Egyptian dukkah seed spice, and mountain microgreens."
    },
    {
      id: "coconut-chia-bowl",
      title: "Coconut Chia & Passionfruit Bowl",
      category: "brunch-breakfast",
      tag: "Plant-Based",
      tagType: "sage",
      price: 54000,
      description: "Overnight chia seeds steeped in rich coconut milk, fresh Cisarua passionfruit puree, sweet Bandung mango dice, toasted pumpkin seeds, and edible garden pansies."
    },
    {
      id: "wild-mushroom-toast",
      title: "Wild Mushroom & Herbed Ricotta Toast",
      category: "brunch-breakfast",
      tag: "Vegetarian",
      tagType: "sage",
      price: 58000,
      description: "Pan-roasted king oyster and shimeji mushrooms, fresh house lemon ricotta, garlic thyme butter, and cracked black pepper on thick hearth sourdough."
    },
    {
      id: "citarum-morning-granola",
      title: "Citarum Morning Spiced Granola",
      category: "brunch-breakfast",
      tag: "Vegetarian",
      tagType: "butter",
      price: 48000,
      description: "Jumbo rolled oats baked with mountain honey, cinnamon, dried jackfruit, and pumpkin seeds. Served with chilled Greek yogurt or house almond milk."
    },

    // Plates & Sandwiches
    {
      id: "smoked-brisket-toastie",
      title: "Smoked Brisket & Sambal Matah Toastie",
      category: "plates-sandwiches",
      tag: "Hearth Grilled",
      tagType: "terracotta",
      price: 68000,
      description: "14-hour smoked beef brisket, fragrant hand-sliced shallot and lemongrass sambal matah, melted raclette cheese on thick wood-fired hearth bread."
    },
    {
      id: "whipped-feta-tartine",
      title: "Whipped Feta & Blistered Tomato Tartine",
      category: "plates-sandwiches",
      tag: "Vegetarian",
      tagType: "sage",
      price: 56000,
      description: "Creamy whipped sheep feta, slow-blistered sweet cherry tomatoes, cold-pressed basil oil, and aged balsamic reduction on toasted sourdough."
    },
    {
      id: "hearth-roast-chicken",
      title: "Hearth Roast Chicken & Herb Baguette",
      category: "plates-sandwiches",
      tag: "House Made",
      tagType: "terracotta",
      price: 64000,
      description: "Free-range chicken breast roasted with rosemary, pickled shallots, peppery wild arugula, and roasted garlic aioli on crispy hearth baguette."
    },
    {
      id: "tempeh-crisp-tartine",
      title: "Sundanese Artisan Tempeh & Kemangi Toast",
      category: "plates-sandwiches",
      tag: "Plant-Based",
      tagType: "sage",
      price: 48000,
      description: "Marinated non-GMO artisan tempeh crumbles, fragrant lemon basil (kemangi) pesto, chili ribbons, and toasted sesame on hearth-baked bread."
    },

    // Sweets & Pastries
    {
      id: "pandan-kaya-brioche",
      title: "Pandan Kaya Brioche Toast",
      category: "sweets-pastries",
      tag: "House Classic",
      tagType: "butter",
      price: 42000,
      description: "Slow-simmered suji and pandan leaf coconut custard, cold cultured French butter slab, and flaky Bali sea salt on warm wood-fired hearth brioche."
    },
    {
      id: "earl-grey-basque",
      title: "Earl Grey & Vanilla Basque Cake",
      category: "sweets-pastries",
      tag: "Fresh Bake",
      tagType: "charcoal",
      price: 48000,
      description: "Infused with whole-leaf bergamot black tea and Indonesian Bourbon vanilla beans, caramelized hearth crust with a soft, silky molten center."
    },
    {
      id: "pandan-craquelin-choux",
      title: "Pandan Craquelin Choux (Fresh Drop)",
      category: "sweets-pastries",
      tag: "Daily 14:00 Drop",
      tagType: "terracotta",
      price: 32000,
      description: "Crispy craquelin French choux puff filled with whipped coconut-pandan diplomat cream and a molten salted palm sugar core."
    },
    {
      id: "almond-pain-chocolat",
      title: "Double Baked Almond Pain au Chocolat",
      category: "sweets-pastries",
      tag: "Bakery Hearth",
      tagType: "butter",
      price: 36000,
      description: "Flaky butter laminate pastry with Belgian dark chocolate batons, filled and crowned with roasted almond frangipane cream."
    },

    // Non-Coffee
    {
      id: "cascara-spritz",
      title: "Sunlit Cascara & Hibiscus Spritzer",
      category: "non-coffee",
      tag: "Plant-Based",
      tagType: "sage",
      price: 36000,
      description: "Brewed dried coffee cherry tea (Pangalengan estate), cold-steeped Roselle hibiscus, fresh calamansi citrus, and sparkling mountain spring water."
    },
    {
      id: "uji-matcha-latte",
      title: "Stoneground Uji Matcha Latte",
      category: "non-coffee",
      tag: "Dairy / Oat Option",
      tagType: "sage",
      price: 42000,
      description: "First-harvest ceremonial grade Japanese green tea whisked with silky steamed milk and a subtle touch of organic raw honey."
    },
    {
      id: "lemongrass-ginger-tisane",
      title: "Highland Lemongrass & Ginger Tisane",
      category: "non-coffee",
      tag: "Herbal Infusion",
      tagType: "butter",
      price: 32000,
      description: "Fresh bruised lemongrass stalks, charred Jahe Merah ginger, aromatic pandan leaf, and organic rock sugar. Served hot in vintage glass beaker."
    },
    {
      id: "bandung-green-cooler",
      title: "Cold-Pressed Bandung Green Cooler",
      category: "non-coffee",
      tag: "Raw Cold-Pressed",
      tagType: "sage",
      price: 38000,
      description: "Crisp local mountain cucumber, green granny smith apple, celery, mint, and fresh lime juice pressed cold to order. No added sugar."
    }
  ],

  events: [
    {
      id: "sunday-slow-brunch",
      title: "Sunday Slow Brunch",
      schedule: "Every Sunday • 10:00 AM – 14:00 PM",
      badge: "Featured Concept Gathering",
      price: "Concept Tasting Set: Rp 145.000 / guest",
      location: "Courtyard Garden & Conservatory",
      image: "./images/brunch.jpg",
      isFeatured: true,
      category: "brunch",
      categoryLabel: "Weekend Brunch",
      description: "An extended Sunday morning centered on connection and calm. A progressive family-style spread of warm wild sourdough, seasonal fruit bowls, pasture egg tartines, and free-flowing single-origin filter coffee, soundtracked by soft acoustic bossa nova under courtyard tropical foliage.",
      details: "Includes 4 shared tasting plates, unlimited batch brew filter coffee, and reserved courtyard seating. Concept event for portfolio demonstration.",
      conceptNote: "Fictional recurring concept for portfolio showcase. Inquire at café for details."
    },
    {
      id: "coffee-conversations",
      title: "Coffee & Conversations",
      schedule: "First Saturday of the Month • 10:00 – 11:30 AM",
      badge: "Concept Community Session",
      price: "Free Community Session (Concept)",
      location: "Brew Bar Counter",
      image: "./images/coffee-table.jpg",
      isFeatured: false,
      category: "coffee",
      categoryLabel: "Coffee Sessions",
      description: "An informal morning cupping exploring the stories behind Indonesian smallholder roasts. Taste three distinct processing methods side-by-side, learn about Priangan highland micro-climates, and share quiet conversation over warm ceramic cups.",
      details: "Small-group demonstration tasting led by head barista. 8 conceptual seats at the brew bar.",
      conceptNote: "Fictional cupping session. Walk-in community model."
    },
    {
      id: "seasonal-table",
      title: "Seasonal Table: A Special Menu",
      schedule: "Quarterly Twilight Sessions • 17:30 – 21:00 PM",
      badge: "Concept Special Dinner",
      price: "Concept Set: Rp 185.000 / guest",
      location: "Wood-Fired Hearth Room",
      image: "./images/interior.jpg",
      isFeatured: false,
      category: "dinner",
      categoryLabel: "Special Dinners",
      description: "An intimate four-course twilight dining experience inspired by the transition of Bandung's golden hour. Wood-fired vegetables, hearth-smoked brisket, hand-simmered botanical reductions, and caramelized Basque bakes served at our communal teak table.",
      details: "4 courses paired with seasonal botanical zero-proof spritzers. Concept showcase for portfolio demonstration.",
      conceptNote: "Fictional seasonal menu dinner. Demonstration concept."
    }
  ],

  seasonalHighlights: [
    {
      id: "seasonal-spritz",
      title: "Sunlit Cascara & Hibiscus Spritzer",
      category: "Cold Botanical Brew",
      badge: "Limited Seasonal Batch",
      price: "Rp 36.000",
      image: "./images/coffee-table.jpg",
      description: "Sun-dried coffee cherry cascara from Pangalengan highland estates, slow-steeped cold with wild Roselle hibiscus, fresh calamansi citrus, and mountain sparkling water."
    },
    {
      id: "seasonal-toastie",
      title: "Smoked Brisket & Sambal Matah Toastie",
      category: "Hearth Kitchen",
      badge: "Seasonal Lunch Feature",
      price: "Rp 68.000",
      image: "./images/brunch.jpg",
      description: "14-hour applewood smoked beef brisket, hand-pounded fragrant shallot and lemongrass sambal matah, melted raclette cheese on thick wild sourdough."
    },
    {
      id: "seasonal-basque",
      title: "Earl Grey & Vanilla Basque Cake",
      category: "Afternoon Bakery Hearth",
      badge: "Daily 14:00 Drop",
      price: "Rp 48.000",
      image: "./images/interior.jpg",
      description: "Infused with whole-leaf bergamot black tea and Indonesian Bourbon vanilla beans, caramelized hearth crust with a soft molten center."
    }
  ],

  gallery: [
    {
      id: "g-pourover",
      title: "Single-Origin Kalita Pour-Over",
      category: "food-drinks",
      categoryLabel: "Food & Drinks",
      tag: "Coffee Craft",
      src: "./images/gallery-pourover.jpg",
      alt: "Barista pouring hot water over a ceramic Kalita Wave dripper on the reclaimed timber brew counter with morning steam",
      caption: "Single-origin West Java Arabica hand-extracted over ceramic Kalita Wave at our timber brew bar.",
      aspect: "4/3",
      span: "lg:col-span-2"
    },
    {
      id: "g-courtyard",
      title: "Gravel Courtyard Sanctuary",
      category: "the-space",
      categoryLabel: "The Space",
      tag: "Architecture",
      src: "./images/gallery-courtyard.jpg",
      alt: "Sunlit café courtyard garden with gravel path, lush monstera plants in terracotta pots, and weathered teak wood benches",
      caption: "Open-air gravel courtyard shaded by mature tropical foliage and warm limewash walls.",
      aspect: "4/3",
      span: "lg:col-span-1"
    },
    {
      id: "g-brunch",
      title: "Wild Sourdough Avocado Tartine",
      category: "food-drinks",
      categoryLabel: "Food & Drinks",
      tag: "Brunch Plate",
      src: "./images/brunch.jpg",
      alt: "Artisan sourdough avocado tartine with soft-poached pasture egg, garden microgreens, and Egyptian dukkah spice",
      caption: "36-hour fermented hearth sourdough, crushed Lembang avocado, and pasture-raised poached egg.",
      aspect: "4/3",
      span: "lg:col-span-1"
    },
    {
      id: "g-communal",
      title: "Shared Morning Conversations",
      category: "everyday-moments",
      categoryLabel: "Everyday Moments",
      tag: "Social Atmosphere",
      src: "./images/gallery-communal.jpg",
      alt: "Group of friends seated around a rustic teak communal table sharing coffee and brunch in natural light",
      caption: "Unhurried mornings and shared conversation around our long communal teak table.",
      aspect: "4/3",
      span: "lg:col-span-2"
    },
    {
      id: "g-pastry",
      title: "Hearth Bakes & Basque Molten Slice",
      category: "food-drinks",
      categoryLabel: "Food & Drinks",
      tag: "Oven Hearth",
      src: "./images/gallery-pastry.jpg",
      alt: "Flaky almond croissant, burnt Basque cheesecake slice, and thick toasted brioche with cultured butter on rustic stoneware",
      caption: "Fresh morning drops from our wood-fired oven: almond pastry, brioche, and vanilla Basque cake.",
      aspect: "4/3",
      span: "lg:col-span-1"
    },
    {
      id: "g-arch",
      title: "Limewash Conservatory Arch",
      category: "the-space",
      categoryLabel: "The Space",
      tag: "Interior Detail",
      src: "./images/gallery-arch.jpg",
      alt: "Curved limewash archway overlooking a bright sunlit conservatory with mid-century armchair and terracotta floor tiles",
      caption: "Curved limewash architectural archway opening onto the conservatory garden nook.",
      aspect: "4/3",
      span: "lg:col-span-1"
    },
    {
      id: "g-interior",
      title: "Terracotta Clay & Mid-Century Light",
      category: "the-space",
      categoryLabel: "The Space",
      tag: "Dining Room",
      src: "./images/interior.jpg",
      alt: "Contemporary tropical café interior with warm terracotta floor tiles, cream limewash walls, and potted monstera plants",
      caption: "Warm terracotta clay tiles and natural timber seating in the main dining room.",
      aspect: "4/3",
      span: "lg:col-span-1"
    },
    {
      id: "g-coffee-table",
      title: "Courtyard Sunbeams & Quiet Moments",
      category: "everyday-moments",
      categoryLabel: "Everyday Moments",
      tag: "Quiet Ritual",
      src: "./images/coffee-table.jpg",
      alt: "Terracotta ceramic coffee cup and flaky pastry bathed in warm morning courtyard sunlight on a rustic wooden table",
      caption: "A quiet corner table, a fresh flat white, and Bandung's cooling morning breeze.",
      aspect: "4/3",
      span: "lg:col-span-2"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_DATA;
}
