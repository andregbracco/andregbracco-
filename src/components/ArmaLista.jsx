import React from "react";
import { useState } from 'react';

const ArmaLista = () => {

  const [lista, setLista] = useState([])
  const [valor, setValor] = useState("")

  const ingresa = (evento) => {
    setValor(evento.target.value);
  }

  const sumavaloralista = () => {
    if (lista.includes(valor)) {
      alert("Elemento repetido")
    }
    else {
      setLista([valor].concat(lista))
    }
  }

  const imprimir = (elemento, ind) => {
    const borrar = () => {
      const nueva_lista = lista.filter((i) => i !== elemento);
      setLista(nueva_lista)
    }
    return (
      <li key={ind}>
        {elemento}
        <button onClick={borrar}>Borrar</button>
      </li>
    );
  }
  return (
    <div>
      <p>Lista: </p>
      <ul>{lista.map(imprimir)}</ul>
      <input type="text" placeholder="valor" onChange={ingresa} />
      <button onClick={sumavaloralista}>Agregar a la lista</button>
    </div>
  )
}

export default ArmaLista;