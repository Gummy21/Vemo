import React,{ useState }  from "react";
import  "./styles.scss"
import Chart from "./Chart";
import Atr from "./Atr";
import Std from "./Std";

const App: React.FC = () => {
  const [file, sendFile] = useState(undefined)
  const [timeframe, sendTime] = useState('')
  const [atrComp, getATR] = useState<any>("")
  const [chartComp, getChart] = useState<any>("")
  const [stdComp, getSTD] = useState<any>("")

  const onFileUpload = element => sendFile(element.target.files[0])
  const onTimeChange = element => sendTime(element.target.value)
  let arr;
  let check = false;

  const onSubmit = e => {
    
    e.preventDefault()
    let form = new FormData()
    form.append('file',file)
    form.append('timeframe','Daily')
    
    
    fetch("http://127.0.0.1:5000/calculate", {
      method:"POST",
     
      body:form
    }).then(res => (res.json()))
    .then(res => {
      getATR(<Atr ATR={res.ATR}/>)
      getSTD(<Std stds={res.histogram.Percents} />)
      getChart(<Chart returns={res.histogram.Returns} />)
    })
    
  
  }
  return ( 
    <article>
      <nav>
        <button>Import</button>
      </nav>
      
      <form className="popUp">
          <input type="file" onChange={onFileUpload} accept=".csv"></input>
          <select >
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
          <button type="submit" onClick={onSubmit}></button>
        
      </form>

      <div id="histogram">
        {chartComp}
      </div>

      <div id="lineChart">
        {stdComp}
      </div>
      
      <div id="atr">
        {atrComp}
      </div>
      
    </article>
    
  
    );
  };
export default App
