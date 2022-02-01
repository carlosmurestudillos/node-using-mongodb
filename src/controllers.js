import mongoose from 'mongoose';
var Product = require('./models');
const { validationResult } = require('express-validator');

// Display list of all Authors.
exports.addnewProduct  = function(req, res) {
    try {
        // Revisar si hay errores
        const errores = validationResult(req.body);
        if( !errores.isEmpty() ) {
            return res.status(400).json({errores: errores.array() })
        }

        let newProduct = newProduct(req.body);
        newProduct.save(function(err) {
            if (err) {
                return err;
              } else {
                req.json(newProduct);
              }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Ha ocurrido un error al intentar crear el producto.');
    }
};
