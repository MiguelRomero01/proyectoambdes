import React, {useState} from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
     return `${value}`;
}

export default function SliderElement({defaultValue, min, max, label, text}) {
     const [x, setx] = useState(defaultValue)
     
     const handleSlider = (event) => {
          setx(event.target.value);
     }

     return(
          <Box sx={{ width: 300 }}>
               <p>{text}</p>
               <Slider
                    aria-label={label}
                    defaultValue={defaultValue}
                    getAriaValueText={valuetext}
                    valueLabelDisplay='auto'
                    step={1}
                    onChange={handleSlider}
                    marks
                    min={min}
                    max={max}
               />
               <p>Valor actual: {x}</p>
          </Box>
     )
}