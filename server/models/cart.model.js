import mongoose from "mongoose";



const cartSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.ObjectId,
        ref: 'product',
    },
    quantity : {
        type: Number,
        default: 1
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
    }
} , { timestamps: true })



const CartModel = mongoose.model('cartProduct', cartSchema)

export default CartModel
