import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { SnackbarProvider } from 'notistack';
import classNames from 'classnames';
import "./App.css";
import { Container } from "@material-ui/core";
import LoginPage from "../../views/LoginPage/LoginPage";
import RegisterPage from "../../views/RegisterPage/RegisterPage";
import ResetPasswordPage from "../../views/ResetPasswordPage/ResetPasswordPage";
import HomePage from "../../views/HomePage/HomePage";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import AccountPage from "../../views/AccountPage/AccountPage";
import NavBar from '../../components/NavBar/NavBar';
import Footer from "../../components/Footer/Footer";
import ModalManager from "../../components/Modal/ModalManager";
import ForgotPasswordPage from "../../views/ForgotPasswordPage/ForgotPasswordPage";
import ConfirmEmail from "../../views/ConfirmEmail/ConfirmEmail";
import Notification from "../../components/Notification/Notification";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/components/notificationStyle";

const useStyles = makeStyles(styles);


const App = () => {
  const classes = useStyles();
  const successClasses = classNames({
    [classes.snackbar]: true,
    [classes.success]: true
  })
  const errorClasses = classNames({
    [classes.snackbar]: true,
    [classes.error]: true
  })
  const infoClasses = classNames({
    [classes.snackbar]: true,
    [classes.info]: true
  })
  const warningClasses = classNames({
    [classes.snackbar]: true,
    [classes.warning]: true
  })
  return (
    <Fragment>
      <ModalManager />
      <NavBar fixed color="blue"/>
      <SnackbarProvider
        classes={{
          variantSuccess: successClasses,
          variantError: errorClasses,
          variantWarning: warningClasses,
          variantInfo: infoClasses,
      }}
      >
        <Notification />
        <Container maxWidth="xl" disableGutters>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/confirm/:id" component={ConfirmEmail} />
            <Route path="/forgotPassword" component={ForgotPasswordPage} />
            <Route path="/resetPassword/:token" component={ResetPasswordPage} />
            <PrivateRoute path="/settings" component={AccountPage} />
          </Switch>
        </Container>
      </SnackbarProvider>
      <Footer color="black"/>
    </Fragment>
  );
}

export default App;
