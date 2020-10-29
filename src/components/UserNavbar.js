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
          <img src={Logo} />
        </Toolbar>
      </AppBar>
    </div>; 
}

export default UserNavbar;