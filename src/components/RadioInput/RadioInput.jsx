import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import { FormControlLabel, Radio } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/components/formInputStyle.js";

const useStyles = makeStyles(styles);

const RadioInput = props => {
  const {label, name, value, options, onChange, direction} = props;

  const classes = useStyles();

  return (
    <FormControl>
      <FormLabel className={classes.label}>{label}</FormLabel>
      <RadioGroup name={name} value={value} onChange={onChange} className={classes.radioGroup}>
        {options.map((option, index) => (
          <FormControlLabel 
            key={index} 
            value={option.value} 
            control={<Radio classes={{root: classes.blue}}/>} 
            label={<><i className={option.icon + ' ' + classes.radioIcon}></i>{option.label}</>}
          />
        ))}
      </RadioGroup>
    </FormControl>
  )
}

RadioInput.propTypes = {

}

export default RadioInput

