import React, { useState, useEffect } from "react";
import energy_styles from "./Energy.module.css";

import Box from "@mui/material/Box";

import { Calculate_FootSprint } from "../Cal_FootSprint";
import SliderElement from "../../components/Elements/Slider";
import ComboBoxElement from "../../components/Elements/ComboBox";

export default function EnergyScreen({result, setResult}) {
  const [sliders, setSliders] = useState({});
  const [comboBoxes, setComboBoxes] = useState({});

  const [message, setMessage] = useState("");

  /*calculate function*/
  const handleCalculate = () => {
    const merged = {...sliders, ...comboBoxes}
    const finalResult = Calculate_FootSprint(merged);
    setResult(finalResult);
  }

  useEffect(() => {
    if (result >= 32 && result <= 50) return setMessage("Buen trabajo, el nivel de electricidad es adecuado y dentro del rango recomendado. Sigue monitoreándolo.");
    if (result >= 51 && result <= 100) return setMessage("Atención: el nivel de electricidad está subiendo. Considera realizar ajustes para mantenerlo bajo control.");
    if (result >= 101 && result <= 124) return setMessage("Precaución: el nivel de electricidad está cerca de un rango crítico. Realiza una revisión inmediata.");
    if (result >= 125) return setMessage("Alerta: el nivel de electricidad es demasiado alto. Reduce el consumo o ajusta el sistema para evitar riesgos.");
  
    return setMessage("No hay suficiente informacion para recomendaciones");
  }, [result]);
  
  

  const handleSliderChange = (id, value) => {
    setSliders((prev) => ({ ...prev, [id]: value }));
  };

  const handleComboBoxChange = (id, value) => {
    setComboBoxes((prev) => ({...prev, [id]: value}))
  }

  return (
    <div className={energy_styles.container}>
      <div className={energy_styles['left-container']}>
        <Box sx={{ width: 300 , margin: '0 auto' }}>
          {/* Pregunta 1: ¿Cuántas horas al día tienes luces encendidas? */}
          <SliderElement
            text={"¿Cuántas horas al día tienes luces encendidas?"}
            defaultValue={7}
            max={15}
            min={1}
            id={1}
            onChange={handleSliderChange}
          />
  
          {/* Pregunta 2: ¿Apagas dispositivos cuando no los usas? */}
          <ComboBoxElement
            text={"¿Apagas dispositivos cuando no los usas?"}
            id={2}
            onChange={handleComboBoxChange}
            Element1={"Si"}
            Element2={"Aveces"}
            Element3={"No"}
          />
  
          {/* Pregunta 3: ¿Cuántas veces usas electrodomésticos a la semana? */}
          <SliderElement
            text={"¿Cuántas veces usas electrodomésticos a la semana?"}
            id={3}
            defaultValue={10}
            max={20}
            min={1}
            onChange={handleSliderChange}
          />
  
          {/* Pregunta 4: ¿Qué tipo de bombillas usas? */}
          <ComboBoxElement
            text={"¿Qué tipo de bombillas usas?"}
            id={4}
            onChange={handleComboBoxChange}
            Element1={"LED"}
            Element2={"fluorecentes compactas"}
            Element3={"Incandecentes"}
          />
  
          {/* Pregunta 5: ¿Usas energías renovables? */}
          <ComboBoxElement
            text={"¿Usas energías renovables?"}
            id={5}
            onChange={handleComboBoxChange}
            Element1={"Si"}
            Element2={"Aveces"}
            Element3={"No"}
          />
        </Box>
      </div>
  
      <div className={energy_styles.buttonContainer}>
        <button onClick={handleCalculate} className={energy_styles.buttonCalculate}>
          Calcular
        </button>
        <p className={energy_styles.message}>{message}</p>
      </div>
    </div>
  );
  
}
