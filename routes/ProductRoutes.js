const express = require("express");
const router = express.Router();

let products = [
    // ==================== FRUITS & VEGETABLES (15 products) ====================
    { 
        id: 1, 
        name: "Fresh Apple", 
        price: 120, 
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&q=80",
        quantity: "1 kg",
        description: "Fresh red apples from Kashmir"
    },
    {
        id: 2,
        name: "Fresh Banana",
        price: 50,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80",
        quantity: "1 dozen",
        description: "Fresh ripe bananas"
    },
    {
        id: 3,
        name: "Orange",
        price: 80,
        category: "Fruits & Vegetables",
        image: "https://i.pinimg.com/736x/06/91/0e/06910e30bdd4d8ccc31ba68b5c92196d.jpg",
        quantity: "1 kg",
        description: "Juicy nagpur oranges"
    },
    {
        id: 4,
        name: "Pomegranate",
        price: 150,
        category: "Fruits & Vegetables",
        image: "https://i.pinimg.com/736x/0f/87/99/0f8799fb5e73b79f9042f385678c005a.jpg",
        quantity: "1 kg",
        description: "Fresh red pomegranate"
    },
    {
        id: 5,
        name: "Grapes",
        price: 90,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&q=80",
        quantity: "500 g",
        description: "Sweet green grapes"
    },
    {
        id: 6,
        name: "Mango",
        price: 200,
        category: "Fruits & Vegetables",
        image: "https://i.pinimg.com/736x/70/c5/70/70c570c2ad3fbdb093281980847dd9ab.jpg",
        quantity: "1 kg",
        description: "Alphonso mangoes"
    },
    {
        id: 7,
        name: "Watermelon",
        price: 60,
        category: "Fruits & Vegetables",
        image: "https://i.pinimg.com/736x/9d/d7/8d/9dd78d66ccc3cf73c9ebf6f703ce2517.jpg",
        quantity: "1 piece",
        description: "Fresh watermelon"
    },
    {
        id: 8,
        name: "Strawberry",
        price: 250,
        category: "Fruits & Vegetables",
        image: "https://i.pinimg.com/736x/e7/ed/87/e7ed87de067f4f31da789827a97eb917.jpg",
        quantity: "250 g",
        description: "Fresh strawberries"
    },
    {
        id: 9,
        name: "Potato",
        price: 40,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&q=80",
        quantity: "1 kg",
        description: "Fresh potatoes"
    },
    {
        id: 10,
        name: "Tomato",
        price: 35,
        category: "Fruits & Vegetables",
        image: "https://i.pinimg.com/736x/29/40/61/294061c8da24641b45df7c7f672faf32.jpg",
        quantity: "1 kg",
        description: "Ripe tomatoes"
    },
    {
        id: 11,
        name: "Onion",
        price: 45,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=400&q=80",
        quantity: "1 kg",
        description: "Fresh onions"
    },
    {
        id: 12,
        name: "Carrot",
        price: 50,
        category: "Fruits & Vegetables",
        image: "https://i.pinimg.com/736x/85/a7/b8/85a7b8192ac58b4e0a270fca4587eca7.jpg",
        quantity: "1 kg",
        description: "Fresh carrots"
    },
    {
        id: 13,
        name: "Cucumber",
        price: 30,
        category: "Fruits & Vegetables",
        image: "https://i.pinimg.com/736x/2a/23/03/2a230329886a28901c9bd7b515c82112.jpg",
        quantity: "500 g",
        description: "Fresh cucumber"
    },
    {
        id: 14,
        name: "Cauliflower",
        price: 55,
        category: "Fruits & Vegetables",
        image: "https://i.pinimg.com/736x/01/ff/9b/01ff9b50bd46429b1de7da0d98a2b547.jpg",
        quantity: "1 piece",
        description: "Fresh cauliflower"
    },
    {
        id: 15,
        name: "Spinach",
        price: 25,
        category: "Fruits & Vegetables",
        image: "https://i.pinimg.com/736x/6a/f5/8e/6af58eb81351312ec769f0a5a5860fbd.jpg",
        quantity: "1 bunch",
        description: "Fresh spinach leaves"
    },

    // ==================== OIL & DAIRY (10 products) ====================
    { 
        id: 16, 
        name: "Milk", 
        price: 60, 
        category: "Oil & Dairy",
        image: "https://i.pinimg.com/736x/9d/da/61/9dda612cbc84696270a1cf4a88791a2d.jpg",
        quantity: "1 liter",
        description: "Fresh cow milk"
    },
    {
        id: 17,
        name: "Butter",
        price: 55,
        category: "Oil & Dairy",
        image: "https://i.pinimg.com/736x/7b/36/56/7b36568f502f3f5e90591282b788dabc.jpg",
        quantity: "100 g",
        description: "Creamy butter"
    },
    {
        id: 18,
        name: "Paneer",
        price: 100,
        category: "Oil & Dairy",
        image: "https://i.pinimg.com/736x/e1/94/e3/e194e3ac3198d486f4e5e10e482c8849.jpg",
        quantity: "200 g",
        description: "Fresh cottage cheese"
    },
    {
        id: 19,
        name: "Ghee",
        price: 450,
        category: "Oil & Dairy",
        image: "https://i.pinimg.com/736x/1e/9c/ea/1e9ceabc21154151616a3330c1570d35.jpg",
        quantity: "1 liter",
        description: "Pure cow ghee"
    },
    {
        id: 20,
        name: "Sunflower Oil",
        price: 150,
        category: "Oil & Dairy",
        image: "https://i.pinimg.com/736x/f7/5b/da/f75bda0ab3dca5cc0817a2cf0bb47da3.jpg",
        quantity: "1 liter",
        description: "Refined sunflower oil"
    },
    {
        id: 21,
        name: "Olive Oil",
        price: 350,
        category: "Oil & Dairy",
        image: "https://i.pinimg.com/736x/5a/bf/2b/5abf2b8580f2b553cffa8ab715e0f9fb.jpg",
        quantity: "500 ml",
        description: "Extra virgin olive oil"
    },
    {
        id: 22,
        name: "Coconut Oil",
        price: 140,
        category: "Oil & Dairy",
        image: "https://i.pinimg.com/736x/e3/a8/49/e3a84927bcc4bb6ebb7ff5e507403b3f.jpg",
        quantity: "500 ml",
        description: "Pure coconut oil"
    },
    {
        id: 23,
        name: "Curd",
        price: 50,
        category: "Oil & Dairy",
        image: "https://i.pinimg.com/736x/5d/f1/9b/5df19b6c61f99ccb75b249ec499d999c.jpg",
        quantity: "500 g",
        description: "Fresh thick curd"
    },
    {
        id: 24,
        name: "Cheese",
        price: 120,
        category: "Oil & Dairy",
        image: "https://i.pinimg.com/736x/39/1b/7a/391b7aafa10c26ee2c7a04dd53a96c9c.jpg",
        quantity: "200 g",
        description: "Processed cheese"
    },
    {
        id: 25,
        name: "Cream",
        price: 80,
        category: "Oil & Dairy",
        image: "https://i.pinimg.com/736x/64/2c/ee/642ceeee8c90ae0dd83bbcd525aa3e2b.jpg",
        quantity: "200 ml",
        description: "Fresh cream"
    },

    // ==================== SNACKS & BISCUITS (8 products) ====================
    { 
        id: 26, 
        name: "Biscuits", 
        price: 30, 
        category: "Snacks & Biscuits",
        image: "https://i.pinimg.com/736x/80/dc/65/80dc65869e4bb1cb6b63373714e7dc4f.jpg",
        quantity: "1 pack",
        description: "Cream biscuits"
    },
    {
        id: 27,
        name: "Potato Chips",
        price: 30,
        category: "Snacks & Biscuits",
        image: "https://i.pinimg.com/736x/cb/21/0e/cb210ecf1cd1bb3ca6a18085dd8cab34.jpg",
        quantity: "100 g",
        description: "Classic salted chips"
    },
    {
        id: 28,
        name: "Cookies",
        price: 80,
        category: "Snacks & Biscuits",
        image: "https://i.pinimg.com/736x/a8/9d/ca/a89dcae5fb650d1fa9e8012b9fdbb28e.jpg",
        quantity: "250 g",
        description: "Chocolate chip cookies"
    },
    {
        id: 29,
        name: "Chocolate",
        price: 100,
        category: "Snacks & Biscuits",
        image: "https://i.pinimg.com/736x/69/71/2b/69712bbac4581bbe96fbe16542593645.jpg",
        quantity: "150 g",
        description: "Dark chocolate"
    },
    {
        id: 30,
        name: "Popcorn",
        price: 40,
        category: "Snacks & Biscuits",
        image: "https://i.pinimg.com/736x/f4/75/81/f47581fd9694e3223d0513e5cdeb8105.jpg",
        quantity: "100 g",
        description: "Butter popcorn"
    },
    {
        id: 31,
        name: "Brownie",
        price: 100,
        category: "Snacks & Biscuits",
        image: "https://i.pinimg.com/736x/c1/1e/b5/c11eb5b15ba5e3edaaa45990f0c301ca.jpg",
        quantity: "1 piece",
        description: "Chocolate brownie"
    },
    {
        id: 32,
        name: "Donut",
        price: 60,
        category: "Snacks & Biscuits",
        image: "https://i.pinimg.com/736x/78/58/3e/78583e539fb0032b4a81a6e8d2ea51ab.jpg",
        quantity: "1 piece",
        description: "Glazed donut"
    },
    {
        id: 33,
        name: "Muffin",
        price: 50,
        category: "Snacks & Biscuits",
        image: "https://i.pinimg.com/736x/35/e5/3f/35e53fe68a4474b2e76d62da749dd73e.jpg",
        quantity: "1 piece",
        description: "Blueberry muffin"
    },

    // ==================== MEAT & FISH (7 products) ====================
    {
        id: 34,
        name: "Chicken",
        price: 250,
        category: "Meat & Fish",
        image: "https://i.pinimg.com/736x/38/36/a1/3836a17c652c67f0d359c19027f9c233.jpg",
        quantity: "1 kg",
        description: "Fresh chicken"
    },
    {
        id: 35,
        name: "Prawns",
        price: 450,
        category: "Meat & Fish",
        image: "https://i.pinimg.com/736x/d8/d2/82/d8d28215d86a9c99020d16939534b225.jpg",
        quantity: "500 g",
        description: "Medium size prawns"
    },
    {
        id: 36,
        name: "Mutton",
        price: 650,
        category: "Meat & Fish",
        image: "https://i.pinimg.com/736x/45/a1/63/45a163e1be169fb403ea2ce18b59cbac.jpg",
        quantity: "1 kg",
        description: "Fresh mutton"
    },
    {
        id: 37,
        name: "Eggs",
        price: 80,
        category: "Meat & Fish",
        image: "https://i.pinimg.com/736x/da/70/8f/da708f2d135400b71deb93790216a517.jpg",
        quantity: "6 pieces",
        description: "Farm fresh eggs"
    },
    {
        id: 38,
        name: "Chicken Breast",
        price: 280,
        category: "Meat & Fish",
        image: "https://i.pinimg.com/736x/09/7c/43/097c433a47cf6d4948920e1499f6ad87.jpg",
        quantity: "500 g",
        description: "Boneless chicken breast"
    },
    {
        id: 39,
        name: "Fish Fillet",
        price: 320,
        category: "Meat & Fish",
        image: "https://i.pinimg.com/736x/b2/d6/49/b2d6493be946159971e438c67f54f2fb.jpg",
        quantity: "500 g",
        description: "Boneless fish fillet"
    },
    {
        id: 40,
        name: "Crab",
        price: 400,
        category: "Meat & Fish",
        image: "https://i.pinimg.com/736x/36/0b/98/360b98c37e78ac62c9afa537285538e6.jpg",
        quantity: "500 g",
        description: "Fresh crabs"
    },

    // ==================== BEVERAGES (5 products) ====================
    {
        id: 41,
        name: "Orange Juice",
        price: 80,
        category: "Beverages",
        image: "https://i.pinimg.com/736x/43/b9/e5/43b9e59db22943da24b85330d1fb13ab.jpg",
        quantity: "1 liter",
        description: "Tetra pack orange juice"
    },
    {
        id: 42,
        name: "Tea Powder",
        price: 150,
        category: "Beverages",
        image: "https://i.pinimg.com/736x/eb/67/d5/eb67d522ee3b2faad1b89d4ca68ffb2f.jpg",
        quantity: "500 g",
        description: "Premium tea leaves"
    },
    {
        id: 43,
        name: "Coffee Powder",
        price: 200,
        category: "Beverages",
        image: "https://i.pinimg.com/736x/23/cb/c4/23cbc4331b56bb01cb39587a09aefd6a.jpg",
        quantity: "250 g",
        description: "Filter coffee powder"
    },
    {
        id: 44,
        name: "Coconut Water",
        price: 50,
        category: "Beverages",
        image: "https://i.pinimg.com/736x/be/c0/63/bec0633d4431396c72a37e35184f5ac5.jpg",
        quantity: "500 ml",
        description: "Tender coconut water"
    },
    {
        id: 45,
        name: "Green Tea",
        price: 180,
        category: "Beverages",
        image: "https://i.pinimg.com/736x/7b/f7/e0/7bf7e0d20b782f521fea0e6063ce2bd5.jpg",
        quantity: "100 g",
        description: "Green tea leaves"
    },

    // ==================== GROCERIES & STAPLES (5 products) ====================
    {
        id: 46,
        name: "Rice - Basmati",
        price: 120,
        category: "Groceries & Staples",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80",
        quantity: "1 kg",
        description: "Premium basmati rice"
    },
    {
        id: 47,
        name: "Wheat Flour",
        price: 50,
        category: "Groceries & Staples",
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=80",
        quantity: "1 kg",
        description: "Whole wheat flour"
    },
    {
        id: 48,
        name: "Toor Dal",
        price: 110,
        category: "Groceries & Staples",
        image: "https://i.pinimg.com/736x/66/6e/ed/666eed8ca6b74ff9be6739aafa3464ae.jpg",
        quantity: "1 kg",
        description: "Arhar dal"
    },
    {
        id: 49,
        name: "Sugar",
        price: 45,
        category: "Groceries & Staples",
        image: "https://i.pinimg.com/736x/c3/fa/19/c3fa194577e56af1bcf4d9099ce0850e.jpg",
        quantity: "1 kg",
        description: "Fine sugar"
    },
    {
        id: 50,
        name: "Turmeric Powder",
        price: 40,
        category: "Groceries & Staples",
        image: "https://i.pinimg.com/736x/34/92/ef/3492ef92782e4590ab07f076336c35bd.jpg",
        quantity: "200 g",
        description: "Pure turmeric"
    }
];

// Get all products
router.get("/", (req, res) => {
    res.json(products);
});

// Get single product
router.get("/:id", (req, res) => {
    const product = products.find(p => p.id == req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});

// Get all categories
router.get("/categories", (req, res) => {
    const categories = [...new Set(products.map(p => p.category))];
    res.json(categories);
});

// Get products by category
router.get("/category/:catName", (req, res) => {
    const catName = decodeURIComponent(req.params.catName);
    const filtered = products.filter(p => p.category === catName);
    res.json(filtered);
});

// Create product
router.post("/", (req, res) => {
    const newProduct = {
        id: products.length + 1,
        ...req.body
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Update product
router.put("/:id", (req, res) => {
    const index = products.findIndex(p => p.id == req.params.id);
    if (index !== -1) {
        products[index] = { ...products[index], ...req.body };
        res.json(products[index]);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});

// Delete product
router.delete("/:id", (req, res) => {
    const index = products.findIndex(p => p.id == req.params.id);
    if (index !== -1) {
        products.splice(index, 1);
        res.json({ message: "Product deleted" });
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});

module.exports = router;