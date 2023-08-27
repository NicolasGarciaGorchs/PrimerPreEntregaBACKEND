const { Router } =  require ('express')


const router = Router ()



router.get ('/:id', (req, res) => {
    res.json({message: `cart ${req.params.id} `})

})
// router.post ('/:cid/products/:pid', uploader.single ('file'), (req,res) => {

//     const {x,y,z} =req.body
//     const user = req.body
//     user.profile= req.file.path


    
//     res.json({message: ` ${user}`})

// })
router.put ('/:id', (req, res) => {
    console.log (req.body)
    res.json({message: 'update cart'})

})
router.delete ('/:id', (req, res) => {
    res.json ({message: `delete cart ${req.params.id} `})

})



module.exports = router