// Array de métodos (CRUD)
const ordersController = {};
import ordersModel from "../models/Orders.js"

// SELECT
ordersController.getOrders = async (req, res) => {
    const orders = await ordersModel.find()
    res.json(orders)
};

// INSERT
ordersController.createOrders = async (req, res) => {
    const { idCustomer, idCar, status } = req.body;
    const newOrder = new ordersModel({ idCustomer, idCar, status });
    await newOrder.save()
    res.json({ message: "Order saved"})
};

// DELETE
ordersController.deleteOrders = async (req, res) => {
    await ordersModel.findOneAndDelete(req.params.id)
    res.json({ message: "Order deleted"})
};

// UPDATE
ordersController.updateOrders = async (req, res) => {
    const { idCustomer, idCar, status } = req.body;
    await ordersModel.findByIdAndUpdate(req.params.id, {
        idCustomer,
        idCar,
        status
    }, {new: true}
    );

    res.json({ message: "Order updated"})
};

export default ordersController;