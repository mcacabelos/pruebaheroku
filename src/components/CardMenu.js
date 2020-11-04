import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Persona from "../assets/img/Avatar.jpg"
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import pepsi from "../assets/img/pepsi.jpg";
import CardMedia from '@material-ui/core/CardMedia';
import hamb from "../assets/img/CheeseBurger.jpg"
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
    borderRadius: 50,
    maxHeight: 480,
  },
  media:{
      height: "44px",
      width: "44px",
  },
  card:{
      height:"45px",
      width:"40px",
  },
  icono:{
    height:80,
    width:80,
  },
  boton:{
    height:40,
    width:40,
    color: "#16817A",
  },
  formControl: {
    width: 55,
  },
  avatar:{
    height:45,
    width:45,
  }
}));

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={0.5}/>
          <Grid item xs={1}>
            <Avatar alt="Laura Baker" src={Persona} className={classes.avatar}/>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h4" style={{paddingLeft: 15,color: "#16817A" }}>
                TestUser
            </Typography>
          </Grid>
          <Grid item xs={1}/>
          <Grid item xs={3}>
            <FiberManualRecordIcon style={{color: "#535050"}}/>
            <FiberManualRecordIcon style={{color: "#535050AB"}}/>
            <FiberManualRecordIcon style={{color: "#5350504D"}}/>
          </Grid>
          <Grid item xs={2}/>
          <Grid item xs={3}>
            <FormControl variant= "outlined" className={classes.formControl}>
              <Select native defaultValue="" id="grouped-native-select">
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1.5}>
            <Card className={classes.card}>
                <CardMedia
                className={classes.media}
                image={hamb}
                />
            </Card>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="b1" style={{color: "#535050AB" }}>
              Classic Cheese Burger
            </Typography>
          </Grid>
          <Grid item xs={2}/>
          <Grid item xs={3}>
            <FormControl variant= "outlined" className={classes.formControl}>
              <Select native defaultValue="" id="grouped-native-select">
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={pepsi}
              />
            </Card>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="b1" style={{color: "#535050AB" }}>
              Gaseosa 500ml
            </Typography>
          </Grid>
          <Grid item xs={3}/>
          <Grid item xs={1}/>
          <Grid item xs={3}>
            <Typography variant="h5" style={{paddingLeft: 15,color: "#535050" }}>
                Subtotal
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h4" style={{paddingLeft: 15,color: "#FA744F" }}>
                $320
            </Typography>
          </Grid>
          <Grid item xs={1}/>
          <Grid item xs={3}>
            <IconButton className={classes.boton}>
                <AddCircleIcon className={classes.icono}/>
            </IconButton>
          </Grid>         
        </Grid>
      </CardContent>
    </Card>
  );
}