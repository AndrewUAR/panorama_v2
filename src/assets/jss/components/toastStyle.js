import { defaultFont, blackColor, hexToRgb } from "../panoramaStyles";

const toastStyle = theme => ({
  root: {
    margin: "0.2rem 0 4rem 0",
    width: "18vw",
    [theme.breakpoints.only("xs")]: {
      width: "96vw"
    },
    [theme.breakpoints.only("sm")]: {
      width: "98vw"
    }
  },
  alert: {
    background: "linear-gradient(to right, #243b55, #141e30)",
    "& > :first-child": {
      alignItems: "center",
      fontSize: "2rem"
    },
    "& > :last-child": {
      ...defaultFont,
      fontSize: "1rem"
    }
  },
  success: {
    color: "rgb(250, 179, 174)",
    border: "1px solid #f44336",
  },
  info: {
    color: "rgb(166, 213, 250)",
    border: "1px solid #2196f3",
  },
  error: {
    color: "rgb(183, 223, 185)",
    border: "1px solid #4caf50",
  },
  warning: {
    color: "rgb(255, 213, 153)",
    border: "1px solid #ff9800",
  }
})

export default toastStyle;