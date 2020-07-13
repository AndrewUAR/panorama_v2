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
    position: 'absolute',
    width: '100%',
    color: whiteColor,
    textAlign: 'center',
    marginTop: '-2.5rem',
    fontSize: '1.5rem',
    background: `rgba(${hexToRgb(blackColor)}, 0.6)`,
    zIndex: '999',
    cursor: 'pointer'
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    paddingButton: '1rem'
  },
  buttonGroup: {
    margin: '1rem 0',
    [theme.breakpoints.down('sm')]: {
      '& > :first-child': {
        borderRight: '2px solid',
        borderColor: whiteColor + '!important'
      }
    }
  },
  accordion: {
    margin: '0!important',
    background: 'linear-gradient(to right, #00d2ff, #3a7bd5)'
  },
  accordionList: {
    padding: '0',
    background: 'linear-gradient(to right bottom, #00d2ff, #3a7bd5)'
  },
  sideBarTitle: {
    color: whiteColor,
    textAlign: 'center'
  }
});

export default sidebarStyle;
