import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

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
import Toast from "../../components/Toast/Toast";
import { ToastProvider } from 'react-toast-notifications';

function App() {
  return (
    <Fragment>
        <ModalManager />
        <NavBar fixed color="blue"/>
        <ToastProvider
          components={{Toast: Toast}} 
          placement="bottom-right" 
          autoDismiss
          autoDismissTimeout={3000}
        >
        <Container maxWidth="xl" disableGutters>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/resetPassword" component={ResetPasswordPage} />
            <PrivateRoute path="/settings" component={AccountPage} />
          </Switch>
        </Container>
        </ToastProvider>
        <Footer color="black"/>
    </Fragment>
  );
}

export default App;
