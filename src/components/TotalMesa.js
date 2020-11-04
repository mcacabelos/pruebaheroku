import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from "@material-ui/core/Divider";
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
    borderRadius: 50,
    maxHeight: 480,
  },
  boton:{
      backgroundColor: "#16817A",
      color: "#FFFFFF",
      width: 300,
      borderRadius: 15,
  },
}));

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h4" style={{color: "#16817A" }}>
          Total de la Mesa
        </Typography>
        <br/>
        <Grid container spacing={3}>
            <Grid item xs={9}>
            <Typography variant="h4" style={{color: "#535050" , textAlign:"left"}}>
                Test User
            </Typography>
            </Grid>
            
            <Grid item xs={3}>
            <Typography variant="h4" style={{color: "#FA744F" }}>
                $320
            </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={3}>
            <Typography variant="h4" style={{color: "#535050" }}>
                Total
            </Typography>
            </Grid>
            <Grid item xs={6}/>
            <Grid item xs={3}>
            <Typography variant="h4" style={{color: "#FA744F" }}>
                $320
            </Typography>
            </Grid>
        </Grid>
        <br/>
        <Link to="/cobro" style={{textDecoration:"none"}}><Button variant="contained" className={classes.boton} onClick={props.handleClick}>
            <Typography variant="h6" style={{color: "#FFFFFF", fontWeight:"bold" }}>
            ¡Confirma tu Reserva!
            </Typography>
        </Button></Link>
        
      </CardContent>
    </Card>
  );
}