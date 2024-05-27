export const styles = {
  mainBox: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    gap: 2,
    padding: 2,
    overflow: "auto",
    height: "-webkit-fill-available",
    margin: 2,

    "@media (max-width: 1600px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    "@media (max-width: 1100px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (max-width: 700px)": {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
};
