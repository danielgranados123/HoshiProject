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
        require: true,
        match:[
           /^[0-9]+@[^\s@]+\.[^\s@]+$/,
           "El correo debe ser valido"
            
        ]
       
    },
    phone: {
        type: String,
        require: true,
        match:[
            
            /^[^\s@]+{8}+$/,
            "El numero debe tener 8 digitos"
        ]
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
      require: true,
    
    }
}, {
    timestamps: true,
    strict: false
});

export default model("Employees", employeesSchema);