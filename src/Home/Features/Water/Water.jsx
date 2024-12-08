import React, { useEffect, useState } from "react";
import water_styles from "./Water.module.css";

import Box from "@mui/material/Box";
import SliderElement from "../../components/Elements/Slider";
import ComboBoxElement from "../../components/Elements/ComboBox";
import { Calculate_FootSprint } from "../Cal_FootSprint";

export default function WaterScreen({result, setResult}) {

     const [sliders, setSliders] = useState({});
     const [comboBoxes, setComboBoxes] = useState({});

     const [message, setMessage] = useState("");

     const handleSliderChange = (id, value) => {
     setSliders((prev) => ({ ...prev, [id]: value }));
     };

     const handleComboBoxChange = (id, value) => {
     setComboBoxes((prev) => ({...prev, [id]: value}))
     }

     /*calculate function*/
     const handleCalculate = () => {
          const merged = {...sliders, ...comboBoxes}
          const finalResult = Calculate_FootSprint(merged);
          setResult(finalResult);
     }

     //It's executed when result changes
     useEffect(() => { 
          if (result >= 32 && result <= 50) return setMessage("Excelente, el nivel de agua está dentro del rango ideal. Continúa monitoreando para mantenerlo así.");
          if (result >= 51 && result <= 100) return setMessage("Atención: el nivel de agua está aumentando. Considera ajustar las entradas o salidas para evitar desbordamientos.");
          if (result >= 101 && result <= 150) return setMessage("Precaución: el nivel de agua está cerca del límite crítico. Revisa el sistema para evitar posibles problemas.");
          if (result >= 151) return setMessage("Alerta: el nivel de agua es demasiado alto. Reduce el flujo de entrada inmediatamente para prevenir sobrecargas o daños.");

          return setMessage("No hay suficiente informacion para recomendaciones");
     }, [result]);        

     return (
          <div className={water_styles.container}>
               <Box sx={{ width: 300 }}>
                    {/* Aquí van los sliders y combo boxes */}
                    <SliderElement
                         text={"¿Cuántas duchas tomas al día?"}
                         id={1}
                         defaultValue={5}
                         max={10}
                         min={0}
                         onChange={handleSliderChange}
                    />
                    <SliderElement
                         text={"¿Cuánto dura una ducha promedio (en minutos)?"}
                         id={2}
                         defaultValue={10}
                         max={20}
                         min={1}
                         onChange={handleSliderChange}
                    />
                    <SliderElement
                         text={"¿Cuánto tiempo dejas el grifo abierto diariamente (en minutos)?"}
                         id={3}
                         defaultValue={30}
                         max={60}
                         min={1}
                         onChange={handleSliderChange}
                    />
                    <ComboBoxElement
                         text={"¿Cuántas veces lavas ropa a la semana?"}
                         id={4}
                         onChange={handleComboBoxChange}
                         Element1={"1 vez"}
                         Element2={"2 veces"}
                         Element3={"3 o más veces"}
                    />
                    <ComboBoxElement
                         text={"¿Si tienes coche, cuántas veces lo lavas al mes?"}
                         id={5}
                         onChange={handleComboBoxChange}
                         Element1={"1-2 veces"}
                         Element2={"3-5 veces"}
                         Element3={"+5 veces"}
                    />
                    <ComboBoxElement
                         text={"¿Cómo describirías tu consumo de carne?"}
                         id={6}
                         onChange={handleComboBoxChange}
                         Element1={"Bajo"}
                         Element2={"Moderado"}
                         Element3={"Excesivo"}
                    />
               </Box>

               {/* Aquí el contenedor del botón y el texto */}
               <div className={water_styles.buttonContainer}>
                    <button onClick={handleCalculate} className={water_styles.buttonCalculate}>Calcular</button>
                    <p className={water_styles.message}>{message}</p>
               </div>
          </div>
     );
}
