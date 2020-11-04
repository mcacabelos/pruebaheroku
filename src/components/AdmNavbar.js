import { Link, useHistory} from "react-router-dom";
import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";

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

import { ChevronLeft, Person } from "@material-ui/icons";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    background: "white",
    color: "black",
    boxShadow: "300ms",
  },
});

function AdmNavbar(props) {
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

  const history = useHistory();

  if (!sessionStorage.getItem("auth-token")) {
    console.log("no auth token set");
    history.push("/login");
  } else {
    const authToken = "123456abcdef";
    if (sessionStorage.getItem("auth-token") == authToken) {
      console.log("good token. Log in.");
      //do something like redirect to todo page
    } else {
      console.log("bad token.");
      //do something like redirect to login page
      history.push("/login");
    }
  }

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
            {sessionStorage.getItem("userName")}
          </Typography>
          <Link
            className={"login-link " + correctPage()}
            to="/AdmPrincipal"
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
            to="/AdmPrincipal"
            key="nueva"
            onClick={handleDrawerClose}
          >
            <ListItemIcon>
              <PlaylistAddCheckIcon />
            </ListItemIcon>
            <ListItemText primary="Pedidos" />
          </ListItem>

          <ListItem button component={Link} to="/AdmDashboard" key="perfil">
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Estadisticas" />
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

export default AdmNavbar;
