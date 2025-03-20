// Array de métodos (CRUD)
const customersController = {};
import customersModel from "../models/Customers.js"

// SELECT
customersController.getCustomers = async (req, res) => {
    const customers = await customersModel.find()
    res.json(customers)
};

// INSERT
customersController.createCustomers = async (req, res) => {
    const { name, lastName, email, phone, username, password } = req.body;
    const newCustomer = new customersModel({ name, lastName, email, phone, username, password });
    await newCustomer.save()
    res.json({ message: "Customer saved"})
};

// DELETE
customersController.deleteCustomers = async (req, res) => {
    await customersModel.findOneAndDelete(req.params.id)
    res.json({ message: "Customer deleted"})
};

// UPDATE
customersController.updateCustomers = async (req, res) => {
    const { name, lastName, email, phone, username, password } = req.body;
    await customersModel.findByIdAndUpdate(req.params.id, {
        name, 
        lastName, 
        email, 
        phone, 
        username, 
        password
    }, {new: true}
    );

    res.json({ message: "Customer updated"})
};

export default customersController;