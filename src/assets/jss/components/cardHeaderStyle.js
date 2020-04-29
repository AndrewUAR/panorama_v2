import {
   blackColor, 
   hexToRgb 
} from "../panoramaStyles.js";

const cardHeaderStyle = {
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: `0.75rem 0.75rem 0.8rem -0.56rem rgba(${hexToRgb(blackColor)}, 0.74)`,
    marginTop: "-2rem",
    width: "80%",
    marginBottom: "1rem"
  },
  cardHeaderLogin: {
    flexDirection: "column"
  },
  pink: {
    background: "linear-gradient(to right, #e94057, #e91e63)"
  },
  blue: {
    background: "linear-gradient(to top, #00c6ff 0%, #0072ff 100%)"
  },
  black: {
    background: "linear-gradient(to right, #00c6ff, #0072ff)"
  }
}

export default cardHeaderStyle;