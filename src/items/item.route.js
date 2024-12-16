const express = require('express');
const Item = require('./item.model');
const { postAItem, getAllItems, getSingleItem, editItem, deleteAItem } = require('./item.controller');
const router = express.Router();



//add a item
router.post('/create-item', postAItem)

//get all item
router.get('/', getAllItems)

//get single item
router.get("/:id", getSingleItem)

//edit item
router.put("/edit/:id", editItem)

//delete item
router.delete('/delete/:id', deleteAItem)

module.exports = router;