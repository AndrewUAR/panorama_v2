/*global google*/  
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FormInput from '../../../components/FormInput/FormInput';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import Select from "../../../components/SelectInput/Select";
import { languagesList, photographyCategories } from "../../../app/helper/selectInputData";
import styles from "../../../assets/jss/views/CreatePhotographerProfilePageStyle/Steps/formStyle";
import { makeStyles } from '@material-ui/core/styles';
import LanguageIcon from '@material-ui/icons/Language';
import PersonIcon from '@material-ui/icons/Person';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import PhotoFilterIcon from '@material-ui/icons/PhotoFilter';
import PlaceInput from '../../../components/PlaceInput/PlaceInput';

const useStyles = makeStyles(styles);

const PhotographerForm = props => {
  console.log(props)
  // const [photographer, setPhotographer] = useState({
  //   introduction: '',
  //   languages: ['English'],
  //   location: [],
  //   categories: []
  // })

  // const [error, setError] = useState({
  //   introductionError: '',
  //   languagesError: '',
  //   locationError: '',
  //   categoriesError: ''
  // })
  const { photographer, error, onChange, handleCityChange, handleCitySelect } = props;

  // const [city, setCity] = useState('')

  const { introduction, languages, categories, location, city } = photographer;
  const { introductionError, languagesError, locationError, categoriesError } = error;

  const classes = useStyles();

  // const handleCityChange = city => {
  //   console.log(city)
  //   setCity(city);
  // }

  // const handleCitySelect = selectedCity => {
  //   geocodeByAddress(selectedCity)
  //     .then(result => getLatLng(result[0]))
  //     .then(latLng=> {
  //       console.log(latLng)
  //     })
  // }

  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={8} md={6}>
        <form className={classes.formContainer}>
          <div className={classes.formInput}>
            <PersonIcon className={classes.inputIcon}/>
            <FormInput 
              id="introduction"
              labelText="Introduction"
              underlineColor="underlineTeal"
              inputProps={{
                placeholder: "Introduction",
                multiline: true,
                type: "text",
                name: "introduction",
                value: introduction,
                autoComplete: 'off'
              }}
              onChange={onChange}
              error={introductionError}
            />
          </div>
          <div className={classes.formInput}>
            <LanguageIcon className={classes.inputIcon}/>
            <Select
              id="languages"
              labelText="Languages"
              selectProps={{
                id: "languages",
                value: languages,
                multiple: true,
                name: "languages"
              }}
              onChange={onChange}
              options={languagesList()}
              underlineColor="underlineTeal"
              error={languagesError}
            />
          </div>
          <div className={classes.formInput}>
            <PhotoFilterIcon className={classes.inputIcon}/>
            <Select
              id="categories"
              labelText="Photography Categories"
              selectProps={{
                id: "categories",
                value: categories,
                multiple: true,
                name: "categories"
              }}
              onChange={onChange}
              options={photographyCategories()}
              underlineColor="underlineTeal"
              error={categoriesError}
            />
          </div>
          <div className={classes.formInput}>
            <MyLocationIcon className={classes.inputIcon}/>
            <PlaceInput
              id="city"
              labelText="Serve Location"
              inputProps={{
                type: "text",
                name: "city",
                placeholder: "Serve Location",
                autoComplete: 'off'
              }}
              options={{types: ['cities']}}
              onSelect={handleCitySelect}
              onChange={handleCityChange}
              value={city}
              underlineColor="underlineTeal"
            />
          </div>
        </form>
      </GridItem>
    </GridContainer>
  )
}

PhotographerForm.propTypes = {

}

export default PhotographerForm;
