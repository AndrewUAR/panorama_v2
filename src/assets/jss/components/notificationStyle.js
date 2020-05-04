import { defaultFont, dangerColor, hexToRgb, successColor, whiteColor, blueColor, warningColor } from "../panoramaStyles";

const notificationStyle = theme => ({
  snackbar: {
    ...defaultFont,
    fontSize: "1.10rem",
    color: whiteColor,
    "& > :last-child :last-child": {
      color: dangerColor,
      fontSize: '1rem'
    }
  },
  success: {
    background: "linear-gradient(to right, #52c234, #061700)",
    border: "1px solid" + successColor
  },
  error: {
    background: "linear-gradient(to right, #870000, #190a05)",
    border: "1px solid" + dangerColor
  },
  info: {
    background: "linear-gradient(to right, #004e92, #000428)",
    border: "1px solid" + blueColor
  },
  warning: {
    background: "linear-gradient(to right, #f8b500, #190a05)",
    border: "1px solid" + warningColor
  }
})

export default notificationStyle;