import {
  container,
  defaultFont,
  whiteColor,
  dangerColor
} from '../panoramaStyles';
import image from '../../img/backGround/ramon-salinero-vEE00Hx5d0Q-unsplash.jpg';

const forgetPasswordStyle = (theme) => ({
  pageHeader: {
    display: 'flex',
    position: 'relative',
    minHeight: '100vh',
    minWidth: '100vw',
    alignItems: 'center',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  },
  container: {
    ...container,
    padding: '0 !important',
    zIndex: '4'
  },
  borderWrap: {
    padding: '1rem',
    background:
      'linear-gradient(135deg, #0072ff, #00c6ff 50%, rgba(255,0,0,0) 50%)',
    [theme.breakpoints.up('md')]: {
      padding: '1.5rem',
      width: '70vw'
    },
    [theme.breakpoints.down('sm')]: {
      background:
        'linear-gradient(115deg, #0072ff, #00c6ff 50%, rgba(255,0,0,0) 50%)'
    }
  },
  cardHeaderContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    filter: 'drop-shadow(4px 0px 3px rgba(50, 50, 0, 0.7))'
  },
  formInput: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      '& > :last-child': {
        paddingRight: '0.2rem'
      }
    }
  },
  cardForm: {
    width: '90%',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      margin: '0',
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  formButton: {
    margin: '1rem 1rem 1rem 1.5rem'
  },
  formInputIcon: {
    alignSelf: 'flex-end',
    marginRight: '0.5rem',
    paddingBottom: '0.2rem',
    color: whiteColor
  },
  cardTitle: {
    ...defaultFont,
    color: whiteColor,
    fontSize: '1.5rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    margin: '1rem 0'
  },
  error: {
    margin: '0',
    marginTop: '0.2rem',
    textAlign: 'center',
    ...defaultFont,
    fontSize: '0.85rem',
    color: dangerColor,
    textTransform: 'uppercase'
  }
});

export default forgetPasswordStyle;
