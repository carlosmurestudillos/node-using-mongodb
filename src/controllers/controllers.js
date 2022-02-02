import mongoose from 'mongoose';
import {ProductSchema} from '../models/models';

const Product = mongoose.model('Product', ProductSchema);

export const addnewProduct = (req, res) => {
    let newProduct = new Product(req.body);
    newProduct.save((err, Product) => {
        if (err) {
            res.send(err);
        }
        req.json(Product);
    });
};

export const getProducts = (req, res) => {
    Product.find({}, (err, Product) => {
        if (err) {
            res.send(err);
        }
        req.json(Product);
    });
};

export const getProductWithID = (req, res) => {
    Product.findById(req.params.ProductID, (err, Product) => {
        if (err) {
            res.send(err); 
        }
        req.json(Product);
    });
};

export const updateProduct = (req, res) => {
    const id = {_id: req.params.ProductID};
    Product.findOneAndUpdate( id, req.body, {new: true}, (err, Product) => {
        if (err) {
            res.send(err); 
        }
        req.json(Product);
    });
};

export const deleteProduct = (req, res) => {
    const id = {_id: req.params.ProductID};
    Product.deleteOne( id, (err, Product) => {
        if (err) {
            res.send(err); 
        }
        req.json({ message: 'successfully delete product.'} );
    });
};