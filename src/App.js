import './App.css';
import React from 'react';
import "./Style.css";
import Sidebar from './components/sideBar/Sidebar';
import { useState } from "react";
import Dashboard from './components/dashboard/Dashboard';

const App = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "/assets/line_chart_up" },
    { title: "Form", src: "dontknow mate" },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <div className="App bg-[#ebf1fd] dark:bg-zinc-900 dark:text-white ">
      <Dashboard/>
    </div>
  );
}

export default App;