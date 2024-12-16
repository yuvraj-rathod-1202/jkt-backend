const Stock = require("./stock.model");

const postAStock = async (req, res) => {
    try {
        const newStock = await Stock({...req.body});
        await newStock.save();
        res.status(200).send({message: "Stock Posted succesfully", stock: newStock});
    } catch (error) {
        console.error("Error creating Stock", error);
        res.status(500).send({message: "Failed to create a Stock"});
    }
}

const getAllStocks = async (req, res) => {
    try {
        const Stocks = await Stock.find().sort({ createdAt: -1});
        res.status(200).send({Stocks});
    } catch (error) {
        console.error("Error fetching Stock", error);
        res.status(500).send({message: "Failed to fetch a Stock"});
    }
}

const getSingleStock = async (req, res) => {
    try {
        const {id} = req.params;
        const Stock = await Stock.findById(id);
        if(!Stock){
            res.status(404).send({message: "Stock is not found"});
        }
        res.status(200).send({ Stock });
    } catch (error) {
        console.error("Error fetching Stock", error);
        res.status(500).send({message: "Failed to fetch a Stock"});
    }
}

const editStock = async (req, res) => {
    try {
        const {id} = req.params;
        const editedStock = await Stock.findByIdAndUpdate(id, req.body, {new: true});
        if(!editedStock) {
            res.status(404).send({message: "Stock is not found"});
        }
        res.status(200).send({
            message: "Stock edited succesfully",
            Stock: editedStock
        })
    } catch (error) {
        console.error("Error editing Stock", error);
        res.status(500).send({message: "Failed to edit a Stock"});
    }
}

const deleteAStock = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedStock = await Stock.findByIdAndDelete(id);
        if(!deletedStock) {
            res.status(404).send({message: "Stock is not found"});
        }
        res.status(200).send({
            message: "Stock deleted succesfully",
            Stock: deletedStock
        })
    } catch (error) {
        console.error("Error deleting Stock", error);
        res.status(500).send({message: "Failed to delete a Stock"});
    }
}

module.exports = {
    postAStock,
    getAllStocks,
    getSingleStock,
    editStock,
    deleteAStock
}