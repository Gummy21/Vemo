import React, { useState, useEffect } from "react";
import "./styles.scss"
import Histogram from "./Chart";
import Atr from "./Atr";
import Std from "./Std";
import FormImg from '../assets/form_img.png'


const App: React.FC = () => {
  //Form hooks
  const [file, sendFile] = useState<any>(undefined)
  const [timeframe, sendTime] = useState<string>('')

  //Form pop up hook
  const [popUp, setPopUp] = useState<boolean>(false)

  //Component hooks
  const [atrComp, getATR] = useState<any>(undefined)
  const [chartComp, getChart] = useState<any>(undefined)
  const [stdComp, getSTD] = useState<any>(undefined)

  //Error
  const [err, getErr] = useState<string>('')

  //Mobile nav hook
  const [mobileHisto, onMobileHisto] = useState<boolean>(true)
  const [mobileAtr, onMobileAtr] = useState<boolean>(false)
  const changeMobileChart = () => {
    onMobileAtr(!mobileAtr), 
    onMobileHisto(!mobileHisto)
  }


  const onFileUpload = element => sendFile(element.target.files[0])
  const onTimeChange = element => sendTime(element.target.value)

  //Example data Get request on page load
  useEffect(() => {
    fetch(" https://volme.probacks.xyz").then(res => (res.json()))
      .then(res => {
        getATR(<Atr ATR={res.ATR} TimeFrame={"Daily"}/>)
        getSTD(<Std stds={res.histogram.Percents} mean={res.histogram.MeanReturns} />)
        getChart(<Histogram returns={res.histogram.Returns} TimeFrame={"Daily"} />)
        
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
    fetch("https://volme.probacks.xyz/calculate", {
      method: "POST",

      body: form
    }).then(res => (res.json()))
      .then(res => {
        //Send data to components
        getATR(<Atr ATR={res.ATR} TimeFrame={timeframe}/>)
        getSTD(<Std stds={res.histogram.Percents} mean={res.histogram.MeanReturns}/>)
        getChart(<Histogram returns={res.histogram.Returns} TimeFrame={timeframe} />)
      })
    }


  }
  return (
    <React.Fragment>
      <nav>
        <button onClick={() => setPopUp(!popUp)}>Import</button>
      </nav>

      <header> 

        <button id="returnsBtn" className={mobileHisto ? "btnDisabled":'' } disabled={mobileHisto} onClick={() => changeMobileChart()}>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-bar" className="svg-inline--fa fa-chart-bar fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path>
          </svg>
          <p>Returns</p>
        </button>

        <button disabled={mobileAtr} className={mobileAtr ? "btnDisabled":'' }  onClick={() => changeMobileChart()}>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-line" className="svg-inline--fa fa-chart-line fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"></path>
          </svg>
          <p>ATR</p>
        </button>
     
      </header>
      <form className={popUp ? "popUp" : "pop"}>
        <div className="menu">
          <span>
            <p id="close" onClick={() => setPopUp(!popUp)}>X</p>
            <h1>Import</h1>
          </span>
  
          <small id="err">{err}</small>

          <img src={FormImg} id="fileImg" />
          <small id="instructions">
            Data headers should be named Date, Open, High, Low and Close.
          </small>

          <div className="buttons">

            <input type="file" onChange={onFileUpload} accept=".csv"></input>

            <select onChange={onTimeChange}>

              <option selected >Select a Timeframe</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>
          <small>Only CSV files are supported</small>
          <span id="import">
            <button type="submit" onClick={onSubmit}>Import</button>
          </span>

        </div>


      </form>

      <article className="comps">
        <div className={mobileHisto ? 'mobileTrue' : 'mobileFalse'} id="returns">
        <div id="histogram">
            {chartComp}
          </div>
          <div id="stds">
            {stdComp}
          </div>
        </div>
        
        <span  className={mobileAtr ? 'mobileTrue' : 'mobileFalse'}>
        <div id="lineChart">
          {atrComp}
        </div>  
        </span>
        

      </article>




    </React.Fragment>


  );
};
export default App
