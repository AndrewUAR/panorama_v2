import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Input, Grid } from '@material-ui/core';
import styles from '../../assets/jss/components/formInputStyle';

const useStyles = makeStyles(styles);

const RangeSlider = (props) => {
  const { labelText, value, setValue, setChange } = props;
  const classes = useStyles();

  const handleChange = (event, value) => {
    setValue(value);
  };

  const onChange = (event, value) => {
    setChange(value);
  };

  const underlineClasses = classNames({
    [classes.underline]: true,
    [classes.underlineTeal]: true
  });

  return (
    <div>
      <Typography
        id="range-slider"
        gutterBottom
        className={classes.sliderLabel}
      >
        {labelText}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Input
            classes={{
              disabled: classes.sliderInput,
              underline: underlineClasses
            }}
            value={value[0]}
            disabled
          />
        </Grid>
        <Grid item xs={8} xl={8}>
          <Slider
            min={0}
            max={999}
            step={1}
            value={value}
            onChangeCommitted={handleChange}
            onChange={onChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            classes={{
              root: classes.blue
            }}
          />
        </Grid>
        <Grid item xs>
          <Input
            classes={{
              disabled: classes.sliderInput,
              underline: underlineClasses
            }}
            value={value[1]}
            disabled
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default RangeSlider;
