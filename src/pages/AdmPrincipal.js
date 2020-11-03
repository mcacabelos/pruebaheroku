import React from "react";
import Grid from "@material-ui/core/Grid";
import Busqueda from "../components/SearchBar";
import RestaurantList from "../components/RestaurantList";
import HomeNavbar from "../components/HomeNavbar";
import Pedidos from '../components/AdmPedidos';


export default function Pagina(props) {
  // props.setNavbar();
  return (
    <div className="Pagina">
    <HomeNavbar />
      <br />

      <Grid item xs={20} sm={20}>
        <Grid container spacing={0}>
<Pedidos />

</Grid>
</Grid>
    </div>
  );
}
