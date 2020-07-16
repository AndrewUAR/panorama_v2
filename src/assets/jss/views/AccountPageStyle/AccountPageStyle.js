import {
  container,
  boxShadow,
  defaultFont,
  whiteColor
} from '../../panoramaStyles';
import image from '../../../img/backGround/lucas-benjamin-R79qkPYvrcM-unsplash.jpg';

const accountPageStyle = (theme) => ({
  container: {
    ...container,
    minWidth: '100vw',
    minHeight: '100vh',
    padding: '8rem',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      padding: '4rem 1rem'
    }
  },
  sidebar: {
    ...boxShadow,
    top: '8rem',
    height: 'max-content',
    position: 'sticky',
    background: 'linear-gradient(to bottom right, #2c3e50, #3498db)',
    marginRight: '2rem',
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      width: '90vw',
      margin: '0',
      position: 'initial'
    }
  },
  mainArea: {
    height: 'max-content',
    [theme.breakpoints.down('sm')]: {
      marginTop: '1.5em'
    }
  },
  info: {
    ...boxShadow,
    ...defaultFont,
    color: whiteColor,
    padding: '2rem 5rem 2rem 5rem',
    background: 'linear-gradient(to right, #00d2ff, #3a7bd5)',
    [theme.breakpoints.down('sm')]: {
      padding: '1rem'
    }
  },
  generalInfo: {
    paddingRight: '2rem',
    borderRight: '2px solid',
    '& > *': {
      paddingBottom: '0.5rem'
    },
    '& > :first-child': {
      display: 'flex',
      textAlign: 'justify'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0',
      borderRight: 'none',
      borderBottom: '2px solid',
      '& > :first-child': {
        flexDirection: 'column'
      }
    }
  },
  field: {
    marginRight: '0.5rem',
    color: '#ffea00'
  },
  priceAndMedia: {
    paddingLeft: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      padding: '0'
    }
  },
  prices: {
    paddingBottom: '1.25rem',
    borderBottom: '2px solid',
    borderColor: whiteColor,
    [theme.breakpoints.down('sm')]: {
      padding: '0.5rem 0'
    }
  },
  socialMedia: {
    [theme.breakpoints.down('sm')]: {
      padding: '0.5rem 0'
    }
  },
  statsArea: {
    ...boxShadow,
    ...defaultFont,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '1rem',
    padding: '1rem 5rem 1rem 5rem',
    background: 'linear-gradient(to right, #00d2ff, #3a7bd5)',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: '1rem'
    }
  },
  buttonsGroup: {
    margin: 'auto 0',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1rem'
    }
  },
  buttonsAccountSwitch: {
    color: whiteColor,
    fontSize: '1rem',
    width: '100%',
    '&:hover,&:focus,&:active': {
      ...boxShadow
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.75rem'
    }
  },
  stats: {
    display: 'flex',
    flexDirection: 'row',
    color: whiteColor
  },
  statsItem: {
    padding: '0 0.75rem',
    display: 'flex',
    alignItems: 'center'
  },
  groupItem: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  }
});

export default accountPageStyle;
