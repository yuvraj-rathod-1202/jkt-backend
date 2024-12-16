const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    newPrice: {
        type: Number,
        required: true,
    },
    topSeller: {
        type: Boolean,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
  }, {
    timestamps: true,
  });



const Item = mongoose.model('item', itemSchema);

module.exports = Item;