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
import AdmPrincipal from "./pages/AdmPrincipal"
import AdmDashboard from "./pages/AdmDashboard"

function App() {
  const [loginPage, setLoginPage] = useState(true);

  function showingLoginPage(){
    setLoginPage(false);
  }

  return (
    <div className="App">
      <Router>
        {/* <HomeNavbar isNavbarVisible={userLoggedIn}/> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" render={(props) => <Login isFooterVisible={showingLoginPage}/>} />
        <Route exact path="/restaurantList" component={Restaurants} />
        <Route exact path="/restaurantMenu" component={Menu} />
        <Route exact path="/confirmationPage" component={ConfirmationPage} />
        <Route exact path="/AdmPrincipal" component={AdmPrincipal} />
        <Route exact path="/AdmDashboard" component={AdmDashboard} />
        {loginPage ? <Footer /> : null}
      </Router>
    </div>
  );
}

export default App;
