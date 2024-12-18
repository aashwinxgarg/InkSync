import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "../config/firebase.jsx";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext ();

const AppContextProvider = (props) => {

    const navigate = useNavigate();

    const [userData,setUserData] = useState(null);
    const [chatData,setChatData] = useState(null);
    const [messagesId,setMessagesId] = useState(null);
    const [messages,setMessages] = useState([]);
    const [chatUser,setChatUser] = useState(null); 
    const [chatVisible,setChatVisible] = useState(false);


    // Helper function to get Firebase ID token
    const getIdToken = async () => {
        const user = auth.currentUser;
        if (user) {
            return await user.getIdToken();
        }
        return null;
    };

    const loadUserData = async (uid) => {
        try {
            const userRef = doc(db,'users',uid);
            const userSnap = await getDoc(userRef);
            const userData = userSnap.data();
            setUserData(userData);
            if(userData.name) {
                navigate('/textink/chat')
            }
            else {
                navigate('/profile-update')
            }
            await updateDoc(userRef,{
                lastSeen:Date.now()
            })
            setInterval( async ()=>{
                if(auth.chatUser) {
                    await updateDoc(userRef,{
                        lastSeen:Date.now()
                    })
                }
            },60000)
        } catch (error) {
            
        }
    }

    const loadUserData2 = async (uid) => {
        try {
            const userRef = doc(db,'users',uid);
            const userSnap = await getDoc(userRef);
            const userData = userSnap.data();
            setUserData(userData);
            
            navigate('/note-app')
            await updateDoc(userRef,{
                lastSeen:Date.now()
            })
            setInterval( async ()=>{
                if(auth.chatUser) {
                    await updateDoc(userRef,{
                        lastSeen:Date.now()
                    })
                }
            },60000)
        } catch (error) {
            console.error("Error loading user data: ", error);
        }
    }

    useEffect(()=>{
        if(userData) {
            const chatRef = doc(db,'chats',userData.id);
            const unSub = onSnapshot(chatRef,async (res) => {
                const chatItems = res.data().chatsData;
                const tempData = [];
                for(const item of chatItems) {
                    const userRef = doc(db,'users',item.rId);
                    const userSnap = await getDoc(userRef);
                    const userData = userSnap.data();
                    tempData.push({...item,userData})
                }
                setChatData(tempData.sort((a,b)=>b.updatedAt - a.updatedAt));
            })
            return () => {
                unSub();
            }
        }
    },[userData])

    const value = {
        userData,setUserData,
        chatData,setChatData,
        loadUserData, loadUserData2, getIdToken,
        messages,setMessages,
        messagesId,setMessagesId,
        chatUser,setChatUser,
        chatVisible,setChatVisible
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider