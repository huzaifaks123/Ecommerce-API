// import environment variable
import 'dotenv/config'

// import express from express-module
import express from 'express'

// import bodyParser from module
import bodyParser from 'body-parser'

// import product router to route product api
import productRouter from './src/products/products.routes.js'

// import mongoConnection from its directory
import { connectToMongoDB } from './src/config/mongodb.js'

// define express server
const app = express()

// deifne port for server
const port = process.env.PORT

// use bodyParser middleware
app.use(bodyParser.json())

// use route for productapi
app.use('/api/products', productRouter)

// run server on defined port
app.listen(port,(err)=>{
    console.log("Server is running successfully on port :", port)
    if(err){
        console.log("Error while running server :", err);
    }
    connectToMongoDB()
})