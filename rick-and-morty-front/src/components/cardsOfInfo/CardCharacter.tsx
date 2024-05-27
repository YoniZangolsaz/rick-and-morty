import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import { styles } from "./style/shortCardStyle";
import MyDialog from "../Dialog";
import Character from "../../types/character.type";
import CardImg from "./CardImg";

type fullCardProps = {
  character: Character;
  showImg: boolean;
};

const CardCharacter = ({ character, showImg }: fullCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={styles.mainBox}>
      <Box sx={styles.secBox}>
        <Typography sx={styles.propTypography}>name:</Typography>
        <Typography sx={styles.textResult}>{character.name}</Typography>
      </Box>
      <Box sx={styles.secBox}>
        <Typography sx={styles.propTypography}>status:</Typography>
        <Typography sx={styles.textResult}>{character.status}</Typography>
      </Box>
      <Box sx={styles.secBox}>
        <Typography sx={styles.propTypography}>species:</Typography>
        <Typography sx={styles.textResult}>{character.species}</Typography>
      </Box>
      <Box sx={styles.secBox}>
        <Typography sx={styles.propTypography}>gender:</Typography>
        <Typography sx={styles.textResult}>{character.gender}</Typography>
      </Box>
      <Box sx={styles.secBox}>
        <Typography sx={styles.propTypography}>Last Loaction :</Typography>
        <Typography sx={styles.textResult}>
          {character.location?.name ? character.location?.name : "unknown"}
        </Typography>
      </Box>
      {showImg && (
        <Box sx={{ width: "40%" }}>
          <Button
            onClick={() => setOpen(true)}
            color="warning"
            sx={styles.button}
            variant="contained"
          >
            show image
          </Button>
        </Box>
      )}
      {open && (
        <>
          <MyDialog
            open={open}
            onClose={() => {
              setOpen((v) => !v);
            }}
          >
            <CardImg character={character} />
          </MyDialog>
        </>
      )}
    </Box>
  );
};

export default CardCharacter;
