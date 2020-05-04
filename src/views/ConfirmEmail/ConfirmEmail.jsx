import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { confirmEmail } from "../../app/actions/authActions";
import { deleteError } from "../../app/actions/errorActions";

const ConfirmEmail = props => {
  console.log(props.match.params.id)
  const { confirmEmail, authenticated, errorMsg, history } = props;

  const id = props.match.params.id;

  useEffect(() => {
    if (authenticated) {
      history.push('/')
    } else {
      confirmEmail(id);
    }
    // eslint-disable-next-line
  }, [authenticated, history]);

  useEffect(() => {
    if (errorMsg) {
      history.push('/login')
    }
  }, [errorMsg])

  useEffect(() => {
    return () => {
      deleteError()
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      
    </div>
  )
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  errorMsg: state.error.error
})

const actions = ({
  confirmEmail
})

ConfirmEmail.propTypes = {
  confirmEmail: PropTypes.func.isRequired,
  authenticated: PropTypes.bool,
  errorMsg: PropTypes.string
}

export default connect(mapStateToProps, actions)(ConfirmEmail);

