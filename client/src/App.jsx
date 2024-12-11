import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CompanyCarousel from './components/CompanyCarousel'
import Features from './components/Features'
import ScrollPage from './components/ScrollPage'
import Footer from './components/Footer/Footer'

const MainLayout = () => {
    return (
        <>
            <Navbar/>
        </>
    )
}

const router = createBrowserRouter([
    {
        path:'/',
        element: (
            <>
                <Navbar/>
                <Hero/>
                <CompanyCarousel/>
                <Features/>
                <ScrollPage/>
                <Footer/>
            </>
        ),
    },
    {
        path:'/note-app'
    }
])

function App() {
    return <RouterProvider router={router} />;
}
export default App


// This is STUXNET Here
