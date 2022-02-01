// Importamos Express
const express = require('express');
const router = express.Router();

const productoController = require('./controllers');

// Crear un producto
router.post('/products', 
    productoController.addnewProduct
);

module.exports = router;

