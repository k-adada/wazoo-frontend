import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function MultipleSelectLight(props: any) {
  const { options, placeholder } = props;

  const [values, setValues] = React.useState([]);

  const handleChange = (event: any, value: any) => {
    setValues(value); // Update the values state with the selected options
  };

  React.useEffect(() => {
    console.log("Selected Values: ", values);
  }, [values]);

  return (
    <Autocomplete
      className="px-5  rounded-lg bg-white text-grey w-full"
      multiple
      id="tags-outlined"
      options={options}
      getOptionLabel={(option) => option.name}
      defaultValue={[options[4]]}
      filterSelectedOptions
      onChange={handleChange}
      value={values} // Set the value prop to update the selected options in the Autocomplete
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={placeholder ? placeholder : "Select"}
        />
      )}
    />
  );
}
