import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export default function Cadastro() {

     


    return (
        <div className='Cadastre'>
            <header>
                <span>Buscar família</span>
                <input type="text" placehold='Id' />
                <form>
                    <button className='button' type='submit'>Procurar</button></form>
                <Link className="button" to='/membro/new'>Cadastrar Novo Membro</Link>
            </header>


            <ul>

                <li>
                    <strong>Nome:</strong>
                    <p>João</p>

                    <strong>CPF</strong>
                    <p>23244353535</p>

                    <strong>Parentesco</strong>
                    <p>pai</p>

                    <strong>Idade</strong>
                    <p>25</p>
                </li>

                <li>
                    <strong>Nome:</strong>
                    <p>MAria</p>

                    <strong>CPF</strong>
                    <p>085946984694</p>

                    <strong>Parentesco</strong>
                    <p>mãe</p>

                    <strong>Idade</strong>
                    <p>29</p>
                </li>

                <li>
                    <strong>Nome:</strong>
                    <p>antonio</p>

                    <strong>CPF</strong>
                    <p>0729030933048</p>

                    <strong>Parentesco</strong>
                    <p>filho</p>

                    <strong>Idade</strong>
                    <p>1</p>
                </li>


            </ul>



        </div>
    )
}