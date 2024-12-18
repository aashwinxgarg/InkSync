import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import assets from "../../../assets/assets.js";
import Logo from "../../../assets/logo2.png";
import { signup, login, resetPass, auth } from "../../../config/firebase.jsx";

const Login = () => {
    const [currState, setCurrState] = useState("Sign up");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const { loadUserData } = useContext(AppContext);

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                navigate("/");
            } else {
                navigate("/login");
            }
        });
    }, []);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (currState === "Sign up") {
            signup(userName, email, password);
        } else {
            login(email, password);
        }
    };

    return (
        <>
            <div className="login">
                <img src={Logo} alt="" className="logo" />
                <form className="login-form" onSubmit={onSubmitHandler}>
                    <h2>{currState}</h2>
                    {currState === "Sign up" ? (
                        <input
                            onChange={(e) => setUserName(e.target.value)}
                            value={userName}
                            type="text"
                            placeholder="username"
                            className="form-input"
                            required
                        />
                    ) : null}
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="Email Address"
                        className="form-input"
                        required
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        placeholder="password"
                        className="form-input"
                        required
                    />
                    <div className="login-term">
                        <input type="checkbox" required />
                        <p>Agree to the terms of use and privacy policy.</p>
                    </div>
                    <button type="submit">
                        {currState === "Sign up"
                            ? "Create account"
                            : "Login now"}
                    </button>
                    <div className="login-forgot">
                        {currState === "Sign up" ? (
                            <p className="login-toggle">
                                Already have an account{" "}
                                <span onClick={() => setCurrState("Login")}>
                                    Login here
                                </span>
                            </p>
                        ) : (
                            <p className="login-toggle">
                                Create an account{" "}
                                <span onClick={() => setCurrState("Sign up")}>
                                    click here
                                </span>
                            </p>
                        )}
                        {currState === "Login" ? (
                            <p className="login-toggle">
                                Forgot Password ?{" "}
                                <span onClick={() => resetPass(email)}>
                                    reset here
                                </span>
                            </p>
                        ) : null}
                    </div>
                </form>
            </div>
        </>
    );
};
import "./Login.css";
import { onAuthStateChanged } from "firebase/auth";
import { AppContext } from "../../../context/AppContext.jsx";
import { useNavigate } from "react-router-dom";

export default Login;
