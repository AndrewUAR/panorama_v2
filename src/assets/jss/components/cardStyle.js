import { 
  hexToRgb, 
  primaryColor, 
  blueColor, 
  blackColor 
} from "../panoramaStyles";

const cardStyle = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    boxShadow: 
      `2px 0px 26px -12px rgba(${
      hexToRgb(blackColor)} , 0.7),
      2px 4px 23px 0px rgba(${
      hexToRgb(blackColor)}, 0.7),
      2px 8px 10px -5px rgba(${hexToRgb(blackColor)}, 0.7)`
  },
  pink: {
    backgroundColor: "rgba(" + hexToRgb(primaryColor) + ", 0.6)"
  },
  blue: {
    backgroundColor: "rgba(" + hexToRgb(blueColor) + ", 0.6)"
  },
  black: {
    backgroundColor: "rgba(" + hexToRgb(blackColor) + ", 0.7)"
  }
}

export default cardStyle;