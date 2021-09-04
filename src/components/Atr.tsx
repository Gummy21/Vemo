import React, { useEffect , useState } from "react";
import { Line } from 'react-chartjs-2';




interface ReturnsProp {
    ATR: any,
    TimeFrame: any
  
}

const Atr: React.FC<ReturnsProp> = ({ATR,TimeFrame}) => {
  
  const data = {
    labels:ATR.labels,
    datasets: [
      {
        label: 'Average ' + TimeFrame + ' ATR',
        data: ATR.values,
        backgroundColor: [
          '#003049'],
        borderColor: [
          '#003049'],
        borderWidth: 1,
        datalabels: {
          align:'start',
          anchor:'start'
        }
         
      },
    ],
  };
  
  const options = {
    maintainAspectRatio:false,
    responsive:true,
    plugins: {
      datalabels:{
        backgroundColor: function(context) {
          return context.dataset.backgroundColor;
        },
        borderRadius:6,
        color:'white',
        font: {
          family: 'Sora',
          weight:'bold'  
        },
        padding:6,
        formatter: function(value, context) {
          return value + '%';
        }
      },
      legend: {
        labels: {
          color:'#011627',
          padding:20,
          font:{
            family: 'Sora',
            size:16,
            weight:600
          } 
        },
        position:'bottom'
      }
    },
    scales: {
      x: {
        grid: {
          display:false
        },
        ticks: {
          padding:5,
          color:"#011627",
          font: {
            size: 12,
            weight:'bold'
          }
        },
      },
      y: {
          ticks: {
            beginAtZero: true,
            display:false
          },
        },
    },
  };


  return(
    <React.Fragment>
        <Line data={data} options={options} />    
     
    </React.Fragment>
    
  );
}

export default Atr