import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
// import Valoracion from "./Valoracion";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";


const useStyles = makeStyles({
  root: {
    maxWidth: 375,
    borderRadius: 30
  },
  media: {
    height: 150
  }
});

export default function MediaCard(props) {
  const classes = useStyles();




  return (
  <Grid item xs={12} sm={6}>
    <Card className={classes.root} onClick={props.handleClick(props.index)}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {props.image}
          title= {props.name}
        />
        <CardContent>
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
            {props.name}
          </Typography>
          <Typography
            variant="h4"
            style={{
              color: "#535050",
              fontFamily: "Montserrat",
              fontWeight: "Bold"
            }}
            component="p"
          >
            ${props.price}
          </Typography>
          <Rating name="pristine" value="3.5" precision={0.5} />
        </CardContent>
      </CardActionArea>
    </Card>

  </Grid>
    
  );
}
