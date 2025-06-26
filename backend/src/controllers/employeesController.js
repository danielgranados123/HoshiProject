// Array de métodos (CRUD)
const employeesController = {};
import employeesModel from "../models/Employees.js"

// SELECT
employeesController.getEmployees = async (req, res) => {
    const employee = await employeesModel.find()
    res.json(employee)
};

// UNO POR ID
employeesController.getEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await employeesModel.findById(id);
    if (!employee) return res.status(404).json({ message: "Empleado no encontrado" });
    res.json(employee);
  } catch (err) {
    res.status(400).json({ message: "ID inválido" });
  }
};

// INSERT
employeesController.createEmployees = async (req, res) => {
    const { name, lastName, email, phone, role, salary,  } = req.body;
    const newEmployee = new employeesModel({ name, lastName, email, phone, role, salary});
    await newEmployee.save()
    res.json({ message: "Employees saved"})
};

// DELETE
employeesController.deleteEmployees = async (req, res) => {
    await employeesModel.findOneAndDelete(req.params.id)
    res.json({ message: "Employees deleted"})
};

// UPDATE
employeesController.updateEmployees = async (req, res) => {
    const { name, lastName, email, phone, role, salary } = req.body;
    await employeesModel.findByIdAndUpdate(req.params.id, {
        name, 
        lastName, 
        email, 
        phone, 
        role, 
        salary
    }, {new: true}
    );

    res.json({ message: "Employees updated"})
};

export default employeesController;