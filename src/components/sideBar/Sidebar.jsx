
import React from 'react';
import { useState } from "react";
// pages imports
import { SiHexo } from "react-icons/si"
import { BiLogOutCircle } from "react-icons/bi"
import { AiOutlineDashboard } from "react-icons/ai";
import {
    FaBars,
    FaWpforms
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import {useUser} from '../../hooks/useUser'

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
        icon:<FaWpforms/>
      }
  ]
  return (

      <div className="flex h-screen">
        { isLogged &&
         <div style={{width: isOpen ? "350px" : "80px"}} className="bg-gradient-to-b from-cyan-400 to-blue-500">
             <div className="top_section">
                 <h1 style={{display: isOpen ? "block" : "none"}} className=""> <SiHexo/> </h1>
                 <div style={{marginLeft: isOpen ? "165px" : "28px"}} className=" mt-8">
                     <FaBars onClick={toggle}/>
                 </div>
             </div>
             {
                isAdmin &&
                    <a href='/' className="" activeclassName="">
                        <div className='icon'><AiOutlineDashboard/></div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Dashboard</div>
                    </a>
             }

             {
                 menuItem.map((item, index)=>(
                     <NavLink to={item.path} key={index} className="r" activeclassName="">
                         <div className="icon">{item.icon}</div>
                         <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                     </NavLink>
                 ))
             }
                      
            <NavLink to='/login' className="" activeclassName="" onClick={handleClick}>
                <div className='icon'><BiLogOutCircle/></div>
                <div style={{display: isOpen ? "block" : "none"}} className="link_text">Logout</div>
            </NavLink>
         </div>
}
         <main>{children}</main>
      </div>
  );
};

export default Sidebar;