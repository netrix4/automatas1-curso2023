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
  let estadoApagador = true

  const switchear = () => {
    let feedbackEstadoAceptacion = ""

    if (estadoApagador == true) {
      estadoApagador = false
      feedbackEstadoAceptacion = "Apagado: No aceptado"
    }
    else{
      estadoApagador = true
      feedbackEstadoAceptacion = "Prendido: Aceptado"
    }

    console.log(`El estado del apagador está ${feedbackEstadoAceptacion}`);
  }

  return (
    <main>
    <div className='card-element-wrapper'>
        <div className='card-element-header'>
            <h2>Automatas I: Ejercicio 1</h2>
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
