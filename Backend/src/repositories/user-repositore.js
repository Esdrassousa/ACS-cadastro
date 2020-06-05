const mongoose = require('mongoose')
const User = mongoose.model('User')


exports.create = async(data)=>{
    var user = new User(data);
    await user.save();
} 

exports.getByNome = async(nome)=>{
    var res = await User.find({
        nome:nome
    } , 'nome')
    return res
}