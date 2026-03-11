const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const productRoutes = require("./routes/ProductRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors({
    origin: ["http://localhost:3000",
    "https://grocery-application-7v51.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(express.json());

// IMPORTANT: Load product routes FIRST
app.use("/api/products", productRoutes);
console.log("✅ Product routes loaded at /api/products");

// Test routes
app.get("/", (req, res) => {
    res.send("Grocery App Backend is working 🚀");
});

app.get("/api/test", (req, res) => {
    res.json({ message: "API is working", status: "ok" });
});

// MongoDB connection (optional)
if (process.env.MONGO_URI) {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.log("⚠️ MongoDB not connected:", err.message));
}

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📦 Products API: http://localhost:${PORT}/api/products`);
});