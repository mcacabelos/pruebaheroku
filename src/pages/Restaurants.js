import React from "react";
import Busqueda from "../components/SearchBar";
import PanelFiltros from "../components/RestaurantList";


export default function Pagina(props) {
  // props.setNavbar();
  return (
    <div className="Pagina">
      <h1>¡Elegí donde vas a comer hoy!</h1>
      <Busqueda />
      <br />
      <PanelFiltros />
    </div>
  );
}
