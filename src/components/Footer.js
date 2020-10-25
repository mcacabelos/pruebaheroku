import Facebook from '../assets/img/facebook.png';
import Instagram from '../assets/img/instagram.png';
import Twitter from '../assets/img/twitter.png';
import Youtube from '../assets/img/youtube.png';

import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { LinkedIn } from '@material-ui/icons';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit">
        Easy Dinner
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '45vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    backgroundColor:"#16817A",
    color:"white",
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">¡Visitanos en nuestras redes sociales!</Typography>
          <Typography variant="body1">
            <img src={Facebook} className="footerSocialIcons" />
            <img src={Instagram} className="footerSocialIcons" />
            <img src={Twitter}  className="footerSocialIcons" />
            <img src={Youtube} className="footerSocialIcons" />
          </Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}