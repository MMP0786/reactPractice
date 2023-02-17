import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function GridBs() {
  return (
    <div>
      <Container fluid="md">
        <Row>
            <Col className="bg-danger App mt-4">
          <p>thi is header</p>
            </Col>
        </Row>
        <Row>
          <Col className="bg-warning mt-4 p-1 App " md={{offset:1}}>
            <div>this is div</div>
          </Col>
          <Col className="bg-success mt-4 p-1 App " xs={6}>
            <div>this is div</div>
          </Col>
          <Col className="bg-primary mt-4 p-1 App ">
            <div>this is div</div>
          </Col>
        </Row>
      </Container>

        <img src="logo192.png" width={"30"} alt="" />

      <div className="App">
      <Button variant="outline-danger">Submit</Button>
      <Button active variant="outline-dark" size="sm">
        Submit
      </Button>
      <Button disabled variant="outline-success" size="lm">
        Submit
      </Button>
      </div>
    </div>
  );
}

export default GridBs;
