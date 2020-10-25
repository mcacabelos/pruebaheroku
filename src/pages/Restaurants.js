import React from "react";
import Busqueda from "../components/SearchBar";
import RestaurantList from "../components/RestaurantList";
import HomeNavbar from "../components/HomeNavbar";


export default function Pagina(props) {
  // props.setNavbar();
  return (
    <div className="Pagina">
    <HomeNavbar />
      <h1>¡Elegí donde vas a comer hoy!</h1>
      <Busqueda />
      <br />
      <RestaurantList />
    </div>
  );
}
