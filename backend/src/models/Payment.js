
import { Schema, model } from "mongoose";

const paymentSchema =  new Schema({
    paymentMethod: {
        type: String,
        require: true
    },
    status: {
        type: String
    }
}, {
    timestamps: true,
    strict: false
});

export default model("Payment", paymentSchema);