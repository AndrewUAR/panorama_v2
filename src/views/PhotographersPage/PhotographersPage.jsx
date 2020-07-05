import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
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
import PhotographerCard from './PhotographerCard';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '../../components/Button/CustomButton';
import { Hidden } from '@material-ui/core';
const useStyles = makeStyles(styles);

const PhotographersPage = (props) => {
  const { photographers } = props;
  const [location, setLocation] = useState('');
  const [sortValue, setSortValue] = useState('');
  const [resultsValue, setResultsValue] = useState('');
  const [categoriesValue, setCategoriesValue] = useState([]);
  const [ratingValue, setRatingValue] = useState('');
  const [distanceRangeValue, setDistanceRangeValue] = useState(50);
  const [priceRangeValue, setPriceRangeValue] = useState([0, 999]);
  const [expanded, setExpanded] = useState(false);

  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.up('sm'));

  useEffect(() => {
    setExpanded(isSmallScreen);
  }, [isSmallScreen]);

  const handleChange = (event, isExpanded) => {
    setExpanded(isExpanded);
  };

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
            <Hidden smDown>
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
            </Hidden>
          </div>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center" className={classes.mainArea}>
        <GridItem xs={12} sm={12} md={2} className={classes.sideBar}>
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
              </Hidden>
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
              <Button color="blue" size="sm">
                Apply
              </Button>
            </AccordionDetails>
          </Accordion>
        </GridItem>
        <GridItem
          xs={12}
          sm={12}
          md={9}
          // className={classes.photographersArea}
        >
          <GridContainer justify="space-evenly">
            {photographers.map((photographer, index) => (
              <GridItem
                key={index}
                xs={12}
                sm={12}
                md={4}
                className={classes.photographerCard}
              >
                <PhotographerCard photographerObj={photographer} />
              </GridItem>
            ))}
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  photographers: state.photographers.photographers
});

PhotographersPage.propTypes = {
  photographers: PropTypes.array
};

export default connect(mapStateToProps)(PhotographersPage);
