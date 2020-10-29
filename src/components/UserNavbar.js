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
import LogoCompleto from '../assets/img/logo-test.png'

function UserNavbar (props){
  const userName="Leandro";
    const correctPage = () => {
      return 'none';
    }
    return <div>
      <AppBar>
        <Toolbar className="ToolbarEasyDinner">
          <IconButton color="inherit" edge="start" aria-label="menu">
            <Menu />
          </IconButton>
          <PersonIcon />
          <Typography variant="h6" style={{ flexGrow: 1, paddingLeft: 10 }}>
            
            {userName}
          </Typography>
          <Link className={"login-link " + correctPage()} to="/restaurantList" style={{ textDecoration: 'none' }}>
          <img src={LogoCompleto} className="logoNavbar"/>
          </Link>
        </Toolbar>
      </AppBar>
    </div>; 
}

export default UserNavbar;