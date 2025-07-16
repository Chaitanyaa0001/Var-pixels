import React from 'react'
import Navbar from './components/home/navbar/Navbar'
import Main from './components/main/Main'
import './App.css'
import Services from './components/home/servicesoverview/Services'
import Growth from './components/growth/Growth'
import Products from './components/featuredproducts/Products';
import Client from './components/clients/Client'
import Cta from './components/cta/Cta'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <div id='app'>
      <div id='landingpage'>
        
        <Navbar/>
        <Main />
        <Services/>
        <Growth/>
        <Products/>
        <Client/>
        <Cta/>
        <Footer/>
        

      </div>
    </div>
  )
}

export default App