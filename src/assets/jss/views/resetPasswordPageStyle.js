import image from '../../img/backGround/resetPasswordPage.jpg';
import { 
  defaultFont, 
  hexToRgb, 
  blackColor, 
  container, 
  whiteColor, 
  dangerColor 
} from '../panoramaStyles.js'

const resetPasswordPageStyles = theme => ({
  pageHeader: {
    display: "flex",
    position: "relative",
    minHeight: "100vh",
    minWidth: "100vw",
    alignItems: "center",
    backgroundImage: 
      `linear-gradient(to bottom, rgba(${hexToRgb(blackColor)}, 0.2),
       rgba(${hexToRgb(blackColor)}, 0.5)), url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center center"
  },
  container: {
    ...container,
    padding: "0 !important",
    zIndex: "4"
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
    color: whiteColor,
    fontSize: "1.5rem",
    fontWeight: "600",
    textTransform: "uppercase",
    margin: "1rem 0",
    
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
    "&,& a": {
      ...defaultFont,
      textTransform: "uppercase",
      textDecoration: "none",
      fontSize: "0.75rem",
      fontWeight: "500",
      color: whiteColor,
      whiteSpace: "nowrap"
    }
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
    marginLeft: "1.3rem",
    paddingBottom: "0.3rem",
    color: whiteColor
  },
  cardForm: {
    width: "100%"
  },
  error: {
    margin: "0",
    marginTop: "1.3rem",
    ...defaultFont,
    fontSize: "1rem",
    color: dangerColor,
    textTransform: "uppercase"
  }
})


export default resetPasswordPageStyles;