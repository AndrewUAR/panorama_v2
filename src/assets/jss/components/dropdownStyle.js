import { defaultFont, hexToRgb, successBoxShadow, tealColor, whiteColor } from "../panoramaStyles";
const dropdownStyle = {
  root: {
    display: "flex",
    flexDirection: "column",
    height: "auto",
    width: "100%",
    background: "linear-gradient(to bottom, #232526 10%, #414345 90%)"
  },
  menuItem: {
    ...defaultFont,
    color: whiteColor,
    margin: "0 0.3rem",
    fontSize: "0.85rem",
    textTransform: "uppercase",
    "&:hover": {
      background: "linear-gradient(to right, #1fa2ff, #12d8fa)",
      color: whiteColor,
      ...successBoxShadow
    }
  }
}

export default dropdownStyle;