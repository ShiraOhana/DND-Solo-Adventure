import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

function Dice() {
  // Rolling the dice functionality
  const [roll20, setRoll20] = useState(null);
  const [roll12, setRoll12] = useState(null);
  const [roll10, setRoll10] = useState(null);
  const [roll8, setRoll8] = useState(null);
  const [roll6, setRoll6] = useState(null);
  const [roll4, setRoll4] = useState(null);

  function rollDice20() {
    setRoll20(Math.trunc(Math.random() * 20) + 1);
  }
  function rollDice12() {
    setRoll12(Math.trunc(Math.random() * 12) + 1);
  }

  function rollDice10() {
    setRoll10(Math.trunc(Math.random() * 10) + 1);
  }
  function rollDice8() {
    setRoll8(Math.trunc(Math.random() * 8) + 1);
  }
  function rollDice6() {
    setRoll6(Math.trunc(Math.random() * 6) + 1);
  }
  function rollDice4() {
    setRoll4(Math.trunc(Math.random() * 4) + 1);
  }
  // General function to roll a dice?
  // function rollDice(dieNumber) {
  //   const dice = Math.trunc(Math.random() * dieNumber) + 1;
  //   console.log(dice);
  // }

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Roll a Dice </Card.Title>
          <ListGroup variant="flush">
            <Button variant="primary mt-2" onClick={rollDice20}>
              Roll 1d20
            </Button>

            <div class="font-weight-bold">{roll20}</div>
            <Button variant="primary mt-2" onClick={rollDice12}>
              Roll 1d12{" "}
            </Button>
            <div class="font-weight-bold">{roll12}</div>

            <Button variant="primary  mt-2" onClick={rollDice10}>
              Roll 1d10
            </Button>
            <div class="font-weight-bold">{roll10}</div>

            <Button variant="primary  mt-2" onClick={rollDice8}>
              Roll 1d8
            </Button>
            <div class="font-weight-bold">{roll8}</div>

            <Button variant="primary  mt-2" onClick={rollDice6}>
              Roll 1d6
            </Button>
            <div class="font-weight-bold">{roll6}</div>

            <Button variant="primary mt-2" onClick={rollDice4}>
              Roll 1d4
            </Button>
            <div class="font-weight-bold">{roll4}</div>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Dice;
