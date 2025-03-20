// Array de métodos (CRUD)
const modelsController = {};
import modelsModel from "../models/Models.js"

// SELECT
modelsController.getModels = async (req, res) => {
    const models = await modelsModel.find()
    res.json(models)
};

// INSERT
modelsController.createModels = async (req, res) => {
    const { name, fuelType, transmission, bodyType } = req.body;
    const newModel = new modelsModel({ name, fuelType, transmission, bodyType });
    await newModel.save()
    res.json({ message: "Model saved"})
};

// DELETE
modelsController.deleteModels = async (req, res) => {
    await modelsModel.findOneAndDelete(req.params.id)
    res.json({ message: "Model deleted"})
};

// UPDATE
modelsController.updateModels = async (req, res) => {
    const { name, fuelType, transmission, bodyType } = req.body;
    await modelsModel.findByIdAndUpdate(req.params.id, {
        name, 
        fuelType, 
        transmission, 
        bodyType
    }, {new: true}
    );

    res.json({ message: "Model updated"})
};

export default modelsController;