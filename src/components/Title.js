import React from "react";
function Title(props) {
  return (
    <h3 style={{ fontSize: "30px", color: "green", margin: "20px" }}>
      Location: {props.location}
    </h3>
  );
}

export default Title;
