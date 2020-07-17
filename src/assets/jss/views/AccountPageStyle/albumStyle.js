import {
  blueColor,
  hexToRgb,
  defaultFont,
  whiteColor,
  boxShadow
} from '../../panoramaStyles';

const albumStyle = (theme) => ({
  container: {
    minHeight: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem 2rem',
    background: `linear-gradient(to right top, rgba(${hexToRgb(
      '#00d2ff'
    )}, 0.8), rgba(${hexToRgb('#3a7bd5')}, 0.8))`,
    [theme.breakpoints.down('md')]: {
      padding: '1rem'
    }
  },
  albums: {
    width: '100%',
    padding: '2rem 0',
    margin: '0'
  },
  head: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    ...defaultFont,
    color: whiteColor,
    fontSize: '1.25rem',
    background: 'linear-gradient(to right, #00d2ff, #3a7bd5)',
    '& > *': {
      margin: '1rem 2rem'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      '& > *': {
        margin: 'auto 1rem',
        padding: '0.75rem'
      }
    }
  },
  addButton: {
    height: 'max-content',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      border: '1px solid white'
    }
  },
  itemContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem 0 2rem 0',
    [theme.breakpoints.only('sm')]: {
      padding: '3rem 0'
    },
    '&:focus,&:active': {
      transform: 'scale(0.98)'
    }
  },
  // albumContainer: {
  //   height: '14rem',
  //   width: '14rem',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'flex-end',
  //   alignItems: 'center',
  //   borderWidth: '0 0 2px 2px',
  //   borderStyle: 'solid',
  //   boxShadow: '-5px 5px 5px 0px rgba(0,0,0,0.35)',
  //   borderImage: 'linear-gradient(to right top, white 10%, rgba(0, 0, 0, 0) 55%) 0 0 1 1',
  //   [theme.breakpoints.down('sm')]: {
  //     margin: '1rem auto'
  //   }
  // boxShadow: '-5px 6px 5px -4px rgba(0,0,0,0.75)',
  // padding: '0.5rem 0.8rem 0 0',
  // background:
  //   'linear-gradient(45deg, #00c6ff, #0072ff 60%, rgba(255,0,0,0) 60%)',
  // '&:active': {
  //   transform: 'scale(0.98)'
  // }
  // },
  images: {
    marginTop: '1rem',
    '& > *': {
      padding: '0.3rem'
    }
  },
  albumImage: {
    ...boxShadow,
    display: 'inline-block',
    width: '100%',
    height: '12rem',
    overflow: 'hidden',
    objectFit: 'cover!important',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      height: '12rem'
    }
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: '12rem',
    '&:hover': {
      '& > :first-child': {
        width: 'auto',
        height: 'calc(100% - 0.3rem)',
        overflow: 'visible',
        padding: '0.3rem 0.3rem 0 0.3rem',
        transition: 'all 0.3s',
        [theme.breakpoints.down('sm')]: {
          width: '96%',
          height: 'auto',
          padding: '0.3rem 0 0.3rem 0.3rem'
        }
      }
    }
  },
  albumTitle: {
    color: whiteColor,
    fontSize: '1.25rem',
    textAlign: 'center',
    display: 'flex',
    margin: '0',
    width: '100%',
    paddingTop: '0.5rem',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '&::before': {
      content: '" "',
      display: 'block',
      height: '0.2em',
      flexGrow: '1',
      marginRight: '0.5rem',
      background: 'linear-gradient(to right, rgba(240,240,240,0), #fff)'
    },
    '&::after': {
      content: '" "',
      display: 'block',
      height: '0.2em',
      flexGrow: '1',
      marginLeft: '0.5rem',
      background: 'linear-gradient(to left, rgba(240,240,240,0), #fff)'
    }
  },
  dropdownButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: 'inherit',
    textDecoration: 'none',
    padding: '0',
    width: 'auto',
    '& svg, & .fab, & .material-icons': {
      marginRight: '0.2rem'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0'
    }
  },
  emptyAlbum: {
    width: '10rem',
    height: '10rem',
    margin: '0 0 0.5rem 0',
    color: blueColor,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: `transparent`,
    filter: ' drop-shadow(5px 5px 5px rgba(0,0,0,0.9))',
    [theme.breakpoints.down('sm')]: {
      width: '12rem',
      height: '12rem'
    }
  },
  addImage: {
    position: 'relative',
    ...boxShadow,
    color: blueColor,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '&:active': {
      transform: 'scale(0.98)'
    }
  },
  icon: {
    height: '9rem',
    width: '9rem',
    background: 'transparent',
    filter: ' drop-shadow(5px 5px 5px rgba(0,0,0,0.9))'
  },
  text: {
    ...defaultFont,
    textShadow: '2px 2px 2px #000',
    margin: '0',
    textTransform: 'uppercase'
  },
  textEmpty: {
    ...defaultFont,
    position: 'absolute',
    textShadow: '2px 2px 2px #000',
    textTransform: 'uppercase',
    marginTop: '4.75rem'
  },
  // albumCover: {
  //   ...boxShadow,
  //   display: 'inline-block',
  //   position: 'relative',
  //   width: '12rem',
  //   height: '12rem',
  //   '&:active': {
  //     transform: 'scale(0.98)'
  //   },
  //   '& > *': {
  //     objectFit: 'cover!important'
  //   },
  //   [theme.breakpoints.down('sm')]: {
  //     width: '12rem',
  //     height: '12rem'
  //   }
  // },
  titleBar: {
    zIndex: '100',
    color: whiteColor
  },
  // imageCover: {
  //   ...boxShadow,
  //   border: '1px solid',
  //   borderColor: blueColor,
  //   position: 'absolute',
  //   margin: '0',
  //   width: '100%',
  //   height: '12rem',
  //   overflow: 'hidden',
  //   zIndex: '20',
  //   '&:nth-child(2)': {
  //     transform: 'translate(6%, -6%)'
  //   },
  //   '&:nth-child(3)': {
  //     transform: 'translate(12%, -12%)'
  //   },
  //   [theme.breakpoints.down('sm')]: {
  //     height: '12rem'
  //   }
  // },
  albumContainer: {
    position: 'relative',
    width: '12rem',
    height: '16rem',
    cursor: 'pointer'
  },
  imageContainer1: {
    position: 'absolute',
    width: 'auto',
    height: '14rem',
    objectFit: 'cover',
    transformStyle: 'preserve-3d',
    perspective: '3000px'
  },
  imageContainer2: {
    position: 'absolute',
    left: '4rem',
    width: 'auto',
    height: '14rem',
    objectFit: 'cover',
    transformStyle: 'preserve-3d',
    perspective: '3000px'
  },
  imageContainer3: {
    position: 'absolute',
    left: '8rem',
    width: 'auto',
    height: '14rem',
    objectFit: 'cover',
    transformStyle: 'preserve-3d',
    perspective: '3000px'
  },
  image1: {
    position: 'absolute',
    width: '16rem',
    height: '14rem',
    overflow: 'hidden',
    boxShadow:
      '0px -1px 5px 1px rgba(0,0,0,0.75), -11px 67px 33px -45px rgba(0,0,0,0.75), -8px 1px 15px -2px rgba(0,0,0,0.75)',
    transform: 'rotateY(70deg) translateX(-120%)'
  },
  image2: {
    position: 'absolute',
    width: '16rem',
    height: '14rem',
    overflow: 'hidden',
    boxShadow:
      '0px -1px 5px 1px rgba(0,0,0,0.75), -11px 67px 33px -45px rgba(0,0,0,0.75), -8px 1px 15px -2px rgba(0,0,0,0.75)',
    transform: 'rotateY(70deg) translateX(-110%)'
  },
  image3: {
    position: 'absolute',
    width: '16rem',
    height: '14rem',
    overflow: 'hidden',
    boxShadow:
      '0px -1px 5px 1px rgba(0,0,0,0.75), -11px 67px 33px -45px rgba(0,0,0,0.75), 10px 3px 20px -2px rgba(0,0,0,0.75), -8px 1px 15px -2px rgba(0,0,0,0.75)',
    transform: 'rotateY(70deg) translateX(-100%)'
  },
  image4: {
    borderBottomRightRadius: '1.5rem'
  },
  albumName: {
    ...defaultFont,
    color: whiteColor,
    textAlign: 'center',
    margin: '0',
    fontSize: '1.25rem',
    fontWeight: '500'
  },
  albumHeader: {
    ...defaultFont,
    color: whiteColor,
    margin: '0',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 1.25rem'
  },
  imagesWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
    gridGap: '10px',
    gridAutoFlow: 'row dense',
    listStyle: 'none',
    margin: '1em auto',
    padding: '0',
    maxWidth: '800px',
    '& > *': {
      display: 'block',
      objectFit: 'cover',
      width: '100%',
      height: '100%'
    }
  },
  deleteIcon: {
    color: whiteColor,
    position: 'absolute',
    height: '100%',
    width: '0px',
    overflow: 'hidden',
    background: 'rgba(0, 0, 0, 0.5)',
    [theme.breakpoints.down('md')]: {
      width: 'calc(100% - 0.3rem)',
      height: 'auto',
      padding: '0.3rem 0 0.3rem 0.3rem'
    },
    '& > *': {
      cursor: 'pointer'
    }
  }
});

export default albumStyle;
