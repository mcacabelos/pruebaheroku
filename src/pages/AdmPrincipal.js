import React from "react";
import Grid from "@material-ui/core/Grid";
import AdmNavbar from "../components/AdmNavbar";
import Pedidos from '../components/AdmPedidos';
import Pedidos2 from '../components/Pedidos2';
import Button from '@material-ui/core/Button';
import {
 
  CardTitle,
  CardSubtitle,

} from 'reactstrap';


export default function Pagina(props) {
  // props.setNavbar();
  props.isFooterVisible();
  return (
    <div className="Pagina">
    <AdmNavbar />
      <br />
      <br />
      <br />
      <div>
                        <CardTitle > Reservas</CardTitle>
                        <CardSubtitle>Listado completo de reservas del día</CardSubtitle>
                    </div>
      
      <Button variant="contained" >Confirmados</Button> &nbsp; 
      <Button variant="contained" >Pendientes </Button> &nbsp; 
      <Button variant="contained" >Cancelados</Button>
      <br />
      <br />


       <Pedidos2/>

    </div>
  );
}
