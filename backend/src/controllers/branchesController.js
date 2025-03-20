// Array de métodos (CRUD)
const branchesController = {};
import branchesModel from "../models/Branches.js"

// SELECT
branchesController.getBranches = async (req, res) => {
    const branches = await branchesModel.find()
    res.json(branches)
};

// INSERT
branchesController.createBranches = async (req, res) => {
    const { name, location, phone} = req.body;
    const newBranch = new branchesModel({ name, location, phone});
    await newBranch.save()
    res.json({ message: "Branch saved"})
};

// DELETE
branchesController.deleteBranches = async (req, res) => {
    await branchesModel.findOneAndDelete(req.params.id)
    res.json({ message: "Branch deleted"})
};

// UPDATE
branchesController.updateBranches = async (req, res) => {
    const { name, location, phone} = req.body;
    await branchesModel.findByIdAndUpdate(req.params.id, {
        name,
        location,
        phone
    }, {new: true}
    );

    res.json({ message: "Branch updated"})
};

export default branchesController;