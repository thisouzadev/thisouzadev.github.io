import React from 'react';
import { backend } from './projectData';

function Project() {
  return (
    <div>
      <h1>projeto</h1>
      <a href="https://thisouzadev.github.io/trivia/" target="_blank" rel="noreferrer">trivia</a>
      {backend.map((item, index) => {
        return (
          <div>
            <span className="hvr-grow">{item.icon} </span>
            <a href={item.github} target="_blank" rel="noreferrer">{item.title}</a>
          </div>

        )
      })
      }
    </div>
  )
}

export default Project
