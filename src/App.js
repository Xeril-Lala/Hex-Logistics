import logo from './logo.svg';
import './App.css';
import './components/dashboard/Bay';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl dark:bg-slate-800 bg-blue-200 font-bold underline">
        Putos
      </h1>
      <Bay></Bay>
    </div>
  );
}

export default App;
