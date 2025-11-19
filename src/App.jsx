import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Education from './Components/Education/Education'
import Testimonials from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
     <Projects />
     <Education />
     <Testimonials />
     <Contact />
     <Footer />
    </>
  )
}

export default App
