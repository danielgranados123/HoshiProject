/*
    Campos:
        number
        installmentAmount
        paymentMethod
        status
        paymentDate
*/

import { Schema, model } from "mongoose";

const installmentSchema =  new Schema({
    number: {
        type: Number,
        require: true
    },
    installmentAmount: {
        type: Number,
        require: true
    },
    paymentMethod: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    },
    paymentDate: {
        type: String,
        require: true
    }
}, {
    timestamps: true,
    strict: false
});

export default model("Installments", installmentSchema);
