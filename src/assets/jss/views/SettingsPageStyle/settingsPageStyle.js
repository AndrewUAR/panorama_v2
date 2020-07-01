import { container, boxShadow } from '../../panoramaStyles';
import image from '../../../img/backGround/photo-1525101479959-c3e73fd498ab.jpg';

const settingsStyle = (theme) => ({
  container: {
    minHeight: '100vh',
    minWidth: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  },
  settings: {
    ...container,
    ...boxShadow,
    background:
      'linear-gradient(105deg, #2c3e50, #3498db 33%, #292e49 33%, #2b32b2)',
    [theme.breakpoints.only('sm')]: {
      width: '70%'
    },
    [theme.breakpoints.down('sm')]: {
      margin: '6rem 1rem',
      padding: '0',
      background:
        'linear-gradient(120deg,  #2c3e50, #3498db 34%, #292e49 34%, #2b32b2)'
    }
  }
});

export default settingsStyle;
