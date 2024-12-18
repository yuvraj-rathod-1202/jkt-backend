const Item = require("./item.model");

const postAItem = async (req, res) => {
    try {
        const newItem = await Item({...req.body});
        await newItem.save();
        res.status(200).send({message: "Item Posted succesfully", item: newItem});
    } catch (error) {
        console.error("Error creating item", error);
        res.status(500).send({message: "Failed to create a item"});
    }
}

const getAllItems = async (req, res) => {
    try {
        const items = await Item.find().sort({ createdAt: -1});
        res.status(200).json({items});
    } catch (error) {
        console.error("Error fetching item", error);
        res.status(500).json({message: "Failed to fetch a item"});
    }
}

const getSingleItem = async (req, res) => {
    try {
        const {id} = req.params;
        const item = await Item.findById(id);
        if(!item){
            res.status(404).send({message: "item is not found"});
        }
        res.status(200).send({ item });
    } catch (error) {
        console.error("Error fetching item", error);
        res.status(500).send({message: "Failed to fetch a item"});
    }
}

const editItem = async (req, res) => {
    try {
        const {id} = req.params;
        const editedItem = await Item.findByIdAndUpdate(id, req.body, {new: true});
        if(!editedItem) {
            res.status(404).send({message: "item is not found"});
        }
        res.status(200).send({
            message: "Item edited succesfully",
            item: editedItem
        })
    } catch (error) {
        console.error("Error editing item", error);
        res.status(500).send({message: "Failed to edit a item"});
    }
}

const deleteAItem = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedItem = await Item.findByIdAndDelete(id);
        if(!deletedItem) {
            res.status(404).send({message: "item is not found"});
        }
        res.status(200).send({
            message: "Item deleted succesfully",
            item: deletedItem
        })
    } catch (error) {
        console.error("Error deleting item", error);
        res.status(500).send({message: "Failed to delete a item"});
    }
}

module.exports = {
    postAItem,
    getAllItems,
    getSingleItem,
    editItem,
    deleteAItem
}