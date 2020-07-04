import { boxShadow, whiteColor, defaultFont } from '../panoramaStyles';

const photographerPageStyles = (theme) => ({
  container: {
    height: '100vh',
    width: '100vw',
    paddingTop: '8rem',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
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
    borderRadius: '0.5rem',
    background: 'linear-gradient(to top, #000046, #1cb5e0)'
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
  }
});

export default photographerPageStyles;
