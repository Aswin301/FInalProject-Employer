import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Newjobpost from './components/newjobpost';

function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/Home" element={<Home/>}/>
    <Route  path="/jobpost" element={<Newjobpost/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
