import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import PersonIcon from '@material-ui/icons/Person';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import SettingsIcon from '@material-ui/icons/Settings';
import StorageIcon from '@material-ui/icons/Storage';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AssignmentIcon from '@material-ui/icons/Assignment';



export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Mi Perfil" style={{ color: "#16817A", fontFamily: "Montserrat",fontWeight: "bold" }}/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CalendarTodayIcon />
      </ListItemIcon>
      <ListItemText primary="Reservas" style={{ color: "#16817A", fontFamily: "Montserrat",fontWeight: "bold" }}/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Configuración" style={{ color: "#16817A", fontFamily: "Montserrat",fontWeight: "bold" }}/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StorageIcon />
      </ListItemIcon>
      <ListItemText primary="Detalle productos" style={{ color: "#16817A", fontFamily: "Montserrat",fontWeight: "bold" }}/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard Financiero" style={{ color: "#16817A", fontFamily: "Montserrat",fontWeight: "bold" }}/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Cerrar Sesión" style={{ color: "#16817A", fontFamily: "Montserrat",fontWeight: "bold" }}/>
    </ListItem>

  </div>
);
