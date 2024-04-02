import express from 'express'

import ProductController from './products.controller'

const productRouter = express.Router()

productRouter.post("/create", ProductController.create)
productRouter.get("/", ProductController.getAll)
productRouter.delete("/:id", ProductController.deleteProduct)
productRouter.post("/:id/update_quantity/quantity", ProductController.updateQuantity)

export default productRouter