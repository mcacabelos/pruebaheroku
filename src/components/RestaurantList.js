import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FiltrosComidas from "./FoodFilter";
import FiltrosUbicacion from "./UbicationFilter";
import restaurantList from "../ListOfRestaurants"
import RestaurantCard from "./RestaurantCard"

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
          Ubicación
          <br />
          <br />
          <FiltrosUbicacion />
        </Grid>
        {restaurantList.map((value) => {
          return <RestaurantCard 
            restaurantName = {value.name}
            image = {value.img}
            direction = {value.dir}
            foodType = {value.foodType}
          />
        })}
      </Grid>
    </div>
  );
}
