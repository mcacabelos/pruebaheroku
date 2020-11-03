import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { grey, red } from '@material-ui/core/colors';


const useStyles = makeStyles({
  table: {
    width: "80%", 
    margin: "0px auto",
   
    
  },
  tablerow: {
    '&:hover': {
      background: "#D3D3D3",
      borderRadius: 15
   },
  },
  tableHead: {
   
    background: " #18817A",
    color:"white"
  },

});

function createData(nombre,Email, Celular, Personas, Horario, Importe, Estado) {
  return { nombre,Email, Celular, Personas, Horario, Importe, Estado };
}

const rows = [
  createData('Martin', "juan.perez@gmail.com", "15-69389806", 4, "12:30", "$1559,9", "Confirmada"),
  createData('Pastor',"juan.perez@gmail.com","15-69389806", 1, "11:45", "$999", "Confirmada"),
  createData('Ferri',"juan.perez@gmail.com", "15-69389806",3, "14:00","$799" , "Confirmada"),
  createData('Chelo',"juan.perez@gmail.com", "15-69389806",6, "14:00", "$1299", "Cancelada"),
  createData('Tomi', "juan.perez@gmail.com","15-69389806",1, "13:30", "$899", "Confirmada"),
];
//ACA HAY QUE CREAR EL JSON 
export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer className={classes.table} component={Paper}>
      <Table  aria-label="simple table">
        <TableHead >
          <TableRow >
            <TableCell className={classes.tableHead} align="center" hover>Titular reserva</TableCell>
            <TableCell className={classes.tableHead} align="center">Email</TableCell>
            <TableCell className={classes.tableHead} align="center">Celular</TableCell>
            <TableCell className={classes.tableHead} align="center">Personas</TableCell>
            <TableCell className={classes.tableHead} align="center">Horario</TableCell>
            <TableCell className={classes.tableHead} align="center">Importe</TableCell>
            <TableCell className={classes.tableHead} align="center">Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <TableRow className={classes.tablerow} key={row.nombre}>
              <TableCell component="th" scope="row" align="center">
                {row.nombre}
              </TableCell>
              <TableCell align="center">{row.Email}</TableCell>
              <TableCell align="center">{row.Celular}</TableCell>
              <TableCell align="center">{row.Personas}</TableCell>
              <TableCell align="center">{row.Horario}</TableCell>
              <TableCell align="center">{row.Importe}</TableCell>
              <TableCell align="center">{row.Estado}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
