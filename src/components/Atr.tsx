import React, { useEffect , useState } from "react";
import { Line } from 'react-chartjs-2';




interface ReturnsProp {
    ATR: any
  
}

const Atr: React.FC<ReturnsProp> = ({ATR}) => {
  
  const data = {
    labels:ATR.labels,
    datasets: [
      {
        label: 'Average True Range %',
        data: ATR.values,
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
      y: {
          ticks: {
            beginAtZero: true,
            font: {
              size: 12
            }
          },
        },
      x: {
        ticks: {
           beginAtZero: true,
           font: {
             size: 10
           }
         },
      },
    },
  };


  return(
    <div>
        <Line data={data} options={options} />    
     
    </div>
    
  );
}

export default Atr