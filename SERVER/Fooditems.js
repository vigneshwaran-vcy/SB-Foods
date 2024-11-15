import mongoose from 'mongoose';

const foodItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String }
});

const FoodItem = mongoose.model('FoodItem', foodItemSchema);

export default FoodItem;
