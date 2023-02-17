import React from 'react'
import { Col, Container, Navbar, Nav, Row } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import { NavLink } from 'react-router-dom'

function NavbarPractice() {
  return (
    <div>
        <Container fluid className="bg-danger ">
            <Row>
                <Col>
                <Navbar >
                    <Container md={{offset: 1}}>
                       <Navbar.Brand className='text-info' href='/'>
                        <img src='logo192.png' width={"30"}/>
                        &nbsp;
                        My Website
                       </Navbar.Brand>
                       <Nav >
                        <Nav.Link href='../www.google.com'  className='text-light'> Home</Nav.Link>
                        <Nav.Link href='#' className='text-light'> About</Nav.Link>
                        <Nav.Link href='#' className='text-light'> ContactUs</Nav.Link>
                        <Nav.Link href='#' className='text-light'> Help</Nav.Link>
                       </Nav>
                    </Container>
                </Navbar>
                   {/* <div> this is Coming from NavBar</div> */}
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default NavbarPractice