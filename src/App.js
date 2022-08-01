import './App.css';
import React from 'react';
import "./Style.css";
import Sidebar from './components/sideBar/Sidebar';
import { useState } from "react";
import Dashboard from './components/dashboard/Dashboard';
import Form from './components/form/Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "/assets/line_chart_up" },
    { title: "Form", src: "dontknow mate" },
    { title: "Setting", src: "Setting" },
  ];

  return (
      <div className="App bg-[#ebf1fd] dark:bg-zinc-900 dark:text-white ">
        

        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/Form" element={<Form />}/>
          </Routes>
        </Sidebar>


      </div>
  );
}

export default App;