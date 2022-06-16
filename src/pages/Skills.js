import { skillLeft, ling, skillRight, icons } from './skillData';

function Skills() {
  return (
    <div className="container">
      <h1 className="mt-5">Minhas Skills</h1>
      <h4 className="mt-5">Experiência Skill</h4>
      <div className="mt-3">
        {icons.map((item, index) => {
          return (
            <img align="center" alt={item.language} height="30" width="40" src={`https://raw.githubusercontent.com/devicons/devicon/master/icons/${item.icon}/${item.img}`} />
          )
        })}
      </div>
      <h4 className="mt-5">Niveis aproximados</h4>
      <div className="section-skill">
        <div className="bar-left mt-3">
          {skillLeft.map((item, index) => {
            return (
              <>
                <label style={{ margin: '6px' }} key={index}>{item.language}</label>
                <span >{item.nivel}</span>
                <div className="container">
                  <div className="progress" style={{ height: '10px' }}>
                    <div className={`${item.class} counter`} style={{ width: item.nivel }} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
        <div className="bar-right mt-3">
          {skillRight.map((item, index) => {
            return (
              <>
                <label style={{ margin: '6px' }} key={index}>{item.language}</label>
                <span>{item.nivel}</span>
                <div className="container">
                  <div className="progress" style={{ height: '10px' }}>
                    <div className={item.class} style={{ width: item.nivel }} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
      <h4 className="mt-5">Linguas skill</h4>
      <div className="section-language">
        {
          ling.map((item, index) => {
            return (
              <div key={index}>
                <div id='value' className="circulo" style={{ backgroundColor: item.color }}>{item.nivel}</div>
                <p className="text-language">{item.linguagem}</p>
              </div>
            )
          })
        }
      </div>
    </div >
  )
}

export default Skills
