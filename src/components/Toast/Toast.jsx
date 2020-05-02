import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import styles from "../../assets/jss/components/toastStyle";

const useStyles = makeStyles(styles);

const Toast = props => {
  const { children } = props;

  const classes = useStyles();
  
  const { message, severity} = children;

  const title = severity.toUpperCase();

  const alertClasses = classNames({
    [classes.alert]: true,
    [classes[severity]]: severity
  })

  return (
    <div className={classes.root} >
      <Alert severity={severity} className={alertClasses}>
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    </div>
  );
} 

Toast.propTypes = {
  children: PropTypes.object.isRequired
}

export default Toast;