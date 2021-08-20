import React, { useEffect , useState } from "react";
import { Bar } from 'react-chartjs-2';




interface ReturnsProp {
  stds: any
  
}

 


const Std: React.FC<ReturnsProp> = ({stds}) => {

  return(
    <div>
      <h1>Standard Deviations from the mean</h1>       
        <p>{stds[1]}% of times the returns fall between 1 Standard Deviation from the mean</p>
        <p>{stds[2]}% of times the returns fall between 2 Standard Deviations from the mean</p>
        <p>{stds[3]}% of times the returns fall between 3 Standard Deviations from the mean</p>
      
    </div>
    
  );
}

export default Std