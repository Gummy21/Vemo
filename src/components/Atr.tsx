import React, { useEffect , useState } from "react";
import { Line } from 'react-chartjs-2';




interface ReturnsProp {
    ATR: any
  
}

const Atr: React.FC<ReturnsProp> = ({ATR}) => {
  
  const data = {
    labels: [
      Object.keys(ATR)[0],
      Object.keys(ATR)[1],
      Object.keys(ATR)[2],
      Object.keys(ATR)[3],
      Object.keys(ATR)[4]
    ],
    datasets: [
      {
        label: 'Average True Range',
        data: ATR,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)'],
        borderColor: [
          'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    responsive:true,
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
        <Line data={data} options={options} />    
     
    </div>
    
  );
}

export default Atr