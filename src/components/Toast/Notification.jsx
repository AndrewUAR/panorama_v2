import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import styles from '../../assets/jss/components/notificationStyle';
import { Snackbar } from '@material-ui/core';

const useStyles = makeStyles(styles);

const Notification = (props) => {};

const mapStateToProps = (state) => ({
  notifications: state.notifications
});

Notification.propTypes = {
  notifications: PropTypes.array
};

export default connect(mapStateToProps)(Notification);
