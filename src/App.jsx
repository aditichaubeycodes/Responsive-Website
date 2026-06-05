import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Team from './components/Team'
import ContactUS from './components/ContactUS'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'

function App() {

  const [theme, setTheme] = useState(
    localStorage.getItem('theme')
      ? localStorage.getItem('theme')
      : 'light'
  )

  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Team />
      <ContactUS />
      <Toaster />
      <Footer theme={theme} />
    </div>
  )
}

export default App