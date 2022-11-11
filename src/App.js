import './App.css';
import React from 'react';
import "./Style.css";
import Login from './components/login/Login'
import Sidebar from './components/sideBar/Sidebar';
import { useState } from "react";
import Dashboard from './components/dashboard/Dashboard';
import Form from './components/form/Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {UserContextProvider} from './context/UserContext'
import RequireAuth from './routes/RequireAuth';
import RequireAdmin from './routes/RequireAdmin';

const App = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "/assets/line_chart_up" },
    { title: "Form", src: "dontknow mate" },
    { title: "Setting", src: "Setting" },
  ];


  return (
    <UserContextProvider>
    <div className="App bg-[#ebf1fd] dark:bg-zinc-900 dark:text-white ">
      <Sidebar>
        <Routes>
          <Route
            path ='/dashboard'
            element= {
              <RequireAuth>
                <RequireAdmin>
                  <Dashboard />
                </RequireAdmin>
              </RequireAuth>
            }/>
            <Route 
            path="/" 
            element={
              <RequireAuth>
                <RequireAdmin>
                  <Dashboard />
                </RequireAdmin>
              </RequireAuth>
            } />
            <Route 
            path="/Form" 
            element={
              <RequireAuth>
                <Form />
              </RequireAuth>
            }/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </Sidebar>


    </div>
    </UserContextProvider>

  );
}

export default App;