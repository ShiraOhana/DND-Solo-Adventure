import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Directions(props) {
  return (
    <Container>
      {/* <Row> */}
      <Card
        style={{
          textAlign: "center",
          align: "center",
          padding: "1.5rem",
          margin: "10rem",
        }}
      >
        Directions: {props.directions}
      </Card>
      {/* </Row> */}
    </Container>
  );
}

export default Directions;
