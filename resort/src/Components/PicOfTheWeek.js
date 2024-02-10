import React from 'react'
import { Col,Container,Row} from 'react-bootstrap'
import "bootstrap-icons/font/bootstrap-icons.css"



function PicOfTheWeek() {
  return (


   <section id='Musttry'>

   <div className='text-center'>

   <h2 className='text-danger'>  <i class="bi bi-search-heart"></i> Pick of The Week!</h2>
   
   
   </div>
  
   
   <Container className='mt-6'>
   <Row>
   <Col md={7}>
   
   <img src={require('../Assests/margherita.jpg')} width={350} fluid={false}></img>
   </Col>
   <Col md={5}>
   <h2>Double Cheese Fajita</h2> 
   <p>Tasty pizzas avilable here</p>
   <button className='bg-primary'>Buy Now</button>
     <div>

     </div>
   
   </Col>
   
   
   </Row>
   
   
   </Container>
   
   </section>
  )
}

export default PicOfTheWeek