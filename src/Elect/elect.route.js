const express = require('express');
const Elect = require('./elect.model');

const router = express.Router();

router.post('/create-elect', async (req, res) => {
    try {
        const elect = new Elect(req.body);
        await elect.save();
        res.status(201).json(elect);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

router.get('/', async (req, res) => {
    try {
        const elects = await Elect.find().sort({ createdAt: -1 });
        res.status(200).json(elects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;