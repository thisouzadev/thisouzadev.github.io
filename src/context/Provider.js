import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react'
import profileContext from './profileContext';

function Provider({ children }) {
  const [information, setInformation] = useState([
    {
      information: '',
      answeredInformation: '',
    }
  ]);
const [graduate, setGraduate] = useState([
  {
    name: '',
  }
])
useEffect(() => {
setGraduate([
  {
    name:'front-end',
  },
  {
    name:'fundamentos'
  }
])
}, []) 
  useEffect(() => {
    setInformation([
      {
        information: 'Name',
        answeredInformation: 'Thiago Souza e Souza',
      },
      {
        information: 'Email',
        answeredInformation:'thiagodesouza.dev@gmail.com'
      },
      {
        information: 'Celular/WhatsApp',
        answeredInformation:'+55(21)97944-7656'
      },
      {
        information: 'Data de Nascimento',
        answeredInformation: 'Outubro 2, 1991',
      },
      {
        information: 'Cidade',
        answeredInformation: 'Rio de janeiro, RJ'
      },
      {
        information: 'GitHub',
        answeredInformation: 'thisouzadev',
      },
    ])
  }, []) 

  const [skill, setSkill] = useState([])
  useEffect(() => {

    setSkill()
  }, [])

  const obj = {
    information,
    skill,
    graduate,
  }
  return (
    <profileContext.Provider value={ obj }>
      {children}
    </profileContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider
