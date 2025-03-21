/*
    Campos:
        idCustomer
        idCar
        status
*/

import { Schema, model } from "mongoose";

const orderSchema =  new Schema({
    idCustomer: {
        type: Schema.Types.ObjectId,
        ref: "Customers",
        require: true
    },
    idCar: {
        type: Schema.Types.ObjectId,
        ref: "Cars",
        require: true
    },
    status: {
        type: String,
        require: true
    }
}, {
    timestamps: true,
    strict: false
});

export default model("Orders", orderSchema);
