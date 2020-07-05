import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Rating from '@material-ui/lab/Rating';
import styles from '../../assets/jss/components/formInputStyle';

const useStyles = makeStyles(styles);

const RatingSelect = (props) => {
  const { value, onChange, underlineColor, id, labelText } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const selectClasses = classNames({
    [classes.underline]: true,
    [classes[underlineColor]]: underlineColor
  });

  const listClasses = classNames({
    [classes.list]: true,
    [classes.ratingStars]: true
  });

  const menuItems = _.range(5, 0).map((item, index) => (
    <MenuItem key={index} value={item}>
      <Rating name="size-small" value={item} size="small" readOnly />
    </MenuItem>
  ));

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id={id} className={classes.selectLabel}>
          {labelText}
        </InputLabel>
        <Select
          id={id}
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={value}
          onChange={onChange}
          className={selectClasses}
          classes={{
            icon: classes.white
          }}
          MenuProps={{
            classes: { list: listClasses }
          }}
        >
          {menuItems}
        </Select>
      </FormControl>
    </div>
  );
};

RatingSelect.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  underlineColor: PropTypes.string,
  id: PropTypes.string,
  labelText: PropTypes.string
};

export default RatingSelect;
