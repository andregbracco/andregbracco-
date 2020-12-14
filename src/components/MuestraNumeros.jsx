import React from "react";
import { useState } from 'react';

const MuestraNumeros = () => {

    let numero = 1;

    const [numero2, setNumero] = useState(1);

    const sumar = () => {
        setNumero(numero2 + 1)
        console.log(numero,numero2)
    }

    return (
        <div>
          <h1>Número : {numero}</h1>
          <h1>Número2 : {numero2}</h1>
          <button onClick={sumar}>Incrementar</button>
          <p>{(numero2 % 2  == 0) ? "Par" : "Impar"}</p>
        </div>      
    )
}

export default MuestraNumeros;