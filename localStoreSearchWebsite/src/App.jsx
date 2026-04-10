import { useState } from 'react'
import './App.css'
import Home from "./routes/home";

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {

  return (
     <Router>
      <div className="App" id="id">
        <Link to="/">Home</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </Router>
  )
}

export default App;
