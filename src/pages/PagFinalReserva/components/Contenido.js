import React from "react";
import Typography from "@material-ui/core/Typography";
import Boton from "./Boton";
import Logo from "./Logo";

export default function Contenido() {
  return (
    <div className="App">
      <br />
      <br />
      <Logo />
      <br />
      <br />
      <Typography
        gutterBottom
        style={{
          color: "#16817A",
          fontFamily: "Montserrat",
          fontWeight: "Bold"
        }}
        variant="h3"
        component="h2"
      >
        Su reserva en Bonnie´s ha sido confirmada.
      </Typography>
      <br />
      <Typography
        gutterBottom
        style={{
          color: "#FA744F",
          fontFamily: "Montserrat",
          fontWeight: "Bold"
        }}
        variant="h4"
        component="h2"
      >
        ¡Te esperamos!
      </Typography>
      <br />
      <br />
      <Boton />
    </div>
  );
}
