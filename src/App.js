// import logo from './logo.svg';
import './App.css';
// import Navbar from './components/home/navigation/Navbar';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   BrowserRouter
// } from "react-router-dom";
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import Home from './components/home/Home';
import Sidebar from './components/pages/wallet/sidebar/Sidebar';
import Signup from './components/login/Signup';

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/sidebar" element={<Sidebar/>} /> 
        <Route path="/Signup" element={<Signup/>} /> 

       </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
