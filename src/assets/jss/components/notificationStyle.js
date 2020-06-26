import {
  defaultFont,
  dangerColor,
  blueColor,
  warningColor,
  tealColor
} from '../panoramaStyles';

const notificationStyle = (theme) => ({
  snackbar: {
    ...defaultFont,
    fontSize: '1.10rem',
    '& > :last-child :last-child': {
      color: dangerColor,
      fontSize: '1rem'
    }
  },
  success: {
    background: 'linear-gradient(to left, #2c3e50, #3498db)',
    color: tealColor,
    border: '1px solid' + tealColor
  },
  error: {
    background: 'linear-gradient(to left, #870000, #190a05)',
    color: dangerColor,
    border: '1px solid' + dangerColor
  },
  info: {
    background: 'linear-gradient(to left, #870000, #190a05)',
    color: blueColor,
    border: '1px solid' + blueColor
  },
  warning: {
    background: 'linear-gradient(to left, #870000, #190a05)',
    color: warningColor,
    border: '1px solid' + warningColor
  }
});

export default notificationStyle;
