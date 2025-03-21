/*
    Campos:
        nombre
        localizacion
        telefono
*/

import { Schema, model } from "mongoose";

const branchesSchema =  new Schema({
    name: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    phone: {
        type:  String,
        require: true
    },
}, {
    timestamps: true,
    strict: false
});

export default model("Branches", branchesSchema);