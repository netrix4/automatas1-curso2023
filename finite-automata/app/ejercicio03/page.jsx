'use client'
import { GenericButton } from '@/components/GenericButton';
import React, { useState } from 'react'

function Ejercicio03() {
    // Construya un DFA que acepte todas las cadenas sobre (a,b), 
    // las cuales empiezan y terminan con el mismo simbolo
    const[palabra,setPalabra] = useState('');

    const matrizEstados = [
        [1,200,200],
        [1,0,200]
    ];
    let arrayCaracteresDePalabra = [];
    // let estado_q_actual = 0;
    let isValidLetter;
    const regExpress = new RegExp('^[ab]*$')

    // Se crea una funcion que analiza el el atuomata
    const analizarString = () => {
        isValidLetter = regExpress.test(palabra)

        if (isValidLetter) {
            arrayCaracteresDePalabra = palabra.split('')
            const longitud = arrayCaracteresDePalabra.length;
            // estado_q_actual = 0;
            // let isStringAccepted = (arrayCaracteresDePalabra[0] == arrayCaracteresDePalabra[longitud-1]) ? true : false; 

            if (arrayCaracteresDePalabra[0] == arrayCaracteresDePalabra[longitud-1]) {
                console.log("Cadena SÍ cumple con el automata. Aceptada");
            }
            else{
                console.log("Cadena NO cumple con el automata. NO Acpetada");
            }
        }
        else{
            console.log('Cadena de entrada invalida. Revisa tu input');
        }
    }

    return (
        <main>
        <link rel='stylesheet' href='globals.css'/>
        <div className='card-element-wrapper'>
            <div className='card-element-header'>
                <h2>Automatas I: Ejercicio 3</h2>
            </div>
            <div className='card-element-content'>
                <label className='text-center' htmlFor="inputAutom">Construya un DFA que acepte todas las cadenas sobre (a,b),<br/> las cuales empiezan y terminan con el MISMO simbolo</label>
                <input type='text' name='inputAutom' value={palabra} onChange={(e) => setPalabra(e.target.value)} placeholder=' Coloca la entrada'></input>
                <GenericButton label={"Analizar"} onClick={analizarString}/>
            </div>
        </div>
        </main>
    )
}

export default Ejercicio03
