// Complete Adam Suvai Zone Menu & Three Combo Types

const COMBO_MENUS = [
  {
    id: "combo-veg-meals",
    type: "veg",
    typeLabel: "Type 01 • Veg Combo Menu",
    name: "Veg Meals Combo",
    price: 179,
    items: ["Steamed Rice", "Gobi 65", "Veg Salad", "Mushroom Thokku", "Veg Soup"]
  },
  {
    id: "combo-veg-fried-rice",
    type: "veg",
    typeLabel: "Type 01 • Veg Combo Menu",
    name: "Veg Fried Rice Combo",
    price: 229,
    items: ["Veg Fried Rice", "Mushroom Manchurian", "Paneer 65", "Veg Salad & Soup"]
  },
  {
    id: "combo-chicken-biryani",
    type: "nonveg",
    typeLabel: "Type 02 • Non-Veg Combo Menu",
    name: "Chicken Biryani Combo",
    price: 379,
    items: ["Chicken Biryani", "Chicken 65 (4 pcs)", "Soup of the Day"]
  },
  {
    id: "combo-mutton-biryani",
    type: "nonveg",
    typeLabel: "Type 02 • Non-Veg Combo Menu",
    name: "Mutton Biryani Combo",
    price: 429,
    items: ["Mutton Biryani", "Mutton Kola (2 pcs)", "Soup of the Day"]
  },
  {
    id: "combo-chicken-fried-rice",
    type: "nonveg",
    typeLabel: "Type 02 • Non-Veg Combo Menu",
    name: "Chicken Fried Rice Combo",
    price: 349,
    items: ["Chicken Fried Rice", "Chicken Manchurian", "Chicken Lollipop", "Soup of the Day"]
  },
  {
    id: "combo-chicken-meals",
    type: "nonveg",
    typeLabel: "Type 02 • Non-Veg Combo Menu",
    name: "Chicken Meals Combo",
    price: 209,
    items: ["Steamed Rice", "Chicken Curry", "Boiled Egg", "Rasam & Curd"]
  },
  {
    id: "combo-mutton-meals",
    type: "nonveg",
    typeLabel: "Type 02 • Non-Veg Combo Menu",
    name: "Mutton Meals Combo",
    price: 229,
    items: ["Steamed Rice", "Mutton Masala", "Boiled Egg", "Rasam & Curd"]
  },
  {
    id: "combo-fish-meals",
    type: "nonveg",
    typeLabel: "Type 02 • Non-Veg Combo Menu",
    name: "Fish Meals Combo",
    price: 219,
    items: ["Steamed Rice", "Fish Curry", "Boiled Egg", "Rasam & Curd"]
  },
  {
    id: "combo-parotta",
    type: "dinner",
    typeLabel: "Type 03 • Dinner Combo Menu",
    name: "Parotta Combo",
    price: 379,
    items: ["Parotta (2 pcs)", "Authentic Mutton Paya"]
  },
  {
    id: "combo-chapathy",
    type: "dinner",
    typeLabel: "Type 03 • Dinner Combo Menu",
    name: "Chapathy Combo",
    price: 379,
    items: ["Chapathy (2 pcs)", "Authentic Mutton Paya"]
  },
  {
    id: "combo-idly",
    type: "dinner",
    typeLabel: "Type 03 • Dinner Combo Menu",
    name: "Idly Combo",
    price: 379,
    items: ["Steamed Idly (3 pcs)", "Signature Adam Fish Curry"]
  },
  {
    id: "combo-kal-dosa",
    type: "dinner",
    typeLabel: "Type 03 • Dinner Combo Menu",
    name: "Kal Dosa Combo",
    price: 379,
    items: ["Kal Dosa (2 pcs)", "Signature Adam Fish Curry"]
  }
];

const RESTAURANT_MENU = [
  {
    category: "Soup",
    subtitle: "Warm, comforting broths prepared fresh to start your meal.",
    items: [
      { name: "Veg Clear Soup", price: 140, diet: "veg" },
      { name: "Veg Manchow Soup", price: 140, diet: "veg" },
      { name: "Sweet Corn Veg Soup", price: 140, diet: "veg" },
      { name: "Hot & Sour Veg Soup", price: 140, diet: "veg" },
      { name: "Chicken Clear Soup", price: 150, diet: "nonveg" },
      { name: "Chicken Manchow Soup", price: 150, diet: "nonveg" },
      { name: "Sweet Corn Chicken Soup", price: 150, diet: "nonveg" },
      { name: "Hot & Sour Chicken Soup", price: 150, diet: "nonveg" }
    ]
  },
  {
    category: "Starters",
    subtitle: "Crispy South Indian and Indo-Chinese appetizers.",
    items: [
      { name: "Dragon Gobi", price: 229, diet: "veg" },
      { name: "Gobi 65", price: 229, diet: "veg" },
      { name: "Paneer 65", price: 299, diet: "veg" },
      { name: "Mushroom 65", price: 279, diet: "veg" },
      { name: "Salt & Pepper Mushroom", price: 319, diet: "veg" },
      { name: "Chicken Lollipop", price: 329, diet: "nonveg" },
      { name: "Chinese Lollipop Sauce", price: 329, diet: "nonveg" },
      { name: "Dragon Chicken", price: 329, diet: "nonveg" },
      { name: "Chicken 65", price: 329, diet: "nonveg" },
      { name: "Chicken Chinthamani", price: 329, diet: "nonveg" },
      { name: "Mutton Pepper Fry", price: 379, diet: "nonveg" },
      { name: "Fish Finger", price: 379, diet: "nonveg" },
      { name: "Chicken Salt & Pepper Dry", price: 379, diet: "nonveg" },
      { name: "Prawn Golden Roast", price: 379, diet: "nonveg" },
      { name: "Vaadipatti Vanjiram Fry", price: 379, diet: "nonveg" }
    ]
  },
  {
    category: "Arabian Starters",
    subtitle: "Char-grilled specialties available in Quarter / Half / Full portions.",
    items: [
      { name: "Paneer Tikka (Full)", price: 329, diet: "veg" },
      { name: "Chicken Malai Tikka (Q: 199 | H: 329 | F: 349)", price: 349, diet: "nonveg" },
      { name: "Grilled Chicken (Q: 199 | H: 329 | F: 529)", price: 529, diet: "nonveg" },
      { name: "BBQ Chicken (Q: 199 | H: 329 | F: 529)", price: 529, diet: "nonveg" },
      { name: "Pepper BBQ (Q: 199 | H: 329 | F: 529)", price: 529, diet: "nonveg" },
      { name: "Alfaham Chicken (Q: 199 | H: 329 | F: 529)", price: 529, diet: "nonveg" },
      { name: "Tandoori Chicken (Full)", price: 529, diet: "nonveg" },
      { name: "Mixed Family Platter", price: 1999, diet: "nonveg", desc: "Grill Chicken, BBQ Chicken, Pepper BBQ, Alfaham Chicken & Tandoori Chicken Quarter." }
    ]
  },
  {
    category: "Veg Biryani Varieties",
    subtitle: "Even vegetarians deserve a royal biryani feast.",
    items: [
      { name: "Mixed Veg Biryani", price: 249, diet: "veg", desc: "A medley of fresh vegetables, herbs, and mild spices." },
      { name: "Bread Biryani", price: 249, diet: "veg", desc: "Fried bread cubes tossed in spicy masala rice—a crunchy twist." },
      { name: "Mushroom Biryani", price: 299, diet: "veg", desc: "Tender mushrooms cooked with biryani masala and layered in rice." },
      { name: "Paneer Tikka Biryani", price: 329, diet: "veg", desc: "Char-grilled paneer tikka cubes combined with spiced rice." }
    ]
  },
  {
    category: "Chicken Biryani Varieties",
    subtitle: "From street-style legends to global fusions.",
    items: [
      { name: "Chicken Biryani", price: 329, diet: "nonveg", desc: "Classic Chennai-style spicy chicken biryani with a nostalgic touch." },
      { name: "Chicken 65 Biryani", price: 329, diet: "nonveg", desc: "Deep-fried chicken 65 pieces layered with fiery biryani rice." },
      { name: "Chicken Leg Piece Biryani", price: 329, diet: "nonveg", desc: "Whole chicken leg slow-cooked in traditional masalas." },
      { name: "Chicken Wings Biryani", price: 329, diet: "nonveg", desc: "Marinated wings cooked into the biryani for finger-licking flavor." },
      { name: "Chicken Tikka Biryani", price: 349, diet: "nonveg", desc: "Tandoori tikka chunks in a smoky, aromatic rice base." },
      { name: "Chicken Thokku Biryani", price: 329, diet: "nonveg", desc: "Semi-dry chicken masala (thokku) mixed into spicy biryani." },
      { name: "BBQ Chicken Biryani", price: 349, diet: "nonveg", desc: "Char-grilled chicken with smoky BBQ spices in every bite." },
      { name: "Grill Chicken Biryani", price: 349, diet: "nonveg", desc: "Succulent grilled chicken pieces layered in fragrant dum-cooked biryani rice." },
      { name: "Mutta Mass Biryani", price: 249, diet: "nonveg", desc: "Crushed boiled eggs with spicy chicken bits—a must-try local favorite." },
      { name: "Egg Biryani", price: 249, diet: "egg", desc: "Classic egg biryani made with boiled eggs and subtle spices." }
    ]
  },
  {
    category: "Mutton Biryani Varieties",
    subtitle: "Authentic Seeraga Samba & premium cuts. True meat lover's paradise.",
    items: [
      { name: "Seeraga Samba Mutton Biryani", price: 389, diet: "nonveg", desc: "Traditional Chettinad-style biryani made with tender mutton and aromatic seeraga samba rice." },
      { name: "Mutton Brain Biryani", price: 389, diet: "nonveg", desc: "Creamy lamb brain cooked in rich spices and layered with flavorful rice." },
      { name: "Mutton Kola Biryani", price: 389, diet: "nonveg", desc: "Spicy, juicy mutton meatballs (kola urundai) nestled in fragrant biryani." },
      { name: "Mutton Nalli Biryani", price: 389, diet: "nonveg", desc: "Bone marrow biryani slow-cooked for a deep, gelatinous richness." },
      { name: "Mutton Chukka Biryani", price: 389, diet: "nonveg", desc: "Mutton meat cooked to perfection in traditional style." },
      { name: "Aatukal Paya Biryani", price: 389, diet: "nonveg", desc: "Goat leg bones (trotters) slow-simmered for intense flavor and tender meat." }
    ]
  },
  {
    category: "Seafood Biryani Varieties",
    subtitle: "The flavour of the coast — tangy, spicy, fresh.",
    items: [
      { name: "Fish Tikka Biryani", price: 389, diet: "nonveg", desc: "Grilled fish fillets marinated in tikka masala, folded into fragrant rice." },
      { name: "Spicy Coastal Fish Biryani", price: 389, diet: "nonveg", desc: "Traditional South Indian style fish biryani with curry leaves and tamarind." },
      { name: "Prawn Peri Peri Biryani", price: 389, diet: "nonveg", desc: "Portuguese-inspired peri peri prawns cooked in rich biryani layers." },
      { name: "Madras Prawn Masala Biryani", price: 389, diet: "nonveg", desc: "Succulent prawns tossed in spicy tomato-onion masala, layered with biryani rice." }
    ]
  },
  {
    category: "Indian Tiffins",
    subtitle: "Classic South Indian staples served hot.",
    items: [
      { name: "Idly (3 pcs)", price: 90, diet: "veg" },
      { name: "Chapathi (2 pcs)", price: 90, diet: "veg" },
      { name: "Sambar Idly", price: 139, diet: "veg" },
      { name: "Fried Podi Idly", price: 149, diet: "veg" },
      { name: "Chola Poori (1 pc) with Channa Masala", price: 159, diet: "veg" }
    ]
  },
  {
    category: "Semi Gravy",
    subtitle: "Rich roasted South Indian semi-dry delicacies.",
    items: [
      { name: "Chicken Pepper Fry", price: 309, diet: "nonveg" },
      { name: "Chicken Chettinadu", price: 379, diet: "nonveg" },
      { name: "Chicken Masala", price: 319, diet: "nonveg" },
      { name: "Chicken Pepper Masala", price: 379, diet: "nonveg" },
      { name: "Mutton Pepper Semi Gravy", price: 379, diet: "nonveg" },
      { name: "Mutton Sukka", price: 379, diet: "nonveg" },
      { name: "Mutton Chettinadu", price: 379, diet: "nonveg" },
      { name: "Prawn Fry", price: 389, diet: "nonveg" },
      { name: "Prawn Thokku", price: 389, diet: "nonveg" }
    ]
  },
  {
    category: "Indian Gravy",
    subtitle: "Aromatic curries and masalas crafted for rice, parotta, or chapathi.",
    items: [
      { name: "Dhal Fry", price: 179, diet: "veg" },
      { name: "Kadai Vegetables", price: 299, diet: "veg" },
      { name: "Paneer Butter Masala", price: 319, diet: "veg" },
      { name: "Kadai Paneer", price: 319, diet: "veg" },
      { name: "Egg Masala", price: 199, diet: "egg" },
      { name: "Egg Curry", price: 199, diet: "egg" },
      { name: "Chicken Curry", price: 309, diet: "nonveg" },
      { name: "Butter Chicken Masala", price: 319, diet: "nonveg" },
      { name: "Kadai Chicken", price: 319, diet: "nonveg" },
      { name: "Chicken Tikka Masala", price: 319, diet: "nonveg" },
      { name: "Mutton Masala", price: 389, diet: "nonveg" },
      { name: "Adam Fish Curry", price: 349, diet: "nonveg" },
      { name: "Prawn Masala", price: 389, diet: "nonveg" }
    ]
  },
  {
    category: "Chinese Gravy",
    subtitle: "Bold wok-tossed sauces and Oriental favorites.",
    items: [
      { name: "Chilli Paneer", price: 389, diet: "veg" },
      { name: "Chilli Gobi", price: 319, diet: "veg" },
      { name: "Chilli Mushroom", price: 279, diet: "veg" },
      { name: "Gobi Manchurian", price: 279, diet: "veg" },
      { name: "Mushroom Manchurian", price: 319, diet: "veg" },
      { name: "Chilli Egg", price: 229, diet: "egg" },
      { name: "Garlic Egg", price: 229, diet: "egg" },
      { name: "Egg Manchurian", price: 229, diet: "egg" },
      { name: "Chilli Chicken", price: 329, diet: "nonveg" },
      { name: "Garlic Chicken", price: 329, diet: "nonveg" },
      { name: "Schezwan Chicken", price: 329, diet: "nonveg" },
      { name: "Chicken Manchurian", price: 329, diet: "nonveg" },
      { name: "Chilli Fish", price: 349, diet: "nonveg" },
      { name: "Garlic Fish", price: 349, diet: "nonveg" },
      { name: "Fish Manchurian", price: 349, diet: "nonveg" },
      { name: "Chilli Prawn", price: 389, diet: "nonveg" },
      { name: "Garlic Prawn", price: 389, diet: "nonveg" },
      { name: "Prawn Manchurian", price: 389, diet: "nonveg" }
    ]
  },
  {
    category: "Choice of Omelette & Eggs",
    subtitle: "Chennai street-style egg specialties.",
    items: [
      { name: "Prawn Omelette", price: 139, diet: "nonveg" },
      { name: "Chicken Omelette", price: 119, diet: "nonveg" },
      { name: "Mutton Omelette", price: 129, diet: "nonveg" },
      { name: "Double Omelette", price: 80, diet: "egg" },
      { name: "Masala Kalaki", price: 65, diet: "egg" },
      { name: "Masala Omelette", price: 65, diet: "egg" },
      { name: "Single Omelette", price: 55, diet: "egg" },
      { name: "Full Boil", price: 55, diet: "egg" },
      { name: "Boiled Egg (2 pcs)", price: 55, diet: "egg" },
      { name: "Half Boil", price: 55, diet: "egg" },
      { name: "Podimas", price: 90, diet: "egg" }
    ]
  },
  {
    category: "Fried Rice",
    subtitle: "Fragrant wok-tossed basmati fried rice varieties.",
    items: [
      { name: "Veg Fried Rice", price: 219, diet: "veg" },
      { name: "Veg Schezwan Fried Rice", price: 239, diet: "veg" },
      { name: "Paneer Fried Rice", price: 299, diet: "veg" },
      { name: "Paneer Schezwan Fried Rice", price: 319, diet: "veg" },
      { name: "Mushroom Fried Rice", price: 289, diet: "veg" },
      { name: "Mushroom Schezwan Fried Rice", price: 309, diet: "veg" },
      { name: "Gobi Fried Rice", price: 289, diet: "veg" },
      { name: "Gobi Schezwan Fried Rice", price: 309, diet: "veg" },
      { name: "Egg Fried Rice", price: 229, diet: "egg" },
      { name: "Egg Schezwan Fried Rice", price: 239, diet: "egg" },
      { name: "Chicken Fried Rice", price: 249, diet: "nonveg" },
      { name: "Chicken Schezwan Fried Rice", price: 279, diet: "nonveg" },
      { name: "Prawn Fried Rice", price: 299, diet: "nonveg" },
      { name: "Prawn Schezwan Fried Rice", price: 319, diet: "nonveg" },
      { name: "Mixed Fried Rice", price: 299, diet: "nonveg" },
      { name: "Mixed Schezwan Fried Rice", price: 319, diet: "nonveg" }
    ]
  },
  {
    category: "Noodles",
    subtitle: "Hand-tossed noodles with crisp vegetables, egg, chicken, or seafood.",
    items: [
      { name: "Veg Noodles", price: 219, diet: "veg" },
      { name: "Veg Schezwan Noodles", price: 239, diet: "veg" },
      { name: "Paneer Noodles", price: 299, diet: "veg" },
      { name: "Paneer Schezwan Noodles", price: 319, diet: "veg" },
      { name: "Mushroom Noodles", price: 289, diet: "veg" },
      { name: "Mushroom Schezwan Noodles", price: 309, diet: "veg" },
      { name: "Gobi Noodles", price: 289, diet: "veg" },
      { name: "Gobi Schezwan Noodles", price: 309, diet: "veg" },
      { name: "Egg Noodles", price: 229, diet: "egg" },
      { name: "Egg Schezwan Noodles", price: 239, diet: "egg" },
      { name: "Chicken Noodles", price: 249, diet: "nonveg" },
      { name: "Chicken Schezwan Noodles", price: 269, diet: "nonveg" },
      { name: "Prawn Noodles", price: 299, diet: "nonveg" },
      { name: "Prawn Schezwan Noodles", price: 319, diet: "nonveg" },
      { name: "Mixed Noodles", price: 309, diet: "nonveg" },
      { name: "Mixed Schezwan Noodles", price: 329, diet: "nonveg" }
    ]
  }
];
