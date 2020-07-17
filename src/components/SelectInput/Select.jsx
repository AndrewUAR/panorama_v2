import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styles from '../../assets/jss/components/formInputStyle';

const useStyles = makeStyles(styles);

const CustomSelect = (props) => {
  const { value, onChange, underlineColor, id, labelText, menuItems } = props;
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
            root: classes.white,
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

CustomSelect.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  underlineColor: PropTypes.string,
  id: PropTypes.string,
  labelText: PropTypes.string,
  menuItems: PropTypes.array
};

export default CustomSelect;
