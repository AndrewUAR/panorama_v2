import { container, boxShadow, defaultFont, whiteColor } from "../../panoramaStyles";
import image from "../../../img/backGround/lucas-benjamin-R79qkPYvrcM-unsplash.jpg";

const accountPageStyle = theme => ({
  container: {
    ...container,
    minWidth: "100vw",
    minHeight: "100vh",
    padding: "8rem",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    position: "relative"
  },
  sidebar: {
    ...boxShadow,
    top: "8rem",
    height: "max-content",
    position: "sticky",
    background: "#fff",
    background: "linear-gradient(to bottom right, #2c3e50, #3498db)",
    marginRight: "2rem",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      width: "90vw",
      margin: "0",
      position: "initial"
    }
  },
  info: {
    ...boxShadow,
    ...defaultFont,
    color: whiteColor,
    textAlign: "justify",
    background: "#fff",
    padding: "1rem 5rem 1rem 5rem",
    background: "linear-gradient(to bottom right, #2c3e50, #3498db)"
  },
  personalInfo: {
    padding: "0.5rem 0"
  },
  statsArea: {
    ...boxShadow,
    ...defaultFont,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "1rem",
    padding: "1rem 1rem 1rem 5rem",
    background: "linear-gradient(to bottom right, #2c3e50, #3498db)",
    justifyContent: "space-between"
  },
  buttonsAccountSwitch: {
    color: whiteColor,
    display: "flex",
    flexDirection: "column"
  },
  stats: {
    display: "flex",
    flexDirection: "row",
    color: whiteColor,
    "& > *": {
      padding: "0 0.75rem",
      display: "flex",
      alignItems: "center",
      "&:not(:first-child)": {
        "& svg, & .fab, & .material-icons": {
          paddingRight: "0.3rem",
        }
      }
    }
  }

})

export default accountPageStyle;