import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css"
import { Col,Container,Row} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';
function Commands() {
  return (
    <>
    <section id='Contactus' className='text-center mt-5'>

    <div >

    <h3 className='text-danger'>Commands <i class="bi bi-chat-dots-fill"></i> </h3>
    
    </div>


<Container>
  
<Row className='justify-content-center'>

<Col md={6}>


<form className='bg-light'>

<InputGroup className="mb-3 text-center">
<InputGroup.Text id="basic-addon1"><i class="bi bi-envelope-at"></i></InputGroup.Text>

<FloatingLabel
controlId="floatingInput"
label="Email address"
className="mb-3"
>
<Form.Control type="email" placeholder="name@example.com" />
</FloatingLabel>

</InputGroup>


<InputGroup className="mb-3 text-center">
<InputGroup.Text id="basic-addon1"><i class="bi bi-person-check-fill"></i></InputGroup.Text>

<FloatingLabel
controlId="floatingInput"
label="Name"
className="mb-3"
>
<Form.Control type="password" placeholder="Enter Name" />
</FloatingLabel>
</InputGroup>

<FloatingLabel controlId="floatingTextarea2" label="Comments">
<Form.Control
  as="textarea"
  placeholder="Leave a comment here"
  style={{ height: '100px' }}
/>
</FloatingLabel>
</form>





</Col>
</Row>
</Container>
</section>
</>
  
   
  

  )
}

export default Commands