import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    maxWidth: 225,
    height: 115,
    width: 300,
    margin: "auto"
  },
  media: {
    height: 115,
    width: 225
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://img.pystatic.com/restaurants/bonnie-s.jpg"
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Card>
  );
}
