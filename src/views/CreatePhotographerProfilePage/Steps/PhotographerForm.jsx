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

const useStyles = makeStyles(styles);

const PhotographerForm = props => {
  const [photographer, setPhotographer] = useState({
    bio: '',
    languages: ['English'],
    location: [],
    categories: []
  })

  const { bio, languages, categories, location } = photographer;

  const classes = useStyles();

  const onChange = e => {
    const { name, value } = e.target;
    setPhotographer(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const onChangeSelect = (e) => {
    const { name, value } = e.target;
    setPhotographer(prevState => ({
      ...prevState,
      [name]: value
    }))
  };

  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={8} md={6}>
        <form className={classes.formContainer}>
          <div className={classes.formInput}>
            <PersonIcon className={classes.inputIcon}/>
            <FormInput 
              id="bio"
              labelText="Bio"
              underlineColor="underlineTeal"
              inputProps={{
                placeholder: "Bio",
                multiline: true,
                type: "text",
                name: "bio",
                value: bio,
                autoComplete: 'off'
              }}
              onChange={onChange}
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
              onChange={onChangeSelect}
              options={languagesList()}
              underlineColor="underlineTeal"
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
              onChange={onChangeSelect}
              options={photographyCategories()}
              underlineColor="underlineTeal"
            />
          </div>
          <div className={classes.formInput}>
            <MyLocationIcon className={classes.inputIcon}/>
            <FormInput 
              id="location"
              labelText="Serve city"
              underlineColor="underlineTeal"
              inputProps={{
                placeholder: "Serve City",
                type: "text",
                name: "location",
                value: location,
                autoComplete: 'off'
              }}
              onChange={onChange}
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
