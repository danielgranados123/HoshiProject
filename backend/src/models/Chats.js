/*
    Campos:
        idEmployee
        idCustomer
        messages
            sender
            message
            hour
*/

import { Schema, model } from "mongoose";

const chatsSchema =  new Schema({
    messages: [{
        sender: {
        type: String,
        require: true
        },
        message: {
            type: String,
            require: true
        },
        hour: {
            type: String,
            require: true
        }
    }],
    idEmployee: {
        type: Schema.Types.ObjectId,
        ref: "Employees",
        require: true
    },
    idCustomer: {
        type: Schema.Types.ObjectId,
        ref: "Customers",
        require: true
    }
}, {
    timestamps: true,
    strict: false
});

export default model("Chats", chatsSchema);