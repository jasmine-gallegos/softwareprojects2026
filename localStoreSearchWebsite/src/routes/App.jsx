import './App.css'
import Home from "./home";
import Login from './login';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router';

var isLoggedIn = true;
var needsNavBar = true;

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </BrowserRouter>
  );
}

function NavBar() {
    if (needsNavBar == false) {
      return null;
    }

    return (
      <div>
        <Link to="/"><button>Home</button></Link>
        
        <Link to="/cart">{<Cart/>}</Link>
        <Link to="/login">
          {isLoggedIn ?  (<LoginProfileButton buttonName="Profile"/>) : 
            (<LoginProfileButton buttonName="Log In / Sign Up"/>)}
        </Link>

        

      </div>
    );
}

function Cart() {
  // no cart if not logged in
  if (!isLoggedIn) {
    return null;
  }

  return (
    <button>Cart</button>
  );

}

function LoginProfileButton({buttonName}) {
  return (
    <button>{buttonName}</button>
  );
}


export default App;
