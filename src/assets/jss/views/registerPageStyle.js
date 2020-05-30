import image from '../../img/backGround/registerPage.jpg';
import { 
  defaultFont, 
  container, 
  whiteColor, 
  hexToRgb, 
  blueColor, 
  dangerColor 
} from "../panoramaStyles";

const registerPageStyles = theme => ({
  pageHeader: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    backgroundImage: 
      `linear-gradient(to top, rgba(${hexToRgb(whiteColor)}, 0.1), 
      rgba(${hexToRgb(whiteColor)}, 0.3)), url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    minWidth: "100vw",
    minHeight: "100vh",
    overflow: "hidden"
  },
  container: {
    ...container,
    [theme.breakpoints.down("xs")]: {
      margin: "8rem 0",
      padding: "0"
    }
  },
  borderWrap: {
    padding: "1rem",
    background: "linear-gradient(135deg, #0072ff, #00c6ff 50%, rgba(255,0,0,0) 50%)",
    [theme.breakpoints.up("md")]: {
      padding: "1.5rem",
      width: "70vw"
    },
    [theme.breakpoints.down("sm")]: {
      background: "linear-gradient(115deg, #0072ff, #00c6ff 50%, rgba(255,0,0,0) 50%)"
    }
  },
  cardHeaderContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    filter: "drop-shadow(4px 0px 3px rgba(50, 50, 0, 0.7))"
  },
  cardTitle: {
    ...defaultFont,
    fontSize: "2rem",
    textTransform: "uppercase",
    margin: "1rem",
    color: whiteColor
  },
  cardInput: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
    width: "90%"
  },
  cardInputIcon: {
    alignSelf: "flex-end",
    marginRight: "0.5rem",
    marginLeft: "1.2rem",
    paddingBottom: "0.3rem",
    color: whiteColor
  },
  cardBody: {
    alignContent: 'space-between',
    justify: "space-between",
    direction: "row"
  },
  buttonsSignUp: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  form: {
    borderLeft: "1px solid",
    borderColor: blueColor,
    [theme.breakpoints.down("sm")]: {
      borderLeft: "none"
    }
  },
  error: {
    margin: "0",
    marginBottom: "1.3rem",
    ...defaultFont,
    color: dangerColor,
    padding: "0 1.2rem",
    textAlign: "center"
  }
})

export default registerPageStyles;