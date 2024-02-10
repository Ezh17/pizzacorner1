import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap-icons/font/bootstrap-icons.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import AddCart from "../Components/AddCart"



function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className='text-danger'>  <h2><span> <i class="bi bi-yelp"></i> Pizza World!</span> </h2> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home" className='fw-bold'>Home</Nav.Link>
            <Nav.Link href="#Menu"className='fw-bold'>Menu</Nav.Link>
            <Nav.Link href="#Musttry" className='fw-bold'>MustTry</Nav.Link>
            <Nav.Link href="#Contactus" className='fw-bold'>Contact us</Nav.Link>
            <AddCart/>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;