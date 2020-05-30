import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import styles from "../../assets/jss/components/formInputStyle";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControl from '@material-ui/core/FormControl';
import {getPlaces} from "../../app/services/thirdPartyAPI.service";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import { getMyLocation } from '../../app/helper/helperFunctions';
import { getMyPlace } from '../../app/services/thirdPartyAPI.service';

const useStyles = makeStyles(styles);

const PlaceInput = (props) => {
  const [place, setPlace] = useState('');
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [coordinates, setCoordinates] = useState({
    lat: '',
    lng: ''
  });
  const classes = useStyles();

  const {
    id,
    loading,
    error,
    labelText, 
    underlineColor, 
    placeholder, 
    onChangeLocation
  } = props;

  const onChange = (e) => {
    setPlace(e.target.value);
  }

  useEffect(() => {
    if (place) {
      setOpen(true);
      (async () => {
        const places = await getPlaces({place});
        console.log(places)
        setOptions(places.data.data);
        console.log(options)
      })();
    } else {
      setOpen(false);
      setOptions([])
    }
  }, [place]);

  useEffect(() => {
    if (coordinates.lat) {
      (async () => {
        const myPlace = await getMyPlace(coordinates);
        setPlace(myPlace.data.data);
      })();
    }
  }, [coordinates])

  const inputRootClasses = classNames({
    [classes.underline]: true,
    [classes.inputPadding]: true,
    [classes[underlineColor]]: underlineColor,
    [classes.underlineError]: error
  })

  return (
    <FormControl className={classes.formControl}>
      <Autocomplete
        id={id}
        open={open}
        onClose={() => {
          setOpen(false);
          setPlace('');
        }}
        loading={loading}
        getOptionLabel={(option) => option.placeName}
        options={options}
        noOptionsText="No results found"
        loading={loading}
        loadingText="Locating..."
        onChange={onChangeLocation}
        classes={{
          inputRoot: inputRootClasses,
          listbox: classes.list,
          option: classes.listItem,
          noOptions: classes.list,
          loading: classes.list
        }}
        renderOption={(option) => (
          <Fragment>
            <span className={classes.renderOptionIcon}><LocationOnIcon /></span>
            {option.placeName} 
          </Fragment>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label={labelText}
            onChange={onChange}
            variant="standard"
            InputLabelProps={{
              classes: {root: classes.selectLabel}
            }}
            InputProps={{
              ...params.InputProps,
              classes: {
                root: classes.selectLabel
              },
              endAdornment: (
                <Fragment>
                  {loading 
                    ? <CircularProgress color="inherit" size={20} /> 
                    : <MyLocationIcon className={classes.inputIcon} onClick={() => getMyLocation(setCoordinates)} />
                  }
                </Fragment>
              ),
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
}


const mapStateToProps = state => ({
  loading: state.async.loading
})


export default connect(mapStateToProps)(PlaceInput);