import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from '../components/Dashboard/Chart';
import Deposits from '../components/Dashboard/Deposits';
import Orders from '../components/Dashboard/Orders';
import ChartPieMinutas from '../components/Dashboard/ChartPieMinutas';
import ChartPieBebidas from '../components/Dashboard/ChartPieBebidas';
import ChartPiePastas from '../components/Dashboard/ChartPiePastas';
import ChartPieEntradas from '../components/Dashboard/ChartPieEntradas';
import AdmNavbar from "../components/AdmNavbar";
import {

    CardTitle,
    CardSubtitle
} from 'reactstrap';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '120vh',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(4),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (

    <div className={classes.root}>
       <AdmNavbar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Depósitos */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            {/* Órdenes recientes */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>


<CardTitle > Estadísticas</CardTitle>
              <Grid container spacing={3}>
                <Grid item xs>
                <CardSubtitle>Por categoría</CardSubtitle>
                  <ChartPieMinutas />
                </Grid>
                <Grid item xs>
                <CardSubtitle>Pastas</CardSubtitle>
                  <ChartPiePastas />
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid item xs>
                <CardSubtitle>Entradas</CardSubtitle>
                  <ChartPieEntradas />
                </Grid>
                <Grid item xs>
                <CardSubtitle>Bebidas</CardSubtitle>
                  <ChartPieBebidas />
                </Grid>
              </Grid>

                <Orders />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
