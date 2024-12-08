import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registrar los elementos de Chart.js que usaremos
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({resultEnergy, resultWater}) => {
     const AllConsume = resultEnergy + resultWater;

     // Definir los datos del gráfico
     const data = {
     labels: ['Consumo Total promedio', 'Tu Consumo Total'], // Las etiquetas de cada sección del pie
     datasets: [
          {
          data: [150, AllConsume], // Los valores para cada sección
          backgroundColor: ['#FFA500', '#3b83bd'], // Los colores para cada sección
          hoverBackgroundColor: ['#FFA500', '#3b83bd'], // Colores cuando se pasa el mouse por encima
          },
     ],
     };

     return (
          <div style={{ width: '600px', height: '500px', margin: '0 auto', marginRight:'220px'}}>
               <Pie data={data} />
          </div>
     );
};

export default PieChart;
