import React from 'react'
import Navbar from './component/Navbar/page'
import Home from './pages/Home/page'
import Footer from './component/Footer/Footer'
import About from './pages/About/page'
import Events from './pages/Events/page'
import Courses from './pages/Courses/page'



const page = () => {
  return (
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <Events/>
    <Courses/>
    <Footer/>
    </div>
  )
}

export default page;