// Array de métodos (CRUD)
const brandsController = {};
import brandsModel from "../models/Brands.js"

// SELECT
brandsController.getBrands = async (req, res) => {
    const brands = await brandsModel.find()
    res.json(brands)
};

// INSERT
brandsController.createBrands = async (req, res) => {
    const { name, location, phone} = req.body;
    const newBrand = new brandsModel({ name, location, phone});
    await newBrand.save()
    res.json({ message: "Brand saved"})
};

// DELETE
brandsController.deleteBrands = async (req, res) => {
    await brandsModel.findOneAndDelete(req.params.id)
    res.json({ message: "Brand deleted"})
};

// UPDATE
brandsController.updateBrands = async (req, res) => {
    const { name, location, phone} = req.body;
    await brandsModel.findByIdAndUpdate(req.params.id, {
        name,
        location,
        phone
    }, {new: true}
    );

    res.json({ message: "Brand updated"})
};

export default brandsController;