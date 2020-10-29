import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Bonnies from "../assets/img/bonnies.jpg";
import ClubMilanesa from "../assets/img/el_club_de_la_milanesa.png";
import Fabric from "../assets/img/fabric.png";
import Sushi from "../assets/img/sushiclub.jpg";
import Grid from "@material-ui/core/Grid";

import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    borderRadius: 0,
    border: "none",
    boxShadow: "none"
  },
  media: {
    height: 170,
    borderRadius: 0,
    border: "none",
    boxShadow: "none"
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={Bonnies}
                title="Bonnies"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  Bonnie's
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={ClubMilanesa}
                title="Club de la Milanesa"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  Club de la Milanesa
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={Fabric}
                title="Fabric Sushi"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  Fabric Sushi
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={Sushi}
                title="SushiClub"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  SushiClub
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
