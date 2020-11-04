import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';


// Generate Order Data
function createData(id, Fecha, Cliente, TipoMesa, tipoPago, montoTotal) {
  return { id, Fecha, Cliente, TipoMesa, tipoPago, montoTotal };
}


const rows = [
  createData(0, '25 Oct, 2020', 'Testuser', '1 Persona', 'VISA ⠀•••• 3719', 320.00),
  createData(1, '25 Oct, 2020', 'Tomito Recalt', '2 Personas', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '25 Oct, 2020', 'Tincho Cascabeles', '6 Personas', 'Master ⠀•••• 1253', 100.81),
  createData(3, '25 Oct, 2020', 'Chelito', '10 Personas', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '25 Oct, 2020', 'Miltonsito', '4 Personas', 'VISA ⠀•••• 5919', 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));



export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Órdenes recientes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell>Cliente</TableCell>
            <TableCell>Tipo de Mesa</TableCell>
            <TableCell>Método de Pago</TableCell>
            <TableCell align="right">Monto Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.Fecha}</TableCell>
              <TableCell>{row.Cliente}</TableCell>
              <TableCell>{row.TipoMesa}</TableCell>
              <TableCell>{row.tipoPago}</TableCell>
              <TableCell align="right">{row.montoTotal}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div classCliente={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver todas las órdenes
        </Link>
      </div>
    </React.Fragment>
  );
}
