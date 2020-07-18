import {
  hexToRgb,
  blueColor,
  boxShadow,
  defaultFont,
  whiteColor
} from '../../panoramaStyles';
import image from '../../../img/backGround/photographerPage/joshua-sortino-LqKhnDzSF-8-unsplash.jpg';

const headerSectionStyle = (theme) => ({
  container: {
    ...boxShadow,
    width: '100%',
    height: '40vh',
    marginTop: '4rem',
    [theme.breakpoints.down('sm')]: {
      height: '40vh',
      marginTop: '2rem'
    }
  },
  upperSubContainer: {
    width: '100%',
    height: '50%',
    backgroundImage: `linear-gradient(to bottom, rgba(${hexToRgb(
      blueColor
    )}, 0.1),
      rgba(${hexToRgb(blueColor)}, 0.5)), url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  },
  bottomSubContainer: {
    width: '100%',
    height: '50%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column',
    background: `linear-gradient(to top, rgba(${hexToRgb(
      '#1488cc'
    )}, 0.8), rgba(${hexToRgb('#0575e6')}, 1))`
  },
  photoWrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&::before': {
      content: '" "',
      display: 'block',
      height: '0.5em',
      minWidth: '50%',
      background: 'linear-gradient(to right, #64b5f6, #2979ff)'
    },
    '&::after': {
      content: '" "',
      display: 'block',
      height: '0.5em',
      minWidth: '50%',
      background: 'linear-gradient(to left, #64b5f6, #2979ff)'
    }
  },
  profilePhoto: {
    ...boxShadow,
    position: 'absolute',
    height: '20rem',
    width: 'auto',
    borderRadius: '12rem',
    border: '0.5rem solid',
    borderColor: `rgba(${hexToRgb('#2979ff')}, 0.9)`,
    [theme.breakpoints.down('sm')]: {
      height: '8rem',
      border: '0.35rem solid',
      borderColor: `rgba(${hexToRgb('#2979ff')}, 0.9)`
    }
  },
  name: {
    ...defaultFont,
    fontSize: '2rem',
    margin: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: whiteColor,
    boxShadow: '-8px 127px 29px -71px rgba(0,0,0,0.75)',
    '&::before': {
      content: '" "',
      display: 'block',
      height: '0.09em',
      minWidth: '30vw',
      marginRight: '0.5rem',
      background: 'linear-gradient(to right, rgba(240,240,240,0), #fff)'
    },
    '&::after': {
      content: '" "',
      display: 'block',
      height: '0.09em',
      minWidth: '30vw',
      marginLeft: '0.5rem',
      background: 'linear-gradient(to left, rgba(240,240,240,0), #fff)'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      margin: '0.25rem 0'
    }
  },
  stats: {
    ...defaultFont,
    color: whiteColor,
    fontSize: '1rem',
    marginBottom: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > *': {
      margin: '0 0.5rem'
    }
  }
});

export default headerSectionStyle;
