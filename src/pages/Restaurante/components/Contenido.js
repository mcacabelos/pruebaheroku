import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FiltrosComidas from "./FiltrosComidas";
import Card from "./Card";
import Typography from "@material-ui/core/Typography";
import Boton from "./Boton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paragraph: {
    textAlignLast: "center"
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={3}>
          <br />
          <br />
          <Typography
            gutterBottom
            style={{
              color: "#16817A",
              fontFamily: "Montserrat",
              fontWeight: "Bold"
            }}
            variant="h6"
            component="h2"
          >
            Filtros
          </Typography>
          <FiltrosComidas />
        </Grid>
        <Grid item xs={3}>
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
            Platos
          </Typography>
          <Card />
          <br />
          <br />
          <br />
          <Card />
        </Grid>
        <Grid item xs={3}>
          <br />
          <br />
          <br />
          <br />
          <Card />
          <br />
          <br />
          <br />
          <Card />
        </Grid>
        <Grid item xs={3}>
          <br />
          <br />
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
            ¡Armá tu Mesa!
          </Typography>
          <Boton />
        </Grid>
      </Grid>
    </div>
  );
}
