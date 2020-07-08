import { asyncActionStart, asyncActionFinish } from '../actions/asyncActions';
import { store } from '../store/store';

export const getMyLocation = (setCoordinates) => {
  console.log('in geo');
  store.dispatch(asyncActionStart());
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoordinates(
        [position.coords.longitude, position.coords.latitude]
        // lat: position.coords.latitude,
        // lng: position.coords.longitude
        // }
      );
    });
  }
  store.dispatch(asyncActionFinish());
};

export const countryToFlag = (isoCode) =>
  typeof String.fromCodePoint !== 'undefined'
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : isoCode;
