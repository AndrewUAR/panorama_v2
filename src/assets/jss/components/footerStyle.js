import {
  defaultFont,
  blackColor,
  hexToRgb,
  whiteColor,
  primaryColor,
  blueColor
} from '../panoramaStyles';

const footerStyle = (theme) => ({
  footer: {
    padding: '1rem 0',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'space-around',
    bottom: '0',
    width: '100%',
    background: `linear-gradient(to right, rgba(${hexToRgb(
      '#141e30'
    )}, 0.7) , rgba(${hexToRgb('#243b55')}, 0.7))`,
    boxShadow:
      '0px -4px 5px 0px  rgba(' +
      hexToRgb(blackColor) +
      ', 0.2), 0px -4px 5px 0px  rgba(' +
      hexToRgb(blackColor) +
      ', 0.4)',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  license: {
    ...defaultFont,
    paddingTop: '0.2rem',
    color: whiteColor,
    fontSize: '1rem',
    margin: '0',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '0'
    }
  },
  pink: {
    backgroundColor: `rgba(${hexToRgb(primaryColor)}, 0.3)`
  },
  blue: {
    backgroundColor: `rgba(${hexToRgb(blueColor)}, 0.3)`
  },
  black: {
    backgroundColor: `rgba(${hexToRgb(blackColor)}, 0.3)`
  }
});

export default footerStyle;
