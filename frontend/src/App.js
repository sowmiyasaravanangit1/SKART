import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from "./components/home";
import Register from "./components/register";
import Login from './components/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {< Home />} />
        <Route path = "/Login" element = { <Login />} />
        <Route path = "/Register" element= {<Register/>}/>
        <Route path = "/Home" element = {<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
