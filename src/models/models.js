import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ProductSchema = new Schema({
  name: {type: String, required: 'Introduce un producto.'},
  description: {type: String, required: 'Introduce una descripcion'},
  category: {type: String},
  price: {type: Number},
  created_date: { type: Date, default: Date.now},
});