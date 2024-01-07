const express = require('express')
const app = express()
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://azzeddaoui:%40A1971*.@cluster0.5mocllq.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log('Connected to MongoDB');  
});

const  Usermodel = require('./users');
// respond with "hello world" when a GET request is made to the homepage
app.get('/',async (req, res) => {
    const user = await Usermodel.find();
  res.json(user)
})

app.listen(8080)
