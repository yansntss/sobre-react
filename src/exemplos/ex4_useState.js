import React, { useState } from "react";

function Ex4_useState() {
  const modelo = {
    nome: "",
    email: "",
    cidade: "",
  };
  const [formulario, setFormulario] = useState(modelo);
  


  const evento = (e) => {
    let nome = e.target.name;
    let valor = e.target.value;

    setFormulario({ ...formulario, [nome]: valor });
  };
  return (
    <div>
      
      <input
        type="text"
        name="nome"
        placeholder="Informe o nome"
        onChange={evento}
      >
        
      </input>
      <input
        type="text"
        name="email"
        placeholder="Informe o e-mail"
        onChange={evento}
      ></input>
      <input
        type="text"
        name="cidade"
        placeholder="Informe a cidade"
        onChange={evento}
      ></input>

      <p> nome: {formulario.nome} </p>
      <p> email: {formulario.email} </p>
      <p> cidade: {formulario.cidade} </p>

      <p> {JSON.stringify(formulario)}</p>
    </div>
  );
}

export default Ex4_useState;
