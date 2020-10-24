import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import './assets/sass/main.scss';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Restaurants from './pages/Restaurants';
import "./App.css";
import UserNavbar from './components/UserNavbar.js';
import HomeNavbar from './components/HomeNavbar.js';

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(true);
  
  function handleUserLogin(){
    setUserLoggedIn(false);
  }

  return (
    <div className="App">
      <Router>
        <HomeNavbar isNavbarVisible={userLoggedIn}/>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/reservas" render={(props) => <Restaurants setNavbar={handleUserLogin}/>} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
