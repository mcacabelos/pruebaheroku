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
          image="https://images.deliveryhero.io/image/pedidosya/restaurants/la-mesada-monserrat-fondo-blanco-logo.jpg?quality=70&width=100"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            La Mesada
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Anchorena 2002
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Empanadas
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
