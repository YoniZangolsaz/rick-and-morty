import { Box, Stack, TextField, Button } from "@mui/material";
import { useState } from "react";
import { searchOpt } from "../config/config";
import SelectList, { SearchOptions } from "./SelectList";

type SearchBarProps = {
  searchClick: (searchType: string, searchValue: string) => void;
};

const SearchBar = ({ searchClick }: SearchBarProps) => {
  const handleClick = () => {
    if (!selectType || !searchValue) {
      return;
    }
    searchClick(selectType!.value, searchValue);
  };
  const [selectType, setSelectType] = useState<SearchOptions | undefined>();
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Stack
        spacing={2}
        direction="row"
        sx={{
          display: "flex",
          alignItems: "center",
          "@media (max-width: 600px)": {
            flexDirection: "column",
            gap: 2,
            mt: 2,
          },
        }}
      >
        {selectType &&
          (selectType!.value === "character" ||
            selectType!.value === "location" ||
            selectType!.value === "episode") && (
            <TextField
              variant="outlined"
              required
              label="page number"
              placeholder="Example: 1"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
          )}

        <SelectList
          inputLabel="request type"
          array={searchOpt}
          onChange={(searchOpt: SearchOptions) => {
            setSelectType(searchOpt);
          }}
          value={selectType}
        />
        <Button variant="contained" color="primary" onClick={handleClick}>
          search
        </Button>
      </Stack>
    </Box>
  );
};

export default SearchBar;
