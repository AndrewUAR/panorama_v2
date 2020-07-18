import { hexToRgb, whiteColor, boxShadow } from '../../panoramaStyles';
const photographerPageStyle = (theme) => ({
  container: {
    minHeight: '100vh',
    height: 'auto',
    width: '100vw'
  },
  infoArea: {
    background: `repeating-linear-gradient(45deg, rgba(${hexToRgb(
      '#0575e6'
    )}, 0.8), rgba(${hexToRgb('#0575e6')}, 1) 10rem, rgba(${hexToRgb(
      '#021b79'
    )}, 1) 10rem, rgba(${hexToRgb('#021b79')}, 0.8) 20rem)`,
    width: '100%',
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      height: '80vh'
    }
  },
  buttonsGroup: {
    margin: '3rem 0 6rem 0',
    [theme.breakpoints.down('sm')]: {
      margin: '1rem 0 2rem 0'
    }
  },
  buttonsSectionSwitch: {
    color: whiteColor,
    borderColor: whiteColor,
    fontSize: '0.85rem',
    width: 'auto',
    padding: '0.25rem 0.5rem',
    whiteSpace: 'nowrap',
    '&:hover,&:focus,&:active': {
      ...boxShadow
    }
  }
});

export default photographerPageStyle;
