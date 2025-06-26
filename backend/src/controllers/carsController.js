// Array de métodos (CRUD)
const carsController = {};
import carsModel from "../models/Cars.js";
import { v2 as cloudinary } from "cloudinary";
import { config } from "../config.js";

// Configurar cloudinary
cloudinary.config({
    cloud_name: config.cloudinary.cloudinary_name,
    api_key: config.cloudinary.cloudinary_api_key,
    api_secret: config.cloudinary.cloudinary_api_secret
});

// SELECT
carsController.getCars = async (req, res) => {
    const cars = await carsModel.find().populate('idModel');
    res.json(cars);
};

// INSERT
carsController.createCars = async (req, res) => {
    const { price, mileage, color, description, airConditioning, radio, camera, screen } = req.body;

    let photoURLs = [];

    // Si hay archivos adjuntos (fotos)
    if (req.files && req.files.length > 0) {
        for (const file of req.files) {
            const result = await cloudinary.uploader.upload(file.path, {
                folder: "public",
                allowed_formats: ["png", "jpg", "jpeg", "svg"]
            });
            photoURLs.push(result.secure_url);
        }
    }

    const newCar = new carsModel({
        price,
        mileage,
        color,
        description,
        photos: photoURLs,
        airConditioning,
        radio,
        camera,
        screen
    });

    await newCar.save();
    res.json({ message: "Car saved" });
};

// DELETE
carsController.deleteCars = async (req, res) => {
    await carsModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Car deleted" });
};

// UPDATE
carsController.updateCars = async (req, res) => {
    const { price, mileage, color, description, airConditioning, radio, camera, screen } = req.body;

    let photoURLs = [];

    if (req.files && req.files.length > 0) {
        for (const file of req.files) {
            const result = await cloudinary.uploader.upload(file.path, {
                folder: "public",
                allowed_formats: ["png", "jpg", "jpeg", "svg"]
            });
            photoURLs.push(result.secure_url);
        }
    }

    const updateData = {
        price,
        mileage,
        color,
        description,
        airConditioning,
        radio,
        camera,
        screen
    };

    if (photoURLs.length > 0) {
        updateData.photos = photoURLs;
    }

    await carsModel.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json({ message: "Car updated" });
};

export default carsController;