// Array de métodos (CRUD)
const reviewsController = {};
import reviewsModel from "../models/Reviews.js"

// SELECT
reviewsController.getReviews = async (req, res) => {
    const reviews = await reviewsModel.find()
    res.json(reviews)
};

// INSERT
reviewsController.createReviews = async (req, res) => {
    const { idCustomer, idEmployee, idChat, rating } = req.body;
    const newReview = new reviewsModel({ idCustomer, idEmployee, idChat, rating });
    await newReview.save()
    res.json({ message: "Review saved"})
};

// DELETE
reviewsController.deleteReviews = async (req, res) => {
    await reviewsModel.findOneAndDelete(req.params.id)
    res.json({ message: "Review deleted"})
};

// UPDATE
reviewsController.updateReviews = async (req, res) => {
    const { idCustomer, idEmployee, idChat, rating } = req.body;
    await reviewsModel.findByIdAndUpdate(req.params.id, {
        idCustomer,
        idEmployee,
        idChat,
        rating
    }, {new: true}
    );

    res.json({ message: "Review updated"})
};

export default reviewsController;