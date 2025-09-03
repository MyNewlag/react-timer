import React, { useEffect, useState } from 'react';
import './App.css';
import Timer from './Timer';


import { TestContext } from './TestContext';
import ListTimer from './ListTimer';
import Button from './button';

function App() {

  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  const [isRunning, setIsRunning]=useState(false)
  const [isTaggle, setIsTaggle]=useState(false)
  const [timeArr, setTimeArr]=useState([])



const Start =()=>{
  setIsRunning(true)
}

const Stop =()=>{
  setIsRunning(false)
}

const Restart =()=>{
  setIsRunning(false)
  setHour(0)
  setMin(0)
  setSec(0)
}

const setTheme =()=>{
  setIsTaggle(isTaggle=>!isTaggle)
}


useEffect(()=>{
  let interval;
  if (isRunning) {
   interval= setInterval(() => {
      setSec(sec=>sec+1)
    }, 1000);
  }else{
      clearInterval(interval)
    }
    return()=>clearInterval(interval)
},[isRunning])



return(
<TestContext.Provider  value={{timeArr:timeArr,setTimeArr:setTimeArr}}>
    <div className='main' style={{backgroundColor:isTaggle ? "red" : "white"}}>
      <Timer sec={sec} min={min} hour={hour} setSec={setSec} setMin={setMin} setHour={setHour}/>
      <Button name='start' onClick={Start} isTaggle={isTaggle}/>
      <Button name='stop'  onClick={Stop} isTaggle={isTaggle}/>
      <Button name='restart' onClick={Restart} isTaggle={isTaggle}/>
      <Button name='set Theme' onClick={setTheme} isTaggle={isTaggle}/>
      <ListTimer/>
  </div>
</TestContext.Provider>
)
}
export default App;

