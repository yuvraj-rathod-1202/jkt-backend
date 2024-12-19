const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mobileNo: {
        type: Number,
        unique: true
    },
    paid:{
        type: Number
    },
    unpaid: {
        type: Number
    },
    orders: [String]
});


const Customer = mongoose.model('customerdata', customerSchema);

module.exports = Customer;