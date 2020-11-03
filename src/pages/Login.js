import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
//import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link, useHistory } from "react-router-dom";
import Logo from "../assets/img/brand_EasyDinner.png";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  props.isFooterVisible();

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const history = useHistory();

  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    let hardcodedCred1 = {
      email: "leandro@easydinner",
      password: "password123",
    };

    let hardcodedCred2 = {
      email: "tomas@easydinner",
      password: "password123",
    };

    let hardcodedCred3 = {
      email: "martin@easydinner",
      password: "password123",
    };

    let hardcodedCred4 = {
      email: "marcelo@easydinner",
      password: "password123",
    };

    let hardcodedCred5 = {
      email: "alexis@easydinner",
      password: "password123",
    };

    let hardcodedCred6 = {
      email: "bonnies@easydinner",
      password: "password123",
    };

    if (
      (emailInput == hardcodedCred1.email &&
        passwordInput == hardcodedCred1.password) ||
      (emailInput == hardcodedCred2.email &&
        passwordInput == hardcodedCred2.password) ||
      (emailInput == hardcodedCred3.email &&
        passwordInput == hardcodedCred3.password) ||
      (emailInput == hardcodedCred4.email &&
        passwordInput == hardcodedCred4.password) ||
      (emailInput == hardcodedCred5.email &&
        passwordInput == hardcodedCred5.password) ||
      (emailInput == hardcodedCred6.email &&
        passwordInput == hardcodedCred6.password)
    ) {
      //combination is good. Log them in.
      //this token can be anything. You can use random.org to generate a random string;
      const token = "123456abcdef";
      sessionStorage.setItem("auth-token", token);

      if (emailInput == hardcodedCred6.email) {
        history.push("/AdmPrincipal");
      } else {
        history.push("/restaurantList");
      }
      //go to www.website.com/todo
    } else {
      //bad combination
      alert("Usuario o contraseña incorrecta!");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={Logo} />
        <br />
        {/* <Typography component="h1" variant="h5">
          Ingresar
        </Typography> */}
        <form className={classes.form} noValidate onSubmit={handleLoginSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="correo electrónico"
            name="email"
            autoComplete="email"
            autoFocus
            value={emailInput}
            onChange={handleEmailChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            value={passwordInput}
            onChange={handlePasswordChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recordarme"
          />
          {/* <Link
            className="login-link "
            to="/restaurantList"
            style={{ textDecoration: "none" }}
          > */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Ingresar
          </Button>
          {/* </Link> */}
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Olvidaste tu contraseña?
              </Link>
            </Grid>
            <Grid item>
              <Link className="login-link " to="/register" variant="body2">
                {"No tenes una cuenta? Registrate!"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
