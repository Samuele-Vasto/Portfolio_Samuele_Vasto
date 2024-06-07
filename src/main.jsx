import React from 'react'
import ReactDOM from 'react-dom/client'
import './components/Navbar.jsx'
import Navbar from './components/Navbar.jsx'
import 'tailwindcss/tailwind.css'
import './components/Hero.jsx'
import Hero from './components/Hero.jsx'
import './components/About.jsx'
import About from './components/About.jsx'
import './components/Skills.jsx'
import Skills from './components/Skills.jsx'
import './components/Portfolio.jsx'
import Portfolio from './components/Portfolio.jsx'
import './components/Contact.jsx'
import Contact from './components/Contact.jsx'
import './components/Footer.jsx'
import Footer from './components/Footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
    <Skills></Skills>
    <Portfolio></Portfolio>
    <Contact></Contact>
    <Footer></Footer>
  </React.StrictMode>,
)
