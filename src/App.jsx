import React, { useEffect, useState } from 'react';
import './App.css';
import Timer from './assets/Timer';

import Start from './Start';
import Stop from './Stop';
import Restart from './assets/Restart';
import Tagle from './assets/Tagle';
import { TestContext } from './TestContext';
import ListTimer from './ListTimer';

function App() {

  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  const [isRunning, setIsRunning]=useState(false)
  const [isTagle, setIsTagle]=useState(false)
  const [timeArr, setTimeArr]=useState([])

  
  useEffect(()=>{
    let interval;
    if(isRunning){              
      interval= setInterval(() => {
        setSec(provSec=>provSec+1)
      }, 10)
    }else{
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  },[isRunning])


  useEffect(()=>{
    if(sec>=60){
      setSec(0)
      setMin(proveMin=>proveMin+1)
    }
  },[sec])


  useEffect(()=>{
    if(min>=60){
      setMin(0)
      setHour(proveHour=>proveHour+1)
    }
  },[min])

 
  const togle=()=>setIsTagle(prov=>!prov)
  const start=()=> setIsRunning(true)
  const stop=()=> setIsRunning(false)

  const restart=(()=>{
      setIsRunning(false)
      setSec(0)
      setMin(0)
      setHour(0)
    })

  

    return (

      <TestContext.Provider value={{timeArr:timeArr,setTimeArr:setTimeArr}} >

    <div className='main' style={{backgroundColor:isTagle ? "red" : "white"}} >
      
        <Timer  sec={sec} min={min} hour={hour}  />
        <Start onClick={start} />
        <Stop onClick={stop} />
        <Restart onClick={restart} />
        <Tagle onClick={togle} isTagle={isTagle} />

        <ListTimer />
       
    </div>

      </TestContext.Provider>

  ); 
}

export default App;

