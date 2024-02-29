import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function SingleSelect(props: { options: any[]; label: string }) {
  const { options, label } = props;
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      renderInput={(params) => <TextField {...params} label={label} />}
      className="bg-white w-full rounded-lg  text-grey"
    />
  );
}
