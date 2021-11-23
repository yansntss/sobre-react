import React, { useState } from "react";

function Ex_useState() {
  //useState
  const [texto, setTexto] = useState('salve quebrada');

  //evento
    const evento = (e) => {
      setTexto(e.target.value)
    }


  //retorno
  return(
    <div>
      <input type="text" onChange={evento}/>
      <p>{texto}</p>
    </div>
  )
}
export default Ex_useState

