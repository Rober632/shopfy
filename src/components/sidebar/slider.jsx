import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider({value , setValue}) {

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box >
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"  //on
        getAriaValueText={valuetext}
        max = {1000}
        
      />
    </Box>
    
  );
}