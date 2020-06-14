import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { FiLogIn } from 'react-icons/fi'
import './styles.css'
import api from '../../services/api'
import './fuction'
import Cadastror from './fuction'




export default function Cadastro() {
    
    const [cad, setCad] = useState();
    const [clik, setClick] = useState();
    const [cadastro, setCadastro] = useState([]);
    const [id, setId] = useState('');

    

    //fu.a(id)
     async function Buscar(e) {
        e.preventDefault();

        try {

            await api.post('familia/id', { id })

            localStorage.setItem('familyId', id)

            const familyId = localStorage.getItem('familyId')
          
             await api.get('familia/buscar',
                {
                    headers: {
                        Authorization: familyId
                    }
                }).then(response => {
                    setCadastro(response.data)

                })
 


            setCad(cadastro.map(cadastros => (
                <li key={cadastros.id}>
                    <strong>Nome:</strong>
                    <p>{cadastros.nome}</p>

                    <strong>CPF</strong>
                    <p>{cadastros.cpf}</p>

                    <strong>Parentesco</strong>
                    <p>{cadastros.parentesco}</p>

                    <strong>Idade</strong>
                    <p>{cadastros.idade}</p>
                </li>
            )));
            //setClick(<a href= 'membro/new' className="button" >Cadastrar Novo Membro</a>)



        } catch (e) {

            alert('erro')

        }

    }

    
    const familyId =  localStorage.getItem('familyId')

    

     useEffect(async function fet() {
        await api.get('familia/buscar',
            {
                headers: {
                    Authorization: familyId
                }
            }).then(response => {
                setCadastro(response.data)
            })
    }, []) 

    useEffect(() => {
        setCad((cadastro.map(cadastros => (
            <li key={cadastros.id}>
                <strong>Nome:</strong>
                <p>{cadastros.nome}</p>

                <strong>CPF</strong>
                <p>{cadastros.cpf}</p>

                <strong>Parentesco</strong>
                <p>{cadastros.parentesco}</p>

                <strong>Idade</strong>
                <p>{cadastros.idade}</p>
            </li>
        ))))
    }, [familyId])

    useEffect(() =>{
        (cadastro.map(cadastros => (
            <li key={cadastros.id}>
                <strong>Nome:</strong>
                <p>{cadastros.nome}</p>

                <strong>CPF</strong>
                <p>{cadastros.cpf}</p>

                <strong>Parentesco</strong>
                <p>{cadastros.parentesco}</p>

                <strong>Idade</strong>
                <p>{cadastros.idade}</p>
            </li>
        )))
    }, [Buscar])
    
    return (

        <div className='Cadastre'>
            <header>

                <form onSubmit={Buscar} >
                    <span>Buscar família</span>

                    <input
                        placeholder="Nome do chefe da família"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />

                    <button type='submit'>
                        <FiSearch setClick='submit' size={25} color="#e02041" />
                    </button>


                </form>
                
                
                <a href='familia'>
                    <FiLogIn size={25} color="#e02041" /> Cadastrar nova Família
                </a>

                

            </header>

            <ul>
                {cad}
            </ul>

            
            {clik}


        </div>
    )
}