import { container, defaultFont, hexToRgb, whiteColor, dangerColor } from "../panoramaStyles";
import image from '../../img/backGround/ramon-salinero-vEE00Hx5d0Q-unsplash.jpg';

const forgetPasswordStyle = theme => ({
  pageHeader: {
    display: "flex",
    position: "relative",
    minHeight: "100vh",
    minWidth: "100vw",
    alignItems: "center",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center center"
  },
  container: {
    ...container,
    zIndex: "4"
  },
  formInput: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      "& > :last-child": {
        paddingRight: "0.2rem"
      }
    }
  },
  cardForm: {
    width: "100%",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      margin: "0",
      flexDirection: "column",
      alignItems: "center"
    }
  },
  formButton: {
    margin: "1rem 1.5rem"
  },
  formInputIcon: {
    alignSelf: "flex-end",
    marginRight: "0.5rem",
    paddingBottom: "0.2rem",
    color: whiteColor
  },
  cardTitle: {
    ...defaultFont,
    color: whiteColor,
    fontSize: "1.5rem",
    fontWeight: "600",
    textTransform: "uppercase",
    margin: "1rem 0",
  },
  error: {
    margin: "0",
    marginBottom: "1.3rem",
    ...defaultFont,
    color: dangerColor,
    textTransform: "uppercase"
  }
})

export default forgetPasswordStyle;