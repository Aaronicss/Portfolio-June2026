import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import NavBar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <>
    <NavBar />
    <Hero />
    <About />
    <Projects />
    <Contact />
    </>
  )
}

export default App
