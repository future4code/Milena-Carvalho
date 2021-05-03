import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {
    LoginPage, 
    CadastroPage,
    FeedPage,
    PostPage,
    ErroPage,
    PublicarPage,
  } from '../pages'

function Rotas()  {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={LoginPage}/>
                <Route path='/cadastro' component={CadastroPage}/>
                <Route path='/feed' component={FeedPage}/>
                <Route path='/post/:id' component={PostPage}/>
                <Route path='/novo-post' component={PublicarPage}/>
                <Route component={ErroPage}/>
            </Switch>
      </Router>
    )
}

export default Rotas