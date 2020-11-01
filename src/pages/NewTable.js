import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import UserNavbar from "../components/UserNavbar";
import { Height } from "@material-ui/icons";

function NewTable (){
    const classes = styles();
    return(
        <div className ={classes.fullpage}>
            <UserNavbar/>

        </div>
    )
}

const styles = makeStyles((theme) => ({
    fullpage:{
        backgroundColor:"#EAE8E8",
    }
}));



export default NewTable