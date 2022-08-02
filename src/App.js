import './App.css';
import React from 'react';
import Dashboard from './components/dashboard/Dashboard';
import NavBar from "./components/Navbar";
import "./Style.css";



function App() {
  return (
    <div className="App dark:text-white pb-20">
      <NavBar/>

      <Dashboard />
    </div>
  );
}

export default App;
