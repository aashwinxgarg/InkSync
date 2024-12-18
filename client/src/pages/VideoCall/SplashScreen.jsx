import React from 'react';
import './SplashScreen.css'; // Import the updated crazy CSS

const SplashScreen = () => {
    return (
        <div className="splash-container">
            <h1 className="splash-title">Inkonnect</h1>
            <p className="splash-subtitle">Connecting you to the future...</p>
            <div className="background-effects"></div>
        </div>
    );
};

export default SplashScreen;
