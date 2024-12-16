const Customer = require("./customer.model");

const postACustomer = async (req, res) => {
    
    try {
        const newCustomer = await Customer({...req.body});
        await newCustomer.save();
        res.status(200).send({message: "customer Posted succesfully", item: newCustomer});
    } catch (error) {
        console.error("Error creating item", error);
        res.status(500).send({message: "Failed to create a customer"});
    }
}

const getSingleCustomer = async (req, res) => {
    try {
        const {id} = req.params;
        const Customer = await Customer.findById(id);
        if(!Customer){
            res.status(404).send({message: "Customer is not found"});
        }
        res.status(200).send({ Customer });
    } catch (error) {
        console.error("Error fetching Customer", error);
        res.status(500).send({message: "Failed to fetch a Customer"});
    }
}

const getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.find().sort({ createdAt: -1});
        res.status(200).send({customers});
    } catch (error) {
        console.error("Error fetching item", error);
        res.status(500).send({message: "Failed to fetch a customer"});
    }
}

const editCustomer = async (req, res) => {
    try {
        const {id} = req.params;
        const editedCustomer = await Customer.findByIdAndUpdate(id, req.body, {new: true});
        if(!editedCustomer) {
            res.status(404).send({message: "Customer is not found"});
        }
        res.status(200).send({
            message: "Customer edited succesfully",
            Customer: editedCustomer
        })
    } catch (error) {
        console.error("Error editing Customer", error);
        res.status(500).send({message: "Failed to edit a Customer"});
    }
}

const deleteACustomer = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedCustomer = await Customer.findByIdAndDelete(id);
        if(!deletedCustomer) {
            res.status(404).send({message: "Customer is not found"});
        }
        res.status(200).send({
            message: "Customer deleted succesfully",
            Customer: deletedCustomer
        })
    } catch (error) {
        console.error("Error deleting Customer", error);
        res.status(500).send({message: "Failed to delete a Customer"});
    }
}

const getCustomerByQuery = async (req, res) => {
    try {
        const { query } = req.params;

        if (!query) {
            return res.status(400).send({ message: "Query parameter is required" });
        }

        const customer = await Customer.findOne({ mobileNo: Number(query) });

        if (!customer) {
            return res.status(404).send({ message: "Customer not found" });
        }

        res.status(200).send({ customer });
    } catch (error) {
        console.error("Error fetching customer:", error);
        res.status(500).send({ message: "Failed to fetch a customer" });
    }
};



module.exports = {
    postACustomer,
    getAllCustomers,
    getSingleCustomer,
    editCustomer,
    deleteACustomer,
    getCustomerByQuery
}