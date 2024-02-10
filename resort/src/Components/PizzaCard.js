import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
function PizzaCard() {

  const [modalShow, setModalShow] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Pizza Added</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
      );
    }

  return (
    <>
   
    
    <Card style={{ width: '18rem' }} className='m-3'>
    <Card.Img variant="top" src={require ("../Assests/multiplePizzas.jpeg")} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the cards content.
      </Card.Text>
      <Button variant="primary" onClick={() => setModalShow(true)}>Add product</Button>
    </Card.Body>
  </Card>

  <MyVerticallyCenteredModal
  show={modalShow}
  onHide={() => setModalShow(false)}/>
    
    
  </> 
  )
 
}


export default PizzaCard