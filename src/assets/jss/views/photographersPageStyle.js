import { container, boxShadow } from '../panoramaStyles';

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
    ...boxShadow,
    height: '4rem',
    width: '80%',
    background: 'linear-gradient(to left, #000046, #1cb5e0)',
    borderRadius: '1rem',
    display: 'flex',
    justifyContent: 'flex-end',
    '& > :first-child': {
      marginRight: '10rem'
    }
  },
  mainArea: {
    width: '80%',
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'space-between'
  },
  sideBar: {
    ...boxShadow,
    height: '100%',
    padding: '0 2rem',
    maxWidth: '21%',
    flexBasis: '21%',
    borderRadius: '0.5rem',
    background: 'linear-gradient(to top, #000046, #1cb5e0)'
  },
  photographersArea: {
    ...boxShadow,
    borderRadius: '0.5rem',
    background: 'linear-gradient(to top, #000046, #1cb5e0)'
  },
  formInput: {
    width: '20%',
    display: 'inline-block'
  },
  sortSelectGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '25%',
    marginRight: '3rem',
    '& > :first-child': {
      marginRight: '1rem',
      width: '150%'
    }
  }
});

export default photographerPageStyles;
