import { useContext } from "react";
import Item from "./Item";
import { TestContext } from "./TestContext";


export default function ListTimer(){
    
  const context =useContext(TestContext);
  
    return(
        <div>
            {context.timeArr.map(time=>(
               <Item >
                {time}
               </Item>
            ))}
        
        </div>
    )
}