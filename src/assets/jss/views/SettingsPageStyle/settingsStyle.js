import { whiteColor, hexToRgb, defaultFont, blueColor, indigoColor } from '../../panoramaStyles.js';

const settingsStyle = theme => ({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", 
    width: "100%",
    height: "100%"
  },
  inputForm: {
    width: "60%",
    "& > :nth-last-child(2)": {
      marginBottom: "1rem"
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  inputSection: {
    paddingBottom: "2rem",
    marginBottom: "3rem",
    border: "2px solid",
    borderColor: blueColor,
    "& > h3": {
      ...defaultFont,
      textTransform: "uppercase",
      fontSize: "500",
      display: "inline-block",
      margin: "0",
      marginLeft: "3rem",
      padding: "0 1rem",
      transform: "translateY(-50%)",
      background: indigoColor,
      letterSpacing: "0.2rem",
      color: whiteColor
    }
  },
  inputField: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputFieldIcon: {
    alignSelf: "flex-end",
    marginRight: "1rem",
    color: whiteColor
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      marginBottom: "1rem"
    },
    "& > :first-child": {
      marginRight: "1rem"
    }
  }
})

export default settingsStyle;