import {
  boxShadow,
  whiteColor,
  defaultFont,
  blueColor,
  hexToRgb,
  blackColor
} from '../panoramaStyles';
import image from '../../img/backGround/imgs/rene-bohmer-YeUVDKZWSZ4-unsplash.jpg';

const photographerPageStyles = (theme) => ({
  container: {
    height: '100vh',
    width: '100vw',
    paddingTop: '8rem',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundImage: `linear-gradient(to bottom, rgba(${hexToRgb(
      blueColor
    )}, 0.1),
      rgba(${hexToRgb(blueColor)}, 0.5)), url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  },
  searchAndSortBar: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& > :first-child': {
      marginRight: '10rem'
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  mainArea: {
    width: '80%',
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '90%'
    }
  },
  topBar: {
    ...boxShadow,
    width: '80%',
    height: '4rem',
    background: 'linear-gradient(to left, #000046, #1cb5e0)',
    borderRadius: '0.5rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '90%',
      height: 'auto',
      padding: '1rem'
    }
  },
  sideBar: {
    ...boxShadow,
    height: '100%',
    padding: '2rem',
    maxWidth: '21%',
    flexBasis: '21%',
    borderRadius: '0.5rem',
    background: 'linear-gradient(to top, #000046, #1cb5e0)',
    '& > *': {
      paddingTop: '1rem'
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      padding: '1rem'
    }
  },
  photographersArea: {
    ...boxShadow,
    padding: '2rem',
    borderRadius: '0.5rem'
  },
  formInput: {
    width: '20%',
    display: 'inline-block',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  sortSelectGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '25%',
    marginRight: '3rem',
    '& > :first-child': {
      marginRight: '1rem',
      width: '150%'
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '100%',
      '& > :first-child': {
        width: '100%'
      }
    }
  },
  sideBarTitle: {
    ...defaultFont,
    color: whiteColor,
    margin: '0',
    padding: '0',
    fontSize: '1.5rem'
  },
  photographerCard: {
    margin: '2rem',
    borderRadius: '0.5rem'
  },
  fullName: {
    ...defaultFont,
    fontSize: '1.25rem',
    width: '100%',
    color: whiteColor,
    textAlign: 'center',
    marginTop: '-2.5rem',
    padding: '0.3rem 0',
    background: `rgba(${hexToRgb(blackColor)}, 0.5)`
  },
  cardRating: {
    ...defaultFont,
    color: blueColor,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '1rem',
    padding: '0 1rem'
  },
  cardInfoArea: {
    padding: '1.25rem 0.75rem'
  },
  infoRow: {
    ...defaultFont,
    color: blueColor,
    padding: '0.25rem 1rem'
  },
  favoriteIcon: {
    color: whiteColor
  }
});

export default photographerPageStyles;
