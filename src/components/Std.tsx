import React, { useEffect , useState } from "react";
import { Bar } from 'react-chartjs-2';




interface ReturnsProp {
  stds: any
  
}

 


const Std: React.FC<ReturnsProp> = ({stds}) => {

  return(
    <div>
      <h1>Standard Deviations from the mean</h1>       
       <ul>
        <li>{stds[1]}</li>
        <li>{stds[2]}</li>   
        <li>{stds[3]}</li> 
        
      </ul>   
    </div>
    
  );
}

export default Std