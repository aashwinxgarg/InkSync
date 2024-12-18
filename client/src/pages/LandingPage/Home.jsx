import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import CompanyCarousel from '../../components/CompanyCarousel'
import Features from '../../components/Features'
import ScrollPage from '../../components/ScrollPage'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <>
        <Hero/>
        <CompanyCarousel/>
        <Features/>
        <ScrollPage/> 
        <Footer/>
    </>
  )
}

export default Home
