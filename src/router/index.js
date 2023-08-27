const productsController = require('../Products/controller')

const router = app => {
  // app.use('/users')
  // app.use('/carts')
  app.use('/products', productsController)

  // app.use('/products')
}

module.exports = router