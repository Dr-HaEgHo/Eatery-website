import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
          <Home/> 
        <Routes>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
