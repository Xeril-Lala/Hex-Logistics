import React from "react";
import { elastic as Menu } from 'react-burger-menu'

/*export const NavBar = () => {
    return <div className="bg-slate-300">panel goes here</div>
}*/

//export default sideBarPanel




export default props => {
    return (
        <Menu {...props}>
      <a className="menu-item" href="/">
        Dashboard
      </a>

      <a className="menu-item" href="/bays">
        Bays
      </a>

      <a className="menu-item" href="/services">
        Services
      </a>

      <a className="menu-item" href="/settings">
        Settings
      </a>
    </Menu>
    );
};