const { Router } = require('express'); 
const fs = require("fs");
const router = Router();
const { v4: uuidv4 } = require('uuid');


class Contenedor{
    constructor(fileName){
        this.fileName = fileName;
    }

    async getData() {
        const data = await fs.promises.readFile(`./${this.fileName}.json`, 'utf-8');
        return JSON.parse(data);
    }

    async getById(id){
        
        try{
            const data = await this.getData();
            let cart = data.find(carrito => carrito.id === id);
            let getProduct = [];
            getProduct = cart.productos;
            let error = (cart.length === 0) ? 'error:producto no encontrado' : 'Producto encontrado';
            console.error (error);
            return cart;
        }catch(err){
            return console.log('Error de lectura!', err);
        }
    }

    async addItem(idC, id_prod){
        
        try{
            let carrito = {};
            let products = await fs.promises.readFile(`./productos.json`, 'utf-8');
            products = JSON.parse(products);
            let data = await this.getData();
            //Item a agregar en el carrito, lo busco por id_prod
            const item = products.find(item => item.id === parseInt(id_prod));
            const findByIndex = data.findIndex((cart) => cart.id === idC);
            //Busco carrito por id
            carrito = data.find(carrito => carrito.id === idC);
            // Busco el producto
            let productos = carrito.productos;
            let idProdNoExist = true;
            for (let i = 0; i < productos.length; i++) {
                if (productos[i].product === parseInt(id_prod)) {
                    productos[i].quantity += 1;
                    idProdNoExist = false;
                    break;
                }
            }
            if(idProdNoExist){
                productos.push({
                    product: parseInt(id_prod),
                    quantity: 1,
                });
            }
            const updateItem = data.splice(findByIndex,1,carrito);
            await fs.promises.writeFile(`./${this.fileName}.json`, JSON.stringify(data));
            return carrito;
        }catch(err){
            return console.log('Error de lectura!', err);
        }
    }

    async addCart(){
        
        try{
            let fileExists = fs.existsSync(`./${this.fileName}.json`);
            if(fileExists == true) {
                console.log(`File exists: ${fileExists}`);
            }else{
                let data = [];
                console.log("Entro a crear el archivo vacío.");
                await fs.promises.writeFile(`./${this.fileName}.json`, JSON.stringify(data));
            }
            const data = await this.getData();
            const newCar ={
                id: uuidv4(),
                timestamp: new Date().toLocaleString(),
                productos: [],
                };
            data.push(newCar);
            await fs.promises.writeFile(`./${this.fileName}.json`, JSON.stringify(data));
            return newCar.id;   
        }catch(err){
            return console.log('Error de lectura!', err);
        }
    }

}

const carrito = new Contenedor('carrito');

router.post('/', async (req, res) => {
    const car = await carrito.addCart();
    res.json({message: 'Cart created: ' + car});
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const car = await carrito.getById(id);
    res.json({message: 'Cart ' + JSON.stringify(car)});
});

router.post('/:idC/products/:id_prod', async (req, res) => {
    const { idC, id_prod } = req.params;
    const car = await carrito.addItem(idC, id_prod);
    res.json({message: 'Add product ' + JSON.stringify(car)});
});

router.put ('/:cid', (req, res) => {
    console.log (req.body)
    res.json({message: 'update cart'})

})

module.exports = router;

// // router.post ('/:cid/products/:pid', uploader.single ('file'), (req,res) => {

// //     const {x,y,z} =req.body
// //     const user = req.body
// //     user.profile= req.file.path


    
// //     res.json({message: ` ${user}`})

// // })

