import { Character } from "../../types/character.type";
import { Box } from "@mui/material";
import { styles } from "./style/cardListStyle";
import Location from "../../types/location.type";
import Episode from "../../types/episode.type";
import CardCharacter from "./CardCharacter";
import CardLocation from "./CardLocation";
import CardEpisode from "./CardEpisode";

type cardListProps = {
  dataResults: Character[] | Location[] | Episode[];
  showImg: boolean;
  typeReq: string;
};

const CardList = ({ dataResults, showImg, typeReq }: cardListProps) => {
  return (
    <Box sx={styles.mainBox}>
      {dataResults.map((data: Character | Location | Episode) =>
        typeReq === "character" ? (
          <CardCharacter
            character={data as Character}
            key={data.id}
            showImg={showImg}
          />
        ) : typeReq === "location" ? (
          <CardLocation location={data as Location} key={data.id} />
        ) : (
          <CardEpisode episode={data as Episode} key={data.id} />
        )
      )}
    </Box>
  );
};

export default CardList;
