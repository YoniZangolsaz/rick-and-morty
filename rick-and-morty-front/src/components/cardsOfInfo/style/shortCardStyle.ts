export const styles = {
  mainBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    gap: 1,
    border: "1px solid black",
    borderRadius: 2,
    padding: 2,
    // "&:hover": {
    //   cursor: "pointer",
    // },
  },
  secBox: {
    display: "flex",
  },
  urlBox: {
    display: "block",
  },
  propTypography: {
    fontSize: "1.2rem",
    textTransform: "capitalize",
    color: "grey",

    mr: 1,
  },
  textResult: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    "@media (max-width: 700px)": {
      fontSize: "0.9rem",
    },
  },

  urlResult: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    display: "block",
    "@media (max-width: 700px)": {
      fontSize: "0.8rem",
    },
  },
  button: {
    width: "100%",
  },
};
