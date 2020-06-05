const mongoose = require('mongoose');
const Schema = mongoose.Schema
var uniqueValidator = require('mongoose-unique-validator');

const schema = new Schema({
    nome:{
        type:String,
        required:true,

    },
    cpf:{
        type: Number,
        required:true,
        //min: [11 , 'nao permitido menos de 11 numeros'], 
        //max:15,
        unique: true 
     },   
    
    
    parentesco:{
        type:String,
        required:true
        
    },
    idade:{

        type:String,
        required:true

    }

})
schema.plugin(uniqueValidator);
module.exports = mongoose.model('Cadastro' , schema);