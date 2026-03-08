const express = require("express");
const router = express.Router();

// Sample products data
let products = [
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