// backend/src/routes/customers.js
import express from "express";
import customersController from "../controllers/customersController.js";

const router = express.Router();

router
  .route("/")
  .get(customersController.getCustomers)
  .post(customersController.createCustomers);

router
  .route("/:id")
  //.get(customersController.getCustomerById)
  .put(customersController.updateCustomers)
  .delete(customersController.deleteCustomers);

export default router;
