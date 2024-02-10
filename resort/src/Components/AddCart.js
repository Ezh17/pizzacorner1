import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Orders from '../Components/Orders';
import "bootstrap-icons/font/bootstrap-icons.css"

function AddCart({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={()=> setShow(!show)}   className="me-2">
      <i class="bi bi-cart4"></i>
      </Button>
      <Offcanvas show={show} onHide={()=> setShow(!show)} placement={'end'} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <Orders/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default  AddCart