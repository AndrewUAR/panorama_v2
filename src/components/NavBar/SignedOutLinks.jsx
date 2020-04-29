import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { List, ListItem, Button, makeStyles } from '@material-ui/core';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import BorderColorIcon from '@material-ui/icons/BorderColor';

import styles from "../../assets/jss/components/navBarLinksStyle";

const useStyles = makeStyles(styles);

const SignedOutLinks = props => {
  const { color } = props;
  const classes = useStyles();

  const navButtonClasses = classNames({
    [classes.navButton]: true,
    [classes[color]]: color
  });

  const logOutListClasses = classNames({
    [classes.list]: true,
    [classes.listLoggedOut]: true
  }) 

  const signOutLinks = [
    <Link className={classes.dropdownLink} to="/"><PhotoCameraIcon />Become a photographer</Link>,
    <Link className={classes.dropdownLink} to="/login"><ExitToAppIcon />Sign In</Link>,
    <Link className={classes.dropdownLink} to="/register"><BorderColorIcon />Sign Up</Link>
  ]

  return (
    <List className={logOutListClasses}>
      {signOutLinks.map((link, index) => (
        <ListItem key={index} className={classes.listItem}>
          <Button className={navButtonClasses}>
            {link}
          </Button>
        </ListItem>
      ))}
    </List>
  )
}

SignedOutLinks.propTypes = {
  appResponsive: PropTypes.bool,
  color: PropTypes.oneOf([
    "pink",
    "blue",
    "black"
  ])
}

export default SignedOutLinks;
