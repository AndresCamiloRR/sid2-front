import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

const MultipleFreeSolo = ({values, label, width}) => {
    return (
        <Stack spacing={3} sx={{ width: width }}>
          <Autocomplete
            multiple
            freeSolo
            id="tags-standard"
            options={values}
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