import {DetalhesPlaylist, TodasPlaylists} from './pages'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={TodasPlaylists}/>
        <Route path='/detalhes-playlist' component={DetalhesPlaylist}/>
      </Switch>
    </Router>
  );
}

export default App;
