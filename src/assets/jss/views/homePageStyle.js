import image from '../../img/backGround/home.jpg';
import { whiteColor, defaultFont, blackColor, hexToRgb, container, blueColor } from '../panoramaStyles';

const homePageStyles = (theme) => ({
  pageHeader: {
    display: 'flex',
    position: 'relative',
    minHeight: '100vh',
    minWidth: '100vw',
    alignItems: 'center',
    backgroundImage: `linear-gradient(to bottom, rgba(${hexToRgb(
      blackColor
    )}, 0.4),
      rgba(${hexToRgb(blackColor)}, 0.4)), url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  },
  container: {  
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    ...container
  },
  searchButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    ...defaultFont,
    color: whiteColor,
    fontSize: '1.5rem',
    marginLeft: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      textTransform: 'uppercase'
    }
  },
  buttonIcon: {
    fontSize: '2rem'
  },
  divider: {
    ...defaultFont,
    color: blueColor,
    fontSize: '1.5rem',
    textShadow: '1px 1px 1px rgba(0, 0, 0, .45)',
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
    '&::before': {
      content: '" "',
      display: 'block',
      height: '0.09em',
      minWidth: '30vw',
      marginRight: '0.5rem',
      background: 'linear-gradient(to right, rgba(240,240,240,0), #fff)',
    },
    
    // '&::before': {
    //   background: 'linear-gradient(to right, rgba(240,240,240,0), #fff)',
    //   marginRight: '4vh',
    // },
    
    '&::after': {
      content: '" "',
      display: 'block',
      height: '0.09em',
      minWidth: '30vw',
      marginLeft: '0.5rem',
      background: 'linear-gradient(to left, rgba(240,240,240,0), #fff)',
    } 
  },
  formInput: {
    width: '40%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    },
    [theme.breakpoints.only('sm')]: {
      width: '60%'
    }
  },
  formInputIcon: {
    alignSelf: 'flex-end',
    marginRight: '0.5rem',
    marginLeft: '0.3rem',
    paddingBottom: '0.3rem',
    color: whiteColor
  }
});

export default homePageStyles;