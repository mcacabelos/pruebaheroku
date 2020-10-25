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
import { RestaurantMenu } from '@material-ui/icons';
import Menu from "./pages/RestaurantMenu"
import ConfirmationPage from "./pages/ConfirmationPage"

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
        <Route exact path="/restaurantList" render={(props) => <Restaurants setNavbar={handleUserLogin}/>} />
        <Route exact path="/restaurantMenu" render={(props) => <Menu setNavbar={handleUserLogin}/>} />
        <Route exact path="/confirmationPage" render={(props) => <ConfirmationPage setNavbar={handleUserLogin}/>} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
