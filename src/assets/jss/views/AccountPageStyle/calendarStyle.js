import {
  blackColor,
  defaultFont,
  boxShadow,
  whiteColor
} from '../../panoramaStyles';

const calendarStyle = (theme) => ({
  container: {
    padding: '3rem',
    background: 'linear-gradient(to right bottom, #00d2ff, #3a7bd5)',
    [theme.breakpoints.down('sm')]: {
      padding: '0'
    }
  },
  calender: {
    ...defaultFont,
    ...boxShadow,
    padding: '1rem',
    color: whiteColor,
    fontSize: '0.75rem'
  },
  events: {
    ...boxShadow,
    height: 'auto'
  },
  event: {
    ...defaultFont,
    ...boxShadow,
    margin: '0.75rem 0.3rem',
    padding: '0.5rem 0',
    textAlign: 'center',
    color: blackColor,
    textTransform: 'uppercase',
    backgroundColor: '#1e88e5',
    cursor: 'move'
  },
  title: {
    ...defaultFont,
    color: whiteColor
  }
});

export default calendarStyle;
