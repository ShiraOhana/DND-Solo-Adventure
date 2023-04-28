// import React from "react";

// function Clue(props) {
//   return (
//     <div>
//       Clue with a hidden part (can reveal if 1d20 over 15 ) {props.clue}
//     </div>
//   );
// }

// export default Clue;
import React, { useState } from "react";
import "../Style/App.css";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 45) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? " - open clue -" : " close clue"}
      </span>
    </p>
  );
};

const Content = () => {
  return (
    <div className="container">
      <h2>
        <ReadMore>If you roll above 15, you can open the clue:</ReadMore>
      </h2>
    </div>
  );
};

export default Content;
