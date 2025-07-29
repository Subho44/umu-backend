const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectdb = require('./config/db');
const jobRoutes = require('./routes/jobRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5700;
connectdb();

app.use(cors());
app.use(express.json());

app.use('/api/jobs',jobRoutes);

app.get('/',(req,res)=>{
    res.send('Api is working');
});
app.listen(PORT,()=>{
    console.log('server is running port 5700');
})


