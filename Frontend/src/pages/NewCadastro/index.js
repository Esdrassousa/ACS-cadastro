import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css'
import api from '../../services/api'

export default function NewCadastro() {
    const[nome , setNome] = useState();
    const[cpf , setCpf] = useState();
    const[parentesco , setParentesco] = useState();
    const[idade , setIdade] = useState();

async function sub(e){
    e.preventDefault()

    const familyId = localStorage.getItem('familyId')
               

    const data = { 
        nome,
        cpf,
        parentesco,
        idade
        

    }
    try{

        await  api.post('cadastro' , data , {headers:{
            Authorization:familyId
        }})
        alert('cadastrado')

    }catch(e){
        alert('erro')
    } 
}
    return (
        <div className="NewCadastro">
            <section className="form">
                <form onSubmit={sub}>
                    <h1>Cadastro de novo mebro da Família</h1>
                    
                    <input value={nome} onChange={e=>setNome(e.target.value)} 
                      placeholder="Nome"></input>

                    <input value={cpf} onChange={e=>setCpf(e.target.value)}
                      placeholder="CPF"></input>

                    <input  value={parentesco} onChange={e=>setParentesco(e.target.value)} 
                    placeholder="Parentesco"></input>

                    <input  value={idade} onChange={e=>setIdade(e.target.value)}
                     placeholder="idade"></input>

                    <button className="button">Cadastro</button>
                    <Link className='back' to='/cadastro'>
                        <FiArrowLeft className='bit' size={22}></FiArrowLeft>Voltar
                    </Link>
                </form>
            </section>
        </div>
    )
}