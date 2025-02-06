

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields(props) {
    const {label, name, onChange, value, sx} = props;
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '50%', borderBottom: 'none', border: '1px solid',borderRadius: '5px'},
      '& .MuiInputBase-root.MuiFilledInput-root::before': {
          borderBottom: '0',
        },
        '& .MuiInputBase-root.MuiFilledInput-root::after': {
          borderBottom: '0',
        },
        width: '100%',
     }}
      noValidate
      autoComplete="off"
    >
      <TextField  
        className='textfield-content' 
        id="filled-basic" 
        label={label} 
        variant="filled" 
        onChange={onChange} 
        name={name} 
        value={value} 
        sx={sx} 
      />
    </Box>
  );
}
