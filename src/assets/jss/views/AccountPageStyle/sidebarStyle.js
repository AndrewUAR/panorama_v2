import {
  whiteColor,
  hexToRgb,
  blackColor,
  defaultFont
} from '../../panoramaStyles';

const sidebarStyle = (theme) => ({
  profPhoto: {
    width: '100%'
  },
  userName: {
    ...defaultFont,
    width: '100%',
    color: whiteColor,
    textAlign: 'center',
    marginTop: '-2.3rem',
    fontSize: '1.5rem',
    background: `rgba(${hexToRgb(blackColor)}, 0.6)`
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row'
    }
  },
  buttonGroup: {
    margin: '1rem 0 2rem 0'
  }
});

export default sidebarStyle;
