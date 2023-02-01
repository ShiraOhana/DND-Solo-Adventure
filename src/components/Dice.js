import React, { useState } from "react";

function Dice() {
  // Rolling the dice functionality
  // btnRoll.EventListener('click', function () {
  const [roll, setRoll] = useState(null);

  function rollDice20() {
    let dice = Math.trunc(Math.random() * 20) + 1;
    dice = roll;
  }
  function rollDice12() {
    const dice = Math.trunc(Math.random() * 12) + 1;
    console.log(dice);
  }
  function rollDice10() {
    let dice = Math.trunc(Math.random() * 10) + 1;
    console.log(dice);
    dice = roll;
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
  // function rollDice(dieNumber) {
  //   const dice = Math.trunc(Math.random() * dieNumber) + 1;
  //   console.log(dice);
  // }

  rollDice10();
  rollDice12();
  rollDice20();
  rollDice8();
  rollDice6();
  rollDice4();
  return (
    <div>
      <h1>Roll a Dice</h1>
      <button onClick={rollDice12}>Roll 1d12 </button>
      <p>{roll}</p>
      <button>Roll 1d20</button>
      <button>Roll 1d10</button>
      <button>Roll 1d8</button>
      <button>Roll 1d6</button>
      <button>Roll 1d4</button>
    </div>
  );
}

export default Dice;
