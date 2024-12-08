import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrar componentes
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({resultWater, resultEnergy}) => {
  const data = {
    labels: ['Agua', 'Electricidad'], // Etiquetas para los grupos
    datasets: [
      {
        label: 'Tu consumo',
        data: [resultWater, resultEnergy], // Consumo de agua y electricidad
        backgroundColor: '#3b83bd', // Azul para tu consumo
        borderColor: '#3b83bd',
        borderWidth: 1,
      },
      {
        label: 'Consumo promedio',
        data: [80, 70], // Promedio de agua y electricidad
        backgroundColor: '#FFA500', // Amarillo para promedio
        borderColor: '#FFA500',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        stacked: false, // Barras agrupadas
        grid: {
          display: false, // Elimina líneas de la cuadrícula en X
        },
      },
      y: {
        beginAtZero: true, // Iniciar en 0
        ticks: {
          stepSize: 10, // Incremento entre marcas
        },
      },
    },
    plugins: {
      legend: {
        position: 'top', // Leyenda en la parte superior
      },
    },
    maintainAspectRatio: false, // Permitir ajustar la altura manualmente
  };

  return (
    <div style={{ width: '600px', height: '500px', margin: '0 auto'}}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
