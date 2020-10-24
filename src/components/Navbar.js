import React from "react";
import { Link } from "react-router-dom";



function NavBar (props){
    const correctPage = () => {
      return 'none';
    }
    if(props.isNavbarVisible) {return <nav className="navbar container">
       <div >
         <input className="search-in" type="text" placeholder="¿Qué necesitas?" />
         </div>
      
        <div className="nabvar-section-navigation">
          
          <Link className={"login-link " + correctPage()} to="/login">Login</Link>
          <Link className="login-link "  to="/register">Registrarse</Link>
        </div>
      </nav>; } else return null; 
}

export default NavBar;