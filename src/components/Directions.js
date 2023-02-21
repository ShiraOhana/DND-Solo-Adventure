import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Directions(props) {
  return (
    <Container>
      <Row>
        <Col>
          <Card
            style={{ width: "50rem", textAlign: "center", align: "center" }}
          >
            Directions: {props.directions}
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Directions;
