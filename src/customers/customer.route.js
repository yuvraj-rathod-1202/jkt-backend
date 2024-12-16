const express = require('express');
const Customer = require('./customer.model');
const { postACustomer, getAllCustomers, getSingleCustomer, editCustomer, deleteACustomer, getCustomerByQuery } = require('./customer.controller');
const router = express.Router();



//add a Customer
router.post('/create-customer', postACustomer)

//get all Customer
router.get('/', getAllCustomers)

//get single Customer
router.get("/:id", getSingleCustomer)

//edit Customer
router.put("/edit/:id", editCustomer)

//delete Customer
router.delete('/delete/:id', deleteACustomer)

router.get('/customer/:query', getCustomerByQuery)

module.exports = router;