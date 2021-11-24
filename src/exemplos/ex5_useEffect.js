import React, {useState, useEffect} from 'react'

function Ex5_useEffect(){

  const [texto,setTexto] = useState('saaalve quebrada')


  //useEffect
  useEffect(()=>{
    setInterval(() => {
      setTexto ( 'quebrada salve')
    }, 3000);
  })

  return(
    <h1>
      {texto}
    </h1>
  )

}
export default Ex5_useEffect