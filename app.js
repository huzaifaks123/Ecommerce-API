import express from 'express'

import productRouter from './src/products/products.routes'

const app = express()
const port = 3100

app.use('/products', productRouter)
app.listen(port,(err)=>{
    console.log("Server is running successfully on port :", port)
    if(err){
        console.log("Error while running server :", err);
    }
})