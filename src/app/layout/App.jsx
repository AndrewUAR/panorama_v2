import React, { Fragment } from "react";
import { Router, Route, Switch, withRouter } from "react-router-dom";

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

function App() {
  return (
    <Fragment>
      <ModalManager />
      <NavBar fixed color="blue"/>
      <Container maxWidth="xl" disableGutters>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/resetPassword" component={ResetPasswordPage} />
          <PrivateRoute path="/settings" component={AccountPage} />
        </Switch>
      </Container>
      <Footer color="black"/>
    </Fragment>
  );
}

export default App;
