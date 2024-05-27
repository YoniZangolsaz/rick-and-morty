import { Box } from "@mui/material";
import Character from "../../types/character.type";

const CardImg = ({ character }: { character: Character }) => {
  return (
    <Box>
      <img src={character.image} alt="some img"></img>
    </Box>
  );
};

export default CardImg;
