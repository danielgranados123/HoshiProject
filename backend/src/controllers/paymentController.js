// Array de métodos (CRUD)
const paymentController = {};
import paymentModel from "../models/Payments.js"

// SELECT
paymentController.getPayment = async (req, res) => {
    const customers = await paymentModel.find()
    res.json(customers)
};

// INSERT
paymentController.createPayment = async (req, res) => {
    const { paymentMethod, status } = req.body;
    const newPayment = new paymentModel({ paymentMethod, status });
    await newPayment.save()
    res.json({ message: "Payment saved"})
};

// DELETE
paymentController.deletePayment = async (req, res) => {
    await paymentModel.findOneAndDelete(req.params.id)
    res.json({ message: "Payment deleted"})
};

// UPDATE
paymentController.updatePayment = async (req, res) => {
    const { paymentMethod, status } = req.body;
    await paymentModel.findByIdAndUpdate(req.params.id, {
        paymentMethod, status
    }, {new: true}
    );

    res.json({ message: "Payment updated"})
};

export default paymentController;