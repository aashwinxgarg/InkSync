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
import NotesMain from './pages/NotesMain'


function App() {
    return (
        <>
            <ToastContainer/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/chat-app' element={<Chat/>} />
                <Route path='/profile-update' element={<ProfileUpdate/>} />
                <Route path='/chat-app/chat' element={<Chat/>} />
                <Route path='/note-app' element={<NotesMain/>} />
            </Routes>
        </>
    );
}
export default App


// This is STUXNET Here
