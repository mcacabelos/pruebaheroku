import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 375,
    borderRadius: 30
  },
  media: {
    height: 150
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://gurmeteando.info/download/multimedia.normal.8194ffc349d7a7ef.537573686920436c7562204c6f676f5f6e6f726d616c2e6a7067.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Sushi Club
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Anchorena 2002
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Sushi - Comida Peruana
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
