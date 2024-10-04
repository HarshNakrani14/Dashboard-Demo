import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const salesData = {
  labels: ['July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Sales Overview',
      data: [4000, 5500, 6500, 5900, 8000, 8100, 5600, 5500, 4000, 6000, 7500, 8500],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
      tension: 0.1, // Smooth curve
    },
  ],
};

const categoryData = {
  labels: ['Electronics', 'Clothing', 'Home & Garden', 'Books', 'Sports & Outdoors'],
  datasets: [
    {
      label: 'Category Distribution',
      data: [31, 22, 19, 14, 13],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)',
      ],
      borderColor: [
        'rgba(255, 255, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const lineChartOptions = {
  maintainAspectRatio: false,
  scales: {
    x: {
      ticks: {
        color: '#ffffff', // X-axis text color
      },
    },
    y: {
      ticks: {
        color: '#ffffff', // Y-axis text color
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: '#ffffff', // Legend text color
      },
    },
    title: {
      display: true,
      text: 'Sales Overview',
      color: '#ffffff', // Title text color
      font: {
        size: 20, // Title text font size
        weight: 'bold', // Title font weight
      }
    },
  },
};

const pieChartOptions = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: '#ffffff', // Legend text color
      },
    },
    title: {
      display: true,
      text: 'Category Distribution',
      color: '#ffffff', // Title text color
      font: {
        size: 20, // Title text font size
        weight: 'bold', // Title font weight
      }
    },
  },
};

function SalesChart() {
  return (
    <div className="p-4 flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center h-full">
          {/* <h2 className="text-2xl font-bold text-white mb-4">Sales Overview</h2> */}
          <div className="bg-gray-800 p-4 shadow rounded-lg h-96 w-full border-2 border-gray-700    ">
            <Line data={salesData} options={lineChartOptions} />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center h-full">
          {/* <h2 className="text-2xl font-bold text-white mb-4">Category Distribution</h2> */}
          <div className="bg-gray-800 p-4 shadow rounded-lg h-96 w-full border-2 border-gray-700">
            <Pie data={categoryData} options={pieChartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesChart;
