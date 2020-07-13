import { boxShadow, defaultFont, whiteColor } from '../../panoramaStyles';

const infoSectionStyle = (theme) => ({
  container: {
    ...boxShadow,
    ...defaultFont,
    width: '50%',
    color: whiteColor,
    padding: '2rem',
    borderRadius: '1rem',
    background: 'linear-gradient(to right bottom, #00d2ff, #3a7bd5)',
    [theme.breakpoints.down('sm')]: {
      width: '96%',
      padding: '0.5rem 0 1.25rem 0',
      fontSize: '0.85rem'
    }
  },
  upperSection: {
    marginBottom: '0.5rem',
    padding: '1rem 3rem',
    borderBottom: '3px solid',
    '& > *': {
      margin: '0.3rem 0'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0.75rem'
    }
  },
  bottomSection: {
    marginTop: '0.5rem'
  },
  priceSection: {
    borderRight: '3px solid',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      borderRight: 'none',
      borderBottom: '3px solid',
      paddingBottom: '1rem'
    }
  },
  socialSection: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      marginTop: '1rem'
    }
  },
  intro: {
    display: 'flex',
    '& > :last-child': {
      margin: '0',
      textAlign: 'justify'
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  field: {
    color: 'yellow',
    textTransform: 'uppercase',
    fontSize: '0.85rem',
    marginRight: '0.3rem'
  }
});

export default infoSectionStyle;
