import React from 'react'
import Navbar from '../../components/home/navbar/Navbar'
import Main from '../../components/main/Main'
import Services from '../../components/home/servicesoverview/Services'
import Products from '../../components/featuredproducts/Products'
import Client from '../../components/clients/Client'
import Cta from '../../components/cta/Cta'
import Footer from '../../components/footer/Footer'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Main />
        <Services/>
        <Growth/>
        <Products/>
        <Client/>
        <Cta/>
        <Footer/>

    </div>
  )
}

export default Home