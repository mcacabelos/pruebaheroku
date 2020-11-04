import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: "450px",
        height: "250px",
        borderRadius: 25
      },
    },
  }));

function MesaLinkPaper() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper>
                <br/>
                <Typography variant="h3" style={{ flexGrow: 1, paddingLeft: 10, color: "#16817A" }}>
                    Invita a tus amigos
                </Typography>
                <br/>
                <Typography variant="h6" style={{ flexGrow: 1, paddingLeft: 10, color: "#535050" }}>
                        Copia el siguiente código y compartilo con tus amigos
                    </Typography>
                <br/>
                <TextField
                   id="outlined-read-only-input"
                   defaultValue="6750"
                   style= {{width: 270, textAlign:"center"}}
                   InputProps={{
                     readOnly: true,
                   }}
                   variant="outlined"
                />
            </Paper>
        </div>
       
    );
};


export default MesaLinkPaper;
