import React, { useState } from "react";

function Ex2_useState() {
  //use state
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);
  const [genero, setGenero] = useState('')
  return (
    <div>
      <input 
      type="text" 
      placeholder="nome"
      onChange={e => setNome(e.target.value)}
      />
      <input
       type="number"
        placeholder="idade"
        onChange={e => setIdade(e.target.value)}
        />
      <input
       type="text"
        placeholder="genero"
        onChange={e => setGenero(e.target.value)}
        />

      <p>nome: {nome}</p>
      <p>idade: {idade}</p>
      <p>gênero: {genero}</p>
    </div>
  );
}
export default Ex2_useState