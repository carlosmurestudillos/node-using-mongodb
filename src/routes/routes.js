// Importamos Express
import {addnewProduct, getProducts, getProductWithID, updateProduct, deleteProduct} from '../controllers/controllers'

const routes = (app) => {
    
    app.route('/products')
        .post(addnewProduct)   // Crear un producto
        .get(getProducts)      // Obtener todos los productos

    
    app.route('/products/:ProductID')
        .get(getProductWithID) // Obtener producto por ID
        .put(updateProduct)    // Actualiza producto
        .delete(deleteProduct) // Elimina producto
}

export default routes;