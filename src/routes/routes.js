// Importamos Express
import {addnewProduct} from '../controllers/controllers'

const routes = (app) => {
    app.route('/products')
    // Crear un producto
    .post(addnewProduct);
}

export default routes;