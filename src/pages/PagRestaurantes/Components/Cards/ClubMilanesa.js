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
          image="https://mir-s3-cdn-cf.behance.net/projects/404/bf55b579816381.Y3JvcCw4MDgsNjMyLDAsMA.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Club de la milanesa
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Anchorena 2002
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Milanesas - Papas Fritas
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
