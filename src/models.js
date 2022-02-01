import mongoose from 'mongoose';

const Schema = mongoose.Schema;
let products = new Schema({
  name: {type: String, require: true},
  description: {type: String, require: true},
  category: {type: String},
  price: {type: Number},
  created_date: { type: Date, default: Date.now},
});

const model = mongoose.model("products", products);
module.exports = model;