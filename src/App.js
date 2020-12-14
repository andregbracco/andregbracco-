import './App.css';
import { useState } from 'react';
// components
import Operaciones from './components/Operaciones';
import MuestraNumeros from './components/MuestraNumeros';
import DetallePalabra from './components/DetallePalabra';
import ArmaLista from './components/ArmaLista';

function App() {

  return (
    <div className="App">
      <MuestraNumeros/>
      <hr/>
      <DetallePalabra/>
      <hr/>
      <ArmaLista/>     
      <hr/>
      <Operaciones/>
    </div>
  );
}

export default App;