import React from "react";
import { push as Menu } from 'react-burger-menu'

export default props => {
    return (
        <Menu {...props}>
      <h1 className="menu-item text-3xl pb-8" href="/">
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