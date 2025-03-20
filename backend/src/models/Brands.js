/*
    Campos:
        nombre
        descripción
        precio
        stock
*/

import { Schema, model } from "mongoose";

const brandSchema =  new Schema({
    name: {
        type: String,
        require: true
    },
    contryOfOrigin: {
        type: String,
        require: true
    },
    logoUel: {
        type: String,
        require: true
    },
}, {
    timestamps: true,
    strict: false
});

export default model("Brands", brandSchema);
