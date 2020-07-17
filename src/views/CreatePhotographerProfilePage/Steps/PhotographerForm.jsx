import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LanguageIcon from '@material-ui/icons/Language';
import PersonIcon from '@material-ui/icons/Person';
import PhotoFilterIcon from '@material-ui/icons/PhotoFilter';
import PinDropIcon from '@material-ui/icons/PinDrop';
import FormInput from '../../../components/FormInput/FormInput';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import Select from '../../../components/SelectInput/AutocompleteSelect';
import {
  languagesList,
  photographyCategories
} from '../../../app/helper/selectInputData';
import styles from '../../../assets/jss/views/CreatePhotographerProfilePageStyle/Steps/photographerFormStyle';
import PlaceInput from '../../../components/PlaceInput/PlaceInput';

const useStyles = makeStyles(styles);

const PhotographerForm = (props) => {
  const {
    photographer,
    error,
    onChange,
    handleLanguagesChange,
    handleCategoriesChange,
    handleLocationChange
  } = props;

  const { introduction, languages, categories, location } = photographer;

  const {
    introductionError,
    languagesError,
    locationError,
    categoriesError
  } = error;

  const classes = useStyles();

  return (
    <GridContainer justify="center" className={classes.container}>
      <GridItem xs={11} sm={8} md={6}>
        <form className={classes.formContainer}>
          <div className={classes.formInput}>
            <PersonIcon className={classes.inputIcon} />
            <FormInput
              id="introduction"
              labelText="Introduction"
              underlineColor="underlineTeal"
              inputProps={{
                placeholder: 'Introduction',
                multiline: true,
                rows: 1,
                type: 'text',
                name: 'introduction',
                value: introduction,
                autoComplete: 'off'
              }}
              onChange={onChange}
              error={introductionError}
            />
          </div>
          <div className={classes.formInput}>
            <LanguageIcon className={classes.inputIcon} />
            <Select
              id="languages"
              labelText="Languages"
              placeholder="Languages"
              value={languages}
              onChange={handleLanguagesChange}
              options={languagesList()}
              underlineColor="underlineTeal"
              listName="languages"
              multiple
              error={languagesError}
            />
          </div>
          <div className={classes.formInput}>
            <PhotoFilterIcon className={classes.inputIcon} />
            <Select
              id="categories"
              labelText="Categories"
              placeholder="Categories"
              value={categories}
              onChange={handleCategoriesChange}
              options={photographyCategories()}
              underlineColor="underlineTeal"
              listName="categories"
              multiple
              error={categoriesError}
            />
          </div>
          <div className={classes.formInput}>
            <PinDropIcon className={classes.inputIcon} />
            <PlaceInput
              id="location"
              labelText="Serve Location"
              placeholder="Serve Location"
              value={location}
              onChangeLocation={handleLocationChange}
              underlineColor="underlineTeal"
              error={locationError}
            />
          </div>
        </form>
      </GridItem>
    </GridContainer>
  );
};

PhotographerForm.propTypes = {
  photographer: PropTypes.object.isRequired,
  error: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  handleLanguagesChange: PropTypes.func.isRequired,
  handleCategoriesChange: PropTypes.func.isRequired,
  handleLocationChange: PropTypes.func.isRequired
};

export default PhotographerForm;
