import { boxShadow, defaultFont, blueColor } from '../../panoramaStyles';

const introPageStyles = (theme) => ({
  container: {
    // height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to right, #141e30, #243b55)',
    // [theme.breakpoints.only('xs')]: {
    //   padding: '20rem 0 30rem 0'
    // },
    // [theme.breakpoints.only('sm')]: {
    //   padding: '8rem 0 16rem 0'
    // },
    '& > *': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'auto',
      width: '80%',
      margin: '5rem 0 5rem 0',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        width: '100%',
        height: '100%'
      }
    },
    '& > :last-child': {
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column-reverse'
      }
    }
  },
  photos: {
    position: 'relative',
    height: '20rem',
    width: '50%',
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // [theme.breakpoints.only('sm')]: {
    //   padding: '9rem 4rem 2rem 0'
    // },
    marginRight: 'rem',
    '& > *': {
      ...boxShadow,
      height: '14rem',
      width: 'auto',
      position: 'absolute',
      [theme.breakpoints.only('xs')]: {
        height: '8rem'
      },
      [theme.breakpoints.only('sm')]: {
        height: '10rem'
      }
    }
  },
  image: {
    height: '100%',
    width: 'auto'
  },
  box1: {
    transform: 'rotate(-10deg) translate(-50%, -20%)'
  },
  box2: {
    transform: 'translate(40%, -20%)'
  },
  box3: {
    transform: 'rotate(15deg) translateY(50%)'
  },
  box4: {
    transform: 'rotate(-15deg) translate(50%, 50%)'
  },
  box5: {
    transform: 'rotate(25deg) translate(170%, 5%)'
  },
  box6: {
    transform: 'translateX(130%)'
  },
  box7: {
    transform: 'rotate(-10deg) translate(-40%, -30%)',
    zIndex: '1'
  },
  box8: {
    transform: 'translate(-5%, 50%)'
  },
  box9: {
    transform: 'rotate(-15deg) translate(50%, -5%)'
  },
  box10: {
    transform: 'rotate(30deg) translate(150%, 15%)'
  },
  hidden: {
    opacity: '0'
  },
  text: {
    ...boxShadow,
    height: '100%',
    width: '50%',
    backgroundColor: 'transparent',
    color: blueColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'column',
    padding: '2rem',
    [theme.breakpoints.only('sm')]: {
      width: '80%'
    },
    [theme.breakpoints.only('xs')]: {
      width: '80%'
    },
    '& > :first-child': {
      ...defaultFont,
      margin: '0 3rem 1rem 3rem',
      textAlign: 'center',
      [theme.breakpoints.only('xs')]: {
        margin: '0',
        paddingTop: '5rem'
      }
    },
    '& > :last-child': {
      ...defaultFont,
      textAlign: 'justify'
    }
  },
  textAnimationLeft: {
    animation: '$revealTextLeft 1s'
  },
  textAnimationRight: {
    animation: '$revealTextRight 1s'
  },
  photosAnimationTop: {
    animation: '$revealPhotosTop 1s',
    [theme.breakpoints.down('sm')]: {
      animation: '$revealPhotosBottom 1s'
    }
  },
  photosAnimationBottom: {
    animation: '$revealPhotosBottom 1s',
    [theme.breakpoints.down('sm')]: {
      animation: '$revealPhotosBottom 1s'
    }
  },
  '@keyframes revealTextLeft': {
    '0%': {
      transform: 'translateX(-50%)'
    },
    '100%': {
      transform: 'translateX(0%)'
    }
  },
  '@keyframes revealTextRight': {
    '0%': {
      transform: 'translateX(50%)'
    },
    '100%': {
      transform: 'translateX(0)'
    }
  },
  '@keyframes revealPhotosTop': {
    '0%': {
      transform: 'translateY(-50%)'
    },
    '100%': {
      transform: 'translateY(0%)'
    }
  },
  '@keyframes revealPhotosBottom': {
    '0%': {
      transform: 'translateY(50%)'
    },
    '100%': {
      transform: 'translateY(0)'
    }
  }
});

export default introPageStyles;
