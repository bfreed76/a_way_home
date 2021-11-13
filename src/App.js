import React from "react";
import Home from "./Containers/home.js";
import SignIn from "./Components/SignIn"
import Navigation from "./Components/Navigation"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Navbar used for dev only
function App() {
  return (
    <Router>
      <div >
        <ul className='Menu'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/signIn'>Sign In</Link>
          </li>
          <li>
            <Link to='/navigation'>Nav Page</Link>
          </li>
        </ul>

        <Routes>
          <Route exact path='/' element={<Home />}>
          </Route>
          <Route path='/signIn' element={<SignIn />}> 
          </Route>
          <Route path='/navigation' element={<Navigation />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
