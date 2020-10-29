import { Link } from "react-router-dom";
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from "@material-ui/core";


function HomeNavbar (props){
    const correctPage = () => {
      return 'none';
    }
      return (<AppBar position="fixed" style={{boxShadow: "none"}}>
        <Toolbar className="ToolbarEasyDinner" >
          <Typography variant="subtitle1" style={{ flexGrow: 1, paddingLeft: 10, color: "#16817A" }}>
          ¿Qué vas a comer hoy?
          </Typography>
          <Link className={"login-link " + correctPage()} to="/login" style={{ textDecoration: 'none' }}>
          <Button
            color="inherit"
            style={{ color: "#16817A", fontWeight: "bold" }}
          >
            Login
          </Button>
          </Link>
          <Button
            color="inherit"
            style={{ color: "#16817A", fontWeight: "bold" }}
          >
            Registrarse
          </Button>
        </Toolbar>
      </AppBar>)
}

export default HomeNavbar;