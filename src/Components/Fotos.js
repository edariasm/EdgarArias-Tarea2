import React from 'react'

import fillobass from './fillobass.jpg';
import fillosing2 from './fillosing2.jpg';
import filloacustico from './filloacustico.jpg';



export const Fotos = () => {
  return (
    
    <div className='tirafotos' >
      <img style={{paddingRight:'50px'}}  src={fillobass} alt="playbass" />
      <img style={{paddingRight:'50px'}} src={fillosing2} alt="singing" />
      <img src={filloacustico} alt="acoustic" /> 
    </div>
  ) 
}
