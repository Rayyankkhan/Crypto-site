// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import Home from './components/home/Home';
import MyWallet from './components/pages/wallet/MyWallet';

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/wallet" element={<MyWallet/>} /> 

       </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
