import {
  hexToRgb,
  blackColor,
  whiteColor,
  blueColor,
  boxShadow
} from '../panoramaStyles';

const buttonStyle = (theme) => ({
  button: {
    minHeight: 'auto',
    minWidth: 'auto',
    color: whiteColor,
    boxShadow:
      '0 2px 2px 0 rgba(' +
      hexToRgb(blackColor) +
      ', 0.14), 0 3px 1px -2px rgba(' +
      hexToRgb(blackColor) +
      ', 0.2), 0 1px 5px 0 rgba(' +
      hexToRgb(blackColor) +
      ', 0.12)',
    borderRadius: '3px',
    position: 'relative',
    padding: '12px 30px',
    margin: '.3125rem 1px',
    fontSize: '1rem',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '0',
    willChange: 'box-shadow, transform',
    transition:
      'box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    lineHeight: '1.5',
    textAlign: 'start',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    touchAction: 'manipulation',
    cursor: 'pointer',
    '&:hover,&:focus': {
      color: whiteColor,
      boxShadow:
        '0 14px 26px -12px rgba(' +
        hexToRgb(blackColor) +
        ', 0.42), 0 4px 23px 0px rgba(' +
        hexToRgb(blackColor) +
        ', 0.12), 0 8px 10px -5px rgba(' +
        hexToRgb(blackColor) +
        ', 0.2)'
    },
    '& .fab, & .material-icons': {
      position: 'relative',
      display: 'inline-block',
      fontSize: '1.5rem',
      marginRight: '0.5rem'
    }
  },
  fullWidth: {
    width: '100%'
  },
  sm: {
    padding: '0.4rem 1.25rem',
    borderRadius: '0.2rem',
    margin: '0.2rem'
  },
  danger: {
    background: 'linear-gradient(to top, #e94057, #e91e63)',
    '&:hover,&:focus': {
      background: 'linear-gradient(to bottom, #e94057, #e91e63)'
    }
  },
  blue: {
    background: 'linear-gradient(to top, #00c6ff 0%, #0072ff 100%)'
  },
  black: {
    background: 'linear-gradient(to right, #16222a, #3a6073)'
  },
  success: {
    background: 'linear-gradient(to top, #00e676, #00c853)'
  },
  transparent: {
    '&,&:focus,&:hover': {
      color: 'inherit',
      background: 'transparent',
      boxShadow: 'none'
    }
  },
  justIcon: {
    borderRadius: '5rem',
    padding: '0.75rem',
    backgroundColor: 'transparent',
    '& svg, & .fab, & .material-icons': {
      margin: '0'
    }
  },
  socialSignUp: {
    width: '70%',
    margin: '0.5rem 0',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  pulseButton: {
    animation: '$pulse 1.5s infinite',
    '&:hover': {
      animation: 'none',
      boxShadow: `0 0 0 5px rgba(${hexToRgb(blueColor)}, 0.7)`,
      transform: 'scale(0.9)',
      transition: '0.2s ease'
    }
  },
  uploadButton: {
    borderRadius: '1.5rem',
    fontSize: '1rem',
    width: '50%',
    lineHeight: '0.75rem'
  },
  settingsButton: {
    color: whiteColor,
    background: 'none',
    boxShadow: 'none',
    borderRadius: '0',
    margin: '0',
    borderBottom: '1px solid',
    width: '100%',
    padding: '0.75rem 0',
    '& > :first-child': {
      '& > :first-child': {
        marginRight: '1rem'
      },
      '& > :last-child': {
        marginLeft: 'auto',
        fontSize: '1.1rem'
      }
    },
    '&:hover,&:focus': {
      color: blueColor,
      borderColor: blueColor,
      '& :first-child :last-child': {
        transform: 'translateX(10%)'
      }
    }
  },
  sideBarButton: {
    color: whiteColor,
    justifyContent: 'flex-start',
    margin: '0',
    borderRadius: '0',
    '& svg, & .fab, & .material-icons': {
      paddingRight: '0.5rem'
    },
    '&:hover,&:focus,&:active': {
      marginLeft: '2px',
      transition: '0.3s ease',
      transform: 'translateX(-0.5%)',
      borderRight: `0.5rem solid ${whiteColor}`,
      background: 'linear-gradient(to right, #1fa2ff, #12d8fa)',
      ...boxShadow,
      color: whiteColor
    }
  },
  '@keyframes pulse': {
    '0%': {
      boxShadow: `0 0 0 0px rgba(0, 0, 0, 0.5), 0 0 0 5px rgba(${hexToRgb(
        blueColor
      )}, 0.7)`
    },
    '100%': {
      boxShadow: `0 0 0 20px rgba(0, 0, 0, 0), 0 0 0 5px rgba(${hexToRgb(
        blueColor
      )}, 0.7)`
    }
  }
});

export default buttonStyle;
