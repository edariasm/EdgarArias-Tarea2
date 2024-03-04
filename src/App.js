import './App.css';

import { useState } from 'react';
import {useLocation } from 'react-router-dom';



import {BrowserRouter, Route, Routes} from "react-router-dom";

import { ProxConciertos } from './Components/ProxConciertos';
import { Videos } from './Components/Videos';
import { Encabezado } from './Components/Encabezado';
import { Fotos } from './Components/Fotos';
import { ReservaConfirmada } from './Components/ReservaConfirmada';





import masthead from './Imagenes/masthead.png';
import fillosingimg from './Imagenes/fillosingimg.jpg';
import fillobass from './fillobass.jpg';
import fillosing2 from './fillosing2.jpg';
import filloacustico from './filloacustico.jpg';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Encabezado />
        <Routes> 
          <Route path ="/videos" Component={Videos} />
          <Route path ="/fotos" Component={Fotos} />
          <Route exact path="/conciertos" Component={ProxConciertos} />
          <Route path ="/reservaConfirmada" Component ={ReservaConfirmada} />
        </Routes>
      </BrowserRouter>
          
      
    </div>
    
  );
}

export default App;
