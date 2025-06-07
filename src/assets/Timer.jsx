
 import { useContext } from "react";

import { TestContext } from "../TestContext";


export default function Timer({sec,min,hour}){
  
  const context =useContext(TestContext);

  
  const saveTime=()=>{
      let newTime=`${hour>9 ? hour: "0"+hour} : ${min>9 ? min : "0"+min} : ${sec>9? sec:"0"+sec}`
      // let newTime=document.querySelector('.timer').innerHTML;
    context.setTimeArr([...context.timeArr,newTime])
    
  }
  
  
  return(
    <div>
        <h2 className='timer' onClick={saveTime}>
          {`${hour>9 ? hour: "0"+hour} : ${min>9 ? min : "0"+min} : ${sec>9? sec:"0"+sec}`}
        </h2>
   </div>
)
}

