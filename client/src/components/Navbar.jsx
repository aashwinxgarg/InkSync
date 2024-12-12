import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo2.png";
import { useEffect, useState } from "react";
import assets from "../assets/assets";
import { onAuthStateChanged } from "firebase/auth";
import { auth, logout } from "../config/firebase";

export default function Navbar() {
    const [loginState, setLoginState] = useState("loggedin");
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth,async (user) => {
            if(user) {
                setLoginState("loggedin")
            }
            else {
                setLoginState("notloggedin")
            }
            navigate('/');
        })
    },[])

    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/80 shadow-lg rounded-xl px-2 py-2 z-50 backdrop-blur-md">
            <div className="flex items-center justify-between space-x-8">
                {/* Logo */}
                <a href="/" className="flex items-center">
                    <div className="w-10">
                        <img src={Logo} alt="" />
                    </div>{" "}
                    {/* Logo Icon */}
                    <span className="text-lg font-semibold text-gray-900">
                        InkSync
                    </span>
                </a>
                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-6">
                    <a
                        href="/note-app"
                        className="text-gray-700 hover:text-black"
                    >
                        Notes
                    </a>
                    <a
                        href="/customers"
                        className="text-gray-700 hover:text-black"
                    >
                        Meet
                    </a>
                    <a
                        href="/enterprise"
                        className="text-gray-700 hover:text-black"
                    >
                        Canvas
                    </a>
                    <a
                        href="/pricing"
                        className="text-gray-700 hover:text-black"
                    >
                        Chat
                    </a>
                    <a href="/docs" className="text-gray-700 hover:text-black">
                        Docs
                    </a>
                    <a
                        href="/contact-sales"
                        className="text-gray-700 hover:text-black"
                    >
                        Contact
                    </a>
                </div>
                {/* Sign-in Button */}
                {
                loginState==="notloggedin"?
                    <div>
                        <a
                            href="/login"
                            className="px-4 py-2 bg-black text-white rounded-xl flex items-center space-x-2 hover:bg-gray-800 whitespace-nowrap"
                        >
                            <span>Sign in</span>
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 12h14M12 5l7 7-7 7"
                                />
                            </svg>
                        </a>
                    </div>
                    :
                    <>
                        <img src={assets.avatar_icon} alt="" srcset="" className="w-10" />
                        <div onClick={()=>logout()}>
                        <a
                            href="/"
                            className="-ml-3 px-2 py-2 bg-black text-white rounded-xl flex items-center hover:bg-gray-800 whitespace-nowrap"
                        >
                            <span>Logout</span>
                        </a>
                    </div>
                    </>
                }
            </div>
        </nav>
    );
}
