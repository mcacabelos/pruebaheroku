import React from "react";
import Busqueda from "./Components/Busqueda";
import PanelFiltros from "./Components/PanelFiltros";


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
