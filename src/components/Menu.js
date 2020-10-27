import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FiltrosComidas from "./FoodFilter";
import FoodCard from "./FoodCard";
import Typography from "@material-ui/core/Typography";
import Boton from "./Boton";
import menuList from "../MenuList"
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Image from 'react-bootstrap/Image';
import Button from '@material-ui/core/Button';
import FoodFilter from "./FoodFilter"
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ItemCarrito from "./ItemCarrito";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paragraph: {
    textAlignLast: "center"
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setItem] = React.useState(menuList[0]);
  const [itemsCarrito, setCarrito] = React.useState([]);
  const [cantItems, setCant] = React.useState(0);


  function addItem(){
    setCant( ()=>{return cantItems + 1 });
    setCarrito((prevValues) => {return [...prevValues, selectedItem]})
    handleClose();
  };

  function deleteItem(id) {
    setCarrito(prevCarrito => {
      return prevCarrito.filter((item, index) => {
        return index !== id;
      });
    });
    setCant( ()=>{return cantItems - 1 });
  }

    const handleClickOpen = (index) => () => {
      setItem(menuList[index]);
      setOpen(true);
  };

const handleClose = () => {
    setOpen(false);
};
  return (
    <div className={classes.root}>
      <Grid container spacing={5} >
        <Grid item xs={12} sm={2}>

          <Typography
            gutterBottom
            style={{
              color: "#16817A",
              fontFamily: "Montserrat",
              fontWeight: "Bold"
            }}
            variant="h6"
            component="h2"
          >
            Filtros
          </Typography>
          <FiltrosComidas />
        </Grid>
        <Grid item xs={12} sm={6}>

          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography
                gutterBottom
                style={{
                  color: "#16817A",
                  fontFamily: "Montserrat",
                  fontWeight: "Bold"
                }}
                variant="h3"
                component="h2"
              >
                Platos
              </Typography>
            </Grid>
            {menuList.map((value, index) => {
              return <FoodCard
                      id= {index}
                      index= {index}
                      name= {value.name}
                      image= {value.img}
                      price= {value.price}
                      handleClick = {handleClickOpen}
                    />})}
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Typography
            gutterBottom
            style={{
              color: "#16817A",
              fontFamily: "Montserrat",
              fontWeight: "Bold"
            }}
            variant="h3"
            component="h2"
          >
            ¡Armá tu Mesa!
          </Typography>
          <Boton name="Go"/>
          <br />
          {cantItems > 0 &&   <Card className={classes.root}>
                                <CardContent>
                                  {itemsCarrito.map((value, index)=>{return <ItemCarrito id={index} onDelete={deleteItem} name= {value.name} price = {value.price}/>})}
                                </CardContent>
                              </Card>}
          
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="body"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title" >
            <Typography
                gutterBottom
                style={{
                  color: "#16817A",
                  fontFamily: "Montserrat",
                  fontWeight: "Bold"
                }}
                variant="h3"
                component="h2"
              >
                {selectedItem.name}
                </Typography>
          </DialogTitle>
        <DialogContent >
          <Grid container spacing={5}>
            <Grid item xs={12}>
            <Image src={selectedItem.img} fluid />
            </Grid>
            <Grid item xs={12}>
            <Typography
                gutterBottom
                style={{
                  textAlignLast:"center",
                  color: "#535050",
                  fontFamily: "Montserrat",
                  fontWeight: "Bold",
                }}
                variant="p"
                component="p"
              >
                {selectedItem.description}
                </Typography>
            </Grid>
            <Grid item sm={4}>
              <FoodFilter />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={addItem} color="primary">
            Agregar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


