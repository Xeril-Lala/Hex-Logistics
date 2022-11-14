
import React from 'react';
import ReactDOM from "react-dom/client";
import { useState } from "react";
// pages imports
import Form from "../form/Form";
import Dashboard from '../dashboard/Dashboard';
import { SiHexo } from "react-icons/si"
import { AiOutlineDashboard } from "react-icons/ai";
import {
    FaTh,
    FaBars,
    FaThList,
    FaWpforms
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
  const menuItem=[
      {
          path:"/",
          name:"Dashboard",
          icon:<AiOutlineDashboard/>
      },
      {
        path:"/Form",
        name:"Form",
        icon:<FaWpforms/>
      },
  ]
  return (
      <div className="container-side h-full ">
<<<<<<< Updated upstream:src/components/sideBar/Sidebar.js
         <div style={{width: isOpen ? "200px" : "50px"}} className=" text-white sidebar bg-gradient-to-b from-cyan-500 to-blue-500 mr-10">
             <div className="top_section mb-3 ">
                 <h1 style={{display: isOpen ? "block" : "none"}} className="logo"> <SiHexo/> </h1>
                 <div style={{marginLeft: isOpen ? "80px" : "0px"}} className="bars text-white">
=======
        { isLogged &&
         <div style={{width: isOpen ? "350px" : "75px"}} className="text-gray-900 sidebar bg-gradient-to-b bg-white mr-10">
             <div className="top_section mb-3 ">
                 <h1 style={{display: isOpen ? "block" : "none"}} className="logo"> <SiHexo/> </h1>
                 <div style={{marginLeft: isOpen ? "200px" : "0px"}} className="bars text-gray-600 cursor-pointer">
>>>>>>> Stashed changes:src/components/sideBar/Sidebar.jsx
                     <FaBars onClick={toggle}/>
                 </div>
             </div>
             {
<<<<<<< Updated upstream:src/components/sideBar/Sidebar.js
                 menuItem.map((item, index)=>(
                     <NavLink to={item.path} key={index} className="bg-transparent flex link duration-75" activeclassName="bg-sky-900">
=======
                isAdmin &&
                    <a href='/' className="bg-transparent flex bottom-1  link duration-75 items-center" activeclassName="bg-red-900">
                        <div className='icon'><AiOutlineDashboard/></div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Dashboard</div>
                    </a>
             }

             {
                 menuItem.map((item, index)=>(
                     <NavLink to={item.path} key={index} className="bg-transparent flex link duration-75 items-center" activeclassName="bg-red-900">
>>>>>>> Stashed changes:src/components/sideBar/Sidebar.jsx
                         <div className="icon">{item.icon}</div>
                         <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                     </NavLink>
                 ))
             }
<<<<<<< Updated upstream:src/components/sideBar/Sidebar.js
=======
                      
            <NavLink to='/login' className="bg-transparent flex bottom-1  link duration-75 items-center" activeclassName="bg-red-900" onClick={handleClick}>
                <div className='icon'><BiLogOutCircle/></div>
                <div style={{display: isOpen ? "block" : "none"}} className="link_text">Logout</div>
            </NavLink>
>>>>>>> Stashed changes:src/components/sideBar/Sidebar.jsx
         </div>
         <main>{children}</main>
      </div>
  );
};

export default Sidebar;