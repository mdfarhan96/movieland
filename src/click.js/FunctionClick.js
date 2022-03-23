import React from "react";

const FunctionClick = () => {
  function clickHandler() {
    console.log("you clicked");
  }
  return (
    <div>
      <button onClick={clickHandler}>click</button>
    </div>
  );
};
export default FunctionClick;
