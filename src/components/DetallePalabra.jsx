import React from "react";
import { useState } from 'react';

const DetallePalabra= () => {

    const[palabra, setPalabra] = useState("")

    const ingreso = (evento) => {
        setPalabra(evento.target.value);
      }
    
    const capicua = () => {
        let palabracapicua = "";
        palabracapicua = palabra.replace(/ /g, "");
    
        for (var i=0; i<palabra.length; i++) {
            if(palabracapicua[i]!=palabracapicua[palabracapicua.length-i-1]){
                return false;
        }
    }
        return true;
    }

    return (
      <div>
        <input type="text" placeholder="palabra" onChange={ingreso}/>
        <p>{palabra} mide {palabra.length} caracteres</p>
        <p>{(capicua() ? "Es capicúa" : "No es capicúa")}</p>
      </div>
    )
}

export default DetallePalabra;