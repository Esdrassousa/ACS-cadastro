import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Logon from './pages/Logon'
import Register from './pages/Register'
import Cadastro from './pages/Cadastro'
import NewCadastro from './pages/NewCadastro'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path='/cadastro' component={Cadastro}></Route>
                <Route path= '/membro/new' component={NewCadastro}></Route>
            </Switch>
        </BrowserRouter>
    )
}