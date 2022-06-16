import React from 'react';
import * as FAIcons from "react-icons/fa";

function Abstract() {
  return (
    <div style={{  marginTop: '60px'}}>
      
      <div style={{display: 'flex'}}>
        <FAIcons.FaRegHandPeace size="40px" color="green"/>
        <h1 style={{ marginLeft: '60px' }}>Declaração</h1>
      </div>

      <p style={{marginRight: '200px', marginTop: '20px'}}>Declaro, para fins de direito, sob as penas do art. 299 do Código Penal Brasileiro, que as informações e os documentos apresentados para acima são verdadeiros e autênticos.</p>
      <h1 style={{marginTop: '20px'}}className='signature'>Thiago Souza</h1>
    </div>
  )
}

export default Abstract;
