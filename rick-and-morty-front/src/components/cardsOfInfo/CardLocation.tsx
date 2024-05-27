import { Box, Typography } from "@mui/material";
import { styles } from "./style/shortCardStyle";
import Location from "../../types/location.type";

type CardLocationProps = {
  location: Location;
};

const CardLocation = ({ location }: CardLocationProps) => {
  return (
    <Box sx={styles.mainBox}>
      <Box sx={styles.secBox}>
        <Typography sx={styles.propTypography}>name:</Typography>
        <Typography sx={styles.textResult}>{location.name}</Typography>
      </Box>
      <Box sx={styles.secBox}>
        <Typography sx={styles.propTypography}>type:</Typography>
        <Typography sx={styles.textResult}>{location.type}</Typography>
      </Box>
      <Box sx={styles.secBox}>
        <Typography sx={styles.propTypography}>dimension:</Typography>
        <Typography sx={styles.textResult}>{location.dimension}</Typography>
      </Box>
      <Box sx={styles.urlBox}>
        <Typography sx={styles.propTypography}>url:</Typography>
        <Typography sx={styles.textResult}>{location.url}</Typography>
      </Box>
    </Box>
  );
};

export default CardLocation;
