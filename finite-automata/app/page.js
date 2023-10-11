import React from 'react'

const HomePage = () => {
  return (
        <main>
            <link rel='stylesheet' href='globals.css'/>
            <div className='card-element-wrapper'>
                <div className='card-element-header'>
                    <h2>Página de Inicio</h2>
                </div>
                <div className='card-element-content'>
                    <label >Mario Arias Automatas 1</label>
                    {/* <form class='option-form' action='../index.html'>
                        <label for='editUsers'>Mario Arias</label>
                        <button type='submit' id='editUsers' name='editUsers'>Home</button>
                    </form> */}
                </div>
            </div>
        </main>
  );
};

export default HomePage