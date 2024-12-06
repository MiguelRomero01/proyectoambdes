import React, { useState } from "react";
import energy_styles from "./Energy.module.css";

import Box from "@mui/material/Box";
import SliderElement from "../../components/Elements/Slider";
import ComboBoxElement from "../../components/Elements/ComboBox";

export default function EnergyScreen() {
  const [sliders, setSliders] = useState({});
  const [comboBoxes, setComboBoxes] = useState({});

  const handleSliderChange = (id, value) => {
    setSliders((prev) => ({ ...prev, [id]: value }));
  };

  const handleComboBoxChange = (id, value) => {
    setComboBoxes((prev) => ({...prev, [id]: value}))
  }

  return (
    <div className={energy_styles.container}>
      <h1>Energy</h1>
      <Box sx={{ width: 300 }}>
        {/* Slider 1 */}
        <SliderElement
          text={"¿Cómo estás?"}
          defaultValue={5}
          label={"Prueba 1"}
          max={10}
          min={1}
          id={1}
          onChange={handleSliderChange}
        />
        <p>Valor del Slider 1: {sliders[1] || 0}</p>

        {/* Slider 2 */}
        <SliderElement
          text={"¿Qué tal?"}
          defaultValue={3}
          label={"Prueba 2"}
          max={20}
          min={5}
          id={2}
          onChange={handleSliderChange}
        />
        <p>Valor del Slider 2: {sliders[2] || 0}</p>

        {/* Combo Box 1 */}
        <ComboBoxElement
          id={1}
          onChange={handleComboBoxChange}
          mainLabel={"prueba combo"}
          Element1={"e1"}
          Element2={"e2"}
          Element3={"e3"}
          Element4={"e4"}
        />
        <p>Valor del cbox 1: {comboBoxes[1] || 0}</p>

        {/* Combo Box 2*/}
        <ComboBoxElement
          id={2}
          onChange={handleComboBoxChange}
          mainLabel={"prueba combo"}
          Element1={"e1"}
          Element2={"e2"}
          Element3={"e3"}
          Element4={"e4"}
        />
        <p>Valor del cbox 2: {comboBoxes[2] || 0}</p>
      </Box>
    </div>
  );
}
