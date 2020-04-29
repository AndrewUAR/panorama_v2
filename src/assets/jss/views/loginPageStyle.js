import image from '../../img/backGround/loginPage.jpg';
import { container, defaultFont, dangerColor, whiteColor, hexToRgb, blueColor } from '../panoramaStyles.js'

const loginPageStyles = theme => ({
  pageHeader: {
    display: "flex",
    position: "relative",
    minHeight: "100vh",
    minWidth: "100vw",
    alignItems: "center",
    backgroundImage: 
      `linear-gradient(to bottom, rgba(${hexToRgb(blueColor)}, 0.1),
      rgba(${hexToRgb(blueColor)}, 0.1)), url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center center"
  },
  container: {
    ...container,
    [theme.breakpoints.only("sm")]: {
      marginLeft: "4rem"
    },
    [theme.breakpoints.down("xs")]: {
      margin: "8rem 0"
    }
  },
  cardTitle: {
    ...defaultFont,
    color: whiteColor,
    fontSize: "1.5rem",
    fontWeight: "600",
    textTransform: "uppercase",
    marginBottom: "0"
  },
  cardTitleIcons: {
    padding: "0"
  },
  cardFooterLinks: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "75%",
    marginTop: "1rem",
    marginBottom: "0.5rem",
    "& a": {
      ...defaultFont,
      textTransform: "uppercase",
      textDecoration: "none",
      fontSize: "0.75rem",
      fontWeight: "500",
      color: whiteColor,
      whiteSpace: "nowrap",
      borderBottom: "1px solid transparent",
      "&:hover,&:focus": {
        borderColor: blueColor + " !important"
      }
    },
  }, 
  cardInput: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "90%"
  },
  cardInputIcon: {
    alignSelf: "flex-end",
    marginRight: "0.5rem",
    marginLeft: "1.3rem",
    paddingBottom: "0.3rem",
    color: whiteColor
  },
  error: {
    margin: "0",
    marginBottom: "1.3rem",
    ...defaultFont,
    color: dangerColor,
    textTransform: "uppercase"
  }
})


export default loginPageStyles;