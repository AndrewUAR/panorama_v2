import {
  defaultFont,
  dangerColor,
  whiteColor,
  blueColor
} from "../panoramaStyles.js"

const formInputStyle = theme => ({
  disabled: {
    "&:before": {
      backgroundColor: "transparent !important"
    }
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderWidth: "2px !important"
    },
    "&:after": {
      borderColor: whiteColor
    }
  },
  underlineTeal: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: blueColor + " !important"
    }
  },
  underlineError: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: dangerColor + " !important"
    }
  },
  labelRootError: {
    color: dangerColor + " !important"
  },
  label: {
    ...defaultFont,
    color: whiteColor + "!important",
    fontWeight: "400",
    fontSize: "1rem",
    lineHeight: "1",
    top: "0.5rem"
  },
  input: {
    color: whiteColor,
    marginTop: "0.5rem",
    borderRadius: "10px",
    "&,&::placeholder": {
      fontSize: "1rem",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "400"
    }
  },
  formControl: {
    position: "relative",
    width: "100%"
  },
  error: {
    ...defaultFont,
    fontSize: "0.85rem",
    margin: "0",
    marginTop: '0.4375rem',
    padding: "0",
    lineHeight: '1rem',
    color: dangerColor
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
    height: "auto"
  },
  chip: {
    ...defaultFont,
    color: whiteColor,
    height: "auto",
    margin: "0.1rem",
    background: "linear-gradient(to right, #00c6ff, #0072ff)"

  }
})

export default formInputStyle;