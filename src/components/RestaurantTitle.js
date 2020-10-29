import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Valoracion from "./Valoracion";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  Box: {
    backgroundImage:
      'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://www.nrn.com/sites/nrn.com/files/mcdonalds-signature-crafted-burgers.jpg")',
    height: "250px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    position: "relative",
    marginTop: 64,
  },

  StarIcon: {
    color: "#EFB810"
  },

  Valor: {
    backgroundColor: "#1AD863",
    height: "23px"
  }
}));

export default function BoxFoto() {
  const classes = useStyles();

  return (
    <Box className={classes.Box}>
      <Box>
        <Typography
          gutterBottom
          style={{ color: "#FFFFFF" }}
          variant="h6"
          component="h2"
        >
          Bonnie's
        </Typography>
        <Valoracion />
      </Box>
    </Box>
  );
}
