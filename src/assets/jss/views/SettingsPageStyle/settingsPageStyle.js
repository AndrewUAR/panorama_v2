import { container, boxShadow, hexToRgb, indigoColor } from '../../panoramaStyles';
import image from "../../../img/backGround/photo-1525101479959-c3e73fd498ab.jpg"

const settingsStyle = theme => ({
  container: {
    minHeight: "100vh",
    minWidth: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center center"
  },
  settings: { 
    ...container,
    ...boxShadow,
    background: 
      `linear-gradient(105deg, #0d47a1 34%, ${indigoColor} 34%, ${indigoColor} 87%, #0d47a1 87%)`,  
    [theme.breakpoints.only("sm")]: {
      width: "70%"  
    },
    [theme.breakpoints.down("sm")]: {
      margin: "6rem 1rem",
      padding: "0",
      background: 
        `linear-gradient(120deg, #0d47a1 34%, ${indigoColor} 34%, ${indigoColor} 87%, #0d47a1 87%)`
    },
  }
})

export default settingsStyle;