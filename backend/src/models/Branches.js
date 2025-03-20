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
        require: true,
        minLength: 8, 
        maxLength: 9
    },
}, {
    timestamps: true,
    strict: false
});

export default model("Branches", branchesSchema);