import React from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";



function ItemCarrito(props){
    
    function handleClick(){
        props.onDelete(props.id);
    }
    return( 
    <div>
        <Grid container spacing={5} justify="space-between" alignItems="center">
            <Grid item sm={8} alignContent="left">
                <Typography variant="body1" gutterBottom
                    style={{
                            color: "#535050",
                            fontFamily: "Montserrat",
                            fontWeight: "Bold"
                }}>
                    {props.name}
                </Typography>
            </Grid>
            <Grid item sm={2} alignContent="left">
                <Typography variant="body1" gutterBottom 
                    style={{
                            color: "#535050",
                            fontFamily: "Montserrat",
                            fontWeight: "Bold"
                    }}>
                    ${props.price}
                </Typography>
            </Grid>
            <Grid item sm={2}>
                <IconButton aria-label="delete" onClick={handleClick}>
                    <DeleteIcon />
                </IconButton>
            </Grid>
        </Grid>
</div>
)
}

export default ItemCarrito;