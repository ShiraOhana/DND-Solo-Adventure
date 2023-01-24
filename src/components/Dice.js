import React from "react";

function Dice() {
  let btnRoll;
  // Rolling the dice functionality
  // btnRoll.EventListener('click', function () {
  function rollDice20() {
    const dice = Math.trunc(Math.random() * 20) + 1;
    console.log(dice);
  }
  function rollDice12() {
    const dice = Math.trunc(Math.random() * 12) + 1;
    console.log(dice);
  }
  function rollDice10() {
    const dice = Math.trunc(Math.random() * 10) + 1;
    console.log(dice);
  }
  function rollDice8() {
    const dice = Math.trunc(Math.random() * 8) + 1;
    console.log(dice);
  }
  function rollDice6() {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
  }
  function rollDice4() {
    const dice = Math.trunc(Math.random() * 4) + 1;
    console.log(dice);
  }
  // General function to roll a dice
  function rollDice(dieNumber) {
    const dice = Math.trunc(Math.random() * dieNumber) + 1;
    console.log(dice);
  }
  rollDice10();
  rollDice12();
  rollDice20();
  rollDice8();
  rollDice6();
  rollDice4();
  return (
    <div>
      <h1>Roll a Dice</h1>
    </div>
  );
}

export default Dice;
