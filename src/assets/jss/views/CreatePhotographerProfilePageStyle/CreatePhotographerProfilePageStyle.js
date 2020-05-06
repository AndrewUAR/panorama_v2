import { whiteColor, dangerColor, greyColor, boxShadow } from "../../panoramaStyles.js";
import image from "../../../../assets/img/backGround/mcdobbie-hu-5RgShZblKAQ-unsplash.jpg"
export const createPhotographerProfilePageStyle = theme => ({
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
  root: {
    ...boxShadow,
    width: '100%',
    "& > *": {
      background: "linear-gradient(to right, #2c3e50, #3498db)"
    }
  },
  label: {
    color: whiteColor,
    fontSize: "1rem",
    textTransform: "uppercase"
  },
  actionsContainer: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "2rem"
  }
})

export const colorLibConnectorStyles = theme => ({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  }
})

export const colorLibStepIconStyles = theme => ({
  root: {
    backgroundColor: greyColor,
    zIndex: "1",
    color: '#fff',
    width: "3.125rem",
    height: "3.125rem",
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }
})
