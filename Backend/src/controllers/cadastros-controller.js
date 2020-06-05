const mongoose = require('mongoose')
const Cadastro = mongoose.model('Cadastro')
const repository = require('../repositories/cadastro-repositorie')
const valida = require('../validaCPF')

exports.getByCpf = async (req, res) => {

    try {
        var data = await repository.getByCpf(req.params.cpf)
        res.send(data)
    } catch (e) {
        res.status(400).send({ message: 'erro ao buscar cpf', e });
    }

}

exports.post = async (req, res, next) => {

   
    try {

        var a = await valida.TestaCPF(req.body.cpf)

        //if(a == false){

        //}



    } catch (err) {
        res.send({ message: 'erro' })
    }

    if (a == true ) {
        try {
            await repository.create({

                nome: req.body.nome,
                cpf: req.body.cpf,
                parentesco: req.body.parentesco,
                idade: req.body.idade
            })

            res.status(201).send(req.body);
        } catch (e) {
            res.status(400).send({ message: 'erro ao tentar cadastrar', e });
        }
    } else (res.send({ message: 'cpf invalido' }))
}