import {
  whiteColor,
  blueColor,
  defaultFont,
  boxShadow
} from '../panoramaStyles';

const modalStyle = (theme) => ({
  modalContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'auto',
    margin: '1rem',
    flexWrap: 'wrap'
  },
  paperDropzone: {
    padding: '1.25rem',
    background: 'linear-gradient(to right, #7474bf, #26a0da)',
    display: 'flex',
    alignItems: 'center',
    outline: '0',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  albumDropzone: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  imgPreview: {
    marginLeft: '2rem',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      marginTop: '2rem',
      margin: '0'
    }
  },
  buttonGroup: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginTop: '1rem',
    '& > *': {
      marginRight: '0.5rem'
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    }
  },
  albumButtons: {
    flexDirection: 'row'
  },
  stepper: {
    ...defaultFont,
    ...boxShadow,
    width: '45vw',
    outline: '0',
    '& > :first-child': {
      color: whiteColor,
      textAlign: 'justify',
      background: 'linear-gradient(to left, #3498db, #2c3e50 )'
    },
    [theme.breakpoints.down('sm')]: {
      width: '95vw'
    }
  },
  label: {
    color: whiteColor,
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.7rem'
    }
  },
  activeLabel: {
    color: `${blueColor}!important`
  },
  createAlbumForm: {
    width: '30vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem',
    outline: '0',
    background: 'linear-gradient(to bottom left, #3498db, #2c3e50)',
    '& > :first-child': {
      padding: '0 1rem 1rem 0'
    }
  },
  modalBox: {
    padding: '1rem',
    background:
      'linear-gradient(125deg, #0072ff, #00c6ff 50%, rgba(255,0,0,0) 50%)',
    outline: '0'
  },
  thumbsContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '1rem',
    maxWidth: '35rem',
    '&:empty': {
      marginTop: '0'
    }
  },
  thumb: {
    display: 'inline-flex',
    borderRadius: '2px',
    border: `2px solid ${blueColor}`,
    margin: '0.3rem',
    width: '100px',
    height: '100px',
    padding: '0.2rem',
    boxSizing: 'border-box'
  },
  thumbInner: {
    display: 'block',
    overflow: 'hidden'
  },
  img: {
    display: 'block',
    width: 'auto',
    height: '100%',
    margin: 'auto'
  }
});

export default modalStyle;
