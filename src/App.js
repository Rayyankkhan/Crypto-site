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

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>} /> 

       </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
