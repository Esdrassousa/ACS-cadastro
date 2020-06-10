const mongoose= require('mongoose');
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
//const Family = mongoose.model('Family')

const user = new Schema({
    nome:{
        type:String,
        required: true,
        unique: true
    }, 

    //family:
       // { type: Schema.Types.ObjectId, ref: 'Family' },
    

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
