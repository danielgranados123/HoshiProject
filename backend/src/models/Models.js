/*
    Campos:
        name
        fuelType
        transmission
        bodyType
*/

import { Schema, model } from "mongoose";

const modelSchema =  new Schema({
    name: {
        type: String,
        require: true
    },
    fuelType: {
        type: String
    },
    transmission: {
        type: String,
        require: true
    },
    bodyType: {
        type: String,
        require: true
    }
}, {
    timestamps: true,
    strict: false
});

export default model("Models", modelSchema);
