import {
  boxShadow,
  hexToRgb,
  defaultFont,
  whiteColor
} from '../../panoramaStyles';

const albumsSectionStyle = (theme) => ({
  root: {
    ...boxShadow,
    height: '60vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    background: `linear-gradient(to right, rgba(${hexToRgb(
      '#1488cc'
    )}, 0.8), rgba(${hexToRgb('#0575e6')}, 1))`
  },
  container: {
    width: '70%',
    height: '70%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  albums: {
    marginTop: '2rem',
    width: '80%',
    transition: 'all 0.2s ease',
    '& > *': {
      margin: 'auto'
    }
  },
  sectionTitle: {
    ...defaultFont,
    color: whiteColor,
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    marginTop: '3rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem'
    }
  }
});

export default albumsSectionStyle;
