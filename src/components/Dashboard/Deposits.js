import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography component="p" variant="h6" style={{ color: "#16817A", fontFamily: "Montserrat"}}>
      Ganancias Brutas
      </Typography>

      <Typography component="p" variant="h4" style={{ color: "#16817A", fontFamily: "Montserrat",fontWeight: "bold" }}>
        $278.500,98
      </Typography>

      <Typography color="textSecondary" className={classes.depositContext}>
        al 25 de Octubre, 2020
      </Typography>

      <div>
        <Link color="primary" href="#" onClick={preventDefault} >
          Ver detalle pedidos
        </Link>
      </div>
    </React.Fragment>
  );
}
