import React from "react";
import energy_styles from './Energy.module.css'

import Box from '@mui/material/Box';
import SliderElement from "../Elements/Slider";
import ComboBoxElement from "../Elements/ComboBox";


export default function EnergyScreen() {
     return(
          <div className={energy_styles.container}>
               <h1>Energy</h1>
               <Box sx={{ width: 300 }}>
               <SliderElement 
                    text={"hola como estas?"}
                    defaultValue={5}
                    label={"prueba"}
                    max={10}
                    min={1}
               />

               <ComboBoxElement
                    mainLabel={"prueba combo"}
                    Element1={"e1"}
                    Element2={"e2"}
                    Element3={"e3"}
                    Element4={"e4"}
               />
               </Box>
          </div>
     )
}