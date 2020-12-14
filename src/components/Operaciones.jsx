import React from "react";
import { useState } from 'react';

const Operaciones = () => {

  const[primerValor, setPrimervalor] = useState(0)
  const[segundoValor, setSegundovalor] = useState(0)
  const[resultado, setResultado] = useState(0)

  const ingresoprimervalor = (evento) => {
    setPrimervalor(evento.target.value);
  }

  const ingresosegundovalor = (evento) => {
    setSegundovalor(evento.target.value);
  }

  const mas = () => {
    const suma = parseInt(primerValor) + parseInt(segundoValor)
    setResultado(suma)
  }

  const operar = (operador) => {
    if (operador === 'div') {
      setResultado(primerValor / segundoValor)
    } else {
      setResultado(primerValor * segundoValor)
    }
  }

  const ops = ['Sumar', 'Restar', 'Dividir', 'Multiplicar'];

  return (
      <div>
        <input type="number" placeholder="num 1" onChange={ingresoprimervalor}/>
        <input type="number" placeholder="num 2" min="1" onChange={ingresosegundovalor}/>
        <br/>
        <button onClick={mas}>Sumar</button>
        <button onClick={() => {
                        setResultado(primerValor - segundoValor)
                      }}>Restar</button>
        <button onClick={() => operar('div')}>Dividir</button>
        <button onClick={() => operar('mult')}>Multiplicar</button>
        <br />
        {ops.map((op, ind) => {
          return (
            <button key={ind} onClick={() => operar(ind)}>{op}</button>
          );
        })
        }
        <p>Resultado: {resultado}</p>
      </div>
  )

}

export default Operaciones;