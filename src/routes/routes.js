// Importamos Express
import {addnewProduct, getProducts} from '../controllers/controllers'

const routes = (app) => {
    app.route('/products')
    // Crear un producto
    .post(addnewProduct)
    // Obtener listado de productos
    .get(getProducts)
}

export default routes;