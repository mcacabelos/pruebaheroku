import React from "react";
import CobroCosas from "../components/CobroCosas";
import Typography from '@material-ui/core/Typography';
import UserNavbar from "../components/UserNavbar";

function PantallaCobro() {
    return (
        <div>
        <UserNavbar />
            <div style={{marginTop:80}}>
                <Typography variant="h2" style={{color: "#16817A" , fontWeight:"bold"}}>
                    Checkout
                </Typography>
                <CobroCosas/>
            </div>
        </div>
    );
}


export default PantallaCobro;
