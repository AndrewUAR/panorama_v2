import {
  defaultFont,
  boxShadow,
  whiteColor,
  hexToRgb,
  container
} from '../../panoramaStyles';
import image from '../../../img/backGround/settingsBackground.jpg';

const categoriesSectionStyles = (theme) => ({
  mainContainer: {
    ...container,
    width: '100',
    padding: '8rem',
    display: 'flex',
    minHeight: '75vh',
    minWidth: '100vw',
    position: 'relative',
    flexDirection: 'column',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    [theme.breakpoints.down('sm')]: {
      padding: '3rem 0'
    }
  },
  group1: {
    display: 'flex',
    justifyContent: 'center',
    filter: 'drop-shadow(0.5rem 0.75rem 0.75rem black)',
    '& > :nth-child(1)': {
      '&:hover': {
        transform: 'translate(-10%, -8%)',
        transition: 'all 0.2s'
      },
      [theme.breakpoints.down('sm')]: {
        '&:hover': {
          transform: 'translate(-7%, -5%)',
          transition: 'all 0.2s'
        }
      }
    },
    '& > :nth-child(2)': {
      animationDelay: '0.2s',
      '&:hover': {
        transform: 'translateY(-10%)',
        transition: 'all 0.2s'
      },
      [theme.breakpoints.down('sm')]: {
        '&:hover': {
          transform: 'translate(6%, -4%)',
          transition: 'all 0.2s'
        }
      }
    },
    '& > :nth-child(3)': {
      '&:hover': {
        transform: 'translate(10%, -8%)',
        transition: 'all 0.2s'
      }
    }
  },
  group2: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '-5rem',
    filter: 'drop-shadow(0.75rem 0.5rem 0.75rem black)',
    [theme.breakpoints.only('sm')]: {
      marginTop: '-4rem'
    },
    [theme.breakpoints.only('xs')]: {
      marginTop: '-2.5rem'
    },
    '& > :nth-child(1)': {
      '&:hover': {
        transform: 'translate(-6%, 10%)',
        transition: 'all 0.2s'
      },
      [theme.breakpoints.down('sm')]: {
        '&:hover': {
          transform: 'translate(-6%, 4%)',
          transition: 'all 0.2s'
        }
      }
    },
    '& > :nth-child(2)': {
      '&:hover': {
        transform: 'translate(6%, 10%)',
        transition: 'all 0.2s'
      },
      [theme.breakpoints.down('sm')]: {
        '&:hover': {
          transform: 'translate(6%, 4%)',
          transition: 'all 0.2s'
        }
      }
    }
  },
  groupHidden: {
    '& > :nth-child(1)': {
      [theme.breakpoints.down('sm')]: {
        '&:hover': {
          transform: 'scale(0.9)',
          transition: 'all 0.2s'
        }
      }
    }
  },
  outerContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20rem',
    width: '20rem',
    background: 'linear-gradient(to right, #7474bf, #26a0da)',
    margin: '0.1rem',
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    WebkitClipPath:
      'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    '&:active': {
      transform: 'scale(0.9) !important',
      transition: 'all 0.2s !important'
    },
    [theme.breakpoints.only('sm')]: {
      height: '16rem',
      width: '16rem'
    },
    [theme.breakpoints.only('xs')]: {
      height: '10rem',
      width: '10rem'
    }
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '18rem',
    width: '18rem',
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    WebkitClipPath:
      'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    [theme.breakpoints.only('sm')]: {
      height: '14rem',
      width: '14rem'
    },
    [theme.breakpoints.only('xs')]: {
      height: '9rem',
      width: '9rem'
    }
  },
  image: {
    height: '100%',
    width: 'auto',
    '&::after': {
      backgroundImage: 'linear-gradient(to right, #7474bf, #26a0da)'
    }
  },
  categoryTitle: {
    ...defaultFont,
    ...boxShadow,
    color: whiteColor,
    position: 'absolute',
    margin: '0',
    width: '100%',
    textAlign: 'center',
    textTransform: 'uppercase',
    background: `linear-gradient(to right, rgba(${hexToRgb(
      '#7474bf'
    )}, 0.5), rgba(${hexToRgb('#26a0da')}, 0.5))`,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem'
    }
  },
  title: {
    ...defaultFont,
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'uppercase',
    background: 'linear-gradient(to right, #7474bf, #26a0da)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    textFillColor: 'transparent',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.1rem'
    }
  },
  video: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: '-1',
    overflow: 'hidden'
  },
  content: {
    height: '100%',
    width: '100%',
    objectFit: 'cover'
  },
  animationTop: {
    animation: '$imageRevealTop 0.5s'
  },
  animationBottom: {
    animation: '$imageRevealBottom 0.5s'
  },
  '@keyframes imageRevealTop': {
    '0%': {
      transform: 'translateY(-10%)'
    },
    '100%': {
      transform: 'translateY(0%)'
    }
  },
  '@keyframes imageRevealBottom': {
    '0%': {
      transform: 'translateY(10%)'
    },
    '100%': {
      transform: 'translateY(0%)'
    }
  }
});

export default categoriesSectionStyles;
