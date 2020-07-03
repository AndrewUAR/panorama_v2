import {
  whiteColor,
  dangerColor,
  defaultFont,
  successColor
} from '../panoramaStyles';

const switchStyles = (theme) => ({
  container: {
    margin: '0',
    padding: '0.3rem 1rem',
    color: whiteColor,
    '& > :last-child': {
      ...defaultFont,
      fontSize: '1rem',
      marginRight: 'auto'
    }
  },
  switchBase: {
    color: dangerColor,
    '&$checked': {
      color: '#38ef7d'
    },
    '&$checked + $track': {
      background: 'linear-gradient(to right, #aaffa9, #11ffbd)'
    }
  },
  checked: {
    color: successColor
  },
  track: {
    borderRadius: '26 / 2',
    border: '1px solid',
    background: 'linear-gradient(to right, #ef3b36, #ffffff)',
    opacity: '1'
  }
});

export default switchStyles;
