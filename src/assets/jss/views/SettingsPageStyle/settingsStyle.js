import { whiteColor, defaultFont, blueColor, indigoColor, dangerColor } from '../../panoramaStyles.js';

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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "2rem",
    marginBottom: "2rem",
    border: "2px solid",
    borderColor: blueColor,
    [theme.breakpoints.only("sm")]: {
      margin: "2rem"
    },
    "& > h3": {
      ...defaultFont,
      alignSelf: "flex-start",
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
  notificationSection: {
    display: "inline-block",
    paddingBottom: "0rem",
    marginBottom: "0rem",
    "& > :not(:last-child)": {
      borderBottom: '1px solid',
      borderColor: blueColor + "!important"
    }
  },
  sectionTitle: {
    ...defaultFont,
    color: whiteColor,
    textTransform: "uppercase",
    underlineColor: whiteColor,
    marginBottom: "2rem"
  },
  inputField: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
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
  },
  error: {
    margin: "0",
    padding: "0",
    marginBottom: "1.3rem",
    ...defaultFont,
    color: dangerColor,
    textAlign: "right"
  }
})

export default settingsStyle;