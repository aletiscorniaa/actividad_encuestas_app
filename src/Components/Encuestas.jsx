import React from 'react';
import Opciones from './Opciones';

function Encuestas({ encuestas, opciones }) {
    return (
        <div>
            <h2>Encuestas Disponibles</h2>
            <ul>
                {encuestas.map(encuesta => (
                    <li key={encuesta.id}>{encuesta.pregunta}<Opciones opciones={encuesta.opciones}/></li>
                    ))}
            </ul>
        </div>
    );
}
export default Encuestas;
