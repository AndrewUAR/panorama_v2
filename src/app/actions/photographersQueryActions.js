import {
  SET_COORDINATES,
  SET_SORT,
  SET_PAGE,
  SET_RESULTS_PER_PAGE,
  SET_DISTANCE_RANGE,
  SET_PRICE_RANGE,
  SET_RATING,
  SET_CATEGORIES,
  SET_LANGUAGES,
  SET_PLACE
} from '../constants/photographersQuery';

export const setCoordinates = (coordinates) => (dispatch) => {
  dispatch({
    type: SET_COORDINATES,
    payload: coordinates
  });
};

export const setSort = (sortValue) => (dispatch) => {
  dispatch({
    type: SET_SORT,
    payload: sortValue
  });
};

export const setPage = (page) => (dispatch) => {
  dispatch({
    type: SET_PAGE,
    payload: page
  });
};

export const setResultsPerPage = (resultsValue) => (dispatch) => {
  dispatch({
    type: SET_RESULTS_PER_PAGE,
    payload: resultsValue
  });
};

export const setDistanceRange = (distanceRange) => (dispatch) => {
  dispatch({
    type: SET_DISTANCE_RANGE,
    payload: distanceRange
  });
};

export const setPriceRange = (priceRange) => (dispatch) => {
  dispatch({
    type: SET_PRICE_RANGE,
    payload: priceRange
  });
};

export const setRating = (ratingValue) => (dispatch) => {
  dispatch({
    type: SET_RATING,
    payload: ratingValue
  });
};

export const setCategories = (categories) => (dispatch) => {
  dispatch({
    type: SET_CATEGORIES,
    payload: categories
  });
};

export const setLanguages = (languages) => (dispatch) => {
  dispatch({
    type: SET_LANGUAGES,
    payload: languages
  });
};

export const setPlace = (place) => (dispatch) => {
  dispatch({
    type: SET_PLACE,
    payload: place
  });
};
