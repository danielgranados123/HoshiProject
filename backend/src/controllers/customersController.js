// backend/src/controllers/customersController.js
import customersModel from "../models/Customers.js";

const customersController = {};

// GET all
customersController.getCustomers = async (req, res) => {
  const customers = await customersModel.find();
  res.json(customers);
};

// GET one by ID
customersController.getCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await customersModel.findById(id);
    if (!customer) return res.status(404).json({ message: "Cliente no encontrado" });
    res.json(customer);
  } catch (err) {
    res.status(400).json({ message: "ID inválido" });
  }
};

// CREATE
customersController.createCustomers = async (req, res) => {
  const { name, dni, email, phone, username, password } = req.body;
  const newCustomer = new customersModel({ name, dni, email, phone, username, password });
  await newCustomer.save();
  res.json({ message: "Customer saved" });
};

// UPDATE
customersController.updateCustomers = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, dni, email, phone, username, password } = req.body;
    const updated = await customersModel.findByIdAndUpdate(
      id,
      { name, dni, email, phone, username, password },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Cliente no encontrado" });
    res.json({ message: "Customer updated" });
  } catch (err) {
    res.status(400).json({ message: "Error al actualizar" });
  }
};

// DELETE
customersController.deleteCustomers = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await customersModel.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Cliente no encontrado" });
    res.json({ message: "Customer deleted" });
  } catch (err) {
    res.status(400).json({ message: "ID inválido" });
  }
};

export default customersController;