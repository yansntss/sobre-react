import React, {useState, useEffect} from 'react'

function Ex6_useEffect(){

  //useState
  const [vetor, setVetor] = useState([])
 const [status, setStatus] = useState('Carregando...')
//  const [nome, setNome] = useState('estado inicial')
  // useEffect
  useEffect(()=> {
    obterDados()
  });


  const obterDados = async () =>{
    const dados = await fetch('https://jsonplaceholder.typicode.com/posts')

    const converter = await dados.json();
    setVetor(converter)
    setStatus('Dados carregado')
  }

  return(
   <div>
     <h1>  {status} </h1>

     <ul>
       {vetor.map(objeto => (<li>{objeto.title}</li>) )}
     </ul>
   </div>
  )

}
export default Ex6_useEffect;