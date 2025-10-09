import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Navbar from './components/Navbar';
import Hero from './components/Hero';


gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className='flex h-[100vh]'>
      <Navbar />
      <Hero />
      
    </div>
  )
}

export default App
