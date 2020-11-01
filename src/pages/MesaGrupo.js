import React from "react";
import MesaLinkPaper from "../components/MesaLinkPaper"
import EleccionPago from "../components/EleccionPago"
import HorarioMesaPaper from "../components/HorarioMesaPaper"
import CardMenu from "../components/CardMenu"
import TotalMesa from "../components/TotalMesa"
import TituloMesa from "../components/TituloMesa"
import Grid from '@material-ui/core/Grid';


function MesaGrupo() {
    return (
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <EleccionPago/>
                    <br/>
                    <CardMenu/>
                    <br/>
                    <CardMenu/>
                </Grid>
                <Grid item xs={6}>
                    <TituloMesa/>
                    <br/>
                    <br/>
                    <CardMenu/>
                    <br/>
                    <CardMenu/>
                </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <HorarioMesaPaper/>
            <br/>
            <TotalMesa/>
            <br/>
            <MesaLinkPaper/>
          </Grid>
        </Grid>  
    );
};


export default MesaGrupo;
