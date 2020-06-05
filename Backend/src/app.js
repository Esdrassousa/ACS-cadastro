const express = require('express')
const bodyparser =  require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
var cors = require('cors');



const app = express()
app.use(cors());
//connection with database
mongoose.connect(config.connectionString)

//run models
const Cadastro = require('./models/cadastros')
const User = require('./models/user');


//call routes
const cadastrosRoute = require('./routes/cadastros-route')
const userRouter = require('./routes/user-route');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}))




app.use('/cadastros' , cadastrosRoute);
app.use('/user' , userRouter);
module.exports = app;