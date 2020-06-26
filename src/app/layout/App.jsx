import React, { Fragment, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import classNames from 'classnames';
import './App.css';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import RestrictedRoute from '../../components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import ModalManager from '../../components/Modal/ModalManager';
import LoadingComponent from './LoadingComponent';
import Notification from '../../components/Notification/Notification';
import ConfirmEmail from '../../views/ConfirmEmail/ConfirmEmail';

import styles from '../../assets/jss/components/notificationStyle';

import MyAlbums from '../../views/AccountPage/PhotographerAccountPage/Albums/MyAlbums';
import MyAlbum from '../../views/AccountPage/PhotographerAccountPage/Albums/MyAlbum';

const HomePage = lazy(() => import('../../views/HomePage/HomePage'));
const LoginPage = lazy(() => import('../../views/LoginPage/LoginPage'));
const RegisterPage = lazy(() =>
  import('../../views/RegisterPage/RegisterPage')
);
const ResetPasswordPage = lazy(() =>
  import('../../views/ResetPasswordPage/ResetPasswordPage')
);
const ForgotPasswordPage = lazy(() =>
  import('../../views/ForgotPasswordPage/ForgotPasswordPage')
);
const SettingsPage = lazy(() =>
  import('../../views/SettingsPage/SettingsPage')
);
const CreatePhotographerProfilePage = lazy(() =>
  import(
    '../../views/CreatePhotographerProfilePage/CreatePhotographerProfilePage'
  )
);
const AccountPage = lazy(() => import('../../views/AccountPage/AccountPage'));

const useStyles = makeStyles(styles);

const App = () => {
  const classes = useStyles();
  const successClasses = classNames({
    [classes.snackbar]: true,
    [classes.success]: true
  });
  const errorClasses = classNames({
    [classes.snackbar]: true,
    [classes.error]: true
  });
  const infoClasses = classNames({
    [classes.snackbar]: true,
    [classes.info]: true
  });
  const warningClasses = classNames({
    [classes.snackbar]: true,
    [classes.warning]: true
  });

  return (
    <Fragment>
      <ModalManager />
      <NavBar fixed color="blue" />
      <SnackbarProvider
        classes={{
          variantSuccess: successClasses,
          variantError: errorClasses,
          variantWarning: warningClasses,
          variantInfo: infoClasses
        }}
      >
        <Notification />
        <Container maxWidth="xl" disableGutters>
          <Suspense fallback={<LoadingComponent />}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/confirm/:id" component={ConfirmEmail} />
              <Route path="/forgotPassword" component={ForgotPasswordPage} />
              <Route
                path="/resetPassword/:token"
                component={ResetPasswordPage}
              />
              <PrivateRoute path="/settings" component={SettingsPage} />
              <PrivateRoute exact path="/my-profile" component={AccountPage} />
              <RestrictedRoute
                exact
                path="/my-profile/albums"
                roles={['photographer', 'admin']}
                component={() => <AccountPage component={<MyAlbums />} />}
              />
              <RestrictedRoute
                path="/my-profile/albums/:id"
                roles={['photographer', 'admin']}
                component={() => <AccountPage component={<MyAlbum />} />}
              />
              <RestrictedRoute
                path="/createPhotographerProfile"
                roles={['user', 'admin']}
                component={CreatePhotographerProfilePage}
              />
            </Switch>
          </Suspense>
        </Container>
      </SnackbarProvider>
      <Footer color="black" />
    </Fragment>
  );
};

export default App;
