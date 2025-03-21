// Array de métodos (CRUD)
const carsController = {};
import carsModel from "../models/Cars.js"

// SELECT
carsController.getCars = async (req, res) => {
    const cars = await carsModel.find().populate('idBranch', 'idModel')
    res.json(cars)
};

// INSERT
carsController.createCars = async (req, res) => {
    const { price, mileage, color, description, photos, airConditioning, radio, camera, screen, idBranch, idModel} = req.body;
    const newCar = new brandsModel({ price, mileage, color, description, photos, airConditioning, radio, camera, screen, idBranch, idModel });
    await newCar.save()
    res.json({ message: "Car saved"})
};

// DELETE
carsController.deleteCars = async (req, res) => {
    await brandsModel.findOneAndDelete(req.params.id)
    res.json({ message: "Car deleted"})
};

// UPDATE
carsController.updateCars = async (req, res) => {
    const { price, mileage, color, description, photos, airConditioning, radio, camera, screen, idBranch, idModel } = req.body;
    await brandsModel.findByIdAndUpdate(req.params.id, {
        price, 
        mileage, 
        color, 
        description, 
        photos, 
        airConditioning, 
        radio, 
        camera, 
        screen, 
        idBranch, 
        idModel
    }, {new: true}
    );

    res.json({ message: "Car updated"})
};

export default carsController;