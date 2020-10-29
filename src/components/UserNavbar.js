import { Link } from "react-router-dom";
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";

import { Menu } from "@material-ui/icons";
import PersonIcon from "@material-ui/icons/Person";
import LogoCompleto from "../assets/img/logo-test.png";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import {
  ChevronLeft,
  Person,
} from "@material-ui/icons";

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    background: "white",
    color: "black",
    boxShadow: "300ms",
  },
});

function UserNavbar(props) {
  const userName = "Leandro";
  const correctPage = () => {
    return "none";
  };

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const styles = useStyles();

  return (
    <div>
      <AppBar>
        <Toolbar className="ToolbarEasyDinner">
          <IconButton
            color="inherit"
            edge="start"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <Menu />
          </IconButton>
          <PersonIcon />
          <Typography variant="h6" style={{ flexGrow: 1, paddingLeft: 10 }}>
            {userName}
          </Typography>
          <Link
            className={"login-link " + correctPage()}
            to="/restaurantList"
            style={{ textDecoration: "none" }}
          >
            <img src={LogoCompleto} className="logoNavbar" />
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        classes={{ paper: styles.paper }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <div className="drawer-header">
          <IconButton
            onClick={handleDrawerClose}
            edge="false"
            style={{ marginLeft: 200, marginTop: 10 }}
          >
            <ChevronLeft />
          </IconButton>
        </div>
        <List>
          <ListItem
            button
            component={Link}
            to="/"
            key="nueva"
            onClick={handleDrawerClose}
          >
            <ListItemIcon>
              <PlaylistAddCheckIcon />
            </ListItemIcon>
            <ListItemText primary="Mis pedidos" />
          </ListItem>
          
          <ListItem
            button
            component={Link}
            to="/"
            key="perfil"
            onClick={handleDrawerClose}
          >
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Mi Perfil" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/"
            key="sesion"
            onClick={handleDrawerClose}
          >
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Cerrar Sesion" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default UserNavbar;
