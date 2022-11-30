
import React from 'react';
import { useState } from "react";

// pages imports
import { SiHexo } from "react-icons/si"
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBars, FaWpforms }from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import { GiHistogram } from "react-icons/gi";
import { RiFileHistoryLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';
import "./Sidebar.css";
import hexlogo from '../assets/hexlog-removebg.png';



const Sidebar = ({children}) => {
    const {/*isLogged*/logout,isAdmin} = useUser()
    const isLogged = 'True';
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
        icon:<FaWpforms/>,
      },
      {
        path:"/Historic",
        name:"Logs",
        icon:<RiFileHistoryLine/>,
      }
  ]
  return (
<div class="h-full w-full items-stretch">
      <div className="container-side static h-full w-full items-stretch">
        { isLogged &&
         <div   style={{width: isOpen ? "250px" : "70px"}}
                className="text-gray-100 sidebar bg-neutral-800">
             <div className="top_section mb-3 ">
                 <h1    style={{display: isOpen ? "block" : "none"}} 
                        className="logo"> <img src={hexlogo} /> </h1>
                 <div   style={{marginLeft: isOpen ? "140px" : "-7px"}} 
                        className="bars text-white cursor-pointer rounded-full p-3">
                     <FaBars onClick={toggle}/>
                 </div>
             </div>
             {
                isAdmin &&
                    <a href='/' className="bg-transparent flex bottom-1  link duration-75 items-center">
                        <div    className='icon'><AiOutlineDashboard/></div>
                        <div    style={{display: isOpen ? "block" : "none"}} 
                                className="link_text">Dashboard</div>
                    </a>
             }

             {
                 menuItem.map((item, index)=>(
                     <NavLink   to={item.path} key={index} 
                                className="bg-transparent flex link duration-75 items-center" >

                         <div   className="icon">{item.icon}</div>
                         <div   style={{display: isOpen ? "block" : "none"}} 
                                className="link_text">{item.name}</div>
                     </NavLink>
                 ))
             }
                      
            <NavLink    to='/login' 
                        className="bg-transparent flex bottom-1  link duration-75 items-center" 
                        onClick={handleClick}>
                <div className='icon'><BiLogOutCircle/></div>
                <div style={{display: isOpen ? "block" : "none"}} 
                        className="link_text">Logout</div>
            </NavLink>
         </div>
}
       <main>{children}</main>

       </div>
            
        </div>
);
};

export default Sidebar;
