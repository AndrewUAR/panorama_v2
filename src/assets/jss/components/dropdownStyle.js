import { defaultFont, boxShadow, whiteColor } from '../panoramaStyles';

const dropdownStyle = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
    width: '100%',
    background: 'linear-gradient(to top left, #2c3e50, #3498db)'
  },
  menuItem: {
    ...defaultFont,
    color: whiteColor,
    margin: '0 0.3rem',
    minHeight: '20px',
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    '&:hover': {
      background: 'linear-gradient(to right, #1fa2ff, #12d8fa)',
      color: whiteColor,
      ...boxShadow
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.5rem'
    }
  }
});

export default dropdownStyle;
