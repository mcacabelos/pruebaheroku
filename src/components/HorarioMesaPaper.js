import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 450,
      borderRadius: 50,
      maxHeight: 180,
      alignItems: "center",
      margin: theme.spacing(1),
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    boton:{
        borderRadius:15,
        paddingRight: "10px"
    }
  }));

export default function SimpleCard() {
  const [value, setValue] = React.useState('Pago yo');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" style={{color: "#FA744F" }}>
            Horario de reserva
        </Typography>       
        <Button variant="contained" disabled className={classes.boton}>
            12:00 pm
        </Button>
        <RemoveIcon style={{width:40}}/>
        <Button variant="contained" disabled className={classes.boton}>
            12:40 pm
        </Button>
      </CardContent>
    </Card>
  );
}