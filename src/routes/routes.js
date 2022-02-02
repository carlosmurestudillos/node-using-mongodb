// Importamos Express
import {addnewProduct, getProducts, getProductWithID, updateProduct, deleteProduct} from '../controllers/controllers'

const routes = (app) => {
    // Crear un producto
    app.route('/products').post(addnewProduct);

    // Obtener todos los productos
    app.route('/products').get(getProducts);

    // Obtener producto por ID
    app.route('/products/:ProductID').get(getProductWithID);

    // Actualiza producto
    app.route('/products/:ProductID').put(updateProduct);

    // Elimina producto
    app.route('/products/:ProductID').delete(deleteProduct);
}

export default routes;