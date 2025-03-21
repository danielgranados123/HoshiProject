/*
    Campos:
        idCustomer
        idEmployee
        idChat
        rating
        comment
*/

import { Schema, model } from "mongoose";

const reviewSchema =  new Schema({
    idCustomer: {
        type: Schema.Types.ObjectId,
        ref: "Customers",
        require: true
    },
    idEmployee: {
        type: Schema.Types.ObjectId,
        ref: "Employees",
        require: true
    },
    idChat: {
        type: Schema.Types.ObjectId,
        ref: "Chats",
        require: true
    },
    rating: {
        type: Number,
        require: true,
        minLength: 1, 
        maxLength: 5
    },
    comment: {
        type: String,
        require: true
    }
}, {
    timestamps: true,
    strict: false
});

export default model("Reviews", reviewSchema);
