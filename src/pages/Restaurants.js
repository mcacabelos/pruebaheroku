import React from "react";
import Busqueda from "../components/SearchBar";
import RestaurantList from "../components/RestaurantList";
import UserNavbar from "../components/UserNavbar";


export default function Pagina(props) {
  props.isFooterVisible();
  return (
    <div className="Pagina">
    <UserNavbar />
      <h1>¡Elegí donde vas a comer hoy!</h1>
      <Busqueda />
      <br />
      <RestaurantList />
    </div>
  );
}
