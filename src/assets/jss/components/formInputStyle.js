import {
  defaultFont,
  dangerColor,
  whiteColor,
  blueColor,
  boxShadow
} from '../panoramaStyles.js';

const formInputStyle = (theme) => ({
  disabled: {
    '&:before': {
      backgroundColor: 'transparent !important'
    }
  },
  underline: {
    '&:hover:not($disabled):before,&:before': {
      borderWidth: '2px !important'
    },
    '&:after': {
      borderColor: whiteColor
    }
  },
  underlineTeal: {
    '&:hover:not($disabled):before,&:before': {
      borderColor: `${blueColor} !important`
    }
  },
  underlineError: {
    '&:hover:not($disabled):before,&:before': {
      borderColor: `${dangerColor} !important`
    }
  },
  labelRootError: {
    color: `${dangerColor} !important`
  },
  label: {
    ...defaultFont,
    color: `${whiteColor}!important`,
    fontWeight: '400',
    fontSize: '1rem',
    lineHeight: '1',
    top: '0.5rem'
  },
  selectLabel: {
    ...defaultFont,
    color: `${whiteColor}!important`,
    fontWeight: '400',
    fontSize: '1rem',
    lineHeight: '1',
    '& svg, & .fab, & .material-icons': {
      color: whiteColor
    }
  },
  input: {
    color: whiteColor,
    marginTop: '0.5rem',
    borderRadius: '0.5rem',
    paddingRight: '0',
    '&,&::placeholder': {
      fontSize: '1rem',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: '400'
    },
    '&::placeholder': {
      color: `${whiteColor}!important`
    }
  },
  formControl: {
    position: 'relative',
    width: '100%'
  },
  sliderInput: {
    ...defaultFont,
    color: whiteColor,
    textAlign: 'center'
  },
  sliderLabel: {
    ...defaultFont,
    color: whiteColor
  },
  radioFormControl: {
    color: whiteColor
  },
  checkboxContainer: {
    ...defaultFont,
    color: whiteColor,
    fontSize: '0.85rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  error: {
    ...defaultFont,
    fontSize: '0.85rem',
    margin: '0',
    padding: '0',
    lineHeight: '1rem',
    color: dangerColor
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
    height: 'auto'
  },
  chip: {
    ...defaultFont,
    color: whiteColor,
    height: 'auto',
    margin: '0 0.2rem 0.3rem 0',
    background: 'linear-gradient(to right, #00c6ff, #0072ff)'
  },
  list: {
    ...boxShadow,
    color: whiteColor,
    maxHeight: 'auto',
    background: 'linear-gradient(to right, #2c3e50, #3498db)'
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    color: whiteColor,
    margin: '0 0.3rem',
    '&:hover': {
      ...boxShadow,
      background: 'linear-gradient(to right, #00c6ff, #0072ff)'
    },
    '& svg, & .fab, & .material-icons': {
      marginRight: '0.5rem'
    }
  },
  ratingStars: {
    '& > *': {
      '&:hover': {
        ...boxShadow,
        background: 'linear-gradient(to right, #00c6ff, #0072ff)'
      },
      '& svg, & .fab, & .material-icons': {
        fontSize: '1.25rem'
      }
    }
  },
  selectedItem: {
    ...boxShadow,
    background: 'linear-gradient(to right, #00c6ff, #0072ff)'
  },
  loadingPlaceholder: {
    ...defaultFont,
    color: whiteColor,
    fontSize: '1rem',
    paddingLeft: '1rem'
  },
  inputPadding: {
    padding: '0 !important'
  },
  renderOptionIcon: {
    lineHeight: '0'
  },
  radioGroup: {
    ...defaultFont,
    color: whiteColor,
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  radioIcon: {
    marginRight: '0.3rem'
  },
  blue: {
    color: `${blueColor}!important`
  },
  white: {
    color: whiteColor
  }
});

export default formInputStyle;
