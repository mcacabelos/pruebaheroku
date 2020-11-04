import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import './assets/sass/main.scss';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Restaurants from './pages/Restaurants';
import "./assets/Css/styles.css";
import { RestaurantMenu } from '@material-ui/icons';
import Menu from "./pages/RestaurantMenu"
import ConfirmationPage from "./pages/ConfirmationPage"
import AdmPrincipal from "./pages/AdmPrincipal"
import AdmDashboard from "./pages/AdmDashboard"
import NewTable from "./pages/NewTable"
import MesaGrupo from "./pages/MesaGrupo"
import PantallaCobro from "./pages/PantallaCobro"

function App() {
  const [loginPage, setLoginPage] = useState(true);

  function showingLoginPageFalse(){
    setLoginPage(false);
  }

  function showingLoginPageTrue(){
    setLoginPage(true);
  }

  return (
    <div className="App">
      <Router>
        {/* <HomeNavbar isNavbarVisible={userLoggedIn}/> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" render={(props) => <Login isFooterVisible={showingLoginPageFalse}/>} />
        <Route exact path="/restaurantList" render={(props) => <Restaurants isFooterVisible={showingLoginPageTrue}/>} />
        <Route exact path="/restaurantMenu" component={Menu} />
        <Route exact path="/confirmationPage" component={ConfirmationPage} />
        <Route exact path="/AdmPrincipal" render={(props) => <AdmPrincipal isFooterVisible={showingLoginPageTrue}/>} />
        <Route exact path="/AdmDashboard" component={AdmDashboard} />
        <Route exact path="/NewTable" component={NewTable} />
        <Route exact path="/MesaGrupo" component={MesaGrupo} />
        <Route exact path="/cobro" component={PantallaCobro} />
        {loginPage ? <Footer /> : null}
      </Router>
    </div>
  );
}

export default App;
