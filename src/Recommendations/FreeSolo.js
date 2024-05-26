import React, { useRef, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

const FreeSolo = ({ values, label, onChange, width, selected }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (selected[0] === label) {
      inputRef.current.focus();
    }
  }, [selected, label]); // Asegúrate de que se ejecute cuando "selected" cambie

  const handleChange = (event, newValue) => {
    console.log(event)
    selected[1](label);
    onChange[1](newValue);
  };

  return (
    <Stack spacing={3} sx={{ width: width }}>
      <Autocomplete
        id="tags-standard"
        options={values.map(value => value.name)}
        value={onChange[0]}
        onInputChange={handleChange}
        renderInput={(params) => (
          <TextField
            inputRef={inputRef}
            {...params}
            variant="standard"
            label={label}
            sx={{color: "white"}}
          />
        )}
      />
    </Stack>
  );
}

export default FreeSolo;
