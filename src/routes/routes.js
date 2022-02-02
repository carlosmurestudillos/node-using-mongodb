// Importamos Express
import {addnewProduct, getProducts, getProductWithID} from '../controllers/controllers'

const routes = (app) => {
    // Crear un producto
    app.route('/products').post(addnewProduct);

    // Obtener productos
    app.route('/products').get(getProducts);

    // Obtener los datos de un producto
    app.route('/products/:ProductID').get(getProductWithID);
}

export default routes;