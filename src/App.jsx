import React from 'react'
import './App.css'
import { Route, Router } from 'react-router-dom'
import Home from './pages/homepage/Home'



const App = () => {
  return (
    <Router>
      <Route to='/' element={<Home/>}></Route>
    </Router>      
  )
}

export default App