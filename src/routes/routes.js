// Importamos Express
import {addnewProduct,
        getProducts,
        getProductWithID,
        updateProduct,
        deleteProduct} from '../controllers/controllers'

const routes = (app) => {
    
    app.route('/products')
        .post(addnewProduct);   // Crear un producto

    app.route('/products')
        .get(getProducts);      // Obtener todos los productos
    
    app.route('/products/:ProductID')
        .get(getProductWithID); // Obtener producto por ID

    app.route('/products/:ProductID')
        .put(updateProduct);    // Actualiza producto

    app.route('/products/:Product')
        .delete(deleteProduct); // Elimina producto
}

export default routes;