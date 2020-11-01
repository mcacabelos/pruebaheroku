import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: "450px",
        height: "100px",
        borderRadius: 50
      },
    },
  }));

  const currencies = [
    {
      value: 'Cada uno lo suyo',
      label: 'Cada uno lo suyo',
    },
    {
      value: 'Dividimos entre todos',
      label: 'Dividimos entre todos',
    },
    {
      value: 'Pago todo yo',
      label: 'Pago todo yo',
    },
  ];
  

function MesaLinkPaper() {
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('EUR');
  
    const handleChange = (event) => {
      setCurrency(event.target.value);
    };
  
    return (
        <div className={classes.root}>
            <Paper>
                <Typography variant="h6" style={{ flexGrow: 1, paddingLeft: 10, color: "#FA744F" }}>
                    ¿Como dividimos la cuenta?
                </Typography>
                <TextField
                    id="outlined-select-currency"
                    select
                    value={currency}
                    onChange={handleChange}
                    variant="outlined"
                    >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Paper>
        </div>
       
    );
};


export default MesaLinkPaper;
