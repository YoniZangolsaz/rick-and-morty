import { Box, Typography } from "@mui/material";
import { styles } from "./style/shortCardStyle";
import Episode from "../../types/episode.type";

type CardEpisodeProps = {
  episode: Episode;
};

const CardLocation = ({ episode }: CardEpisodeProps) => {
  return (
    <Box sx={styles.mainBox}>
      <Box sx={styles.secBox}>
        <Typography sx={styles.propTypography}>name:</Typography>
        <Typography sx={styles.textResult}>{episode.name}</Typography>
      </Box>
      <Box sx={styles.secBox}>
        <Typography sx={styles.propTypography}>air data:</Typography>
        <Typography sx={styles.textResult}>{episode.air_date}</Typography>
      </Box>
      <Box sx={styles.secBox}>
        <Typography sx={styles.propTypography}>episode:</Typography>
        <Typography sx={styles.textResult}>{episode.episode}</Typography>
      </Box>
      <Box sx={styles.urlBox}>
        <Typography sx={styles.propTypography}>url:</Typography>
        <Typography sx={styles.textResult}>{episode.url}</Typography>
      </Box>
    </Box>
  );
};

export default CardLocation;
