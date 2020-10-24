import React from "react";
import Grid from "@material-ui/core/Grid";
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

function RestaurantCard (props){

    const classes = useStyles();

    return (

        <Grid item xs={2}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={props.image}
                        title= {props.restaurantName}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.restaurantName}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.direction}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.foodType}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>

    );

}

export default RestaurantCard;