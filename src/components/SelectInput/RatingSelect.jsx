import React, { useState } from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import styles from '../../assets/jss/components/formInputStyle';

const useStyles = makeStyles(styles);

const RatingSelect = props => {
  const { value, onChange, underlineColor } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const underlineClasses = classNames({
    [classes.underline]: true,
    [classes[underlineColor]]: underlineColor
  });

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={value}
          onChange={onChange}
          className={underlineClasses}
        >
          <MenuItem value={5}><Rating name="size-small" defaultValue={5} size="small" disabled /></MenuItem>
          <MenuItem value={4}><Rating name="size-small" defaultValue={4} size="small" disabled /></MenuItem>
          <MenuItem value={3}><Rating name="size-small" defaultValue={3} size="small" disabled /></MenuItem>
          <MenuItem value={2}><Rating name="size-small" defaultValue={2} size="small" disabled /></MenuItem>
          <MenuItem value={1}><Rating name="size-small" defaultValue={1} size="small" disabled /></MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default RatingSelect;