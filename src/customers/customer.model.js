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
    orders: [String]
});


const Customer = mongoose.model('customerdata', customerSchema);

module.exports = Customer;