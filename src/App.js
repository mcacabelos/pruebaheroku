import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import './assets/sass/main.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
<<<<<<< HEAD
import Pagina from './pages/PagRestaurantes/Pagina'
import "./App.css";
=======
import Pagina from './pages/Restaurants'
>>>>>>> f219745afd079f5d5cebf0d8e5f54ae4362cec6f



function App() {
  const [navbarVisibility, setNavbarVisibility] = useState(true);
  
  function handleNavbarVisibility(){
    setNavbarVisibility(false);
  }

  return (
    <div className="App">
      <Router>
        <Navbar isNavbarVisible={navbarVisibility}/>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/reservas" render={(props) => <Pagina setNavbar={handleNavbarVisibility}/>} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
