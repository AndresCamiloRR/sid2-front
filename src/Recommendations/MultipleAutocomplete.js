import React, { useRef, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

const MultipleAutocomplete = ({ values, label, onMultipleChange, width, selected }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (selected[0] === label) {
      inputRef.current.focus();
    }
  }, [selected, label]);

  const handleChange = (event, newValue) => {
    selected[1](label);
    onMultipleChange[1](newValue);
  };

  return (
    <Stack spacing={3} sx={{ width: width }}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={values}
        value={onMultipleChange[0]}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            inputRef={inputRef}
            {...params}
            variant="standard"
            label={label}
          />
        )}
      />
    </Stack>
  );
};

export default MultipleAutocomplete;
