import { defaultFont, whiteColor, hexToRgb, boxShadow } from '../panoramaStyles';

const footerLinksStyle = theme => ({
  list: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      fontSize: "0.8rem",
      paddingBottom: "0",
      marginTop: "0"
    }
  },
  listItem: {
    position: "relative",
    width: "100%",
    padding: "0"
  },
  navButton: {
    "&,& a": {
      ...defaultFont,
      whiteSpace: "nowrap",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "400",
      color: whiteColor,
      fontSize: "1rem",
      textTransform: "uppercase",
      textDecoration: "none",
      margin: "0px",
      
      "& svg, & .fab, & .material-icons": {
        marginRight: "0.5rem"
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.85rem",
        fontWeight: "500",
        width: "100%",
        justifyContent: "flex-start",
        margin: "0.1rem 0.3rem"
      }
    }
  },
  pink: {
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "linear-gradient(to right, #e94057, #e91e63)",
      boxShadow:  
        `inset 20px -20px 60px rgba(${hexToRgb("#c6364a")}), inset -20px 20px 60px rgba(${hexToRgb("#d636d6")})`
    },
  },
  blue: {
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "linear-gradient(to bottom, #00c6ff, #0072ff)",
      boxShadow:  
        `inset 20px 20px 60px rgba(${hexToRgb("#00c6ff")}), inset -20px -20px 60px rgba(${hexToRgb("#d6d6d6")})`
    },
  },
  black: {
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "linear-gradient(to bottom, #00c6ff, #0072ff)",
      [theme.breakpoints.down("sm")]: {
        ...boxShadow
      }
    }
  }
});

export default footerLinksStyle;