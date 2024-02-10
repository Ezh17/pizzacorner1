import React from 'react'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

function Orders() {
  return (
    <>
    <ListGroup as="ol" numbered>
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">pizza </div>
    
      </div>
      <Badge bg="primary" pill>
       5
      </Badge>
    </ListGroup.Item>
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">Peperoninon</div>
        
      </div>
      <Badge bg="primary" pill>
        6
      </Badge>
    </ListGroup.Item>
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">CornPizza</div>
        
      </div>
      <Badge bg="primary" pill>
        3
      </Badge>
    </ListGroup.Item>
  </ListGroup>
    </>
  )
}

export default Orders