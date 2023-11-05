'use client'
import { GenericButton } from '@/components/GenericButton';
import React, { useState } from 'react'

function Ejercicio05() {
  // Construye un DFA que acepete todas las cadenas sobre (a,b)
  // donde cada "a" deberá ser seguida por una "b"

  const[palabra,setPalabra] = useState('');

  // Se crea una funcion que analiza el el automata
  const analizar = () => {
    let c = palabra.split('');
    let longitudArray = 0;
    let i = 0;
    let bandera = true;
    const isValidCharacter = new RegExp('^[ab]*$');

    // longitudArray = palabra.length-1;
    longitudArray = palabra.length;

    while (i < longitudArray) {
      if (isValidCharacter.test(c[i]) == true) {
        if (c[i] == 'a') {
          try {
            if (!(c[i+1] == 'b')) {
              bandera = false
            }
          } catch (error) {
            console.log('Se terminó el array y no encontré una B.')
            bandera = false
          }
        }
      }
      else{
        console.log('Cadena de entrada invalida. Revisa tu input');
        bandera = false;
      }
      i++
    }

    if(bandera){
      console.log("Cadena SÍ cumple con el automata. Aceptada");
    }
    else{
      console.log("Cadena NO cumple con el automata. NO Aceptada");
    }
  }

  return (
    <main>
    <link rel='stylesheet' href='globals.css'/>
    <div className='card-element-wrapper'>
        <div className='card-element-header'>
            <h2>Automatas I: Ejercicio 5</h2>
        </div>
        <div className='card-element-content'>
            <label htmlFor="inputAutom5" className='text-center'>Construye un DFA que acepete todas las cadenas<br/>sobre (a,b) donde cada "a" deberá ser seguida por una "b"</label>
            <input type='text' name='inputAutom5' value={palabra} onChange={(e) => setPalabra(e.target.value)} placeholder=' Coloca la entrada'></input>
            <GenericButton label={"Analizar"} onClick={analizar}/>
        </div>
    </div>
    </main>
  )
}

export default Ejercicio05
