import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard'
import {Routes,Route} from 'react-router-dom'
import { useState } from 'react';



function App() {

  const [isLoggedIn , setIsLoggedIn] = useState(false);
  return (
    <> 
    
    <div className="w-screen h-screen bg-black flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>

      <Routes>
        <Route path='/' element ={<Home/>}></Route>
        <Route path='/login' element ={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path='/signup' element ={<Signup setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path='/Dashboard' element ={<Dashboard/>}></Route>
      </Routes>
    </div></>
   
  );
}

export default App;
