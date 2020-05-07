import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PlacesAutocomplete from 'react-places-autocomplete';
import styles from '../../assets/jss/components/formInputStyle';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Popover from '@material-ui/core/Popover';
import Menu from '@material-ui/core/Menu';
import MenuList from '@material-ui/core/MenuList';

const useStyles = makeStyles(styles);


const PlaceInput = props => {
  const { onChange, onSelect, value, options, underlineColor, placeholder, inputProps, labelText, id } = props;

  const classes = useStyles();
  const theme = useTheme();

  const underlineClasses = classNames({
    [classes.underline]: true,
    [classes[underlineColor]]: underlineColor
  })

  return (
    <PlacesAutocomplete
      value={value}
      onChange={onChange}
      onSelect={onSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <FormControl className={classes.formControl}> 
          <InputLabel 
            htmlFor={id}
            className={classes.label}
          >
            {labelText}
          </InputLabel>
          <Input
            id={id}
            {...getInputProps({...inputProps})}
            classes={{ 
              underline: underlineClasses,
              input: classes.input
            }}
          />
          <div style={{position: "relative"}}>
            <MenuList className={classes.list}>
              {loading && <div className={classes.loadingPlaceholder}>Searching...</div>}
              {suggestions.map(suggestion => 
                <MenuItem
                  {...getSuggestionItemProps(suggestion)}
                  className={classes.listItem}
                >
                  {suggestion.description}
                </MenuItem>
              )}
            </MenuList>
          </div>
        </FormControl>
      )}
    </PlacesAutocomplete>
  )
}

PlaceInput.propTypes = {

}

export default PlaceInput
