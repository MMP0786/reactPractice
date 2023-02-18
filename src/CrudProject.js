import React from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from 'react-router-dom'

function CrudProject() {
 const navigate= useNavigate()
  return (
    <div>
        <Container className='bg-primary'>
            
            <Row>
                <Col>
                <Navbar>
                    <Container>
                        <Navbar.Brand className='text-white' href='/'>
                            <img src='logo192.png' width={'30'}/>
                            &nbsp;
                            Our CrudProject
                        </Navbar.Brand>
                        <Nav>
                            <Nav.Link href='http://localhost:3000/read' className='text-white'>Read</Nav.Link>
                            <Nav.Link href='/' className='text-white'>Add</Nav.Link>
                            <Nav.Link className='text-white'>Delete</Nav.Link>
                            <Nav.Link href='/update' className='text-white'>Update</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default CrudProject