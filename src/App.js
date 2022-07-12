import './App.css';
import Greet from'./components/Greet';
import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/Navbar";
import "./Style.css";



function App() {
  return (
    <div className="App">
      <NavBar pageWrapId={"page-wrap"} outerContainerId={"App"}/>
      
    </div>
  );
}

export default App;
