import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';
import styles from '../../assets/jss/components/footerStyle';
import FooterLinks from './FooterLinks';

const useStyles = makeStyles(styles);

const Footer = (props) => {
  const { color } = props;
  const classes = useStyles();

  const footerClasses = classNames({
    [classes.footer]: true,
    [classes[color]]: color
  });

  return (
    <div className={footerClasses}>
      <Hidden smDown>
        <FooterLinks />
      </Hidden>
      <p className={classes.license}>
        &copy; All rights reserved. This project was built by Andrew Riznyk.
      </p>
    </div>
  );
};

Footer.propTypes = {
  color: PropTypes.oneOf(['blue', 'pink', 'black'])
};

export default Footer;
