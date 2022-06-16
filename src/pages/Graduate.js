import React from 'react';
import cert1 from '../img/cert1.png';
import cert2 from '../img/cert2.png';
import logoTrybe from '../img/logoTrybe.png';
import ugb from '../img/ugb.jpeg';
import ugbDiploma from '../img/ugbDiploma.jpg';
import Modal from '../components/ModalGraduate'
function Graduate() {
  return (
    <>
      <h1 className="mt-5">Graduação</h1>
      <div className="card mt-5" style={{ width: "18rem" }}>
        <img className="card-img-top" src={logoTrybe} alt="trybe" />
        <div className="card-body">
          <h5 className="card-title">Trybe</h5>
          <h6 class="card-subtitle mb-2 text-muted">Curso EAD</h6>
          <h6 class="card-subtitle mb-2 text-muted">2021 - 2022</h6>
          <p className="card-text">
            estudamos JavaScript, HTML, CSS, React, Node, Express.js, SQL, Git,
            entre outras linguagens e frameworks.</p>
          <Modal name='certificado fundamentos' img={cert2} />
          <Modal name='certificado front-end' img={cert1} />
        </div>
      </div>

      <div className="card mt-3" style={{ width: "18rem" }}>
        <img className="card-img-top" src={ugb} alt="ugb" />
        <div className="card-body">
          <h5 className="card-title">Centro Universitário Geraldo Di Biase - UGB</h5>
          <h5 className="card-title">Fundação Educacional Rosemar Pimentel - FERP</h5>
          <h6 class="card-subtitle mb-2 text-muted">Graduação</h6>
          <h6 class="card-subtitle mb-2 text-muted">2013 - 2018</h6>
          <p className="card-text">
          UGB forma profissionais de alto nível e com foco no impacto científico e prático para o planejamento e
          programação de suprimentos, produção, gestão da qualidade, customização em massa e distribuição de produtos e serviços. </p>
          <Modal name='certificado de conclusão de curso' img={ugbDiploma} />
        </div>
      </div>
    </>
  );
}

export default Graduate;





