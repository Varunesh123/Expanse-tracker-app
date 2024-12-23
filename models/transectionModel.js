import mongoose from "mongoose";
const transectionSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: [true, "Amount is required"]
    },
    type: {
        type: String,
        required: [true, "Type of required"]
    },
    category: {
        type: String,
        required: [true, "Category of required"]
    },
    reference: {
        type: String,
    },
    description: {
        type: String,
        required: [true, "Description of required"]
    },
    date: {
        type: Date,
        required: [true, "Date is required"],
    }
}, {timestamps : true});

const transectionModel = mongoose.model('transections', transectionSchema);
export default transectionModel;