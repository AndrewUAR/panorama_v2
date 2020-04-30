import React, { useState } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AppBar, Toolbar, Button, Hidden, IconButton, Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SignedOutLinks from './SignedOutLinks';
import FooterLinks from '../Footer/FooterLinks';
import Menu from "@material-ui/icons/Menu";

import styles from "../../assets/jss/components/navBarStyle";
import SignedInLinks from './SignedInLinks';

const useStyles = makeStyles(styles);

const NavBar = props => {
  const { fixed, color, authenticated } = props;

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  }

  const classes = useStyles();

  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes.fixed]: fixed,
    [classes[color]]: color
  })

  const drawerPaperClasses = classNames({
    [classes.drawerPaper]: true,
    [classes[color]]: color
  })

  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        <Button className={classes.title}>
          <Link to="/">Panorama</Link>
        </Button>
        <Hidden smDown>
          {authenticated 
            ? <SignedInLinks className={classes.container}/>
            : <SignedOutLinks className={classes.container}/>
          }
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          anchor={"left"}
          open={drawerOpen}
          onClose={handleDrawerToggle}
          classes={{paper: drawerPaperClasses}}
        >
        {authenticated 
          ? <SignedInLinks className={classes.container}/>
          : <><FooterLinks /><SignedOutLinks className={classes.container}/></>
        }
        </Drawer>
      </Hidden>
    </AppBar>
  )
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
})

NavBar.propTypes = {
  absolute: PropTypes.bool,
  color: PropTypes.oneOf([
    "pink",
    "blue",
    "black"
  ])
}

export default connect(mapStateToProps)(NavBar);

