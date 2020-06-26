import { defaultFont, whiteColor } from '../../panoramaStyles';

const sidebarStyle = (theme) => ({
  panel: {
    position: 'relative',
    [theme.breakpoints.only('sm')]: {
      margin: '0 2rem'
    }
  },
  photoArea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '3rem'
  },
  profPhoto: {
    width: '12rem',
    height: '12rem',
    borderRadius: '7rem'
  },
  photoLoader: {
    width: '12rem',
    height: '12rem',
    borderRadius: '7rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  uploadButton: {
    position: 'absolute',
    top: '10rem'
  },
  sideBarButtons: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: '1rem',
    marginBottom: '4rem'
  },
  divider: {
    color: '#000',
    height: '0.1rem'
  },
  userName: {
    ...defaultFont,
    fontSize: '1.75rem',
    textAlign: 'center',
    color: whiteColor
  }
});

export default sidebarStyle;
