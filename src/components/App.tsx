import React, { useState, useEffect } from "react";
import "./styles.scss"
import Chart from "./Chart";
import Atr from "./Atr";
import Std from "./Std";
import FormImg from '../assets/form_img.png'

const App: React.FC = () => {
  //Form hooks
  const [file, sendFile] = useState<any>(undefined)
  const [timeframe, sendTime] = useState<string>('')

  //Component hooks
  const [atrComp, getATR] = useState<any>(undefined)
  const [chartComp, getChart] = useState<any>(undefined)
  const [stdComp, getSTD] = useState<any>(undefined)

  //Error
  const [err, getErr] = useState<string>('')

  //Form pop up hook
  const [popUp, setPopUp] = useState<boolean>(false)

  const onFileUpload = element => sendFile(element.target.files[0])
  const onTimeChange = element => sendTime(element.target.value)

  //Example data Get request on page load
  useEffect(() => {
    fetch("http://127.0.0.1:5000").then(res => (res.json()))
      .then(res => {
        getATR(<Atr ATR={res.ATR} />)
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
    let regex = /\.csv$/i
    if(!regex.exec(file["name"])){
     
      getErr("This is not a supported file type, Only csv files are supported")
      
      return 
    }
    else {

    

    let form = new FormData()
    form.append('file', file)
    form.append('timeframe', timeframe)

    //Fetch post to api and send data to components
    fetch("http://127.0.0.1:5000/calculate", {
      method: "POST",

      body: form
    }).then(res => (res.json()))
      .then(res => {
        //Send data to components
        getATR(<Atr ATR={res.ATR} />)
        getSTD(<Std stds={res.histogram.Percents} />)
        getChart(<Chart returns={res.histogram.Returns} />)
      })
    }


  }
  return (
    <section>
    
      <nav>

        <button onClick={() => setPopUp(!popUp)}>Import</button>

      </nav>
      <p>{err}</p>
      <form className={popUp ? "popUp" : "pop"}>
        <div className="menu">
          <p id="close" onClick={() => setPopUp(!popUp)}>X</p>

          <h1>Import</h1>

          <p id="instructions">
            Hello
        </p>

          <img src={FormImg} id="fileImg" />
          <div className="buttons">

            <input type="file" onChange={onFileUpload} accept=".csv"></input>

            <select onChange={onTimeChange}>

              <option selected >Select a Timeframe</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>

          <span id="import">
            <button type="submit" onClick={onSubmit}>Import</button>
          </span>

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
