import { whiteColor, hexToRgb } from "../panoramaStyles";

const modalStyle = theme => ({
  modalContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'auto',
    margin: "1rem"
    
  },
  paperDropzone: {
    padding: "20px",
    backgroundColor: `rgb(${hexToRgb(whiteColor)}, 0.8)`,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }

  },
  imgPreview: {
    marginLeft: "2rem",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
      margin: "0"
    }
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "column",
    marginTop: "1rem"
  }
})

export default modalStyle;