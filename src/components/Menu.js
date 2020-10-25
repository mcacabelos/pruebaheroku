import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FiltrosComidas from "./FoodFilter";
import FoodCard from "./FoodCard";
import Typography from "@material-ui/core/Typography";
import Boton from "./Boton";
import menuList from "../MenuList"

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
      <Grid container spacing={5} >
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
          <FiltrosComidas />
        </Grid>
        <Grid item xs={12} sm={6}>

          <Grid container spacing={5}>
            <Grid item xs={12}>
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
            </Grid>
            {menuList.map((value) => {
              return <FoodCard 
                      name= {value.name}
                      image= {value.img}
                      price= {value.price}
                    />})}
          </Grid>
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
            ¡Armá tu Mesa!
          </Typography>
          <Boton name="Go"/>
        </Grid>
      </Grid>
    </div>
  );
}


