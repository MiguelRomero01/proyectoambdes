import React, { useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function ComboBoxElement({id, onChange, mainLabel, Element1, Element2, Element3, Element4}){
     const [valueBox, setValueBox] = useState(0)

     const handleChange = (event) => {
          const newValue = event.target.value
          setValueBox(newValue);
          onChange(id, newValue);
     };

     return(
          <Box sx={{ minWidth: 120 }}>
               <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">{mainLabel}</InputLabel>
                    <Select
                         labelId="demo-simple-select-label"
                         id="demo-simple-select"
                         defaultValue
                         value={valueBox}
                         onChange={handleChange}
                         >
                              <MenuItem value={10}>{Element1}</MenuItem>
                              <MenuItem value={20}>{Element2}</MenuItem>
                              <MenuItem value={30}>{Element3}</MenuItem>
                              <MenuItem value={50}>{Element4}</MenuItem>
                         </Select>
               </FormControl>
               <p>{valueBox}</p>
          </Box>
     )
}