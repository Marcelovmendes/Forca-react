import React from "react";

const Words = (props) => {
  return (
    <span className={props.shoWord || (props.gameLost && !props.ok) ? "red" : ""}>
      {props.ok ? props.value : props.gameLost ? <span style={{ color: "red" }}>{props.value}</span> : "_"}
    </span>
  );
};

export default Words;