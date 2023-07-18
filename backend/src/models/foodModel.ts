import mongoose from "mongoose";
const { Schema } = mongoose;

export const foodSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    macro: {
        type: Number,
        required: true
    },
    micro: {
        type: Number,
        required: true
    }
}, { timestamps: true })

const foodModel = mongoose.model('foodModel', foodSchema);

export default foodModel;