const productsController = require('../Products/controller.products')
const cartsController = require('../Carts/controller.carts')

const router = app => {
  app.use('/carts', cartsController)
  app.use('/products', productsController)
}

module.exports = router