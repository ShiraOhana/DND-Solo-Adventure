import React from "react";

function Clue(props) {
  return (
    <div>
      Clue with a hidden part (can reveal if 1d20 over 15 ) {props.clue}
    </div>
  );
}

export default Clue;
