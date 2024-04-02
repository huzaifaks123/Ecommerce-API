import 'dotenv/config'
import express from 'express'

import productRouter from './src/products/products.routes.js'
import { connectToMongoDB } from './src/config/mongodb.js'

const app = express()
const port = process.env.PORT

app.use('/api/products', productRouter)

app.listen(port,(err)=>{
    console.log("Server is running successfully on port :", port)
    if(err){
        console.log("Error while running server :", err);
    }
    connectToMongoDB()
})