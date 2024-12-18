import React, { useContext, useEffect, useState } from "react";
import "./Chat.css";
import LeftSidebar from "../../../components/LeftSidebar/LeftSidebar";
import ChatBox from "../../../components/ChatBox/ChatBox";
import RightSidebar from "../../../components/RightSidebar/RightSidebar";
import { AppContext } from "../../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../config/firebase";

const Chat = () => {
    const { chatData, userData } = useContext(AppContext);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { loadUserData } = useContext(AppContext);

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                navigate("/textink/chat");
                await loadUserData(user.uid);
            } else {
                navigate("/login");
            }
        });
    }, []);

    useEffect(() => {
        if (chatData && userData) {
            setLoading(false);
        }
    }, [chatData, userData]);

    return (
        <>
            <div className="chat">
                {loading ? (
                    <p className="loading">Loading...</p>
                ) : (
                    <div className="chat-container">
                        <>
                            <LeftSidebar />
                            <ChatBox />
                            <RightSidebar />
                        </>
                    </div>
                )}
            </div>
        </>
    );
};

export default Chat;
