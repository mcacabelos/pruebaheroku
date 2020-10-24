import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FiltrosComidas from "./FiltrosComidas";
import FiltrosUbicacion from "./FiltrosUbicacion";
import ClubMilanesa from "./Cards/ClubMilanesa";
import SushiClub from "./Cards/SushiClub";
import FabricSushi from "./Cards/FabricSushi";
import GreenEat from "./Cards/GreenEat";
import LaMesada from "./Cards/LaMesada";
import MezcalDeAmores from "./Cards/MezcalDeAmores";
import Sandwich from "./Cards/Sandwich";
import Bonnies from "./Cards/Bonnies";

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
          <p className={classes.paragraph}>Filtros</p>
          <br />
          Comidas
          <br />
          <br />
          <FiltrosComidas />
        </Grid>
        <Grid item xs={2}>
          <Bonnies />
        </Grid>
        <Grid item xs={2}>
          <ClubMilanesa />
        </Grid>
        <Grid item xs={2}>
          <GreenEat />
        </Grid>
        <Grid item xs={2}>
          <LaMesada />
        </Grid>
        <Grid item xs={3}>
          Ubicación
          <br />
          <br />
          <FiltrosUbicacion />
        </Grid>
        <Grid item xs={2}>
          <FabricSushi />
        </Grid>
        <Grid item xs={2}>
          <MezcalDeAmores />
        </Grid>
        <Grid item xs={2}>
          <SushiClub />
        </Grid>
        <Grid item xs={2}>
          <Sandwich />
        </Grid>
      </Grid>
    </div>
  );
}
