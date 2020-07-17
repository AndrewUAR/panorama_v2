import { hexToRgb, primaryColor, blackColor } from '../panoramaStyles';

const cardStyle = (theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    borderRadius: '0.5rem',
    boxShadow: `2px 0px 26px -12px rgba(${hexToRgb(blackColor)} , 0.7),
      2px 4px 23px 0px rgba(${hexToRgb(blackColor)}, 0.7),
      2px 8px 10px -5px rgba(${hexToRgb(blackColor)}, 0.7)`
  },
  pink: {
    backgroundColor: `rgba(${hexToRgb(primaryColor)}, 0.6)`
  },
  blue: {
    background: 'linear-gradient(to left bottom, #000046, #1cb5e0)'
  },
  black: {
    background: 'linear-gradient(to right, #2c3e50, #3498db)'
  },
  teal: {
    background: 'linear-gradient(to right, #1cb5e0, #000046)',
    [theme.breakpoints.down('sm')]: {
      background: 'linear-gradient(to bottom, #1cb5e0, #000046)'
    }
  }
});

export default cardStyle;
