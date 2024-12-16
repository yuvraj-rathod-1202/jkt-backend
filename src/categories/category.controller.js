const Category = require("./Category.model");

const postACategory = async (req, res) => {
    try {
        const newCategory = await Category({...req.body});
        await newCategory.save();
        res.status(200).send({message: "Category Posted succesfully", Category: newCategory});
    } catch (error) {
        console.error("Error creating Category", error);
        res.status(500).send({message: "Failed to create a Category"});
    }
}

const getAllCategorys = async (req, res) => {
    try {
        const Categorys = await Category.find().sort({ createdAt: -1});
        res.status(200).send({Categorys});
    } catch (error) {
        console.error("Error fetching Category", error);
        res.status(500).send({message: "Failed to fetch a Category"});
    }
}

const getSingleCategory = async (req, res) => {
    try {
        const {id} = req.params;
        const Category = await Category.findById(id);
        if(!Category){
            res.status(404).send({message: "Category is not found"});
        }
        res.status(200).send({ Category });
    } catch (error) {
        console.error("Error fetching Category", error);
        res.status(500).send({message: "Failed to fetch a Category"});
    }
}

const editCategory = async (req, res) => {
    try {
        const {id} = req.params;
        const editedCategory = await Category.findByIdAndUpdate(id, req.body, {new: true});
        if(!editedCategory) {
            res.status(404).send({message: "Category is not found"});
        }
        res.status(200).send({
            message: "Category edited succesfully",
            Category: editedCategory
        })
    } catch (error) {
        console.error("Error editing Category", error);
        res.status(500).send({message: "Failed to edit a Category"});
    }
}

const deleteACategory = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedCategory = await Category.findByIdAndDelete(id);
        if(!deletedCategory) {
            res.status(404).send({message: "Category is not found"});
        }
        res.status(200).send({
            message: "Category deleted succesfully",
            Category: deletedCategory
        })
    } catch (error) {
        console.error("Error deleting Category", error);
        res.status(500).send({message: "Failed to delete a Category"});
    }
}

const getCategoryByQuery  = async (req, res) => {
    try {
        const {query} = req.params;
        const category = await Category.find({onHome: query});
        if(!category){
            res.status(404).send({message: "Category is not found"});
        }
        res.status(200).send({ category });
    } catch (error) {
        console.error("Error fetching Category", error);
        res.status(500).send({message: "Failed to fetch a Category"});
    }
}

module.exports = {
    postACategory,
    getAllCategorys,
    getSingleCategory,
    editCategory,
    deleteACategory,
    getCategoryByQuery
}