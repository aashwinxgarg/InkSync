// import React, { useEffect, useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import HomePage from './VideoCall/Home';
// import RoomPage from './VideoCall/Room';
// import SplashScreen from './VideoCall/SplashScreen';
// import './VideoCall/SplashScreen.css'; 
// function VideoCallPage() {
//     const [showSplash, setShowSplash] = useState(true);

//     useEffect(() => {
//         const splashTimeout = setTimeout(() => {
//             setShowSplash(false);
//         }, 5000); 

//         return () => clearTimeout(splashTimeout);
//     }, []);

//     return (
//         <>
//             {showSplash ? <SplashScreen /> : (
//                 <Routes>
//                     <Route path='/' element={<HomePage />} />
//                     <Route path='/video-call/room/:roomId' element={<RoomPage />} />
//                 </Routes>
//             )}
//         </>
//     );
// }

// export default VideoCallPage;


import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './VideoCall/Home';
import RoomPage from './VideoCall/Room';
import SplashScreen from './VideoCall/SplashScreen';
import './VideoCall/SplashScreen.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';
import { AppContext } from '../context/AppContext';

function VideoCallPage() {
    const navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                navigate("/inkonnect/home");
            } else {
                navigate("/login");
            }
        });
    }, []);
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const splashTimeout = setTimeout(() => {
            setShowSplash(false);
        }, 5000); 

        return () => clearTimeout(splashTimeout);
    }, []);

    return (
        <>
            {showSplash ? (
                <SplashScreen />
            ) : (
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/room/:roomId" element={<RoomPage />} />
                </Routes>
            )}
        </>
    );
}

export default VideoCallPage;
