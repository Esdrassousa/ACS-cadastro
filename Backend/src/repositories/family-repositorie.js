const mongoose = require('mongoose')
const Family = mongoose.model('Family')
const User = mongoose.model('User')

exports.create = async(data)=>{
    var family = new Family(data);
    await family.save();
} 

exports.getById = async(id)=>{
    var res = await Family.findOne({
        id:id
    })
    return res
}