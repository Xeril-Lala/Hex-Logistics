import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import NavBar from "./components/NavBar";
import "./Style.css";


function App() {
  return (
    <div className="App bg-[#ebf1fd] dark:bg-zinc-900 dark:text-white ">
      <NavBar pageWrapId={"page-wrap"} outerContainerId={"App"}/>

      <Dashboard />
    </div>
  );
}

export default App;
