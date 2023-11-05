'use client';
import { GenericButton } from '@/components/GenericButton';
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
import React, { useState } from 'react'

function Ejercicio01() {
    // Crea un automata que acepte letras o un numero sin caracteres especiales
    const[palabra,setPalabra] = useState('');

    const matriz = [
        [1,200,200],
        [1,0,200]
    ];

    // Se crea ka funcion que analiza el el atuomata
    const analizar = () => {
        let c = palabra.split('');
        let longitudArray = 0;
        let i = 0;
        let bandera = true;
        
        const isValidCharacter = new RegExp('[a-z0-9]');
        
        // const isLetter = new RegExp('[a-z]')
        // const isDigit = new RegExp('[0-9]')

        // while (i < palabra.lenght) {
        //     if (isLetter.test(c[i])) {
        //         caracter = 0;
        //     } else if(isDigit.test(c[i])){
        //         caracter = 1;
        //     }
        //     else {
        //         caracter = 2;
        //     }
        //     i++
        // }
        // if(caracter == 0 | caracter == 1){
        //     console.log("Estado aceptado");
        // }
        // else{
        //     console.log("Estado no aceptado");
        // }

        longitudArray = palabra.length;

        while (i < longitudArray) {
            if (isValidCharacter.test(c[i]) == false) {
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
                <h2>Automatas I: Ejercicio 1</h2>
            </div>
            <div className='card-element-content'>
                <label htmlFor="inputAutom1" className='text-center'>Crea un automata que acepte letras o <br /> numeros sin caracteres especiales</label>
                <input type='text' name='inputAutom1' value={palabra} onChange={(e) => setPalabra(e.target.value)} placeholder=' Coloca la entrada'></input>
                <GenericButton label={"Analizar"} onClick={analizar}/>
            </div>
        </div>
        </main>
    )
  
}

export default Ejercicio01
