import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
interface Destination {
  id: number;
  name: string;
  continent: string;
  country: string;
  image: any;
}
export default function CountryMultiSelect(props: any) {
  const { options, setFilteredCountries } = props;

  return (
    <>
      <Autocomplete
        className="w-full"
        multiple
        id="checkboxes-tags-demo"
        options={options}
        disableCloseOnSelect
        getOptionLabel={(option: Destination) => option.country}
        onChange={(event, selected) => {
          setFilteredCountries(selected);
        }}
        renderOption={(props, option: Destination, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.country}
          </li>
        )}
        renderInput={(params) => (
          <TextField {...params} label="Countries" placeholder="" />
        )}
      />
    </>
  );
}
