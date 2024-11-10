import React from 'react'
import Navbar from './components/Navbar'
import Highlights from './components/highlight'
import Feature from './components/Section-2'
import Hero from './components/hero'
import Images from './components/Image'
import Teamimg from './components/team'
import { Contact } from './components/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Highlights />
      <Images />
      <Contact />
      <Teamimg />
      <Feature />
    </div>
  )
}

export default App