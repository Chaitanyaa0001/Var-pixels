import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Main from '../../components/home/main/Main'
import Services from '../../components/home/servicesoverview/Services'
import Growth from '../../components/home/growth/Growth'
import Products from '../../components/home/featuredproducts/Products'
import Client from '../../components/home/clients/Client'
import Cta from '../../components/home/cta/Cta'
import Footer from '../../components/footer/Footer'



const Home = () => {
  return (
    <div>
        <Navbar/>
        <Main/>
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