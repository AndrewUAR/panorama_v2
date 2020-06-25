import { blueColor, hexToRgb, defaultFont, whiteColor, boxShadow } from "../../panoramaStyles";

const albumStyle = theme => ({
  container: {
    display: "flex",
    padding: "2rem",
    background: `linear-gradient(to right, rgba(${hexToRgb('#1e3c72')}, 0.8), rgba(${hexToRgb('#2a5298')}, 0.8))`,
    gridTemplateRows: "1fr"
  },
  head: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem",
    ...defaultFont,
    color: whiteColor,
    fontSize: "1.25rem",
    background: "linear-gradient(115deg, #1e3c72, #2a5298 85%, #292e49 85%, #2b32b2)",
    "& > *": {
      margin: "1rem 2rem"
    }
  },
  albumContainer: {
    boxShadow: "-5px 6px 5px -4px rgba(0,0,0,0.75)",
    padding: "0.5rem 0.8rem 0 0",
    background: 
    `linear-gradient(45deg, #00c6ff, #0072ff 60%, rgba(255,0,0,0) 60%)`,
    "&:active": {
      transform: "scale(0.98)"
    }
  },
  albumImage: {
    display: "block"
  },
  imageContainer: {
    "&:hover": {
      position: "relative",
      transition: "0.3s ease",
      transform: "scale(1.2)",
      zIndex: "200",
      border: `1px solid ${blueColor}`
    }
  },
  albumTitle: {
    color: whiteColor,
    fontSize: "1.25rem",
    padding: "0.3rem 2rem 0.3rem 2rem",
    textAlign: "center",
    margin: "0"
  },
  dropdownButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    color: "inherit",
    textDecoration: "none",
    padding: "0",
    width: "100%",
    "& svg, & .fab, & .material-icons": {
      marginRight: "0.2rem"
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0"
    }
  },
  emptyAlbum: {
    width: "15rem",
    height: "15rem",
    margin: "1rem 1rem 0.75rem 2.7rem",
    color: blueColor,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid",
    background: "linear-gradient(to top left, #2c3e50, #3498db)",
    filter:" drop-shadow(5px 5px 5px rgba(0,0,0,0.9))"
    
  },
  addImage: {
    position: "relative",
    ...boxShadow,
    color: blueColor,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "&:active": {
      transform: "scale(0.98)"
    }
  },
  icon: {
    height: "10rem",
    width: "10rem",
    background: "transparent",
    filter:" drop-shadow(5px 5px 5px rgba(0,0,0,0.9))"
  },
  text: {
    ...defaultFont,
    textShadow: "2px 2px 2px #000",
    margin: "0",
    textTransform: "uppercase"
  },
  textEmpty: {
    ...defaultFont,
    position: "absolute",
    textShadow: "2px 2px 2px #000",
    textTransform: "uppercase",
    marginTop: "4.75rem"
  },
  albumCover: {
    ...boxShadow,
    position: "relative",
    width: "15rem",
    height: "15rem",
    margin: "2rem 2rem 0 2rem",
    "&:active": {
      transform: "scale(0.98)"
    }
  },
  titleBar: {
    zIndex: "100",
    color: whiteColor
  },
  imageCover: {
    ...boxShadow,
    border: "1px solid",
    borderColor: blueColor,
    position: "absolute",
    margin: "0",
    width: "100%",
    height: "100%",
    zIndex: "20",
    "&:nth-child(3)": {
      transform: ""
    },
    "&:nth-child(2)": {
      transform: "translate(6%, -6%)"
    },
    "&:nth-child(1)": {
      transform: "translate(12%, -12%)"
    }
  },
  image1: {
    borderTopLeftRadius: "1.5rem"
  },
  image2: {
    borderTopRightRadius: "1.5rem"
  },
  image3: {
    borderBottomLeftRadius: "1.5rem"
  },
  image4: {
    borderBottomRightRadius: "1.5rem"
  },
  albumName: {
    ...defaultFont,
    color: whiteColor,
    textAlign: "center",
    margin: "0",
    fontSize: "1.25rem",
    fontWeight: "500"
  },
  albumHeader: {
    ...defaultFont,
    color: whiteColor,
    margin: "0",
    textAlign: "center",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 1.25rem"
  },
  imagesWrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
    gridGap: "10px",
    gridAutoFlow: "row dense",
    listStyle: "none",
    margin: "1em auto",
    padding: "0",
    maxWidth: "800px",
    "& > *": {
      display: "block",
      objectFit: "cover",
      width: "100%",
      height: "100%"
    }
  }
})

export default albumStyle;