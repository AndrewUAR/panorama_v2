import { asyncActionStart } from '../actions/asyncActions';
import { store } from '../store/store';

export const getMyLocation = (setCoordinates) => {
  if (navigator.geolocation) {
    store.dispatch(asyncActionStart());
    navigator.geolocation.getCurrentPosition((position) => {
      setCoordinates({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    });
  }
};

export const countryToFlag = (isoCode) => {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : isoCode;
};
