import React from "react";

const Words = (props) => {
  return (
    <span className={props.shoWord || (props.gameLost && !props.ok) ? "red" : ""}>
      {props.ok ? props.value : props.gameLost ? <span>{props.value}</span> : "_"}
    </span>
  );
};

export default Words;