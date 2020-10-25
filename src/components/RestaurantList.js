import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FiltrosComidas from "./FoodFilter";
import FiltrosUbicacion from "./UbicationFilter";
import restaurantList from "../ListOfRestaurants"
import RestaurantCard from "./RestaurantCard"
import Typography from "@material-ui/core/Typography";

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
        <Grid item xs={12} sm={3}>
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
            Comida
          </Typography>
            <br />
            <br />
            <FiltrosComidas />
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
            Ubicacion
          </Typography>
            <br />
            <br />
            <FiltrosUbicacion />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Grid container spacing={5}>
            {restaurantList.map((value) => {
          return <RestaurantCard 
            restaurantName = {value.name}
            image = {value.img}
            direction = {value.dir}
            foodType = {value.foodType}
          />
        })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
