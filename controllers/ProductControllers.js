const express = require("express");
const router = express.Router();

// Sample data for testing
let products = [
    { 
        id: 1, 
        name: "Fresh Apple", 
        price: 120, 
        category: "Fruits & Vegetables",
        image: "apple.jpg",
        quantity: "1 kg",
        description: "Fresh red apples"
    },
    { 
        id: 2, 
        name: "Milk", 
        price: 60, 
        category: "Oil & Dairy",
        image: "milk.jpg",
        quantity: "1 liter",
        description: "Fresh cow milk"
    },
    { 
        id: 3, 
        name: "Biscuits", 
        price: 30, 
        category: "Snacks & Biscuits",
        image: "biscuits.jpg",
        quantity: "1 pack",
        description: "Cream biscuits"
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

// Create product (POST)
router.post("/", (req, res) => {
    const newProduct = {
        id: products.length + 1,
        ...req.body
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Update product (PUT)
router.put("/:id", (req, res) => {
    const index = products.findIndex(p => p.id == req.params.id);
    if (index !== -1) {
        products[index] = { ...products[index], ...req.body };
        res.json(products[index]);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});

// Delete product (DELETE)
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