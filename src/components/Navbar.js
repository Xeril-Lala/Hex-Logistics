import React from "react";
<<<<<<< Updated upstream
import { push as Menu } from 'react-burger-menu'

/*export const NavBar = () => {
    return <div className="bg-slate-300">panel goes here</div>
}*/

//export default sideBarPanel




export default props => {
    return (
        <Menu {...props}>
      <h1 className="menu-item" class="text-3xl pb-8" href="/">
        Hex Logistics
      </h1>
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
=======
>>>>>>> Stashed changes
