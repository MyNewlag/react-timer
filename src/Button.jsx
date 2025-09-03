import React from 'react'

export default function Button({name,onClick,isTaggle}) {
  
  return (
<button onClick={onClick} style={{backgroundColor:isTaggle ? "white" : "red" 
            , color: isTaggle ? "black": "blue"}}>
    {name}
</button>
  )
}
