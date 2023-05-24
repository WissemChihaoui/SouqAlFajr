import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, InputAdornment } from '@mui/material';
import { Icon } from '@iconify/react';

export default function BasicSelect(props) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120,  width:'100%' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{border: 'none'}}>{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          
          placeholder='Hey'
          onChange={handleChange}
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
           
          }}
          
        >
          {props.options.map((option) => (
            <MenuItem key={option.key} value={option.key}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
