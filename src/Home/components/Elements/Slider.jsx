import React from "react";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}`;
}

export default function SliderElement({ id, onChange, defaultValue, min, max, label, text }) {
  const handleChange = (event, value) => {
    onChange(id, value);
  };

  return (
    <Box sx={{ width: 300 }}>
      <p>{text}</p>
      <Slider
        aria-label={label}
        defaultValue={defaultValue}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={1}
        onChange={handleChange}
        marks
        min={min}
        max={max}
      />
    </Box>
  );
}
