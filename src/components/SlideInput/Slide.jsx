import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import styles from '../../assets/jss/components/formInputStyle';

const useStyles = makeStyles(styles);

const InputSlider = (props) => {
  const { labelText, value, setValue, setChange } = props;
  const classes = useStyles();

  const handleSliderChange = (event, value) => {
    setValue(value);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  const onChange = (event, value) => {
    setChange(value);
  }

  const underlineClasses = classNames({
    [classes.underline]: true,
    [classes.underlineTeal]: true
  });

  return (
    <div>
      <Typography
        id="input-slider"
        gutterBottom
        className={classes.sliderLabel}
      >
        {labelText}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChangeCommitted={handleSliderChange}
            onChange={onChange}
            aria-labelledby="input-slider"
            classes={{
              root: classes.blue
            }}
          />
        </Grid>
        <Grid item>
          <Input
            classes={{
              input: classes.sliderInput,
              underline: underlineClasses
            }}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 5,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider'
            }}
          />
          <span className={classes.sliderLabel}>mi</span>
        </Grid>
      </Grid>
    </div>
  );
};

export default InputSlider;
