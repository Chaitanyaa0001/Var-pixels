import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/homepage/Home';
import Servicepage from './pages/services/Servicepage';
import Portfolio from './pages/portfolio/Portfolio';
import Blog from './pages/blog/Blog';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Login from './pages/login/Login';
import Signp from './pages/signup/Signp';
import Viewdetails from './pages/otherpages/Viewdetails';
import ServiceDetail from './pages/otherpages/ServiceDetail'
import BlogDetail from './pages/otherpages/BlogDetail';



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/service' element={<Servicepage />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/blog' element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signp />} />
      <Route path='/projects/:slug' element={<Viewdetails />} />
    </Routes>
  );
};

export default App;