import './App.css';
import React from 'react';
import Dashboard from './components/dashboard/Dashboard';
import NavBar from "./components/Navbar";
import "./Style.css";



function App() {
  return (
    <div className="App bg-[#ebf1fd] dark:bg-zinc-900 dark:text-white ">
      <NavBar/>

      <Dashboard />
    </div>
  );
}

export default App;
