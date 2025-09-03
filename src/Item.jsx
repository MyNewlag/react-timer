import { useContext } from "react";
import { TestContext } from "./TestContext";


export default function Item({children}){

    const context =useContext(TestContext);
    
    const deleteItem = (value) => {
        context.setTimeArr(
            context.timeArr.filter(t => t !== value)
        );
    };
    return(
        <div style={{backgroundColor:"green"}} onClick={() => deleteItem(children)}>
            {children}
        </div>
    )
}