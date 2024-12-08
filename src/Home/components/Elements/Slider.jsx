import React from "react";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import ForestIcon from '@mui/icons-material/Forest';
import ApartmentIcon from '@mui/icons-material/Apartment';

function valuetext(value) {
  return `${value}`;
}

export default function SliderElement({ id, onChange, defaultValue, min, max, text }) {

  const marks = [
    {
      value: min,
      label: <ForestIcon/>,
    },
    {
      value: max,
      label: <ApartmentIcon/>,
    },
  ];

  const handleChange = (event, value) => {
    onChange(id, value);
  };

  return (
    <Box sx={{ width: 300,}}>
      <p>{text}</p>
      <Slider
        aria-label="Always visible"
        valueLabelDisplay="on"
        defaultValue={defaultValue}
        getAriaValueText={valuetext}
        step={1}
        onChange={handleChange}
        marks = {marks}
        min={min}
        max={max}
        sx={{ color: 'greenyellow', marginTop:2}}
      />
    </Box>
  );
}
