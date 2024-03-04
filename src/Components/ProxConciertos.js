import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useState } from 'react';



function Conciertos(props){
  

    
    return(
    
      <div className='conciertos' >
        

        <h3>Fecha: {props.fecha}</h3>
        <p>Venue: {props.venue}</p>
        <p>Hora: {props.hora}</p>
        <p>Cover: {props.cover}</p>
        <p>Id: {props.id}</p>
        
        <Link to={{
          pathname: '/reservaConfirmada',
          
          
        }}>
        Reservar
        </Link>
      </div>
      
    );
  }

  export default Conciertos;


export const ProxConciertos = () => {
  return (
    
    <div>
    
    <h3>Proximos Conciertos</h3>
    <Conciertos fecha="Marzo 20, 2024" venue="Green Room, Jacó" hora="8:00pm" cover="2000 colones" id="101"/>
    <Conciertos fecha="Abril 6, 2024" venue="La Gata, San Pedro" hora="7:00pm" cover="no-cover" id="102"/>
    <Conciertos fecha="Abril 19, 2024" venue="Mundo Loco, San Pedro" hora="7:30pm" cover="2500 colones" id="103"/>
    <Conciertos fecha="Abril 26, 2024" venue="Jazz Café, Escazú" hora="7:30pm" cover="3500 colones" id="104"/>
    </div>
    
  )
}


