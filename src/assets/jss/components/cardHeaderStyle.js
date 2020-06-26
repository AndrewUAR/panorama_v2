import { boxShadow } from '../panoramaStyles.js';

const cardHeaderStyle = (theme) => ({
  cardHeader: {
    ...boxShadow,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '-1.50rem',
    width: '90%',
    marginBottom: '1rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '-1rem',
      width: '100%'
    }
  },
  cardHeaderLogin: {
    flexDirection: 'column',
    clipPath: 'polygon(0 0, 100% 0, 78% 100%, 22% 100%)'
  },
  pink: {
    background: 'linear-gradient(to right, #e94057, #e91e63)'
  },
  blue: {
    background: 'linear-gradient(to top, #00c6ff 0%, #0072ff 100%)'
  },
  black: {
    background: 'linear-gradient(to right, #00c6ff, #0072ff)'
  }
});

export default cardHeaderStyle;
