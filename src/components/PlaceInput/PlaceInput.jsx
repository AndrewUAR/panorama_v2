import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControl from '@material-ui/core/FormControl';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import {
  getPlaces,
  getMyPlace
} from '../../app/services/thirdPartyAPI.service';
import styles from '../../assets/jss/components/formInputStyle';
import { getMyLocation } from '../../app/helper/helperFunctions';

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
    onChangeLocation,
    trigger
  } = props;

  const onChange = (e) => {
    setPlace(e.target.value);
  };

  useEffect(() => {
    if (place) {
      setOpen(true);
      (async () => {
        const places = await getPlaces({ place });
        setOptions(places.data.data);
      })();
    } else {
      setOpen(false);
      setOptions([]);
    }
  }, [place]);

  useEffect(() => {
    if (coordinates.length > 0) {
      setOpen(true);
      (async () => {
        const res = await getMyPlace(coordinates);
        const myPlace = { placeName: res.data.data, coordinates };
        console.log(myPlace);
        setOptions([myPlace]);
      })();
    }
  }, [coordinates]);

  const inputRootClasses = classNames({
    [classes.underline]: true,
    [classes.inputPadding]: true,
    [classes[underlineColor]]: underlineColor,
    [classes.underlineError]: error
  });

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
          <>
            <span className={classes.renderOptionIcon}>
              <LocationOnIcon />
            </span>
            {option.placeName}
          </>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label={labelText}
            onChange={onChange}
            variant="standard"
            InputLabelProps={{
              classes: { root: classes.selectLabel }
            }}
            InputProps={{
              ...params.InputProps,
              classes: {
                root: classes.selectLabel
              },
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : (
                    <MyLocationIcon
                      className={classes.inputIcon}
                      onClick={() => {
                        getMyLocation(setCoordinates);
                        if (trigger) trigger(true);
                      }}
                    />
                  )}
                </>
              )
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

const mapStateToProps = (state) => ({
  loading: state.async.loadingGeo
});

export default connect(mapStateToProps)(PlaceInput);
