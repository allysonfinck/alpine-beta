const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session');
const bcrypt = require('bcrypt');
const port = 3000;

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static('public'));

const hikesController = require('./controllers/hikeposts.js');
app.use('/hikes', hikesController);

app.get('/', (req, res)=>{
  res.render('index.ejs');
})

mongoose.connect('mongodb://localhost:27017/alpinebeta');
mongoose.connection.once('open', ()=>{
  console.log('connected to mongo');
})

app.listen(port, ()=>{
  console.log('listening');
})
