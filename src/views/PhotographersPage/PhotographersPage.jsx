import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Pagination from '@material-ui/lab/Pagination';
import styles from '../../assets/jss/views/photographersPageStyle';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import AutocompleteSelect from '../../components/SelectInput/AutocompleteSelect';
import {
  photographyCategories,
  languagesList
} from '../../../src/app/helper/selectInputData';
import Select from '../../components/SelectInput/Select';
import Slide from '../../components/SlideInput/Slide';
import SlideRange from '../../components/SlideInput/SlideRange';
import PhotographerCard from './PhotographerCard';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '../../components/Button/CustomButton';
import { Hidden, MenuItem } from '@material-ui/core';
import { getMyLocation } from '../../app/helper/helperFunctions';
import { getPhotographers } from '../../app/actions/photographerActions';
import Rating from '@material-ui/lab/Rating';
import {
  setCoordinates,
  setSort,
  setPage,
  setResultsPerPage,
  setDistanceRange,
  setPriceRange,
  setRating,
  setCategories,
  setLanguages
} from '../../app/actions/photographersQueryActions';

const useStyles = makeStyles(styles);

const PhotographersPage = (props) => {
  const {
    photographersResults,
    loading,
    getPhotographers,
    setCoordinates,
    setSort,
    setPage,
    setResultsPerPage,
    setDistanceRange,
    setPriceRange,
    setRating,
    setCategories,
    setLanguages,
    query
  } = props;

  const { photographers, results } = photographersResults;

  const {
    coordinates,
    sort,
    page,
    resultsPerPage,
    distanceRange,
    priceRange,
    rating,
    categories,
    languages
  } = query;

  const [expanded, setExpanded] = useState(false);
  const [pagesQuantity, setPagesQuantity] = useState(0);

  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.up('md'));

  

  useEffect(() => {
    setExpanded(isSmallScreen);
  }, [isSmallScreen]);

  useEffect(() => {
    if (_.isEmpty(coordinates)) {
      getMyLocation(setCoordinates);
    }
  }, []);

  useEffect(() => {
    if (!_.isEmpty(coordinates)) {
      getPhotographers(query);
    }
  }, [coordinates]);

  useEffect(() => {
    const pages = Math.ceil(results / resultsPerPage);
    setPagesQuantity(pages);
  }, [results, resultsPerPage])

  useEffect(
    () => () => {
      setPage(1);
      setCoordinates([]);
      setSort('');
      setResultsPerPage(12);
      setDistanceRange(100);
      setPriceRange([0, 999]);
      setRating('');
      setCategories([]);
      setLanguages([]);
    },
    // eslint-disable-next-line
    []
  );

  const handleChange = (event, isExpanded) => {
    setExpanded(isExpanded);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleLocationChange = (e, value) => {
    console.log('coord', coordinates);
    setCoordinates(value.coordinates);
  };

  const handleSortChange = (e) => {
    const { value } = e.target;
    setSort(value);
  };

  const handleResultsChange = (e) => {
    const { value } = e.target;
    setResultsPerPage(value);
  };

  const handleCategoryChange = (e, values) => {
    setCategories(values);
  };

  const handleLanguageChange = (e, values) => {
    setLanguages(values);
  };

  const handleRatingChange = (e) => {
    const { value } = e.target;
    setRating(value);
  };

  const handleReset = () => {
    setPage(1);
    setSort('');
    setResultsPerPage('');
    setDistanceRange(100);
    setPriceRange([0, 999]);
    setRating('');
    setCategories([]);
    setLanguages([]);
  };

  const ratingOptions = _.range(5, 0).map((item, index) => (
    <MenuItem key={index} value={item}>
      <Rating name="size-small" value={item} size="small" readOnly />
    </MenuItem>
  ));

  const sortOptions = [
    <MenuItem key={1} value={'-price'}>
      Price: high to low
    </MenuItem>,
    <MenuItem key={2} value={'price'}>
      Price: low to high
    </MenuItem>,
    <MenuItem key={3} value={'-photographer.ratingsAverage'}>
      Rating: high to low
    </MenuItem>,
    <MenuItem key={4} value={'photographer.ratingsAverage'}>
      Rating: low to high
    </MenuItem>
  ];

  const resultsOptions = [
    <MenuItem key={1} value={'12'}>
      12
    </MenuItem>,
    <MenuItem key={2} value={'24'}>
      24
    </MenuItem>,
    <MenuItem key={3} value={'48'}>
      48
    </MenuItem>
  ];

  return (
    <div className={classes.container}>
      <GridContainer justify="center" className={classes.topBar}>
        <GridItem xs={12} sm={10} md={12} className={classes.searchAndSortBar}>
          <form className={classes.locationInput}>
            <PlaceInput
              id="location"
              labelText="Enter City"
              placeholder="Enter City"
              onChange={handleLocationChange}
              underlineColor="underlineTeal"
            />
          </form>
          <div className={classes.sortSelectGroup}>
            <Hidden smDown>
              <Select
                id="sort"
                labelText="Sort by:"
                value={sort}
                menuItems={sortOptions}
                onChange={handleSortChange}
                underlineColor="underlineTeal"
              />
              <Select
                id="result"
                labelText="Per page:"
                value={resultsPerPage}
                menuItems={resultsOptions}
                onChange={handleResultsChange}
                underlineColor="underlineTeal"
              />
            </Hidden>
          </div>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center" className={classes.mainArea}>
        <GridItem xs={12} sm={10} md={2} className={classes.sideBar}>
          <Accordion
            expanded={expanded}
            className={classes.accordion}
            onChange={handleChange}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.accordionTitle}
            >
              <Typography className={classes.sideBarTitle}>
                Filter by:
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
              <Hidden mdUp>
                <AutocompleteSelect
                  id="sortBy"
                  labelText="Sort By"
                  placeholder="Sort by"
                  value={sort}
                  onChange={handleSortChange}
                  options={sortOptions}
                  multiple={false}
                  underlineColor="underlineTeal"
                />
              </Hidden>
              <AutocompleteSelect
                id="categories"
                labelText="Categories"
                placeholder="Categories"
                value={categories}
                onChange={handleCategoryChange}
                options={photographyCategories()}
                multiple={true}
                underlineColor="underlineTeal"
              />
              <AutocompleteSelect
                id="languages"
                labelText="Languages"
                placeholder="Languages"
                value={languages}
                onChange={handleLanguageChange}
                options={languagesList()}
                multiple={true}
                underlineColor="underlineTeal"
              />
              <Select
                id="rating"
                labelText="Rating"
                value={rating}
                menuItems={ratingOptions}
                onChange={handleRatingChange}
                underlineColor="underlineTeal"
              />
              <Slide
                labelText="Distance Range"
                value={distanceRange}
                setValue={setDistanceRange}
              />
              <SlideRange
                labelText="Price range ($)"
                value={priceRange}
                setValue={setPriceRange}
              />
              <Button color="danger" size="sm" onClick={() => handleReset()}>
                Reset
              </Button>
            </AccordionDetails>
          </Accordion>
        </GridItem>
        <GridItem xs={12} sm={12} md={9} className={classes.photographersArea}>
          <div className={classes.resultsBar}>
            <span>Found near: </span><span>Total results: {results}</span>
          </div>
          <GridContainer>
            {photographers.map((photographer, index) => (
                <GridItem
                  key={index}
                  xs={12}
                  sm={6}
                  md={4}
                  className={classes.photographerCard}
                >
                  <PhotographerCard photographerObj={photographer} />
                </GridItem>
              ))}
          </GridContainer>
          <Hidden smDown>
            <div className={classes.pagination}>
              <Pagination
                count={pagesQuantity}
                page={page}
                color="secondary"
                onChange={handlePageChange}
                variant="outlined"
                shape="rounded"
              />
            </div>
          </Hidden>
        </GridItem>
      </GridContainer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  photographersResults: state.photographers,
  loading: state.async.loading,
  query: state.photographersQuery
});

const actions = {
  getPhotographers,
  setCoordinates,
  setSort,
  setPage,
  setResultsPerPage,
  setDistanceRange,
  setPriceRange,
  setRating,
  setCategories,
  setLanguages
};

PhotographersPage.propTypes = {
  photographers: PropTypes.array
};

export default connect(mapStateToProps, actions)(PhotographersPage);
