import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormControl, InputLabel, Input, TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";
import styles from "../../assets/jss/components/formInputStyle.js";

const useStyles = makeStyles(styles);

const FormInput = props => {
  const { id, labelText, inputProps, underlineColor, onChange, onFocus, error } = props;

  const classes = useStyles();
  
  const underlineClasses = classNames({
    [classes.underline]: true,
    [classes.underlineError]: error,
    [classes[underlineColor]]: underlineColor
  })

  const inputClasses = classNames({
    [classes.input]: true
  })

  return (
    <FormControl className={classes.formControl}>
      <InputLabel 
        htmlFor={id}
        className={classes.label}
      >
      {labelText}
      </InputLabel>
      <Input
        id={id}
        {...inputProps}
        classes={{ 
          underline: underlineClasses,
          input: inputClasses
        }}
        onChange={onChange}
        onFocus={onFocus}
      />
      {error ? <p className={classes.error}>{error}</p> : ''}
    </FormControl>
  )
}

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  inputProps: PropTypes.object.isRequired,
  labelText: PropTypes.string,
  underlineColor: PropTypes.oneOf([
    "underlinePink",
    "underlineTeal"
  ]),
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func
}

export default FormInput

