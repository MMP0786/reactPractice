import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Img1 from "../Image/download.jpeg";
import Img2 from "../Image/pexels-irina-iriser-759324.jpg"
import Img3 from "../Image/pink-flowering-roses-1598016799.jpg"

function CardPractice() {
  return (
    <div>
      <Container>
          <Row >
        <Col md={4}>
            <Card >
              <Card.Img src={Img1}></Card.Img>
              <Card.Body>
                <Card.Title> It's the good flower</Card.Title>
                <Card.Subtitle>this is sub title of flower</Card.Subtitle>
                <Card.Text>
                  It is coming from the text area It is coming from the text
                  areaIt is coming from the text areaIt is coming from the text
                  areaIt is coming from the text areaIt is coming from the text
                  areaIt is coming from the text area
                </Card.Text>
                <div className="d-grid">
                  <Button variant="success">Read more ...</Button>
                </div>
              </Card.Body>
            </Card>
            
        </Col>

        <Col md={4}>
            <Card >
              <Card.Img src={Img3} width={"150"}></Card.Img>
              <Card.Body>
                <Card.Title> It's the good flower</Card.Title>
                <Card.Subtitle>this is sub title of flower</Card.Subtitle>
                <Card.Text>
                  It is coming from the text area It is coming from the text
                  areaIt is coming from the text areaIt is coming from the text
                  areaIt is coming from the text areaIt is coming 
                  areaIt is than uou are the resp
                </Card.Text>
                <div className="d-grid">
                  <Button variant="warning">Read more ...</Button>
                </div>
              </Card.Body>
            </Card>
            
        </Col>

        <Col md={4}>
            <Card >
              <Card.Img src={Img2} width={"150"}></Card.Img>
              <Card.Body>
                <Card.Title> It's the good flower</Card.Title>
                <Card.Subtitle>this is sub title of flower</Card.Subtitle>
                <Card.Text>
                  It is coming from the text area It is coming from the text
                  areaIt is coming from the text areaIt is coming 
                </Card.Text>
                <div className="d-grid">
                  <Button >Read more ...</Button>
                </div>
              </Card.Body>
            </Card>
            
        </Col>
        
          </Row>
      </Container>
    </div>
  );
}

export default CardPractice;
