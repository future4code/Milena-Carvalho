import logo from './logo.svg';
import './App.css';
import {CadastroUsuario, ListaUsuarios, PaginaUsuario} from './pages'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={CadastroUsuario}/>
        <Route path='/lista-de-usuarios' component={ListaUsuarios}/>
        <Route path='/pagina-de-usuario' component={PaginaUsuario}/>
      </Switch>
    </Router>
    );
}
 
export default App;
