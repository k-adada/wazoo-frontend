import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function MultipleSelect(props: any) {
  const { options } = props;
  return (
    <Autocomplete
      className="bg-dark-input text-ice rounded w-full multiselect"
      multiple
      id="tags-outlined"
      options={options}
      getOptionLabel={(option) => option.name}
      defaultValue={[options[0]]}
      filterSelectedOptions
      renderInput={(params) => <TextField {...params} placeholder="Cities" />}
    />
  );
}
