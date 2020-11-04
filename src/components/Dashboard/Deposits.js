import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
        $239.290,98
      </Typography>

      <Typography color="textSecondary" className={classes.depositContext}>
        al 25 de Octubre, 2020
      </Typography>

      <div>
        <Link to="/AdmPrincipal" color="primary" href="#">
          Ver detalle pedidos
        </Link>
      </div>
    </React.Fragment>
  );
}
