const express = require('express');
const app = express();
require('dotenv').config();
//import all routes
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
//import middlewares
const adduser = require('./middleware/adduser');
const getuser = require('./middleware/getuser');

app.use(express.json());
app.get('/profile',adduser,getuser);
app.use('/api/products',productRoutes);
app.use('/api/users',userRoutes);
app.use('/api/orders',orderRoutes);

app.get('/',(req,res)=>{
    res.send('Api is running sucessfully');
});
// app.get('/about',(req,res)=>{
//     res.send('welcome to about page');
// });
// app.get('/contact',(req,res)=>{
//     res.send('welcome to contacct page');
// });
// app.get('/api',(req,res)=>{
//     res.json({message:'json data'});
// });
const PORT = process.env.PORT || 6700
app.listen(PORT,()=> console.log('server is running port 6700'));