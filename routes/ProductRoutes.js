const express = require("express");
const router = express.Router();

let products = [
    // Existing 4 products
    { 
        id: 1, 
        name: "Fresh Apple", 
        price: 120, 
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6",
        quantity: "1 kg",
        description: "Fresh red apples from Kashmir"
    },
    { 
        id: 2, 
        name: "Milk", 
        price: 60, 
        category: "Oil & Dairy",
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b",
        quantity: "1 liter",
        description: "Fresh cow milk"
    },
    { 
        id: 3, 
        name: "Biscuits", 
        price: 30, 
        category: "Snacks & Biscuits",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35",
        quantity: "1 pack",
        description: "Cream biscuits"
    },
    {
        id: 4,
        name: "Chicken",
        price: 250,
        category: "Meat & Fish",
        image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781",
        quantity: "1 kg",
        description: "Fresh chicken"
    },
    
    // 96 New Products
    // Fruits & Vegetables (20 products)
    {
        id: 5,
        name: "Fresh Banana",
        price: 50,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224",
        quantity: "1 dozen",
        description: "Fresh ripe bananas"
    },
    {
        id: 6,
        name: "Orange",
        price: 80,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9",
        quantity: "1 kg",
        description: "Juicy nagpur oranges"
    },
    {
        id: 7,
        name: "Pomegranate",
        price: 150,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1541344999736-83b0220b9388",
        quantity: "1 kg",
        description: "Fresh red pomegranate"
    },
    {
        id: 8,
        name: "Grapes",
        price: 90,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f",
        quantity: "500 g",
        description: "Sweet green grapes"
    },
    {
        id: 9,
        name: "Mango",
        price: 200,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1553279768-865429fa0078",
        quantity: "1 kg",
        description: "Alphonso mangoes"
    },
    {
        id: 10,
        name: "Watermelon",
        price: 60,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1563114775-1c6e3aeb9af5",
        quantity: "1 piece",
        description: "Fresh watermelon"
    },
    {
        id: 11,
        name: "Papaya",
        price: 45,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1617127360659-2743d0c1e5b2",
        quantity: "1 kg",
        description: "Ripe papaya"
    },
    {
        id: 12,
        name: "Pineapple",
        price: 70,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1550258987-190a24941b8a",
        quantity: "1 piece",
        description: "Sweet pineapple"
    },
    {
        id: 13,
        name: "Strawberry",
        price: 250,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2",
        quantity: "250 g",
        description: "Fresh strawberries"
    },
    {
        id: 14,
        name: "Kiwi",
        price: 180,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71",
        quantity: "3 pieces",
        description: "Fresh kiwi fruit"
    },
    {
        id: 15,
        name: "Potato",
        price: 40,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
        quantity: "1 kg",
        description: "Fresh potatoes"
    },
    {
        id: 16,
        name: "Tomato",
        price: 35,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea",
        quantity: "1 kg",
        description: "Ripe tomatoes"
    },
    {
        id: 17,
        name: "Onion",
        price: 45,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1620574387735-362cdc75b56c",
        quantity: "1 kg",
        description: "Fresh onions"
    },
    {
        id: 18,
        name: "Carrot",
        price: 50,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37",
        quantity: "1 kg",
        description: "Fresh carrots"
    },
    {
        id: 19,
        name: "Cucumber",
        price: 30,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e",
        quantity: "500 g",
        description: "Fresh cucumber"
    },
    {
        id: 20,
        name: "Capsicum",
        price: 60,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83",
        quantity: "250 g",
        description: "Green capsicum"
    },
    {
        id: 21,
        name: "Cauliflower",
        price: 55,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1568584711075-59d8b1cd2195",
        quantity: "1 piece",
        description: "Fresh cauliflower"
    },
    {
        id: 22,
        name: "Cabbage",
        price: 40,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f",
        quantity: "1 piece",
        description: "Fresh cabbage"
    },
    {
        id: 23,
        name: "Brinjal",
        price: 45,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1615484477774-ca22b5f6e576",
        quantity: "500 g",
        description: "Fresh brinjal"
    },
    {
        id: 24,
        name: "Spinach",
        price: 25,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb",
        quantity: "1 bunch",
        description: "Fresh spinach leaves"
    },

    // Oil & Dairy (15 products)
    {
        id: 25,
        name: "Curd",
        price: 50,
        category: "Oil & Dairy",
        image: "https://images.unsplash.com/photo-1551024601-bec78ae704b3",
        quantity: "500 g",
        description: "Fresh thick curd"
    },
    {
        id: 26,
        name: "Butter",
        price: 55,
        category: "Oil & Dairy",
        image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d",
        quantity: "100 g",
        description: "Creamy butter"
    },
    {
        id: 27,
        name: "Paneer",
        price: 100,
        category: "Oil & Dairy",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
        quantity: "200 g",
        description: "Fresh cottage cheese"
    },
    {
        id: 28,
        name: "Cheese",
        price: 120,
        category: "Oil & Dairy",
        image: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b",
        quantity: "200 g",
        description: "Processed cheese"
    },
    {
        id: 29,
        name: "Ghee",
        price: 450,
        category: "Oil & Dairy",
        image: "https://images.unsplash.com/photo-1627308595171-d1b5d67125ea",
        quantity: "1 liter",
        description: "Pure cow ghee"
    },
    {
        id: 30,
        name: "Sunflower Oil",
        price: 150,
        category: "Oil & Dairy",
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5",
        quantity: "1 liter",
        description: "Refined sunflower oil"
    },
    {
        id: 31,
        name: "Olive Oil",
        price: 350,
        category: "Oil & Dairy",
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5",
        quantity: "500 ml",
        description: "Extra virgin olive oil"
    },
    {
        id: 32,
        name: "Coconut Oil",
        price: 140,
        category: "Oil & Dairy",
        image: "https://images.unsplash.com/photo-1627308595171-d1b5d67125ea",
        quantity: "500 ml",
        description: "Pure coconut oil"
    },
    {
        id: 33,
        name: "Mustard Oil",
        price: 130,
        category: "Oil & Dairy",
        image: "https://images.unsplash.com/photo-1627308595171-d1b5d67125ea",
        quantity: "1 liter",
        description: "Kachi ghani mustard oil"
    },
    {
        id: 34,
        name: "Groundnut Oil",
        price: 160,
        category: "Oil & Dairy",
        image: "https://images.unsplash.com/photo-1627308595171-d1b5d67125ea",
        quantity: "1 liter",
        description: "Pure groundnut oil"
    },
    {
        id: 35,
        name: "Flavored Yogurt",
        price: 40,
        category: "Oil & Dairy",
        image: "https://images.unsplash.com/photo-1551024601-bec78ae704b3",
        quantity: "100 ml",
        description: "Strawberry yogurt"
    },
    {
        id: 36,
        name: "Buttermilk",
        price: 30,
        category: "Oil & Dairy",
        image: "https://images.unsplash.com/photo-1551024601-bec78ae704b3",
        quantity: "1 liter",
        description: "Spiced buttermilk"
    },
    {
        id: 37,
        name: "Cream",
        price: 80,
        category: "Oil & Dairy",
        image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d",
        quantity: "200 ml",
        description: "Fresh cream"
    },
    {
        id: 38,
        name: "Condensed Milk",
        price: 90,
        category: "Oil & Dairy",
        image: "https://images.unsplash.com/photo-1551024601-bec78ae704b3",
        quantity: "400 g",
        description: "Sweetened condensed milk"
    },
    {
        id: 39,
        name: "Milk Powder",
        price: 220,
        category: "Oil & Dairy",
        image: "https://images.unsplash.com/photo-1551024601-bec78ae704b3",
        quantity: "1 kg",
        description: "Full cream milk powder"
    },

    // Snacks & Biscuits (20 products)
    {
        id: 40,
        name: "Potato Chips",
        price: 30,
        category: "Snacks & Biscuits",
        image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b",
        quantity: "100 g",
        description: "Classic salted chips"
    },
    {
        id: 41,
        name: "Cookies",
        price: 80,
        category: "Snacks & Biscuits",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35",
        quantity: "250 g",
        description: "Chocolate chip cookies"
    },
    {
        id: 42,
        name: "Namkeen",
        price: 60,
        category: "Snacks & Biscuits",
        image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b",
        quantity: "200 g",
        description: "Mixed namkeen"
    },
    {
        id: 43,
        name: "Cake",
        price: 150,
        category: "Snacks & Biscuits",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
        quantity: "400 g",
        description: "Vanilla cake"
    },
    {
        id: 44,
        name: "Chocolate",
        price: 100,
        category: "Snacks & Biscuits",
        image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52",
        quantity: "150 g",
        description: "Dark chocolate"
    },
    {
        id: 45,
        name: "Popcorn",
        price: 40,
        category: "Snacks & Biscuits",
        image: "https://images.unsplash.com/photo-1578849278619-e73505b9610f",
        quantity: "100 g",
        description: "Butter popcorn"
    },
    {
        id: 46,
        name: "Wafers",
        price: 30,
        category: "Snacks & Biscuits",
        image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b",
        quantity: "75 g",
        description: "Potato wafers"
    },
    {
        id: 47,
        name: "Kurkure",
        price: 20,
        category: "Snacks & Biscuits",
        image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b",
        quantity: "90 g",
        description: "Masala munch"
    },
    {
        id: 48,
        name: "Khakhra",
        price: 50,
        category: "Snacks & Biscuits",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35",
        quantity: "200 g",
        description: "Plain khakhra"
    },
    {
        id: 49,
        name: "Mathri",
        price: 45,
        category: "Snacks & Biscuits",
        image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b",
        quantity: "250 g",
        description: "Ajwain mathri"
    },
    {
        id: 50,
        name: "Samosa",
        price: 25,
        category: "Snacks & Biscuits",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
        quantity: "2 pieces",
        description: "Aloo samosa"
    },
    {
        id: 51,
        name: "Pattice",
        price: 30,
        category: "Snacks & Biscuits",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
        quantity: "2 pieces",
        description: "Vegetable pattice"
    },
    {
        id: 52,
        name: "Spring Roll",
        price: 80,
        category: "Snacks & Biscuits",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
        quantity: "4 pieces",
        description: "Veg spring roll"
    },
    {
        id: 53,
        name: "French Fries",
        price: 90,
        category: "Snacks & Biscuits",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877",
        quantity: "500 g",
        description: "Frozen french fries"
    },
    {
        id: 54,
        name: "Nuggets",
        price: 120,
        category: "Snacks & Biscuits",
        image: "https://images.unsplash.com/photo-1562967914-608f82629710",
        quantity: "250 g",
        description: "Veg nuggets"
    },
    {
        id: 55,
        name: "Brownie",
        price: 100,
        category: "Snacks & Biscuits",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
        quantity: "1 piece",
        description: "Chocolate brownie"
    },
    {
        id: 56,
        name: "Donut",
        price: 60,
        category: "Snacks & Biscuits",
        image: "https://images.unsplash.com/photo-1551024601-bec78ae704b3",
        quantity: "1 piece",
        description: "Glazed donut"
    },
    {
        id: 57,
        name: "Muffin",
        price: 50,
        category: "Snacks & Biscuits",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
        quantity: "1 piece",
        description: "Blueberry muffin"
    },
    {
        id: 58,
        name: "Pastry",
        price: 70,
        category: "Snacks & Biscuits",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
        quantity: "1 piece",
        description: "Pineapple pastry"
    },
    {
        id: 59,
        name: "Rusk",
        price: 40,
        category: "Snacks & Biscuits",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35",
        quantity: "250 g",
        description: "Tea time rusk"
    },

    // Meat & Fish (15 products)
    {
        id: 60,
        name: "Fish - Rohu",
        price: 300,
        category: "Meat & Fish",
        image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781",
        quantity: "1 kg",
        description: "Fresh rohu fish"
    },
    {
        id: 61,
        name: "Prawns",
        price: 450,
        category: "Meat & Fish",
        image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781",
        quantity: "500 g",
        description: "Medium size prawns"
    },
    {
        id: 62,
        name: "Mutton",
        price: 650,
        category: "Meat & Fish",
        image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781",
        quantity: "1 kg",
        description: "Fresh mutton"
    },
    {
        id: 63,
        name: "Eggs",
        price: 80,
        category: "Meat & Fish",
        image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f",
        quantity: "6 pieces",
        description: "Farm fresh eggs"
    },
    {
        id: 64,
        name: "Chicken Breast",
        price: 280,
        category: "Meat & Fish",
        image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781",
        quantity: "500 g",
        description: "Boneless chicken breast"
    },
    {
        id: 65,
        name: "Fish - Pomfret",
        price: 550,
        category: "Meat & Fish",
        image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781",
        quantity: "1 kg",
        description: "Fresh pomfret"
    },
    {
        id: 66,
        name: "Crab",
        price: 400,
        category: "Meat & Fish",
        image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781",
        quantity: "500 g",
        description: "Fresh crabs"
    },
    {
        id: 67,
        name: "Squid",
        price: 350,
        category: "Meat & Fish",
        image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781",
        quantity: "500 g",
        description: "Clean squid rings"
    },
    {
        id: 68,
        name: "Mackerel",
        price: 200,
        category: "Meat & Fish",
        image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781",
        quantity: "1 kg",
        description: "Fresh mackerel"
    },
    {
        id: 69,
        name: "Sardine",
        price: 150,
        category: "Meat & Fish",
        image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781",
        quantity: "1 kg",
        description: "Fresh sardines"
    },
    {
        id: 70,
        name: "Chicken Leg Piece",
        price: 270,
        category: "Meat & Fish",
        image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781",
        quantity: "1 kg",
        description: "Curry cut chicken legs"
    },
    {
        id: 71,
        name: "Fish Fillet",
        price: 320,
        category: "Meat & Fish",
        image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781",
        quantity: "500 g",
        description: "Boneless fish fillet"
    },
    {
        id: 72,
        name: "Mutton Chops",
        price: 680,
        category: "Meat & Fish",
        image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781",
        quantity: "1 kg",
        description: "Mutton chops with bone"
    },
    {
        id: 73,
        name: "Chicken Sausages",
        price: 150,
        category: "Meat & Fish",
        image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781",
        quantity: "200 g",
        description: "Chicken frankfurters"
    },
    {
        id: 74,
        name: "Keema",
        price: 280,
        category: "Meat & Fish",
        image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781",
        quantity: "500 g",
        description: "Minced chicken/mutton"
    },

    // Beverages (15 products)
    {
        id: 75,
        name: "Coca Cola",
        price: 45,
        category: "Beverages",
        image: "https://images.unsplash.com/photo-1554866585-cd94860890b7",
        quantity: "750 ml",
        description: "Soft drink"
    },
    {
        id: 76,
        name: "Pepsi",
        price: 45,
        category: "Beverages",
        image: "https://images.unsplash.com/photo-1554866585-cd94860890b7",
        quantity: "750 ml",
        description: "Soft drink"
    },
    {
        id: 77,
        name: "Orange Juice",
        price: 80,
        category: "Beverages",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
        quantity: "1 liter",
        description: "Tetra pack orange juice"
    },
    {
        id: 78,
        name: "Tea Powder",
        price: 150,
        category: "Beverages",
        image: "https://images.unsplash.com/photo-1564892412-173262db6489",
        quantity: "500 g",
        description: "Premium tea leaves"
    },
    {
        id: 79,
        name: "Coffee Powder",
        price: 200,
        category: "Beverages",
        image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31",
        quantity: "250 g",
        description: "Filter coffee powder"
    },
    {
        id: 80,
        name: "Mineral Water",
        price: 20,
        category: "Beverages",
        image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d",
        quantity: "1 liter",
        description: "Packaged drinking water"
    },
    {
        id: 81,
        name: "Apple Juice",
        price: 85,
        category: "Beverages",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
        quantity: "1 liter",
        description: "Apple juice"
    },
    {
        id: 82,
        name: "Lemon Juice",
        price: 70,
        category: "Beverages",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
        quantity: "1 liter",
        description: "Lemon drink"
    },
    {
        id: 83,
        name: "Cold Coffee",
        price: 60,
        category: "Beverages",
        image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e",
        quantity: "250 ml",
        description: "Ready to drink coffee"
    },
    {
        id: 84,
        name: "Milk Shake",
        price: 70,
        category: "Beverages",
        image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e",
        quantity: "250 ml",
        description: "Chocolate milkshake"
    },
    {
        id: 85,
        name: "Sports Drink",
        price: 40,
        category: "Beverages",
        image: "https://images.unsplash.com/photo-1554866585-cd94860890b7",
        quantity: "500 ml",
        description: "Electrolyte drink"
    },
    {
        id: 86,
        name: "Energy Drink",
        price: 100,
        category: "Beverages",
        image: "https://images.unsplash.com/photo-1554866585-cd94860890b7",
        quantity: "250 ml",
        description: "Energy boost"
    },
    {
        id: 87,
        name: "Green Tea",
        price: 180,
        category: "Beverages",
        image: "https://images.unsplash.com/photo-1564892412-173262db6489",
        quantity: "100 g",
        description: "Green tea leaves"
    },
    {
        id: 88,
        name: "Lemon Honey",
        price: 120,
        category: "Beverages",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
        quantity: "500 ml",
        description: "Lemon honey drink"
    },
    {
        id: 89,
        name: "Coconut Water",
        price: 50,
        category: "Beverages",
        image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d",
        quantity: "500 ml",
        description: "Tender coconut water"
    },

    // Groceries & Staples (11 products to complete 100 total)
    {
        id: 90,
        name: "Rice - Basmati",
        price: 120,
        category: "Groceries & Staples",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
        quantity: "1 kg",
        description: "Premium basmati rice"
    },
    {
        id: 91,
        name: "Wheat Flour",
        price: 50,
        category: "Groceries & Staples",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
        quantity: "1 kg",
        description: "Whole wheat flour"
    },
    {
        id: 92,
        name: "Toor Dal",
        price: 110,
        category: "Groceries & Staples",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
        quantity: "1 kg",
        description: "Arhar dal"
    },
    {
        id: 93,
        name: "Moong Dal",
        price: 90,
        category: "Groceries & Staples",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
        quantity: "1 kg",
        description: "Split yellow moong"
    },
    {
        id: 94,
        name: "Chana Dal",
        price: 80,
        category: "Groceries & Staples",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
        quantity: "1 kg",
        description: "Bengal gram dal"
    },
    {
        id: 95,
        name: "Sugar",
        price: 45,
        category: "Groceries & Staples",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
        quantity: "1 kg",
        description: "Fine sugar"
    },
    {
        id: 96,
        name: "Salt",
        price: 20,
        category: "Groceries & Staples",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
        quantity: "1 kg",
        description: "Iodized salt"
    },
    {
        id: 97,
        name: "Turmeric Powder",
        price: 40,
        category: "Groceries & Staples",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
        quantity: "200 g",
        description: "Pure turmeric"
    },
    {
        id: 98,
        name: "Chilli Powder",
        price: 50,
        category: "Groceries & Staples",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
        quantity: "200 g",
        description: "Red chilli powder"
    },
    {
        id: 99,
        name: "Coriander Powder",
        price: 35,
        category: "Groceries & Staples",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
        quantity: "200 g",
        description: "Dhania powder"
    },
    {
        id: 100,
        name: "Garam Masala",
        price: 60,
        category: "Groceries & Staples",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
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