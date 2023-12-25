//import {model, Schema} from "mongoose";
//const mongoose = require("mongoose");
const {model, Schema} = require("mongoose");

const TransactionSchema = new Schema({
    name: {type: String, required:true},
    price: {type: Number, required:true},
    description: {type: String, required:true},
    datetime: {type: Date, required:true},
});

const TransactionModel = model('Transaction', TransactionSchema);

module.exports = TransactionModel;