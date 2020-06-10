const mongoose = require('mongoose');
const User = mongoose.model('User');
const Family = mongoose.model('Family')
const repositore = require('../repositories/user-repositore')
const md5 = require('md5')



exports.post = async(req, res)=>{

    try{
        await repositore.create({
            family:Family._id,
            email:req.body.email,
            password: md5(req.body.password + global.SALT_KEY)

        })
        res.status(201).send({message:'cadastrado com sucesso'})

    }catch(e){
        res.status(400).send({ message: 'erro ao buscar cpf', e });
    }    
}

exports.getByNome = async(req, res)=>{
    try{
        var data =await repositore.getByNome(req.params.nome)
        res.status(200).send(data)

    }catch(e){
        res.status(400).send({ message: 'erro ao buscar cpf', e });
    }
}

exports.authentication= async(req , res , next) => {
    try{
        var usuario = await repositore.authentication({
            nome: req.body.nome,
            password: md5(req.body.password + global.SALT_KEY)
        });
        

        if(!usuario){
            res.status(404).send({
                message:'Usuario ou senha invalidos'
        })
            return;
        }
        res.status(200).send(usuario)

        
    }catch(e){
        res.status(404).send(e)
    }
}