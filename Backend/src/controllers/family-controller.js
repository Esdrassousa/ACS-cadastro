const mongoose =require('mongoose')
const repositore = require('../repositories/family-repositorie')
const Family = mongoose.model('Family')

exports.post = async(req, res)=>{

    try{
        await repositore.create(req.body)
        res.status(201).send({message:'cadastrado com sucesso'})

    }catch(e){
        res.status(400).send({ message: 'erro ao cadastrar', e });
    }    
}

exports.getById = async(req, res) =>{
    try{
        var data = await repositore.getById(req.params.id)
        res.status(200).send(data)
    }catch(e){
        res.status(400).send({ message: 'erro ao buscar id', e });
    }

}