/*
    Campos:
        nombre
        descripción
        precio
        stock
*/

import { Schema, model } from "mongoose";

const employeesSchema =  new Schema({
    name: {
        type: String,
        require: true
    },
    LastName: {
        type: String,
        require: true
    },
    email: {
        type: String ,
        require: true       
    },
    password: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: true,
    
    },
    salary: {
        type: Number,
        require: true,
        min: 0
    
    },
    IdBranch: {
        type: Schema.Types.ObjectId,
      ref: "Branches",
      
    
    }
}, {
    timestamps: true,
    strict: false
});

export default model("Employees", employeesSchema);