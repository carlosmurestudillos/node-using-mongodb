import mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const ProductsSchema = new Schema({
  name: {type: String, require: 'Introduce un producto.'},
  description: {type: String, require: 'Introduce una descripcion'},
  category: {type: String},
  price: {type: Number},
  created_date: { type: Date, default: Date.now},
});