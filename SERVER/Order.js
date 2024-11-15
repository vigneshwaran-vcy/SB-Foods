import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    foodItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FoodItem', required: true }],
    totalAmount: { type: Number, required: true },
    status: { type: String, default: 'Pending' }
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
