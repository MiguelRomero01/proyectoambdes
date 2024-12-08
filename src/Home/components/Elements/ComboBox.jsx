import React, { useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Co2Icon from '@mui/icons-material/Co2';
import RecyclingIcon from '@mui/icons-material/Recycling';
import Brightness6Icon from '@mui/icons-material/Brightness6';

export default function ComboBoxElement({id, onChange, text, Element1, Element2, Element3}){
     const [valueBox, setValueBox] = useState('')

     const handleChange = (event) => {
          const newValue = event.target.value
          setValueBox(newValue);
          onChange(id, newValue);
     };

     return(
          <Box sx={{ minWidth: 120 }}>
               <p>{text}</p>
               <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Escoge una opción</InputLabel>
                    <Select
                         labelId="demo-simple-select-label"
                         id="demo-simple-select"
                         
                         value={valueBox}
                         onChange={handleChange}
                         >
                              <MenuItem value={10}>{Element1} ( <RecyclingIcon sx={{fontSize:15}}/> )</MenuItem>
                              <MenuItem value={20}>{Element2 } (<Brightness6Icon sx={{fontSize:15}}/>) </MenuItem>
                              <MenuItem value={30}>{Element3 } (<Co2Icon />)</MenuItem>
                         </Select>
               </FormControl>
          </Box>
     )
}