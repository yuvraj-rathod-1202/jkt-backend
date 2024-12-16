const Brand = require("./brand.model");

const postABrand = async (req, res) => {
    try {
        const newBrand = await Brand({...req.body});
        await newBrand.save();
        res.status(200).send({message: "Brand Posted succesfully", Brand: newBrand});
    } catch (error) {
        console.error("Error creating Brand", error);
        res.status(500).send({message: "Failed to create a Brand"});
    }
}

const getAllBrands = async (req, res) => {
    try {
        const Brands = await Brand.find().sort({ createdAt: -1});
        res.status(200).send({Brands});
    } catch (error) {
        console.error("Error fetching Brand", error);
        res.status(500).send({message: "Failed to fetch a Brand"});
    }
}

const getSingleBrand = async (req, res) => {
    try {
        const {id} = req.params;
        const Brand = await Brand.findById(id);
        if(!Brand){
            res.status(404).send({message: "Brand is not found"});
        }
        res.status(200).send({ Brand });
    } catch (error) {
        console.error("Error fetching Brand", error);
        res.status(500).send({message: "Failed to fetch a Brand"});
    }
}

const editBrand = async (req, res) => {
    try {
        const {id} = req.params;
        const editedBrand = await Brand.findByIdAndUpdate(id, req.body, {new: true});
        if(!editedBrand) {
            res.status(404).send({message: "Brand is not found"});
        }
        res.status(200).send({
            message: "Brand edited succesfully",
            Brand: editedBrand
        })
    } catch (error) {
        console.error("Error editing Brand", error);
        res.status(500).send({message: "Failed to edit a Brand"});
    }
}

const deleteABrand = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedBrand = await Brand.findByIdAndDelete(id);
        if(!deletedBrand) {
            res.status(404).send({message: "Brand is not found"});
        }
        res.status(200).send({
            message: "Brand deleted succesfully",
            Brand: deletedBrand
        })
    } catch (error) {
        console.error("Error deleting Brand", error);
        res.status(500).send({message: "Failed to delete a Brand"});
    }
}

const getBrandByQuery = async (req, res) => {
    try {
        const {query} = req.params;
        const Brands = await Brand.find({onHome: query});
        if(!Brands) {
            res.status(404).send({message: "Brand is not found"});
        }
        res.status(200).send({ Brands });
    } catch (error) {
        console.error("Error fetching Brand", error);
        res.status(500).send({message: "Failed to fetch a Brand"});
    }
}

module.exports = {
    postABrand,
    getAllBrands,
    getSingleBrand,
    editBrand,
    deleteABrand,
    getBrandByQuery
}