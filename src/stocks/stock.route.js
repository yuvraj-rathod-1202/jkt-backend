const express = require('express');
const Stock = require('./stock.model');
const { postAStock, getAllStocks, getSingleStock, editStock, deleteAStock, getDailySales } = require('./stock.controller');
const router = express.Router();



//add a Stock
router.post('/create-Stock', postAStock)

// daily stock revenue
router.get('/dailysales', getDailySales);

//get all Stock
router.get('/', getAllStocks)

//get single Stock
router.get("/:id", getSingleStock)

//edit Stock
router.put("/edit/:id", editStock)

//delete Stock
router.delete('/delete/:id', deleteAStock)



module.exports = router;