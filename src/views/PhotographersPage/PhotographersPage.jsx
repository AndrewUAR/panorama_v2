import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../assets/jss/views/photographersPageStyle';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import Select from '../../components/SelectInput/Select';
import {
  sortByOptions,
  resultsPerPage,
  photographyCategories
} from '../../../src/app/helper/selectInputData';
import RatingSelect from '../../components/SelectInput/RatingSelect';
import Slide from '../../components/SlideInput/Slide';
import SlideRange from '../../components/SlideInput/SlideRange';
const useStyles = makeStyles(styles);

const PhotographersPage = (props) => {
  const [location, setLocation] = useState('');
  const [sortValue, setSortValue] = useState('');
  const [resultsValue, setResultsValue] = useState('');
  const [categoriesValue, setCategoriesValue] = useState([]);
  const [ratingValue, setRatingValue] = useState('');
  const [distanceRangeValue, setDistanceRangeValue] = useState(50);
  const [priceRangeValue, setPriceRangeValue] = useState([0, 999]);
  const classes = useStyles();

  const handleLocationChange = (e) => {
    const { value } = e.target;
    setLocation(value);
  };
  const handleSortChange = (e, values) => {
    setSortValue(values);
  };

  const handleResultsChange = (e, values) => {
    setResultsValue(values);
  };

  const handleCategoryChange = (e, values) => {
    setCategoriesValue(values);
  };

  const handleRatingChange = (e) => {
    const { value } = e.target;
    setRatingValue(value);
  };

  return (
    <div className={classes.container}>
      <GridContainer justify="center" className={classes.topBar}>
        <GridItem xs={12} sm={12} md={12} className={classes.searchAndSortBar}>
          <div className={classes.formInput}>
            <PlaceInput
              id="location"
              labelText="Enter City"
              placeholder="Enter City"
              value={location}
              onChange={handleLocationChange}
              underlineColor="underlineTeal"
            />
          </div>
          <div className={classes.sortSelectGroup}>
            <Select
              id="sortBy"
              labelText="Sort By"
              placeholder="Sort by"
              value={sortValue}
              onChange={handleSortChange}
              options={sortByOptions()}
              multiple={false}
              underlineColor="underlineTeal"
            />
            <Select
              id="resultsPerPage"
              labelText="Per Page"
              placeholder="Per Page"
              value={resultsValue}
              onChange={handleResultsChange}
              options={resultsPerPage()}
              multiple={false}
              underlineColor="underlineTeal"
            />
          </div>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center" className={classes.mainArea}>
        <GridItem xs={12} sm={12} md={2} className={classes.sideBar}>
          <h3 className={classes.sideBarTitle}>Filter by:</h3>
          <Select
            id="categories"
            labelText="Categories"
            placeholder="Categories"
            value={categoriesValue}
            onChange={handleCategoryChange}
            options={photographyCategories()}
            multiple={true}
            underlineColor="underlineTeal"
          />
          <RatingSelect
            id="rating"
            labelText="Rating"
            value={ratingValue}
            onChange={handleRatingChange}
            underlineColor="underlineTeal"
          />
          <Slide
            labelText="Distance Range"
            value={distanceRangeValue}
            setValue={setDistanceRangeValue}
          />
          <SlideRange
            labelText="Price range ($)"
            value={priceRangeValue}
            setValue={setPriceRangeValue}
          />
        </GridItem>
        <GridItem
          xs={12}
          sm={12}
          md={9}
          className={classes.photographersArea}
        ></GridItem>
      </GridContainer>
    </div>
  );
};

PhotographersPage.propTypes = {};

export default PhotographersPage;
