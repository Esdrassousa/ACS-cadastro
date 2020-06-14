import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css'
import api from '../../services/api';


export default function New_Family() {

    const [id, setId] = useState();
    const [numero, setNumero] = useState();



    async function sub(e) {
        e.preventDefault()

        const data = {
            id,
            numero

        }

        try {

           const response =  await api.post('familia', data)
            alert('cadastrado')

        } catch (e) {
            alert('erro')
        }
    }


    return (

        <div className='NewFamily'>
            
            <form onSubmit={sub}>
                <span>Cadastre nova Familia</span>
                <input
                    placeholder="Nome do chefe da família"
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
                <input
                    placeholder="Numero de Cadastro"
                    value={numero}
                    onChange={e => setNumero(e.target.value)}
                />

                <button class='butto' type='submit'>Cadastrar</button>
            </form>
            <Link className='back' to='/cadastro'>
                <FiArrowLeft className='bit' size={22}></FiArrowLeft>Voltar
                    </Link>
        </div>
    )
}
