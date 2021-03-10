// My Main App Component

import React from "react"
import { Route } from "react-router-dom"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
// import "./KandyKorner.css"
// import { Login } from "../auth/Login"
// import { Register } from "../auth/Register"
// import { Home } from "../Home"

export const KandyKorner = () => (
    <>
    
    <NavBar />
    <ApplicationViews />
    
    </>
)


// export const KandyKorner = () => (
//     <>
//       <Route
//         render={() => {
//           if (localStorage.getItem("kandy_customer")) {
//             return (
//               <>
//                 <Home />
//                 <NavBar />
//                 <ApplicationViews />
//               </>
//             );
//           } else {
//             return <Redirect to="/login" />;
//           }
//         }}
//       />
  
//       <Route path="/login">
//         <Home />
//         <Login />
//       </Route>
//       <Route path="/register">
//         <Home />
//         <Register />
//       </Route>
//     </>
//   );