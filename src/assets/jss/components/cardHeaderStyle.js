import { boxShadow, hexToRgb, blackColor } from '../panoramaStyles.js';

const cardHeaderStyle = (theme) => ({
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: '-1rem',
      width: '100%'
    }
  },
  overflowTop: {
    ...boxShadow,
    marginTop: '-1.50rem',
    marginBottom: '1rem',
    width: '90%'
  },
  overflowBottom: {
    width: '100%',
    marginBottom: '-2.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '0.5rem 0.5rem 0 0',
    background: `rgba(${hexToRgb(blackColor)}, 0.5)`,
    zIndex: '10',
    '& > *': {
      padding: '0.5rem 1rem'
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
