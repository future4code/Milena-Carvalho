import './App.css'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
    Home,
    AdicionarViagem,
    ListaViagens,
    Login,
    PaginaViagem,
    SiteLoja
} from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/admin' exact component={Login}/>
        <Route path='/admin/lista-viagens' exact component={ListaViagens}/>
        <Route path='/admin/nova-viagem' component={AdicionarViagem}/>
        <Route path='/admin/viagem' component={PaginaViagem}/>
        <Route path='/loja' component={SiteLoja}/>
      </Switch>
    </Router>
  );
}

export default App;
