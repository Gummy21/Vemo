import React,{ useState, useEffect }  from "react";
import  "./styles.scss"
import Chart from "./Chart";
import Atr from "./Atr";
import Std from "./Std";

const App: React.FC = () => {
  //Form hooks
  const [file, sendFile] = useState<any>(undefined)
  const [timeframe, sendTime] = useState<string>('')

  //Component hooks
  const [atrComp, getATR] = useState<any>(undefined)
  const [chartComp, getChart] = useState<any>(undefined)
  const [stdComp, getSTD] = useState<any>(undefined)

  //Form pop up hook
  const [popUp, setPopUp] = useState<boolean>(false)
  
  const onFileUpload = element => sendFile(element.target.files[0])
  const onTimeChange = element => sendTime(element.target.value)
  
  //Example data Get request on page load
  useEffect(() => {
    fetch("http://127.0.0.1:5000").then(res => (res.json()))
    .then(res => {
      getATR(<Atr ATR={res.ATR}/>)
      getSTD(<Std stds={res.histogram.Percents} />)
      getChart(<Chart returns={res.histogram.Returns} />)
    })
  }, []);

  // Post request on submit
  const onSubmit = e => {

    //Prevent page reload 
    e.preventDefault()

    //Close form popup menu
    setPopUp(!popUp)

    //Add loading animation?

    //Turn data into supported format
    let form = new FormData()
    form.append('file',file)
    form.append('timeframe',timeframe)
    
    //Fetch post to api and send data to components
    fetch("http://127.0.0.1:5000/calculate", {
      method:"POST",
     
      body:form
    }).then(res => (res.json()))
    .then(res => {
      //Send data to components
      getATR(<Atr ATR={res.ATR}/>)
      getSTD(<Std stds={res.histogram.Percents} />)
      getChart(<Chart returns={res.histogram.Returns} />)
    })
    
  
  }
  return ( 
    <section>
      
      <nav>
        <button onClick={()=>setPopUp(!popUp)}>Import</button>
      </nav>
      
      <form className={popUp ? "popUp":"pop"}>
        <div className="menu">
          <p onClick={()=>setPopUp(!popUp)}>X</p>
          <input type="file" onChange={onFileUpload} accept=".csv"></input>
          <select onChange={onTimeChange}>
            <option selected >Select a Timeframe</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
          <button type="submit" onClick={onSubmit}></button>
        </div>
      </form>

      <article className="comps">
        <div id="lineChart">
          {atrComp}
        </div>
        
        <div id="stds">
          {stdComp}
        </div>

        <div id="histogram">
          {chartComp}
        </div>
      </article>
      
      
      
      
    </section>
    
  
    );
  };
export default App
