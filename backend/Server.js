import express from 'express';
import mongoose from 'mongoose'
import ProductData from './data/ProductData.js';
import UserRouter from './models/UserRouter.js';

const app= express();


mongoose.connect('mongodb://localhost/PhoneCovers',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
});


app.get('/api/product/:id' , (req, res) =>{
    const product = ProductData.products.find(selected => selected.id === req.params.id)
    if (product){
        res.send(product);
    }
    else {
        res.statuscode(404).send({message:"Product not Found"})
    }
    
})

app.get('/api/product',(req,res)=>{
    res.send(ProductData.products);
});
app.use('/api/users' , UserRouter);

app.get('/',(req,res)=>{
    res.send('server is ready');
});
app.use((err , res , req , next ) => {
    res.status(500).send({message: err.message});
})
const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port}`)
});

