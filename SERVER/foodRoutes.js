import express from 'express';
import FoodItem from '../models/FoodItems.js';

const router = express.Router();

// Get all food items
router.get('/', async (req, res) => {
    const foodItems = await FoodItem.find();
    res.json(foodItems);
});

// Add a food item
router.post('/', async (req, res) => {
    const { name, price, description, imageUrl } = req.body;
    const foodItem = new FoodItem({ name, price, description, imageUrl });
    await foodItem.save();
    res.status(201).json(foodItem);
});

export default router;
