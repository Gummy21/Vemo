import React, { useEffect , useState } from "react";
import { Bar } from 'react-chartjs-2';




interface ReturnsProp {
  returns: any
  
}

 


const Chart: React.FC<ReturnsProp> = ({returns}) => {
  const data = {
    labels: ['Less than 2%', '1.5% to 1%', '1% to 0.5%', '0.5% to 0%', '0% to 0.5%', '0.5% to 1%', '1% to 1.5%', 'More than 2%'],
    datasets: [
      {
        label: 'Distribution of Returns',
        data: returns,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return(
    <div>       
      <Bar data={data} options={options} />
      </div>
    
  );
}

export default Chart