import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'
 
import './styles.css'
import api from '../../services/api';




//sem importancia
export default function Logon(){

  const[email , setEmail] = useState('');
  const[senha, setSenha] =useState('');
  const history = useHistory();

  async function handleLogon(e){
    e.preventDefault();

    const data = {
        email,
        senha
    };

    try{

      const response = await api.post('user/authentication' , data)
      alert('encontrado')
      history.push('/cadastro')

    }catch(e){
      alert('erro')
    }
  }


    return(
        <div className="logon-container">
          
        <section className="form">

          <form onSubmit={handleLogon}>
            <h1>Entre no Sistema</h1>

            <input className = "email" placeholder = "nome" 
            value ={email} onChange={e=>setEmail(e.target.value)}>

            </input>
            <input className = "senha" placeholder = "sua senha" 
            value={senha} onChange={e => setSenha(e.target.value)}>

            </input>

            <button className="button" type="submit">Entrar</button>

            <Link to = "/register">
              <FiLogIn size={15} color = "#e02041"/>
              Ainda não sou cadastrado
            </Link>
            
          </form>

        </section>
      </div>
    )
}