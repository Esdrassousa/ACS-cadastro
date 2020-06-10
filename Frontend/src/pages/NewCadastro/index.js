import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css'

export default function NewCadastro() {
    return (
        <div className="NewCadastro">
            <section className="form">
                <form>
                    <h1>Cadastro de novo mebro da Família</h1>
                    <input placeholder="Nome"></input>
                    <input placeholder="CPF"></input>
                    <input placeholder="Parentesco"></input>
                    <input placeholder="idade"></input>
                    <button className="button">Cadastro</button>
                    <Link className='back' to='/cadastro'>
                        <FiArrowLeft className='bit' size={22}></FiArrowLeft>Voltar
                    </Link>
                </form>
            </section>
        </div>
    )
}