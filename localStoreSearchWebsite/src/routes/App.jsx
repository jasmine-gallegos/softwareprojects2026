import './App.css'
import Home from "./home";
import Login from './login';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router';

var isLoggedIn = true;

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <SearchBar />
        <Link to="/login">Log In / Sign Up</Link>

        {isLoggedIn ?  (<LoginSignupButton buttonName="Profile"/>) : (<LoginSignupButton buttonName="Log In / Sign Up"/>)}

      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </BrowserRouter>
  );
}

function LoginSignupButton({buttonName}) {
  return (
    <button>{buttonName}</button>
  );
}

function SearchBar() {
  return (
  <div>
    <input type="search" id="siteSearch" />
    <button>Search</button>
  </div>
  );
}





export default App;
