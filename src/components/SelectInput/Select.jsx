import React from 'react';
import clsx from 'clsx';
import classNames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import styles from "../../assets/jss/components/formInputStyle";
import Menu from '@material-ui/core/Menu';
import MenuList from '@material-ui/core/MenuList';

const useStyles = makeStyles(styles);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      height: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    },
  },
};

function getStyles(item, options, theme) {
  return {
    fontWeight:
      options.indexOf(item) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const CustomSelect = props => {

  const { options, onChange, selectProps, id, labelText, underlineColor } = props;
  const classes = useStyles();
  const theme = useTheme();

  const underlineClasses = classNames({
    [classes.underline]: true,
    [classes[underlineColor]]: underlineColor
  })

  return (
    <FormControl className={classes.formControl}>
      <InputLabel 
        className={classes.label} 
        id={id + "-mutiple-chip-label"}
      >{labelText}</InputLabel>
      <Select
        labelId={id + "-mutiple-chip-label"}
        {...selectProps}
        onChange={onChange}
        classes={{
          select: classes.chips
        }}
        input={<Input
          id="select-multiple-chip"
          classes={{ 
            underline: underlineClasses,
            input: classes.input
          }}
          id={selectProps.id} />
        }
        renderValue={(selected) => (
          <div className={classes.chips}>
            {selected.map((value) => (
              <Chip key={value} label={value} className={classes.chip} />
            ))}
          </div>
        )}
        MenuProps={MenuProps}
      >
              
        {options.map((item, index) => (
          <MenuItem key={index} value={item} style={getStyles(item, options, theme)}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CustomSelect;
