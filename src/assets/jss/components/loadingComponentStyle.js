import { container } from "../panoramaStyles";

const loadingComponentStyle = {
  container: {
    ...container,
    minHeight: "100vh",
    minWidth: "100vw",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(to right, #536976, #292e49)"
  }
}

export default loadingComponentStyle;