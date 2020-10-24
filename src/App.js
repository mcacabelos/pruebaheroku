import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import './assets/sass/main.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Restaurants from './pages/Restaurants'
import "./App.css";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  
  function handleUserLogin(){
    setUserLoggedIn(false);
  }

  return (
    <div className="App">
      <Router>
        <Navbar isNavbarVisible={handleUserLogin}/>
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
