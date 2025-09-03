
 import { useContext, useEffect } from "react";

import { TestContext } from "./TestContext";


export default function Timer({sec,min,hour , setSec , setMin , setHour}){
  
  const context =useContext(TestContext);

  
  const saveTime=()=>{
      let newTime=`${hour>9 ? hour: "0"+hour} : ${min>9 ? min : "0"+min} : ${sec>9? sec:"0"+sec}`
      // let newTime=document.querySelector('.timer').innerHTML;
    context.setTimeArr([...context.timeArr,newTime])
  }

  useEffect(()=>{
    if (sec>=60) {
      setSec(0)
      setMin(prov=>prov+1)
    }
  },[sec])
  
  useEffect(()=>{
    if (min>=60) {
      setMin(0)
      setHour(prov=>prov+1)
    }
  },[min])
  
  
  return(

      <h2 className='timer' onClick={saveTime}>
        {`${hour > 9 ? hour : "0"+hour} : ${min > 9 ? min : "0"+min} : ${sec>9 ? sec : "0"+sec}`}
      </h2>

)
}

