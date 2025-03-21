// Array de métodos (CRUD)
const installmentsController = {};
import installmentsModel from "../models/Installments.js"

// SELECT
installmentsController.getInstallments = async (req, res) => {
    const installments = await installmentsModel.find()
    res.json(installments)
};

// INSERT
installmentsController.createInstallments = async (req, res) => {
    const { number, installmentAmount, paymentMethod, status, paymentDate } = req.body;
    const newInstallments = new installmentsModel({ number, installmentAmount, paymentMethod, status, paymentDate });
    await newInstallments.save()
    res.json({ message: "Installment saved"})
};

// DELETE
installmentsController.deleteInstallments = async (req, res) => {
    await installmentsModel.findOneAndDelete(req.params.id)
    res.json({ message: "Installment deleted"})
};

// UPDATE
installmentsController.updateInstallments = async (req, res) => {
    const { number, installmentAmount, paymentMethod, status, paymentDate } = req.body;
    await installmentsModel.findByIdAndUpdate(req.params.id, {
        number, 
        installmentAmount, 
        paymentMethod, 
        status, 
        paymentDate
    }, {new: true}
    );

    res.json({ message: "Installment updated"})
};

export default installmentsController;