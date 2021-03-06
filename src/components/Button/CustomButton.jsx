import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styles from '../../assets/jss/components/buttonStyle';

const useStyles = makeStyles(styles);

const CustomButton = (props) => {
  const {
    type,
    justIcon,
    pulseButton,
    color,
    socialSignUp,
    uploadButton,
    settingsButton,
    sideBarButton,
    startIcon,
    endIcon,
    children,
    disabled,
    size,
    ref,
    ...rest
  } = props;
  const classes = useStyles();

  const btnClasses = classNames({
    [classes.button]: true,
    [classes.justIcon]: justIcon,
    [classes.pulseButton]: pulseButton,
    [classes[color]]: color,
    [classes.socialSignUp]: socialSignUp,
    [classes.uploadButton]: uploadButton,
    [classes.settingsButton]: settingsButton,
    [classes.sideBarButton]: sideBarButton,
    [classes[size]]: size
  });

  return (
    <Button
      type={type}
      className={btnClasses}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      ref={ref}
      {...rest}
    >
      {children}
    </Button>
  );
};

Button.propTypes = {
  justIcon: PropTypes.bool,
  pulseButton: PropTypes.bool,
  socialSignUp: PropTypes.bool,
  uploadButton: PropTypes.bool,
  color: PropTypes.oneOf(['danger', 'blue', 'black', 'transparent', 'success']),
  size: PropTypes.oneOf(['sm', 'lg']),
  startIcon: PropTypes.node,
  endIcon: PropTypes.node
};

export default CustomButton;
