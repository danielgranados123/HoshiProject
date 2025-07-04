/*
    Campos:
        name
        lastName
        email
        phone
        username
        password
*/

import { Schema, model } from "mongoose";

const customerSchema =  new Schema({
    name: {
        type: String,
        require: true
    },
    dni: { 
        type: String, 
        required: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
}, {
    timestamps: true,
    strict: false
});

export default model("Customers", customerSchema);
