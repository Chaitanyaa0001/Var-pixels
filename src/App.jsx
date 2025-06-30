import React from 'react'
import Navbar from './components/navbar/Navbar'
import Main from './components/main/Main'
import './App.css'
import BackgroundCubes from './components/Backgroundcubes/BackgroundCubes'
import Services from './components/servicesoverview/Services'


const App = () => {
  return (
    <div id='app'>
      <div id='landingpage'>
        <BackgroundCubes/>
        <Navbar/>
        <Main />
        <Services/>
        

      </div>
    </div>
  )
}

export default App