import {
  Autocomplete,
  AutocompleteRenderInputParams,
  TextField,
} from "@mui/material";
import React from "react";

type SearchInputProps = {
  options: string[];
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput = ({ options, label, value, onChange }: SearchInputProps) => {
  return (
    <Autocomplete
      disablePortal
      options={options}
      sx={{ width: "100%", mt: 1 }}
      renderInput={(params: AutocompleteRenderInputParams) => (
        <TextField
          value={value}
          onChange={onChange}
          {...params}
          label={label}
        />
      )}
    />
  );
};

export default SearchInput;
