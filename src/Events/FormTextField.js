import TextField from '@mui/material/TextField';
import { withStyles } from '@mui/styles';
import React, { useRef, useEffect } from 'react';

const StyledTextField = withStyles((theme) => ({
  root: {
    '& label': {
      color: 'white',
    },
    '& .MuiInputBase-input': {
      color: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
}))(TextField);

const FormTextField = ({ onFieldChange, label, value, selected }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (selected[0] === label) {
      inputRef.current.focus();
    }
  }, [selected, label]); // Asegúrate de que se ejecute cuando "selected" cambie

  const handleChange = (event) => {
    selected[1](label);
    onFieldChange(event.target.value);
  };

  return (
    <StyledTextField
      inputRef={inputRef}
      label={label}
      value={value}
      InputLabelProps={{
        style: { color: 'white' },
      }}
      inputProps={{
        style: { color: 'white' },
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white',
          },
        },
      }}
      onChange={handleChange}
    />
  );
};

export default FormTextField;
