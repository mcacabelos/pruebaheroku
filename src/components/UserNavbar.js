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

function UserNavbar (props){
  const userName="Leandro";
    const correctPage = () => {
      return 'none';
    }
    if(props.isNavbarVisible) {return <div>
      <AppBar>
        <Toolbar className="ToolbarEasyDinner">
          <IconButton color="inherit" edge="start" aria-label="menu">
            <Menu />
          </IconButton>
          <PersonIcon />
          <Typography variant="h6" style={{ flexGrow: 1, paddingLeft: 10 }}>
            
            {userName}
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

export default UserNavbar;