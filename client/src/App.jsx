import { useContext, useEffect, useState } from 'react'
import './App.css'
import { createBrowserRouter, Route, RouterProvider, Routes, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CompanyCarousel from './components/CompanyCarousel'
import Features from './components/Features'
import { onAuthStateChanged } from 'firebase/auth'
import ScrollPage from './components/ScrollPage'
import Footer from './components/Footer/Footer'
import { AppContext } from './context/AppContext'
import Login from './pages/Chat-App/Login/Login'
import { auth } from './config/firebase'
import { ToastContainer } from 'react-toastify'
import Home from './pages/LandingPage/Home'

const MainLayout = () => {
    return (
        <>
            <Navbar />
        </>
    )
}





function App() {
    return (
        <>
            <ToastContainer />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
            </Routes>
        </>
    );
}
export default App


// This is STUXNET Here
