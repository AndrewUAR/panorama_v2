import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

const PrivateRoute = props => {
  const { authenticated, component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={props => 
        !authenticated ? (<Redirect to="/login" />) : <Component {...props} />}
    />
  )
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
})

PrivateRoute.propTypes = {
  authenticated: PropTypes.bool
}

export default connect(mapStateToProps)(PrivateRoute);
