class ProductManager {
    constructor (){
        this.products=[]
    }
    getProductById(id){

        const idproducto = this.products.find (idProducto => idProducto.id==id)
            console.log ( 'producto encontrado', idproducto)
        

    }
    getProduct(){
        return this.products
        
        }
        addProduct( title, description, code, price, status, stock,category){
            this.products++

            if (!title ,!description,!code, !price,!status, !stock, !category){
                console.log ('Los campos son obligatorios')
                return 
            }
            if ( this.products.find (valorProducto => valorProducto.code==code)){
                console.log ('Su producto se encuentra repetido')
            }

            const newProduct = {
                title, description, code,price,status,stock, category
            }
            this.products.push(newProduct)

        }
        updateProduct (){


        }
        deleteProduct() {

            
        }


}
const productos = new ProductManager ()
console.log (productos.getProduct ())
// productos.addProduct( '1', 'collar', 'collar cervical plano pediatrico', '15000','sin imagen','3435','45')
// productos.addProduct( '2', 'torniquete', 'tactico', '40000','sin imagen','3035','150')
// console.log (productos.getProduct())
// productos.getProductById ('2')