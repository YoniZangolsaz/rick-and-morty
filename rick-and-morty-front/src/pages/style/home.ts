export const styles = {
  mainBox: {
    height: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  secBox: {
    mt: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  searchBox: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    mt: 2,
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
  cardBox: {
    overflow: "auto",
    height: "85%",
    width: "100%",
  },
};
