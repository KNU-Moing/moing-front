import theme from "../../../styles/theme";

const overlays = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(255, 255, 255, 0.75)",
};

export const InfoModalStyles: ReactModal.Styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
  },
  content: {
    position: "absolute",
    top: "16.5vh",
    left: "25vw",
    right: "25vw",
    bottom: "26vh",
    background: theme.palette.pink[800],
    color: theme.palette.pink[100],
    WebkitOverflowScrolling: "touch",
    borderRadius: "25px",
    border: "none",
    padding: "8vh 8vw 0 8vw",
    textAlign: "center",
    fontSize: theme.font.md,
  },
};
export const InfoOpenModalStyles: ReactModal.Styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
  },
  content: {
    position: "absolute",
    top: "8vh",
    left: "25vw",
    right: "25vw",
    bottom: "10vh",
    background: theme.palette.pink[800],
    color: theme.palette.pink[100],
    WebkitOverflowScrolling: "touch",
    borderRadius: "25px",
    border: "none",
    padding: "10vh 8vw 0 8vw",
    textAlign: "center",
    fontSize: theme.font.md,
  },
};

export const updatedModalStyles: ReactModal.Styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
  },
  content: {
    position: "absolute",
    top: "35vh",
    left: "25vw",
    right: "25vw",
    bottom: "43vh",
    background: theme.palette.pink[800],
    color: theme.palette.pink[100],
    WebkitOverflowScrolling: "touch",
    borderRadius: "25px",
    border: "none",
    padding: "9.1vh 8vw",
    textAlign: "center",
    fontSize: theme.font.sm,
  },
};

export const HospiModalStyles: ReactModal.Styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
  },
  content: {
    position: "absolute",
    top: "33vh",
    left: "25vw",
    right: "25vw",
    bottom: "39vh",
    background: theme.palette.pink[800],
    color: theme.palette.pink[100],
    WebkitOverflowScrolling: "touch",
    borderRadius: "25px",
    border: "none",
    padding: "6.5vh 7vw 0 7vw",
    textAlign: "center",
    fontSize: theme.font.sm,
  },
};
export const HospiOpenModalStyles: ReactModal.Styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
  },
  content: {
    position: "absolute",
    top: "33vh",
    left: "25vw",
    right: "25vw",
    bottom: "31.5vh",
    background: theme.palette.pink[800],
    color: theme.palette.pink[100],
    WebkitOverflowScrolling: "touch",
    borderRadius: "25px",
    border: "none",
    padding: "6.5vh 7vw 0 7vw",
    textAlign: "center",
    fontSize: theme.font.sm,
  },
};
