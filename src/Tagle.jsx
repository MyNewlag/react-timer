


export default function Tagle({onClick,isTagle}){

    
    return (

        <div onClick={onClick}>
         <button style={{backgroundColor:isTagle ? "white" : "red" 
            , color: isTagle ? "black": "blue"}}> themes </button>
        </div>
    )
}