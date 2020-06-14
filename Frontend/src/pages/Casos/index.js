import React, { useState, useEffect } from 'react'
import './styles.css'
import api from '../../services/api'

export default function Casos() {

    
    const [cadastro, setCadastro] = useState([]);

    const familyId = localStorage.getItem('familyId')

    useEffect(() => {
        api.get('familia/buscar', 
        { headers:{ 
            Authorization: familyId 
        } 
    }).then(response => {
            setCadastro(response.data)
        })
    }, [familyId])


    return (
        <div className='Cadastre'>

            <ul>

                {cadastro.map(cadastros => (
                    <li key={cadastros.nome}>
                        <strong>Nome:</strong>
                        <p>{cadastros.nome}</p>

                        <strong>CPF</strong>
                        <p>{cadastros.cpf}</p>

                        <strong>Parentesco</strong>
                        <p>{cadastros.parentesco}</p>

                        <strong>Idade</strong>
                        <p>{cadastros.idade}</p>
                    </li>
                ))}
            </ul>




        </div>
    )
}