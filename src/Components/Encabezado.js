import React from 'react'
import masthead from './masthead.png';
import { Link } from 'react-router-dom';

export const Encabezado = () => {
  return (
    <div className='logoFillo'>
      <img class= "logoimg" src={masthead} alt="logofillo" />
      <h1>Rock Original desde Costa Rica</h1>      
      <p>Vive la experiencia del Rock con lo mejor de la música original. Reserva tu espacio para los próximos conciertos. Puedes ver ahora los más recientes videos.</p>
      <ul>
        <li><Link to="Conciertos">Proximos Conciertos</Link></li>
        <li><Link to="videos">Videos más recientes</Link></li>
        <li><Link to="Fotos">Galería de fotos</Link></li>
      </ul>
    </div>
  )
}
