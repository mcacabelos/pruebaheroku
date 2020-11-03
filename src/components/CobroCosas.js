import React from "react";
import { makeStyles } from '@material-ui/core/styles';
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
import FormControl from '@material-ui/core/FormControl';
import PaymentIcon from '@material-ui/icons/Payment';
import Button from '@material-ui/core/Button';
import Visa from "../assets/img/visa@2x.png";
import pepsi from "../assets/img/pepsi.jpg";
import CardMedia from '@material-ui/core/CardMedia';
import hamb from "../assets/img/CheeseBurger.jpg"
import Select from '@material-ui/core/Select';
import LocalPizza from '@material-ui/icons/LocalPizza';

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
    },
    boton:{
        color: "#FFFFFF",
        borderRadius: 15,
    },
    formControl: {
        width: 55,
      },
    media:{
        height: "60px",
        width: "60px",
    },
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
    const classes = useStyles();

    const [paymentMethod, setPaymentMethod] = React.useState('female');

    const handlePaymentMethod = (event) => {
    setPaymentMethod(event.target.value);
    };

    const [anchorHour, setAnchorHour] = React.useState(null);
    const openHour = Boolean(anchorHour);


    const handleClickListHour = (event) => {
        setAnchorHour(event.currentTarget);
    };

    const handleClickHour = (event, index) => {
        setHour(index);
        setAnchorHour(null);
    };

    const handleCloseHour = () => {
        setAnchorHour(null);
    };

    return(
        <div className={classes.fullpage}>
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
                            <Grid item xs={12}>{/* Card de items en la reserva*/}
                                <Card className={classes.card}>
                                        <CardContent>
                                            <Typography
                                                    gutterBottom
                                                    className={classes.cardTitle}
                                                    variant="h4"
                                                    component="h4"
                                                >
                                                    <LocalPizza style={{fontSize:40,}}/> Items
                                            </Typography>
                                            <Grid container spacing={2}>
                                                <Grid item xs={3}>
                                                    <FormControl variant= "outlined" className={classes.formControl}>
                                                    <Select native defaultValue="" id="grouped-native-select">
                                                        <option value={1}>1</option>
                                                        <option value={2}>2</option>
                                                        <option value={3}>3</option>
                                                    </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={1.5}>
                                                    <Card style={{ height:"60px", width:"60px",}}>
                                                        <CardMedia
                                                        className={classes.media}
                                                        image={hamb}
                                                        />
                                                    </Card>
                                                </Grid>
                                                <Grid item xs={5}>
                                                    <Typography variant="h6" style={{color: "#535050AB" }}>
                                                    Classic Cheese Burger
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={2}/>
                                                <Grid item xs={3}>
                                                    <FormControl variant= "outlined" className={classes.formControl}>
                                                    <Select native defaultValue="" id="grouped-native-select">
                                                        <option value={1}>1</option>
                                                        <option value={2}>2</option>
                                                        <option value={3}>3</option>
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={1}>
                                                    <Card style={{ height:"60px", width:"60px",}}>
                                                    <CardMedia
                                                        className={classes.media}
                                                        image={pepsi}
                                                    />
                                                    </Card>
                                                </Grid>
                                                <Grid item xs={5}>
                                                    <Typography variant="h6" style={{color: "#535050AB" }}>
                                                    Gaseosa 500ml
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                            </Grid>
                            <Grid item xs={12}>{/* Card de Método para Pagar*/}
                                    <Card className={classes.card}>
                                    <CardContent>
                                        <Typography
                                                gutterBottom
                                                className={classes.cardTitle}
                                                variant="h4"
                                                component="h4"
                                            >
                                                <PaymentIcon style={{fontSize:40,}}/> Método de Pago
                                        </Typography>
                                        <br/>
                                        <Grid container spacing={3}>
                                            <Grid item xs={7}>
                                                <Typography variant="h6" style={{color: "#535050AB" }}>
                                                    Paga con tu tarjeta finalizada en
                                                </Typography>
                                                </Grid>
                                                <Grid item xs={1}>
                                                    <Typography variant="h6" style={{color: "#070707" }}>
                                                        6212
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={1}>
                                                    <img src={Visa} style={{height:30, width:50}}/>
                                                </Grid>
                                                <Grid item xs={3}>
                                                <Button variant="contained" className={classes.boton} style={{width: 80, backgroundColor: "#F79071"}}>Cambiar</Button>
                                                </Grid>
                                                <Grid item xs={5}/>
                                                <Grid item xs={4}>
                                                <Button variant="contained" className={classes.boton} style={{width: 300, backgroundColor: "#F79071",}}>Agregar nuevo método</Button>
                                                </Grid>
                                                
                                            </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Grid container spacing={8}>
                            <Grid item xs={12}>{/* Card de Nombre de Sala*/}
                                <Card className={classes.card} style={{height:150}}>
                                        <CardContent>
                                            <Grid container spacing={3}>
                                                <Grid item xs={3}>
                                                <Typography variant="h4" style={{color: "#535050" }}>
                                                    Total
                                                </Typography>
                                                </Grid>
                                                <Grid item xs={6}/>
                                                <Grid item xs={3}>
                                                <Typography variant="h4" style={{color: "#FA744F" }}>
                                                    $320
                                                </Typography>
                                                </Grid>
                                            </Grid>
                                            <br/>
                                            <Button variant="contained" className={classes.boton} style={{width: 300, backgroundColor: "#16817A",}}>Confirmar Pago</Button>
                                        </CardContent>
                                    </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}




export default NewTable