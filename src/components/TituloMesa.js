import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles((theme) => ({
    root: {
        width: 450,
        borderRadius: 50,
        height: 100,
        backgroundColor: "#fafafa",
        border: "none",
        boxShadow: "none"
      },
}));

function MesaLinkPaper() {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h4" style={{color: "#16817A" }}>
                  Mesa de Laura (4/4)
                </Typography>
            </CardContent>
        </Card>

       
    );
};


export default MesaLinkPaper;
