import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

const RestrictedRoute = (props) => {
  const {
    authenticated,
    authUser,
    roles,
    component: Component,
    ...rest
  } = props;
  return (
    <Route
      {...rest}
      render={(props) =>
        _.includes(roles, authUser.role) && authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  authUser: state.auth.authUser,
  authenticated: state.auth.authenticated
});

RestrictedRoute.propTypes = {
  roles: PropTypes.array.isRequired,
  authUser: PropTypes.object.isRequired,
  authenticated: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(RestrictedRoute);
