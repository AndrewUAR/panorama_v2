import { whiteColor } from '../../../panoramaStyles';

const formStyle = theme => ({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  formInput: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%"
  },
  inputIcon: {
    alignSelf: "flex-end",
    marginRight: "0.5rem",
    paddingBottom: "0.3rem",
    color: whiteColor
  }
})

export default formStyle;