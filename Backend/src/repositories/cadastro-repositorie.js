const mongoose = require('mongoose')
const Cadastro = mongoose.model('Cadastro')
const valida = require('../validaCPF')


exports.getByCpf = async(cpf)=>{
    var res = await Cadastro.find({ 
        cpf:cpf },
        'nome cpf')
        return res;
}

exports.create = async(data)=>{
    //await valida.TestaCPF(data.body.cpf);
    var cadastro = new Cadastro(data)
    
    await cadastro.save()

}