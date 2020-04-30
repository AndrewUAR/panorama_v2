import { whiteColor, defaultFont, dropzoneBoxShadow } from "../../jss/panoramaStyles.js";

const dropzoneStyle = theme => ({
  container: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: "2px",
    borderRadius: "2px",
    borderColor: "#000",
    background: "linear-gradient(to right, #0575e6, #021b79)",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
    ...dropzoneBoxShadow
  },
  boxContent: {
    ...defaultFont,
    color: whiteColor,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    textTransform: "uppercase",
    "& svg, & .fab, & .material-icons": {
      fontSize: "5rem"
    }
  }
})

export default dropzoneStyle;