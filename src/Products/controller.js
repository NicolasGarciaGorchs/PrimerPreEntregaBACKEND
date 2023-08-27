const {Router} =  require ('express')


const router = Router ()

router.get ('/', (req, res) => {
    // const { limit } = req.query
    // if (limit) {

    //     // const products = products.slice(0, limit || 5)
        // const products = productManager.getproducts(productManager)


    //     return res.json({ message: products })
    

    // console.log(req.body)
    res.json({ message: `nombre:${req.body.nombre}, marca:${req.body.marca}, modelo: ${req.body.modelo}`})
})

// const productManager = require ('./productManager')

router.get ('/:id', (req, res) => {
    // const {id} =req.params
    // const product = products.find (product.id === Number (id))
    res.json({message: `product ${req.params.id} `})

})

router.post ('/', (req, res) => {
  console.log(req.body)
  res.json({message: `nombre ${req.body.nombre} `})

})

router.put ('/:id', (req, res) => {
  console.log(req.body)
  res.json({message: `update user `})

})

router.delete ('/:id', (req, res) => {
  console.log(req.body)
  res.json({message: `delete user ${req.params.id} `})

})
// router.post ('/products', uploader.single ('file'), (req,res) => {

//     const {title,price,category} =req.body
//     console.log (req.body)
//     const user = req.body
//     user.profile= req.file.path
//     console.log (JSON.parse (user))


//     res.json({message: ` ${user}`})

// })
// router.put ('/:id', (req, res) => {
//     console.log (req.body)
//     res.json({message: 'update product'})

// })
// router.delete ('/:id', (req, res) => {
//     res.json ({message: `delete product $ {req.params.pid} `})

// })



module.exports = router