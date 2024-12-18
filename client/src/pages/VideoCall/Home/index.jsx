import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const [value, setValue] = useState("");
    const navigate = useNavigate();

    const handleJoinRoom = useCallback(() => {
        navigate(`/inkonnect/room/${value}`);
    }, [navigate, value]);

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            backgroundColor: "#000", // Black background
            color: "#fff", // White text for contrast
            fontFamily: "'Roboto', sans-serif",
        },
        title: {
            fontSize: "3rem",
            marginBottom: "1rem",
            color: "#ff69b4", // Neon pink color for the title
            textTransform: "uppercase",
            letterSpacing: "4px",
            textShadow: "0 0 8px rgba(255, 105, 180, 0.8)",
        },
        input: {
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            borderRadius: "5px",
            border: "none",
            marginBottom: "1rem",
            width: "300px",
            backgroundColor: "#333",
            color: "#fff",
            outline: "none",
            boxShadow: "0 0 10px rgba(255, 105, 180, 0.5)",
        },
        button: {
            padding: "0.75rem 1.5rem",
            fontSize: "1.2rem",
            borderRadius: "5px",
            backgroundColor: "#ff69b4", // Pink button
            border: "none",
            color: "#fff",
            cursor: "pointer",
            textTransform: "uppercase",
            letterSpacing: "2px",
            transition: "transform 0.2s, box-shadow 0.2s",
            boxShadow: "0 0 10px rgba(255, 105, 180, 0.8)",
        },
        buttonHover: {
            transform: "scale(1.05)",
            boxShadow: "0 0 15px rgba(255, 105, 180, 1)",
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Inkonnect</h1>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder="Enter Room Code"
                style={styles.input}
            />
            <button 
                style={styles.button}
                onMouseOver={(e) => e.currentTarget.style.transform = styles.buttonHover.transform}
                onMouseOut={(e) => e.currentTarget.style.transform = ""}
                onClick={handleJoinRoom}
            >
                Join
            </button>
        </div>
    );
};

export default HomePage;
