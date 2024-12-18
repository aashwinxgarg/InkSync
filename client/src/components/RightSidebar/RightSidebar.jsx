import React, { useContext } from 'react'
import './RightSidebar.css'
import assets from '../../assets/assets'
import { logout } from '../../config/firebase'
import { AppContext } from '../../context/AppContext'

const RightSidebar = () => {

    const {chatUser,messages} = useContext(AppContext);

  return chatUser ? (
    <div className='rs'>
        <div className="rs-profile">
            <img className='ml-8 mb-2' src={assets.avatar_icon} alt="" />
            <h3> {Date.now() - chatUser.userData.lastSeen <= 70000 ? <img src={assets.green_dot} alt="" className='dot' /> : null} {chatUser.userData.name}</h3>
            <p>{chatUser.userData.bio}</p>
        </div>
        <hr />
        {/* <div className="rs-media">
            <p>Media</p>
            <div>
                <img src={assets.pic1} alt="" />
                <img src={assets.pic2} alt="" />
                <img src={assets.pic3} alt="" />
                <img src={assets.pic4} alt="" />
                <img src={assets.pic1} alt="" />
                <img src={assets.pic2} alt="" />
            </div>
        </div> */}
        <button onClick={()=>logout()}>Logout</button>
    </div>
  )
  : (
    <div className="rs">
        <button onClick={()=>logout()}>Logout</button>
    </div>
  )
}

export default RightSidebar
