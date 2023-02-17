import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function FetchApiPractice() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((rest) => setItem(rest));
  }, []);

  return (
    <div>
      {/* <p>this is item 1</p> */}
      <Container>
        <Row>
          <Col className="bg-warning m-2 ">
            {item.map((it) => {
              return (
                <>
                  <h3 className="bg-success p-3">{it.title} </h3>
                  <p className="bg-danger p-3">{it.body}</p>
                </>
              );
            })}
          </Col>
          <Col className="bg-warning m-2 ">
            {item.map((it) => {
              return (
                <>
                  <h3 className="bg-success p-3">{it.title} </h3>
                  <p className="bg-danger p-3">{it.body}</p>
                </>
              );
            })}
          </Col>

          {/* <Col className="bg-info m-2" >
            {item.map((it) => {
              return (
                <>
                  <h3 className="bg-danger">{it.title} </h3>
                  <p className="bg-success">{it.body}</p>
                </>
              );
            })}
          </Col> */}

          {/* <Col className='bg-danger text-light text-center'>
                    <h3>{item.title} </h3>
                    <div>{item.body} </div>
                </Col> */}
        </Row>
      </Container>
      <p>{item.title}</p>
    </div>
  );
}

export default FetchApiPractice;
