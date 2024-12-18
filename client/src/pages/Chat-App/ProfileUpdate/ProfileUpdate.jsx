import React, { useContext, useEffect, useState } from "react";
import "./ProfileUpdate.css";
import assets from "../../../assets/assets";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";
import { auth, db } from "../../../config/firebase";
import Logo from '../../../assets/logo2.png'

const ProfileUpdate = () => {
    const navigate = useNavigate();

    const [image, setImage] = useState(false);
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [uid, setUid] = useState("");
    const { setUserData } = useContext(AppContext);

    const profileUpdate = async (event) => {
        event.preventDefault();
        try {
            const docRef = doc(db, "users", uid);
            if (name) {
                await updateDoc(docRef, {
                    bio: bio,
                    name: name,
                });
            } else {
            }
            await updateDoc(docRef, {
                bio: bio,
                name: name,
            });
            const snap = await getDoc(docRef);
            setUserData(snap.data());
            navigate("/textink/chat");
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUid(user.uid);
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.data().name) {
                    setName(docSnap.data().name);
                }
                if (docSnap.data().bio) {
                    setBio(docSnap.data().bio);
                } else {
                    navigate("/");
                }
            } else {
            }
        });
    }, []);

    return (
        <>
            <div className="profile">
                <div className="profile-container">
                    <form onSubmit={profileUpdate}>
                        <h3>Profile Details</h3>
                        {/* <label htmlFor="avatar">
                    <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='avatar' accept='.png, .jpg, .jpeg' hidden/>
                    <img src={image? URL.createObjectURL(image) : assets.avatar_icon} alt="" />
                    upload profile image
                    </label> */}
                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            type="text"
                            placeholder="Your name"
                            required
                        />
                        <textarea
                            onChange={(e) => setBio(e.target.value)}
                            value={bio}
                            placeholder="Write profile bio"
                            required
                        ></textarea>
                        <button type="submit">Save</button>
                    </form>
                    <img
                        className="profile-pic"
                        src={
                            image
                                ? URL.createObjectURL(image)
                                : Logo
                        }
                        alt="Logo"
                    />
                </div>
            </div>
        </>
    );
};

export default ProfileUpdate;
