/*
    Campos:
        idModel
        idBranch
        price
        mileage
        color
        description
        imageUrls
        airConditioning
        airbag
        radio
        camera
        screen
*/

import { Schema, model } from "mongoose";

const carSchema =  new Schema({
    price: {
        type: Number,
        require: true
    },
    mileage: {
        type: Number,
        require: true
    },
    color: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    photos: [{
        url: {
            type: String,
            require: true
        }
    }],
    airConditioning: {
        type: Boolean,
        require: true
    },
    radio: {
        type: Boolean,
        require: true
    },
    camera: {
        type: Boolean,
        require: true
    },
    screen: {
        type: Boolean,
        require: true
    }
}, {
    timestamps: true,
    strict: false
});

export default model("Cars", carSchema);