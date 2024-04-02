import ProductModel from "./products.model.js";

export default class ProductController{
    create(req,res){
        if(true){
            return res.status(201).send("created")
        }else{
            return res.status(400).send("Error while creating product")
        }
    }
    getAll(req,res){
        if(true){
            return res.status(200).send("getAll")
        }else{
            return res.status(400).send("Error while creating product")
        }
    }
    deleteProduct(req,res){
        if(true){
            return res.status(200).send("deleted")
        }else{
            return res.status(400).send("Error while creating product")
        }
    }
    updateQuantity(req,res){
        if(true){
            return res.status(200).send("updated")
        }else{
            return res.status(400).send("Error while creating product")
        }
    }
}