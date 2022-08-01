
import React from 'react';
import ReactDOM from "react-dom/client";
import { useState } from "react";
// pages imports
import Form from "../form/Form";
import Dashboard from '../dashboard/Dashboard';
import { SiHexo } from "react-icons/si"

import {
    FaTh,
    FaBars,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
  const menuItem=[
      {
          path:"/",
          name:"Dashboard",
          icon:<FaTh/>
      },
      {
        path:"/Form",
        name:"Form",
        icon:<FaThList/>
      },
  ]
  return (
      <div className="container-side h-full ">
         <div style={{width: isOpen ? "200px" : "50px"}} className=" text-white sidebar bg-gradient-to-b from-cyan-500 to-blue-500 mr-10">
             <div className="top_section mb-3 ">
                 <h1 style={{display: isOpen ? "block" : "none"}} className="logo"> <SiHexo/> </h1>
                 <div style={{marginLeft: isOpen ? "80px" : "0px"}} className="bars text-white">
                     <FaBars onClick={toggle}/>
                 </div>
             </div>
             {
                 menuItem.map((item, index)=>(
                     <NavLink to={item.path} key={index} className="bg-transparent flex link duration-75" activeclassName="bg-sky-900">
                         <div className="icon">{item.icon}</div>
                         <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                     </NavLink>
                 ))
             }
         </div>
         <main>{children}</main>
      </div>
  );
};

export default Sidebar;