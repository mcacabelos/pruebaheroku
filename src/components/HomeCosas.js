import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Pasos from "../assets/img/Pasos.png";
import Cards from "../components/HomeRestaurantes";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth style={{ backgroundColor: "#FFFFFF" }}>
        <br />
        <br />
        <br />
        <br />
        <Typography
          variant="h4"
          style={{ flexGrow: 1, paddingLeft: 10, color: "#16817A" }}
        >
          Los mejores restaurantes
        </Typography>
        <br />
        <br />
        <Cards />
        <br />
        <br />
        <br />
        <br />
      </Container>
      <Container maxWidth style={{ backgroundColor: "#fa744f" }}>
        <br />
        <br />
        <Typography
          variant="h4"
          style={{ flexGrow: 1, paddingLeft: 10, color: "#FFFFFF" }}
        >
          Disfruta de tu comida en 5 simples pasos
        </Typography>
        <br />
        <br />
        <br />
        <br />
        <img src={Pasos} className="Pasos" />
      </Container>
    </div>
  );
}