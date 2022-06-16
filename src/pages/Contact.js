import React, { useRef } from 'react';
import { Social } from './contactData';
import { IconContext } from 'react-icons';
import * as BSIcons from "react-icons/bs";
import { Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('gmailMessage', 'template_y1oelme', e.target, 'user_cuGdalc3wsdlPAEKEvtGg')
    .then((result) => {
      alert('Mensagem enviada com sucesso! :D')
      console.log(result.text);
    }, (error) => {
      alert(error.message)
      console.log(error.text);
    });
  e.target.reset();
}
function Contact() {
  const form = useRef();
  return (
    <div  >
      <IconContext.Provider value={{ color: '#303030' }}>
        <h1 className='title mt-5' >Contato</h1>
        <h3 className='title mt-5'>Vamos manter contato!</h3>

        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex' }}>
            <ul style={{ listStyle: 'none' }}>
              {Social.map((item, index) => {
                return (
                  <li key={index}>
                    <span 
                    style={{ margin: '100px 30px 0px 0px' }}
                    className={'hvr-grow icon'} >
                      {item.icon} {item.icon2}
                      </span>
                  </li>
                )
              })}
            </ul>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>

            {Social.map((item, index) => {
              return (
                <div key={index}>
                  <h3  style={{ margin: '80px 20px 0px 0px' }}>{item.title}</h3>
                  <p style={{ margin: '10px 20px' }}>{item.information}</p>
                  <div className="container hvr-grow">
                  <a  style={{ padding: '25px 0px 30px', margin: '0px 10px 30px 10px' }} href={item.site1} target="_blank" rel="noopener noreferrer">
                    {item.rede1}
                  </a>
                  <a style={{ padding: '25px 0px 30px', margin: '0px 10px 30px 10px' }} href={item.site2} target="_blank" rel="noopener noreferrer">
                    {item.rede2}
                  </a>
                  <a style={{ padding: '25px 0px 30px', margin: '0px 10px 30px 10px' }} href={item.site3} target="_blank" rel="noopener noreferrer">
                    {item.rede3}
                  </a>
                  <a style={{ padding: '25px 0px 30px', margin: '0px 10px 30px 10px' }} href={item.site4} target="_blank" rel="noopener noreferrer">
                    {item.rede4}
                  </a>
                  <a style={{ padding: '25px 0px 30px', margin: '0px 10px 30px 10px' }} href={item.site5} target="_blank" rel="noopener noreferrer">
                    {item.rede5}
                  </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <BSIcons.BsChatDotsFill className='mt-5' style={{ display: 'flex', marginLeft: '55px' }} color={'#060b26'} size={'50px'} />
          <h1 className="mt-5">Deixe sua mensagem</h1>
        </div>
          <p className="mt-5"style={{textAlign: 'center'}}>Entro em contato assim que possivel.</p>
        <div className="container">
          <form ref={form} onSubmit={sendEmail} >
            <label className="form-label" htmlFor="email">E-mail</label>
            <input className="form-control" type="email" id="email" name="email" placeholder="E-mail de destino.." />

            <label className="form-label" htmlFor="nome">Nome</label>
            <input className="form-control" type="text" id="nome" name="name" placeholder="Nome da pessoa.." />

            <label className="form-label" htmlFor="message">Mensagem</label>
            <textarea className="form-control textArea" id="message" name="message" placeholder="Escreva algo.."></textarea>

            <label className="form-label" htmlFor="anexo">Anexo</label>
            <input className="form-control" type="file" id="anexo" name="anexo" />

            <Button type="submit" /* disabled={state.submitting} */ value="Enviar">Enviar</Button>
          </form>
        </div>
      </IconContext.Provider>
    </div>
  )
}
export default Contact;