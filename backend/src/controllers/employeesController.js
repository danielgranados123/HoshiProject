// Array de métodos (CRUD)
const employeesController = {};
import employeesModel from "../models/Employees.js"

// SELECT
employeesController.getEmployees = async (req, res) => {
    const employee = await employeesModel.find()
    res.json(employee)
};

// INSERT
employeesController.createEmployees = async (req, res) => {
    const { name, lastName, email, phone, role, salary,  } = req.body;
    const newEmployee = new employeesModel({ name, lastName, email, phone, role, salary,  });
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
        salary,
        IdBranch
    }, {new: true}
    );

    res.json({ message: "Employees updated"})
};

export default employeesController;