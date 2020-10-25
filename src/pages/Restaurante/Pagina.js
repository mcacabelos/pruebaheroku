import React from "react";
import "./styles.css";
import Box from "./components/Box";
import Contenido from "./components/Contenido";

export default function Pagina() {
  return (
    <div className="Pagina">
      <Box />
      <br />
      <Contenido />
    </div>
  );
}
