const mongoose = require('mongoose');
const User = mongoose.model('User');
const Schema = mongoose.Schema
var uniqueValidator = require('mongoose-unique-validator');

const schema = new Schema({
    nome:{
        type:String
    }, 
    
    
    /* user:[
        { type: mongoose.Schema.Types.ObjectId, 
          ref: 'User' }
    ] */

})
//schema.plugin(uniqueValidator);
mongoose.model('Family' , schema);
//module.exports = Family;