require('dotenv/config');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

//Connect To DB
mongoose.connect(process.env.URI,()=>{
    console.log('connected to DB');
});

//Import routres
app.use('/student',require('./routes/students'));
app.get('/', (req,res) => {
    res.send('we r home');
});



const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`server is running at: ${PORT}`);
});