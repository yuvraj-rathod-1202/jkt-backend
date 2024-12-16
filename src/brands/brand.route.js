const express = require('express');
const { postABrand, getAllBrands, getSingleBrand, editBrand, deleteABrand, getBrandByQuery } = require('./brand.controller');
const router = express.Router();

//add a Brand
router.post('/create-Brand', postABrand)

//get all Brand
router.get('/', getAllBrands)

//get single Brand
router.get("/:id", getSingleBrand)

//edit Brand
router.put("/edit/:id", editBrand)

//delete Brand
router.delete('/delete/:id', deleteABrand)

//get brand by query
router.get('/brand/:query', getBrandByQuery)
module.exports = router;