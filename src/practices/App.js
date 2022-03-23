import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  let [count, setCount] = useState(0);

  // useEffect(() => {
  //   // alert("reload");
  //   setCount
  // });
  const increment = () => {
    setCount(++count);
  };
  const decrement = () => {
    setCount(--count);
  };
  return (
    <div>
      <button onClick={decrement}>-</button>
      <p>count:{count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default App;
