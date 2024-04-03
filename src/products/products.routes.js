// import express from express-module
import express from 'express'

// import productController and create instance
import ProductController from './products.controller.js'
const productController = new ProductController()

// create router using express router
const productRouter = express.Router()

// define api routes
productRouter.post("/create", productController.create)
productRouter.get("/", productController.getAll)
productRouter.delete("/:id", productController.deleteProduct)
productRouter.post("/:id/update_quantity", productController.updateQuantity)

// export router 
export default productRouter