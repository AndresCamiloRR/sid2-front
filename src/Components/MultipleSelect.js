import React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { withStyles } from '@mui/styles';
import { Box, Chip } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const CustomOutlinedInput = withStyles((theme) => ({
  root: {
    '& $notchedOutline': {
      borderColor: 'white !important', // Cambia el color del borde a blanco
    },
    '&:hover $notchedOutline': {
      borderColor: 'white !important', // Cambia el color del borde al pasar el mouse
    },
    '&$focused $notchedOutline': {
      borderColor: 'white !important', // Cambia el color del borde cuando está enfocado
    },
  },
  focused: {},
  notchedOutline: {},
}))(OutlinedInput);

function getStyles(value, valueName, theme) {
  return {
    fontWeight:
      valueName.indexOf(value) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const MultipleSelect = ({ label, values, onMultipleChange, selected }) => {
  const theme = useTheme();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    onMultipleChange[1](
      typeof value === 'string' ? value.split(',') : value,
    );

    selected[1]("Multiple");
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 400 }}>
        <InputLabel 
          id="demo-multiple-value-label" 
          sx={{ color: 'white !important' }}
        >
          {label}
        </InputLabel>
        <Select
          labelId="demo-multiple-value-label"
          id="demo-multiple-value"
          multiple
          value={onMultipleChange[0]}
          onChange={handleChange}
          input={<CustomOutlinedInput label={label} sx={{ color: 'white !important' }} />}
          MenuProps={MenuProps}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} sx={{ color: "white" }} />
              ))}
            </Box>
          )}
        >
          {values.map((value) => (
            <MenuItem
              key={value}
              value={value}
              style={getStyles(value, onMultipleChange[0], theme)}
            >
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default MultipleSelect;
