import {
  whiteColor,
  defaultFont,
  blackColor,
  hexToRgb,
  dangerColor
} from '../../../panoramaStyles';

const photographerFormStyle = (theme) => ({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '17rem'
  },
  formInput: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  inputIcon: {
    alignSelf: 'flex-end',
    marginRight: '0.5rem',
    paddingBottom: '0.3rem',
    color: whiteColor
  },
  termsContainer: {
    ...defaultFont,
    fontSize: '0.85rem',
    textAlign: 'justify',
    color: whiteColor,
    overflow: 'auto',
    padding: '1rem',
    height: '10rem',
    boxShadow: `inset 0px 3px 5px 0px rgba(${hexToRgb(blackColor)},0.75), 
                inset 1px 0px 13px 0px rgba(${hexToRgb(blackColor)},0.75)`
  },
  checkbox: {
    padding: '1rem'
  },
  title: {
    margin: '0.3rem 0 0.7rem 0',
    textAlign: 'center'
  },
  infoText: {
    ...defaultFont,
    color: dangerColor,
    fontSize: '0.85rem',
    textAlign: 'center',
    margin: '0'
  },
  accountCredentials: {
    height: '10rem',
    width: '100%'
  }
});

export default photographerFormStyle;
