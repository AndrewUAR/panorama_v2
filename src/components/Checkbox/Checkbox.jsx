import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox'
import { FormControlLabel } from '@material-ui/core';
import styles from "../../assets/jss/components/formInputStyle";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const CustomCheckBox = props => {
  const { checked, onChange, label, color } = props;

  const classes =useStyles();

  return (
    <FormControlLabel
        className={classes.checkboxContainer}
        control={
          <Checkbox
            checked={checked}
            onChange={onChange}
            color="default"
            classes={{
              root: classes.blue
            }}
            name="checkedF"
            inputProps={{'aria-label': 'primary checkbox'}}
          />
        }
        label={label}
      />
  )
}

CustomCheckBox.propTypes = {

}

export default CustomCheckBox;
