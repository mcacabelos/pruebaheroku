import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import UserNavbar from "../components/UserNavbar";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import GroupIcon from '@material-ui/icons/Group';
import SentimentVerySatisfiedRoundedIcon from '@material-ui/icons/SentimentVerySatisfiedRounded';
import TextField from '@material-ui/core/TextField';
import Boton from "../components/Boton";
import {Link} from "react-router-dom";


const useStyles = makeStyles({
    container:{
        marginTop:100,
    },
    cardTitle:{
        color: "#FA744F",
        fontFamily:"Montserrat",
        fontWeight:"bold",
    },
    card:{
        borderBottomWidth:1,
        height:220,
    },
    hourSelector:{
        backgroundColor:"#e8e8e8",
        borderRadius:20,
    },
    hourText:{
        textAlign:"center",
    },
    input:{
        borderRadius:20,
        width:"100%",
        color:"#16817A",
    }
});

const hourOptions = [
    '12:00 - 12:40',
    '12:10 - 12:50',
    '12:20 - 13:00',
    '12:30 - 13:10',
    '12:40 - 13:20',
    '12:50 - 13:30',
    '13:00 - 13:40',
    '13:10 - 13:50',
    '13:20 - 14:00',
];
const peopleOptions = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
];

function NewTable (){
    const [selectedHour, setHour] = React.useState(null);
    const [selectedPeople, setPeople] = React.useState(null);
    const classes = useStyles();

    const [paymentMethod, setPaymentMethod] = React.useState('female');

    const handlePaymentMethod = (event) => {
    setPaymentMethod(event.target.value);
    };

    const [anchorHour, setAnchorHour] = React.useState(null);
    const openHour = Boolean(anchorHour);

    const [anchorPeople, setAnchorPeople] = React.useState(null);
    const openPeople = Boolean(anchorPeople);

    const handleClickListHour = (event) => {
        setAnchorHour(event.currentTarget);
    };
    const handleClickListPeople = (event) => {
        setAnchorPeople(event.currentTarget);
    };

    const handleClickHour = (event, index) => {
        setHour(index);
        setAnchorHour(null);
    };

    const handleClickPeople = (event, index) => {
        setPeople(index);
        setAnchorPeople(null);
    };
    
    const handleClosePeople = () => {
        setAnchorPeople(null);
    };
    const handleCloseHour = () => {
        setAnchorHour(null);
    };

    return(
        <div className={classes.fullpage}>
            <UserNavbar/>
            <Container className={classes.container}>
                <Grid container spacing={5} direction="row">
                    <Grid item xs={12} sm={6}>
                        <Grid container spacing={8}>
                            <Grid item xs={12}> {/* Card de Horario*/}
                                    <Card className={classes.card}>
                                    <CardContent>
                                        <Typography
                                                gutterBottom
                                                className={classes.cardTitle}
                                                variant="h4"
                                                component="h4"
                                            >
                                                <AccessTimeIcon style={{fontSize:40,}}/> Horario de Reserva
                                        </Typography>
                                        <List component="nav" className={classes.hourSelector}>
                                            <ListItem
                                            button
                                            onClick={handleClickListHour}
                                            >
                                            <ListItemText className={classes.hourText} primary={selectedHour === null ? "Seleccione un horario" : hourOptions[selectedHour]} />
                                            </ListItem>
                                        </List>
                                        <Menu
                                            id="long-menu"
                                            anchorEl={anchorHour}
                                            keepMounted
                                            open={openHour}
                                            onClose={handleCloseHour}
                                            PaperProps={{
                                            style: {
                                                maxHeight: 48 * 4.5,
                                                width: "60ch"
                                            }
                                            }}
                                        >
                                        {hourOptions.map((option, index) => (
                                            <MenuItem
                                                    key={option}
                                                    selected={index === selectedHour}
                                                    onClick={(event) => handleClickHour(event, index)}
                                            >
                                            {option}
                                            </MenuItem>
                                        ))}
                                        </Menu>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>{/* Card de como se divide la cuenta*/}
                                <Card className={classes.card}>
                                        <CardContent>
                                            <Typography
                                                    gutterBottom
                                                    className={classes.cardTitle}
                                                    variant="h4"
                                                    component="h4"
                                                >
                                                    <RestaurantMenuIcon style={{fontSize:40,}}/> ¿Cómo dividimos la cuenta?
                                            </Typography>
                                            <FormControl component="fieldset">
                                            <RadioGroup aria-label="gender" name="gender1" value={paymentMethod} onChange={handlePaymentMethod} >
                                                <FormControlLabel value="Pago yo" control={<Radio style={{color:"#16817A"}} />} label="Pago Yo" />
                                                <FormControlLabel value="Dividimos entre Todos" control={<Radio style={{color:"#16817A"}} />} label="Dividimos entre todos" />
                                                <FormControlLabel value="Cada uno lo suyo" control={<Radio style={{color:"#16817A"}} />} label="Cada uno lo suyo" />
                                            </RadioGroup>
                                            </FormControl>
                                        </CardContent>
                                    </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Grid container spacing={8}>
                            <Grid item xs={12}>{/* Card de Cantidad de Personas*/}
                                    <Card className={classes.card}>
                                    <CardContent>
                                        <Typography
                                                gutterBottom
                                                className={classes.cardTitle}
                                                variant="h4"
                                                component="h4"
                                            >
                                                <GroupIcon style={{fontSize:40,}}/> Cantidad de Personas
                                        </Typography>
                                        <List component="nav" className={classes.hourSelector}>
                                            <ListItem
                                            button
                                            onClick={handleClickListPeople}
                                            >
                                            <ListItemText className={classes.hourText} primary={selectedPeople === null ? "Seleccione la cantidad de personas" : peopleOptions[selectedPeople]} />
                                            </ListItem>
                                        </List>
                                        <Menu
                                            id="long-menu"
                                            anchorEl={anchorPeople}
                                            keepMounted
                                            open={openPeople}
                                            onClose={handleClosePeople}
                                            PaperProps={{
                                            style: {
                                                maxHeight: 48 * 4.5,
                                                width: "60ch"
                                            }
                                            }}
                                        >
                                        {peopleOptions.map((option, index) => (
                                            <MenuItem
                                                    key={option}
                                                    selected={index === selectedPeople}
                                                    onClick={(event) => handleClickPeople(event, index)}
                                            >
                                            {option}
                                            </MenuItem>
                                        ))}
                                        </Menu>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>{/* Card de Nombre de Sala*/}
                                <Card className={classes.card}>
                                        <CardContent>
                                            <Typography
                                                    gutterBottom
                                                    className={classes.cardTitle}
                                                    variant="h4"
                                                    component="h4"
                                                >
                                                    <SentimentVerySatisfiedRoundedIcon style={{fontSize:40,}}/> Nombre de la Sala
                                            </Typography>
                                            <TextField className={classes.input} label="Nombre de la Mesa" color="secondary" variant="filled" /> 
                                        </CardContent>
                                    </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to="/MesaGrupo" style={{textDecoration:"none"}}><Boton name="Crear Mesa"/></Link>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}




export default NewTable