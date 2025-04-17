const mongoose = require('mongoose');

const electSchema = new mongoose.Schema({
    time: {
        type: String,
        required: true,
    },
    latitude: {
        type: String,
        required: true,
    },
    longitude: {
        type: String,
        required: true,
    },
    tempreature: {
        type: String,
        required: true,
    },
    humidity: {
        type: String,
        required: true,
    },
    moisture: {
        type: String,
        required: true,
    },
    pollution: {
        type: String,
        required: true,
    },
    CreatedAt: {
        type: Date,
        default: Date.now,
    },
});

const Elect = mongoose.model('Elect', electSchema);

module.exports = Elect;