import React from 'react'

function Song(props){
    return(
      <div className='song'>
        <h3>Título: {props.titulo}</h3>
        <p>Año: {props.año}</p>
        <p>Autores: {props.autores}</p>
        <a href= {props.enlace} >Enlace al video</a>
        </div>
    )
  }
  


export const Videos = () => {
  return (
    <div className='contenedorsongs'>
      <h3>Ultimos videos</h3>
      <Song titulo="Sleepless Eyes" año="2024" autores="Edgar Arias" enlace="https://www.youtube.com/watch?v=ThaF-5tSS5o"/> 
      <Song titulo="Cuántica" año="2015" autores="Edgar Arias" enlace="Disponible pronto"/>
      <Song titulo="Miracle" año="2020" autores="Edgar Arias" enlace="https://www.youtube.com/watch?v=h7C9C7gLJMI"/>
     </div>


  )
}
