import image from '../../img/backGround/registerPage.jpg';
import { 
  defaultFont, 
  container, 
  whiteColor, 
  hexToRgb, 
  blueColor, 
  blackColor 
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
      margin: "8rem 0"
    }
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
    [theme.breakpoints.down("xs")]: {
      borderLeft: "none"
    }
  }
})

export default registerPageStyles;