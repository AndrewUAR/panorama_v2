import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { List, ListItem, Button, makeStyles } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import InfoIcon from '@material-ui/icons/Info';

import styles from "../../assets/jss/components/footerLinksStyle";

const useStyles = makeStyles(styles);

const FooterLinks = props => {
  const { color } = props;
  const classes = useStyles();

  const navButtonClasses = classNames({
    [classes.navButton]: true,
    [classes[color]]: color
  })

  const footerLinks = [
    <Link to="/"><HomeIcon />Home</Link>,
    <Link to="/"><InfoIcon />About Us</Link>,
    <Link to="/"><SearchIcon />Explore photographers</Link>
  ];

  return (
    <List className={classes.list}>
      {footerLinks.map((link, index) => ( 
        <ListItem key={index} className={classes.listItem}>
          <Button className={navButtonClasses}>
            {link}
          </Button>
        </ListItem>
      ))}
    </List>
  )
}

FooterLinks.propTypes = {
  color: PropTypes.oneOf([
    "pink",
    "blue",
    "black"
  ]),
}

export default FooterLinks;
