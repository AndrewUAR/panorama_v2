import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
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
const useStyles = makeStyles(styles);

const PhotographersPage = (props) => {
  const [sortValue, setSortValue] = useState([]);
  const [resultsValue, setResultsValue] = useState([]);
  const [categoriesValue, setCategoriesValue] = useState([]);
  const [ratingValue, setRatingValue] = useState([]);
  const [distanceRangeValue, setDistanceRangeValue] = useState([]);
  const [priceRangeValue, setPriceRangeValue] = useState([]);
  const classes = useStyles();

  const handleSortChange = (e) => {
    setSortValue(e.target.value);
  };

  const handleResultsChange = (e) => {
    setResultsValue(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategoriesValue(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRatingValue(e.target.value);
  };

  const handleDistanceRangeChange = (e) => {
    setDistanceRangeValue(e.target.value);
  };

  const handlePriceRangeChange = (e) => {
    setPriceRangeValue(e.target.value);
  };

  const ratingOptions = _.range(5).map((val) => {
    return (
      <Rating defaultValue={val} size="small" />
    )
  })
  return (
    <div className={classes.container}>
      <div className={classes.searchAndSortBar}>
        <form className={classes.formInput}>
          <div>
            <PlaceInput
              id="city"
              labelText="Enter City"
              placeholder="Enter City"
              // value={city}
              // onChange={onChange}
              underlineColor="underlineTeal"
              autoComplete="off"
            />
          </div>
        </form>
        <div className={classes.sortSelectGroup}>
          <Select
            id="sortBy"
            labelText="Sort By"
            placeholder="Sort by"
            value={sortValue}
            onChange={handleSortChange}
            options={sortByOptions()}
            underlineColor="underlineTeal"
          />
          <Select
            id="resultsPerPage"
            labelText="Per Page"
            placeholder="Per Page"
            value={resultsValue}
            onChange={handleResultsChange}
            options={resultsPerPage()}
            underlineColor="underlineTeal"
          />
        </div>
      </div>
      <GridContainer justify="center" className={classes.mainArea}>
        <GridItem xs={12} sm={12} md={2} className={classes.sideBar}>
          <Select
            id="categories"
            labelText="Categories"
            placeholder="Categories"
            value={categoriesValue}
            onChange={handleCategoryChange}
            options={photographyCategories()}
            underlineColor="underlineTeal"
          />
          <RatingSelect underlineColor="underlineTeal" />
          <Select
            id="distance"
            labelText="Distance Range"
            placeholder="Distance Range"
            value={distanceRangeValue}
            onChange={handleCategoryChange}
            options={photographyCategories()}
            underlineColor="underlineTeal"
          />
          <Select
            id="categoryFilter"
            labelText="Categories"
            placeholder="Categories"
            value={categoriesValue}
            onChange={handleCategoryChange}
            options={photographyCategories()}
            underlineColor="underlineTeal"
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
