// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import Home from './components/home/Home';
import Signup from './components/login/Signup';
import MyWallet from './components/pages/wallet/MyWallet'

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/Signup" element={<Signup/>} /> 
        <Route path="/MyWallet" element={<MyWallet/>} /> 

       </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
