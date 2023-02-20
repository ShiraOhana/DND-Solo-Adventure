import React, { useState } from "react";

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
      <h1>Roll a Dice</h1>
      <button onClick={rollDice20}>Roll 1d20</button>
      <div>{roll20}</div>
      <button onClick={rollDice12}>Roll 1d12 </button>
      <div>{roll12}</div>

      <button onClick={rollDice10}>Roll 1d10</button>
      <div>{roll10}</div>

      <button onClick={rollDice8}>Roll 1d8</button>
      <div>{roll8}</div>

      <button onClick={rollDice6}>Roll 1d6</button>
      <div>{roll6}</div>

      <button onClick={rollDice4}>Roll 1d4</button>
      <div>{roll4}</div>
    </div>
  );
}

export default Dice;
