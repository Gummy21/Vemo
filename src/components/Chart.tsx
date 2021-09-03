import React, { useEffect , useState } from "react";
import { Bar,defaults } from 'react-chartjs-2';
import { Chart } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ChartDataLabels)
defaults.font.family = "'Sora'";

interface ReturnsProp {
  returns: any,
  TimeFrame:string
  
}

 


const Histogram: React.FC<ReturnsProp> = ({returns,TimeFrame}) => {
  
  const data = {
    labels: ['Less than 1.5%', '-1.5% to -1%', '-1% to -0.5%', '-0.5% to 0%', '0% to 0.5%', '0.5% to 1%', '1% to 1.5%', 'More than 1.5%'],
    datasets: [
      {
        label: TimeFrame + ' Returns Range',
        data: returns,
        backgroundColor: [
          '#f9c74f',
          '#90be6d',
          '#43aa8b',
          '#577590',
          '#4d908e',
          '#43aa8b',
          '#90be6d',
          '#f9c74f',
        ],
        borderColor: [
          '#f9c74f',
          '#90be6d',
          '#43aa8b',
          '#577590',
          '#4d908e',
          '#43aa8b',
          '#90be6d',
          '#f9c74f',
        ],
        borderWidth: 1,
        datalabels: {
          align:'end',
          anchor:'end'
        }
      },
    ],
  };
  
  const options = {
    maintainAspectRatio:false,
    responsive:true,
    layout: {
      padding:0
    },
    plugins: {
      title: {
        display:true,
        text:TimeFrame + " Returns Range",
        color:'#011627',
        padding:10,
        font:{
          family: 'Sora',
          size:18,
          weight:600
        }
      },
      datalabels: {
        backgroundColor: function(context) {
          return context.dataset.backgroundColor;
        },
        borderRadius:4,
        color:'white',
        font: {
          weight:'bold'
        },
        padding:4
      },
      legend: {
        display:false
      }
    },
    scales: {
      x: {
        grid: {
          display:false,

        },
        ticks: {
          maxRotation:70,
          minRotation:70,
          color:"#011627",
          padding:5,
          font: {
            size: 14
          }
        },
      },
      y: {
        grid: {},
          ticks: {
            beginAtZero: true,
            display:false
          },
        },
    },
  };

  return(
    <React.Fragment>       
      <Bar data={data} options={options} />
    </React.Fragment>
    
  );
}

export default Histogram