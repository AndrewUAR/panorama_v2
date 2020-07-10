import { createReducer } from '../helper/reducerUtils';
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

const initialState = {
  coordinates: [],
  sort: '',
  page: 1,
  resultsPerPage: 12,
  distanceRange: 100,
  priceRange: [0, 999],
  rating: '',
  categories: [],
  languages: [],
  place: ''
};

const setCoordinates = (state, payload) => ({
  ...state,
  coordinates: payload
});

const setSort = (state, payload) => ({
  ...state,
  sort: payload
});

const setPage = (state, payload) => ({
  ...state,
  page: payload
});

const setResultsPerPage = (state, payload) => ({
  ...state,
  resultsPerPage: payload
});

const setDistanceRange = (state, payload) => ({
  ...state,
  distanceRange: payload
});

const setPriceRange = (state, payload) => ({
  ...state,
  priceRange: payload
});

const setRating = (state, payload) => ({
  ...state,
  rating: payload
});

const setCategories = (state, payload) => ({
  ...state,
  categories: payload
});

const setLanguages = (state, payload) => ({
  ...state,
  languages: payload
});

const setPlace = (state, payload) => ({
  ...state,
  place: payload
});

export default createReducer(initialState, {
  [SET_COORDINATES]: setCoordinates,
  [SET_SORT]: setSort,
  [SET_PAGE]: setPage,
  [SET_RESULTS_PER_PAGE]: setResultsPerPage,
  [SET_DISTANCE_RANGE]: setDistanceRange,
  [SET_PRICE_RANGE]: setPriceRange,
  [SET_RATING]: setRating,
  [SET_CATEGORIES]: setCategories,
  [SET_LANGUAGES]: setLanguages,
  [SET_PLACE]: setPlace
});
