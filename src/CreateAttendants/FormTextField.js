import TextField from '@mui/material/TextField';
import { withStyles } from '@mui/styles';
import React, { useRef, useEffect } from 'react';


const FormTextField = ({ onFieldChange, label, value, selected, width, readOnly, onBlur}) => {

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
    <TextField
      onBlur = {onBlur}
      inputRef={inputRef}
      label={label}
      value={value}
      required={true}
      variant='standard'
      multiline
      onChange={handleChange}
      sx={{width:width}}
      inputProps={{
        readOnly: readOnly,
        disabled: readOnly,
      }}
    />
  );
};

export default FormTextField;
