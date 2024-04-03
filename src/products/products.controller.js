// import product model from its directory
import ProductModel from "./products.model.js";

// import Product Repository from its directory
import ProductRepository from "./products.repository.js";

// export controller class
export default class ProductController {

    // contructor to create instance of repository class
    constructor() {
        this.productRepository = new ProductRepository()
    }

    // function to create new product
    create = async (req, res) => {
        try {
            const { name, quantity } = req.body;
            const newProduct = new ProductModel(name, quantity)
            const productCreated = await this.productRepository.createProduct(newProduct)
            if (productCreated) {
                return res.status(201).json({
                    data: {
                        product: {
                            name: productCreated.name,
                            quantity: productCreated.quantity
                        }
                    }
                })
            } else {
                return res.status(400).send("Error while creating product")
            }
        } catch (error) {
            console.log(error);
        }
        
    }
    
    // function to get all product
    getAll = async (req, res) => {
        try {
            const products = await this.productRepository.getAll()
            if (products) {
                return res.status(200).json({ data: { products } })
            } else {
                return res.status(400).send("products not available")
            }
        } catch (error) {
            return res.status(400).send("Error while creating product")
        }
    }

    // function to delete Product
    deleteProduct = async (req, res) => {
        try {
            await this.productRepository.delete(req.params.id)
            return res.status(200).send({
                data: {
                    message: "product deleted"
                }
            })
        } catch (error) {
            return res.status(400).send("Error while creating product")
        }
    }

    // function to update product quantity
    updateQuantity = async (req, res) => {
        console.log(req.params.id,req.query.quantity);
        try {
            const product = await this.productRepository.updateProduct(req.params.id,parseInt(req.query.quantity))
            if (product) {
                return res.status(200).send({
                    data: {
                        product,
                        message: "updated successfully"
                    }
                })
            } else {
                return res.status(400).send("product not found")
            }
        } catch (error) {
            return res.status(400).send("Error while updating product")
        }
    }
}