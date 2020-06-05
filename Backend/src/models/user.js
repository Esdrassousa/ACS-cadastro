const mongoose= require('mongoose');
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
const user = new Schema({
    nome:{
        type:String,
        required: true,
        unique: true
    }, 

    password:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true
    }
})
user.plugin(uniqueValidator,{message:'nome ja utiizado'});
mongoose.model('User' , user);
