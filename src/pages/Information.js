import React, { useContext } from 'react'
import profileContext from '../context/profileContext';

function Information() {
  const { information } = useContext(profileContext);
  return (
    <div className="container">
      <div className="section-title mt-5">
      <h1>Thiago Souza</h1>
      <h2>DESENVOLVEDOR WEB</h2>
      </div>
      <p>
        Estudante da Trybe e graduado em Engenharia de Produção na UGB.
        Sou apaixonado por Tecnologia, desenvolvimento e marcas que trabalhem
        para contribuir com uma melhor interação digital.
      </p>
      <br />
      <h1 className="signature">Thiago Souza</h1>
      {information.map((item, index) => {
        return (
          <p key={index}><span className="information phone">{item.information}: </span>{item.answeredInformation}</p>
        )
      })}
    </div>
  )
}

export default Information;
