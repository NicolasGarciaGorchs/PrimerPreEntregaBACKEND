const { Router } = require('express')
const productManager = require('../Products/productManager')
const uploader = require('../utils/multer')


const router = Router()

router.get('/', (req, res) => {
  const { limit } = req.query
  if (limit) {
    // const products = products.slice(0, limit || 5)
    const products = productManager.getproducts(productManager)
    return res.json({ message: products })

  }
  // console.log(req.body)
  res.json({ message: `nombre:${req.body.nombre}, marca:${req.body.marca}, modelo: ${req.body.modelo}` })
})


router.post('/', uploader.single('file'), (req, res) => {
  // console.log(req.body)

  const user = req.body
  // user.profile = req.file.path // PARA HACER UNA FOTO DE PERFIL DEL USUARIO
  // console.log (JSON.parse (user))
  // res.json({message: `nombre: ${(user)}, marca: ${req.body.marca} ``})

  res.json({ message: `nombre: ${(user.nombre)}` })

})


router.get('/:id', (req, res) => {
  const { id } = req.params
  const product = products.find(product.id === Number(id))
  res.json({ message: `product ${req.params.id} ` })

})

router.put('/:id', (req, res) => {
  console.log(req.body)
  res.json({ message: `update user ` })

})

router.delete('/:id', (req, res) => {
  console.log(req.body)
  res.json({ message: `delete user ${req.params.id}` })

})



module.exports = router