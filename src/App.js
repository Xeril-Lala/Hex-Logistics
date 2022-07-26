import './App.css';
import React from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Form from './components/form/Form';
import "./Style.css";
import { useState } from "react";

const App = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "/assets/line_chart_up" },
    { title: "Form", src: "dontknow mate" },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <div className="App bg-[#ebf1fd] dark:bg-zinc-900 dark:text-white ">
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-gradient-to-b from-cyan-500 to-blue-500 h-full-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./assets/terminal.svg"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Hex Logistics
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-cyan-600 
              hover:text-gray-200 text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-full w-full">
        <h1 className="text-2xl font-semibold ">
          <Form/>  
        </h1>
      </div>
    </div>
    </div>
  );
};
export default App;