import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

const MultipleFreeSolo = ({ values, label, width }) => {
  // Estado para almacenar los valores seleccionados
  const [selectedValues, setSelectedValues] = React.useState([]);

  return (
    <Stack spacing={3} sx={{ width: width }}>
      <Autocomplete
        multiple
        freeSolo
        id="tags-standard"
        options={values}
        value={selectedValues}
        onChange={(event, newValue) => {
          setSelectedValues(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label={label}
          />
        )}
      />
    </Stack>
  );
}

export default MultipleFreeSolo;
