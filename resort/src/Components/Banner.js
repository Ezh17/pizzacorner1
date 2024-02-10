import React from 'react'
import { Col,Container,Row} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';

function Banner() {
  return (
    <Container>
       <Row>
          <Col>
          
         
              
          <Carousel>
          <Carousel.Item>
            <img  className='d-block w-100'height={500} src={require("../Assests/expensive.jpg")}>
            </img>
            <Carousel.Caption>
              <h3>pizza </h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            
          <img  className='d-block w-100' height={500} src={require("../Assests/pedrotechspecial.jpg")}>
          </img>
            <Carousel.Caption>
              <h3>pedrotechspecial</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img className='d-block w-100' height={500} src={require("../Assests/pineapple.jpg")}>
          </img>
            <Carousel.Caption>
              <h3>Pineapple</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
         
        </Col>
          </Row>
          <div className='text-center'>
          <h2 className='display-5 mt-3'>Pizzas for Every Occasion!</h2>
          <p> Here yours! Fav Pizzas </p>
          </div>
         
         
      
    </Container>
  )
}

export default Banner