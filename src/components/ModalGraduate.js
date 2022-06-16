import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function Example(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    
      <div>
        <Button className="button mt-2" variant="primary" onClick={handleShow}>
          {props.name}
        </Button>
        <Modal show={show} onHide={handleClose}>
          <img onClick={() => setShow(false)} src={props.img} alt="certificado"></img>
        </Modal>
      </div>
    </>
  );
}
export default Example;