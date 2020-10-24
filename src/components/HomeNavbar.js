import { Link } from "react-router-dom";
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from "@material-ui/core";

import { Menu } from "@material-ui/icons";
import PersonIcon from '@material-ui/icons/Person';
import Logo from '../assets/img/brand_EasyDinner.png'

function HomeNavbar (props){
  const userName="Leandro";
    const correctPage = () => {
      return 'none';
    }
    if(props.isNavbarVisible) {return <div>
      <AppBar>
        <Toolbar className="ToolbarEasyDinner">
          <IconButton color="inherit" edge="start" aria-label="menu">
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1, paddingLeft: 10 }}>
          <img src={Logo} />
          </Typography>
          <Button
            color="inherit"
            style={{ color: "#16817A", fontWeight: "bold" }}
          >
            Login
          </Button>
          <Button
            color="inherit"
            style={{ color: "#16817A", fontWeight: "bold" }}
          >
            Registrarse
          </Button>
        </Toolbar>
      </AppBar>
    </div>; 
    } else return null; 
}

export default HomeNavbar;