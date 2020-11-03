import React from "react";
import CobroCosas from "../components/CobroCosas";
import Typography from '@material-ui/core/Typography';

function PantallaCobro() {
    return (
        <div>
            <Typography variant="h4" style={{color: "#16817A" }}>
                Checkout
            </Typography>
            <CobroCosas/>
        </div>
    );
}


export default PantallaCobro;
