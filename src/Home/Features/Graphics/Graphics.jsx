import React from "react";
import BarChart from "./Components/BarChart";
import PieGraph from "./Components/PieChart";
export default function Graphics({resultWater, resultEnergy, x}){


  return (
    x===false? 
      <div style={{textAlign:'center'}}>
        <h2>Gráfica de Barras</h2>
        <p>Aquí ves tu consumo de agua y energia frente al consumo promedio de las personas</p>
        <BarChart resultEnergy={resultEnergy} resultWater={resultWater}/>

        <h2>Grafica de Pie</h2>
        <p>Aquí ves tu consumo total de agua y energia frente al consumo total de la personas</p>
        <PieGraph resultEnergy={resultEnergy} resultWater={resultWater}/>
      </div>
      :
      <p>Por favor llena la seccion de "Tu Huella" para poderte mostrar las Gráficas</p>
  );
}