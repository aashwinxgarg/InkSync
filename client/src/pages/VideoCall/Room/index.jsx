// import React, { useEffect, useRef } from "react";
// import { useParams } from "react-router-dom";
// import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

// const RoomPage = () => {
//     const { roomId } = useParams();
//     const meetingRef = useRef(null);

//     useEffect(() => {
//         const myMeeting = async (element) => {
//             const appId = 2142287109;
//             const serverSecret = "b638b887427815448cb846ab531af6f5";
//             const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, roomId, Date.now().toString(), "Name");
//             const zc = ZegoUIKitPrebuilt.create(kitToken);
//             zc.joinRoom({
//                 container: element,
//                 sharedLinks: [
//                     {
//                         name: 'Copy Link',
//                         url: `http://localhost:5173/video-call/room/${roomId}`
//                     }
//                 ],
//                 scenario: {
//                     mode: ZegoUIKitPrebuilt.OneONoneCall,
//                 },
//                 showScreenSharingButton: true,
//             });
//         };

//         if (meetingRef.current) {
//             myMeeting(meetingRef.current);
//         }
//     }, [roomId]);

//     const styles = {
//         container: {
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             height: "100vh",
//             backgroundColor: "#000", 
//             color: "#fff", 
//             fontFamily: "'Roboto', sans-serif",
//             padding: "20px",
//             boxSizing: "border-box",
//         },
//         title: {
//             fontSize: "1.0rem",
//             marginBottom: "2rem",
//             color: "#ff69b4", 
//             textShadow: "0 0 8px rgba(255, 105, 180, 0.8)",
//             textTransform: "uppercase",
//             letterSpacing: "2px",
//         },
//         meetingContainer: {
//             width: "100%",
//             maxWidth: "1200px",
//             height: "85vh",
//             boxShadow: "0 0 20px rgba(255, 105, 180, 0.5)",
//             borderRadius: "10px",
//             overflow: "hidden",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             backgroundColor: "#1a1a1a", 
//         },
//         info: {
//             marginTop: "1.5rem",
//             fontSize: "1rem",
//             color: "#ff69b4",
//             textShadow: "0 0 5px rgba(255, 105, 180, 0.8)",
//         }
//     };

//     return (
//         <div style={styles.container}>
//             <h1 style={styles.title}>TalkMe Room: {roomId}</h1>
//             <div ref={meetingRef} style={styles.meetingContainer}></div>
//             <p style={styles.info}>Enjoy your call with TalkMe! Share the link with others to join.</p>
//         </div>
//     );
// };

// export default RoomPage;



import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const RoomPage = () => {
    const { roomId } = useParams();
    const meetingRef = useRef(null);

    useEffect(() => {
        const myMeeting = async (element) => {
            if (!roomId) return; // Fallback for undefined roomId
            const appId = 2142287109;
            const serverSecret = "b638b887427815448cb846ab531af6f5";
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                appId,
                serverSecret,
                roomId,
                Date.now().toString(),
                "Name"
            );
            const zc = ZegoUIKitPrebuilt.create(kitToken);
            zc.joinRoom({
                container: element,
                sharedLinks: [
                    {
                        name: 'Copy Link',
                        url: `ink-sync-three.vercel.app/inkonnect/room/${roomId}`,
                    },
                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall,
                },
                showScreenSharingButton: true,
            });
        };

        if (meetingRef.current) {
            myMeeting(meetingRef.current);
        }
    }, [roomId]);

    return (
        <div className='bg-gray-200' style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div ref={meetingRef} style={{ width: "100%", maxWidth: "1200px", height: "85vh" }}></div>
        </div>
    );
};

export default RoomPage;
