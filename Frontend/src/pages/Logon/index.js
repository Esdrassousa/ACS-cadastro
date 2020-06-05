import React from 'react'
import {Link} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'
 
import './styles.css'

//sem importancia
export default function Logon(){
    return(
        <div className="logon-container">
          
        <section className="form">

          <form>
            <h1>Entre no Sistema</h1>

            <input className = "email" placeholder = "seu email"></input>
            <input className = "senha" placeholder = "sua senha"></input>

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