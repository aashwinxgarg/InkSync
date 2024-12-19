// import React, { useContext, useEffect } from "react";
// import "./docs.css";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import { auth } from "../config/firebase";
// import { onAuthStateChanged } from "firebase/auth";

// const Docs = () => {

//     const navigate = useNavigate();
//     const { loadUserData2 } = useContext(AppContext);
    
//     useEffect(() => {
//         onAuthStateChanged(auth, async (user) => {
//         if (user) {
//             try {
//             navigate("/documentation");
            
//             } catch (error) {
//             console.error("Error saving user UID to backend:", error);
//             }
//         } else {
//             navigate("/login");
//         }
//         });
//     }, []);

//   return (
//     <div className="container">
//       <header>
//         <h1 className="title mt-20">InkSync</h1>
//         <p className="description">
//           Introducing InkSync: an all-in-one integrated platform designed to
//           streamline communication, enhance collaboration, and improve workflow
//           efficiency for modern professionals.
//         </p>
//         <p className="special">
//           <strong>What Makes InkSync Special?</strong>
//           InkSync stands out by offering a seamless user experience, unifying
//           tools for productivity, and being meticulously designed for the needs
//           of modern teams and professionals. The project was executed in phases,
//           encompassing design, user authentication, landing page creation, video
//           calling, canvas modules, note-making, chat app integration, and
//           rigorous testing. Each sprint was delivered on time, ensuring a robust
//           and reliable platform.
//         </p>
//       </header>

//       <nav>
//         <h2>Table of Contents</h2>
//         <ul>
//           <li>
//             <a href="#notes">
//               <u>Notes</u>
//               <p style={{ textIndent: "20px", marginTop: "5px" }}>
//                 The Notes module allows users to effortlessly organize their
//                 thoughts, ideas, and tasks. With an intuitive interface, users
//                 can create, edit, and categorize notes, ensuring they stay on
//                 top of their goals and projects.
//               </p>
//             </a>
//           </li>
//           <li>
//             <a href="#meet">
//               <u>Meet</u>
//               <p style={{ textIndent: "20px", marginTop: "5px" }}>
//                 Meet offers seamless video conferencing functionality, enabling
//                 teams to communicate effectively in real-time. High-quality
//                 video and audio, along with essential features like screen
//                 sharing, make it a reliable tool for collaboration.
//               </p>
//             </a>
//           </li>
//           <li>
//             <a href="#canvas">
//               <u>Canvas</u>
//               <p style={{ textIndent: "20px", marginTop: "5px" }}>
//                 The Canvas module is an interactive space designed for
//                 brainstorming and visual collaboration. Users can draw, sketch,
//                 and design together in real-time, fostering creativity and
//                 teamwork.
//               </p>
//             </a>
//           </li>
//           <li>
//             <a href="#testing">
//               <u>Testing</u>
//               <p style={{ textIndent: "20px", marginTop: "5px" }}>
//                 The Testing tools provide comprehensive solutions to ensure
//                 quality and reliability in workflows. Automated and manual
//                 testing options help identify issues and maintain high standards
//                 of performance.
//               </p>
//             </a>
//           </li>
//         </ul>
//       </nav>

//       <section id="overview">
//         <h2>Overview</h2>
//         <p>
//           InkSync is a revolutionary platform developed to address the common
//           challenges faced by modern teams. It provides an integrated suite of
//           tools to unify communication and collaboration workflows. This
//           platform bridges gaps between fragmented tools, allowing users to
//           achieve more in less time while ensuring a seamless user experience.
//         </p>
//       </section>

//       <section id="introduction">
//         <h2>Introduction</h2>
//         <h3>Problem Statement</h3>
//         <p>
//           In today’s fast-paced digital landscape, professionals often struggle
//           with fragmented tools that disrupt workflows and hamper productivity.
//           The absence of a unified platform integrating video conferencing,
//           real-time messaging, interactive design tools, and note-taking
//           capabilities leads to inefficient communication and reduced team
//           performance. InkSync addresses these challenges by offering an
//           all-encompassing solution that fosters seamless collaboration and
//           boosts productivity.
//         </p>

//         <h3>Objective of the Project</h3>
//         <p>
//           The primary objective of this project is to create a unified and
//           intuitive platform that empowers teams to work collaboratively and
//           productively. InkSync aims to provide a seamless digital workspace
//           where tools for communication, brainstorming, and organization come
//           together in a single, easy-to-use interface.
//         </p>

//         <h3>Project Scope</h3>
//         <p>
//           The scope of this project includes the seamless integration of video
//           conferencing, real-time messaging, interactive tools like a digital
//           canvas, and an advanced note-making module. The platform ensures
//           compatibility with diverse user needs, offering a cohesive solution
//           for professionals, educators, and students alike.
//         </p>

//         <h3>Target Audience</h3>
//         <p>
//           InkSync caters to a diverse audience, including modern professionals
//           seeking productivity tools, remote teams requiring seamless
//           collaboration, educators looking for an interactive teaching medium,
//           and students who need a well-rounded platform for group projects and
//           personal organization.
//         </p>
//       </section>

//       <section id="core-features">
//         <h2>Core Features</h2>
//         <h3>Main Functionality</h3>
//         <p>
//           InkSync integrates a wide array of features, including:
//           <strong>Video Conferencing:</strong> Crystal-clear communication with
//           minimal lag for effective collaboration.
//           <br />
//           <strong>Real-Time Chat:</strong> An efficient messaging platform for
//           instant updates and conversations.
//           <br />
//           <strong>Interactive Canvas:</strong> A versatile space for
//           brainstorming, designing, and collaborating visually.
//           <br />
//           <strong>Note-Making Module:</strong> Tools for organizing and
//           structuring ideas in an intuitive format, ensuring users stay on top
//           of their tasks and goals.
//         </p>
//       </section>

//       <section id="technology-used">
//         <h2>Technology Used</h2>
//         <ul>
//           <li>
//             React: For creating dynamic and responsive front-end user
//             interfaces.
//           </li>
//           <li>
//             Node.js: To handle server-side operations and ensure efficient
//             backend processing.
//           </li>
//           <li>
//             Express: A lightweight web application framework for building robust
//             APIs.
//           </li>
//           <li>
//             MongoDB: A NoSQL database for secure and scalable data storage.
//           </li>
//           <li>WebRTC: To enable real-time video and audio communication.</li>
//           <li>
//             Socket.IO: For real-time, bidirectional communication between
//             clients and the server.
//           </li>
//           <li>
//             Other modern libraries: To ensure seamless integration and enhance
//             the overall user experience.
//           </li>
//         </ul>
//       </section>

//       <section id="future-scope">
//         <h2>Future Scope</h2>
//         <p>
//           The future vision for InkSync includes incorporating AI-powered
//           features such as smart scheduling, automated note summaries, and
//           predictive analytics for workflow optimization. The platform aims to
//           introduce advanced integrations, such as third-party tools and
//           cross-platform compatibility, to further enhance its utility.
//           Additionally, a focus on accessibility features and multilingual
//           support will ensure InkSync meets the needs of a global audience.
//         </p>
//       </section>
//     </div>
//   );
// };

// export default Docs;