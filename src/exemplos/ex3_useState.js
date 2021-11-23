import React, { useState } from "react";

function Ex3_useState() {
  //useState
  const [nota1, setNota1] = useState(0);
  const [nota2, setNota2] = useState(0);

  //media
  let media = (nota1 + nota2) / 2;

  //situação
  let situacao = media >= 7? 'Aprovado(a)': 'Reprovado(a)'
  //retorno
  return (
    <div>
      <input
        type="number"
        placeholder="Primeira nota"
        //sempre que trabalhar com numero, tem que converter
        onChange={(e) => setNota1(parseFloat(e.target.value))}
      />

      <input
        type="number"
        placeholder="Segunda nota nota"
        onChange={(e) => setNota2(parseFloat(e.target.value))}
      />

      <p>Média: {media}</p>
      {nota1 && nota2 ? <p>situação: {situacao}</p>: ''}
     
    </div>
  );
}

export default Ex3_useState;
