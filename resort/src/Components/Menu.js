import React, { useState } from 'react'
import PizzaCard from './PizzaCard'
import "bootstrap-icons/font/bootstrap-icons.css"
import { Col,Container,Row} from 'react-bootstrap'

function Menu() {

  let [menu]=useState([1,2,3,4,5,6])

  return (
   <section id='Menu' className='bg-light'>

   <div className='text-center my-4 py-5'>
     
   <h3 className='text-danger'>Treat YourSelf With Every Day Menu<i class="bi bi-tiktok"></i></h3>

   <Container className='text-center'>
   
   <Row >

   {menu.map((item)=>
    {
        return(
        <Col md={6} lg={4} sm={1} key={item} >
   
        <PizzaCard/>
        </Col>
        )
    })}
   
   
   </Row>
   </Container>

 

   </div>

   
   
   
   </section>
  )
}

export default Menu