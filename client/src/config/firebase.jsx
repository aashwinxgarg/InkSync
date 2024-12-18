
import { initializeApp } from "firebase/app";
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const firebaseConfig = {
    apiKey: "AIzaSyArJYi0KF54vIP5RXaqdrC8xdv2U6ovhQg",
    authDomain: "inksync-d95b3.firebaseapp.com",
    projectId: "inksync-d95b3",
    storageBucket: "inksync-d95b3.firebasestorage.app",
    messagingSenderId: "792394689582",
    appId: "1:792394689582:web:c004665f7029b6ada5c3bf"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await setDoc(doc(db,"users",user.uid),{
            id:user.uid,
            username:username.toLowerCase(),
            email:email,
            name:"",
            avatar:"",
            bio:"Hey there, I am using InkSync app",
            lastSeen:Date.now()
        })
        await setDoc(doc(db,"chats",user.uid),{
            chatsData:[]
        })
        await setDoc(doc(db,"notes",user.uid),{
            title:"",
            content:"",
            tags:[],
            isPinned:false,
            userId:user.uid,
            createdOn:Date.now(),
        })
    } catch (error) {
        console.error(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.error(error)
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error(error)
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const resetPass = async (email) => {
    if(!email) {
        toast.error("Enter your email");
        return null;
    }
    try {
        const userRef = collection(db,'users');
        const q = query(userRef,where("email","==",email));
        const querySnap = await getDocs(q);
        if(!querySnap.empty) {
            await sendPasswordResetEmail(auth,email);
            toast.success("Reset Email Sent");
        }
        else {
            toast.error("Email does not exist");
        }
    } catch (error) {
        console.error(error);
        toast.error(error);
    }
}

export {signup,login, logout,auth,db,resetPass}