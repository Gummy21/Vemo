import React, { useEffect , useState } from "react";
import { Bar } from 'react-chartjs-2';




interface ReturnsProp {
  mean: any,
  stds:any
  
  
}


 


const Std: React.FC<ReturnsProp> = ({mean,stds}) => {

  
  

  const data = {
    labels: [
      "-3: "+ mean["values"][0]+ '%'
      ,'-2: '+ mean["values"][1]+ '%'
      ,'-1: '+ mean["values"][2]+ '%'
      ,'+1: '+ mean["values"][3]+ '%'
      ,'+2: '+ mean["values"][4]+ '%'
      ,'+3: '+ mean["values"][5]+ '%'],
    datasets: [
      {
        label: [''],
        data: mean["counts"],
        backgroundColor: [
          '#a01a58',
          '#723c70',
          '#5c4d7d',
          '#5c4d7d',
          '#723c70',
          '#a01a58',
        ],
        borderWidth: 1,
        datalabels: {
          align:'bottom',
          anchor:'end',
          clamp:true
        }
      } ],
  };
  
  const options = {
    maintainAspectRatio:false,
    responsive:true,
    layout: {
      padding:{
      left:10,
      right:10
      }
      
    },
    plugins: {
      title: {
        display:true,
        text:"Standard Deviations from the mean",
        color:'#011627',
        // position:'bottom',
        font:{
          family: 'Sora',
          size:18,
          weight:600
        }
      },
      subtitle: {
        display:true,
        text:"Mean: "+ mean["mean"][0]+ "   SD: " + mean["mean"][1],
        color:'#011627',
        padding:2,
        font:{
          family: 'Sora',
          size:12,
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
          family: 'Sora',
          weight:'bold'
        },
        padding:4
      },
      legend: {
        display:false,
        labels: {
          color:'#011627',
          font:{
            family: 'Sora',
            size:12,
            weight:600
          } 
        },
        // position:'bottom'
      }
    },
    scales: {
      x: {
        ticks: {
          // maxRotation:0,
          // minRotation:0,
          padding:5,
          color:"#011627",
          font: {
            size: 10,
            weight:'bold'
          }
        },
      },
      y: {
          ticks: {
            display:false
          },
        },
    },
  };






  return(
    <React.Fragment>
        <div className="mean">
          <Bar data={data} options={options} />  
        </div> 
         
        <p>{stds[1]}% of times the returns fall between 1 Standard Deviation from the mean</p>
        <p>{stds[2]}% of times the returns fall between 2 Standard Deviations from the mean</p>
        <p>{stds[3]}% of times the returns fall between 3 Standard Deviations from the mean</p>
      
    </React.Fragment>
    
  );
}

export default Std