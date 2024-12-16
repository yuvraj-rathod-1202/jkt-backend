const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    buyerName: {
        type: String,
        required: true
    },
    buyerMobileNo: {
       type: Number,
       required: true
    },
    itemName: {
        type: String,
        required: true
    },
    itemQuantity: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    paymentStatus:{
        type: String,
        default: "unPaid"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Stocks = mongoose.model('Stocks', stockSchema);

module.exports = Stocks;