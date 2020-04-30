import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import { FormControlLabel } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import styles from "../../assets/jss/components/switchStyles";

const useStyles = makeStyles(styles);

const CustomSwitch = props => {

  const { labelProps, switchProps, onChange } = props;

  const classes = useStyles();

  const formControlLabelClasses = classNames({
    [classes.container]: true
  })

  return (
    <FormGroup>
      <FormControlLabel
        {...labelProps}
        className = {formControlLabelClasses}
        control={
          <Switch 
            {...switchProps} 
            onChange={onChange} 
            classes={{
              switchBase: classes.switchBase,
              checked: classes.checked,
              track: classes.track
            }}
          />}
      />
    </FormGroup>
  )
}

CustomSwitch.propTypes = {
  labelProps: PropTypes.object.isRequired,
  switchProps: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}

export default CustomSwitch;
