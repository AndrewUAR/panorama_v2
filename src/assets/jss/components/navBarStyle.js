import {
  container,
  defaultFont,
  blackColor,
  hexToRgb,
  whiteColor
} from '../panoramaStyles.js';

const navBarStyle = (theme) => ({
  appBar: {
    display: 'flex',
    padding: '0.6rem 0',
    marginBottom: '2rem',
    color: whiteColor,
    width: '100%',
    transition: 'all 150ms ease 0s',
    alignItems: 'center',
    flexFlow: 'row nowrap',
    boxShadow: `0px 4px 5px 0px  rgba(${hexToRgb(
      blackColor
    )}, 0.2), 0px 4px 5px 0px  rgba(${hexToRgb(blackColor)}, 0.4)`,
    [theme.breakpoints.down('sm')]: {
      padding: '0'
    }
  },
  fixed: {
    position: 'fixed'
  },
  title: {
    letterSpacing: 'unset',
    lineHeight: '3rem',
    '&,& a': {
      ...defaultFont,
      fontSize: '1.5rem',
      textTransform: 'uppercase',
      textDecoration: 'none',
      color: 'inherit',
      '&:hover,&:focus': {
        color: 'inherit',
        background: 'transparent'
      }
    }
  },
  icon: {
    color: whiteColor
  },
  container: {
    ...container,
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row-reverse'
    }
  },
  drawerPaper: {
    display: 'block'
  },
  pink: {
    background: 'linear-gradient(to top, #e94057, #e91e63)'
  },
  blue: {
    background: 'linear-gradient(to top, #00c6ff 0%, #0072ff 100%)'
  },
  black: {
    background: 'linear-gradient(to right, #ece9e6, #ffffff)'
  }
});

export default navBarStyle;
