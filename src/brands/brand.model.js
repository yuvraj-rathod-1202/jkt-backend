const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    onHome: {
        type: Boolean,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;