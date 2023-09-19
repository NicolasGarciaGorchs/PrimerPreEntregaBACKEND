const productsController = require('../Products/controller')
const cartController = require('../Carts/controller')

const router = app => {
  app.use('/carts', cartController)
  app.use('/products', productsController)
}

module.exports = router