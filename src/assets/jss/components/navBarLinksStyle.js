import {
  defaultFont,
  whiteColor,
  tealColor,
  hexToRgb,
  greyColor,
  blackColor
} from '../panoramaStyles';

const navBarLinksStyle = (theme) => ({
  list: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
    display: 'flex',
    paddingLeft: '0',
    listStyle: 'none',
    padding: '0',
    marginBottom: '0',
    position: 'relative',
    lineHeight: '4rem'
  },
  listLoggedIn: {
    [theme.breakpoints.down('sm')]: {
      minHeight: '100%',
      '& > :nth-last-child(3)': {
        marginTop: 'auto',
        borderTop: '1px solid',
        borderColor: greyColor
      },
      '& > :last-child': {
        marginBottom: '1rem'
      }
    }
  },
  listLoggedOut: {
    [theme.breakpoints.down('sm')]: {
      height: 'calc(100% - 127px)',
      '& > :nth-last-child(2)': {
        marginTop: 'auto',
        borderTop: '1px solid',
        borderColor: greyColor
      },
      '& > :last-child': {
        marginBottom: '1rem'
      }
    }
  },
  listItem: {
    position: 'relative',
    width: 'auto',
    padding: '0'
  },
  navButton: {
    height: '100%',
    borderRadius: '0',

    '&,& a': {
      ...defaultFont,
      whiteSpace: 'nowrap',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '400',
      color: whiteColor,
      fontSize: '1rem',
      textTransform: 'uppercase',
      textDecoration: 'none',
      margin: '0px',
      '& svg, & .fab, & .material-icons': {
        marginRight: '0.5rem'
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.85rem',
        fontWeight: '500',
        width: '100%',
        justifyContent: 'flex-start',
        margin: '0.2rem 0.3rem'
      }
    },
    '&:hover,&:focus,&:before': {
      borderColor: `${tealColor} !important`
    }
  },
  dropdownLink: {
    display: 'flex',
    alignItems: 'center',
    color: 'inherit',
    textDecoration: 'none',
    padding: '0.3rem',
    width: '100%',
    '& svg, & .fab, & .material-icons': {
      marginRight: '0.5rem'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0'
    }
  },
  profPhoto: {
    width: '3rem',
    hight: '3rem',
    borderRadius: '5rem'
  },
  profIcon: {
    'a:active': {
      '& svg, & .fab, & .material-icons': {
        transform: 'rotate(180deg)'
      }
    }
  },
  drawerHeader: {
    ...defaultFont,
    fontSize: '1.5rem',
    fontWeight: '500',
    color: blackColor,
    marginBottom: '1rem',
    '& > :last-child': {
      marginLeft: '0.5rem',
      color: blackColor
    },
    '& > :first-child': {
      width: '7rem',
      hight: '7rem',
      marginTop: '1.5rem',
      marginLeft: '0.5rem',
      marginBottom: '2.5rem',
      boxShadow: `0 0 0 80px rgba(${hexToRgb(
        whiteColor
      )}, 0.4), 0 0 0 140px rgba(${hexToRgb(
        whiteColor
      )}, 0.2), 0 0 0 200px rgba(${hexToRgb(whiteColor)}, 0.1)`
    }
  },
  pink: {
    [theme.breakpoints.down('sm')]: {
      backgroundColor: 'linear-gradient(to right, #e94057, #e91e63)',
      boxShadow: `inset 20px -20px 60px rgba(${hexToRgb(
        '#c6364a'
      )}), inset -20px 20px 60px rgba(${hexToRgb('#d636d6')})`
    }
  },
  blue: {
    [theme.breakpoints.down('sm')]: {
      backgroundColor: 'linear-gradient(to bottom, #00c6ff, #0072ff)',
      boxShadow: `inset 20px 20px 60px rgba(${hexToRgb(
        '#00c6ff'
      )}), inset -20px -20px 60px rgba(${hexToRgb('#d6d6d6')})`
    }
  },
  black: {
    [theme.breakpoints.down('sm')]: {
      backgroundColor: 'linear-gradient(to bottom, #00c6ff, #0072ff)'
    }
  }
});

export default navBarLinksStyle;
