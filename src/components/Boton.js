import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#FA744F",
    width: 300,
    borderRadius: 15,
    fontSize: 20
  }
}));

export default function Boton(props) {
  const classes = useStyles();
  return (
    <div>
      <Button
        variant="contained"
        style={{
          color: "#FFFFFF",
          fontFamily: "Montserrat",
          fontWeight: "Bold"
        }}
        className={classes.button}
      >
        {props.name}
      </Button>
    </div>
  );
}
