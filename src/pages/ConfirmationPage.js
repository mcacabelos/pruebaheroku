import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "../components/Boton"
import Logo from "../components/ConfirmationLogo";
import {Link} from "react-router-dom";
import UserAppbar from "../components/UserNavbar";


export default function Pagina() {
  return (
    <div className="Pagina">
      <UserAppbar />
      <div className="App" style={{marginTop:80,}}>
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
      <Link to="/restaurantList" style={{textDecoration:"none"}}>
        <Button name="Volver al Menu Principal"/>
      </Link>
    </div>
    </div>
  );
}
