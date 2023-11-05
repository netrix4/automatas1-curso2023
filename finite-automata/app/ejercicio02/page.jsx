'use client'
import { GenericButton } from '@/components/GenericButton';
import React, { useState } from 'react'

function Ejercicio02() {
  // Crea un automata que simule el comportamiento de un apagador
  const[palabra,setPalabra] = useState('');

  const matrizEstados = [
    [0,1],
    [0,1]
  ];
  const [estadoApagador, setEstadoApagador] = useState(true);

  const switchear = () => {
    const feedbackEstadoAceptacion = estadoApagador ? "Apagado: No aceptado":"Prendido: Aceptado"
    setEstadoApagador(!estadoApagador)
    
    console.log(`El estado del apagador está ${feedbackEstadoAceptacion}`);
  }

  return (
    <main>
    <div className='card-element-wrapper'>
        <div className='card-element-header'>
            <h2>Automatas I: Ejercicio 2</h2>
        </div>
        <div className='card-element-content'>
          <label className='text-center'>Crea un automata que simule el <br />comportamiento de un apagador</label>
            <label className='text-center'> Prender/Apagar (En consola) </label>
            <GenericButton label={"On / Off"} onClick={switchear}/>
        </div>
    </div>
    </main>
  )
}

export default Ejercicio02
