import {
  boxShadow,
  whiteColor,
  defaultFont,
  blueColor,
  hexToRgb,
  blackColor,
  dangerColor,
  dropzoneBoxShadow
} from '../panoramaStyles';
import image from '../../img/backGround/imgs/rene-bohmer-YeUVDKZWSZ4-unsplash.jpg';

const photographerPageStyles = (theme) => ({
  container: {
    minHeight: 'calc(100vh - 12rem)',
    height: 'auto',
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
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    [theme.breakpoints.only('xs')]: {
      minHeight: 'calc(100vh - 13rem)'
    }
  },
  searchAndSortBar: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& > :first-child': {
      marginRight: '6rem'
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '90%'
    }
  },
  mainArea: {
    width: '80%',
    marginTop: '1rem',
    marginBottom: '3rem',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      // flexDirection: 'column',
      width: '90%'
    }
  },
  topBar: {
    ...boxShadow,
    alignItems: 'center',
    width: '80%',
    height: '4.5rem',
    background: 'linear-gradient(to left, #000046, #1cb5e0)',
    borderRadius: '0.5rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      height: 'auto'
    },
    [theme.breakpoints.only('xs')]: {
      width: '90%'
    }
  },
  sideBar: {
    ...boxShadow,
    height: 'max-content',
    padding: '0 0.5rem',
    maxWidth: '21%',
    flexBasis: '21%',
    borderRadius: '0.5rem',
    background: 'linear-gradient(to top, #000046, #1cb5e0)',
    [theme.breakpoints.only('sm')]: {
      maxWidth: '70%',
      flexBasis: '70%',
      margin: '0 auto'
    },
    [theme.breakpoints.only('xs')]: {
      maxWidth: '100%',
      flexBasis: '100%'
    }
  },
  accordion: {
    background: 'transparent',
    boxShadow: 'none',
    padding: '0'
  },
  accordionDetails: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '2rem',
    '& > *': {
      paddingTop: '1rem'
    },
    '& > :last-child': {
      marginTop: '2rem',
      padding: '0.5rem 0'
    }
  },
  photographersArea: {
    ...boxShadow,
    padding: '2rem',
    borderRadius: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    background: `linear-gradient(to top, rgba(${hexToRgb(
      '#000046'
    )}, 0.3), rgba(${hexToRgb('#1cb5e0')}, 0.7))`,
    '& > :last-child': {
      marginTop: 'auto'
    },
    [theme.breakpoints.down('sm')]: {
      boxShadow: 'none',
      padding: '0',
      marginTop: '1rem',
      background: 'none'
    }
  },
  locationInput: {
    width: '30%',
    display: 'flex',
    paddingBottom: '1rem',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  sortSelectGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '25%',
    marginRight: '3rem',
    paddingTop: '0.4rem',
    '& > :first-child': {
      marginRight: '1rem',
      width: '45%'
    },
    '& > :last-child': {
      marginRight: '1rem',
      width: '25%'
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '100%',
      '& > :first-child': {
        width: '100%'
      }
    }
  },
  resultsArea: {
    flexGrow: '1',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '2rem'
    }
  },
  sideBarTitle: {
    ...defaultFont,
    color: whiteColor,
    margin: '0',
    padding: '0',
    fontSize: '1.25rem',
    fontWeight: '400',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem'
    }
  },
  photographerCard: {
    display: 'inline-block',
    margin: '2rem 0',
    borderRadius: '0.5rem',
    padding: '0 1rem',
    animation: '$revealCard 0.3s',
    [theme.breakpoints.only('sm')]: {
      padding: '0 0.5rem'
    },
    [theme.breakpoints.only('xs')]: {
      padding: '0'
    },
    '&:hover': {
      transform: 'scale(0.98)',
      transition: 'all 0.2s'
    },
    '&:active': {
      transform: 'scale(1)',
      transition: 'all 0.2s'
    }
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
    ...dropzoneBoxShadow,
    color: whiteColor,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '1rem',
    padding: '0 1rem',
    background: `rgba(${hexToRgb(whiteColor)}, 0.1)`
  },
  cardInfoArea: {
    padding: '0.75rem 0.75rem 0 0.75rem'
  },
  infoRow: {
    ...defaultFont,
    color: whiteColor,
    padding: '0.25rem 0.5rem',
    '& > *': {
      fontSize: '0.90rem'
    }
  },
  cardFooter: {
    ...defaultFont,
    fontSize: '1.25rem',
    color: whiteColor,
    width: '93%',
    textAlign: 'center',
    marginBottom: '1rem',
    '& > *': {
      ...dropzoneBoxShadow,
      background: `rgba(${hexToRgb(whiteColor)}, 0.1)`,
      margin: '0.3rem 0'
    }
  },
  favoriteIcon: {
    color: whiteColor
  },
  favoriteFilledIcon: {
    color: dangerColor
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem 0',
    bottom: '0',
    '& > * *': {
      color: whiteColor,
      borderColor: whiteColor
    }
  },
  resultsBar: {
    ...dropzoneBoxShadow,
    ...defaultFont,
    height: '3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 2rem',
    color: whiteColor,
    fontSize: '1rem',
    // borderRadius: '0.5rem',
    background: 'linear-gradient(to right bottom, #000046, #1cb5e0)',
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      fontSize: '1rem',
      padding: '0.5rem',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      background: 'linear-gradient(170deg, #000046, #1cb5e0)',
      '& > :first-child': {
        width: '100%'
      }
    }
  },
  '@keyframes revealCard': {
    '0%': {
      transform: 'translateY(50%)',
      opacity: '0'
    },
    '100%': {
      transform: 'translateY(0)',
      opacity: '1'
    }
  }
});

export default photographerPageStyles;
