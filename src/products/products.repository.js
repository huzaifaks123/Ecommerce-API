// module to define object to an id
import { ObjectId } from "mongodb";

// import get db to obtain mongodb
import { getDB } from "../config/mongodb.js";

// export ProductRepository class
export default class ProductRepository{
    
    // contructor to create product Collection
    constructor(){
        this.collection = "products"
    }
    
    // function to create new product
    async createProduct(newProduct){
        try {
            const db = getDB()
            const collection = db.collection(this.collection)
            await collection.insertOne(newProduct)
            return newProduct
        } catch (error) {
            console.log("Error while appending data : ", error);
        }
    }
    
    // function to get all product
    async getAll(){
        try {
            const db = getDB()
            const collection = db.collection(this.collection)
            const products = await collection.find().toArray()
            return products
        } catch (error) {
            console.log("Error while fetching data : ", error);
        }
    }
    // function to delete Product
    async delete(id){
        try {
            const db = getDB()
            const collection = db.collection(this.collection)
            const product = await collection.deleteOne({_id: new ObjectId(id)})
        } catch (error) {
            console.log("Error while fetching data : ", error);
        }
    }
    
    // function to update product quantity
    async updateProduct(id,quantity){
        try {
            const db = getDB()
            const collection = db.collection(this.collection)
            await collection.updateOne({_id: new ObjectId(id)},{$inc:{quantity:quantity}})
            const product = await collection.findOne({_id: new ObjectId(id)})
            console.log("product",product);
            return product
        } catch (error) {
            console.log("Error while updating data : ", error);
        }
    }
}