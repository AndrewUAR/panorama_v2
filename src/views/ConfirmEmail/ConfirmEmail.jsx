import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { confirmEmail } from '../../app/actions/authActions';
import LoadingComponent from '../../app/layout/LoadingComponent';

const ConfirmEmail = (props) => {
  console.log(props.match.params.id);
  const { loading, confirmEmail, authenticated, history } = props;

  const id = props.match.params.id;

  useEffect(() => {
    if (authenticated) {
      history.push('/');
    } else {
      confirmEmail(id, history);
    }
    // eslint-disable-next-line
  }, [authenticated, history]);

  return <>{loading && <LoadingComponent />}</>;
};

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
  loading: state.async.loading
});

const actions = {
  confirmEmail
};

ConfirmEmail.propTypes = {
  confirmEmail: PropTypes.func.isRequired,
  authenticated: PropTypes.bool
};

export default connect(mapStateToProps, actions)(ConfirmEmail);
