import express from 'express'

import ProductController from './products.controller.js'
const productController = new ProductController()

const productRouter = express.Router()

productRouter.post("/create", productController.create)
productRouter.get("/", productController.getAll)
productRouter.delete("/:id", productController.deleteProduct)
productRouter.post("/:id/update_quantity/quantity", productController.updateQuantity)

export default productRouter