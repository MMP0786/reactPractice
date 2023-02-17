import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css"
import pic1 from "./Image/pic1.png"
import pic2 from "./Image/pic2.png"
import pic3 from "./Image/pic3.png"
import pic4 from "./Image/pic4.png"


function CarouselPractice() {

    const styled={
      width: "100%" 
    }
  return (
    <div className='mb-5 m-5'>
        <Container fluid>
            <Row>
                <Col>
                <Carousel fade  variant="info" >
                    {/* <Carousel.Item>
                       <img src={pic1}  style={styled}/> 
                    </Carousel.Item> */}
                    <Carousel.Item interval={5000}>
                       <img src={pic2} style={styled} className="d-block w-100"/> 
                       <Carousel.Caption>
                        <h1>First Image</h1>
                        <p>It is flower of rose looking good
It is flower of rose looking good</p>
                         </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000} >
                       <img src={pic4} style={styled} className="d-block w-100"/> 
                       <Carousel.Caption> It's moutain view it's also looking good</Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                       <img src={pic3} style={styled} className="d-block w-100"/> 
                       <Carousel.Caption><h1>Last Image</h1><p>It is flower of rose looking good
It is flower of rose looking good</p></Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default CarouselPractice