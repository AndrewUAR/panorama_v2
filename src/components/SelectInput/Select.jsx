/* eslint-disable no-use-before-define */
import React, { Fragment } from 'react';
import classNames from 'classnames';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import CameraEnhanceIcon from '@material-ui/icons/CameraEnhance';
import TranslateIcon from '@material-ui/icons/Translate';
import styles from '../../assets/jss/components/formInputStyle';

const useStyles = makeStyles(styles);

const Select = (props) => {
  const classes = useStyles();
  const {
    error,
    options,
    labelText,
    underlineColor,
    placeholder,
    value,
    onChange,
    id,
    listName
  } = props;

  const underlineClasses = classNames({
    [classes.underline]: true,
    [classes.underlineError]: error,
    [classes[underlineColor]]: underlineColor
  });

  const getRenderOption = (option, listName) => {
    switch (listName) {
      case 'languages':
        return (
          <>
            <span className={classes.renderOptionIcon}>
              <TranslateIcon />
            </span>
            {option}
          </>
        );
      case 'categories':
        return (
          <>
            <span className={classes.renderOptionIcon}>
              <CameraEnhanceIcon />
            </span>
            {option}
          </>
        );
      default:
        return <>{option}</>;
    }
  };

  return (
    <FormControl className={classes.formControl}>
      <Autocomplete
        multiple
        id={id}
        options={options}
        value={value}
        autoHighlight
        getOptionLabel={(option) => option}
        onChange={onChange}
        classes={{
          inputRoot: underlineClasses,
          tag: classes.chip,
          listbox: classes.list,
          option: classes.listItem,
          noOptions: classes.list
        }}
        renderOption={(option) => getRenderOption(option, listName)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label={labelText}
            InputLabelProps={{
              classes: { root: classes.selectLabel }
            }}
            InputProps={{
              ...params.InputProps,
              classes: { root: classes.selectLabel }
            }}
            placeholder={placeholder}
            classes={{
              root: classes.input
            }}
          />
        )}
      />
      {error ? <p className={classes.error}>{error}</p> : ''}
    </FormControl>
  );
};

export default Select;
