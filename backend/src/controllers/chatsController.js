// Array de métodos (CRUD)
const chatsController = {};
import chatsModel from "../models/Chats.js"

// SELECT
chatsController.getCars = async (req, res) => {
    const cars = await chatsModel.find().populate('idEmployee').populate('idCustomer')
    res.json(cars)
};

// INSERT
chatsController.createCars = async (req, res) => {
    const { idEmployee, idCustomer, messages } = req.body;
    const newChat = new chatsModel({ idEmployee, idCustomer, messages });
    await newChat.save()
    res.json({ message: "Chat saved"})
};

// DELETE
chatsController.deleteCars = async (req, res) => {
    await chatsModel.findOneAndDelete(req.params.id)
    res.json({ message: "Chat deleted"})
};

// UPDATE
chatsController.updateCars = async (req, res) => {
    const { idEmployee, idCustomer, messages } = req.body;
    await chatsModel.findByIdAndUpdate(req.params.id, {
        idEmployee, 
        idCustomer, 
        messages
    }, {new: true}
    );

    res.json({ message: "Chat updated"})
};

export default chatsController;