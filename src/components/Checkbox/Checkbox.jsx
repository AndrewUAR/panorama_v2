import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import { FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../assets/jss/components/formInputStyle';

const useStyles = makeStyles(styles);

const CustomCheckBox = (props) => {
  const { checked, onChange, label } = props;

  const classes = useStyles();

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
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      }
      label={label}
    />
  );
};

CustomCheckBox.propTypes = {
  checked: PropTypes.bool.isRequired
};

export default CustomCheckBox;
