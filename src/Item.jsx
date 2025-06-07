import { useContext } from "react";
import { TestContext } from "./TestContext";


export default function Item(props){

    const context =useContext(TestContext);
    
    const deleteItem =(e)=>{   
        context.setTimeArr(context.timeArr.filter(t=>t != e.target.innerText))
}

    return(
        <div style={{backgroundColor:"green"}} onClick={deleteItem}>
            {props.children}
        </div>
    )
}