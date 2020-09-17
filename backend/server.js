const express=require('express');
import data from './data';
const app=express()
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import userRoute from './routes/UserRoutes';
import productRoute from './routes/ProductRoutes';
import bodyParser from 'body-parser';
import orderRoute from './routes/OrderRoutes';

const PORT=process.env.PORT || 8080

dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

const mongodbUrl=process.env.MONGODB_URL || config.MONGODB_URL;
mongoose.connect(mongodbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex:true
}).catch(error => console.log(error.reason))

app.use("/api/users",userRoute);
app.use("/api/products",productRoute);
app.use("/api/orders",orderRoute)

// app.get('/api/products/:id',(req,res)=>{
//     const productId=req.params.id;
   
//     const product=data.products.find(x=>x._id==productId);
//     if(product){
//         res.send(product)
//     }
//     else{
//         res.status(404).send({msg:'Product Not Found.'})
//     }
// })

// app.get('/api/products',(req,res)=>{
//     res.send(data.products)
// })



app.listen(PORT,()=>{
    console.log(`server is running at ${PORT} `)
})