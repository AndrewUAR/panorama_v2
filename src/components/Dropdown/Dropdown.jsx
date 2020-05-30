import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import { MenuList, MenuItem } from '@material-ui/core';
import styles from "../../assets/jss/components/dropdownStyle";

const useStyles = makeStyles(styles);

const Dropdown = props => {
  const { dropdownList, buttonProps } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const onClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  const onClose = () => {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <>
      <Button aria-describedby={id} type="button" onClick={onClick} className={buttonProps.className}>
        {buttonProps.image}{buttonProps.text}{buttonProps.icon}
      </Button>
      <Popover 
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div className={classes.root}>
          <MenuList autoFocusItem={open} id="menu-list-grow">
            {dropdownList.map((item, index) => (
              <MenuItem key={index} onClick={onClose} className={classes.menuItem}>{item}</MenuItem>
            ))}
          </MenuList>
        </div>
      </Popover>
    </>
  )
}

Dropdown.propTypes = {
  dropdownList: PropTypes.array.isRequired,
  buttonProps: PropTypes.object.isRequired
}

export default Dropdown;
