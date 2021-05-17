import React from 'react'
import Router from './routes/router'
import GlobalState from './global/GlobalState'
import './App.css'

function App() {
  return (
    <GlobalState>
      <Router/>
    </GlobalState>
  )
}

export default App;
