import React from 'react'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/homepage/Home'
import Servicepage from './pages/services/Servicepage'



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/service' element={<Servicepage/>}></Route>
    </Routes>      
  )
}

export default App