import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { withStyles } from '@mui/styles';
import { Box } from '@mui/material';
import { Chip } from '@mui/material';

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
  const [valueName, setValueName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    onMultipleChange[1](
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    selected[1]("Multiple")
  };

  return (
    <div>
      <FormControl variant="filled" sx={{ m: 1, width: 400 }}>
        <InputLabel 
          id="demo-multiple-value-label" 
        >
          {label}
        </InputLabel>
        <Select
          labelId="demo-multiple-value-label"
          id="demo-multiple-value"
          multiple
          required={true}
          value={onMultipleChange[0]}
          onChange={handleChange}
          input={<CustomOutlinedInput label={label} />} // Usa el componente personalizado de OutlinedInput
          MenuProps={MenuProps}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value.code} label={value.name}/>
              ))}
            </Box>
          )}
        >
          {values.map((value) => (
            <MenuItem
              key={value.code}
              value={value}
              style={getStyles(value, valueName, theme)}
            >
              {value.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default MultipleSelect;
