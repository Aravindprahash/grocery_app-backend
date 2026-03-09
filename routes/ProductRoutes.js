const express = require("express");
const router = express.Router();

let products = [
    // ==================== FRUITS & VEGETABLES (20 products) ====================
    { 
        id: 1, 
        name: "Fresh Apple", 
        price: 120, 
        category: "Fruits & Vegetables",
        image: "https://images.pexels.com/photos/1510392/pexels-photo-1510392.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 kg",
        description: "Fresh red apples from Kashmir"
    },
    {
        id: 5,
        name: "Fresh Banana",
        price: 50,
        category: "Fruits & Vegetables",
        image: "https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 dozen",
        description: "Fresh ripe bananas"
    },
    {
        id: 6,
        name: "Orange",
        price: 80,
        category: "Fruits & Vegetables",
        image: "https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 kg",
        description: "Juicy nagpur oranges"
    },
    {
        id: 7,
        name: "Pomegranate",
        price: 150,
        category: "Fruits & Vegetables",
        image: "https://images.pexels.com/photos/1120970/pexels-photo-1120970.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 kg",
        description: "Fresh red pomegranate"
    },
    {
        id: 8,
        name: "Grapes",
        price: 90,
        category: "Fruits & Vegetables",
        image: "https://images.pexels.com/photos/60021/grapes-vineyard-grapevine-blue-60021.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "500 g",
        description: "Sweet green grapes"
    },
    {
        id: 9,
        name: "Mango",
        price: 200,
        category: "Fruits & Vegetables",
        image: "https://images.pexels.com/photos/918643/pexels-photo-918643.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 kg",
        description: "Alphonso mangoes"
    },
    {
        id: 10,
        name: "Watermelon",
        price: 60,
        category: "Fruits & Vegetables",
        image: "https://images.pexels.com/photos/1397539/pexels-photo-1397539.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 piece",
        description: "Fresh watermelon"
    },
    {
        id: 11,
        name: "Papaya",
        price: 45,
        category: "Fruits & Vegetables",
        image: "https://images.pexels.com/photos/5945559/pexels-photo-5945559.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 kg",
        description: "Ripe papaya"
    },
    {
        id: 12,
        name: "Pineapple",
        price: 70,
        category: "Fruits & Vegetables",
        image: "https://images.pexels.com/photos/947879/pexels-photo-947879.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 piece",
        description: "Sweet pineapple"
    },
    {
        id: 13,
        name: "Strawberry",
        price: 250,
        category: "Fruits & Vegetables",
        image: "https://images.pexels.com/photos/70746/strawberries-red-fruit-royalty-free-70746.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "250 g",
        description: "Fresh strawberries"
    },
    {
        id: 14,
        name: "Kiwi",
        price: 180,
        category: "Fruits & Vegetables",
        image: "https://images.pexels.com/photos/1374882/pexels-photo-1374882.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "3 pieces",
        description: "Fresh kiwi fruit"
    },
    {
        id: 15,
        name: "Potato",
        price: 40,
        category: "Fruits & Vegetables",
        image: "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 kg",
        description: "Fresh potatoes"
    },
    {
        id: 16,
        name: "Tomato",
        price: 35,
        category: "Fruits & Vegetables",
        image: "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 kg",
        description: "Ripe tomatoes"
    },
    {
        id: 17,
        name: "Onion",
        price: 45,
        category: "Fruits & Vegetables",
        image: "https://images.pexels.com/photos/4197447/pexels-photo-4197447.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 kg",
        description: "Fresh onions"
    },
    {
        id: 18,
        name: "Carrot",
        price: 50,
        category: "Fruits & Vegetables",
        image: "https://images.pexels.com/photos/1306559/pexels-photo-1306559.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 kg",
        description: "Fresh carrots"
    },
    {
        id: 19,
        name: "Cucumber",
        price: 30,
        category: "Fruits & Vegetables",
        image: "https://images.pexels.com/photos/37528/cucumber-salad-food-healthy-37528.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "500 g",
        description: "Fresh cucumber"
    },
    {
        id: 20,
        name: "Capsicum",
        price: 60,
        category: "Fruits & Vegetables",
        image: "https://images.pexels.com/photos/594137/pexels-photo-594137.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "250 g",
        description: "Green capsicum"
    },
    {
        id: 21,
        name: "Cauliflower",
        price: 55,
        category: "Fruits & Vegetables",
        image: "https://images.pexels.com/photos/1516684/pexels-photo-1516684.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 piece",
        description: "Fresh cauliflower"
    },
    {
        id: 22,
        name: "Cabbage",
        price: 40,
        category: "Fruits & Vegetables",
        image: "https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 piece",
        description: "Fresh cabbage"
    },
    {
        id: 23,
        name: "Brinjal",
        price: 45,
        category: "Fruits & Vegetables",
        image: "https://images.pexels.com/photos/5677793/pexels-photo-5677793.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "500 g",
        description: "Fresh brinjal"
    },
    {
        id: 24,
        name: "Spinach",
        price: 25,
        category: "Fruits & Vegetables",
        image: "https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 bunch",
        description: "Fresh spinach leaves"
    },

    // ==================== OIL & DAIRY (15 products) ====================
    { 
        id: 2, 
        name: "Milk", 
        price: 60, 
        category: "Oil & Dairy",
        image: "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 liter",
        description: "Fresh cow milk"
    },
    {
        id: 25,
        name: "Curd",
        price: 50,
        category: "Oil & Dairy",
        image: "https://images.pexels.com/photos/4397899/pexels-photo-4397899.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "500 g",
        description: "Fresh thick curd"
    },
    {
        id: 26,
        name: "Butter",
        price: 55,
        category: "Oil & Dairy",
        image: "https://images.pexels.com/photos/531334/pexels-photo-531334.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "100 g",
        description: "Creamy butter"
    },
    {
        id: 27,
        name: "Paneer",
        price: 100,
        category: "Oil & Dairy",
        image: "https://images.pexels.com/photos/6546434/pexels-photo-6546434.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "200 g",
        description: "Fresh cottage cheese"
    },
    {
        id: 28,
        name: "Cheese",
        price: 120,
        category: "Oil & Dairy",
        image: "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "200 g",
        description: "Processed cheese"
    },
    {
        id: 29,
        name: "Ghee",
        price: 450,
        category: "Oil & Dairy",
        image: "https://images.pexels.com/photos/5865037/pexels-photo-5865037.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 liter",
        description: "Pure cow ghee"
    },
    {
        id: 30,
        name: "Sunflower Oil",
        price: 150,
        category: "Oil & Dairy",
        image: "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 liter",
        description: "Refined sunflower oil"
    },
    {
        id: 31,
        name: "Olive Oil",
        price: 350,
        category: "Oil & Dairy",
        image: "https://images.pexels.com/photos/1022385/pexels-photo-1022385.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "500 ml",
        description: "Extra virgin olive oil"
    },
    {
        id: 32,
        name: "Coconut Oil",
        price: 140,
        category: "Oil & Dairy",
        image: "https://images.pexels.com/photos/725998/pexels-photo-725998.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "500 ml",
        description: "Pure coconut oil"
    },
    {
        id: 33,
        name: "Mustard Oil",
        price: 130,
        category: "Oil & Dairy",
        image: "https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 liter",
        description: "Kachi ghani mustard oil"
    },
    {
        id: 34,
        name: "Groundnut Oil",
        price: 160,
        category: "Oil & Dairy",
        image: "https://images.pexels.com/photos/6941010/pexels-photo-6941010.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 liter",
        description: "Pure groundnut oil"
    },
    {
        id: 35,
        name: "Flavored Yogurt",
        price: 40,
        category: "Oil & Dairy",
        image: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "100 ml",
        description: "Strawberry yogurt"
    },
    {
        id: 36,
        name: "Buttermilk",
        price: 30,
        category: "Oil & Dairy",
        image: "https://images.pexels.com/photos/3735170/pexels-photo-3735170.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 liter",
        description: "Spiced buttermilk"
    },
    {
        id: 37,
        name: "Cream",
        price: 80,
        category: "Oil & Dairy",
        image: "https://images.pexels.com/photos/5765/food-healthy-meal-ice-cream.jpg?auto=compress&cs=tinysrgb&w=400",
        quantity: "200 ml",
        description: "Fresh cream"
    },
    {
        id: 38,
        name: "Condensed Milk",
        price: 90,
        category: "Oil & Dairy",
        image: "https://images.pexels.com/photos/5765/food-healthy-meal-ice-cream.jpg?auto=compress&cs=tinysrgb&w=400",
        quantity: "400 g",
        description: "Sweetened condensed milk"
    },
    {
        id: 39,
        name: "Milk Powder",
        price: 220,
        category: "Oil & Dairy",
        image: "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 kg",
        description: "Full cream milk powder"
    },

    // ==================== SNACKS & BISCUITS (20 products) ====================
    { 
        id: 3, 
        name: "Biscuits", 
        price: 30, 
        category: "Snacks & Biscuits",
        image: "https://images.pexels.com/photos/890515/pexels-photo-890515.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 pack",
        description: "Cream biscuits"
    },
    {
        id: 40,
        name: "Potato Chips",
        price: 30,
        category: "Snacks & Biscuits",
        image: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "100 g",
        description: "Classic salted chips"
    },
    {
        id: 41,
        name: "Cookies",
        price: 80,
        category: "Snacks & Biscuits",
        image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "250 g",
        description: "Chocolate chip cookies"
    },
    {
        id: 42,
        name: "Namkeen",
        price: 60,
        category: "Snacks & Biscuits",
        image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "200 g",
        description: "Mixed namkeen"
    },
    {
        id: 43,
        name: "Cake",
        price: 150,
        category: "Snacks & Biscuits",
        image: "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "400 g",
        description: "Vanilla cake"
    },
    {
        id: 44,
        name: "Chocolate",
        price: 100,
        category: "Snacks & Biscuits",
        image: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "150 g",
        description: "Dark chocolate"
    },
    {
        id: 45,
        name: "Popcorn",
        price: 40,
        category: "Snacks & Biscuits",
        image: "https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=400",
        quantity: "100 g",
        description: "Butter popcorn"
    },
    {
        id: 46,
        name: "Wafers",
        price: 30,
        category: "Snacks & Biscuits",
        image: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "75 g",
        description: "Potato wafers"
    },
    {
        id: 47,
        name: "Kurkure",
        price: 20,
        category: "Snacks & Biscuits",
        image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "90 g",
        description: "Masala munch"
    },
    {
        id: 48,
        name: "Khakhra",
        price: 50,
        category: "Snacks & Biscuits",
        image: "https://images.pexels.com/photos/890515/pexels-photo-890515.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "200 g",
        description: "Plain khakhra"
    },
    {
        id: 49,
        name: "Mathri",
        price: 45,
        category: "Snacks & Biscuits",
        image: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "250 g",
        description: "Ajwain mathri"
    },
    {
        id: 50,
        name: "Samosa",
        price: 25,
        category: "Snacks & Biscuits",
        image: "https://images.pexels.com/photos/6260921/pexels-photo-6260921.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "2 pieces",
        description: "Aloo samosa"
    },
    {
        id: 51,
        name: "Pattice",
        price: 30,
        category: "Snacks & Biscuits",
        image: "https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "2 pieces",
        description: "Vegetable pattice"
    },
    {
        id: 52,
        name: "Spring Roll",
        price: 80,
        category: "Snacks & Biscuits",
        image: "https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "4 pieces",
        description: "Veg spring roll"
    },
    {
        id: 53,
        name: "French Fries",
        price: 90,
        category: "Snacks & Biscuits",
        image: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "500 g",
        description: "Frozen french fries"
    },
    {
        id: 54,
        name: "Nuggets",
        price: 120,
        category: "Snacks & Biscuits",
        image: "https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "250 g",
        description: "Veg nuggets"
    },
    {
        id: 55,
        name: "Brownie",
        price: 100,
        category: "Snacks & Biscuits",
        image: "https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 piece",
        description: "Chocolate brownie"
    },
    {
        id: 56,
        name: "Donut",
        price: 60,
        category: "Snacks & Biscuits",
        image: "https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 piece",
        description: "Glazed donut"
    },
    {
        id: 57,
        name: "Muffin",
        price: 50,
        category: "Snacks & Biscuits",
        image: "https://images.pexels.com/photos/4040649/pexels-photo-4040649.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 piece",
        description: "Blueberry muffin"
    },
    {
        id: 58,
        name: "Pastry",
        price: 70,
        category: "Snacks & Biscuits",
        image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 piece",
        description: "Pineapple pastry"
    },
    {
        id: 59,
        name: "Rusk",
        price: 40,
        category: "Snacks & Biscuits",
        image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "250 g",
        description: "Tea time rusk"
    },

    // ==================== MEAT & FISH (15 products) ====================
    {
        id: 4,
        name: "Chicken",
        price: 250,
        category: "Meat & Fish",
        image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 kg",
        description: "Fresh chicken"
    },
    {
        id: 60,
        name: "Fish - Rohu",
        price: 300,
        category: "Meat & Fish",
        image: "https://images.pexels.com/photos/1148086/pexels-photo-1148086.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 kg",
        description: "Fresh rohu fish"
    },
    {
        id: 61,
        name: "Prawns",
        price: 450,
        category: "Meat & Fish",
        image: "https://images.pexels.com/photos/3296391/pexels-photo-3296391.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "500 g",
        description: "Medium size prawns"
    },
    {
        id: 62,
        name: "Mutton",
        price: 650,
        category: "Meat & Fish",
        image: "https://images.pexels.com/photos/618775/pexels-photo-618775.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 kg",
        description: "Fresh mutton"
    },
    {
        id: 63,
        name: "Eggs",
        price: 80,
        category: "Meat & Fish",
        image: "https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "6 pieces",
        description: "Farm fresh eggs"
    },
    {
        id: 64,
        name: "Chicken Breast",
        price: 280,
        category: "Meat & Fish",
        image: "https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "500 g",
        description: "Boneless chicken breast"
    },
    {
        id: 65,
        name: "Fish - Pomfret",
        price: 550,
        category: "Meat & Fish",
        image: "https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 kg",
        description: "Fresh pomfret"
    },
    {
        id: 66,
        name: "Crab",
        price: 400,
        category: "Meat & Fish",
        image: "https://images.pexels.com/photos/3296279/pexels-photo-3296279.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "500 g",
        description: "Fresh crabs"
    },
    {
        id: 67,
        name: "Squid",
        price: 350,
        category: "Meat & Fish",
        image: "https://images.pexels.com/photos/3296394/pexels-photo-3296394.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "500 g",
        description: "Clean squid rings"
    },
    {
        id: 68,
        name: "Mackerel",
        price: 200,
        category: "Meat & Fish",
        image: "https://images.pexels.com/photos/1148086/pexels-photo-1148086.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 kg",
        description: "Fresh mackerel"
    },
    {
        id: 69,
        name: "Sardine",
        price: 150,
        category: "Meat & Fish",
        image: "https://images.pexels.com/photos/8969195/pexels-photo-8969195.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 kg",
        description: "Fresh sardines"
    },
    {
        id: 70,
        name: "Chicken Leg Piece",
        price: 270,
        category: "Meat & Fish",
        image: "https://images.pexels.com/photos/5718025/pexels-photo-5718025.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 kg",
        description: "Curry cut chicken legs"
    },
    {
        id: 71,
        name: "Fish Fillet",
        price: 320,
        category: "Meat & Fish",
        image: "https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "500 g",
        description: "Boneless fish fillet"
    },
    {
        id: 72,
        name: "Mutton Chops",
        price: 680,
        category: "Meat & Fish",
        image: "https://images.pexels.com/photos/8308126/pexels-photo-8308126.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 kg",
        description: "Mutton chops with bone"
    },
    {
        id: 73,
        name: "Chicken Sausages",
        price: 150,
        category: "Meat & Fish",
        image: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "200 g",
        description: "Chicken frankfurters"
    },
    {
        id: 74,
        name: "Keema",
        price: 280,
        category: "Meat & Fish",
        image: "https://images.pexels.com/photos/6210875/pexels-photo-6210875.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "500 g",
        description: "Minced chicken/mutton"
    },

    // ==================== BEVERAGES (15 products) ====================
    {
        id: 75,
        name: "Coca Cola",
        price: 45,
        category: "Beverages",
        image: "https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "750 ml",
        description: "Soft drink"
    },
    {
        id: 76,
        name: "Pepsi",
        price: 45,
        category: "Beverages",
        image: "https://images.pexels.com/photos/2983100/pexels-photo-2983100.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "750 ml",
        description: "Soft drink"
    },
    {
        id: 77,
        name: "Orange Juice",
        price: 80,
        category: "Beverages",
        image: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 liter",
        description: "Tetra pack orange juice"
    },
    {
        id: 78,
        name: "Tea Powder",
        price: 150,
        category: "Beverages",
        image: "https://images.pexels.com/photos/1697945/pexels-photo-1697945.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "500 g",
        description: "Premium tea leaves"
    },
    {
        id: 79,
        name: "Coffee Powder",
        price: 200,
        category: "Beverages",
        image: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "250 g",
        description: "Filter coffee powder"
    },
    {
        id: 80,
        name: "Mineral Water",
        price: 20,
        category: "Beverages",
        image: "https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 liter",
        description: "Packaged drinking water"
    },
    {
        id: 81,
        name: "Apple Juice",
        price: 85,
        category: "Beverages",
        image: "https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 liter",
        description: "Apple juice"
    },
    {
        id: 82,
        name: "Lemon Juice",
        price: 70,
        category: "Beverages",
        image: "https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 liter",
        description: "Lemon drink"
    },
    {
        id: 83,
        name: "Cold Coffee",
        price: 60,
        category: "Beverages",
        image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "250 ml",
        description: "Ready to drink coffee"
    },
    {
        id: 84,
        name: "Milk Shake",
        price: 70,
        category: "Beverages",
        image: "https://images.pexels.com/photos/3727250/pexels-photo-3727250.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "250 ml",
        description: "Chocolate milkshake"
    },
    {
        id: 85,
        name: "Sports Drink",
        price: 40,
        category: "Beverages",
        image: "https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "500 ml",
        description: "Electrolyte drink"
    },
    {
        id: 86,
        name: "Energy Drink",
        price: 100,
        category: "Beverages",
        image: "https://images.pexels.com/photos/2531184/pexels-photo-2531184.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "250 ml",
        description: "Energy boost"
    },
    {
        id: 87,
        name: "Green Tea",
        price: 180,
        category: "Beverages",
        image: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "100 g",
        description: "Green tea leaves"
    },
    {
        id: 88,
        name: "Lemon Honey",
        price: 120,
        category: "Beverages",
        image: "https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "500 ml",
        description: "Lemon honey drink"
    },
    {
        id: 89,
        name: "Coconut Water",
        price: 50,
        category: "Beverages",
        image: "https://images.pexels.com/photos/3625372/pexels-photo-3625372.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "500 ml",
        description: "Tender coconut water"
    },

    // ==================== GROCERIES & STAPLES (10 products) ====================
    {
        id: 90,
        name: "Rice - Basmati",
        price: 120,
        category: "Groceries & Staples",
        image: "https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 kg",
        description: "Premium basmati rice"
    },
    {
        id: 91,
        name: "Wheat Flour",
        price: 50,
        category: "Groceries & Staples",
        image: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 kg",
        description: "Whole wheat flour"
    },
    {
        id: 92,
        name: "Toor Dal",
        price: 110,
        category: "Groceries & Staples",
        image: "https://images.pexels.com/photos/4198936/pexels-photo-4198936.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 kg",
        description: "Arhar dal"
    },
    {
        id: 93,
        name: "Moong Dal",
        price: 90,
        category: "Groceries & Staples",
        image: "https://images.pexels.com/photos/4198927/pexels-photo-4198927.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 kg",
        description: "Split yellow moong"
    },
    {
        id: 94,
        name: "Chana Dal",
        price: 80,
        category: "Groceries & Staples",
        image: "https://images.pexels.com/photos/4198940/pexels-photo-4198940.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 kg",
        description: "Bengal gram dal"
    },
    {
        id: 95,
        name: "Sugar",
        price: 45,
        category: "Groceries & Staples",
        image: "https://images.pexels.com/photos/65882/sugar-sweet-white-crystals-65882.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 kg",
        description: "Fine sugar"
    },
    {
        id: 96,
        name: "Salt",
        price: 20,
        category: "Groceries & Staples",
        image: "https://images.pexels.com/photos/4110252/pexels-photo-4110252.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "1 kg",
        description: "Iodized salt"
    },
    {
        id: 97,
        name: "Turmeric Powder",
        price: 40,
        category: "Groceries & Staples",
        image: "https://images.pexels.com/photos/4198647/pexels-photo-4198647.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "200 g",
        description: "Pure turmeric"
    },
    {
        id: 98,
        name: "Chilli Powder",
        price: 50,
        category: "Groceries & Staples",
        image: "https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "200 g",
        description: "Red chilli powder"
    },
    {
        id: 99,
        name: "Coriander Powder",
        price: 35,
        category: "Groceries & Staples",
        image: "https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "200 g",
        description: "Dhania powder"
    },
    {
        id: 100,
        name: "Garam Masala",
        price: 60,
        category: "Groceries & Staples",
        image: "https://images.pexels.com/photos/6941010/pexels-photo-6941010.jpeg?auto=compress&cs=tinysrgb&w=400",
        quantity: "100 g",
        description: "Whole garam masala"
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