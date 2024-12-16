const express = require('express');
const { postACategory, getAllCategorys, getSingleCategory, editCategory, deleteACategory, getCategoryByQuery } = require('./category.controller');
const router = express.Router();

//add a Category
router.post('/create-Category', postACategory)

//get all Category
router.get('/', getAllCategorys)

//get single Category
router.get("/:id", getSingleCategory)

//edit Category
router.put("/edit/:id", editCategory)

//delete Category
router.delete('/delete/:id', deleteACategory)

//get category by query
router.get('/category/:query', getCategoryByQuery)

module.exports = router;