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