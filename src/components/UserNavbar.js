import { Link } from "react-router-dom";
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";

import { Menu } from "@material-ui/icons";
import PersonIcon from "@material-ui/icons/Person";
import LogoCompleto from "../assets/img/logo-test.png";
import {
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import { ChevronLeft, ListAlt, Person, PostAddOutlined } from '@material-ui/icons';

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
      <Drawer variant="persistent" anchor="left" open={open}>
        <div className="drawer-header">
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem
            button
            component={Link}
            to="/"
            key="sesion"
            onClick={handleDrawerClose}
          >
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Cerrar Sesion" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/encuesta/0"
            key="nueva"
            onClick={handleDrawerClose}
          >
            <ListItemIcon>
              <PostAddOutlined />
            </ListItemIcon>
            <ListItemText primary="Crear nueva encuesta" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/encuestas"
            key="encuestas"
            onClick={handleDrawerClose}
          >
            <ListItemIcon>
              <ListAlt />
            </ListItemIcon>
            <ListItemText primary="Encuestas creadas" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/perfil"
            key="perfil"
            onClick={handleDrawerClose}
          >
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Mi Perfil" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default UserNavbar;
