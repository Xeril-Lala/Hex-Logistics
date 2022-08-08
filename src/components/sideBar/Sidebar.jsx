
import React from 'react';
import { useState } from "react";
// pages imports
import { SiHexo } from "react-icons/si"
import { BiLogOutCircle } from "react-icons/bi"
import { AiOutlineDashboard } from "react-icons/ai";
import {
    FaTh,
    FaBars,
    FaThList,
    FaWpforms
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import {useUser} from '../../hooks/useUser'

const Sidebar = ({children}) => {
    const {isLogged, logout,isAdmin} = useUser()

    const handleClick = e =>{
        e.preventDefault()
        logout()
    }

  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
  const menuItem=[
      {
        path:"/Form",
        name:"Form",
        icon:<FaWpforms/>
      }
  ]
  return (

      <div className="container-side h-full ">
        { isLogged &&
         <div style={{width: isOpen ? "200px" : "50px"}} className="text-white sidebar bg-gradient-to-b from-cyan-500 to-blue-500 mr-10">
             <div className="top_section mb-3 ">
                 <h1 style={{display: isOpen ? "block" : "none"}} className="logo"> <SiHexo/> </h1>
                 <div style={{marginLeft: isOpen ? "80px" : "0px"}} className="bars text-white cursor-pointer">
                     <FaBars onClick={toggle}/>
                 </div>
             </div>
             {
                isAdmin &&
                    <a href='/' className="bg-transparent flex bottom-1  link duration-75 items-center" activeclassName="bg-sky-900">
                        <div className='icon'><AiOutlineDashboard/></div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Dashboard</div>
                    </a>
             }

             {
                 menuItem.map((item, index)=>(
                     <NavLink to={item.path} key={index} className="bg-transparent flex link duration-75 items-center" activeclassName="bg-sky-900">
                         <div className="icon">{item.icon}</div>
                         <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                     </NavLink>
                 ))
             }
                      
            <NavLink to='/login' className="bg-transparent flex bottom-1  link duration-75 items-center" activeclassName="bg-sky-900" onClick={handleClick}>
                <div className='icon'><BiLogOutCircle className=' text-gray-100'/></div>
                <div style={{display: isOpen ? "block" : "none"}} className="link_text">Logout</div>
            </NavLink>
         </div>
}
         <main>{children}</main>
      </div>
  );
};

export default Sidebar;