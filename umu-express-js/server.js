const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
app.use(cors(origin='http://localhost:5173'));
//import all routes
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
//import middlewares
const adduser = require('./middleware/adduser');
const getuser = require('./middleware/getuser');

const products = [
    { id: 1, name: 'laptop', category: 'electronics', price: 56000 },
    { id: 2, name: 'phone', category: 'electronics', price: 16000 },
    { id: 3, name: 'shirt', category: 'colthing', price: 2600 },
    { id: 4, name: 'shoes', category: 'colthing', price: 560},

];
app.get('/products',(req,res)=>{
    const {search,category,maxPrice} = req.query;
    let result = [...products];
    console.log(result);

    //filtering with keyword
    if(search) {
        result = result.filter(x=>
            x.name.toLowerCase().includes(search.toLowerCase())
        );
    }
    //category filter
    if(category) {
        result = result.filter(x=>x.category === category);
    }
    //maxprice filter
    if(maxPrice) {
        result = result.filter(x=>x.maxPrice <= parseInt(maxPrice));
    }

   res.json({
    total:result.length,
    products:result,
   });
});


app.use(express.json());
app.get('/profile', adduser, getuser);
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
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
app.listen(PORT, () => console.log('server is running port 6700'));