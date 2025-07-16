import React from 'react'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/homepage/Home'
import Servicepage from './pages/services/Servicepage'
import Portfolio from './pages/portfolio/Portfolio'
import Blog from './pages/blog/Blog'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Login from './pages/login/Login'
import Signp from './pages/signup/Signp'





const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/service' element={<Servicepage/>}></Route>
      <Route path='/portfolio' element={<Portfolio/>}></Route>
      <Route path='/blog' element={<Blog/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signp/>}></Route>

    </Routes>      
  )
}

export default App